# Prompt de Comando Windows

Este projeto é uma ferramenta de pesquisa interativa para comandos do Prompt de Comando do Windows. Ele permite que os usuários pesquisem rapidamente comandos e obtenham descrições detalhadas, com suporte para erros de digitação, garantindo que as consultas forneçam resultados mesmo com pequenas incorreções.

## Funcionalidades

- **Pesquisa por Comandos**: Os usuários podem digitar comandos ou partes de comandos e obter descrições detalhadas.
- **Pesquisa Aproximada**: A ferramenta usa a biblioteca Fuse.js para permitir pesquisas com erros de digitação e correspondências aproximadas.
- **Interface Responsiva**: A interface é totalmente responsiva, adaptando-se a diversos tamanhos de tela, incluindo dispositivos móveis.
- **Perfis de Redes Sociais**: Botões para perfis no GitHub e LinkedIn são fornecidos na interface.
- **Estilização Customizada**: O design da página é estilizado com a fonte "Chakra Petch", garantindo uma aparência moderna.

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica para o conteúdo da página.
- **CSS3**: Estilização responsiva e moderna para tornar a aplicação acessível em diversos dispositivos.
- **JavaScript**: Lógica de pesquisa, manipulação do DOM e interação com o usuário.
- **Fuse.js**: Biblioteca de pesquisa fuzzy para lidar com erros de digitação.
- **GitHub e LinkedIn**: Perfis conectados com botões interativos para navegação.

# Estrutura do Projeto

```bash

├── app.js            # Lógica de pesquisa e manipulação de dados no projeto
├── dados.js          # Armazena os comandos e descrições do Prompt de Comando
├── index.html        # Arquivo HTML principal da aplicação
├── README.md         # Documento de descrição e instruções do projeto
└── style.css         # Arquivo de estilos CSS do projeto

```

## Instalação e Uso

### Clonar o repositório
Clone este repositório em sua máquina local usando o seguinte comando:
```bash
git clone https://github.com/seu-usuario/prompt-de-comando-windows.git

```

Abrir o Projeto

Abra o arquivo index.html em seu navegador preferido. Não é necessário servidor local, pois o projeto é puramente baseado em HTML, CSS e JavaScript.

Realizar Pesquisa

Digite um comando no campo de pesquisa. O sistema retornará uma lista de comandos correspondentes.

A pesquisa ignora pequenos erros de digitação graças à integração com Fuse.js.

Testar Responsividade

Redimensione a janela ou acesse a página em um dispositivo móvel para verificar o layout responsivo.

Dependências

Fuse.js: Uma biblioteca de JavaScript para realizar pesquisas de texto com suporte a erros de digitação.

Adicione ao seu projeto via CDN:

```html

<script src="https://cdnjs.cloudflare.com/ajax/libs/fuse.js/6.5.3/fuse.min.js"></script>

```
