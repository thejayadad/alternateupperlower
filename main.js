function upperLowerCase (words) {
    for (let i = 0; i < words.length; i++) {
        if (i % 2 === 0) {
            words[i] = words[i].toUpperCase();
        } else {
            words[i] = words[i].toLowerCase();
        }
    }
    return words
};

console.log(upperLowerCase(["jason", "jj", "jack", "jazz"]))


// let words = ["jace", "jada"]

// words.map(function(item, i){
//     if((i + 1) % 2 === 0){
//         item.toUpperCase
//     }  else{
//         item.toLowerCase
//     }
// })

// console.log(alter(["jj", "ij"]))

let names = ["jace", "jack", "jada", "jackson"]

let alter = names.map((name, i) => {
    if ( (i + 1) % 2 ==0){
        return name.toLowerCase()
    } else {
        return name.toLocaleUpperCase()
    }
})

console.log(alter)