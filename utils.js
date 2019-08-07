(function ($) {

    $.forData = function (index, data) {

        var element = $("*").find(`[data-for='${index}']`);
        var parent = element.parent();
        var array = JSON.stringify(data);

        if (!element.length)
            return;

        if (!index)
            throw new Error("Invalid index as parameter");

        if (!array)
            throw new Error("Invalid value in data-for");

        if (array[0] != "[" || array[array.length - 1] != "]")
            throw new Error("ForEach value is not an array");

        array = eval(array);
        const length = array.length;

        for (let idx = 0; idx < length; idx++) {
            const obj = array[idx];
            const clone = element.clone();
            if (Object(obj)) {

                Object.keys(obj).forEach(key => {
                    const childAttr = `[data-each=${key}]`;
                    const child = clone.find(childAttr);
                    if (child) {
                        child.empty();
                        child.append(obj[key]);
                    }

                    if (key == "avatar") {
                        const av = clone.find(`[data-avatar=${key}]`);
                        const url = obj[key];
                        av.css('background-image', `url('${url}')`);
                    }
                })
            }
            clone.appendTo(parent);
        }

        element.remove();

    }


})(jQuery);