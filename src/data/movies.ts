import { Movie, MovieType, COUNTRY_NAME } from "../types/movies";
import { v4 as uuidv4 } from "uuid";

const movies: Movie[] = [
  {
    movieId: uuidv4(),
    name: "Iron Man",
    image: "https://upload.wikimedia.org/wikipedia/en/7/70/Ironmanposter.JPG",
    description:
      "Tony Stark builds an armored suit to fight the throes of evil.",
    uploaderId: "cybercat",
    details: {
      country_name: COUNTRY_NAME.English,
      type: [MovieType.SuperHeroes, MovieType.Action, MovieType.Adventure],
      detail:
        "Billionaire industrialist and genius inventor Tony Stark is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, he builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man.",
      actor: ["Robert Downey Jr.", "Gwyneth Paltrow", "Jeff Bridges"],
    },

    releasedate: new Date("May 2, 2008").getTime(), // Release date: May 2, 2008
    created: Date.now(),
    updated: Date.now(),
  },
  {
    movieId: uuidv4(),
    name: "The Incredible Hulk",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/88/The_Incredible_Hulk_poster.jpg",
    description:
      "Bruce Banner transforms into a green giant and battles a menacing villain known as the Abomination.",
    uploaderId: "cybercat",
    details: {
      country_name: COUNTRY_NAME.English,
      type: [MovieType.SuperHeroes, MovieType.Action, MovieType.SciFi],
      detail:
        "Scientist Bruce Banner desperately seeks a cure for the gamma radiation that contaminated his cells and turned him into the Hulk. Cut off from his true love, Betty Ross, and hunted by his nemesis, General Thunderbolt Ross, Banner soon faces a new enemy: a terrifying creature known as the Abomination.",
      actor: ["Edward Norton", "Liv Tyler", "Tim Roth"],
    },

    releasedate: new Date("June 13, 2008").getTime(), // Release date: June 13, 2008
    created: Date.now(),
    updated: Date.now(),
  },
  {
    movieId: uuidv4(),
    name: "Iron Man 2",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/ed/Iron_Man_2_poster.jpg",
    description:
      "Tony Stark faces new challenges and adversaries as he grapples with his own mortality.",
    uploaderId: "cybercat",
    details: {
      country_name: COUNTRY_NAME.English,
      type: [MovieType.SuperHeroes, MovieType.Action, MovieType.Adventure],
      detail:
        "With the world now aware of his dual life as the armored superhero Iron Man, billionaire inventor Tony Stark faces pressure from the government, the press, and the public to share his technology with the military. Unwilling to let go of his invention, Stark must forge new alliances and confront powerful new enemies.",
      actor: ["Robert Downey Jr.", "Gwyneth Paltrow", "Don Cheadle"],
    },

    releasedate: new Date("May 7, 2010").getTime(), // Release date: May 7, 2010
    created: Date.now(),
    updated: Date.now(),
  },
  {
    movieId: uuidv4(),
    name: "Thor",
    image: "https://upload.wikimedia.org/wikipedia/en/f/fc/Thor_poster.jpg",
    description:
      "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans on Earth, where he learns what it takes to be a true hero.",
    uploaderId: "cybercat",
    details: {
      country_name: COUNTRY_NAME.English,
      type: [MovieType.SuperHeroes, MovieType.Action, MovieType.Adventure],
      detail:
        "Exiled to Earth after his reckless actions reignite an ancient war, the Norse god of thunder, Thor, must learn what it takes to be a true hero.",
      actor: ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston"],
    },

    releasedate: new Date("May 6, 2011").getTime(), // Release date: May 6, 2011
    created: Date.now(),
    updated: Date.now(),
  },
  {
    movieId: uuidv4(),
    name: "Captain America: The First Avenger",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/37/Captain_America_The_First_Avenger_poster.jpg",
    description:
      "Steve Rogers becomes Captain America and joins forces with the Avengers to save the world from threats.",
    uploaderId: "cybercat",
    details: {
      country_name: COUNTRY_NAME.English,
      type: [MovieType.SuperHeroes, MovieType.Action, MovieType.Adventure],
      detail:
        "Steve Rogers becomes Captain America and joins forces with the Avengers to save the world from threats.",
      actor: ["Chris Evans", "Hayley Atwell", "Hugo Weaving"],
    },
    releasedate: new Date("July 22, 2011").getTime(), // Release date: July 22, 2011
    created: Date.now(),
    updated: Date.now(),
  },
  {
    movieId: uuidv4(),
    name: "The Avengers",
    image:
      "https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg",
    description:
      "A group of extraordinary people band together to fight an alien invasion.",
    uploaderId: "cybercat",
    details: {
      country_name: COUNTRY_NAME.English,
      type: [MovieType.SuperHeroes, MovieType.Action, MovieType.Adventure],
      detail:
        "When an unexpected enemy emerges that threatens global safety and security, Nick Fury, Director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
      actor: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
    },
    releasedate: new Date("May 4, 2012").getTime(), // Release date: May 4, 2012
    created: Date.now(),
    updated: Date.now(),
  },
  {
    movieId: uuidv4(),
    name: "Iron Man 3",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d5/Iron_Man_3_theatrical_poster.jpg",
    description:
      "Tony Stark must confront his inner demons and face a formidable terrorist known as the Mandarin.",
    uploaderId: "cybercat",
    details: {
      country_name: COUNTRY_NAME.English,
      type: [MovieType.SuperHeroes, MovieType.Action, MovieType.Adventure],
      detail:
        "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
      actor: ["Robert Downey Jr.", "Gwyneth Paltrow", "Don Cheadle"],
    },
    releasedate: new Date("May 3, 2013").getTime(), // Release date: May 3, 2013
    created: Date.now(),
    updated: Date.now(),
  },
  {
    movieId: uuidv4(),
    name: "Thor: The Dark World",
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/7e/Thor_-_The_Dark_World_poster.jpg",
    description:
      "Thor must team up with his mischievous brother Loki to save the Nine Realms from a dark elf threat.",
    uploaderId: "cybercat",
    details: {
      country_name: COUNTRY_NAME.English,
      type: [MovieType.SuperHeroes, MovieType.Action, MovieType.Adventure],
      detail:
        "Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.",
      actor: ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston"],
    },
    releasedate: new Date("November 8, 2013").getTime(), // Release date: November 8, 2013
    created: Date.now(),
    updated: Date.now(),
  },
  {
    movieId: uuidv4(),
    name: "Captain America: The Winter Soldier",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/e8/Captain_America_The_Winter_Soldier.jpg",
    description:
      "Steve Rogers teams up with Black Widow to battle a powerful new enemy known as the Winter Soldier.",
    uploaderId: "cybercat",
    details: {
      country_name: COUNTRY_NAME.English,
      type: [MovieType.SuperHeroes, MovieType.Action, MovieType.Thriller],
      detail:
        "Steve Rogers, also known as Captain America, struggles to embrace his role in the modern world and battles a new threat from old history: the Soviet agent known as the Winter Soldier.",
      actor: ["Chris Evans", "Scarlett Johansson", "Sebastian Stan"],
    },
    releasedate: new Date("April 4, 2014").getTime(), // Release date: April 4, 2014
    created: Date.now(),
    updated: Date.now(),
  },
  {
    movieId: uuidv4(),
    name: "Guardians of the Galaxy",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8f/GOTG-poster.jpg",
    description:
      "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    uploaderId: "cybercat",
    details: {
      country_name: COUNTRY_NAME.English,
      type: [MovieType.SuperHeroes, MovieType.Action, MovieType.Adventure],
      detail:
        "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
      actor: ["Chris Pratt", "Zoe Saldana", "Dave Bautista"],
    },
    releasedate: new Date("August 1, 2014").getTime(), // Release date: August 1, 2014
    created: Date.now(),
    updated: Date.now(),
  },
  {
    movieId: uuidv4(),
    name: "Avengers: Age of Ultron",
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/1b/Avengers_Age_of_Ultron.jpg",
    description:
      "The Avengers must stop the villainous Ultron from enacting his plans of human extinction.",
    uploaderId: "cybercat",
    details: {
      country_name: COUNTRY_NAME.English,
      type: [MovieType.SuperHeroes, MovieType.Action, MovieType.Adventure],
      detail:
        "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
      actor: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
    },
    releasedate: new Date("May 1, 2015").getTime(), // Release date: May 1, 2015
    created: Date.now(),
    updated: Date.now(),
  },
  {
    movieId: uuidv4(),
    name: "Ant-Man",
    image: "https://upload.wikimedia.org/wikipedia/en/7/75/Ant-Man_poster.jpg",
    description:
      "A former thief must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
    uploaderId: "cybercat",
    details: {
      country_name: COUNTRY_NAME.English,
      type: [MovieType.SuperHeroes, MovieType.Action, MovieType.Comedy],
      detail:
        "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
      actor: ["Paul Rudd", "Michael Douglas", "Evangeline Lilly"],
    },
    releasedate: new Date("July 17, 2015").getTime(), // Release date: July 17, 2015
    created: Date.now(),
    updated: Date.now(),
  },
  {
    movieId: uuidv4(),
    name: "Captain America: Civil War",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/53/Captain_America_Civil_War_poster.jpg",
    description:
      "Political interference in the Avengers' activities causes a rift between former allies Captain America and Iron Man.",
    uploaderId: "cybercat",
    details: {
      country_name: COUNTRY_NAME.English,
      type: [MovieType.SuperHeroes, MovieType.Action, MovieType.Thriller],
      detail:
        "Political interference in the Avengers' activities causes a rift between former allies Captain America and Iron Man.",
      actor: ["Chris Evans", "Robert Downey Jr.", "Scarlett Johansson"],
    },
    releasedate: new Date("May 6, 2016").getTime(), // Release date: May 6, 2016
    created: Date.now(),
    updated: Date.now(),
  },
  {
    movieId: uuidv4(),
    name: "Doctor Strange",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c7/Doctor_Strange_poster.jpg",
    description:
      "A former neurosurgeon embarks on a journey of healing only to be drawn into the world of the mystic arts.",
    uploaderId: "cybercat",
    details: {
      country_name: COUNTRY_NAME.English,
      type: [MovieType.SuperHeroes, MovieType.Action, MovieType.Fantasy],
      detail:
        "After a tragic car accident, talented neurosurgeon Dr. Stephen Strange must put ego aside and learn the secrets of a hidden world of mysticism and alternate dimensions. Based in New York City's Greenwich Village, Doctor Strange must act as an intermediary between the real world and what lies beyond, utilizing a vast array of metaphysical abilities and artifacts to protect the Marvel Cinematic Universe.",
      actor: ["Benedict Cumberbatch", "Chiwetel Ejiofor", "Rachel McAdams"],
    },
    releasedate: new Date("November 4, 2016").getTime(), // Release date: November 4, 2016
    created: Date.now(),
    updated: Date.now(),
  },
  {
    movieId: uuidv4(),
    name: "Guardians of the Galaxy Vol. 2",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/ab/Guardians_of_the_Galaxy_Vol_2_poster.jpg",
    description:
      "The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage.",
    uploaderId: "cybercat",
    details: {
      country_name: COUNTRY_NAME.English,
      type: [MovieType.SuperHeroes, MovieType.Action, MovieType.Adventure],
      detail:
        "The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage.",
      actor: ["Chris Pratt", "Zoe Saldana", "Dave Bautista"],
    },
    releasedate: new Date("May 5, 2017").getTime(), // Release date: May 5, 2017
    created: Date.now(),
    updated: Date.now(),
  },
];

export default movies;
