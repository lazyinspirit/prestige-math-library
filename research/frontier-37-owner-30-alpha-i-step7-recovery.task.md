# Step 7 adjudication — group **i**, run `frontier-37-owner-30`

You are the group Alpha for batches **7**, **26**, **27**: 3 A/B pair(s), 6 page(s), 90 item(s), 0 open rejection(s) over 0 item(s).

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
in `research/frontier-37-owner-30-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 7 | `riemann-roch-for-curves-via-euler-characteristics` | A | scheme-theory | 366.087 | `cartier-and-weil-divisors-line-bundles-and-picard-groups`, `sheaf-cohomology-cech-cohomology-and-comparison`, `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`, `smooth-proper-curves-divisors-genus-and-ramification` |
| 7 | `riemann-roch-for-curves-via-euler-characteristics-examples` | B | scheme-theory | 366.088 | `riemann-roch-for-curves-via-euler-characteristics` |
| 26 | `nevanlinna-second-main-theorem-and-defects` | A | complex-analysis | 841 | `measures-and-their-basic-properties`, `lebesgue-measure-on-euclidean-space`, `jensen-theory-and-nevanlinnas-first-main-theorem`, `the-riemann-sphere-and-mobius-transformations`, `bloch-schottky-and-picard`, `normal-families-and-montels-theorem`, `isolated-singularities-and-laurent-series`, `complex-power-series-and-analytic-functions`, `complex-differentiability-and-cauchy-riemann`, `the-complex-exponential-and-eulers-formula`, `the-inverse-function-theorem-completed`, `product-measures-and-the-fubini-tonelli-theorems` |
| 26 | `nevanlinna-second-main-theorem-and-defects-examples` | B | complex-analysis | 842 | `nevanlinna-second-main-theorem-and-defects` |
| 27 | `elliptic-functions-and-complex-tori` | A | complex-analysis | 845 | `the-winding-number-and-the-global-cauchy-theorem`, `isolated-singularities-and-laurent-series`, `the-argument-principle-and-rouche`, `infinite-products-and-weierstrass-factorisation`, `subspaces-products-and-quotients`, `covering-spaces-and-lifting`, `riemann-surfaces-branched-maps-and-differentials`, `orthonormal-bases-parseval-and-fourier-series`, `mittag-leffler-and-runges-theorem` |
| 27 | `elliptic-functions-and-complex-tori-examples` | B | complex-analysis | 846 | `elliptic-functions-and-complex-tori`, `harmonic-functions-and-the-poisson-integral`, `mittag-leffler-and-runges-theorem` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `riemann-roch-for-curves-via-euler-characteristics` — Riemann Roch for Curves via Euler Characteristics (34 item(s))

- `def-little-l-divisor` · definition — The integer l(D)
- `lem-riemann-roch-space-finite-dimensional` · lemma — Finite-dimensionality of the Riemann-Roch space
- `lem-divisor-order-monotonicity-sections` · lemma — Monotonicity of L(D) in the divisor
- `lem-add-one-point-exact-sequence-line-bundle` · lemma — The exact sequence for adding one point to a divisor
- `lem-add-one-point-euler-characteristic` · lemma — Euler characteristic changes by the residue degree
- `lem-divisor-decomposition-positive-negative-points` · lemma — Every divisor is a finite signed sum of points
- `thm-euler-characteristic-degree-shift-curve` · theorem — Riemann-Roch in Euler-characteristic form: degree shift
- `def-genus-euler-characteristic-curve` · definition — Genus via the Euler characteristic
- `thm-riemann-roch-euler-characteristic-curve` · theorem — Riemann-Roch for curves: the Euler-characteristic form
- `cor-riemann-inequality-divisor-sections` · corollary — The Riemann inequality
- `cor-negative-degree-no-sections-rr` · corollary — No sections in negative degree
- `lem-h1-stabilizes-downward-point-removal` · lemma — Adding points never raises h^1, and h^1 stabilizes
- `cor-existence-rational-function-bounded-pole` · corollary — Rational functions with poles bounded at one point
- `cor-smooth-proper-curve-finite-map-projective-line` · corollary — Finite morphisms from a curve to the projective line
- `thm-h1-line-bundle-vanishes-sufficiently-high-degree` · theorem — Vanishing of H^1 in a fixed ample direction
- `cor-riemann-theorem-large-degree` · corollary — Riemann's theorem for sufficiently positive divisors
- `thm-genus-zero-point-implies-projective-line` · theorem — A genus-zero curve with a degree-one divisor is the projective line
- `lem-projective-line-divisors-classified-by-degree` · lemma — Divisors on the projective line are classified by degree
- `cor-picard-projective-line-integers` · corollary — The Picard group of the projective line
- `lem-smooth-curve-coherent-torsion-free-locally-free` · lemma — Torsion-free coherent modules on a smooth curve are locally free
- `lem-nonzero-map-invertible-to-locally-free-injective` · lemma — Nonzero maps from an invertible sheaf to a locally free sheaf are injective
- `lem-vector-bundle-p1-has-maximal-degree-line-subbundle` · lemma — A vector bundle on the projective line has a line subbundle of maximal degree
- `lem-vector-bundle-p1-maximal-line-quotient-locally-free` · lemma — The quotient by a maximal line subbundle is locally free
- `lem-vector-bundle-p1-extension-splits` · lemma — Extensions of line bundles on the projective line split after ordering
- `thm-birkhoff-grothendieck-vector-bundles-p1` · theorem — Birkhoff-Grothendieck: vector bundles on the projective line split
- `lem-degree-zero-effective-divisor-empty` · lemma — An effective divisor of degree zero is empty
- `cor-degree-zero-line-bundle-section-trivial` · corollary — A degree-zero line bundle with a nonzero section is trivial
- `cor-nontrivial-degree-zero-line-bundle-no-sections` · corollary — Nontrivial degree-zero line bundles have no sections
- `def-index-speciality-divisor` · definition — The index of speciality i(D)
- `thm-riemann-roch-as-l-minus-index` · theorem — Riemann-Roch as l minus i
- `def-nonspecial-divisor` · definition — Special and nonspecial divisors
- `lem-large-positive-divisors-nonspecial` · lemma — Sufficiently positive divisors in a fixed direction are nonspecial
- `cor-dimension-complete-linear-system` · corollary — The dimension of a complete linear system
- `rem-sharp-degree-thresholds-wait-for-duality` · remark — Why the sharp degree thresholds wait for the duality pair

### `riemann-roch-for-curves-via-euler-characteristics-examples` — Riemann Roch for Curves via Euler Characteristics — Examples (10 item(s))

- `ex-riemann-roch-projective-line-divisor` · example — Riemann-Roch on the projective line for every degree
- `ex-genus-zero-conic-with-rational-point` · example — A smooth conic with a rational point is a projective line
- `cex-genus-zero-without-rational-point-not-p1` · counterexample — A genus-zero curve need not be the projective line
- `ex-adding-point-section-dimension-jump` · example — The jump l(D+p) - l(D) is zero or the residue degree
- `cex-riemann-inequality-not-equality-special-divisor` · counterexample — The Riemann inequality is not an equality for special divisors
- `ex-degree-zero-principal-divisor` · example — A principal divisor of degree zero on the projective line
- `ex-linear-system-poles-at-one-point` · example — A pencil of functions with poles at one point defines a finite map to the projective line
- `ex-nonspecial-large-divisor` · example — A sufficiently positive divisor is nonspecial and Riemann-Roch counts its sections
- `cex-negative-degree-rr-right-side-negative` · counterexample — A negative right-hand side does not contradict Riemann-Roch
- `ex-empty-divisor-euler-characteristic` · example — The empty divisor, its Euler characteristic and the genus boundary cases

### `nevanlinna-second-main-theorem-and-defects` — Nevanlinna's Second Main Theorem and Defects (14 item(s))

- `def-nevanlinna-exceptional-radius-notation` · definition — Nevanlinna exceptional-radius error notation
- `def-nevanlinna-truncated-and-ramification-counts` · definition — Truncated value and ramification counts
- `lem-borel-nevanlinna-growth-increment` · lemma — Finite-measure growth increment lemma
- `lem-nevanlinna-poisson-jensen-derivative-bound` · lemma — Separated-radius Poisson-Jensen derivative bound
- `lem-nevanlinna-ramification-counting-identity` · lemma — Ramification count from the derivative divisor
- `lem-nevanlinna-logarithmic-derivative` · lemma — Nevanlinna lemma on the logarithmic derivative
- `lem-nevanlinna-growth-dominates-logarithm` · lemma — Transcendental characteristic dominates logarithmic growth
- `thm-nevanlinna-second-main-theorem` · theorem — Nevanlinna Second Main Theorem with ramification and truncation
- `def-nevanlinna-deficiency-and-ramification-index` · definition — Nevanlinna deficiency and ramification index
- `thm-nevanlinna-defect-relation` · theorem — Nevanlinna deficiency and ramification defect relations
- `lem-nevanlinna-exterior-three-value-extension` · lemma — Three omitted values force exterior extension
- `thm-local-second-main-theorem-on-a-punctured-disc` · theorem — The local Second Main Theorem on a punctured disc
- `cor-nevanlinna-picard-theorems` · corollary — Little and Great Picard consequences of Nevanlinna theory
- `thm-nevanlinna-five-value-theorem` · theorem — Nevanlinna five-value uniqueness theorem

### `nevanlinna-second-main-theorem-and-defects-examples` — Nevanlinna's Second Main Theorem and Defects: Examples and Counterexamples (7 item(s))

- `ex-nevanlinna-omitted-values-of-exponential` · example — Exponential omits two sphere values
- `ex-nevanlinna-deficiencies-of-elementary-functions` · example — Deficiencies of the exponential and sine
- `ex-truncated-versus-full-nevanlinna-counting` · example — Full and truncated counting differ for a power map
- `cex-nevanlinna-error-bound-without-exceptional-radii` · counterexample — Exceptional radii cannot be removed from the logarithmic-derivative estimate
- `ex-sharpness-of-nevanlinna-q-minus-two` · example — The coefficient q minus two is sharp
- `ex-nevanlinna-and-normal-family-picard-proofs` · example — Nevanlinna and normal-family proofs of Great Picard
- `ex-five-value-bound-is-sharp` · example — Four shared values do not force equality

### `elliptic-functions-and-complex-tori` — Elliptic Functions and Complex Tori (15 item(s))

- `def-complex-lattice-and-complex-torus` · definition — Complex lattice and quotient torus
- `thm-complex-torus-quotient-is-well-defined` · theorem — The quotient C/Λ is a compact Riemann surface
- `def-weierstrass-elliptic-p-function` · definition — Weierstrass ℘ function
- `def-elliptic-function-for-a-lattice` · definition — Elliptic function for a lattice
- `def-weierstrass-zeta-and-sigma-functions` · definition — Weierstrass ζ and σ functions
- `thm-weierstrass-p-normal-convergence-and-periodicity` · theorem — Normal convergence, parity and periodicity of ℘
- `thm-elliptic-function-divisor-laws` · theorem — Divisor and residue laws for elliptic functions
- `thm-weierstrass-zeta-sigma-quasi-periodicity` · theorem — Convergence, zeros and quasi-periods of ζ and σ
- `thm-weierstrass-p-differential-equation` · theorem — Weierstrass cubic differential equation
- `lem-weierstrass-p-degree-two-and-half-periods` · lemma — Degree two of ℘ and its four branch points
- `thm-weierstrass-p-addition-formula` · theorem — Addition formula for ℘
- `thm-field-of-elliptic-functions-is-generated-by-p-and-p-prime` · theorem — The field of elliptic functions is C(℘,℘′)
- `thm-weierstrass-lattice-discriminant-is-nonzero` · theorem — Nonvanishing of the lattice discriminant
- `thm-complex-torus-weierstrass-cubic-isomorphism` · theorem — Uniformization of the nonsingular Weierstrass cubic
- `thm-elliptic-cubic-chord-tangent-group-law` · theorem — The chord-tangent group law and elliptic uniformization

### `elliptic-functions-and-complex-tori-examples` — Elliptic Functions and Complex Tori: Examples and Counterexamples (10 item(s))

- `ex-oriented-lattice-bases-and-sl2z` · example — Oriented bases and SL₂(Z)
- `ex-boundary-free-fundamental-parallelogram` · example — Moving the boundary of a fundamental parallelogram
- `ex-square-and-hexagonal-lattice-invariants` · example — Square and hexagonal lattice invariants
- `ex-half-period-values-and-branching` · example — Half-period values of the square lattice
- `ex-weierstrass-addition-and-duplication` · example — Addition and duplication for ℘
- `ex-sigma-simple-lattice-zero` · example — A simple zero of σ on the square lattice
- `ex-singular-cubic-degeneration` · example — A singular cubic outside the lattice family
- `ex-rectangular-weierstrass-function-and-elliptic-integral` · example — Rectangular lattices, real mapping, and inverse elliptic integrals
- `ex-rank-one-cotangent-uniformization` · example — The rank-one cotangent and its conic
- `ex-canonical-basis-of-complex-lattice` · example — A canonical reduced basis for a complex lattice

## Your seams

Your pages depend on another group's:

- `riemann-roch-for-curves-via-euler-characteristics` requires `cartier-and-weil-divisors-line-bundles-and-picard-groups` (group g, batch 5)
- `riemann-roch-for-curves-via-euler-characteristics` requires `smooth-proper-curves-divisors-genus-and-ramification` (group h, batch 6)

Another group's pages depend on yours:

- `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` (group c) requires your `riemann-roch-for-curves-via-euler-characteristics`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-37-owner-30-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-7 closure recovery, `frontier-37-owner-30`

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
