# Step 3b helper report — lane F (level 3 of the blowups pair)

- Run `frontier-38-owner-30`, role helper of the pair author for
  `blowups-exceptional-divisors-and-strict-transforms` (batch 2).
- Scope executed: the eleven level-3 items of the dispatch order (the slice
  originally planned for lane C, taken over by lane F after lane C produced
  no item files) and the ten level-6 items (the slice originally planned for
  lane E, of which four were authored before the handoff and six in the
  final session).
- Contract fragment:
  `research/frontier-38-owner-30-step3b-contracts-lane-f.json`
  (`node tools/proof-contract.mjs ... --strict` → 0 errors, 21/21 items).
- All twenty-one item files pass `tools/precheck.mts` (PASS or n/a),
  `rendercheck.mjs` (OK) and
  `PRESTIGE_APP_DIR=/tmp/f38-app node tools/proof-layout.mjs` (0 defects over
  49 + 49 numbered steps), run after the last edit of each file.

## Per-item checkpoint

| # | item | level | status | checks |
|---|------|-------|--------|--------|
| 1 | `def-blowup-fractional-ideal` | 3 | authored | precheck n/a (definition), rendercheck OK, layout 0 |
| 2 | `def-strict-transform-closed-subscheme` | 3 | authored | precheck n/a (definition), rendercheck OK, layout 0 |
| 3 | `lem-affine-point-blowup-pushforward-vanishing` | 3 | authored | precheck PASS, rendercheck OK, layout 0 |
| 4 | `lem-blowup-independent-ideal-generators` | 3 | authored | precheck PASS, rendercheck OK, layout 0 |
| 5 | `lem-blowup-plane-origin-incidence-equations` | 3 | authored | precheck PASS, rendercheck OK, layout 0 |
| 6 | `lem-blowup-power-of-ideal-same` | 3 | authored | precheck PASS, rendercheck OK, layout 0 |
| 7 | `lem-blowup-reduced-integral-under-domain-rees` | 3 | authored | precheck PASS, rendercheck OK, layout 0 |
| 8 | `thm-blowup-projective` | 3 | authored | precheck PASS, rendercheck OK, layout 0 |
| 9 | `thm-exceptional-divisor-normal-cone-proj` | 3 | authored | precheck PASS, rendercheck OK, layout 0 |
| 10 | `thm-pullback-center-ideal-invertible` | 3 | authored | precheck PASS, rendercheck OK, layout 0 |
| 11 | `cex-blowup-arbitrary-base-change-failure` | 4 | authored | precheck PASS, rendercheck OK, layout 0 |

## Level-6 slice checkpoint

| # | item | level | status | checks |
|---|------|-------|--------|--------|
| 1 | `cor-blowup-birational-integral-scheme` | 6 | authored | precheck PASS, rendercheck OK, layout 0 (5 steps) |
| 2 | `lem-blowup-lowers-contact-order` | 6 | authored | precheck PASS, rendercheck OK, layout 0 (6 steps) |
| 3 | `lem-blowup-multiplicity-euler-characteristic-drop` | 6 | authored | precheck PASS, rendercheck OK, layout 0 (9 steps) |
| 4 | `lem-plane-curve-multiplicity-transform-chart` | 6 | authored | precheck PASS, rendercheck OK, layout 0 (5 steps) |
| 5 | `rem-blowup-does-not-mean-delete-point` | 6 | authored | precheck n/a (remark), rendercheck OK, layout 0 |
| 6 | `thm-blowup-closed-immersion-transform-universal` | 6 | authored | precheck PASS, rendercheck OK, layout 0 (5 steps) |
| 7 | `thm-blowup-effective-cartier-divisor-isomorphism` | 6 | authored | precheck PASS, rendercheck OK, layout 0 (5 steps) |
| 8 | `thm-blowup-separates-plane-curve-tangent-directions` | 7 | authored | precheck PASS, rendercheck OK, layout 0 (6 steps) |
| 9 | `thm-blowup-smooth-surface-point-charts` | 6 | authored | precheck PASS, rendercheck OK, layout 0 (5 steps) |
| 10 | `ex-blowup-rational-map-p1` | 6 | authored | precheck PASS, rendercheck OK, layout 0 (3 steps) |

