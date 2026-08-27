# frontier-20 · Beta · batch notes — `socles-and-the-onan-scott-landscape` / `hyperbolic-spaces-and-hyperbolic-groups` (steps 1-2)

Run `frontier-20`, batch `4`, two A/B pairs, category `group-theory`.
Author: Beta. Session date: Wednesday, August 26, 2026.
Design sections read first:
[research/plan-group-theory-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-group-theory-track.md:797),
[research/plan-group-theory-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-group-theory-track.md:867),
[research/plan-group-theory-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-group-theory-track.md:1661),
and [research/plan-group-theory-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-group-theory-track.md:1730).

Artifacts owned by this batch:
`research/frontier-20-batch-4.pages.json`,
`research/frontier-20-batch-4.coverage.json`,
and this file.

---

## 1. Shape and split check

- `socles-and-the-onan-scott-landscape` (A): **21 items**.
- `socles-and-the-onan-scott-landscape-examples` (B): **7 items**.
- `hyperbolic-spaces-and-hyperbolic-groups` (A): **31 items**.
- `hyperbolic-spaces-and-hyperbolic-groups-examples` (B): **7 items**.

Both A pages stay well below the 60-item ceiling, so no split is proposed.

High-level shape:

- GT-4 follows the design's intended spine: minimal normal subgroups, characteristic simplicity, socle decomposition, primitive-group restrictions, the affine/almost-simple/type dictionary, and then a bounded O'Nan-Scott survey that does not become a dependency target.
- GT-12 follows the design's hyperbolic route literally up to the small-cancellation bridge: slim triangles, equivalent formulations, Morse stability, quasi-isometry invariance, hyperbolic groups, algorithmic consequences, elementary subgroup structure, and the proper-geodesic boundary.

## 2. Which design location controlled

For `socles-and-the-onan-scott-landscape`, the dispatch's single line anchor lands inside the GT-4 block, but the controlling design is the whole GT-4 section from the A-page header through the B-page list. I treated [GT-4](/home/lazyinspirit/Projects/prestige-math-library/research/plan-group-theory-track.md:797) and its companion subsection at [line 867](/home/lazyinspirit/Projects/prestige-math-library/research/plan-group-theory-track.md:867) as one controlling block.

For `hyperbolic-spaces-and-hyperbolic-groups`, both named design locations are inside the single GT-12 block: the A-page header at [line 1661](/home/lazyinspirit/Projects/prestige-math-library/research/plan-group-theory-track.md:1661) and the B-page subsection at [line 1730](/home/lazyinspirit/Projects/prestige-math-library/research/plan-group-theory-track.md:1730). There is no later amendment block on disk for this page, so the GT-12 section itself controls; the second line reference is the examples subsection, not a conflicting later design.

## 3. Design-vs-spec drift that I did not settle

The dispatch says to record these and follow `research/plan-spec.json`, not the design, when they disagree.

### Finding 1 — GT-4 prerequisite drift is real

The GT-4 design declares:

`blocks-primitivity-and-multiple-transitivity`, `composition-series-and-solvable-groups`

but `research/plan-spec.json` gives the A page only:

`["blocks-primitivity-and-multiple-transitivity-examples"]`.

I kept the manifest page-level `requires` at the spec value. The item graph still cites the already-published primitive-action and finite-group-structure items the design actually uses.

### Finding 2 — GT-12 prerequisite drift is also real

The GT-12 design declares:

`geometric-actions-svarc-milnor-and-growth`, `small-cancellation-and-dehn-algorithms`

but `research/plan-spec.json` gives the A page only:

`["geometric-actions-svarc-milnor-and-growth-examples"]`.

Again I kept the manifest page-level `requires` at the spec value and let the item-level `deps` show the real closure.

## 4. Source stack and support

Only the two A pages require harvest ledgers.

### GT-4 sources

- J. S. Milne, *Group Theory*, Chapter 4 `Primitive actions` and Chapter 6 `Groups with operators` plus Exercise 6.31:
  `https://www.jmilne.org/math/CourseNotes/GT.pdf`
- James E. Humphreys, *A Course in Group Theory*, Chapter 16 `Composition and chief factors`:
  `https://djvu.online/file/3PC3bR3vM2abK`
- Leonard H. Soicher, `Primitive permutation groups`:
  `https://maths.qmul.ac.uk/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf`

