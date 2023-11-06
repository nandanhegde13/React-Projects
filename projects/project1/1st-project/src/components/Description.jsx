export function Description()
{
    var rand = Math.floor(Math.random()*3);
    var arr = ['Hello','GoodMorning','GoodEvening','Good Night'];
    return(<p>{arr[rand]}</p>)
} 