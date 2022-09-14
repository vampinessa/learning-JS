const MESSAGES = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра.",
  "В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
  "Лица у людей на фотке перекошены, как будто их избивают.",
  "как можно было поймать такой неудачный момент?!",
  "кгам",
  "awesome",
  "ох уж развелось этих криаторов",
  "никого не слушай, главное мне нравиться",
  "ништяк",
  "я нипонял",
  "Домовых гоняешь?",
  "а зря",
];

const NAMES = [
  "Борислав",
  "Боян",
  "Бронислав",
  "Бруно",
  "Василиса",
  "Венера",
  "Вера",
  "Мирослав",
  "Михаил",
  "Модест",
  "Моисей",
  "Мурат",
  "Муслим",
  "Павел",
  "Парамон",
  "Петр",
  "Платон",
  "Порфирий",
  "Прохор",
  "Ева",
  "Евгения",
  "Евдокия",
  "Екатерина",
  "Елена",
  "Елизавета",
];

const TITLES = [
  "Нв недельку, до второго, я уеду в Комарово!",
  "Го ту зе бич, бич",
  "море море, мир бездонный",
  "посмотрите на меня на нарядницу",
  "а вам слабо",
  "бетмобиль",
  "завтрак дюймовочки",
  "натур продукт",
  "самалет легко меня уносит",
  "Гуси гуси - шу, шу, шу",
  "WTF",
  "танки грязи не бояцца",
  "какая кошенька, такая и рыбонька",
  "Думаешь это прикольно",
  "зима, холода, одинокие ",
  "мне бы мне бы мне бы",
  "ща спою",
  "а я сяду в кабриолет",
  "больше не боюсь",
  "квадратишь, практишь, гуд",
  "Тай, тай, тай",
  "море солнце облака",
  "крабра адабра",
  "we were rock",
  "по долинам и по взморьям",
];

const Likes = { MIN: 0, MAX: 100 };
const IdScore = { MIN: 1, MAX: 100 };
const AvatarsId = { MIN: 1, MAX: 6 };

const COMMEMTS_ID = [];

let postsSum = 25;

const getPositiveInt = (num) => {
  return Math.trunc(Math.abs(num));
};

const getRandomInt = (num1, num2) => {
  let max = Math.max(getPositiveInt(num1), getPositiveInt(num2));
  let min = Math.min(getPositiveInt(num1), getPositiveInt(num2));
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createComment = () => {
  return {
    id: getId(COMMEMTS_ID, IdScore.MIN, IdScore.MAX),
    avatar: getUrl("avatar", getRandomInt(AvatarsId.MIN, AvatarsId.MAX)),
    message: getMessage(MESSAGES),
    name: NAMES[getRandomInt(0, NAMES.length - 1)],
  };
};

const getId = (idlist, min, max) => {
  let id;
  do {
    id = getRandomInt(min, max);
  } while (idlist.includes(id) === true);
  idlist.push(id);
  return id;
};

const getMessage = (commentsList) => {
  return commentsList[getRandomInt(0, commentsList.length - 1)];
};

const setComments = () => {
  let comments = [];
  let quantity = getRandomInt(0, 5);
  if (quantity === 0) {
    return;
  } else {
    for (let i = 0; i < quantity; i++) {
      let comment = createComment();
      comments.push(comment);
    }
  }
  return comments;
};

const getUrl = (type, number) => {
  if (type === "avatar") {
    return "img/avatar-" + number + ".svg";
  }
  return "photos/" + number + ".jpg";
};

const createPost = (intId) => {
  return {
    id: intId,
    url: getUrl("photo", intId),
    description: TITLES[--intId],
    likes: getRandomInt(Likes.MIN, Likes.MAX),
    comments: JSON.stringify(setComments()),
  };
};

const generateMockPosts = (quantityPosts) => {
  let postsList = [];
  for (let i = 1; i <= quantityPosts; i++) {
    postsList.push(createPost(i));
  }
  return postsList;
};

console.log(generateMockPosts(5));
