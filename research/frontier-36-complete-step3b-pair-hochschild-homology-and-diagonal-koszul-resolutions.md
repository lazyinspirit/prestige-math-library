# Step 3b dispatch report — Hochschild homology and diagonal Koszul resolutions

Run: `frontier-36-complete`  
Batch: 23  
Pair: `hochschild-homology-and-diagonal-koszul-resolutions` / `hochschild-homology-and-diagonal-koszul-resolutions-examples`

## Completed items

All 18 assigned items were audited, authored, contracted, checked, and recorded in the required dependency order:

1. `def-enveloping-algebra-and-bimodule-module-dictionary`
2. `def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring`
3. `def-two-sided-bar-resolution-of-an-associative-algebra`
4. `lem-bar-differential-and-augmentation-form-a-complex`
5. `lem-polynomial-diagonal-differences-form-a-regular-sequence`
6. `def-hochschild-chain-complex-of-a-bimodule`
7. `thm-the-diagonal-koszul-complex-resolves-the-polynomial-ring`
8. `thm-two-sided-bar-complex-is-an-enveloping-projective-resolution`
9. `lem-hochschild-chains-are-bar-tensor-chains`
10. `prop-hochschild-degree-zero-is-bimodule-coinvariants`
11. `thm-hochschild-homology-is-tor-over-the-enveloping-algebra`
12. `ex-hochschild-homology-of-the-ground-field`
13. `thm-hochschild-homology-is-functorial-and-has-coefficient-long-exact-sequences`
14. `thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex`
15. `cor-polynomial-diagonal-bimodule-hochschild-homology`
16. `ex-one-variable-diagonal-koszul-computation`
17. `ex-one-variable-twisted-bimodule-hochschild-computation`
18. `ex-two-variable-diagonal-koszul-signs`

Both page carriers are authored at `library/homological-algebra/hochschild-homology-and-diagonal-koszul-resolutions.md` and `library/homological-algebra/hochschild-homology-and-diagonal-koszul-resolutions-examples.md`. The 14 A items and four B examples remain in manifest and coverage order.

## Final checks

- Explicit-path precheck over all 18 owned item paths: 15 proof-bearing items checked, 0 failures. The three definitions have no proof body for this checker.
- Explicit-path rendering over all 18 item files and both page files: 20 files, no math, YAML, or renderer errors.
- `node tools/content-policy.mjs research/frontier-36-complete-batch-23.pages.json`: 18 scoped items, 0 errors, 0 warnings.
- Strict batch proof contracts: 18/18 items, 0 errors, 0 warnings.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-36-complete`: passed; batch 23's cross-batch input remains `[]`.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0, no hard errors. It reports that `hochschild-homology-and-diagonal-koszul-resolutions` directly requires `tor-flatness-and-global-dimension`, although that page is already reached through `graded-bimodules-and-tensor-functors`; retain this redundant-prerequisite mismatch for Step 4 reconciliation. The plan lists 20,501 new items and finds 20,500 item files; the absent ID is `ex-conway-base-13-function` on `monotone-functions-and-discontinuities-examples` (order 152, category `real-analysis`). It is outside batch 23 and absent from this run's batch manifests; route its planned/file mismatch to the owner for reconciliation.
- `node tools/item-dependency-levels.mjs check --run frontier-36-complete` passed once after the local manifest repair (925 items, 60 pages, maximum level 18). The final rerun is blocked by malformed sibling input `research/frontier-36-complete-batch-18.pages.json`, line 526: the `axiom_audit` property is followed by `dependency_level` without a comma in `cor-normalized-positive-type-functions-correspond-to-pointed-cyclic-representations` on `unitary-representations-positive-type-and-gns`. This is outside batch 23; it was not edited. The owner of that pair must add the missing comma and rerun the run-wide dependency-level check. The isolated batch-23 dependency-level recomputation passes for all 18 items, maximum level 8.

Batch 23's cross-batch dependency input remains `[]`: no new dependency to another in-run batch was added. No new supplier item was created. The final two-variable example gained direct dependencies on the existing `def-enveloping-algebra-and-bimodule-module-dictionary` and published `def-axiom-of-choice`; its coefficient hypothesis is explicitly `k`-central and its grading claim is limited to the graded regular-coefficient case. The pair's refreshed scope decision is `sufficient`; all item decisions are current and confidence 1.

## Step 4 reconciliation and open obligations

- Pre-splice design item HA-22.13 for `thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex` said “For every R-bimodule M,” while the local Hochschild-chain and enveloping definitions require a `k`-central bimodule. The assigned polynomial theorem was narrowed to `k`-central coefficients, and the enveloping dictionary is declared directly. Reconcile the plan/prose claim in Step 4; do not broaden the local theorem without supplying the missing hypotheses and definitions.
- `validate-plan` also flags the redundant direct A-page prerequisite above. Reconcile the shared plan in Step 4.
- No potentially defective published item was identified among the audited direct suppliers. No published content or `published-consumer-supplier-ledger.md` entry was changed.
- The run-wide dependency-level check remains open pending the batch-18 JSON repair. All batch-23 item and page checks listed above passed; the current pair scope and all 18 confidence-1 item decisions are hash-current.
- The owner-authoring direction had no unresolved obligation specific to this pair. No owner-held scope or item escalation remains for batch 23.
