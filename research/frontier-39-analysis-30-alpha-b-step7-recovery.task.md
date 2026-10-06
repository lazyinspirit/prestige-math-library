# Step 7 adjudication — group **b**, run `frontier-39-analysis-30`

You are the group Alpha for batches **2**, **3**, **6**: 3 A/B pair(s), 6 page(s), 91 item(s), 0 open rejection(s) over 0 item(s).

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
| 2 | `wave-equation-representation-formulas` | A | pde | 458.015 | `poisson-problems-and-interior-harmonic-estimates`, `the-gamma-function` |
| 2 | `wave-equation-representation-formulas-examples` | B | pde | 458.016 | `wave-equation-representation-formulas` |
| 3 | `wave-energy-finite-propagation-and-huygens` | A | pde | 458.017 | `wave-equation-representation-formulas` |
| 3 | `wave-energy-finite-propagation-and-huygens-examples` | B | pde | 458.018 | `wave-energy-finite-propagation-and-huygens` |
| 6 | `bmo-john-nirenberg-and-h1-duality` | A | fourier-analysis | 458.02609 | `calderon-zygmund-decomposition-and-singular-integrals`, `real-hardy-spaces-maximal-functions-and-atoms`, `the-baire-principles-of-functional-analysis`, `orthonormal-bases-parseval-and-fourier-series` |
| 6 | `bmo-john-nirenberg-and-h1-duality-examples` | B | fourier-analysis | 458.0261 | `bmo-john-nirenberg-and-h1-duality` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `wave-equation-representation-formulas` — Wave Equation Representation Formulas (28 item(s))

- `def-wave-equation-cauchy-data-and-wave-speed` · definition — Wave equation, Cauchy data and wave speed
- `lem-iterated-radial-derivative-identity` · lemma — The iterated radial-derivative identity behind the odd-dimensional reduction
- `lem-radial-derivative-expansion-of-the-epd-transform` · lemma — Radial-derivative expansion of the Euler–Poisson–Darboux transform and its zero-radius limit
- `lem-first-moment-of-the-unit-sphere-vanishes` · lemma — Reflection invariance and vanishing first moment of the sphere measure
- `lem-derivative-of-an-integral-with-moving-endpoints` · lemma — Differentiating an integral with moving endpoints
- `def-spherical-mean-of-space-dependent-data` · definition — Spherical means and the weighted ball integral of space-dependent data
- `lem-one-dimensional-wave-operator-factorisation` · lemma — Factorisation of the one-dimensional wave operator
- `lem-odd-dimensional-wave-kernels-obey-the-radial-recursion` · lemma — The radial recursion between dimensions n and n+2
- `lem-ball-and-sphere-mean-radial-identity` · lemma — Ball means and sphere means are related by a radial derivative
- `lem-spherical-surface-integrals-project-onto-weighted-ball-integrals` · lemma — Sphere integrals of a cylindrical function project to weighted ball integrals
- `lem-general-solution-of-the-one-dimensional-wave-equation` · lemma — General solution of the one-dimensional wave equation
- `lem-spherical-means-of-smooth-data-are-smooth` · lemma — Smoothness, parity and zero-radius limits of spherical means
- `lem-euler-poisson-darboux-equation-for-spherical-means` · lemma — The Euler–Poisson–Darboux equation for spherical means
- `thm-dalembert-formula` · theorem — d'Alembert's formula and uniqueness in one dimension
- `lem-dalembert-formula-attains-both-initial-data` · lemma — The d'Alembert expression attains both initial data
- `cor-one-dimensional-wave-domain-of-dependence` · corollary — The one-dimensional value depends on the characteristic interval
- `thm-one-dimensional-forced-wave-duhamel-formula` · theorem — The forced one-dimensional wave formula over the characteristic triangle
- `thm-kirchhoff-formula-for-the-three-dimensional-wave-equation` · theorem — Kirchhoff's formula in three dimensions
- `thm-poisson-formula-for-the-two-dimensional-wave-equation` · theorem — Poisson's formula in two dimensions by descent
- `thm-odd-dimensional-wave-formula-by-spherical-means` · theorem — The odd-dimensional wave formula by iterated spherical means
- `thm-even-dimensional-wave-formula-by-descent` · theorem — The even-dimensional wave formula by descent
- `lem-wave-formulas-attain-the-cauchy-data` · lemma — The dimension formulas attain the Cauchy data
- `thm-wave-duhamel-principle` · theorem — Duhamel's principle for the wave equation
- `thm-forced-three-dimensional-kirchhoff-duhamel-formula` · theorem — The forced three-dimensional version as a retarded potential
- `thm-support-dichotomy-for-free-wave-fundamental-solutions` · theorem — Sphere-supported versus interior-supported free wave kernels
- `cor-classical-wave-solutions-are-locally-determined-by-cauchy-data` · corollary — The constructed classical solutions are locally determined by the Cauchy data
- `cor-time-reversal-invariance-of-the-homogeneous-wave-equation` · corollary — Time reversal of the homogeneous wave equation
- `rem-wave-poisson-formula-is-not-the-harmonic-poisson-kernel` · remark — Two different objects are called Poisson's formula

