import { expect, test } from "@playwright/test";

export default class AddEmployee {
    constructor(page) {
        this.page = page;
        this.activeTab = page.locator('[class="activeTabButton"]');
        this.releaseTab = page.locator('[class="tabButtons"]');
        this.addEmployeePopUp = page.locator('.modal-container');
        this.closeBtn = page.locator('[class="close-btn"]');
        this.modalHeader = page.locator('.modal-heading');
        this.firstName = page.locator('[name="firstName"]');
        this.lastName = page.locator('[name="lastName"]');
        this.employeeID = page.locator('#employeeID');
        this.email = page.locator('[name="email"]');
        this.password = page.locator('[name="password"]');
        this.role = page.locator('#role');
        this.dob = page.locator('[name="dob"]');
        this.joiningDate = page.locator('[name="joiningDate"]');
        this.qualifications = page.locator('#qualifications');
        this.department = page.locator('[name="department"]');
        this.gender = page.locator('#gender');
        this.mobileNumber = page.locator('[name="mobileNumber"]');
        this.bloodGroup = page.locator('#bloodGroup');
        this.designation = page.locator('[name="designation"]');
        this.salary = page.locator('#salary');
        this.location = page.locator('[name="location"]');
        this.reportingTo = page.locator('[name="reportingTo"]');
        this.certificates = page.locator('[class="dropdown-btn"]');
        this.certificatesCheckbox = page.locator('[name="PG"]');
        this.addBtn = page.locator('.modal-container [type="submit"]');
        this.cancelBtn = page.locator('.modal-container .justify-content-end [type="button"]');
        this.messagePopUp = page.locator('[aria-live="polite"]');
        this.searchEmpId = page.locator('[aria-label="EMP ID Filter Input"]');
        this.verifyEmployee = page.locator('[role="gridcell"]');
        this.empCheckbox = page.locator('.ag-cell [type="checkbox"]');
        this.deleteEmpContainer = page.locator('.deleteEmployeesContainer p');
        this.deleteEmpIcon = page.locator('button[class="deleteIcon"]');
    }

    async verifyAddEmployeeScreen(headerButtonName) {
        await test.step('Verify Add Employee screen button visible', async () => {
            for (const buttonLabel of Object.values(headerButtonName)) {
                await expect(this.page.getByRole('button', { name: buttonLabel })).toBeVisible();
            }
        });
    }

    async clickOnAddEmployee() {
        await test.step('Click on Add Employee button', async () => {
            await this.page.getByRole('button', { name: 'Add Employee' }).click();
            await this.addEmployeePopUp.waitFor({ state: 'visible' });
        });
    }

    async verifyTabs() {
        await test.step('Verify tabs: Active and Released', async () => {
            await expect(this.activeTab).toBeAttached();
            await expect(this.releaseTab).toBeAttached();
        });
    }

    async verifyAddEmployeePopUp() {
        await test.step('Verify Add Employee popup', async () => {
            await expect(this.addEmployeePopUp).toBeVisible();
            await expect(this.modalHeader).toHaveText('Add Employee');
            await expect(this.addBtn).toBeVisible();
            await expect(this.cancelBtn).toBeVisible();
        });
    }

    async verifyAndAddFirstNameAndLastName(firstName, lastName) {
        await test.step('Enter First and Last Name', async () => {
            await expect(this.firstName).toBeVisible();
            await this.firstName.fill(firstName);
            await expect(this.firstName).toHaveValue(firstName);

            await expect(this.lastName).toBeVisible();
            await this.lastName.fill(lastName);
            await expect(this.lastName).toHaveValue(lastName);
        });
    }

    async verifyAndAddEmployeeIdAndEmail(employeeID, email) {
        await test.step('Enter Employee ID and Email', async () => {
            await expect(this.employeeID).toBeVisible();
            await this.employeeID.fill(employeeID);
            await expect(this.employeeID).toHaveValue(employeeID);

            await expect(this.email).toBeVisible();
            await this.email.fill(email);
            await expect(this.email).toHaveValue(email);
        });
    }

    async verifyAndAddRoleAndPassword(role, password) {
        await test.step('Select Role and Enter Password', async () => {
            await expect(this.role).toBeVisible();
            await this.role.selectOption(role);
            await expect(this.role).toHaveValue(role);

            await expect(this.password).toBeVisible();
            await this.password.fill(password);
            await expect(this.password).toHaveValue(password);
        });
    }