Role split I actually used:

- Milne backs the primitive-action normal-subgroup facts and the finite-solvable primitive-group affine case.
- Humphreys backs the minimal-normal / characteristically-simple / socle-decomposition spine.
- Soicher backs the O'Nan-Scott type dictionary and the bounded survey theorem wording.

### GT-12 sources

- Clara Löh, *Geometric Group Theory*, SS 2022 lecture notes, Chapter 6:
  `https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf`
- Brian H. Bowditch, *A course on geometric group theory*:
  `https://bhbowditch.com/papers/bhb-ggtcourse.pdf`
- Nicholas Touikan, *An introduction to combinatorial and geometric group theory*, Chapter 3.5-3.6:
  `https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/IntroCGGT.pdf`

Role split I actually used:

- Löh carries the main GT-12 development through hyperbolic spaces, hyperbolic groups, the word problem, infinite-order elements, centralizers, and the product obstruction.
- Bowditch independently backs quasi-geodesic stability, quasi-isometry invariance, torsion bounds, and the boundary package.
- Touikan is used only for the `C'(1/6)` to hyperbolic bridge item.

## 5. Local scaffold choices that matter later

- GT-4 stops local proofs before the full O'Nan-Scott classification. `thm-onan-scott-classification-of-finite-primitive-groups`, `rem-cfsg-refinements-of-the-onan-scott-reduction`, and `prop-two-transitive-groups-have-affine-or-almost-simple-socle-type` are scaffolded as sourced survey items, not as new load-bearing proof targets.
- GT-4 keeps the socle decomposition honest: the page proves pairwise centralisation of distinct minimal normals, then characteristic simplicity, then the direct-product decomposition. It does not jump from "minimal normal subgroup" straight to "one simple group".
- GT-12 keeps equivalent hyperbolicity criteria, Morse stability, and quasi-isometry invariance as separate items so constants and hypotheses stay visible.
- GT-12 restricts the boundary package to the proper geodesic setting named in the design. I did not broaden it to arbitrary hyperbolic spaces.
- GT-12's `thm-finite-c-prime-one-sixth-presentations-define-hyperbolic-groups` is deliberately not part of the page's later dependency spine. The GT-8 small-cancellation items are not on disk, so this item must be authored as a sourced bridge unless GT-8 is published before step 5.
- No published item on disk currently defines `virtually cyclic`, so the GT-12 centralizer / abelian-subgroup / elementary-group items need to introduce that notion locally in their statements rather than pretend there is an earlier library definition.

## 6. Known limits and caution for step 5

- The GT-4 classification backing is intentionally asymmetric: the local socle structure is backed independently by Milne and Humphreys, while the accessible open O'Nan-Scott treatment I could read directly in this session is Soicher's essay. If a direct Cameron or Liebeck-Praeger-Saxl full-text URL is recovered later, Alpha should prefer it for the statement-only classification items.
- GT-12 item 16 is the one real seam in the batch. The design expects the hyperbolicity consequence to agree with GT-8, but GT-8 is still absent from the authored corpus. The scaffold keeps the bridge item, but not as a dependency target for the rest of the page.
- GT-12's word-problem and linear-isoperimetric items are scaffolded as local theorems, but they will need careful authoring so the Dehn-presentation terminology is stated explicitly instead of smuggled in from the missing GT-8 page.

## 7. Validator results

- `node tools/content-policy.mjs research/frontier-20-batch-*.pages.json --manifest-only`
  Result: **pass** — `content-policy: 428 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/coverage-checklist.mjs research/frontier-20-batch-4.coverage.json --require-destination`
  Result: **pass** — `coverage-checklist: 2 page(s), 42 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: **pass** for the live plan.
  First summary line:

  ```text
  plan: 1206 pages (598 A + 598 B + 5 already published), 7090 new items, 8079 existing ids available
  ```

  Final receipt line:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 404 page(s) with item lists.
  ```

  The run still prints the repository's standing unrelated `redundant-prereq` notes outside this batch.

- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-4.coverage.json --stamp`
  Result: **blocked by DNS in this runner, not by a harvested abstract page**.
  Exact output:

  ```text
  ERROR fetch-check-dead: socles-and-the-onan-scott-landscape: https://djvu.online/file/3PC3bR3vM2abK — EAI_AGAIN
  ERROR fetch-check-dead: socles-and-the-onan-scott-landscape: https://maths.qmul.ac.uk/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf — EAI_AGAIN
  ERROR fetch-check-dead: hyperbolic-spaces-and-hyperbolic-groups: https://bhbowditch.com/papers/bhb-ggtcourse.pdf — EAI_AGAIN
  ERROR fetch-check-dead: hyperbolic-spaces-and-hyperbolic-groups: https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/IntroCGGT.pdf — EAI_AGAIN
  source-fetch-check: 2/6 source(s) fetch-verified (0 newly stamped), 4 FAILED
  ```

  The two pre-existing reused stamps for Milne and Löh remained valid; the four unstamped sources could not be stamped from this shell session.

- `node tools/url-sweep.mjs --coverage research/frontier-20-batch-4.coverage.json --out /tmp/frontier-20-batch-4-url-liveness.json --recover --fail-on-dead`
  Result: **blocked by the same DNS failure**.
  Exact output:

  ```text
  url-sweep: 0/6 live; 6 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-20-batch-4-url-liveness.json
  FAIL 0 https://bhbowditch.com/papers/bhb-ggtcourse.pdf — curl: (6) Could not resolve host: bhbowditch.com
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://djvu.online/file/3PC3bR3vM2abK — curl: (6) Could not resolve host: djvu.online
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf — curl: (6) Could not resolve host: loeh.app.uni-regensburg.de
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://maths.qmul.ac.uk/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf — curl: (6) Could not resolve host: maths.qmul.ac.uk
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/IntroCGGT.pdf — curl: (6) Could not resolve host: ntouikan.ext.unb.ca
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www.jmilne.org/math/CourseNotes/GT.pdf — curl: (6) Could not resolve host: www.jmilne.org
    no archived snapshot under any host variant — re-sourcing is justified here
  ```

Current batch state after the gate run:

- The scaffold and harvest files are structurally clean.
- The source ledger is written from direct reading, but this shell session cannot honestly finish the fetch-stamp or liveness gates because DNS resolution fails across every cited host.

## Re-harvest round

`research/frontier-20-reharvest-plan.json` contains no `work[]` entry for
`research/frontier-20-batch-4.coverage.json`, so this batch has no orphaned
result to re-back. Running

```sh
node tools/source-backing.mjs --coverage research/frontier-20-batch-4.coverage.json --liveness research/frontier-20-url-liveness.json
```

on Wednesday, August 26, 2026 reported:

```text
source-backing: 28 authored result(s) across 1 file(s), every one still backed by an openable source
```

Accordingly, I did not replace any source row and
`research/frontier-20-batch-4.coverage.json` is unchanged in this re-harvest
round.

Required gate rerun on Wednesday, August 26, 2026:

- `node tools/coverage-checklist.mjs research/frontier-20-batch-4.coverage.json --require-destination`
  returned `coverage-checklist: 2 page(s), 42 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/url-sweep.mjs --coverage research/frontier-20-batch-4.coverage.json --out /tmp/frontier-20-batch-4-url-liveness.json --recover --fail-on-dead`
  still failed runner-local DNS resolution on all six hosts and wrote
  `/tmp/frontier-20-batch-4-url-liveness.json`. In this round that output is
  transport-only evidence, not evidence that the six cited documents are dead
  or unrecoverable.
- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-4.coverage.json --stamp`
  improved from the earlier four-source failure to a single unstamped source:

  ```text
  ERROR fetch-check-dead: hyperbolic-spaces-and-hyperbolic-groups: https://bhbowditch.com/papers/bhb-ggtcourse.pdf — EAI_AGAIN
  source-fetch-check: 5/6 source(s) fetch-verified (0 newly stamped), 1 FAILED
  ```

Dead source from the reharvest plan for batch 4: **none**. The current
run-level reharvest plan only names batches `8` and `9`, so there is no
batch-4 source-backed item whose last openable treatment has been lost.

Replacement/search: **no replacement applied**. The remaining Bowditch row is
not a source-backing loss event. `research/frontier-20-url-liveness.json`
already records `https://bhbowditch.com/papers/bhb-ggtcourse.pdf` as
`status: 200` and `ok: true`, and the live author index
`https://bhbowditch.com/preprints.html` still exposes `A course on geometric
group theory` with the same PDF target. This leaves the batch in a
transport-blocked state for local fetch stamping, not a re-harvest state.

