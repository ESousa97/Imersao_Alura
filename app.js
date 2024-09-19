function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    const section = document.getElementById("resultados-pesquisa");

    // Limpa o conteúdo anterior da seção
    section.innerHTML = "";

    // Obtém o valor digitado no campo de busca
    const query = document.getElementById("search-query").value.toLowerCase();

    // Configurações para o Fuse.js (pesquisa aproximada)
    const options = {
        includeScore: true,  // Inclui a pontuação de correspondência
        threshold: 0.4,  // Define a sensibilidade da correspondência (mais baixo = mais exato)
        keys: ['comando', 'descricao']  // Define os campos nos quais pesquisar
    };

    // Inicializa Fuse.js com os dados e as opções
    const fuse = new Fuse(dados, options);

    // Executa a pesquisa
    const resultadosFiltrados = fuse.search(query).map(result => result.item);

    // Verifica se há resultados
    if (resultadosFiltrados.length === 0) {
        section.innerHTML = "<p>Nenhum resultado encontrado.</p>";
        return;
    }

    // Itera sobre cada dado filtrado e cria os elementos HTML
    resultadosFiltrados.forEach(dado => {
        // Cria o div principal para o item de resultado
        const itemResultado = document.createElement('div');
        itemResultado.classList.add('item-resultado');

        // Cria o título com o comando
        const titulo = document.createElement('h2');
        const linkComando = document.createElement('a');
        linkComando.textContent = dado.comando;
        linkComando.href = dado.link || "#";  // Usa '#' se não houver link
        linkComando.target = "_blank";
        titulo.appendChild(linkComando);

        // Cria a descrição
        const descricao = document.createElement('p');
        descricao.textContent = dado.descricao;
        descricao.classList.add('descricao-meta');

        // Cria o link para mais informações (se houver link)
        const linkInfo = document.createElement('a');
        if (dado.link) {
            linkInfo.href = dado.link;
            linkInfo.textContent = "Mais informações";
            linkInfo.target = "_blank";
        } else {
            linkInfo.textContent = "Link não disponível";
        }

        // Adiciona os elementos ao item de resultado
        itemResultado.appendChild(titulo);
        itemResultado.appendChild(descricao);
        itemResultado.appendChild(linkInfo);

        // Adiciona o item de resultado à seção
        section.appendChild(itemResultado);
    });
}
