import Sala from 'App/Models/Sala'
import { salas } from './error';

export async function limit(sala_id){

  const sala: Sala|null  = await Sala.findBy('numero', sala_id);
  const capacidadeTotal = sala!.capacidade - 1;
  sala!.capacidade = capacidadeTotal;

  try {
    sala!.save();
    return sala!.capacidade;
  } catch (e) {
    return salas();
  }

}
