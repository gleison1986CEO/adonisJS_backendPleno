import Route from '@ioc:Adonis/Core/Route'

//// alunos routes
Route.get('/api/alunos', 'AlunosController.index');
Route.get('/api/alunos/:id', 'AlunosController.byId');
Route.post('/api/alunos/store', 'AlunosController.store');
Route.put('/api/alunos/:id', 'AlunosController.update');
Route.delete('/api/alunos/destroy/:id', 'AlunosController.destroy');


//// professores routes
Route.get('/api/professores', 'ProfessorsController.index');
Route.get('/api/professores/:id', 'ProfessorsController.byId');
Route.post('/api/professores/store', 'ProfessorsController.store');
Route.put('/api/professores/:id', 'ProfessorsController.update');
Route.delete('/api/professores/destroy/:id', 'ProfessorsController.destroy');


//// salas routes
Route.get('/api/salas', 'SalasController.index');
Route.get('/api/salas/:numero', 'SalasController.byId');
Route.post('/api/salas/store', 'SalasController.store');
Route.delete('/api/salas/aluno/destroy/:aluno_id', 'SalasController.destroy');


