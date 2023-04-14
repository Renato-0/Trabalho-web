console.log("script05.js")

const repositorio = new Repo()


console.log(dadosUser.length)
for (i = 0; i < dadosUser.length; i++) {
    console.log(dadosUser[i])
}

dadosUser.forEach((dd)=>repositorio.addUser(new UserName(dd)))
console.log(repositorio.userNames)

console.log(dados.length)
dados.forEach((el)=> repositorio.addTodo(new Todo(el) ))
console.log(repositorio.todos)

function cadastrar() {
    let texto = document.getElementById("descricao").value
    let obj = {
        userId: 0,
        id: 0,
        title: texto,
        completed: false
    }
    let todo = new Todo(obj)
    repositorio.addTodo( todo )
}

function trocou(val) {
    let todo = repositorio.getTodo(val)
    if (todo != undefined) {
        document.getElementById("detalhe").innerHTML = TodoView.toHTML( todo )
    } else {
        document.getElementById("detalhe").innerHTML = "Código não encontrado"
    }
}

function cr() {
    let text = "";
  dados.forEach (function(value) {
  text += "<br>Usuario" + value.userId + 
          "<br>Id " +value.id+ 
          "<br>" +value.title+ 
          "<br>" +value.completed+"<br><p>"
})

    document.getElementById("detalhe").innerHTML = text;
}

function use() {
    let text = "";
  dadosUser.forEach (function(value) {
  text += "<br>Id" + value.id + 
          "<br>Nome " +value.name+ 
          "<br><p>"
})

    document.getElementById("campoDados").innerHTML = text;
}

function juntar(){
    //Tentativa Falha
    let text = "";
  dados.forEach (function(value) {
  text += "<br>Usuario" + value.userId + 
          "<br>Id " +value.id+ 
          "<br>" +value.title+ 
          "<br>" +value.completed+"<br><p>"

          if(text!='Usuario1'){
         end
        }
})

document.getElementById("campo").innerHTML = text;

 }
    
  

function show(n){
    let userN = repositorio.getUser(n)

     if (userN != undefined) {
       document.getElementById("campoDados").innerHTML = UserView.toHTML( userN )
    } else {
        document.getElementById("campoDados").innerHTML = "Código não encontrado"
    }

}