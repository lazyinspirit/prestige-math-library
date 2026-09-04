# frontier-29 reader-7 report

Date: 2026-09-02.
Run: `frontier-29`
Batch: `7`
Role: independent Step-6 reader

## Opened scope

- Control artifacts: `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `research/frontier-29-reader.task.md`, `research/frontier-29-dispatch/reader-reader-7.prompt.md`, `research/frontier-29-batch-7.pages.json`, `research/frontier-29-batch-7.coverage.json`, `research/frontier-29-batch-7.proof-contracts.json`, and `research/frontier-29-batch-7.notes.md`.
- Assigned pages: `library/fourier-analysis/dirichlet-kernel-localisation-and-pointwise-fourier-convergence.md` and `library/fourier-analysis/dirichlet-kernel-localisation-and-pointwise-fourier-convergence-examples.md`.
- Assigned A-page items: `def-period-one-fourier-coefficients-partial-sums-and-convolution`, `def-dirichlet-and-fejer-kernels`, `lem-fourier-partial-sums-are-dirichlet-convolutions`, `lem-closed-form-and-size-bounds-for-the-dirichlet-kernel`, `lem-step-functions-have-vanishing-torus-fourier-coefficients`, `lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus`, `thm-riemann-lebesgue-lemma-for-fourier-coefficients`, `lem-symmetric-difference-formula-for-fourier-partial-sums`, `thm-riemann-localisation-principle-for-fourier-series`, `thm-dini-pointwise-convergence-criterion-for-fourier-series`, `cor-local-holder-regularity-implies-fourier-convergence-at-a-point`, `lem-bounded-variation-gives-one-sided-dirichlet-integrability`, `thm-dirichlet-jordan-pointwise-convergence`, and `cor-piecewise-c-one-fourier-series-converges-to-midpoint-values`.
- Assigned B-page items: `ex-dirichlet-kernel-at-zero-and-away-from-zero`, `thm-lebesgue-constants-grow-logarithmically`, `ex-fourier-partial-sums-of-the-sawtooth`, `ex-localisation-for-functions-equal-on-an-arc`, and `cex-continuity-alone-does-not-satisfy-a-dini-modulus`.
- Published dependency items opened for verification: `thm-box-step-functions-are-dense-in-l-p-of-rn`, `thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p`, `thm-jordan-decomposition-for-bv-functions`, `cor-bv-discontinuities-are-countable-and-of-first-kind`, `lem-variation-function-and-jordan-identities`, `thm-second-mean-value-theorem-for-integrals`, `lem-sine-positive-and-cosine-decreasing-on-zero-two`, and `thm-c1-lipschitz-ac-bv-hierarchy`.

## Confirmed defects and edits

1. Repaired the suppressed choice hypothesis in the torus-density branch.
   The current proof of `lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus` imports the published theorem `thm-box-step-functions-are-dense-in-l-p-of-rn`, whose statement is explicitly conditional on the Axiom of Countable Choice. The batch had propagated that result as if it were unconditional. I added the hypothesis, `Given` line, and cited-fact wording where needed in:
   `lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus`,
   `thm-riemann-lebesgue-lemma-for-fourier-coefficients`,
   `thm-riemann-localisation-principle-for-fourier-series`,
   `thm-dini-pointwise-convergence-criterion-for-fourier-series`,
   `cor-local-holder-regularity-implies-fourier-convergence-at-a-point`,
   `lem-bounded-variation-gives-one-sided-dirichlet-integrability`,
   `thm-dirichlet-jordan-pointwise-convergence`,
   `cor-piecewise-c-one-fourier-series-converges-to-midpoint-values`,
   `ex-fourier-partial-sums-of-the-sawtooth`,
   `ex-localisation-for-functions-equal-on-an-arc`,
   and `cex-continuity-alone-does-not-satisfy-a-dini-modulus`.
2. Repaired `thm-lebesgue-constants-grow-logarithmically`.
   The old lower-bound proof claimed that the intervals
   `J_m=[(m+1/6)/(2N+1),(m+5/6)/(2N+1)]` for `m=1,\dots,N` all lie inside `(0,1/2)`, but `J_N` crosses `1/2`, so the written summation did not justify the displayed lower bound. I reindexed the family to `m=0,\dots,N-1`, kept every interval inside `(0,1/2)`, and rewrote the harmonic lower-bound step accordingly.
3. Repaired the A-page summary prose.
   The page summary now states that the current local density repair routes through the published `L^1(\mathbb R)` density theorem and therefore makes the Riemann-Lebesgue/localisation/Dini/Dirichlet-Jordan branch conditional on the Axiom of Countable Choice.
4. Updated `research/frontier-29-batch-7.proof-contracts.json`.
   I regenerated all 17 batch-7 contract entries so the stored statements, citations, derivations, and boundary notes match the repaired item text. No stale `verification.judge` record had to be removed because the repaired items are still draft-only `precheck` items.

## Per-page verdicts

- `dirichlet-kernel-localisation-and-pointwise-fourier-convergence`: pass after repair. The current A-page prose and item statements now preserve the published density theorem's hypothesis instead of silently dropping it.
- `dirichlet-kernel-localisation-and-pointwise-fourier-convergence-examples`: pass after repair. The Lebesgue-constant theorem now has a valid lower-bound interval decomposition, and the example/counterexample leaves were aligned with the repaired A-page hypotheses.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus.md items/thm-riemann-lebesgue-lemma-for-fourier-coefficients.md items/thm-riemann-localisation-principle-for-fourier-series.md items/thm-dini-pointwise-convergence-criterion-for-fourier-series.md items/cor-local-holder-regularity-implies-fourier-convergence-at-a-point.md items/lem-bounded-variation-gives-one-sided-dirichlet-integrability.md items/thm-dirichlet-jordan-pointwise-convergence.md items/cor-piecewise-c-one-fourier-series-converges-to-midpoint-values.md items/ex-fourier-partial-sums-of-the-sawtooth.md items/ex-localisation-for-functions-equal-on-an-arc.md items/cex-continuity-alone-does-not-satisfy-a-dini-modulus.md items/thm-lebesgue-constants-grow-logarithmically.md`
  Result: all 12 changed item files were already in reflow-normal form after the edits.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus.md items/thm-riemann-lebesgue-lemma-for-fourier-coefficients.md items/thm-riemann-localisation-principle-for-fourier-series.md items/thm-dini-pointwise-convergence-criterion-for-fourier-series.md items/cor-local-holder-regularity-implies-fourier-convergence-at-a-point.md items/lem-bounded-variation-gives-one-sided-dirichlet-integrability.md items/thm-dirichlet-jordan-pointwise-convergence.md items/cor-piecewise-c-one-fourier-series-converges-to-midpoint-values.md items/ex-fourier-partial-sums-of-the-sawtooth.md items/ex-localisation-for-functions-equal-on-an-arc.md items/cex-continuity-alone-does-not-satisfy-a-dini-modulus.md items/thm-lebesgue-constants-grow-logarithmically.md`
  Result: `12 checked, 0 failing`.
- `node tools/regen-contract-entries.mjs research/frontier-29-batch-7.proof-contracts.json lem-fourier-partial-sums-are-dirichlet-convolutions lem-closed-form-and-size-bounds-for-the-dirichlet-kernel lem-step-functions-have-vanishing-torus-fourier-coefficients lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus thm-riemann-lebesgue-lemma-for-fourier-coefficients lem-symmetric-difference-formula-for-fourier-partial-sums thm-riemann-localisation-principle-for-fourier-series thm-dini-pointwise-convergence-criterion-for-fourier-series cor-local-holder-regularity-implies-fourier-convergence-at-a-point lem-bounded-variation-gives-one-sided-dirichlet-integrability thm-dirichlet-jordan-pointwise-convergence cor-piecewise-c-one-fourier-series-converges-to-midpoint-values ex-dirichlet-kernel-at-zero-and-away-from-zero thm-lebesgue-constants-grow-logarithmically ex-fourier-partial-sums-of-the-sawtooth ex-localisation-for-functions-equal-on-an-arc cex-continuity-alone-does-not-satisfy-a-dini-modulus`
  Result: `regenerated 17, skipped 0`.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-fourier-partial-sums-are-dirichlet-convolutions.md items/lem-closed-form-and-size-bounds-for-the-dirichlet-kernel.md items/lem-step-functions-have-vanishing-torus-fourier-coefficients.md items/lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus.md items/thm-riemann-lebesgue-lemma-for-fourier-coefficients.md items/lem-symmetric-difference-formula-for-fourier-partial-sums.md items/thm-riemann-localisation-principle-for-fourier-series.md items/thm-dini-pointwise-convergence-criterion-for-fourier-series.md items/cor-local-holder-regularity-implies-fourier-convergence-at-a-point.md items/lem-bounded-variation-gives-one-sided-dirichlet-integrability.md items/thm-dirichlet-jordan-pointwise-convergence.md items/cor-piecewise-c-one-fourier-series-converges-to-midpoint-values.md items/ex-dirichlet-kernel-at-zero-and-away-from-zero.md items/thm-lebesgue-constants-grow-logarithmically.md items/ex-fourier-partial-sums-of-the-sawtooth.md items/ex-localisation-for-functions-equal-on-an-arc.md items/cex-continuity-alone-does-not-satisfy-a-dini-modulus.md`
  Result: `17 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-29-batch-7.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 17/17 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-29-batch-7.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-29-batch-7.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: no contradicted boundary dispositions.
- `node tools/content-policy.mjs research/frontier-29-batch-7.pages.json`
  Result: `19 scoped item(s), 0 error(s), 0 warning(s)`.
- `git diff --check -- items/lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus.md items/thm-riemann-lebesgue-lemma-for-fourier-coefficients.md items/thm-riemann-localisation-principle-for-fourier-series.md items/thm-dini-pointwise-convergence-criterion-for-fourier-series.md items/cor-local-holder-regularity-implies-fourier-convergence-at-a-point.md items/lem-bounded-variation-gives-one-sided-dirichlet-integrability.md items/thm-dirichlet-jordan-pointwise-convergence.md items/cor-piecewise-c-one-fourier-series-converges-to-midpoint-values.md items/ex-fourier-partial-sums-of-the-sawtooth.md items/ex-localisation-for-functions-equal-on-an-arc.md items/cex-continuity-alone-does-not-satisfy-a-dini-modulus.md items/thm-lebesgue-constants-grow-logarithmically.md library/fourier-analysis/dirichlet-kernel-localisation-and-pointwise-fourier-convergence.md research/frontier-29-batch-7.proof-contracts.json`
  Result: clean.

## Uneditable defects

- None remain in the opened scope.

## Blockers

- None.
