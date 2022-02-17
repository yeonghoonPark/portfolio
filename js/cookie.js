// setCookie 함수
function setCookie(name,value,expires){
    let date = new Date();
    date.setDate(date.getDate() + expires);
    document.cookie = name + '=' + value + ';expires=' + date + ';path=/';
}

// getCookie 함수
function getCookie(name){ 
    let value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
}
