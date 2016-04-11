var films = [{
    id: 1,
    title: "Up!",
    genre: "Animated",
    year: 2009,
    director: "Joss Whedon",
    description: "Carl Fredricksen (Ed Asner), a 78-year-old balloon salesman, is about to fulfill a lifelong dream. Tying thousands of balloons to his house, he flies away to the South American wilderness. But curmudgeonly Carl's worst nightmare comes true when he discovers a little boy named Russell is a stowaway aboard the balloon-powered house.",
    actors: [{
        name: "Tony Stark"
    }, {
        name: "Bruce Banner"
    }, {
        name: "Natasha Romanova"
    }],
    esrb: "Kids",
    posterpath: "/assets/images/up!.jpg"
}, {
    id: 2,
    title: "Iron Man",
    genre: "Superhero",
    year: 2008,
    director: "Joss Whedon",
    description: "Tony Stark. Genius, billionaire, playboy, philanthropist. Son of legendary inventor and weapons contractor Howard Stark. When Tony Stark is assigned to give a weapons presentation to an Iraqi unit led by Lt. Col. James Rhodes, he's given a ride on enemy lines. That ride ends badly when Stark's Humvee that he's riding in is attacked by enemy combatants. He survives - barely - with a chest full of shrapnel and a car battery attached to his heart. In order to survive he comes up with a way to miniaturize the battery and figures out that the battery can power something else. Thus Iron Man is born. He uses the primitive device to escape from the cave in Iraq. Once back home, he then begins work on perfecting the Iron Man suit. But the man who was put in charge of Stark Industries has plans of his own to take over Tony's technology for other matters.",
    actors: [{
        name: "Robert Downey Jr."
    }, {
        name: "Gwyneth Paltrow"
    }, {
        name: "Jeff Bridges"
    }],
    esrb: "Kids",
    posterpath: "/assets/images/ironman.jpg"
}, {
    id: 3,
    title: "Star Wars IV: New Hope",
    genre: "Sci-Fi",
    year: 1977,
    director: "George Lucas",
    description: "Luke Skywalker stays with his foster aunt and uncle on a farm on Tatooine. He is desperate to get off this planet and get to the Academy like his friends, but his uncle needs him for the next harvest. Meanwhile, an evil emperor has taken over the galaxy, and has constructed a formidable \"Death Star\" capable of destroying whole planets. Princess Leia, a leader in the resistance movement, acquires plans of the Death Star, places them in R2-D2, a droid, and sends him off to find Obi-Wan Kenobi. Before he finds him, R2-D2 ends up on the Skywalkers' farm with his friend C-3PO. R2-D2 then wanders into the desert, and when Luke follows, they eventually come across Obi-Wan. Will Luke, Obi-Wan and the two droids be able to destroy the Death Star, or will the Emperor rule forever?",
    actors: [{
        name: "Mark Hamill"
    }, {
        name: "Harrison Ford"
    }, {
        name: "Alec Guiness"
    }],
    esrb: "Kids",
    posterpath: "/assets/images/newhope.jpg"
}, {
    id: 4,
    title: "Les Miserables",
    genre: "Musical",
    year: 2013,
    director: "Alfie Bowe",
    description: "After 19 years as a prisoner, Jean Valjean (Hugh Jackman) is freed by Javert (Russell Crowe), the officer in charge of the prison workforce. Valjean promptly breaks parole but later uses money from stolen silver to reinvent himself as a mayor and factory owner. Javert vows to bring Valjean back to prison. Eight years later, Valjean becomes the guardian of a child named Cosette after her mother's (Anne Hathaway) death, but Javert's relentless pursuit means that peace will be a long time coming.",
    actors: [{
        name: "Hugh Jackman"
    }, {
        name: "Anne Hathaway"
    }, {
        name: "Russel Crowe"
    }],
    esrb: "Mids",
    posterpath: "/assets/images/lesmiserables.jpg"
}, {
    id: 5,
    title: "Pulp Fiction",
    year: 1991,
    genre: "Thriller",
    director: "Quentin Tarantino",
    description: "Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson) are hitmen with a penchant for philosophical discussions. In this ultra-hip, multi-strand crime movie, their storyline is interwoven with those of their boss, gangster Marsellus Wallace (Ving Rhames) ; his actress wife, Mia (Uma Thurman) ; struggling boxer Butch Coolidge (Bruce Willis) ; master fixer Winston Wolfe (Harvey Keitel) and a nervous pair of armed robbers, \"Pumpkin\" (Tim Roth) and \"Honey Bunny\" (Amanda Plummer).",
    actors: [{
        name: "John Travolta"
    }, {
        name: "Samuel L. Jackson"
    }, {
        name: "Bruce Willis"
    }],
    esrb: "Mids",
    posterpath: "/assets/images/pulpfiction.jpg"
}, {
    id: 6,
    title: "Hitchhiker's Guide to Galaxy",
    genre: "Sci-Fi",
    year: 2005,
    director: "Garth Jennings",
    description: "Arthur Dent (Martin Freeman) is trying to prevent his house from being bulldozed when his friend Ford Prefect (Mos Def) whisks him into outer space. It turns out Ford is an alien who has just saved Arthur from Earth's total annihilation. Ford introduces Arthur to his myriad friends, including many-headed President Zaphod Beeblebrox (Sam Rockwell) and sexy refugee Trillian (Zooey Deschanel). Arthur makes his way across the stars while seeking the meaning of life, or something close to it.",
    actors: [{
        name: "Martin Freeman"
    }, {
        name: "Mos Def"
    }, {
        name: "Zooey Deschanel"
    }, {
        name: "Sam Rockwell"
    }],
    esrb: "Mids",
    posterpath: "/assets/images/hitchhiker.jpg"
}];

