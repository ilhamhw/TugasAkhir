/// <reference types="cypress" />

describe('Reqres API testing', () => {
    it('Post API Testing', () => {
      const requestBody = {
        name: 'ilham',
        job: 'QA Enginner'
      };

        cy.request('POST', 'https://reqres.in/api/users', requestBody)
          .then((response) => {
            expect(response.status).to.eq(201); //status yang tepat untuk POST biasanya 201
            expect(response.body).to.not.be.null;
            expect(response.body.name).to.eq(requestBody.name);
            expect(response.body.job).to.eq(requestBody.job);
          });
    });
});