# Step 3a reader report — batch 91

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Batch: `91`

## Opened inventory

Assigned pages:

- `library/machine-learning/anytime-valid-scalar-confidence-sequences.md`
- `library/machine-learning/anytime-valid-scalar-confidence-sequences-examples.md`

Assigned items, read in dependency order:

- `def-subexponential-uniform-boundary`
- `def-time-varying-target-confidence-sequence`
- `alg-empirical-bernstein-confidence-sequence`
- `thm-empirical-bernstein-confidence-sequence`
- `ex-repeated-fixed-level-tests-not-anytime-valid`
- `ex-predictable-linear-forecast-empirical-bernstein`
- `ex-diagonal-scalar-bounds-miss-offdiagonal-matrix`

Published direct suppliers opened to check definitions, hypotheses, proofs,
calculations, and citation use:

- `def-filtration-and-filtered-probability-space`
- `def-adapted-and-integrable-stochastic-process`
- `def-predictable-discrete-time-process`
- `def-nonnegative-test-supermartingale`
- `def-axiom-of-choice`
- `def-conditional-expectation-given-a-sigma-algebra`
- `def-conditional-expectation-as-an-ae-class`
- `def-martingale-submartingale-and-supermartingale`
- `lem-conditional-expectation-is-unique-almost-surely`
- `thm-basic-algebra-and-order-properties-of-conditional-expectation`
- `thm-taking-out-what-is-known`
- `thm-tower-property-of-conditional-expectation`
- `thm-mixture-of-null-supermartingales`
- `thm-villes-inequality`
- `thm-exponential-is-strictly-increasing`
- `thm-exponential-limits-and-range`
- `cor-exponential-reciprocal-and-positivity`
- `thm-intermediate-value`
- `lem-rat-embeds-dense`
- `thm-logarithm-derivative-and-integral`
- `lem-derivative-algebra-and-chain-rules`
- `cor-mean-value-theorem`
- `thm-algebra-of-continuous-functions`
- `thm-composition-of-continuous-functions`
- `thm-seven-generators-of-the-borel-sigma-algebra-on-r`
- `thm-continuity-from-above-for-measures` (added as a supplier for the repair)

## Review and source evidence

The two pages are frontmatter-only, retain `page_layout: compact-v1`, and have
inventories matching the batch manifest. The definitions and interval-update
algorithm specify the time-zero convention, bounded observation and forecast
conditions, the degenerate range branch, and the observed squared forecast
error process. The theorem's one-sided exponential inequality, predictable
conditional-expectation calculation, test-supermartingale argument, two-tail
union bound, conditional-version invariance, and finite-mixture boundary
construction check out under the stated hypotheses. I found no other defect in
the assigned items.

I independently checked Howard et al., *Time-uniform, nonparametric,
nonasymptotic confidence sequences*, arXiv v9: §2 Definitions 1–2 and the
`psi_{E,c}` definition; §4.1 Theorem 4 (PDF p. 14); and Appendix A.8 (PDF
p. 35). The theorem states coverage for the running average conditional mean
with arbitrary bounded predictable forecasts. Appendix A.8 proves the
forecast-residual supermartingale inequality used here. The item supplies its
own finite-mixture root and measurability argument.

I also opened Tropp, *Probability Theory & Stochastic Processes*, Lecture 26
§26.4.4, Theorem 26.21 and Exercises 26.22–26.23 (PDF pp. 397–399; printed
lecture pp. 382–385). This is a different empirical martingale bound with
different assumptions and constants, and some intermediate claims are left
as exercises; none of those claims is needed for the local proof.

## Repair

In `ex-diagonal-scalar-bounds-miss-offdiagonal-matrix`, I made the scalar
theorem application admissible by stating the zero predictable forecasts for
the degenerate coordinate streams. I made the matrix impossibility claim
explicitly cover randomized procedures whose auxiliary randomness has a law
independent of `r`, and required finite nonnegative radii. The proof now uses
the common time-one output law and continuity from above to show that the
time-one coverage probability tends to zero along integer `r`; all-times
coverage is bounded by time-one coverage. I added the algorithm and measure
continuity suppliers and updated the assigned proof contract. The item had no
`verification.judge` record to remove.

Validation after the repair:

- `node tools/tsx-run.mjs tools/reflow.mts items/ex-diagonal-scalar-bounds-miss-offdiagonal-matrix.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-diagonal-scalar-bounds-miss-offdiagonal-matrix.md` — pass (`1 checked, 0 failing`). Precheck first requested canonical blank-line separation and step numbering; I adopted that form before the passing run.
- `node tools/proof-layout.mjs items/ex-diagonal-scalar-bounds-miss-offdiagonal-matrix.md` — `1 items, 3 steps, 0 defects`.

No other files in the assigned batch were edited. I identified no uneditable
mathematical finding in the assigned items or directly reviewed suppliers.

## Page verdicts

- `anytime-valid-scalar-confidence-sequences`: pass. Draft A-page metadata and item inventory match the manifest; body is empty and compact layout is set.
- `anytime-valid-scalar-confidence-sequences-examples`: pass. Draft B-page metadata and example inventory match the manifest; body is empty and compact layout is set.

## Blocker and coverage limit

There is no batch 91 blocker. The live run status reports an unrelated
`3a-collect` blocker: unit 57 (`collect-57`) failed three times, and an
unrelated `3a-split` blocker: unit 89 (`split-89`) failed three times. At
handoff, no dispatch was in flight.

The batch's dependency-input record lists a transitive supplier closure of 607
items across 56 published pages. I reviewed the direct suppliers listed above,
not that entire transitive closure. During supplier inspection,
`def-nonnegative-test-supermartingale` was opened before its own published
suppliers `def-martingale-submartingale-and-supermartingale` and
`def-axiom-of-choice`; both were read before the assigned consumers were
reviewed. I make no claim about unreviewed transitive suppliers; the full
closure was not independently audited.
