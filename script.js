const { Client } = require('pg');
// const { pipeline } = require('stream');
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const { promisify } = require('util');

// const pipelineAsync = promisify(pipeline);

const client = new Client({
  user: 'your_db_user',
  host: 'your_db_host',
  database: 'your_db_name',
  password: 'your_db_password',
  port: 5432,
});

async function checkConnection() {
    try {
      await client.connect();
      console.log('Connected to the database successfully.');
      
      // You can perform database operations here
      
    } catch (error) {
      console.error('Failed to connect to the database:', error.stack);
    } finally {
      await client.end();
    }
  }
  
  checkConnection();

// async function fetchDataAndWriteCSV() {
//   try {
//     await client.connect();

//     const query = new Client.Query(`
//       WITH split_locales AS (
//         SELECT 
//           id,
//           name,
//           regexp_split_to_table(locales, ', ') AS local
//         FROM "CarouselGrouping"
//       ),
//       split_parts AS (
//         SELECT 
//           id,
//           name,
//           split_part(local, '-', 1) AS country_code,
//           split_part(split_part(local, '-', 2), '-', 1) AS state_code,
//           split_part(split_part(local, '-', 3), '-', 1) AS language_code
//         FROM split_locales
//       )
//       SELECT 
//         s.id,
//         s.name,
//         s.local AS locales,
//         c.name AS country
//       FROM split_parts s
//       JOIN "Country" c ON s.country_code = c.country_code;
//     `);

//     const csvWriter = createCsvWriter({
//       path: 'output.csv',
//       header: [
//         {id: 'id', title: 'ID'},
//         {id: 'name', title: 'Name'},
//         {id: 'locales', title: 'Locales'},
//         {id: 'country', title: 'Country'},
//       ]
//     });

//     const csvStream = csvWriter.createObjectCsvStringifier({
//       header: [
//         {id: 'id', title: 'ID'},
//         {id: 'name', title: 'Name'},
//         {id: 'locales', title: 'Locales'},
//         {id: 'country', title: 'Country'},
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
