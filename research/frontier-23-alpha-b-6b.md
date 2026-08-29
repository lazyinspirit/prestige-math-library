# frontier-23 — Alpha group `b`, Step 6b adjudication

Run: `frontier-23`  
Role: `alpha`  
Label: `6b-b`  
Covers: batches `2`, `5`, and `9`  
Date: Saturday, August 29, 2026

## Outcome

- Wrote `research/frontier-23-alpha-b-6b-decisions.json` with `89` stamped
  decisions: `7` `accepted_repair`, `55` `amended_repair`, `20`
  `confirmed_fatal`, and `7` `confirmed_nonfatal`.
- Appended `89` closed Step-6 rows through
  `research/frontier-23-alpha-b-6b-ledger-rows.json` into
  `research/defect-ledger.jsonl`.
- Wrote `52` required `risk_review` records across
  `research/frontier-23-batch-{2,5,9}.proof-contracts.json`.
- Confirmed every routed refuter finding on current bytes. No routed finding was
  a false positive.

## Batch 2

- Touched carriers: `1` accepted repair and `2` amended repairs.
- Refuter findings: `8` confirmed fatal and `1` confirmed nonfatal.
- The live repairs are:
  `cor-the-kth-exterior-power-vanishes-above-dimension` now proves the `k>n`
  case from the independent-set bound, the repaired decomposable-wedge theorem,
  and the quotient generators instead of the out-of-range basis citation.
  `def-hodge-star-on-an-oriented-inner-product-space` now restricts the Hodge
  star to `0<=k<=n`.
  `def-orientation-of-a-finite-dimensional-real-vector-space` now treats the
  one-dimensional sign-flip case explicitly.
  `ex-oriented-area-and-volume-from-gram-determinants` now has the correct
  `R^3` Gram matrix and determinant.
  `ex-the-second-exterior-power-matrix-equals-the-signed-minor-matrix` now has
  the correct third column and `A_{13,23}` minor.
  `fs-the-exterior-power-is-a-canonical-subspace-of-the-tensor-power-over-every-field`
  now uses a well-formed tensor-kernel witness.
  `thm-a-decomposable-wedge-is-nonzero-exactly-for-independent-vectors` is now
  stated in the finite-dimensional scope actually proved.
  `thm-gram-inner-product-on-exterior-powers-is-positive-definite` now works in
  the explicit range `0<=k<=n`.
  `thm-increasing-basis-wedges-form-a-basis` now separates the `k=0` case.
- The accepted touched carrier is
  `cor-the-top-exterior-power-acts-by-the-determinant`.
  The amended touched carriers are
  `fs-the-exterior-power-is-a-canonical-subspace-of-the-tensor-power-over-every-field`
  and `thm-gram-inner-product-on-exterior-powers-is-positive-definite`.

## Batch 5

- Touched carriers: `6` accepted repairs and `3` amended repairs.
- Refuter findings: `7` confirmed fatal and `2` confirmed nonfatal.
- The live repairs are:
  `def-frobenius-matrix-norm` no longer overclaims that the Frobenius norm is
  never induced.
  `def-induced-matrix-p-norm` now defines the separate induced
  `infinity`-norm explicitly.
  `lem-product-of-one-plus-deltas-gives-theta-n` now uses consistent zero-based
  indexing.
  `prop-spectral-numerical-rank-counts-singular-values-above-the-declared-threshold`
  now states the needed existence claim rather than a false universal one.
  `thm-exact-rank-is-locally-constant-at-full-rank-and-discontinuous-at-nonmaximal-rank-matrices`
  now splits the full-rank proof into tall and wide cases and uses a strict
  `eta<epsilon` perturbation in the discontinuity branch.
  `thm-floating-point-dot-product-componentwise-and-normwise-error-bounds` now
  cites the repaired product lemma through the corrected factor indexing.
  `thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums` now
  points to the updated definition that really carries the induced
  `infinity`-norm.
  `thm-right-hand-side-perturbation-bound-for-ax-equals-b` now states the
  correct sharpness directions in the spectral-norm remark.
- The accepted touched carriers are
  `def-absolute-and-relative-local-condition-numbers-of-a-problem-map`,
  `def-normwise-and-componentwise-backward-error-for-linear-systems`,
  `ex-a-floating-point-dot-product-error-bound`,
  `ex-catastrophic-cancellation-and-a-stable-reformulation`,
  `ex-normal-equations-versus-qr-conditioning`, and
  `thm-local-conditioning-times-backward-error-controls-forward-error-to-first-order`.
- The amended touched carriers are
  `ex-vandermonde-conditioning-improves-after-centering-and-scaling`,
  `prop-explicit-formulas-for-normwise-and-componentwise-backward-error`, and
  `thm-floating-point-dot-product-componentwise-and-normwise-error-bounds`.

## Batch 9

- Touched carriers: `50` amended repairs.
- Refuter findings: `5` confirmed fatal and `4` confirmed nonfatal.
- Reader 9 had left the batch with live proof-format/contract drift. I repaired
  the touched manifold/topology items by normalizing the numbered proof blocks,
  syncing the touched contract rows, and updating the two manifest rows whose
  dependency carriers had changed.
