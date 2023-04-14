class Pessoa {
    constructor(jsonObj) {
        this.id = jsonObj.id
        this.nome= jsonObj.nome
        this.cargo = jsonObj.cargo
        this.unidade = jsonObj.unidade
        this.digital = jsonObj.digital
        this.sincrono = jsonObj.sincrono
    }
    descricao() {
        return this.nome + " ("+this.cargo+")"
    }
}

class TodoView {
    static toHTML(todo) {
        return  "<div>"+
        "<p>Usuario: "+todo.userId+"</p>"+
        "<p>ID: "+todo.id+"</p>"+
        " <p>"+todo.title+"</p>"+
        "<p>"+ (todo.completed ? 'Finalizado' : 'Aberto') +"</p>"+
        "</div>"
    }
}

class Todo {
    constructor(json) {
        this.userId = json.userId
        this.id = json.id
        this.title = json.title
        this.completed = json.completed
    }
}

class UserView{
    static toHTML(userN){
        return  "<div>"+
       "<p>Identificação: " +userN.id+"</p>" +
       "<p>Nome: " +userN.name+"</p>" +
       "<p>Usuario: " +userN.username+"</p>" +
       "<p>Email: " +userN.email+"</p>" +
       "<p>Endereço: " + "<br>Rua=> " +userN.address.street+ 
       "<br>Numero=> " +userN.address.suite+ 
       "<br>Cidade=> " +userN.address.city+
       "<br>Código Postal=>  " +userN.address.zipcode+
       "<p>Cordenadas: " + "<br>Latitude=> " +userN.address.geo.lat+
       "<br>Longitude=> " +userN.address.geo.lng+"</p>" +                     
       "<p>Telefone: " +userN.phone+"</p>" +  
       "<p>Site: " +userN.website+"</p>" +  
       "<p>Empresa/Companhia: " + "<br>Nome=> " +userN.company.name+ 
       "<br>Slogan=> " +userN.company.catchPhrase+
       "<br>Foco=> " +userN.company.bs+"</p>" +         
       "</div>"    
}
}

class UserName {
    constructor(json){
       this.id = json.id
       this.name = json.name
       this.username = json.username
       this.email = json.email
       this.address = json.address
       this.street = json.street
       this.suite = json.suite
       this.city = json.city    
       this.phone  = json.phone
       this.website = json.website
       this.company = json.company  
           
    }
}


class Repo {
    constructor() {
        this.todos = new Map()
        this.pessoas = new Map()
        this.userNames = new Map()
        this.to = new Map()
        
    }

    addTodo(todo) {
        if (todo.id === 0) {
            todo.id = this.todos.size+1
        }
        this.todos.set(todo.id, todo)
    }
    getTodo(id) {
        return this.todos.get(Number(id))
    }

    addUser(userN) {
        if (userN.id === 0) {
            userN.id = this.userNames.size+1
        }
        this.userNames.set(userN.id, userN)
    }
    getUser(id) {
        return this.userNames.get(Number(id))
    }

}