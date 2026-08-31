# Frontier 26 — independent reader 3 report

Date: Sunday, August 30, 2026  
Run: `frontier-26`  
Batch: `3`  
Role: `reader`

## Scope opened

- Control and dispatch artifacts: `AGENTS.md`, `CLAUDE.md`, `README.md`, `research/frontier-26-reader.task.md`, `research/frontier-26-batch-3.pages.json`, `research/frontier-26-batch-3.coverage.json`, `research/frontier-26-batch-3.notes.md`, `research/frontier-26-batch-3.proof-contracts.json`, and `.autopilot` status via `tools/autopilot`.
- Assigned page files: `library/measure-theory/the-lp-spaces-holder-minkowski-and-riesz-fischer.md` and `library/measure-theory/the-lp-spaces-holder-minkowski-and-riesz-fischer-examples.md`.
- Assigned item scope: opened all `52` batch-owned item files.

```text
def-conjugate-exponents
def-essential-supremum-with-respect-to-a-measure
def-calligraphic-l-p-on-a-measure-space
def-l-infinity-on-a-measure-space
def-null-subspace-of-almost-everywhere-zero-functions
def-l-p-space-as-a-quotient-by-null-functions
rem-elements-of-l-p-are-equivalence-classes-and-pointwise-statements-require-a-representative
rem-ell-p-is-l-p-of-counting-measure
thm-holder-inequality-for-integrals
thm-equality-case-in-holder-inequality
thm-generalized-holder-inequality-for-products
cor-cauchy-schwarz-inequality-for-l-two
rem-finite-counting-measure-holder-and-cauchy-schwarz-agree-with-published-finite-inequalities
thm-minkowski-inequality-for-integrals
thm-equality-case-in-minkowski-inequality
rem-finite-counting-measure-minkowski-agrees-with-the-published-finite-theorem
prop-essential-supremum-is-attained-as-the-least-essential-bound
thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one
prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class
thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space
thm-riesz-fischer-completeness-of-l-p
cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences
cor-l-p-convergence-implies-convergence-in-measure
thm-finite-measure-l-r-includes-into-l-p-for-p-less-r
thm-ell-p-includes-into-ell-r-for-p-less-r
thm-lyapunov-interpolation-inequality-for-l-p-norms
rem-lyapunov-inequality-is-equivalent-to-log-convexity-of-p-to-log-norm
thm-l-p-norms-converge-to-the-essential-supremum-for-essentially-bounded-l-r-functions
thm-parallelogram-law-in-l-two
prop-the-p-functional-is-not-a-norm-for-zero-less-p-less-one
thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric
thm-reverse-p-triangle-inequality-for-nonnegative-functions-when-zero-less-p-less-one
rem-lp-completeness-and-the-banach-property
ex-x-to-the-minus-a-on-zero-one-and-on-one-infinity-calibrates-l-p-membership
ex-k-to-the-minus-a-membership-in-ell-p
ex-finite-counting-measure-on-n-points-recovers-rn-p-norms
ex-indicator-of-the-rationals-has-zero-essential-supremum-but-pointwise-supremum-one
ex-proportional-functions-realise-the-equality-case-of-holder
ex-a-two-step-function-shows-the-l-p-norm-converging-to-the-essential-supremum
ex-the-parallelogram-law-on-two-indicator-functions-in-l-two
cex-l-one-not-subset-l-two-on-the-line
cex-l-two-not-subset-l-one-on-the-line
rem-the-published-typewriter-sequence-shows-why-riesz-fischer-only-promises-a-subsequence
cex-half-norm-fails-the-triangle-inequality-on-two-indicators
cex-a-nonzero-function-on-a-null-set-has-zero-l-p-seminorm
cex-a-cauchy-sequence-in-calligraphic-l-p-can-converge-to-two-distinct-functions
fs-l-p-includes-into-l-r-on-every-measure-space-when-p-less-r
fs-the-p-seminorm-on-calligraphic-l-p-is-a-norm
fs-the-essential-supremum-equals-the-pointwise-supremum
fs-every-l-p-cauchy-sequence-converges-pointwise-almost-everywhere
fs-l-one-half-with-its-p-functional-is-a-normed-space
fs-holder-equality-forces-the-functions-themselves-to-be-proportional
```

- Direct dependency items opened for verification: `43`.

```text
cor-additivity-of-the-nonnegative-lebesgue-integral
cor-beppo-levi-theorem
def-complete-metric-space
def-convergence-almost-everywhere-relative-to-a-measure
def-convergence-in-measure
def-counting-measure
def-linear-subspace
def-log-convex-positive-function
def-measure-null-set-and-almost-everywhere
def-measure-space
def-metric-space
def-nonnegative-lebesgue-integral
def-norm-and-normed-space
def-p-norms-on-rn
def-quotient-vector-space-and-canonical-projection
def-real-power
def-vector-space
fs-l-one-convergence-implies-almost-everywhere-convergence
lem-countable-sets-are-null
prop-closure-properties-of-measurable-functions-used-by-the-integral
prop-counting-measure-is-a-measure
prop-order-and-scalar-rules-for-the-nonnegative-integral
prop-quotient-vector-space-operations-and-projection
thm-cauchy-schwarz-and-the-euclidean-norm
thm-cauchy-schwarz-finite
thm-chebyshev-markov-inequality-for-the-integral
thm-comparison-test-for-improper-integrals
thm-dominated-convergence
thm-exponential-is-strictly-increasing
thm-finite-and-countable-subadditivity-of-measures
thm-holder-finite-real-exponents
thm-linearity-of-the-lebesgue-integral-on-l-one
thm-logarithm-derivative-and-integral
thm-minkowski-finite-real-exponents
thm-monotone-convergence-for-the-integral
thm-natural-logarithm-laws
thm-nonnegative-integral-zero-iff-zero-almost-everywhere
thm-p-series-real-exponents
thm-rationals-countable
thm-real-power-continuity-and-derivatives
thm-real-power-laws
thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
thm-young-inequality-real-exponents
```

