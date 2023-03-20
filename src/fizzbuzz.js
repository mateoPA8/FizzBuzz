function fizzbuzz(numero)
{
    if(numero%5==0 && numero%3==0)
    {
        return "fizzbuzz"
    }
    return numero.toString();
}

export default fizzbuzz;