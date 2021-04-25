import { rest } from 'msw';

export const handlers = [
    rest.post('/login', (req, res, ctx) => {
        if (req.body.username === 'admin' && req.body.password === 'password') {
            return res(
                ctx.status(204)
            );
        } else {
            return res(
                ctx.status(403),
                ctx.json({
                    message: 'Invalid credentials!'
                })
            );
        }
    }),
    rest.post('/register', (req, res, ctx) => {
        if (req.body.username !== 'admin') {
            return res(
                ctx.status(204)
            );
        } else {
            return res(
                ctx.status(406),
                ctx.json({
                    message: 'User already exists!'
                })
            );
        }
    }),
    rest.post('/reset-password', (req, res, ctx) => {
        return res(
            ctx.status(204)
        );
    })
]
