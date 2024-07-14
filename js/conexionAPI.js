async function listarCuadros(){
    //const conexion= await fetch("http://localhost:3001/cuadros");
    // const conexion= await fetch("https://alura-geek-api-delta.vercel.app/cuadros");

    const conexion= await fetch("http://localhost:5000/cuadros");
    const conexionConvertida=conexion.json();
    return conexionConvertida;
};

//Aquí debemos indicar el método y qué tipo de archivo se estará enviando  fetch https://alura-geek-api-delta.vercel.app/cuadros
async function enviarCuadro(titulo, tecnica, imagen){
    return await fetch("http://localhost:5000/cuadros",{
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            titulo:titulo,
            tecnica:tecnica,
            imagen:imagen
        })
    })
};

const borrarCuadro = async (id) => {
    try{
        const res= await fetch(`http://localhost:5000/cuadros${id}`,{
            method: "DELETE"
        });
        return await res.json();
    } catch(err) {
        return console.log(err);
    }
}

export const conexionApi={
    listarCuadros,
    enviarCuadro,
    borrarCuadro
}