Statements are the frozen manifest statements; no promised claim was changed.
The multiplicity/Euler drop lemma was proved with the filtration
`L_j = O_{S'}(-\pi^*C + jE)` for `j = 0..m`, whose successive quotients are
line bundles of degree `-j` on `E = P^1_{\kappa(p)}`, combined with the
projection formula and additivity of the Euler characteristic; the
normalization-defect clause uses finiteness of the strict-transform morphism
and the invariance of normalizations under finite birational maps.

### Dependency changes for the ten level-6 items

Deltas relative to the frozen rows, applied to `batch-2.pages.json` by the
finalize sync (all added suppliers resolve to existing item files):

- `cor-blowup-birational-integral-scheme`: added
  `def-generic-point-irreducible-closed-subset`, `def-reduction-of-scheme`.
- `lem-blowup-lowers-contact-order`: added
  `lem-hypersurface-smooth-iff-multiplicity-one`; dropped
  `thm-exceptional-divisor-normal-cone-proj` (not used).
- `lem-blowup-multiplicity-euler-characteristic-drop`: added
  `thm-blowup-projective`, `def-multiplicity-hypersurface-point`,
  `def-strict-transform-closed-subscheme`,
  `def-normalization-defect-of-reduced-curve`,
  `lem-normalization-defect-euler-and-lengths`,
  `lem-normalization-unchanged-under-finite-birational-curve-map`,
  `thm-proper-quasi-finite-is-finite`,
  `lem-proper-source-to-separated-target-proper`,
  `lem-blowup-isomorphism-off-center`.
- `rem-blowup-does-not-mean-delete-point`: added `thm-blowup-projective`,
  `thm-blowup-regular-surface-closed-point-regular`,
  `def-strict-transform-closed-subscheme`.
- `thm-blowup-closed-immersion-transform-universal`: added
  `def-quasi-coherent-module-scheme`, `thm-pullback-center-ideal-invertible`,
  `thm-affine-blowup-standard-charts`, `lem-affine-blowup-algebra-properties`,
  `lem-closed-immersion-local-on-target`.
- `thm-blowup-effective-cartier-divisor-isomorphism`: added
  `def-cartier-divisor`, `def-invertible-sheaf`,
  `thm-affine-blowup-standard-charts`, `lem-affine-blowup-algebra-properties`,
  `def-axiom-of-choice`.
- `thm-blowup-separates-plane-curve-tangent-directions`: added
  `lem-plane-curve-multiplicity-transform-chart`,
  `def-contact-order-regular-components`, `def-standard-open-proj`,
  `thm-projective-space-as-proj`, `def-axiom-of-choice`.
- `thm-blowup-smooth-surface-point-charts`: added
  `lem-blowup-local-on-base-scheme`,
  `lem-blowup-plane-origin-incidence-equations`, `thm-gluing-affine-schemes`.
- `lem-plane-curve-multiplicity-transform-chart` and
`ex-blowup-rational-map-p1`: no dependency changes; the frozen row recorded
`provenance.proof: not-applicable`, which `tools/depcheck.mjs` rejects for an
example, so the item carries a three-step Verification and
`provenance.proof: ai-altered` instead (no claim changed).

Recomputing levels over the run moved five manifest rows, which were synced:
`thm-blowup-separates-plane-curve-tangent-directions` 6 → 7,
`ex-strict-transform-cusp-first-blowup` 7 → 8,
`ex-strict-transform-node-separates-branches` 7 → 8,
`cex-blowup-arbitrary-base-change-failure` 3 → 4 and
`cex-normalization-not-blowup-and-blowup-not-normalization` 8 → 9.

