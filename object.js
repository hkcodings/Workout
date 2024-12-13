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