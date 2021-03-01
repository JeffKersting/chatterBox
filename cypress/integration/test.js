describe("Login Page", () => {
  it('Should have welcome message, input field, and submit button', () => {
    cy.visit('http://localhost:3001')
      .get('h1').should('contain', 'Welcome')
      .get('h2').should('contain', 'a place for chatting')
      .get('input').should('exist')
      .get('button').should('contain', 'Login')
  })

  it('Should allow users to enter a chat handle, and be taken to the chat page', () => {
    cy.get('input').type('jeff')
      .get('button').click()
  })

  it('Should contain welcome, chat display, previous messages, chat input, chat submit', () => {
    cy.get('h2').should('contain', 'Welcome')
      .get('section').should('exist')
      .get('section .my-messages').should('contain', 'jeff says:')
      .get('section .other-messages').should('contain', 'max says:')
      .get('input').should('exist')
      .get('button').should('contain', 'Send')
  })

  it('Should disable the button if no chat input is entered', () => {
    cy.get('button').should('be.disabled')
  })

  it('Should allow users to post messages to the database', () => {
    cy.get('input').type('cypress test')
      .get('button').click()
      .get('section').should('contain', 'cypress test')
  })
})
