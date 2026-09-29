# Step 7 adjudication — group **e**, run `frontier-36-complete`

You are the group Alpha for batches **10**, **28**, **29**: 3 A/B pair(s), 6 page(s), 61 item(s), 0 open rejection(s) over 0 item(s).

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
in `research/frontier-36-complete-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 10 | `classification-of-compact-connected-surfaces` | A | topology | 444.1 | `smooth-manifolds-and-smooth-maps`, `simplicial-subdivision-and-simplicial-approximation`, `cw-complexes-and-cellular-homology`, `orientations-poincare-lefschetz-and-alexander-duality`, `the-fundamental-group`, `areas-of-elementary-plane-figures`, `cayley-graphs-word-metrics-and-quasi-isometry`, `plane-graphs-euler-and-the-five-colour-theorem` |
| 10 | `classification-of-compact-connected-surfaces-examples` | B | topology | 444.2 | `classification-of-compact-connected-surfaces` |
| 28 | `riemann-surfaces-branched-maps-and-differentials` | A | complex-analysis | 843 | `the-riemann-sphere-and-mobius-transformations`, `analytic-continuation-and-monodromy`, `covering-spaces-and-lifting`, `classification-of-covering-spaces`, `classification-of-compact-connected-surfaces`, `analytic-majorants-and-the-cauchy-kovalevskaya-theorem`, `zariski-tangent-spaces-regular-points-smoothness-and-bertini` |
| 28 | `riemann-surfaces-branched-maps-and-differentials-examples` | B | complex-analysis | 844 | `riemann-surfaces-branched-maps-and-differentials` |
| 29 | `the-dbar-complex-and-integral-solutions` | A | complex-analysis | 849 | `holomorphic-inverse-and-weierstrass-preparation`, `domains-of-holomorphy-and-pseudoconvexity`, `integration-of-forms-and-the-general-stokes-theorem`, `distributions-test-functions-and-differentiation`, `euclidean-surface-measure-divergence-and-green-identities` |
| 29 | `the-dbar-complex-and-integral-solutions-examples` | B | complex-analysis | 850 | `the-dbar-complex-and-integral-solutions` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `classification-of-compact-connected-surfaces` — Classification of Compact Connected Surfaces (17 item(s))

- `def-connected-sum-of-compact-surfaces` · definition — Connected sums of compact connected surfaces, with disk and gluing choices retained
- `def-klein-bottle` · definition — The Klein bottle as a square quotient
- `def-polygonal-schema-and-edge-pairing` · definition — Polygonal schemas and paired boundary edges
- `lem-plane-arc-complements-and-accessible-jordan-points` · lemma — Arc complements and accessible Jordan boundary points
- `lem-finite-plane-graph-ear-and-face-facts` · lemma — Finite plane graph ear and face facts
- `lem-jordan-schoenflies-extension-for-plane-curves` · lemma — Jordan–Schönflies extension for plane curves
- `lem-planar-facial-graph-isomorphism-extension` · lemma — Extension of facial plane graph isomorphisms
- `lem-compact-surface-admits-a-finite-triangulation` · lemma — Finite triangulation of a compact connected surface
- `lem-finite-triangulated-surface-reduces-to-a-one-polygon-schema` · lemma — A finite triangulated surface has a one-polygon schema
- `lem-polygonal-schema-reduction-moves` · lemma — Homeomorphism-preserving polygonal schema moves
- `thm-polygonal-normal-form-for-compact-connected-surfaces` · theorem — Polygonal normal forms for compact connected surfaces
- `ex-torus-polygonal-schema` · example — Torus commutator polygon
- `ex-projective-plane-polygonal-schema` · example — Projective plane crosscap polygon
- `ex-sphere-polygonal-schema` · example — Sphere as a polygonal quotient
- `thm-classification-of-compact-connected-surfaces` · theorem — Classification of compact connected surfaces
- `cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g` · corollary — Euler characteristic of an orientable compact surface
- `cor-orientability-and-euler-characteristic-determine-a-compact-connected-surface` · corollary — Orientability and Euler characteristic determine the surface

### `classification-of-compact-connected-surfaces-examples` — Classification of Compact Connected Surfaces: Examples (3 item(s))

- `ex-klein-bottle-polygonal-schema` · example — Klein bottle as two crosscaps
- `ex-genus-two-orientable-surface-polygonal-schema` · example — Genus-two orientable polygon
- `cex-euler-characteristic-alone-does-not-classify-compact-surfaces` · counterexample — Equal Euler characteristic without homeomorphism

### `riemann-surfaces-branched-maps-and-differentials` — Riemann Surfaces, Branched Maps, and Differentials (15 item(s))

- `lem-planar-piecewise-analytic-region-triangulation` · lemma — Slab triangulation of a compact plane region bounded by finitely many piecewise real-analytic curves
- `lem-index-of-graph-bounded-region-boundary` · lemma — Index of the boundary of a graph-bounded plane region
- `def-riemann-surface-and-holomorphic-atlas` · definition — Riemann surfaces and holomorphic atlases
- `lem-nonsingular-complex-algebraic-curve-holomorphic-charts` · lemma — Local holomorphic charts on nonsingular complex algebraic curves
- `def-holomorphic-and-meromorphic-map-of-riemann-surfaces` · definition — Holomorphic maps and meromorphic functions on Riemann surfaces
- `lem-finite-analytic-chart-triangulation-compact-riemann-surface` · lemma — Finite chartwise triangulation of a compact Riemann surface
- `def-meromorphic-differential-on-a-riemann-surface` · definition — Meromorphic differentials, orders and residues
- `thm-local-normal-form-holomorphic-map-riemann-surfaces` · theorem — Local power-map normal form on Riemann surfaces
- `def-ramification-index-and-branch-value` · definition — Ramification index, ramification order and branch value
- `thm-residue-theorem-compact-riemann-surface` · theorem — Residue theorem on a compact Riemann surface
- `lem-pullback-order-of-meromorphic-differentials-under-branched-maps` · lemma — Pullback order formula for a branched holomorphic map
- `thm-proper-holomorphic-map-riemann-surfaces-has-degree` · theorem — Degree of a proper holomorphic map of Riemann surfaces
- `thm-topological-classification-compact-riemann-surfaces` · theorem — Topological classification of compact Riemann surfaces
- `def-genus-and-euler-characteristic-compact-riemann-surface` · definition — Genus and Euler characteristic of a compact Riemann surface
- `thm-riemann-hurwitz-formula` · theorem — Riemann–Hurwitz formula for compact Riemann surfaces

### `riemann-surfaces-branched-maps-and-differentials-examples` — Riemann Surfaces, Branched Maps, and Differentials: Examples and Counterexamples (8 item(s))

- `ex-basic-riemann-surface-atlases` · example — Atlases on the sphere, plane, disc and annulus
- `ex-complex-torus-holomorphic-atlas` · example — The complex torus as a Riemann surface
- `ex-smooth-affine-conic-as-punctured-plane` · example — A nonsingular affine conic is a punctured-plane Riemann surface
- `ex-nonsingular-algebraic-curve-charts` · example — Nonsingular affine and projective curves as Riemann surfaces
- `ex-coordinate-change-for-meromorphic-differential` · example — Orders and residues under inversion on the sphere
- `cex-exponential-local-biholomorphism-is-not-proper` · counterexample — The exponential map has no finite proper-map degree
- `ex-hyperelliptic-double-cover-ramification` · example — Hyperelliptic double covers and their genus
- `ex-power-map-riemann-hurwitz` · example — Riemann–Hurwitz for the sphere power map

### `the-dbar-complex-and-integral-solutions` — The Dolbeault Complex and Integral Solutions (12 item(s))

- `def-bigraded-complex-differential-forms` · definition — Bigraded complex forms and the Dolbeault operators
- `thm-d-dbar-decomposition-and-identities` · theorem — The d, partial and dbar identities
- `lem-c-one-stokes-for-complex-euclidean-domains` · lemma — Stokes for complex forms on a bounded C1 Euclidean domain
- `thm-cauchy-pompeiu-formula` · theorem — The Cauchy–Pompeiu formula with fixed signs
- `lem-cauchy-transform-with-smooth-parameters` · lemma — Local Cauchy transform with smooth parameters
- `def-bochner-martinelli-kernel` · definition — The normalized Bochner–Martinelli kernel
- `thm-bochner-martinelli-integral-formula` · theorem — The Bochner–Martinelli formula for C1 functions
- `thm-dolbeault-lemma-polydisc` · theorem — The local Dolbeault lemma on nested polydiscs
- `thm-compact-support-dbar-solution-cn` · theorem — Compactly supported dbar solutions on complex Euclidean space
- `cor-hartogs-extension-dbar-proof` · corollary — Hartogs extension by a compact-support dbar correction
- `def-dolbeault-cohomology-domain` · definition — Dolbeault cohomology of a domain
- `thm-dolbeault-cohomology-polydisc-vanishes-positive-q` · theorem — Positive-degree Dolbeault cohomology vanishes on a polydisc

### `the-dbar-complex-and-integral-solutions-examples` — The Dolbeault Complex and Integral Solutions: Examples and Counterexamples (6 item(s))

- `ex-dbar-on-elementary-functions-and-forms` · example — Elementary partial and dbar calculations
- `ex-cauchy-pompeiu-compact-support` · example — A compact-support Cauchy–Pompeiu calculation
- `ex-bochner-martinelli-on-a-ball` · example — Bochner–Martinelli on the unit ball
- `ex-polynomial-dbar-solution` · example — A polynomial closed form and its potential
- `cex-nonclosed-dbar-form-has-no-potential` · counterexample — A nonclosed dbar form cannot have a potential
- `ex-dbar-cutoff-extension-at-a-puncture` · example — Cutoff extension across a puncture in complex dimension two

## Your seams

Your pages depend on another group's:

- `riemann-surfaces-branched-maps-and-differentials` requires `zariski-tangent-spaces-regular-points-smoothness-and-bertini` (group c, batch 4)

Another group's pages depend on yours:

- `the-gauss-bonnet-theorem-for-riemannian-surfaces` (group h) requires your `classification-of-compact-connected-surfaces`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-36-complete-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-7 closure recovery, `frontier-36-complete`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step7-workflow.mjs`, `briefs/step7-adjudicator.md`
and `briefs/step7-owner-repair.md`. Follow WORKFLOW.md's 7.1–7.10 protocol
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.
