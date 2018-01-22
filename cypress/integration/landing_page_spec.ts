describe('Landing Page test suite', () => {
  it('Successfully loads and displays all content of the ngx-bootstrap LP', () => {
    cy.visit('/');

    // Logo, header info links, content logo, slogan, description, version, advantages are displayed
    cy.get('.logo').should('be.visible');
    cy.get('.header-info').should('be.visible');
    cy.get('.content-logo').should('be.visible');
    cy.get('.slogan').should('be.visible');
    cy.get('.descr').should('be.visible');
    cy.get('.version').should('be.visible');
    cy.get('.advantages').should('be.visible');
  });

  it('Get started button redirects to Getting Started page', () => {
    cy.visit('/');

    cy.get('.btn').contains('Get started').click();

    cy.url().should('include', '/getting-started');
  });

  it('Github button is enabled and contains link to ngx-bootstrap repo', () => {
    cy.visit('/');

    cy.get('.btn').contains('Github').should('be.enabled');
    cy.get('.btn').contains('Github').should('have.attr', 'href', 'https://github.com/valor-software/ngx-bootstrap');
  });

  it('Info buttons in header are enabled and contains links to slack, github and stackoverflow', () => {
    cy.visit('/');

    cy.get('.header-list li a').eq(0).should('be.enabled');
    cy.get('.header-list li a').eq(1).should('be.enabled');
    cy.get('.header-list li a').eq(2).should('be.enabled');
    cy.get('.header-list li a').eq(0)
      .should('have.attr', 'href', 'https://stackoverflow.com/questions/tagged/ngx-bootstrap');
    cy.get('.header-list li a').eq(1).should('have.attr', 'href', 'https://github.com/valor-software/ngx-bootstrap');
    cy.get('.header-list li a').eq(2).should('have.attr', 'href', 'https://ngx-slack.herokuapp.com');
  });

  it('Footer contains links to ng-team, contributors, MIT license, Creative Commons and to original Bootstrap', () => {
    cy.visit('/');

    cy.get('footer p').eq(0).children('a').eq(0)
      .should('have.attr', 'href', 'https://github.com/orgs/valor-software/teams/ng-team');
    cy.get('footer p').eq(0).children('a').eq(1)
      .should('have.attr', 'href', 'https://github.com/valor-software/ngx-bootstrap/graphs/contributors');
    cy.get('footer p').eq(1).children('a').eq(0)
      .should('have.attr', 'href', 'https://github.com/valor-software/ngx-bootstrap/blob/development/LICENSE');
    cy.get('footer p').eq(1).children('a').eq(1)
      .should('have.attr', 'href', 'https://creativecommons.org/licenses/by/3.0/');
    cy.get('footer p').eq(2).children('a')
      .should('have.attr', 'href', 'http://v4-alpha.getbootstrap.com/');
  });
});
