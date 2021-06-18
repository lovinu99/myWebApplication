const hbs = require("hbs");

const registerHelper = () => {
    hbs.registerHelper("titleHelper", function (title) {
        return typeof (title) === "undefined" ? "Web app" : title.toString() + " - Web app";
    });
    hbs.registerHelper('breaklines', function(descriptionFunction) {
        text = descriptionFunction();
        text = Handlebars.Utils.escapeExpression(text);
        text = text.toString();
        text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
        return new Handlebars.SafeString(text);
    });
}
module.exports = registerHelper