const products = [
    {
        id: 1,
        name: "DVD: The Shawshank Redemption",
        description: "The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption.",
        price: 9.99,
        imageUrl: "https://m.media-amazon.com/images/I/91+PxjOH6uL._AC_UY218_.jpg"
    },
    {
        id: 2,
        name: "DVD: The Lion King",
        description: "Experience the epic journey of Simba, a lion cub who becomes king of the Pride Lands.",
        price: 9.99,
        imageUrl: "https://m.media-amazon.com/images/I/71wgqLl2v5L._AC_UY218_.jpg",
    },
    {
        id: 3,
        name: "Monopoly",
        description: 'Classic board game where players buy and trade properties.',
        price: 29.99,
        imageUrl: 'https://m.media-amazon.com/images/I/61uESx8MZuL._AC_UL320_.jpg'
    },
    {
        id: 4,
        name: 'Call of Duty: Modern Warfare (PS4)',
        description: 'First-person shooter video game set in modern times.',
        price: 49.99,
        imageUrl: 'https://m.media-amazon.com/images/I/71O5AW7pMZL._AC_UY218_.jpg'
    },
    {
        id: 5,
        name: "DVD: The Godfather",
        description: "The Godfather is a 1972 American crime film directed by Francis Ford Coppola and produced by Albert S. Ruddy, based on Mario Puzo's best-selling novel of the same name.",
        price: 11.99,
        imageUrl: "https://m.media-amazon.com/images/I/71mfJsyJO4L._AC_UY218_.jpg"
    },
    {
        id: 6,
        name: "DVD: The Dark Knight",
        description: "The Dark Knight is a 2008 superhero film directed, co-written, and produced by Christopher Nolan. Based on the DC Comics character Batman, the film is the second part of Nolan's The Dark Knight Trilogy.",
        price: 14.99,
        imageUrl: "https://m.media-amazon.com/images/I/51YbLNGpkpL._AC_UY218_.jpg"
    },
    {
        id: 7,
        name: "Scrabble",
        description: "Classic word game where players make words on a board.",
        price: 24.99,
        imageUrl: "https://m.media-amazon.com/images/I/71nLrAXVDzL._AC_UL640_FMwebp_QL65_.jpg"
    },
    {
        id: 8,
        name: "Pulp Fiction",
        description: "Quentin Tarantino's Pulp Fiction is a darkly comedic masterpiece that explores the criminal underworld of Los Angeles. With a star-studded cast, including John Travolta, Uma Thurman, and Samuel L. Jackson, this film is considered a classic of modern cinema.",
        price: 9.99,
        imageUrl: "https://m.media-amazon.com/images/I/61EQB62jxQL._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
        id: 9,
        name: "Minecraft (PS4)",
        description: "Open-world sandbox video game where players can build and explore.",
        price: 39.99,
        imageUrl: "https://m.media-amazon.com/images/I/81lRW06VO3L._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
        id: 10,
        name: "Blade Runner 2049",
        description: "The long-awaited sequel to the 1982 classic Blade Runner. Blade Runner 2049 follows a new Blade Runner, LAPD Officer K (Ryan Gosling), who uncovers a secret that leads him to Rick Deckard (Harrison Ford), a former Blade Runner who has been missing for thirty years.",
        price: 14.99,
        imageUrl: "https://m.media-amazon.com/images/I/81qe6CL0Z+L._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
        id: 11,
        name: "DVD: Forrest Gump (25th Anniversary Edition)",
        description: "Forrest Gump is a 1994 American comedy-drama film directed by Robert Zemeckis and written by Eric Roth.",
        price: 12.99,
        imageUrl: "https://m.media-amazon.com/images/I/91++WV6FP4L._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
        id: 12,
        name: "Boardgame: Settlers of Catan",
        description: "Settlers of Catan is a multiplayer board game in which players compete to build and manage the most successful colonies on the island of Catan.",
        price: 39.99,
        imageUrl: "https://m.media-amazon.com/images/I/81+okm4IpfL._AC_UL640_FMwebp_QL65_.jpg"
    },
    {
        id: 13,
        name: "Battleship",
        description: 'Classic board game of strategy and luck.',
        price: 24.99,
        imageUrl: 'https://m.media-amazon.com/images/I/61K+KcO6QzL._AC_UL640_FMwebp_QL65_.jpg'
    },
    {
        id: 14,
        name: "The Witcher 3: Wild Hunt (PC DVD)",
        description: 'Action role-playing video game set in a fantasy world.',
        price: 44.99,
        imageUrl: 'https://m.media-amazon.com/images/I/81AeDNt4STL._AC_UY436_FMwebp_QL65_.jpg'
    },
    {
        id: 15,
        name: "Cluedo",
        description: 'Classic murder mystery board game.',
        price: 19.99,
        imageUrl: 'https://m.media-amazon.com/images/I/91FUEVnjT4L._AC_UL640_FMwebp_QL65_.jpg'
    },
    {
        id: 16,
        name: "Grand Theft Auto V (PC)",
        description: 'Action-adventure video game set in an open world environment.',
        price: 39.99,
        imageUrl: 'https://m.media-amazon.com/images/I/91T0XQv8gEL._AC_UY436_FMwebp_QL65_.jpg'
    },
    {
        id: 17,
        name: "King of Tokyo",
        description: "King of Tokyo is a fun and fast-paced board game where players take on the role of giant monsters battling it out to be the ruler of Tokyo. Players roll dice to determine their actions, gain points, and earn victory stars. With strategy, luck, and a bit of luck, players must defeat their opponents and become the King of Tokyo!",
        price: 24.99,
        imageUrl: "https://m.media-amazon.com/images/I/71ABbZZVb3L._AC_UL640_FMwebp_QL65_.jpg"
    },
    {
        id: 18,
        name: "Jenga",
        description: "Jenga is a classic game of skill where players take turns removing blocks from a tower and stacking them on top. The player who causes the tower to fall loses.",
        price: 19.99,
        imageUrl: "https://m.media-amazon.com/images/I/81-cKwx9+lL._AC_UL640_FMwebp_QL65_.jpg"
    },
    {
        id: 19,
        name: "Overwatch (PC)",
        description: "Overwatch is a team-based multiplayer first-person shooter developed and published by Blizzard Entertainment. Players choose from a roster of over 30 unique heroes, each with their own abilities and play styles, to work together to complete objectives and defeat the opposing team.",
        price: 29.99,
        imageUrl: "https://m.media-amazon.com/images/I/917xadgCebL._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
        id: 20,
        name: "Bluray: Interstellar",
        description: "Interstellar is a 2014 science fiction film directed by Christopher Nolan. The film stars Matthew McConaughey, Anne Hathaway, and Jessica Chastain, and follows a group of astronauts who travel through a wormhole in search of a new home for humanity. With stunning visuals and an epic storyline, Interstellar is a must-see for sci-fi fans.",
        price: 14.99,
        imageUrl: "https://m.media-amazon.com/images/I/81UAS7H-iiS._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
        id: 21,
        name: "Ticket to Ride Board Game",
        description: "Strategy board game where players collect and play matching train cards to claim railway routes connecting cities in North America.",
        price: 39.99,
        imageUrl: "https://m.media-amazon.com/images/I/91YNJM4oyhL._AC_UL640_FMwebp_QL65_.jpg"
    },
    {
        id: 22,
        name: "DVD: The Matrix",
        description: "The Matrix is a 1999 science fiction action film written and directed by the Wachowski brothers, starring Keanu Reeves.",
        price: 9.99,
        imageUrl: "https://m.media-amazon.com/images/I/5117ZW5600L._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
        id: 23,
        name: "Super Mario Bros. U Deluxe (Wii U)",
        description: "Classic side-scrolling video game where players control Mario as he travels through various worlds and battles enemies to save Princess Peach.",
        price: 49.99,
        imageUrl: "https://m.media-amazon.com/images/I/91SzXbxJpML._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
        id: 24,
        name: "Sonic Forces (Nintendo Switch)",
        description: "Sonic Forces is a fast-paced action-adventure game developed by Sonic Team and published by Sega. Join Sonic and his allies to stop Dr. Eggman and his evil army.",
        price: 49.99,
        imageUrl: "https://m.media-amazon.com/images/I/51b-P92wVjL._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
        id: 25,
        name: "Kingdoms of Amalur: Reckoning (PS3)",
        description: "Kingdoms of Amalur: Reckoning is an action role-playing game set in the high-fantasy world of Amalur. Explore vast landscapes, wield powerful magic, and defeat formidable foes.",
        price: 19.99,
        imageUrl: "https://m.media-amazon.com/images/I/61sodGHlwOL._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
        id: 26,
        name: "Codenames (Board Game)",
        description: "Codenames is a word guessing game for 2-8 players. Players split into two teams and take turns giving clues to help their team guess the correct words.",
        price: 24.99,
        imageUrl: "https://m.media-amazon.com/images/I/81IbsvjLolL._AC_UL640_FMwebp_QL65_.jpg"
    },
    {
        id: 27,
        name: "Dragon Quest XI: Echoes of an Elusive Age (PS4)",
        description: "Explore a captivating and immersive world of adventure in Dragon Quest XI: Echoes of an Elusive Age. Follow the journey of a hero who must solve the mystery of his fate, and thwart a dark force that threatens to destroy the world.",
        price: 54.99,
        imageUrl: "https://m.media-amazon.com/images/I/91E6GxtWQEL._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
        id: 28,
        name: "Little Nightmares: Complete Edition (Nintendo Switch)",
        description: "Step into the shoes of Six, a young girl who wakes up in the heart of the Maw, a vast underwater resort that serves as a prison to countless guests. Explore the dark and disturbing world of Little Nightmares, and try to escape the clutches of the Maw.",
        price: 19.99,
        imageUrl: "https://m.media-amazon.com/images/I/81pv4TJdWHL._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
        id: 29,
        name: "Wolfenstein II: The New Colossus (PS4)",
        description: "Take on the role of BJ Blazkowicz, a freedom fighter battling against the Nazi regime in a alternate timeline where they won World War II. Experience the fast-paced and intense action of Wolfenstein II: The New Colossus as you fight for freedom and justice.",
        price: 49.99,
        imageUrl: "https://m.media-amazon.com/images/I/7146H-SjrCL._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
        id: 30,
        name: "South Park: The Stick of Truth (XBox One)",
        description: "Join Cartman, Stan, Kyle and Kenny in their quest to save the world of South Park in this hilarious RPG. Explore the town of South Park and interact with its residents as you try to unravel the mystery of the Stick of Truth.",
        price: 29.99,
        imageUrl: "https://m.media-amazon.com/images/I/61XO6QMZCbL._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
        id: 31,
        name: "Batman: Arkham Knight",
        description: "The finale of the Batman: Arkham series, Batman: Arkham Knight features an immense open world environment with advanced combat mechanics and the introduction of the Batmobile. Join Batman as he faces off against his greatest foes in a fight for the safety of Gotham City.",
        price: 19.99,
        imageUrl: "https://m.media-amazon.com/images/I/61WOIcVFOpL._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
        id: 32,
        name: "The Legend of Zelda: Breath of the Wild",
        description: "Embark on a quest to save the kingdom of Hyrule in this critically acclaimed action-adventure game. The Legend of Zelda: Breath of the Wild features a massive open world, innovative gameplay mechanics, and an unforgettable cast of characters. Explore the land, uncover secrets, and face off against formidable foes in your journey to save the land of Hyrule.",
        price: 49.99,
        imageUrl: "https://m.media-amazon.com/images/I/81yCdxV54SL._AC_UY436_FMwebp_QL65_.jpg"
    }
];

export default products;