

![Logo do projeto](https://raw.githubusercontent.com/oMatheus-Farias/registration-form/main/public/mockup-registration-form.png)

# Registration Form

O Registration Form é uma aplicação web desenvolvida com React.js, JavaScript, Tailwind CSS e a biblioteca React Toastify. Este projeto visa simular um formulário de cadastro que captura informações essenciais, como primeiro nome, sobrenome, UF (Unidade Federativa) de nascimento, município de nascimento, e-mail e senha.

## 🔥 Funcionalidades Principais

- Formulário de Cadastro: A aplicação apresenta um formulário de cadastro com campos para preenchimento obrigatório: primeiro nome, sobrenome, UF do local de nascimento, município de nascimento, e-mail e senha.

- Integração com APIs do IBGE: Duas APIs do IBGE foram utilizadas para fornecer a lista de UFs dos Estados do Brasil e para obter os municípios/cidades conforme a UF do Estado selecionado. Isso garante uma seleção precisa e atualizada dos locais de nascimento.

- Validação de Campos: A validação do formulário impede que seja enviado com campos vazios, garantindo que todas as informações necessárias sejam fornecidas pelo usuário antes do envio.

- Modal de Confirmação: Após o envio bem-sucedido do formulário, um modal é exibido com as informações enviadas pelo usuário, juntamente com uma mensagem de sucesso, utilizando a biblioteca React Toastify.

### ⚙️ Pré-requisitos

- npm ou yarn
- Vite

### 🔨 Guia de instalação

1. Clone o repositório: `git clone https://github.com/oMatheus-Farias/registration-form.git`>
2. Navegue até o diretório do projeto: `cd registration-form`
3. Certifique-se de ter o Node.js instalado em sua máquina.
4. Instale as dependências: `npm install`
5. Inicie o servidor: `npm run dev`
6. O aplicativo estará disponível no localhost que aparecera no seu painel ex: [http://localhost:3000](http://localhost:3000/)

### 📦 Tecnologias usadas

* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### 📄 Licença

Este projeto está sob a [Licença MIT](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)
