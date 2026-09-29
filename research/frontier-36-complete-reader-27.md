# Step 5a reader report — batch 27

Run: `frontier-36-complete`  
Batch: `27`  
Role: `reader-27`

## Scope and coverage

I read `research/frontier-36-complete-batch-27.pages.json`, both assigned pages,
all 16 assigned item files, the page prerequisites named by the manifest, and
the proof-relevant dependency items listed below. I reviewed the current disk
carriers independently of their scaffold and author reports.

No separate rendered evidence bundle for batch 27 was located in the task
artifacts. The requested `.autopilot/frontier-36-complete` state directory was
absent; the status command reported an incompatible workflow revision and no
configured run state. Thus the mathematical audit covers the current assigned
carriers, while live-run status could not be independently authenticated.

## Opened inventory

Assigned pages:

- `library/complex-analysis/jensen-theory-and-nevanlinnas-first-main-theorem.md` (A)
- `library/complex-analysis/jensen-theory-and-nevanlinnas-first-main-theorem-examples.md` (B)

Assigned items:

- A: `thm-poisson-jensen-formula-meromorphic-function`,
  `def-nevanlinna-counting-proximity-and-characteristic`,
  `thm-nevanlinna-quantities-well-defined`,
  `lem-meromorphic-jensen-formula-with-centre-divisor`,
  `thm-ahlfors-shimizu-characteristic-identity`,
  `thm-nevanlinna-first-main-theorem`,
  `thm-nevanlinna-characteristic-elementary-laws`,
  `def-order-of-growth-meromorphic-function`,
  `prop-nevanlinna-order-agrees-with-entire-maximum-modulus-order`, and
  `thm-rational-functions-characterized-by-logarithmic-characteristic`.
- B: `ex-poisson-jensen-with-a-repeated-zero`,
  `ex-nevanlinna-regularisation-when-f-zero-equals-a`,
  `ex-nevanlinna-characteristics-of-elementary-functions`,
  `ex-nevanlinna-characteristic-under-target-mobius-map`,
  `ex-nevanlinna-characteristic-of-reciprocal-gamma`, and
  `ex-rational-degree-as-logarithmic-characteristic`.

Manifest prerequisite pages opened:

- `library/complex-analysis/isolated-singularities-and-laurent-series.md`
- `library/complex-analysis/the-argument-principle-and-rouche.md`
- `library/complex-analysis/harmonic-functions-and-the-poisson-integral.md`
- `library/measure-theory/the-lebesgue-integral-and-the-convergence-theorems.md`
- `library/complex-analysis/the-gamma-function.md`

Proof-relevant dependency items opened:

- Complex analysis and integration: `def-meromorphic-function-complex-domain`,
  `thm-isolated-zeros-holomorphic-function`,
  `thm-poles-meromorphic-function-are-discrete-and-countable`,
  `thm-zero-order-factorization-holomorphic-function`,
  `thm-pole-characterizations`,
  `thm-poisson-representation-for-disc-harmonic-functions`,
  `thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann`,
  `cor-holomorphic-functions-are-real-analytic-and-smooth`,
  `def-integrable-real-and-complex-functions-and-their-integrals`,
  `thm-laurent-expansion-annulus`, `thm-identity-theorem-holomorphic-functions`,
  `thm-taylor-expansion-holomorphic-function`,
  `cor-cauchy-estimates-taylor-coefficients`, and
  `thm-well-ordering-principle`.
- Elementary complex and real analysis: `thm-complex-exponential-addition-and-real-extension`,
  `def-complex-trigonometric-and-hyperbolic-functions`,
  `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`,
  `def-complex-exponential`,
  `thm-complex-exponential-is-entire-with-derivative-itself`,
  `thm-complex-polynomials-and-rational-functions-are-holomorphic`,
  `thm-chain-rule-for-holomorphic-maps-in-several-variables`,
  `thm-sine-cosine-signs-monotonicity-and-ranges`,
  `thm-quarter-turn-values-and-shift-formulas`,
  `thm-sine-and-cosine-derivatives`, `thm-ftc-second-part`,
  `cor-differentiable-implies-continuous`,
  `thm-continuous-implies-integrable`, and
  `cor-complex-differentiability-implies-continuity`.
