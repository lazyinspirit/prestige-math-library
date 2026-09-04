# frontier-29 · Alpha group `b` · Step 3 scaffold review

Group `b` owns batches `3`, `13`, and `14` in
`research/frontier-29-alpha-groups.json`:

- CA-14 `henselian-rings-and-equicharacteristic-cohen-structure`
- AV-1 `affine-algebraic-sets-and-coordinate-rings`
- AV-9 `presheaves-sheaves-stalks-and-sheafification`

For these owned pairs I read the current:

- `CLAUDE.md`, `README.md`, `SCHEMA.md`, and `WORKFLOW.md`
- `research/frontier-29-batch-3.pages.json`,
  `research/frontier-29-batch-3.coverage.json`,
  `research/frontier-29-batch-3.notes.md`
- `research/frontier-29-batch-13.pages.json`,
  `research/frontier-29-batch-13.coverage.json`,
  `research/frontier-29-batch-13.notes.md`
- `research/frontier-29-batch-14.pages.json`,
  `research/frontier-29-batch-14.coverage.json`,
  `research/frontier-29-batch-14.notes.md`
- the live `research/plan-spec.json`
- the controlling design sections in
  `research/plan-commutative-algebra-track.md` (`CA-14` at lines `1184-1241`
  and `3626-3668`) and `research/plan-algebraic-geometry-track.md`
  (`AV-1` at lines `91-147`, `AV-2` at lines `152-238`,
  `AV-9` at lines `545-602`, and `AV-10` at lines `603-695`)

Checks run on Tuesday, September 1, 2026:

- `node tools/scope-decisions.mjs refresh --run frontier-29 --group b`
  - initial result: `scope-decisions: b: 25 decline(s), 25 pending`
- `node tools/coverage-checklist.mjs research/frontier-29-batch-3.coverage.json research/frontier-29-batch-13.coverage.json research/frontier-29-batch-14.coverage.json --require-destination`
  - result: `coverage-checklist: 3 page(s), 170 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-3.pages.json research/frontier-29-batch-13.pages.json research/frontier-29-batch-14.pages.json`
  - result: `content-policy: 115 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-3.coverage.json`
  - result: `source-fetch-check: 5/5 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-13.coverage.json`
  - result: `source-fetch-check: 2/2 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-14.coverage.json`
  - result: `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/validate-plan.mjs /tmp/frontier-29-alpha-b-spliced-plan.json`
  - result: pass, ending with `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 656 page(s) with item lists.`
- focused closure audit over the three owned A/B pairs after splicing the live batch manifests into `research/plan-spec.json`
  - result: `0` same-page order defects, `0` foreign B-page dependencies, `0` unresolved item ids in the owned pair manifests
- `node tools/scope-decisions.mjs check --run frontier-29 --group b`
  - final result: `scope-decisions: 25 current decline(s), 0 error(s)`

## Scope receipt

`research/frontier-29-alpha-b-scope-decisions.json` is current.

All `25` current decline rows resolve as `stands`.

- batch `13`: `5` exact deferments to `morphisms-local-rings-and-rational-maps-of-affine-varieties` and `5` honest out-of-scope exclusions
- batch `14`: `9` exact deferments to `sheaf-operations-exactness-ringed-spaces-and-module-pullback` and `6` honest out-of-scope example exclusions

The destination pages exist on current disk and are the immediate next A pages
in plan order:

- `morphisms-local-rings-and-rational-maps-of-affine-varieties` at `366.043`
  after `affine-algebraic-sets-and-coordinate-rings` at `366.041`
- `sheaf-operations-exactness-ringed-spaces-and-module-pullback` at `366.059`
  after `presheaves-sheaves-stalks-and-sheafification` at `366.057`

No current decline row still needs an owner-routed destination decision.

## Local repair

One owned scaffold needed a direct Step 3 repair in
`research/frontier-29-batch-3.pages.json` and
`research/frontier-29-batch-3.notes.md`.

The CA-14 B page still depended on two published example-page leaves:

- `ex-artinian-local-ring-henselian` depended on
  `ex-artinian-truncated-polynomial-ring`
