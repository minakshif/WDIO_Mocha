describe("Ecommerce Application", () => {
  it("End to End Test", async () => {

    await browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
    const username = await $('#username');
    const password = await $('#password');
    const loginBtn = await $('#signInBtn');
    const checkOut = await $('*=Checkout');
    await username.setValue('rahulshettyacademy');
    await password.setValue('learning');
    await loginBtn.click();
    await browser.maximizeWindow();

    //await browser.pause(2000);
    const items = ["Blackberry", "Samsung Note 8", "iphone X"];
    const cards=await $$("div[class='card h-100']");

    // cards.filter(async (card)=> items.includes(await (await card.$("div h4 a").getText())))
    // .map(async(productcard)=>await (await productcard.$("card-footer button")).click());
    // await checkOut.click();
    // console.log("text"+await checkOut.getText());

for(let card of cards)
{
  const title=await card.$("div h4 a");
  const titleText=await title.getText();
  console.log("title Text"+titleText);
  if(items.includes(await title.getText()))
  {
    console.log("inside if block");
    await (await card.$(".card-footer button")).click();
  }
}
console.log("text"+await checkOut.getText()); 
await checkOut.click();
await browser.saveScreenshot("checkout.png")
    



  })




})