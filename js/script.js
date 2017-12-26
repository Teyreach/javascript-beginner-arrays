var female = ['Magda', 'Sylwia', 'Anna', 'Zofia'];
var male = ['Tomasz', 'Bartosz', 'Mieszko', 'Zygmunt'];
var allNames = female.concat(male);
// allNames(male+female)
console.log(allNames);
 var newName = 'Marian'
 if (allNames.indexOf(newName) === -1){
	 allNames.push(newName);
 }
	 
 console.log(allNames);