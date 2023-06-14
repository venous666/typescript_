function printName(
    obj: {name:string, age:number}
)
{
    console.log(`This person is called ${obj.name} and he is ${obj.age} old`)
}

let person1 = {name: 'Andressa', age: 16}
printName(person1);