- `ex-localised-integers-not-henselian` depended on
  `ex-the-local-ring-z-at-p-and-its-residue-field`

That was not harmless. After splicing the batch manifests into the live plan,
`validate-plan` reported two `[b-leaf]` failures and one
`[undeclared-prereq]` on
`the-field-of-fractions-and-localisation-examples`.

I repaired the batch in scope by replacing those foreign B-page dependencies
with authorable local or published A-page support only:

- the Artinian witness now works directly in `k[x]/(x^n)` via
  `cor-artinian-local-henselian-via-nilpotent-maximal-ideal`,
  `def-polynomial-ring-over-a-commutative-ring`, and `def-quotient-ring`
- the non-Henselian localization witness is now fixed explicitly at
  `\mathbb Z_{(7)}` with `T^2-2`, using
  `thm-localisation-at-a-prime-is-local`,
  `cor-residue-field-of-a-localisation-at-a-prime`, and
  `thm-z-mod-p-is-a-field`

This changed no page id, reading order, source routing, or scope boundary.
It only removed forbidden foreign-example dependencies from the current
manifest.

## Pair verdicts

### `henselian-rings-and-equicharacteristic-cohen-structure` — `sufficient`

This pair is sufficient after the direct repair. The A page has `39` items and
the B page `9`, so no split is owed.

The design/spec prerequisite mismatch remains recorded but nonfatal on current
bytes. The repaired spliced-plan audit found no remaining same-page order
defect, undeclared prerequisite, foreign B-page dependency, or unresolved item
id in the CA-14 pair. The source harvest is also current enough for authoring:
`5/5` recorded source rows are fetch-verified in check mode.

The retained route is coherent: the Hensel-lifting decomposition is explicit,
the coefficient-field proof is broken into the separable/transcendental/purely
inseparable branches the addendum requires, the formal-power-series seam is
kept honest, and the mixed-characteristic theorem remains a non-load-bearing
boundary remark.

### `affine-algebraic-sets-and-coordinate-rings` — `sufficient`

This pair is breadth-sound on current bytes: `22` A-page items and `7` B-page
items.

The live manifest, notes, and coverage agree on the intended AV-1 route:
classical affine algebraic sets, the ideal/variety correspondence, coordinate
rings, principal opens, finite irreducible decomposition, and the reducedness
boundary. The odd spec prerequisite on
`chern-and-pontryagin-classes-by-splitting-and-complexification-examples`
remains drift, not a current authoring blocker; the spliced-plan validation and
closure audit found no hidden dependency defect in the pair itself.

The five deferred rows all have an exact later home on AV-2, and the five
out-of-scope rows are genuine exclusions rather than missing load-bearing
results. The only seam to preserve is the existing one in the notes: the
coordinate-duality item stays the AV-1 object-side preview, with the morphism
completion on AV-2.

### `presheaves-sheaves-stalks-and-sheafification` — `sufficient`

This pair is also sufficient on current bytes: `29` A-page items and `9` B-page
items.

The live route matches the AV-9 design boundary: presheaves, separatedness,
sheaves, stalks, the etale-space bridge, plus/double-plus sheafification,
stalk preservation, basis checking, and image sheafification now; exactness,
ringed spaces, direct/inverse image, and module pullback later on AV-10.

The spec/design prerequisite wording mismatch is nonfatal on current bytes.
Every deferred source row points to the exact next page that owns that later
material, and the out-of-scope examples are extra witnesses outside the chosen
B-page set, not missing prerequisites. The etale-space/local-homeomorphism seam
is the sharpest authoring step, but the current notes and source harvest keep
it within the retained AV-9 route rather than leaving a missing theorem.

## Outcome

All three owned A pages are sufficient for authoring on the current Tuesday,
September 1, 2026 bytes:

- `henselian-rings-and-equicharacteristic-cohen-structure`
- `affine-algebraic-sets-and-coordinate-rings`
- `presheaves-sheaves-stalks-and-sheafification`

`research/frontier-29-alpha-b-step3-verdicts.json` records all three pages as
`sufficient`.
