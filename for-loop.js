for(i = 0; i < 10; i++){
    console.log(i);
}
for(i = 0; i <= 10; i++){
    console.log(i);
}
console.log("============This is part of array element==========")
var nameOfFreinds = ['korim', 'rohim', 'fokir', 'solim'];
for( i = 0; i < nameOfFreinds.length; i++){
    var listOfName = nameOfFreinds[i];
    console.log(listOfName);
}
nameOfFreinds.shift('korim');
console.log(nameOfFreinds);
for( i = 0; i < nameOfFreinds.length; i++){
    var listOfName = nameOfFreinds[i];
    console.log(listOfName);
}