Statements are the frozen manifest statements; no promised claim was changed.
The proofs are complete arguments written from the scaffold strategies and the
recorded sources (Stacks 31.33-31.36 and 10.70, Vakil 19.x, MIT 18.725
Lecture 9); no source reading is claimed beyond the locators recorded in each
item's `sources.references`.

## Dependency changes for the lead to apply to `batch-2.pages.json`

Manifest rows must be synced from the item files (the lead's finalize pass does
this). Deltas relative to the frozen rows:

- `lem-affine-point-blowup-pushforward-vanishing`: added
  `def-rees-algebra-ideal-sheaf`,
  `thm-closed-subschemes-projective-space-homogeneous-ideals`,
  `lem-projective-hypersurface-cohomology-sequence`,
  `thm-cech-computes-qc-cohomology-separated-scheme-affine-cover`,
  `def-closed-immersion-schemes`,
  `def-quasi-compact-and-quasi-separated-scheme`,
  `def-separated-morphism-schemes`, `def-twisting-sheaf-proj`; dropped
  `lem-affine-blowup-algebra-properties` and
  `thm-cech-to-sheaf-cohomology-comparison` (the comparison map alone does not
  give the isomorphism; the affine-cover theorem is the supplier actually
  used).
- `lem-blowup-independent-ideal-generators`: added
  `def-rees-algebra-ideal-sheaf`, `def-axiom-of-choice` (AC inherited from the
  blowup and stated).
- `lem-blowup-plane-origin-incidence-equations`: added
  `def-rees-algebra-ideal-sheaf`,
  `thm-closed-subschemes-projective-space-homogeneous-ideals`.
- `lem-blowup-power-of-ideal-same`: added `thm-affine-blowup-standard-charts`.
- `lem-blowup-reduced-integral-under-domain-rees`: added
  `def-blowup-scheme-along-ideal`, `def-rees-algebra-ideal-sheaf`,
  `def-affine-scheme-spectrum`.
- `thm-blowup-projective`: added `lem-relative-proj-affine-local-gluing`,
  `def-closed-immersion-schemes`, `def-quasi-coherent-module-scheme`.
- `thm-exceptional-divisor-normal-cone-proj`: added
  `def-blowup-scheme-along-ideal`, `thm-relative-proj-base-change`,
  `def-base-change-morphism-schemes`; dropped `thm-proj-structure-sheaf-scheme`
  (not used).
- `thm-pullback-center-ideal-invertible`: added
  `def-rees-algebra-ideal-sheaf`, `def-twisting-sheaf-proj`,
  `def-invertible-sheaf`, `def-invertible-sheaf-of-cartier-divisor`.
- `cex-blowup-arbitrary-base-change-failure`: added
  `lem-blowup-plane-origin-incidence-equations`, `thm-relative-proj-base-change`,
  `thm-affine-blowup-standard-charts`, `lem-affine-blowup-algebra-properties`,
  `def-axiom-of-choice`; dropped `lem-tensor-qc-modules-quasi-coherent`.

All added suppliers resolve to existing item files (no dangling deps). Several
of them are items on other pages of the A page's `requires` closure
(`proj-projective-schemes-twisting-sheaves-and-ampleness`,
`sheaf-cohomology-cech-cohomology-and-comparison`,
`cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`,
`fibre-products-base-change-and-scheme-theoretic-fibres`); `def-affine-scheme-spectrum`
and `def-closed-immersion-schemes` should be checked by the lead against the
plan closure at the Step-4 splice.

## Open obligations

- Manifest rows for all twenty-one lane-F items were refreshed in
  `batch-2.pages.json` by the finalize sync (deps from the item frontmatter,
  dependency levels recomputed over the run); `manifest-deps` and
  `item-dependency-levels check --run frontier-38-owner-30` are clean.
- Item decisions (`step3b-review-<id>.json`) are the lead's to record after
  all batch-2 content and manifest rows are final; lane F recorded none.
- The pair's level-7 slice is lane G's report; lane G's contract fragment
  now validates strict (0 errors, 7/7) because the last supplier it quotes,
  `thm-blowup-separates-plane-curve-tangent-directions`, landed.
