# Frontier-27 Alpha c Step 6b

Run: `frontier-27`  
Group: `c`  
Batch: `8`  
Date: `2026-08-31`

## Scope and evidence

- Opened `research/frontier-27-step6-scope-8.json`, `research/frontier-27-reader-8.md`,
  `research/frontier-27-reader-findings-8.json`,
  `research/frontier-27-refute-8.json`,
  `research/frontier-27-dispatch/refuter-refute-8.result.json`,
  `research/frontier-27-dispatch/beta-author-batch-8.result.json`,
  `research/frontier-27-dispatch/beta-fix-batch-8.result.json`,
  `research/frontier-27-batch-8.pages.json`, and
  `research/frontier-27-batch-8.proof-contracts.json`.
- Rechecked the live carriers for the six touched items, all seven routed refuter
  findings, the cited null-set / Sard / transversality / tensor dependencies,
  and the current batch-8 contract rows.
- The beta authoring and beta coverage-fix receipts remained usable evidence
  only; all verdicts below were made against the current item and contract
  bytes.

## Routed decisions

- `touched:8:lem-c1-local-diffeomorphisms-preserve-null-sets-locally`
  `amended_repair`
  ledger: `frontier-27-S6-c-8-t-lem-c1-boundary`,
  `frontier-27-S6-c-8-t-lem-c1-zero`
  evidence: the reader's biconditional-boundary contract repair was sound, and
  the current item needed one additional explicit `0`-manifold branch after the
  null-subset definition was repaired.
- `touched:8:prop-exterior-power-duality-pairing`
  `amended_repair`
  ledger: `frontier-27-S6-c-8-t-prop-exterior-pairing`
  evidence: the reader repair is mathematically sound, and the current carrier
  now also differs from the reader post-state because this pass added the
  required high-risk contract review.
- `touched:8:prop-global-graph-characterization-by-one-point-transverse-fibres`
  `amended_repair`
  ledger: `frontier-27-S6-c-8-t-prop-global-graph`
  evidence: the reader repair is mathematically sound, and the current carrier
  now also differs from the reader post-state because this pass added the
  required high-risk contract review.
- `touched:8:prop-local-graph-characterization-by-transversality-to-vertical-fibres`
  `amended_repair`
  ledger: `frontier-27-S6-c-8-t-prop-local-graph`
  evidence: the narrowed statement and tangent-space-isomorphism proof remain
  mathematically sound, but the live carrier is amended because the current
  batch-8 proof-contract entry and item-manifest row no longer match the exact
  post-reader snapshot.
- `touched:8:prop-the-image-of-a-lower-dimensional-c1-manifold-is-null`
  `amended_repair`
  ledger: `frontier-27-S6-c-8-t-prop-lowerdim-image`
  evidence: the current proof uses the reader's countable source/target-atlas
  localization and the current carrier now also differs from the reader
  post-state because this pass added the required high-risk contract review.
- `touched:8:thm-parametric-transversality`
  `amended_repair`
  ledger: `frontier-27-S6-c-8-t-thm-parametric`
  evidence: the reader repair is mathematically sound, and the current carrier
  now also differs from the reader post-state because this pass added the
  required high-risk contract review.
- `refuter:8:1` on `def-null-subset-of-a-smooth-manifold`
  `confirmed_fatal`
  ledger: `frontier-27-S6-c-8-r-def-null`
  evidence: the refuter correctly identified that the old definition quantified
  over `0`-manifolds while citing only the `m>=1` Euclidean nullity item; the
  current definition now states the `0`-dimensional branch explicitly.
- `refuter:8:2` on `lem-sard-slicing-for-compact-null-sections`
  `confirmed_nonfatal`
  ledger: `frontier-27-S6-c-8-r-sard-slicing`
  evidence: the old step `2.1` treated a finite closed-cube union as an open
  neighborhood of `K_t`; the repaired proof first enlarges to open cubes and
  then restores a closed-cube cover with a controlled volume bound.
- `refuter:8:3` on `lem-sard-on-the-nonflat-critical-strata`
  `confirmed_fatal`
  ledger: `frontier-27-S6-c-8-r-nonflat-statement`
  evidence: the refuter correctly identified that the old statement allowed
  `j=0` although the strata were defined only for `j>=1`; the current statement
  now requires `1<=j<r`.
- `refuter:8:4` on `lem-sard-on-the-nonflat-critical-strata`
  `confirmed_fatal`
  ledger: `frontier-27-S6-c-8-r-nonflat-proof`
  evidence: the refuter correctly identified the false projection step from a
  null subset of `R^(n+1)` to `R^n`; the repaired proof now restricts directly
  to the hypersurface `g=0` and applies induction there.
- `refuter:8:5` on `thm-morse-sard-for-euclidean-maps`
  `confirmed_fatal`
  ledger: `frontier-27-S6-c-8-r-euclidean-sard`
  evidence: the refuter correctly identified that the old theorem used the
  flat-stratum lemma beyond its justified range; the repaired proof now handles
  `C_0\setminus C_1` separately and uses the repaired flat-stratum threshold.
