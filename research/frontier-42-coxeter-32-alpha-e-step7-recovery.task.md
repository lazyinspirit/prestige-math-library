# Step 7 adjudication — group **e**, run `frontier-42-coxeter-32`

You are the group Alpha for batches **6**, **8**, **22**: 3 A/B pair(s), 6 page(s), 25 item(s), 0 open rejection(s) over 0 item(s).

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
| 6 | `coxeter-polyhedral-gluings-and-intrinsic-metrics` | A | coxeter-groups | 1728 | `metric-spaces`, `compactness-in-metric-spaces`, `simplicial-complexes-and-simplicial-homology`, `simplicial-subdivision-and-simplicial-approximation`, `ascoli-arzela`, `cayley-graphs-word-metrics-and-quasi-isometry`, `relations-functions-and-quotients`, `measures-and-their-basic-properties` |
| 6 | `coxeter-polyhedral-gluings-and-intrinsic-metrics-examples` | B | coxeter-groups | 1729 | `coxeter-polyhedral-gluings-and-intrinsic-metrics`, `areas-of-elementary-plane-figures` |
| 8 | `spherical-simplex-metrics-angular-links-and-cones` | A | coxeter-groups | 1732 | `coxeter-polyhedral-gluings-and-intrinsic-metrics`, `real-forms-and-reflection-geometry`, `direct-matrix-factorisations-lu-cholesky-and-qr`, `simplicial-complexes-and-simplicial-homology`, `further-trigonometric-identities-and-inverses`, `hilbert-space-geometry-and-riesz-representation` |
| 8 | `spherical-simplex-metrics-angular-links-and-cones-examples` | B | coxeter-groups | 1733 | `spherical-simplex-metrics-angular-links-and-cones` |
| 22 | `large-spherical-metric-flags-and-the-moussong-girth-theorem` | A | coxeter-groups | 1760 | `cat-comparison-link-criteria-and-local-globalization`, `finite-coxeter-diagrams-and-complete-classification`, `short-loop-polygons-and-quantitative-energy-decrease` |
| 22 | `large-spherical-metric-flags-and-the-moussong-girth-theorem-examples` | B | coxeter-groups | 1761 | `large-spherical-metric-flags-and-the-moussong-girth-theorem` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `coxeter-polyhedral-gluings-and-intrinsic-metrics` — Coxeter Polyhedral Gluings and Intrinsic Metrics (5 item(s))

- `def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric` · definition — Abstract isometric polyhedral gluings and the chain metric
- `lem-cg-polyhedral-face-coherence-and-uniform-star-radius` · lemma — Face coherence, global hat coordinates and a uniform star radius
- `thm-cg-polyhedral-chain-metric-topology-and-properness` · theorem — The chain metric is a metric, its topology is the weak topology, and the space is proper and complete
- `lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity` · lemma — Length in a metric target: lower semicontinuity and arc-length reparametrization
- `thm-cg-proper-polyhedral-spaces-have-minimizing-geodesics` · theorem — Under the Axiom of Choice, proper polyhedral spaces admit minimizing geodesics

### `coxeter-polyhedral-gluings-and-intrinsic-metrics-examples` — Coxeter Polyhedral Gluings and Intrinsic Metrics — Examples (3 item(s))

- `ex-cg-interval-realized-tree-versus-vertex-graph-metric` · example — An interval-realized tree and its discrete vertex metric
- `cex-cg-shrinking-edge-ray-is-locally-finite-but-not-complete` · counterexample — A locally finite shrinking-edge ray is not complete
- `ex-cg-hexagonal-a2-cell-and-graph-distance` · example — The hexagonal $A_2$ cell: Euclidean cell metric versus graph distance

### `spherical-simplex-metrics-angular-links-and-cones` — Spherical Simplex Metrics, Angular Links, and Cones (4 item(s))

- `def-cg-spherical-gram-simplex-and-angular-link` · definition — Spherical Gram simplices and angular links of Euclidean faces
- `lem-cg-spherical-simplex-existence-and-link-gram-formula` · lemma — Gram realisations, radial normalisation, finite spherical complexes and link Gram formulas
- `def-cg-euclidean-cone-and-spherical-join-metrics` · definition — The angular path metric, the Euclidean cone and spherical joins
- `thm-cg-cone-join-metric-and-local-product-chart` · theorem — The cone and join metrics, truncation agreement and the local product chart

