mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';


$(document).ready(function () {
    const games = [{
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
            series: "Other",
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
            name: "HitMan World of Assassination",
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
            year: "2023",
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
            store: "EB Games", // primary store
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
            series: "Other",
            store: "EB Games", // primary store
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
        console.log("working")

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
            const priceA = parseFloat(a.price.replace(/\$/g, '').replace(/\./g, ''));
            const priceB = parseFloat(b.price.replace(/\$/g, '').replace(/\./g, ''));
            return priceB - priceA;


        })
    }

    function sortGamesByPriceLowToHigh(games) {
        return games.sort((a, b) => {
            const priceA = parseFloat(a.price.replace(/\$/g, '').replace(/\./g, ''));
            const priceB = parseFloat(b.price.replace(/\$/g, '').replace(/\./g, ''));
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
                    <h5>${games.console} </h5>
                    <div class="more-details">
                        <div class="games-further-details">
                            <p>${games.store}</p>
                            <p>Release Year: ${games.year}  <i class="fa-solid fa-calendar"></i></p>
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

    document.getElementById('goToMapBtn').addEventListener('click', function () {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });

    document.getElementById('backToTopBtn').addEventListener('click', function () {
        scrollToTop();
    });

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }



    const jbHifiLocations = [
        {
            name: "JB Hifi - Albany",
            address: "Westfield Albany Shopping Centre, Level 1/219 Don McKinnon Drive, Albany, Auckland 0632",
            hours: "Hours: Monday - Wednesday: 9am - 6pm | Thursday - Friday: 9am - 9pm | Saturday: 9am - 6pm | Sunday: 10am - 5:30pm ",
            longitude: 174.70806780555927,
            latitude: -36.72858237844924
        },
        {
            name: "JB Hifi - Bayfair",
            address: "T8/West Madison Street Corner Maunganui &, Bayfair Shopping Centre Girven Road, Mount Maunganui 3116",
            hours: "Hours: Saturday - Wednesday: 9am - 6pm | Thursday - Friday: 9am - 9pm",
            longitude: 176.22315294662423,
            latitude: -37.67509717032533
        }, 
        
        {
            name: "JB Hifi - Palmerston North",
            address: "The Plaza, 102/84 The Square, Palmerston North 4410",
            hours: "Hours: Monday - Wednesday: 9am - 5:30pm | Thursday: 9am - 9pm | Friday: 9am - 7pm | Saturday: 9am - 5:30pm | Sunday: 10am - 5pm",
            longitude: 175.61434970444753,
            latitude: -40.35681947323412
        },
        {
        
            name: "JB Hifi - Queensgate",
            address: "Westfield Queensgate Shopping Centre, Store 107, Level 1/45 Knights Road, North Island, Lower Hutt 5011",
            hours: "Hours: Monday - Wednesday: 9am - 6pm | Thursday: 9am - 9pm | Friday - Saturday: 9am - 6pm | Sunday: 10am - 5:30pm ",
            longitude: 174.90614375908584,
            latitude: -41.20964584639414
        },
        {
            name: "JB Hifi - Wellington",
            address: "62 Victoria Street, Wellington Central, Wellington 6011",
            hours: "Hours: Monday - Saturday: 9am - 6pm | Sunday: 10am - 5pm ",
            longitude: 174.77614976740875,
            latitude: -41.28736663979141
        },
        {
            name: "JB Hifi - Riccarton",
            address: "Westfield Queensgate Shopping Centre, Store 107, Level 1/45 Knights Road, North Island, Lower Hutt 5011",
            hours: "Hours: Monday - Wednesday: 9am - 6pm | Thursday: 9am - 9pm | Friday - Saturday: 9am - 6pm | Sunday: 10am - 5:30pm ",
            longitude: 174.90614375908584,
            latitude: -41.20964584639414
        },
        {
            name: "JB Hifi - Dunedin",
            address: "Westfield Queensgate Shopping Centre, Store 107, Level 1/45 Knights Road, North Island, Lower Hutt 5011",
            hours: "Hours: Monday - Wednesday: 9am - 6pm | Thursday: 9am - 9pm | Friday - Saturday: 9am - 6pm | Sunday: 10am - 5:30pm ",
            longitude: 174.90614375908584,
            latitude: -41.20964584639414
        }
    ]

    const ebGamesLocations = [
    
        {
            name: "EB Games - Hamilton",
            address: "Centre Place Shopping Centre Shop 26/501 Victoria Street, Hamilton Central, Hamilton 3204",
            hours: "Hours: Monday - Saturday: 9am - 6pm | Sunday: 10am - 5pm ",
            longitude: 175.27859136549193,
            latitude: -37.77496170335462

        },
        {
            name: "EB Games - Whanganui",
            address: "Trafalgar Square Shopping Centre 100 Taupo Quay, Whanganui 4500",
            hours: "Hours: Monday - Friday: 9am - 5:30pm | Saturday: 9am - 4pm | Sunday: 10am - 4pm ",
            longitude: 175.0533420465211,
            latitude: -39.93333414849232

        },
        {
            name: "EB Games - Queensgate",
            address: "45 Knights Road, Queensgate, Lower Hutt 5010 - Located in Queensgate",
            hours: "Hours: Monday - Wednesday: 9am - 6pm | Thursday: 9am - 9pm | Friday - Saturday: 9am - 6pm | Sunday: 10am - 5:30pm ",
            longitude: 174.90759983722404,
            latitude: -41.209181577720166

        },
        {
            name: "EB Games - Porirua",
            address: "Shop 205/2 Titahi Bay Road, Tītahi Bay, Porirua 5022",
            hours: "Hours: Monday - Wednesday: 9am - 6pm | Thursday: 9am - 9pm | Friday - Saturday: 9am - 6pm | Sunday: 10am - 6pm ",
            longitude: 174.83946716910071,
            latitude: -41.136384733582894
        },
        {
            name: "EB Games - Richmond",
            address: "Richmond Mall, Cnr Queen, Croucher and, Talbot Street, Richmond 7020",
            hours: "Hours: Monday - Friday: 9am - 6pm | Saturday: 9am - 5pm | Sunday: 10am - 4pm ",
            longitude:  173.18533630444537,
            latitude: -41.339762184851544
        },
        {
            name: "EB Games - Northlands",
            address: "72 Cuba Street, Te Aro, Wellington 6011",
            hours: "Hours: Monday - Friday: 9am - 6pm | Saturday: 9:30am - 5pm | Sunday: 10am - 5pm ",
            longitude: 172.60927426955172,
            latitude:  -43.49389252461713
        },
    ]

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [174.82127263600782, -41.252574771451066],
        zoom: 10
    });
    
    // Function to fly to a location and add a marker
    function flyToLocation(location, color) {
        // Add marker
        new mapboxgl.Marker({
                color: color
            })
            .setLngLat([location.longitude, location.latitude])
            .addTo(map);
    
        // Fly to location
        map.flyTo({
            center: [location.longitude, location.latitude],
            essential: true,
            zoom: 15 // Adjust zoom level as needed
        });

        const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h3>${location.name}</h3><p>${location.address}</p><p>${location.hours}</p>`);
    }


    
    // Add markers for JB Hi-Fi locations
    jbHifiLocations.forEach(location => {
        flyToLocation(location, 'rgb(255, 196, 0)'); // Specify color for JB Hi-Fi markers
    });
    
    // Add markers for EB Games locations
    ebGamesLocations.forEach(location => {
        flyToLocation(location, '#045bc4'); // Specify color for EB Games markers
    });
    
    // Populate select options for JB Hi-Fi
    const selectJb = document.getElementById('mapOptionsSelectJb');
    jbHifiLocations.forEach(jbLocation => {
        const option = document.createElement('option');
        option.text = jbLocation.name;
        option.value = jbLocation.name;
        selectJb.appendChild(option);
    });
    
    // Event listener for JB Hi-Fi select change
    selectJb.addEventListener('change', function() {
        const selectedLocation = this.value;
        const jbLocation = jbHifiLocations.find(loc => loc.name === selectedLocation);
        if (jbLocation) {
            flyToLocation(jbLocation, 'pink'); // Specify color for JB Hi-Fi markers
        }
    });
    
    // Populate select options for EB Games
    const selectEb = document.getElementById('mapOptionsSelectEb');
    ebGamesLocations.forEach(ebLocation => {
        const option = document.createElement('option');
        option.text = ebLocation.name;
        option.value = ebLocation.name;
        selectEb.appendChild(option);
    });
    
    // Event listener for EB Games select change
    selectEb.addEventListener('change', function() {
        const selectedLocation = this.value;
        const ebLocation = ebGamesLocations.find(loc => loc.name === selectedLocation);
        if (ebLocation) {
            flyToLocation(ebLocation, 'blue'); // Specify color for EB Games markers
        }
    });
    

});