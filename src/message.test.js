const message = require('./message');

test('message contains a string with expected message', () => {
  expect(message).toBe('Hello typescript & jest');
});

