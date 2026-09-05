# frontier-30 · Alpha group `g` · Step 3 scaffold recheck

Date checked: Saturday, September 5, 2026 (Australia/Sydney).

Scope owned by this dispatch: batches `14` and `18` only, covering:

- `from-generalized-niceness-to-erdos-hajnal`
- `property-star-and-comb-outcomes`
- `morse-functions-critical-values-and-genericity`

I re-checked the current disk state against:

- `research/frontier-30-alpha-g-step3-scaffold-review.md`
- `research/frontier-30-batch-14.notes.md` and `research/frontier-30-batch-18.notes.md`, including each `## Step-3 fix pass`
- `research/frontier-30-batch-14.pages.json` and `research/frontier-30-batch-18.pages.json`
- `research/frontier-30-batch-14.coverage.json` and `research/frontier-30-batch-18.coverage.json`
- the live `research/plan-spec.json`
- `research/frontier-30-alpha-g-scope-decisions.json`
- `research/frontier-30-alpha-g-step3-verdicts.json`

Checks run on current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-30 --group g`
  - `scope-decisions: g: 3 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-30 --group g`
  - `scope-decisions: 3 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-14.coverage.json research/frontier-30-batch-18.coverage.json`
  - `coverage-checklist: 3 page(s), 72 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-14.coverage.json research/frontier-30-batch-18.coverage.json`
  - `source-fetch-check: 6/6 source(s) fetch-verified`
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-14.pages.json research/frontier-30-batch-18.pages.json`
  - `content-policy: 38 scoped item(s), 0 error(s), 0 warning(s)`
- spliced the six owned pages into `/tmp/frontier-30-alpha-g-spliced-plan.json`
- `node tools/validate-plan.mjs /tmp/frontier-30-alpha-g-spliced-plan.json`
  - passed, ending with `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 704 page(s) with item lists.`

## Scope receipt

The refreshed scope ledger is current on disk. No new pending row appeared.

Batch `14` still has no scope-decision rows.

All three current rows still belong to batch `18` and still resolve exactly as recorded:

- `Corollary 3.51.` remains `stands` as an honest out-of-scope decline.
- `3.5 Intersection theory` remains `stands` as an honest out-of-scope decline.
- `Corollary 3.30.` remains `owner-decision` as a deferred routing row with no current canonical destination fixed by DT-2.

No current row requires a new repair, a scope expansion, or a reading-order change.

## Dispositions

### Finding: `from-generalized-niceness-to-erdos-hajnal`

Disposition: `sufficient`.

Evidence:

- current manifest size is `3` A-page items and `3` B-page items
- batch `14` notes record a Step-3 no-op for this pair, and the group review still marks it authorable as written
- the current manifest still matches the no-drift Step-0 ruling and the batch brief: order `429/430`, prerequisite `generalized-niceness-and-reduction-outcomes`, and no added page dependency outside the current closure
- source support remains current enough for authoring: the shared batch-14 coverage passes with three fetch-verified sources and no missing destinations
- the spliced-plan validation found no unresolved ids, forward references, same-page order defect, or forbidden B-page dependency

Changed scaffold record: none.

### Finding: `property-star-and-comb-outcomes`

Disposition: `sufficient`.

Evidence:

- current manifest size is `8` A-page items and `4` B-page items
- batch `14` notes record a Step-3 no-op for this pair, and the group review still marks it authorable as written
- the current manifest still matches the no-drift Step-0 ruling and the batch brief: order `431/432`, prerequisite `generalized-niceness-and-reduction-outcomes`, and no added page dependency outside the current closure
- source support remains current enough for authoring: the shared batch-14 coverage passes with three fetch-verified sources and no missing destinations
- the spliced-plan validation found no unresolved ids, forward references, same-page order defect, or forbidden B-page dependency

Changed scaffold record: none.

### Finding: `morse-functions-critical-values-and-genericity`

Disposition: `sufficient`.

Evidence:

- current manifest size is `15` A-page items and `5` B-page items
- batch `18` notes record `G18-1` as closed on Saturday, September 5, 2026, and the current manifest still reflects that repair: none of the B-page witnesses depend on the published B-only item `ex-height-on-a-torus-with-four-critical-points`
- the two additional batch-18 intra-order repairs named in the Step-3 fix pass are also still present on current bytes: `thm-morse-functions-are-dense-by-relative-jet-transversality` precedes `thm-morse-functions-form-a-residual-subset`, and `lem-properness-survives-a-controlled-locally-finite-perturbation` precedes `prop-proper-morse-exhaustions-exist-on-smooth-manifolds`
- the refreshed scope ledger has `0` pending rows; its three current batch-18 declines still match the DT-2 route exactly and do not block authoring
- source support remains current enough for authoring: the combined coverage passes with six fetch-verified sources total, including the four batch-18 sources
- the spliced-plan validation found no unresolved ids, forward references, same-page order defect, or forbidden B-page dependency

Changed scaffold record: none.

## Verdict file

`research/frontier-30-alpha-g-step3-verdicts.json` already matches the verified
current bytes:

- `from-generalized-niceness-to-erdos-hajnal` -> `sufficient`
- `property-star-and-comb-outcomes` -> `sufficient`
- `morse-functions-critical-values-and-genericity` -> `sufficient`

No verdict-content change was required after recheck.
