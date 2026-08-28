# frontier-22 reader-7 report

Date: Friday, August 28, 2026.
Batch: `research/frontier-22-batch-7.pages.json`

## Opened scope

- Control and dispatch artifacts opened: `AGENTS.md`, `CLAUDE.md`, `README.md`, `briefs/reader.md`, `research/frontier-22-reader.task.md`, `research/frontier-22-dispatch/reader-reader-7.prompt.md`, and live run state via `(cd tools/autopilot && node --import tsx bin/autopilot.mts status --repo ../..)`.
- Batch artifacts opened: `research/frontier-22-batch-7.pages.json`, `research/frontier-22-batch-7.coverage.json`, `research/frontier-22-batch-7.proof-contracts.json`, and `research/frontier-22-batch-7.notes.md`.
- Assigned pages opened: `library/complex-analysis/holomorphic-inverse-and-weierstrass-preparation.md` and `library/complex-analysis/holomorphic-inverse-and-weierstrass-preparation-examples.md`.
- Prerequisite page context opened: `library/complex-analysis/holomorphic-functions-of-several-variables.md`, `library/real-analysis/inverse-and-implicit-function-theorems.md`, `library/complex-analysis/the-argument-principle-and-rouche.md`, `library/abstract-algebra/euclidean-domains-pids-and-unique-factorisation.md`, `library/abstract-algebra/the-field-of-fractions-and-localisation.md`, and `library/real-analysis/constant-rank-submersions-and-regular-level-sets.md`.
- Assigned item scope: opened all `38` batch-owned item files named in `research/frontier-22-batch-7.pages.json`.
- Direct published dependency items opened for verification: `42`.

```text
cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
cor-holomorphic-functions-in-several-variables-are-smooth
cor-uniqueness-of-multivariable-power-series-coefficients
def-commutative-ring
def-coordinate-column-and-matrix-of-a-linear-map
def-divisibility-and-associates-in-a-domain
def-field-of-fractions
def-generated-cyclic-finitely-generated-and-free-modules
def-holomorphic-function-in-several-complex-variables
def-holomorphic-map-and-complex-jacobian
def-injection-surjection-bijection
def-irreducible-and-prime-elements-in-a-domain
def-left-and-right-modules
def-local-ring
def-logarithmic-derivative-meromorphic-function
def-pi-via-first-positive-cosine-zero
def-polynomial-ring-over-a-commutative-ring
def-quotient-module
def-ring-matrix-product-identity-and-transpose
def-submodule
def-unique-factorisation-domain
prop-algebra-of-holomorphic-functions-in-several-variables
prop-holomorphic-functions-are-continuous-and-separately-holomorphic
thm-cauchy-integral-formula-on-a-polydisc
thm-complex-exponential-addition-and-real-extension
thm-complex-numbers-form-a-field
thm-componentwise-holomorphy-in-several-complex-variables
thm-contour-parameter-integrals-are-holomorphic
thm-determinant-multiplicative
thm-determinant-of-a-triangular-matrix
thm-euclidean-constant-rank-normal-form
thm-euclidean-inverse-function-theorem
thm-eulers-formula
thm-identity-theorem-in-several-complex-variables
thm-locally-bounded-separate-holomorphy
thm-polynomial-ring-over-a-field-is-a-ufd
thm-power-series-expansion-in-several-complex-variables
thm-removable-singularity-characterizations
thm-rouche-theorem
thm-weighted-argument-principle
thm-zero-complex-derivative-on-a-domain-implies-constant
thm-zero-order-factorization-holomorphic-function
```

## Edits kept

- `items/thm-zero-set-has-no-isolated-points-in-several-complex-variables.md`
  Repaired the Statement by quantifying the zero `a`, and made the proof's coordinate-change reduction explicit so the local isolated-zero claim is stated and proved on the same variables.
- `items/thm-riemann-extension-across-hypersurface-zero-sets.md`
  Repaired the local extension proof: it now first uses the generic linear coordinate-change lemma to make the germ regular before invoking Weierstrass preparation, and it now explicitly transports the resulting local extension back to the original coordinates.
- `research/frontier-22-batch-7.proof-contracts.json`
  Regenerated the affected proof-contract entries for `thm-zero-set-has-no-isolated-points-in-several-complex-variables`, `thm-riemann-extension-across-hypersurface-zero-sets`, `cor-locally-bounded-meromorphic-poles-are-removable`, and `fs-a-nonconstant-scalar-holomorphic-function-in-dimension-at-least-two-can-have-an-isolated-zero`.

## Confirmed defects

1. `items/thm-zero-set-has-no-isolated-points-in-several-complex-variables.md`
   Disposition: repaired in the owned A-page item.
   Severity: fatal.
   Evidence: the Statement concluded with `Z(f)\setminus\{a\}` but never quantified `a`, so the claim as written was ill formed.
   Repair: quantified `a` in the Statement and aligned the proof text with the coordinate-change reduction actually used.

