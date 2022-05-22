let qwe = function ()
{
    var res = 0;
    return function (x)
    {
        res += x;
        return res;
    }
};
let sum = qwe();
sum(3) //-> ф-ция возвращает результат 3
sum(5) //-> ф-ция возвращает результат 8
sum(20) //-> ф-ция возвращает результат 28

debugger;