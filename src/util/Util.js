import Faker from "faker";

export function generateUser() {
    return {
        username: Faker.internet.email(),
        password: Faker.internet.password()
    };
}
