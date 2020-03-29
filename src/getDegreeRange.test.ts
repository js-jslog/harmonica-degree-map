const getDegreeRange = require('./getDegreeRange');

test('Degree range for first position is correct', () => {
  const EXPECTED_FIRST_POSITION_DEGREE_RANGE: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ];

  const actual_first_position_degree_range = getDegreeRange(1);

  expect(EXPECTED_FIRST_POSITION_DEGREE_RANGE).toMatchObject(actual_first_position_degree_range);
});

test('Degree range for second position is correct', () => {
  const EXPECTED_SECOND_POSITION_DEGREE_RANGE: [
    6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5,
  ] = [
    6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5,
  ];

  const actual_first_position_degree_range = getDegreeRange(8);

  expect(EXPECTED_SECOND_POSITION_DEGREE_RANGE).toMatchObject(actual_first_position_degree_range);
});
