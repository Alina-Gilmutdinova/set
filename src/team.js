//Создайте класс Team с методами add, addAll и toArray. 
//Класс должен хранить данные о персонажах команды в поле типа Set
//Метод add должен добавлять выбранного персонажа в команду (объект класса Character
//Метод addAll должен иметь возможность добавлять произвольное количество персонажей 


export default class Team {
   constructor() {
     this.members = new Set();
   }
 
   add(personage) {
     if (this.members.has(personage)) throw new Error(`${personage} is not type of Character or already available in this Set`);
     this.members.add(personage);
   }
 
   addAll(personages) {
     personages.forEach((item) => {
       this.members.add(item);
     });
   }
 
   toArray() {
     return [...this.members];
   }
 }