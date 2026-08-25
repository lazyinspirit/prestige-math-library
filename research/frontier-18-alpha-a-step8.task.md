# Step 8 — group **a**, run `frontier-18`

You are the group Alpha for batches **6**, **7**, **8**: 4 A/B pair(s), 8 page(s), 227 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-18-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-18-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 6 | `the-divergence-theorem-and-classical-stokes` | A | real-analysis | 288.00017 | `regular-surfaces-and-surface-integrals` |
| 6 | `the-divergence-theorem-and-classical-stokes-examples` | B | real-analysis | 288.00018 | `the-divergence-theorem-and-classical-stokes` |
| 7 | `lebesgue-measure-on-euclidean-space` | A | measure-theory | 288.007 | `outer-measure-and-the-caratheodory-extension-theorem-examples`, `areas-of-elementary-plane-figures`, `separation-axioms` |
| 7 | `lebesgue-measure-on-euclidean-space-examples` | B | measure-theory | 288.008 | `lebesgue-measure-on-euclidean-space` |
| 8 | `the-winding-number-and-the-global-cauchy-theorem` | A | complex-analysis | 315 | `the-identity-theorem-and-the-open-mapping-theorem`, `the-topology-of-euclidean-space` |
| 8 | `the-winding-number-and-the-global-cauchy-theorem-examples` | B | complex-analysis | 316 | `the-winding-number-and-the-global-cauchy-theorem` |
| 8 | `holomorphic-functions-of-several-variables` | A | complex-analysis | 349 | `the-identity-theorem-and-the-open-mapping-theorem`, `goursat-and-cauchys-theorem-in-a-convex-domain`, `the-total-derivative`, `fubini-and-change-of-variables`, `rn-as-a-normed-space` |
| 8 | `holomorphic-functions-of-several-variables-examples` | B | complex-analysis | 350 | `holomorphic-functions-of-several-variables` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-divergence-theorem-and-classical-stokes` — The Divergence Theorem and Classical Stokes (45 item(s))

- `def-divergence-and-curl-of-a-c1-vector-field` · definition — Divergence and curl of a $C^1$ vector field
- `lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules` · lemma — Divergence and curl are linear and satisfy the scalar product rules
- `lem-the-divergence-and-curl-of-a-cross-product` · lemma — The divergence and curl of a cross product
- `cor-curl-vanishes-exactly-when-a-field-is-closed` · corollary — A $C^1$ field on an open subset of $\mathbb R^3$ is closed exactly when its curl vanishes
- `thm-the-curl-of-a-gradient-vanishes` · theorem — The curl of the gradient of a $C^2$ function vanishes
- `thm-the-divergence-of-a-curl-vanishes` · theorem — The divergence of the curl of a $C^2$ field vanishes
- `def-laplacian-of-a-c2-function` · definition — The Laplacian of a $C^2$ function and of a $C^2$ vector field
- `cor-the-curl-of-a-curl-of-a-c2-field` · corollary — The curl of a curl is the gradient of the divergence minus the Laplacian
- `cor-a-curl-free-c1-field-on-a-star-shaped-open-subset-of-r3-is-conservative` · corollary — A $C^1$ field with vanishing curl on a star-shaped open subset of $\mathbb R^3$ is conservative
- `def-vector-potential-of-a-c1-vector-field` · definition — Vector potentials of a $C^1$ field on an open subset of $\mathbb R^3$
- `thm-a-divergence-free-c1-field-on-a-star-shaped-open-set-has-a-vector-potential` · theorem — A divergence-free $C^1$ field on a star-shaped open subset of $\mathbb R^3$ has a vector potential
- `lem-curl-is-the-antisymmetric-part-of-the-total-derivative` · lemma — The curl measures the antisymmetric part of the total derivative
- `lem-c-one-images-of-content-zero-compact-sets-have-content-zero` · lemma — A $C^1$ map sends a compact set of content zero to a set of content zero
- `lem-integral-additivity-over-a-content-zero-almost-partition` · lemma — Additivity of the integral over finitely many Jordan pieces that fill a Jordan set up to content zero
- `lem-change-of-variables-with-a-degenerate-parameter-boundary` · lemma — Change of variables for a $C^1$ map injective and regular only on the interior of a compact Jordan set
- `lem-cyclic-coordinate-permutations-preserve-integrals-in-r3` · lemma — A cyclic permutation of the coordinates of $\mathbb R^3$ preserves Jordan measurability and integrals
- `def-simple-solid-region-in-a-coordinate-direction` · definition — Simple solid regions in a coordinate direction and their cyclic coordinate projection
- `lem-the-coordinate-components-of-the-oriented-area-vector-are-projected-jacobians` · lemma — Each coordinate of the oriented area vector is the Jacobian determinant of the matching cyclic projection
- `def-outward-unit-normal-at-a-boundary-point-of-a-compact-solid` · definition — The outward unit normal at a boundary point of a compact solid
- `def-adapted-outward-boundary-presentation-of-a-simple-solid-region` · definition — Boundary presentations adapted to a simple solid region in a coordinate direction
- `lem-flux-of-a-single-component-field-through-an-oriented-graph-face` · lemma — The flux of a single-component field through a graph face is a base integral of its trace
- `lem-the-coordinate-flux-identity-for-a-simple-solid-region` · lemma — The single-direction flux identity on a simple solid region
- `prop-the-graph-faces-of-an-adapted-presentation-carry-the-outward-normal` · proposition — At interior base points, the graph faces of an adapted presentation induce the outward unit normal
- `def-elementary-solid-region` · definition — Elementary solid regions: one boundary presentation adapted in all three coordinate directions
- `cor-every-face-of-an-elementary-solid-region-is-outward-oriented` · corollary — Every patch of an elementary solid region's presentation is a graph face in some direction, and at interior base points its normal is outward
- `thm-the-divergence-theorem-for-an-elementary-solid-region` · theorem — The divergence theorem on an elementary solid region
- `def-finite-gluing-of-elementary-solid-regions` · definition — Finite gluings of elementary solid regions and their outward boundary presentation
- `lem-internal-faces-cancel-when-elementary-solid-regions-are-glued` · lemma — Internal faces cancel and volume integrals add when elementary solid regions are glued
- `thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions` · theorem — The divergence theorem for finite gluings of elementary solid regions
- `cor-vector-forms-of-the-divergence-theorem` · corollary — Vector forms: the boundary integrals of $fn$ and of $n\times F$
- `cor-the-volume-of-a-glued-elementary-solid-from-its-outward-boundary-flux` · corollary — The volume of a glued elementary solid is a third of the outward flux of the position field
- `cor-a-divergence-free-field-has-zero-outward-flux-through-a-glued-elementary-solid` · corollary — A field with vanishing divergence has zero outward flux through the boundary of a glued elementary solid
- `cor-the-flux-of-a-curl-through-the-boundary-of-a-glued-elementary-solid-vanishes` · corollary — The flux of a curl through the boundary of a glued elementary solid vanishes
- `cor-the-divergence-is-the-limiting-outward-flux-per-unit-volume` · corollary — The divergence at a point is the limit of outward flux per unit volume
- `cor-greens-first-identity-for-glued-elementary-solid-regions` · corollary — Green's first identity on a glued elementary solid region
- `cor-greens-second-identity-for-glued-elementary-solid-regions` · corollary — Green's second identity on a glued elementary solid region
- `def-the-induced-boundary-chain-of-a-c2-surface-patch` · definition — The induced boundary chain and circulation of a $C^2$ patch over a finite elementary Green region
- `lem-a-vector-line-integral-pulls-back-to-the-parameter-region` · lemma — A vector line integral along an image arc is the parameter line integral of the pulled-back field
- `lem-the-stokes-integrand-identity-on-a-c2-patch` · lemma — The curl flux integrand of a $C^2$ patch is a two-dimensional curl of the pulled-back field
- `thm-the-classical-stokes-theorem-for-a-c2-surface-patch` · theorem — The classical Stokes theorem for a $C^2$ patch over a finite elementary Green region
- `cor-stokes-gives-zero-circulation-for-a-curl-free-field` · corollary — A curl-free field has zero circulation around the induced boundary chain of a $C^2$ patch
- `cor-the-normal-curl-is-the-limiting-circulation-per-unit-area` · corollary — The normal component of the curl is the limiting circulation per unit area of shrinking discs
- `cor-greens-theorem-in-circulation-form` · corollary — Green's theorem is the curl statement for a planar field lifted to $\mathbb R^3$
- `cor-the-planar-divergence-theorem-flux-form-of-greens-theorem` · corollary — The planar divergence theorem: the flux form of Green's theorem
- `rem-the-reach-of-the-classical-divergence-and-stokes-theorems` · remark — What the classical divergence and Stokes theorems here do and do not cover

### `the-divergence-theorem-and-classical-stokes-examples` — The Divergence Theorem and Classical Stokes: Examples and Counterexamples (16 item(s))

- `ex-the-closed-unit-box-is-an-elementary-solid-region` · example — The closed unit box, with its six faces, is an elementary solid region
- `ex-the-divergence-theorem-on-the-closed-unit-box` · example — Both sides of the divergence theorem for $F(x,y,z)=(x^2,y^2,z^2)$ on the closed unit box
- `ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation` · example — The closed ball is an elementary solid region, presented by the eight spherical octants
- `ex-the-volume-of-a-closed-ball-from-the-outward-flux-of-the-position-field` · example — The volume of a closed ball recovered from the outward flux of the position field
- `ex-the-right-circular-cylinder-is-an-elementary-solid-region` · example — A right circular cylinder is an elementary solid region, presented by two caps and four side quarters
- `ex-flux-of-the-inverse-square-field-through-a-sphere-not-enclosing-the-origin` · example — The inverse-square field is divergence free, and its flux through a sphere missing the origin vanishes
- `ex-flux-of-the-inverse-square-field-through-a-sphere-centred-at-the-origin` · example — The outward flux of the inverse-square field through a sphere centred at the origin is $4\pi$
- `fs-a-divergence-free-field-has-zero-outward-flux-through-every-closed-surface` · false-statement — FALSE: a field with vanishing divergence has zero outward flux through the boundary of every solid it surrounds
- `ex-a-u-shaped-prism-as-a-finite-gluing-of-three-boxes` · example — A U-shaped prism is a finite gluing of three boxes and is not simple in every coordinate direction
- `ex-the-planar-divergence-theorem-on-a-rectangle` · example — The planar divergence theorem on a rectangle, checked against a direct boundary computation
- `ex-the-boundary-flux-of-the-gradient-of-a-harmonic-function-vanishes` · example — A function with vanishing Laplacian has zero boundary flux of its gradient on the unit box
- `ex-stokes-on-two-patches-spanning-the-same-circle` · example — Stokes' theorem on a flat disc and on a hemisphere with the same induced boundary circle
- `fs-stokes-needs-the-surface-to-be-a-graph` · false-statement — FALSE: Stokes' theorem requires the surface to be a graph over a coordinate plane
- `cex-a-curl-free-c1-field-on-an-open-subset-of-r3-that-is-not-conservative` · counterexample — A curl-free $C^1$ field on the complement of a line that is not conservative
- `ex-the-mobius-band-presented-by-two-regular-patches` · example — The Mobius band presented by two regular patches, with the induced normals on the two overlap components
- `fs-a-finite-patch-presentation-can-always-be-oriented-compatibly` · false-statement — FALSE: the patches of a finite presentation can always be reoriented to make their normals agree on overlaps

### `lebesgue-measure-on-euclidean-space` — Lebesgue Measure on Euclidean Space (55 item(s))

- `def-half-open-box` · definition — Half-open boxes in $\mathbb{R}^n$ and their volume
- `lem-half-open-boxes-form-an-elementary-family` · lemma — Half-open boxes are closed under intersection, and the complement of a half-open box is a finite disjoint union of half-open boxes
- `def-elementary-set-in-rn` · definition — Elementary sets: the finite unions of half-open boxes in $\mathbb{R}^n$
- `prop-elementary-sets-form-an-algebra` · proposition — The elementary sets form an algebra of subsets of $\mathbb{R}^n$ containing every half-open box
- `lem-elementary-sets-are-finite-disjoint-unions-of-half-open-boxes` · lemma — Every elementary set is a finite disjoint union of half-open boxes, and any finitely many boxes admit a common grid refinement
- `lem-box-volume-is-additive-over-grid-subdivisions` · lemma — The volume of a half-open box is the sum of the volumes of the cells of any coordinate grid subdividing it
- `thm-elementary-volume-is-well-defined` · theorem — The sum of the volumes of a disjoint box decomposition of an elementary set does not depend on the decomposition
- `prop-elementary-volume-is-finitely-additive-and-monotone` · proposition — Elementary volume is finitely additive, monotone and finitely subadditive on the elementary algebra
- `lem-elementary-sets-admit-compact-inner-and-open-outer-approximations` · lemma — Every elementary set is squeezed in volume between a compact subset and an elementary set whose interior contains it
- `thm-box-volume-is-a-premeasure-on-the-elementary-algebra` · theorem — Elementary volume is a sigma-finite premeasure on the algebra of elementary sets
- `def-lebesgue-outer-measure` · definition — Lebesgue outer measure on $\mathbb{R}^n$
- `thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume` · theorem — Assuming countable choice, Lebesgue outer measure is an outer measure that restricts to elementary volume
- `def-lebesgue-measure-and-the-lebesgue-sigma-algebra` · definition — Lebesgue measurable sets, the Lebesgue sigma-algebra $\mathcal{L}(\mathbb{R}^n)$, and Lebesgue measure $\lambda_n$
- `thm-lebesgue-measure-is-a-complete-measure` · theorem — Assuming countable choice, $\mathcal{L}(\mathbb{R}^n)$ is a sigma-algebra containing every elementary set and $\lambda_n$ is a complete measure extending elementary volume
- `def-dyadic-cube-in-rn` · definition — Dyadic cubes of generation $k$ in $\mathbb{R}^n$
- `lem-dyadic-cubes-of-one-generation-partition-rn` · lemma — For each generation, the dyadic cubes of that generation are pairwise disjoint and cover $\mathbb{R}^n$
- `lem-two-dyadic-cubes-are-nested-or-disjoint` · lemma — Two dyadic cubes are either disjoint or one contains the other
- `thm-open-subsets-of-rn-are-countable-disjoint-unions-of-dyadic-cubes` · theorem — Every open subset of $\mathbb{R}^n$ is the union of a countable pairwise disjoint family of dyadic cubes
- `lem-half-open-boxes-generate-the-borel-sigma-algebra-on-rn` · lemma — The sigma-algebra generated by the half-open boxes of $\mathbb{R}^n$ is the Borel sigma-algebra
- `thm-borel-sets-are-lebesgue-measurable` · theorem — Assuming countable choice, every Borel subset of $\mathbb{R}^n$ is Lebesgue measurable
- `thm-lebesgue-measure-of-a-box-of-every-kind` · theorem — A box in $\mathbb{R}^n$ with parameters $a_i\le b_i$ is Lebesgue measurable of measure $\prod_{i<n}(b_i-a_i)$, whichever of its faces are included
- `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets` · proposition — Lebesgue measure is sigma-finite, and every metrically bounded subset of $\mathbb{R}^n$ has finite outer measure
- `prop-countable-subsets-of-rn-are-lebesgue-null` · proposition — Every at most countable subset of $\mathbb{R}^n$ is Lebesgue null; in particular $\lambda_1(\mathbb{Q})=0$
- `prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null` · proposition — A box with a degenerate side is Lebesgue null, and so is every coordinate hyperplane in $\mathbb{R}^n$
- `thm-lebesgue-outer-regularity-for-arbitrary-subsets` · theorem — Assuming countable choice, the Lebesgue outer measure of an arbitrary subset of $\mathbb{R}^n$ is the infimum of the measures of the open sets containing it
- `cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls` · corollary — Every subset of $\mathbb{R}^n$ has a $G_\delta$ measurable hull of the same outer measure
- `lem-lebesgue-measurable-sets-have-small-open-excess` · lemma — For a Lebesgue measurable set and every positive $\varepsilon$ there is an open superset whose difference from it has outer measure below $\varepsilon$
- `lem-small-open-excess-implies-lebesgue-measurable` · lemma — A subset of $\mathbb{R}^n$ with open supersets of arbitrarily small excess is Lebesgue measurable
- `thm-littlewood-characterisations-of-lebesgue-measurability` · theorem — Assuming countable choice, four equivalent descriptions of a Lebesgue measurable subset of $\mathbb{R}^n$
- `thm-lebesgue-inner-regularity-by-closed-and-compact-sets` · theorem — Assuming countable choice, the Lebesgue measure of a measurable set is the supremum of the measures of its compact subsets
- `cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure` · corollary — $\mathcal{L}(\mathbb{R}^n)$ is exactly the completion of the restriction of $\lambda_n$ to the Borel sets
- `rem-two-senses-of-regularity-for-lebesgue-measure` · remark — Regularity of an outer measure and regularity of a measure with respect to open and compact sets are different conditions, both satisfied here
- `lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure` · lemma — Countable covers by closed boxes, by open boxes and by closed cubes all compute Lebesgue outer measure
- `thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line` · theorem — A subset of $\mathbb{R}$ has Lebesgue outer measure zero if and only if it has measure zero in the sense of countable closed-interval covers
- `thm-lebesgue-null-agrees-with-elementary-nullity-in-rn` · theorem — A subset of $\mathbb{R}^m$ has Lebesgue outer measure zero if and only if it is null in the sense of countable closed-cube covers
- `cor-elementary-almost-everywhere-is-lebesgue-almost-everywhere` · corollary — A property holding outside a set of elementary measure zero is exactly a property holding $\lambda$-almost everywhere
- `cor-riemann-integrability-and-lebesgue-null-discontinuity-sets` · corollary — A bounded function on a closed bounded interval, or on a closed nondegenerate rectangle, is Riemann integrable exactly when its discontinuity set has Lebesgue measure zero
- `rem-nullity-and-nowhere-density-remain-independent-for-lebesgue-measure` · remark — The published refutations separating nullity from nowhere density hold verbatim for Lebesgue measure
- `thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content` · theorem — Lebesgue outer measure is at most Jordan outer content, and a bounded Jordan measurable set is Lebesgue measurable with Lebesgue measure equal to its Jordan content
- `cor-cantor-set-is-an-uncountable-lebesgue-null-set` · corollary — The Cantor set is an uncountable subset of $\mathbb{R}$ of Lebesgue measure zero
- `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant` · theorem — Lebesgue outer measure, Lebesgue measurability and Lebesgue measure are unchanged by translation
- `thm-lebesgue-measure-under-dilations-and-reflections` · theorem — For a nonzero real $c$, dilation by $c$ multiplies Lebesgue outer measure by $|c|^n$, and reflection in the origin preserves it
- `lem-dyadic-cube-values-are-forced-by-translation-invariance-and-normalisation` · lemma — A translation-invariant Borel measure giving the unit cube measure one gives each generation-$k$ dyadic cube measure $2^{-kn}$
- `thm-lebesgue-measure-is-the-unique-normalised-translation-invariant-borel-measure` · theorem — A translation-invariant measure on the Borel sets of $\mathbb{R}^n$ giving the unit cube measure one is the restriction of Lebesgue measure
- `thm-invertible-linear-images-scale-lebesgue-measure-by-a-constant` · theorem — An invertible linear map of $\mathbb{R}^n$ scales the Lebesgue measure of every Borel set by a positive constant depending only on the map
- `lem-coordinate-scalings-and-permutations-scale-the-unit-cube-by-the-absolute-determinant` · lemma — A coordinate scaling and a coordinate transposition send the unit cube to a set of measure equal to the absolute value of the determinant
- `lem-shear-images-of-the-unit-cube-have-lebesgue-measure-one` · lemma — A shear sends the unit cube to a set of Lebesgue measure one
- `lem-lipschitz-images-of-lebesgue-null-sets-are-lebesgue-null` · lemma — A Lipschitz self-map of $\mathbb{R}^n$ carries Lebesgue null sets to Lebesgue null sets
- `thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null` · theorem — Every affine hyperplane of $\mathbb{R}^n$, and hence every proper linear subspace, is Lebesgue null
- `thm-linear-change-of-variables-for-lebesgue-measure` · theorem — A linear map $T$ of $\mathbb{R}^n$ sends Lebesgue measurable sets to Lebesgue measurable sets, with $\lambda_n(T[E])=|\det T|\,\lambda_n(E)$ when $T$ is invertible and $T[E]$ Lebesgue null when it is not
- `cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps` · corollary — Lebesgue measure on $\mathbb{R}^n$ is invariant under every orthogonal linear map
- `rem-linear-change-of-variables-for-jordan-content-and-lebesgue-measure` · remark — How the Lebesgue change-of-variables formula relates to the published formula for Jordan content
- `lem-a-set-of-positive-finite-measure-fills-most-of-a-dyadic-cube` · lemma — A measurable set of positive finite measure occupies more than any prescribed proportion of some dyadic cube
- `thm-steinhaus-difference-set-contains-a-ball` · theorem — If a Lebesgue measurable subset of $\mathbb{R}^n$ has positive measure, its difference set contains an open ball about the origin
- `cor-a-measurable-subgroup-of-rn-of-positive-measure-is-rn` · corollary — A Lebesgue measurable subgroup of $(\mathbb{R}^n,+)$ of positive measure is all of $\mathbb{R}^n$

### `lebesgue-measure-on-euclidean-space-examples` — Lebesgue Measure on Euclidean Space — Examples (13 item(s))

- `ex-lebesgue-measure-of-intervals-boxes-and-the-rationals` · example — The Lebesgue measure of an interval, of a box, of $\mathbb{Q}$ and of the irrationals in $[0,1]$
- `ex-cantor-set-measure-from-the-removed-intervals` · example — The complement of the Cantor set in $[0,1]$ has Lebesgue measure one, computed from the removed intervals
- `ex-smith-volterra-cantor-set-has-lebesgue-measure-one-half` · example — The Smith-Volterra-Cantor set has Lebesgue measure exactly $1/2$
- `ex-a-dense-open-subset-of-the-unit-interval-of-small-measure` · example — For every positive $\varepsilon$ there is a dense open subset of $(0,1)$ of Lebesgue measure below $\varepsilon$
- `ex-a-dense-null-g-delta-set-containing-the-rationals` · example — A dense $G_\delta$ subset of $\mathbb{R}$ of Lebesgue measure zero containing every rational, and its meager complement of full measure
- `ex-the-graph-of-a-continuous-real-function-is-lebesgue-null-in-the-plane` · example — The graph of a continuous function $\mathbb{R}\to\mathbb{R}$ is Lebesgue null in $\mathbb{R}^2$
- `ex-lebesgue-measure-of-a-linear-image-of-the-unit-cube` · example — The Lebesgue measure of the image of the unit cube under an explicit linear map of the plane and of three-space
- `ex-proper-measurable-subgroups-of-the-line-are-lebesgue-null` · example — Every Lebesgue measurable proper subgroup of $(\mathbb{R},+)$ is null, and $\mathbb{Z}$ and $\mathbb{Q}$ are instances
- `cex-lebesgue-null-sets-need-not-have-zero-jordan-outer-content` · counterexample — $\mathbb{Q}\cap[0,1]$ is Lebesgue null and has Jordan outer content one
- `fs-lebesgue-outer-measure-equals-jordan-outer-content-for-bounded-sets` · false-statement — Lebesgue outer measure agrees with Jordan outer content on every bounded subset of $\mathbb{R}^n$
- `fs-a-lebesgue-measurable-set-with-empty-interior-is-lebesgue-null` · false-statement — A Lebesgue measurable subset of $\mathbb{R}$ with empty interior has measure zero
- `fs-a-translation-invariant-borel-measure-on-the-line-is-a-multiple-of-lebesgue-measure` · false-statement — Every translation-invariant measure on the Borel sets of $\mathbb{R}$ is a nonnegative multiple of Lebesgue measure
- `fs-every-lebesgue-measurable-set-is-a-borel-set` · false-statement — Assuming the Axiom of Choice, every Lebesgue measurable subset of $\mathbb{R}$ is a Borel set

### `the-winding-number-and-the-global-cauchy-theorem` — The Winding Number and the Global Cauchy Theorem (42 item(s))

- `lem-tagged-sums-approximate-a-contour-integral` · lemma — Tagged sums approximate a contour integral within oscillation times length
- `lem-continuous-function-holomorphic-off-a-point-is-holomorphic` · lemma — A continuous function holomorphic off a single point is holomorphic
- `thm-contour-parameter-integrals-are-holomorphic` · theorem — A contour integral of a jointly continuous, parameter-holomorphic integrand is holomorphic
- `cor-holomorphic-logarithm-has-the-logarithmic-derivative` · corollary — A holomorphic logarithm is a primitive of the logarithmic derivative
- `lem-logarithm-branch-for-a-linear-factor-on-a-disc` · lemma — A disc missing $p$ carries a holomorphic logarithm of $z-p$
- `lem-contour-subdivision-into-discs-missing-a-point` · lemma — A contour missing a point subdivides into arcs lying in discs that miss it
- `def-continuous-argument-and-holomorphic-logarithm-branches` · definition — Continuous logarithms and continuous arguments along a contour
- `thm-continuous-logarithms-exist-along-a-contour` · theorem — Every contour missing a point admits a continuous logarithm, unique up to a constant in $2\pi i\mathbb{Z}$
- `thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment` · theorem — The integral of $dz/(z-p)$ along a contour is the increment of a continuous logarithm
- `def-winding-number-closed-complex-contour` · definition — The winding number of a closed contour about a point off its trace
- `thm-winding-number-is-integer` · theorem — The winding number of a closed contour is an integer
- `cor-winding-number-is-the-normalized-argument-increment` · corollary — The winding number is the increment of a continuous argument divided by $2\pi$
- `thm-winding-number-locally-constant` · theorem — The winding number is constant on each connected component of the complement of the trace
- `lem-plane-exterior-of-a-closed-disc-is-path-connected` · lemma — The exterior of a closed disc in the plane is path-connected
- `thm-complement-of-a-compact-plane-set-has-one-unbounded-component` · theorem — The complement of a compact plane set has exactly one unbounded connected component
- `thm-winding-number-zero-unbounded-component` · theorem — The winding number vanishes on the unbounded component of the complement of the trace
- `prop-winding-number-under-reversal-and-concatenation` · proposition — Reversal negates and concatenation adds winding numbers
- `thm-winding-number-circle-traversed-k-times` · theorem — A circle traversed $k$ times has winding number $k$ inside and $0$ outside
- `def-complex-chain-and-cycle` · definition — Complex chains, their traces, and cycles
- `def-integration-and-index-of-complex-chain` · definition — Integration over a complex chain and the index of a chain
- `thm-winding-number-chain-laws` · theorem — Chain integration and the index are additive in the chain, and reverse with it
- `thm-winding-number-of-a-cycle-is-integer` · theorem — The index of a cycle about a point off its trace is an integer
- `cor-cycle-integral-of-a-derivative-vanishes` · corollary — The integral of a continuous derivative over a cycle is zero
- `cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace` · corollary — The index of a cycle is locally constant off its trace and vanishes far from it
- `def-null-homologous-and-homologous-complex-cycles` · definition — Null-homologous cycles and homologous cycles in an open set
- `def-homologically-simply-connected-complex-domain` · definition — Homologically simply connected complex domains
- `prop-star-shaped-plane-domains-are-homologically-simply-connected` · proposition — Star-shaped plane domains are homologically simply connected
- `lem-holomorphic-difference-quotient-segment-formula` · lemma — On a convex open set the difference quotient is an average of the derivative along the segment
- `lem-holomorphic-difference-quotient-is-jointly-continuous` · lemma — The filled difference quotient of a holomorphic function is jointly continuous
- `lem-holomorphic-difference-quotient-is-holomorphic-in-each-variable` · lemma — The filled difference quotient is holomorphic in each variable separately
- `lem-cauchy-transform-of-a-cycle-is-holomorphic-off-the-trace` · lemma — The Cauchy transform of a cycle is holomorphic off its trace, with the expected derivatives
- `lem-dixon-entire-gluing` · lemma — Dixon's glued function is entire and vanishes at infinity
- `thm-global-cauchy-integral-formula-homology` · theorem — Cauchy's integral formula for a null-homologous cycle
- `cor-global-cauchy-theorem-homology` · corollary — Cauchy's theorem for a null-homologous cycle
- `cor-contour-integrals-homologous-cycles` · corollary — Holomorphic integrals agree on homologous cycles
- `cor-global-cauchy-formula-higher-derivatives` · corollary — The higher-derivative form of the global Cauchy formula
- `thm-primitives-homologically-simply-connected-domains` · theorem — Every holomorphic function on a homologically simply connected domain has a primitive
- `thm-holomorphic-logarithms-homologically-simply-connected-domains` · theorem — A nonvanishing holomorphic function on a homologically simply connected domain has a holomorphic logarithm
- `cor-holomorphic-roots-homologically-simply-connected-domains` · corollary — A nonvanishing holomorphic function on such a domain has holomorphic roots of every positive order
- `thm-homological-simple-connectivity-equivalences` · theorem — Equivalent characterisations of a homologically simply connected domain
- `cor-principal-logarithm-is-holomorphic-on-the-slit-plane` · corollary — The principal logarithm is the normalised holomorphic branch on the slit plane
- `rem-homological-simple-connectivity-conventions` · remark — Conventions for chains, cycles and the homological adjective on this page

### `the-winding-number-and-the-global-cauchy-theorem-examples` — The Winding Number and the Global Cauchy Theorem — Examples (12 item(s))

- `ex-winding-number-of-the-unit-circle-traversed-three-times` · example — The unit circle traversed three times has index $3$ at every interior point
- `ex-winding-number-of-a-figure-eight-cycle` · example — A figure-eight cycle has indices $+1$ and $-1$ in its two loops
- `ex-index-of-the-boundary-cycle-of-a-round-annulus` · example — The boundary cycle of a round annulus has index $1$ inside the annulus and $0$ on either side
- `ex-winding-numbers-of-a-keyhole-contour` · example — The winding numbers of a keyhole contour about the origin and about an excluded point
- `ex-continuous-argument-along-a-spiralling-contour` · example — A continuous argument computed along a spiralling contour
- `ex-dixon-gluing-traced-on-an-annulus-cycle` · example — Dixon's gluing traced on the boundary cycle of an annulus
- `ex-periods-of-a-holomorphic-function-on-an-annulus` · example — Every cycle in a round annulus has one period, that of the central circle
- `rem-the-winding-number-and-the-planar-vortex-field` · remark — The winding number is the circulation of the planar vortex field
- `cex-annulus-is-connected-but-not-homologically-simply-connected` · counterexample — A connected plane domain that is not homologically simply connected
- `cex-nonvanishing-holomorphic-function-with-no-holomorphic-logarithm` · counterexample — A nonvanishing holomorphic function on a domain with no holomorphic logarithm
- `fs-winding-number-depends-only-on-the-trace` · false-statement — The winding number depends only on the trace of the closed contour
- `fs-every-cycle-in-a-connected-plane-domain-is-null-homologous` · false-statement — Every cycle in a connected plane domain is null-homologous in that domain

### `holomorphic-functions-of-several-variables` — Holomorphic Functions of Several Complex Variables (32 item(s))

- `rem-complex-euclidean-space-dictionary` · remark — Complex $m$-space and its real coordinate dictionary
- `def-balls-and-polydiscs-in-complex-euclidean-space` · definition — Balls, polydiscs and the distinguished boundary in $\mathbb{C}^m$
- `def-holomorphic-function-in-several-complex-variables` · definition — Holomorphic functions on an open subset of $\mathbb{C}^m$
- `def-separately-holomorphic-function` · definition — Separately holomorphic functions
- `def-wirtinger-operators-in-several-complex-variables` · definition — Wirtinger operators in $\mathbb{C}^m$
- `lem-complex-linear-real-differential-criterion` · lemma — A real-linear functional on $\mathbb{C}^m$ is complex linear exactly when its antiholomorphic part vanishes
- `prop-holomorphic-functions-are-continuous-and-separately-holomorphic` · proposition — A holomorphic function of several variables is continuous and separately holomorphic
- `def-multivariable-power-series` · definition — Multi-indexed power series in $\mathbb{C}^m$ and their absolute convergence
- `lem-multivariable-geometric-series-on-a-distinguished-boundary` · lemma — The Cauchy kernel expands as an absolutely and uniformly convergent multi-indexed geometric series
- `thm-cauchy-integral-formula-on-a-polydisc` · theorem — The iterated Cauchy integral formula on a polydisc
- `thm-power-series-expansion-in-several-complex-variables` · theorem — A continuous separately holomorphic function is the sum of an absolutely convergent power series with Cauchy-integral coefficients on every smaller polydisc
- `thm-power-series-define-holomorphic-functions-in-several-variables` · theorem — An absolutely convergent multi-indexed power series is holomorphic and differentiates termwise
- `thm-osgood-lemma-in-several-complex-variables` · theorem — Osgood's lemma: continuous and separately holomorphic implies holomorphic
- `cor-holomorphic-functions-in-several-variables-are-smooth` · corollary — Holomorphic functions of several variables are smooth and their complex derivatives are holomorphic
- `cor-uniqueness-of-multivariable-power-series-coefficients` · corollary — The coefficients of a convergent multi-indexed power series are its derivative coefficients, hence unique
- `thm-cauchy-estimates-on-a-polydisc` · theorem — Cauchy estimates for mixed derivatives on a polydisc
- `lem-locally-bounded-separately-holomorphic-functions-are-locally-lipschitz` · lemma — A bounded separately holomorphic function on a polydisc is Lipschitz on every smaller polydisc
- `thm-locally-bounded-separate-holomorphy` · theorem — Locally bounded and separately holomorphic implies holomorphic
- `thm-cauchy-riemann-characterization-in-several-complex-variables` · theorem — For $C^1$ functions, holomorphy, complex linearity of the real derivative, and the Cauchy–Riemann system agree
- `prop-algebra-of-holomorphic-functions-in-several-variables` · proposition — Sums, products and nonvanishing quotients of holomorphic functions are holomorphic
- `thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables` · theorem — Locally uniform limits of holomorphic functions are holomorphic, with locally uniform convergence of all derivatives
- `cor-maximum-modulus-on-the-distinguished-boundary-of-a-polydisc` · corollary — The modulus of a holomorphic function on a closed polydisc is bounded by its supremum on the distinguished boundary
- `def-holomorphic-map-and-complex-jacobian` · definition — Holomorphic maps $\mathbb{C}^m \to \mathbb{C}^n$ and the complex Jacobian matrix
- `thm-componentwise-holomorphy-in-several-complex-variables` · theorem — A map into $\mathbb{C}^n$ is holomorphic exactly when each of its components is
- `thm-chain-rule-for-holomorphic-maps-in-several-variables` · theorem — The composite of holomorphic maps is holomorphic and its complex Jacobian is the product
- `cor-complex-jacobian-determinant-is-multiplicative` · corollary — The complex Jacobian determinant of a composite of equidimensional holomorphic maps is the product
- `thm-identity-theorem-in-several-complex-variables` · theorem — A holomorphic function vanishing on a nonempty open subset of a domain vanishes identically
- `cor-holomorphic-functions-on-a-domain-form-an-integral-domain` · corollary — The holomorphic functions on a domain in $\mathbb{C}^m$ have no zero divisors
- `thm-maximum-modulus-principle-in-several-complex-variables` · theorem — An interior local maximum of the modulus forces a scalar holomorphic function to be constant
- `cor-liouville-theorem-in-several-complex-variables` · corollary — A bounded holomorphic function on all of $\mathbb{C}^m$ is constant
- `thm-open-mapping-theorem-for-scalar-holomorphic-functions-in-several-variables` · theorem — A nonconstant scalar holomorphic function on a domain in $\mathbb{C}^m$ is an open map
- `rem-several-variable-conventions-and-the-identity-theorem-gap` · remark — Conventions on this page, and what the several-variable identity theorem does not say

### `holomorphic-functions-of-several-variables-examples` — Holomorphic Functions of Several Complex Variables — Examples (12 item(s))

- `ex-power-series-expansion-of-the-coordinate-product-on-a-bidisc` · example — The power series of $z_0z_1$ on a bidisc centred away from the origin
- `ex-power-series-expansion-of-an-exponential-of-a-coordinate-sum` · example — The power series of $\exp(z_0+z_1)$ on every bidisc
- `ex-power-series-expansion-of-a-geometric-quotient-in-two-variables` · example — The power series of $z_0/(1-z_1)$ and the shape of its domain of convergence
- `ex-cauchy-integral-formula-computed-on-a-bidisc` · example — The iterated Cauchy formula computed for $z_0z_1$ on a bidisc
- `ex-cauchy-estimates-computed-on-a-bidisc` · example — Cauchy estimates on a bidisc, computed and compared with the exact derivatives
- `ex-componentwise-holomorphy-of-an-explicit-map-into-complex-three-space` · example — Componentwise holomorphy checked for an explicit map $\mathbb{C}^2\to\mathbb{C}^3$
- `ex-complex-jacobian-of-a-quadratic-map-of-the-bidisc` · example — The complex Jacobian and its determinant for $(z_0z_1, z_0+z_1)$
- `ex-maximum-modulus-on-the-distinguished-boundary-of-a-bidisc` · example — A function whose modulus attains its maximum only on the distinguished boundary of a bidisc
- `cex-holomorphic-zero-set-in-two-variables-is-neither-isolated-nor-bounded` · counterexample — A nonzero holomorphic function on $\mathbb{C}^2$ whose zero set is an unbounded hyperplane
- `fs-several-variable-identity-theorem-from-an-accumulation-point` · false-statement — A holomorphic function on a domain in $\mathbb{C}^2$ vanishing on a set with an accumulation point vanishes identically
- `fs-separately-real-analytic-functions-are-jointly-continuous` · false-statement — A bounded function of two real variables whose every coordinate slice is real analytic is continuous
- `rem-separate-regularity-and-joint-continuity-in-the-real-and-complex-cases` · remark — Why local boundedness gives joint continuity here and nothing like it holds in the real case

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: both
lanes may have passed every item you own. Verify it against
`research/frontier-18-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — fatal-only adjudication of the paired-judge verdicts, run `frontier-18`

