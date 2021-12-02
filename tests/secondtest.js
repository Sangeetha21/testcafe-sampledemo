//setmore Test
import { Selector } from 'testcafe'; // first import testcafe selectors
var clickHover= Selector(()=> document.querySelector('service-wrapper').shadowRoot.querySelector('.meeting-card-wrapper  .meeting-top .ellipsis-button.hide'));
// var hoverClick= Selector(() => document.querySelector("body > service-wrapper").shadowRoot.querySelector("div.container > div:nth-child(1) > div:nth-child(3) > div > div.meeting-top > div.list-popover > ul > li:nth-child(2)"));

fixture `Getting Started`// declare the fixture
// .page `https://easysharestage.setmore.com/home/`;
     .page `https://easyshare-dot-staging-cochii-hrd.appspot.com/index.jsp`;  // specify the start page


// then create a test and place your code there
test('My second test', async t => {
    await t
    .maximizeWindow()
        .typeText('#username', 'nov24easyshare@setmore.com')
        .typeText('#password', 'Sangeetha21')
        .click('#sm-login-btn')
        .debug()
        .click('#share-booking-links')

        // .expect(Selector('#cal-today.span').innerText).eql('Today')

        // Use the assertion to check if the actual header text is equal to the expected one

         const sel= await Selector(()=>document.querySelector('#bookinglinkShare  > service-wrapper').shadowRoot.querySelector('.my-booking').innerText);

        //  var clickHover= Selector(()=> document.querySelector('service-wrapper').shadowRoot.querySelector('.meeting-card-wrapper'))

        //  await t .expect(clickHover.exists).ok;
        //  var clickHover= Selector(()=> document.querySelector('service-wrapper').shadowRoot.querySelector('.meeting-card-wrapper .meeting-top .ellipsis-button'))
        var clickhover= Selector(()=>  document.querySelector('service-wrapper').shadowRoot.querySelector('.meeting-card-wrapper .meeting-top .ellipsis-button.hide').classList.remove('hide'))
         await t.click(clickhover);
         await t .expect(clickhover.exists).ok;
         await t.debug()


         
        //  await t .setTestSpeed(0.1) .hover(clickHover);
        //  document.querySelector("#bookinglinkShare > service-wrapper").shadowRoot.querySelector("div.container > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div.meeting-top > button").click()
        //  var clickHover= Selector(()=> document.querySelector('service-wrapper').shadowRoot.querySelector('.meeting-card-wrapper  .meeting-top .ellipsis-button.hide'));

});
