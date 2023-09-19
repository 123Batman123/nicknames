import checkName from '../hw1';

test('test checkName', () => {
  const name = 'name';
  expect(checkName(name)).toBe('name');
});

test('test checkName if russians sumbols', () => {
  const name = 'имя';
  expect(() => { checkName(name); }).toThrowError();
});

test('test checkName if _ sumbols at the end', () => {
  const name = 'name_';
  expect(() => { checkName(name); }).toThrowError();
});

test('test checkName if 3 digits', () => {
  const name = 'name123name';
  expect(() => { checkName(name); }).toThrowError();
});
