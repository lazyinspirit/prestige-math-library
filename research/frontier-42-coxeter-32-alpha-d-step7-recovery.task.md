# Step 7 adjudication — group **d**, run `frontier-42-coxeter-32`

You are the group Alpha for batches **5**, **26**, **30**: 3 A/B pair(s), 6 page(s), 26 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

**No step-6 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-42-coxeter-32-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 5 | `finite-lattice-projections-and-coxeter-chain-labels` | A | coxeter-groups | 1726 | `order-zorn-and-the-axiom-of-choice`, `simplicial-subdivision-and-simplicial-approximation`, `relations-functions-and-quotients`, `chains-antichains-sperner-and-dilworth`, `incidence-algebras-and-mobius-inversion` |
| 5 | `finite-lattice-projections-and-coxeter-chain-labels-examples` | B | coxeter-groups | 1727 | `finite-lattice-projections-and-coxeter-chain-labels` |
| 26 | `spherical-parabolic-cosets-and-the-davis-complex` | A | coxeter-groups | 1768 | `parabolic-subgroups-and-double-coset-geometry`, `finite-reflection-arrangements-and-spherical-coxeter-complexes`, `coxeter-polyhedral-gluings-and-intrinsic-metrics`, `cw-complexes-and-cellular-homology`, `simplicial-subdivision-and-simplicial-approximation`, `simplicial-complexes-and-simplicial-homology`, `hurewicz-whitehead-freudenthal-and-cw-approximation` |
| 26 | `spherical-parabolic-cosets-and-the-davis-complex-examples` | B | coxeter-groups | 1769 | `spherical-parabolic-cosets-and-the-davis-complex`, `free-products-and-amalgamation`, `graphs-of-groups-and-bass-serre-theory` |
| 30 | `davis-cat-zero-geometry-and-finite-subgroup-fixed-points` | A | coxeter-groups | 1776 | `spherical-parabolic-cosets-and-the-davis-complex`, `large-spherical-metric-flags-and-the-moussong-girth-theorem`, `relations-functions-and-quotients` |
| 30 | `davis-cat-zero-geometry-and-finite-subgroup-fixed-points-examples` | B | coxeter-groups | 1777 | `davis-cat-zero-geometry-and-finite-subgroup-fixed-points` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `finite-lattice-projections-and-coxeter-chain-labels` — Finite Lattice Projections and Coxeter Chain Labels (4 item(s))

- `def-cg-finite-lattice-congruence-and-interval-projections` · definition — Finite lattice congruences, interval endpoints and descending rooted-chain labels
- `lem-cg-lattice-quotient-descent-and-class-intervals` · lemma — Lattice quotient descent, class intervals and monotone endpoints
- `thm-cg-finite-lattice-interval-congruence-criterion` · theorem — The interval criterion for a lattice congruence: interval classes with monotone endpoints
- `lem-cg-lexicographic-chain-shelling-and-mobius-cancellation` · lemma — Lexicographic chain shelling and the falling-chain Möbius formula

### `finite-lattice-projections-and-coxeter-chain-labels-examples` — Finite Lattice Projections and Coxeter Chain Labels — Examples (3 item(s))

- `ex-cg-interval-congruence-criterion-on-a-chain-and-a-diamond` · example — The interval criterion checked on a three-element chain and a diamond
- `cex-cg-interval-partition-with-nonmonotone-endpoints-is-not-a-congruence` · counterexample — A partition into intervals with non-monotone endpoints need not be a lattice congruence
- `ex-cg-rank-three-chain-labeling-and-order-complex-facets` · example — A rank-three chain labeling translated into facets of the order complex

### `spherical-parabolic-cosets-and-the-davis-complex` — Spherical Parabolic Cosets and the Davis Complex (7 item(s))

- `def-cg-spherical-nerve-coset-poset-and-davis-realization` · definition — Spherical subsets, the nerve, the poset of spherical cosets, and the Davis realization
- `lem-cg-spherical-coset-inclusion-and-intersection` · lemma — Equality, inclusion and intersection of spherical cosets, and the quotient poset of the Davis action
- `lem-cg-canonical-cell-exposed-faces-and-normal-cones` · lemma — Exposed faces and normal cones of the finite Coxeter cell conv(Wx)
- `lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics` · lemma — Finite Coxeter orbit polytopes C_T and the metric compatibility of their faces
- `thm-cg-davis-complex-cell-incidence-and-stabilizers` · theorem — The Davis complex as a glued Coxeter-cell complex: incidence, stabilizers, proper action and compact chamber quotient
- `lem-cg-davis-cellulation-cw-structure-and-cayley-skeleta` · lemma — The Coxeter cellulation of the Davis complex is a CW complex with Cayley graph and Cayley 2-complex as skeleta
- `thm-cg-davis-complex-is-simply-connected` · theorem — The Davis complex is simply connected

