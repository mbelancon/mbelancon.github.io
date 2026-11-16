# CONTEXTO — Site pessoal (mbelancon.github.io)

Arquivo para o Claude. O README do repositório explica como editar.
Cópias iguais: na raiz do repositório e na pasta do projeto (`CONTEXTO.md`). Ao mudar uma, atualize a outra.

## Objetivo
Site pessoal (só dele, não do laboratório), bilíngue PT/EN, publicado em https://mbelancon.github.io
pelo GitHub Pages. Atrativo para estudantes e funcional para ele como pesquisador.

## Estrutura
- `index.html` — página inicial com tudo; textos em `<span class="pt">` e `<span class="en">`.
  Não tem cabeçalho `---`, então o Jekyll o copia como está (não usar `{{` nem `{%` nele)
- Lista `PUBS` no fim do `index.html`: `g` tema, `y` ano, `t` título, `a` autores, `v` veículo, `u` link, `pt`/`en` resumo
- Temas: P fototérmica, G vidros, S energia solar, E energia/ensino, I instrumentação e colaborações
- Imagens ao lado do `index.html` (trocar mantendo o nome)
- Blog (Jekyll do GitHub Pages; `.nojekyll` removido): um post por arquivo em `_posts/AAAA-MM-DD-nome.md`
  (`title_pt/en`, `summary_pt/en`, `youtube` ou `playlist`, `image`, `tags`; texto em `<div class="pt">` e `<div class="en">`)
  → `/blog/nome/`, lista com filtro por tag em `/blog/`, `posts.json` (3 últimos na seção Blog do início) e `/feed.xml`
- Modelo de post: `_modelo-post.md` (não é publicado); tags e nomes PT/EN em `_data/tags.yml`
- Layouts do blog em `_layouts/` (`base`, `post`) e `_includes/`; estilos em `assets/blog.css`, que repete
  as cores do `index.html` (mudar nos dois); `assets/blog.js` faz a troca PT/EN (mesma preferência salva) e o player
- `_config.yml` exclui `README.md` e `CONTEXTO.md` da publicação
- Testar localmente: `jekyll build` (Jekyll 3.10, a versão do GitHub Pages) e conferir que o `index.html` gerado é idêntico

## Decisões de conteúdo
- Menu: Pesquisa, Instrumentação, Divulgação Científica, Blog, Ensino, Contato; destaca a seção visível
- Sobre: trajetória recolhida, só pós-docs e prêmios
- Pesquisa: projetos (INPIIF, REH2V-FV), redes, publicações, orientações ("área de química", sem nome do programa)
- Topo: foto redonda (`foto-topo.jpg`, recorte quadrado de `foto.jpg`) ao lado do nome; foto e nome levam ao "Sobre" e o abrem
- Topo: quadro de palavras-chave clicáveis; "Fotoacústica e fototérmica" unifica TL, TM e fotoacústica
- Um único mapa de coautores (nacionais e internacionais, incluindo os com 2 artigos em comum)
- Instrumentação em destaque (SOI ilustrado); TMTL2 só divulgado, sem versão web
- Divulgação: Lógica Eco (vídeo + link Ecologic), palestras como cartões; projeto 2050 não aparece
- Blog: vídeos no YouTube (player carrega ao clicar, youtube-nocookie), post curto (150–300 palavras) com
  resumo PT/EN e "Para saber mais"; vídeo em português com legenda em inglês. Primeiro post: Lógica Eco
- Patente BR20202501483 citada sem listar o projeto Biometria Neonatal entre os projetos
- Ensino: guia de boas práticas para exercícios de Física Geral I (manchete que abre o conteúdo)

## Pendências
- Novos conteúdos de Ensino
- Palavras-chave do topo listarem também os posts do tema
