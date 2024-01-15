const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const splitTutorial = tutorials.map((tutorial) => tutorial.split(" "))
  const capSplitTutorial = splitTutorial.map((tutorial) => tutorial.map((word) => word.charAt(0).toUpperCase() + word.slice(1)))
  const newTutorial = capSplitTutorial.map((tutorials) => tutorials.join(" "))
  return newTutorial
}; 
console.log(titleCased());
