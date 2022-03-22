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
    const homepage = $("a.navbar-brand")
    await expect(homepage).toBeDisplayed()

    
    const productsList = ["Blackberry", "Samsung Note 8"];
    const cards = await $$("div[class='card h-100']");
    console.log("lenght of cards"+(await cards).length);
    for(let i=0;i<(await cards).length;i++)
    {
      console.log("inside for block");
      const productName=await cards[i].$("div h4 a").getText();
      if(productsList.includes(productName))
      {
        console.log("inside if block");
       await cards[i].$('.card-footer button').click();

      }



    }
    console.log("text: " + await checkOut.getText());
    await checkOut.click();
    await browser.saveScreenshot("checkout1.png")
  

    

  





  })




})