### `wave-equation-representation-formulas-examples` — Wave Equation Representation Formulas — Examples (9 item(s))

- `ex-right-and-left-travelling-waves` · example — Right- and left-travelling waves
- `ex-one-dimensional-wave-from-a-compactly-supported-velocity` · example — A compactly supported velocity datum produces an expanding interval
- `ex-three-dimensional-radial-wave-reduces-to-one-dimension` · example — A radial three-dimensional wave reduces to one dimension
- `ex-kirchhoff-formula-for-constant-initial-velocity` · example — Constant initial velocity in three dimensions
- `ex-two-dimensional-wave-has-an-interior-tail` · example — A two-dimensional interior tail
- `cex-wave-formula-with-sphere-area-and-ball-volume-confused` · counterexample — Replacing the sphere measure by the ball measure in Kirchhoff's formula
- `cex-characteristic-line-data-do-not-determine-a-one-dimensional-wave` · counterexample — Data on one characteristic line do not determine a one-dimensional wave
- `ex-point-source-wave-front-in-three-dimensions` · example — A point source produces a uniform expanding sphere
- `ex-wave-support-from-pure-displacement-versus-pure-velocity-data` · example — Displacement data versus velocity data in one dimension

### `wave-energy-finite-propagation-and-huygens` — Wave Energy Finite Propagation and Huygens (19 item(s))

- `def-wave-energy-and-energy-flux` · definition — Wave energy density, energy flux and total energy
- `lem-local-wave-energy-conservation-law` · lemma — The local wave-energy conservation law
- `lem-integral-of-a-divergence-of-an-l-one-c-one-field-vanishes` · lemma — The integral of the divergence of an integrable C1 field vanishes
- `lem-truncated-wave-cone-geometry-and-frustum-presentation` · lemma — Truncated wave cones: convexity, piecewise C1 presentation and outward normals
- `lem-vanishing-gradient-and-time-derivative-imply-constancy-on-convex-sets` · lemma — Vanishing gradient and time derivative force constancy on convex sets
- `thm-conservation-of-total-wave-energy` · theorem — Conservation of total wave energy in three admissible settings
- `cor-energy-uniqueness-for-the-wave-cauchy-problem` · corollary — Energy uniqueness for the wave Cauchy problem
- `thm-energy-continuous-dependence-for-the-forced-wave-equation` · theorem — Continuous dependence of wave energy on the forcing
- `def-forward-and-backward-wave-cones-domain-of-dependence-and-influence` · definition — Forward and backward wave cones, domain of dependence and influence
- `lem-energy-identity-on-a-truncated-wave-cone` · lemma — Energy identity on a truncated wave cone and positivity of the null-side flux
- `thm-finite-propagation-speed-for-the-wave-equation` · theorem — Finite propagation speed: vanishing data and source in a backward cone
- `cor-compact-support-expands-at-speed-at-most-c` · corollary — Compact support expands at speed at most c
- `thm-domain-of-dependence-and-local-uniqueness` · theorem — Domain of dependence and local uniqueness inside a backward cone
- `def-strong-huygens-principle` · definition — The strong Huygens principle in the precise homogeneous Cauchy sense
- `thm-strong-huygens-principle-in-odd-spatial-dimensions` · theorem — The strong Huygens principle in odd spatial dimensions
- `thm-wave-tails-in-one-and-even-spatial-dimensions` · theorem — Wave tails in dimension one and in even dimensions
- `rem-finite-propagation-is-not-huygens-principle` · remark — Finite propagation is not Huygens' principle
- `cor-time-reversed-energy-uniqueness-from-final-data` · corollary — Time-reversed energy uniqueness from final data
- `thm-energy-uniqueness-for-homogeneous-dirichlet-waves-on-bounded-domains` · theorem — Energy uniqueness for homogeneous Dirichlet waves on bounded domains

### `wave-energy-finite-propagation-and-huygens-examples` — Wave Energy Finite Propagation and Huygens — Examples (9 item(s))