2. `items/thm-riemann-extension-across-hypersurface-zero-sets.md`
   Disposition: repaired in the owned A-page item.
   Severity: fatal.
   Evidence: step `1.2` applied Weierstrass preparation directly to an arbitrary nonzero germ of `g` at `a`, but preparation needs regularity in the last variable first; the current draft omitted the load-bearing coordinate-change lemma.
   Repair: added `lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular` to `deps`, strengthened fact `[L2]`, and rewrote steps `1.2` and `3.1` to make the regularising coordinate change and the pullback/pushforward of the local extension explicit.

- No changed item carried a `verification.judge` block, so no stale judge record needed removal.
- No additional editable or uneditable page/item/published-dependency defect remained after those repairs on the opened mathematical scope.

## Uneditable artifact drift

- `research/frontier-22-batch-7.pages.json` is stale against the current item `deps` frontmatter for these `17` owned ids:

```text
def-noetherian-ring-and-module
fs-weierstrass-preparation-is-unique-without-the-unit-condition
lem-finite-modules-over-noetherian-rings-are-noetherian
lem-holomorphic-power-sums-of-slice-zeros
lem-prepared-factorizations-and-irreducibility
lem-weierstrass-quotient-is-a-finite-module
prop-units-in-the-holomorphic-germ-ring
thm-holomorphic-constant-rank-theorem
thm-holomorphic-germ-ring-is-a-ufd
thm-holomorphic-germ-ring-is-noetherian
thm-holomorphic-implicit-function-theorem
thm-holomorphic-inverse-function-theorem-several-variables
thm-riemann-extension-across-hypersurface-zero-sets
thm-uniqueness-in-weierstrass-preparation
thm-weierstrass-division-theorem
thm-weierstrass-preparation-theorem
thm-zero-set-has-no-isolated-points-in-several-complex-variables
```

- This is real batch-local artifact drift on current bytes, but Step 6a only licenses item repairs and assigned A-page prose repairs. I verified the mathematics against the current item files and left the manifest unchanged. I also left this out of the JSON findings because the schema has no manifest subject type.

## Page verdicts

- `library/complex-analysis/holomorphic-inverse-and-weierstrass-preparation.md`: sufficient on the current bytes after the repaired A-page item defects. I found no additional A-page summary defect requiring an edit.
- `library/complex-analysis/holomorphic-inverse-and-weierstrass-preparation-examples.md`: sufficient on the current bytes. I found no B-page body defect and made no B-page edit.

## Verification

- `node tools/coverage-checklist.mjs research/frontier-22-batch-7.coverage.json --require-destination`
  Result: `coverage-checklist: 1 page(s), 40 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-zero-set-has-no-isolated-points-in-several-complex-variables.md items/thm-riemann-extension-across-hypersurface-zero-sets.md`
  Result: both changed items were already in canonical reflow form after the repairs.

- `node tools/tsx-run.mjs tools/precheck.mts items/thm-zero-set-has-no-isolated-points-in-several-complex-variables.md items/thm-riemann-extension-across-hypersurface-zero-sets.md`
  Result: `2 checked, 0 failing`.

- `node tools/regen-contract-entries.mjs research/frontier-22-batch-7.proof-contracts.json thm-zero-set-has-no-isolated-points-in-several-complex-variables thm-riemann-extension-across-hypersurface-zero-sets cor-locally-bounded-meromorphic-poles-are-removable fs-a-nonconstant-scalar-holomorphic-function-in-dimension-at-least-two-can-have-an-isolated-zero`
  Result: regenerated `4`, skipped `0`.

- `node tools/proof-contract.mjs research/frontier-22-batch-7.proof-contracts.json --strict`
  Result: `proof-contract: 0 error(s), 0 warning(s), 33/33 item(s) checked`.

- `node tools/citation-fidelity.mjs research/frontier-22-batch-7.proof-contracts.json --fail-on-missing-quote`
  Result: `118` citations checked, no quote-not-found rows, and no widening candidates.

- `node tools/boundary-audit.mjs research/frontier-22-batch-7.proof-contracts.json --fail-on-contradicted`
  Result: `264` boundary rows, `226` marked `not_applicable`, no contradicted dispositions. The remaining output is only the existing template-reuse clusters, which I read and did not confirm as additional defects.

- `node tools/rendercheck.mjs items/thm-zero-set-has-no-isolated-points-in-several-complex-variables.md items/thm-riemann-extension-across-hypersurface-zero-sets.md library/complex-analysis/holomorphic-inverse-and-weierstrass-preparation.md library/complex-analysis/holomorphic-inverse-and-weierstrass-preparation-examples.md`
  Result: `OK — 4 file(s)`.

- `node tools/content-policy.mjs research/frontier-22-batch-7.pages.json`
  Result: `content-policy: 38 scoped item(s), 0 error(s), 0 warning(s)`.

## Blockers

- None in the opened batch-7 mathematical scope.
- `node tools/step6-scope.mjs check --run frontier-22 --phase final --batch 7` is not yet applicable at this live run point: it failed only because batch `7` has no scope file and group `d` has no `6b` decisions file yet while the run is still before Step `6b`. I did not treat that pre-stage failure as a batch-local defect.