Affected result: **none orphaned**. The lone unstamped Bowditch source still
backs these harvested `included` rows on
`hyperbolic-spaces-and-hyperbolic-groups`:

- `2.1 Quasi-geodesics in a hyperbolic space` -> `thm-morse-stability-of-quasi-geodesics`
- `2.2 Hyperbolicity is a quasi-isometry invariant` -> `thm-hyperbolicity-is-invariant-under-quasi-isometry-for-geodesic-spaces`
- `2.3 Word and conjugacy problem for hyperbolic groups` -> `thm-hyperbolic-groups-admit-finite-dehn-presentations`
- `2.4 Torsion in hyperbolic groups` -> `thm-hyperbolic-groups-have-bounded-orders-of-finite-subgroups`
- `5.3 The boundary of a hyperbolic group` -> `def-gromov-boundary-by-asymptotic-sequences`
- `Boundary topology via the Gromov product` -> `def-boundary-topology-by-gromov-products`
- `Boundary invariance under quasi-isometry` -> `thm-boundary-topology-is-well-defined-and-quasi-isometry-invariant`
- `Ping-pong on the boundary for non-elementary hyperbolic groups` -> `thm-non-elementary-hyperbolic-groups-contain-a-rank-two-free-subgroup`

## Step-5 authoring

Date worked: Wednesday, August 26, 2026.

Authored pages:

- `socles-and-the-onan-scott-landscape`
- `socles-and-the-onan-scott-landscape-examples`
- `hyperbolic-spaces-and-hyperbolic-groups`
- `hyperbolic-spaces-and-hyperbolic-groups-examples`

Authored item ids:

- GT-4 A page: `def-minimal-normal-subgroup-and-socle`, `lem-distinct-minimal-normal-subgroups-centralize-one-another`, `lem-minimal-normal-subgroups-of-finite-groups-are-characteristically-simple`, `thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups`, `prop-socle-is-characteristic-and-admits-a-direct-product-decomposition`, `thm-minimal-normal-subgroups-of-faithful-primitive-groups-are-transitive`, `lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular`, `cor-a-finite-primitive-group-has-at-most-two-minimal-normal-subgroups`, `prop-unique-abelian-minimal-normal-subgroup-gives-affine-type`, `def-almost-simple-finite-group`, `def-affine-almost-simple-diagonal-product-action-and-twisted-wreath-types`, `lem-product-action-wreath-products-are-primitive-under-the-standard-hypotheses`, `rem-onan-scott-eight-type-and-five-type-conventions`, `thm-onan-scott-classification-of-finite-primitive-groups`, `rem-cfsg-refinements-of-the-onan-scott-reduction`, `prop-two-transitive-groups-have-affine-or-almost-simple-socle-type`, `rem-algorithmic-role-of-onan-scott`, `fs-the-socle-is-always-a-single-simple-group`, `fs-every-primitive-group-has-a-unique-minimal-normal-subgroup`, `fs-onan-scott-is-the-classification-of-finite-simple-groups`, `fs-the-onan-scott-theorem-requires-the-classification-of-finite-simple-groups`.
- GT-4 B page: `ex-affine-type-agl-one-p`, `ex-almost-simple-type-from-an-alternating-group`, `ex-simple-diagonal-action`, `ex-product-action-wreath-product`, `ex-two-regular-minimal-normal-subgroups`, `ex-socle-of-a-finite-solvable-primitive-group`, `cex-transitive-does-not-force-minimal-normal-subgroups-transitive`.
- GT-12 A page: `def-geodesic-segment-triangle-and-geodesic-metric-space`, `def-delta-slim-geodesic-triangle-and-hyperbolic-space`, `prop-cayley-trees-are-zero-hyperbolic`, `def-gromov-product`, `thm-slim-triangle-gromov-product-and-four-point-hyperbolicity-are-equivalent-up-to-constants`, `lem-thin-quadrilaterals-in-a-hyperbolic-space`, `thm-morse-stability-of-quasi-geodesics`, `thm-hyperbolicity-is-invariant-under-quasi-isometry-for-geodesic-spaces`, `def-hyperbolic-group`, `thm-hyperbolic-group-definition-is-independent-of-finite-generating-set`, `prop-finite-and-free-groups-are-hyperbolic`, `prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic`, `thm-hyperbolic-groups-admit-finite-dehn-presentations`, `cor-hyperbolic-groups-have-solvable-word-problem`, `thm-linear-isoperimetric-characterisation-of-hyperbolic-groups`, `thm-finite-c-prime-one-sixth-presentations-define-hyperbolic-groups`, `thm-infinite-order-elements-of-hyperbolic-groups-are-undistorted`, `thm-centralizer-of-an-infinite-order-element-is-virtually-cyclic`, `cor-abelian-subgroups-of-hyperbolic-groups-are-virtually-cyclic`, `thm-hyperbolic-groups-have-bounded-orders-of-finite-subgroups`, `def-elementary-and-non-elementary-hyperbolic-groups`, `thm-non-elementary-hyperbolic-groups-contain-a-rank-two-free-subgroup`, `def-gromov-boundary-by-asymptotic-sequences`, `lem-asymptoticity-is-an-equivalence-relation-on-gromov-sequences`, `def-boundary-topology-by-gromov-products`, `thm-boundary-topology-is-well-defined-and-quasi-isometry-invariant`, `fs-hyperbolic-group-means-a-group-with-a-hyperbolic-plane-subgroup`, `fs-the-same-delta-works-after-every-change-of-generating-set`, `fs-every-abelian-group-is-hyperbolic`, `fs-all-quasi-geodesics-in-all-metric-spaces-stay-close-to-geodesics`, `fs-the-boundary-definition-needs-no-properness-or-equivalence-check`.
- GT-12 B page: `ex-a-tree-is-zero-hyperbolic`, `ex-the-hyperbolic-plane-is-hyperbolic`, `ex-free-groups-and-their-cantor-boundaries`, `ex-surface-groups-as-hyperbolic-groups`, `ex-a-small-cancellation-hyperbolic-group`, `cex-z-squared-is-not-hyperbolic`, `cex-product-of-two-infinite-groups-need-not-be-hyperbolic`.

