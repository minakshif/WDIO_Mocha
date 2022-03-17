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

    await browser.pause(2000);
    var cards = await $$(".card.h-100 div[class='card-body'] h4 a");
    //const ele1=await $('div h4 a');
    var ele2 = await $(".card-footer button");
    const add_btn = await $('.btn.btn-info');

    //var check = $('.nav-link.btn.btn-primary');
    const items = ["Blackberry", "Samsung Note 8", "iphone X"];

    for (let card of cards) {
      for (let item of items) {
        if (await card.getText() === item) {

          // await ele2.click();
          await add_btn.click();
        }
      }
    }

    await checkOut.click();

    // const Total_ele=await $$('tbody tr td:nth-child(4) strong');
    // for(let ele of Total_ele)
    // {
    // var value=await ele.getText();
    // console.log(value);


    // }



    //  cards.filter(async(card)=>await card.getText()==="Blackberry"
    // ).map(async(add)=>await (await add.ele2).click());
    await browser.pause(2000);
    console.log("checkout value" + await checkOut.getText());




  })




})