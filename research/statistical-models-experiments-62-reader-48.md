# Step 3a reader report — batch 48

Run: `statistical-models-experiments-62`  
Role: independent reader  
Batch status checked at start: run active in `3a-read`; nothing running.

## Opened inventory

### Pages

- `library/statistical-models-and-experiments/poisson-and-cox-point-process-models.md` (A)
- `library/statistical-models-and-experiments/poisson-and-cox-point-process-models-examples.md` (B)

### Assigned items, read in dependency order

- Level 0: `def-random-measure-and-locally-finite-point-process`; `lem-locally-compact-second-countable-spaces-have-compact-exhaustions`; `def-scalar-poisson-count-law`.
- Level 1: `lem-mean-measure-and-integrals-of-a-random-point-process`; `lem-point-process-law-is-determined-by-count-fidi`; `lem-poisson-count-law-normalization-and-moments`; `lem-deletion-of-one-point-is-measurable`.
- Level 2: `def-poisson-and-cox-point-process`.
- Level 3: `thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law`; `lem-poisson-integral-moment-identities`.
- Level 4: `lem-finite-intensity-mecke-identity`; `thm-poisson-point-process-existence`; `ex-poisson-and-cox-count-laws-on-a-finite-window`.
- Level 5: `thm-campbell-laplace-mecke-and-cox-moments`.

### Direct dependency context

Opened the relevant definition or statement sections for the 42 published
direct dependencies in the assigned carriers: `def-borel-sigma-algebra`,
`def-compact-space`, `def-conditional-law-given-a-random-element`,
`def-countable`, `def-countable-choice`, `def-dependent-choice`,
`def-dirac-measure`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`,
`def-factorial-and-falling-factorial`,
`def-finite-sigma-finite-and-semifinite-measures`, `def-hausdorff-space`,
`def-independent-random-elements`, `def-law-or-distribution-of-a-random-element`,
`def-locally-compact-space`, `def-measurable-function-between-measurable-spaces`,
`def-measurable-space`, `def-measure`,
`def-measure-kernel-and-probability-kernel`, `def-measure-space`,
`def-moments-variance-and-covariance`, `def-natural-numbers`,
`def-nonnegative-lebesgue-integral`, `def-probability-measure`,
`def-product-sigma-algebra-and-finite-product-sigma-algebras`,
`def-real-exponential-function-and-e`, `def-second-countable-space`,
`def-topological-space`, `lem-law-of-a-random-element-is-a-probability-measure`,
`prop-dirac-measure-is-a-probability-measure`,
`thm-closed-subspace-of-a-compact-space-is-compact`,
`thm-compact-subset-of-a-hausdorff-space-is-closed`,
`thm-countable-product-of-probability-spaces`, `thm-dynkin-pi-lambda`,
`thm-exponential-addition-formula`,
`thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`,
`thm-locally-compact-hausdorff-basics`,
`thm-measurability-of-integration-against-a-kernel`,
`thm-monotone-convergence-for-the-integral`,
`thm-nonnegative-weighted-sums-of-measures`,
`thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable`,
`thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, and
`thm-tonelli-theorem-for-sigma-finite-product-spaces`. Also opened
`def-random-element-and-real-random-variable` and `def-integer-power` for the
push-forward-law and zero-exponent conventions used through the dependency
chain. This was relevant supplier context, not a whole-library audit.

### Proof contracts

Inspected all 11 batch proof-contract records. Their derivation step IDs and
claims match the numbered proof steps; each contract citation quote is present
in its named current supplier section after whitespace normalization. Boundary,
routine-step, and risk-review entries were reviewed against the item forms.
One risk-review locator mismatch remains in the contract for
`thm-poisson-point-process-existence`; it is recorded under uneditable findings.

## Review verdicts

### A page: `poisson-and-cox-point-process-models`

**Pass; no page-prose defect found.** The summary matches the definitions and
proved claims on the page, including the local choice assumptions for
sigma-finite existence and the supplied-kernel qualification for Cox models.
The finite and infinite intensity cases, Laplace/Campbell formulas, both Mecke
forms and converse, and Cox moment identities are supported by the assigned
items.

