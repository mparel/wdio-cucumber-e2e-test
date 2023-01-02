import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai"

Given(/^Google page is opened$/, async function() {
    console.log(`Before opening browser...`)
    await browser.url("https://www.google.com")
    await browser.pause(1000);
    // browser.debug()
    console.log(`After opening browser...`)
})

When (/^Search with (.*)$/, async function(searchItem) {
    console.log(`>> searchItem: ${searchItem}`)
    let ele = await $(`[name=q]`)
    await ele.setValue(searchItem)
    await browser.keys("Enter")
    console.log(`Finished input of the search item...`)
})

Then (/^Click on the first search result$/, async function(){
    console.log(`Clicking on the first element on the search result...`)
    let ele = await $(`<h3>`)
    ele.click()
    console.log(`Finished clicking the first result...`)
})

Then (/^URL should match (.*)$/, async function(expectedURL){
    console.log(`>> expectedURL: ${expectedURL}`)
    let url = await browser.getUrl()
    chai.expect(url).to.equal(expectedURL)
     
})