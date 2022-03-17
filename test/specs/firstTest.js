describe("",()=>{

xit("login",async ()=>{

await browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
 console.log("*******url of page********"+await browser.getUrl());
 await expect(browser).toHaveUrl("https://rahulshettyacademy.com/loginpagePractise/#");
  await expect(browser).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
//await browser.pause(3000);
const username=await $('#username');
const password=await $('#password');
const loginBtn=await $('#signInBtn');
const checkOut=await $('*=Checkout');
await username.setValue('rahulshettyacademy');
await password.setValue('learning');
await loginBtn.click();
//await browser.pause(3000);
await checkOut.waitForExist({timeout:5000});
await browser.saveScreenshot('homepage.png');
console.log('tile after login********'+await browser.getTitle())

 await expect(browser).toHaveTitle('ProtoCommerce');




}),
xit("login",async ()=>{

    await browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
    
    
    })



})