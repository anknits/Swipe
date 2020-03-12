// TODO: verify popup xPaths in regular firefox window

const popup_1 = document.body.find_element_by_xpath('//*[@id="modal-manager"]/div/div/div/div/div[3]/button[1]');
const popup_2 = document.body.find_element_by_xpath('//*[@id="modal-manager"]/div/div/div/div/div[3]/button[1]');
const popup_3 = document.body.find_element_by_xpath('//*[@id="modal-manager"]/div/div/div[2]/button[2]');
const match_popup = document.body.find_element_by_xpath('//*[@id="modal-manager-canvas"]/div/div/div[1]/div/div[3]/a');
const listOfPopUps = [popup_1, popup_2, popup_3, match_popup];

function swipeRight(){
    const like_btn = document.body.find_element_by_xpath('//*[@id="content"]/div/div[1]/div/main/div[1]/div/div/div[1]/div/div[2]/button[3]');
    try {
        like_btn.click();
    } catch (error) {
        for(var popup in listOfPopUps){
            try {
                popup.click();
            } catch (error) {                
            }
        }        
    }
}

swipeRight();

//private window firefox login xPath
//loginwithgoogle = /html/body/div[2]/div/div/div/div/div[3]/span/div[1]/div/button
//loginwithphoneNumber = /html/body/div[2]/div/div/div/div/div[3]/span/div[2]/div/button
//loginwithfb = /html/body/div[2]/div/div/div/div/div[3]/span/div[3]/button