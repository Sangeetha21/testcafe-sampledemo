import { Selector } from 'testcafe'; // first import testcafe selectors
// var clickHover= Selector(()=> document.querySelector('service-wrapper').shadowRoot.querySelector('.meeting-card-wrapper  .meeting-top .ellipsis-button.hide'));
// var hoverClick= Selector(() => document.querySelector("body > service-wrapper").shadowRoot.querySelector("div.container > div:nth-child(1) > div:nth-child(3) > div > div.meeting-top > div.list-popover > ul > li:nth-child(2)"));

fixture `Getting Started`// declare the fixture
 .page `https://easysharestage.setmore.com/home/`;
    //  .page `https://easyshare-dot-staging-cochii-hrd.appspot.com/index.jsp`;  // specify the start page


// then create a test and place your code there
// test('My first test', async t => {
//     await t
//         .typeText('#username', 'sangeelivetest@setmore.com')
//         .typeText('#password', 'Sangeetha21')
//         .click('#sm-login-btn')
//         .click('#share-booking-links');

//         console.log("#cal-today".textContent)
//         // Use the assertion to check if the actual header text is equal to the expected one
//          .expect(Selector('#cal-today.span').innerText).eql('Today');
//          const bookingPageLink = $('#bookinglinkShare  > service-wrapper').shadow$('.my-booking');

//          const sel= await Selector(()=>document.querySelector('#bookinglinkShare  > service-wrapper').shadowRoot.querySelector('.my-booking').innerText);
//          await t.debug()
//          var clickHover= Selector(()=> document.querySelector('service-wrapper').shadowRoot.querySelector('.meeting-card-wrapper  .meeting-top .ellipsis-button.hide'));

// });

test('My first test', async test => {
        await test
            .typeText('#username', 'sangeelivetest@setmore.com')
            .typeText('#password', 'Sangeetha21')
            .click('#login-now')
            const sel= await Selector(()=>document.querySelector('#bookinglinkShare  > service-wrapper').shadowRoot.querySelector('.my-booking').innerText);
            await test.debug()
           
            var clickHover= Selector(()=> document.querySelector('service-wrapper').shadowRoot.querySelector('.meeting-card-wrapper'))

          await test .expect(clickHover.exists).ok;
           // var clickHover= Selector(()=> document.querySelector("#bookinglinkShare > service-wrapper").shadowRoot.querySelector("#Capa_1"));
            // test.click(clickHover);
    //         // await test .expect(clickHover.exists).ok;
    //          await test .debug();
    //         await Selector(()=>document.querySelector('service-wrapper').shadowRoot.querySelector('.container .root .card-section .meeting-card-wrapper .meeting-top ')).click()
    //         //  await test.debug();
    //     // console.log('After hover  '+Selector(()=> document.querySelector('service-wrapper').shadowRoot.querySelector('.container .root .card-section .meeting-card-wrapper .meeting-top .ellipsis-button.i').exists()));
    // //    var edit= Selector(()=>document.querySelector('service-wrapper').shadowRoot.querySelector('.container .root .card-section .meeting-card-wrapper .meeting-top .list-popover ul li:nth-child(2)'));
    //    var edit=(Selector(()=>document.querySelector('service-wrapper').shadowRoot.querySelector('.container .root .card-section .meeting-card-wrapper .meeting-top .list-popover ul li:nth-child(2)')))
    //    await test .expect(edit.exists).ok;
    //   await test .click(edit())
    //   await test.debug()

    //   var passUserName=Selector(()=>document.querySelector('meeting-form').shadowRoot.querySelector('.meeting-root-wrapper #meeting-name'));
    //   await test. typeText(passUserName, 'cange')
    //   var customDuration= Selector(()=>document.querySelector('meeting-form').shadowRoot.querySelector('#custom-input'));
    //   await test.typeText(customDuration, 45);
    //   var clickSave= Selector(()=>document.querySelector('meeting-form') .shadowRoot.querySelector('#submit-btn > span'));
    //   await test.click(clickSave)
    //   await test.debug()


 });

//     //    const hoverService= await Selector(()=>document.querySelector('#bookinglinkShare  > service-wrapper').shadowRoot.querySelector('.meeting-card-wrapper').hover());
//     //    await test 
//     //    .hover(clickHover)
//     //    .click(hoverClick)
//     //    .hover(document.querySelector('#bookinglinkShare  > service-wrapper').shadowRoot.querySelector('.meeting-card-wrapper'))
//     //    await test.debug()


//         // var doExists=await Selector(()=>document.querySelector("#bookinglinkShare > service-wrapper").shadowRoot.querySelector("div > div:nth-child(1) > div.card-section > div:nth-child(2) > div.meeting-top > button").exists);
//         // if(doExists){
//         //     console.log("trace");
//         // }
               
        

//     // Run in iphone:
//     // testcafe "chrome:emulation:device=iphone X" tests/sample-fixture.js


//     // testcafe chrome ./tests/*.js --reporter allure

//     // allure generate allure/allure-results --clean -o allure/allure-report && allure open allure/allure-report


  