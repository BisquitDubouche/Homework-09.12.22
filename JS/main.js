// Запросить у пользователя 3 числа одним промптом, сохранить все числа в разные переменные, затем вывести их разность


// let num = +prompt('').split('');
// let result = num[0];
// let result1 = num[1];
// let result2 = num[2];
// console.log((+result)-(+result1)-(+result2));


// let num = prompt('У');
// let num2 = prompt('Й');
// if (num ==0 || num2 ==0){
//     alert('При умножении на ноль 0 любое число будет 0')
// } else {
//     alert((+num)*(+num2))
// }

// 2. Реализовать калькулятор(+, -, *, /), запросить у пользователя 2 числа и операцию, которую нужно произвести, обработать вариант того, что на ноль делить нельзя
// let num = +prompt();
// let num1 = +prompt();
// let oper = prompt();

// switch(oper){
//     case '+':
//         console.log(num+num1);
//         break;
//     case '-':
//         console.log(num-num1);
//         break;
//     case '*':
//         console.log(num*num1);
//         break;
//     case '/':
//         if (num ==0 || num1 == 0){
//             alert('На ноль делить нельзя')
//         } else {
//             console.log(num/num1);
//         }
//         break;
// }




// let username = prompt('enter your login');
// const pass = prompt('enter your password');
// let passCon = prompt('confirm your password');

// let obj;


// if (pass === passCon && pass.trim().length >=6 && pass.trim()){
//      obj = {username, pass, isAuth: false }  
// } else {
//     alert('Ошибка')
// }
// let auth = confirm();
// if (auth){
//     let login2 = prompt();
//     let pass2 = prompt();
//     if (pass2 === obj.pass && login2 == obj.username){
//         obj.isAuth = true;
//     console.log(obj); 
//     } else {
//         alert('Данные не совпадают')
//     }
// }


// / 3. Запросить у пользователя имя, возраст, профессию, хобби, сохранить данные в объект, распечатать результат, данные необходимо заросить одним промптом

// let data = prompt('Введите ваше имя, возраст, профессию, хобби');
// let obj = data.split(' ');

// let obj2 = {};

// obj2.name = obj[0];
// obj2.age = obj[1];
// obj2.profession = obj[2];
// obj2.hobby = obj[3];

// // let obj2 = {
// // name: 'Zhibek',
// // };
// // obj2.name = 'Vlad';
// // obj2.age = '25' 

// console.log(obj2);


// 6. Дан объект с продуктами:
// let products = {
//     'Milk': 100,
//     'Sugar': 70,
//     'Butter': 50,
//     'Bread': 20,
//     'Water': 30,
//     'Salt': 10
// }, запросить у пользователя одним промптом какие продукты он хочет приобрести, затем вывести сообщение с конечной суммой заказа



// let products = {
//     'Milk': 100,
//     'Sugar': 70,
//     'Butter': 50,
//     'Bread': 20,
//     'Water': 30,
//     'Salt': 10
// }

// let arr = products.split(' ');
// let productsSum = products[+arr[0]]+products[+arr[1]]+products[+arr[2]] 






// let desire = prompt();
// let res = desire.split(' ');
// console.log(res);
// let milk = desire.includes('Milk');
// let sugar = desire.includes('Sugar');
// let butter = desire.includes('Butter');
// let bread = desire.includes('Bread');
// let water = desire.includes('Water');
// let salt = desire.includes('Salt');
// let counter = 0;

//let products1;




// if (milk){
//     console.log(+products.Milk + +products.Sugar);
// }







// 1. Написать программу, которая будет имитировать счет в банке, сначала пользователю предлагается внести сумму на депозит(сумма должна быть положительной), затем необходимо спросить у пользователя, хочет ли он пойти за покупками, если нет, вывести сообщение типа: До встречи! Если он выберет вариант покупок, тогда необходимо запросить информацию о том, какой продукт он хочет купить и сколько он стоит(макс 3 продукта), продукты сохранить в отдельный объект в формате(название продукта: цена), также необходимо отнять стоимость продуктов от счета в банке, необходимо проверить достаточно ли средств, если средств недостаточно вывести ошибку. В конце работы программа должна распечатать объект с покупками и оставшуюся сумму на счете


// let per = +prompt('Внесите сумму на депозит');
// let bankAccount = per;
// if (per >= 0){
//     let con = confirm('Хотите ли вы сделать покупку')
//     if (con !== true) {
//         alert('До встречи!')
//     }
//     let milk  = prompt('milk: price ?');
//     let potato = prompt('potato: price ?');
//     let meat = prompt('meat: price ?');
//     let obj = {};
//     obj.milk = milk;
//     obj.potato = potato;
//     obj.meat = meat;
//     console.log(obj);
//     let ostatok = bankAccount - (+obj.milk) - (+obj.potato) - (+obj.meat);
//     if (bankAccount < (+obj.milk) + (+obj.potato) + (+obj.meat)) {
//         console.log('Недостаточно средства');
//     } else {
//         console.log(bankAccount- (+obj.milk) - (+obj.potato) - (+obj.meat));
//         alert(`Ваши покупки milk:${+obj.milk}, potato:${obj.potato}, meat:${obj.meat},  ostatok  ${ostatok}`)
//     }
  
// } 



// 5. Дан объект: 
// {
//     username: 'Tom',
//     age: 35,
//     work: 'IT',
//     pet: {
//         type: 'Cat',
//         name: 'Barsik',
//         color: 'White',
//         age: 3
//     }
// }, запросить у пользователя информацию о том, какой ключ он хочет изменить и значение на которое нужно менять данные под этим ключом, учесть, что есть вложенный объект

let obj = {
        username: 'Tom',
        age: 35,                                   // obj.key == obj[‘key’]
        work: 'IT',
        pet: {
        type: 'Cat',
        name: 'Barsik',
        color: 'White',
        age: 3
        }
    }
let auth = prompt();
switch(auth){
    case 'username':
        let username = prompt();
        obj.username = us;
        break;
    case 'age':
        let age = prompt();
        obj.age = age;
        break; 
    case 'work':
        let work = prompt();
        obj.work = work;
        break;
    case 'type':
        let type = prompt();
        obj.pet.type = type;
        break;
    case 'name':
        let namepet = prompt();
        obj.pet.type = namepet;
        break;
    case 'color':
        let color = prompt();
        obj.pet.color = color;
        break;
    case `pet age`:
        let age2 = prompt();
        obj.pet.age = age2;
    }
    console.log(obj);










// let res = obj.split(' ');
// let userName = auth.includes('username');
// let age = auth.includes('age');
// let work = auth.includes('work');
// let pet2 = obj.pet.split(' ');
// let type = auth.includes('type');
// let name = auth.includes('name');
// let color = auth.includes('color');
// let age1 = auth.includes('age');