## Outcome

I read both assigned pages, all assigned items, and the direct dependency items needed to verify the current proofs, examples, and false statements. I confirmed eight editable in-flight defects in the A-page chain, repaired them, and updated the batch proof-contract artifact accordingly. I did not confirm any remaining uneditable defect in an assigned page/item or in a published dependency.

## Repaired defects

### R3-1 — `thm-holder-inequality-for-integrals` — fixed — nonfatal

The zero-function branch used the zero-integral conclusion without citing the zero-a.e. theorem, and the endpoint branch used `\|g\|_\infty` as an attained bound without citing the essential-supremum attainment item. I added the missing dependencies/facts and tightened the endpoint and strict-exponent steps.

### R3-2 — `thm-generalized-holder-inequality-for-products` — fixed — nonfatal

The `r=\infty` and one-infinite endpoint branches likewise used exact `L^\infty` bounds without the attainment carrier. I added the missing dependency and rewrote the endpoint steps so the pointwise bound is actually justified.

### R3-3 — `thm-minkowski-inequality-for-integrals` — fixed — fatal

The old strict-exponent proof was circular: it applied Holder to `|f+g|^{p-1}` before establishing that `f+g` lies in `\mathcal L^p`. I repaired it by first proving `|f+g|^p` integrable via the two-term finite Holder inequality and only then applying the standard Holder step.

### R3-4 — `thm-equality-case-in-minkowski-inequality` — fixed — fatal

The statement omitted the case where one summand is zero almost everywhere, even though equality then plainly holds. I added that branch to the statement and aligned the proof with the repaired Minkowski theorem.

### R3-5 — `thm-finite-measure-l-r-includes-into-l-p-for-p-less-r` — fixed — nonfatal

The `L^\infty` branch used the attained essential bound without citing it, and the proof concluded with the quotient-space notation `L^p(\mu)` instead of the representative space `\mathcal L^p(\mu)`. I repaired both.

### R3-6 — `thm-lyapunov-interpolation-inequality-for-l-p-norms` — fixed — fatal

The proof chose the wrong Holder exponents (`1/\theta` and `1/(1-\theta)`), which only reproduces `|f|^p` after exponentiation and does not prove the claim. I replaced that step with the correct conjugate pair `p_0/(\theta p)` and `p_1/((1-\theta)p)`.

### R3-7 — `rem-lyapunov-inequality-is-equivalent-to-log-convexity-of-p-to-log-norm` — fixed — fatal

The remark’s title/body overstated the theorem as log-convexity of `p \mapsto \log \|f\|_p`, which is not the right variable. I rewrote it as the log-convexity statement for the reciprocal-exponent profile `s \mapsto \|f\|_{1/s}`.

### R3-8 — `thm-l-p-norms-converge-to-the-essential-supremum-for-essentially-bounded-l-r-functions` — fixed — nonfatal

The statement and proof mixed quotient notation with representative-space membership and omitted the restriction to finite `p` in the antecedent conclusion. I corrected the typing and the quantifier, then synced the dependent example contract entry.

- No changed item carried a stale `verification.judge` block, so no judge removal was needed.

## Page verdicts

- `the-lp-spaces-holder-minkowski-and-riesz-fischer` — sufficient after the repairs above.
- `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples` — sufficient on current bytes; no body edits required.

## Uneditable defects

- None confirmed.

## Checks run

- `cd tools/autopilot && node --import tsx bin/autopilot.mts status --repo ../..`
- `node tools/tsx-run.mjs tools/reflow.mts ...`
  - run on every changed item.
- `node tools/tsx-run.mjs tools/precheck.mts ...`
  - final pass: all `7` changed proof-bearing items clean.
- `node tools/regen-contract-entries.mjs research/frontier-26-batch-3.proof-contracts.json ...`
  - regenerated the `7` changed theorem entries and the dependent example entry; one regenerated example step-input list then needed a manual batch-local correction in the contract JSON.
- `node tools/proof-contract.mjs --strict research/frontier-26-batch-3.proof-contracts.json`
  - pass with `0` errors and `2` heuristic shotgun-bracket warnings.
- `node tools/citation-fidelity.mjs research/frontier-26-batch-3.proof-contracts.json --items-dir items --fail-on-missing-quote`
  - pass.
- `node tools/rendercheck.mjs ...`
  - pass on the two assigned pages and all changed items.
- `node tools/boundary-audit.mjs research/frontier-26-batch-3.proof-contracts.json --items-dir items --fail-on-contradicted --fail-on-template`
  - reports generic template-reuse clusters and two contradicted-candidate rows. I opened the flagged items; I did not confirm an additional mathematics defect or a contract row that needed repair.
- `git diff --check -- ...`
  - clean.

## Blockers

- None.
