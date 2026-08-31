# frontier-27 - Alpha group `b` - Step 3 scaffold review

Group `b` covers batches `1`, `5`, and `6` in
`research/frontier-27-alpha-groups.json`: CA-10
`krull-dimension-and-height-theorems`, MA-14
`closed-monoidal-categories-and-the-internal-hom`, and HA-4
`long-exact-sequences-in-homology`.

I read the current:

- `research/frontier-27-batch-{1,5,6}.pages.json`
- `research/frontier-27-batch-{1,5,6}.coverage.json`
- `research/frontier-27-batch-{1,5,6}.notes.md`
- `research/plan-spec.json`
- governing design sections in
  `research/plan-commutative-algebra-track.md`,
  `research/plan-category-theory-track.md`, and
  `research/plan-homological-algebra-track.md`

Checks run on Monday, August 31, 2026:

- `node tools/scope-decisions.mjs refresh --run frontier-27 --group b`
  - result: `scope-decisions: b: 7 decline(s), 7 pending`
- `node tools/scope-decisions.mjs check --run frontier-27 --group b`
  - result after resolution: `scope-decisions: 7 current decline(s), 0 error(s)`
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
- focused local closure audit over the current group-`b` manifests
  - result: `0` unhomed deps, `0` out-of-closure deps, `0` A-page deps homed
    only on foreign `-examples` pages
- `node tools/validate-plan.mjs research/plan-spec.json`
  - result: pass; the command ends `OK` and reports only the repository's
    standing `redundant-prereq` advisories

I applied three in-scope scaffold repairs during this review:

1. In batch `5`, `thm-cartesian-closed-preorders-have-relative-implications`
   no longer depends on the foreign B-page item
   `ex-products-in-a-poset-are-infima`; it now closes from the published
   A-page carrier `def-products-and-coproducts`.
2. In batch `5`, `fs-a-subobject-classifier-is-any-object-representing-monomorphisms`
   no longer depends on the foreign B-page counterexample
   `cex-two-monomorphisms-representing-the-same-subobject`; it now closes from
   the published subobject-definition/equivalence items.
3. In batch `6`,
   `ex-naturality-of-a-connecting-map-under-a-map-of-coefficient-sequences`
   no longer depends on the foreign example
   `ex-the-connecting-morphism-computed-for-a-short-exact-sequence-of-abelian-groups`;
   it now depends on the local A-page carrier
   `prop-elementwise-formula-for-the-connecting-map-in-module-categories`.

No owned coverage file needed repair, and no owner-level scope escalation
remains.

## Scope receipt

`research/frontier-27-alpha-b-scope-decisions.json` is now current. All seven
current decline rows are resolved as `stands`.

That outcome matches the current bytes:

- batch `1`'s Hochster deferment is a real handoff to the already published
  `formal-power-series` page, not a missing local result;
- batch `5`'s five exclusions are either deliberate boundary examples
  (`Top`, `Set_mono`, presheaf-topos) or the wrong notion for this page
  (EGNO `7.9`), while the live MA-14 scaffold already keeps the needed
  abelian-groups and presheaf-classifier material; and
- batch `6`'s Weibel exact-triangle row is honest triangulated-category
  motivation, and the current HA-4 pair still stops at chain, homology, cone,
  and relative-homology consequences.

No row needs `owner-decision`: none of the seven current declines leaves the
owned scaffold under-specified for authoring on the current bytes.

## Pair verdicts

### `krull-dimension-and-height-theorems` - `sufficient`

The pair is author-ready on the current bytes: `37` A-page items and `7`
B-page items, so no split is owed.

The route is coherent and source-backed:

- principal ideal theorem via the local-domain reduction and associated-prime
  step;
- the height theorem, local-generator bound, and localized converse;
- systems of parameters, exact one-step dimension drop, and the radical
  generator characterization of local dimension;
- polynomial-ring dimension; and
- the affine-domain dimension/transcendence-degree tail with the explicit
  catenarity boundary remark.

The one current scope cut also stands. Hochster's formal-power-series half is
not a missing CA-10 bridge because the batch's live A page only owns the
polynomial-dimension theorem, while `formal-power-series` already exists as the
separate page-level interface for that subject.

The batch-1 notes still preserve earlier fetch/liveness troubleshooting prose,
but the current coverage file is authoritative and `source-fetch-check` now
passes `6/6`. That stale note language is not a Step-3 blocker.

### `closed-monoidal-categories-and-the-internal-hom` - `sufficient`

The pair is also author-ready on the current bytes: `33` A-page items and `6`
B-page items, again well below the split ceiling.

The repaired MA-14 route is now closure-clean:

- left/right/biclosed definitions first, with the internal-hom calculus and the
  symmetry-sensitive comparison of the two closures;
- cartesian-closed consequences through Set, Cat, and presheaf exponentials;
- locally cartesian closed structure and the pullback-functor
  characterization; and
- subobject classifiers with the deliberate boundary against full topos
  development.

The design/spec prerequisite mismatch remains non-blocking. The live
`research/plan-spec.json` requires only
`strictification-and-mac-lanes-coherence-theorem-examples`, but the computed
closure still reaches `strictification-and-mac-lanes-coherence-theorem`,
`adjunctions-units-and-counits`, `limits-and-colimits`, and
`universal-properties-and-the-yoneda-lemma`, which are exactly the direct
design suppliers named in MA-14.

All five current exclusions are honest:

- the `Top` and `Set_mono` rows are non-load-bearing boundary examples;
- the bimodule tensor-Hom row is a different ring-action package than the one
  this page uses;
- the presheaf-topos row crosses the explicit page boundary against elementary
  topos development; and
- EGNO `7.9` is the wrong internal-Hom notion for this page.

### `long-exact-sequences-in-homology` - `sufficient`

This pair is author-ready after the local dependency repair: `35` A-page items
and `8` B-page items, so no split is owed.

The HA-4 route remains the designed one:

- build the cycle-boundary snake diagram from a short exact sequence of
  complexes;
- define the preconnecting arrow on cycles and prove it kills boundaries;
- descend to the homology connecting morphism;
- prove exactness one node at a time before stating the full long exact
  sequence;
- prove naturality for homology and cohomology; and
- recover the cone, relative-homology, six-term, and delta-functor
  consequences from that general package.

The one current deferment also stands. Weibel's exact-triangle mnemonic is
triangulated-category motivation, not a missing HA-4 theorem, and the current
pair still deliberately stops short of distinguished triangles as independent
objects.

The design/spec drift about the prerequisite page is no longer a blocker on the
current bytes. The live plan and current batch manifest both carry
`the-diagram-lemmas-in-an-abelian-category`, and the repaired naturality
example now closes from the local elementwise-formula proposition rather than a
foreign B-page example.

## Outcome

All three owned A pages are sufficient for authoring on the current Monday,
August 31, 2026 bytes:

- `krull-dimension-and-height-theorems`
- `closed-monoidal-categories-and-the-internal-hom`
- `long-exact-sequences-in-homology`

`research/frontier-27-alpha-b-step3-verdicts.json` records all three pages as
`sufficient`. No Step-3 insufficiency remains in group `b` after the manifest
repairs above.