You are a **group Alpha**. Step 8 is partitioned: each group Alpha adjudicates
the rejections against items in its own batches, and no rejection belongs to
two adjudicators. `research/frontier-18-step8-scope.json` is the partition, and
`research/frontier-18-alpha-<label>-step8.task.md` is your own group's copy — if you
are reading this file standalone, open the scope file and find your label before
anything else.

Within your group you are the **sole adjudicator** of a judge rejection. No
other agent may close one of your rows.

## The rule that governs this stage

**Only a `confirmed_fatal` adjudication licenses an edit.** A
`confirmed_nonfatal` or `false_positive` closes the rejection on its ledger
row with **no content, page, frontmatter, contract, impact, or judge
mutation**.

The reason is mechanical, not stylistic: any edit is a material rewrite, so a
step-8 polish voids `verification.judge`, forces a rejudge, and resamples a
refuter — an unbounded loop converging on nothing. Cosmetic polish belonged at
step 6, where no verdict existed to void.

**Two adjudication/repair/rejudge cycles are the hard ceiling.** Within those
rounds, your repair licence is the full set: rewrite part of the proof, write
the whole proof, correct the Statement/Definition/title, or add intermediate
lemmas — and if none closes the defect honestly, narrow or withdraw the claim.
After the second cycle, any item still carrying a confirmed fatal defect is a
terminal blocker for the owner or supervising session. Do not request or
perform a third judge cycle. The owner/session must resolve the mathematics
directly and bind that decision to the exact current item and context hashes in
`research/frontier-18-step8-terminal-resolutions.jsonl`; this is neither a judge
verdict nor a pass stamp.

