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
          "<br>" +(value.completed ? 'Finalizado' : 'Aberto')+"<br><p>"    

          if(value.completed=='Aberto'){
            document.getElementById("detalhe").style.fontSize = '200pt';
        }

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
    let text2 = "";

  dados.forEach (function(value) {
    dadosUser.forEach (function(value2) {        
        if(value.userId==value2.id){
        text2 +="<br>Nome Usuario:" +value2.name+
               //"<br>Usuario:" + value.userId + 
               "<br>Id Todo: " +value.id+ 
               "<br>" +value.title+ 
               "<br>" +(value.completed ? 'Finalizado' : 'Aberto')+"<br><p>"
          
    
        }
    })  
    
})




document.getElementById("campo").innerHTML = text2;
 
}  
  

function show(n){
    let userN = repositorio.getUser(n)

     if (userN != undefined) {
       document.getElementById("campoDados").innerHTML = UserView.toHTML( userN )
    } else {
        document.getElementById("campoDados").innerHTML = "Usúario não encontrado"
    }

}
