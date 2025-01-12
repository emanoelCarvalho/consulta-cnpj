
---

# Consulta de CNPJ

Este é um projeto simples de backend desenvolvido para consultar informações de empresas usando a API pública **ReceitaWS**. A aplicação permite consultar dados de empresas a partir do número de CNPJ, retornando informações como razão social, nome fantasia, endereço e outros detalhes.

## Tecnologias Utilizadas

- **NestJS**: Framework para desenvolvimento de aplicações Node.js.
- **Axios**: Biblioteca para realizar requisições HTTP.
- **ReceitaWS API**: API para consulta de dados de CNPJ.

## Funcionalidades

- Consultar informações de empresas a partir do CNPJ.
- Retornar dados como razão social, nome fantasia, endereço, atividades e status da empresa.
- Validação de CNPJ inserido.

## Como Rodar o Projeto

### Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **npm** (ou **yarn**)

### Passos para Configuração

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/emanoelCarvalho/consulta-cnpj.git
   cd consulta-cnpj
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure o arquivo `.env`**:
   Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API da ReceitaWS:

   ```env
   API_URL=https://www.receitaws.com.br/v1/cnpj/

   API_KEY=sua_chave_de_api
   
   PORT=3000
   ```

4. **Inicie o servidor**:
   ```bash
   npm run start
   ```

5. **Acesse a API**:
   Abra seu navegador ou use uma ferramenta como **Postman** para realizar uma requisição GET à seguinte URL:
   ```plaintext
   http://localhost:3000/cnpj/12345678000195
   ```
   Substitua `12345678000195` pelo CNPJ desejado.

## Endpoints

- **GET /cnpj/:cnpj**  
  Consulta as informações de uma empresa com base no CNPJ fornecido.

  **Parâmetros**:
  - `cnpj`: Número do CNPJ (apenas números, 14 dígitos).

  **Resposta**:
  - Retorna as informações da empresa, como razão social, nome fantasia, atividades econômicas, endereço, etc.

  **Exemplo de Resposta**:
  ```json
  {
   	"abertura": "07/08/2010",
	"situacao": "BAIXADA",
	"tipo": "MATRIZ",
	"nome": "ROBERIO JOSE DOS SANTOS 16952477870",
	"porte": "MICRO EMPRESA",
	"natureza_juridica": "213-5 - Empresário (Individual)",
	"logradouro": "AVENIDA CAPITAO LUIS ANTONIO PIMENTA",
	"numero": "563",
	"complemento": "CASA 10",
	"municipio": "SAO VICENTE",
	"bairro": "PARQUE BITARU",
	"uf": "SP",
	"cep": "11.330-200",
	"email": "fhermes@vivax.comm.br",
	"telefone": "(13) 9798-7487",
	"data_situacao": "17/06/2013",
	"motivo_situacao": "Extinção Por Encerramento Liquidação Voluntária",
	"cnpj": "12.345.678/0001-95",
	"ultima_atualizacao": "2024-12-25T07:47:55.622Z",
	"status": "OK",
	"fantasia": "",
	"efr": "",
	"situacao_especial": "",
	"data_situacao_especial": "",
	"atividade_principal": [
		{
			"code": "00.00-0-00",
			"text": "********"
		}
	],
	"atividades_secundarias": [
		{
			"code": "00.00-0-00",
			"text": "Não informada"
		}
	],
	"capital_social": "0.00",
	"qsa": [],
	"simples": {
		"optante": false,
		"data_opcao": "07/08/2010",
		"data_exclusao": "17/06/2013",
		"ultima_atualizacao": "2024-12-14T23:59:59.000Z"
	},
	"simei": {
		"optante": false,
		"data_opcao": "07/08/2010",
		"data_exclusao": "17/06/2013",
		"ultima_atualizacao": "2024-12-14T23:59:59.000Z"
	},
	"extra": {},
	"billing": {
		"free": true,
		"database": true
	}
  }
  ```

## Como Contribuir

1. Faça um **fork** deste repositório.
2. Crie uma **branch** para sua feature (`git checkout -b minha-feature`).
3. Faça as alterações necessárias e adicione testes.
4. Faça o **commit** (`git commit -am 'Adicionando minha feature'`).
5. Envie para o **branch** (`git push origin minha-feature`).
6. Abra um **Pull Request**.

## Licença

Este projeto está sob a licença **MIT**.

---