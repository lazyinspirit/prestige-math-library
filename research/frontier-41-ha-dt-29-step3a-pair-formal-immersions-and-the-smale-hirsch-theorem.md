# Step 3a scope review — Formal Immersions and the Smale--Hirsch Theorem

- **Run:** `frontier-41-ha-dt-29` (role alpha, label
  `step3a-pair-formal-immersions-and-the-smale-hirsch-theorem-ceb4438c35f019b8`;
  batch 17 owns only this pair)
- **Pair:** A `formal-immersions-and-the-smale-hirsch-theorem` (order 565,
  differential-topology, 23 items) / B
  `formal-immersions-and-the-smale-hirsch-theorem-examples` (order 566, 5 items)
- **Decision:** **`sufficient`** — all 16 designed A rows and all 5 designed B rows
  are present at design strength, the 7 local additions are consumed (one
  exception, O1), every harvested source disposition has a checkable resolution,
  and all 200 dependency edges resolve to published or current-scaffold items.
  Three prerequisite/support findings (F1 confirmed; F2, F3 uncertain,
  dischargeable at authoring) are recorded below with recommended owner action.
- **Assessed scope, not proof correctness.** No scaffold or item file was edited;
  no item approval and no owner record is written.

## 1. Pair reviewed

| page | kind | order | items | decision |
| --- | --- | ---: | ---: | --- |
| `formal-immersions-and-the-smale-hirsch-theorem` | A | 565 | 23 | **sufficient** |
| `formal-immersions-and-the-smale-hirsch-theorem-examples` | B | 566 | 5 | companion, covered by the A decision |

A inventory (manifest order, 6 definitions, 12 lemmas, 2 theorems, 1 corollary,
2 remarks): `def-formal-immersion-between-smooth-manifolds`,
`def-weak-compact-open-smooth-topology-on-mapping-spaces`,
`lem-the-weak-smooth-topology-is-independent-of-the-chosen-atlas`,
`def-space-of-immersions-and-space-of-formal-immersions`,
`lem-smooth-families-and-path-components-in-the-weak-topology`,
`def-derivative-map-from-immersions-to-formal-immersions`,
`lem-the-derivative-map-is-continuous`, `def-regular-homotopy-of-immersions`,
`lem-parametric-immersion-extension-on-a-disk`,
`lem-restriction-of-formal-immersion-data-has-the-parametric-lifting-property`,
`lem-regular-sublevels-are-compact-manifolds-with-boundary`,
`lem-open-manifolds-admit-exhaustions-with-no-caps`,
`lem-open-manifolds-admit-handle-filtrations-without-top-index-handles`,
`lem-formal-immersion-homotopies-extend-over-a-subcritical-handle`,
`lem-formal-immersion-homotopies-extend-over-a-collar`,
`thm-smale-hirsch-for-open-source-manifolds`,
`def-normal-bundle-of-a-formal-immersion`,
`lem-formal-immersion-gives-the-tangent-normal-bundle-identity`,
`lem-positive-codimension-thickening-reduces-closed-sources-to-the-open-case`,
`thm-smale-hirsch-immersion-theorem`,
`cor-regular-homotopy-classes-of-immersions-are-formal-homotopy-classes`,
`rem-smale-hirsch-is-a-weak-homotopy-equivalence-not-asserted-as-an-actual-homotopy-equivalence`,
`rem-a-closed-n-manifold-cannot-immerse-in-r-n`.

B inventory (5): `ex-immersing-the-circle-in-the-plane-from-a-formal-line-monomorphism`,
`ex-the-standard-sphere-immersion-and-its-normal-line`,
`ex-an-open-parallelizable-manifold-immerses-in-euclidean-space-of-equal-dimension`,
`cex-a-closed-manifold-with-formally-plausible-rank-data-needs-positive-codimension`,
`cex-a-bundle-map-with-rank-drop-is-not-a-formal-immersion`.