**Every rejection is adjudicated, not the interesting ones.** The closure gate
checks that direction; `step8-guard` checks only the other one, that edits
were licensed.

## Read scope, write scope

**Read the whole library.** Your sandbox is the repository root: `items/` holds
every published item and every item this run has built, and the batch manifests
`research/frontier-18-batch-*.pages.json` say what the run is building and who owns
it. Open every item a rejection touches, including one in another group or one
published years ago. A dependency objection adjudicated without opening the
cited item is the failure `briefs/alpha.md` forbids the refuters, and it is no
better coming from you.

**Write only inside your own batches** — with one exception, published content,
below.

### A defect in another group's item: alert that group, never repair it

Record it in `research/frontier-18-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`,
adjudicate your own rejection on what is true, and carry on. The source tuple is
provenance only; it is never a verdict against the target item. Get `owning_group` from
`by_item` in `research/frontier-18-step8-scope.json`.

That row **is** the alert. `tools/step8-scope.mjs check` fails the stage while it
is unanswered, and the engine re-dispatches the owning group's Alpha against it —
so the finding reaches a reader who holds that batch's conventions, which you do
not. Write the finding so that reader can act on it: name the item, quote the
text you believe is wrong, and say what makes you think so. "Looks suspect" wastes
a dispatch. The engine assigns a stable alert id. The owning group appends a
decision to `research/frontier-18-step8-alert-decisions.jsonl`:

