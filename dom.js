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




const html = `<table class=MsoTableGrid border=0 cellspacing=0 style=background-color: rgb(255, 255, 255); font-size: 15.4px; border: none;>
<tbody>
   <tr>
      <td width=638 valign=top style=width: 478.8pt; padding: 0pt 5.4pt; border-width: initial; border-style: none; border-color: initial;>
      <p class=MsoNormal style=margin-bottom: 0pt;>
         <font face=arial, helvetica, sans-serif style=font-size: 14px;>दशहरा भगवान राम&nbsp;के राक्षस रावण को हराने के बाद वापस घर आने की खुशी का प्रतीक है। भव्य समारोह के अलावा, कई स्वादिष्ट व्यंजनों को तैयार किया जाता है&nbsp;क्योंकि लोग एक-दूसरे को बधाई देते हैं।
         <o:p></o:p>
         </font>
      </p>
      <p class=MsoNormal style=margin-bottom: 0pt;>
         <o:p><font face=arial, helvetica, sans-serif style=font-size: 14px;>&nbsp;</font></o:p>
      </p>
      </td>
   </tr>
   <tr>
      <td width=638 valign=top style=width: 478.8pt; padding: 0pt 5.4pt; border-width: initial; border-style: none; border-color: initial;>
      <p class=MsoNormal style=margin-bottom: 0pt;>
         <font face=arial, helvetica, sans-serif style=font-size: 14px;>बेसन लड्डू हर घर की मिठाई की सूची का एक अनिवार्य हिस्सा है। बेसन, घी और चीनी के साथ बनाया गया, यह लड्डू युवा और बूढों दोनों द्वारा समान रूप से पसंद किया जाता है।
         <o:p></o:p>
         </font>
      </p>
      </td>
   </tr>
   <tr>
      <td width=638 valign=top style=width: 478.8pt; padding: 0pt 5.4pt; border-width: initial; border-style: none; border-color: initial;>
      <p class=MsoNormal style=margin-bottom: 0pt;>
         <o:p><font face=arial, helvetica, sans-serif style=font-size: 14px;>&nbsp;</font></o:p>
      </p>
      </td>
   </tr>
   <tr>
      <td width=638 valign=top style=width: 478.8pt; padding: 0pt 5.4pt; border-width: initial; border-style: none; border-color: initial;>
      <p class=MsoNormal style=margin-bottom: 0pt;>
         <font face=arial, helvetica, sans-serif style=font-size: 14px;>इस एपिसोड में हम बेसन के लड्डू बनाना सिखने जा रहे हैं।
         <o:p></o:p>
         </font>
      </p>
      <p class=MsoNormal style=margin-bottom: 0pt;><font face=arial, helvetica, sans-serif style=font-size: 14px;><br></font></p>
      <p class=MsoNormal>
         <font face=arial, helvetica, sans-serif style=font-size: 14px;><b>तैयारी का समय</b>&nbsp;: 5मिनट
         <o:p></o:p>
         </font>
      </p>
      <p class=MsoNormal>
         <font face=arial, helvetica, sans-serif style=font-size: 14px;><b>पकाने का समय</b>&nbsp;: 18मिनट
         <o:p></o:p>
         </font>
      </p>
      <p class=MsoNormal><font face=arial, helvetica, sans-serif style=font-size: 14px;><b>कुल समय</b>&nbsp;: 23मिनट</font></p>
      <p class=MsoNormal>
         <font face=arial, helvetica, sans-serif style=font-size: 14px;><b><u>सामग्री&nbsp;(4 व्यक्तियों के लिए)</u></b>
         <o:p></o:p>
         </font>
      </p>
      <p class=MsoNormal></p>
      <ul>
         <li><font face=arial, helvetica, sans-serif style=font-size: 14px;>बेसन : 1कप</font></li>
         <li><font face=arial, helvetica, sans-serif style=font-size: 14px;>पिसी हुई चीनी : 1 1/2कप</font></li>
         <li><font face=arial, helvetica, sans-serif style=font-size: 14px;>इलायची&nbsp;पाउडर&nbsp;: 1 बड़ा चम्मच</font></li>
         <li><font face=arial, helvetica, sans-serif style=font-size: 14px;>किशमिश : 1/2 कप</font></li>
         <li><font face=arial, helvetica, sans-serif style=font-size: 14px;><span style=background: transparent; color: rgb(34, 34, 34);>&nbsp;</span><span style=background: transparent; color: rgb(34, 34, 34);>गाय का शुद्ध घी</span><span style=background: transparent; color: rgb(34, 34, 34);>;&nbsp;</span><span style=background: transparent; color: rgb(34, 34, 34);>आशिरवाद स्वस्ति&nbsp;</span>: 1 कप</font></li>
      </ul>
      <b style=font-size: 14px; font-family: arial, helvetica, sans-serif; background-color: transparent;><u>विधि</u></b><br>
      <ul>
         <li><font face=arial, helvetica, sans-serif style=font-size: 14px;>सूखे बेसन को भूनते रहें।</font></li>
         <li><font face=arial, helvetica, sans-serif style=font-size: 14px;>लगातार धीरे-धीरे चलाते&nbsp;रहें।</font></li>
         <li><font face=arial, helvetica, sans-serif style=font-size: 14px;>घी&nbsp;को&nbsp;पिघलाएं।</font></li>
         <li><font face=arial, helvetica, sans-serif style=font-size: 14px;>पिघला&nbsp;हुआ&nbsp;घी&nbsp;डालें।</font></li>
         <li><font face=arial, helvetica, sans-serif style=font-size: 14px;>चूल्हे से पैन को हटा दें।</font></li>
         <li><font face=arial, helvetica, sans-serif style=font-size: 14px;>चीनी,&nbsp;इलायची, किशमिश और ड्राई फ्रूट डालें।</font></li>
         <li><font face=arial, helvetica, sans-serif style=font-size: 14px;>छोटे-छोटे लड्डू बना लें।</font></li>
         <li><font face=arial, helvetica, sans-serif style=font-size: 14px;><span style=background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;>एक बॉउल में रखकर भगवान को भोग लगाए</span>।</font></li>
         <li><font face=arial, helvetica, sans-serif style=font-size: 14px;>लड्डू के&nbsp;<span style=background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;>नैवेद्यम को अपने परिवार के सदस्यों के साथ साझा करें।</span></font></li>
      </ul>
      <p></p>
      <p class=MsoNormal style=margin-bottom: 0pt;>
         <font face=arial, helvetica, sans-serif style=font-size: 14px;>
         <o:p></o:p>
         </font>
      </p>
      </td>
   </tr>
</tbody>
</table>`;

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
