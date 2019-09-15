var campoText = document.querySelector('#divrefer #adiciona'); //representa o campo de texto no Js
var botaoAdd = document.querySelector('#divrefer #submit'); // representa o botão 
var lista1 = document.querySelector('#divrefer ul'); // representa a lista (ul)


var lista_fazer = JSON.parse(localStorage.getItem('local_todos')) || []; //pegando informações do Local Storage.
// Ele pega pega as informações no localStorage e converte de volta pra array, pois está em formato JSON (string).
// No final a gente diz que se ele não mostrar o valor padrão, se der erro, mostra um array vazio.

/*var lista_fazer = [
  'Ler Saga Crepúsculo',
  'Ler Caraval',
  'Ler Saga Trono de Vidro'
]; //Array com frases*/



function renderTodos(){ //função para renderizar todos
    lista1.innerHTML = ''; //esvazia a <ul> pra não haver cópia de dados

	for(todo of lista_fazer){ //criando estrutura 'for' que percorre o array lista_fazer (o que faz isso é o 'todo')
		var todoLi = document.createElement('li'); //cria elemento <li>
		var textoLi = document.createTextNode(todo); //chama as frases do array que s´~ao lidas pelo todo, que percorre array
		                                             //se eu chamar lsita_fazer, ele pega todp array de uma vez

		var linktag = document.createElement('a'); // cria elemento <a>
		var linkTexto = document.createTextNode(' Excluir'); // cria um texto
		linktag.appendChild(linkTexto); //adiciona o texto criado no elemento
		linktag.setAttribute('href', '#'); //coloca atributos no elemento
		
		var pos = lista_fazer.indexOf(todo);//pede a posição atual do todo em relação a lista_fazer
		linktag.setAttribute('onclick', 'deleteTodos(' + pos + ')'); //cria onclick que executa deleteTodos
                                                    //envaindo a variável 'pos' como parâmetro 		

		todoLi.appendChild(textoLi); //incorpora o texto do array no elemento <li> criado
		todoLi.appendChild(linktag);
		lista1.appendChild(todoLi); //incorpora o <li> criado no <ul>, representado pelo lista1
	}
}

renderTodos(); //executa a função

function addTodos(){
	var textoLi = campoText.value; //recebe o value (o que tiver escrito) do campoText
    lista_fazer.push(textoLi); //adiciona (coloca, push) o conteúdo de textoLi em lista_fazer

    campoText.value = ''; //esvazia o campo de texto
    renderTodos(); //executa renderTodos.
    saveToStorage(); //executa saveToStorage pra salvar a informação
}

function deleteTodos(pos){ //função pra deletar todos recebendo 'pos' como parâmetro
	lista_fazer.splice(pos, 1); //deleta (com .splice) 1 elemento após a posição indicada
	renderTodos(); // executa renderTodos.
	saveToStorage(); // executa saveToStorage.
}

function saveToStorage(){ //função pra salvar as informações no local Storage
	localStorage.setItem('local_todos', JSON.stringify(lista_fazer));
    //aloca um espaço no localStorage chamado 'local_todos'    
    // coloca no local_todos o contúdo de lista_fazer convertido pra string usando o stringify do JSON.
}

botaoAdd.onclick = addTodos; //roda a function quando o botaoAdd é clicado

