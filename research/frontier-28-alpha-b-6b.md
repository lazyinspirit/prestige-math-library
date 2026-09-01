# frontier-28 alpha group b step 6b adjudication

Date: Tuesday, September 1, 2026
Run: `frontier-28`
Group: `b`
Scope: batches `1`, `7`, and `10`

## Batch 1

- Touched obligations: `5` total.
  Accepted as exact reader-result carriers: `def-van-kampen-diagram-boundary-label-and-area`, `lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams`, and `thm-dehn-algorithm-solves-the-word-problem`.
  Amended beyond the raw reader result: `lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group` and `thm-greendlinger-lemma-for-c-prime-one-sixth-presentations`.

- Reader obligations: `1` total.
  Confirmed nonfatal and repaired: `reader:1:1` on `inverse-systems-profinite-groups-and-completion-examples`.

- Refuter obligations: `11` total.
  Confirmed fatal and repaired: `refuter:1:1`, `refuter:1:4`, `refuter:1:5`, `refuter:1:6`, `refuter:1:9`, and `refuter:1:10`.
  Confirmed nonfatal and repaired: `refuter:1:2`, `refuter:1:3`, `refuter:1:7`, `refuter:1:8`, and `refuter:1:11`.

- Gate repairs: `1` total.
  `frontier-28-S6-b-gate-1-1` is a confirmed nonfatal risk-review defect on `lem-minimal-area-diagrams-are-reduced`: during the high-risk reread I found that fact `F1` cited the area-comparison theorem for the basic definition of van Kampen area. The current lemma now cites `def-van-kampen-diagram-boundary-label-and-area` directly.

- Risk review:
  Reran `risk-report` on `research/frontier-28-batch-1.proof-contracts.json`, reread every current HIGH or CRITICAL batch-1 item, and wrote complete `alpha-6b-b` `risk_review` rows for all `19` required batch-1 items.

## Batch 7

- Touched obligations: `14` total: `11` `accepted_repair` and `3` `amended_repair`.
  Accepted as exact reader-result carriers: `cor-two-canonical-braided-composites-agree-exactly-when-their-underlying-braids-agree`, `def-braid-group-by-the-artin-presentation`, `ex-two-canonical-maps-with-different-underlying-braids`, `thm-braided-coherence-via-underlying-braids`, `thm-in-the-presence-of-the-symmetry-axiom-one-hexagon-implies-the-other`, `thm-the-braid-group-surjects-onto-the-symmetric-group`, `thm-the-braiding-is-compatible-with-the-unit-constraints`, `thm-the-double-braiding-center-is-symmetric`, `thm-the-inverse-braiding-is-a-braiding`, `thm-the-symmetric-group-has-the-coxeter-presentation`, and `thm-the-two-strand-braid-group-is-infinite-cyclic`.
  Amended beyond the raw reader result: `ex-the-braid-group-on-three-strands`, `thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation`, and `thm-the-braid-category-is-the-free-strict-braided-monoidal-category-on-one-generator`.

- Refuter obligations: `1` total.
  Confirmed fatal and repaired: `refuter:7:1` on `cor-unbracketed-and-unordered-tensor-strings-are-well-defined-in-a-symmetric-monoidal-category`.

- Risk review:
  Reran `risk-report` on `research/frontier-28-batch-7.proof-contracts.json`, reread every current HIGH or CRITICAL batch-7 item, and wrote complete `alpha-6b-b` `risk_review` rows for all `4` required batch-7 items.

## Batch 10

- Touched obligations: `15` total: `1` `accepted_repair` and `14` `amended_repair`.
  Accepted as exact reader-result carriers: `def-secant-and-tangent-direction-maps-of-an-euclidean-embedding`.
  Amended beyond the raw reader result: `cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction`, `fs-every-injective-immersion-is-a-proper-embedding`, `fs-every-noncompact-submanifold-has-a-uniform-radius-tubular-neighbourhood`, `lem-a-countable-coordinate-bump-map-embeds-a-manifold-in-countable-euclidean-data`, `lem-a-fine-euclidean-approximation-lands-in-a-prescribed-tubular-neighbourhood`, `lem-a-generic-linear-projection-preserves-injectivity-and-immersion`, `lem-a-generic-projection-can-preserve-properness`, `prop-nearest-point-projection-is-the-tubular-retraction-after-shrinking`, `thm-euclidean-tubular-neighbourhood-theorem`, `thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space`, `thm-relative-whitney-approximation-for-euclidean-valued-maps`, `thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold`, `thm-weak-whitney-immersion-theorem`, and `thm-whitney-approximation-for-manifold-valued-maps`.

- Refuter obligations: `12` total.
  Confirmed fatal and repaired: `refuter:10:1`, `refuter:10:2`, `refuter:10:3`, `refuter:10:4`, `refuter:10:5`, `refuter:10:7`, `refuter:10:8`, `refuter:10:9`, `refuter:10:10`, `refuter:10:11`, and `refuter:10:12`.
  Confirmed nonfatal and repaired: `refuter:10:6`.

