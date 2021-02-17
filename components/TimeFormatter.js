const dateFormater = (dia, tipo) => {
  if (tipo == "dia") {
    let fecha = dia.match(/\d+/g);

    switch (fecha[1]) {
      case "01":
        fecha[1] = "Ene";
        break;
      case "02":
        fecha[1] = "Feb";
        break;
      case "03":
        fecha[1] = "Mar";
        break;
      case "04":
        fecha[1] = "Abr";
        break;
      case "05":
        fecha[1] = "May";
        break;
      case "06":
        fecha[1] = "Jun";
        break;
      case "07":
        fecha[1] = "Jul";
        break;
      case "08":
        fecha[1] = "Ago";
        break;
      case "09":
        fecha[1] = "Sep";
        break;
      case "10":
        fecha[1] = "Oct";
        break;
      case "11":
        fecha[1] = "Nov";
        break;
      case "12":
        fecha[1] = "Dic";
        break;
      default:
        break;
    }

    const formateada1 = `${fecha[1]} ${fecha[2]} de ${fecha[0]}`;
    return formateada1;
  } else if (tipo == "hora") {
    let horario = dia.match(/\d+/g);
    let hora = Number(horario[3]);
    hora <= 3 ? (hora += 21) : (hora -= 3);
    hora < 10 && (hora = `0${hora}`);
    const formateada2 = `${hora}:${horario[4]}`;
    return formateada2;
  }
};

export default dateFormater;
