mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';

const games = [
    {
        id: 1,
        image1: "./img/kirbyfl1.webp",
        image2: "./img/kirbyfl2.webp",
        image3: "./img/kirbyfl3.webp",
        video: "https://www.jbhifi.co.nz/cdn/shop/products/403095-Product-10-I-638240334268495485_adb91be9-0ee0-4d64-8901-8b333c64379b.jpg?v=1695346914",
        name: "Kirby and the Forgotten Land",
        series: "Kirby ",
        store: "JB Hifi", // primary store
        year: "2022",
        price: "$79.99",
        console: "Nitendo Switch"
    },
    {
        id: 2,
        image1: "./img/minecraft1",
        image2: "./img/minecraft2",
        image3: "./img/minecraft3",
        video: "https://www.youtube.com/watch?v=HqllNjR7vl8",
        name: "Minecraft",
        series: "Minecraft",
        store: "EB Games", // primary store
        year: "2017",
        price: "$59.99",
        console: "Nitendo Switch"
    },
    {
        id: 3,
        image1: "g",
        image2: "d",
        image3: "e",
        video: "e",
        name: "HitMan",
        series: "Other",
        store: "JB Hifi", // primary store
        year: "2016",
        price: "$109.99",
        console: "PS5"
    },
    {
        id: 4,
        image1: "g",
        image2: "d",
        image3: "e",
        video: "e",
        name: "Mario Party Superstars",
        series: "Mario",
        store: "EB Games", // primary store
        year: "2021",
        price: "$99.99",
        console: "Nitendo Switch"
    },
    {
        id: 5,
        image1: "g",
        image2: "d",
        image3: "e",
        video: "e",
        name: "Mario Kart",
        series: "Mario ",
        store: "EB Games", // primary store
        year: "2022",
        price: "$79.99",
        console: "Nitendo Switch"
    },
    {
        id: 6,
        image1: "g",
        image2: "d",
        image3: "e",
        video: "e",
        name: "Assassin's Creed Mirage",
        series: "Other",
        store: "JB Hifi", // primary store
        year: "2022",
        price: "$58.00",
        console: "Nitendo Switch"
    },
    {
        id: 7,
        image1: "g",
        image2: "d",
        image3: "e",
        video: "e",
        name: "Kirby's Return to Dream Land Deluxe",
        series: "Kirby",
        store: "Eb Games", // primary store
        year: "2011",
        price: "$99.99",
        console: "Nitendo Switch"
    },
    {
        id: 8,
        image1: "g",
        image2: "d",
        image3: "e",
        video: "e",
        name: "Hogwarts Legacy",
        series: "Other",
        store: "JB Hifi", // primary store
        year: "2023",
        price: "$88.00",
        console: "PS5"
    },
    {
        id: 9,
        image1: "g",
        image2: "d",
        image3: "e",
        video: "e",
        name: "Marvel's Spider-Man",
        series: "Marvel",
        store: "Eb Games", // primary store
        year: "2018",
        price: "$69.99",
        console: "PS4"
    },
    {
        id: 10,
        image1: "g",
        image2: "d",
        image3: "e",
        video: "e",
        name: "Subnautica Below Zero",
        series: "Other",
        store: "JB Hifi", // primary store
        year: "2022",
        price: "$79.99",
        console: "PS5"
    }

]

// Filters
const storeFilter = document.getElementById("store");
const seriesFilter = document.getElementById("series");
const consoleFilter = document.getElementById("console");
const earliestYearFilter = document.getElementById("earlyYear");
const latestYearFilter = document.getElementById("lateYear");

// Sorting buttons
const highToLowBtn = document.getElementById("priceHighToLowBtn");
const lowToHighBtn = document.getElementById("priceLowToHighBtn");
const alphabeticalBtn = document.getElementById("alphabeticalBtn");

//  ------ ****** CLICK FUNCTIONS ****** -----
// Store:
storeFilter.addEventListener("change", function () {
    console.dir(storeFilter.value);
    filterAndPopulateResults();
});
// Series:
seriesFilter.addEventListener("change", function () {
    console.dir(seriesFilter.value);
    filterAndPopulateResults();
});
// Console:
consoleFilter.addEventListener("change", function () {
    console.dir(consoleFilter.value);
    filterAndPopulateResults();
});
// Earliest year filter:
earliestYearFilter.addEventListener("change", function () {
    console.dir(earliestYearFilter.value);
    filterAndPopulateResults();
});
// latest year filter:
latestYearFilter.addEventListener("change", function () {
    console.dir(latestYearFilter.value);
    filterAndPopulateResults();
});

//  ----- Sorting button Clicks: -----
highToLowBtn.addEventListener("click", function () {
    const filteredProperties = filteredProperties();
    const sortedProperties = sortedPropertiesByPriceHighToLow(filteredProperties); // Sorts filtered products $$$ - $
    populateResults(sortedProperties);
});

lowToHighBtn.addEventListener("click", function () {
    const filteredProperties = filteredProperties();
    const sortedProperties = sortedPropertiesByPriceLowToHigh(filteredProperties); // Sorts filtered products $ - $$$
    populateResults(sortedProperties);
});

alphabeticalBtn.addEventListener("click", function () {
    const filteredProperties = filteredProperties();
    const sortedProperties = sortedPropertiesAlphabetical(filteredProperties); // Sorts filtered products A - Z
    populateResults(sortedProperties);
})

// ----- **** FILTERING FUNCTION & LOGIC ******* ------
function filteredProperties() {
    const filteredProperties = properties.filter(games => {

    })
}