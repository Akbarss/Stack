// JavaScript для управления стеком
document.addEventListener("DOMContentLoaded", function () {
  let stack = [];

  function updateStackView() {
    const stackContainer = document.getElementById("stack-container");
    stackContainer.innerHTML = "";
    stack.forEach((item) => {
      const stackItem = document.createElement("div");
      stackItem.className = "stack-item";
      stackItem.textContent = item;
      stackContainer.appendChild(stackItem);
    });
  }

  document.getElementById("add-btn").addEventListener("click", function () {
    const newItem = prompt("Введите новый элемент:");
    if (newItem !== null) {
      stack.push(newItem);
      updateStackView();
    }
  });

  document.getElementById("remove-btn").addEventListener("click", function () {
    if (stack.length > 0) {
      const removedItem = stack.pop();
      alert("Извлеченный элемент из стека: " + removedItem);
      updateStackView();
    } else {
      alert("Стек пуст!");
    }
  });
});
