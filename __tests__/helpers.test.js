test('format_date() returns a date string', () => {
    const date = new Date('2020-08-29 10:54:20');
  
    expect(format_date(date)).toBe('8/29/2020');
});

test('format_url() to short string', () => {
    const one = format_url('http://techstuff.com/user/2');
    const two = format_url('https://www.techstuff.com/posts/');
    const three = format_url('https://www.techstuff.com?q=id');

    expect(one).toBe('techstuff.com');
    expect(two).toBe('techstuff.com');
    expect(three).toBe('techstuff.com');
});

const {format_date, format_url} = require('../utils/helpers');