var projections = [{
    id: 1,
    cinemaId: 1,
    filmId: 1,
    datetime: "2015-07-10T15:30:00"
}, {
    id: 2,
    cinemaId: 1,
    filmId: 2,
    datetime: "2015-07-10T18:30:00"
}, {
    id: 3,
    cinemaId: 1,
    filmId: 3,
    datetime: "2015-07-11T15:30:00"
}, {
    id: 4,
    cinemaId: 1,
    filmId: 4,
    datetime: "2015-07-12T15:30:00"
}, {
    id: 5,
    cinemaId: 2,
    filmId: 5,
    datetime: "2015-07-10T15:30:00"
}, {
    id: 6,
    cinemaId: 2,
    filmId: 6,
    datetime: "2015-07-10T15:30:00"
}, {
    id: 7,
    cinemaId: 3,
    filmId: 3,
    datetime: "2015-07-10T15:30:00"
}, {
    id: 8,
    cinemaId: 3,
    filmId: 4,
    datetime: "2015-07-10T15:30:00"
}, {
    id: 9,
    cinemaId: 4,
    filmId: 1,
    datetime: "2015-07-10T15:30:00"
}, {
    id: 10,
    cinemaId: 4,
    filmId: 6,
    datetime: "2015-07-11T15:30:00"
}];

var regions = [{
    id: 1,
    regionName: "East"
}, {
    id: 2,
    regionName: "West"
}, {
    id: 3,
    regionName: "North"
}, {
    id: 4,
    regionName: "South"
}];

var cinemas = [{
    id: 1,
    regionId: 1,
    cinemaName: "Nice Cinema",
    address: {
        city: "Warsaw",
        street: "2034 Nice Street"
    }
}, {
    id: 2,
    regionId: 2,
    cinemaName: "Best Cinema",
    address: {
        city: "Cracow",
        street: "3450 Bad Street"
    }
}, {
    id: 3,
    regionId: 3,
    cinemaName: "Friendly Cinema",
    address: {
        city: "Danzig",
        street: "1st Alley"
    }
}, {
    id: 4,
    regionId: 4,
    cinemaName: "Second Best Cinema",
    address: {
        city: "Stettin",
        street: "34 Worst Street"
    }
}];

var seats =[
    [
        {
            Id: 1,
            RowNumber: 1,
            ColumnNumber: 1,
            Reserved: false
        },
        {
            Id: 2,
            RowNumber: 1,
            ColumnNumber: 2,
            Reserved: false
        },
        {
            Id: 3,
            RowNumber: 1,
            ColumnNumber: 3,
            Reserved: false
        },
        {
            Id: 4,
            RowNumber: 2,
            ColumnNumber: 4,
            Reserved: false
        }
    ],
    [
        {
            Id: 5,
            RowNumber: 2,
            ColumnNumber: 1,
            Reserved: false
        },
        {
            Id: 6,
            RowNumber: 2,
            ColumnNumber: 2,
            Reserved: true
        },
        {
            Id: 7,
            RowNumber: 2,
            ColumnNumber: 3,
            Reserved: false
        },
        {
            Id: 8,
            RowNumber: 2,
            ColumnNumber: 4,
            Reserved: true
        }
    ],
    [
        {
            Id: 9,
            RowNumber: 3,
            ColumnNumber: 1,
            Reserved: true
        },
        {
            Id: 10,
            RowNumber: 3,
            ColumnNumber: 2,
            Reserved: false
        },
        {
            Id: 11,
            RowNumber: 3,
            ColumnNumber: 3,
            Reserved: true
        },
        {
            Id: 12,
            RowNumber: 3,
            ColumnNumber: 4,
            Reserved: true
        }
    ],
    [
        {
            Id: 9,
            RowNumber: 3,
            ColumnNumber: 1,
            Reserved: true
        },
        {
            Id: 10,
            RowNumber: 3,
            ColumnNumber: 2,
            Reserved: false
        },
        {
            Id: 11,
            RowNumber: 3,
            ColumnNumber: 3,
            Reserved: true
        },
        {
            Id: 12,
            RowNumber: 3,
            ColumnNumber: 4,
            Reserved: true
        }
    ]
];


var seats = [
    [{Reserved: true},{Reserved: false},{Reserved: false},{Reserved: false},{Reserved: false}],
    [{Reserved: false},{Reserved: false},{Reserved: false},{Reserved: false},{Reserved: false}],
    [{Reserved: false},{Reserved: true},{Reserved: false},{Reserved: false},{Reserved: false}],
    [{Reserved: false},{Reserved: false},{Reserved: false},{Reserved: false},{Reserved: false}],
    [{Reserved: false},{Reserved: false},{Reserved: false},{Reserved: false},{Reserved: false}]
];