Proof-contract artifact authored:

- `research/frontier-20-batch-4.proof-contracts.json` with `53` proof-bearing
  scope items; `node tools/proof-contract.mjs research/frontier-20-batch-4.proof-contracts.json --strict`
  returned `0` errors and `0` warnings.

Provenance rationale actually used:

- The local structural items on both pages were tagged `statement: literature-derived` with `proof: ai-generated` or `ai-altered` when the proof written here is a fresh local derivation or a compressed adaptation of a standard argument.
- The bounded survey/theorem edges stayed source-backed rather than falsely using `proved_here: false` on theorem/proposition ids, because `SCHEMA.md` and `extcheck.mjs` permit `proved_here: false` only on `remark`. Accordingly `thm-onan-scott-classification-of-finite-primitive-groups`, `prop-two-transitive-groups-have-affine-or-almost-simple-socle-type`, the GT-12 equivalence/Dehn/boundary theorems, and the small-cancellation bridge were authored as literature-derived statements with explicit source assumptions in the proof text.
- The only actual recorded-not-proved fallback in this batch is `rem-cfsg-refinements-of-the-onan-scott-reduction`, which is a remark and carries the required `external_dependency` record.

Narrowed or dropped claims:

- None of the planned items were dropped.
- No page split was needed.
- I did make one non-claim repair after validation: `fs-every-primitive-group-has-a-unique-minimal-normal-subgroup` originally cited the B-page witness `ex-two-regular-minimal-normal-subgroups` in its Facts block. I removed that load-bearing wikilink and kept the witness described in plain text so the A page does not depend on a B-page item.
- The GT-4 CFSG-boundary false statements were also adjusted to use sourced `[A1]` assumptions instead of linked `[L2]` facts, because proof-contract regeneration cannot quote a free-prose `proved_here: false` remark as a statement-bearing citation target.
- After an independent audit pass on Wednesday, August 26, 2026, I also narrowed four statements to remove degenerate false positives and sharpened several source-backed proofs into actual mathematical reductions:
  `thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups` now assumes `G` is nontrivial;
  `thm-onan-scott-classification-of-finite-primitive-groups`,
  `prop-two-transitive-groups-have-affine-or-almost-simple-socle-type`, and
  `ex-socle-of-a-finite-solvable-primitive-group` now require degree at least `2`;
  and `thm-slim-triangle-gromov-product-and-four-point-hyperbolicity-are-equivalent-up-to-constants` now assumes the metric space is nonempty and states the Gromov-product condition at every chosen basepoint.
