describe("Ecommerce Application", () => {

  it("End to End Test", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
    await browser.maximizeWindow();

    const username = $('#username');
    const password = $('#password');
    const loginBtn = $('#signInBtn');
    const checkOut = $('*=Checkout');
    await username.setValue('rahulshettyacademy');
    await password.setValue('learning');
    await loginBtn.click();

     const homepage = $("a.navbar-brand")
     await expect(homepage).toBeDisplayed()

    const productsList = ["Blackberry", "Samsung Note 8", "iphone X"];
    const cards = $$("div[class='card h-100']");

    await cards
      .filter(async (item) => productsList.includes(await item.$("div h4 a").getText()))
      .map(async (item) => await item.$('.card-footer button').click())

    console.log("text: " + await checkOut.getText());
    await checkOut.click();
    await browser.saveScreenshot("checkout.png")

  })

})