// Домашнее задание

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной строки кода.

const arr = [1, 5, 7, 9];
// const minValue = Math.min(...arr);
// console.log(minValue);
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement.
//Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1.
//Значение счетчика должно быть доступно только через методы объекта, а не напрямую.Добавь третий метод для получения значени числа.

function createCounter(initialValue) {
	function increment(argument) {
		return (initialValue += argument);
	}
	function decrement(argument) {
		return (initialValue -= argument);
	}
	function getElement() {
		return initialValue;
	}
	return { increment, decrement, getElement };
}
const counter = createCounter(33);
console.log(counter.increment(10));
console.log(counter.decrement(10));
console.log(counter.getElement(10));

// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.
// Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);

function findElementByClass(rootElement, className) {
  // Проверяем, что rootElement не равен null
  if (!rootElement) {
    return null;
  }

  // Проверяем, является ли текущий элемент искомым
  if (rootElement.classList.contains(className)) {
    return rootElement;
  }

  // Проверяем дочерние элементы
  const children = rootElement.children;
  for (let i = 0; i < children.length; i++) {
    const result = findElementByClass(children[i], className);
    if (result) {
      return result;
    }
  }

  // Если не найден, возвращаем null
  return null;
}
/// подсмотрел, извиняюсь

