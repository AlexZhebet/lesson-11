// // const obj = {
// //     name: "John",
// //     age: 30,
// //     city: "New York",
// //     salary: 2500
// // };


// // // obj['lastName'] = 'Joe'


// // // console.log(obj)



// // console.log(getNumberProperties(obj)); // Output: { age: 30, salary: 2500 }

// // function getNumberProperties (obj) {
// //   let newObj = {};
// //   for (let key in obj) {
// //     console.log(key)
// //     console.log(obj[key])
// //     if (typeof obj[key] === 'number') {
// //       newObj[key] = obj[key]
// //       //  newObj.age = 30
// //     } 
// //   }
// //   return newObj
// // }




// // const arr = [1, 'Hello', true, {name: 'John'}, [1, 2, 3], null, undefined];
// // //{number: 1, string: 1, boolean: 1, object: 2, array: 1, null: 1, undefined: 1};

// // function countTypes(arr){
// //   const newObj = {};
  
// //   for (let i = 0; i<arr.length; i++){
// //     let typeOfEl = typeof arr[i];
// //     if(Array.isArray(arr[i]) || null === arr[i]){
// //   		typeOfEl = Array.isArray(arr[i]) ? 'array' : 'null'
// //     }
// //     if(!newObj[typeOfEl] ){
// //       newObj[typeOfEl] = 1;
// //     } else{ 
// //       newObj[typeOfEl]++
// //     }
// //   }
// //   return newObj
// // }





// // console.log(countTypes(arr))


// // let originalObject = { name: "John", age: 30 };
// // let obj2 = { city: "New York", country: "USA" };
// // let copiedObject = copyObject(originalObject);
// // console.log(copiedObject); // { name: "John", age: 30 }

// // function copyObject (obj){
// //   // return {...obj}
// //   return Object.assign({} ,obj, obj2)
// // }



// // let testObject = {a: 1, b: 2, c: 3};
// // console.log(invertObject(testObject)); // {1: "a", 2: "b", 3: "c"}

// // function invertObject(obj){
// //   let newObj={};
// //   for(let key in obj){
// //     newObj[obj[key]]=key;
// //   }
// //   return newObj
// // }


// // let people = [    { name: "John", age: 30 },    { name: "Jane", age: 25 },    { name: "Jim", age: 35 }];

// // console.log(getNames(people)); // ["John", "Jane", "Jim"]


// // function getNames(arr) {
// //   return arr.map(el => el.name)
// // //   let newArr = [];
// // //   for(let i = 0; i < arr.length; i++) {
// // //     newArr.push(arr[i].name)
// // //   }
// // //   return newArr;
// // }


// // const company = {
// //   employees: [
// //   { name: "John", position: "Manager", salary: 5000 },
// //   { name: "Jane", position: "Developer", salary: 41000 },
// //   { name: "Jim", position: "Designer", salary: 3000 },
// //   ],
// //   calculateTotalSalary: () => {
// //     let totalSalary = 0;
// //     for (let i = 0; i < this.employees.length; i++) {
// //       // console.log(this) Весь company
// //       totalSalary += this.employees[i].salary;
// //     }
// //     return totalSalary;
// //   }
  
// // }



// // console.log(company.calculateTotalSalary())




// const products = [
//     { 
//       name: "Table", 
//       price: 100, 
//       discountPercent: 20,
//     },
//     { 
//       name: "car", 
//       price: 1000, 
//       discountPercent: 8,
//     },
//      { 
//       name: "chair", 
//       price: 30, 
//       discountPercent: 3,
//     },
//     { 
//       name: "chair", 
//       price: 30, 
//       discountPercent: null,
//     }
//   ]
//   function calculateDiscountedPrice (product){
//     if (product.discountPercent){
//       return product.price - product.price * (product.discountPercent / 100)
//     }
//     return product.price
//   }
//   for( let i = 0; i <  products.length; i++){
//     console.log(`${products[i].name} price is ${calculateDiscountedPrice(products[i])}`)
//   }
  
  
  
//   // products[0].isdiscountPercent
  
//   // console.log(products[0].isdiscountPercent)
  
  
  
  
  
  
  
  
  
  
  
  
//   ///////////////////////////////////// code share
//   //Напишите функцию, которая принимает объект и возвращает количество свойств в этом объекте.
  
//   const obj = {
//       name: "John",
//       age: 30,
//       city: "New York"
//   };
  
  
//   console.log(Object.keys(obj).length));  // 3
  
  
//   // Напишите функцию, которая принимает объект и возвращает новый объект, содержащий только те свойства, значения которых являются числами.
  
//   const obj = {
//       name: "John",
//       age: 30,
//       city: "New York",
//       salary: 2500
//   };
  
  
  
//   console.log(getNumberProperties(obj)); // Output: { age: 30, salary: 2500 }
  
