'use strict';

const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const CHECK_HOURS = ['12:00', '13:00', '14:00'];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const TITLES = [
  'Срочно сдаю квартиру',
  'Бунгало на длительный строк',
  'Букенгемский дворец',
  'Хостел Капсула',
  'Гостиничный комплекс',
  'Загородный дом с баней',
  'Лесной - то, что тебе нужно',
  'Горное шале',
  'Аппартаменты на 88 этаже',
  'комнаты на длительный срок во аппартаментах Синей Бороды',
];
const DESCRIPTIONS = [
  'квартира в центре города, метро в 10 минутах,истоические и туристические точки в пешей доступности, исторический центр. ',
  'На берегу океана, за символическую цену. Требуется кормить русалок по ночам',
  'Мы исполняем мечты',
  'Широкий выбор комнат аквариумов. Прочувствуй себя за стеклом',
  'Номера Люкс, прямо над мастерской шиномонтажа, прекрасное саунд сопровождение',
  'На берегу живописной реки - Гадючка, торфяные купальни, герудотерапия - БЕСПЛАТНО',
  'Там чудеса, там леший бродит',
  'Проведи отпуск в дали от цивилизации',
  'Почувствуй себя на вершине мира, каждому гостю - шампанское в подарок',
  'Только для представительниц прекрасного пола, романтическую обстановку и незабываемые впечатления ГАРАНТИРУЕМ!',
];
const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const Avatars = { MIN: 1, MAX: 100 };
const Price = { MIN: 100, MAX: 10000 };
const Rooms = { MIN: 1, MAX: 100 };
const Guests = { MIN: 1, MAX: 100 };
const LocationX = { MIN: 35.65, MAX: 35.7 };
const LocationY = { MIN: 139.7, MAX: 139.8 };
const CoordinatLenght = 5;

let OfferScore = 10;

const getPositiveInt = (num) => {
  return Math.trunc(Math.abs(num));
};

const getRandomInt = (num1, num2) => {
  let max = Math.max(getPositiveInt(num1), getPositiveInt(num2));
  let min = Math.min(getPositiveInt(num1), getPositiveInt(num2));
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getAvatar = (id) => {
  if (id) {
    return 'img/avatars/user' + '0' + id + '.png';
  } else {
    return 'img/avatars/default.png';
  }
};

const getAuthor = () => {
  return {
    avatar: getUrl(getRandomInt(1, 10)),
  };
};

const createOffer = () => {
  return {
    title: TITLES[getRandomInt(0, TITLES.length - 1)],
    address: getLocation(),
    price: getRandomInt(Price.MIN, Price.MAX),
    type: TYPES[getRandomInt(0, TYPES.length - 1)],
    rooms: getRandomInt(Rooms.MIN, Rooms.MAX),
    guests: getRandomInt(Guests.MIN, Guests.MAX),
    checkin: CHECK_HOURS[getRandomInt(0, CHECK_HOURS.length - 1)],
    checkout: CHECK_HOURS[getRandomInt(0, CHECK_HOURS.length - 1)],
    features: getRandomArray(FEATURES),
    description: DESCRIPTIONS[getRandomInt(0, DESCRIPTIONS.length - 1)],
    photos: getRandomArray(PHOTOS),
  };
};

const getRandomArray = (array) => {
  let newArray = [];
  let newArrayLength = getRandomInt(0, array.length);
  let item;
  for (let i = 0; i < newArrayLength; i++) {
    do {
      item = array[getRandomInt(0, array.length - 1)];
    } while (newArray.includes(item) === true);
    newArray.push(item);
  }
  return newArray;
};

const getRandomFloat = (num1, num2, lengthAfterDot) => {
  let max = Math.max(Math.abs(num1), Math.abs(num2));
  let min = Math.min(Math.abs(num1), Math.abs(num2));
  return (Math.random() * (max - min) + min).toFixed(lengthAfterDot);
};

const getLocation = () => {
  return {
    x: getRandomFloat(LocationX.MIN, LocationX.MAX, CoordinatLenght),
    y: getRandomFloat(LocationY.MIN, LocationY.MAX, CoordinatLenght),
  };
};

const generateMockOffers = (quantity) => {
  let offers = [];
  for (let i = 0; i < quantity; i++) {
    let offer = createOffer();
    offers.push(offer);
  }
  return offers;
};
console.log(generateMockOffers(OfferScore));
