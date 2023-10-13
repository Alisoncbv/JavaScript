const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        //console.log(boton.textContent);
        const botonOn = boton.textContent;

        //Boton limpiar
        if(boton.id === "limpiar") {
            pantalla.textContent = "0"; 
            return;
        }

        //Boton borrar número por número
        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "¡Error!"){
                pantalla.textContent = "0";
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        //Boton igual
        if (boton.id === "igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent);
            }catch{
                pantalla.textContent = "¡Error!";
            }
            return;
        }

        if(pantalla.textContent === "0" || pantalla.textContent === "¡Error!"){
            pantalla.textContent = botonOn;
        }else{
            pantalla.textContent += botonOn;
        }

       
        

    })
})