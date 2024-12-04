describe('Auth', () => {
    let sid; // Declare sid globally for the test suite
    let carId;

    before(() => {
        const userCreds = {
            email: 'mishap1234@gmail.com',
            password: 'qwertyQ1!',
            remember: true
        };

        cy.request({
            method: "POST",
            url: "https://qauto.forstudy.space/api/auth/signin",
            body: userCreds
        }).should((response) => {
            const cookies = response.headers['set-cookie'];
            if (cookies) {
                const sidCookie = cookies.find(cookie => cookie.startsWith('sid='));
                if (sidCookie) {
                    sid = sidCookie.split(';')[0].split('=')[1]; // Extract sid value
                }
            }
            expect(response.status).to.eq(200);
        });
    });

    it('Post car', () => {
        cy.request({
            method: "POST",
            url: "https://qauto.forstudy.space/api/cars",
            body: {
                carBrandId: 1,
                carModelId: 2,
                mileage: 140
            },
            headers: {
                Cookie: `sid=${sid}`
            }
        }).then((response) => {
            cy.log(JSON.stringify(response.body));
            carId = response.body?.data?.id; // Extract carId
            expect(response.status).to.eq(201);
        });
    });

    it('Get cars', () => {
        cy.request({
            method: "GET",
            url: "https://qauto.forstudy.space/api/cars",
            headers: {
                Cookie: `sid=${sid}`
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('Delete car', () => {
        cy.request({
            method: "DELETE",
            url: `https://qauto.forstudy.space/api/cars/${carId}`,
            headers: {
                Cookie: `sid=${sid}`
            }
        }).then((response) => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.equal(200);
        });
    });
});

