const htmlToText = require('html-to-text');

// POSTGRES_HOST=pgsql-mab-mangaldeep-uat-centralindia01.postgres.database.azure.com
// POSTGRES_USER=mangaldeep_uat_admin
// POSTGRES_DBPORT=5432
// POSTGRES_PASSWORD=M@ngaldeep42!
// POSTGRES_DBNAME=mangaldeep_uat
// POSTGRES_SSL=true

// const { Client } = require('pg');


// const client = new Client({
//     user: 'your_username',
//     host: 'your_host',
//     database: 'your_database',
//     password: 'your_password',
//     port: 5432,
//   });

// PostgreSQL connection configuration
// const client = new Client({
//     user: 'mangaldeep_uat_admin',
//     host: 'pgsql-mab-mangaldeep-uat-centralindia01.postgres.database.azure.com',
//     database: 'mangaldeep_uat',
//     password: 'M@ngaldeep42!',
//     port: 5432,
//     ssl: true
// });



function convertHtml(originalDescription) {
    if (!originalDescription) return '';

    let processedDescription = htmlToText.convert(originalDescription, {
        wordwrap: false,
        selectors: [
            { selector: 'h2', format: 'heading' },
            { selector: 'div', format: 'paragraph' },
            { selector: 'span', format: 'paragraph' },
            { selector: 'a', options: { ignoreHref: true } }
        ]
    });

    processedDescription = processedDescription.replace(/\n\n+/g, '\n\n');

    processedDescription = processedDescription.replace(/Mangaldeep/, '<a href="https://s6sqq.app.goo.gl/5Q9K">Mangaldeep</a>');

    // Wrap paragraphs with <p> tags
    // processedDescription = processedDescription.split('\n\n').map(para => `<p>${para.trim()}</p>`).join('\n');

    
    // Wrap paragraphs with <p> tags, removing empty <p> tags
    processedDescription = processedDescription.split('\n\n').map(para => {
        // Trim each paragraph and ensure no quotes are left around paragraphs
        const trimmedPara = para.trim().replace(/^"(.*)"$/, '$1');
        return trimmedPara ? `<p>${trimmedPara}</p>` : '';
    }).filter(para => para.trim() !== '<p></p>').join('\n');
    // Add heading tag for "Krishna Avatar"
    processedDescription = processedDescription.replace(/<h2>(.*?)<\/h2>/, '<h1>$1</h1>');

    return processedDescription;
}




const html = `<div><span style=font-size: 15.4px;>Nādabhṛṅga is very pleased to bring to you a sparkling, scintillating recording of Sri Palghat K V Narayanaswamy, performed sometime in 1961 for All India Radio, Bangalore.&nbsp; Sri KVN's silken smooth voice glides and soars like Shelley's skylark.</span></div><div><span style=font-size: 15.4px;><br></span></div><div><span style=font-size: 15.4px;>Higher still and higher</span></div><div><span style=font-size: 15.4px;>&nbsp; &nbsp; &nbsp; &nbsp; From the earth thou springest,</span></div><div><span style=font-size: 15.4px;>&nbsp; &nbsp; &nbsp; Like a cloud of fire;</span></div><div><span style=font-size: 15.4px;>&nbsp; &nbsp; &nbsp; &nbsp; The blue deep thou wingest,</span></div><div><span style=font-size: 15.4px;>And singing still dost soar, and soaring ever singest.</span></div><div><span style=font-size: 15.4px;><br></span></div><div><span style=font-size: 15.4px;>These lines very aptly describe what one feels on listening to this recording. The pristine recording quality (except in certain sections) makes it all the more enjoyable. We are very glad to share this recording in connection with the one year anniversary of starting this channel. The programme details are:</span></div><div><span style=font-size: 15.4px;><br></span></div><div><span style=font-size: 15.4px;>Palghat K V Narayanaswamy</span></div><div><span style=font-size: 15.4px;>V Thyagarajan - Violin</span></div><div><span style=font-size: 15.4px;>Palghat R Raghu - Mridangam</span></div><div><span style=font-size: 15.4px;><br></span></div><div><span style=font-size: 15.4px;>1. Śrī Cāmuṇḍeśvarī - Kannaḍā - Ādi - Mahārāja Jayacāmarāja Oḍeyār [00:00]</span></div><div><span style=font-size: 15.4px;>2. Tani Āvartana [05:23]</span></div><div><span style=font-size: 15.4px;>3. Palukavadēmirā - Dēvamanōhari - Ādi - Mysūrū Vāsudevācār [09:58]</span></div><div><span style=font-size: 15.4px;>4. Brōcēvārevarurā - Khamās - Ādi - Mysūrū Vāsudevācār [15:57]</span></div>`;

console.log(convertHtml(html));



    // async function updateDescriptions() {
    //     try {
    //         await client.connect();
    
    //         // Fetch rows containing descriptions to be processed
    //         const res = await client.query('SELECT id, description FROM your_table_name');
    
    //         const updateQueries = res.rows.map(row => {
    //             if (!row.id || !row.description) return null;
    //             const processedDescription = convertHtml(row.description);
    //             return client.query('UPDATE your_table_name SET description = $1 WHERE id = $2', [processedDescription, row.id]);
    //         }).filter(query => query !== null);
    
    //         // Execute all update queries
    //         await Promise.all(updateQueries);
    //     } catch (err) {
    //         console.error('Error processing descriptions:', err.stack);
    //     } finally {
    //         await client.end();
    //     }
    // }


    // updateDescriptions();
