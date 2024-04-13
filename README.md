# **Gerenciador de Tarefas TO DO**
API Projeto da turma de ADS da Universidade Unorte de São josé do rio preto/São Paulo. 

Feito na IDE Online [CodeSandbox.com](https://codesandbox.io/). 

*Autor(res) aluno(s):*
- Vitor Tardivo

## **API Feito com:**
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

## **Sobre API:**
*É uma aplicação que é possivel fazer anotações de tarefas do dia a dia e podendo: Criar, Ver, Atualizar e Apagar(CRUD).*

### Com as informações de:
1. ID,
2. NOME,
3. DESCRIÇÂO,
4. STATUS,
5. FEITO.
#### ID 
*É uma identificação para poder saber qual é a Tarefa especifica e quando ela foi iniciada usando o Padrão(Unix epoch).*

#### NOME 
*É como se fosse um titulo da Tarefa.*

#### DESCRIÇÂO 
*É uma area onde se pode colocar informações amais sobre a Tarefa relevantes ou não.*

#### STATUS 
*É uma forma de ver como esta indo o progresso da Tarefa se ela esta: A fazer, fazendo, Atrasado, Cocluido.*

#### FEITO 
*É a confirmação de fato se esta finalizado a Tarefa como: Não feito, Feito.*

### Separado em 5 aquivos:
- package.json
- tasks.json
- server.ts
- TaskRoute.ts
- TaskModel.ts
#### package.json
*É onde esta todas as informações configurações de dependencias versões descrição sobre da aplicação.*

#### tasks.json
*É onde esta as tarefas de fato, todas as informações dela.*

#### server.ts
*É onde a aplicação é iniciada atraves de um servidor Express.*

#### TaskRoute.ts
*É onde é criada as rotas para se acessar todas as suas funcionalidades atraves delas.*

#### TaskModel.ts
*É onde esta os modelos criados como a Classe Task o CRUD e todas as suas informações.*

## **Front End API**(A fazer) 
Ilustração Figma: [Ver](https://www.figma.com/file/v6hf8eKAEkU4wM5Nnd6tfx/Front-End-Gerenciado-de-Tarefas-TO-DO?type=design&node-id=0%3A1&mode=design&t=nCa4LNRRBERa8XNx-1). 

### Botões superiores: 
- HOME & PAINEL
#### HOME & PAINEL 
*Será a página principal e onde também será a interação com a aplicação.* 

### Corpo de HOME & PAINEL: 
- Area superior e abaixo dos **Botões superiores** de **Criação** e **Seleção** de **Pastas** 
- **Cards de Tarefas** da **Pasta** selecionada 
- **Botão** de **Criação** de **Tarefas** 
#### Pastas 
*Será onde criara e selecionara **Pastas** e nelas terá os **Cards de Tarefas**, também será possível **Apagar** **Pastas** e assim também todas as **Tarefas** dentro.*

#### Cards 
*Serão os **Cards de tarefa** onde vai ter as informações colocadas:*  
1. NOME & TÍTULO 
2. DESCRIÇÂO 
3. STATUS 
4. FEITO 

Também terá como apagar e modificar os **Cards**, e logo ao lado do último **Card** ja criado um botão de **Criação** de novos **Cards**. 

### Informações adicionais: 
*Em **Status** terá um padrão de cores para cada estado:*
- ![#FFFF00](https://via.placeholder.com/15/FFFF00/000000?text=+)-(Amarelo)=A fazer
- ![#FFA500](https://via.placeholder.com/15/FFA500/000000?text=+)-(Laranja)=Fazendo
- ![#FF0000](https://via.placeholder.com/15/FF0000/000000?text=+)-(Vermelho)=Atrasado
- ![#008000](https://via.placeholder.com/15/008000/000000?text=+)-(Verde)=Finalizado

*Assim como o **Feito**:* 
- ![#FF0000](https://via.placeholder.com/15/FF0000/000000?text=+)-(Vermelho)=Não feito
- ![#008000](https://via.placeholder.com/15/008000/000000?text=+)-(Verde)=Feito 