- Gamma-function dependency chain: `thm-gamma-weierstrass-product`,
  `thm-stirling-formula-gamma`, `thm-gamma-meromorphic-continuation`,
  `thm-euler-limit-formula-for-gamma`,
  `thm-euler-mascheroni-constant-and-harmonic-asymptotic`,
  `def-euler-gamma-function`, `thm-gamma-functional-equation`,
  `cor-gamma-factorial-values`, `thm-real-stirling-formula`, and
  `thm-beta-gamma-identity`.

Authoritative source checks for source-sensitive claims:

- Eremenko, *Lectures on Nevanlinna Theory*, §1, equations (1)–(2) and their
  centre-divisor footnotes; §§2–3, equations (7) and (9)–(14). These give the
  Jensen/Poisson–Jensen formulas with central regularisation, the First Main
  Theorem, and the spherical area form. The source uses the classical
  log-plus normalization; the assigned proofs derive the library's normalized
  chordal identities and exact centre constants from their definitions.
  [Source](https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf)
- Goldberg–Ostrovskii, *Value Distribution of Meromorphic Functions*, Ch. 1
  §2, Theorem 2.2 (Poisson–Jensen); §4, Theorem 4.1 (First Fundamental
  Theorem); §6, Theorem 6.1 and Corollary (6.26) (rational composition and
  rational degree). These support the cited classical results; the stronger
  exact-normalization statements in the assigned items are checked from their
  local proofs.
  [Source](https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf)
- Chandrasekharan, *Lectures on the Riemann Zeta-Function*, Lecture 7 §6,
  equations (6.4)–(6.5), printed pp. 60–62. The section derives the Binet
  integral and states
  `log Γ(z) = (z − 1/2)Log z − z + (1/2)log(2π) + O(1/|z|)` uniformly on
  each closed sector `|arg z| ≤ π − ε`. This matches the sector hypotheses
  used for the reciprocal-Gamma lower bound.
  [Source](https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf)

## Audit and edits

The formulas and proofs in the 16 assigned items checked out under their stated
hypotheses, domains, and radius conventions. In particular, I checked the
Green-kernel signs and boundary-radius convention; central divisor corrections
in `N` and Jensen's identity; continuity at divisor radii; the exact First
Main Theorem constant; the pole-corrected Ahlfors–Shimizu identity; the
characteristic algebra and rational-composition laws; the order comparison;
the finite-pole reduction in the rationality characterization; and each
example's computation. The Gamma example's uniform Stirling arc lies inside
`|arg z| ≤ 3π/4`, and the displayed estimates yield its claimed
`Θ(r log r)` characteristic.

One A-page sentence inaccurately said the proof uses “well-ordering of the
integers.” The least-index arguments use the well-ordering principle for
natural numbers. I corrected that page summary to read:

> Every argument on this page is choice-free: divisor lists on bounded discs
> are finite, and the only nontrivial selection principle used is the
> well-ordering principle for the natural numbers.

Evidence: the assigned rationality proof selects the least positive integer
radius at which a pole count reaches a threshold, and the entire-function
argument selects the least nonzero natural Taylor index. The opened
`thm-well-ordering-principle` states that every nonempty subset of `N` has a
least element. The integers with their usual order are not well-ordered.
No item file changed, so no item proof contract or judge record changed.

No other edits were made. The published Gamma dependencies were read as
read-only dependencies; after checking their relevant claims and the cited
sectorial Stirling argument, I found no published defect to route.

## Page verdicts

- A page `jensen-theory-and-nevanlinnas-first-main-theorem`: **pass after the
  wording repair**. Its summaries match the current items and conventions.
- B page `jensen-theory-and-nevanlinnas-first-main-theorem-examples`: **pass**.
  Its six examples and Gamma-page dependency summary match the current files.
  No B-page prose was changed.

## Uneditable defects

None found. No in-flight item repair or withdrawal is proposed.

## Blocker

No mathematical blocker remains. The live-run state could not be authenticated
because `.autopilot/frontier-36-complete` was absent and the status command
reported a workflow-revision mismatch. This limits workflow-status coverage,
not the content review of the assigned current disk files.
