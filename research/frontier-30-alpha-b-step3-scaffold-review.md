# frontier-30 · Alpha group `b` · Step 3 scaffold review

Group `b` owns batches `2`, `12`, and `13` in
`research/frontier-30-alpha-groups.json`:

- CA-15 `zariski-topology-on-prime-spectra`
- AV-2 `morphisms-local-rings-and-rational-maps-of-affine-varieties`
- AV-10 `sheaf-operations-exactness-ringed-spaces-and-module-pullback`

For these owned pairs I read the current:

- `CLAUDE.md`, `README.md`, `SCHEMA.md`, and `WORKFLOW.md`
- `research/frontier-30-batch-2.pages.json`,
  `research/frontier-30-batch-2.coverage.json`,
  `research/frontier-30-batch-2.notes.md`
- `research/frontier-30-batch-12.pages.json`,
  `research/frontier-30-batch-12.coverage.json`,
  `research/frontier-30-batch-12.notes.md`
- `research/frontier-30-batch-13.pages.json`,
  `research/frontier-30-batch-13.coverage.json`,
  `research/frontier-30-batch-13.notes.md`
- the live `research/plan-spec.json`
- the controlling design sections in
  `research/plan-commutative-algebra-track.md` for CA-15 (the main block at
  lines `1244-1336` and the additions block at lines `3670-3745`) and
  `research/plan-algebraic-geometry-track.md` for AV-2 (lines `152-258`) and
  AV-10 (lines `603-645`)

Checks run on Saturday, September 5, 2026, in Australia/Sydney local time:

- `node tools/scope-decisions.mjs refresh --run frontier-30 --group b`
  - initial result: `scope-decisions: b: 52 decline(s), 52 pending`
- `node tools/coverage-checklist.mjs research/frontier-30-batch-2.coverage.json research/frontier-30-batch-12.coverage.json research/frontier-30-batch-13.coverage.json --require-destination`
  - result: `coverage-checklist: 3 page(s), 201 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-2.pages.json research/frontier-30-batch-12.pages.json research/frontier-30-batch-13.pages.json`
  - result: `content-policy: 103 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-2.coverage.json`
  - result: `source-fetch-check: 8/8 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-12.coverage.json`
  - result: `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-13.coverage.json`
  - result: `source-fetch-check: 11/11 source(s) fetch-verified`
- `node tools/validate-plan.mjs /tmp/frontier-30-alpha-b-spliced-plan.json`
  - result: pass, ending with `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 704 page(s) with item lists.`
- focused closure audit over the six owned pages after splicing the live batch manifests into `research/plan-spec.json`
  - result: `0` unresolved item ids, `0` same-page order defects, `0` forbidden foreign B-page dependencies, and `0` forward references
- `node tools/scope-decisions.mjs check --run frontier-30 --group b`
  - final result: `scope-decisions: 52 current decline(s), 0 error(s)`

## Scope receipt

`research/frontier-30-alpha-b-scope-decisions.json` is current.

All `52` current decline rows resolve as `stands`.

- batch `2`: `2` exact deferments to `zariski-topology-on-prime-spectra-examples`
  and `4` honest out-of-scope exclusions
- batch `12`: `5` exact deferments to
  `morphisms-local-rings-and-rational-maps-of-affine-varieties-examples`,
  `projective-algebraic-sets-projective-morphisms-and-cones`, and
  `products-segre-and-veronese-embeddings-and-grassmannians`, plus `6`
  honest out-of-scope exclusions
- batch `13`: `16` exact deferments to
  `affine-schemes-and-the-structure-sheaf`,
  `schemes-subschemes-and-morphisms-locally-of-finite-type`, and
  `quasi-coherent-and-coherent-sheaves-and-vector-bundles`, plus `19`
  honest out-of-scope exclusions

Every deferred destination already exists on current disk and remains later in
plan order than its source page:

- `zariski-topology-on-prime-spectra-examples` at `256.002` after
  `zariski-topology-on-prime-spectra` at `256.001`
- `morphisms-local-rings-and-rational-maps-of-affine-varieties-examples` at
  `366.044` after `morphisms-local-rings-and-rational-maps-of-affine-varieties`
  at `366.043`
- `projective-algebraic-sets-projective-morphisms-and-cones` at `366.045`
  after `morphisms-local-rings-and-rational-maps-of-affine-varieties` at
  `366.043`
- `products-segre-and-veronese-embeddings-and-grassmannians` at `366.047`
  after `morphisms-local-rings-and-rational-maps-of-affine-varieties` at
  `366.043`
