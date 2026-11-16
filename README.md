# mbelancon.github.io

Site pessoal de Marcos Paulo Belançon, publicado em https://mbelancon.github.io

Site estático de uma página (`index.html`), em português e inglês.

## Como editar

- **Publicações**: no final do `index.html`, a lista `PUBS` tem uma entrada por trabalho
  (`g` = tema, `y` = ano, `t` = título, `a` = autores, `v` = veículo, `u` = link, `pt`/`en` = resumo).
  Temas: `P` fototérmica, `G` vidros, `S` energia solar, `E` energia/ensino, `I` instrumentação e colaborações.
- **Textos**: cada trecho aparece duas vezes, em `<span class="pt">` e `<span class="en">`.
- **Imagens**: ficam ao lado do `index.html`; para trocar uma, substitua o arquivo mantendo o nome.
- **Blog**: um arquivo por post em `_posts/AAAA-MM-DD-nome-curto.md` (vira `/blog/nome-curto/`).
  Copie `_modelo-post.md` (ou o post anterior) e troque títulos, resumos, id do vídeo do YouTube,
  tags e o texto, nas duas línguas. As tags e seus nomes em PT/EN ficam em `_data/tags.yml`.
  O GitHub Pages monta sozinho a página do post, a lista em `/blog/`, os cartões da seção Blog
  do início (via `posts.json`) e o RSS (`/feed.xml`). Os estilos das páginas do blog estão em
  `assets/blog.css`; as cores repetem as do `index.html`.
