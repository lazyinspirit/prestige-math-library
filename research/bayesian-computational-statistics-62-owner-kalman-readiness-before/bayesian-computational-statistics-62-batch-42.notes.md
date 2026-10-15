# Batch 42 authoring notes — Exact linear-Gaussian Kalman filtering

## Controlling direction and plan reconciliation

- The owner direction and current track plan control this batch. The active
  batch manifest had an empty item inventory, and the corresponding
  kalman-filtering and kalman-filtering-examples entries in plan-spec.json
  also have items: []. The BCS-39 track design explicitly requires
  alg-kalman-filter, thm-kalman-filter-is-exact-posterior, a scalar update
  example, and a singular-state example. Two A-page intermediate lemmas were
  added because the exact conditional-kernel induction needs (i) an
  independent-noise RCD extension and (ii) a one-step Gaussian conditioning
  block calculation.
- The BCS-39 track plan is controlling: P0,Qk,Rk may be PSD and singular;
  only each innovation matrix Sk being solved must be SPD; the Joseph
  covariance form is equivalent; the algorithm uses Cholesky solves without
  explicitly forming an inverse; both required examples are retained.
- The track plan's Law–Stuart–Zygalakis source locator “Chapter 3 §3.1” is a
  locator mismatch: the inspected book has its Kalman smoother in Chapter 3
  §3.1 (Theorem 3.1), while its recursive Kalman filter derivation is Chapter
  4 §4.1 (Theorem 4.1 and Corollary 4.2). Chapter 4 §4.1 is cited and the
  discrepancy is recorded rather than citing the smoother as a filtering
  proof.
- The Särkkä Chapter 4 source is the 2013 first edition. In the 2023 second
  edition the corresponding Bayesian filtering and Kalman derivation is in
  Chapter 6. The 2013 Chapter 4 §4.3 and Appendix A.1 locators match the
  BCS-39 plan.
- The batch-level dependency input remains
  6a0a0300409bf4669d62d57275271ea9746d1d13975731ef529b27d26c1b20f4:
  batch 42 is level 3 and requires batches 6 and 41. The item inventory adds
  logical edges only to those declared prerequisite batches. The shared
  scheduling input was not edited.

## Item inventory and item dependency levels

| Item | Level | In-run suppliers |
|---|---:|---|
| lem-independent-noise-extends-a-conditional-law | 0 | none |
| alg-kalman-filter | 1 | def-state-space-filtering-laws (batch 41) |
| lem-one-step-kalman-gaussian-conditioning | 1 | thm-multivariate-normal-conditional-law (batch 6) |
| thm-kalman-filter-is-exact-posterior | 2 | alg-kalman-filter, lem-one-step-kalman-gaussian-conditioning, thm-state-space-filtering-and-smoothing-laws-exist (batch 41), and batch-6 conditioner |
| ex-scalar-kalman-filter-update | 3 | thm-kalman-filter-is-exact-posterior, alg-kalman-filter |
| ex-kalman-filter-singular-prior-positive-innovation | 3 | thm-kalman-filter-is-exact-posterior, alg-kalman-filter |

The supplier-before-consumer authoring order is levels 0, 1, 2, then 3.
The page inventory, item dependencies, and labels are mirrored in the
batch-42 pages manifest.

## Cross-pair supplier checks still required

At inspection, the live run listed batches 6 and 41 as in flight. Their actual
item bodies were present and were read; neither body review nor this note
records acceptance.

- thm-multivariate-normal-conditional-law (batch 6): the actual draft states
  and proves the conditioner for a jointly Gaussian PSD block with SPD
  observed block B, allowing singular A and Schur-complement covariance.
  Its exact B ≻ 0 hypothesis and no-pseudoinverse boundary match this batch's
  interface, but a final proof-citation defect remains open in Proof 4.1:
  [F2] gives zero-cross-covariance independence and [F6] is Tonelli, so
  neither is the product-joint-law result [F5]. The same step labels Tonelli
  [F7], but [F7] is the probability-kernel definition; Tonelli is [F6]. The
  step's final justification group correctly includes [F5] and [F6], so this
  is an inline citation defect rather than evidence that the product-law or
  Tonelli argument itself fails. Batch 6 should correct and recheck its body
  before it is treated as final. This affects
  lem-one-step-kalman-gaussian-conditioning and
  thm-kalman-filter-is-exact-posterior, plus the page-level
  conjugate-families-and-posterior-prediction prerequisite.
