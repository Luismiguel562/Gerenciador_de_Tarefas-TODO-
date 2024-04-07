# **Gerenciador de Tarefas TO DO**
Projeto da turma de ADS(Analise e Desenvovimento de Sistemas) da Universidade Unorte de São josè do rio preto São paulo.

Feito na IDE Online [CodeSandbox](https://codesandbox.io/), com o Professor Flavio Taparro e o(s) aluno(s):
Vitor Tardivo.

## **Feito com:**
### Com as linguagens de programação: 
- NodeJs, 
- Typescript.
    
### Com o uso de arquivos em JSON para armazenar os dados sem um Banco de Dados.

### Com o uso do Yarn e as dependencias: 
#### *COM O NIVEL DE PERMISSÂO DEV:*
- @types/cors,
- @types/express,
- nodemon,
- typescript.
#### *SEM O NIVEL DE PERMISSÂO DEV:*
- cors,
- express,
- reflect-metadata,
- ts-node.

## **Sobre:**
É uma aplicação que é possivel fazer anotações de tarefas do dia a dia e podendo: Criar, Ver, Atualizar e Apagar(CRUD).

### Com as informações de:
1. ID,
2. NOME,
3. DESCRIÇÂO,
4. STATUS,
5. FEITO.

#### ID 
É uma identificação para poder saber qual é a Tarefa especifica e quando ela foi iniciada usando o Padrão(Unix epoch).
#### NOME 
É como se fosse um titulo da Tarefa.
#### DESCRIÇÂO 
É uma area onde se pode colocar informações amais sobre a Tarefa relevantes ou não.
#### STATUS 
É uma forma de ver como esta indo o progresso da Tarefa se ela esta: A fazer, fazendo, Atrasado, Cocluido.
#### FEITO 
É a confirmação de fato se esta finalizado a Tarefa como: Não feito, Feito.

### Separado em 5 aquivos:
- package.json
- tasks.json
- server.ts
- TaskRoute.ts
- TaskModel.ts

#### package.json
É onde esta todas as informações configurações de dependencias versões descrição sobre da aplicação.
#### tasks.json
É onde esta as tarefas de fato, todas as informações dela.
#### server.ts
É onde a aplicação é iniciada atraves de um servidor Express.
#### TaskRoute.ts
É onde é criada as rotas para se acessar todas as suas funcionalidades atraves delas.
#### TaskModel.ts
É onde esta os modelos criados como a Classe Task o CRUD e todas as suas informações.
