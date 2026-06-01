# Seleção FESF-SUS – 2 F.C

Sistema simples desenvolvido para demonstrar a integração entre um Backend em **Python (Flask)** e um Frontend em **HTML/JavaScript**, com ambiente totalmente conteinerizado utilizando **Docker** e **Docker Compose**.

## Tecnologias Utilizadas

### Backend

* Python
* Flask
* Flask-CORS

### Frontend

* HTML5
* JavaScript

### Conteinerização

* Docker
* Docker Compose
* Nginx

---

## Funcionalidades

* Disponibilização de API REST em Python
* Consumo da API pelo Frontend
* Integração entre Frontend e Backend
* Inicialização automatizada de toda a aplicação via Docker

---

## Estrutura do Projeto

```text
Selecao-FESF-SUS-2-FC-main/
│
├── backend/
│   ├── app.py
│   ├── Dockerfile
│   └── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── script.js
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
http://localhost:8080
```

### Backend

```text
http://localhost:5000
```

---

## Endpoints da API

### Verificação da API

```http
GET /
```

Resposta:

```json
{
  "status": "ok",
  "message": "API rodando com Docker"
}
```

### Mensagem Consumida pelo Frontend

```http
GET /api
```

Resposta:

```json
{
  "message": "API Python rodando com Docker!"
}
```

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

Após a execução:

* O Backend será disponibilizado na porta **5000**;
* O Frontend será disponibilizado na porta **8080**;
* O Frontend consumirá dados fornecidos pela API Python.

---

## Atendimento ao Barema

O projeto foi desenvolvido para comprovar a conteinerização funcional de uma aplicação utilizando Docker, contendo:

* Dockerfile do Backend;
* Dockerfile do Frontend;
* Arquivo docker-compose.yml;
* Integração entre os serviços executados em contêineres.

Atendendo aos requisitos do Item 02 do Barema da Seleção FESF-SUS – 2 F.C.

---

## Repositório

O repositório contém todos os arquivos necessários para execução da aplicação em ambiente Docker, permitindo a reprodução completa do projeto por meio do comando:

```bash
docker compose up --build
```
