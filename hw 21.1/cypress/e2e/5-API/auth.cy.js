describe('AUTH', () => {

    beforeEach(() => {

    })

    it('GET cookies', ()=> {

        const userCreds = {
            email: 'galina170660@gmail.com',
            password:'Rtyuehe17!',
            remember:  true
        }

        cy.request('POST', 'https://qauto.forstudy.space/api/auth/signin', userCreds).then((Response)=>{

            const headers = Response.headers;
            const cookie = headers['set-cookie'][1];
            const cookieArray = cookie.split('\n]');
            let sid = ''
            for ( const cookie of cookieArray )
                if( cookie.trim().startsWith('sid=')) {
                    sid = (cookie.trim().split('=')[1]).split(';')[0];
                    break;
                }
            cy.log(sid)
        })
    })
})