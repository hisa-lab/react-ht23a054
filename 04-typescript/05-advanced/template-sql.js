var tables = ['users', 'posts', 'comments'];
var createQuery = function (table, limit) {
    return limit ? "SELECT * FROM ".concat(table, " LIMIT ").concat(limit)
        : "SELECT * FROM ".concat(table);
};
var query = createQuery('users', 20);
console.log(query);
