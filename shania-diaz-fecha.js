const FRMFECHA=document.querySelector("#frmFecha");
FRMFECHA.addEventListener("submit", calcularDia)

function calcularDia(evt){
    evt.preventDefault();
    let dia = parseInt (document.querySelector("#txtDia").value);
    let mes = parseInt (document.querySelector("#txtMes").value);
    let ann = parseInt (document.querySelector("#txtAnn").value);
    
    let imprimir = document.getElementById("resultado");
    imprimir.textContent = diaSiguienteTDA (dia, mes, ann);
    if(txtDia.value == ""){
        alert("introduce un valor");
        return false;
    }else if(txtMes.value == ""){
        alert("introduce un valor");
        return false;
    }else if(txtAnn.value == ""){
        alert("introduce un valor");
        return false;
    }
}

const  diaSiguienteTDA= (dia, mes, ann)=>{
    let bandera = true; //inicializar bandera suponiendo que la fecha es correcta  
    if(mes>12){
        bandera=false;
    }
    switch(mes){
        case 4:
        case 6:
        case 9:
        case 11:
            if(dia <=29){
                dia ++;
            }else if (dia == 30){
                dia=1;
                mes ++;
            }else {
                bandera=false;
            }
            break;
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                if(dia<=30){
                    dia ++;
                }else if(dia == 31 && mes == 12){
                    dia=1;
                    mes=1;
                    ann ++;
                }else if (dia == 31 && mes !=12){
                    dia=1;
                    mes ++;
                }else{
                    bandera=false;
                }
                break;
                case 2:
                    if(ann % 4 == 0){
                        if(dia <= 28){
                            dia ++;
                        }else if(dia == 29){
                            dia=1;
                            mes ++;
                        }else{
                            bandera=false;
                        }
                    }else{
                        if(dia <=27){
                            dia ++;
                        }else if (dia == 28){
                            dia=1;
                            mes ++;
                        }else{
                            bandera=false;
                        }
                    }
    }

    if (bandera){
        return `${dia} - ${mes} - ${ann}`;
    }else{
        return "fecha incorrecta";
    }
}
