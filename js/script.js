
const icons = [
    {
      name: 'cat',
      prefix: 'fa-cat',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-crow',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-dog',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-dove',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-dragon',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-horse',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-hippo',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-fish',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-carrot',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-apple-alt',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-lemon',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-pepper-hot',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-user-astronaut',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-user-graduate',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-user-ninja',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-user-secret',
      type: 'user',
      family: 'fas',
    },
  ];

print(icons);

const colorAnimal = 'red';
const colorUser = '';
const colorVegetable = '';


const addColor = icons.map((element) => {

  const {name, prefix, type, family} = element;

  if (type === 'user') {
    color = colorAnimal;
  }


  return {
   color
  }
});





// FUNZIONI

function print(array) {
  array.forEach((element) => {

    const {name, prefix, family} = element;

    document.getElementById('icons').innerHTML += 

    `
        <div class="box1">
            <span><i class="${prefix} ${family}"></i><p>${name}</p></span>
        </div>
        
    `

  });

}
