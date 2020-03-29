const getHoleDegree = require('./getHoleDegree');

test('Degree at 1blow is 1 when root is at 1blow', () => {
  const BLOW_1 = 0;
  const ROOT_AT_BLOW_1 = 0;
  const MAJOR_1ST_DEGREE = 1;

  const degree = getHoleDegree(BLOW_1, ROOT_AT_BLOW_1);

  expect(degree).toBe(MAJOR_1ST_DEGREE);
});

test('Degree at 1draw is 2 when root is at 1blow', () => {
  const DRAW_1 = 2;
  const ROOT_AT_BLOW_1 = 0;
  const MAJOR_2ND_DEGREE = 3;

  const degree = getHoleDegree(DRAW_1, ROOT_AT_BLOW_1);

  expect(degree).toBe(MAJOR_2ND_DEGREE);
});
