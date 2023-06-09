const bcrypt = require('bcrypt');

module.exports = {
    hashPwd: function (password) {
        const saltRounds = 10;
        return bcrypt.hashSync(password, saltRounds);
    },

    compare: function(password, hash) {
        return bcrypt.compareSync(password, hash);
    }
}