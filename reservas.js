let silla = ""


function seleccionarSillas(sillaCode) {
    if(silla) {
        document.getElementById(silla).classList.remove("ocupadas")
    } 
    
    silla = sillaCode
    console.log(sillaCode)
    document.getElementById(sillaCode).classList.add("ocupadas")
}

function eliminar(sillaCode) {
    document.getElementById(sillaCode).remove()
}


function reservar() {
   
    const nombre = document.getElementById("name").value 
    const identificacion = document.getElementById("identificacion").value 
    console.log(nombre)
    console.log(identificacion)
    document.querySelector(".table tbody").innerHTML+=`<tr id="${silla}"><td>${nombre}</td><td>${identificacion}</td><td>${silla}</td><td><button class="btn btn-primary mt-3" onclick="eliminar('${silla}')">Eliminar</button></td></tr>`
    
}

