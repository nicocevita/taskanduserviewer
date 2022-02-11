///<reference types="cypress"/>

describe('<Users />', () => {
	it('<Users /> - Users components verify ', () => {
		cy.visit('/users');
		cy.get('[data-cy=users-container]').should('exist');
		cy.get('[data-cy=detail-btn]').should('exist');
		cy.get('[data-cy=users-container] div:nth-child(6) button').last().click();
	});

	it('<Users /> - User detail ', () => {
		cy.get('[data-cy=user-detail-contaier]').should('exist');
		cy.get('[data-cy=user-id-data]').should('exist');
		cy.get('[data-cy=user-name-data]').should('exist');
		cy.get('[data-cy=user-surname-data]').should('exist');
		cy.get('[data-cy=user-btn-close]').should('exist');
		cy.get('[data-cy=user-btn-close]').click();
	});

	it('<Users /> - Users Pagination  ', () => {
		cy.get('[data-cy=pagination-bar]').should('exist');
		cy.get('[data-cy=link-page-number]').should('exist');
		cy.get('[data-cy=link-page-number]').last().click();
	});
});
