/// <reference types="cypress" />

const login = 'https://agilean.com.br/antigo-quizquality/';
const nome = 'Gleidson Berg Clemente';
const nomeIncorreto = '$@¨%%%%% 217836628731';
const email = 'Gleidson.berg@gmail.com';
const emailIncorreto = 'gleidson.@teste1234567890.com.teste';
const telefone = '85987615481';
const empresa = 'Teste'

describe('Cenário 1: Cadastro no teste gratuito (formulário da última dobra do site)', () => {
    it('deve ser realizado com sucesso', () => {
        cy.visit(login)
        cy.get('.cc-ALLOW').click()
        cy.wait(40000); 
        cy.get('#rd-text_field-UN5SCFkGJdQ57PCk6D2RIQ').type(nome),
        cy.get('#rd-email_field-WBIeKw6XDKoHYhP1ZX5FqA').type(email),
        cy.get('#rd-phone_field-7ZnXTexZJjFEn2-xy7Uh8w').type(telefone)
        cy.get('#rd-text_field-ZjOkSlFY5vCEQodyHcSJLg').type(empresa)
        cy.get('#rd-button-lanvjyf1').click()
        cy.get('.cc-ALLOW').click()
        cy.wait(40000); 
        cy.contains('Obrigado pelo seu interesse no Quizquality, a plataforma pioneira no Brasil em Gestão da Qualidade de Obras!').should('be.visible')
    });
});


describe('Cenário 3: Campo do Nome com dados incorretos ', () => {
    it('Não deve ser realizado com sucesso', () => {
        cy.visit(login)
        cy.get('.cc-ALLOW').click()
        cy.wait(40000); 
        cy.get('#rd-text_field-UN5SCFkGJdQ57PCk6D2RIQ').type(nomeIncorreto),
        cy.get('#rd-email_field-WBIeKw6XDKoHYhP1ZX5FqA').type(email),
        cy.get('#rd-phone_field-7ZnXTexZJjFEn2-xy7Uh8w').type(telefone)
        cy.get('#rd-text_field-ZjOkSlFY5vCEQodyHcSJLg').type(empresa)
        cy.get('#rd-button-lanvjyf1').click()
        cy.get('.cc-ALLOW').click()
        cy.wait(40000);
        cy.contains('Obrigado pelo seu interesse no Quizquality, a plataforma pioneira no Brasil em Gestão da Qualidade de Obras!').should('be.visible')
    });
});


describe('Cenário 4: Campo e-mail com dados incorretos ', () => {
    it('deve ser apresentado uma mensagem com email incorreto', () => {
        cy.visit(login)
        cy.get('.cc-ALLOW').click()
        cy.wait(40000); // Esperar 50 ms
        cy.get('#rd-text_field-UN5SCFkGJdQ57PCk6D2RIQ').type(nome),
        cy.get('#rd-email_field-WBIeKw6XDKoHYhP1ZX5FqA').type(emailIncorreto),
        cy.get('#rd-phone_field-7ZnXTexZJjFEn2-xy7Uh8w').type(telefone)
        cy.get('#rd-text_field-ZjOkSlFY5vCEQodyHcSJLg').type(empresa)
        cy.get('#rd-button-lanvjyf1').click()
        cy.contains('Endereço de e-mail inválido').should('be.visible')
    });
});

