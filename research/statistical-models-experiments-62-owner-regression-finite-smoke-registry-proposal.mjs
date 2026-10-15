// Proposed entries inside makeChecks() in tools/finite-smoke.mjs.
// This artifact is not installed or executed. Keep the existing smokeResult helper.
// Fixed witnesses deliberately reject a different model rather than silently
// claiming that the source's numerical conclusions hold for arbitrary inputs.
export const proposedChecks = {
  'four-outcome-rademacher-pivot': ({ support = [[-1, -1], [-1, 1], [1, -1], [1, 1]] } = {}) => {
    const fail = summary => smokeResult(false, summary);
    if (!Array.isArray(support) || support.length !== 4 || support.some(row =>
      !Array.isArray(row) || row.length !== 2 || row.some(x => x !== -1 && x !== 1)))
      return fail('expected all four distinct pairs of Rademacher errors');
    if (new Set(support.map(row => row.join(','))).size !== 4)
      return fail('support must include every Rademacher pair exactly once');
    const n = 2, p = 1, gram = n, inverse = 1 / gram;
    const means = [0, 1].map(i => support.reduce((s, row) => s + row[i], 0) / 4);
    const variances = [0, 1].map(i => support.reduce((s, row) => s + (row[i] - means[i]) ** 2, 0) / 4);
    if (means.some(x => x !== 0) || variances.some(x => x !== 1))
      return fail('finite marginal means or variances disagree with the model');
    let zeroResidual = 0, positiveResidual = 0;
    for (const errors of support) {
      const beta = errors.reduce((s, x) => s + x, 0) * inverse;
      const residuals = errors.map(x => x - beta);
      const rss = residuals.reduce((s, x) => s + x * x, 0);
      const s2 = rss / (n - p), denominator2 = s2 * inverse;
      const pivot = s2 === 0 ? 0 : beta / Math.sqrt(denominator2);
      if (errors[0] === errors[1]) {
        if (rss !== 0 || Math.abs(beta) !== 1 || denominator2 !== 0 || pivot !== 0)
          return fail('equal-error zero-residual branch disagrees');
        zeroResidual++;
      } else {
        if (rss !== 2 || beta !== 0 || denominator2 !== 1 || pivot !== 0)
          return fail('opposite-error positive-residual branch disagrees');
        positiveResidual++;
      }
    }
    return smokeResult(zeroResidual === 2 && positiveResidual === 2,
      'enumerated four equally weighted independent sign pairs: mean0, variance1, two RSS0 branches and two RSS2 branches; every defined pivot is zero');
  },
  'four-row-regression-arithmetic': ({ design = [[1, 0], [1, 1], [1, 2], [1, 3]], response = [1, 2, 2, 4], x0 = [1, 2] } = {}) => {
    const fail = summary => smokeResult(false, summary);
    if (JSON.stringify(design) !== '[[1,0],[1,1],[1,2],[1,3]]' ||
      JSON.stringify(response) !== '[1,2,2,4]' || JSON.stringify(x0) !== '[1,2]')
      return fail('expected the exact four-row design, response and x0 from the source');
    const n = design.length, p = design[0].length, nu = n - p;
    const gram = [0, 1].map(j => [0, 1].map(k => design.reduce((s, row) => s + row[j] * row[k], 0)));
    const xty = [0, 1].map(j => design.reduce((s, row, i) => s + row[j] * response[i], 0));
    const determinant = gram[0][0] * gram[1][1] - gram[0][1] * gram[1][0];
    const adj = [[gram[1][1], -gram[0][1]], [-gram[1][0], gram[0][0]]];
    if (determinant <= 0) return fail('design Gram matrix is not invertible');
    const inverseIdentity = gram.every((row, i) => [0, 1].every(j =>
      row.reduce((s, x, k) => s + x * adj[k][j], 0) === determinant * Number(i === j)));
    const betaNumerators = adj.map(row => row.reduce((s, x, j) => s + x * xty[j], 0));
    const fittedNumerators = design.map(row => row.reduce((s, x, j) => s + x * betaNumerators[j], 0));
    const residualNumerators = response.map((y, i) => determinant * y - fittedNumerators[i]);
    const rssNumerator = residualNumerators.reduce((s, r) => s + r * r, 0), rssDenominator = determinant ** 2;
    const hNumerator = x0.reduce((s, x, i) => s + x * adj[i].reduce((t, a, j) => t + a * x0[j], 0), 0);
    const fittedMeanNumerator = x0.reduce((s, x, j) => s + x * betaNumerators[j], 0);
    // All equality checks use integer numerators and cross products. The
    // three squared half-widths below are the multipliers before common q^2.
    const widthDenominator = nu * rssDenominator * determinant;
    const slopeWidthNumerator = rssNumerator * adj[1][1];
    const meanWidthNumerator = rssNumerator * hNumerator;
    const predictionWidthNumerator = rssNumerator * (hNumerator + determinant);
    const ok = JSON.stringify(gram) === '[[4,6],[6,14]]' && determinant === 20 &&
      JSON.stringify(adj) === '[[14,-6],[-6,4]]' && inverseIdentity &&
      JSON.stringify(xty) === '[9,18]' && betaNumerators.every(b => 10 * b === 9 * determinant) &&
      JSON.stringify(fittedNumerators) === '[18,36,54,72]' && nu === 2 &&
      10 * rssNumerator === 7 * rssDenominator &&
      20 * rssNumerator === 7 * nu * rssDenominator &&
      40 * rssNumerator === 7 * n * rssDenominator &&
      10 * hNumerator === 3 * determinant && 10 * fittedMeanNumerator === 27 * determinant &&
      100 * slopeWidthNumerator === 7 * widthDenominator &&
      200 * meanWidthNumerator === 21 * widthDenominator &&
      200 * predictionWidthNumerator === 91 * widthDenominator &&
      3 * predictionWidthNumerator === 13 * meanWidthNumerator &&
      predictionWidthNumerator > meanWidthNumerator;
    return smokeResult(ok, ok
      ? 'independent integer Gram/adjugate and residual calculations give beta=(0.9,0.9), RSS0.70, residual variance0.35, ML variance0.175, h0.30, mean2.7; squared q-free widths0.07/0.105/0.455 and prediction/mean squared ratio13/3'
      : 'four-row regression arithmetic differs from at least one exact source value');
  },
};