```
{version:1, alert_id, item, from_group, owning_group,
 outcome:"not_defect"|"nonfatal"|"covered_by_rejection"|"confirmed_fatal_unlicensed",
 rationale, target_rejection?, at}
```

`covered_by_rejection` requires `target_rejection:{id,model,context_sha256}` to
name a real rejection of the target plus an exact `confirmed_fatal`
adjudication. `confirmed_fatal_unlicensed` blocks and causes the engine to seek
a targeted judge verdict; it never licenses an edit by itself.

### A defect in a PUBLISHED item: repair it, then send it to both judges

Published pages are live on the site. If a rejection you are adjudicating exposes
an unambiguous falsehood in a published item — a false Definition, Statement,
Fact or equally load-bearing prose, or an inaccurate citation of one — **repair
it**. Do not route it to another group: no group owns published content, and
leaving a known falsehood live because it was out of scope is not a disposition.

Write one row to a namespaced temporary JSON file:

```
{kind: "repaired", id, group, found_via, pre_sha256, defect, correction_basis}
```

Append it with
`node tools/published-repairs.mjs append --run frontier-18 --file <rows.json>`.
Never edit the shared JSONL directly; group Alphas run concurrently.

`found_via` is the run item whose rejection exposed it. `defect` says what was
false. `correction_basis` says what makes the replacement right — the exact
source-checked statement with its conventions and hypotheses, or the elementary
check anyone can repeat. `pre_sha256` is the **guard form** of the item text
before your edit (`tools/item-hash.mjs` `itemHashGuard`, whole `verification:`
block excluded); without it the row licenses nothing and `step8-guard` reads your
edit as an unlicensed one.

