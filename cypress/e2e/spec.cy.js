describe('Home page', () => {
  beforeEach(() => {
    cy.intercept("http://localhost:3001/api/v1/tricks", {
      method: 'GET',
      fixture: '../fixtures/example.json'
    } )
    cy.visit('http://localhost:3000');
  });
  it('Should have a title', () => {
    cy.get('h1')
      .contains("Sick Trick Wish List")
  })
  it('Should have a form', () => {
    cy.get('form')
     .should("exist")
  })
  it('Should have a trick card', () => {
    cy.get('.card')
    cy.get('.card > :nth-child(1)')
      .contains('regular frontside 50-50, backside 180 out')
    cy.get('.card > :nth-child(2)')
      .contains('Obstacle: ledge')
    cy.get('a')
      .should("have.attr", "href", "https://www.youtube.com/watch?v=9N9swrZU1HA")
  })
  it('Should have a form', () => {
    cy.get('form')
     .should("exist")
  })
})