### `spherical-parabolic-cosets-and-the-davis-complex-examples` — Spherical Parabolic Cosets and the Davis Complex — Examples (5 item(s))

- `ex-cg-a2-davis-complex-hexagon-and-boundary-circle` · example — The A2 Davis complex is a hexagon whose boundary is the Coxeter complex circle
- `ex-cg-b2-davis-complex-octagon-and-boundary-circle` · example — The B2 Davis complex is an octagon whose boundary is the Coxeter complex circle
- `ex-cg-right-angled-cube-davis-complex` · example — The right-angled cube Davis complex and its boundary 2-sphere
- `ex-cg-universal-coxeter-tree-davis-complex` · example — The universal Coxeter Davis complex is a tree
- `ex-cg-spherical-residues-chamber-quotient-and-finite-versus-infinite` · example — Residues, the compact chamber quotient, and the finite Coxeter sphere versus the contractible Davis cell

### `davis-cat-zero-geometry-and-finite-subgroup-fixed-points` — Davis CAT(0) Geometry and Finite Subgroup Fixed Points (4 item(s))

- `lem-cg-complete-cat-zero-circumcenters-and-convex-fixed-sets` · lemma — Circumcenters of bounded sets and fixed sets of isometries in complete CAT(0) spaces
- `lem-cg-davis-angular-vertex-link-is-metric-flag-nerve` · lemma — The angular link of a vertex of the Davis complex is the large metric flag nerve
- `thm-cg-finite-rank-davis-moussong-cat-zero-theorem` · theorem — The Davis complex of a finite-rank Coxeter system is CAT(0) (Moussong's theorem)
- `thm-cg-finite-subgroups-lie-in-spherical-parabolics` · theorem — Finite subgroups of a Coxeter group lie in spherical parabolics

### `davis-cat-zero-geometry-and-finite-subgroup-fixed-points-examples` — Davis CAT(0) Geometry and Finite Subgroup Fixed Points — Examples (3 item(s))

- `ex-cg-circumcenter-of-a-finite-orbit-in-a-metric-tree` · example — Circumcenters of finite sets in the infinite dihedral Davis line
- `ex-cg-link-angles-of-a2-affine-a2-and-universal-coxeter-nerve` · example — Link angles in A2, affine A2 and the universal Coxeter nerve
- `ex-cg-fixed-points-and-cell-stabilizers-in-the-infinite-dihedral-tree` · example — Fixed points of finite subgroups in the infinite dihedral tree and their cell stabilizers

## Your seams

Your pages depend on another group's:

- `spherical-parabolic-cosets-and-the-davis-complex` requires `parabolic-subgroups-and-double-coset-geometry` (group f, batch 10)
- `spherical-parabolic-cosets-and-the-davis-complex` requires `finite-reflection-arrangements-and-spherical-coxeter-complexes` (group c, batch 17)
- `spherical-parabolic-cosets-and-the-davis-complex` requires `coxeter-polyhedral-gluings-and-intrinsic-metrics` (group e, batch 6)
- `davis-cat-zero-geometry-and-finite-subgroup-fixed-points` requires `large-spherical-metric-flags-and-the-moussong-girth-theorem` (group e, batch 22)

Another group's pages depend on yours:

- `finite-reflection-arrangements-and-spherical-coxeter-complexes` (group c) requires your `finite-lattice-projections-and-coxeter-chain-labels`
- `bruhat-interval-labels-shellings-and-mobius-functions` (group f) requires your `finite-lattice-projections-and-coxeter-chain-labels`
- `bipartite-coxeter-elements-and-ordered-root-complexes` (group j) requires your `finite-lattice-projections-and-coxeter-chain-labels`
- `heaps-commutation-classes-and-fully-commutative-elements` (group k) requires your `finite-lattice-projections-and-coxeter-chain-labels`
- `sortable-projections-and-finite-cambrian-lattices` (group k) requires your `finite-lattice-projections-and-coxeter-chain-labels`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-42-coxeter-32-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-7 closure recovery, `frontier-42-coxeter-32`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step7-workflow.mjs`, `briefs/step7-adjudicator.md`
and `briefs/step7-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.
