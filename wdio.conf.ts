export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',

    port: 4723,
    specs: [
        './test/Specs/consultantE2E.ts'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Galaxy S23 Ultra',
        'appium:platformVersion': '15.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': './app/app-staging-release.apk',
        'appium:noReset': true,
        'appium:autoGrantPermissions': true,
        'appium:newCommandTimeout': 240
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
        useCucumberStepReporter: false
    }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function (_test: any, _context: any, { passed }: TestResult) {
        if (!passed) {
            // Take a screenshot when test fails
            const timestamp = new Date().toISOString().replace(/[^0-9]/g, '');
            const screenshotPath = `./screenshots/failed-test-${timestamp}.png`;
            await browser.saveScreenshot(screenshotPath);
        }
    },
}
