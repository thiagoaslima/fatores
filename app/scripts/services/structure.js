'use strict';

/**
 * @ngdoc service
 * @name fatoresApp.structure
 * @description
 * # structure
 * Factory in the fatoresApp.
 */
angular.module('fatoresApp')
    .factory('structure', function() {
        var appStructure = [{
            "id": 1,
            "name": "empresa",
            "father": []
        }, {
            "id": 2,
            "name": "empreendimento",
            "father": [1]
        }, {
            "id": 3,
            "name": "obra",
            "father": [2]
        }, {
            "id": 4,
            "name": "fracao",
            "plural": "fracoes",
            "father": [3]
        }, {
            "id": 5,
            "name": "subfracao",
            "plural": "subfracoes",
            "father": [4]
        }, {
            "id": 6,
            "name": "contratada",
            "father": [2, 3, 4, 5]
        }, {
            "id": 7,
            "name": "tarefa",
            "father": [2, 3, 4, 5, 6]
        }];

        // Public API here
        return {

            structure: appStructure,

            findElem: function(term, array) {
                if (!array) {
                    array = this.structure;
                }

                var prop, value;

                if (typeof term === 'string') {
                    prop = 'name';
                    value = term;
                }

                if (typeof term === 'number') {
                    prop = 'id';
                    value = term;
                }

                if (typeof term === 'object') {
                    for (var name in term) {
                        if (term.hasOwnProperty(name)) {
                            prop = name;
                            value = term[name];
                        }
                    }
                }

                return array.filter(function(item) {
                    return item[prop] === value;
                });
            },

            getPlural: function(term, array) {
                var elem = this.findElem(term, array);
                return elem.map(function(item){
                  return item.plural || item.name + 's';
                });
            }
        };
    });