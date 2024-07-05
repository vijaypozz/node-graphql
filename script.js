// const { Client } = require('pg');
// // const { pipeline } = require('stream');
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// // const { promisify } = require('util');

// // const pipelineAsync = promisify(pipeline);

// const client = new Client({
//   user: 'mangaldeep_uat_admin',
//   host: 'pgsql-mab-mangaldeep-uat-centralindia01.postgres.database.azure.com',
//   database: 'mangaldeep_uat',
//   password: 'M@ngaldeep42!',
//   port: 5432,
//   ssl:true
// });

// // POSTGRES_HOST=pgsql-mab-mangaldeep-uat-centralindia01.postgres.database.azure.com
// // POSTGRES_USER=mangaldeep_uat_admin
// // POSTGRES_DBPORT=5432
// // POSTGRES_PASSWORD=M@ngaldeep42!
// // POSTGRES_DBNAME= mangaldeep_uat
// // POSTGRES_SSL=true

// // async function checkConnection() {
// //     try {
// //       await client.connect();
// //       console.log('Connected to the database successfully.');
      
// //       // You can perform database operations here
      
// //     } catch (error) {
// //       console.error('Failed to connect to the database:', error.stack);
// //     } finally {
// //       await client.end();
// //     }
// //   }
  
// //   checkConnection();

// async function fetchDataAndWriteCSV() {
//   try {
//     await client.connect();

//     const query = new Client.Query(`
//     WITH split_locales AS (
//       SELECT 
//         id,
//         chalisa_uuid,
//         name,
//         image_url,
//         image_name,
//         regexp_split_to_table(locales, ', ') AS local
//       FROM "Chalisas"  where id = 3
//       LIMIT 100
//     ),
//     split_parts AS (
//       SELECT 
//         id,
//         chalisa_uuid,
//         name,
//         image_url,
//         image_name,
//         split_part(local, '-', 1) AS country_code,
//         split_part(split_part(local, '-', 2), '-', 1) AS state_code,
//         split_part(split_part(local, '-', 3), '-', 1) AS language_code
//       FROM split_locales
//     )
//     SELECT 
//       s.id,
//       s.chalisa_uuid,
//       s.name,
//       s.image_url,
//       s.image_name,
//       c.name AS country,
//       st.name AS state,
//       l.name AS language
//     FROM split_parts s
//     JOIN "Country" c ON s.country_code = c.country_code
//     JOIN "Locations" st ON s.state_code = st.location_code
//     JOIN "Languages" l ON s.language_code = l.language_code;
    
//     `);

//     const csvWriter = createCsvWriter({
//       path: 'C:\Users\admin\Downloads\output.csv',
//       header: [
//         {id: 'id', title: 'ID'},
//         {id: 'name', title: 'Name'},
//         // {id: 'locales', title: 'Locales'},
//         // {id: 'country', title: 'Country'},
//       ]
//     });

//     const csvStream = csvWriter.createObjectCsvStringifier({
//       header: [
//         {id: 'id', title: 'ID'},
//         {id: 'name', title: 'Name'},
//         // {id: 'locales', title: 'Locales'},
//         // {id: 'country', title: 'Country'},
//       ]
//     }).createWriteStream();

//     await pipelineAsync(
//       client.query(query),
//       csvStream
//     );

//     console.log('CSV file was written successfully');
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.end();
//   }
// }

// fetchDataAndWriteCSV();

// ============================================================================

// const { Client } = require('pg');
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// const client = new Client({
//   user: 'mangaldeep_uat_admin',
//   host: 'pgsql-mab-mangaldeep-uat-centralindia01.postgres.database.azure.com',
//   database: 'mangaldeep_uat',
//   password: 'M@ngaldeep42!',
//   port: 5432,
//   ssl: true
// });

// async function fetchDataAndWriteCSV() {
//   try {
//     await client.connect();
    
//     const query = `
//     WITH split_locales AS (
//       SELECT 
//         id,
//       editorial_uuid,
//       title,
//       category_id,
//       locales,
//       image_url,
//       deity_name,
//         regexp_split_to_table(locales, ', ') AS local
//       FROM "Editorials"  
      
