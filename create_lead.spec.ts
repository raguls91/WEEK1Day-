import test from "@playwright/test";

test("Test to verify Create Lead function", async({page})=>{

//load the url
await page.goto("https://leaftaps.com/opentaps/control/main");

//enter the username
await page.getByRole("textbox",{name:"Username"}).fill("Demosalesmanager");

//enter the password
await page.getByRole("textbox",{name:"Password"}).fill("crmsfa");
//await page.getByLabel("Password").fill("crmsfa");

//clcik the login button
await page.getByRole("button",{name:"Login"}).click();

//click the crmsfa
await page.getByText("CRM/SFA").click();

//click the leads
await page.getByText("Leads",{exact:true}).click();

//click the createlead
await page.getByRole("link",{name:'Create Lead'}).click();

//enter the companyname
await page.locator("#createLeadForm_companyName").fill("Testleaf");

//enter the firstname
await page.locator("#createLeadForm_firstName").fill("Rahul");

//enter the lastname
await page.locator("#createLeadForm_lastName").fill("Sivakumar");

//Select a value from source dropdown
//select tag - selectOption

await page.locator("#createLeadForm_dataSourceId").selectOption({value:"LEAD_EXISTCUST"});

//types of dropdown
//await page.locator("#createLeadForm_dataSourceId").selectOption({label:"Public Relations"});
//await page.locator("#createLeadForm_dataSourceId").selectOption([{index:0},{index:3},{index:5}]);

//select the healthcare value in dropdown
await page.locator("#createLeadForm_industryEnumId").selectOption({value:'IND_HEALTH_CARE'});

//click the create lead button
await page.locator('[name="submitButton"]').click();

//add the wait
await page.waitForTimeout(5000);

});