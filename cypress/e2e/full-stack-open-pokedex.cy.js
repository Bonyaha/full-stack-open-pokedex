describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('pokemon page can be navigeted to', () => {
    cy.visit('http://localhost:5000')
    cy.contains('.list-item-name', 'ivysaur').click()

    cy.contains('.pokemon-abilities .pokemon-ability-name', 'chlorophyll')
      .should('be.visible') // Ensures it's visible on the page
  })
})
