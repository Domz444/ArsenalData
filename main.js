const players = [
  {
    FirstName: "Petr",
    LastName: "Cech",
    Position: "GK",
    DOB: 1982,
    Country: "Czech Republic",
    ShirtNumber: 1
  },
  {
    FirstName: "David",
    LastName: "Ospinia",
    Position: "GK",
    DOB: 1988,
    Country: "Colombia",
    ShirtNumber: 13
  },
  {
    FirstName: "Bernd",
    LastName: "Leno",
    Position: "GK",
    DOB: 1992,
    Country: "Germany",
    ShirtNumber: 19
  },
  {
    FirstName: "Damian",
    LastName: "MArtinez",
    Position: "GK",
    DOB: 1992,
    Country: "Spain",
    ShirtNumber: 26
  },
  {
    FirstName: "Hector",
    LastName: "Bellerin",
    Position: "RB",
    DOB: 1995,
    Country: "Spain",
    ShirtNumber: 2
  },
  {
    FirstName: "Sokratis",
    LastName: "Papastathopoulos",
    Position: "CB",
    DOB: 1988,
    Country: "Greece",
    ShirtNumber: 5
  },
  {
    FirstName: "Laurent",
    LastName: "Koscielny",
    Position: "CB",
    DOB: 1985,
    Country: "France",
    ShirtNumber: 6
  },
  {
    FirstName: "Stephan",
    LastName: "Lichtsteiner",
    Position: "RB",
    DOB: 1984,
    Country: "Switzerland",
    ShirtNumber: 12
  },
  {
    FirstName: "Rob",
    LastName: "Holding",
    Position: "CB",
    DOB: 1995,
    Country: "England",
    ShirtNumber: 16
  },
  {
    FirstName: "Nacho",
    LastName: "Monreal",
    Position: "LB",
    DOB: 1986,
    Country: "Spain",
    ShirtNumber: 18
  },
  {
    FirstName: "Shkodran",
    LastName: "Mustafi",
    Position: "CB",
    DOB: 1992,
    Country: "Germany",
    ShirtNumber: 20
  },
  {
    FirstName: "Calum",
    LastName: "Chambers",
    Position: "CB",
    DOB: 1995,
    Country: "England",
    ShirtNumber: 21
  },
  {
    FirstName: "Carl",
    LastName: "Jenkinson",
    Position: "RB",
    DOB: 1992,
    Country: "England",
    ShirtNumber: 25
  },
  {
    FirstName: "Konstantinos",
    LastName: "Mavropanos",
    Position: "CB",
    DOB: 1996,
    Country: "Greece",
    ShirtNumber: 27
  },
  {
    FirstName: "Sead",
    LastName: "Kolasinac",
    Position: "LB",
    DOB: 1993,
    Country: "Bosnia",
    ShirtNumber: 31
  },
  {
    FirstName: "Mohamed",
    LastName: "Elneny",
    Position: "CDM",
    DOB: 1992,
    Country: "Egypt",
    ShirtNumber: 4
  },
  {
    FirstName: "Henrikh",
    LastName: "Mkhitaryan",
    Position: "RM",
    DOB: 1989,
    Country: "Armenia",
    ShirtNumber: 7
  },
  {
    FirstName: "Aaron",
    LastName: "Ramsey",
    Position: "CM",
    DOB: 1990,
    Country: "Wales",
    ShirtNumber: 8
  },
  {
    FirstName: "Mesut",
    LastName: "Ozil",
    Position: "CAM",
    DOB: 1988,
    Country: "Germany",
    ShirtNumber: 10
  },
  {
    FirstName: "Lucas",
    LastName: "Torreira",
    Position: "CDM",
    DOB: 1996,
    Country: "Uruguay",
    ShirtNumber: 11
  },
  {
    FirstName: "Ainsley",
    LastName: "Maitland-Niles",
    Position: "CM",
    DOB: 1997,
    Country: "England",
    ShirtNumber: 15
  },
  {
    FirstName: "Matteo",
    LastName: "Guendouzi",
    Position: "CM",
    DOB: 1999,
    Country: "France",
    ShirtNumber: 29
  },
  {
    FirstName: "Granit",
    LastName: "Xhaka",
    Position: "CDM",
    DOB: 1992,
    Country: "Switzerland",
    ShirtNumber: 34
  },
  {
    FirstName: "Alexandre",
    LastName: "Lacazette",
    Position: "ST",
    DOB: 1991,
    Country: "France",
    ShirtNumber: 9
  },
  {
    FirstName: "Pierre-Emerick",
    LastName: "Aubameyang",
    Position: "ST",
    DOB: 1989,
    Country: "Gabonese",
    ShirtNumber: 14
  },
  {
    FirstName: "Alex",
    LastName: "Iwobi",
    Position: "ST",
    DOB: 1996,
    Country: "Nigeria",
    ShirtNumber: 17
  },
  {
    FirstName: "Danny",
    LastName: "Welbeck",
    Position: "ST",
    DOB: 1990,
    Country: "England",
    ShirtNumber: 23
  }
];

//Arsenal Players 27 or younger
const younger = players.filter(age => {
  if (age.DOB >= 1991) {
    return true;
  }
});

console.table(younger);

//Arsenal PLayers older than 27

const older = players.filter(age => {
  if (age.DOB <= 1990) {
    return true;
  }
});

console.table(older);

//Sorting Arsenal Players by age
const ordered = players.sort((a, b) => (a.DOB < b.DOB ? 1 : -1));
console.table(ordered);

//Total Age of all Arsenal players
const totalAge = players.reduce((total, i) => {
  return total + (2018 - i.DOB);
}, 0);
console.log(totalAge);

//sort by Position
const pos = players.reduce((obj, item) => {
  if (!obj[item.Position]) {
    obj[item.Position] = 0;
  }
  obj[item.Position]++;
  return obj;
}, {});
console.table(pos);

//push data to DOM in a table
players.forEach((player, item) => {
  tr = document.createElement("tr");
  document.getElementById("table0").appendChild(tr);

  for(var i in player){
    var td = document.createElement("td");
    td.appendChild(document.createTextNode(i + " : " + player[i]));
    tr.appendChild(td);
  }
  
});
