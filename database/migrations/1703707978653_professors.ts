import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Professors extends BaseSchema {
  protected tableName = 'professors'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('hash').unique()
      table.string('nome')
      table.string('email').unique()
      table.string('matricula').unique()
      table.date('nascimento')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