- The same audit pass also strengthened the local proofs or proof reductions for:
  `cor-a-finite-primitive-group-has-at-most-two-minimal-normal-subgroups`,
  `ex-affine-type-agl-one-p`,
  `thm-morse-stability-of-quasi-geodesics`,
  `thm-hyperbolicity-is-invariant-under-quasi-isometry-for-geodesic-spaces`,
  `prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic`,
  `thm-hyperbolic-groups-admit-finite-dehn-presentations`,
  `thm-linear-isoperimetric-characterisation-of-hyperbolic-groups`,
  `thm-infinite-order-elements-of-hyperbolic-groups-are-undistorted`,
  `thm-centralizer-of-an-infinite-order-element-is-virtually-cyclic`,
  `thm-hyperbolic-groups-have-bounded-orders-of-finite-subgroups`,
  `thm-boundary-topology-is-well-defined-and-quasi-isometry-invariant`,
  `fs-hyperbolic-group-means-a-group-with-a-hyperbolic-plane-subgroup`,
  `fs-the-same-delta-works-after-every-change-of-generating-set`,
  and `ex-surface-groups-as-hyperbolic-groups`.
- For the boundary package, I added the intended well-definedness links:
  `def-gromov-boundary-by-asymptotic-sequences` now has
  `justified_by: [lem-asymptoticity-is-an-equivalence-relation-on-gromov-sequences]`,
  and `def-boundary-topology-by-gromov-products` now has
  `justified_by: [thm-boundary-topology-is-well-defined-and-quasi-isometry-invariant]`.

Checks actually run on Wednesday, August 26, 2026:

- `node tools/tsx-run.mjs tools/precheck.mts ...` on the `22` GT-4 proof-bearing items:
  first pass found only canonical formatting repairs, second pass returned
  `22 checked, 0 failing — all clean`.
- `node tools/tsx-run.mjs tools/precheck.mts ...` on the `31` GT-12 proof-bearing items:
  first pass found only canonical formatting repairs, second pass returned
  `31 checked, 0 failing — all clean`.
- `node tools/content-policy.mjs research/frontier-20-batch-4.pages.json`
  returned `content-policy: 66 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  returned the standard run-wide plan summary and the final line
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 432 page(s) with item lists.`
- `node tools/proof-contract.mjs research/frontier-20-batch-4.proof-contracts.json --strict`
  returned `proof-contract: 0 error(s), 0 warning(s), 53/53 item(s) checked`.
- `node tools/depcheck.mjs --quiet`
  is still globally red on unrelated pre-existing repository issues outside
  batch 4, but filtering that output to the batch-4 ids after the B-page-link
  repair returned no local hits.
- `node tools/boundary-audit.mjs research/frontier-20-batch-4.proof-contracts.json`
  initially flagged one templated `nonempty-choice` cluster and one
  false-biconditional worksheet mismatch. After the audit-driven proof/contract
  repairs it returned:

  ```text
  boundary-audit: 424 rows over 1 contract file(s); 411 marked not_applicable
  TEMPLATE REUSE — none at or above 3 members.
  CONTRADICTED DISPOSITIONS — none found by the three detectors.
  ```

- Final replay after the audit-driven repairs:
  `node tools/content-policy.mjs research/frontier-20-batch-4.pages.json`
  still returned `content-policy: 66 scoped item(s), 0 error(s), 0 warning(s)`,
  and
  `node tools/proof-contract.mjs research/frontier-20-batch-4.proof-contracts.json --strict`
  still returned `proof-contract: 0 error(s), 0 warning(s), 53/53 item(s) checked`.
- Full final proof-format replay after the last repair wave:
  `node tools/tsx-run.mjs tools/precheck.mts $(scope-from research/frontier-20-batch-4.proof-contracts.json)`
  returned `53 checked, 0 failing — all clean`.

Current blockers:

- No batch-4 authoring blocker remains on disk.
- Repository-wide `depcheck` is not a clean whole-repo signal at this step
  because of unrelated standing errors outside this batch.

