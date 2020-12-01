const credit = 23580;
const pricePerDroid = 3000;

let orderDroid = prompt(`Введите количество дроидов для покупки. Стоимость 1 дроида ${pricePerDroid} кредитов. Ваш баланс ${credit} кредитов`);

const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let message;

if (orderDroid === null) {
  message = CANCELED_BY_USER;
}

else if (orderDroid * pricePerDroid > credit) {
  message = ACCESS_DENIED;
}

  else  {
  const balanceCredit = credit - orderDroid * pricePerDroid
  orderDroid = Number(orderDroid);
  message = `Куплено  ${orderDroid} дроид_(а)(ов). Остаток кредитов ${balanceCredit} `;
  }

console.log(message);

