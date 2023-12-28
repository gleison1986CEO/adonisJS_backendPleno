import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Aluno from 'App/Models/Aluno';
import Hash from '@ioc:Adonis/Core/Hash'


export default class AlunosController {

   ////////////SEARCH ALL ALUNO
   public async index({}: HttpContextContract){
    return  await Aluno.all();
   }


   ////////////SEARCH BY ID
   public async byId({request}: HttpContextContract){

    const aluno: Aluno|null = await Aluno.find(request.param('id'));
    return aluno;

   }


   ////////////CREATE NEW ALUNO
   public async store({request}: HttpContextContract){
    const matriculasRamdom = Math.floor(100000 + Math.random() * 900000); //RAMDOM NUMBER MATH
    const aluno: Aluno = await Aluno.create(request.all());




    aluno!.nome         = request.input('nome');
    aluno!.email        = request.input('email');
    aluno!.matricula    = request.input(matriculasRamdom.toString());
    aluno!.nascimento   = request.input('nascimento');


    //////////////////
    const  hashGen      = aluno!.nome
    const  matricula    = await Hash.make(hashGen)
    const  hash_generatefinally = matricula.split('p=').pop();
    //////////////////


    aluno!.hash = hash_generatefinally!;  // HASH WAS GENERERATED BY USER NAME + EMAIL


    aluno!.save();
    return aluno;


   }



   ////////////UPDATE ALUNO
   public async update({request}: HttpContextContract){

    const aluno: Aluno|null = await Aluno.find(request.param('id'))



    aluno!.nome        = request.input('nome');
    aluno!.email       = request.input('email');
    aluno!.nascimento  = request.input('nascimento');

    aluno!.save();

    return aluno;

   }




   ////////////DELETE ALUNO
   public async destroy({request}: HttpContextContract){

    const aluno: Aluno|null = await Aluno.find(request.param('id'))
    aluno!.delete();
    return aluno;


   }
}
