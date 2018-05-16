const companyURL = 'http://localhost:3000/company';
const peopleURL = 'http://localhost:3000/people';

const testFetch = (url) => {
  const oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", url);
  oReq.send();
}
