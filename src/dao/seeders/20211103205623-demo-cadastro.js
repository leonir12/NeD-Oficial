'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Cadastros', [{
        nome: 'Jão da Silva',
        cpf:"12345678901",
        tel_whats:"67981250000",
        email: "jao@gmail.com",
        estado:"MS",
        cidade:"Campo Grande",
        data_nascimento: "1978-12-29",
        titulo_foto:"My Foto",
        nome_fotografa:"Jão",
        nome_foto:"jao.jpg",
        nome_responsavel:"",
        cpf_responsavel:"",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Zé dos Santos',
        cpf:"12345678902",
        tel_whats:"67981260001",
        email: "ze@gmail.com",
        estado:"MS",
        cidade:"Jardim",
        data_nascimento: "1980-08-25",
        titulo_foto:"My Foto 2",
        nome_fotografa:"Zé dos Santos",
        nome_foto:"ze.jpg",
        nome_responsavel:"",
        cpf_responsavel:"",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Maria Lima',
        cpf:"11122233344",
        tel_whats:"67982272222",
        email: "marialima@gmail.com",
        estado:"MS",
        cidade:"Aquidauana",
        data_nascimento: "1999-02-18",
        titulo_foto:"My Foto 3",
        nome_fotografa:"Maria Lima",
        nome_foto:"maria_lima.jpg",
        nome_responsavel:"",
        cpf_responsavel:"",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