//     ),
//     split_parts AS (
//       SELECT 
//         id,
//       editorial_uuid,
//       title,
//       category_id,
//       locales,
//       image_url,
//       deity_name,
//         split_part(local, '-', 1) AS country_code,
//         split_part(split_part(local, '-', 2), '-', 1) AS state_code,
//         split_part(split_part(local, '-', 3), '-', 1) AS language_code
//       FROM split_locales
//     )
//     SELECT 
//         s.id,
//       s.editorial_uuid,
//       s.title,
//       s.category_id,
//       s.locales,
//       s.image_url,
//       s.deity_name,
//       c.name AS country,
//       st.name AS state,
//       l.name AS language
//     FROM split_parts s
//     JOIN "Country" c ON s.country_code = c.country_code
//     JOIN "Locations" st ON s.state_code = st.location_code
//     JOIN "Languages" l ON s.language_code = l.language_code;
//         `;

//     const result = await client.query(query);
    
//     const csvWriter = createCsvWriter({
//       path: 'C:\\Users\\admin\\Downloads\\output1.csv',
//       header: [
//         { id: 'id', title: 'ID' },
//         { id: 'editorial_uuid', title: 'UUID' },
//         { id: 'title', title: 'Name' },
//         { id: 'category_id', title: 'category_id' },
//         { id: 'image_url', title: 'Image URL' },
//         { id: 'deity_name', title: 'Image Name' },
//         { id: 'country', title: 'Country' },
//         { id: 'state', title: 'State' },
//         { id: 'language', title: 'Language' }
//       ]
//     });

//     await csvWriter.writeRecords(result.rows);
    
//     console.log('CSV file was written successfully');
//   } catch (err) {
//     console.error('Error while writing CSV:', err);
//   } finally {
//     await client.end();
//   }
// }

// fetchDataAndWriteCSV();


// =================================================================

const { Client } = require('pg');
const { createWriteStream } = require('fs');
const { format } = require('fast-csv');
const QueryStream = require('pg-query-stream');

const client = new Client({
  user: 'mangaldeep_uat_admin',
  host: 'pgsql-mab-mangaldeep-uat-centralindia01.postgres.database.azure.com',
  database: 'mangaldeep_uat',
  password: 'M@ngaldeep42!',
  port: 5432,
  ssl: true
});

async function fetchDataAndWriteCSV() {
  try {
    await client.connect();

    const queryText = `
    WITH split_locales AS (
      SELECT 
        p.id, 
        p.temple_architecture_uuid, 
        p.name,
        p.image_url,
        p.deity_name,
        p.url,
        regexp_split_to_table(p.locales, ', ') AS local 
      FROM 
        "TempleArchitecture" p  
    ), 
    split_parts AS (
      SELECT 
        id, 
        temple_architecture_uuid, 
        name,  
        image_url, 
        deity_name,
        url,
        split_part(local, '-', 1) AS country_code, 
        split_part(local, '-', 2) AS state_code, 
        split_part(local, '-', 3) AS language_code 
      FROM 
        split_locales
    ) 
    SELECT 
      s.id,
      s.name AS title, 
      s.url AS url,
      s.image_url AS image_link, 
      s.temple_architecture_uuid AS uuid, 
      s.id AS content_id, 
      s.deity_name AS god_name,
      '0' AS category_id,
      c.name AS country, 
      st.name AS state, 
      l.name AS language,
      'templeArchitecture' AS category,
      'temples' AS subcategory,
      'watch' as type
    FROM 
      split_parts s 
      JOIN "Country" c ON s.country_code = c.country_code 
      JOIN "Locations" st ON s.state_code = st.location_code 
      JOIN "Languages" l ON s.language_code = l.language_code;
    `;
    
    


    // const csvHeaders = [
    //   { id: 'title', title: 'Name' },
    //   { id: 'image_url', title: 'image_url' },
    //   { id: 'image_name', title: 'god_name' },
    //   { id: 'id', title: 'content_id' },
    //   { id: 'editorial_uuid', title: 'uuid' },
    //   { id: 'country', title: 'Country' },
    //   { id: 'state', title: 'State' },
    //   { id: 'language', title: 'Language' }
    // ];

    const csvStream = format({ headers: true  });
    const writeStream = createWriteStream('C:\\Users\\admin\\Downloads\\templeArchitecture.csv');

    // Pipe the CSV stream to the file
    csvStream.pipe(writeStream);

    const queryStream = new QueryStream(queryText);
    const stream = client.query(queryStream);

    stream.on('data', row => {
      csvStream.write(row);
    });

    stream.on('end', () => {
      csvStream.end();
      console.log('CSV file was written successfully');
      client.end();
    });

    stream.on('error', (err) => {
      console.error('Stream error:', err);
      client.end();
    });
  } catch (err) {
    console.error('Error while writing CSV:', err);
    await client.end();
  }
}

fetchDataAndWriteCSV();

