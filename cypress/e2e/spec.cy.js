describe('Home page', () => {
  beforeEach(() => {
    cy.intercept("http://localhost:3001/api/v1/tricks", {
      method: 'GET',
      fixture: '../fixtures/example.json'
    })
    cy.visit('http://localhost:3000');
  });
  it('Should have a title', () => {
    cy.get('h1')
      .contains("Sick Trick Wish List")
  })
  it('Should have a form', () => {
    cy.get('form').should("exist")
    cy.get('#stance')
      .should('have.value', "")
      .contains('Choose your Stance')
    cy.get('[placeholder="Name of Trick"]')
      .should('have.value', "")
    cy.get('#obstacle')
      .should('have.value', "")
      .contains('Choose your Obstacle')
    cy.get('[placeholder="Link to Tutorial"]')
      .should('have.value', "")
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
  it('Should allow user to select stance', () => {
    cy.get('#stance')
      .select("regular")
      .should('have.value', "regular")
  })
  it('Should allow user type name of trick', () => {
    cy.get('[placeholder="Name of Trick"]')
      .type("Super Cool Trick")
      .should('have.value', "Super Cool Trick")
  })
  it('Should allow user to select obstacle', () => {
    cy.get('#obstacle')
      .select("rail")
      .should('have.value', "rail")
  })
  it('Should allow user type a link to a tutorial', () => {
    cy.get('[placeholder="Link to Tutorial"]')
      .type("www.youtube.com")
      .should('have.value', "www.youtube.com")
  })
  it('Should add a new trick when the send it button is clicked ', () => {
    cy.get('#stance')
      .select("regular")
      .should('have.value', "regular")
    cy.get('[placeholder="Name of Trick"]')
      .type("Super Cool Trick")
      .should('have.value', "Super Cool Trick")
    cy.get('#obstacle')
      .select("rail")
      .should('have.value', "rail")
    cy.get('[placeholder="Link to Tutorial"]')
      .type("www.youtube.com")
      .should('have.value', "www.youtube.com")
    cy.get('button').click()
    cy.get('.card-container > :nth-child(2)')
    cy.get('.card-container > :nth-child(2) > :nth-child(1)')
      .contains('regular Super Cool Trick')
    cy.get('.card-container > :nth-child(2) > :nth-child(2)')
      .contains('Obstacle: rail')
    cy.get(':nth-child(2) > a')
      .should("have.attr", "href", "www.youtube.com")
  })
})