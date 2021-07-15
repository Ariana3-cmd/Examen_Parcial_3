var nombre = document.getElementById("nombre");
var precio = document.getElementById("precio");
var stock= document.getElementById("stock");
var categria= document.getElementById("categoría");
var fila = "";
var est = 0;
function agregar(){
    if(est == 0){
    var table = document.getElementById("table");
    var tbody = document.getElementById("tbd");

    //crear fila
    var fil = document.createElement("tr");

    //crear celda
    var celda_nombre = document.createElement("td");
    celda_nombre.innerHTML=nombre.value;
    var celda_precio = document.createElement("td");
    celda_precio.innerHTML=precio.value;
    var celda_stock = document.createElement("td");
    celda_stock.innerHTML=stock.value;
    var celda_categoria = document.createElement("td");
    celda_categoria.innerHTML=categoria.value;
    var celda_accion = document.createElement("td");
    celda_accion.classList.add("accion");
    celda_accion.innerHTML=
    "<i class='fa fa-pencil-square-o' aria-hidden='true' onclick='editar(this)'></i>"
    +"<i class='fa fa-trash' aria-hidden='true' onclick='eliminar(this)'></i>"
    fil.appendChild(celda_nombre);
    fil.appendChild(celda_precio);
    fil.appendChild(celda_stock);
    fil.appendChild(celda_categoria);
    fil.appendChild(celda_accion);
    tbody.appendChild(fil);
    table.appendChild(tbody);
    limpiar();
    }else{
        fila.cells[0].innerHTML = nombre.value;
        fila.cells[1].innerHTML = precio.value;
        fila.cells[2].innerHTML = stock.value;
        fila.cells[3].innerHTML = categoria.value;
        fila = "";
        limpiar();
        estado = 0;
    }
}
function limpiar(){
    nombre.value = "";
    precio.value=""
   stock.value=""
    categoria.value=""
    nombre.focus();
}
function editar(row){
    fila = row.parentNode.parentNode;
    nombre.value = fila.cells[0].innerHTML;
    precio.value = fila.cells[1].innerHTML;
    stock.value = fila.cells[1].innerHTML;
    categoria.value = fila.cells[1].innerHTML;
    est = 1;
}
function eliminar(row){
    let f = row.parentNode.parentNode;
    f.parentNode.removeChild(f);
}