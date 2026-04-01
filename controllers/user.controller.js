import { faker } from "@faker-js/faker"

class UserController {

    static getUsers(req, res) {
        res.send(Array.from({ length: 5000 }, (_v, i) => {

            const firstName = faker.person.firstName()
            const lastName = faker.person.lastName()

            return {
                id: i + 1,
                name: `${firstName} ${lastName}`,
                email: faker.internet.email({ firstName, lastName })
            }
        }))
    }
}

export default UserController