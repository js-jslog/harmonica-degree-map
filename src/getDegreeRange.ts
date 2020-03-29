const THREE_OCTAVE_DEGREE_MAP: [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
];

module.exports = (degree_offset: number) => {
  const degree_range = [...THREE_OCTAVE_DEGREE_MAP];

  for (let index = 1; index < degree_offset; index++) {
    degree_range.unshift(degree_range.pop());
  };

  return degree_range;
};

