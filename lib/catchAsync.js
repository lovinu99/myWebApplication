const catchAsync = fn => (req, res, next) => {
    fn(req, res, next).catch(error => { throw error});
};

module.exports= catchAsync
