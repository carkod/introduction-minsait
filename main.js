module.exports = () => {
  const faker = require('faker');
  const _ = require('lodash');

  return {
    people: _.times(22, (n) => ({
      id: n,
      name: faker.name.findName(),
      image: faker.image.avatar()
    })),
    company: _.times(5, (n) => ({
      id: n,
      name: faker.company.companyName(),
      suffix: faker.company.companySuffix(),
      address: faker.address.streetAddress()
    }))
  }
}
