# frontier-24 alpha group b step 6b adjudication

Date: 2026-08-29
Run: frontier-24
Group: b
Scope: batches 3, 8, 9

## Summary

- Touched obligations: 21 total.
  9 accepted repairs, 12 amended repairs.
- Refuter obligations: 21 total.
  13 confirmed fatal, 8 confirmed nonfatal, 0 false positives.
- Reader obligations: 0.
- Risk review: ran `risk-report.mjs` on `research/frontier-24-batch-{3,8,9}.proof-contracts.json` without `--require-reviewed`, reread every current HIGH or CRITICAL item against its proof and the reader/refuter evidence, and wrote complete `alpha-6b-b` `risk_review` rows for all 45 required items:
  15 in batch 3, 21 in batch 8, and 9 in batch 9.

## Batch 3

- Touched carriers: 8 total.
  Accepted: `ex-cholesky-factorisation-and-solve`, `ex-givens-qr-on-a-sparse-matrix`, `ex-householder-qr-factorisation-by-hand`.
  Amended: `ex-plu-factorisation-by-hand`, `thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost`, `thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors`, `thm-gaussian-elimination-with-partial-pivoting-computes-a-nearby-factorisation-with-pivot-growth-bound`, `thm-positive-leading-principal-minors-are-equivalent-to-positive-cholesky-pivots`.
- Refuter findings: 11 total.
  Confirmed fatal: `def-ldu-factorisation`, `thm-gaussian-elimination-with-partial-pivoting-computes-a-nearby-factorisation-with-pivot-growth-bound` (2 findings), `thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model` (2), `thm-plu-factorisation-exists-for-every-square-matrix-and-detects-singularity`, `thm-exact-column-pivoted-qr-of-a-rank-r-matrix-has-an-invertible-leading-block-and-zero-trailing-block`, `thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number`, `thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts` (2).
  Confirmed nonfatal: `ex-sparse-gaussian-elimination-can-create-fill-in`.
- Main repairs.
  `def-ldu-factorisation` now identifies the associated normalised LU factorisation as `A = L(DU)`, not `(LD)U`.
  The PLU, pivoted-LU backward-error, column-pivoted-QR rank-profile, and reduced-QR least-squares theorems now state the real/complex scope their cited definitions actually support.
  The pivoted-LU backward bound now carries the entrywise estimate through `P^T`.
  The Householder backward-stability proof now uses the explicit recurrence `||A^(k)||_F <= (1 + 3 gamma_m)^k ||A||_F`.
  The dense Householder and Givens flop counts now use the correct per-step coefficients.

## Batch 8

- Touched carriers: 7 total.
  Accepted: `thm-the-category-of-complexes-in-an-additive-category-is-additive`.
  Amended: `fs-an-additive-functor-commutes-with-homology`, `fs-an-infinite-coproduct-of-complexes-has-homology-equal-to-the-coproduct-of-their-homologies-in-every-abelian-category`, `prop-a-subcomplex-is-the-kernel-of-its-quotient-map`, `prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps`, `prop-products-and-coproducts-of-complexes-are-degreewise-when-they-exist-and-preserve-differentials`, `thm-an-exact-functor-commutes-with-homology`.
- Refuter findings: 6 total.
  Confirmed fatal: `thm-the-first-isomorphism-theorem-for-complexes`.
  Confirmed nonfatal: `fs-the-boundaries-of-a-complex-are-a-quotient-of-its-cycles`, `lem-a-chain-map-carries-cycles-to-cycles-and-boundaries-to-boundaries`, `prop-products-and-coproducts-of-complexes-are-degreewise-when-they-exist-and-preserve-differentials`, `thm-homology-is-an-additive-functor`, `ex-the-zero-differential-complex-has-homology-equal-to-each-term`.
- Main repairs.
  `fs-the-boundaries-of-a-complex-are-a-quotient-of-its-cycles` now uses the concrete `0 -> Z -> Q -> 0` counterexample, so the false existential quotient claim is genuinely refuted.
  `lem-a-chain-map-carries-cycles-to-cycles-and-boundaries-to-boundaries` now derives the boundary map through a cokernel of `i_D` and the theorem that every monomorphism is the kernel of its cokernel.
  `thm-homology-is-an-additive-functor` is now fully categorical; it no longer uses element notation in an arbitrary abelian category.
  `thm-the-first-isomorphism-theorem-for-complexes` now cites `lem-the-kernel-of-a-chain-map-is-computed-degreewise`, which is the exact theorem used in step 1.1.

## Batch 9

- Touched carriers: 6 total.
  Accepted: `fs-a-partition-of-unity-can-glue-manifold-valued-maps-by-taking-weighted-sums`, `lem-contact-equivalence-is-chart-independent-and-an-equivalence-relation`, `lem-curve-velocity-depends-only-on-the-contact-class`, `prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component`, and `thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity`.
  Amended: `thm-change-of-coordinate-formula-for-tangent-bases`.
- Refuter findings: 4 total.
  Confirmed fatal: `fs-curve-velocities-in-two-charts-have-the-same-coordinate-tuple`, `lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking`.
  Confirmed nonfatal: `cor-every-closed-subset-of-a-manifold-is-the-zero-set-of-a-smooth-nonnegative-function`, `thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function`.