**Then it goes to both judge lanes.** `8-rejudge` sweeps every id in that ledger,
and `tools/step8-scope.mjs published` fails the stage until both lanes have
returned a verdict on the repaired text and any rejection has been adjudicated.
This is the certification: published content has no step-6 reader left to certify
it, and no author certifies its own repair.

**What you must NOT do here.** The replacement is the source-checked statement or
a directly checkable elementary correction — never an unsupported nontrivial
theorem, and never a choice between two defensible conventions. **Deletions, id
changes and reading-order changes to published pages are the owner's alone.** If
the correction needs one of those, or a debatable restatement, or a new theorem,
or it leaves an impact queue open, it is not yours to make: record

```
{kind: "escalated", id, group, found_via, why}
```

and stop. An escalation is a correct action by the Alpha but a hard workflow
blocker until the owner resolves it; known unresolved published falsehoods do
not advance. Improvising on published mathematics is not allowed.

## Read the lanes for what each one is

The two lanes are **not** independent corroboration of each other in the way a
count of agreements suggests. Terra shares the GPT family with the Betas that
authored this text and with you. DeepSeek is the only cross-family reader in
the run. A DeepSeek-only rejection is the one finding no other lane here could
have produced; give it the weight its isolation earns, and give a Terra
rejection you are inclined to call `false_positive` an extra pass, because that
verdict is two same-family reads agreeing.

