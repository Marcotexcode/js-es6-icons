
const icons = [

  {name:'cat', prefix:'fa-', type:'animal', family:'fas'}, 
  
  {name:'crow', prefix:'fa-', type:'animal', family:'fas', }, 
  
  {name:'dog', prefix:'fa-', type:'animal', family:'fas', }, 
  
  {name:'dove', prefix:'fa-', type:'animal', family:'fas', }, 
  
  {name:'dragon', prefix:'fa-', type:'animal', family:'fas', }, 
  
  {name:'horse', prefix:'fa-', type:'animal', family:'fas', }, 
  
  {name:'hippo', prefix:'fa-', type:'animal', family:'fas', }, 
  
  {name:'fish', prefix:'fa-', type:'animal', family:'fas', }, 
  
  {name:'carrot', prefix:'fa-', type:'vegetable', family:'fas', }, 
  
  {name:'apple-alt', prefix:'fa-', type:'vegetable', family:'fas', }, 
  
  {name:'lemon', prefix:'fa-', type:'vegetable', family:'fas', }, 
  
  {name:'pepper-hot', prefix:'fa-', type:'vegetable', family:'fas', }, 
  
  {name:'user-astronaut', prefix:'fa-', type:'user', family:'fas', }, 
  
  {name:'user-graduate', prefix:'fa-', type:'user', family:'fas', }, 
  
  {name:'user-ninja', prefix:'fa-', type:'user', family:'fas', }, 
  
  {name:'user-secret', prefix:'fa-', type:'user', family:'fas', }, 

];



const coloredArray = colorIcons(icons);

printIcons(coloredArray);

// aggiungere ogni type di elemento in un array usando il foreach
// e metterlo agiungere un tag option nell html

const types = [];

coloredArray.forEach((element) => {

  if(!types.includes(element.type)) {

    types.push(element.type);

    document.getElementById('type').innerHTML += 

    `
      <option value="${element.type}">${element.type}</option>
      
    `

  }

});


// FILTRARE LE ICONE 

const select = document.getElementById('type');

console.log(select);

select.addEventListener('change', function() {

  const valoreSelect = select.value; 

  console.log(valoreSelect);

  const filteredIcons = coloredArray.filter((element) => {

     return element.type == valoreSelect;

  });

  if(valoreSelect === 'ALL') {

    printIcons(coloredArray);

  }else {

    printIcons(filteredIcons);

  }

});






// **************************** FUNZIONI **************************** //



// **************************** FUNZIONE 1 **************************** //
// AGGIUNGE QUELLO CHE C'E DENTRO L'ARRAY DI OGGETTI E LO STAMPA NELLA PAGINA CON AGGIUNTA DI CSS 

function printIcons(array) {

  document.getElementById('icons').innerHTML = ''; // si aggiunge per filtrare le icone
  array.forEach((element) => {

    const {color, name, prefix, family} = element;

    document.getElementById('icons').innerHTML += 

    `
      <div class="box1 p-5 col-2 m-3  text-center">
          <span><i class="${family} ${prefix}${name}" style="color:${color}"></i><p>${name.toUpperCase()}</p></span>
      </div>
        
    `

  });

}
// ${family} ${prefix}${name} NAME DA IL NOME A PREFISSO PER POTER AVERE TUTTLE LE ICONE, SI DEVE SCRIVERE TUTTO ATTACATO



// **************************** FUNZIONE 2 **************************** //

// DA COLORE AGLI ELEMENTI

function colorIcons(array) {

  const coloredArray =  array.map((element) => {

    // aggiungere il colore creando una variabile e con una condizione fargli cambiare colore in base al (type)
    let color = 'purple';
  
    if (element.type == 'animal') {
  
      color = 'blue';
  
    } else if (element.type == 'vegetable') {
  
      color = 'orange';
    }
  
    return {
      ...element, // Questo e il metodo spred, oppure usare la destrutturazione
      color 
    }
  
  });

  return coloredArray;

}