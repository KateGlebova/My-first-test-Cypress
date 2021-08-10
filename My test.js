/// <reference types="cypress" />

describe('My First Test', () => {
    before('', () => {
      cy.visit('https://react-redux.realworld.io/#/login?_k=y4tyo7');
    });
    
    it('Sign in', () => {
      cy.get(':nth-child(2) > .nav-link').click();
      cy.get(':nth-child(1) > .form-control').type('katyagliebova14@gmail.com');
      cy.get(':nth-child(2) > .form-control').type('ukrnet123');
      cy.get('.btn').click();
      cy.get('.navbar').contains('ka89').should('exist');
    });
  });

