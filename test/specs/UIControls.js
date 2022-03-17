const expectChai=require('chai').expect;
describe("UIControls",()=>{

xit("radiobtn",async()=>{

await browser.url("https://rahulshettyacademy.com/loginpagePractise/#");

const RadioBtns=await $$('.customradio');
const userradio=RadioBtns[1];
const modal=await $('.modal-body');
const Dropdown=await $('select.form-control');
(await userradio.$('.radiotextsty')).click();


//await expect(modal).not.toBeDisplayed();
await expect(modal).toBeDisplayed()
await browser.saveScreenshot('radioselection.png');
await Dropdown.selectByVisibleText('Consultant');
expectChai(await Dropdown.getValue()).to.equal('consult');

await browser.pause(3000);


})
xit("dynamic dropdown",async()=>{

await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
const dynamicDropDown=await $('input#autocomplete');



await dynamicDropDown.setValue('ger');
await browser.pause(2000);
const items=await $$("ul[id='ui-id-1'] li div");


console.log("*******************"+items.length);

// const desiredLocator=async(items)=>{
//     await items.filter(async(item)=>
//     {
//         const text=await item.getText()
//         return text==="India"
// })
// }
// await desiredLocator[0].click();
// console.log("length..."+desiredLocator.length);// its printe size 1


for(let i=0;i<items.length;i++)
{
    console.log("******list of countries********"+await items[i].getText());
    if(await items[i].getText()==='Germany')
    {
        await items[i].click();
        break;
    }
}

var s=await dynamicDropDown.getText();
console.log("value in dropdown*******"+s);
await browser.saveScreenshot("dynamicdropdown.png");
await browser.pause(3000);


})

xit("checkboxes",async()=>{
 await browser.url("https://rahulshettyacademy.com/AutomationPractice/");

 const check_list=await $$("label input[type='checkbox']");
 console.log("number of checkboxes ele***"+check_list.length);
 await check_list[0].click();
 await browser.pause(2000);
 console.log("1st checkbox"+await check_list[0].getText());
 console.log("2nd checkbox"+await check_list[1].getText());
 console.log("3rd checkbox"+await check_list[2].getText());

})
xit("scrolling and mouse hover",async()=>{


    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    const mouseHover_ele=await $('#mousehover');
const top_ele=$('=Top');
    await mouseHover_ele.scrollIntoView();
    await mouseHover_ele.moveTo();

    await top_ele.click();
    await browser.saveScreenshot('topselection.png');


})
xit("Alert",async()=>{

await browser.url('https://only-testing-blog.blogspot.com/2014/09/selectable.html');
const doubleClickBtn=await $("//button[text()='Double-Click Me To See Alert']");
await doubleClickBtn.doubleClick();
//await browser.pause(2000);
//const flag=await browser.isAlertOpen();

expectChai(await browser.isAlertOpen()).to.true;
expectChai(await browser.getAlertText()).to.equal("You double clicked me.. Thank You..");
await browser.acceptAlert();






})

xit("webtable sorting_veggi",async()=>{

await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers");
const headers=await $$('.table.table-bordered tr th');
await headers[0].click();
await browser.pause(2000);
 const veggie_ele=await $$('.table.table-bordered tr td:nth-child(1)');
 let Orignal_array=new Array();
 let sorted_array=new Array();
 let newArray=new Array();
 for(let veg of veggie_ele)
 {
   Orignal_array.push(await veg.getText())
 }
 console.log("original array"+Orignal_array);
 newArray=Orignal_array.slice();

 sorted_array=newArray.sort();
 console.log('sorted arary'+sorted_array);
 expectChai(Orignal_array).to.eql(sorted_array);
 //expectChai(Orignal_array).to.deep.equal(sorted_array);

 

})
xit("webtableSorting_prices",async()=>{


    await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers");
const headers=await $$('.table.table-bordered tr th');
await headers[1].click();
await browser.pause(2000);
const price_eles=await $$('.table.table-bordered tr td:nth-child(2)');
let ori_array=new Array();
let temp_array=new Array();
let sorted_arry=new Array();

for(let price of price_eles)
{
    ori_array.push(await price.getText());
}

console.log(ori_array);

temp_array=ori_array.slice();
sorted_arry=temp_array.sort((a,b)=>b-a);
console.log(sorted_arry);
expectChai(ori_array).to.eql(sorted_arry);


})

xit("webtableFilterValidation",async()=>{

    await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    const search_filed=await $('#search-field');
    await search_filed.setValue('Tomato');
    await browser.saveScreenshot("filterSelection.png");
    const fruitName_list_locator=await $$('.table.table-bordered tr td:nth-child(1)');
    console.log("length"+fruitName_list_locator.length);
    expect(fruitName_list_locator).toBeElementsArrayOfSize({eq:5});

   var textinfilter= await fruitName_list_locator[0].getText();
   expectChai(textinfilter).to.equal("Tomato");




})
xit("window switching",async()=>{

    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    const window_open_ele=await $('#openwindow');
    await window_open_ele.click();
   var handlers=await browser.getWindowHandles();
   await browser.switchToWindow(handlers[1]);
   console.log(await browser.getTitle());




})
it("newWindow&swithWindow",async()=>{
await  browser.url("https://rahulshettyacademy.com/AutomationPractice/");
const title_1stWindow=await browser.getTitle();
//await browser.pause(2000);
const textBox_ele=await $('#name');
await browser.newWindow("https://www.google.co.in/");
var text=await browser.getTitle();
await browser.switchWindow(title_1stWindow);
await textBox_ele.setValue(text);
await browser.pause(2000);





})




})