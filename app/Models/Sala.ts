import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'



export default class Sala extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public hash: string

  @column()
  public professor_id: number

  @column()
  public aluno_id: number

  @column()
  public numero: number

  @column()
  public capacidade: number

  @column()
  public disponibilidade: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}


