module.exports = function check(str, bracketsConfig) {
    let result;

    (() => {
        while(str.length) {
            let notMatchCount = 0;
            bracketsConfig.forEach(condition => {
                let config = String(condition[0])+String(condition[1]);
                if(str.indexOf(config) !== -1) {
                    str = str.replace(config, '');
                } else {
                    notMatchCount++;
                }
            });
            if (bracketsConfig.length === notMatchCount) {
                if(str.length > 0) {
                    result = !str.length;
                }
                break;
            }
        }

        result = !str.length;

    })();

    return result;
};