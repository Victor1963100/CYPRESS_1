/* eslint-disable indent */
describe('login screen', () => {
    it('Successful login with valid values ', () => {
        cy.visit('/');
        cy.login('test@test.com', 'test');
        cy.contains('Добро пожаловать test@test.com').should('be.visible');
    });

    it('Show error message on empty mail', () => {
        cy.visit('/');
        cy.login(null, 'test');   
        cy.get('#mail')
            .then((element) => element[0].checkValidity())
            .should('be.false');  
        cy.get('#mail')
            .then((element) => element[0].validationMessage)
            .should('contain', 'Заполните это поле');      
    });

    it('Show error message on empty password', () => {
        cy.visit('/');
        cy.login('test@test.com', null);   
        cy.get('#pass')
            .then((element) => element[0].checkValidity())
            .should('be.false'); 
        cy.get('#pass')
            .then((element) => element[0].validationMessage)
            .should('contain', 'Заполните это поле');    
    });
});