import errorHandler from './error.js';

export default function fetchCompany(url) {
  console.log('empezando fetchCompany');
  fetch('http://localhost:3000/company').then((response) => {

    response.json().then((company) => {

      const plantilla = document.getElementById('entities').innerHTML;
      const envoltorio = document.createElement('span');

        company.forEach((person) => {

          const el = document.createElement('div')
          el.innerHTML = plantilla;
           // Tranversing
           const nameEl = el.querySelectorAll('.card > .content .name')[0];
           const imgEl = el.querySelectorAll('.card > .content .suffix')[0];
           const idEl = el.querySelectorAll('.card > .content .meta .id')[0];
           const address = el.querySelectorAll('.card > .content .meta .address')[0];

           // Asume estructura de datos fija
            idEl.appendChild(document.createTextNode('ID: ' + person.id))
            imgEl.setAttribute('src', person.image)
            nameEl.appendChild(document.createTextNode(person.name))
            address.appendChild(document.createTextNode(person.address))

            // console.log(envoltorio)
            envoltorio.appendChild(el)
          })
          document.getElementById('entities').appendChild(envoltorio)

      });

    })
    .catch((err) => {
      errorHandler(err)
      return err;
    });

}
