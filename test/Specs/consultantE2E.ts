/// <reference types="@wdio/globals/types" />
import allure from '@wdio/allure-reporter';

describe('Login Test Suite', () => {
    it('should open the login page', async () => {
        allure.addFeature('Authentication');
        allure.addSeverity('critical');

        allure.startStep('Navigate to login page');
        await browser.url('https://www.saucedemo.com/');
        allure.endStep();

        // Taking screenshot for the report
        await browser.takeScreenshot();
    });
});