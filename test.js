const items1 = [{ watch_type: 'carousel' }, { read_type: 'puja' }, { listen_type: 'gita' }];
const items2 = [{ category: 'carousel' }, { category: 'puja' }, { category: 'gita' }];



// if (type === 'carousel') {
//     console.log('watch');
// }
// else if (type === 'gita') {
//     console.log('listen');
// } else if (type === 'puja') {
//     console.log('read');
// }


const typeToActionMap = {
    'carousel': 'watch',
    'puja': 'read',
    'gita': 'listen'
};


const processItems = (items) => {
    items.forEach(item => {
        const type = item.watch_type || item.read_type || item.listen_type || item.category;

        if (typeToActionMap[type]) {
            console.log(typeToActionMap[type])
        } else {
            console.log('unknown type')

        }

    });

}

processItems(items1)
// processItems(items2)
