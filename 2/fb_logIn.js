var fb_email = "";
var fb_password = "";

function log_in()
{
    window.focus();

    var email_box = '//*[@id="email"]';
    var password_box = '//*[@id="pass"]'
    var log_in_btn = '//*[@id="u_0_0"]';
    
    if(findElement(email_box) && findElement(password_box) && findElement(log_in_btn))
    {
    findElement(email_box).value = fb_email;
    findElement(password_box).value = fb_password;    
    log_in_btn.click();
    }
}

function findElement(path) {
    var xPathResult = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    if(xPathResult!=null) return xPathResult.singleNodeValue;
    else return null;
}

log_in();