- def-state-space-filtering-laws and
  thm-state-space-filtering-and-smoothing-laws-exist (batch 41): the actual
  draft definition uses data-indexed RCD versions on standard-Borel
  histories and permits null-history version freedom; the theorem assumes AC
  and proves existence. The current bodies were re-read on 2026-10-15; their
  standard-Borel and AC hypotheses match the declared interfaces. Batch 41
  remains in flight, so final-body and A-page-placement reconciliation is
  still required before readiness. They support alg-kalman-filter and the
  exact-filter theorem.
- def-linear-gaussian-state-space-model-with-independent-noises and
  thm-linear-gaussian-state-space-path-law-is-jointly-gaussian (SME-44):
  both are published and were read in full. They give the finite-horizon
  affine equations, mutual independence, PSD noise covariances, and a
  jointly Gaussian path even when singular.
- thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
  is published and was read in full. Its SPD hypothesis matches the
  innovation-only solve in the algorithm.

The step1-decisions records mark the affected items escalated for the active
batch-6/batch-41 supplier reconciliation. The independent conditional-kernel
extension lemma is recorded ready with its external prerequisites and
contract. The singular-prior example's escalated record retains the item hash
from before its final definition of $I_2$ and covariance expansion. Escalated
records are intentionally not overwritten under the dispatch instruction;
that record remains open and is not a readiness certification.

## Source reading and dispositions

- Särkkä, Bayesian Filtering and Smoothing (2013), full author-hosted PDF:
  Chapter 4 §§4.1–4.2, §4.3 Theorem 4.2 with complete proof, and Appendix
  A.1 Lemmas A.1–A.2. Its density-based derivations support the classical
  recursion; the local proof handles the stronger PSD/singular-state scope.
- Law, Stuart & Zygalakis, Data Assimilation: A Mathematical Introduction,
  full author manuscript: Chapter 4 §4.1, Theorem 4.1 and Corollary 4.2 with
  complete proofs. This source assumes C0,Gamma,Sigma ≻ 0 and a full-row-rank
  observation matrix; it is not used to justify singular covariance cases.
- Both independent source treatments and their per-item dispositions are in
  bayesian-computational-statistics-62-batch-42.coverage.json. No retrieval
  failure occurred in manual acquisition or inspection. The
  source-fetch-check result is recorded there after that check.

## Scoped checks and handoff

Final scoped checks:

- Item dependency levels were computed with current supplier manifests from
  batches 6 and 41 plus batch 42. The six batch-42 labels matched:
  0, 1, 1, 2, 3, 3; no cycles were found in that scoped dependency graph.
  An earlier batch-42-only projection treated cross-pair suppliers as
  external and was discarded. The whole-run `item-dependency-levels.mjs
  check` is currently blocked by empty inventories in other batch manifests
  and seven mismatched labels outside batch 42; the focused 6/41/42 graph has
  38 items, no cycle/shape errors, and all six batch-42 computed labels match.
- node tools/batch-dependency-levels.mjs check --run
  bayesian-computational-statistics-62 reports stale run-level batch
  dependency evidence after the batch-42 manifest update. The shared
  scheduling file was left untouched for the owner/engine to recompute
  before the next dispatch.
- Focused depcheck on the six items and two pages: pass, zero errors and
  warnings; prerequisite-cycle scope covered 1,591 items and 286 pages.
- Precheck: five proof-bearing items passed; the Kalman algorithm was
  correctly not applicable. Proof layout: six items, 14 steps, zero defects.
- Rendercheck: eight changed item/page files checked, zero errors or warnings.
- Content policy: six items checked, zero errors or warnings.
- Strict proof contracts: six of six items checked, zero errors or warnings.
- source-fetch-check with --stamp: 4/4 full-text source entries fetched and
  stamped, zero drops or retrieval failures. The subsequent check-mode run
  also verified 4/4 stamps.
- First-pass formatting diagnostics found multiline display formulas and
  proof steps whose trailing tags were on later physical lines. These were
  converted to one-line displays and one-line phase steps; all final
  formatting checks pass. The independent-noise lemma's direct-proof phase
  numbering was changed to 1.1, 1.2, 2.1 per the normative precheck repair.
- Two node tools/depcheck.mjs --help probes launched unscoped reads because
  that command has no help option. Neither was used as acceptance; the
  focused depcheck result above is the applicable check.

The explicit proof-layout scope is the six changed item files. The remaining
readiness blocker is the active batch-6/batch-41 supplier reconciliation
recorded above; no independent approval or acceptance is claimed.
