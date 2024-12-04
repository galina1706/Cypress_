describe('Auth', () => {
    let sid;
    let carId;
    before(() => {

        const userCreds = {
            email: 'mishap1234@gmail.com',
            password: 'qwertyQ1!',
            remember: true
        }
        cy.request('POST', 'https://qauto.forstudy.space/api/auth/signin', userCreds).then((response) => {
            const headers = response.headers;
            const cookie = headers['set-cookie'][1];
            const cookieArray = cookie.split('\n');
            for (const cookie of cookieArray) {
                if (cookie.trim().startsWith('sid=')) {
                    sid = (cookie.trim().split('=')[1]).split(';')[0];
                    break;
                }
            }
        })
    })

    it.only('Post car', () => {
        cy.request({
            method: 'POST',
            url: 'https://qauto.forstudy.space/api/cars',
            body: {
                "carBrandId": 1,
                "carModelId": 2,
                "mileage": 140
            },
            headers: {
                Cookie: `sid=${sid}`,
            },
        }).then((response) => {
            cy.log(JSON.stringify(response.body))
            carId = response.body?.data?.id;
            expect(response.status).to.equal(201);
        });
    })

    it.only('Get cars', () => {
        cy.request({
            method: 'GET',
            url: 'https://qauto.forstudy.space/api/cars',
            headers: {
                Cookie: `sid=${sid}`,
            },
        }).then((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.equal(200);
        });
    })

    it.only('Delete car', () => {
        cy.request({
            method: 'DELETE',
            url: `https://qauto.forstudy.space/api/cars/${carId}`,
            headers: {
                Cookie: `sid=${sid}`,
            },
        }).then((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.equal(200);
        });
    })
})
