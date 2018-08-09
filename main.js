const players = [
  { firstName: "Petr", lastName: "Cech", position: "GK", DOB: 1982, Country: "Czech Republic", number: 1},
  { firstName: "David", lastName: "Ospinia", position: "GK", DOB: 1988, Country: "Colombia", number: 13 },
  { firstName: "Bernd", lastName: "Leno", position: "GK", DOB: 1992, Country: "Germany", number: 19 },
  { firstName: "Damian", lastName: "MArtinez", position: "GK", DOB: 1992, Country: "Spain", number: 26 },
  { firstName: "Hector", lastName: "Bellerin", position: "RB", DOB: 1995, Country: "Spain", number: 2 },
  { firstName: "Sokratis", lastName: "Papastathopoulos", position: "CB", DOB: 1988, Country: "Greece", number: 5 },
  { firstName: "Laurent", lastName: "Koscielny", position: "CB", DOB: 1985, Country: "France", number: 6 },
  { firstName: "Stephan", lastName: "Lichtsteiner", position: "RB", DOB: 1984, Country: "Switzerland", number: 12 },
  { firstName: "Rob", lastName: "Holding", position: "CB", DOB: 1995, Country: "England", number: 16 },
  { firstName: "Nacho", lastName: "Monreal", position: "LB", DOB: 1986, Country: "Spain", number: 18 },
  { firstName: "Shkodran", lastName: "Mustafi", position: "CB", DOB: 1992, Country: "Germany", number: 20 },
  { firstName: "Calum", lastName: "Chambers", position: "CB", DOB: 1995, Country: "England", number: 21 },
  { firstName: "Carl", lastName: "Jenkinson", position: "RB", DOB: 1992, Country: "England", number: 25 },
  { firstName: "Konstantinos", lastName: "Mavropanos", position: "CB", DOB: 1996, Country: "Greece", number: 27 },
  { firstName: "Sead", lastName: "Kolasinac", position: "LB", DOB: 1993, Country: "Bosnia", number: 31 },
  { firstName: "Mohamed", lastName: "Elneny", position: "CDM", DOB: 1992, Country: "Egypt", number: 4 },
  { firstName: "Henrikh", lastName: "Mkhitaryan", position: "RM", DOB: 1989, Country: "Armenia", number: 7 },
  { firstName: "Aaron", lastName: "Ramsey", position: "CM", DOB: 1990, Country: "Wales", number: 8 },
  { firstName: "Mesut", lastName: "Ozil", position: "CAM", DOB: 1988, Country: "Germany", number: 10 },
  { firstName: "Lucas", lastName: "Torreira", position: "CDM", DOB: 1996, Country: "Uruguay", number: 11 },
  { firstName: "Ainsley", lastName: "Maitland-Niles", position: "CM", DOB: 1997, Country: "England", number: 15 },
  { firstName: "Matteo", lastName: "Guendouzi", position: "CM", DOB: 1999, Country: "France", number: 29 },
  { firstName: "Granit", lastName: "Xhaka", position: "CDM", DOB: 1992, Country: "Switzerland", number: 34 },
  { firstName: "Alexandre", lastName: "Lacazette", position: "ST", DOB: 1991, Country: "France", number: 9 },
  { firstName: "Pierre-Emerick", lastName: "Aubameyang", position: "ST", DOB: 1989, Country: "Gabonese", number: 14 },
  { firstName: "Alex", lastName: "Iwobi", position: "ST", DOB: 1996, Country: "Nigeria", number: 17 },
  { firstName: "Danny", lastName: "Welbeck", position: "ST", DOB: 1990, Country: "England", number: 23 }
];

//Arsenal Players 27 or younger
const younger = players.filter(age =>{
    if(age.DOB >= 1991){
        return true;
    }
});

console.table(younger);

//Arsenal PLayers older than 27

const older = players.filter(age =>{
    if(age.DOB <= 1990){
        return true;
    }
});

console.table(older);

//Sorting Arsenal Players by age
const ordered = players.sort((a,b) => a.DOB < b.DOB ? 1 : -1);
console.table(ordered);

//Total Age of all Arsenal players
const totalAge = players.reduce((total, i) => {
    return total + (2018 - i.DOB);
}, 0);
console.log(totalAge);

//sort by position
const pos = players.reduce((obj,item) => {
    if(!obj[item.position]){
        obj[item.position] = 0;
    }
    obj[item.position]++;
    return obj;
}, {});
console.table(pos);


//push data to DOM
players.forEach((v, i) => {
    var td = document.createElement('td');
    
    if (!(i % 5)) {
        tr = document.createElement('tr');
        document.getElementById('table0').appendChild(tr);
    }
    td.appendChild(document.createTextNode(v));
    tr.appendChild(td);
});