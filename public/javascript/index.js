import  APIHandler from "./APIHandler.js"

const charactersAPI = new APIHandler('http://localhost:8000/characters');


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault();
    charactersAPI.getFullList().then(
      (response) => {
        console.log("response from API", response);
        const data = response.data;
  
        let str = '';
  
        data.forEach(charac => {str +=
          `<div class="character-info">
          <div class="name">${charac.name}</div>
          <div class="occupation">${charac.occupation}</div>
          <div class="cartoon">${charac.cartoon}</div>
          <div class="weapon">${charac.weapon}</div>
          </div>`
        });
        
        const charactersContainer = document.querySelector(".characters-container");
        console.log(charactersContainer)
        charactersContainer.innerHTML += str
      }
    )
    .catch((err) => {console.log(`There is an error :  ${err}`)});

  })

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();
    const inputValue = document.querySelector("input[name='character-id']").value
    charactersAPI.getOneRegister(inputValue).then((response) => {
      console.log("response from API", response);
      const data = response.data;

      let str = '';

      str +=
        `<div class="character-info">
        <div class="name">${data.name}</div>
        <div class="occupation">${data.occupation}</div>
        <div class="cartoon">${data.cartoon}</div>
        <div class="weapon">${data.weapon}</div>
        </div>`
      ;
      
      const charactersContainer = document.querySelector(".characters-container");
      console.log(charactersContainer)
      charactersContainer.innerHTML += str
    }
  )
  .catch((err) => {console.log(`There is an error :  ${err}`)});
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    const inputValue = document.querySelector("input[name='character-id-delete']").value
    charactersAPI.deleteOneRegister(inputValue).then((response) => {
      console.log("response from API", response)}).catch((err) => {console.log(`There is an error :  ${err}`)})
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const inputValue = document.querySelector("#edit-character-form input[name='chr-id']").value
    
    const nameValue = document.querySelector("#edit-character-form input[name='name']").value
    const occupationValue = document.querySelector("#edit-character-form input[name='occupation']").value
    const weaponValue = document.querySelector("#edit-character-form input[name='weapon']").value
    const cartoonValue = document.querySelector("#edit-character-form input[name='cartoon']").value

    const toEditValues = {nameValue,  occupationValue,  weaponValue, cartoonValue}
    charactersAPI.updateOneRegister(inputValue, toEditValues).then((response) => {
      console.log("response from API", response)}).catch((err) => {console.log(`There is an error :  ${err}`)})

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();


  });
});
