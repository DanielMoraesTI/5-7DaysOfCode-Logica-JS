let congelados = [];
let doces = [];
let frutas = [];
let laticinios = [];
let comida = "";
let categoria = "";
let nome = prompt('Qual o seu nome?');

let adicionarComida = "sim";  // valor inicial como "sim", porque a primeira vez sempre vai entrar no while
while(adicionarComida != "não"){
    adicionarComida = prompt(`${nome}, você deseja adicionar uma comida na lista de compras? Responda: 'sim' ou 'não.`);
    while (adicionarComida != "sim" && adicionarComida != "não") {  //enquanto o texto lido for diferente de "sim" e de "não", exibir que não foi reconhecido e perguntar novamente
	alert(`Por favor, responda sim ou não.`);
        adicionarComida = prompt(`${nome}, você deseja adicionar uma comida na lista de compras? Responda: 'sim' ou 'não.`);
    }
	
    if (adicionarComida === "não"){  //se o texto lido for "não", sair do while
        break;
    }
	
    comida = prompt(`${nome}, qual comida você deseja inserir?`);
    categoria = prompt("Em qual categoria essa comida se encaixa: 'congelados', 'doces', 'frutas' ou 'laticinios'?");
    if(categoria === 'congelados'){
        congelados.push(comida);
    } else if (categoria === 'doces'){
        doces.push(comida);
    } else if (categoria === 'frutas'){
        frutas.push(comida);
    } else if (categoria === 'laticinios'){
        laticinios.push(comida);
    } else {
        alert("Essa categoria não foi pré-definida.")
    }
}
alert(`Lista de compras:\n  Congelados: ${congelados}\n  Doces: ${doces}\n  Frutas: ${frutas}\n  Lacitinios: ${laticinios}`);