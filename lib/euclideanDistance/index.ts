type eucDistance = (a: number[], b: number[]) => number;

// https://en.wikipedia.org/wiki/Euclidean_distance
// the furmula is the same as the pythagorean theorem but for n dimensions instead of 2 dimensions (x,y) => (x1,y1) (x2,y2) (x3,y3) etc

const eucDistance: eucDistance = (a, b) => {
  return (
    a
      .map((x, i) => Math.abs(x - b[i]) ** 2) // square the difference
      .reduce((sum, now) => sum + now) ** // sum
    (1 / 2)
  );
};

export default eucDistance;
