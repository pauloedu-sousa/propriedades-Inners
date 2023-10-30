//Capiturando os elementos da tags h1 e a!
let titulo = document.getElementById("titulo");
let link = document.querySelector("a");

//inserindo conteúdos textuais nos elementos
titulo.innerText = 'Temas abordados'
link.innerText = 'Parceiros da Proz'

//Capiturando os elementos das tags ul e ol
let listaNaoOrdenada = document.querySelector("ul");
let listaOrdenada = document.querySelector("ol");
//Inserindo 3 itens na lista não ordenada ul
listaNaoOrdenada.innerHTML = `
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
`
//Inserindo 3 itens na lista ordenada ol
listaOrdenada.innerHTML = `
<li><a href="https://about.meta.com/">Meta<a/></li>
<li><a href="https://www.awseducate.com/signin/SiteLogin?language=en_US">AWS<a/></li>
<li><a href="https://console.cloud.google.com/">Google Cloud<a/></li>
`