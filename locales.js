// const locales = [
//   "IND-AN-BGL",
//   "IND-AN-ENG",
//   "IND-AN-GJR",
//   "IND-AN-HND",
//   "IND-AN-KAN",
//   "IND-AN-MRT",
//   "IND-AN-TML",
//   "IND-AN-TEL",
//   "IND-AP-BGL",
//   "IND-AP-ENG",
//   "IND-AP-GJR",
//   "IND-AP-HND",
//   "IND-AP-KAN",
//   "IND-AP-MRT",
//   "IND-AP-TML",
//   "IND-AP-TEL",
//   "IND-AR-BGL",
//   "IND-AR-ENG",
//   "IND-AR-GJR",
//   "IND-AR-HND",
//   "IND-AR-KAN",
//   "IND-AR-MRT",
//   "IND-AR-TML",
//   "IND-AR-TEL",
//   "IND-AS-BGL",
//   "IND-AS-ENG",
//   "IND-AS-GJR",
//   "IND-AS-HND",
//   "IND-AS-KAN",
//   "IND-AS-MRT",
//   "IND-AS-TML",
//   "IND-AS-TEL",
//   "IND-BR-BGL",
//   "IND-BR-ENG",
//   "IND-BR-GJR",
//   "IND-BR-HND",
//   "IND-BR-KAN",
//   "IND-BR-MRT",
//   "IND-BR-TML",
//   "IND-BR-TEL",
//   "IND-CH-BGL",
//   "IND-CH-ENG",
//   "IND-CH-GJR",
//   "IND-CH-HND",
//   "IND-CH-KAN",
//   "IND-CH-MRT",
//   "IND-CH-TML",
//   "IND-CH-TEL",
//   "IND-CG-BGL",
//   "IND-CG-ENG",
//   "IND-CG-GJR",
//   "IND-CG-HND",
//   "IND-CG-KAN",
//   "IND-CG-MRT",
//   "IND-CG-TML",
//   "IND-CG-TEL",
//   "IND-DN-BGL",
//   "IND-DN-ENG",
//   "IND-DN-GJR",
//   "IND-DN-HND",
//   "IND-DN-KAN",
//   "IND-DN-MRT",
//   "IND-DN-TML",
//   "IND-DN-TEL",
//   "IND-DD-BGL",
//   "IND-DD-ENG",
//   "IND-DD-GJR",
//   "IND-DD-HND",
//   "IND-DD-KAN",
//   "IND-DD-MRT",
//   "IND-DD-TML",
//   "IND-DD-TEL",
//   "IND-DL-BGL",
//   "IND-DL-ENG",
//   "IND-DL-GJR",
//   "IND-DL-HND",
//   "IND-DL-KAN",
//   "IND-DL-MRT",
//   "IND-DL-TML",
//   "IND-DL-TEL",
//   "IND-GA-BGL",
//   "IND-GA-ENG",
//   "IND-GA-GJR",
//   "IND-GA-HND",
//   "IND-GA-KAN",
//   "IND-GA-MRT",
//   "IND-GA-TML",
//   "IND-GA-TEL",
//   "IND-GJ-BGL",
//   "IND-GJ-ENG",
//   "IND-GJ-GJR",
//   "IND-GJ-HND",
//   "IND-GJ-KAN",
//   "IND-GJ-MRT",
//   "IND-GJ-TML",
//   "IND-GJ-TEL",
//   "IND-HR-BGL",
//   "IND-HR-ENG",
//   "IND-HR-GJR",
//   "IND-HR-HND",
//   "IND-HR-KAN",
//   "IND-HR-MRT",
//   "IND-HR-TML",
//   "IND-HR-TEL",
//   "IND-HP-BGL",
//   "IND-HP-ENG",
//   "IND-HP-GJR",
//   "IND-HP-HND",
//   "IND-HP-KAN",
//   "IND-HP-MRT",
//   "IND-HP-TML",
//   "IND-HP-TEL",
//   "IND-JK-BGL",
//   "IND-JK-ENG",
//   "IND-JK-GJR",
//   "IND-JK-HND",
//   "IND-JK-KAN",
//   "IND-JK-MRT",
//   "IND-JK-TML",
//   "IND-JK-TEL",
//   "IND-JH-BGL",
//   "IND-JH-ENG",
//   "IND-JH-GJR",
//   "IND-JH-HND",
//   "IND-JH-KAN",
//   "IND-JH-MRT",
//   "IND-JH-TML",
//   "IND-JH-TEL",
//   "IND-KA-BGL",
//   "IND-KA-ENG",
//   "IND-KA-GJR",
//   "IND-KA-HND",
//   "IND-KA-KAN",
//   "IND-KA-MRT",
//   "IND-KA-TML",
//   "IND-KA-TEL",
//   "IND-KL-BGL",
//   "IND-KL-ENG",
//   "IND-KL-GJR",
//   "IND-KL-HND",
//   "IND-KL-KAN",
//   "IND-KL-MRT",
//   "IND-KL-TML",
//   "IND-KL-TEL",
//   "IND-LD-BGL",
//   "IND-LD-ENG",
//   "IND-LD-GJR",
//   "IND-LD-HND",
//   "IND-LD-KAN",
//   "IND-LD-MRT",
//   "IND-LD-TML",
//   "IND-LD-TEL",
//   "IND-MP-BGL",
//   "IND-MP-ENG",
//   "IND-MP-GJR",
//   "IND-MP-HND",
//   "IND-MP-KAN",
//   "IND-MP-MRT",
//   "IND-MP-TML",
//   "IND-MP-TEL",
//   "IND-MH-BGL",
//   "IND-MH-ENG",
//   "IND-MH-GJR",
//   "IND-MH-HND",
//   "IND-MH-KAN",
//   "IND-MH-MRT",
//   "IND-MH-TML",
//   "IND-MH-TEL",
//   "IND-MN-BGL",
//   "IND-MN-ENG",
//   "IND-MN-GJR",
//   "IND-MN-HND",
//   "IND-MN-KAN",
//   "IND-MN-MRT",
//   "IND-MN-TML",
//   "IND-MN-TEL",
//   "IND-ML-BGL",
//   "IND-ML-ENG",
//   "IND-ML-GJR",
//   "IND-ML-HND",
//   "IND-ML-KAN",
//   "IND-ML-MRT",
//   "IND-ML-TML",
//   "IND-ML-TEL",
//   "IND-MZ-BGL",
//   "IND-MZ-ENG",
//   "IND-MZ-GJR",
//   "IND-MZ-HND",
//   "IND-MZ-KAN",
//   "IND-MZ-MRT",
//   "IND-MZ-TML",
//   "IND-MZ-TEL",
//   "IND-NL-BGL",
//   "IND-NL-ENG",
//   "IND-NL-GJR",
//   "IND-NL-HND",
//   "IND-NL-KAN",
//   "IND-NL-MRT",
//   "IND-NL-TML",
//   "IND-NL-TEL",
//   "IND-OD-BGL",
//   "IND-OD-ENG",
//   "IND-OD-GJR",
//   "IND-OD-HND",
//   "IND-OD-KAN",
//   "IND-OD-MRT",
//   "IND-OD-TML",
//   "IND-OD-TEL",
//   "IND-PY-BGL",
//   "IND-PY-ENG",
//   "IND-PY-GJR",
//   "IND-PY-HND",
//   "IND-PY-KAN",
//   "IND-PY-MRT",
//   "IND-PY-TML",
//   "IND-PY-TEL",
//   "IND-PB-BGL",
//   "IND-PB-ENG",
//   "IND-PB-GJR",
//   "IND-PB-HND",
//   "IND-PB-KAN",
//   "IND-PB-MRT",
//   "IND-PB-TML",
//   "IND-PB-TEL",
//   "IND-RJ-BGL",
//   "IND-RJ-ENG",
//   "IND-RJ-GJR",
//   "IND-RJ-HND",
//   "IND-RJ-KAN",
//   "IND-RJ-MRT",
//   "IND-RJ-TML",
//   "IND-RJ-TEL",
//   "IND-SK-BGL",
//   "IND-SK-ENG",
//   "IND-SK-GJR",
//   "IND-SK-HND",
//   "IND-SK-KAN",
//   "IND-SK-MRT",
//   "IND-SK-TML",
//   "IND-SK-TEL",
//   "IND-TN-BGL",
//   "IND-TN-ENG",
//   "IND-TN-GJR",
//   "IND-TN-HND",
//   "IND-TN-KAN",
//   "IND-TN-MRT",
//   "IND-TN-TML",
//   "IND-TN-TEL",
//   "IND-TS-BGL",
//   "IND-TS-ENG",
//   "IND-TS-GJR",
//   "IND-TS-HND",
//   "IND-TS-KAN",
//   "IND-TS-MRT",
//   "IND-TS-TML",
//   "IND-TS-TEL",
//   "IND-TR-BGL",
//   "IND-TR-ENG",
//   "IND-TR-GJR",
//   "IND-TR-HND",
//   "IND-TR-KAN",
//   "IND-TR-MRT",
//   "IND-TR-TML",
//   "IND-TR-TEL",
//   "IND-UP-BGL",
//   "IND-UP-ENG",
//   "IND-UP-GJR",
//   "IND-UP-HND",
//   "IND-UP-KAN",
//   "IND-UP-MRT",
//   "IND-UP-TML",
//   "IND-UP-TEL",
//   "IND-UK-BGL",
//   "IND-UK-ENG",
//   "IND-UK-GJR",
//   "IND-UK-HND",
//   "IND-UK-KAN",
//   "IND-UK-MRT",
//   "IND-UK-TML",
//   "IND-UK-TEL",
//   "IND-WB-BGL",
//   "IND-WB-ENG",
//   "IND-WB-GJR",
//   "IND-WB-HND",
//   "IND-WB-KAN",
//   "IND-WB-MRT",
//   "IND-WB-TML",
//   "IND-WB-TEL",
// ];

