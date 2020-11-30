let input;
let total = 0;

do{
  input = prompt ('Введите число');

  if (input === null) {
    console.log(`Общая сумма чисел равна ${total}`)
    break;
  }

  input = Number(input);

  const notANum = Number.isNaN(input);

  if (notANum) {
    console.log('Было введено не число, попробуйте еще раз')
    continue;
  }

  total += input;

} while (true)

