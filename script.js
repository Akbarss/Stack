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
myStack2.push(40);

console.log("Вершина стека:", myStack2.peek());
console.log("Размер стека:", myStack2.size());

myStack2.pop();
console.log("Стек после удаления элемента:", myStack2.items);
