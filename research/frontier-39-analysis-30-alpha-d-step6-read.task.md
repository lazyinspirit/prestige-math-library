# Step 6 Alpha group reader — read-only digest — group **d**, run `frontier-39-analysis-30`

- You are the read-only Step 6 Alpha group reader for batches **7**, **20**, **29**: 3 A/B pair(s), 6 page(s), 89 item(s).

- Read every owned item and every listed seam before returning the compact
  schema-constrained digest. That file, not this conversation, is the handoff
  to a fresh Step-7 adjudicator. No judge verdict is supplied here.
- Read items in dependency order across the group: suppliers before their
  direct and indirect consumers, including prerequisites outside the group.
- In the digest, `pages_read` is exactly the ids under **Your pages** and
  `items_read` exactly the ids under **Your content**. External items you
  open belong only in `published_dependencies`; never add them to those inventories.
- Everything below is derived from disk by `tools/step7-scope.mjs`; no line
  of it is a judgement about mathematics.

## Read scope

- **Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

- **This dispatch is read-only.** Record concerns about owned items and alerts
  about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 7 | `littlewood-paley-theory-and-square-functions` | A | fourier-analysis | 458.02611 | `lacunary-fourier-series-and-sidon-sets`, `fourier-multipliers-and-sobolev-characterisations`, `calderon-zygmund-decomposition-and-singular-integrals`, `real-hardy-spaces-maximal-functions-and-atoms`, `bmo-john-nirenberg-and-h1-duality`, `schwartz-space-and-the-plancherel-theorem`, `the-maximal-function-and-lebesgue-differentiation` |
