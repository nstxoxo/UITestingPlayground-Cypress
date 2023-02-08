require('@cypress/xpath');

context('Aliasing', () => { beforeEach(() => {
    cy.visit('http://uitestingplayground.com/') })

describe("UI Test Automation", () => {
     it('Check Dynamic ID', () => { 
        cy.contains('Dynamic ID').click() 
        cy.get('.btn-primary')
        .should('have.class', 'btn btn-primary')})

    it('Click on the JS Alert, Check Class Attribute', () => {
        cy.contains('Class Attribute').click() 
        cy.get('.class2').as('middleBtn') 
        cy.get('@middleBtn').click()
        cy.get('@middleBtn')
        .should('be.enabled')})

    it('Check Hidden Layers', () => {
        cy.contains('Hidden Layers').click()
        cy.get('.btn.btn-success')
        .should('have.id', 'greenButton').click() 
        cy.get('.btn.btn-primary').click()
        .should('have.id', 'blueButton')})

    it('Set New Button Name', () => {
        cy.contains('Text Input').click()
        cy.get('.form-control').type('New Button')
        .should('have.value', 'New Button')
        cy.get('.btn-primary').click()
        cy.get('.btn-primary')
        .should('have.text', 'New Button')})

    it('Finding an element by displayed text has nuances', () => {
        cy.contains('Verify Text').click()
        cy.xpath("//span[normalize-space(.)='Welcome UserName!']")
        .should('contain', 'Welcome UserName!')})

    it('Sample App', () => { 
        cy.contains('Sample App').click()
        cy.get('[name="UserName"]').type('UserName')
        cy.get('[name="Password"]').type('pwd')
        cy.get('#login').click()
        cy.get('#loginstatus')
        .should('have.text', 'Welcome, UserName!' )})
    
    it('Execute the test and make sure that click count is increasing by 2. The link clicked 2 times.', () => { 
        cy.contains('Mouse Over').click()
        cy.get('[onmouseenter="linkActive(this)"]').dblclick()
        cy.get('#clickCount')
        .should('have.text', '2' )})

    it('Non-Breaking Space', () => {
        cy.contains('Non-Breaking Space').click()
        cy.get('.btn-primary').filter(':contains("Button")')
        .should('have.length', 1)})
        
    it('Overlapped Element', () => {
        cy.contains('Overlapped Element').click()
        cy.get('#id').type('12345')
        cy.get('#name').scrollIntoView()
        .should('be.visible').type('User1')})

    it('Progress Bar', () => {
        cy.contains('Progress Bar').click() 
        cy.get('#startButton').click() 
        cy.wait(".progress-bar.bg-info").its(('res'))
        cy.get('#stopButton').click()
        .should('be.visible').type('User1')})
    })
})