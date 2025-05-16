// Função para exibir a seção correspondente ao botão clicado e esconder as outras seções
function mostrarSecao(id) {

    // Esconde todas as seções exceto a que deve ser exibida
    const secoes = document.querySelectorAll('.secao');
    secoes.forEach(secao => {
        secao.style.display = 'none'
    });
    
    // Exibe a seção correspondente ao botão clicado
    const secaoAtiva = document.getElementById(id);
    secaoAtiva.style.display = 'block';
}

// Adiciona o evento de clique aos links
const links = document.querySelectorAll('.link');

// Adiciona o evento de clique a cada link
// e remove a classe 'link-ativo' do link atualmente ativo
links.forEach(links => {
    links.addEventListener('click', () => {
        document.querySelector('.link-ativo')?.classList.remove('link-ativo');
        links.classList.add('link-ativo');
    });
});

// Adiciona o evento de clique ao botão de menu para alternar a exibição do menu
const toggleBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
    toggleBtn.textContent = menu.classList.contains('show') ? '✖' : '☰';
  });

  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('show');
      toggleBtn.textContent = '☰';
    });
  });


