import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Testing all utils functions', () => {
    it('getFullYear should return the current year', () => {
        expect(getFullYear()).toBe(new Date().getFullYear());
    });

    it('getFooterCopy returns the correct string when the argument is true or false', () => {
        expect(getFooterCopy(true)).toBe('ALX');
        expect(getFooterCopy(false)).toBe('ALX main dashboard');
    });

    it('getLatestNotification returns the correct string', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });
});
