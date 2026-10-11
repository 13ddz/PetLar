# PetLar

Site de adoção e produtos para pets, com loja, doações, agenda de visitas e conteúdos de cuidado.

## Como executar

1. Instale as dependências:
   npm install

2. Inicie o projeto:
   npm run dev

3. Acesse no navegador:
   http://localhost:5173

## Build de produção

npm run build

## Publicar no GitHub Pages

O workflow do GitHub Actions publica o site automaticamente quando há um push
para `main` ou `master`. Também é possível iniciar a publicação manualmente pela
aba **Actions** do repositório.

Na primeira publicação, em **Settings > Pages**, selecione **GitHub Actions**
como fonte de build e deploy. Após a conclusão do workflow, o endereço do site
ficará disponível nessa mesma seção.
