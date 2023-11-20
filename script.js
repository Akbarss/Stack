  // class Stack {
  //   constructor() {
  //     this.items = [];
  //   }

  //   push(element) {
  //     this.items.push(element);
  //   }

  //   pop() {
  //     if (this.items.length === 0) {
  //       return "Stack Empty";
  //     }
  //     return this.items.pop();
  //   }

  //   peek() {
  //     return this.items[this.items.length - 1];
  //   }

  //   isEmpty() {
  //     return this.items.length === 0;
  //   }

  //   size() {
  //     return this.items.length;
  //   }
  // }

  // let myStack = new Stack();
  // myStack.push(1);
  // myStack.push(2);
  // myStack.push(3);

  // console.log("Вершина стека:", myStack.peek());
  // console.log("Размер стека:", myStack.size());

  // myStack.pop();
  // console.log("Стек после удаления элемента:", myStack.items);

//---- Stack V2 ------

// Создаем класс Stack
class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  // Добавление элемента в стек
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  // Удаление элемента из стека
  pop() {
    if (this.isEmpty()) {
      return "Стек пуст";
    }
    this.count--;
    const removedItem = this.items[this.count];
    delete this.items[this.count];
    return removedItem;
  }

  // Просмотр вершины стека
  peek() {
    if (this.isEmpty()) {
      return "Стек пуст";
    }
    return this.items[this.count - 1];
  }

  // Проверка на пустоту
  isEmpty() {
    return this.count === 0;
  }

  // Получение размера стека
  size() {
    return this.count;
  }
}

// Использование класса Stack
let myStack2 = new Stack();
myStack2.push(1);
myStack2.push(2);
myStack2.push(3);
myStack2.push(40)

console.log("Вершина стека:", myStack2.peek());
console.log("Размер стека:", myStack2.size());

myStack2.pop();
console.log("Стек после удаления элемента:", myStack2.items);

// class Stack {
//   constructor() {
//     this.items = [];
//     this.count = 0;
//   }

//   // Metot Push
//   push(el) {
//     this.items[this.count] = el;
//     console.log(`${el} added to ${this.count}`)
//     this.count += 1;
//     return this.count - 1;
//   }
// }

// const stack = new Stack();

// stack.push(100);
// stack.push(200);
// stack.push(300);