// function filterLocalesByLanguage(locales) {
//   const filteredLocales = locales.reduce((acc, locale) => {
//     const parts = locale.split("-");
//     console.log(parts,'======')

//     const language = parts[2];
//     if (!acc[language]) {
//       acc[language] = [];
//     }
//     acc[language].push(locale);
//     return acc;
//   }, {});

//   return filteredLocales;
// }

// const filteredLocales = filterLocalesByLanguage(locales);

// // for (const language in filteredLocales) {
// //   console.log("filteredLocales[language]", filteredLocales[language].length);
// //   console.log(`${language}: ${filteredLocales[language].join(", ")}`);
// // //   setLocales(filteredLocales[language].join(", "));
// // }


// var creatures = [
//     {name: "Shark", habitat: "Ocean"},
//     {name: "Whale", habitat: "Ocean"},
//     {name: "Lion", habitat: "Savanna"},
//     {name: "Lion", habitat: "Savanna"},
//     {name: "Monkey", habitat: "Jungle"}
//   ];

//   const data = creatures.filter((items) =>{
//     return items.habitat == "Jungle";
// })

// console.log(data);

const array = [
    {
      name: "Steven Smith",
      Country: "England",
      Age: 35
    },
    {
      name: "Hannah Reed",
      Country: "Scottland",
      Age: 23
    },
    {
      name: "Steven Smith",
      Country: "England",
      Age: 35
    },
    {
      name: "Robert Landley",
      Country: "England",
      Age: 84
    },
    {
      name: "Steven Smith",
      Country: "England",
      Age: 35
    },
    {
      name: "Robert Landley",
      Country: "England",
      Age: 84
    }
  ];
  
  function findDuplicates(arr) {
    const seen = [];
    const duplicates = [];
    console.log("seen+++++++++++==", seen)
  
    arr.forEach((item, index) => {
      const key = JSON.stringify(item);
      console.log("key+++++++++++==", seen.indexOf(key) !== -1)
      if (seen.indexOf(key) !== -1) {
        if (!duplicates.find(duplicate => JSON.stringify(duplicate) === key)) {
          duplicates.push(item);
        }
      } else {
        seen.push(key);
      }
    });
  
    return duplicates;
  }
  
  const duplicates = findDuplicates(array);
  console.log(duplicates);
  
  const array1 = [1, 2, 3, 2, 4, 5, 4, 5];

const duplicates1 = array1.filter((item, index) => array1.indexOf(item) !== index);

console.log(duplicates1); // Output: [2, 4, 5]


let myArray = [
    { id: 0, name: "Jhon" },
    { id: 1, name: "sara" },
    { id: 2, name: "pop" },
    { id: 3, name: "sara" }
]

const findUnique = new Set(myArray.map(x => {
return x.name
}))

if(findUnique.size < myArray.length){
console.log("duplicates found!")
}else{
console.log("Done!")
}

