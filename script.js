mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';


$(document).ready(function () {
    const games = [
        {
            id: 1,
            image1: "./img/kirbyfl1.webp",
            image2: "./img/kirbyfl2.webp",
            image3: "./img/kirbyfl3.webp",
            video: "https://www.youtube.com/embed/0oTBOQ5rp58?si=NMVcBIm8wJhysXT1",
            name: "Kirby and the Forgotten Land",
            series: "Kirby ",
            store: "JB Hifi", // primary store
            year: "2022",
            price: "$79.99",
            console: "Nitendo Switch"
        },
        {
            id: 2,
            image1: "./img/minecraft1.webp",
            image2: "./img/minecraft2.webp",
            image3: "./img/minecraft3.webp",
            video: "https://www.youtube.com/embed/HqllNjR7vl8?si=8d2tLdK_nFK7JuI4",
            name: "Minecraft",
            series: "Minecraft",
            store: "EB Games", // primary store
            year: "2017",
            price: "$59.99",
            console: "Nitendo Switch"
        },
        {
            id: 3,
            image1: "./img/hitman1.webp",
            image2: "./img/hitman2.webp",
            image3: "./img/hitman3.webp",
            video: "https://www.youtube.com/embed/Z9Q4wAvWBAg?si=A8crLCfkVLRB9PDa",
            name: "HitMan Worl of Assassination",
            series: "Other",
            store: "JB Hifi", // primary store
            year: "2016",
            price: "$109.99",
            console: "PS5"
        },
        {
            id: 4,
            image1: "./img/party1.webp",
            image2: "./img/party2.webp",
            image3: "./img/party3.webp",
            video: "https://www.youtube.com/embed/2jEq0F656aY?si=wxV6fKGIUNXTDLFw",
            name: "Mario Party Superstars",
            series: "Mario",
            store: "EB Games", // primary store
            year: "2021",
            price: "$99.99",
            console: "Nitendo Switch"
        },
        {
            id: 5,
            image1: "./img/mario1.webp",
            image2: "./img/mario2.webp",
            image3: "./img/mario3.webp",
            video: "https://www.youtube.com/embed/tKlRN2YpxRE?si=kGzZB-cVtQtjfMw-",
            name: "Mario Kart",
            series: "Mario ",
            store: "EB Games", // primary store
            year: "2014",
            price: "$79.99",
            console: "Nitendo Switch"
        },
        {
            id: 6,
            image1: "./img/creed1.webp",
            image2: "./img/creed2.webp",
            image3: "./img/creed3.webp",
            video: "https://www.youtube.com/embed/-JprUTktB3M?si=IWJeLE7QKfy7G4p4",
            name: "Assassin's Creed Mirage",
            series: "Other",
            store: "JB Hifi", // primary store
            year: "2023crr",
            price: "$58.00",
            console: "PS4"
        },
        {
            id: 7,
            image1: "./img/kirbyd1.webp",
            image2: "./img/kirbyd2.webp",
            image3: "./img/kirbyd3.webp",
            video: "https://www.youtube.com/embed/ExWoeRuFWo8?si=U92hVyNXWPhmgvrx",
            name: "Kirby's Return to Dream Land Deluxe",
            series: "Kirby",
            store: "Eb Games", // primary store
            year: "2011",
            price: "$99.99",
            console: "Nitendo Switch"
        },
        {
            id: 8,
            image1: "./img/hogwarts.webp",
            image2: "./img/hogwarts2.webp",
            image3: "./img/hogwarts3.webp",
            video: "https://www.youtube.com/embed/1O6Qstncpnc?si=dAlXpo2IMKIrN3Ih",
            name: "Hogwarts Legacy",
            series: "Other",
            store: "JB Hifi", // primary store
            year: "2023",
            price: "$88.00",
            console: "PS5"
        },
        {
            id: 9,
            image1: "./img/spider1.webp",
            image2: "./img/spider2.webp",
            image3: "./img/spider3.webp",
            video: "https://www.youtube.com/embed/q4GdJVvdxss?si=h8K3TVMixQfQXAgj",
            name: "Marvel's Spider-Man",
            series: "Marvel",
            store: "Eb Games", // primary store
            year: "2018",
            price: "$69.99",
            console: "PS4"
        },
        {
            id: 10,
            image1: "./img/sub1.webp",
            image2: "./img/sub2.webp",
            image3: "./img/sub3.webp",
            video: "https://www.youtube.com/embed/QuyUaQw_LiU?si=l7BHhqV5AYzaNPna",
            name: "Subnautica Below Zero",
            series: "Other",
            store: "JB Hifi", // primary store
            year: "2022",
            price: "$79.99",
            console: "PS5"
        }

    ];


    //  ------ ****** CLICK FUNCTIONS ****** -----
    // Store:
    $("#store").change(function () {
        console.dir($("#store").val());
        filterAndPopulateResults();
    });

    // Series:
    $("#series").change(function () {
        console.dir($("#series").val());
        filterAndPopulateResults();
    });

    // Console:
    $("#console").change(function () {
        console.dir($("#console").val());
        filterAndPopulateResults();
    });

    // Earliest year filter:
    $("#earlyYear").change(function () {
        console.dir($("#earlyYear").val());
        filterAndPopulateResults();
    });

    // latest year filter:
    $("#lateYear").change(function () {
        console.dir($("#lateYear").val());
        filterAndPopulateResults();
    });


    //  ----- Sorting button Clicks: -----
    $("#priceHighToLowBtn").click(function () {
        const filteredGames = filterGames();
        const sortedGames = sortGamesByPriceHighToLow(filteredGames); // Sorts filtered products $$$ - $
        populateResults(sortedGames);

    });

    $("#priceLowToHighBtn").click(function () {
        const filteredGames = filterGames();
        const sortedGames = sortGamesByPriceLowToHigh(filteredGames); // Sorts filtered products $$$ - $
        populateResults(sortedGames);
    });

    $("#alphabeticalBtn").click(function () {
        const filteredGames = filterGames();
        const sortedGames = sortGamesAlphabetical(filteredGames); // Sorts filtered products $$$ - $
        populateResults(sortedGames);
    });

    // ----- **** FILTERING FUNCTION & LOGIC ******* ------
    function filterGames() {
        const filteredGames = games.filter(games => {
            // check if store matches 
            const gamesStore = games.store.toLowerCase();
            const filterStoreValue = $("#store").val().toLowerCase();
            //  that is doesnt match so it return false and doesnt add to the array
            // && !strict equals
            if (filterStoreValue && !gamesStore.includes(filterStoreValue)) {
                // if (JBHifi && !propertyStore.incudes(JBHifi))
                // if property location doesnt include the filter value return false
                return false
            }
            const gamesSeries = games.series.toLowerCase();
            const filterSeriesValue = $("#series").val().toLowerCase();
            // Check if series matches
            if (filterSeriesValue && !gamesSeries.includes(filterSeriesValue)) {
                return false;
            }

            const gamesConsole = games.console.toLowerCase();
            const filterConsoleValue = $("#console").val().toLowerCase();
            // Check if console matches
            if (filterConsoleValue && !gamesConsole.includes(filterConsoleValue)) {
                return false;
            }


            if (($("#earlyYear").val() && games.year < $("#earlyYear").val()) || ($("#lateYear").val() && games.year > $("#lateYear").val())) {
                return false
            }

            return true;
        });

        return filteredGames;
    };

    // ---- **** SORTING FUNCTIONS **** ----
    function sortGamesByPriceHighToLow(games) {
        return games.sort((a, b) => {
            const priceA = parseFloat(a.price.replace(/\$/g, ), '');
            const priceB = parseFloat(b.price.replace(/\$/g, ), '');
            return priceB - priceA;
        })
    }

    function sortGamesByPriceLowToHigh(games) {
        return games.sort((a, b) => {
            const priceA = parseFloat(a.price.replace(/\$/g, ), '');
            const priceB = parseFloat(b.price.replace(/\$/g, ), '');
            return priceA - priceB;
        })
    }

    function sortGamesAlphabetical(games) {
        return games.sort((a, b) => {
            const nameA = a.name.toLowerCase(); // property a name to lowercase
            const nameB = b.name.toLowerCase(); // property b name to lowercase
            return nameA.localeCompare(nameB);
        })
    }
    

    //  ----- ***** POPULATION FUNCTION **** ---- 
    // filter and populate results
    function filterAndPopulateResults() {
        const filteredGames = filterGames();
        populateResults(filteredGames);
    }

    filterAndPopulateResults();

    function populateResults(filteredResults) {
        $("#results").html("");

        if (filteredResults.length === 0) {
            $("#results").html('<p class="no-results">No Results Found</p>');
        } else {
            filteredResults.forEach(games => {
                const gamesCardHtml = `
                    <div class="games">
                <div class="swiper">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                        <!-- Slides -->
                        <div class="swiper-slide"><img src="${games.image1}" alt="${games.name} image 1" class="games-image" value=${games.id}></div>
                        <div class="swiper-slide"><img src="${games.image2}" alt="${games.name} image 2" class="games-image" value=${games.id}></div>
                        <div class="swiper-slide"><img src="${games.image3}" alt="${games.name} image 3" class="games-image" value=${games.id}></div>
                        
                        <div class="swiper-slide"><iframe src="${games.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" frameborder="0" height="100%" width="100%" allowfullscreen></iframe></div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="games-details">
                    <h2>${games.name}</h2>
                    <p>${games.store}</p>
                    <div class="more-details">
                        <div class="games-amenities">
                            <p>${games.series} </p>
                            <p>${games.console} </p>
                            <p>Release Year: ${games.year} <i class="fa-solid fa-calendar"></i></p>
                        </div>
                        <h4>${games.price}</h4>
                    </div>
                </div>
            </div>
            `;
                $("#results").append(gamesCardHtml);

                const swipers = document.querySelectorAll('.swiper');
                swipers.forEach(swiperEl => {
                    new Swiper(swiperEl, {
                        direction: 'vertical',
                        loop: true,
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true,
                        }
                    })
                });
            });
        }

    }
    

});
