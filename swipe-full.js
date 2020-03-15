// TODO: verify popup xPaths in regular firefox window
var tinderPlus_NoThanks_path = "/html/body/div[2]/div/div/div[3]/button[2]";

var fb_button = findElement("//*div[2]/div/div/div/div/div[3]/span/div[2]/button");
var location_allow_button = findElement("//*div[2]/div/div/div/div/div[3]/button[1]");

var like_button = findElement("//*div[1]/div/div[1]/div/main/div[1]/div/div/div[1]/div/div[2]/div[4]/button"); //firefox
var dislike_button = findElement("//*/div/div[1]/div/main/div[1]/div/div/div[1]/div/div[2]/div[2]/button");

var notification_popup = findElement("//*/div[2]/div/div/div/div/div[3]/button[2]");
var popup_1 = findElement("//*/div/div/div/div/div[3]/button[1]");
var popup_2 = findElement("//*/div/div/div/div/div[3]/button[1]");
var popup_3 = findElement("//*/div/div/div[2]/button[2]");
var match_popup = findElement("//*/div/div/div[1]/div/div[3]/a");
var listOfPopUps = [notification_popup, popup_1, popup_2, popup_3, match_popup];

function findElement(path) {
    var xPathResult = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    if(xPathResult!=null) return xPathResult.singleNodeValue;
    else return null;
}

function swipeRight() {
    window.open("https://www.tinder.com", "_blank");
    sleep(5000);
    for (var i = 0; i < 100; i++) {
        try {
            like_button.click();
            sleep(1000);
        } catch (error) {
            for (var popup in listOfPopUps) {
                try {
                    popup.click();
                } catch (error) {
                }
            }
        }
    }
}

swipeRight();

//private window firefox login xPath
//loginwithgoogle = /html/body/div[2]/div/div/div/div/div[3]/span/div[1]/div/button
//loginwithphoneNumber = /html/body/div[2]/div/div/div/div/div[3]/span/div[2]/div/button
//loginwithfb = /html/body/div[2]/div/div/div/div/div[3]/span/div[3]/button