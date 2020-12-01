const CHINA = "китай";
const CHILIE = "чили";
const AUSTRALIA = "австралия"; 
const INDIA = "индия";
const JAMAICA = "ямайка";

let price;
let deliveryToTheCountry = prompt('Страна доставки');
deliveryToTheCountry = deliveryToTheCountry.toLowerCase();

switch (deliveryToTheCountry) {

  case CHINA:
    price = 100;
    deliveryToTheCountry = "Китай";
    alert (`Доставка в ${deliveryToTheCountry} будет стоить ${price} кредитов`)
    break;

  case CHILIE:
    price = 250;
    deliveryToTheCountry = "Чили";
    alert (`Доставка в ${deliveryToTheCountry} будет стоить ${price} кредитов`)
    break;

  case AUSTRALIA:
    price = 170;
    deliveryToTheCountry = "Австралия";
    alert (`Доставка в ${deliveryToTheCountry} будет стоить ${price} кредитов`)
    break;

  case INDIA:
    price = 80;
    deliveryToTheCountry = "Индия";
    alert (`Доставка в ${deliveryToTheCountry} будет стоить ${price} кредитов`)
    break;

  case JAMAICA:
    price = 120;
    deliveryToTheCountry = "Ямайка";
    alert (`Доставка в ${deliveryToTheCountry} будет стоить ${price} кредитов`)
    break;

  default:
    alert (`В вашей стране доставка не доступна`);
}

