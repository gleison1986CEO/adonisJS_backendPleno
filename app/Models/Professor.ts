import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Sala from './Sala'


export default class Professor extends BaseModel {
  @hasMany(() => Sala)
  public salas: HasMany<typeof Sala>

  @column({ isPrimary: true })
  public id: number

  @column()
  public hash: string

  @column()
  public nome: string

  @column()
  public email: string

  @column()
  public matricula: string

  @column()
  public nascimento: Date

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}