- The fatal live ODE repairs are:
  `cor-a-bounded-vector-field-on-all-of-euclidean-space-is-complete` now uses
  the correct two-sided integral estimate.
  `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval`
  now extends the coefficient field to an open interval and uses forward and
  reflected Gronwall bounds before the continuation step.
  `thm-c1-dependence-of-solutions-on-initial-data` now proves a genuine
  Fréchet derivative and continuity of the derivative matrix.
  `thm-smooth-dependence-of-solutions-on-initial-data` now uses the finite
  jet-system induction instead of differentiating the missing next derivative
  into existence.
- The nonfatal live repairs are the broken refutation endings in
  `fs-a-chart-domain-is-an-open-subset-of-euclidean-space`,
  `fs-an-arbitrary-disjoint-union-of-second-countable-manifolds-is-second-countable`,
  `fs-chart-compatibility-needs-only-one-smooth-transition-direction`, and
  `fs-every-hausdorff-locally-euclidean-space-is-a-manifold`.

## Checks

- `node tools/tsx-run.mjs tools/precheck.mts ...` passed on every changed
  batch-2, batch-5, and batch-9 proof-bearing item I edited on
  Saturday, August 29, 2026.
- `node tools/proof-contract.mjs research/frontier-23-batch-2.proof-contracts.json --strict`
  -> `0 error(s), 0 warning(s), 54/54 item(s) checked`.
- `node tools/proof-contract.mjs research/frontier-23-batch-5.proof-contracts.json --strict`
  -> `0 error(s), 0 warning(s), 25/25 item(s) checked`.
- `node tools/proof-contract.mjs research/frontier-23-batch-9.proof-contracts.json --strict`
  -> `0 error(s), 0 warning(s), 61/61 item(s) checked`.
- `node tools/risk-report.mjs research/frontier-23-batch-2.proof-contracts.json --require-reviewed`
  -> `0 error(s), 54 item(s) routed`.
- `node tools/risk-report.mjs research/frontier-23-batch-5.proof-contracts.json --require-reviewed`
  -> `0 error(s), 25 item(s) routed`.
- `node tools/risk-report.mjs research/frontier-23-batch-9.proof-contracts.json --require-reviewed`
  -> `0 error(s), 61 item(s) routed`.
- `node tools/content-policy.mjs research/frontier-23-batch-2.pages.json research/frontier-23-batch-5.pages.json research/frontier-23-batch-9.pages.json`
  -> `177 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/defect-ledger.mjs append --file research/frontier-23-alpha-b-6b-ledger-rows.json`
  -> appended `89` rows and re-rendered `research/DEFECT-LEDGER.md`.
- `node tools/step6-scope.mjs stamp --run frontier-23 --group b`
  -> stamped `89` current carrier hash(es).
- `node tools/step6-scope.mjs check --run frontier-23 --phase adjudicate --batch 2`
  -> `70 item(s) routed, 12 adjudication obligation(s), 0 error(s)`.
- `node tools/step6-scope.mjs check --run frontier-23 --phase adjudicate --batch 5`
  -> `34 item(s) routed, 18 adjudication obligation(s), 0 error(s)`.
- `node tools/step6-scope.mjs check --run frontier-23 --phase adjudicate --batch 9`
  -> `73 item(s) routed, 59 adjudication obligation(s), 0 error(s)`.

## Blockers

- `node tools/defect-ledger.mjs validate --run frontier-23` is still red for a
  reason outside group `b`'s writable Step-6 scope. The failing rows are
  already-appended group-`d` `frontier-23` entries whose `subclass` values are
  outside the ledger enum (`false-computation`, `overstrong-title-or-statement`,
  `invalid-refutation`, `missing-map`, `missing-case`, `false-claim`,
  `ill-formed`). I did not rewrite those other-group rows from this dispatch.

## Gate repair - `step6-routing-adjudicate` (Saturday, August 29, 2026)

- Reproduced the live `decision-not-applied` queue on the current tree and
  confirmed that
  `touched:2:cor-the-top-exterior-power-acts-by-the-determinant` no longer
  matched the exact post-reader carrier sealed in
  `research/frontier-23-step6-hash-2-post.json`.
- Reread the current corollary against `research/frontier-23-reader-2.md` and
  found no new mathematical defect. I synced the batch-2 item-manifest deps row
  in `research/frontier-23-batch-2.pages.json`, retagged the touched decision
  from `accepted_repair` to `amended_repair`, and appended the supplemental gate
  row `frontier-23-S6-b-gate-2-1` via
  `research/frontier-23-alpha-b-6b-gate-ledger-rows.json`.
- Focused rerun:
  `node tools/step6-scope.mjs check --run frontier-23 --phase adjudicate --batch 2`
  -> `70 item(s) routed, 12 adjudication obligation(s), 0 error(s)`.
- Full rerun:
  `node tools/step6-scope.mjs check --run frontier-23 --phase adjudicate`
  -> `504 item(s) routed, 227 adjudication obligation(s), 0 error(s)`.
