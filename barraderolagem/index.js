// pegar o container do texto
const postWarp = document.querySelector(".post-wrap")

// cria a barrinha
let bar = document.createElement("div")
//  estilo da barrinha
bar.style.height = "4px";
bar.style.width = "0px";
bar.style.backgroundColor = "#6633cc";
bar.style.position = "fixed";
bar.style.top = "0";
bar.style.left = "0";
bar.style.zIndex = "9999";
bar.style.transition = "0,2s";

// adiciona no corpo da pagina
document.body.append(bar)

// atualizar a barrinha
function updateBar() {
    // tamanho da caixa que contem o texto
    const textHeight = postWarp.offsetHeight
    console.log(postWarp.offsetHeight)

    // verificar em que posiçao da pagina estou
    const pagePositionY = window.pageYOffset
    console.log(window.pageYOffset)

    //     // regra de 3
    const updateBar = pagePositionY * 100 / textHeight

    bar.style.width = updateBar + "%"

    }

    window.addEventListener("load", () => {
        // verificar o movimento do scroll
        document.addEventListener("scroll", updateBar)
    })