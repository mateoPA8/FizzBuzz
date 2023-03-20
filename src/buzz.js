function buzz(numero)
{
    if(numero%5==0)
    {
        return "buzz";
    }
    return numero.toString();
}
export default buzz;