- `affine-schemes-and-the-structure-sheaf` at `366.061` after
  `sheaf-operations-exactness-ringed-spaces-and-module-pullback` at `366.059`
- `schemes-subschemes-and-morphisms-locally-of-finite-type` at `366.063`
  after `sheaf-operations-exactness-ringed-spaces-and-module-pullback` at
  `366.059`
- `quasi-coherent-and-coherent-sheaves-and-vector-bundles` at `366.075` after
  `sheaf-operations-exactness-ringed-spaces-and-module-pullback` at `366.059`

No current decline row needs an owner-routed destination choice, new page, or
reading-order change.

## Local repair

No new Step-3 scaffold repair was required in the owned batch artifacts.

The only real in-scope manifest defect recorded in the owned batch notes is the
earlier batch-2 cleanup of an external `separation-axioms` dependency and a
forbidden foreign B-page dependency. Those repairs are already present on
current disk, and the focused spliced-plan audit found no remaining local
closure defect in any of the six owned pages.

## Pair verdicts

### `zariski-topology-on-prime-spectra` — `sufficient`

This pair is sufficient on current bytes: `28` A-page items and `6` B-page
items, so no split is owed.

The CA-15 scaffold keeps the intended topology-facing route intact: topological
definitions first, then the Zariski topology and distinguished-open basis,
quotient/localisation as topological maps, spectrum compactness in the
library's non-Hausdorff sense, specialization and closed points, irreducible
closed sets and minimal primes, Noetherianity, connectedness via idempotents,
specialization-closed support, and dense closed points in affine finite-type
spectra. The spec/design prerequisite mismatch is nonfatal on current bytes:
the manifest depends only on already-published commutative-algebra interfaces,
and the spliced-plan audit found no hidden dependency or ordering defect.

The retained deferments are exact rather than missing support. The two deferred
rows are companion-example material, and the four out-of-scope rows are honest
special cases or extra examples beyond the chosen page contract. Source support
is current enough for authoring: `8/8` recorded source URLs are fetch-verified
in the coverage ledger.

### `morphisms-local-rings-and-rational-maps-of-affine-varieties` — `sufficient`

This pair is also sufficient on current bytes: `23` A-page items and `7`
B-page items.

The live scaffold matches the AV-2 route after the design-authorized
normalizations recorded in the batch notes. It stays honestly affine, adds the
missing local definition of affine opens, places the global-regular-functions
theorem before the morphism anti-equivalence where the dependency graph
requires it, and defers the graph theorem exactly where the design says to wait
for products on AV-4. The projective-space witnesses were normalized away
without leaving a missing current theorem.

The spec/design prerequisite drift is nonfatal on current bytes. The manifest
uses the already-published localization and fraction-field interfaces it
actually cites, the five deferred rows all land on existing later pages or the
companion B page, and the six out-of-scope rows are broader or auxiliary
material rather than missing authoring support. Source support is current
enough for authoring: `3/3` recorded source URLs are fetch-verified.

### `sheaf-operations-exactness-ringed-spaces-and-module-pullback` — `sufficient`

This pair is sufficient on current bytes as well: `30` A-page items and `9`
B-page items.

The live scaffold respects the AV-10 design boundary. It builds direct and
inverse image first, then kernel/cokernel and abelian-category machinery, then
stalkwise exactness, extension by zero, ringed and locally ringed spaces,
module pullback and its adjunction, and finally gluing. The two ordering fixes
recorded in the batch notes are present and coherent: exactness comes before
extension-by-zero exactness, and the abelian-sheaf theorem explicitly carries
the module-sheaf analogue once instead of duplicating it.

The sixteen deferred rows all point to existing later pages that actually own
the affine-scheme, subscheme, or quasi-coherent/coherent material, and the
nineteen out-of-scope rows are honest extra generality or bookkeeping lemmas
that the current route does not need. There is no design/spec drift here, and
the current coverage ledger remains source-sufficient for authoring: `11/11`
recorded source URLs are fetch-verified.

## Outcome

All three owned A pages are sufficient for authoring on the current Saturday,
September 5, 2026 bytes:

- `zariski-topology-on-prime-spectra`
- `morphisms-local-rings-and-rational-maps-of-affine-varieties`
- `sheaf-operations-exactness-ringed-spaces-and-module-pullback`

`research/frontier-30-alpha-b-step3-verdicts.json` records all three pages as
`sufficient`.