### B page: `poisson-and-cox-point-process-models-examples`

**Pass; no page-prose defect found.** The summary accurately reports equal mean
measures and expected window counts, with count variances 1 and 2 in the
worked Poisson/Cox example.

### Assigned mathematics

No false claims, missing hypotheses, unsupported proof steps, defective
constructions, witnesses, computations, titles, or remarks were found in the
14 assigned items. The countable-product construction uses the stated
countable-choice and dependent-choice assumptions; the compact exhaustion
argument supplies the cofinal containment property needed later; and the
extended-value Poisson and Cox formulas preserve their stated domains and
conventions.

## Edit and evidence

Four bibliography-only corrections were made in assigned draft items. No
statement, definition, proof, dependency, or page prose changed.

- `lem-locally-compact-second-countable-spaces-have-compact-exhaustions`: replaced
  the Stacks Project Tag 08ZQ citation. The opened section 5.13 states local
  quasi-compactness and its Hausdorff neighborhood characterization, but does
  not state the countable compact-exhaustion result. Added John M. Lee,
  *Introduction to Topological Manifolds*, 2nd ed., Proposition 4.76 (PDF
  p. 129), which states that every second-countable locally compact Hausdorff
  space admits a compact exhaustion. The stronger compact-containment clause
  follows from the nested interiors by a finite-subcover argument, also proved
  locally in steps 1.1–4.1.
- `lem-point-process-law-is-determined-by-count-fidi`: corrected the Last–Penrose
  locator for the proof of Proposition 2.10(ii)⇒(i) from PDF pp. 27–28 to
  printed p. 16 / PDF p. 27, where the count-cylinder pi-system argument occurs.
- `lem-finite-intensity-mecke-identity`: narrowed the Last–Penrose Theorem 4.1
  locator to printed pp. 27–28 / PDF pp. 39–40, covering its statement and
  proof.
- `thm-campbell-laplace-mecke-and-cox-moments`: corrected the Last–Penrose
  Chapter 3 Theorem 3.9 locator from PDF p. 37 to PDF pp. 35–36. The theorem
  and its proof appear on those pages.

The checked external sources were Last and Penrose, *Lectures on the Poisson
Process* ([PDF](https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf));
Baddeley, *Spatial Point Processes and their Applications* ([PDF](https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf));
the Stacks Project [Tag 08ZQ](https://stacks.math.columbia.edu/tag/08ZQ); and
Lee, *Introduction to Topological Manifolds*, 2nd ed. ([PDF](https://horatiomarm.com/utilidades/TopLee.pdf)).
Relevant statements and arguments reviewed include Last–Penrose equations
(1.4), (1.7)–(1.11), Proposition 2.7, Proposition 2.10, Propositions 3.5 and
3.8, Theorem 3.6, Theorem 3.9, Theorem 4.1, and Proposition 13.6.

No proof-contract change or judge-record removal was needed: the edits changed
only bibliography locators, and the affected items had no `verification.judge`
record. Reflow and precheck were not run because no proof body or mathematical
metadata changed. The required final formatting check passed:

```text
node tools/proof-layout.mjs items/lem-locally-compact-second-countable-spaces-have-compact-exhaustions.md items/lem-point-process-law-is-determined-by-count-fidi.md items/lem-finite-intensity-mecke-identity.md items/thm-campbell-laplace-mecke-and-cox-moments.md
proof-layout: 4 items, 24 steps, 0 defects
exit_code=0
```

## Uneditable findings

- The risk-review evidence in
  `research/statistical-models-experiments-62-batch-48.proof-contracts.json`
  under `contracts["thm-poisson-point-process-existence"].risk_review.evidence`
  says the finite Poisson convolution identity is displayed in proof step 3.1.
  In the current item, step 3.1 constructs the superposition and proves local
  finiteness; the convolution calculation is in step 3.2. The theorem proof is
  mathematically sound. I left this contract-only locator unchanged under the
  assigned item/A-page repair scope; the owner can change the reference to 3.2.

## Blocker

None.
