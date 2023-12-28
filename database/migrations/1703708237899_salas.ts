import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Salas extends BaseSchema {
  protected tableName = 'salas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('hash').unique()

      table.integer('professor_id')
      .unsigned()
      .references('professors.id')
      .onDelete('CASCADE')

      table.integer('aluno_id')
      .unsigned()
      .references('alunos.id').unique()
      table.integer('numero')
      table.integer('capacidade')
      table.boolean('disponibilidade')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