| 7 | `littlewood-paley-theory-and-square-functions-examples` | B | fourier-analysis | 458.02612 | `littlewood-paley-theory-and-square-functions` |
| 20 | `scalar-conservation-laws-and-entropy-solutions` | A | pde | 458.049 | `hamilton-jacobi-equations-and-viscosity-solutions`, `rellich-kondrachov-and-sobolev-compactness`, `heat-equation-maximum-principles-duhamel-and-smoothing` |
| 20 | `scalar-conservation-laws-and-entropy-solutions-examples` | B | pde | 458.05 | `scalar-conservation-laws-and-entropy-solutions` |
| 29 | `poisson-summation-sampling-and-lattice-duality` | A | fourier-analysis | 510.06509 | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence`, `fejer-and-poisson-summability-of-fourier-series`, `character-groups-and-elementary-lca-duals`, `pontryagin-duality-for-locally-compact-abelian-groups`, `finite-fourier-analysis-and-the-fast-fourier-transform`, `tempered-distributions-and-the-fourier-transform`, `minkowski-theory-and-number-field-class-groups`, `trigonometric-and-oscillatory-examples-in-one-variable` |
| 29 | `poisson-summation-sampling-and-lattice-duality-examples` | B | fourier-analysis | 510.0651 | `poisson-summation-sampling-and-lattice-duality` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `littlewood-paley-theory-and-square-functions` — Littlewood Paley Theory and Square Functions (18 item(s))

- `def-rademacher-functions-on-the-unit-interval` · definition — Rademacher functions on the unit interval
- `lem-finite-rademacher-blocks-are-equidistributed` · lemma — Finite Rademacher blocks are equidistributed
- `thm-khintchine-inequality-for-finite-rademacher-sums` · theorem — Khintchine's inequality for finite Rademacher sums
- `lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition` · lemma — Existence of a smooth inhomogeneous dyadic frequency partition
- `def-inhomogeneous-dyadic-frequency-partition` · definition — The inhomogeneous dyadic frequency partition and its Littlewood-Paley operators
- `lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds` · lemma — Dyadic pieces have annular Fourier support and uniformly bounded rescaled kernels
- `lem-dyadic-pieces-are-uniform-mihlin-multipliers-and-lp-bounded` · lemma — Dyadic pieces are uniformly Mihlin multipliers and uniformly Lp-bounded
- `lem-ltwo-almost-orthogonality-of-dyadic-pieces` · lemma — L2 almost orthogonality of the dyadic pieces
- `def-littlewood-paley-square-function` · definition — The Littlewood-Paley square function
- `lem-rademacher-randomisation-converts-square-functions-to-multipliers` · lemma — Rademacher randomisation turns dyadic square functions into random signed multipliers
- `lem-random-signed-dyadic-sums-have-uniform-mihlin-bounds` · lemma — Random signed dyadic sums have uniform Mihlin and Lp multiplier bounds
- `lem-littlewood-paley-reproducing-formula-in-tempered-distributions` · lemma — The Littlewood-Paley reproducing formula in tempered distributions
- `thm-littlewood-paley-square-function-equivalence-on-lp` · theorem — Littlewood-Paley square-function equivalence on Lp for 1<p<infinity
- `cor-dyadic-partition-choice-does-not-change-the-lp-square-function-space` · corollary — The choice of admissible dyadic partition does not change the Lp square-function space
- `thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces` · theorem — Littlewood-Paley characterisation of the Hilbert-Sobolev spaces
- `def-lusin-area-function-for-a-fixed-admissible-kernel` · definition — The Lusin area function for a fixed admissible kernel and aperture
- `rem-square-function-characterisation-of-real-hone` · remark — Recorded: the square-function characterisation of the real Hardy space H1
- `rem-littlewood-paley-endpoints-require-hardy-and-bmo-replacements` · remark — The Littlewood-Paley equivalence is strict-range: the endpoints need H1 and BMO

### `littlewood-paley-theory-and-square-functions-examples` — Littlewood Paley Theory and Square Functions — Examples (5 item(s))

- `ex-square-function-of-one-frequency-localised-function` · example — The square function of a low-frequency-localised function
- `ex-dyadic-square-function-of-two-separated-frequency-packets` · example — Two separated dyadic frequency packets add in Euclidean square
- `cex-sharp-frequency-cutoffs-do-not-have-uniform-lone-kernels` · counterexample — Sharp frequency cutoffs have kernels that are not in L1
- `rem-littlewood-paley-linfinity-endpoint-needs-bmo-carleson-control` · remark — Recorded: the L-infinity endpoint needs BMO and Carleson control, not L-infinity
- `ex-sobolev-weight-on-a-single-dyadic-annulus` · example — The Sobolev weight on a single dyadic annulus

### `scalar-conservation-laws-and-entropy-solutions` — Scalar Conservation Laws and Entropy Solutions (31 item(s))

- `def-scalar-conservation-law-and-flux` · definition — Scalar conservation laws, fluxes and Cauchy data
- `def-distributional-weak-solution-of-a-scalar-conservation-law` · definition — Distributional weak solutions of the Cauchy problem
- `prop-classical-solutions-satisfy-the-weak-conservation-law` · proposition — Classical solutions are weak solutions, and conversely
- `prop-characteristics-for-a-one-dimensional-scalar-conservation-law` · proposition — Characteristics and the Riccati equation for the spatial derivative
- `def-piecewise-smooth-shock-and-one-sided-traces` · definition — Piecewise smooth shocks and one-sided traces
- `thm-rankine-hugoniot-jump-condition` · theorem — The Rankine--Hugoniot jump condition
- `prop-distributional-weak-solutions-are-not-unique` · proposition — Weak solutions are not unique without an entropy condition
- `def-convex-entropy-entropy-flux-pair` · definition — Convex entropy--entropy flux pairs
- `prop-viscous-entropy-dissipation-identity` · proposition — The viscous entropy dissipation identity
- `def-kruzhkov-entropy-solution` · definition — Kruzhkov entropy solutions
- `thm-viscous-scalar-cauchy-problem-with-smooth-data-has-a-global-classical-solution` · theorem — The viscous scalar Cauchy problem with smooth data has a global classical solution
- `lem-viscous-approximations-obey-uniform-linfinity-and-energy-bounds` · lemma — Uniform L-infinity, mass and energy bounds for the viscous approximations
- `lem-viscous-scalar-laws-contract-spatial-translates-in-lone` · lemma — Viscous solutions contract spatial translates in $L^1$
- `lem-kato-inequality-for-two-entropy-solutions` · lemma — Kato's inequality for two entropy solutions
- `thm-kruzhkov-local-l1-contraction` · theorem — Local $L^1$ contraction for two entropy solutions
- `cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions` · corollary — Uniqueness, comparison and order preservation of entropy solutions
- `cor-finite-propagation-for-scalar-conservation-laws` · corollary — Finite propagation for scalar conservation laws
- `lem-vanishing-viscosity-families-are-locally-precompact-in-lone` · lemma — Vanishing-viscosity families are locally precompact in $L^1$
- `cor-global-lone-contraction-from-the-local-kruzhkov-estimate` · corollary — Global $L^1$ contraction from the local estimate
- `thm-existence-of-bounded-kruzhkov-entropy-solutions` · theorem — Existence of bounded Kruzhkov entropy solutions
- `lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality` · lemma — The convex entropy condition for a single shock is the chord condition
- `def-self-similar-riemann-problem` · definition — The self-similar Riemann problem
- `thm-riemann-solver-for-strictly-convex-scalar-flux` · theorem — The Riemann solver for a strictly convex flux
- `thm-oleinik-one-sided-entropy-condition` · theorem — Oleinik's one-sided estimate characterizes bounded entropy solutions
- `cor-lax-shock-inequalities-for-convex-scalar-laws` · corollary — The Lax shock inequalities for convex scalar laws
- `thm-hamilton-jacobi-conservation-law-correspondence-in-one-dimension` · theorem — The Hamilton--Jacobi correspondence in one dimension
- `cor-mass-conservation-for-integrable-entropy-solutions` · corollary — Mass conservation for compactly supported entropy solutions
- `lem-additive-constant-in-an-entropy-flux-does-not-change-the-entropy-inequality` · lemma — An additive constant in the entropy flux is immaterial
- `cor-linfinity-maximum-bound-for-scalar-entropy-solutions` · corollary — The $L^\infty$ maximum bound for entropy solutions
- `thm-entropy-solution-semigroup-on-lone` · theorem — The entropy solution semigroup on $L^1\cap L^\infty$
- `thm-entropy-solution-orbits-are-strongly-continuous-in-lone` · theorem — Entropy solution orbits are strongly continuous in $L^1$

### `scalar-conservation-laws-and-entropy-solutions-examples` — Scalar Conservation Laws and Entropy Solutions — Examples (13 item(s))

- `ex-burgers-shock-riemann-solution` · example — The Burgers shock Riemann solution
- `ex-burgers-rarefaction-riemann-solution` · example — The Burgers rarefaction Riemann solution
- `ex-gradient-catastrophe-before-shock-formation` · example — Gradient catastrophe before shock formation
- `ex-rankine-hugoniot-in-space-time-normal-form` · example — Rankine--Hugoniot in space--time normal form
- `ex-kruzhkov-entropy-inequality-for-a-shock` · example — The Kruzhkov entropy inequality across a shock
- `ex-hamilton-jacobi-primitive-of-a-burgers-solution` · example — The Hamilton--Jacobi primitive of a Burgers solution
- `cex-expansion-shock-is-weak-but-not-entropic` · counterexample — The expansion shock is weak but not entropic
- `cex-rankine-hugoniot-alone-does-not-give-uniqueness` · counterexample — Rankine--Hugoniot alone does not give uniqueness
- `cex-pointwise-shock-values-do-not-affect-the-weak-solution` · counterexample — Pointwise shock values do not affect the weak solution
- `cex-convex-flux-riemann-formula-fails-for-a-nonconvex-flux` · counterexample — The convex-flux Riemann formula fails for a nonconvex flux
- `ex-distinct-states-with-equal-flux-give-a-stationary-weak-discontinuity` · example — Distinct states with equal flux give a stationary weak discontinuity
- `ex-affine-flux-reduces-the-entropy-semigroup-to-translation` · example — Affine flux reduces the entropy semigroup to translation
- `ex-nonconvex-riemann-data-can-require-a-composite-rarefaction-shock-wave` · example — Nonconvex Riemann data can require a composite shock--rarefaction wave

### `poisson-summation-sampling-and-lattice-duality` — Poisson Summation Sampling and Lattice Duality (17 item(s))

- `def-full-rank-lattice-covolume-and-dual-lattice` · definition — Full-rank lattices, covolume, and the dual lattice
- `lem-invertible-linear-substitutions-preserve-schwartz-space` · lemma — Invertible linear substitutions preserve Schwartz space
- `lem-lattice-fundamental-parallelotope-partitions-euclidean-space` · lemma — Fundamental parallelotopes of a lattice tile Euclidean space with covolume volume
- `lem-character-orthogonality-on-a-lattice-fundamental-domain` · lemma — Orthogonality of the lattice characters over a fundamental domain
- `lem-schwartz-periodisation-over-a-lattice-is-smooth-and-uniformly-summable` · lemma — Schwartz periodisation over a lattice is smooth with locally uniformly summable derivatives
- `lem-fourier-coefficients-of-lattice-periodisation` · lemma — Fourier coefficients of a lattice periodisation
- `rem-schwartz-poisson-formula-is-owned-by-functional-analysis` · remark — The unit-lattice Schwartz Poisson formula is owned by functional analysis (recorded, not proved here)
- `lem-lattice-periodic-continuous-functions-are-determined-by-their-lattice-fourier-coefficients` · lemma — Continuous lattice-periodic functions are determined by their lattice Fourier coefficients
- `thm-poisson-summation-for-a-full-rank-lattice` · theorem — Poisson summation for a full-rank lattice
- `thm-poisson-summation-under-two-sided-polynomial-decay` · theorem — Poisson summation under two-sided polynomial decay
- `lem-dirac-comb-of-a-full-rank-lattice-transforms-to-the-dual-comb` · lemma — The Dirac comb of a full-rank lattice transforms to the dual comb
- `lem-sampling-produces-periodisation-in-frequency` · lemma — Sampling at a lattice produces periodisation of the spectrum over the dual lattice
- `def-normalized-sinc-function` · definition — The normalised sinc function
- `lem-bandlimited-samples-are-fourier-coefficients-on-the-band-interval` · lemma — Band-limited samples are the Fourier coefficients of the rescaled spectrum
- `thm-shannon-sampling-for-bandlimited-ltwo-functions` · theorem — Shannon sampling for band-limited $L^2$ functions
- `cor-nyquist-no-aliasing-condition` · corollary — The Nyquist no-aliasing condition
- `rem-aliasing-above-the-nyquist-rate` · remark — Aliasing when spectral support has positive-measure overlap with a reciprocal translate

### `poisson-summation-sampling-and-lattice-duality-examples` — Poisson Summation Sampling and Lattice Duality — Examples (5 item(s))

- `rem-gaussian-theta-reciprocity-is-already-instantiated-on-functional-analysis` · remark — Gaussian Poisson summation and theta reciprocity are already instantiated on functional analysis (recorded)
- `ex-dual-lattice-and-covolume-for-a-diagonal-scaling` · example — Dual lattice and covolume for a diagonal scaling
- `ex-shannon-reconstruction-of-a-sinc-function` · example — Shannon reconstruction of a sinc function
- `rem-lone-integrability-alone-does-not-license-pointwise-poisson-summation` · remark — Bare $L^1$ data do not license pointwise Poisson summation (recorded)
- `cex-undersampling-identifies-two-distinct-pure-frequencies` · counterexample — Distinct pure frequencies differing by a reciprocal-lattice shift have identical samples

## Your seams

Your pages depend on another group's:

- `littlewood-paley-theory-and-square-functions` requires `real-hardy-spaces-maximal-functions-and-atoms` (group c, batch 5)
- `littlewood-paley-theory-and-square-functions` requires `bmo-john-nirenberg-and-h1-duality` (group b, batch 6)
- `scalar-conservation-laws-and-entropy-solutions` requires `hamilton-jacobi-equations-and-viscosity-solutions` (group h, batch 19)
- `scalar-conservation-laws-and-entropy-solutions` requires `rellich-kondrachov-and-sobolev-compactness` (group c, batch 9)
- `scalar-conservation-laws-and-entropy-solutions` requires `heat-equation-maximum-principles-duhamel-and-smoothing` (group a, batch 1)
- `poisson-summation-sampling-and-lattice-duality` requires `pontryagin-duality-for-locally-compact-abelian-groups` (group j, batch 27)
- `poisson-summation-sampling-and-lattice-duality` requires `finite-fourier-analysis-and-the-fast-fourier-transform` (group a, batch 28)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 Alpha group reader — read-only digest, `frontier-39-analysis-30`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