- Risk review:
  Reran `risk-report` on `research/frontier-28-batch-10.proof-contracts.json`, reread every current HIGH or CRITICAL batch-10 item, and wrote complete `alpha-6b-b` `risk_review` rows for all `9` required batch-10 items.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts ...`
  Result: pass on all changed items; after the supplemental risk-review citation repair, `lem-minimal-area-diagrams-are-reduced` was reflowed once more and left stable.

- `node tools/tsx-run.mjs tools/precheck.mts ...`
  Result: pass on all changed proof-bearing items; the full Tuesday, September 1, 2026 rerun checked `23/23` and the focused post-gate rerun checked `1/1`.

- `node tools/regen-contract-entries.mjs ...`
  Result: pass; regenerated all `53` batch-1 contract entries, all `28` batch-7 contract entries, and all `40` proof-bearing batch-10 contract entries. The regenerator skipped the `8` batch-10 examples with no parsed facts/steps, and the strict contract gate still passes `48/48`.

- `node tools/proof-contract.mjs research/frontier-28-batch-1.proof-contracts.json --strict`
  Result: pass; `0` errors, `0` warnings, `53/53`.

- `node tools/proof-contract.mjs research/frontier-28-batch-7.proof-contracts.json --strict`
  Result: pass; `0` errors, `0` warnings, `28/28`.

- `node tools/proof-contract.mjs research/frontier-28-batch-10.proof-contracts.json --strict`
  Result: pass; `0` errors, `0` warnings, `48/48`.

- `node tools/citation-fidelity.mjs ... --fail-on-missing-quote`
  Result: pass; batch 1 `110` citations, batch 7 `60`, batch 10 `76`; no quote misses and no widening candidates.

- `node tools/rendercheck.mjs ...`
  Result: pass; `OK — 25 file(s)`.

- `node tools/content-policy.mjs research/frontier-28-batch-1.pages.json research/frontier-28-batch-7.pages.json research/frontier-28-batch-10.pages.json`
  Result: pass; `163` scoped items, `0` errors, `0` warnings.

- `node tools/risk-report.mjs research/frontier-28-batch-1.proof-contracts.json --require-reviewed`
  Result: pass; `0` errors, `53` items routed.

- `node tools/risk-report.mjs research/frontier-28-batch-7.proof-contracts.json --require-reviewed`
  Result: pass; `0` errors, `28` items routed.

- `node tools/risk-report.mjs research/frontier-28-batch-10.proof-contracts.json --require-reviewed`
  Result: pass; `0` errors, `48` items routed.

- `node tools/defect-ledger.mjs append --file research/frontier-28-alpha-b-6b-ledger-rows.json`
  Result: appended `60` frontier-28 group-b rows and re-rendered `research/DEFECT-LEDGER.md`.

- `node tools/defect-ledger.mjs validate --run frontier-28`
  Result: pass; `124` frontier-28 defect rows checked, `0` errors.

- `node tools/step6-scope.mjs stamp --run frontier-28 --group b`
  Result: pass; stamped `60` current carrier hashes into `research/frontier-28-alpha-b-6b-decisions.json`.

- `node tools/step6-scope.mjs check --run frontier-28 --phase adjudicate --batch 1`
  Result: pass; `73` items routed, `17` adjudication obligations, `0` errors.

- `node tools/step6-scope.mjs check --run frontier-28 --phase adjudicate --batch 7`
  Result: pass; `36` items routed, `15` adjudication obligations, `0` errors.

- `node tools/step6-scope.mjs check --run frontier-28 --phase adjudicate --batch 10`
  Result: pass; `54` items routed, `27` adjudication obligations, `0` errors.

## Gate repair - `step6-routing-adjudicate` (Tuesday, September 1, 2026)

- Reproduced the live `decision-not-applied` queue on the current tree and confirmed seven stale touched decisions: `thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation` in batch `7`, plus `cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction`, `fs-every-injective-immersion-is-a-proper-embedding`, `fs-every-noncompact-submanifold-has-a-uniform-radius-tubular-neighbourhood`, `lem-a-countable-coordinate-bump-map-embeds-a-manifold-in-countable-euclidean-data`, `lem-a-fine-euclidean-approximation-lands-in-a-prescribed-tubular-neighbourhood`, and `lem-a-generic-linear-projection-preserves-injectivity-and-immersion` in batch `10`.
- Reread the current theorem, corollary, false-statement, and lemma carriers against `research/frontier-28-reader-7.md` and `research/frontier-28-reader-10.md` and found no new mathematical defect. Retagged those seven touched decisions from `accepted_repair` to `amended_repair` and appended the supplemental gate rows `frontier-28-S6-b-gate-7-1` and `frontier-28-S6-b-gate-10-1` through `frontier-28-S6-b-gate-10-6` via `research/frontier-28-alpha-b-6b-gate-ledger-rows.json`.
- Focused reruns:
  `node tools/step6-scope.mjs check --run frontier-28 --phase adjudicate --batch 7`
  -> `36 item(s) routed, 15 adjudication obligation(s), 0 error(s)`.
  `node tools/step6-scope.mjs check --run frontier-28 --phase adjudicate --batch 10`
  -> `54 item(s) routed, 27 adjudication obligation(s), 0 error(s)`.
- Full rerun:
  `node tools/step6-scope.mjs check --run frontier-28 --phase adjudicate`
  -> `424 item(s) routed, 166 adjudication obligation(s), 0 error(s)`.
- `node tools/defect-ledger.mjs validate --run frontier-28`
  -> `181 defect row(s) checked, 0 error(s)`.

## Blockers

- None in the live scope for group `b`.