- `refuter:8:6` on `prop-the-image-of-a-lower-dimensional-c1-manifold-is-null`
  `false_positive`
  ledger: `frontier-27-S6-c-8-r-prop-lowerdim-fp`
  evidence: the finding matches the pre-reader one-chart proof state named by
  its `observed_sha256`; the current item already carries the countable-atlas
  repair and no longer exhibits that gap.
- `refuter:8:7` on `ex-a-fibre-product-of-submersions`
  `confirmed_nonfatal`
  ledger: `frontier-27-S6-c-8-r-fibre-product`
  evidence: the refuter correctly identified a citation mismatch in step `1.1`;
  the current example now cites `def-transverse-smooth-maps` and proves
  `F \pitchfork G` directly.

## Additional 6b repairs and risk review

- Added `frontier-27-S6-c-8-h-smooth-sard-zero` for
  `thm-morse-sard-for-smooth-manifolds`: the current proof now handles the
  `dim N = 0` branch explicitly and cites the critical-locus notation through
  `[F3]`. This row is owned by supplemental gate decision
  `gate:frontier-27-S6-c-8-h-smooth-sard-zero`.
- Added `frontier-27-S6-c-8-h-tensor-transition-model` for
  `thm-tensor-transition-laws-define-a-smooth-vector-bundle`: the old
  `R^{m^{r+s}}` local model was ill-typed at `m=0, r=s=0`; the proof now uses
  the actual tensor space on `R^m`. This row is owned by supplemental gate
  decision `gate:frontier-27-S6-c-8-h-tensor-transition-model`.
- Wrote `risk_review: {status: complete, reviewer: alpha-6b-c, notes: ...}` for
  every current `HIGH` or `CRITICAL` batch-8 contract row:
  `lem-c1-local-diffeomorphisms-preserve-null-sets-locally`,
  `prop-the-null-set-definition-is-independent-of-the-smooth-atlas`,
  `prop-a-countable-chart-cover-detects-manifold-null-sets`,
  `prop-the-image-of-a-lower-dimensional-c1-manifold-is-null`,
  `thm-morse-sard-for-euclidean-maps`,
  `thm-morse-sard-for-smooth-manifolds`,
  `lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient`,
  `thm-transverse-preimage-theorem`,
  `prop-global-graph-characterization-by-one-point-transverse-fibres`,
  `thm-parametric-transversality`,
  `prop-transversality-is-stable-on-a-compact-source`,
  `fs-the-set-of-critical-values-is-always-closed`,
  `ex-a-smooth-map-with-a-nonclosed-critical-value-set`,
  `prop-exterior-power-duality-pairing`,
  `thm-tensor-transition-laws-define-a-smooth-vector-bundle`,
  `thm-symmetric-and-alternating-images-are-smooth-subbundles`,
  and `prop-local-coordinate-expression-for-a-differential-form`.
- Reopened the two remaining `boundary-audit` heuristics:
  `thm-parametric-transversality[empty]` and
  `prop-local-coordinate-expression-for-a-differential-form[empty]`.
  On current bytes they remain heuristic-only; no additional item or contract
  defect was confirmed.

## Checks

- Focused changed-item precheck over the eight edited proof-bearing items:
  clean.
- `node tools/content-policy.mjs research/frontier-27-batch-8.pages.json`
  `0` errors, `0` warnings.
- `node tools/proof-contract.mjs research/frontier-27-batch-8.proof-contracts.json --strict`
  `0` errors, `0` warnings, `87/87` checked.
- `node tools/citation-fidelity.mjs research/frontier-27-batch-8.proof-contracts.json`
  `189` citations, no quote or widening failure.
- `node tools/boundary-audit.mjs research/frontier-27-batch-8.proof-contracts.json`
  only the two reopened heuristic candidates above.
- `node tools/risk-report.mjs research/frontier-27-batch-8.proof-contracts.json`
  and rerun with `--require-reviewed`
  `0` errors both times.
- `node tools/step6-scope.mjs check --run frontier-27 --phase adjudicate --batch 8`
  `116` routed items, `13` routed adjudication obligations, `0` errors.

## Blockers

- None in routed batch `8`.

## Gate repair - `step6-routing-adjudicate` (Monday, August 31, 2026)

- Reproduced the live `decision-not-applied` queue on the current tree and confirmed one stale batch-8 touched decision: `prop-local-graph-characterization-by-transversality-to-vertical-fibres`.
- Reread the current proposition against `research/frontier-27-reader-8.md` and found no new mathematical defect. I retagged the touched decision from `accepted_repair` to `amended_repair` and appended the supplemental gate row `frontier-27-S6-c-gate-8-1` via `research/frontier-27-alpha-c-6b-gate-ledger-rows.json`.
- Focused rerun:
  `node tools/step6-scope.mjs check --run frontier-27 --phase adjudicate --batch 8`
  -> `116 item(s) routed, 13 adjudication obligation(s), 0 error(s)`.
- Full rerun:
  `node tools/step6-scope.mjs check --run frontier-27 --phase adjudicate`
  -> `449 item(s) routed, 139 adjudication obligation(s), 0 error(s)`.
