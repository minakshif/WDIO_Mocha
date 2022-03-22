describe("E2E GreenKart", () => {

  it("e2e GreenKart ", async () => {


    browser.url("https://rahulshettyacademy.com/seleniumPractise/#/");
    const logo = $('.brand.greenLogo');
    await logo.waitForDisplayed();
    const cards = await $$('.products>.product');
    await browser.pause(3000);
    const itemCount=$('div.cart-info table tbody tr:nth-of-type(1) strong')

    const vegitable = ["Brocolli","Mango"];

    console.log("length of cards*****" + cards.length);
    for (let i = 0; i < (await cards).length; i++) {

      const productName = await (await cards[i].$('h4')).getText();
      const desiredproduct1=productName.split("-")[0];
      console.log("produts name** "+desiredproduct1);

      if (vegitable.includes(desiredproduct1))
       {
        console.log("inside if block");
       //await cards[i].$("div[class='product-action'] button").click()
      }



    }
    await browser.saveScreenshot("additem.png")
   console.log("length of ele"+await itemCount.getText()); 




  })

})

