(function ($) {

    const users = Array(5).fill().map(function (c) {
        const avatar = faker.internet.avatar();
        const name = faker.name.findName();
        const email = faker.internet.email(name);
        const address = faker.address.streetAddress("###");
        return {
            avatar,
            name,
            email,
            address,
        }
    });


    $.forData('users', users);

})(jQuery);