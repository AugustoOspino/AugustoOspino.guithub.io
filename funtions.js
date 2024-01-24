  
function calcular(){
    // declaramos las variables a utilizar 
    var mes=0;
    var totalp = 0;
    var tam= document.getElementById("disabledTextInput").value;
    var pla = document.getElementById("PLAN").value;
    var rec = document.getElementById("FS").value;
    var tipo = document.getElementById("TIPE").value;
    // Casteamos el valor de la var a Pesos colombianos con la siguiente funcion:
    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
      })
    //Validamos que el tamaño del inmueble sea valido
    if(tam>0){
        
        //calculamos segun tipo y cambiamos valores
        switch(tipo){
        
            case "0":
                document.getElementById("result").innerHTML = ("Debe seleccionar el tipo de inmueble...");
                break;
            case "1":
                //cuando el inmueble es tipo oficina
                
                switch(rec){
                    default:
                    document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                    break;
                    case"1":
                    totalp = tam*984*1.1204;
                    // el totalp no puede ser menor a 44000
                    if (totalp < 44000) {
                        totalp = 44000
                    }
                    document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                    mes=totalp*4;
                    document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                    break;
                    case"2":
                    totalp = tam*946*1.1204;
                    // el totalp no puede ser menor a 44000 
                    if (totalp < 44000) {
                        totalp = 44000
                    }
                    document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                    mes=totalp*5;
                    document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                    break;
                    case"3":
                    totalp = tam*910*1.1204;
                    // el totalp no puede ser menor a 44000
                    if (totalp < 44000) {
                        totalp = 44000
                    }
                    document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                    mes=totalp*6;
                    document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                    break;
                    case"5":
                    totalp = tam*875*1.1204;
                    // el totalp no puede ser menor a 44000
                    if (totalp < 44000) {
                        totalp = 44000
                    }
                    document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                    mes=totalp*7;
                    document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                    break;
                    case"6":
                    totalp = tam*840*1.1204;
                    // el totalp no puede ser menor a 44000
                    if (totalp < 44000) {
                        totalp = 44000
                    }
                    document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                    mes=totalp*8;
                    document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                    break;
                    case"7":
                    totalp = tam*808*1.1204;
                    // el totalp no puede ser menor a 44000
                    if (totalp < 44000) {
                        totalp = 44000
                    }
                    document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                    mes=totalp*9;
                    document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                    break;
                    case"8":
                    totalp = tam*778*1.1204;
                    // el totalp no puede ser menor a 44000
                    if (totalp < 44000) {
                        totalp = 44000
                    }
                    document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                    mes=totalp*10;
                    document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                    break;
                    case"9":
                    totalp = tam*1279*1.1204;
                    // el totalp no puede ser menor a 44000
                    if (totalp < 44000) {
                        totalp = 44000
                    }
                    document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                    //mes=totalp*4.345;
                    document.getElementById("result1").innerHTML = ("Este servicio no puede ser ofertado mensualmente" );               break;
                    case"10":
                    totalp = tam*1378*1.1204;
                    // el totalp no puede ser menor a 44000
                    if (totalp < 44000) {
                        totalp = 44000
                    }
                    document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                    //mes=totalp*4.345;
                    document.getElementById("result1").innerHTML = ("Este servicio no puede ser ofertado mensualmente" );
                    break;
                }
                break ;
            case"2":
                     //cuando el inmueble es tipo residencial 
                     
                     
                if(tam >=40 && tam <=86){
                    switch(pla){
                        default:
                        document.getElementById("result").innerHTML = ("Debe selecionar el plan ");
                        break;
                        case "0":
                            // residencial sin plan
                            switch(rec){
                                default:
                                 document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                                break;
                                case"9":
                                 totalp = tam*1700;
                                 //  si totalp es menor a 60000 deben subirse a 60000
                                 if (totalp < 60000) {
                                   totalp = 60000;
                                 }
                                 document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                  //mes=totalp*4.345;
                                document.getElementById("result1").innerHTML = ("Este servicio no puede ser ofertado mensualmente" );
                                break;
                                case"10":
                                 totalp = tam*1830;
                                 //  si totalp es menor a 60000 deben subirse a 60000
                                 if (totalp < 60000) {
                                    totalp = 60000;
                                  }
                                 document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                 //mes=totalp*4.345;
                                 document.getElementById("result1").innerHTML = ("Este servicio no puede ser ofertado mensualmente" );
                                break;
                                
                            }
                            
                            
                        break;
          
                        case "1":
                            //Residencial Lite
                    
                            switch(rec){
                                default:
                                document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                                break;
                                case"1":
                                totalp = tam*1195*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 60000) {
                                    totalp = 60000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*4;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"2":
                                totalp = tam*1147*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 60000) {
                                    totalp = 60000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*5;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"3":
                                totalp = tam*1101*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 60000) {
                                    totalp = 60000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*6;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"5":
                                totalp = tam*1057*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 60000) {
                                    totalp = 60000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*7;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"6":
                                totalp = tam*1015*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 60000) {
                                    totalp = 60000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*8;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"7":
                                totalp = tam*974*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 60000) {
                                    totalp = 60000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*9;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"8":
                                totalp = tam*935*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 60000) {
                                    totalp = 60000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*10;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                
                             }
                        break ;
                        case "2":
                            //Residencial vip
                            switch(rec){
                                default:
                                document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                                break;
                                case"1":
                                totalp = tam*1445*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 65000) {
                                    totalp = 65000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*4;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"2":
                                totalp = tam*1387*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 65000) {
                                    totalp = 65000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*5;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"3":
                                totalp = tam*1332*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 65000) {
                                    totalp = 65000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*6;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"5":
                                totalp = tam*1278*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 65000) {
                                    totalp = 65000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*7;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"6":
                                totalp = tam*1227*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 65000) {
                                    totalp = 65000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*8;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"7":
                                totalp = tam*1178*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 65000) {
                                    totalp = 65000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*9;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"8":
                                totalp = tam*1131*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 65000) {
                                    totalp = 65000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*10;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                
                             }
                        break
                        case "3":
                            //Residencial Platino 
                            switch(rec){
                                default:
                                document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                                break;
                                case"1":
                                totalp = tam*1793*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 70000) {
                                    totalp = 70000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*4;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"2":
                                totalp = tam*1721*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 70000) {
                                    totalp = 70000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*5;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"3":
                                totalp = tam*1652*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 70000) {
                                    totalp = 70000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*6;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"5":
                                totalp = tam*1586*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 70000) {
                                    totalp = 70000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*7;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"6":
                                totalp = tam*1523*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 70000) {
                                    totalp = 70000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*8;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"7":
                                totalp = tam*1462*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 70000) {
                                    totalp = 70000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*9;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"8":
                                totalp = tam*1403*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 70000) {
                                    totalp = 70000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*10;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                
                             }
                        break;
                }
    
                }else if(tam >= 87 && tam <= 110){
                    switch(pla){
                        default:
                        document.getElementById("result").innerHTML = ("Debe selecionar el plan ");
                        break;
                        case "0":
                            switch(rec){
                                default:
                                 document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                                break;
                                case"9":
                                 totalp = tam*1550*1.0987;
                                 //  si totalp es menor a 60000 deben subirse a 60000
                                 if (totalp < 60000) {
                                    totalp = 60000;
                                  }
                                 document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                  //mes=totalp*4.345;
                                document.getElementById("result1").innerHTML = ("Este servicio no puede ser ofertado mensualmente" );
                                break;
                                case"10":
                                 totalp = tam*1673*1.0987;
                                 //  si totalp es menor a 60000 deben subirse a 60000
                                 if (totalp < 60000) {
                                    totalp = 60000;
                                  }
                                 document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                 //mes=totalp*4.345;
                                 document.getElementById("result1").innerHTML = ("Este servicio no puede ser ofertado mensualmente" );
                                break;
                                
                            }
                            
                            
                        break;
          
                        case "1":
                            //lite
                            switch(rec){
                                default:
                                document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                                break;
                                case"1":
                                totalp = tam*1147*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 60000) {
                                    totalp = 60000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*4;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"2":
                                totalp = tam*1101*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 60000) {
                                    totalp = 60000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*5;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"3":
                                totalp = tam*1057*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 60000) {
                                    totalp = 60000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*6;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"5":
                                totalp = tam*1015*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 60000) {
                                    totalp = 60000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*7;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"6":
                                totalp = tam*974*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 60000) {
                                    totalp = 60000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*8;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"7":
                                totalp = tam*935*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 60000) {
                                    totalp = 60000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*9;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"8":
                                totalp = tam*898*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 60000) {
                                    totalp = 60000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*10;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                
                             }
                        break ;
                        case "2":
                            //vip
                            switch(rec){
                                default:
                                document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                                break;
                                case"1":
                                totalp = tam*1387*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 65000) {
                                    totalp = 65000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*4;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"2":
                                totalp = tam*1332*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 65000) {
                                    totalp = 65000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*5;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"3":
                                totalp = tam*1278*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 65000) {
                                    totalp = 65000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*6;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"5":
                                totalp = tam*1227*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 65000) {
                                    totalp = 65000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*7;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"6":
                                totalp = tam*1178*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 65000) {
                                    totalp = 65000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*8;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"7":
                                totalp = tam*1131*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 65000) {
                                    totalp = 65000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*9;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"8":
                                totalp = tam*1086*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 65000) {
                                    totalp = 65000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*10;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                
                             }
                        break
                        case "3":
                            //platino
                            switch(rec){
                                default:
                                document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                                break;
                                case"1":
                                totalp = tam*1721*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 70000) {
                                  totalp = 70000;
                                }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*4;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"2":
                                totalp = tam*1652*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 70000) {
                                    totalp = 70000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*5;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"3":
                                totalp = tam*1586*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 70000) {
                                    totalp = 70000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*6;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"5":
                                totalp = tam*1523*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 70000) {
                                    totalp = 70000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*7;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"6":
                                totalp = tam*1462*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 70000) {
                                    totalp = 70000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*8;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"7":
                                totalp = tam*1403*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 70000) {
                                    totalp = 70000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*9;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"8":
                                totalp = tam*1347*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 70000) {
                                    totalp = 70000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*10;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                
                             }
                        break;
                }
    
                }else if(tam >= 111 && tam <= 160){
                    switch(pla){
                        default:
                        document.getElementById("result").innerHTML = ("Debe selecionar el plan ");
                        break;
                        case "0":
                            switch(rec){
                                default:
                                 document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                                break;
                                case"9":
                                 totalp = tam*1550*1.0987;
                                 //  si totalp es menor a 60000 deben subirse a 60000
                                 if (totalp < 60000) {
                                    totalp = 60000;
                                  }
                                 document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                  //mes=totalp*4.345;
                                document.getElementById("result1").innerHTML = ("Este servicio no puede ser ofertado mensualmente" );
                                break;
                                case"10":
                                 totalp = tam*1673*1.0987;
                                 //  si totalp es menor a 60000 deben subirse a 60000
                                 if (totalp < 60000) {
                                    totalp = 60000;
                                  }
                                 document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                 //mes=totalp*4.345;
                                 document.getElementById("result1").innerHTML = ("Este servicio no puede ser ofertado mensualmente" );
                                break;
                                
                            }
                            
                            
                        break;
          
                        case "1":
                            //lite
                            switch(rec){
                                default:
                                document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                                break;
                                case"1":
                                totalp = tam*1057*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 60000) {
                                    totalp = 60000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*4;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"2":
                                totalp = tam*1015*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 60000) {
                                    totalp = 60000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*5;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"3":
                                totalp = tam*974*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 60000) {
                                    totalp = 60000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*6;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"5":
                                totalp = tam*935*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 60000) {
                                    totalp = 60000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*7;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"6":
                                totalp = tam*898*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 60000) {
                                    totalp = 60000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*8;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"7":
                                totalp = tam*862*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 60000) {
                                    totalp = 60000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*9;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"8":
                                totalp = tam*828*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 60000) {
                                    totalp = 60000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*10;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                
                             }
                        break ;
                        case "2":
                            //vip
                            switch(rec){
                                default:
                                document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                                break;
                                case"1":
                                totalp = tam*1278*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 65000) {
                                    totalp = 65000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*4;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"2":
                                totalp = tam*1227*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 65000) {
                                    totalp = 65000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*5;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"3":
                                totalp = tam*1178*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 65000) {
                                    totalp = 65000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*6;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"5":
                                totalp = tam*1131*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 65000) {
                                    totalp = 65000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*7;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"6":
                                totalp = tam*1086*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 65000) {
                                    totalp = 65000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*8;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"7":
                                totalp = tam*1042*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 65000) {
                                    totalp = 65000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*9;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"8":
                                totalp = tam*1001*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 65000) {
                                    totalp = 65000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*10;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                
                             }
                        break
                        case "3":
                            //plan platino
                            switch(rec){
                                default:
                                document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                                break;
                                case"1":
                                totalp = tam*1585*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 70000) {
                                    totalp = 70000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*4;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"2":
                                totalp = tam*1523*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 70000) {
                                    totalp = 70000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*5;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"3":
                                totalp = tam*1462*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 70000) {
                                    totalp = 70000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*6;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"5":
                                totalp = tam*1403*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 70000) {
                                    totalp = 70000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*7;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"6":
                                totalp = tam*1347*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 70000) {
                                    totalp = 70000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*8;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"7":
                                totalp = tam*1293*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 70000) {
                                    totalp = 70000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*9;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                case"8":
                                totalp = tam*1242*1.0987;
                                //  si totalp es menor a 60000 deben subirse a 60000
                                if (totalp < 70000) {
                                    totalp = 70000;
                                  }
                                document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                                mes=totalp*10;
                                document.getElementById("result1").innerHTML = ("El valor estimado de su limpieza mensual es:<br> <span style='background-color:yellow ;'>"+ formatterPeso.format(mes)+"</span >" );
                                break;
                                
                             }
                        break;
                }
    
                }else{
                    document.getElementById("result").innerHTML = ("tamaño fuera de rango para recidencial... ");
                }
            break;
           case"3":
                //cuando el inmueble es tipo turistico 
                // el tam debe ser minimo 59 mts
                if (tam < 59) {
                    tam = 59;
                }
                switch(rec){
                    default:
                    document.getElementById("result").innerHTML = ("Debe seleccionar la recurrencia ");
                    break;
                    case"9":
                    totalp = tam*950;
                    document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                    //mes=totalp*4.345;
                    document.getElementById("result1").innerHTML = ("Este servicio no puede ser ofertado mensualmente" );
                    break;
                    case"10":
                    totalp = tam*1330;
                    document.getElementById("result").innerHTML = ("El valor estimado de una intervención de limpieza es:<br> <span style='background-color:yellow ;'> "+ formatterPeso.format(totalp)+"</span >" );
                   //mes=totalp*4.345;
                    document.getElementById("result1").innerHTML = ("Este servicio no puede ser ofertado mensualmente" );
                    break;
                 }
                break ;
            
            default:
                document.getElementById("result").innerHTML = ("No se puede calcular debe hacer las selecciones...");
                document.getElementById("result1").innerHTML = ("No se puede calcular debe hacer las selecciones...");
                break;       
           }
           
    
    }else{
        document.getElementById("result").innerHTML = ("Debe ingresar el tamaño para calcular... ");
        document.getElementById("result1").innerHTML = ("");
    }
    
    
    
    //funcion para ocultar recurrencia en turisticos
    }
    function turistico(event){
        if(event.target.value==3){
            document.getElementById("FS").innerHTML =  ("<option selected>seleccionar</option><option value='9'>Ocasional</option><option value='10'>Express</option>");
        }else{
            document.getElementById("FS").innerHTML =  ("<option selected>seleccionar</option><option value='1'>4</option><option value='2'>5</option><option value='3'>6</option><option value='5'>7</option><option value='6'>8</option><option value='7'>9</option><option value='8'>10</option><option value='9'>Ocasional</option><option value='10'>Express</option>")
        }
    }
    function residencial(event){
        if(event.target.value==1 || event.target.value==2 || event.target.value==3){
            document.getElementById("FS").innerHTML =  ("<option selected>seleccionar</option><option value='1'>4</option><option value='2'>5</option><option value='3'>6</option><option value='5'>7</option><option value='6'>8</option><option value='7'>9</option><option value='8'>10</option>");
        }else{
            document.getElementById("FS").innerHTML =  ("<option selected>seleccionar</option><option value='9'>Ocasional</option><option value='10'>Express</option>");
        }
    }
    function plan(event){
        if(event.target.value==1 || event.target.value==3 ){
            document.getElementById("PLAN").innerHTML = ("");
        }else{
            document.getElementById("PLAN").innerHTML = ("<option selected>seleccionar</option><option value='0'>Sin Plan</option><option value='1'>Lite</option><option value='2'>Vip</option><option value='3'>Platino</option>");
        }
    }
    