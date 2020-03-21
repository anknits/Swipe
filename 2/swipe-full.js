function registerUserScript() {
    await browser.userScripts.register({
        js: [{ file: "fb_logIn.js" }],
        matches: "*://*.facebook.com/*"
    });
}

function programFlow() {
    var cookie_close_button = "//*/div[1]/div/div[2]/div/button";
    TryClickOnElement(cookie_close_button);
    var fb_login_button = "//*/div[2]/div/div/div/div/div[3]/span/div[2]/button";
    TryClickOnElement(fb_login_button);
    registerUserScript();
    var location_allow_button = "//*/div[2]/div/div/div/div/div[3]/button[1]";
    TryClickOnElement(location_allow_button);
    startRightSwipeWithInterval(3000, 100);
}

function TryClickOnElement(btn) {
    try {
        findElement(btn).click();
    } catch (error) {
    }
}

function findElement(path) {
    var xPathResult = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    if (xPathResult != null) return xPathResult.singleNodeValue;
    else return null;
}

function swipeRight() {
    var like_button = "//*/div[1]/div/div[1]/div/main/div[1]/div/div/div[1]/div/div[2]/div[4]/button";
    var notification_popup = "//*/div[2]/div/div/div/div/div[3]/button[2]";
    var popup_1 = "//*/div/div/div/div/div[3]/button[1]";
    var popup_2 = "//*/div/div/div[2]/button[2]";
    var match_popup = "//*/div/div/div[1]/div/div[3]/a";
    var tinderPlus_NoThanks = "//*/div[2]/div/div/div[3]/button[2]";
    var dislike_button = "//*/div/div[1]/div/main/div[1]/div/div/div[1]/div/div[2]/div[2]/button";

    var listOfPopUps = [notification_popup, popup_1, popup_2, match_popup];
    try {
        findElement(like_button).click();
    } catch (error) {
        for (var popup in listOfPopUps) {
            try {
                popup.click();
            } catch (error) {
            }
        }
    }
}

function startRightSwipeWithInterval(delay, repetitions) {
    var counter = 0;
    var intervalID = setInterval(function () {
        swipeRight();
        if (++counter === repetitions) {
            clearInterval(intervalID);
        }
    }, delay);
}

setTimeout(programFlow, 5000);