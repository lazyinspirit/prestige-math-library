# frontier-27 · Alpha group `b` · Step 3 recheck

Group `b` owns batches `1`, `5`, and `6` in
`research/frontier-27-alpha-groups.json`: CA-10
`krull-dimension-and-height-theorems`, MA-14
`closed-monoidal-categories-and-the-internal-hom`, and HA-4
`long-exact-sequences-in-homology`.

I re-read the governing task files, then verified the current Monday, August
31, 2026 bytes in:

- `research/frontier-27-alpha-b-step3-scaffold-review.md`
- `research/frontier-27-batch-1.notes.md` (`## Step-3 fix pass`)
- `research/frontier-27-batch-5.notes.md` (`## Step-3 fix pass`)
- `research/frontier-27-batch-6.notes.md` (`## Step-3 fix pass`)
- `research/frontier-27-batch-1.pages.json`
- `research/frontier-27-batch-5.pages.json`
- `research/frontier-27-batch-6.pages.json`
- `research/frontier-27-batch-1.coverage.json`
- `research/frontier-27-batch-5.coverage.json`
- `research/frontier-27-batch-6.coverage.json`
- `research/plan-spec.json`
- `research/frontier-27-alpha-b-scope-decisions.json`
- `research/frontier-27-alpha-b-step3-verdicts.json`

Checks run on the current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-27 --group b`
  - result: `scope-decisions: b: 7 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-27 --group b`
  - result: `scope-decisions: 7 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-27-batch-1.coverage.json research/frontier-27-batch-5.coverage.json research/frontier-27-batch-6.coverage.json --require-destination`
  - result: `coverage-checklist: 3 page(s), 117 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-27-batch-1.pages.json research/frontier-27-batch-5.pages.json research/frontier-27-batch-6.pages.json`
  - result: `content-policy: 126 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-1.coverage.json`
  - result: `source-fetch-check: 6/6 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-5.coverage.json`
  - result: `source-fetch-check: 5/5 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-6.coverage.json`
  - result: `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - result: pass; the command ends `OK` and reports only the repository's
    standing `redundant-prereq` advisories
- focused group-`b` dependency audit over the current A-page manifests
  - result: `0` unhomed deps and `0` foreign B-page deps from A-page items

No newly pending scope row appeared after refresh, so no additional
scope-decision resolution was required.

## Dispositions

1. Batch `1` finding `7cc1a9396270f46031ca0ec947036cd6c87ee921f03d174548d076c5bc916cc4`: **closed**.
   The deferment still stands on current disk. The live coverage row in
   `research/frontier-27-batch-1.coverage.json` still defers `The
   formal-power-series half of the theorem on polynomial and power-series
   extensions` to `formal-power-series`, and the live A-page manifest in
   `research/frontier-27-batch-1.pages.json` still owns only the polynomial
   half through `thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring`.
   The current manifest counts remain `37` A-page items and `7` B-page items,
   the batch passes `source-fetch-check: 6/6 source(s) fetch-verified`, and no
   further scaffold edit is owed.

2. Batch `1` stale-note pushback: **closed**.
   The pushback is correct on current bytes. The old fetch/liveness prose in
   `research/frontier-27-batch-1.notes.md` is historical validation evidence,
   not a current scaffold defect, and the current batch readiness is decided by
   today's reruns: `coverage-checklist` passes for the batch, `source-fetch-check`
   passes `6/6`, and the combined manifest checks are clean. No manifest or
   coverage change is warranted just to rewrite historical troubleshooting
   prose.

3. Batch `5` finding `1`: **closed**.
   The accepted dependency repair still stands on current disk. The live
   `research/frontier-27-batch-5.pages.json` record for
   `thm-cartesian-closed-preorders-have-relative-implications` depends on
   `def-products-and-coproducts`, not on the foreign B-page item
   `ex-products-in-a-poset-are-infima`. The current manifest counts remain
   `33` A-page items and `6` B-page items, the group-local dependency audit
   finds `0` foreign B-page deps from A-page items, and the batch passes
   `source-fetch-check: 5/5 source(s) fetch-verified`. No further manifest edit
   is owed.

4. Batch `5` finding `2`: **closed**.
   The second accepted dependency repair also still stands on current disk. The
   live `research/frontier-27-batch-5.pages.json` record for
   `fs-a-subobject-classifier-is-any-object-representing-monomorphisms` now
   closes from `def-subobject-classifier`,
   `def-subobject-and-quotient-object`, and
   `thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence`,
   with no dependency on the foreign B-page counterexample
   `cex-two-monomorphisms-representing-the-same-subobject`. The five MA-14
   out-of-scope coverage rows remain present and justified in
   `research/frontier-27-alpha-b-scope-decisions.json`, so the repair did not
   conceal a remaining scope hole.

5. Batch `6` finding `3`: **closed**.
   The accepted dependency repair still stands on current disk. The live
   `research/frontier-27-batch-6.pages.json` record for
   `ex-naturality-of-a-connecting-map-under-a-map-of-coefficient-sequences`
   depends on `thm-naturality-of-the-homology-connecting-morphism` and
   `prop-elementwise-formula-for-the-connecting-map-in-module-categories`, not
   on the foreign B-page example
   `ex-the-connecting-morphism-computed-for-a-short-exact-sequence-of-abelian-groups`.
   The current manifest counts remain `35` A-page items and `8` B-page items,
   the plan still validates cleanly with the live prerequisite pair
   `mapping-cones-cylinders-and-chain-triangles-examples` and
   `the-diagram-lemmas-in-an-abelian-category`, and the batch passes
   `source-fetch-check: 3/3 source(s) fetch-verified`.

6. Group `b` scope decisions: **closed**.
   After refresh and check,
   `research/frontier-27-alpha-b-scope-decisions.json` still carries `7`
   current decline rows and `0` pending rows, all resolved as `stands`. That
   current state matches the live coverage rows: batch `1` still defers the
   formal-power-series half to `formal-power-series`; batch `5` still keeps its
   five MA-14 boundary exclusions out of scope; and batch `6` still defers the
   exact-triangle mnemonic to `triangulated-categories`. No scope-boundary
   change is owed.

## Outcome

All three owned A pages remain sufficient on the current bytes, and
`research/frontier-27-alpha-b-step3-verdicts.json` already matches that
verified state:

- `krull-dimension-and-height-theorems` -> `sufficient`
- `closed-monoidal-categories-and-the-internal-hom` -> `sufficient`
- `long-exact-sequences-in-homology` -> `sufficient`

No verdict-byte change was required in this recheck pass.
