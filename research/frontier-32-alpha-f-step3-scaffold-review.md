# frontier-32 — Alpha group `f` — Step 3 scaffold review

Group `f` covers batches `9`, `11`, and `12`: CA-17 depth and
Cohen--Macaulay modules, AV-4 products and classical projective embeddings,
AV-9 sheaves, and AV-12 introductory schemes and finite-type morphisms.

I read the current root `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and
`CLAUDE.md`; each assigned manifest, coverage file, and notes file; the exact
CA-17, AV-4, AV-9, and AV-12 design sections; and the corresponding live
records in `research/plan-spec.json`. I checked claims as written against the
complete relevant source sections and traced each manifest dependency through
the current backward closure.

Three pairs are sufficient for authoring after the focused repairs recorded
below. AV-12 is insufficient because its classical/scheme comparison theorem
has neither a defined classical source category nor a mapped exact source for
the comparison equivalence.

| A page | batch | A items | B items | harvest rows | declines | verdict |
|---|---:|---:|---:|---:|---:|---|
| `depth-and-cohen-macaulay-modules` | 9 | 57 | 13 | 105 | 19 | **sufficient** |
| `products-segre-and-veronese-embeddings-and-grassmannians` | 11 | 25 | 8 | 50 | 5 | **sufficient** |
| `presheaves-sheaves-stalks-and-sheafification` | 12 | 29 existing | 9 existing | 40 | 0 | **sufficient** |
| `schemes-subschemes-and-morphisms-locally-of-finite-type` | 12 | 32 | 9 | 52 | 14 | **insufficient** |

The machine-readable verdicts are in
`research/frontier-32-alpha-f-step3-verdicts.json`.

## Finding

| id | page | severity | disposition |
|---|---|---|---|
| F12-1 | `schemes-subschemes-and-morphisms-locally-of-finite-type` | **blocking** | missing backward category definition and exact mapped comparison source |

## Direct repairs applied

- In `research/frontier-32-batch-9.pages.json`, added the two missing
  source-critical links in the localization route: Stacks Lemmas 10.72.8 and
  10.72.9. The first uses Artin--Rees to find the associated prime after a
  power quotient; the second proves `depth(M) <= dim(R/p)` for
  `p in Ass(M)`. Corrected the localization inequality to the exact Stacks
  Lemma 10.72.10 statement
  `depth(M_p) + dim(R/p) >= depth(M)`, then routed unmixedness and
  Cohen--Macaulay localization through those results.
- In the same manifest, removed an unsupported finite-type hypothesis from the
  flat-local Cohen--Macaulay theorem. Stacks Lemmas 10.163.2--10.163.3 require
  a flat local homomorphism of Noetherian local rings and the closed fibre, not
  finite type.
- Updated `research/frontier-32-batch-9.coverage.json` and the Batch 9 notes so
  the two newly retained Stacks results, the 70-item inventory, and the exact
  authoring obligations agree.
- In `research/frontier-32-batch-11.pages.json`, removed a forward use of
  schemes from the classical affine-product theorem. Its route now uses the
  already published classical affine algebraic-set/coordinate-algebra duality.
  The boundary example now explicitly records that `Gr(r,n)` is empty outside
  `0 <= r <= n`, in addition to the `r=0,n` point cases. The Batch 11 notes
  record both corrections.
- In `research/frontier-32-batch-12.pages.json`, corrected the
  scheme-theoretic-image definition to be conditional on existence and the
  existence theorem to the exact quasi-compact hypothesis of Stacks Lemma
  29.6.3; no quasi-separated hypothesis is needed. The dense-open example now
  uses a direct affine-domain argument and therefore covers non-quasi-compact
  dense opens. The Batch 12 notes record these conventions and F12-1.

No new page, reading-order edge, published item, canonical-plan record,
workflow state, or other group's artifact was changed.

## F12-1 — the comparison theorem has no defined classical source category

The item
`thm-classical-varieties-equivalent-integral-separated-finite-type-schemes`
promises an equivalence over an algebraically closed field. Its dependencies
define scheme-theoretic varieties, integral schemes, closed points inside an
affine scheme, and morphisms into affine schemes. The current earlier closure
also defines classical affine and projective algebraic sets. It does not define
general classical algebraic prevarieties obtained by gluing affine charts,
their regular maps, or separated classical algebraic varieties. Thus the
theorem's source category is not typed by the scaffold.

The exact missing backward definition is supplied by J. S. Milne,
*Algebraic Geometry*, sections 5a--5c, especially Definition 5.2
(algebraic prevarieties and regular maps) and Definition 5.7 (separated
prevarieties and algebraic varieties), printed pages 100--102:
`https://www.jmilne.org/math/CourseNotes/AG.pdf`.

The theorem also has no exact included source row in the Batch 12 coverage
artifact. Milne, *Algebraic Geometry*, version 10, section p, “Schemes in
general,” printed pages 36--37, states the comparison between Milne's
closed-point algebraic schemes and finite-type EGA schemes and describes the
inverse using closed points:
`https://www.jmilne.org/math/CourseNotes/AG10.pdf`. Under that comparison,
algebraic varieties correspond to geometrically reduced separated finite-type
schemes; over an algebraically closed field, restricting the classical side to
irreducible varieties gives the integral separated finite-type schemes named
by the item.

Closing F12-1 therefore requires both a new backward definition item carrying
the classical category and an included source mapping/proof route for the
comparison. A new item is outside this Step-3 repair licence, so this is an
owner decision rather than an Alpha edit.

## Page review

### `depth-and-cohen-macaulay-modules`