    async verifyAndAddDobAndJoiningDate(dob, joiningDate) {
        await test.step('Enter DOB and Joining Date', async () => {
            await expect(this.dob).toBeVisible();
            await this.dob.fill(dob);

            await expect(this.joiningDate).toBeVisible();
            await this.joiningDate.fill(joiningDate);
        });
    }

    async verifyAndAddQualificationAndDepartment(qualification) {
        await test.step('Select Qualification and Enter Department', async () => {
            await expect(this.qualifications).toBeVisible();
            await this.qualifications.selectOption({ value: qualification });
            await expect(this.qualifications).toHaveValue(qualification);

            await expect(this.department).toBeVisible();
            await this.department.fill('IT Department');
            await expect(this.department).toHaveValue('IT Department');
        });
    }

    async verifyAndAddGenderAndMobileNumber(mobileNumber) {
        await test.step('Select Gender and Enter Mobile Number', async () => {
            await expect(this.gender).toBeVisible();
            await this.gender.selectOption({ value: 'Male' });
            await expect(this.gender).toHaveValue('Male');

            await expect(this.mobileNumber).toBeVisible();
            await this.mobileNumber.fill(mobileNumber);
            await expect(this.mobileNumber).toHaveValue(mobileNumber);
        });
    }

    async verifyAndAddBloodGroupAndDesignation() {
        await test.step('Select Blood Group and Enter Designation', async () => {
            await expect(this.bloodGroup).toBeVisible();
            await this.bloodGroup.selectOption('AB+');
            await expect(this.bloodGroup).toHaveValue('AB+');

            await expect(this.designation).toBeVisible();
            await this.designation.fill('IT Employee');
            await expect(this.designation).toHaveValue('IT Employee');
        });
    }

    async verifyAndAddSalaryAndLocation(salary, location) {
        await test.step('Enter Salary and Location', async () => {
            await expect(this.salary).toBeVisible();
            await this.salary.fill(salary);
            await expect(this.salary).toHaveValue(salary);

            await expect(this.location).toBeVisible();
            await this.location.fill(location);
            await expect(this.location).toHaveValue(location);
        });
    }

    async verifyAndAddReportingAndCertificates(reporting) {
        await test.step('Select Reporting To and Choose Certificates', async () => {
            await expect(this.reportingTo).toBeVisible();
            await this.reportingTo.selectOption(reporting);
            await expect(this.reportingTo).toHaveValue(reporting);

            await expect(this.certificates).toBeVisible();
            await this.certificates.click();
            await this.certificatesCheckbox.check();
        });
    }

    async clickOnAddButton() {
        await test.step('Click on Add button', async () => {
            await expect(this.addBtn).toBeVisible();
            await Promise.all([
                this.page.waitForLoadState('networkidle'),
                this.addBtn.click(),
            ]);
        });
    }

    async verifyAlertPopup(message) {
        await test.step('Verify success popup message', async () => {
            const popup = this.messagePopUp.first();
            await popup.waitFor({ state: 'visible' });
            const text = await popup.textContent();
            expect(text.trim()).toBe(message.trim());
        });
    }

    async waitForPopup() {
        await test.step('Verify success popup message', async () => {
            const popup = this.messagePopUp.first();
            await popup.waitFor({ state: 'hidden' });
        });
    }

    async verifyCreatedEmployee(empId) {
        await test.step('Verify newly created employee by ID', async () => {
            await expect(this.searchEmpId).toBeVisible();
            await this.searchEmpId.fill(empId);
            await expect(this.searchEmpId).toHaveValue(empId);

            const empLocator = this.page.locator(`//*[text()="${empId}"]`);
            await expect(empLocator).toContainText(empId);
        });
    }

    async deleteEmployee() {
        await test.step('Delete selected employee', async () => {
            await expect(this.empCheckbox).toBeVisible();
            await this.empCheckbox.click();
            await expect(this.empCheckbox).toBeChecked();

            await expect(this.deleteEmpContainer).toBeVisible();
            await expect(this.deleteEmpContainer).toContainText('Employees Selected');

            await expect(this.deleteEmpIcon).toBeVisible();
            await this.deleteEmpIcon.click();
            const popup = this.messagePopUp.first();
            await popup.waitFor({ state: 'visible' });
        });
    }
}
