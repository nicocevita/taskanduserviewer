///<reference types="cypress"/>

describe('<Tasks />', () => {
	it('<Tasks /> - User Pagination  ', () => {
		cy.visit('/tasks');
		cy.get('[data-cy=tasks-title]').invoke('text').should('equal', 'Task Viewer');
		cy.get('[data-cy=tasks-container]').should('exist');
		cy.get('[data-cy=input-search]').should('exist');
		cy.get('[data-cy=task-container]').should('exist');
	});

	it('<Tasks /> - Testing input search  ', () => {
		cy.get('[data-cy=input-search]').type('10');
		cy.get('[data-cy=task-user-id]').should('exist').last().should('have.text', '10');
        cy.get('[data-cy=input-search]').focus().clear();
        cy.get('[data-cy=input-search]').type('completed');
        cy.get('[data-cy=task-status]').should('exist').last().should('have.text', 'COMPLETED');
	});

	it('<Tasks /> - Tasks Pagination  ', () => {
		cy.get('[data-cy=pagination-bar]').should('exist');
		cy.get('[data-cy=link-page-number]').should('exist');
		cy.get('[data-cy=link-page-number]').last().click();
	});
});