- `ex-conserved-energy-of-a-travelling-wave-packet` · example — Conserved energy of a travelling wave packet
- `ex-reflection-at-a-dirichlet-endpoint` · example — Reflection at a Dirichlet endpoint: odd reflection, reversed sign, conserved energy
- `ex-three-dimensional-spherical-pulse-leaves-a-quiet-tail` · example — A three-dimensional spherical pulse leaves a quiet interior
- `ex-two-dimensional-pulse-has-a-tail-inside-the-cone` · example — A two-dimensional pulse has a tail inside the cone
- `cex-finite-speed-does-not-imply-strong-huygens` · counterexample — Finite speed does not imply strong Huygens
- `cex-wave-energy-need-not-be-conserved-through-an-open-boundary` · counterexample — Wave energy need not be conserved through an open boundary
- `cex-global-energy-identity-needs-integrability-or-decay` · counterexample — The global energy identity needs integrability or decay
- `ex-plane-wave-shows-the-characteristic-speed-is-sharp` · example — Plane waves show that the characteristic speed is sharp
- `ex-zero-wave-energy-means-spatial-constant-before-data-fix-the-constant` · example — Zero wave energy means a spatial constant until the datum fixes it

### `bmo-john-nirenberg-and-h1-duality` — BMO, John-Nirenberg, and H1 Duality (20 item(s))

- `def-bmo-seminorm-and-quotient-by-constants` · definition — BMO seminorm and the quotient by constants
- `lem-hilbert-and-riesz-transforms-are-calderon-zygmund-operators` · lemma — The Hilbert and Riesz transforms are Calderon-Zygmund operators
- `cor-linfinity-embeds-continuously-into-bmo` · corollary — L-infinity embeds continuously into BMO modulo constants
- `lem-bmo-averages-on-nested-cubes-grow-at-most-logarithmically` · lemma — BMO averages on nested cubes grow at most logarithmically
- `lem-bmo-functions-pair-uniformly-with-hone-atoms` · lemma — BMO functions pair uniformly with H1 atoms
- `lem-john-nirenberg-stopping-cubes-have-geometric-decay` · lemma — John-Nirenberg stopping cubes have geometric decay
- `lem-range-truncations-preserve-bmo-seminorm` · lemma — Range truncations preserve the BMO seminorm up to a constant
- `thm-calderon-zygmund-operators-map-linfinity-to-bmo` · theorem — Calderon-Zygmund operators map L-infinity to BMO
- `cor-hilbert-and-riesz-transforms-map-linfinity-to-bmo` · corollary — The Hilbert and Riesz transforms map L-infinity to BMO
- `thm-john-nirenberg-exponential-inequality` · theorem — John-Nirenberg exponential inequality
- `cor-bmo-lp-oscillation-norms-are-equivalent` · corollary — BMO oscillation norms in Lq are equivalent
- `lem-ltwo-atoms-have-uniform-hone-quasinorm` · lemma — L2-normalised H1 atoms have uniformly bounded H1 norm
- `lem-mean-zero-ltwo-functions-on-a-cube-embed-continuously-in-hone` · lemma — Mean-zero L2 functions on a cube embed continuously into H1
- `lem-finite-atomic-sums-are-dense-in-hone` · lemma — Finite atomic sums are dense in H1
- `lem-hone-functional-has-compatible-local-ltwo-representatives` · lemma — Bounded H1 functionals have compatible local L2 representatives
- `lem-linfinity-bmo-functions-dualise-hone-boundedly` · lemma — Bounded BMO functions dualise H1 boundedly
- `lem-the-dual-representative-has-uniform-bmo-oscillation` · lemma — The dual representative has uniformly bounded BMO oscillation
- `thm-bmo-defines-a-bounded-functional-on-hone` · theorem — BMO classes define bounded functionals on H1
- `lem-bmo-classes-are-determined-by-their-atom-pairings` · lemma — BMO classes are determined by their pairings with H1 atoms
- `thm-real-hone-bmo-duality` · theorem — Real H1-BMO duality

### `bmo-john-nirenberg-and-h1-duality-examples` — BMO, John-Nirenberg, and H1 Duality — Examples (6 item(s))

- `ex-bmo-seminorm-is-unchanged-by-adding-a-constant` · example — The BMO seminorm is unchanged by adding a constant
- `rem-one-grid-dyadic-bmo-is-not-identical-to-bmo` · remark — Recorded: one dyadic grid is not enough for BMO
- `ex-logarithm-is-in-bmo-but-not-linfinity` · example — The logarithm is in BMO but not in L-infinity
- `cex-bmo-functions-need-not-be-globally-integrable` · counterexample — A BMO function need not be globally integrable
- `ex-john-nirenberg-tail-integration` · example — Integrating the John-Nirenberg tail recovers the Lq oscillation bound
- `ex-lacunary-exponential-sums-belong-to-bmo` · example — Finite lacunary exponential sums belong to BMO

## Your seams

Your pages depend on another group's:

- `bmo-john-nirenberg-and-h1-duality` requires `real-hardy-spaces-maximal-functions-and-atoms` (group c, batch 5)

Another group's pages depend on yours:

- `littlewood-paley-theory-and-square-functions` (group d) requires your `bmo-john-nirenberg-and-h1-duality`

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
