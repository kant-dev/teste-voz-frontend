# **Car Management System - CRUD App**

Uma aplicação para gerenciar dados de carros com funcionalidades completas de **CRUD** (**Create**, **Read**, **Update**, **Delete**), focada em simplicidade e eficiência.

---

## **Funcionalidades**
- **Adicionar carros**: Permite cadastrar novos modelos.
- **Visualizar carros**: Exibe uma lista de carros no formato de cartões.
- **Editar carros**: Atualiza informações de carros já cadastrados.
- **Excluir carros**: Remove carros da lista.

---

## **Tecnologias Utilizadas**
- [React.js](https://reactjs.org/) - Biblioteca para criação de interfaces.
- [Next.js](https://nextjs.org/) - Framework React para renderização e rotas.
- [Zod](https://zod.dev/) - Validação de schemas e dados.
- [React Hook Form](https://react-hook-form.com/) - Gerenciamento eficiente de formulários.
- [JSON Server](https://github.com/typicode/json-server) - Fake API para desenvolvimento rápido.
- [Tailwind CSS](https://tailwindcss.com/) - Framework de estilização utilitária.
- [ShadCN](https://ui.shadcn.com/) - Componentes de interface acessíveis.
- [Axios](https://axios-http.com/ptbr/) - Biblioteca para requisições HTTP.

---

## **Como Executar o Projeto**

### **Pré-requisitos**
- **Node.js** instalado.
- Gerenciador de pacotes: **npm** ou **yarn**.

### **Passo a Passo**
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/kant-dev/teste-voz-frontend

2. **Acesse o diretório do projeto:**
   ```bash
   cd teste-voz-frontend

3. **Instale as dependencias com ```npm```:**
    ```
    npm install
    ```
   ou com ```yarn```

    ```
    yarn install
    ```

4. **Configure o endereço IP:**

    No terminal, descubra o seu endereço IP local:

    ```
    ipconfig
    ```

    Abra o arquivo httpClient.js dentro da pasta services e substitua o IP pelo IP da sua máquina.
    Execute o servidor de API (JSON Server): Inicie o JSON Server para simular a API:

    ```
    npm run api
    ```

    Ele estará disponível em: http://localhost:3001.


5. **Inicie o projeto com ```npm```:**

    ```
    npm run dev
    ```

    Ou com yarn:
    
    ```
    yarn dev
    ```
    
    O projeto estará acessível em: http://localhost:3000.


