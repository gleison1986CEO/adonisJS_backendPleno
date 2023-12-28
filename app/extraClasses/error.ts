export async function professores(){

  const errorProfessores  = 'error professores, tente novamente';
  return errorProfessores;


}


export async function alunos(){

  const errorAlunos = 'error alunos, tente novamente';
  return errorAlunos;


}



export async function salas(){

  const errorSalas = 'error salas, tente novamente';
  return errorSalas;


}



export async function errorFatal(error){

  const errorFatal = 'error Fatal' + error;
  return errorFatal;


}
