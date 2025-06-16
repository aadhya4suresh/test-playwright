import { faker } from "@faker-js/faker"
import { addDays, addYears, format } from "date-fns";

export function employeeDetails() {
    const firstName = `${faker.word.words()}AutomationUser`;
    const lastName = `${faker.word.sample()}lastName`;
    const employeeId = `EMPID${faker.number.int({ min: 1000, max: 9999 })}`;
    const email = faker.word.noun() + '@yopmail.com'
    const userName = `${faker.person.firstName()}_AutomationUser`;
    const password = `${faker.internet.password()}`;
    const dob = format(addYears(new Date(), -18), 'yyyy-MM-dd');
    const joiningDate = format(addDays(new Date(), 20), 'yyyy-MM-dd');
    const mobileNumber = String(faker.number.int({ min: 1000000000, max: 9999999999 }));
    const salary = String(faker.number.int({ min: 6000, max: 100000 }));
    const location = faker.location.city()
    return { firstName, lastName, employeeId, email, userName, password, dob, joiningDate, mobileNumber, salary, location };
}