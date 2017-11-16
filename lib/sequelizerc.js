'use strict';
const path = require('path');

module.exports = {
  config: path.resolve('./node_modules/egg-sequelize/lib/database.js'),
  'seeders-path': path.resolve('seeders'),
  'migrations-path': path.resolve('migrations'),
};
