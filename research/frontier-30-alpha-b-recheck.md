# frontier-30 · Alpha group `b` · Step 3 scaffold recheck

Date checked: Saturday, September 5, 2026 (Australia/Sydney).

Scope owned by this dispatch: batches `2`, `12`, and `13` only, covering:

- `zariski-topology-on-prime-spectra`
- `morphisms-local-rings-and-rational-maps-of-affine-varieties`
- `sheaf-operations-exactness-ringed-spaces-and-module-pullback`

I re-checked the current disk state against:

- `research/frontier-30-alpha-b-step3-scaffold-review.md`
- `research/frontier-30-batch-2.notes.md`, `research/frontier-30-batch-12.notes.md`, and `research/frontier-30-batch-13.notes.md`, including each `## Step-3 fix pass`
- `research/frontier-30-batch-2.pages.json`, `research/frontier-30-batch-12.pages.json`, and `research/frontier-30-batch-13.pages.json`
- `research/frontier-30-batch-2.coverage.json`, `research/frontier-30-batch-12.coverage.json`, and `research/frontier-30-batch-13.coverage.json`
- the live `research/plan-spec.json`
- `research/frontier-30-alpha-b-scope-decisions.json`
- `research/frontier-30-alpha-b-step3-verdicts.json`

Checks run on current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-30 --group b`
  - `scope-decisions: b: 52 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-30 --group b`
  - `scope-decisions: 52 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-30-batch-2.coverage.json research/frontier-30-batch-12.coverage.json research/frontier-30-batch-13.coverage.json --require-destination`
  - `coverage-checklist: 3 page(s), 201 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-2.pages.json research/frontier-30-batch-12.pages.json research/frontier-30-batch-13.pages.json`
  - `content-policy: 103 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-2.coverage.json`
  - `source-fetch-check: 8/8 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-12.coverage.json`
  - `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-13.coverage.json`
  - `source-fetch-check: 11/11 source(s) fetch-verified`
- spliced the six owned pages into `/tmp/frontier-30-alpha-b-spliced-plan.json`
- `node tools/validate-plan.mjs /tmp/frontier-30-alpha-b-spliced-plan.json`
  - passed, ending with `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 704 page(s) with item lists.`

## Scope receipt

The refreshed scope ledger is current on disk. No new pending row appeared.

All current declines still stand:

- batch `2`: `6` total = `2` deferred + `4` out-of-scope
- batch `12`: `11` total = `5` deferred + `6` out-of-scope
- batch `13`: `35` total = `16` deferred + `19` out-of-scope

The deferred destinations named in `research/frontier-30-alpha-b-scope-decisions.json`
still exist and still lie later in plan order:

- `zariski-topology-on-prime-spectra-examples` at `256.002`
- `morphisms-local-rings-and-rational-maps-of-affine-varieties-examples` at `366.044`
- `projective-algebraic-sets-projective-morphisms-and-cones` at `366.045`
- `products-segre-and-veronese-embeddings-and-grassmannians` at `366.047`
- `affine-schemes-and-the-structure-sheaf` at `366.061`
- `schemes-subschemes-and-morphisms-locally-of-finite-type` at `366.063`
- `quasi-coherent-and-coherent-sheaves-and-vector-bundles` at `366.075`

No current row requires an owner decision, new page, or reading-order change.

## Dispositions

### Finding: `zariski-topology-on-prime-spectra`

Disposition: `sufficient`.

Evidence:

- current manifest size is `28` A-page items and `6` B-page items
- batch `2` notes record an explicit Step-3 no-op, and the earlier two real manifest repairs remain present on current bytes
- the six standing scope rows still resolve exactly as recorded: `2` deferred companion-example rows and `4` honest out-of-scope rows
- source support remains current enough for authoring: `8/8` recorded source URLs are fetch-verified
- the spliced-plan validation found no unresolved ids, forward references, same-page order defect, or forbidden B-page dependency

Changed scaffold record: none.

### Finding: `morphisms-local-rings-and-rational-maps-of-affine-varieties`

Disposition: `sufficient`.

Evidence:

- current manifest size is `23` A-page items and `7` B-page items
- batch `12` notes record a Step-3 no-op after re-checking all eleven standing decline rows against the current manifest, coverage ledger, design block, and validator state
- the retained five deferred rows still land on existing later pages or the companion B page, and the six out-of-scope rows remain outside the affine-only AV-2 route
- source support remains current enough for authoring: `3/3` recorded source URLs are fetch-verified
- the spliced-plan validation found no unresolved ids, forward references, same-page order defect, or forbidden B-page dependency

Changed scaffold record: none.

### Finding: `sheaf-operations-exactness-ringed-spaces-and-module-pullback`

Disposition: `sufficient`.

Evidence:

- current manifest size is `30` A-page items and `9` B-page items
- batch `13` notes record an explicit Step-3 no-op, with the earlier ordering repairs still present on current bytes
- the sixteen deferred rows still point to existing later scheme pages that own the affine-scheme, subscheme, and quasi-coherent/coherent material, and the nineteen out-of-scope rows remain honest exclusions
- source support remains current enough for authoring: `11/11` recorded source URLs are fetch-verified
- the spliced-plan validation found no unresolved ids, forward references, same-page order defect, or forbidden B-page dependency

Changed scaffold record: none.

## Verdict file

`research/frontier-30-alpha-b-step3-verdicts.json` already matches the verified
current bytes:

- `zariski-topology-on-prime-spectra` → `sufficient`
- `morphisms-local-rings-and-rational-maps-of-affine-varieties` → `sufficient`
- `sheaf-operations-exactness-ringed-spaces-and-module-pullback` → `sufficient`

No verdict-content change was required after recheck.
