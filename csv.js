const fs = require('fs');
const { Pool } = require('pg');
const csv = require('csv-parser');

const pool = new Pool({
  user: 'mangaldeep_uat_admin',
  host: 'pgsql-mab-mangaldeep-uat-centralindia01.postgres.database.azure.com',
  database: 'mangaldeep_uat',
  password: 'M@ngaldeep42!',
  port: 5432,
  ssl: true,
});

const batchSize = 100; // Adjust batch size as needed
let batch = [];

async function insertBatch() {
  if (batch.length === 0) return;

  const query = `
    INSERT INTO public."CarouselGroupingDuplicate" 
    (m_id, carousel_grouping_module_uuid, name, url, duration, category, carousel_grouping_module_id, locales, short_desc, description, image_url, image_name, language) 
    VALUES ${batch.map((_, i) => `(${batch[i].map((_, j) => `$${i * batch[0].length + j + 1}`).join(', ')})`).join(', ')}
    ON CONFLICT (m_id) DO NOTHING
  `;

  const values = batch.flat();
  console.log(values)

  try {
    await pool.query(query, values);
  } catch (err) {
    console.error('Error inserting batch data', err);
  } finally {
    batch = [];
  }
}

async function main() {
  try {
    const path = 'C:\\Users\\admin\\Desktop\\node-graphql\\Carousel  Gujarati and Bengali - Bengali.csv';
    console.log('Reading file from:', path);

    fs.createReadStream(path)
      .pipe(csv())
      .on('data', (row) => {
        // Handle any newlines in the CSV data
        Object.keys(row).forEach((key) => {
          if (row[key] && row[key].includes('\n')) {
            row[key] = `"${row[key]}"`;
          }
        });
// console.log(row)
        const values = [
          row.m_id,
          row.carousel_grouping_module_uuid,
          row.name,
          row.url,
          row.duration,
          row.category,
          row.carousel_grouping_module_id,
          row.locales,
          row.short_description,
          row.description,
          row.image_url,
          row.image_name,
          row.language,
        ];

        batch.push(values);

        if (batch.length >= batchSize) {
          insertBatch().catch(console.error);
        }
      })
      .on('end', async () => {
        console.log('CSV file successfully processed');
        await insertBatch(); // Insert any remaining rows
        await pool.end();
      })
      .on('error', (err) => {
        console.error('Error reading file:', err);
      });
  } catch (err) {
    console.error('Error in main function:', err);
  }
}

main().catch(console.error);