//   function getNumberProperties (obj) {
//     let newObj = {};
//     for (let key in obj) {
//       if (typeOf obj[key] === 'number') {
//         newObj[key] = obj[key]
//       } 
//     }
//     return newObj
//   }
  
  
//   // Напишите функцию, которая возвращает объект, который содержит количество каждого типа данных в массиве.
  
//   const arr = [1, 'Hello', true, {name: 'John'}, [1, 2, 3], null, undefined];
//   //{number: 1, string: 1, boolean: 1, object: 2, array: 1, null: 1, undefined: 1};
  
//   function countTypes(arr){
//     const newObj = {};
    
//     for (let i = 0; i<arr.length; i++){
//       let typeOfEl = typeof arr[i];
      
//       if(Array.isArray(arr[i]) || null === arr[i]){
//             typeOfEl = Array.isArray(arr[i]) ? 'array' : 'null'
//       }
      
//       if(!newObj[typeOfEl] ){
//         newObj[typeOfEl] = 1;
//       } else { 
//         newObj[typeOfEl]++
//       }
//     }
//     return newObj
//   }
  
  
  
//   // Напишите функцию, которая получает объект и возвращает его копию.
  
//   let originalObject = { name: "John", age: 30 };
//   let obj2 = { city: "New York", country: "USA" };
//   let copiedObject = copyObject(originalObject);
//   console.log(copiedObject); // { name: "John", age: 30 }
  
//   function copyObject (obj){
//     // return {
//   //   ...obj,
//       // 	...obj2,
//     // key: prop,
//   // }
//     const newObj = {}
//   // return Object.assign({} ,obj, obj2)
//     for (let key in obj) {
//       newObj[key] = obj[key]     
//     }
//     return newObj
//   }
  
  
//   // 6. Написать функцию, которая принимает объект и возвращает новый объект с инвертированными ключами и значениями.
  
//   let testObject = {a: 1, b: 2, c: 3};
//   console.log(invertObject(testObject)); // {1: "a", 2: "b", 3: "c"}
  
//   function invertObject(obj){
//     let newObj={};
//     for(let key in obj){
//       newObj[obj[key]] = key;
//     }
//   }
  
  
//   //Написать функцию, которая принимает массив объектов и возвращает новый массив со свойствами "name" из каждого объекта.
  
//   let people = [    { name: "John", age: 30 },    { name: "Jane", age: 25 },    { name: "Jim", age: 35 }];
  
//   console.log(getNames(people)); // ["John", "Jane", "Jim"]
  
  
//   function getNames(arr) {
//     return arr.map(el => el.name)
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++) {
//       newArr.push(arr[i].name)
//     }
//     return newArr;
//   }
  
//   // Создать объект "employee" с полями "name", "position", "salary". 
//   // Создать метод, которая будет вычислять общую сумму зарплаты всех сотрудников.
  
//   const company = {
//     employees: [
//     { name: "John", position: "Manager", salary: 5000 },
//     { name: "Jane", position: "Developer", salary: 4000 },
//     { name: "Jim", position: "Designer", salary: 3000 },
//     ],
//     calculateTotalSalary() {
//       let totalSalary = 0;
//       for (let i = 0; i < this.employees.length; i++) {
//         // console.log(this) Весь company
//         totalSalary += this.employees[i].salary;
//       }
//       return totalSalary;
//     }
    
//   }
  
  
  
//   console.log(company.calculateTotalSalary()) // 12000
  
  
  
//   // Создать функцию, которая будет вычислять цену со скидкой если она есть.
  
//   // цена - цена * (скидка /100)
  
  const products = [
    { 
      name: "Table", 
      price: 100, 
      discountPercent: 20,
    },
    { 
      name: "car", 
      price: 1000, 
      discountPercent: 8,
    },
     { 
      name: "chair", 
      price: 30, 
      discountPercent: 3,
    },
    { 
      name: "chair", 
      price: 30, 
      discountPercent: null,
    }
  ]
  
  
  const discountedPrice = calculateDiscountedPrice(products);
  // Ptoduct ${name} price is ${price}
  
  function calculateDiscountedPrice (product) {
    if (product.discountPercent) {
      return product.price - product.price * (product.discountPercent / 100)
    }
    return product.price
  }
  
  for( let i = 0; i <  products.length; i++){
    console.log(`${products[i].name} price is ${calculateDiscountedPrice(products[i])}`)
  }
  
//   //1. Создайте новый объект, содержащий только те ключи, которые указаны в массиве. 
  
//   let originalObject = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6};
//   let keysToInclude = ['a', 'c', 'e'];
  
//   console.log(newObject);
  
  
//   // Написать функцию, которая принимает два объекта и возвращает объект, содержащий те свойства, которые есть в обоих объектах.
  
//   const obj1 = {
//     a: 1,
//     b: 2,
//     c: 3
//   };
  
//   const obj2 = {
//     b: 4,
//     c: 5,
//     d: 6
//   };
  
//   console.log(intersect(ob  j1, obj2));
  
//   // Output: { b: 2, c: 3 }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  