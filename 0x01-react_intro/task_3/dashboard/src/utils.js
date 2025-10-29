const getFullYear = () => new Date().getFullYear();

const getFooterCopy = (isIndex) => isIndex ? 'ALX' : 'ALX main dashboard';

const getLatestNotification = () => '<strong>Urgent requirement</strong> - complete by EOD';


export {
    getFooterCopy,
    getFullYear,
    getLatestNotification
};