Changed claim constraint: **none**. No item destination, source disposition, or
claim scope changed in this round; the only remaining defect is the missing
local fetch stamp for Bowditch in this shell. The earlier `2/6` fetch-stamp
receipt in this notes file is therefore historical and superseded by the
current `5/6` state.

## Re-harvest verification refresh

On Wednesday, August 26, 2026 I re-read the controlling GT-4 and GT-12 design
anchors in `research/plan-group-theory-track.md` and re-checked
`research/frontier-20-reharvest-plan.json`. The plan's `work[]` filter for
`research/frontier-20-batch-4.coverage.json` is still empty, so batch 4 still
has no plan-named orphaned result to re-back.

Required reruns on Wednesday, August 26, 2026:

- `node tools/coverage-checklist.mjs research/frontier-20-batch-4.coverage.json --require-destination`
  returned `coverage-checklist: 2 page(s), 42 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-backing.mjs --coverage research/frontier-20-batch-4.coverage.json --liveness research/frontier-20-url-liveness.json`
  returned `source-backing: 28 authored result(s) across 1 file(s), every one still backed by an openable source`.
- `node tools/url-sweep.mjs --coverage research/frontier-20-batch-4.coverage.json --out /tmp/frontier-20-batch-4-url-liveness.json --recover --fail-on-dead`
  again failed on runner-local DNS across all six hosts and wrote
  `/tmp/frontier-20-batch-4-url-liveness.json`; this remains transport-only
  evidence, not evidence that the documents are dead.
- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-4.coverage.json --stamp`
  again returned
  `ERROR fetch-check-dead: hyperbolic-spaces-and-hyperbolic-groups: https://bhbowditch.com/papers/bhb-ggtcourse.pdf — EAI_AGAIN`
  and `source-fetch-check: 5/6 source(s) fetch-verified (0 newly stamped), 1 FAILED`.

Independent fetch verification on Wednesday, August 26, 2026:

- I opened all six batch-4 source URLs directly outside the shell. Each is
  currently openable.
- `research/frontier-20-url-liveness.json` still records all six batch-4 URLs
  with `status: 200` and `ok: true`; the Soicher row resolves to the same
  document at
  `https://webspace.maths.qmul.ac.uk/l.h.soicher/designtheory.org/library/encyc/topics/primitive.pdf`.
- The remaining unstamped Bowditch source is live at
  `https://bhbowditch.com/papers/bhb-ggtcourse.pdf`, and the live author index
  `https://bhbowditch.com/preprints.html` still lists `A course on geometric
  group theory` with that same PDF target.

Dead source from the reharvest plan for batch 4: **none**.

Replacement/search: **no replacement applied**. The current dispatch confirms a
zero-row reharvest state, not a source-loss event.

Affected result: **none orphaned**. No harvested batch-4 result lost its last
openable backing source.

Changed claim constraint: **none**. This dispatch leaves
`research/frontier-20-batch-4.coverage.json` unchanged; the only unresolved
issue is the runner-local Bowditch fetch stamp miss.

## Source-scout refresh

On Wednesday, August 26, 2026 I re-ran
`node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-4.coverage.json --stamp`
in this shell. It still returned exactly one failed source record:

```text
ERROR fetch-check-dead: hyperbolic-spaces-and-hyperbolic-groups: https://bhbowditch.com/papers/bhb-ggtcourse.pdf — EAI_AGAIN
source-fetch-check: 5/6 source(s) fetch-verified (0 newly stamped), 1 FAILED
```

Failed source: `https://bhbowditch.com/papers/bhb-ggtcourse.pdf`
for `hyperbolic-spaces-and-hyperbolic-groups`.

Search result: I re-opened the author's live index
`https://bhbowditch.com/preprints.html`, which still lists
`A course on geometric group theory` and links to the same Bowditch PDF. I
also verified a same-text live mirror at
`https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf`: it is the
same 72-page October 2005 document (`A course on geometric group theory`,
Brian H. Bowditch) and preserves the harvested Chapter 2 / Chapter 5.3 range.

Replacement or blocker: **no replacement applied**. A local direct fetch test
against the UCDavis mirror in this runner also failed with `EAI_AGAIN`, so
changing the coverage row would only swap one unstamped URL for another. Under
the dispatch's fetch-verify rule, that would be less honest than leaving the
current live Bowditch row in place. `research/frontier-20-batch-4.coverage.json`
therefore remains unchanged in this source-scout pass.

