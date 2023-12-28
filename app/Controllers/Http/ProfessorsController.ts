import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Professor from 'App/Models/Professor';
import Hash from '@ioc:Adonis/Core/Hash'
import { professores } from 'App/extraClasses/error';




//////////////////
export default class ProfessorsController {


  ////////////SEARCH ALL PROFESSOR
  public async index({}: HttpContextContract){
    try{
      return  await Professor.all();
    }catch(e){
      professores()
    }

  }




  ////////////SEARCH BY ID PROFESSOR
  public async byId({request}: HttpContextContract){

    const professor: Professor|null = await Professor.find(request.param('id'));

    try{
      return professor;
    }catch(e){
      professores()
    }}






  ////////////CREATE NEW PROFESSOR
  public async store({request}: HttpContextContract){

    const matriculasRamdom = Math.floor(100000 + Math.random() * 900000); //RAMDOM NUMBER MATH
    const professor: Professor = await Professor.create(request.all());




    professor!.nome         = request.input('nome');
    professor!.email        = request.input('email');
    professor!.matricula    = request.input(matriculasRamdom.toString());
    professor!.nascimento   = request.input('nascimento');


    //////////////////
    const  hashGen      = professor!.nome
    const  matricula    = await Hash.make(hashGen)
    const  hash_generatefinally = matricula.split('p=').pop();
    //////////////////


    professor!.hash = hash_generatefinally!;  // HASH WAS GENERERATED BY USER NAME + EMAIL

    try{
      professor!.save();
      return professor;
    }catch(e){
      professores()
    }


   }





   ////////////UPDATE PROFESSOR
  public async update({request}: HttpContextContract){

    const professor: Professor|null = await Professor.find(request.param('id'))

    professor!.nome        = request.input('nome');
    professor!.email       = request.input('email');
    professor!.nascimento  = request.input('nascimento');

    try{
      professor!.save();
      return professor;
    }catch(e){
      professores()
    }


   }







   ////////////DESTROY PROFESSOR
  public async destroy({request}: HttpContextContract){

    const professor: Professor|null = await Professor.find(request.param('id'))
    try{
      professor!.delete();
      return professor;
    }catch(e){
      professores()
    }



  }

}
