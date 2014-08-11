'use strict';

/**
 * @ngdoc service
 * @name fatoresApp.itens
 * @description
 * # itens
 * Service in the fatoresApp.
 */
angular.module('fatoresApp')
    .factory('itens', function() {
            var itens = {
                    "empresas": [{
                        "id": 17,
                        "name": "empresa 1",
                        "father": null
                    }, {
                        "id": 23,
                        "name": "empresa 2",
                        "father": null
                    }, {
                        "id": 38,
                        "name": "empresa 3",
                        "father": null
                    }, {
                        "id": 45,
                        "name": "empresa 4",
                        "father": null
                    }],


                    "empreendimentos": [{
                        "id": 1,
                        "name": "empreendimento 1",
                        "father": 38
                    }, {
                        "id": 2,
                        "name": "empreendimento 2",
                        "father": 17
                    }, {
                        "id": 3,
                        "name": "empreendimento 3",
                        "father": 17
                    }, {
                        "id": 4,
                        "name": "empreendimento 4",
                        "father": 23
                    }, {
                        "id": 5,
                        "name": "empreendimento 5",
                        "father": 38
                    }, {
                        "id": 6,
                        "name": "empreendimento 6",
                        "father": 38
                    }, {
                        "id": 7,
                        "name": "empreendimento 7",
                        "father": 38
                    }, {
                        "id": 8,
                        "name": "empreendimento 8",
                        "father": 17
                    }],


                    "obras": [{
                        "id": 1,
                        "name": "obra 1",
                        "father": 1
                    }, {
                        "id": 2,
                        "name": "obra 2",
                        "father": 2
                    }, {
                        "id": 3,
                        "name": "obra 3",
                        "father": 3
                    }, {
                        "id": 4,
                        "name": "obra 4",
                        "father": 3
                    }, {
                        "id": 5,
                        "name": "obra 5",
                        "father": 4
                    }, {
                        "id": 6,
                        "name": "obra 6",
                        "father": 5
                    }, {
                        "id": 7,
                        "name": "obra 7",
                        "father": 5
                    }, {
                        "id": 8,
                        "name": "obra 8",
                        "father": 6
                    }, {
                        "id": 9,
                        "name": "obra 9",
                        "father": 7
                    }, {
                        "id": 10,
                        "name": "obra 10",
                        "father": 8
                    }],


                    "fracoes": [{
                        "id": 1,
                        "name": "fração 1",
                        "father": 2
                    }, {
                        "id": 2,
                        "name": "fração 2",
                        "father": 1
                    }, {
                        "id": 3,
                        "name": "fração 3",
                        "father": 3
                    }, {
                        "id": 4,
                        "name": "fração 4",
                        "father": 3
                    }, {
                        "id": 5,
                        "name": "fração 5",
                        "father": 4
                    }, {
                        "id": 6,
                        "name": "fração 6",
                        "father": 5
                    }, {
                        "id": 7,
                        "name": "fração 7",
                        "father": 6
                    }, {
                        "id": 8,
                        "name": "fração 8",
                        "father": 7
                    }, {
                        "id": 9,
                        "name": "fração 9",
                        "father": 3
                    }, {
                        "id": 10,
                        "name": "fração 10",
                        "father": 8
                    }, {
                        "id": 11,
                        "name": "fração 11",
                        "father": 9
                    }, {
                        "id": 12,
                        "name": "fração 12",
                        "father": 10
                    }],


                    "empreiteras": [{
                        "id": 1,
                        "name": "empresa 1",
                        "father": [1, 2, 3]
                    }, {
                        "id": 2,
                        "name": "empresa 2",
                        "father": [1, 4, 5]
                    }, {
                        "id": 3,
                        "name": "empresa 3",
                        "father": [6]
                    }, {
                        "id": 4,
                        "name": "empresa 4",
                        "father": [7, 8]
                    }, {
                        "id": 5,
                        "name": "empresa 5",
                        "father": [9, 10]
                    }, {
                        "id": 6,
                        "name": "empresa 6",
                        "father": [11, 12]
                    }],


                    "tarefas": [{
                        "id": 1,
                        "name": "tarefa 1",
                        "father": [1, 2, 3]
                    }, {
                        "id": 2,
                        "name": "tarefa 2",
                        "father": [1, 2, 3, 4, 5, 6]
                    }, {
                        "id": 3,
                        "name": "tarefa 3",
                        "father": [1, 4, 5]
                    }, {
                        "id": 4,
                        "name": "tarefa 4",
                        "father": [2, 3, 6]
                    }, {
                        "id": 5,
                        "name": "tarefa 5",
                        "father": [4, 5, 6]
                    }, {
                        "id": 6,
                        "name": "tarefa 6",
                        "father": [1, 3]
                    }]
                };

                return itens;
            });