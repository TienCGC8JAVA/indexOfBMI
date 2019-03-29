
function result()
{
    let BMI = parseInt(document.getElementById("weigh").value)/Math.pow(Number(document.getElementById("height").value),2);
    if (BMI < 18)
    {
        document.write("Underweight");
    }
    else
    {
        if (BMI < 25)
        {
            document.write("Normal");
        }
        else
        {
            if (BMI < 30)
            {
                document.write("Overweight");
            }
            else
            {
                document.write("Obese");
            }
        }
    }
}