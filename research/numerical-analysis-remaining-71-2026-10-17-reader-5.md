# Step 3a reader report — batch 5

Run: numerical-analysis-remaining-71-2026-10-17

Role: independent reader; batch 5

## Inventory opened

Assigned pages:

- library/numerical-linear-algebra-and-approximation/shape-preserving-piecewise-polynomial-interpolation.md
- library/numerical-linear-algebra-and-approximation/shape-preserving-piecewise-polynomial-interpolation-examples.md

The A-page's required page-level prerequisite was also opened:

- library/numerical-linear-algebra-and-approximation/spline-evaluation-and-interpolation-algorithms.md

All 15 assigned item files were opened in dependency order.

- A-page: def-piecewise-cubic-hermite-interpolant, def-piecewise-bernstein-representation, thm-piecewise-cubic-hermite-interpolant-properties, thm-hermite-monotonicity-for-normalized-slopes-in-square, alg-pchip-slope-selection, thm-bernstein-convex-hull-and-positivity, lem-pchip-slope-selection-well-defined, thm-pchip-normalized-slopes-in-square, lem-pchip-slopes-second-order-uniform-grid, thm-pchip-shape-preserving-no-overshoot, thm-pchip-third-order-away-from-extrema.
- Examples page: ex-positive-endpoint-samples-negative-between, ex-natural-cubic-spline-undershoots-nonnegative-table, ex-pchip-flat-monotone-data, ex-pchip-limiter-second-order-at-smooth-extremum.

Direct dependency items opened: cor-boundedness-theorem-r, cor-mean-value-theorem, def-binomial-coefficient, def-canonical-natural, def-continuity-and-derivative-on-real-interval, def-continuity-real, def-derivative, def-finite-sum, def-function-limit, def-integer-power, def-interval, def-max-min, def-natural-cubic-spline, lem-derivative-algebra-and-chain-rules, lem-finite-set-has-max, lem-finite-sum-laws, lem-nat-trichotomy, lem-of-naturals-positive, lem-of-zero-mult, lem-real-and-complex-modulus-rules, lem-taylor-integral-remainder, thm-algebra-of-continuous-functions, thm-binomial-theorem, thm-cauchy-mean-value, thm-extreme-value-r, thm-heine-borel-r, and thm-intermediate-value.

## Source checks

- Carl de Boor, A Practical Guide to Splines, Chapter IV, pp. 39–40: the piecewise cubic Hermite construction from endpoint values/slopes and its exact-derivative interpolation formula. [Full text](https://djvu.online/file/W5YE3VGOgt1Ml)
- Fritsch and Butland, “A Method for Constructing Local Monotone Piecewise Cubic Interpolants,” pp. 300–301: the same-sign/zero-slope branches and sufficient normalized-slope square; p. 302 states the uniform-spacing O(h²) derivative approximation. [Paper PDF](https://anthonylloyd.github.io/public/interp/pchip/A_method_for_constructing_local_monotone_picewise_cubic_interpolants_fritsch1984.pdf)
- SciPy v1.18.0 PchipInterpolator Notes: monotonicity/no-overshoot behavior, C¹ matching, and the interior weighted-harmonic and zero-slope rules. The versioned _cubic.py implementation, lines 2619–2636, gives the one-sided endpoint formula and clip/cap branches; lines 2672–2710 give the two-node, interior, and endpoint calls. [Documentation](https://docs.scipy.org/doc/scipy/reference/generated/scipy.interpolate.PchipInterpolator.html) · [Source](https://github.com/scipy/scipy/blob/v1.18.0/scipy/interpolate/_cubic.py)
- Rida Farouki, “The Bernstein Polynomial Basis: A Centennial Retrospective,” PDF pp. 23–25: nonnegative basis functions, partition of unity, and the lower/upper bounds by the minimum and maximum control values. [Paper PDF](https://faculty.engineering.ucdavis.edu/farouki/wp-content/uploads/sites/51/2021/07/Bernstein-polynomial-basis.pdf)

These sources were checked for the cited constructions and context. The assigned theorem proofs were checked locally; citations do not substitute for those proofs.

## Edits and evidence

1. items/def-piecewise-bernstein-representation.md: moved the degree-two specialization after the general Bernstein notation. Before the repair, it introduced i, the controls, and t before they had been declared and called the later formula “displayed.” The specialization now follows the general definition, where all symbols are bound. The generic basis and endpoint-control condition are unchanged.

2. items/thm-bernstein-convex-hull-and-positivity.md: added thm-algebra-of-continuous-functions and lem-of-zero-mult as dependencies. The proof now establishes continuity of each cell polynomial, derives the Bernstein endpoint basis values (including the degree-zero case), and uses matching controls to prove continuity at shared nodes. This closes the prior gap: matching endpoint controls alone did not establish cellwise continuity or show the endpoint basis computations. Nonnegativity and the control-value bound remain as stated.

3. items/lem-pchip-slopes-second-order-uniform-grid.md: stated a<b, integer N≥2, and h=(b-a)/N>0 explicitly. These are the increasing-grid conditions required by the slope-selection algorithm and used by the proof.

4. items/thm-pchip-third-order-away-from-extrema.md: stated the same fixed-interval grid conditions explicitly. Step 1.1 now bounds the Taylor residual at every point of a cell; previously step 2.1 used a bound on arbitrary x that step 1.1 had recorded only at the right endpoint. The estimate and its hypotheses are otherwise unchanged.

5. items/ex-pchip-limiter-second-order-at-smooth-extremum.md: changed the witness to the fixed interval [-1,1] with grids x_j=-1+j/n. The local secants and Hermite error formula are the same, and the resulting 2h²/27 lower bound now rules out a uniform Ch³ estimate on one fixed domain as n tends to infinity.

6. Updated research/numerical-analysis-remaining-71-2026-10-17-batch-5.proof-contracts.json to match the repaired Bernstein definition quotation, add the continuity and zero-product facts and derivation, and synchronize the edited grid and example derivations. Existing owner boundary-review hash records were preserved as historical evidence and were not rebound to the repaired definition.

No stale verification.judge records were present on the changed items. Reflow reported all five files unchanged. Precheck passed for all five changed items; the definition returned 0 checked, 0 failing. The final proof-layout run covered all five paths: 15 numbered steps, 0 defects.

## Uneditable defects

None found in the assigned items or pages. No finding remains for the JSON findings file.

## Page verdicts

- shape-preserving-piecewise-polynomial-interpolation (A-page): **pass after repair**. The overview matches the Hermite, PCHIP, monotonicity, accuracy, and Bernstein results and retains the stated restrictions on the third-order estimate.
- shape-preserving-piecewise-polynomial-interpolation-examples (B-page): **pass after repair**. The exact Bernstein, natural-spline, flat-data, and smooth-extremum computations are consistent with their local hypotheses and dependencies.

## Blocker and coverage note

No blocker remains for the assigned batch. The required spline-evaluation prerequisite page was opened and its current summary reviewed; its separate item proof closure and page prerequisites were not re-audited because no batch-5 proof uses those results. More generally, this review checked the direct item dependencies needed by the assigned proofs but did not independently audit every base-level transitive dependency inside already established published suppliers.
