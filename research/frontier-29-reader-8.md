# frontier-29 reader-8 report

Date: 2026-09-02.
Run: `frontier-29`
Batch: `8`
Role: independent Step-6 reader

## Opened scope

- Control artifacts: `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `research/frontier-29-reader.task.md`, `research/frontier-29-dispatch/reader-reader-8.prompt.md`, `research/frontier-29-batch-8.pages.json`, `research/frontier-29-batch-8.coverage.json`, `research/frontier-29-batch-8.proof-contracts.json`, and `research/frontier-29-batch-8.notes.md`.
- Assigned pages: `library/number-theory/absolute-values-completions-and-p-adic-numbers.md`, `library/number-theory/absolute-values-completions-and-p-adic-numbers-examples.md`, `library/number-theory/dirichlet-series-and-euler-products.md`, and `library/number-theory/dirichlet-series-and-euler-products-examples.md`.
- Assigned A-page items on `absolute-values-completions-and-p-adic-numbers`: `def-multiplicative-absolute-value-on-a-field`, `lem-nonarchimedean-absolute-value-criterion`, `def-equivalent-field-absolute-values`, `thm-equivalent-field-absolute-values-characterisation`, `def-p-adic-absolute-value-on-the-rationals`, `thm-p-adic-absolute-value-is-nonarchimedean`, `thm-ostrowskis-theorem-for-the-rationals`, `def-place-of-the-rationals`, `thm-product-formula-for-the-rationals`, `thm-weak-approximation-for-rational-places`, `def-field-of-p-adic-numbers`, `thm-p-adic-completion-is-a-field`, `lem-p-adic-balls-are-clopen`, `thm-p-adic-completion-agrees-with-the-fraction-field-of-zp`, `cor-zp-is-the-valuation-ring-of-qp`, `cor-maximal-ideal-and-residue-field-of-zp`, `thm-p-adic-digit-expansion`, `cor-p-adic-field-is-locally-compact-and-totally-disconnected`, `cor-p-adic-simple-root-lifting`, `thm-p-adic-newton-criterion`, `thm-square-criterion-in-qp-for-odd-p`, and `thm-square-criterion-in-q2`.
- Assigned B-page items on `absolute-values-completions-and-p-adic-numbers-examples`: `ex-p-adic-geometric-series`, `ex-p-adic-expansion-of-minus-one`, `ex-square-root-of-minus-one-in-q5`, `ex-no-square-root-of-p-in-qp`, `ex-p-adic-hensel-lifting-a-simple-root`, `ex-two-adic-square-test`, `ex-the-same-sequence-in-real-and-p-adic-metrics`, and `cex-zp-is-not-the-integral-closure-of-z-in-qp`.
- Assigned A-page items on `dirichlet-series-and-euler-products`: `def-dirichlet-series`, `def-abscissae-dirichlet-series`, `thm-dirichlet-series-half-plane-convergence`, `thm-dirichlet-series-absolute-half-plane-holomorphy`, `thm-dirichlet-series-abscissa-gap`, `thm-uniqueness-of-dirichlet-series-coefficients`, `thm-dirichlet-series-summatory-integral`, `thm-dirichlet-series-multiplication-convolution`, `thm-multiplicative-dirichlet-series-euler-product`, `cor-completely-multiplicative-dirichlet-series-euler-product`, `thm-landau-dirichlet-series`, `thm-von-mangoldt-logarithmic-derivative-zeta`, `cor-mobius-dirichlet-series-reciprocal-zeta`, `cor-divisor-dirichlet-series-zeta-square`, and `cor-euler-totient-dirichlet-series`.
- Assigned B-page items on `dirichlet-series-and-euler-products-examples`: `ex-dirichlet-series-abscissa-boundaries`, `ex-mobius-reciprocal-zeta-coefficients`, `ex-divisor-function-from-zeta-square`, `ex-euler-totient-dirichlet-series`, `ex-liouville-dirichlet-series`, `cex-conditionally-convergent-euler-product-rearrangement`, and `cex-an-abscissa-need-not-be-a-line-of-convergence`.
- Published dependency items opened for verification: `lem-p-adic-valuation-on-q`, `def-metric-completion`, `thm-metric-completion-exists`, `def-adic-completion-of-a-module`, `thm-kernel-and-universal-property-of-adic-completion`, `thm-complete-and-totally-bounded-implies-compact`, `def-integral-element-and-algebraic-integer`, `thm-bezout-identity`, `thm-canonical-prime-factorisation`, `thm-fundamental-theorem-of-arithmetic`, `thm-chinese-remainder-theorem`, `thm-rationals-countable`, `lem-q-and-irrationals-dense-r`, `def-complex-exponential`, `def-natural-logarithm`, `def-extended-reals`, `lem-abel-summation-for-complex-series`, `thm-weierstrass-convergence-holomorphic-functions`, `thm-weierstrass-m-test-for-complex-function-series`, `thm-dirichlet-test`, `def-dirichlet-convolution`, `def-dirichlet-convolution-identity`, `def-multiplicative-arithmetic-function`, `def-completely-multiplicative-arithmetic-function`, `def-von-mangoldt-function`, `cor-von-mangoldt-mobius-inversion-formula`, `def-number-theoretic-mobius-function`, `cor-classical-mobius-inversion`, `def-divisor-counting-function`, `prop-divisor-functions-under-dirichlet-convolution`, `def-unit-group-modulo-n-and-euler-totient`, `thm-sum-of-totients-over-divisors`, `def-divisor-power-sum-functions`, `thm-totient-of-a-prime-power`, `def-liouville-function`, `thm-p-series-rational`, `ex-harmonic-series-diverges`, `lem-nth-term-test`, `thm-geometric-series`, `thm-alternating-series-test`, and `ex-alternating-harmonic-series`.
- Additional current-file seam checks opened during the boundary-line review: `def-riemann-zeta-function`, `thm-riemann-zeta-continuation-to-the-right-half-plane`, `thm-dirichlet-eta-representation`, and `thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane`. I did not edit those out-of-batch draft items.

## Confirmed defects and edits

1. Repaired `thm-p-adic-completion-is-a-field`.
   The old inverse step argued with the ill-typed expression `|x_n-[x]|_p` and reused the extended ultrametric before that extension was actually established. I replaced it with a limit-based argument: `|x_n|_p -> |[x]|_p > 0` bounds representatives away from `0`, so the reciprocal sequence is Cauchy by the rational formula.
2. Repaired `thm-p-adic-digit-expansion`.
   The old existence proof simply asserted a unique exponent `N` with `p^{-N}x \in \mathbb Z_p^\times`. I added the missing density-based reduction to a nearby rational with the same `p`-adic norm, then constructed the unit expansion from the compatible-residue model of `\mathbb Z_p`. This repair also added the needed dependency on `def-field-of-p-adic-numbers`.
3. Repaired `cor-mobius-dirichlet-series-reciprocal-zeta`.
   The previous proof invoked Dirichlet-series multiplication without first verifying absolute convergence of the Möbius series. I inserted the missing comparison step and added the needed `thm-p-series-rational` dependency.
4. Repaired `cor-euler-totient-dirichlet-series`.
   The same absolute-convergence gap was present in the convolution step for `\varphi = \mu * \operatorname{id}_1`. I added the missing majorant argument and the matching `thm-p-series-rational` dependency.
5. Repaired `ex-dirichlet-series-abscissa-boundaries`.
   Its old proof cited the published real-valued `thm-dirichlet-test` as if it directly proved convergence of the complex eta series on `\Re s>0`. I rewrote the example using the page’s half-plane theorems, complex Abel summation, the harmonic-series witness, and the nth-term test; the incorrect citation is gone.
6. Repaired `cex-an-abscissa-need-not-be-a-line-of-convergence`.
   Its old witness used the zeta boundary line and again mis-cited the real `thm-dirichlet-test` for `\sum n^{-1-it}`. I replaced that argument with a self-contained sparse Dirichlet series `D(s)=\sum_{k\ge1} 2^{-ks}/k`, whose abscissa line `\Re s=0` contains both the divergent point `s=0` and the convergent alternating-harmonic point `s=\pi i/\log 2`.
7. Updated `research/frontier-29-batch-8.proof-contracts.json`.
   I regenerated the six repaired contract entries so the stored citations and derivations match the current item text. No stale `verification.judge` record had to be removed because the edited items are still draft-only `precheck` items.

## Per-page verdicts

- `absolute-values-completions-and-p-adic-numbers`: pass after repair. The completion and digit-expansion arguments now close their previously missing nonzero/integrality steps.
- `absolute-values-completions-and-p-adic-numbers-examples`: pass after review. The examples page needed no prose change, and its current witnesses verify against the repaired A-page material.
- `dirichlet-series-and-euler-products`: pass after repair. The Möbius/totient corollaries now justify the absolute-convergence hypotheses they use.
- `dirichlet-series-and-euler-products-examples`: pass after repair. The two boundary-behavior examples now use correct complex-analytic or self-contained witnesses instead of the misapplied real Dirichlet test.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-p-adic-completion-is-a-field.md items/thm-p-adic-digit-expansion.md items/cor-mobius-dirichlet-series-reciprocal-zeta.md items/cor-euler-totient-dirichlet-series.md items/ex-dirichlet-series-abscissa-boundaries.md items/cex-an-abscissa-need-not-be-a-line-of-convergence.md`
  Result: the six changed items were normalized; the final reruns were unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-p-adic-completion-is-a-field.md items/thm-p-adic-digit-expansion.md items/cor-mobius-dirichlet-series-reciprocal-zeta.md items/cor-euler-totient-dirichlet-series.md items/ex-dirichlet-series-abscissa-boundaries.md items/cex-an-abscissa-need-not-be-a-line-of-convergence.md`
  Result: `6 checked, 0 failing`.
- `node tools/regen-contract-entries.mjs research/frontier-29-batch-8.proof-contracts.json thm-p-adic-completion-is-a-field thm-p-adic-digit-expansion cor-mobius-dirichlet-series-reciprocal-zeta cor-euler-totient-dirichlet-series ex-dirichlet-series-abscissa-boundaries cex-an-abscissa-need-not-be-a-line-of-convergence`
  Result: `regenerated 6, skipped 0`.
- `node tools/proof-contract.mjs research/frontier-29-batch-8.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 45/45 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-29-batch-8.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: no missing quotes and no widening candidates.
- `node tools/content-policy.mjs research/frontier-29-batch-8.pages.json`
  Result: `52 scoped item(s), 0 error(s), 0 warning(s)`.
- `git diff --check -- items/thm-p-adic-completion-is-a-field.md items/thm-p-adic-digit-expansion.md items/cor-mobius-dirichlet-series-reciprocal-zeta.md items/cor-euler-totient-dirichlet-series.md items/ex-dirichlet-series-abscissa-boundaries.md items/cex-an-abscissa-need-not-be-a-line-of-convergence.md research/frontier-29-batch-8.proof-contracts.json`
  Result: clean.

## Uneditable defects

- None remain in the opened scope.

## Blockers

- None.
