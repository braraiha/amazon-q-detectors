// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

// {fact rule=javascript-express-jwt-not-revoked@v1.0 defects=0}

const express = require('express');
const isRevoked = require('./isRevoked');
const jwt = require('express-jwt');

app2.route('/someURL/:id').get((req, res) => {
    // Compliant: JWT token is not revoked.
    let id_ = escape(req.params.id);
    let str1 = `
        <p>${id_}</p>
        <form method="POST" style="margin: 60px auto; width: 140px;">
            <p><input name="username" type="text" /></p>
            <p><input name="password" type="password" /></p>
            <p><input value="Login" type="submit" /></p>
        </form>
    `
    res.send(str1);
})


// Compliant: `isRevoked` attribute is present to check if the token has been revoked.
app.get(
    '/some_url',
    jwt({
        secret: process.env.SECRET,
        algorithms: ['HS256'],
        isRevoked: async function (req, payload, done) {
            try {
                const isTokenRevoked = await isRevoked.checkIfRevoked(payload);
                done(null, isTokenRevoked);
            } catch (err) {
                done(err, true); // On error, treat the token as revoked
            }
        },
    }),
    function (req, res) {
        if (!req.user || !req.user.admin) {
            return res.sendStatus(401);
        }
        res.sendStatus(200);
    }
);
// {/fact}
