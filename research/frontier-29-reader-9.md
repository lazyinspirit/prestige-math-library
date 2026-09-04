# frontier-29 reader-9 report

Date: 2026-09-01.
Run: `frontier-29`
Batch: `9`
Role: independent Step-6 reader

## Opened scope

- Control artifacts: `CLAUDE.md`, `README.md`, `SCHEMA.md`, `research/frontier-29-reader.task.md`, `research/frontier-29-dispatch/reader-reader-9.prompt.md`, `research/frontier-29-beta-9.task.md`, `research/frontier-29-batch-9.pages.json`, `research/frontier-29-batch-9.coverage.json`, `research/frontier-29-batch-9.proof-contracts.json`, `research/frontier-29-batch-9.notes.md`, and the current `research/plan-spec.json` entries for the assigned pages and their prerequisite pages.
- Assigned pages: `library/complex-analysis/the-riemann-zeta-function.md` and `library/complex-analysis/the-riemann-zeta-function-examples.md`.
- Assigned A-page items: `lem-riemann-zeta-dirichlet-series-converges-locally-uniformly`, `def-riemann-zeta-function`, `thm-euler-product-for-riemann-zeta`, `cor-riemann-zeta-is-zero-free-for-real-part-greater-than-one`, `rem-agreement-with-the-existing-infinitude-of-primes`, `thm-riemann-zeta-continuation-to-the-right-half-plane`, `thm-dirichlet-eta-representation`, `def-jacobi-theta-function`, `thm-jacobi-theta-transformation`, `thm-theta-mellin-representation-of-completed-zeta`, `def-completed-riemann-zeta-function`, `thm-riemann-zeta-meromorphic-continuation`, `thm-completed-riemann-zeta-functional-equation`, `thm-riemann-zeta-functional-equation`, `def-riemann-xi-function`, `thm-riemann-xi-is-entire-of-order-one`, `thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane`, `thm-trivial-zeros-and-critical-strip`, `thm-hadamard-product-for-riemann-xi`, `def-bernoulli-numbers-by-their-generating-function`, `thm-special-values-of-riemann-zeta-at-integers`, and `rem-dirichlet-series-continuation-and-regularized-sums`.
- Assigned B-page items: `ex-euler-product-numerically-approximates-zeta-at-two`, `ex-zeta-four-equals-pi-to-the-four-over-ninety`, `ex-zeta-zero-equals-minus-one-half`, `ex-splitting-the-theta-mellin-integral-isolates-the-two-polar-terms`, `ex-zeta-minus-two-vanishes-by-the-sine-factor`, `ex-symmetric-finite-zero-products-model-the-xi-hadamard-product`, `cex-the-eta-series-represents-the-continuation-where-the-dirichlet-series-diverges`, `cex-the-harmonic-series-shows-the-defining-series-diverges-at-one`, `fs-riemann-zeta-is-given-by-its-dirichlet-series-for-all-s-not-one`, `fs-zeta-minus-one-is-the-ordinary-sum-one-plus-two-plus-three-and-so-on`, `fs-riemann-zeta-is-entire`, and `fs-the-functional-equation-alone-characterizes-zeta`.
- Dependency pages opened for verification: `library/complex-analysis/the-gamma-function.md`, `library/complex-analysis/mittag-leffler-and-runges-theorem.md`, and `library/number-theory/primes-and-the-fundamental-theorem-of-arithmetic.md`. I also checked the current plan entries for `schwartz-space-and-the-plancherel-theorem` and `tempered-distributions-and-the-fourier-transform`; both still exist only as plan placeholders with empty item lists, and neither page file exists under `library/functional-analysis/`.
- Dependency items opened for verification: `def-complex-exponential`, `def-natural-logarithm`, `thm-weierstrass-m-test-for-complex-function-series`, `thm-p-series-rational`, `thm-absolute-convergence-criterion-for-complex-infinite-products`, `thm-fundamental-theorem-of-arithmetic`, `thm-canonical-prime-factorisation`, `thm-euclid-infinitude-of-primes`, `def-euler-gamma-function`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-gaussian-integral`, `thm-gamma-meromorphic-continuation`, `cor-gamma-function-has-no-zeros`, `thm-euler-reflection-formula`, `thm-legendre-duplication-formula`, `thm-stirling-formula-gamma`, `thm-hadamard-factorization-for-finite-order-entire-functions`, and `thm-mittag-leffler-expansion-of-pi-cotangent`.
- Primary-source spot checks: Stein-Shakarchi, *Complex Analysis*, Chapter 6 section `2.1` for the theta-Mellin route and Chapter 7 section `1` for the `3+4\cos\theta+\cos2\theta` zero-free-line inequality; Chandrasekharan, *Lectures on the Riemann Zeta-Function*, Lecture 12 `The Theta Relation` and Lecture 13 section `8` for the theta symmetry, zero-free boundary line, xi growth, and Hadamard product.

## Design/spec check

- The reader prompt, the author task, `research/frontier-29-batch-9.pages.json`, and the live `research/plan-spec.json` entry agree on orders `345/346`, the page ids, the title, and the declared prerequisites.
- The current repo state still has the known Fourier-analysis seam: `schwartz-space-and-the-plancherel-theorem` and `tempered-distributions-and-the-fourier-transform` remain unapplied placeholder pages in the plan and have no `library/` page files. The assigned theta item therefore has to name its Fourier/Poisson input honestly instead of pretending that current on-disk library items already supply it.

## Confirmed defects and edits

1. Repaired `items/thm-jacobi-theta-transformation.md`.
   The proof previously leaned on a free `[A1]` Fourier/Poisson assumption that was not recorded as a current-item fact. I rewrote it as an explicit source-backed `[L3]` seam, keeping the current draft honest about where the Gaussian transform and Poisson-summation input come from.
2. Repaired `items/thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane.md`.
   Its boundary-line contradiction used a free `[A1]` logarithmic inequality. I converted that into an explicit source-backed `[L3]` fact and kept the contradiction argument otherwise unchanged.
3. Repaired `items/thm-hadamard-product-for-riemann-xi.md`.
   Step `1.2` claimed that the trivial zeros of zeta simply "cancel" the Gamma poles and therefore cannot be zeros of xi. That only proves finiteness, not nonvanishing. I added the needed dependencies and rewrote the step to use xi-symmetry at `1+2m`, zero-freeness of zeta on `\operatorname{Re}s>1`, and the absence of Gamma poles there.
4. Repaired `research/frontier-29-batch-9.proof-contracts.json`.
   I regenerated the contract entries for the three changed items and corrected two stale `zero` boundary rows: `thm-riemann-zeta-meromorphic-continuation` now records the explicit `s=0` cancellation in step `3.1`, and `thm-completed-riemann-zeta-functional-equation` now records the explicit `s=0` pole handling in steps `2.1` and `3.1`.
5. I did not remove any `verification.judge` record because none of the changed in-flight items carried one.

## Per-page verdicts

- `the-riemann-zeta-function`: pass after the three item repairs above. The page now records its Fourier/Poisson seam honestly, the zero-free-line proof no longer hides a source-level inequality behind an uncited assumption label, and the xi-product proof now really excludes the trivial zeros from xi's zero set.
- `the-riemann-zeta-function-examples`: pass with no edits. I read the B-page items and the remaining `boundary-audit` candidates there are heuristic false positives rather than mathematical defects.

## Checks

- `node tools/regen-contract-entries.mjs research/frontier-29-batch-9.proof-contracts.json thm-jacobi-theta-transformation thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane thm-hadamard-product-for-riemann-xi`
  Result: regenerated `3`, skipped `0`.
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-jacobi-theta-transformation.md items/thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane.md items/thm-hadamard-product-for-riemann-xi.md`
  Result: all three changed items reflowed.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-jacobi-theta-transformation.md items/thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane.md items/thm-hadamard-product-for-riemann-xi.md`
  Result: `3 checked, 0 failing`.
- `node tools/rendercheck.mjs items/thm-jacobi-theta-transformation.md items/thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane.md items/thm-hadamard-product-for-riemann-xi.md`
  Result: `OK — 3 file(s)`.
- `node tools/proof-contract.mjs research/frontier-29-batch-9.proof-contracts.json --strict`
  Result: `0` errors, `0` warnings, `27/27` checked.
- `node tools/citation-fidelity.mjs research/frontier-29-batch-9.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: `81` citations checked, no missing quotes, no widening candidates.
- `node tools/content-policy.mjs research/frontier-29-batch-9.pages.json`
  Result: `34` scoped items, `0` errors, `0` warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: exit `0`; only the repository's standing `redundant-prereq` advisories, ending with the usual `OK` summary.
- `node tools/boundary-audit.mjs research/frontier-29-batch-9.proof-contracts.json --items-dir items --json`
  Result: seven remaining heuristic candidates after the two contract repairs. I re-read each and did not confirm a defect: the three `empty` candidates are fixed Dirichlet/Euler sums rather than variable empty-family branches, and the remaining four `zero` candidates are either meromorphic-identity continuations or local power-series manipulations whose zero cases are already carried by the cited theorem or calculation.
- `git diff --check -- items/thm-jacobi-theta-transformation.md items/thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane.md items/thm-hadamard-product-for-riemann-xi.md research/frontier-29-batch-9.proof-contracts.json`
  Result: clean.

## Uneditable defects

- None remain in the opened scope.

## Blockers

- No blocker remains.
