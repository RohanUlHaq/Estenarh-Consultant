/// <reference types="@wdio/globals/types" />
import allure from '@wdio/allure-reporter';
const { JoinAsConsultant } = require('../helpers/testFlows');

describe('Estenarh-Consultant App Test Suite', () => {
    beforeEach(async function () {
        allure.addFeature('Estenarh-Consultant Mobile App');
    });

    it('JoinAsConsultant', async () => {
        allure.addSeverity('critical');
        allure.addDescription('Verify Join as Consultan Flow', 'text');
        allure.startStep('Execute Join as Consultant Flow');
        await JoinAsConsultant();
        allure.endStep();
    });
});