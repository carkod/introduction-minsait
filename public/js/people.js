import errorHandler from './error.js';

export default function fetchPeople(url) {
  console.log('empezando fetchPeople');
  fetch('http://localhost:3000/people').then(function(response) {

    response.json().then((people) => {

     const plantilla = document.getElementById('humans').innerHTML;
     const envoltorio = document.createElement('div');

       people.forEach((person) => {

         const el = document.createElement('div');
         el.classList.add('card');
         envoltorio.classList.add('ui');
         envoltorio.classList.add('cards');
         el.innerHTML = plantilla;
          // Tranversing
          const nameEl = el.querySelectorAll('.card > .content .name')[0];
          const imgEl = el.querySelectorAll('.card > .image > .image')[0];
          const idEl = el.querySelectorAll('.card > .content .meta .id')[0];

          // Asume estructura de datos fija
           idEl.appendChild(document.createTextNode(person.id))
           imgEl.setAttribute('src', person.image)
           nameEl.appendChild(document.createTextNode(person.name))


           // console.log(envoltorio)
           envoltorio.appendChild(el)
         })
         document.getElementById('humans').appendChild(envoltorio)

      });

    })
    .catch((err) => {
      errorHandler(err)
      return err;
    });

}