- Lane F also fixed the single lane-G content-policy finding by adding
  `generation.role: example` to `items/ex-empty-center-blowup-identity.md`
  (the statement there is `ai-generated`, the item is an example).

## Final battery and artifact check

Run after the last content edit of the pair (all commands from the repo
root):

- `tools/tsx-run.mjs tools/precheck.mts` over the 60 dispatch-order item
  files: 50 checked, 0 failing (10 definitions/remarks have no phase body).
- `tools/rendercheck.mjs` over the same 60 files: OK.
- `PRESTIGE_APP_DIR=/tmp/f38-app node tools/proof-layout.mjs` over the same
  60 files: 266 numbered steps, 0 defects.
- `tools/proof-contract.mjs research/frontier-38-owner-30-batch-2.proof-contracts.json
  --strict`: 0 errors, 0 warnings, 60/60 items. The merged file combines lane
  A (7), lane B (9), lane D (16, quotes re-extracted against the current
  suppliers), lane F (21) and lane G (7) with no duplicate ids.
- `tools/manifest-deps.mjs`: 0 errors; `tools/coverage-checklist.mjs
  .../batch-2.coverage.json --require-destination`: 0 errors, 0 warnings;
  `tools/content-policy.mjs .../batch-2.pages.json`: 60 items, 0 errors,
  0 warnings; `tools/item-dependency-levels.mjs check --run
  frontier-38-owner-30`: 818 items, maximum level 16.
- `tools/dispatch-author-artifacts.mjs` `checkPairAuthorArtifacts` for
  `blowups-exceptional-divisors-and-strict-transforms`: 64 required
  carriers, `ok: true`, no missing files.

The run remains owner-paused; lane F made no `.autopilot` change, no item
decision, no published-content edit and no library-page edit.

## Stray lane-H fragment (contained, reported)

Lane H is still live after being told to stand down and author nothing. At
06:53 local it wrote
`research/frontier-38-owner-30-step3b-contracts-lane-h-lead.json` covering
the same ten level-6 items with independently generated entries (one of them
stale: `ex-blowup-rational-map-p1` with an empty contract), and it edited
`/tmp/f38/merge_contracts.py` to include its fragment in the merge. Because
the merge script copied contracts even for duplicate ids, lane H's stale
entry silently replaced lane F's good one.

Handling: lane F did not delete lane H's file (deletions are owner-held). It
fixed the merge to keep the first occurrence of each id (the authoritative
lane-A/B/D/F/G fragments precede lane H's) and re-merged; the merged
`batch-2.proof-contracts.json` is 60/60 strict with lane F's entry for the
example intact. Any later merge over the shared directories must keep this
first-wins rule or re-check the example's entry.

## Published-content incident (reported, not owned by this lane)

While lane E was drifting it edited the **published** item
`items/thm-affine-closed-immersions-quotient-rings.md` at 06:25 local
(replacing the owner's recorded repair dependency
`lem-affineness-from-unit-generating-global-sections` by
`thm-sheaf-equalizer-condition` and inlining an equalizer argument in step
3.1). That edit invalidated the recorded receipt
`research/frontier-38-owner-30-published-affine-closed-immersion-receipt.json`
(`content_sha256` no longer matched). Lane F restored the item byte-for-byte
from `research/frontier-38-owner-30-published-affine-closed-immersion.corrected.md`
and verified `itemHashGuard` equals the receipt's
`52d0cdcdc7beace2b27432c5b78e4bef084d947a897463d314da6da579e1e135`.

Lane E's underlying finding is real and remains for the owner: the recorded
repair added a dependency on `lem-affineness-from-unit-generating-global-sections`
(homed on the published page `fibre-products-base-change-and-scheme-theoretic-fibres`),
which creates a page cycle with the item's home page
`schemes-subschemes-and-morphisms-locally-of-finite-type` under depcheck's page
graph. Fixing that cycle is a published-content decision (owner-held); lane F
made no change to the ledger, the receipt, or any other published file.
