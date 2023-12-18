const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

let idx = words.indexOf("апельсин");

if(idx != -1) {
    console.log("Ура! нашел")
} else {
    console.log("Придется поискать в другом магазине...")
}