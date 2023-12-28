import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sala from 'App/Models/Sala'
import Hash from '@ioc:Adonis/Core/Hash'
import { limit } from 'App/extraClasses/limit';
import Professor from 'App/Models/Professor';
import Aluno from 'App/Models/Aluno';
import { salas } from 'App/extraClasses/error';

export default class SalasController {



  ////////////LIST SALAS
  public async index({}: HttpContextContract){

    var sala = await Sala.all();
    var dataTotal = (await Sala.all()).length;

    const data = {"dados":sala,}

    var arr = [
      "lista_de_salas"
    ];

    let i = 0;
    while (i < dataTotal) {

          const dataSearch  = data['dados'][i]


          const aluno_id         = dataSearch['aluno_id']
          const professor_id     = dataSearch['professor_id']
          const numero           = dataSearch['numero']
          const capacidade       = dataSearch['capacidade']

          const professor: Professor|null = await Professor.find(professor_id);
          const aluno: Aluno|null = await Aluno.find(aluno_id);


          const aluno_nome      = aluno!.nome
          const aluno_email     = aluno!.email
          const professor_nome  = professor!.nome
          const professor_email = professor!.email


          var out = [aluno_nome, aluno_email, professor_id,professor_nome, professor_email, numero,capacidade]

          arr.push(out.toString());
          i++;
    }

    return arr;

   }





  //////////////SAVE NEW SALAS
  public async store({request}: HttpContextContract){

    const sala_: Sala = await Sala.create(request.all());



    sala_!.professor_id           = request.input('professor_id');
    sala_!.aluno_id               = request.input('aluno_id');
    sala_!.numero                 = request.input('numero');
    sala_!.capacidade             = request.input('capacidade');
    sala_!.disponibilidade        = request.input('disponibilidade');


    //////////////////
    const  matricula             = await Hash.make('adonisjs_backend_pleno_service_webapi')
    const  hash_generatefinally  = matricula.split('p=').pop();
    //////////////////



    sala_!.hash = hash_generatefinally!;  // HASH WAS GENERERATED BY USER NAME + EMAIL

    const salaCapacidade: Sala|null  = await Sala.findBy('numero', sala_!.numero);
    try {
            if(salaCapacidade!.capacidade > 1){
              limit(sala_!.numero)
              sala_!.save();
              const result =  {
                  "data":"aluno adicionado a sala de aula com sucesso",
                  "result":sala_
              }
              return result;
            } else{
                return "você nao pode adicionar mais alunos a esta sala, limite de capacidade de sala excedido"
            }

      } catch (e) {

           salas()

     }}





     ////////////DELETE ALUNO
     public async destroy({request}: HttpContextContract){

      const aluno: Sala|null = await Sala.findBy('aluno_id', request.param('aluno_id'))
      try{

        aluno!.delete();
        return aluno;
      }catch(e){
        salas()

      }}}
