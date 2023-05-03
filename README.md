#API Hortifruti usando AdonisJs
Este repositório contém um projeto de API construído com AdonisJs para gerenciamento de um hortifruti.

A API tem como objetivo fornecer endpoints para criar, atualizar, visualizar e excluir produtos de um hortifruti. Além disso, a API também possui endpoints para gerenciar os usuários que podem acessar a API e suas permissões.

Instalação
Clone o repositório:
bash
Copy code
git clone https://github.com/seu-usuario/api-hortifruti.git
Navegue até o diretório do projeto:
bash
Copy code
cd api-hortifruti
Instale as dependências do projeto:
Copy code
npm install
Configure o arquivo .env com as informações do banco de dados e outras configurações necessárias. Você pode usar o arquivo .env.example como base:
bash
Copy code
cp .env.example .env
Execute as migrações para criar as tabelas do banco de dados:
arduino
Copy code
adonis migration:run
Inicie o servidor:
css
Copy code
adonis serve --dev
Endpoints
A API possui os seguintes endpoints:
