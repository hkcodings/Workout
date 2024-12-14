//Creating Object
const cat = {
    "Name": "Sonu",
    "Age": 20
};

console.log(cat);

//Accessing Object properties through dot and bracket operator
    const Person1 = {
        "Name": "Sonu",
        "Age": 20
    };

    const personValue1 = Person1.Name;
    console.log(personValue1);

    //Through Bracket Notation
    const Person2 = {
        "Name": "Sanju",
        "Age": 35
    };
    
    const personValue2 = Person2.Name;
    console.log(personValue2);
        
//Updating Object properties through dot or bracket notation
const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };

  ourDog.name = "Happy Camper";
  ourDog["name"] = "Happy Camper";

  console.log(ourDog);

//Add New Properties to a JavaScript Object
const ourDog1 = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };

  ourDog1.bark = "bow-wow";
  console.log(ourDog1);

//Delete Properties from a JavaScript Object
const ourDog2 = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
  };
  
  delete ourDog2.bark;
  console.log(ourDog2);

//Testing Objects for Properties
function checkForProperty(object, property) {
    return object.hasOwnProperty(property);
  }
  
  const a1 = checkForProperty({ top: 'hat', bottom: 'pants' }, 'top');
  const a2 = checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle');

  console.log(a1,a2);

//Accessing Nested Objects
const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

const ourStorageContents1 = ourStorage.cabinet["top drawer"].folder2;
const ourStorageContents2 = ourStorage.desk.drawer;
console.log(ourStorageContents1,ourStorageContents2);
  
//Record Collection Small Project

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "") {
    if (records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [];
    }
    records[id][prop].push(value);
  }
  return records;
}

const recordAns = updateRecords(recordCollection, 5439, 'artist', 'ABBA');
console.log(recordAns);