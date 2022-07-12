const {
  MIN_FONT_SIZE,
  MAX_FONT_SIZE,
  MAX_KERNING,
  MIN_KERNING,
} = require("../constants");
const calculateKerning = (kerning, interval, averageInterval) => {
  const ratio = interval / averageInterval;

  if (kerning === 0) {
    return 0.1;
  }

  const newKerning = kerning / ratio;
  return Math.min(Math.max(newKerning, MIN_KERNING), MAX_KERNING);
};

const calculateFontSize = (fontSize, interval, averageInterval) => {
  const ratio = interval / averageInterval;
  const newFontSize = fontSize / ratio;
  return Math.min(Math.max(newFontSize, MIN_FONT_SIZE), MAX_FONT_SIZE);
};

module.exports = {
  calculateKerning,
  calculateFontSize,
};
