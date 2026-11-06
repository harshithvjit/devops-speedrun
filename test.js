const { Builder, By } = require('selenium-webdriver');

async function runTest() {
    // Uses Edge since it is your primary browser
    let driver = await new Builder().forBrowser('MicrosoftEdge').build();
    try {
        console.log("Navigating to deployed app...");
        await driver.get('http://localhost:9000');
        
        console.log("Typing name into the form...");
        await driver.findElement(By.id('name')).sendKeys('Harshith');
        
        console.log("Clicking submit...");
        await driver.findElement(By.id('submitBtn')).click();
        
        console.log("Test Passed: Form interacted with successfully!");
    } finally {
        await driver.quit();
    }
}
runTest();