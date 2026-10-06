# Step 7 adjudication — group **d**, run `frontier-39-analysis-30`

You are the group Alpha for batches **7**, **20**, **29**: 3 A/B pair(s), 6 page(s), 89 item(s), 0 open rejection(s) over 0 item(s).

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
in `research/frontier-39-analysis-30-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

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

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-39-analysis-30-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-7 closure recovery, `frontier-39-analysis-30`

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
