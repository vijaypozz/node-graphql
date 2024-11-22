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

// const { Client } = require('pg');
// const { createWriteStream } = require('fs');
// const { format } = require('fast-csv');
// const QueryStream = require('pg-query-stream');

// // const client = new Client({
// //   user: 'mangaldeep_uat_admin',
// //   host: 'pgsql-mab-mangaldeep-uat-centralindia01.postgres.database.azure.com',
// //   database: 'mangaldeep_uat',
// //   password: 'M@ngaldeep42!',
// //   port: 5432,
// //   ssl: true
// // });
// // POSTGRES_HOST=pgsql-mab-mangaldeep-prd-centralindia01.postgres.database.azure.com
// // POSTGRES_USER=mangaldeep_prd_admin
// // POSTGRES_DBPORT=5432
// // POSTGRES_PASSWORD=jC3\E~88=KN@
// // POSTGRES_DBNAME= mangaldeep_prod
// // POSTGRES_SSL=true

// const client = new Client({
//   user: 'mangaldeep_prd_admin',
//   host: 'pgsql-mab-mangaldeep-prd-centralindia01.postgres.database.azure.com',
//   database: 'mangaldeep_prod',
//   password: 'jC3\E~88=KN@',
//   port: 5432,
//   ssl: true
// });

// async function fetchDataAndWriteCSV() {
//   try {
//     await client.connect();

//     const queryText = `
//     WITH split_locales AS (
//       SELECT 
//         p.id, 
//         p.devotional_song_uuid, 
//         p.name,
//         p.image_url,
//         p.image_name,
//         p.audio_url,
//         regexp_split_to_table(p.locales, ', ') AS local 
//       FROM 
//         "DevotionalSongs" p  
//     ), 
//     split_parts AS (
//       SELECT 
//         id, 
//         devotional_song_uuid, 
//         name,  
//         image_url, 
//         image_name,
//         audio_url,
//         split_part(local, '-', 1) AS country_code, 
//         split_part(local, '-', 2) AS state_code, 
//         split_part(local, '-', 3) AS language_code 
//       FROM 
//         split_locales
//     ) 
//     SELECT 
//       s.id,
//       s.name AS title, 
//       s.audio_url AS url,
//       s.image_url AS image_link, 
//       s.devotional_song_uuid AS uuid, 
//       s.id AS content_id, 
//       s.image_name AS god_name,
//       c.name AS country, 
//       st.name AS state, 
//       l.name AS language,
//       'devotionalSong' AS category,
//       'songs' AS subcategory,
//       'listen' as type
//     FROM 
//       split_parts s 
//       JOIN "Country" c ON s.country_code = c.country_code 
//       JOIN "Locations" st ON s.state_code = st.location_code 
//       JOIN "Languages" l ON s.language_code = l.language_code;
//     `;
    
    


//     // const csvHeaders = [
//     //   { id: 'title', title: 'Name' },
//     //   { id: 'image_url', title: 'image_url' },
//     //   { id: 'image_name', title: 'god_name' },
//     //   { id: 'id', title: 'content_id' },
//     //   { id: 'editorial_uuid', title: 'uuid' },
//     //   { id: 'country', title: 'Country' },
//     //   { id: 'state', title: 'State' },
//     //   { id: 'language', title: 'Language' }
//     // ];

//     const csvStream = format({ headers: true  });
//     const writeStream = createWriteStream('C:\\Users\\admin\\Downloads\\devotionalSongs.csv');

//     // Pipe the CSV stream to the file
//     csvStream.pipe(writeStream);

//     const queryStream = new QueryStream(queryText);
//     const stream = client.query(queryStream);

//     stream.on('data', row => {
//       csvStream.write(row);
//     });

//     stream.on('end', () => {
//       csvStream.end();
//       console.log('CSV file was written successfully');
//       client.end();
//     });

//     stream.on('error', (err) => {
//       console.error('Stream error:', err);
//       client.end();
//     });
//   } catch (err) {
//     console.error('Error while writing CSV:', err);
//     await client.end();
//   }
// }

// fetchDataAndWriteCSV();

// ======================================================================================================================
const POSTGRES_HOST = 'pgsql-mab-mangaldeep-prd-centralindia01.postgres.database.azure.com';
const POSTGRES_USER = 'mangaldeep_prd_admin';
const POSTGRES_DBPORT = 5432;
const POSTGRES_PASSWORD = 'jC3\\E~88=KN@';
const POSTGRES_DBNAME = 'mangaldeep_prod';
const POSTGRES_SSL = true;




const { Client } = require('pg');
const { format } = require('@fast-csv/format');
const { createWriteStream } = require('fs');
const QueryStream = require('pg-query-stream');

const client = new Client({
  user:POSTGRES_USER,
  host:POSTGRES_HOST,
  database:POSTGRES_DBNAME,
  password:POSTGRES_PASSWORD,
  port:POSTGRES_DBPORT,
  ssl: POSTGRES_SSL
});

async function fetchDataAndWriteCSV() {
  try {
    await client.connect();
    console.log('Connected to the database');

    const queryText = `
    WITH split_locales AS (
      SELECT 
        p.id, 
        p.ashtothra_uuid, 
        p.image_url,
        p.image_name,
        p.name,
        regexp_split_to_table(p.locales, ', ') AS local 
      FROM 
        "Ashtothras" p  

    ), 
    split_parts AS (
      SELECT 
        id, 
        ashtothra_uuid, 
        image_url, 
        image_name,
        name,
        split_part(local, '-', 1) AS country_code, 
        split_part(local, '-', 2) AS state_code, 
        split_part(local, '-', 3) AS language_code 
      FROM 
        split_locales
    ) 
    SELECT 
      sp.id,
      sp.name AS title, 
      'dummy' AS url,
      sp.image_url AS image_link, 
      sp.ashtothra_uuid AS uuid, 
      sp.id AS content_id, 
      sp.image_name AS god_name,
      '0' AS category_id,
      c.name AS country, 
      st.name AS state, 
      l.name AS language,
      'chalisas' AS category,
      'NA' AS subcategory,
      'read' AS type
    FROM 
      split_parts sp
      JOIN "Country" c ON sp.country_code = c.country_code 
      JOIN "Locations" st ON sp.state_code = st.location_code 
      JOIN "Languages" l ON sp.language_code = l.language_code;
`;




    const csvStream = format({ headers: true });
    const writeStream = createWriteStream('C:\\Users\\admin\\Downloads\\ashtothras.csv');

    // Pipe the CSV stream to the file
    csvStream.pipe(writeStream);

    const queryStream = new QueryStream(queryText, [], { batchSize: 1000 });
    const stream = client.query(queryStream);

    let rowCount = 0;

    stream.on('data', (row) => {
      rowCount++;
      if (rowCount % 1000 === 0) {
        console.log(`Processed ${rowCount} rows`);
      }
      csvStream.write(row);
    });

    stream.on('end', () => {
      csvStream.end();
      console.log(`CSV file was written successfully with ${rowCount} rows`);
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

