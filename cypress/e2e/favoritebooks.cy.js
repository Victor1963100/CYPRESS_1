/* eslint-disable indent */
const bookOne = {
  title: 'Московский клуб',
  description: 'Когда-то Москва была столицей великой страны, потом она стала Анклавом, одним из многих. Теперь ее тайны могут спасти прижатый к стенке мир. Мир, в котором властвует Цифра, нанотехнологии и генная инженерия позволяют добиваться невероятных результатов, а могущественные корпорации соперничают с одряхлевшими государствами. Мир, который отчаянно пытается найти дорогу в будущее. Мир в котором борьба за власть достигла апогея.',
  author: 'Вадим Панов',
};
const bookTwo = {
  title: 'Лучший экипаж солнечной',
  description: 'Им надоело стрелять, но это единственное, что они умеют делать хорошо. Рано или поздно команда «К бою!» раздастся снова…',
  author: 'Олег Дивов',
};
const bookThree = {
  title: 'Психология влияния',
  description: 'Какие факторы заставляют одного человека говорить другому «да»? И какие методы наиболее эффективны, если необходимо добиться чужого согласия?',
  author: 'Роберт Чалдини',
};
describe('Favorite books testing', () => {
  it('Add first favorite book', () => {
        cy.visit('/');
        cy.login('test@test.com', 'test');
        cy.contains('Books list').click();
        cy.contains('Add new').click();
        cy.get('#title').type(bookOne.title);
        cy.get('#description');
        cy.get('#authors');
        cy.get('#favorite').click();
        cy.contains('Submit').click();
        cy.contains('Московский клуб').should('be.visible');
    });

    it('Add second favorite book', () => {
      cy.visit('/');
      cy.login('test@test.com', 'test');
      cy.contains('Books list').click();
      cy.contains('Add new').click();
      cy.get('#title').type(bookTwo.title);
      cy.get('#description');
      cy.get('#authors');
      cy.get('#favorite').click();
      cy.contains('Submit').click();
      cy.contains('Лучший экипаж солнечной').should('be.visible');
    })

    it('Delete from favorite book', () => {
      cy.visit('/BooksApp');
      cy.login('test@test.com', 'test');
      cy.contains('Books list').click();
      cy.contains('Delete from favorite').click();
      cy.contains('Московский клуб').should('be.visible');
  });

  it('Add third book', () => {
    cy.visit('/');
    cy.login('test@test.com', 'test');
    cy.contains('Books list').click();
    cy.contains('Add new').click();
    cy.get('#title').type(bookThree.title);
    cy.get('#description');
    cy.get('#authors');
    cy.get('#favorite').click();
    cy.contains('Submit').click();
    cy.contains('Delete from favorite').should('be.visible');
});
});


