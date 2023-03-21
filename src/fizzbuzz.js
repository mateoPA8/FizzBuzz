function fizzbuzz(numero)
{
    if(numero%5==0 && numero%3==0)
    {
        return "fizzbuzz";
    }
    return numero;
}


  function generarLista(numero)
   {
    var lista = [];
    for (var i = 1; i <= numero; i++) {
      fizzbuzz(numero);
    }
    return lista;
  }
export {fizzbuzz,generarLista};