### `spherical-simplex-metrics-angular-links-and-cones-examples` — Spherical Simplex Metrics, Angular Links, and Cones — Examples (3 item(s))

- `ex-cg-spherical-simplex-and-vertex-link-schur-complement` · example — A spherical simplex from a Gram matrix and its vertex-link Schur complement
- `ex-cg-link-edge-lengths-versus-dihedral-angles` · example — Link edge lengths versus dihedral mirror angles in type I_2(m)
- `ex-cg-disconnected-universal-coxeter-nerve-and-angular-truncation` · example — The disconnected universal-Coxeter nerve and the angular truncation convention

### `large-spherical-metric-flags-and-the-moussong-girth-theorem` — Large Spherical Metric Flags and the Moussong Girth Theorem (8 item(s))

- `def-cg-large-spherical-metric-flag-and-almost-negative-matrix` · definition — Finite large spherical complexes, their almost-negative matrices, the metric flag condition, and links
- `lem-cg-cat-zero-products-and-cat-one-joins` · lemma — Products of CAT(0) spaces, joins of CAT(1) spaces, and round spheres
- `lem-cg-metric-flag-links-and-local-cat-one` · lemma — Face links of large metric flag complexes, and the inductive local CAT(1) criterion
- `def-cg-coxeter-nerve-and-moussong-metric` · definition — The Coxeter nerve and its Moussong metric
- `lem-cg-minimum-nonshrinkable-loop-and-radial-vertex-insertion` · lemma — Minimum nonshrinkable loops, radial vertex cones, and the excursion of length $\pi$
- `thm-cg-large-metric-flag-short-loop-radial-contradiction` · theorem — Nonshrinkable edge loops of length $<2\pi$ have three edges, and the finite locally CAT(1) large metric flag complex is CAT(1)
- `thm-cg-large-metric-flag-complexes-are-cat-one` · theorem — Finite large metric flag complexes are CAT(1)
- `cor-cg-coxeter-nerve-is-cat-one-and-has-girth-at-least-two-pi` · corollary — The Coxeter nerve is CAT(1), and its girth and the girths of all its links are at least $2\pi$

### `large-spherical-metric-flags-and-the-moussong-girth-theorem-examples` — Large Spherical Metric Flags and the Moussong Girth Theorem — Examples (2 item(s))

- `ex-cg-a-tilde-2-nerve-perimeter-two-pi-and-vanishing-gram-determinant` · example — The affine $\widetilde A_2$ nerve: every edge exists, the Gram determinant vanishes, and the perimeter is exactly $2\pi$
- `ex-cg-all-right-triangle-versus-disconnected-universal-coxeter-nerve` · example — The all-right triangle must be filled; the disconnected universal-Coxeter nerve is CAT(1) vacuously

## Your seams

Your pages depend on another group's:

- `spherical-simplex-metrics-angular-links-and-cones` requires `real-forms-and-reflection-geometry` (group c, batch 4)
- `large-spherical-metric-flags-and-the-moussong-girth-theorem` requires `cat-comparison-link-criteria-and-local-globalization` (group g, batch 11)
- `large-spherical-metric-flags-and-the-moussong-girth-theorem` requires `finite-coxeter-diagrams-and-complete-classification` (group h, batch 13)
- `large-spherical-metric-flags-and-the-moussong-girth-theorem` requires `short-loop-polygons-and-quantitative-energy-decrease` (group g, batch 15)

Another group's pages depend on yours:

- `spherical-parabolic-cosets-and-the-davis-complex` (group d) requires your `coxeter-polyhedral-gluings-and-intrinsic-metrics`
- `davis-cat-zero-geometry-and-finite-subgroup-fixed-points` (group d) requires your `large-spherical-metric-flags-and-the-moussong-girth-theorem`
- `cat-comparison-link-criteria-and-local-globalization` (group g) requires your `spherical-simplex-metrics-angular-links-and-cones`
- `bipartite-coxeter-elements-and-ordered-root-complexes` (group j) requires your `spherical-simplex-metrics-angular-links-and-cones`

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
