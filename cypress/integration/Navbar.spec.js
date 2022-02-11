///<reference types="cypress"/>

describe('<Navbar />', () => {
	it('<Navbar /> - Verify home page ', () => {
		cy.visit('/');
		cy.contains('User and Task viewer');
		cy.get('[data-cy=title]').invoke('text').should('equal', 'User and Task viewer');
	});
	it('<Navbar /> - Verify redirect to User page', () => {
		cy.get('[data-cy=link-users]').should('exist').should('have.text', 'Users');
		cy.get('[data-cy=link-users]').should('have.attr', 'href').should('eq', '/users');
		cy.visit('/users');
	});
    it('<Navbar /> - Verify redirect to Task page', () => {
        cy.get('[data-cy=link-tasks]').should('exist').should('have.text', 'Tasks');
		cy.get('[data-cy=link-tasks]').should('have.attr', 'href').should('eq', '/tasks');
		cy.visit('/tasks');
    })
});


