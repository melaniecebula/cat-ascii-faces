var cats = require("./")
console.log(cats.cats)
console.log(cats())
cats.catStream().pipe(process.stdout)