## 2. Design reconciliation

Controlling prose: `research/plan-differential-topology-track.md` §DT-25
(lines 1295--1337), summary row line 54 ("bundle monomorphisms, relative
parametric classification"), §8 source row line 1675, §10 choice-strength row
line 1934, §12.4 `requires` row line 2241, §12.5 binding amendments lines
2304--2308, §12.6 disposition line 2449.

1. **Design rows 1--16 all present by id and strength** (16 items; the seven
   further A items are local closure additions). Design item 2 was split into
   `def-weak-compact-open-smooth-topology-on-mapping-spaces` plus
   `lem-the-weak-smooth-topology-is-independent-of-the-chosen-atlas`, exactly the
   split §12.5 sanctions ("fix one topology: use the weak/compact-open $C^\infty$
   topology"). The 5 B rows are present with design ids and roles (circle $\to$
   rotation number; sphere $\to$ tests item 14; open parallelizable $\to$ tests
   item 9/equidimensional open theorem; torus closed case $\to$ tests item 16;
   rank-drop $\to$ checks the definition).
2. **§12.5 clauses honoured.** One topology only (weak/compact-open), used in
   every item and recorded in the remark; the relative parametric theorem is
   stated for compact parameter pairs; item 7 proves the no-top-index handle
   exhaustion for an open manifold from a proper exhaustion + Sard and is not
   derived from DT-6 alone.
3. **Item 7 sharpening** (recorded in the batch-17 notes): the design's
   one-line "arrange a proper Morse function without index $m$" is realised as
   the equivalent cap-free exhaustion plus a no-$m$-handle handle filtration,
   which is what the induction consumes. This matches §12.5's wording ("prove
   the no-top-index handle exhaustion"), not a weaker claim.
4. **Hard-proof closure conditions met by separate rows:** disk extension
   (`lem-parametric-immersion-extension-on-a-disk`), restriction lifting
   (`lem-restriction-...`), handle induction
   (`lem-formal-immersion-homotopies-extend-over-a-subcritical-handle` plus the
   collar lemma), closed-source thickening
   (`lem-positive-codimension-thickening-...`); equal dimension confined to
   `thm-smale-hirsch-for-open-source-manifolds` ($m\le n$, open/compact
   componentwise); the conclusion is a weak homotopy equivalence, and only its
   $\pi_0$ consequence is used downstream (corollary; the mapping-space
   strengthening is explicitly disclaimed by
   `rem-smale-hirsch-is-a-weak-homotopy-equivalence-...`).
5. **Local additions and their consumers** (reverse-dependency scan of the two
   pages): `def-weak-compact-open-...` (5 consumers),
   `lem-smooth-families-and-path-components-in-the-weak-topology` (4),
   `lem-the-derivative-map-is-continuous` (1),
   `lem-regular-sublevels-are-compact-manifolds-with-boundary` (1),
   `lem-open-manifolds-admit-exhaustions-with-no-caps` (1),
   `lem-formal-immersion-homotopies-extend-over-a-collar` (2).
   `lem-the-weak-smooth-topology-is-independent-of-the-chosen-atlas` currently
   has no consumer anywhere in the run and is not named in any `justified_by`
   field (observation O1, non-blocking).
6. **`requires` conformance:** the manifest array equals §12.4 line 2241
   exactly (DT-2, DT-5, DT-6, DG bundles, Sard, Whitney embedding/tubular,
   obstruction theory, topological bundles).

## 3. Source coverage

Seven treatments were read in full and stamped by the batch-17 worker:
Ranicki Ch. 7 §7.4 (pp. 142--146); Francis, Lecture 3 (pp. 1--4); Francis,
Lectures 5--6 (pp. 1--4); Wilhelm, §1--§2 (pp. 1--4, the design's "MW");
Cohen Ch. 7 §2 (pp. 226--232, recovered from the 404 `bookR3.pdf` to the
author's `bookR4.pdf` at the same chapter/pages); Nicolaescu Ch. 2 §2.1--§2.2
and Ch. 1 §1.1--§1.2; Francis, Lecture 11 (pp. 1--3). The coverage file
disposes 50 harvested rows as 13 `included`, 14 `inline`, 11 `deferred` and
6 `already-published`, 6 `out-of-scope` (0 errors, 1 warning).

1. **The `coverage-low-yield` warning (13/50 scaffolded) is a deliberate design
   property, confirmed.** Every deferral names a resolving destination that is
   present in this run: Ranicki Def. 7.36/Prop. 7.39/Example 7.40 and Francis
   LSQS and Cohen Thm 7.13 $\to$ `regular-homotopy-and-sphere-eversion`
   (order 567); Ranicki Def. 7.37/Lemma 7.38 and Cohen Thm 7.7 $\to$
   `characteristic-class-obstructions-to-immersions-and-embeddings` (571);
   Nicolaescu Cor. 2.2.6 $\to$ `morse-inequalities-and-the-handle-chain-complex`
   (535); Francis Lecture 11 §3 $\to$ `foliation-holonomy-and-the-holonomy-groupoid`
   (573). These are the pages this pair's deferred classification refinements
   belong to; no designed claim of DT-25 is among them.
2. **The 6 `already-published` rows** map to `cor-regular-sublevels-are-diffeomorphic`,
   `thm-one-critical-point-handle-attachment`,
   `lem-local-critical-value-lowering-preserves-the-upper-sublevel`,
   `prop-simultaneous-attachment-at-a-morse-critical-value`, `thm-morse-lemma`,
   `thm-morse-functions-are-dense-by-relative-jet-transversality`; all six are
   `status: published` on disk.
3. The out-of-scope rows (Ranicki §7.5 singularities; Wilhelm Thms 2--4 and §3;
   Cohen's immersion-conjecture material; Francis Lecture 11 §2 submersions;
   Nicolaescu §2.3--§2.4) each carry a specific reason and have no consumer in
   this pair, so no designed result is unsupported.

## 4. Prerequisites

- **Dependency resolution (checked independently of the batch-17 notes):** the
  28 items carry 200 `deps` edges with 24 distinct in-run targets (21 on this
  page, 3 on the DT-6 page) and 65 distinct published targets. None is missing;
  every published target exists on disk with `status: published`; no target is
  a draft. `node tools/manifest-deps.mjs` reports 28 items, 0 missing,
  0 errors; `node tools/item-dependency-levels.mjs check --run
  frontier-41-ha-dt-29` exits 0 (883 items, levels consistent). No forward or
  self edge occurs inside either page; in-pair levels run 0--13.
- **`requires` pages:** 7 of 8 are published on disk
  (`morse-functions-critical-values-and-genericity`,
  `sublevel-deformation-and-the-handle-attachment-theorem`,
  `smooth-vector-bundles-and-sections`, `sard-theorem-and-transversality`,
  `whitney-embedding-tubular-neighbourhoods-and-approximation`,
  `obstruction-theory-postnikov-towers-and-classifying-spaces`,
  `topological-vector-bundles-and-grassmannian-classification`). The eighth,
  `handle-decompositions-duality-and-rearrangement`, is the in-run batch-1
  scaffold (order 527 $<$ 565; step-3a-reviewed `sufficient`, not yet
  authored). Its interface is the one consumed here: the 4 item-level uses are
  `def-smooth-cobordism-triad-for-morse-theory`,
  `def-handle-decomposition-relative-to-the-incoming-boundary` and
  `prop-dual-elimination-of-top-index-handles`; each consumer only needs the
  empty-incoming-face convention and the $M_1\neq\varnothing$ hypothesis, both
  stated in the batch-1 statements. The five cross-batch rows
  (`...batch-17.cross-batch-dependencies.json`) are `open`, correctly, while
  batch 1 is unauthored.
- **Usage of the two AT `requires` pages:** `topological-vector-bundles-and-grassmannian-classification`
  is consumed through `def-stiefel-space-grassmannian-and-tautological-bundle`
  and `def-frame-bundle-and-associated-vector-bundle` (disk lemma).
  `obstruction-theory-postnikov-towers-and-classifying-spaces` is not consumed
  by any item of the pair; the classification computations that would use it
  are deferred to DT-26/DT-28 with resolving destinations (O2, non-blocking:
  an unused declared prerequisite is not a scope hole).
- **§12.5's "must cite DT-2's proper Morse exhaustion" is not literally met.**
  `lem-open-manifolds-admit-exhaustions-with-no-caps` cites
  `thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function`
  (published, `smooth-partitions-of-unity-and-exhaustions`) plus
  `cor-regular-values-have-null-complement-and-are-dense` (published, Sard page),
  and cites no DT-2 item. The amendment's purpose — proving the no-top-index
  exhaustion rather than deriving it from DT-6 — is served, and the batch-17
  notes record the route; owner confirmation is recommended (O3, non-blocking).

## 5. Unmet-prerequisite findings (Step-3a rule)

**F1 (confirmed at statement level; needs an owner decision before Step 3b).**
*Consuming items:* `lem-smooth-families-and-path-components-in-the-weak-topology`,
`lem-parametric-immersion-extension-on-a-disk`,
`thm-smale-hirsch-for-open-source-manifolds`, `thm-smale-hirsch-immersion-theorem`,
`cor-regular-homotopy-classes-of-immersions-are-formal-homotopy-classes`.
*Required prerequisite claim and hypotheses:* a definition of **smooth manifolds
with corners (and smooth maps of their strata)**, and a **relative
Whitney-approximation / smoothing statement for continuous maps on a compact
product $P\times M$ when the parameter domain $P$ has boundary or corners**
(smooth near a closed subset, homotopy rel that subset) — at minimum for the
case $P=[0,1]$, which the smoothing lemma itself invokes to identify path
components with regular homotopy classes, and for the compact parameter pairs
over which the two Smale--Hirsch parametric statements are quantified.
*Evidence of absence:* `items/def-smooth-manifold.md` defines a smooth manifold
as a topological manifold **without** boundary; the boundary notion that exists
is `def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary` (half-space
charts only); no item in `items/` and no item in the 30 current batch manifests
defines manifolds with corners (the phrase occurs only in this pair's statements
within the run, and published items take care to avoid it: e.g.
`lem-the-de-rham-homotopy-formula-extends-to-boundary-manifolds` — "no general
theory of manifolds with corners is invoked"; `lem-stokes-theorem-for-the-standard-simplex`
— "No Stokes theorem for manifolds with corners is assumed"); and every
published approximation theorem used by the route is stated for boundaryless
manifolds (`thm-whitney-approximation-for-manifold-valued-maps`,
`thm-relative-whitney-approximation-for-manifold-valued-maps`,
`thm-strong-whitney-approximation-by-transverse-maps` — "smooth manifolds
without boundary"). The pair's own hedge "as in the library's conventions" has
no referent. *Uncertainty:* whether the owner prefers a new definitional item
or a restriction of the parameter class; both are compatible with the design's
§12.5 wording ("compact parameter pairs"). *Recommended owner action:* authorise
either (i) a small scaffold addition in this pair — a convention/definition item
for the admissible compact parameter pairs plus a lemma supplying the relative
smoothing over compact parameter domains with boundary (or corners, if the
convention is added) — or (ii) narrowing the parametric statements to compact
smooth manifolds (boundaryless) plus an explicit added lemma covering $P=[0,1]$
and $P=D^k$; either way the dependency records must be updated before item
authoring. Do not edit the scaffold here.

**F2 (minor / uncertain; probably dischargeable inline).** *Consuming items:*
`def-weak-compact-open-smooth-topology-on-mapping-spaces`,
`lem-smooth-families-and-path-components-in-the-weak-topology`,
`rem-smale-hirsch-is-a-weak-homotopy-equivalence-...`. *Required claim:* the
comparison of the weak compact-open $C^\infty$ topology with the **strong (fine)
Whitney topology** — "on a compact source this topology is the strong (fine)
Whitney topology; on a noncompact source it is strictly weaker" — and openness
of the immersion condition in it. *Evidence of absence:* no item defines the
strong/fine Whitney topology on function spaces (the pair's definition and
remark assert the comparison; the only published interface is the informal
basis description [A1] inside
`thm-morse-functions-are-dense-by-relative-jet-transversality`, plus its use in
`thm-morse-functions-form-a-residual-subset`). *Recommended action:* authorise
the Step-3b author to prove openness of $\mathrm{Imm}$ directly in the weak
topology for compact $M$ (finitely many chart-adapted basic sets suffice) and
to either drop the strong-topology comparison or cite/define it; merge with the
F1 remedy if a convention item is added.

**F3 (uncertain; support gap, dischargeable at authoring).** *Consuming items:*
`lem-positive-codimension-thickening-reduces-closed-sources-to-the-open-case`
(statement: "$D(\nu_F)$ … a compact manifold with boundary of dimension
$m+(n-m)=n$"; its strategy applies the open-source theorem to
$\operatorname{int}D(\nu_F)$) and, through it,
`thm-smale-hirsch-immersion-theorem`. *Required claim:* for a smooth vector
bundle $\nu$ with a smooth metric over a closed smooth base, the closed unit
disk bundle $D(\nu)$ is a compact smooth manifold with boundary, with boundary
the unit sphere bundle, and with smooth projection and zero section.
*Evidence of absence:* the published disk-bundle interface
`def-disk-bundle-sphere-bundle-and-thom-space` (and
`def-disk-sphere-and-thom-space-of-a-metric-vector-bundle`) defines $D_h(E)$,
$S_h(E)$, $\mathrm{Th}_h(E)$ topologically and remarks on smooth structure only
on the open part / the Thom-space complement of the basepoint ("No smooth
manifold structure at the Thom basepoint is presumed"); no item states the
smooth-manifold-with-boundary structure of $D(\nu)$ (grep over `items/` and the
30 batch manifests), and the Euclidean tubular-neighbourhood theorem in the
deps supplies only the open tube $\Omega_\delta$. *Recommended action:*
authorise a small local item (or an explicit, named in-strategy construction)
for the disk bundle as a compact smooth manifold with boundary, reusing
`ex-the-closed-ball-and-its-sphere-boundary`,
`def-smooth-structure-generated-by-an-atlas`, the local trivializations of the
bundle and compactness of the base; add the corresponding `deps`/`justified_by`
entry.

None of F1--F3 is an omitted topic or result of the DT-25 design, so the pair's
scope decision remains `sufficient`; F1 is the only finding that should be
resolved (by owner-authorised addition or hypothesis restriction) before
Step-3b authoring treats the parametric statements as fully supported.

## 6. Non-blocking observations

- **O1.** `lem-the-weak-smooth-topology-is-independent-of-the-chosen-atlas` has
  no consumer and no `justified_by` reference in the run; recommend the author
  either wire it (e.g. as the definition's justification, or a dep where atlas
  independence is used) or record it as convention support.
- **O2.** `obstruction-theory-postnikov-towers-and-classifying-spaces` is
  declared in `requires` but consumed by no item; the deferrals that would use
  it have resolving destinations (DT-26, DT-28).
- **O3.** See §4, item 7's route replaces "cite DT-2's proper Morse exhaustion"
  by the published exhaustion + Sard; ask the owner to confirm the substitution.
- **O4.** The coverage file harvests only the A page; the five B items carry
  item-level references to the same treatments. This matches the DT-6 batch's
  form and is a batch-form inconsistency, not a missing source.
- **O5.** The single coverage warning (`coverage-low-yield`, 13/50) is confirmed
  as a design property (classification refinements owned by DT-26/DT-28), not a
  scope defect.

## 7. Records reviewed

`research/frontier-41-ha-dt-29-batch-17.pages.json` (both pages, 28 items),
`...batch-17.coverage.json`, `...batch-17.notes.md`,
`...batch-17.cross-batch-dependencies.json`, `...batch-17-url-liveness.json`,
`research/plan-spec.json` (page entries 565/566),
`research/plan-differential-topology-track.md` (lines 54, 1295--1337, 1675,
1934, 2241, 2304--2308, 2449),
`research/frontier-41-ha-dt-29-owner-authoring-direction.md` (DT binding
clauses at lines 75--95), the batch-1 DT-6 manifest statements,
the batch-18/20 inventories (deferral destinations), published supplier
statements in `items/` (the 65 dependency targets, the disk-bundle interface,
the Whitney approximation items, `def-smooth-manifold`, the boundary/corner
conventions, `ex-the-closed-ball-and-its-sphere-boundary`,
`rem-the-hairy-ball-theorem-for-even-dimensional-spheres`), and the tool runs
`node tools/manifest-deps.mjs` (0 errors),
`node tools/coverage-checklist.mjs ... --require-destination`
(0 errors, 1 warning), `node tools/item-dependency-levels.mjs check`
(exit 0), and `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29
--phase scope` (pair among the still-open scope reviews before this record).

## 8. Decision recording

```
node tools/step3-decisions.mjs record-scope --run frontier-41-ha-dt-29 \
  --page formal-immersions-and-the-smale-hirsch-theorem --decision sufficient \
  --reason "Scope sufficient: all 16 design A rows and 5 B rows of plan-differential-topology-track.md §DT-25 (lines 1295-1337) present at design strength; §12.5 amendments honoured (single weak/compact-open topology via the sanctioned item-2 split; compact-parameter-pair parametric forms; item 7 proves the no-top-index exhaustion independently of DT-6); 7 local closure items, 6 consumed; requires = §12.4 line 2241, 7/8 prerequisite pages published and the 8th (handle-decompositions-duality-and-rearrangement, order 527) an earlier in-run scaffold with matching interface; all 200 deps resolve (24 in-run/65 published, none missing/draft, no forward edges); coverage 50 rows = 13 included/14 inline/11 deferred/6 already-published/6 out-of-scope, every deferral destination present (DT-26 567, DT-28 571, morse-inequalities 535, foliation pages) so the coverage-low-yield warning is confirmed by design; no designed topic omitted. Unmet-prerequisite findings for owner action: F1 (confirmed) the parametric statements quantify over compact parameter pairs with boundary/corners and the smoothing lemma uses P=[0,1] and P x M, but no item in the published library or the current scaffold defines smooth manifolds with corners or supplies relative Whitney smoothing over boundary/corner parameter domains (def-smooth-manifold is boundaryless; published approximation items are boundaryless; corner theory explicitly disclaimed in published items) - recommend owner authorises either a scaffold addition (admissible-parameter-pair convention + relative smoothing lemma) or a narrowing to boundaryless/boundary parameters with an added [0,1]/D^k lemma, deps updated before authoring; F2 (minor) strong/fine Whitney topology is used comparatively but undefined, dischargeable by proving openness in the weak topology; F3 (uncertain) D(nu_F) as a compact smooth manifold with boundary has no named supplier, dischargeable inline or by a small local lemma. Non-blocking: unused atlas-independence lemma O1, unused obstruction-theory requires page O2, item-7 route substitutes the published exhaustion+Sard for the literal DT-2 citation O3, B page has no harvest rows O4. Report: research/frontier-41-ha-dt-29-step3a-pair-formal-immersions-and-the-smale-hirsch-theorem.md"
```
