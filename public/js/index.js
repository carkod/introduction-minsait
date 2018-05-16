import fetchPeople from './people.js';
import fetchCompany from './company.js';
import changeSection from './changeSection.js';
// Entry point

(function() {
  console.log('App inicializado');
  changeSection();
  fetchPeople();
  fetchCompany();
}());