## Source-scout 2 refresh

On Wednesday, August 26, 2026 I re-ran
`node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-4.coverage.json --stamp`
again after re-reading the live source row. The result is still the same single
failed record:

```text
ERROR fetch-check-dead: hyperbolic-spaces-and-hyperbolic-groups: https://bhbowditch.com/papers/bhb-ggtcourse.pdf — EAI_AGAIN
source-fetch-check: 5/6 source(s) fetch-verified (0 newly stamped), 1 FAILED
```

Failed source: `https://bhbowditch.com/papers/bhb-ggtcourse.pdf`
for `hyperbolic-spaces-and-hyperbolic-groups`.

Search result: I re-verified three same-text alternates in the browser layer:

- `https://bhbowditch.com/preprints.html` still lists `A course on geometric group theory` and links to the Bowditch PDF.
- `https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf` opens as the same 72-page October 2005 notes.
- `https://projecteuclid.org/ebooks/mathematical-society-of-japan-memoirs/a-course-on-geometric-group-theory/toc/10.2969/msjmemoirs/016010000` still resolves to the published MSJ Memoirs edition record for the same text.

Final resolution: after the transport outage cleared, both Bowditch URLs were
downloaded and compared. The author-hosted PDF and the UC Davis mirror have the
same 458,885 bytes and SHA-256
`5e9d4de1edc7c259e1c334376404e4239fe02a5253164876a50d1ce29e2b2f95`.
The coverage row now uses the fetchable UC Davis copy and preserves the author
URL in `original_url`; the mathematical source and locator are unchanged.

## Step-3 fix pass

On Wednesday, August 26, 2026 I re-read
`research/frontier-20-alpha-c-step3-scaffold-review.md`,
`research/frontier-20-alpha-c-step3-verdicts.json`,
`research/frontier-20-alpha-c-scope-decisions.json`, the GT-4 / GT-12 design
anchors in `research/plan-group-theory-track.md`, and the current batch-4
scaffold artifacts.

- Finding id: **none separately issued for batch 4**. The stable alpha-c
  review record for this batch is the pair of verdict entries
  `socles-and-the-onan-scott-landscape -> sufficient` and
  `hyperbolic-spaces-and-hyperbolic-groups -> sufficient`.
  Disposition: **accepted as no-change**.
  Evidence: the batch-4 sections of
  `research/frontier-20-alpha-c-step3-scaffold-review.md` report no missing
  lemma, backward prerequisite, dishonest deferment, or B-page leaf defect on
  either pair, and `research/frontier-20-alpha-c-step3-verdicts.json` records
  both A pages as `sufficient`.
  Changed scaffold record: **none**. No batch-4 manifest row, item id,
  dependency, source locator, or source disposition changed in this fix pass.

- Finding id:
  `4a38974e76b348c3ba8b2349f823fceed3d6f4cb4232ccf4ffd9f561a5b0269b`.
  Disposition: **accepted as standing with no change**.
  Evidence: the Löh coverage row
  `6.5.3 Quasi-convexity -> out-of-scope` matches GT-12 exactly. The design
  block at `research/plan-group-theory-track.md:1665-1720` stops the page at
  hyperbolicity, the word problem, elementary subgroup structure, and the
  proper-geodesic boundary, so quasi-convexity remains a later branch.
  Changed scaffold record: **none**. The existing
  `hyperbolic-spaces-and-hyperbolic-groups` coverage row for `6.5.3
  Quasi-convexity` in `research/frontier-20-batch-4.coverage.json` stays
  unchanged.

- Finding id:
  `90dde420f79f8469dc7ff9ffbf299da9959e2d620f1273b07d5ebdfb3bad26fe`.
  Disposition: **accepted as standing with no change**.
  Evidence: the Bowditch coverage row
  `The conjugacy-problem part of §2.3 -> out-of-scope` also matches GT-12.
  The design block at `research/plan-group-theory-track.md:1695-1699` includes
  finite Dehn presentations and the word problem, but no conjugacy-problem item
  appears in the A-page list, so keeping only the word-problem branch remains
  the honest scope line.
  Changed scaffold record: **none**. The existing Bowditch out-of-scope row in
  `research/frontier-20-batch-4.coverage.json` stays unchanged.
