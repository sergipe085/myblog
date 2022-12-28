import { IPost } from "../pages/Post";

const post1: IPost = {
    id: "1",
    title: "hello world",
    createdAt: new Date("12/27/2022"),
    elements: [
        {
            element: "h1",
            content: "Hello World"
        },
        {
            element: "p",
            content: "oi, nesse primeiro post eu vou so explicar um pouco pra voces o por que que eu fiz esse simples site, como ele foi feito, o que eu vou postar nele e compartilhar um pouco doq eu aprendi hoje"
        },
        {
            element: "h2",
            content: "Objetivo"
        },
        {
            element: "p",
            content: "o meu principal objetivo com esse site eh compartilhar com voces tudo que eu venho aprendendo ao longo dos dias e documentar um pouco o meu aprendizado das aulas da faculdade que eu vou comecar no proximo ano"
        },
        {
            element: "h2",
            content: "Conversor"
        },
        {
            element: "p",
            content: "pra facilitar a escrita do site eu fiz um mini conversor de arquivos markdown para arquivos html. Ainda quero adicionar mais funcionalidades nele, como suporte a CodeBlocks e uma build automatica do site (eu escrevo os arquivos markdown em algum lugar e o conversor adiciona os codigos necessarios no projeto pra integrar o post)."
        },
        {
            element: "p",
            content: "o codigo do conversor eh muito simples entao acho que nem vale a pena falar dele aqui. Ele so le todos os arquivos markdown de uma pasta, verifica se eles ja foram convertidos e, se nao tiverem sido, os transforma em HTML por meio do Markdig (uma parser de markdown pra C#)."
        },
        {
            element: "h2",
            content: "Estudo de hoje",
        },
        {
            element: "p",
            content: `
                alem de fazer esse sitezin, hoje eu estudei um pouco sobre principios e padroes de projeto por meio de um livro que eu to lendo (o nome eh Engenharia de Software Moderna). Resumindo, para um software ter um bom design ele precisa ser de facil manutenção, aberto à extenções, ter um acoplamento aceitável, ser coeso, ter um codigo fácil de entender, etc...
                os padroes de projeto ajudam a implementar esses requisitos, resolvendo problemas muito comuns na produção de software e que podem ser resolvidos de maneira generica. amanha eu vou falar um pouco sobre o Strategy Pattern, Decorator, Observer, Singleton, Adaptador e Proxy. ate la, xau
            `
        }
    ]
}

const post2: IPost = {
    id: "2",
    title: "refazendo o site",
    createdAt: new Date("12/28/2022"),
    elements: [
        {
            element: "h1",
            content: "Refazendo o site em React"
        },
        {
            element: "p",
            content: "eu nao gostei da maneira em que o site estava feito (somente em html e css, e tendo que adicionar novos arquivos pra novas paginas manualmente) entao eu reescrevi o site em React. "
        },
        {
            element: "p",
            content: "O site consegue converter arquivos MD em posts automaticamente, pois eu estou usando um json contendo as informacoes dos posts para gera-los automaticamente."
        },
        {
            element: "p",
            content: "Por exemplo no json tem um array de posts e cada post tem os seguintes elementos: :id, :createdAt, :title e :element[]. Cada elemento eh representado por uma tag (h1, h2, h3) e um conteudo (que eh o conteudo da tag). Assim as paginas conseguem ser geradas automaticamente de maneira facil, pois converter markdown nessa estrutura de dados eh uma tarefa relativamente simples."
        },
        {
            element: "p",
            content: "Eu refiz o site em React tambem porque eu acho que vai ser mais facil adicionar mais funcionalidades nele doq se ele fosse feito em html puro, como os codeblocks que eu pretendo colocar"
        },
        {
            element: "h2",
            content: "Estudo de hoje"
        },
        {
            element: "p",
            content: "Eu nao consegui estudar muita coisa hoje porque eu passei o dia fora. Mas eu ainda consegui ler um pouco do livro e eu refiz o blog. Ainda faltam 6 horas pra acabar o dia entao acho que ainda da pra fazer alguma coisa. Acho que vou fazer o post sobre design patterns jaja eba. xau"
        }
    ]
}

export const posts: IPost[] = [
    post1, post2
].reverse();
