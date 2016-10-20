'use strict';

const assert = require('chai').assert;
const DonationService = require('./donation-service');
const fixtures = require('./fixtures.json');
const utils = require('../app/api/utils.js');

suite('Auth API tests', function () {

  let users = fixtures.users;
  let donations = fixtures.donations;

  const donationService = new DonationService(fixtures.donationService);

  test('login-logout', function () {
    var returnedDonations = donationService.getAllDonations();
    assert.isNull(returnedDonations);

    const response = donationService.login(users[0]);
    returnedDonations = donationService.getAllDonations();
    assert.isNotNull(returnedDonations);

    donationService.logout();
    returnedDonations = donationService.getAllDonations();
    assert.isNull(returnedDonations);
  });
});
