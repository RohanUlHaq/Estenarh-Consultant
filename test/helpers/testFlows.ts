import { browser } from '@wdio/globals';
const JoinAsConsultantLocators = require('../ScreenObjects/join_as_consultant_locators');


export async function JoinAsConsultant() {
    await browser.pause(5000); // Wait for the app to load
    await JoinAsConsultantLocators.join_our_mission_button.click();
    await JoinAsConsultantLocators.email_switcher.click();

    function generateRandomEmail() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let username = "";
        for (let i = 0; i < 8; i++) {
            username += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return username + "@yopmail.com";
    }

    await JoinAsConsultantLocators.email_input.setValue(generateRandomEmail());
    await JoinAsConsultantLocators.login_button_next.click();
    await browser.pause(2000); // Wait for OTP input to appear
    await JoinAsConsultantLocators.otp1.click();
    await JoinAsConsultantLocators.otp1.setValue('1');
    await JoinAsConsultantLocators.otp2.setValue('2');
    await JoinAsConsultantLocators.otp3.setValue('3');
    await JoinAsConsultantLocators.otp4.setValue('4');
    await JoinAsConsultantLocators.otp_next_button.click();
    await browser.pause(2000); // Wait for password input to appear
    await JoinAsConsultantLocators.signup_password.setValue('click123');
    await JoinAsConsultantLocators.signup_confirm_password.setValue('click123');
    await JoinAsConsultantLocators.password_next_button.click();
    await browser.pause(2000);


}
