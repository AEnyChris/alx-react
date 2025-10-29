const getFullYear = () => new Date().getFullYear();


const getFooterCopy = (isIndex) => isIndex ? 'ALX' : 'ALX main dashboard';

export {getFooterCopy, getFullYear};
