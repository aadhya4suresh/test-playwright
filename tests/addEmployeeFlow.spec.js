import { test, expect } from '@playwright/test';
import testData from "../testdata/testData.json"
import LoginPage from '../pages/loginPage';
import AddEmployee from '../pages/addEmployee';
import * as dataUtils from "../utilities/dataUtils"

test.describe('Add Employee', () => {
  const url = process.env.URL
  const username = process.env.EMAIL
  const password = process.env.PASSWORD
  const navigationList = Object.values(testData.navigationItems)
  const employeeDetails = dataUtils.employeeDetails();
  let loginPage, addEmployee;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    await page.evaluate(() => {
      window.moveTo(0, 0);
      window.resizeTo(screen.availWidth, screen.availHeight);
    });
    await loginPage.launchAndVerifyUrl(url)
    await loginPage.enterCredentials(username, password)
    await loginPage.clickOnLoginButton()
  });

  test('add employee test', async ({ page }) => {
    addEmployee = new AddEmployee(page)
    await loginPage.verifyPageHeader(navigationList)
    await loginPage.clickOnModule(testData.navigationItems.employee)
    await addEmployee.verifyAddEmployeeScreen(testData.employeePageHeaderButtons)
    await addEmployee.verifyTabs();
    await addEmployee.clickOnAddEmployee();
    await addEmployee.verifyAddEmployeePopUp();
    await addEmployee.verifyAndAddFirstNameAndLastName(employeeDetails.firstName, employeeDetails.lastName);
    await addEmployee.verifyAndAddEmployeeIdAndEmail(employeeDetails.employeeId, employeeDetails.email);
    await addEmployee.verifyAndAddRoleAndPassword(testData.role.employee, employeeDetails.password);
    await addEmployee.verifyAndAddDobAndJoiningDate(employeeDetails.dob, employeeDetails.joiningDate);
    await addEmployee.verifyAndAddQualificationAndDepartment(testData.qualifications.bTech);
    await addEmployee.verifyAndAddGenderAndMobileNumber(employeeDetails.mobileNumber);
    await addEmployee.verifyAndAddBloodGroupAndDesignation();
    await addEmployee.verifyAndAddSalaryAndLocation(employeeDetails.salary, employeeDetails.location);
    await addEmployee.verifyAndAddReportingAndCertificates(username);
    await addEmployee.clickOnAddButton();
    await addEmployee.verifyAlertPopup(testData.alertsPopUps.addEmployeeMessage);
    await addEmployee.waitForPopup()
    await addEmployee.verifyCreatedEmployee(employeeDetails.employeeId);
  });

  test.afterEach(async () => {
    await addEmployee.deleteEmployee();
    await addEmployee.verifyAlertPopup(testData.alertsPopUps.deleteEmployee);
  });
});
