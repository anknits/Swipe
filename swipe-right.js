function swipeRight() {
    try {
        var like_button_path = "//*/div[1]/div/div[1]/div/main/div[1]/div/div/div[1]/div/div[2]/div[4]/button";
        var xPathResult = document.evaluate(like_button_path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        if (xPathResult != null && xPathResult.singleNodeValue != null) xPathResult.singleNodeValue.click();
    } catch (error) {
    }
}

function startRightSwipeWithInterval(delay, repetitions) {
    var x = 0;
    var intervalID = setInterval(function () {
        swipeRight();
        if (++x === repetitions) {
            clearInterval(intervalID);
        }
    }, delay);
}

setTimeout(startRightSwipeWithInterval(3000, 100), 10000);