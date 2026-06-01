# Seleção FESF-SUS – 2 F.C

Sistema para cadastro e consulta de pacientes desenvolvido com **FastAPI** (Backend) e **Next.js** (Frontend), com ambiente totalmente conteinerizado utilizando **Docker** e **Docker Compose**.

## Tecnologias Utilizadas

### Backend

* Python
* FastAPI
* SQLAlchemy
* SQLite
* Uvicorn

### Frontend

* React
* Next.js

### Conteinerização

* Docker
* Docker Compose

---

## Funcionalidades

* Cadastro de pacientes
* Listagem de pacientes
* Integração entre Frontend e Backend
* Persistência de dados utilizando SQLite
* Inicialização automatizada de toda a aplicação via Docker

---

## Estrutura do Projeto

```text
Seleção FESF-SUS – 2 F.C/
│
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend/
│   ├── pages/
│   │   └── index.js
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml
└── README.md
```

---

## Execução da Aplicação

### Pré-requisitos

* Docker instalado
* Docker Compose instalado

Verifique as instalações:

```bash
docker --version
docker compose version
```

---

### Iniciando o Projeto

Na raiz do projeto execute:

```bash
docker compose up --build
```

O Docker realizará automaticamente:

* Construção das imagens do Backend e Frontend;
* Criação dos contêineres;
* Inicialização dos serviços;
* Integração entre API e Interface Web.

---

## Acesso à Aplicação

### Frontend

```text
http://localhost:3000
```

### Backend

```text
http://localhost:8000
```

### Documentação da API (Swagger)

```text
http://localhost:8000/docs
```

---

## Endpoints da API

### Listar Pacientes

```http
GET /pacientes
```

### Cadastrar Paciente

```http
POST /pacientes
```

Exemplo de corpo da requisição:

```json
{
  "nome": "Daniel",
  "cpf": "07173240522",
  "telefone": "71999999999",
  "data_nascimento": "2000-01-01"
}
```

---

## Banco de Dados

O sistema utiliza SQLite para armazenamento das informações.

O arquivo do banco é criado automaticamente durante a execução da aplicação.

---

## Conteinerização

Este repositório contém obrigatoriamente:

* Dockerfile do Backend;
* Dockerfile do Frontend;
* docker-compose.yml;

A configuração permite a inicialização completa e integrada do ambiente através de um único comando:

```bash
docker compose up --build
```

Atendendo aos requisitos do Item 02 do Barema da Seleção FESF-SUS – 2 F.C.

---

## Repositório

O repositório foi configurado como público e contém todos os arquivos necessários para execução da aplicação em ambiente Docker.
