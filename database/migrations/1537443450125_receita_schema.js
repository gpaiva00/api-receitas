'use strict'

const Schema = use('Schema')

class ReceitaSchema extends Schema {
  up () {
    this.create('receitas', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('receitas')
  }
}

module.exports = ReceitaSchema