This pair is sufficient after the two-lemma repair. It follows CA-17 at orders
`365.903`--`365.904`, with direct requirements
`koszul-complexes-and-regular-sequences-examples` and
`ext-and-balanced-resolutions`. The route now has the exact chain needed for
localization: associated primes after power quotients, the associated-prime
depth bound, the localization inequality, and the support-dimension upper
bound. It preserves the zero-module/infinite-depth convention, local and
ideal-relative hypotheses, finite-module and Noetherian assumptions,
nonzero-terminal-quotient condition for regular sequences, and the closed
fibre in the flat-local theorem. All dependencies resolve backward.

The six fetch-verified source treatments cover the retained definitions,
Ext and regular-sequence characterizations, Depth Lemma, systems of
parameters, Cohen--Macaulay localization, completion, polynomial extension,
and flat-local ascent/descent. All 19 declines stand: 18 are genuinely outside
the pair and one defers local cohomology depth to the existing local-cohomology
page.

**Verdict:** sufficient.

### `products-segre-and-veronese-embeddings-and-grassmannians`

This pair is sufficient. It follows AV-4 at orders
`366.047`--`366.048`, after classical projective algebraic sets and exterior
powers. The repaired affine-product route remains entirely in the classical
category at this reading order. The Segre and Veronese items state their
homogeneous-coordinate maps and equations, and the Grassmannian route has the
alternating Pluecker construction, decomposability criterion, quadratic
relations, affine charts, dimension computation, universal subspace, and all
endpoint cases. The B page supplies the requested low-dimensional equations
and failures, including emptiness for out-of-range Grassmannians.

Harris, Milne, and Shafarevich provide independent source coverage for the
product, embedding, and Grassmannian routes. All five current declines are
result-specific and stand as out of scope.

**Verdict:** sufficient.

### `presheaves-sheaves-stalks-and-sheafification`

This pair is sufficient on the current repository state. Its 29 A items and
9 B items already occupy the canonical plan and item store; 37 are published,
and `lem-sheaf-condition-check-on-basis` is the one existing draft. Batch 12
correctly leaves both manifest inventories empty instead of duplicating those
ids. I checked the existing inventory against the AV-9 design and both source
treatments: it contains the category/functor conventions, presheaves and
sheaves, basis criteria, stalks and germs, sheafification and its universal
property, exactness on stalks, support, and all nine companion examples.
The remaining draft lemma has a coherent basis-refinement proof and a source
mapping; draft status is an authoring-state fact, not a missing scaffold
result.

The Batch 12 dry splice therefore refuses to overwrite the canonical 29/9
lists with empty lists. That intentional collision also accounts for the sole
coverage low-yield advisory. It is not evidence of missing mathematical
coverage and needs no scope decision.

**Verdict:** sufficient.

### `schemes-subschemes-and-morphisms-locally-of-finite-type`

Apart from F12-1, this pair follows AV-12 at orders
`366.063`--`366.064` and has a coherent route from affine schemes and the
structure sheaf. It covers schemes including the empty scheme, affine opens,
gluing, scheme morphisms, open and closed immersions, ideal sheaves and closed
subschemes, reduction, integral and Noetherian schemes, finite type versus
finite presentation, the affine-overlap separation criterion available before
the later diagonal page, and scheme-theoretic images. The nine companion items
exercise gluing, nilpotent structures, reduction, finiteness distinctions, and
dense-open images.

The planned quasi-coherent-ideal/closed-subscheme correspondence remains
explicitly recorded-not-proved until AV-18, exactly as the design requires.
Stacks and Vakil cover the retained scheme-local constructions. Those valid
routes do not define the classical source category or replace the absent
Milne comparison mapping in F12-1.

All 14 current declines stand: five are genuinely outside this pair and nine
have exact later destinations in the live plan.

**Verdict:** insufficient.

## Scope decisions

After refreshing against the repaired coverage and current plan, the final
scope file contains 38 current decline rows, all resolved as `stands` in
`research/frontier-32-alpha-f-scope-decisions.json`:

- Batch 9: 18 out-of-scope and 1 deferred;
- Batch 11: 5 out-of-scope;
- Batch 12: 5 out-of-scope and 9 deferred.

Every deferred destination exists later in the current plan and every
out-of-scope result was checked against the retained proof routes and
dependency closure. No decline requires `owner-decision`; F12-1 is a positive
missing-result finding, not a declined coverage row.

## Validation record

Focused validation on the reviewed artifacts produced:

- `manifest-deps` on batches 9, 11, and 12: 144 items, 0 normalizations,
  0 errors.
- `content-policy --manifest-only` on those manifests: 144 scoped items,
  0 errors, 0 warnings.
- `coverage-checklist --require-destination`: Batch 9, 105 rows, 0 errors and
  0 warnings; Batch 11, 50 rows, 0 errors and 0 warnings; Batch 12, 92 rows,
  0 errors and the one reviewed AV-9 collision advisory.
- `source-fetch-check`: Batch 9, 6/6 sources fetch-verified; Batch 11, 2/2;
  Batch 12, 5/5.
- `validate-plan.mjs research/plan-spec.json --repo . --max-items 60`: `OK`;
  no cycles, forward references, B-page dependencies, or unresolved ids among
  pages with item lists.
- Dry splice: Batch 9 recognizes 2 pages and 70 items; Batch 11 recognizes
  2 pages and 33 items. Batch 12 intentionally aborts before writing because
  its empty AV-9 manifest lists differ from the canonical existing 29/9 lists.
- Final `scope-decisions check`: 38 current declines, 0 errors.

No gate is claimed beyond the commands and results listed here.
