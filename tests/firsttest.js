import { Selector } from 'testcafe'; // first import testcafe selectors
var clickHover= Selector(()=> document.querySelector('service-wrapper').shadowRoot.querySelector('.meeting-card-wrapper'));
var hoverClick= Selector(() => document.querySelector("body > service-wrapper").shadowRoot.querySelector("div.container > div:nth-child(1) > div:nth-child(3) > div > div.meeting-top > div.list-popover > ul > li:nth-child(2)"));

fixture `Getting Started`// declare the fixture
.page `https://easysharestage.setmore.com/home/`;
    // .page `https://my.setmore.com`;  // specify the start page


//then create a test and place your code there
// test('My first test', async t => {
//     await t
//         .typeText('#username', 'sangeelivetest@setmore.com')
//         .typeText('#password', 'Sangeetha21')
//         .click('#sm-login-btn')
//         console.log("#cal-today".textContent)
//         // Use the assertion to check if the actual header text is equal to the expected one
//         // .expect(Selector('#cal-today.span').innerText).eql('Today');
// });

test('My first test', async test => {
        await test
            .typeText('#username', 'sangeelivetest@setmore.com')
            .typeText('#password', 'Sangeetha21')
            .click('#login-now')
            const sel= await Selector(()=>document.querySelector('#bookinglinkShare  > service-wrapper').shadowRoot.querySelector('.my-booking').innerText);
            await test

            .expect(sel.exists).ok;

    //    const hoverService= await Selector(()=>document.querySelector('#bookinglinkShare  > service-wrapper').shadowRoot.querySelector('.meeting-card-wrapper').hover());
       await test 
       .hover(clickHover)
    //    .click(hoverClick)
    //    .hover(document.querySelector('#bookinglinkShare  > service-wrapper').shadowRoot.querySelector('.meeting-card-wrapper'))
       await test.debug()


        // var doExists=await Selector(()=>document.querySelector("#bookinglinkShare > service-wrapper").shadowRoot.querySelector("div > div:nth-child(1) > div.card-section > div:nth-child(2) > div.meeting-top > button").exists);
        // if(doExists){
        //     console.log("trace");
        // }
               
         
            
    });

    // Run in iphone:
    // testcafe "chrome:emulation:device=iphone X" tests/sample-fixture.js


    // testcafe chrome ./tests/*.js --reporter allure

    // allure generate allure/allure-results --clean -o allure/allure-report && allure open allure/allure-report