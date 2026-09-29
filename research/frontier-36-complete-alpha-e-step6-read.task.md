# Step 6 whole-group reading — group **e**, run `frontier-36-complete`

You are the group Alpha for batches **10**, **28**, **29**: 3 A/B pair(s), 6 page(s), 61 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-7 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## Read scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**This dispatch is read-only.** Record concerns about owned items and alerts
about other groups in the returned digest; do not repair anything.

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

---

# Step 6 — group reading digest, `frontier-36-complete`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-7 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

The reply is parsed as JSON, so every backslash inside a string is an escape:
write a LaTeX command as a doubled backslash (`\\perp`, `\\omega`), never as
`\perp`. An invalid escape invalidates the whole digest. When a symbol is
available in plain text or Unicode (⊥, ω, ≤, ∈), prefer it over TeX.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