- Main repairs.
  `cor-every-closed-subset-of-a-manifold-is-the-zero-set-of-a-smooth-nonnegative-function` now builds the countable coordinate-ball cover of `M \\ A` before applying the shrinking lemma.
  `fs-curve-velocities-in-two-charts-have-the-same-coordinate-tuple` now uses `gamma(t) = (1 + t, 1)` at `(1,1)`, where the Cartesian and polar coordinate tuples genuinely differ.
  `lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking` now chooses each `V_x` inside `U_n ∩ int(K_{m+1}) \\ K_{m-2}`, which makes the local-finiteness argument true.
  `thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function` now uses the correct five-index support bound.

## Checks

- `node tools/step6-scope.mjs stamp --run frontier-24 --group b`
  Result: stamped 42 current carrier hashes for group b.
- `node tools/step6-scope.mjs check --run frontier-24 --phase adjudicate --batch 3`
  Result: `34 item(s) routed, 19 adjudication obligation(s), 0 error(s)`.
- `node tools/step6-scope.mjs check --run frontier-24 --phase adjudicate --batch 8`
  Result: `57 item(s) routed, 13 adjudication obligation(s), 0 error(s)`.
- `node tools/step6-scope.mjs check --run frontier-24 --phase adjudicate --batch 9`
  Result: `101 item(s) routed, 10 adjudication obligation(s), 0 error(s)`.
- `node tools/tsx-run.mjs tools/precheck.mts $(jq -r '.scope[] | \"items/\" + . + \".md\"' research/frontier-24-batch-{3,8,9}.proof-contracts.json)`
  Result: pass for all three owned batches: `25/25`, `41/41`, and `83/83` items clean.
- `node tools/proof-contract.mjs research/frontier-24-batch-{3,8,9}.proof-contracts.json --strict`
  Result: pass, `25/25`, `41/41`, and `83/83` item(s) checked with `0` errors and `0` warnings in each batch.
- `node tools/risk-report.mjs research/frontier-24-batch-{3,8,9}.proof-contracts.json --require-reviewed --json`
  Result: pass for all three owned batches; every required HIGH/CRITICAL item carries a complete `alpha-6b-b` `risk_review`.
- `node tools/citation-fidelity.mjs research/frontier-24-batch-{3,8,9}.proof-contracts.json --fail-on-missing-quote`
  Result: batches 8 and 9 had no widening candidates. Batch 3 still has one widening candidate on `thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model` fact `[L2]`; I reread the current theorem and `lem-product-of-one-plus-deltas-gives-theta-n` and did not confirm a live defect on the current bytes.
- `node tools/boundary-audit.mjs research/frontier-24-batch-{3,8}.proof-contracts.json --fail-on-contradicted`
  Result: pass for batches 3 and 8.
- `node tools/boundary-audit.mjs research/frontier-24-batch-9.proof-contracts.json --fail-on-contradicted`
  Result: the detector still reports the same eight empty-family heuristics (`lem-locally-finite-families-of-supports-have-locally-finite-cozero-families`, `thm-a-locally-finite-sum-of-smooth-functions-is-smooth`, `lem-normalizing-a-locally-finite-positive-smooth-family`, `lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking`, `lem-first-order-hadamard-factorization-near-a-point`, `thm-change-of-coordinate-formula-for-tangent-bases`, `thm-coordinate-formula-for-the-differential`, `thm-coordinate-formula-for-the-differential-of-a-function`). I manually reread those current items during this dispatch and did not confirm a mathematical or contract defect, so no additional ledger row was warranted.
- `node tools/rendercheck.mjs <18 repaired item files>`
  Result: pass, `OK — 18 file(s)`.
- `git diff --check -- <owned Step-6b files>`
  Result: pass.

## Blockers

- None in the live Alpha group b scope.

## Gate repair - `step6-routing-adjudicate` (Sunday, August 30, 2026)

- Reproduced the live `decision-not-applied` queue on the current tree and confirmed that `touched:9:thm-change-of-coordinate-formula-for-tangent-bases` no longer matched the exact post-reader carrier sealed in `research/frontier-24-step6-hash-9-post.json`.
- Reread the current theorem against `research/frontier-24-reader-9.md` and found no new mathematical defect. I retagged the touched decision from `accepted_repair` to `amended_repair` and appended the supplemental gate row `frontier-24-S6-b-gate-9-1` via `research/frontier-24-alpha-b-6b-gate-ledger-rows.json`.
- Focused rerun:
  `node tools/step6-scope.mjs check --run frontier-24 --phase adjudicate --batch 9`
  -> `101 item(s) routed, 10 adjudication obligation(s), 0 error(s)`.
- Full rerun:
  `node tools/step6-scope.mjs check --run frontier-24 --phase adjudicate`
  -> `493 item(s) routed, 122 adjudication obligation(s), 0 error(s)`.
- `node tools/defect-ledger.mjs validate --run frontier-24`
  -> `131 defect row(s) checked, 0 error(s)`.
