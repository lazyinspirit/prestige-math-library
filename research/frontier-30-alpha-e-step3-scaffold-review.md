# frontier-30 - Alpha group `e` - Step 3 scaffold review

Group `e` covers batches `9`, `10`, and `11`: `enriched-categories`,
`delta-functors-and-universality`, and
`singular-chains-and-singular-homology`.

I read the current `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and `CLAUDE.md`;
the batch `9`, `10`, and `11` manifests, coverage files, and notes; the
controlling design sections in `research/plan-category-theory-track.md`,
`research/plan-homological-algebra-track.md`, and
`research/plan-algebraic-topology-track.md`; and the live
`research/plan-spec.json`. I also checked the repo-root autopilot state from
disk: `.autopilot/` currently belongs to run `frontier-23`, so I treated the
frontier-30 task and artifact set, not that state dir, as the authoritative
Step-3 input for this group.

On the current bytes, batches `9` and `10` are sufficient for authoring.
Batch `11` is not: the B-page counterexample
`cex-equal-homology-does-not-imply-homotopy-equivalence` still lacks an exact
source-backed same-homology witness on the reviewed scaffold.

| A page | batch | A items | B items | declines | verdict | notes |
|---|---:|---:|---:|---:|---|---|
| `enriched-categories` | 9 | 43 | 15 | 8 | **sufficient** | closure is adequate; four Kelly declinations still need owner routing |
| `delta-functors-and-universality` | 10 | 34 | 7 | 7 | **sufficient** | route, source form, and Ext deferrals are current and exact |
| `singular-chains-and-singular-homology` | 11 | 27 | 8 | 8 | **insufficient** | the equal-homology/non-homotopy-equivalence witness is still under-specified |

Machine half: `research/frontier-30-alpha-e-step3-verdicts.json`.

## Findings

| id | page | severity | disposition |
|---|---|---|---|
| E11-1 | `singular-chains-and-singular-homology` | **blocking** | insufficient: `cex-equal-homology-does-not-imply-homotopy-equivalence` still lacks an exact source-backed same-homology witness |

## Direct repairs applied

- Corrected the batch-9 notes-only count drift in
  `research/frontier-30-batch-9.notes.md`: the A page has `43` items, not
  `42`, because the design's inserted item `26a` is live in the manifest.
- Resolved all current rows in `research/frontier-30-alpha-e-scope-decisions.json`.

### E11-1 - `singular-chains-and-singular-homology` is not author-ready on current bytes

The A page itself is structurally sound. The AT-2 design still wants the
singular-chain complex, induced maps, reduced homology, the prism-operator
proof of homotopy invariance, chain-level cross-product preliminaries, and only
the first simplicial-to-singular comparison seam. The current manifest keeps
that exact route, its dependency closure is clean, and the focused merged-plan
audit found no unresolved ids, no forward references, and no foreign
examples-page dependencies.

The blocking defect sits on the companion page.
`research/plan-algebraic-topology-track.md:476` still requires the B-page item
`cex-equal-homology-does-not-imply-homotopy-equivalence` as a source-backed
pair distinguished by fundamental group. The current manifest still keeps that
item in `research/frontier-30-batch-11.pages.json`, but the harvested source
set in `research/frontier-30-batch-11.coverage.json` covers only Hatcher's
singular-chain construction and homotopy invariance ranges, May's reduced
homology and `Gamma X` discussion, and Miller's chain-level homotopy and
cross-product notes. None of those harvested rows names a same-homology witness
for the counterexample.

Batch `11`'s own notes already make the gap explicit: the natural
torus-versus-two-circle-wedge witness has published fundamental-group support on
current disk, but the current published corpus does not already supply the
matching homology calculation, and the batch harvest names no replacement
source for it. That is not a cosmetic concern. As written, the pair still
promises a specific source-backed B-page boundary case without an exact
harvested carrier for the equal-homology half of the witness.

I did not repair this locally. Closing it honestly would require either:

- harvesting an exact source for the chosen witness and its same-homology
  calculation, or
- changing the B-page counterexample to a different witness with explicit
  current source support.

That is beyond a small Step-3 dependency or wording correction, so the correct
action is to mark the pair insufficient and name the missing result/source.

## Page review

### `enriched-categories`

This pair is sufficient. The A page follows the MA-17 route in
`research/plan-category-theory-track.md`: the merely monoidal
enriched-category/functor/transformation layer, the explicit hypothesis ladder,
the underlying ordinary category and its information loss, the Cat / preorder /
Set / Ab examples, weak and strong enriched Yoneda, tensors and cotensors,
conical-limit inadequacy and its positive tensoredness/completeness
counterpart, change of base, enriched adjunctions, and the weighted-colimit
density endpoint. The B page keeps the designed examples, counterexample, and
false-statement guardrails.

The design/spec direct-`requires` drift is not a blocker on current bytes. The
live `research/plan-spec.json` route only names
`duality-and-rigidity-in-monoidal-categories-examples`, but tracing the current
closure shows that it already reaches every design-named direct prerequisite:
`closed-monoidal-categories-and-the-internal-hom`,
`braided-and-symmetric-monoidal-categories`,
`strictification-and-mac-lanes-coherence-theorem`,
`preadditive-and-additive-categories-and-biproducts`,
`ends-coends-and-weighted-limits`, and
`universal-properties-and-the-yoneda-lemma`. The focused dependency audit over
the current manifest found no dep outside that closure.

The eight decline rows are also now classified correctly. Four of them remain
honest `stands` rows: the model-categorical Appendix A definitions, simplicial
categories, and Kelly's constant-unit conical-limit formulas are genuine
alternate or stronger routes outside the present page. The other four still
have no exact current home on the live plan, so they are correctly recorded as
`owner-decision`: Kelly's extraordinary naturality identities `(1.40)-(1.41)`,
functor-category/double-limit calculus, full-subcategory closure results, and
strongly generating functors.

**Verdict:** sufficient.

### `delta-functors-and-universality`

This pair is sufficient. The A page matches the HA-7 route in
`research/plan-homological-algebra-track.md`: homological and cohomological
delta functors, morphisms, universality, effaceability, the horseshoe-derived
connecting map and its independence, the left- and right-derived delta-functor
theorems, the dimension-shift and extension lemmas, the universality theorems,
uniqueness consequences, the exact-functor triviality result, the first-
satellite comparison, and the five false-statement guard items. The B page also
keeps the designed seven examples and counterexample without leaking to foreign
example homes.

The direct-`requires` drift is likewise nonblocking. The manifest names only
`derived-functors-examples`, but the current plan closure already reaches the
three design prerequisites `derived-functors`,
`projective-and-injective-resolutions`, and
`long-exact-sequences-in-homology`. The merged-plan audit found no dep outside
the declared closure, and the batch-local validators all pass on current bytes.

The seven scope-decline rows stand cleanly. The two p-torsion examples are real
but surplus to the current B-page budget; the half-exactness criterion for
exact satellites is broader than the current first-degree satellite seam; and
the three deferred Ext rows all land exactly on the next planned page
`ext-and-balanced-resolutions`, which already exists in `research/plan-spec.json`
as the page that first licenses Ext notation and the projective/injective
characterizations.

**Verdict:** sufficient.

### `singular-chains-and-singular-homology`

This pair is insufficient only on E11-1. Apart from that B-page witness gap,
the current AT-2 scaffold is coherent and well routed: standard simplices and
affine faces, singular chains and the boundary operator, `\partial^2 = 0`,
induced maps, reduced homology, the `H_0` interpretation, prism-operator
homotopy invariance, deformation-retract invariance, chain-level cross-product
preliminaries, and the first simplicial-to-singular comparison map all remain
in the correct order and below the split ceiling.

The direct-`requires` drift recorded in the beta notes is not the blocker.
Although the manifest names only
`simplicial-complexes-and-simplicial-homology-examples`, the current plan
closure already contains the three design prerequisites
`simplicial-complexes-and-simplicial-homology`,
`homotopy-and-homotopy-equivalence`, and
`chain-homotopy-and-the-homotopy-category`, and the merged-plan audit found no
dependency leak.

The eight decline rows are also honest on current bytes. Hatcher's full
simplicial-singular comparison theorem still lands exactly on
`relative-homology-excision-and-mayer-vietoris`, Miller's homology-level
cross-product rows still land on
`universal-coefficients-and-kunneth-theorems`, and May's `Gamma X`
geometric-realization / weak-equivalence route remains a deliberate
out-of-scope alternate approach. What still fails is narrower: the pair
promises a specific source-backed counterexample without an exact harvested
source for the equal-homology part of the witness.

**Verdict:** insufficient.

## Scope decisions

`node tools/scope-decisions.mjs refresh --run frontier-30 --group e` produced
`23` pending rows. They are now resolved in
`research/frontier-30-alpha-e-scope-decisions.json` as:

- `stands`: `19`
- `owner-decision`: `4`

The four `owner-decision` rows all belong to `enriched-categories`, and that
split is still correct on current bytes:
`research/plan-category-theory-track.md` still marks Kelly's `(1.40)-(1.41)`,
`3.3`, `3.5`, and `3.6` material as later enriched-functor-category or
density/accessibility technology without assigning an exact page id in the
current frontier-30 plan.

## Checks run on the reviewed bytes

- `node tools/scope-decisions.mjs refresh --run frontier-30 --group e`
  Result: `scope-decisions: e: 23 decline(s), 23 pending`.
- `node tools/scope-decisions.mjs check --run frontier-30 --group e`
  Result after resolution: `scope-decisions: 23 current decline(s), 0 error(s)`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-9.coverage.json`
  Result: `coverage-checklist: 1 page(s), 74 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-10.coverage.json`
  Result: `coverage-checklist: 1 page(s), 64 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-11.coverage.json`
  Result: `coverage-checklist: 1 page(s), 37 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-9.coverage.json`
  Result: `source-fetch-check: 4/4 source(s) fetch-verified`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-10.coverage.json`
  Result: `source-fetch-check: 4/4 source(s) fetch-verified`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-11.coverage.json`
  Result: `source-fetch-check: 4/4 source(s) fetch-verified`.
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-9.pages.json`
  Result: `content-policy: 58 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-10.pages.json`
  Result: `content-policy: 41 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-11.pages.json`
  Result: `content-policy: 35 scoped item(s), 0 error(s), 0 warning(s)`.
- merged-plan closure audit on `/tmp/frontier-30-alpha-e-spliced-plan.json`
  Result: `OK - declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 704 page(s) with item lists.`

## Final verdicts

Group `e` has two sufficient A pages and one insufficient A page on the current
bytes. No split is owed: the A-page counts are `43`, `34`, and `27`, all below
the Step-3 ceiling.
