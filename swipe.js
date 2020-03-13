// TODO: verify popup xPaths in regular firefox window

const fb_button = findElement('//*div[2]/div/div/div/div/div[3]/span/div[2]/button');
const location_allow_button = findElement('//*div[2]/div/div/div/div/div[3]/button[1]');

const like_button = findElement('//*[@id="content"]/div/div[1]/div/main/div[1]/div/div/div[1]/div/div[2]/div[4]/button'); //chrome
const dislike_button = findElement('//*[@id="content"]/div/div[1]/div/main/div[1]/div/div/div[1]/div/div[2]/div[2]/button'); //chrome

const notification_popup = findElement('//*[@id="content"]/div[2]/div/div/div/div/div[3]/button[2]');
const popup_1 = findElement('//*[@id="modal-manager"]/div/div/div/div/div[3]/button[1]');
const popup_2 = findElement('//*[@id="modal-manager"]/div/div/div/div/div[3]/button[1]');
const popup_3 = findElement('//*[@id="modal-manager"]/div/div/div[2]/button[2]');
const match_popup = findElement('//*[@id="modal-manager-canvas"]/div/div/div[1]/div/div[3]/a');
const listOfPopUps = [notification_popup, popup_1, popup_2, popup_3, match_popup];

function findElement(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function swipeRight() {
    for (var i = 0; i < 100; i++) {
        try {
            like_button.click();
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