A capacity refusal is a **null verdict, not a verdict**. Never adjudicate one.

## Before you adjudicate

The `pre-step8` snapshot is taken by the engine at stage `8-baseline`, before
any group Alpha is dispatched. **Do not take one yourself** — a second snapshot
under the same label after your first edit would license it retroactively.

Every adjudication row records `item_sha256` — the sha256 of the normalized
item text with the verification block excluded, **at adjudication time**.
Without it the guard cannot tell a licensed edit from an unlicensed one.

## What to do

For every rejection against an item in your batches, in
`research/frontier-18-judge.jsonl`:

1. Read the frozen verdict and the current text on disk.
2. Record in `research/frontier-18-judge-adjudications.jsonl`:
   `{id, model, context_sha256, item_sha256, outcome, defect_type?}` —
   `outcome` is `confirmed_fatal` | `confirmed_nonfatal` | `false_positive`;
   fatal types are `logic`, `dependency_citation`, `other`.
3. Apply repairs for `confirmed_fatal` only, and write each one's
   `research/defect-ledger.jsonl` row in the same act
   (`node tools/defect-ledger.mjs append` — one row per confirmed_fatal).
4. Name the exact changed items for rejudge. **Only touched items rejudge** —
   an unedited page-mate is spared even though the pair's context hash moved.

The adjudication ledger is **append-only and shared by every group**. Append;
never rewrite it, and never remove a row another group wrote.

## The gates

```
node tools/step8-guard.mjs --touches research/frontier-18-touches.json \
  --baseline pre-step8 --adjudications research/frontier-18-judge-adjudications.jsonl
node tools/step8-scope.mjs check --run frontier-18
```

Every item changed since the baseline must be licensed by a `confirmed_fatal`
row against the pre-edit state, and every cross-group finding must be answered
by the group that owns the item.

## Output

`research/frontier-18-alpha-step8-<label>.md`, where `<label>` is your group: every
rejection you were given, its adjudication, the evidence, and for each repair
what changed and why it was fatal. Name any cross-group finding you raised and
any you answered.

**No permission prompts of any kind**, including inside an `&&` chain.
