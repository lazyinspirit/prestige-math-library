# Analytic number theory — prose scaffold

**Planning snapshot:** 2026-10-23. **Canonical category slug:**
`analytic-number-theory`. **Status:** source-based planning only; no new
library item or page carrier is authored here. The category overview, pathway,
finite pair inventory, and proposed item graph are research artifacts. Root has appended both new category splices to the canonical
`research/plan-spec.json`; the official canonical validator is running.

## Executive handoff

This track extends the published number-theory spine through analytic
continuation and zero-density estimates, sieve methods and uniform prime
distribution, exponential sums and the circle method, additive-combinatorial
transference, automorphic/spectral methods, multiplicative and metric theory,
and rational-point counting interfaces. Existing supplier pages remain in
`number-theory`, `complex-analysis`, `fourier-analysis`, `real-analysis`,
`lie-theory`, and their other current homes. The plan consumes those exact
contracts; it does not rehome or duplicate them.

The current combined projection is **71 A/B pairs / 142 analytic page rows
/ 677 proposed item contracts**. Each A page carries the local definitions and result
contracts. Each B page is an examples/status companion and requires its own A
page. The page fragment stores `items: []`, as required for canonical planning;
`research/number-theory-scaffolds-2026-10-23/analytic/proposed-inventories.json`
contains the separate finite ordered item projection. The two files are not
proof certificates and do not claim that their theorem obligations are
already authored or build-ready. The exact source and reading ledger is
maintained in the linked R1–R5 dossiers and each source owner's local source
folder.

## Category overview and proposed pathway

The new category has six connected arcs:

1. **Prime analytic foundations:** Dedekind zeta and ray-class Hecke L-functions;
   zero-free regions, exceptional zeros, explicit formulae, zero-density,
   certified numerical zero counts, natural/effective Chebotarev estimates, and
   the divisor/circle problems through exponent pairs, Voronoï summation and
   lattice discrepancy.
2. **Sieve and prime distribution:** combinatorial and Selberg sieves, additive
   and multiplicative large sieves, Siegel–Walfisz and Bombieri–Vinogradov,
   Maynard–Tao bounded gaps, source-backed smooth-modulus results, Chen/weighted
   double-sieve methods, and large-prime-gap bounds through Erdős–Rankin and
   Ford–Green–Konyagin–Maynard–Tao.
3. **Exponential sums and additive structure:** discrete derivative tests,
   Weyl sums, decoupling and Vinogradov mean values, Waring, Gowers norms,
   Szemerédi and relative transference, Green–Tao progressions and systems,
   finite-field trace functions, and ternary Goldbach.
4. **Automorphic and spectral theory:** congruence Hecke forms, Maass spectra,
   trace formulae, Hecke–Maass and holomorphic mass equidistribution, GL2/GL3
   Rankin–Selberg/subconvexity, explicitly bounded higher-rank GL(n) results,
   and Selberg eigenvalue status.
5. **Multiplicative, probabilistic and metric theory:** pretentious mean values,
   short intervals and correlations, Chowla/Elliott boundaries, additive
   functions/Erdős–Kac, smooth numbers, equidistribution, Khintchine–Duffin–
   Schaeffer, Jarník–Besicovitch/Hausdorff dimension, and Khintchine–Groshev
   and homogeneous-dynamics interfaces.
6. **Height and rational-point interfaces:** Schanuel's projective count and
   determinant-method estimates, with height foundations supplied by the
   algebraic track. General Manin–Peyre is owned exactly once by that track.

The pathway is a DAG, not a calendar. It starts from the published supplier
spine and the proposed algebraic-number-theory fields/CFT/étale/height
foundations. Hecke L-functions and ray-class density follow global class field
theory; the algebraic Dirichlet-density Chebotarev theorem follows the
ray-class density interface; analytic natural/effective Chebotarev formulas
come after their Frobenius-counting interface and their analytic zero-density
suppliers. The large-sieve and zero-free/explicit-formula chains feed uniform
AP distribution and Maynard; the latter smooth-modulus extension consumes the
finite-field/Deligne suppliers. Green–Tao follows the planned relative
Szemerédi and W-tricked pseudorandomness chain; Helfgott's major arcs instead
consume the finite Dirichlet-L verification pair. The divisor/circle, large-prime-gap, metric/Hausdorff and homogeneous-dynamics
interfaces now have bounded pairs in the table below. R1’s theorem contracts
exclude the withdrawn Bourgain–Watt v1 claim and retain the Huxley/Robert–Sargos
source gates; the R2 and R5 ledgers give exact result hypotheses and status
limits. The other arcs retain their exact local supplier edges in the pair table.

The layer numbers and exact reduced page edges are generated in the machine
fragment and summarized in the current pair index. Root has topologically
interleaved both categories above the former plan maximum; the canonical
validator is running. The relative layers are not execution assignments. A `_category.md` or `_pathway.md`
carrier is intentionally absent until the pages exist.

## Boundary and reuse rules

- The existing number-theory analytic block at plan orders 692–707 already
  publishes arithmetic functions/convolution, average orders, Chebyshev and
  Mertens estimates, Dirichlet series/Euler products, characters and Dirichlet
  L-functions, explicit formulae, the classical zeta zero-free region, PNT,
  and fixed-modulus PNT in arithmetic progressions. Those items are reused by
  exact ID. Fixed-modulus PNT-AP is not a Siegel–Walfisz or Bombieri–Vinogradov
  supplier.
- The published zeta and level-one modular-form pages in `complex-analysis`
  remain the classical analytic and level-one form suppliers. New automorphic
  pages extend to congruence level, Maass forms and automorphic representations;
  they do not recreate level-one forms or the zeta functional equation.
- Finite cyclic DFT/inversion/Parseval/convolution, Cauchy–Davenport, character
  orthogonality/Gauss sums, and continuous oscillatory-integral estimates are
  reused only for the statements they actually prove. None substitutes for
  discrete derivative tests, Gowers/transference, continuous torus orthogonality,
  the circle method, or a full Deligne/sheaf argument.
- Algebraic number fields, ray-class groups, global CFT, Frobenius classes,
  Galois representations, étale cohomology, heights, and related prerequisites
  remain in `algebraic-number-theory`. Cross-category edges use the exact
  planned A pages and items, and remain dependencies rather than published
  suppliers until locally built.
- Conjectures and open questions are nonlogical terminal items on A pages.
  No `op-*` item is a theorem dependency. B pages contain examples, computations,
  and nonlogical status remarks only. A theorem established in the literature
  but awaiting a future local proof remains a theorem obligation, not an open
  problem.
- Full-text retrieval, a preprint label, an abstract, a bibliography entry, or
  an AI/model attribution does not by itself close a proof. Each source ledger
  states what was actually read, exact locators, disposition, and outstanding
  local proof or computation obligations.

## Existing published suppliers inspected

The detailed inspection and exact item contracts are recorded in
[`analytic/build-report.md`](number-theory-scaffolds-2026-10-23/analytic/build-report.md).
The checked interface includes:

- `number-theory/arithmetic-functions-and-dirichlet-convolution`,
  `average-orders-divisor-sums-and-representation-counts`,
  `chebyshev-bounds-and-mertens-theorems`,
  `dirichlet-series-and-euler-products`,
  `dirichlet-characters-l-functions-and-primes-in-progressions`,
  `primitive-dirichlet-l-functions-and-functional-equations`,
  `perron-inversion-and-the-explicit-formula`, and
  `classical-zero-free-region-and-the-prime-number-theorem`;
- `complex-analysis/the-riemann-zeta-function` and
  `level-one-modular-forms-and-the-j-invariant`;
- number-field, ideal-factorization, class-group, unit, Frobenius, finite
  Fourier, lattice-Poisson, real-analysis, probability, and Lie-theory pages
  named at the exact dependency edges.

The current published Poisson page includes
`thm-poisson-summation-for-a-full-rank-lattice`, a full-rank lattice input to
the Dedekind zeta theta/Mellin proof. Existing Frobenius items already give
the unramified arithmetic Frobenius element and conjugacy class, so no duplicate
Frobenius definition is planned.

## Pair index, contracts, and source locators

### Owner dossiers and source ledgers

- [R1 pair contracts](number-theory-scaffolds-2026-10-23/analytic/r1-foundations-l-functions.md) and [R1 full-text source ledger](number-theory-scaffolds-2026-10-23/analytic/r1-sources/README.md).
- [R2 sieve, primes and frontier contracts](number-theory-scaffolds-2026-10-23/analytic/r2-sieves-primes.md), with retained full source texts under number-theory-scaffolds-2026-10-23/analytic/r2-sources/.
- [R3 sums and circle-method contracts](number-theory-scaffolds-2026-10-23/analytic/r3-sums-circle-method.md) and [R3 source review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/source-review.md), and [noncompact entropy correction review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/noncompact-entropy-source-review.md) and [divisor/circle import review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/li-yang-cen-import-source-review.md).
- [R4 automorphic and spectral contracts](number-theory-scaffolds-2026-10-23/analytic/r4-automorphic-spectral.md) and [R4 heading-by-heading source index](number-theory-scaffolds-2026-10-23/analytic/r4-sources/source-index.md).
- [R5 multiplicative, metric and height contracts](number-theory-scaffolds-2026-10-23/analytic/r5-multiplicative-metric.md) and [R5 full-text source register](number-theory-scaffolds-2026-10-23/analytic/r5-sources/README.md).

These dossiers are required components of this plan. The pair index lists the
page suppliers and ordered item contracts; the owner dossiers give exact
theorem hypotheses and local proof obligations, and the ledgers record source
locators, what was actually read, and result-by-result reuse/include/defer
dispositions.
The sections below are generated from the combined page fragment and item
inventory. For each pair they give the direct page suppliers, ordered item IDs,
kinds, titles and item dependencies. The exact theorem hypotheses, definitions,
proof obligations, source dispositions and source locators are in the cited
R1–R5 dossier; those source ledgers are part of this plan and must be read
alongside the JSON inventory. There are no unbounded “topic-only” pairs.

## Finite DAG pathway and proposed item contracts

Each reciprocal A/B pair below has a finite inventory. Page requirements are the reduced direct suppliers in the combined projection; each item lists its direct item suppliers. Exact theorem formulations, quantifiers, proof plans and source locators are in the linked owner dossiers/source ledgers. A source statement is not itself a local proof.

### New-page dependency layer 1

#### dedekind-zeta-and-split-prime-density / dedekind-zeta-and-split-prime-density-examples

**A:** Dedekind Zeta Functions and Completely Split Prime Density. **B:** Dedekind Zeta and Split-Prime Density Examples. **Direct A prerequisites:** `dirichlets-unit-theorem-regulators-and-s-units`, `poisson-summation-sampling-and-lattice-duality`. **B prerequisite:** `dedekind-zeta-and-split-prime-density-examples` requires `dedekind-zeta-and-split-prime-density`. **Inventory:** 5 A items; 2 B items. Contract and source detail: [R1 pair dossier](number-theory-scaffolds-2026-10-23/analytic/r1-foundations-l-functions.md) and [R1 source ledger](number-theory-scaffolds-2026-10-23/analytic/r1-sources/README.md).

A-page ordered contracts:

- `def-dedekind-zeta-function` (definition) — Dedekind zeta series over nonzero integral ideals. Item suppliers: `def-number-field`, `def-absolute-norm-of-an-ideal`.
- `thm-dedekind-zeta-euler-product` (theorem) — Absolute convergence and Euler product for the Dedekind zeta function. Item suppliers: `def-dedekind-zeta-function`, `thm-number-field-integral-ideal-factorisation-in-zf`, `thm-ideal-norm-is-multiplicative`.
- `thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula` (theorem) — Dedekind zeta continuation, functional equation, and simple pole at one. Item suppliers: `thm-dedekind-zeta-euler-product`, `thm-poisson-summation-for-a-full-rank-lattice`, `thm-dirichlet-unit-theorem`, `thm-number-field-regulator-is-well-defined`, `thm-complex-gamma-restricts-to-the-real-gamma-function`.
- `thm-biquadratic-dedekind-zeta-factorization` (theorem) — Euler-factor identity for a biquadratic field and its quadratic subfields. Item suppliers: `thm-dedekind-zeta-euler-product`, `thm-number-field-integral-ideal-factorisation-in-zf`, `thm-frobenius-elements-above-a-prime-are-conjugate`.
- `thm-completely-split-primes-dirichlet-density` (theorem) — Prime ideals of K splitting completely in finite L/K have Dirichlet density 1/[M:K], where M is the normal closure. Item suppliers: `def-natural-and-dirichlet-density`, `thm-dedekind-zeta-euler-product`, `thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula`, `thm-frobenius-order-is-residue-degree`, `cor-complete-splitting-and-trivial-frobenius`, `thm-frobenius-cycle-type-and-prime-splitting`.

B-page examples/status contracts:

- `ex-dedekind-zeta-of-a-quadratic-field` (example) — Specialize the Dedekind zeta Euler product and analytic class number formula to a quadratic field. Item suppliers: `thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula`, `thm-biquadratic-dedekind-zeta-factorization`.
- `ex-completely-split-prime-density` (example) — Check the density for primes splitting completely in a Galois extension. Item suppliers: `thm-completely-split-primes-dirichlet-density`.

#### explicit-formula-for-dirichlet-character-von-mangoldt-sums / explicit-formula-for-dirichlet-character-von-mangoldt-sums-examples

**A:** Smoothed Explicit Formula for Dirichlet Character Sums. **B:** Explicit Formula Normalizations and Examples. **Direct A prerequisites:** `perron-inversion-and-the-explicit-formula`. **B prerequisite:** `explicit-formula-for-dirichlet-character-von-mangoldt-sums-examples` requires `explicit-formula-for-dirichlet-character-von-mangoldt-sums`. **Inventory:** 2 A items; 1 B items. Contract and source detail: [R1 pair dossier](number-theory-scaffolds-2026-10-23/analytic/r1-foundations-l-functions.md) and [R1 source ledger](number-theory-scaffolds-2026-10-23/analytic/r1-sources/README.md).

A-page ordered contracts:

- `def-dirichlet-character-von-mangoldt-sum` (definition) — Von Mangoldt sum twisted by a Dirichlet character. Item suppliers: `def-dirichlet-character-modulo-q`, `def-von-mangoldt-function`.
- `thm-smoothed-explicit-formula-for-dirichlet-character-von-mangoldt-sums` (theorem) — Mellin-smoothed explicit formula for a Dirichlet-character von Mangoldt sum. Item suppliers: `def-dirichlet-character-von-mangoldt-sum`, `thm-primitive-dirichlet-l-analytic-continuation`, `thm-primitive-dirichlet-l-functional-equation`, `thm-euler-product-for-riemann-zeta`.

B-page examples/status contracts:

- `ex-smoothed-dirichlet-character-explicit-formula` (example) — Character orthogonality turns the twisted formula into an AP sum. Item suppliers: `thm-smoothed-explicit-formula-for-dirichlet-character-von-mangoldt-sums`, `thm-dirichlet-character-orthogonality`.

#### large-values-of-dirichlet-polynomials / large-values-of-dirichlet-polynomials-examples

**A:** Large-Value Bounds for Dirichlet Polynomials. **B:** Large-Value Estimates: Examples and Limits. **Direct A prerequisites:** `rn-as-a-normed-space`. **B prerequisite:** `large-values-of-dirichlet-polynomials-examples` requires `large-values-of-dirichlet-polynomials`. **Inventory:** 4 A items; 1 B items. Contract and source detail: [R1 pair dossier](number-theory-scaffolds-2026-10-23/analytic/r1-foundations-l-functions.md) and [R1 source ledger](number-theory-scaffolds-2026-10-23/analytic/r1-sources/README.md).

A-page ordered contracts:

- `def-one-separated-dirichlet-polynomial-samples` (definition) — Dirichlet polynomial D(s)=Σ_{n≤N}a_n n^{-s}, 1-separated ordinates, and large-value count. Item suppliers: none.
- `thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials` (theorem) — Basic mean-value estimate for Dirichlet polynomials on 1-separated ordinates. Item suppliers: `def-one-separated-dirichlet-polynomial-samples`, `thm-cauchy-schwarz-and-the-euclidean-norm`.
- `thm-montgomery-vaughan-weighted-large-values-mean-square` (theorem) — Weighted mean-square large-values estimate on 1-separated ordinates. Item suppliers: `def-one-separated-dirichlet-polynomial-samples`.
- `thm-unconditional-large-values-for-dirichlet-polynomials` (theorem) — Montgomery–Vaughan unconditional large-values estimate for Dirichlet polynomials. Item suppliers: `def-one-separated-dirichlet-polynomial-samples`, `thm-montgomery-vaughan-weighted-large-values-mean-square`.

B-page examples/status contracts:

- `ex-large-value-bound-for-unit-coefficients` (example) — Apply the large-values bound when every coefficient has modulus at most one. Item suppliers: `thm-unconditional-large-values-for-dirichlet-polynomials`.

#### certified-zero-counting-for-degree-one-l-functions / certified-zero-counting-for-degree-one-l-functions-examples

**A:** Certified Zero Counting for Degree-One L-Functions. **B:** Turing Counts and Interval-Certification Examples. **Direct A prerequisites:** `poisson-summation-sampling-and-lattice-duality`, `perron-inversion-and-the-explicit-formula`. **B prerequisite:** `certified-zero-counting-for-degree-one-l-functions-examples` requires `certified-zero-counting-for-degree-one-l-functions`. **Inventory:** 4 A items; 1 B items. Contract and source detail: [R1 pair dossier](number-theory-scaffolds-2026-10-23/analytic/r1-foundations-l-functions.md) and [R1 source ledger](number-theory-scaffolds-2026-10-23/analytic/r1-sources/README.md).

A-page ordered contracts:

- `alg-interval-arithmetic-for-l-function-zero-counts` (algorithm) — Interval-arithmetic evaluation and error tracking for degree-one L-functions. Item suppliers: `def-dirichlet-l-function`, `def-euler-gamma-function`.
- `alg-turing-method-for-rigorous-zero-counts` (algorithm) — Turing's argument-principle method for certified zero counts. Item suppliers: `thm-primitive-dirichlet-l-functional-equation`, `thm-euler-gamma-function-is-holomorphic`, `thm-cauchy-integral-formula-circle`, `thm-argument-principle-null-homologous-cycle`.
- `thm-turing-zero-count-certificate-is-sound` (theorem) — A verified Turing certificate proves the stated zero count. Item suppliers: `alg-interval-arithmetic-for-l-function-zero-counts`, `alg-turing-method-for-rigorous-zero-counts`.
- `thm-platt-trudgian-zeta-rh-through-3000175332800` (theorem) — Riemann hypothesis for zeta through height 3,000,175,332,800. Item suppliers: `thm-turing-zero-count-certificate-is-sound`, `thm-riemann-von-mangoldt-zero-counting`.

B-page examples/status contracts:

- `ex-interval-zero-count-certificate` (example) — Check a bounded zero-count certificate by interval arithmetic. Item suppliers: `thm-turing-zero-count-certificate-is-sound`.

#### exponent-pairs-and-classical-voronoi-summation / exponent-pairs-and-classical-voronoi-summation-examples

**A:** Exponent Pairs and Classical Voronoï Summation. **B:** Exponent-Pair and Circle-Summation Examples. **Direct A prerequisites:** `poisson-summation-sampling-and-lattice-duality`, `perron-inversion-and-the-explicit-formula`. **B prerequisite:** `exponent-pairs-and-classical-voronoi-summation-examples` requires `exponent-pairs-and-classical-voronoi-summation`. **Inventory:** 13 A items; 2 B items. Contract and source detail: [R1 pair dossier](number-theory-scaffolds-2026-10-23/analytic/r1-foundations-l-functions.md) and [R1 source ledger](number-theory-scaffolds-2026-10-23/analytic/r1-sources/README.md).

A-page ordered contracts:

- `def-dirichlet-divisor-error-term` (definition) — Divisor summatory error Δ(x)=Σ_{n≤x}d(n)−x log x−(2γ−1)x, x≥1. Item suppliers: `def-euler-mascheroni-constant`.
- `def-gauss-circle-error-term` (definition) — Squared-radius circle error P(x)=#{(a,b)∈Z²:a²+b²≤x}−πx, x≥0. Item suppliers: `def-two-square-representation-function`.
- `thm-divisor-function-subpolynomial-bound` (theorem) — For each ε>0, d(n)≪ε n^ε. Item suppliers: `thm-canonical-prime-factorisation`.
- `def-kolesnik-exponent-pair-framework` (definition) — Exponent-pair variables and admissibility conditions in Kolesnik's multidimensional framework. Item suppliers: none.
- `thm-kolesnik-a-process-for-exponent-pairs` (theorem) — Kolesnik A-process under the stated derivative and nondegeneracy hypotheses. Item suppliers: `def-kolesnik-exponent-pair-framework`.
- `thm-kolesnik-b-process-for-exponent-pairs` (theorem) — Kolesnik B-process from Poisson summation and stationary phase under its stated hypotheses. Item suppliers: `def-kolesnik-exponent-pair-framework`, `thm-poisson-summation-for-a-full-rank-lattice`.
- `thm-voronoi-divisor-summation-formula` (theorem) — Meurman endpoint-averaged pointwise divisor Voronoï identity for every x>0. Item suppliers: `def-dirichlet-divisor-error-term`, `thm-divisor-function-subpolynomial-bound`.
- `thm-voronoi-divisor-summation-for-smooth-compact-support` (theorem) — Weighted K₀/Y₀ divisor Voronoï identity for f∈C_c^∞((0,∞)), derived from Meurman by integration by parts. Item suppliers: `thm-voronoi-divisor-summation-formula`.
- `lem-meurman-divisor-error-endpoint-conversion` (lemma) — Meurman endpoint-averaged pointwise error differs from library Δ(x) by Oε(x^ε). Item suppliers: `thm-voronoi-divisor-summation-formula`, `def-dirichlet-divisor-error-term`, `thm-divisor-function-subpolynomial-bound`.
- `thm-voronoi-divisor-weighted-k0-y0-summation-formula` (theorem) — Weighted divisor Voronoï formula with K₀/Y₀ kernel; arbitrary stated test class remains proof-gated. Item suppliers: `def-dirichlet-divisor-error-term`, `cor-divisor-dirichlet-series-zeta-square`, `thm-riemann-zeta-functional-equation`, `thm-poisson-summation-for-a-full-rank-lattice`.
- `thm-voronoi-two-square-summation-for-smooth-radial-tests` (theorem) — Poisson-derived r₂/J₀ summation formula for compactly supported smooth radial tests. Item suppliers: `def-gauss-circle-error-term`, `thm-poisson-summation-for-a-full-rank-lattice`.
- `thm-gauss-circle-error-bound-one-third-epsilon` (theorem) — Miller–Schmid Poisson proof: P(x)=Oε(x^{1/3+ε}) for x>1. Item suppliers: `def-gauss-circle-error-term`, `thm-divisor-function-subpolynomial-bound`, `thm-poisson-summation-for-a-full-rank-lattice`, `thm-two-square-representation-count`.
- `rem-divisor-voronoi-proof-source-is-access-gated` (remark) — Chandrasekharan weighted K₀/Y₀ formula source gate; the pointwise formula has a full Meurman proof. Item suppliers: `thm-voronoi-divisor-weighted-k0-y0-summation-formula`.

B-page examples/status contracts:

- `ex-poisson-smoothing-gauss-circle-error` (example) — The X^{-1/6} smoothing scale in the Miller–Schmid circle proof. Item suppliers: `thm-gauss-circle-error-bound-one-third-epsilon`.
- `ex-kolesnik-process-hypothesis-check` (example) — Check derivative and nondegeneracy hypotheses before applying an A/B process. Item suppliers: `thm-kolesnik-a-process-for-exponent-pairs`, `thm-kolesnik-b-process-for-exponent-pairs`.

#### classical-sieve-methods / classical-sieve-examples-and-parity

**A:** Classical Combinatorial and Selberg Sieve Methods. **B:** Classical Sieve Examples and the Parity Problem. **Direct A prerequisites:** `arithmetic-functions-and-dirichlet-convolution`. **B prerequisite:** `classical-sieve-examples-and-parity` requires `classical-sieve-methods`. **Inventory:** 8 A items; 2 B items. Contract and source detail: [R2 sieve/prime dossier](number-theory-scaffolds-2026-10-23/analytic/r2-sieves-primes.md).

A-page ordered contracts:

- `def-sieve-sequence-local-density-and-remainders` (definition) — Sieve sequences, local densities, and remainder terms. Item suppliers: `def-arithmetic-function`, `def-prime`, `def-number-theoretic-mobius-function`, `thm-canonical-prime-factorisation`.
- `def-sifted-sum-and-sieve-density-product` (definition) — Sifted sums and their local-density main term. Item suppliers: `def-sieve-sequence-local-density-and-remainders`, `def-number-theoretic-mobius-function`, `cor-classical-mobius-inversion`.
- `def-brun-combinatorial-sieve-truncation-weights` (definition) — Brun upper and lower truncation weights. Item suppliers: `def-sieve-sequence-local-density-and-remainders`, `def-number-theoretic-mobius-function`, `thm-canonical-prime-factorisation`.
- `thm-brun-combinatorial-sieve-inequalities` (theorem) — Brun truncation bounds for the sifted sum. Item suppliers: `def-brun-combinatorial-sieve-truncation-weights`, `def-sifted-sum-and-sieve-density-product`, `thm-the-bonferroni-inequalities`, `thm-inclusion-exclusion`, `lem-finite-sum-reindexing-and-fubini`.
- `def-selberg-upper-bound-sieve-weights` (definition) — Selberg quadratic upper-sieve weights and their lcm form. Item suppliers: `def-sieve-sequence-local-density-and-remainders`, `def-number-theoretic-mobius-function`, `thm-canonical-prime-factorisation`.
- `thm-selberg-sieve-upper-bound-with-remainders` (theorem) — Selberg's optimized quadratic upper-bound sieve. Item suppliers: `def-selberg-upper-bound-sieve-weights`, `def-sifted-sum-and-sieve-density-product`, `thm-cauchy-schwarz-and-the-euclidean-norm`.
- `alg-finite-residue-class-sieve` (algorithm) — Finite residue-class sieve on a bounded interval. Item suppliers: `def-sifted-sum-and-sieve-density-product`, `def-prime`, `thm-canonical-prime-factorisation`.
- `thm-finite-residue-class-sieve-correctness` (theorem) — Correctness of the finite residue-class sieve. Item suppliers: `alg-finite-residue-class-sieve`, `def-sifted-sum-and-sieve-density-product`.

B-page examples/status contracts:

- `ex-selberg-upper-bound-twin-prime-candidates` (example) — Selberg's upper bound for twin-prime candidates. Item suppliers: `thm-selberg-sieve-upper-bound-with-remainders`, `def-prime`.
- `rem-parity-barrier-scope` (remark) — The parity problem and the scope of sieve-only limitations. Item suppliers: `thm-brun-combinatorial-sieve-inequalities`, `thm-selberg-sieve-upper-bound-with-remainders`.

#### van-der-corput-derivative-tests / van-der-corput-derivative-tests-examples

**A:** First, Second, and Third Derivative Bounds for Exponential Sums. **B:** Examples of Discrete Derivative Tests. **Direct A prerequisites:** none beyond published suppliers. **B prerequisite:** `van-der-corput-derivative-tests-examples` requires `van-der-corput-derivative-tests`. **Inventory:** 7 A items; 2 B items. Contract and source detail: [R3 sums/circle-method dossier](number-theory-scaffolds-2026-10-23/analytic/r3-sums-circle-method.md), [R3 source review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/source-review.md), [noncompact entropy review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/noncompact-entropy-source-review.md), and [divisor/circle import review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/li-yang-cen-import-source-review.md).

A-page ordered contracts:

- `def-exponential-character-e` (definition) — The additive exponential e(t)=exp(2πit). Item suppliers: none.
- `def-discrete-exponential-sum` (definition) — A discrete exponential sum over an integer interval. Item suppliers: `def-exponential-character-e`.
- `def-first-second-third-derivative-test-hypotheses` (definition) — Derivative and monotonicity hypotheses for discrete phase sums. Item suppliers: `def-discrete-exponential-sum`.
- `lem-geometric-progression-exponential-sum` (lemma) — Geometric progression bound in terms of distance to an integer. Item suppliers: `def-exponential-character-e`.
- `lem-kuzmin-first-derivative-test` (lemma) — Kuzmin first-derivative bound for monotone phase increments. Item suppliers: `def-first-second-third-derivative-test-hypotheses`, `lem-geometric-progression-exponential-sum`.
- `thm-vdc-second-derivative-test` (theorem) — Second-derivative bound for a discrete exponential sum. Item suppliers: `def-first-second-third-derivative-test-hypotheses`, `lem-kuzmin-first-derivative-test`.
- `thm-vdc-third-derivative-test` (theorem) — Third-derivative bound for a discrete exponential sum. Item suppliers: `thm-vdc-second-derivative-test`.

B-page examples/status contracts:

- `ex-second-derivative-test-on-a-quadratic-phase` (example) — Applying the second-derivative test to a quadratic phase. Item suppliers: `thm-vdc-second-derivative-test`.
- `ex-third-derivative-test-on-a-cubic-phase` (example) — Applying the third-derivative test to a cubic phase. Item suppliers: `thm-vdc-third-derivative-test`.

#### sharp-l2-decoupling-for-the-moment-curve / sharp-l2-decoupling-for-the-moment-curve-examples

**A:** Sharp L2 Decoupling for the Moment Curve. **B:** Discrete Restriction and Decoupling Examples. **Direct A prerequisites:** `fourier-restriction-and-the-stein-tomas-theorem`. **B prerequisite:** `sharp-l2-decoupling-for-the-moment-curve-examples` requires `sharp-l2-decoupling-for-the-moment-curve`. **Inventory:** 9 A items; 2 B items. Contract and source detail: [R3 sums/circle-method dossier](number-theory-scaffolds-2026-10-23/analytic/r3-sums-circle-method.md), [R3 source review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/source-review.md), [noncompact entropy review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/noncompact-entropy-source-review.md), and [divisor/circle import review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/li-yang-cen-import-source-review.md).

A-page ordered contracts:

- `def-moment-curve` (definition) — The moment curve Γ_n(t)=(t,t²,…,tⁿ). Item suppliers: none.
- `def-moment-curve-extension-operator` (definition) — Extension operator for a subinterval of the moment curve. Item suppliers: `def-moment-curve`.
- `def-polynomial-decoupling-weight-and-norm` (definition) — Weighted L^p norm and ball weight used in moment-curve decoupling. Item suppliers: `def-moment-curve-extension-operator`.
- `def-l2-decoupling-constant-for-moment-curve` (definition) — Scale-dependent L² decoupling constant for Γ_n. Item suppliers: `def-polynomial-decoupling-weight-and-norm`.
- `thm-multilinear-kakeya-brascamp-lieb` (theorem) — Transverse multilinear Kakeya/Brascamp–Lieb estimate used in ball inflation. Item suppliers: none.
- `thm-ball-inflation-for-moment-curve` (theorem) — Ball inflation inequality for transverse moment-curve intervals. Item suppliers: `def-l2-decoupling-constant-for-moment-curve`, `thm-multilinear-kakeya-brascamp-lieb`.
- `thm-induction-on-scales-linear-multilinear-decoupling` (theorem) — Induction-on-scales comparison of linear and multilinear decoupling constants. Item suppliers: `def-l2-decoupling-constant-for-moment-curve`.
- `thm-lower-dimensional-moment-curve-decoupling` (theorem) — Lower-dimensional decoupling for arcs at their flat scale. Item suppliers: `def-l2-decoupling-constant-for-moment-curve`.
- `thm-bourgain-demeter-guth-sharp-moment-curve-decoupling` (theorem) — Critical-exponent L² decoupling for the moment curve. Item suppliers: `def-l2-decoupling-constant-for-moment-curve`, `thm-multilinear-kakeya-brascamp-lieb`, `thm-ball-inflation-for-moment-curve`, `thm-induction-on-scales-linear-multilinear-decoupling`, `thm-lower-dimensional-moment-curve-decoupling`.

B-page examples/status contracts:

- `ex-discrete-restriction-from-moment-curve-decoupling` (example) — Discrete restriction estimate obtained by discretizing the extension operator. Item suppliers: `thm-bourgain-demeter-guth-sharp-moment-curve-decoupling`.
- `ex-vmvt-scaling-from-decoupling` (example) — The scaling that turns critical decoupling into a Vinogradov mean-value estimate. Item suppliers: `thm-bourgain-demeter-guth-sharp-moment-curve-decoupling`.

#### additive-energy-fourier-identity / additive-energy-fourier-identity-examples

**A:** Fourier Identity for Additive Energy. **B:** Finite-Group Additive-Energy Examples. **Direct A prerequisites:** `finite-fourier-analysis-and-the-fast-fourier-transform`. **B prerequisite:** `additive-energy-fourier-identity-examples` requires `additive-energy-fourier-identity`. **Inventory:** 3 A items; 2 B items. Contract and source detail: [R3 sums/circle-method dossier](number-theory-scaffolds-2026-10-23/analytic/r3-sums-circle-method.md), [R3 source review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/source-review.md), [noncompact entropy review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/noncompact-entropy-source-review.md), and [divisor/circle import review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/li-yang-cen-import-source-review.md).

A-page ordered contracts:

- `def-additive-energy-of-a-subset` (definition) — Additive energy E(A)=#{a+b=c+d:a,b,c,d∈A}. Item suppliers: none.
- `def-normalized-additive-energy` (definition) — Normalized additive energy and its density scale. Item suppliers: `def-additive-energy-of-a-subset`.
- `thm-additive-energy-fourier-identity` (theorem) — E(A)=NΣ_ξ\|F_N1_A(ξ)\|⁴ for the unitary DFT. Item suppliers: `def-additive-energy-of-a-subset`, `def-unitary-discrete-fourier-transform-on-z-mod-n`, `thm-finite-parseval-and-plancherel`, `lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product`.

B-page examples/status contracts:

- `ex-additive-energy-of-an-arithmetic-progression` (example) — Additive energy of an interval in a cyclic group. Item suppliers: `thm-additive-energy-fourier-identity`.
- `ex-additive-energy-and-fourier-concentration` (example) — High additive energy forces a large Fourier coefficient. Item suppliers: `thm-additive-energy-fourier-identity`.

#### generalized-von-neumann-theorem / generalized-von-neumann-theorem-examples

**A:** Generalized von Neumann Bound for Progression Counts. **B:** Gowers-Norm Progression-Counting Examples. **Direct A prerequisites:** `finite-fourier-analysis-and-the-fast-fourier-transform`. **B prerequisite:** `generalized-von-neumann-theorem-examples` requires `generalized-von-neumann-theorem`. **Inventory:** 4 A items; 2 B items. Contract and source detail: [R3 sums/circle-method dossier](number-theory-scaffolds-2026-10-23/analytic/r3-sums-circle-method.md), [R3 source review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/source-review.md), [noncompact entropy review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/noncompact-entropy-source-review.md), and [divisor/circle import review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/li-yang-cen-import-source-review.md).

A-page ordered contracts:

- `def-gowers-uniformity-norm-on-finite-cyclic-groups` (definition) — Gowers U^d norm on a finite cyclic group. Item suppliers: none.
- `lem-gowers-cauchy-schwarz-inequality` (lemma) — Gowers Cauchy–Schwarz inequality. Item suppliers: `def-gowers-uniformity-norm-on-finite-cyclic-groups`.
- `lem-gowers-norm-monotonicity` (lemma) — Monotonicity of the U^d norms. Item suppliers: `lem-gowers-cauchy-schwarz-inequality`.
- `thm-generalized-von-neumann-for-k-term-progressions` (theorem) — A small U^{k−1} norm makes a bounded k-AP count small. Item suppliers: `def-gowers-uniformity-norm-on-finite-cyclic-groups`, `lem-gowers-cauchy-schwarz-inequality`.

B-page examples/status contracts:

- `ex-three-term-progression-fourier-bound` (example) — The U² bound for a three-term progression count. Item suppliers: `thm-generalized-von-neumann-for-k-term-progressions`.
- `ex-four-term-progression-U3-bound` (example) — The U³ bound for a four-term progression count. Item suppliers: `thm-generalized-von-neumann-for-k-term-progressions`.

#### quantitative-leibman-factorization / quantitative-leibman-factorization-examples

**A:** Quantitative Equidistribution and Factorization of Polynomial Nil-Orbits. **B:** Quantitative Nil-Orbit Examples. **Direct A prerequisites:** `solvable-and-nilpotent-lie-algebras`. **B prerequisite:** `quantitative-leibman-factorization-examples` requires `quantitative-leibman-factorization`. **Inventory:** 7 A items; 2 B items. Contract and source detail: [R3 sums/circle-method dossier](number-theory-scaffolds-2026-10-23/analytic/r3-sums-circle-method.md), [R3 source review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/source-review.md), [noncompact entropy review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/noncompact-entropy-source-review.md), and [divisor/circle import review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/li-yang-cen-import-source-review.md).

A-page ordered contracts:

- `def-filtered-nilpotent-lie-group-and-nilmanifold` (definition) — Filtered nilpotent Lie groups, lattices, and nilmanifolds. Item suppliers: `def-lie-group`, `def-finite-dimensional-lie-algebra`, `def-lower-central-series-and-nilpotent-lie-algebra`.
- `def-malcev-basis-and-rationality` (definition) — Rational Mal’cev basis, metric, and rational subgroup. Item suppliers: `def-filtered-nilpotent-lie-group-and-nilmanifold`.
- `def-polynomial-sequence-on-a-filtered-group` (definition) — Polynomial sequence with respect to a group filtration. Item suppliers: `def-filtered-nilpotent-lie-group-and-nilmanifold`.
- `def-total-equidistribution-of-a-nil-orbit` (definition) — Total Lipschitz equidistribution on long progressions. Item suppliers: `def-polynomial-sequence-on-a-filtered-group`, `def-malcev-basis-and-rationality`.
- `def-smooth-and-rational-polynomial-nilsequences` (definition) — Quantitative smooth, rational, and equidistributed factors. Item suppliers: `def-polynomial-sequence-on-a-filtered-group`, `def-malcev-basis-and-rationality`.
- `thm-quantitative-leibman-equidistribution-criterion` (theorem) — Quantitative Leibman dichotomy for polynomial nil-orbits. Item suppliers: `def-total-equidistribution-of-a-nil-orbit`, `def-malcev-basis-and-rationality`.
- `thm-green-tao-quantitative-nil-orbit-factorization` (theorem) — g=εg′γ factorization into smooth, totally equidistributed, and periodic factors. Item suppliers: `def-smooth-and-rational-polynomial-nilsequences`, `thm-quantitative-leibman-equidistribution-criterion`.

B-page examples/status contracts:

- `ex-quantitative-leibman-factorization-on-a-torus` (example) — Factor a polynomial orbit on a torus into smooth/rational/equidistributed parts. Item suppliers: `thm-green-tao-quantitative-nil-orbit-factorization`.
- `ex-heisenberg-polynomial-orbit` (example) — A quadratic orbit on the Heisenberg nilmanifold. Item suppliers: `def-polynomial-sequence-on-a-filtered-group`.

#### congruence-modular-forms-and-hecke-operators / congruence-modular-forms-and-hecke-operators-examples

**A:** Congruence Modular Forms and Hecke Operators. **B:** Congruence Modular Forms and Hecke Operators: Examples. **Direct A prerequisites:** `level-one-modular-forms-and-the-j-invariant`. **B prerequisite:** `congruence-modular-forms-and-hecke-operators-examples` requires `congruence-modular-forms-and-hecke-operators`. **Inventory:** 6 A items; 2 B items. Contract and source detail: [R4 automorphic/spectral dossier](number-theory-scaffolds-2026-10-23/analytic/r4-automorphic-spectral.md) and [R4 source index](number-theory-scaffolds-2026-10-23/analytic/r4-sources/source-index.md).

A-page ordered contracts:

- `def-congruence-subgroup-of-sl2-z` (definition) — Congruence Subgroups of SL2(Z). Item suppliers: `def-modular-group-action-on-the-upper-half-plane`.
- `def-congruence-modular-form-with-nebentypus` (definition) — Modular Forms with Congruence Level and Nebentypus. Item suppliers: `def-congruence-subgroup-of-sl2-z`, `def-level-one-modular-form-and-cusp-form`.
- `def-petersson-inner-product-on-congruence-forms` (definition) — Petersson Inner Product on Congruence Forms. Item suppliers: `def-congruence-modular-form-with-nebentypus`.
- `def-hecke-operator-on-congruence-forms` (definition) — Hecke Operators on Congruence Forms. Item suppliers: `def-congruence-modular-form-with-nebentypus`.
- `thm-hecke-preserves-cuspidality-on-congruence-subgroups` (theorem) — Hecke Operators Preserve the Cuspidal Subspace. Item suppliers: `def-hecke-operator-on-congruence-forms`.
- `thm-hecke-adjoint-and-commuting-relations-congruence-forms` (theorem) — Adjointness and Commutation Relations for Hecke Operators. Item suppliers: `def-hecke-operator-on-congruence-forms`, `def-petersson-inner-product-on-congruence-forms`.

B-page examples/status contracts:

- `ex-level-one-discriminant-as-hecke-eigenform` (example) — The Level-One Discriminant as a Hecke Eigenform. Item suppliers: `def-modular-discriminant-and-j-invariant`, `thm-hecke-adjoint-and-commuting-relations-congruence-forms`.
- `ex-hecke-eigenvalue-of-level-one-eisenstein-series` (example) — Hecke Eigenvalues of a Level-One Eisenstein Series. Item suppliers: `def-level-one-eisenstein-series`, `def-hecke-operator-on-congruence-forms`.

#### gln-automorphic-representations-and-rankin-selberg-foundations / gln-automorphic-representations-and-rankin-selberg-foundations-examples

**A:** GL(n) Automorphic Representations and Rankin–Selberg Foundations. **B:** GL(n) Automorphic Representations and Rankin–Selberg Foundations: Examples. **Direct A prerequisites:** `dirichlet-series-and-euler-products`. **B prerequisite:** `gln-automorphic-representations-and-rankin-selberg-foundations-examples` requires `gln-automorphic-representations-and-rankin-selberg-foundations`. **Inventory:** 5 A items; 2 B items. Contract and source detail: [R4 automorphic/spectral dossier](number-theory-scaffolds-2026-10-23/analytic/r4-automorphic-spectral.md) and [R4 source index](number-theory-scaffolds-2026-10-23/analytic/r4-sources/source-index.md).

A-page ordered contracts:

- `def-adelic-gln-automorphic-representation` (definition) — Adelic Automorphic Representation of GL(n). Item suppliers: none.
- `def-unitary-cuspidal-generic-gln-representation` (definition) — Unitary Cuspidal Generic Representation of GL(n). Item suppliers: `def-adelic-gln-automorphic-representation`.
- `def-pure-isobaric-automorphic-sum` (definition) — Pure Isobaric Automorphic Sum. Item suppliers: `def-adelic-gln-automorphic-representation`.
- `def-standard-and-rankin-selberg-l-functions-on-gln` (definition) — Standard and Rankin–Selberg L-Functions on GL(n). Item suppliers: `def-unitary-cuspidal-generic-gln-representation`.
- `def-analytic-conductor-of-gln-representation` (definition) — Analytic Conductor of a GL(n) Representation. Item suppliers: `def-adelic-gln-automorphic-representation`.

B-page examples/status contracts:

- `ex-trivial-isobaric-representation-for-standard-gln-l-function` (example) — The Trivial Isobaric Representation and a Standard GL(n) L-Function. Item suppliers: `def-pure-isobaric-automorphic-sum`, `def-standard-and-rankin-selberg-l-functions-on-gln`.
- `ex-rankin-selberg-pair-of-unitary-cuspidal-representations` (example) — A Pair of Unitary Cuspidal Representations in a Rankin–Selberg Product. Item suppliers: `def-standard-and-rankin-selberg-l-functions-on-gln`.

#### pretentious-distance-and-multiplicative-mean-values / halasz-mean-value-theorem-examples

**A:** Pretentious Distance and Multiplicative Mean Values. **B:** Halász Mean-Value Theorem Examples. **Direct A prerequisites:** `perron-inversion-and-the-explicit-formula`. **B prerequisite:** `halasz-mean-value-theorem-examples` requires `pretentious-distance-and-multiplicative-mean-values`. **Inventory:** 5 A items; 2 B items. Contract and source detail: [R5 multiplicative/metric dossier](number-theory-scaffolds-2026-10-23/analytic/r5-multiplicative-metric.md) and [R5 source register](number-theory-scaffolds-2026-10-23/analytic/r5-sources/README.md).

A-page ordered contracts:

- `def-pretentious-distance-to-an-archimedean-twist` (definition) — Pretentious distance to an Archimedean twist. Item suppliers: `def-multiplicative-arithmetic-function`, `def-completely-multiplicative-arithmetic-function`.
- `def-halasz-minimal-pretentious-distance` (definition) — Halász minimal pretentious distance. Item suppliers: `def-pretentious-distance-to-an-archimedean-twist`.
- `lem-pretentious-distance-triangle-inequality` (lemma) — Triangle inequality for pretentious distance. Item suppliers: `def-pretentious-distance-to-an-archimedean-twist`.
- `thm-halasz-mean-value-bound` (theorem) — Halász mean-value bound for 1-bounded multiplicative functions. Item suppliers: `def-halasz-minimal-pretentious-distance`, `def-multiplicative-arithmetic-function`, `thm-first-mertens-theorem-for-primes`, `thm-multiplicative-dirichlet-series-euler-product`, `thm-truncated-perron-formula`.
- `cor-halasz-cancellation-under-growing-minimal-distance` (corollary) — Cancellation when the minimizing pretentious distance grows. Item suppliers: `thm-halasz-mean-value-bound`.

B-page examples/status contracts:

- `ex-halasz-distance-for-liouville-and-archimedean-twists` (example) — Comparing Liouville with Archimedean twists. Item suppliers: `def-halasz-minimal-pretentious-distance`, `def-liouville-function`.
- `ex-halasz-mean-bound-for-a-twisted-multiplicative-function` (example) — Choosing the minimizing twist in a mean-value bound. Item suppliers: `thm-halasz-mean-value-bound`.

#### probabilistic-number-theory-and-additive-functions / probabilistic-number-theory-and-additive-functions-examples

**A:** Probabilistic Number Theory and Additive Functions. **B:** Probabilistic Number Theory and Additive Functions Examples. **Direct A prerequisites:** `chebyshev-bounds-and-mertens-theorems`, `conjugate-families-and-posterior-prediction`. **B prerequisite:** `probabilistic-number-theory-and-additive-functions-examples` requires `probabilistic-number-theory-and-additive-functions`. **Inventory:** 6 A items; 2 B items. Contract and source detail: [R5 multiplicative/metric dossier](number-theory-scaffolds-2026-10-23/analytic/r5-multiplicative-metric.md) and [R5 source register](number-theory-scaffolds-2026-10-23/analytic/r5-sources/README.md).

A-page ordered contracts:

- `def-additive-arithmetic-function` (definition) — Additive arithmetic function. Item suppliers: `def-arithmetic-function`, `def-coprime`.
- `def-strongly-additive-arithmetic-function` (definition) — Strongly additive arithmetic function. Item suppliers: `def-additive-arithmetic-function`, `thm-fundamental-theorem-of-arithmetic`.
- `def-short-interval-prime-count-statistic` (definition) — Randomized prime count in a short interval. Item suppliers: `def-prime-counting-function`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`.
- `thm-erdos-wintner-sufficient-limit-law-for-additive-functions` (theorem) — Erdős–Wintner sufficient criterion and random prime-power limit. Item suppliers: `def-additive-arithmetic-function`, `def-uniform-finite-probability-space`, `def-convergence-in-distribution-of-random-elements`, `thm-first-mertens-theorem-for-primes`.
- `thm-erdos-kac-limit-law-for-omega` (theorem) — Erdős–Kac limit law for the number of distinct prime divisors. Item suppliers: `def-strongly-additive-arithmetic-function`, `def-uniform-finite-probability-space`, `def-standard-normal-and-normal-laws`, `def-convergence-in-distribution-for-real-random-variables`, `thm-lindeberg-feller-central-limit-theorem-sufficiency`, `thm-first-mertens-theorem-for-primes`.
- `op-poisson-moments-for-primes-in-subpolynomial-short-intervals` (open-problem) — Poisson moments for primes in subpolynomial short intervals. Item suppliers: `def-short-interval-prime-count-statistic`, `def-poisson-law`.

B-page examples/status contracts:

- `ex-omega-and-big-omega-additivity` (example) — Distinct and repeated prime factors as additive functions. Item suppliers: `def-additive-arithmetic-function`, `def-strongly-additive-arithmetic-function`, `def-liouville-function`.
- `ex-erdos-kac-centering-and-scaling` (example) — Centering and scaling the prime-divisor count. Item suppliers: `thm-erdos-kac-limit-law-for-omega`.

#### uniform-distribution-on-tori-and-weyl-criterion / uniform-distribution-on-tori-and-weyl-criterion-examples

**A:** Uniform Distribution on Tori and Weyl’s Criterion. **B:** Uniform Distribution on Tori and Weyl Criterion Examples. **Direct A prerequisites:** `the-ergodic-theorems-of-von-neumann-and-birkhoff`, `independence-borel-cantelli-and-zero-one-laws`. **B prerequisite:** `uniform-distribution-on-tori-and-weyl-criterion-examples` requires `uniform-distribution-on-tori-and-weyl-criterion`. **Inventory:** 9 A items; 2 B items. Contract and source detail: [R5 multiplicative/metric dossier](number-theory-scaffolds-2026-10-23/analytic/r5-multiplicative-metric.md) and [R5 source register](number-theory-scaffolds-2026-10-23/analytic/r5-sources/README.md).

A-page ordered contracts:

- `def-uniform-distribution-mod-one-in-k-dimensions` (definition) — Uniform distribution modulo one in k dimensions. Item suppliers: `def-equidistribution-mod-one`.
- `thm-weyl-criterion-on-the-k-torus` (theorem) — Weyl character criterion for equidistribution on the k-torus. Item suppliers: `def-uniform-distribution-mod-one-in-k-dimensions`.
- `def-delta-scattered-sequence` (definition) — Delta-scattered real sequence. Item suppliers: none.
- `def-scattered-sequence` (definition) — Scattered real sequence. Item suppliers: `def-delta-scattered-sequence`.
- `def-jointly-scattered-sequences` (definition) — Jointly scattered sequences. Item suppliers: `def-scattered-sequence`.
- `thm-metric-equidistribution-for-analytic-functions` (theorem) — Metric torus equidistribution along analytic functions. Item suppliers: `def-scattered-sequence`, `def-jointly-scattered-sequences`, `thm-weyl-criterion-on-the-k-torus`.
- `cor-metric-equidistribution-on-nondegenerate-analytic-curves` (corollary) — Metric equidistribution on nondegenerate analytic curves. Item suppliers: `thm-metric-equidistribution-for-analytic-functions`.
- `thm-multidimensional-koksma-for-polynomial-curves` (theorem) — Multidimensional Koksma theorem with an analytic exponential coordinate and polynomial coordinates. Item suppliers: `def-scattered-sequence`, `def-jointly-scattered-sequences`, `thm-weyl-criterion-on-the-k-torus`.
- `op-multidimensional-analytic-koksma-extension` (open-problem) — Analytic-function extension of the multidimensional Koksma theorem. Item suppliers: `def-scattered-sequence`, `def-jointly-scattered-sequences`, `def-uniform-distribution-mod-one-in-k-dimensions`.

B-page examples/status contracts:

- `ex-weyl-criterion-for-a-linear-sequence-on-the-two-torus` (example) — A linear sequence tested on the two-torus. Item suppliers: `thm-weyl-criterion-on-the-k-torus`.
- `ex-scatteredness-of-a-power-sequence` (example) — Scatteredness of a positive power sequence. Item suppliers: `def-scattered-sequence`.

#### metric-diophantine-approximation-and-duffin-schaeffer / metric-diophantine-approximation-and-duffin-schaeffer-examples

**A:** Metric Diophantine Approximation and Duffin–Schaeffer. **B:** Metric Diophantine Approximation and Duffin–Schaeffer Examples. **Direct A prerequisites:** `regular-continued-fractions-and-diophantine-approximation`, `independence-borel-cantelli-and-zero-one-laws`. **B prerequisite:** `metric-diophantine-approximation-and-duffin-schaeffer-examples` requires `metric-diophantine-approximation-and-duffin-schaeffer`. **Inventory:** 9 A items; 2 B items. Contract and source detail: [R5 multiplicative/metric dossier](number-theory-scaffolds-2026-10-23/analytic/r5-multiplicative-metric.md) and [R5 source register](number-theory-scaffolds-2026-10-23/analytic/r5-sources/README.md).

A-page ordered contracts:

- `def-rational-approximation-limsup-set` (definition) — Rational approximation limsup set. Item suppliers: none.
- `def-reduced-rational-approximation-limsup-set` (definition) — Reduced rational approximation limsup set. Item suppliers: `def-rational-approximation-limsup-set`, `def-unit-group-modulo-n-and-euler-totient`.
- `def-inhomogeneous-reduced-rational-approximation-limsup-set` (definition) — Inhomogeneous reduced rational approximation limsup set. Item suppliers: `def-unit-group-modulo-n-and-euler-totient`.
- `thm-dirichlet-rational-approximation-with-bounded-denominator` (theorem) — Dirichlet rational approximation with bounded denominator. Item suppliers: `def-coprime`, `def-integers-modulo-n`.
- `thm-khintchine-monotone-metric-approximation` (theorem) — Khintchine zero–full law for monotone approximation functions. Item suppliers: `def-rational-approximation-limsup-set`.
- `thm-duffin-schaeffer-reduced-approximation-theorem` (theorem) — Duffin–Schaeffer theorem for reduced rational approximations. Item suppliers: `def-reduced-rational-approximation-limsup-set`, `def-unit-group-modulo-n-and-euler-totient`, `cor-first-borel-cantelli-lemma-for-events`.
- `thm-catlin-generalized-duffin-schaeffer-criterion` (theorem) — Catlin criterion for unrestricted rational representations. Item suppliers: `thm-duffin-schaeffer-reduced-approximation-theorem`, `def-rational-approximation-limsup-set`, `def-unit-group-modulo-n-and-euler-totient`.
- `thm-hauke-treuer-inhomogeneous-duffin-schaeffer-counterexamples` (theorem) — Counterexamples for the inhomogeneous Duffin–Schaeffer conjecture at specified shifts. Item suppliers: `def-inhomogeneous-reduced-rational-approximation-limsup-set`, `def-unit-group-modulo-n-and-euler-totient`.
- `op-inhomogeneous-duffin-schaeffer-for-nonliouville-shifts` (open-problem) — Inhomogeneous Duffin–Schaeffer behavior for non-Liouville shifts. Item suppliers: `def-inhomogeneous-reduced-rational-approximation-limsup-set`, `def-unit-group-modulo-n-and-euler-totient`.

B-page examples/status contracts:

- `ex-dirichlet-bounded-denominator-approximation-to-sqrt-two` (example) — A bounded-denominator approximation to √2. Item suppliers: `thm-dirichlet-rational-approximation-with-bounded-denominator`.
- `ex-duffin-schaeffer-divergence-test-for-a-reciprocal-gauge` (example) — A divergence test for a reciprocal approximation gauge. Item suppliers: `thm-duffin-schaeffer-reduced-approximation-theorem`.

### New-page dependency layer 2

#### finite-dirichlet-l-zero-verifications / finite-dirichlet-l-zero-verifications-examples

**A:** Finite GRH Verifications for Primitive Dirichlet L-Functions. **B:** Finite Dirichlet L Verification Range Checks. **Direct A prerequisites:** `certified-zero-counting-for-degree-one-l-functions`. **B prerequisite:** `finite-dirichlet-l-zero-verifications-examples` requires `finite-dirichlet-l-zero-verifications`. **Inventory:** 4 A items; 1 B items. Contract and source detail: [R1 pair dossier](number-theory-scaffolds-2026-10-23/analytic/r1-foundations-l-functions.md) and [R1 source ledger](number-theory-scaffolds-2026-10-23/analytic/r1-sources/README.md).

A-page ordered contracts:

- `alg-platt-finite-dirichlet-l-zero-verification` (algorithm) — Platt's interval-arithmetic verification for bounded-conductor Dirichlet L-functions. Item suppliers: `thm-turing-zero-count-certificate-is-sound`, `thm-primitive-dirichlet-l-functional-equation`.
- `thm-platt-bounded-grh-for-primitive-dirichlet-l-functions` (theorem) — GRH verification for primitive Dirichlet L-functions up to the Platt conductor-height bounds. Item suppliers: `alg-platt-finite-dirichlet-l-zero-verification`, `thm-turing-zero-count-certificate-is-sound`.
- `thm-platt-central-nonvanishing-through-conductor-2000000` (theorem) — Central nonvanishing for primitive Dirichlet L-functions through conductor 2,000,000. Item suppliers: `alg-platt-finite-dirichlet-l-zero-verification`.
- `rem-platt-run-output-is-required-for-independent-replay` (remark) — Local files lack Platt's per-character interval-sign and Turing zero-count certificates. Item suppliers: `thm-platt-bounded-grh-for-primitive-dirichlet-l-functions`.

B-page examples/status contracts:

- `ex-goldbach-conductor-height-subrange` (example) — Helfgott's finite q≤300,000 range lies inside Platt's verified bounds. Item suppliers: `thm-platt-bounded-grh-for-primitive-dirichlet-l-functions`.

#### large-sieve-and-finite-group-spectral-sieve / large-sieve-applications-and-examples

**A:** Additive, Multiplicative, and Finite-Group Spectral Sieve Methods. **B:** Large-Sieve and Spectral-Sieve Applications. **Direct A prerequisites:** `classical-sieve-methods`, `finite-abelian-characters-for-combinatorics`, `dirichlet-characters-l-functions-and-primes-in-progressions`. **B prerequisite:** `large-sieve-applications-and-examples` requires `large-sieve-and-finite-group-spectral-sieve`. **Inventory:** 7 A items; 2 B items. Contract and source detail: [R2 sieve/prime dossier](number-theory-scaffolds-2026-10-23/analytic/r2-sieves-primes.md).

A-page ordered contracts:

- `def-abstract-large-sieve-setting` (definition) — Large-sieve data and the optimal large-sieve constant. Item suppliers: `def-group`, `def-finite-cardinality`.
- `thm-additive-large-sieve-inequality` (theorem) — Additive large-sieve inequality and dual form. Item suppliers: `def-abstract-large-sieve-setting`, `def-additive-character-of-a-finite-abelian-group`, `lem-additive-character-orthogonality-from-representation-orthogonality`, `thm-bessel-inequality-and-finite-parseval-identity`, `thm-cauchy-schwarz-and-the-euclidean-norm`.
- `thm-multiplicative-large-sieve-inequality` (theorem) — Multiplicative large-sieve inequality for primitive Dirichlet characters. Item suppliers: `def-abstract-large-sieve-setting`, `def-dirichlet-character-modulo-q`, `thm-dirichlet-character-orthogonality`, `thm-additive-large-sieve-inequality`.
- `cor-large-sieve-duality` (corollary) — Dual large-sieve inequality. Item suppliers: `thm-additive-large-sieve-inequality`, `thm-bessel-inequality-and-finite-parseval-identity`.
- `thm-kowalski-conjugacy-sieve-bound` (theorem) — Large-sieve bound for finite-group conjugacy sieves. Item suppliers: `def-abstract-large-sieve-setting`, `thm-first-orthogonality-relation-for-irreducible-complex-characters`, `thm-second-column-orthogonality-relation-for-irreducible-complex-characters`.
- `thm-kowalski-general-group-sieve-bound` (theorem) — Large-sieve bound using finite-group matrix coefficients. Item suppliers: `def-abstract-large-sieve-setting`, `thm-first-orthogonality-relation-for-irreducible-complex-characters`, `thm-second-column-orthogonality-relation-for-irreducible-complex-characters`.
- `thm-kowalski-coset-sieve-bound` (theorem) — Large-sieve bound for coset sieves with abelian quotient. Item suppliers: `def-abstract-large-sieve-setting`, `thm-kowalski-conjugacy-sieve-bound`, `thm-kowalski-general-group-sieve-bound`.

B-page examples/status contracts:

- `ex-multiplicative-large-sieve-for-dirichlet-character-sums` (example) — The multiplicative large sieve for Dirichlet-character sums. Item suppliers: `thm-multiplicative-large-sieve-inequality`, `thm-dirichlet-character-orthogonality`.
- `ex-finite-group-conjugacy-sieve` (example) — A finite-group conjugacy sieve calculation. Item suppliers: `thm-kowalski-conjugacy-sieve-bound`, `def-finite-cardinality`.

#### vinogradov-mean-value-theorem / vinogradov-mean-value-theorem-examples

**A:** The Main Conjecture in Vinogradov’s Mean Value Theorem. **B:** Examples and Low-Degree Cases for Vinogradov Mean Values. **Direct A prerequisites:** `finite-fourier-analysis-and-the-fast-fourier-transform`, `sharp-l2-decoupling-for-the-moment-curve`, `van-der-corput-derivative-tests`. **B prerequisite:** `vinogradov-mean-value-theorem-examples` requires `vinogradov-mean-value-theorem`. **Inventory:** 7 A items; 2 B items. Contract and source detail: [R3 sums/circle-method dossier](number-theory-scaffolds-2026-10-23/analytic/r3-sums-circle-method.md), [R3 source review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/source-review.md), [noncompact entropy review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/noncompact-entropy-source-review.md), and [divisor/circle import review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/li-yang-cen-import-source-review.md).

A-page ordered contracts:

- `lem-continuous-torus-orthogonality-for-integer-frequencies` (lemma) — Continuous torus orthogonality for integer frequencies. Item suppliers: none.
- `def-vinogradov-mean-value-Jsk` (definition) — Vinogradov’s mean value J_{s,k}(X). Item suppliers: `def-exponential-character-e`.
- `thm-vinogradov-mean-value-is-solution-count` (theorem) — The mean value J_{s,k}(X) counts solutions of the Vinogradov system. Item suppliers: `def-vinogradov-mean-value-Jsk`, `lem-continuous-torus-orthogonality-for-integer-frequencies`.
- `lem-vmvt-diagonal-and-near-diagonal-lower-bounds` (lemma) — Diagonal and near-diagonal lower bounds for J_{s,k}(X). Item suppliers: `thm-vinogradov-mean-value-is-solution-count`.
- `thm-wooley-cubic-case-of-vmvt` (theorem) — Sharp main-conjecture bound in degree three. Item suppliers: `def-vinogradov-mean-value-Jsk`.
- `thm-wooley-efficient-congruencing-vmvt-large-moment-range` (theorem) — Efficient congruencing bound for s≥k(k+1). Item suppliers: `def-vinogradov-mean-value-Jsk`, `thm-vinogradov-mean-value-is-solution-count`.
- `thm-vinogradov-mean-value-main-conjecture` (theorem) — J_{s,k}(X)≪X^ε(X^s+X^{2s−k(k+1)/2}) for every s,k. Item suppliers: `thm-vinogradov-mean-value-is-solution-count`, `thm-bourgain-demeter-guth-sharp-moment-curve-decoupling`, `thm-wooley-cubic-case-of-vmvt`, `thm-wooley-efficient-congruencing-vmvt-large-moment-range`.

B-page examples/status contracts:

- `ex-vmvt-degree-one-and-two` (example) — The elementary degree-one and degree-two cases. Item suppliers: `thm-vinogradov-mean-value-main-conjecture`.
- `ex-vmvt-near-diagonal-solutions` (example) — Near-diagonal solutions giving the second lower-bound term. Item suppliers: `lem-vmvt-diagonal-and-near-diagonal-lower-bounds`.

#### nested-efficient-congruencing-polynomial-mean-values / nested-efficient-congruencing-polynomial-mean-values-examples

**A:** Nested Efficient Congruencing for Vinogradov-Type Mean Values. **B:** Examples for Polynomial-Family Mean Values. **Direct A prerequisites:** `finite-fourier-analysis-and-the-fast-fourier-transform`, `van-der-corput-derivative-tests`. **B prerequisite:** `nested-efficient-congruencing-polynomial-mean-values-examples` requires `nested-efficient-congruencing-polynomial-mean-values`. **Inventory:** 4 A items; 2 B items. Contract and source detail: [R3 sums/circle-method dossier](number-theory-scaffolds-2026-10-23/analytic/r3-sums-circle-method.md), [R3 source review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/source-review.md), [noncompact entropy review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/noncompact-entropy-source-review.md), and [divisor/circle import review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/li-yang-cen-import-source-review.md).

A-page ordered contracts:

- `def-polynomial-family-mean-value` (definition) — Mean value of an exponential sum attached to a polynomial family. Item suppliers: `def-exponential-character-e`.
- `def-polynomial-family-wronskian-nondegeneracy` (definition) — Nonvanishing Wronskian condition for integer polynomials. Item suppliers: none.
- `thm-nested-efficient-congruencing-general-polynomial-family` (theorem) — Weighted mean-value estimate for a polynomial family with nonzero Wronskian. Item suppliers: `def-polynomial-family-mean-value`, `def-polynomial-family-wronskian-nondegeneracy`.
- `cor-vinogradov-mean-value-for-distinct-degrees` (corollary) — Main-conjecture bound for any distinct positive degrees. Item suppliers: `thm-nested-efficient-congruencing-general-polynomial-family`.

B-page examples/status contracts:

- `ex-missing-slices-in-a-vinogradov-system` (example) — Distinct monomial degrees with missing slices. Item suppliers: `cor-vinogradov-mean-value-for-distinct-degrees`.
- `ex-function-field-vmvt-scope` (example) — The source’s separate function-field analogue and its hypotheses. Item suppliers: `thm-nested-efficient-congruencing-general-polynomial-family`.

#### szemeredi-finite-density-theorem / szemeredi-finite-density-theorem-examples

**A:** Szemerédi’s Theorem for Finite Dense Sets. **B:** Finite-Density Progression Examples. **Direct A prerequisites:** `generalized-von-neumann-theorem`, `additive-energy-fourier-identity`. **B prerequisite:** `szemeredi-finite-density-theorem-examples` requires `szemeredi-finite-density-theorem`. **Inventory:** 7 A items; 2 B items. Contract and source detail: [R3 sums/circle-method dossier](number-theory-scaffolds-2026-10-23/analytic/r3-sums-circle-method.md), [R3 source review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/source-review.md), [noncompact entropy review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/noncompact-entropy-source-review.md), and [divisor/circle import review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/li-yang-cen-import-source-review.md).

A-page ordered contracts:

- `def-finite-density-k-term-arithmetic-progression` (definition) — A k-term arithmetic progression in an interval or cyclic group. Item suppliers: none.
- `def-relative-density-in-a-finite-group` (definition) — Relative density of a subset of a finite group. Item suppliers: none.
- `lem-gowers-fourier-density-increment` (lemma) — A large nonzero Fourier coefficient yields a denser subprogression. Item suppliers: `def-finite-density-k-term-arithmetic-progression`.
- `lem-gowers-freiman-structure-for-approximate-homomorphisms` (lemma) — Freiman-type structure for the approximate homomorphisms in Gowers’s proof. Item suppliers: `thm-additive-energy-fourier-identity`.
- `alg-gowers-density-increment-for-long-progressions` (algorithm) — Iterate uniformity and approximate-homomorphism density increments. Item suppliers: `lem-gowers-fourier-density-increment`, `lem-gowers-freiman-structure-for-approximate-homomorphisms`.
- `thm-szemeredi-finite-density-arithmetic-progressions` (theorem) — For each δ>0 and k, every sufficiently large A⊂[N] with \|A\|≥δN contains a k-AP. Item suppliers: `def-finite-density-k-term-arithmetic-progression`, `def-relative-density-in-a-finite-group`, `alg-gowers-density-increment-for-long-progressions`.
- `lem-varnavides-positive-density-of-progression-counts` (lemma) — Varnavides strengthening: positive density forces a positive normalized k-AP count. Item suppliers: `thm-szemeredi-finite-density-arithmetic-progressions`.

B-page examples/status contracts:

- `ex-szemeredi-length-three-density-increment` (example) — Roth’s length-three density increment as the first case. Item suppliers: `thm-szemeredi-finite-density-arithmetic-progressions`.
- `ex-szemeredi-cyclic-group-wraparound` (example) — Embedding an interval progression in a prime cyclic group. Item suppliers: `def-finite-density-k-term-arithmetic-progression`.

#### green-tao-ziegler-gowers-inverse-theorem / green-tao-ziegler-gowers-inverse-theorem-examples

**A:** Inverse Theorem for the Gowers U^{s+1}[N]-Norm. **B:** Nilsequence Obstructions and Corrected Linearisation Examples. **Direct A prerequisites:** `generalized-von-neumann-theorem`, `quantitative-leibman-factorization`. **B prerequisite:** `green-tao-ziegler-gowers-inverse-theorem-examples` requires `green-tao-ziegler-gowers-inverse-theorem`. **Inventory:** 6 A items; 2 B items. Contract and source detail: [R3 sums/circle-method dossier](number-theory-scaffolds-2026-10-23/analytic/r3-sums-circle-method.md), [R3 source review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/source-review.md), [noncompact entropy review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/noncompact-entropy-source-review.md), and [divisor/circle import review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/li-yang-cen-import-source-review.md).

A-page ordered contracts:

- `def-gowers-uniformity-norm-on-intervals` (definition) — Normalized U^{s+1}[N] norm using a cyclic ambient group. Item suppliers: `def-gowers-uniformity-norm-on-finite-cyclic-groups`.
- `def-bounded-complexity-nilsequence-on-an-interval` (definition) — Bounded-complexity Lipschitz nilsequence n↦F(g^n x). Item suppliers: `def-filtered-nilpotent-lie-group-and-nilmanifold`, `def-polynomial-sequence-on-a-filtered-group`.
- `def-inverse-gowers-correlation-obstruction` (definition) — Correlation with a nilsequence as obstruction to U^{s+1}[N]-uniformity. Item suppliers: `def-gowers-uniformity-norm-on-intervals`, `def-bounded-complexity-nilsequence-on-an-interval`.
- `lem-gowers-inverse-theorem-corrected-linearisation` (lemma) — Erratum replacement for the invalid original Proposition 8.3. Item suppliers: `def-inverse-gowers-correlation-obstruction`.
- `rem-gowers-inverse-theorem-erratum-scope` (remark) — 2024 erratum: taut filtrations and corrected Proposition 3.1 are required. Item suppliers: `lem-gowers-inverse-theorem-corrected-linearisation`.
- `thm-green-tao-ziegler-inverse-theorem-for-gowers-norms` (theorem) — For every fixed s≥3, large U^{s+1}[N] norm implies correlation with bounded-complexity s-step nilsequence. Item suppliers: `def-inverse-gowers-correlation-obstruction`, `thm-green-tao-quantitative-nil-orbit-factorization`, `lem-gowers-inverse-theorem-corrected-linearisation`.

B-page examples/status contracts:

- `ex-gowers-U2-fourier-obstruction` (example) — The U² inverse obstruction is an ordinary Fourier character. Item suppliers: `def-gowers-uniformity-norm-on-intervals`.
- `ex-nilsequence-obstruction-beyond-polynomial-phases` (example) — A higher-step nilsequence as an obstruction not captured by a linear phase. Item suppliers: `thm-green-tao-ziegler-inverse-theorem-for-gowers-norms`.

#### mobius-nilsequence-orthogonality / mobius-nilsequence-orthogonality-examples

**A:** Möbius Orthogonality to Polynomial Nilsequences. **B:** Examples of Möbius-Nilsequence Correlation Bounds. **Direct A prerequisites:** `quantitative-leibman-factorization`. **B prerequisite:** `mobius-nilsequence-orthogonality-examples` requires `mobius-nilsequence-orthogonality`. **Inventory:** 4 A items; 2 B items. Contract and source detail: [R3 sums/circle-method dossier](number-theory-scaffolds-2026-10-23/analytic/r3-sums-circle-method.md), [R3 source review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/source-review.md), [noncompact entropy review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/noncompact-entropy-source-review.md), and [divisor/circle import review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/li-yang-cen-import-source-review.md).

A-page ordered contracts:

- `alg-factor-polynomial-nil-orbit-for-type-i-ii-analysis` (algorithm) — Factor an orbit and separate equidistributed Type I/II and periodic components. Item suppliers: `thm-green-tao-quantitative-nil-orbit-factorization`.
- `thm-mobius-sums-on-arithmetic-progressions` (theorem) — Möbius sums on progressions from degree-one Dirichlet-L estimates. Item suppliers: none.
- `thm-type-i-ii-mobius-correlation-with-equidistributed-nilsequences` (theorem) — Type I/II cancellation for Möbius against totally equidistributed nil-orbits. Item suppliers: `alg-factor-polynomial-nil-orbit-for-type-i-ii-analysis`.
- `thm-green-tao-mobius-orthogonality-to-polynomial-nilsequences` (theorem) — For every A>0, μ has O(log^{-A}N) correlation with a fixed-complexity polynomial nilsequence. Item suppliers: `thm-green-tao-quantitative-nil-orbit-factorization`, `thm-mobius-sums-on-arithmetic-progressions`, `thm-type-i-ii-mobius-correlation-with-equidistributed-nilsequences`.

B-page examples/status contracts:

- `ex-mobius-correlation-with-a-linear-phase` (example) — The 1-step case reduces to Möbius exponential sums. Item suppliers: `thm-green-tao-mobius-orthogonality-to-polynomial-nilsequences`.
- `ex-polynomial-nilsequence-mean` (example) — Apply the theorem to a fixed polynomial orbit and Lipschitz observable. Item suppliers: `thm-green-tao-mobius-orthogonality-to-polynomial-nilsequences`.

#### maass-forms-eisenstein-series-and-spectral-decomposition / maass-forms-eisenstein-series-and-spectral-decomposition-examples

**A:** Maass Forms, Eisenstein Series, and Spectral Decomposition. **B:** Maass Forms, Eisenstein Series, and Spectral Decomposition: Examples. **Direct A prerequisites:** `congruence-modular-forms-and-hecke-operators`, `unbounded-self-adjoint-operators-and-stones-theorem`. **B prerequisite:** `maass-forms-eisenstein-series-and-spectral-decomposition-examples` requires `maass-forms-eisenstein-series-and-spectral-decomposition`. **Inventory:** 6 A items; 2 B items. Contract and source detail: [R4 automorphic/spectral dossier](number-theory-scaffolds-2026-10-23/analytic/r4-automorphic-spectral.md) and [R4 source index](number-theory-scaffolds-2026-10-23/analytic/r4-sources/source-index.md).

A-page ordered contracts:

- `def-weight-zero-maass-form-on-gamma0n` (definition) — Weight-Zero Maass Form on Gamma0(N). Item suppliers: `def-congruence-subgroup-of-sl2-z`.
- `def-hyperbolic-laplacian-on-the-upper-half-plane` (definition) — Hyperbolic Laplacian on the Upper Half-Plane. Item suppliers: `def-modular-group-action-on-the-upper-half-plane`.
- `def-maass-spectral-parameter` (definition) — Maass Spectral Parameter. Item suppliers: `def-hyperbolic-laplacian-on-the-upper-half-plane`.
- `def-eisenstein-series-for-congruence-subgroups` (definition) — Eisenstein Series for a Congruence Subgroup. Item suppliers: `def-congruence-subgroup-of-sl2-z`.
- `thm-fourier-whittaker-expansion-maass-cusp-forms` (theorem) — Fourier–Whittaker Expansion of a Maass Cusp Form. Item suppliers: `def-weight-zero-maass-form-on-gamma0n`, `def-maass-spectral-parameter`.
- `thm-spectral-decomposition-l2-congruence-surface` (theorem) — Cuspidal and Eisenstein Spectral Decomposition. Item suppliers: `def-weight-zero-maass-form-on-gamma0n`, `def-eisenstein-series-for-congruence-subgroups`, `thm-spectral-theorem-for-unbounded-self-adjoint-operators`.

B-page examples/status contracts:

- `ex-maass-cusp-form-in-discrete-spectrum` (example) — A Maass Cusp Form in the Discrete Spectrum. Item suppliers: `thm-spectral-decomposition-l2-congruence-surface`.
- `ex-eisenstein-series-in-continuous-spectrum` (example) — An Eisenstein Series in the Continuous Spectrum. Item suppliers: `thm-spectral-decomposition-l2-congruence-surface`.

#### gl2-rankin-selberg-l-functions-and-functional-equations / gl2-rankin-selberg-l-functions-and-functional-equations-examples

**A:** GL2 Rankin–Selberg L-Functions and Functional Equations. **B:** GL2 Rankin–Selberg L-Functions and Functional Equations: Examples. **Direct A prerequisites:** `congruence-modular-forms-and-hecke-operators`, `primitive-dirichlet-l-functions-and-functional-equations`. **B prerequisite:** `gl2-rankin-selberg-l-functions-and-functional-equations-examples` requires `gl2-rankin-selberg-l-functions-and-functional-equations`. **Inventory:** 6 A items; 2 B items. Contract and source detail: [R4 automorphic/spectral dossier](number-theory-scaffolds-2026-10-23/analytic/r4-automorphic-spectral.md) and [R4 source index](number-theory-scaffolds-2026-10-23/analytic/r4-sources/source-index.md).

A-page ordered contracts:

- `def-standard-l-function-of-a-gl2-eigenform` (definition) — Standard L-Function of a GL2 Hecke Eigenform. Item suppliers: `def-congruence-modular-form-with-nebentypus`.
- `thm-hec-ke-euler-product-for-standard-gl2-l-function` (theorem) — Euler Product for the Standard GL2 Hecke L-Function. Item suppliers: `def-standard-l-function-of-a-gl2-eigenform`, `def-hecke-operator-on-congruence-forms`.
- `lem-mellin-transform-of-full-level-holomorphic-cusp-form` (lemma) — Mellin Transform of a Full-Level Holomorphic Cusp Form. Item suppliers: `def-standard-l-function-of-a-gl2-eigenform`, `thm-q-expansion-principle-at-the-cusp`.
- `thm-standard-gl2-l-function-analytic-continuation-and-functional-equation` (theorem) — Analytic Continuation and Functional Equation of the Standard GL2 L-Function. Item suppliers: `def-standard-l-function-of-a-gl2-eigenform`, `thm-hec-ke-euler-product-for-standard-gl2-l-function`, `lem-mellin-transform-of-full-level-holomorphic-cusp-form`.
- `def-gl2-rankin-selberg-l-function` (definition) — Rankin–Selberg L-Function for a GL2 Pair. Item suppliers: `def-standard-l-function-of-a-gl2-eigenform`.
- `thm-gl2-rankin-selberg-unfolding-and-functional-equation` (theorem) — GL2 Rankin–Selberg Unfolding and Functional Equation. Item suppliers: `def-gl2-rankin-selberg-l-function`, `thm-standard-gl2-l-function-analytic-continuation-and-functional-equation`.

B-page examples/status contracts:

- `ex-rankin-selberg-series-for-level-one-eigenforms` (example) — A Rankin–Selberg Series for Two Level-One Eigenforms. Item suppliers: `thm-gl2-rankin-selberg-unfolding-and-functional-equation`.
- `ex-primitive-dirichlet-twist-of-a-gl2-l-function` (example) — A Primitive Dirichlet Twist of a GL2 L-Function. Item suppliers: `thm-standard-gl2-l-function-analytic-continuation-and-functional-equation`, `thm-primitive-dirichlet-l-functional-equation`.

#### gl3-automorphic-distributions-voronoi-and-l-functions / gl3-automorphic-distributions-voronoi-and-l-functions-examples

**A:** GL3 Automorphic Distributions, Voronoi Summation, and L-Functions. **B:** GL3 Automorphic Distributions and Voronoi Summation: Examples. **Direct A prerequisites:** `gln-automorphic-representations-and-rankin-selberg-foundations`, `primitive-dirichlet-l-functions-and-functional-equations`. **B prerequisite:** `gl3-automorphic-distributions-voronoi-and-l-functions-examples` requires `gl3-automorphic-distributions-voronoi-and-l-functions`. **Inventory:** 5 A items; 1 B items. Contract and source detail: [R4 automorphic/spectral dossier](number-theory-scaffolds-2026-10-23/analytic/r4-automorphic-spectral.md) and [R4 source index](number-theory-scaffolds-2026-10-23/analytic/r4-sources/source-index.md).

A-page ordered contracts:

- `def-full-level-gl3-automorphic-distribution` (definition) — Full-Level GL3 Automorphic Distribution. Item suppliers: `def-unitary-cuspidal-generic-gln-representation`.
- `thm-gl3-heisenberg-fourier-expansion` (theorem) — Heisenberg Fourier Expansion of a GL3 Automorphic Distribution. Item suppliers: `def-full-level-gl3-automorphic-distribution`.
- `thm-gl3-voronoi-summation-full-level` (theorem) — GL3 Voronoi Summation at Full Level. Item suppliers: `thm-gl3-heisenberg-fourier-expansion`.
- `def-standard-gl3-l-function-and-dirichlet-twist` (definition) — Standard GL3 L-Function and Primitive Dirichlet Twist. Item suppliers: `def-full-level-gl3-automorphic-distribution`, `def-primitive-dirichlet-character-and-conductor`.
- `thm-gl3-standard-and-twisted-l-function-functional-equation` (theorem) — Analytic Continuation and Functional Equation for Standard and Twisted GL3 L-Functions. Item suppliers: `def-standard-gl3-l-function-and-dirichlet-twist`, `thm-gl3-heisenberg-fourier-expansion`.

B-page examples/status contracts:

- `ex-gl3-voronoi-with-primitive-dirichlet-twist` (example) — A Primitive-Character-Twisted GL3 Voronoi Sum. Item suppliers: `thm-gl3-voronoi-summation-full-level`, `thm-gl3-standard-and-twisted-l-function-functional-equation`.

#### gln-rankin-selberg-local-integrals-and-functional-equations / gln-rankin-selberg-local-integrals-and-functional-equations-examples

**A:** GL(n+1) × GL(n) Rankin–Selberg Local Integrals and Functional Equations. **B:** GL(n+1) × GL(n) Rankin–Selberg Local Theory: Examples. **Direct A prerequisites:** `gln-automorphic-representations-and-rankin-selberg-foundations`. **B prerequisite:** `gln-rankin-selberg-local-integrals-and-functional-equations-examples` requires `gln-rankin-selberg-local-integrals-and-functional-equations`. **Inventory:** 18 A items; 2 B items. Contract and source detail: [R4 automorphic/spectral dossier](number-theory-scaffolds-2026-10-23/analytic/r4-automorphic-spectral.md) and [R4 source index](number-theory-scaffolds-2026-10-23/analytic/r4-sources/source-index.md).

A-page ordered contracts:

- `def-gln-generic-whittaker-model` (definition) — Generic Whittaker Model for GL(n). Item suppliers: `def-unitary-cuspidal-generic-gln-representation`.
- `def-local-rankin-selberg-integral-for-gln-times-glm` (definition) — Local Rankin–Selberg Integrals for GL(r) × GL(t), 1 ≤ t ≤ r. Item suppliers: `def-gln-generic-whittaker-model`.
- `def-unramified-satake-parameter-for-gln` (definition) — Unramified Satake Parameter for GL(n). Item suppliers: `def-unitary-cuspidal-generic-gln-representation`.
- `thm-jpss-nonarchimedean-local-rankin-selberg-functional-equation` (theorem) — JPSS Nonarchimedean Local Rankin–Selberg Factors and Functional Equation. Item suppliers: `def-local-rankin-selberg-integral-for-gln-times-glm`.
- `thm-jpss-local-rankin-selberg-multiplicativity-for-induced-representations` (theorem) — JPSS Multiplicativity of Local Rankin–Selberg Factors. Item suppliers: `thm-jpss-nonarchimedean-local-rankin-selberg-functional-equation`.
- `thm-jpss-local-square-integrable-rankin-selberg-factor` (theorem) — JPSS Local Factors for Square-Integrable GL(n) Representations. Item suppliers: `thm-jpss-nonarchimedean-local-rankin-selberg-functional-equation`.
- `thm-jpss-local-rankin-selberg-factor-via-langlands-classification` (theorem) — JPSS Local Rankin–Selberg Factors via the Langlands Classification. Item suppliers: `thm-jpss-local-rankin-selberg-multiplicativity-for-induced-representations`, `thm-jpss-local-square-integrable-rankin-selberg-factor`.
- `thm-jacquet-archimedean-local-rankin-selberg-functional-equation-and-test-vectors` (theorem) — Jacquet Archimedean Local Rankin–Selberg Functional Equation and Test Vectors. Item suppliers: `def-local-rankin-selberg-integral-for-gln-times-glm`.
- `thm-liu-su-sun-principal-series-rankin-selberg-local-functional-equation` (theorem) — Liu–Su–Sun Local Rankin–Selberg Identity for GL(n) Principal Series. Item suppliers: `def-local-rankin-selberg-integral-for-gln-times-glm`.
- `thm-li-liu-su-sun-principal-series-adjacent-rank-local-identity` (theorem) — Li–Liu–Su–Sun Adjacent-Rank Local Identity for Principal Series. Item suppliers: `def-local-rankin-selberg-integral-for-gln-times-glm`.
- `thm-kurinczuk-matringe-cuspidal-local-rankin-selberg-test-vector` (theorem) — Kurinczuk–Matringe Test Vectors for Cuspidal Local Rankin–Selberg Integrals. Item suppliers: `def-local-rankin-selberg-integral-for-gln-times-glm`.
- `thm-unramified-rankin-selberg-euler-factor-for-adjacent-ranks` (theorem) — Unramified Rankin–Selberg Euler Factor for Adjacent Ranks. Item suppliers: `def-unramified-satake-parameter-for-gln`.
- `thm-unramified-rankin-selberg-euler-factor-for-equal-ranks` (theorem) — Unramified Rankin–Selberg Euler Factor for Equal Ranks. Item suppliers: `def-unramified-satake-parameter-for-gln`.
- `thm-cogdell-global-adjacent-rank-eulerian-integral` (theorem) — Cogdell Global Eulerian Rankin–Selberg Integral for Adjacent Ranks. Item suppliers: `def-unitary-cuspidal-generic-gln-representation`, `def-gln-generic-whittaker-model`, `def-local-rankin-selberg-integral-for-gln-times-glm`.
- `thm-murase-sugano-shintani-global-rankin-selberg-integral` (theorem) — Murase–Sugano Global Shintani Integral for a GL(n) × GL(n−1) Pair. Item suppliers: `def-local-rankin-selberg-integral-for-gln-times-glm`, `thm-unramified-rankin-selberg-euler-factor-for-adjacent-ranks`.
- `thm-jacquet-archimedean-local-equal-rank-rankin-selberg-functional-equation` (theorem) — Jacquet Archimedean Local Equal-Rank Rankin–Selberg Functional Equation. Item suppliers: `def-local-rankin-selberg-integral-for-gln-times-glm`.
- `thm-cogdell-global-same-rank-rankin-selberg-analytic-continuation-and-functional-equation` (theorem) — Cogdell Global Same-Rank Rankin–Selberg Analytic Continuation and Functional Equation. Item suppliers: `def-standard-and-rankin-selberg-l-functions-on-gln`, `def-unitary-cuspidal-generic-gln-representation`, `def-local-rankin-selberg-integral-for-gln-times-glm`, `thm-jpss-nonarchimedean-local-rankin-selberg-functional-equation`, `thm-jacquet-archimedean-local-equal-rank-rankin-selberg-functional-equation`, `thm-unramified-rankin-selberg-euler-factor-for-equal-ranks`.
- `thm-cogdell-global-adjacent-rank-analytic-continuation-and-functional-equation` (theorem) — Cogdell Global Analytic Continuation, Functional Equation, and Vertical-Strip Boundedness for Adjacent Ranks. Item suppliers: `def-standard-and-rankin-selberg-l-functions-on-gln`, `thm-cogdell-global-adjacent-rank-eulerian-integral`, `thm-jpss-nonarchimedean-local-rankin-selberg-functional-equation`, `thm-jacquet-archimedean-local-rankin-selberg-functional-equation-and-test-vectors`, `thm-unramified-rankin-selberg-euler-factor-for-adjacent-ranks`.

B-page examples/status contracts:

- `ex-unramified-adjacent-rank-local-factor` (example) — An Unramified Adjacent-Rank Local L-Factor. Item suppliers: `thm-unramified-rankin-selberg-euler-factor-for-adjacent-ranks`.
- `ex-shintani-integral-local-factorization` (example) — Local Shintani Factors in a Global Rankin–Selberg Integral. Item suppliers: `thm-murase-sugano-shintani-global-rankin-selberg-integral`.

#### multiplicative-functions-in-short-intervals / multiplicative-functions-in-short-intervals-examples

**A:** Multiplicative Functions in Short Intervals. **B:** Multiplicative Functions in Short Intervals Examples. **Direct A prerequisites:** `pretentious-distance-and-multiplicative-mean-values`. **B prerequisite:** `multiplicative-functions-in-short-intervals-examples` requires `multiplicative-functions-in-short-intervals`. **Inventory:** 9 A items; 2 B items. Contract and source detail: [R5 multiplicative/metric dossier](number-theory-scaffolds-2026-10-23/analytic/r5-multiplicative-metric.md) and [R5 source register](number-theory-scaffolds-2026-10-23/analytic/r5-sources/README.md).

A-page ordered contracts:

- `def-short-interval-sum-of-an-arithmetic-function` (definition) — Short-interval sum of an arithmetic function. Item suppliers: `def-arithmetic-function`.
- `def-short-interval-mean-square-average` (definition) — Mean-square average over interval starting points. Item suppliers: `def-short-interval-sum-of-an-arithmetic-function`.
- `def-smooth-support-at-a-scale` (definition) — Multiplicative function supported on smooth integers at a scale. Item suppliers: `def-multiplicative-arithmetic-function`.
- `thm-matomaki-radziwill-mean-on-almost-all-short-intervals` (theorem) — Matomäki–Radziwiłł mean-value approximation on almost all short intervals. Item suppliers: `def-short-interval-sum-of-an-arithmetic-function`, `def-multiplicative-arithmetic-function`.
- `thm-matomaki-radziwill-bilinear-short-interval-average` (theorem) — Matomäki–Radziwiłł bilinear average in every short interval. Item suppliers: `def-short-interval-sum-of-an-arithmetic-function`, `def-multiplicative-arithmetic-function`.
- `thm-menon-liouville-twists-in-almost-all-short-intervals` (theorem) — Menon bound for character twists of Liouville in almost all short intervals. Item suppliers: `def-short-interval-mean-square-average`, `def-liouville-function`, `def-dirichlet-character-modulo-q`.
- `thm-menon-smooth-supported-functions-in-almost-all-short-intervals` (theorem) — Menon bound for smooth-supported multiplicative functions. Item suppliers: `def-short-interval-mean-square-average`, `def-halasz-minimal-pretentious-distance`, `def-smooth-support-at-a-scale`.
- `thm-menon-general-multiplicative-functions-in-almost-all-short-intervals` (theorem) — Menon bound for arbitrary 1-bounded multiplicative functions. Item suppliers: `def-short-interval-mean-square-average`, `def-halasz-minimal-pretentious-distance`, `def-multiplicative-arithmetic-function`.
- `thm-menon-short-interval-liouville-exponential-sum` (theorem) — Menon averaged exponential-sum bound for Liouville on short intervals. Item suppliers: `def-short-interval-mean-square-average`, `def-liouville-function`.

B-page examples/status contracts:

- `ex-short-interval-average-for-the-constant-function` (example) — The constant multiplicative function on a short interval. Item suppliers: `def-short-interval-sum-of-an-arithmetic-function`.
- `ex-almost-all-interval-average-is-not-a-pointwise-claim` (example) — Reading an almost-all interval estimate correctly. Item suppliers: `thm-matomaki-radziwill-mean-on-almost-all-short-intervals`.

#### khintchine-groshev-systems-of-linear-forms-and-approximation-types / khintchine-groshev-systems-of-linear-forms-and-approximation-types-examples

**A:** Khintchine–Groshev Systems of Linear Forms and Approximation Types. **B:** Khintchine–Groshev Systems of Linear Forms Examples. **Direct A prerequisites:** `metric-diophantine-approximation-and-duffin-schaeffer`. **B prerequisite:** `khintchine-groshev-systems-of-linear-forms-and-approximation-types-examples` requires `khintchine-groshev-systems-of-linear-forms-and-approximation-types`. **Inventory:** 11 A items; 2 B items. Contract and source detail: [R5 multiplicative/metric dossier](number-theory-scaffolds-2026-10-23/analytic/r5-multiplicative-metric.md) and [R5 source register](number-theory-scaffolds-2026-10-23/analytic/r5-sources/README.md).

A-page ordered contracts:

- `def-khintchine-groshev-matrix-approximation-set` (definition) — Khintchine–Groshev approximation set for systems of linear forms. Item suppliers: none.
- `def-inhomogeneous-khintchine-groshev-approximation-set` (definition) — Inhomogeneous Khintchine–Groshev approximation set. Item suppliers: `def-khintchine-groshev-matrix-approximation-set`.
- `def-simultaneous-and-dual-linear-forms-approximation` (definition) — Simultaneous and dual forms of matrix approximation. Item suppliers: `def-khintchine-groshev-matrix-approximation-set`.
- `def-primitive-linear-form-approximation-condition` (definition) — Primitive integer data in linear-forms approximation. Item suppliers: `def-khintchine-groshev-matrix-approximation-set`, `def-common-divisor-and-gcd`.
- `def-partitioned-primitive-linear-form-condition` (definition) — Partitioned primitivity condition for linear-form approximation. Item suppliers: `def-common-divisor-and-gcd`.
- `def-badly-approximable-matrix` (definition) — Badly approximable system of linear forms. Item suppliers: `def-khintchine-groshev-matrix-approximation-set`.
- `thm-khintchine-groshev-zero-full-law` (theorem) — Khintchine–Groshev zero-full law for systems of linear forms. Item suppliers: `def-khintchine-groshev-matrix-approximation-set`, `cor-first-borel-cantelli-lemma-for-events`, `thm-khintchine-monotone-metric-approximation`.
- `thm-khintchine-groshev-primitive-pairs-full-measure` (theorem) — Primitive Khintchine–Groshev divergence theorem. Item suppliers: `def-primitive-linear-form-approximation-condition`.
- `thm-khintchine-groshev-multivariable-gauge-divergence-law` (theorem) — Khintchine–Groshev divergence law for vector-dependent gauges. Item suppliers: `def-khintchine-groshev-matrix-approximation-set`, `thm-khintchine-groshev-primitive-pairs-full-measure`.
- `thm-inhomogeneous-khintchine-groshev-zero-full-law` (theorem) — Inhomogeneous Khintchine–Groshev zero-full law. Item suppliers: `def-inhomogeneous-khintchine-groshev-approximation-set`, `cor-first-borel-cantelli-lemma-for-events`.
- `thm-dani-laurent-nogueira-partitioned-khintchine-groshev-law` (theorem) — Dani–Laurent–Nogueira partitioned primitive Khintchine–Groshev law. Item suppliers: `def-inhomogeneous-khintchine-groshev-approximation-set`, `def-partitioned-primitive-linear-form-condition`, `cor-first-borel-cantelli-lemma-for-events`.

B-page examples/status contracts:

- `ex-simultaneous-versus-dual-variables` (example) — Reading simultaneous and dual variable dimensions. Item suppliers: `def-simultaneous-and-dual-linear-forms-approximation`.
- `ex-kg-divergence-thresholds-for-power-gauges` (example) — Checking the Khintchine–Groshev power-gauge threshold. Item suppliers: `thm-khintchine-groshev-zero-full-law`.

### New-page dependency layer 3

#### polynomial-weyl-sum-estimates / polynomial-weyl-sum-estimates-examples

**A:** Weyl and Efficient-Congruencing Bounds for Polynomial Exponential Sums. **B:** Examples of Polynomial Weyl-Sum Bounds. **Direct A prerequisites:** `vinogradov-mean-value-theorem`, `nested-efficient-congruencing-polynomial-mean-values`, `regular-continued-fractions-and-diophantine-approximation`, `average-orders-divisor-sums-and-representation-counts`. **B prerequisite:** `polynomial-weyl-sum-estimates-examples` requires `polynomial-weyl-sum-estimates`. **Inventory:** 5 A items; 2 B items. Contract and source detail: [R3 sums/circle-method dossier](number-theory-scaffolds-2026-10-23/analytic/r3-sums-circle-method.md), [R3 source review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/source-review.md), [noncompact entropy review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/noncompact-entropy-source-review.md), and [divisor/circle import review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/li-yang-cen-import-source-review.md).

A-page ordered contracts:

- `def-polynomial-weyl-sum` (definition) — Polynomial Weyl sum and its leading coefficient. Item suppliers: `def-exponential-character-e`.
- `lem-divisor-function-subpower-bound` (lemma) — For fixed r and ε>0, d_r(n)≪_{r,ε}n^ε. Item suppliers: none.
- `thm-dirichlet-rational-approximation-with-denominator-range` (theorem) — Dirichlet rational approximation with a chosen denominator range. Item suppliers: `lem-continued-fraction-error-bound`.
- `thm-classical-weyl-inequality` (theorem) — Weyl’s inequality from repeated differencing. Item suppliers: `def-polynomial-weyl-sum`, `thm-dirichlet-rational-approximation-with-denominator-range`, `lem-divisor-function-subpower-bound`, `thm-vdc-second-derivative-test`.
- `thm-wooley-polynomial-weyl-type-estimate` (theorem) — Efficient-congruencing Weyl-type estimate under a rational approximation to coefficient j. Item suppliers: `def-polynomial-weyl-sum`, `thm-vinogradov-mean-value-main-conjecture`, `thm-dirichlet-rational-approximation-with-denominator-range`.

B-page examples/status contracts:

- `ex-weyl-bound-for-a-monomial-phase` (example) — Weyl’s inequality for a monomial phase with a rational leading coefficient. Item suppliers: `thm-classical-weyl-inequality`.
- `ex-wooley-bound-with-a-nonleading-poorly-approximable-coefficient` (example) — Using the stronger estimate when coefficient j<k is approximated. Item suppliers: `thm-wooley-polynomial-weyl-type-estimate`.

#### relative-szemeredi-transference-theorem / relative-szemeredi-transference-theorem-examples

**A:** Szemerédi’s Theorem Relative to a Pseudorandom Measure. **B:** Pseudorandom-Measure Transference Examples. **Direct A prerequisites:** `szemeredi-finite-density-theorem`. **B prerequisite:** `relative-szemeredi-transference-theorem-examples` requires `relative-szemeredi-transference-theorem`. **Inventory:** 6 A items; 2 B items. Contract and source detail: [R3 sums/circle-method dossier](number-theory-scaffolds-2026-10-23/analytic/r3-sums-circle-method.md), [R3 source review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/source-review.md), [noncompact entropy review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/noncompact-entropy-source-review.md), and [divisor/circle import review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/li-yang-cen-import-source-review.md).

A-page ordered contracts:

- `def-linear-forms-condition-for-a-measure` (definition) — Linear-forms pseudorandomness condition. Item suppliers: none.
- `def-correlation-condition-for-a-measure` (definition) — All-moments correlation upper bound for a measure. Item suppliers: none.
- `def-k-pseudorandom-measure` (definition) — k-pseudorandom measure with GT08 parameter tuple. Item suppliers: `def-linear-forms-condition-for-a-measure`, `def-correlation-condition-for-a-measure`.
- `alg-relative-koopman-von-neumann-energy-increment` (algorithm) — Finite energy-increment decomposition into structured and U^{k−1}-uniform parts. Item suppliers: `def-k-pseudorandom-measure`, `def-gowers-uniformity-norm-on-finite-cyclic-groups`.
- `thm-sparse-generalized-von-neumann-theorem` (theorem) — Relative generalized von Neumann bound under linear-forms and correlation conditions. Item suppliers: `def-k-pseudorandom-measure`, `def-gowers-uniformity-norm-on-finite-cyclic-groups`.
- `thm-szemeredi-relative-to-a-pseudorandom-measure` (theorem) — If 0≤f≤ν and E f≥δ, then the normalized k-AP count is ≥c(k,δ)−o(1). Item suppliers: `def-k-pseudorandom-measure`, `alg-relative-koopman-von-neumann-energy-increment`, `thm-sparse-generalized-von-neumann-theorem`, `thm-szemeredi-finite-density-arithmetic-progressions`, `lem-varnavides-positive-density-of-progression-counts`.

B-page examples/status contracts:

- `ex-relative-szemeredi-in-a-pseudorandom-majorant` (example) — Apply relative Szemerédi to a dense function below a majorant. Item suppliers: `thm-szemeredi-relative-to-a-pseudorandom-measure`.
- `ex-linear-forms-condition-parameter-check` (example) — Check the parameter tuple for a fixed progression length. Item suppliers: `def-k-pseudorandom-measure`.

#### entropy-bounds-and-measure-rigidity-for-hecke-maass-forms / entropy-bounds-and-measure-rigidity-for-hecke-maass-forms-examples

**A:** Entropy Bounds and Measure Rigidity for Hecke–Maass Forms. **B:** Entropy Bounds and Measure Rigidity for Hecke–Maass Forms: Examples. **Direct A prerequisites:** `maass-forms-eisenstein-series-and-spectral-decomposition`, `classical-sieve-methods`, `minkowski-theory-and-number-field-class-groups`. **B prerequisite:** `entropy-bounds-and-measure-rigidity-for-hecke-maass-forms-examples` requires `entropy-bounds-and-measure-rigidity-for-hecke-maass-forms`. **Inventory:** 18 A items; 2 B items. Contract and source detail: [R4 automorphic/spectral dossier](number-theory-scaffolds-2026-10-23/analytic/r4-automorphic-spectral.md) and [R4 source index](number-theory-scaffolds-2026-10-23/analytic/r4-sources/source-index.md).

A-page ordered contracts:

- `def-quantum-limit-of-hecke-maass-eigenfunctions` (definition) — Quantum Limit of Hecke–Maass Eigenfunctions. Item suppliers: `def-weight-zero-maass-form-on-gamma0n`.
- `thm-burgess-character-sum-bound-cube-free-moduli` (theorem) — Burgess Character-Sum Bound for Cube-Free Moduli. Item suppliers: `def-dirichlet-character-modulo-q`.
- `thm-bourgain-lindenstrauss-burgess-bound-for-small-squareful-moduli` (theorem) — Bourgain–Lindenstrauss Burgess Corollary for a Fixed Squareful Modulus. Item suppliers: `thm-burgess-character-sum-bound-cube-free-moduli`.
- `thm-bourgain-lindenstrauss-brun-fundamental-lemma-application` (theorem) — Bourgain–Lindenstrauss Application of Brun’s Sieve with Remainder Term. Item suppliers: `thm-brun-combinatorial-sieve-inequalities`.
- `def-unimodular-lattice-in-r2` (definition) — Unimodular Lattice in R². Item suppliers: `def-full-euclidean-lattice-and-covolume`.
- `thm-mahler-compactness-and-split-orbit-escape` (theorem) — Mahler Compactness and Split-Eigenvector Escape in the Corrected Entropy Argument. Item suppliers: `def-unimodular-lattice-in-r2`.
- `thm-bourgain-lindenstrauss-corrected-plaque-mass-or-flow-escape` (theorem) — Bourgain–Lindenstrauss Corrected Plaque-Mass or Flow-Escape Alternative. Item suppliers: `def-quantum-limit-of-hecke-maass-eigenfunctions`, `thm-mahler-compactness-and-split-orbit-escape`.
- `thm-bourgain-lindenstrauss-geodesic-flow-maximal-inequality` (theorem) — Geodesic-Flow Maximal Inequality for the Corrected Entropy Alternative. Item suppliers: `thm-bourgain-lindenstrauss-corrected-plaque-mass-or-flow-escape`.
- `thm-bourgain-lindenstrauss-local-dimension-implies-entropy` (theorem) — Local Dimension Bound Implies Geodesic-Flow Entropy Bound. Item suppliers: `thm-bourgain-lindenstrauss-corrected-plaque-mass-or-flow-escape`.
- `thm-bourgain-lindenstrauss-positive-entropy-for-arithmetic-quantum-limits` (theorem) — Positive Entropy for Arithmetic Hecke Quantum Limits. Item suppliers: `def-weight-zero-maass-form-on-gamma0n`, `def-quantum-limit-of-hecke-maass-eigenfunctions`, `thm-hecke-preserves-cuspidality-on-congruence-subgroups`, `thm-hecke-adjoint-and-commuting-relations-congruence-forms`, `thm-bourgain-lindenstrauss-burgess-bound-for-small-squareful-moduli`, `thm-bourgain-lindenstrauss-brun-fundamental-lemma-application`, `thm-bourgain-lindenstrauss-corrected-plaque-mass-or-flow-escape`, `thm-bourgain-lindenstrauss-geodesic-flow-maximal-inequality`, `thm-mahler-compactness-and-split-orbit-escape`, `thm-bourgain-lindenstrauss-local-dimension-implies-entropy`, `thm-chebyshev-prime-counting-bounds`.
- `thm-lindenstrauss-hecke-eigenfunction-measures-are-p-adically-recurrent` (theorem) — Hecke Eigenfunction Measures Are p-Adically Recurrent. Item suppliers: `def-quantum-limit-of-hecke-maass-eigenfunctions`, `def-weight-zero-maass-form-on-gamma0n`, `def-hecke-operator-on-congruence-forms`.
- `thm-margulis-tomanov-subordinate-partition-entropy-formula` (theorem) — Margulis–Tomanov Subordinate Partition and Entropy Formula. Item suppliers: `def-weight-zero-maass-form-on-gamma0n`.
- `thm-lindenstrauss-horocycle-recurrence-from-positive-entropy` (theorem) — Horocycle Recurrence from Positive Geodesic-Flow Entropy. Item suppliers: `thm-margulis-tomanov-subordinate-partition-entropy-formula`.
- `lem-ratner-h-property-for-sl2-horocycle-flow` (lemma) — Ratner H-Property for the SL2 Horocycle Flow. Item suppliers: `def-weight-zero-maass-form-on-gamma0n`.
- `thm-lindenstrauss-besicovitch-maximal-inequality-for-leafwise-conditionals` (theorem) — Lindenstrauss Appendix-A Besicovitch Maximal Inequality for Leafwise Conditionals. Item suppliers: none.
- `thm-lindenstrauss-positive-entropy-recurrence-measure-rigidity` (theorem) — Lindenstrauss Measure Rigidity from Positive Entropy and Recurrence. Item suppliers: `thm-bourgain-lindenstrauss-positive-entropy-for-arithmetic-quantum-limits`, `thm-lindenstrauss-hecke-eigenfunction-measures-are-p-adically-recurrent`, `thm-lindenstrauss-horocycle-recurrence-from-positive-entropy`, `lem-ratner-h-property-for-sl2-horocycle-flow`, `thm-lindenstrauss-besicovitch-maximal-inequality-for-leafwise-conditionals`.
- `thm-lindenstrauss-que-for-compact-arithmetic-surfaces` (theorem) — Arithmetic QUE for Compact Arithmetic Surfaces. Item suppliers: `thm-lindenstrauss-positive-entropy-recurrence-measure-rigidity`.
- `thm-lindenstrauss-que-up-to-escape-of-mass-for-congruence-surfaces` (theorem) — Arithmetic QUE up to Escape of Mass for Congruence Surfaces. Item suppliers: `thm-lindenstrauss-positive-entropy-recurrence-measure-rigidity`.

B-page examples/status contracts:

- `ex-compact-arithmetic-surface-hecke-que` (example) — Hecke QUE on a Compact Arithmetic Surface. Item suppliers: `thm-lindenstrauss-que-for-compact-arithmetic-surfaces`.
- `ex-noncompact-congruence-surface-limit-up-to-mass-loss` (example) — A Noncompact Congruence-Surface Limit up to Possible Mass Loss. Item suppliers: `thm-lindenstrauss-que-up-to-escape-of-mass-for-congruence-surfaces`.

#### kuznetsov-trace-formula-and-maass-hecke-statistics / kuznetsov-trace-formula-and-maass-hecke-statistics-examples

**A:** Kuznetsov Trace Formula and Maass Hecke Statistics. **B:** Kuznetsov Trace Formula and Maass Hecke Statistics: Examples. **Direct A prerequisites:** `maass-forms-eisenstein-series-and-spectral-decomposition`. **B prerequisite:** `kuznetsov-trace-formula-and-maass-hecke-statistics-examples` requires `kuznetsov-trace-formula-and-maass-hecke-statistics`. **Inventory:** 5 A items; 2 B items. Contract and source detail: [R4 automorphic/spectral dossier](number-theory-scaffolds-2026-10-23/analytic/r4-automorphic-spectral.md) and [R4 source index](number-theory-scaffolds-2026-10-23/analytic/r4-sources/source-index.md).

A-page ordered contracts:

- `def-kloosterman-sum-modulus` (definition) — Kloosterman Sum at a Modulus. Item suppliers: `def-congruence-subgroup-of-sl2-z`.
- `def-kuznetsov-bessel-transform` (definition) — Kuznetsov Bessel Transform. Item suppliers: `def-maass-spectral-parameter`.
- `thm-kuznetsov-trace-formula-level-and-character` (theorem) — Kuznetsov Trace Formula at Congruence Level. Item suppliers: `def-kloosterman-sum-modulus`, `def-kuznetsov-bessel-transform`, `thm-spectral-decomposition-l2-congruence-surface`.
- `thm-kuznetsov-trace-formula-decaying-test-functions` (theorem) — Kuznetsov Formula for Strip-Holomorphic Decaying Test Functions. Item suppliers: `thm-kuznetsov-trace-formula-level-and-character`.
- `thm-vertical-sato-tate-for-maass-forms-in-level-aspect` (theorem) — Vertical Sato–Tate for Maass Forms in the Level Aspect. Item suppliers: `thm-kuznetsov-trace-formula-level-and-character`, `thm-spectral-decomposition-l2-congruence-surface`.

B-page examples/status contracts:

- `ex-kuznetsov-prime-coefficient-average` (example) — A Prime Hecke-Coefficient Average from Kuznetsov. Item suppliers: `thm-kuznetsov-trace-formula-level-and-character`.
- `ex-vertical-sato-tate-coprime-index-case` (example) — The Sato–Tate Limit When the Fixed Index Is Coprime to the Prime. Item suppliers: `thm-vertical-sato-tate-for-maass-forms-in-level-aspect`.

#### gl2-hybrid-subconvexity-for-character-twists-and-rankin-selberg-families / gl2-hybrid-subconvexity-for-character-twists-and-rankin-selberg-families-examples

**A:** GL2 Hybrid Subconvexity for Character Twists and Rankin–Selberg Families. **B:** GL2 Hybrid Subconvexity: Examples. **Direct A prerequisites:** `gl2-rankin-selberg-l-functions-and-functional-equations`, `maass-forms-eisenstein-series-and-spectral-decomposition`. **B prerequisite:** `gl2-hybrid-subconvexity-for-character-twists-and-rankin-selberg-families-examples` requires `gl2-hybrid-subconvexity-for-character-twists-and-rankin-selberg-families`. **Inventory:** 3 A items; 2 B items. Contract and source detail: [R4 automorphic/spectral dossier](number-theory-scaffolds-2026-10-23/analytic/r4-automorphic-spectral.md) and [R4 source index](number-theory-scaffolds-2026-10-23/analytic/r4-sources/source-index.md).

A-page ordered contracts:

- `def-analytic-conductor-of-a-gl2-automorphic-representation` (definition) — Analytic Conductor of a GL2 Automorphic Representation. Item suppliers: `def-standard-l-function-of-a-gl2-eigenform`.
- `thm-michel-venkatesh-subconvexity-for-gl1-and-gl2` (theorem) — Michel–Venkatesh Subconvexity for GL1 and GL2 L-Functions. Item suppliers: `def-analytic-conductor-of-a-gl2-automorphic-representation`, `thm-standard-gl2-l-function-analytic-continuation-and-functional-equation`.
- `thm-michel-venkatesh-subconvexity-for-gl2-rankin-selberg` (theorem) — Michel–Venkatesh Subconvexity for GL2 Rankin–Selberg L-Functions. Item suppliers: `def-analytic-conductor-of-a-gl2-automorphic-representation`, `thm-gl2-rankin-selberg-unfolding-and-functional-equation`, `thm-spectral-decomposition-l2-congruence-surface`.

B-page examples/status contracts:

- `ex-michel-venkatesh-fixed-second-factor-family` (example) — A GL2 Family with Fixed Second Rankin–Selberg Factor. Item suppliers: `thm-michel-venkatesh-subconvexity-for-gl2-rankin-selberg`.
- `ex-michel-venkatesh-gl1-twist-aspect` (example) — A GL1 Twist-Aspect Specialization. Item suppliers: `thm-michel-venkatesh-subconvexity-for-gl1-and-gl2`.

#### glnplus1-gln-relative-trace-formula-and-level-moments / glnplus1-gln-relative-trace-formula-and-level-moments-examples

**A:** GL(n+1) × GL(n) Relative Trace Formula and Level Moments. **B:** GL(n+1) × GL(n) Relative Trace Formula: Examples. **Direct A prerequisites:** `gln-rankin-selberg-local-integrals-and-functional-equations`. **B prerequisite:** `glnplus1-gln-relative-trace-formula-and-level-moments-examples` requires `glnplus1-gln-relative-trace-formula-and-level-moments`. **Inventory:** 7 A items; 2 B items. Contract and source detail: [R4 automorphic/spectral dossier](number-theory-scaffolds-2026-10-23/analytic/r4-automorphic-spectral.md) and [R4 source index](number-theory-scaffolds-2026-10-23/analytic/r4-sources/source-index.md).

A-page ordered contracts:

- `def-glnplus1-gln-period-and-relative-trace-kernel` (definition) — GL(n+1) × GL(n) Period and Relative Trace Kernel. Item suppliers: `def-unitary-cuspidal-generic-gln-representation`.
- `thm-yang-2023-spectral-expansion-of-relative-kernel` (theorem) — Yang Spectral Expansion of the Relative Kernel. Item suppliers: `def-glnplus1-gln-period-and-relative-trace-kernel`, `thm-cogdell-global-adjacent-rank-analytic-continuation-and-functional-equation`.
- `thm-yang-2023-regularization-and-singularity-matching` (theorem) — Yang Relative-Trace Regularization and Singularity Matching. Item suppliers: `def-glnplus1-gln-period-and-relative-trace-kernel`.
- `thm-yang-relative-trace-formula-glnplus1-gln` (theorem) — Yang Relative Trace Formula for GL(n+1) × GL(n). Item suppliers: `thm-yang-2023-spectral-expansion-of-relative-kernel`, `thm-yang-2023-regularization-and-singularity-matching`.
- `thm-yang-level-aspect-second-moment-glnplus1-gln` (theorem) — Yang Level-Aspect Second Moment for GL(n+1) × GL(n). Item suppliers: `thm-yang-relative-trace-formula-glnplus1-gln`, `thm-cogdell-global-adjacent-rank-analytic-continuation-and-functional-equation`.
- `cor-yang-level-moment-compact-archimedean-window` (corollary) — Compact Archimedean Window Consequence of the Level Moment. Item suppliers: `thm-yang-level-aspect-second-moment-glnplus1-gln`.
- `thm-yang-qualitative-simultaneous-nonvanishing-glnplus1-gln` (theorem) — Yang Qualitative Simultaneous Nonvanishing for GL(n+1) × GL(n). Item suppliers: `thm-yang-relative-trace-formula-glnplus1-gln`, `thm-yang-level-aspect-second-moment-glnplus1-gln`.

B-page examples/status contracts:

- `ex-yang-level-moment-fixed-unramified-gln-representation` (example) — A Level Family with Fixed Everywhere-Unramified GL(n) Data. Item suppliers: `thm-yang-level-aspect-second-moment-glnplus1-gln`.
- `ex-yang-qualitative-nonvanishing-prescribed-family` (example) — A Prescribed Family Covered by Qualitative Nonvanishing. Item suppliers: `thm-yang-qualitative-simultaneous-nonvanishing-glnplus1-gln`.

#### multiplicative-correlations-and-chowla / multiplicative-correlations-and-chowla-examples

**A:** Multiplicative Correlations and Chowla. **B:** Multiplicative Correlations and Chowla Examples. **Direct A prerequisites:** `multiplicative-functions-in-short-intervals`. **B prerequisite:** `multiplicative-correlations-and-chowla-examples` requires `multiplicative-correlations-and-chowla`. **Inventory:** 7 A items; 2 B items. Contract and source detail: [R5 multiplicative/metric dossier](number-theory-scaffolds-2026-10-23/analytic/r5-multiplicative-metric.md) and [R5 source register](number-theory-scaffolds-2026-10-23/analytic/r5-sources/README.md).

A-page ordered contracts:

- `def-fixed-shift-liouville-correlation-average` (definition) — Fixed-shift Liouville correlation average. Item suppliers: `def-liouville-function`.
- `def-averaged-shift-liouville-correlation` (definition) — Shift-averaged Liouville correlation average. Item suppliers: `def-liouville-function`.
- `def-logarithmic-liouville-correlation-average` (definition) — Logarithmically averaged Liouville correlation. Item suppliers: `def-liouville-function`.
- `op-fixed-shift-chowla-conjecture` (open-problem) — Fixed-shift Chowla cancellation. Item suppliers: `def-liouville-function`, `def-fixed-shift-liouville-correlation-average`.
- `thm-matomaki-radziwill-tao-averaged-chowla` (theorem) — Matomäki–Radziwiłł–Tao Chowla correlation on average over shifts. Item suppliers: `def-averaged-shift-liouville-correlation`, `def-liouville-function`, `def-short-interval-sum-of-an-arithmetic-function`.
- `thm-tao-logarithmically-averaged-two-point-chowla` (theorem) — Tao logarithmically averaged two-point Chowla theorem. Item suppliers: `def-logarithmic-liouville-correlation-average`, `def-liouville-function`.
- `thm-menon-improved-shift-averaged-chowla-bound` (theorem) — Menon improved shift-averaged Chowla bound. Item suppliers: `def-averaged-shift-liouville-correlation`, `def-liouville-function`, `thm-menon-short-interval-liouville-exponential-sum`.

B-page examples/status contracts:

- `ex-fixed-and-shift-averaged-liouville-correlations` (example) — Fixed-shift and shift-averaged correlation conventions. Item suppliers: `def-fixed-shift-liouville-correlation-average`, `def-averaged-shift-liouville-correlation`.
- `ex-logarithmic-weight-versus-natural-average` (example) — Logarithmic weight versus natural averaging. Item suppliers: `def-logarithmic-liouville-correlation-average`.

#### smooth-numbers-and-dickman-function / smooth-numbers-and-dickman-function-examples

**A:** Smooth Numbers and the Dickman Function. **B:** Smooth Numbers and Dickman Function Examples. **Direct A prerequisites:** `multiplicative-functions-in-short-intervals`. **B prerequisite:** `smooth-numbers-and-dickman-function-examples` requires `smooth-numbers-and-dickman-function`. **Inventory:** 5 A items; 2 B items. Contract and source detail: [R5 multiplicative/metric dossier](number-theory-scaffolds-2026-10-23/analytic/r5-multiplicative-metric.md) and [R5 source register](number-theory-scaffolds-2026-10-23/analytic/r5-sources/README.md).

A-page ordered contracts:

- `def-largest-prime-factor` (definition) — Largest prime factor of an integer. Item suppliers: `thm-fundamental-theorem-of-arithmetic`.
- `def-y-smooth-integer-and-smooth-counting-function` (definition) — Y-smooth integers and their counting function. Item suppliers: `def-largest-prime-factor`.
- `def-dickman-de-brujin-function` (definition) — Dickman–de Bruijn function. Item suppliers: none.
- `thm-dickman-uniform-smooth-number-asymptotic` (theorem) — Uniform Dickman asymptotic for smooth-number counting. Item suppliers: `def-y-smooth-integer-and-smooth-counting-function`, `def-dickman-de-brujin-function`, `thm-first-mertens-theorem-for-primes`.
- `cor-smooth-number-density-in-almost-all-growing-short-intervals` (corollary) — Smooth-number asymptotic in almost all growing short intervals. Item suppliers: `def-short-interval-sum-of-an-arithmetic-function`, `def-y-smooth-integer-and-smooth-counting-function`, `def-dickman-de-brujin-function`, `thm-matomaki-radziwill-mean-on-almost-all-short-intervals`.

B-page examples/status contracts:

- `ex-dickman-function-on-the-first-two-unit-intervals` (example) — Evaluating the Dickman function from zero to two. Item suppliers: `def-dickman-de-brujin-function`.
- `ex-smooth-count-at-the-endpoint-y-equals-x` (example) — The endpoint y equals x in smooth-number counting. Item suppliers: `def-y-smooth-integer-and-smooth-counting-function`, `thm-dickman-uniform-smooth-number-asymptotic`.

#### projective-height-counting-over-number-fields / projective-height-counting-over-number-fields-examples

**A:** Projective Height Counting over Number Fields. **B:** Projective Height Counting over Number Fields Examples. **Direct A prerequisites:** `dedekind-zeta-and-split-prime-density`, `weil-heights-and-northcott-finiteness`. **B prerequisite:** `projective-height-counting-over-number-fields-examples` requires `projective-height-counting-over-number-fields`. **Inventory:** 4 A items; 2 B items. Contract and source detail: [R5 multiplicative/metric dossier](number-theory-scaffolds-2026-10-23/analytic/r5-multiplicative-metric.md) and [R5 source register](number-theory-scaffolds-2026-10-23/analytic/r5-sources/README.md).

A-page ordered contracts:

- `def-projective-height-counting-function` (definition) — Projective-space point count ordered by absolute multiplicative height. Item suppliers: `def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field`.
- `def-schanuel-constant` (definition) — Schanuel constant for projective-space counting. Item suppliers: `def-number-field`, `def-archimedean-embeddings-and-number-field-signature`, `def-number-field-regulator`, `def-discriminant-of-a-number-field-basis-and-order`, `def-ideal-class-group-of-a-domain`, `thm-finiteness-of-the-number-field-class-group`, `lem-roots-of-unity-in-a-number-field-are-finite`.
- `thm-schanuel-height-counting-in-projective-space-over-a-number-field` (theorem) — Schanuel asymptotic for projective points over a fixed number field. Item suppliers: `def-projective-height-counting-function`, `def-schanuel-constant`, `def-dedekind-zeta-function`, `def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field`.
- `cor-rational-projective-space-height-count` (corollary) — Rational points of bounded height on projective space. Item suppliers: `thm-schanuel-height-counting-in-projective-space-over-a-number-field`.

B-page examples/status contracts:

- `ex-height-counting-on-the-rational-projective-line` (example) — The absolute-height count on the rational projective line. Item suppliers: `cor-rational-projective-space-height-count`.
- `ex-relative-and-absolute-height-exponents-over-a-quadratic-field` (example) — Changing relative and absolute height conventions over a quadratic field. Item suppliers: `thm-schanuel-height-counting-in-projective-space-over-a-number-field`.

#### determinant-method-and-rational-point-counting / determinant-method-and-rational-point-counting-examples

**A:** Determinant Method and Rational-Point Counting. **B:** Determinant Method and Rational-Point Counting Examples. **Direct A prerequisites:** `plane-curves-local-intersection-multiplicity-and-bezout`, `weil-heights-and-northcott-finiteness`. **B prerequisite:** `determinant-method-and-rational-point-counting-examples` requires `determinant-method-and-rational-point-counting`. **Inventory:** 7 A items; 2 B items. Contract and source detail: [R5 multiplicative/metric dossier](number-theory-scaffolds-2026-10-23/analytic/r5-multiplicative-metric.md) and [R5 source register](number-theory-scaffolds-2026-10-23/analytic/r5-sources/README.md).

A-page ordered contracts:

- `def-primitive-projective-coordinate-representative` (definition) — Primitive normalized representative of a rational projective point. Item suppliers: `def-projective-space-points`, `def-common-divisor-and-gcd`.
- `def-coefficient-height-of-an-integral-form` (definition) — Coefficient height of an integral homogeneous form. Item suppliers: `def-homogeneous-polynomial-and-homogeneous-ideal`.
- `def-anisotropic-box-and-monomial-scale-parameters` (definition) — Anisotropic projective box and monomial scale parameters. Item suppliers: `def-primitive-projective-coordinate-representative`, `def-coefficient-height-of-an-integral-form`.
- `lem-lattice-point-count-in-a-box-from-a-lattice-basis` (lemma) — Lattice-point bound in a coordinate box from basis-coordinate bounds. Item suppliers: `def-full-euclidean-lattice-and-covolume`.
- `thm-heath-brown-determinant-method-auxiliary-form-cover` (theorem) — Bounded-degree auxiliary forms cover rational points on an integral hypersurface. Item suppliers: `def-anisotropic-box-and-monomial-scale-parameters`, `lem-lattice-point-count-in-a-box-from-a-lattice-basis`, `def-degree-projective-hypersurface`.
- `thm-heath-brown-plane-curve-coefficient-height-alternative` (theorem) — Coefficient-height alternative for a plane curve with many rational points. Item suppliers: `def-coefficient-height-of-an-integral-form`, `def-primitive-projective-coordinate-representative`.
- `thm-heath-brown-anisotropic-plane-curve-rational-point-bound` (theorem) — Heath-Brown anisotropic rational-point bound for a projective plane curve. Item suppliers: `thm-heath-brown-determinant-method-auxiliary-form-cover`, `thm-heath-brown-plane-curve-coefficient-height-alternative`, `cor-projective-plane-bezout-length-form`, `def-plane-projective-curve`.

B-page examples/status contracts:

- `ex-monomial-scale-parameters-for-a-ternary-form` (example) — Monomial scale parameters in an unequal ternary box. Item suppliers: `def-anisotropic-box-and-monomial-scale-parameters`.
- `ex-determinant-method-bound-for-a-projective-plane-conic` (example) — Applying the plane-curve bound to a conic in a box. Item suppliers: `thm-heath-brown-anisotropic-plane-curve-rational-point-bound`.

#### hausdorff-metric-diophantine-approximation / hausdorff-metric-diophantine-approximation-examples

**A:** Hausdorff Metric Diophantine Approximation. **B:** Hausdorff Metric Diophantine Approximation Examples. **Direct A prerequisites:** `khintchine-groshev-systems-of-linear-forms-and-approximation-types`, `hausdorff-measure-and-hausdorff-dimension`. **B prerequisite:** `hausdorff-metric-diophantine-approximation-examples` requires `hausdorff-metric-diophantine-approximation`. **Inventory:** 19 A items; 2 B items. Contract and source detail: [R5 multiplicative/metric dossier](number-theory-scaffolds-2026-10-23/analytic/r5-multiplicative-metric.md) and [R5 source register](number-theory-scaffolds-2026-10-23/analytic/r5-sources/README.md).

A-page ordered contracts:

- `def-hausdorff-dimension-function-and-gauge-measure` (definition) — Dimension functions and Hausdorff gauge measures. Item suppliers: `def-hausdorff-measure`.
- `def-limsup-of-shrinking-balls-in-a-metric-space` (definition) — Limsup set of a sequence of shrinking metric balls. Item suppliers: `def-hausdorff-dimension-function-and-gauge-measure`.
- `def-doubling-gauge-and-locally-regular-hausdorff-measure` (definition) — Doubling gauge and local Hausdorff-measure regularity. Item suppliers: `def-hausdorff-dimension-function-and-gauge-measure`.
- `def-gauge-transformed-ball-in-a-metric-space` (definition) — Gauge-transformed ball in a metric space. Item suppliers: `def-limsup-of-shrinking-balls-in-a-metric-space`, `def-doubling-gauge-and-locally-regular-hausdorff-measure`.
- `def-conjectural-cantor-dimension-candidate` (definition) — Conjectural Jarník–Besicovitch dimension candidate on the middle-third Cantor set. Item suppliers: `def-hausdorff-dimension`, `thm-cantor-set-hausdorff-dimension-and-exact-measure`.
- `thm-mass-transference-principle-on-regular-metric-spaces` (theorem) — Mass transference principle on locally regular metric spaces. Item suppliers: `def-limsup-of-shrinking-balls-in-a-metric-space`, `def-doubling-gauge-and-locally-regular-hausdorff-measure`, `def-gauge-transformed-ball-in-a-metric-space`, `def-hausdorff-dimension-function-and-gauge-measure`, `thm-hausdorff-mass-distribution-principle`.
- `def-limsup-tubes-about-affine-subspaces` (definition) — Limsup sets of shrinking neighborhoods of affine subspaces. Item suppliers: none.
- `def-power-rate-well-approximable-set` (definition) — Power-rate well-approximable set on the unit interval. Item suppliers: `def-rational-approximation-limsup-set`.
- `thm-mass-transference-principle-for-systems-of-linear-forms` (theorem) — Mass transference principle for limsup sets of affine planes. Item suppliers: `def-hausdorff-dimension-function-and-gauge-measure`, `def-limsup-tubes-about-affine-subspaces`, `thm-hausdorff-mass-distribution-principle`, `thm-hausdorff-n-measure-is-proportional-to-lebesgue-measure`.
- `thm-khintchine-jarnik-law-for-monotone-approximation` (theorem) — Khintchine–Jarník zero-full law for monotone rational approximation. Item suppliers: `def-rational-approximation-limsup-set`, `def-hausdorff-dimension-function-and-gauge-measure`, `thm-khintchine-monotone-metric-approximation`, `thm-mass-transference-principle-for-systems-of-linear-forms`.
- `thm-duffin-schaeffer-hausdorff-measure-zero-full-law` (theorem) — Duffin–Schaeffer zero-full law for Hausdorff measures. Item suppliers: `def-reduced-rational-approximation-limsup-set`, `def-unit-group-modulo-n-and-euler-totient`, `def-hausdorff-dimension-function-and-gauge-measure`, `thm-duffin-schaeffer-reduced-approximation-theorem`, `thm-mass-transference-principle-for-systems-of-linear-forms`.
- `thm-jarnik-besicovitch-dimension-on-the-line` (theorem) — Jarník–Besicovitch dimension formula on the line. Item suppliers: `def-power-rate-well-approximable-set`, `def-hausdorff-dimension-function-and-gauge-measure`, `thm-dirichlet-rational-approximation-with-bounded-denominator`, `thm-mass-transference-principle-for-systems-of-linear-forms`.
- `def-distorted-inhomogeneous-linear-form-limsup-set` (definition) — Inhomogeneous linear-form limsup set with a distortion matrix. Item suppliers: `def-inhomogeneous-khintchine-groshev-approximation-set`.
- `thm-general-hausdorff-transfer-for-distorted-inhomogeneous-linear-forms` (theorem) — Hausdorff transfer for inhomogeneous linear forms with distortion. Item suppliers: `def-distorted-inhomogeneous-linear-form-limsup-set`, `def-hausdorff-dimension-function-and-gauge-measure`, `thm-mass-transference-principle-for-systems-of-linear-forms`.
- `thm-khintchine-groshev-hausdorff-measure-zero-full-law` (theorem) — Khintchine–Groshev zero-full law for Hausdorff measures. Item suppliers: `def-khintchine-groshev-matrix-approximation-set`, `def-hausdorff-dimension-function-and-gauge-measure`, `thm-khintchine-groshev-zero-full-law`, `thm-mass-transference-principle-for-systems-of-linear-forms`.
- `thm-jarnik-besicovitch-dimension-for-linear-forms` (theorem) — Jarník–Besicovitch dimension formula for systems of linear forms. Item suppliers: `def-khintchine-groshev-matrix-approximation-set`, `def-hausdorff-dimension-function-and-gauge-measure`, `thm-khintchine-groshev-hausdorff-measure-zero-full-law`.
- `op-jarnik-besicovitch-dimension-on-middle-third-cantor-set` (open-problem) — Jarník–Besicovitch dimension of well-approximable points on the middle-third Cantor set. Item suppliers: `def-power-rate-well-approximable-set`, `def-conjectural-cantor-dimension-candidate`, `def-hausdorff-dimension`, `thm-cantor-set-hausdorff-dimension-and-exact-measure`.
- `thm-khintchine-groshev-hausdorff-law-under-primitivity-constraints` (theorem) — Hausdorff Khintchine–Groshev law under primitivity constraints. Item suppliers: `def-khintchine-groshev-matrix-approximation-set`, `def-partitioned-primitive-linear-form-condition`, `def-hausdorff-dimension-function-and-gauge-measure`, `thm-dani-laurent-nogueira-partitioned-khintchine-groshev-law`, `thm-mass-transference-principle-for-systems-of-linear-forms`.
- `thm-inhomogeneous-khintchine-groshev-hausdorff-measure-law` (theorem) — Inhomogeneous Khintchine–Groshev zero-full law for Hausdorff measures. Item suppliers: `def-inhomogeneous-khintchine-groshev-approximation-set`, `def-hausdorff-dimension-function-and-gauge-measure`, `thm-inhomogeneous-khintchine-groshev-zero-full-law`, `thm-mass-transference-principle-for-systems-of-linear-forms`.

B-page examples/status contracts:

- `ex-jarnik-besicovitch-dimension-at-two-exponents` (example) — Evaluating the Jarník–Besicovitch dimensions at two exponents. Item suppliers: `thm-jarnik-besicovitch-dimension-on-the-line`, `thm-jarnik-besicovitch-dimension-for-linear-forms`.
- `ex-cantor-set-dimension-conjectural-candidate` (example) — Computing the conjectural Cantor-set dimension candidate. Item suppliers: `def-conjectural-cantor-dimension-candidate`, `thm-cantor-set-hausdorff-dimension-and-exact-measure`.

### New-page dependency layer 4

#### waring-asymptotic-formula / waring-asymptotic-formula-examples

**A:** Waring’s Asymptotic Formula from Mean-Value Bounds. **B:** Waring Examples and Local Solubility Checks. **Direct A prerequisites:** `polynomial-weyl-sum-estimates`. **B prerequisite:** `waring-asymptotic-formula-examples` requires `waring-asymptotic-formula`. **Inventory:** 5 A items; 2 B items. Contract and source detail: [R3 sums/circle-method dossier](number-theory-scaffolds-2026-10-23/analytic/r3-sums-circle-method.md), [R3 source review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/source-review.md), [noncompact entropy review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/noncompact-entropy-source-review.md), and [divisor/circle import review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/li-yang-cen-import-source-review.md).

A-page ordered contracts:

- `def-waring-representation-count` (definition) — Representations as sums of s positive k-th powers. Item suppliers: none.
- `def-waring-singular-series-and-singular-integral` (definition) — Singular series and singular integral for Waring’s problem. Item suppliers: `def-exponential-character-e`.
- `alg-circle-method-major-minor-arc-decomposition` (algorithm) — Major/minor arc decomposition for the Waring representation count. Item suppliers: `def-waring-representation-count`, `def-waring-singular-series-and-singular-integral`, `lem-continuous-torus-orthogonality-for-integer-frequencies`.
- `thm-waring-asymptotic-for-sufficiently-many-powers` (theorem) — Circle-method asymptotic for sums of sufficiently many k-th powers. Item suppliers: `alg-circle-method-major-minor-arc-decomposition`, `thm-vinogradov-mean-value-main-conjecture`, `thm-classical-weyl-inequality`.
- `thm-waring-asymptotic-variable-threshold` (theorem) — The threshold G̃(k)≤2k²+2k−3. Item suppliers: `thm-waring-asymptotic-for-sufficiently-many-powers`.

B-page examples/status contracts:

- `ex-waring-singular-series-local-obstruction` (example) — A local congruence obstruction forces the singular series to vanish. Item suppliers: `def-waring-singular-series-and-singular-integral`.
- `ex-waring-circle-method-three-cubes` (example) — Major/minor arc roles in a low-degree Waring problem. Item suppliers: `alg-circle-method-major-minor-arc-decomposition`.

#### helf-ternary-goldbach-theorem / helf-ternary-goldbach-theorem-examples

**A:** Helfgott’s Ternary Goldbach Theorem. **B:** Smoothed Major/Minor Arc and Finite-Range Goldbach Examples. **Direct A prerequisites:** `polynomial-weyl-sum-estimates`, `finite-dirichlet-l-zero-verifications`. **B prerequisite:** `helf-ternary-goldbach-theorem-examples` requires `helf-ternary-goldbach-theorem`. **Inventory:** 10 A items; 3 B items. Contract and source detail: [R3 sums/circle-method dossier](number-theory-scaffolds-2026-10-23/analytic/r3-sums-circle-method.md), [R3 source review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/source-review.md), [noncompact entropy review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/noncompact-entropy-source-review.md), and [divisor/circle import review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/li-yang-cen-import-source-review.md).

A-page ordered contracts:

- `def-smoothed-prime-exponential-sum` (definition) — S_η(α,x)=Σ_n Λ(n)e(αn)η(n/x). Item suppliers: `def-exponential-character-e`.
- `alg-helf-smoothed-major-minor-arc-combination` (algorithm) — Combine the smoothed ternary circle-method integral on major and minor arcs. Item suppliers: `def-smoothed-prime-exponential-sum`.
- `alg-finite-ternary-goldbach-verification` (algorithm) — Verify every odd n below the analytic threshold using a prime-gap or exhaustive certificate. Item suppliers: none.
- `lem-helf-general-explicit-formula-for-smoothed-dirichlet-twists` (lemma) — Explicit formula for the smoothed Dirichlet-twisted von Mangoldt sum. Item suppliers: `def-smoothed-prime-exponential-sum`.
- `thm-helf-smoothed-major-arc-dirichlet-twist` (theorem) — Explicit major-arc estimate for smoothed Λ(n)χ(n)e(δn/x). Item suppliers: `def-smoothed-prime-exponential-sum`, `lem-helf-general-explicit-formula-for-smoothed-dirichlet-twists`, `thm-platt-bounded-grh-for-primitive-dirichlet-l-functions`.
- `thm-helf-smoothed-minor-arc-prime-sum-bound` (theorem) — Explicit minor-arc bound for Helfgott’s smoothed prime exponential sum. Item suppliers: `def-smoothed-prime-exponential-sum`, `thm-wooley-polynomial-weyl-type-estimate`, `thm-vdc-second-derivative-test`.
- `thm-helf-ternary-goldbach-analytic-range` (theorem) — Every odd n≥10^{27} is a sum of three primes. Item suppliers: `alg-helf-smoothed-major-minor-arc-combination`, `thm-helf-smoothed-major-arc-dirichlet-twist`, `thm-helf-smoothed-minor-arc-prime-sum-bound`.
- `thm-finite-ternary-goldbach-certificate-is-sound` (theorem) — A checked prime-gap certificate below the threshold proves the finite remainder. Item suppliers: `alg-finite-ternary-goldbach-verification`.
- `thm-helf-ternary-goldbach` (theorem) — Every odd integer n>5 is the sum of three primes. Item suppliers: `thm-helf-ternary-goldbach-analytic-range`, `thm-finite-ternary-goldbach-certificate-is-sound`.
- `op-strong-goldbach-conjecture` (open-problem) — Every even integer greater than 2 is a sum of two primes. Item suppliers: none.

B-page examples/status contracts:

- `ex-smoothed-goldbach-major-arc-parameter-choice` (example) — Read off Helfgott’s odd/even q ranges and smoothing parameters. Item suppliers: `thm-helf-smoothed-major-arc-dirichlet-twist`.
- `ex-goldbach-finite-check-boundary` (example) — Separate the analytic n≥10^27 range from the finite verification range. Item suppliers: `thm-helf-ternary-goldbach-analytic-range`.
- `ex-strong-goldbach-open-status` (example) — Current finite verification does not prove the binary Goldbach conjecture. Item suppliers: none.

#### hecke-maass-quantum-unique-ergodicity / hecke-maass-quantum-unique-ergodicity-examples

**A:** Quantum Unique Ergodicity for Hecke–Maass Forms. **B:** Quantum Unique Ergodicity for Hecke–Maass Forms: Examples. **Direct A prerequisites:** `entropy-bounds-and-measure-rigidity-for-hecke-maass-forms`. **B prerequisite:** `hecke-maass-quantum-unique-ergodicity-examples` requires `hecke-maass-quantum-unique-ergodicity`. **Inventory:** 6 A items; 2 B items. Contract and source detail: [R4 automorphic/spectral dossier](number-theory-scaffolds-2026-10-23/analytic/r4-automorphic-spectral.md) and [R4 source index](number-theory-scaffolds-2026-10-23/analytic/r4-sources/source-index.md).

A-page ordered contracts:

- `def-quantum-limit-of-laplace-eigenfunctions` (definition) — Quantum Limit of Laplace Eigenfunctions. Item suppliers: `def-weight-zero-maass-form-on-gamma0n`, `def-hyperbolic-laplacian-on-the-upper-half-plane`.
- `def-hecke-multiplicative-maass-eigenvalue-sequence` (definition) — Hecke-Multiplicative Maass Eigenvalue Sequence. Item suppliers: `def-hecke-operator-on-congruence-forms`.
- `thm-soundararajan-hecke-multiplicative-tail-estimate` (theorem) — Soundararajan Tail Estimate for Hecke-Multiplicative Sequences. Item suppliers: `def-hecke-multiplicative-maass-eigenvalue-sequence`, `thm-chebyshev-prime-counting-bounds`.
- `thm-soundararajan-cusp-tail-mass-bound-for-hecke-maass-forms` (theorem) — Uniform Cusp-Tail Mass Bound for Full-Level Hecke–Maass Forms. Item suppliers: `thm-soundararajan-hecke-multiplicative-tail-estimate`, `thm-fourier-whittaker-expansion-maass-cusp-forms`.
- `thm-soundararajan-que-for-full-level-hecke-maass-forms` (theorem) — Quantum Unique Ergodicity for Full-Level Hecke–Maass Cusp Forms. Item suppliers: `def-quantum-limit-of-hecke-maass-eigenfunctions`, `thm-lindenstrauss-que-up-to-escape-of-mass-for-congruence-surfaces`, `thm-soundararajan-cusp-tail-mass-bound-for-hecke-maass-forms`.
- `op-que-for-maass-eigenfunctions-without-hecke-eigenfunction-hypothesis` (open-problem) — QUE without a Hecke-Eigenfunction Hypothesis. Item suppliers: `def-quantum-limit-of-laplace-eigenfunctions`.

B-page examples/status contracts:

- `ex-full-level-maass-que-for-an-eigenbasis-sequence` (example) — Full-Level Maass QUE for a Hecke-Eigenbasis Sequence. Item suppliers: `thm-soundararajan-que-for-full-level-hecke-maass-forms`.
- `ex-soundararajan-explicit-cusp-tail-estimate` (example) — The Explicit Cusp-Tail Estimate. Item suppliers: `thm-soundararajan-cusp-tail-mass-bound-for-hecke-maass-forms`.

#### glnplus1-gln-t-aspect-subconvexity / glnplus1-gln-t-aspect-subconvexity-examples

**A:** GL(n+1) × GL(n) t-Aspect Subconvexity. **B:** GL(n+1) × GL(n) t-Aspect Subconvexity: Examples. **Direct A prerequisites:** `glnplus1-gln-relative-trace-formula-and-level-moments`. **B prerequisite:** `glnplus1-gln-t-aspect-subconvexity-examples` requires `glnplus1-gln-t-aspect-subconvexity`. **Inventory:** 5 A items; 1 B items. Contract and source detail: [R4 automorphic/spectral dossier](number-theory-scaffolds-2026-10-23/analytic/r4-automorphic-spectral.md) and [R4 source index](number-theory-scaffolds-2026-10-23/analytic/r4-sources/source-index.md).

A-page ordered contracts:

- `thm-yang-2026-archimedean-microlocal-test-vector-estimates` (theorem) — Yang Archimedean Microlocal Test-Vector Estimates. Item suppliers: `thm-yang-relative-trace-formula-glnplus1-gln`.
- `thm-yang-2026-ramified-local-period-estimates` (theorem) — Yang Ramified Local Period Estimates. Item suppliers: `thm-cogdell-global-adjacent-rank-analytic-continuation-and-functional-equation`.
- `thm-yang-2026-amplified-spectral-lower-bound` (theorem) — Yang Amplified Spectral Lower Bound. Item suppliers: `thm-yang-2026-archimedean-microlocal-test-vector-estimates`, `thm-yang-2026-ramified-local-period-estimates`.
- `thm-yang-2026-regular-orbital-integral-bound` (theorem) — Yang Regular Orbital-Integral Bound. Item suppliers: `thm-yang-relative-trace-formula-glnplus1-gln`.
- `thm-yang-t-aspect-subconvexity-glnplus1-gln` (theorem) — Yang t-Aspect Subconvexity for GL(n+1) × GL(n). Item suppliers: `thm-yang-2026-amplified-spectral-lower-bound`, `thm-yang-2026-regular-orbital-integral-bound`, `thm-cogdell-global-adjacent-rank-analytic-continuation-and-functional-equation`.

B-page examples/status contracts:

- `ex-yang-tempered-isobaric-factor-improved-saving` (example) — The Improved Saving When the Isobaric Factor Is Tempered. Item suppliers: `thm-yang-t-aspect-subconvexity-glnplus1-gln`.

#### homogeneous-dynamics-and-diophantine-approximation-on-manifolds / homogeneous-dynamics-and-diophantine-approximation-on-manifolds-examples

**A:** Homogeneous Dynamics and Diophantine Approximation on Manifolds. **B:** Homogeneous Dynamics and Diophantine Approximation on Manifolds Examples. **Direct A prerequisites:** `hausdorff-metric-diophantine-approximation`, `lie-subgroups-actions-and-homogeneous-spaces`, `minkowski-theory-and-number-field-class-groups`. **B prerequisite:** `homogeneous-dynamics-and-diophantine-approximation-on-manifolds-examples` requires `homogeneous-dynamics-and-diophantine-approximation-on-manifolds`. **Inventory:** 26 A items; 4 B items. Contract and source detail: [R5 multiplicative/metric dossier](number-theory-scaffolds-2026-10-23/analytic/r5-multiplicative-metric.md) and [R5 source register](number-theory-scaffolds-2026-10-23/analytic/r5-sources/README.md).

A-page ordered contracts:

- `def-distance-to-nearest-integer` (definition) — Distance to the nearest integer. Item suppliers: none.
- `def-unimodular-lattice-space` (definition) — Space of unimodular lattices as a homogeneous quotient. Item suppliers: `def-full-euclidean-lattice-and-covolume`, `def-homogeneous-space-of-a-lie-group`.
- `def-diagonal-flow-and-matrix-lattice` (definition) — Diagonal flow and lattice attached to a matrix of linear forms. Item suppliers: `def-unimodular-lattice-space`, `def-khintchine-groshev-matrix-approximation-set`.
- `thm-dani-correspondence-for-badly-approximable-matrices` (theorem) — Dani correspondence for badly approximable systems of linear forms. Item suppliers: `def-diagonal-flow-and-matrix-lattice`, `def-badly-approximable-matrix`.
- `def-analytic-nondegenerate-point` (definition) — Nondegenerate point on a parametrized manifold. Item suppliers: none.
- `def-very-well-multiplicatively-approximable-vector` (definition) — Very well multiplicatively approximable vector. Item suppliers: `def-distance-to-nearest-integer`.
- `def-lattice-systole` (definition) — Systole of a unimodular lattice. Item suppliers: `def-unimodular-lattice-space`.
- `thm-quantitative-nondivergence-for-nondegenerate-manifold-maps` (theorem) — Quantitative nondivergence estimate for nondegenerate manifold maps. Item suppliers: `def-analytic-nondegenerate-point`, `def-unimodular-lattice-space`, `def-lattice-systole`, `def-very-well-multiplicatively-approximable-vector`.
- `def-strongly-extremal-parametrized-manifold` (definition) — Strongly extremal parametrized manifold. Item suppliers: `def-very-well-multiplicatively-approximable-vector`.
- `thm-kleinbock-margulis-strong-extremality-of-nondegenerate-manifolds` (theorem) — Strong extremality of nondegenerate manifolds. Item suppliers: `def-analytic-nondegenerate-point`, `def-strongly-extremal-parametrized-manifold`, `thm-quantitative-nondivergence-for-nondegenerate-manifold-maps`, `cor-first-borel-cantelli-lemma-for-events`.
- `def-affine-linear-form-system` (definition) — System of affine linear forms. Item suppliers: `def-khintchine-groshev-matrix-approximation-set`.
- `def-badly-approximable-affine-form-system` (definition) — Badly approximable system of affine forms. Item suppliers: `def-affine-linear-form-system`.
- `def-rational-affine-form-system` (definition) — Rational system of affine forms. Item suppliers: `def-affine-linear-form-system`.
- `def-free-unimodular-affine-lattice-space-and-diagonal-flow` (definition) — Free unimodular affine-lattice space and diagonal flow. Item suppliers: `def-unimodular-lattice-space`.
- `thm-inhomogeneous-dani-correspondence-for-affine-forms` (theorem) — Inhomogeneous Dani correspondence for badly approximable affine forms. Item suppliers: `def-rational-affine-form-system`, `def-badly-approximable-affine-form-system`, `def-free-unimodular-affine-lattice-space-and-diagonal-flow`.
- `def-expanding-horospherical-subgroup-and-orbit-avoidance` (definition) — Expanding horospherical subgroup and bounded orbit avoidance. Item suppliers: `def-free-unimodular-affine-lattice-space-and-diagonal-flow`.
- `thm-mixing-of-diagonal-flow-on-free-unimodular-affine-lattices` (theorem) — Mixing of the standard diagonal flow on free unimodular affine lattices. Item suppliers: `def-free-unimodular-affine-lattice-space-and-diagonal-flow`, `def-homogeneous-space-of-a-lie-group`.
- `thm-expanding-horospherical-avoidance-sets-are-thick` (theorem) — Thick bounded-orbit avoidance sets along expanding horospheres. Item suppliers: `def-expanding-horospherical-subgroup-and-orbit-avoidance`, `thm-mixing-of-diagonal-flow-on-free-unimodular-affine-lattices`.
- `thm-badly-approximable-affine-form-systems-are-thick` (theorem) — Badly approximable affine-form systems are thick. Item suppliers: `thm-inhomogeneous-dani-correspondence-for-affine-forms`, `thm-expanding-horospherical-avoidance-sets-are-thick`.
- `def-badly-approximable-real-number` (definition) — Badly approximable real number. Item suppliers: `def-distance-to-nearest-integer`.
- `def-kleinbock-growth-class` (definition) — Continued-fraction growth class for multiplicative approximation. Item suppliers: `def-convergents-of-regular-continued-fraction`.
- `thm-chow-technau-uniform-inhomogeneous-littlewood-type-bound` (theorem) — Chow–Technau inhomogeneous Littlewood-type bound on a full-dimensional set. Item suppliers: `def-kleinbock-growth-class`, `def-badly-approximable-real-number`, `def-distance-to-nearest-integer`, `def-hausdorff-dimension`.
- `def-littlewood-product-limsup-expression` (definition) — Littlewood multiplicative liminf expression. Item suppliers: `def-distance-to-nearest-integer`.
- `op-littlewood-conjecture` (open-problem) — Littlewood conjecture for pairs of real numbers. Item suppliers: `def-littlewood-product-limsup-expression`.
- `op-sharp-dual-jarnik-dimension-on-nondegenerate-manifolds` (open-problem) — Sharp dual Jarník–Besicovitch dimension law on nondegenerate manifolds. Item suppliers: `def-khintchine-groshev-matrix-approximation-set`, `def-analytic-nondegenerate-point`, `def-hausdorff-dimension`.
- `op-simultaneous-dimension-threshold-on-nondegenerate-manifolds` (open-problem) — Simultaneous approximation dimension threshold on nondegenerate manifolds. Item suppliers: `def-simultaneous-and-dual-linear-forms-approximation`, `def-analytic-nondegenerate-point`, `def-hausdorff-dimension`.

B-page examples/status contracts:

- `ex-dani-correspondence-for-badly-approximable-scalar` (example) — The scalar Dani correspondence for a badly approximable number. Item suppliers: `thm-dani-correspondence-for-badly-approximable-matrices`.
- `ex-littlewood-conjecture-for-a-rational-coordinate` (example) — Littlewood approximation when one coordinate is rational. Item suppliers: `def-littlewood-product-limsup-expression`, `def-distance-to-nearest-integer`.
- `ex-nondegenerate-planar-curve-extremality` (example) — Strong extremality of a nondegenerate planar curve. Item suppliers: `thm-kleinbock-margulis-strong-extremality-of-nondegenerate-manifolds`.
- `ex-chow-technau-bound-at-a-fixed-epsilon` (example) — Applying the Chow–Technau logarithmic bound. Item suppliers: `thm-chow-technau-uniform-inhomogeneous-littlewood-type-bound`.

### New-page dependency layer 5

#### standard-gln-t-aspect-subconvexity / standard-gln-t-aspect-subconvexity-examples

**A:** Standard GL(n) t-Aspect Subconvexity. **B:** Standard GL(n) t-Aspect Subconvexity: Examples. **Direct A prerequisites:** `glnplus1-gln-t-aspect-subconvexity`. **B prerequisite:** `standard-gln-t-aspect-subconvexity-examples` requires `standard-gln-t-aspect-subconvexity`. **Inventory:** 1 A items; 2 B items. Contract and source detail: [R4 automorphic/spectral dossier](number-theory-scaffolds-2026-10-23/analytic/r4-automorphic-spectral.md) and [R4 source index](number-theory-scaffolds-2026-10-23/analytic/r4-sources/source-index.md).

A-page ordered contracts:

- `cor-yang-standard-gln-t-aspect-subconvexity` (corollary) — Yang Standard GL(n) t-Aspect Subconvexity. Item suppliers: `thm-yang-t-aspect-subconvexity-glnplus1-gln`, `def-pure-isobaric-automorphic-sum`, `def-standard-and-rankin-selberg-l-functions-on-gln`.

B-page examples/status contracts:

- `ex-yang-standard-gl2-t-aspect-specialization` (example) — The Standard GL2 t-Aspect Specialization. Item suppliers: `cor-yang-standard-gln-t-aspect-subconvexity`.
- `ex-yang-standard-gl3-t-aspect-specialization` (example) — The Standard GL3 t-Aspect Specialization. Item suppliers: `cor-yang-standard-gln-t-aspect-subconvexity`.

#### glnplus1-gln-quantitative-simultaneous-nonvanishing / glnplus1-gln-quantitative-simultaneous-nonvanishing-examples

**A:** GL(n+1) × GL(n) Quantitative Simultaneous Nonvanishing. **B:** GL(n+1) × GL(n) Quantitative Nonvanishing: Examples. **Direct A prerequisites:** `glnplus1-gln-t-aspect-subconvexity`. **B prerequisite:** `glnplus1-gln-quantitative-simultaneous-nonvanishing-examples` requires `glnplus1-gln-quantitative-simultaneous-nonvanishing`. **Inventory:** 1 A items; 1 B items. Contract and source detail: [R4 automorphic/spectral dossier](number-theory-scaffolds-2026-10-23/analytic/r4-automorphic-spectral.md) and [R4 source index](number-theory-scaffolds-2026-10-23/analytic/r4-sources/source-index.md).

A-page ordered contracts:

- `thm-yang-quantitative-simultaneous-nonvanishing-glnplus1-gln` (theorem) — Yang Quantitative Simultaneous Nonvanishing for GL(n+1) × GL(n). Item suppliers: `thm-yang-relative-trace-formula-glnplus1-gln`, `thm-yang-t-aspect-subconvexity-glnplus1-gln`, `thm-cogdell-global-adjacent-rank-analytic-continuation-and-functional-equation`.

B-page examples/status contracts:

- `ex-yang-quantitative-nonvanishing-two-parameter-regimes` (example) — The Two M,T Regimes in Quantitative Nonvanishing. Item suppliers: `thm-yang-quantitative-simultaneous-nonvanishing-glnplus1-gln`.

### New-page dependency layer 7

#### deligne-trace-quasi-orthogonality / deligne-trace-quasi-orthogonality-examples

**A:** Deligne Square-Root Correlation Bound for Trace Functions. **B:** Artin–Schreier, Kummer, and Kloosterman Trace-Function Examples. **Direct A prerequisites:** `deligne-weights-and-finite-field-trace-bounds`. **B prerequisite:** `deligne-trace-quasi-orthogonality-examples` requires `deligne-trace-quasi-orthogonality`. **Inventory:** 6 A items; 3 B items. Contract and source detail: [R3 sums/circle-method dossier](number-theory-scaffolds-2026-10-23/analytic/r3-sums-circle-method.md), [R3 source review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/source-review.md), [noncompact entropy review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/noncompact-entropy-source-review.md), and [divisor/circle import review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/li-yang-cen-import-source-review.md).

A-page ordered contracts:

- `def-l-adic-middle-extension-sheaf-over-finite-field` (definition) — ℓ-adic middle-extension sheaf on P¹/F_p with ℓ≠p. Item suppliers: `def-constructible-l-adic-sheaf-on-a-scheme`, `def-lisse-l-adic-sheaf-on-a-scheme`, `def-middle-extension-l-adic-sheaf-on-a-curve`.
- `def-weight-zero-trace-function` (definition) — Frobenius trace function of a pointwise weight-zero sheaf. Item suppliers: `def-l-adic-middle-extension-sheaf-over-finite-field`, `def-frobenius-trace-function-of-a-lisse-sheaf`.
- `def-trace-function-conductor` (definition) — Conductor rank+singularities+Swan conductors. Item suppliers: `def-weight-zero-trace-function`, `def-conductor-of-a-middle-extension-sheaf-on-a-curve`.
- `thm-deligne-quasi-orthogonality-for-geometrically-irreducible-trace-functions` (theorem) — Square-root correlation bound with an isomorphic-sheaf main-term alternative. Item suppliers: `def-trace-function-conductor`, `thm-grothendieck-lefschetz-trace-formula-for-constructible-l-adic-sheaves`, `lem-gos-conductor-complexity-bound-on-the-affine-line`, `thm-deligne-weight-bound-for-compactly-supported-cohomology`, `thm-geometric-invariants-control-compact-support-degree-two`.
- `thm-kloosterman-sheaf-purity-and-conductor` (theorem) — The hyper-Kloosterman sheaf has rank n, weight zero, and conductor n+3. Item suppliers: `def-l-adic-middle-extension-sheaf-over-finite-field`, `thm-deligne-weight-bound-for-compactly-supported-cohomology`.
- `thm-weil-bound-for-hyper-kloosterman-sums` (theorem) — For n≥2, the normalized hyper-Kloosterman sum has absolute value at most n. Item suppliers: `thm-kloosterman-sheaf-purity-and-conductor`, `thm-deligne-quasi-orthogonality-for-geometrically-irreducible-trace-functions`.

B-page examples/status contracts:

- `ex-artin-schreier-trace-function` (example) — An additive character as a rank-one Artin–Schreier trace function. Item suppliers: `def-weight-zero-trace-function`.
- `ex-kummer-trace-function` (example) — A multiplicative character as a rank-one Kummer trace function. Item suppliers: `def-weight-zero-trace-function`.
- `ex-kloosterman-sum-as-a-sheaf-trace` (example) — Classical Kloosterman sums from the rank-two Kloosterman sheaf. Item suppliers: `thm-kloosterman-sheaf-purity-and-conductor`.

### New-page dependency layer 8

#### holomorphic-hecke-eigenvalue-bounds-from-etale-cohomology / holomorphic-hecke-eigenvalue-bounds-from-etale-cohomology-examples

**A:** Holomorphic Hecke Eigenvalue Bounds from Étale Cohomology. **B:** Holomorphic Hecke Eigenvalue Bounds: Examples. **Direct A prerequisites:** `congruence-modular-forms-and-hecke-operators`, `modular-forms-and-galois-representations`. **B prerequisite:** `holomorphic-hecke-eigenvalue-bounds-from-etale-cohomology-examples` requires `holomorphic-hecke-eigenvalue-bounds-from-etale-cohomology`. **Inventory:** 2 A items; 1 B items. Contract and source detail: [R4 automorphic/spectral dossier](number-theory-scaffolds-2026-10-23/analytic/r4-automorphic-spectral.md) and [R4 source index](number-theory-scaffolds-2026-10-23/analytic/r4-sources/source-index.md).

A-page ordered contracts:

- `def-normalized-full-level-holomorphic-hecke-eigenform` (definition) — Normalized Full-Level Holomorphic Hecke Eigenform. Item suppliers: `def-level-one-modular-form-and-cusp-form`.
- `thm-deligne-ramanujan-petersson-bound-for-full-level-eigenforms` (theorem) — Deligne–Ramanujan–Petersson Bound for Full-Level Eigenforms. Item suppliers: `def-normalized-full-level-holomorphic-hecke-eigenform`, `def-normalized-cuspidal-eigenform-over-gl2`, `def-continuous-l-adic-galois-representation`, `thm-lisse-l-adic-sheaves-and-continuous-pi1-representations`, `def-lisse-l-adic-sheaf-on-a-scheme`, `def-frobenius-trace-function-of-a-lisse-sheaf`, `thm-grothendieck-lefschetz-trace-formula-for-constructible-l-adic-sheaves`, `thm-unramified-galois-representation-has-well-defined-frobenius-characteristic-polynomial`, `thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform`, `thm-delignes-galois-representation-has-eigenform-frobenius-polynomial`, `thm-deligne-weight-bound-for-compactly-supported-cohomology`.

B-page examples/status contracts:

- `ex-discriminant-form-deligne-eigenvalues` (example) — The Discriminant Form and Its Deligne-Bounded Eigenvalues. Item suppliers: `thm-deligne-ramanujan-petersson-bound-for-full-level-eigenforms`, `def-modular-discriminant-and-j-invariant`.

#### selberg-eigenvalue-bounds-and-finite-verifications / selberg-eigenvalue-bounds-and-finite-verifications-examples

**A:** Selberg Eigenvalue Bounds and Finite Verifications. **B:** Selberg Eigenvalue Bounds and Finite Verifications: Examples. **Direct A prerequisites:** `maass-forms-eisenstein-series-and-spectral-decomposition`, `gln-rankin-selberg-local-integrals-and-functional-equations`, `deligne-trace-quasi-orthogonality`. **B prerequisite:** `selberg-eigenvalue-bounds-and-finite-verifications-examples` requires `selberg-eigenvalue-bounds-and-finite-verifications`. **Inventory:** 20 A items; 3 B items. Contract and source detail: [R4 automorphic/spectral dossier](number-theory-scaffolds-2026-10-23/analytic/r4-automorphic-spectral.md) and [R4 source index](number-theory-scaffolds-2026-10-23/analytic/r4-sources/source-index.md).

A-page ordered contracts:

- `def-selberg-exceptional-eigenvalue-parameter` (definition) — Exceptional Maass Eigenvalue Parameter. Item suppliers: `def-maass-spectral-parameter`.
- `thm-booker-strombergsson-general-selberg-trace-formula` (theorem) — Booker–Strömbergsson General Cofinite Trace Formula. Item suppliers: `def-maass-spectral-parameter`.
- `thm-booker-lee-strombergsson-explicit-gamma0n-twist-minimal-trace-formula` (theorem) — Booker–Lee–Strömbergsson Explicit Γ₀(N) Twist-Minimal Trace Formula. Item suppliers: `thm-booker-strombergsson-general-selberg-trace-formula`, `def-selberg-exceptional-eigenvalue-parameter`.
- `thm-booker-lee-strombergsson-twist-minimal-sieve` (theorem) — Booker–Lee–Strömbergsson Newform and Twist-Minimal Sieve. Item suppliers: `thm-booker-lee-strombergsson-explicit-gamma0n-twist-minimal-trace-formula`.
- `def-b-l-s-finite-trace-certificate-data` (definition) — Finite BLS Trace-Formula Certificate Data and Interval Inputs. Item suppliers: none.
- `alg-interval-arithmetic-selberg-eigenvalue-verification` (algorithm) — Interval-Arithmetic Verification of Finite Selberg Eigenvalue Ranges. Item suppliers: `thm-booker-lee-strombergsson-twist-minimal-sieve`, `def-b-l-s-finite-trace-certificate-data`.
- `thm-b-l-s-interval-certificate-correctness` (theorem) — Correctness and Termination of the BLS Interval Certificates. Item suppliers: `alg-interval-arithmetic-selberg-eigenvalue-verification`, `def-b-l-s-finite-trace-certificate-data`, `thm-booker-lee-strombergsson-explicit-gamma0n-twist-minimal-trace-formula`.
- `thm-booker-lee-strombergsson-finite-selberg-verification-ranges` (theorem) — Booker–Lee–Strömbergsson Finite Selberg Verification Ranges. Item suppliers: `def-selberg-exceptional-eigenvalue-parameter`, `thm-booker-lee-strombergsson-twist-minimal-sieve`, `thm-b-l-s-interval-certificate-correctness`.
- `thm-kim-sarnak-quadratic-twist-makes-weight-zero-gl2-spherical` (theorem) — Odd Quadratic Twist Makes the Weight-Zero GL(2) Archimedean Component Spherical. Item suppliers: `def-weight-zero-maass-form-on-gamma0n`, `def-unitary-cuspidal-generic-gln-representation`, `def-dirichlet-character-modulo-q`.
- `thm-kim-weak-exterior-square-lift-for-cuspidal-gl4` (theorem) — Kim Weak Exterior-Square Lift for Cuspidal GL(4) Representations. Item suppliers: `def-unitary-cuspidal-generic-gln-representation`.
- `thm-kim-shahidi-symmetric-cube-lift-for-cuspidal-gl2` (theorem) — Kim–Shahidi Symmetric-Cube Lift for Cuspidal GL(2) Representations. Item suppliers: `def-unitary-cuspidal-generic-gln-representation`.
- `thm-kim-symmetric-fourth-lift-for-cuspidal-gl2` (theorem) — Kim Symmetric-Fourth Lift for Cuspidal GL(2) Representations. Item suppliers: `thm-kim-weak-exterior-square-lift-for-cuspidal-gl4`, `thm-kim-shahidi-symmetric-cube-lift-for-cuspidal-gl2`.
- `thm-kim-shahidi-noncuspidal-symmetric-fourth-ramanujan-bound` (theorem) — Kim–Shahidi Stronger Bound in the Noncuspidal Symmetric-Fourth Case. Item suppliers: `thm-kim-symmetric-fourth-lift-for-cuspidal-gl2`.
- `thm-shahidi-symmetric-square-l-functional-equation-for-gln` (theorem) — Shahidi Functional Equation for Symmetric-Square L-Functions on GL(n). Item suppliers: `def-standard-and-rankin-selberg-l-functions-on-gln`.
- `thm-kim-holomorphy-symmetric-square-l-function-for-nonselfdual-cuspidal-gln` (theorem) — Kim Holomorphy of the Symmetric-Square L-Function for Non-Self-Dual Cuspidal GL(n). Item suppliers: `def-standard-and-rankin-selberg-l-functions-on-gln`, `thm-shahidi-symmetric-square-l-functional-equation-for-gln`.
- `thm-kim-symmetric-square-l-function-analytic-continuation-and-functional-equation` (theorem) — Kim Analytic Continuation and Functional Equation for Twisted Symmetric-Square L-Functions. Item suppliers: `thm-kim-holomorphy-symmetric-square-l-function-for-nonselfdual-cuspidal-gln`, `thm-shahidi-symmetric-square-l-functional-equation-for-gln`.
- `thm-jacquet-shalika-archimedean-unitary-parameter-and-gamma-ratio-bound` (theorem) — Jacquet–Shalika Archimedean Unitary-Parameter and Gamma-Ratio Bound. Item suppliers: `def-unitary-cuspidal-generic-gln-representation`.
- `thm-kim-appendix2-weak-ramanujan-bound-for-gln` (theorem) — Kim Appendix-2 Weak Ramanujan Bound for GL(n). Item suppliers: `def-unitary-cuspidal-generic-gln-representation`, `thm-cogdell-global-same-rank-rankin-selberg-analytic-continuation-and-functional-equation`, `thm-kim-symmetric-square-l-function-analytic-continuation-and-functional-equation`, `thm-weil-bound-for-hyper-kloosterman-sums`, `thm-jacquet-shalika-archimedean-unitary-parameter-and-gamma-ratio-bound`.
- `thm-kim-sarnak-maass-eigenvalue-lower-bound` (theorem) — Kim–Sarnak Lower Bound for Congruence Maass Eigenvalues. Item suppliers: `def-selberg-exceptional-eigenvalue-parameter`, `def-weight-zero-maass-form-on-gamma0n`, `thm-kim-symmetric-fourth-lift-for-cuspidal-gl2`, `thm-kim-shahidi-noncuspidal-symmetric-fourth-ramanujan-bound`, `thm-kim-appendix2-weak-ramanujan-bound-for-gln`, `thm-kim-sarnak-quadratic-twist-makes-weight-zero-gl2-spherical`.
- `op-selberg-eigenvalue-conjecture-for-congruence-subgroups` (open-problem) — Selberg Eigenvalue Conjecture for Congruence Subgroups. Item suppliers: `def-selberg-exceptional-eigenvalue-parameter`.

B-page examples/status contracts:

- `ex-b-l-s-gamma1-verification-through-level-880` (example) — Verification for Γ1(N) Through N = 880. Item suppliers: `thm-booker-lee-strombergsson-finite-selberg-verification-ranges`.
- `ex-b-l-s-principal-level-verification-through-226` (example) — Verification for Γ(N) Through N = 226. Item suppliers: `thm-booker-lee-strombergsson-finite-selberg-verification-ranges`.
- `ex-b-l-s-arb-finite-certificate-parameters` (example) — Finite Arb Certificate Parameters in the BLS Computation. Item suppliers: `alg-interval-arithmetic-selberg-eigenvalue-verification`.

### New-page dependency layer 9

#### ray-class-hecke-l-functions-and-density / ray-class-hecke-l-functions-and-density-examples

**A:** Ray-Class Hecke L-Functions and Dirichlet Density. **B:** Ray-Class Hecke L-Function Examples. **Direct A prerequisites:** `dedekind-zeta-and-split-prime-density`, `global-class-field-theory-and-artin-reciprocity`. **B prerequisite:** `ray-class-hecke-l-functions-and-density-examples` requires `ray-class-hecke-l-functions-and-density`. **Inventory:** 7 A items; 1 B items. Contract and source detail: [R1 pair dossier](number-theory-scaffolds-2026-10-23/analytic/r1-foundations-l-functions.md) and [R1 source ledger](number-theory-scaffolds-2026-10-23/analytic/r1-sources/README.md).

A-page ordered contracts:

- `def-finite-order-ray-class-hecke-character-and-l-function` (definition) — Finite-order ray-class Hecke character and its L-series. Item suppliers: `def-dedekind-zeta-function`, `thm-number-field-ray-class-field-artin-isomorphism`.
- `thm-finite-order-hecke-l-euler-product` (theorem) — Absolute convergence and Euler product for a finite-order Hecke L-series. Item suppliers: `def-finite-order-ray-class-hecke-character-and-l-function`, `thm-number-field-integral-ideal-factorisation-in-zf`, `thm-ideal-norm-is-multiplicative`.
- `thm-primitive-hecke-l-analytic-continuation-and-functional-equation` (theorem) — Analytic continuation and functional equation for primitive finite-order Hecke L-functions. Item suppliers: `thm-finite-order-hecke-l-euler-product`, `thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula`, `thm-poisson-summation-for-a-full-rank-lattice`, `thm-dirichlet-unit-theorem`, `thm-number-field-regulator-is-well-defined`, `thm-complex-gamma-restricts-to-the-real-gamma-function`.
- `thm-abelian-artin-l-factorization-into-hecke-l-functions` (theorem) — Dedekind zeta factorization over the characters of an abelian Galois group. Item suppliers: `thm-dedekind-zeta-euler-product`, `thm-finite-order-hecke-l-euler-product`, `thm-dirichlet-character-orthogonality`, `thm-number-field-ray-class-field-artin-isomorphism`.
- `thm-abelian-artin-l-series-equals-hecke-l-series` (theorem) — Artin L-series of an abelian character equals its Hecke L-series up to ramified Euler factors. Item suppliers: `thm-number-field-ray-class-field-artin-isomorphism`, `thm-finite-order-hecke-l-euler-product`, `def-arithmetic-frobenius-coset`, `cor-frobenius-compatibility-in-finite-towers`.
- `thm-nontrivial-ray-class-hecke-l-nonvanishing-at-one` (theorem) — Nontrivial finite-order ray-class Hecke L-functions do not vanish at one. Item suppliers: `thm-primitive-hecke-l-analytic-continuation-and-functional-equation`, `thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula`, `thm-abelian-artin-l-factorization-into-hecke-l-functions`, `thm-abelian-artin-l-series-equals-hecke-l-series`, `thm-global-class-field-existence-number-field`, `thm-number-field-ray-class-field-artin-isomorphism`.
- `thm-ray-class-primes-dirichlet-density` (theorem) — Prime ideals in each ray-class group coset have equal Dirichlet density. Item suppliers: `def-natural-and-dirichlet-density`, `thm-finite-order-hecke-l-euler-product`, `thm-nontrivial-ray-class-hecke-l-nonvanishing-at-one`, `thm-dirichlet-character-orthogonality`, `thm-number-field-ray-class-field-artin-isomorphism`.

B-page examples/status contracts:

- `rem-hecke-l-nonvanishing-uses-ray-class-existence` (remark) — Hecke L nonvanishing uses ray-class existence and Artin reciprocity. Item suppliers: `thm-nontrivial-ray-class-hecke-l-nonvanishing-at-one`, `thm-global-class-field-existence-number-field`.

#### mass-equidistribution-for-holomorphic-hecke-eigenforms / mass-equidistribution-for-holomorphic-hecke-eigenforms-examples

**A:** Mass Equidistribution for Holomorphic Hecke Eigenforms. **B:** Mass Equidistribution for Holomorphic Hecke Eigenforms: Examples. **Direct A prerequisites:** `gl2-rankin-selberg-l-functions-and-functional-equations`, `gln-rankin-selberg-local-integrals-and-functional-equations`, `holomorphic-hecke-eigenvalue-bounds-from-etale-cohomology`. **B prerequisite:** `mass-equidistribution-for-holomorphic-hecke-eigenforms-examples` requires `mass-equidistribution-for-holomorphic-hecke-eigenforms`. **Inventory:** 6 A items; 2 B items. Contract and source detail: [R4 automorphic/spectral dossier](number-theory-scaffolds-2026-10-23/analytic/r4-automorphic-spectral.md) and [R4 source index](number-theory-scaffolds-2026-10-23/analytic/r4-sources/source-index.md).

A-page ordered contracts:

- `def-holomorphic-eigenform-hyperbolic-mass-measure` (definition) — Hyperbolic Mass Measure of a Holomorphic Eigenform. Item suppliers: `def-normalized-full-level-holomorphic-hecke-eigenform`.
- `thm-gelbart-jacquet-symmetric-square-automorphy` (theorem) — Gelbart–Jacquet Symmetric-Square Automorphy for a Holomorphic GL2 Form. Item suppliers: `thm-standard-gl2-l-function-analytic-continuation-and-functional-equation`, `thm-cogdell-global-adjacent-rank-analytic-continuation-and-functional-equation`.
- `thm-symmetric-square-l-function-analytic-properties-and-zero-free-region` (theorem) — Analytic Properties and Zero-Free Region for the Symmetric-Square L-Function. Item suppliers: `thm-gelbart-jacquet-symmetric-square-automorphy`, `thm-cogdell-global-adjacent-rank-analytic-continuation-and-functional-equation`.
- `thm-holowinsky-shifted-convolution-sieve-estimate` (theorem) — Holowinsky Shifted-Convolution Sieve Estimate. Item suppliers: `thm-deligne-ramanujan-petersson-bound-for-full-level-eigenforms`.
- `thm-soundararajan-weak-subconvexity-symmetric-square` (theorem) — Soundararajan Weak Subconvexity for the Symmetric-Square L-Function. Item suppliers: `thm-symmetric-square-l-function-analytic-properties-and-zero-free-region`.
- `thm-holowinsky-soundararajan-mass-equidistribution` (theorem) — Mass Equidistribution for Full-Level Holomorphic Hecke Eigenforms. Item suppliers: `def-holomorphic-eigenform-hyperbolic-mass-measure`, `thm-holowinsky-shifted-convolution-sieve-estimate`, `thm-soundararajan-weak-subconvexity-symmetric-square`, `thm-deligne-ramanujan-petersson-bound-for-full-level-eigenforms`.

B-page examples/status contracts:

- `ex-holomorphic-eigenform-mass-on-a-compact-test-set` (example) — Mass Tested Against a Compactly Supported Function. Item suppliers: `thm-holowinsky-soundararajan-mass-equidistribution`.
- `ex-holomorphic-eigenform-mass-pairing-with-a-maass-form` (example) — A Maass-Test Matrix Coefficient Tends to Zero. Item suppliers: `thm-holowinsky-soundararajan-mass-equidistribution`.

### New-page dependency layer 10

#### hecke-l-zero-free-regions-and-exceptional-zeros / hecke-l-zero-free-regions-and-exceptional-zeros-examples

**A:** Zero-Free Regions and Exceptional Zeros for Hecke L-Functions. **B:** Hecke Zero-Free Regions: Examples and Hypothesis Checks. **Direct A prerequisites:** `ray-class-hecke-l-functions-and-density`. **B prerequisite:** `hecke-l-zero-free-regions-and-exceptional-zeros-examples` requires `hecke-l-zero-free-regions-and-exceptional-zeros`. **Inventory:** 4 A items; 2 B items. Contract and source detail: [R1 pair dossier](number-theory-scaffolds-2026-10-23/analytic/r1-foundations-l-functions.md) and [R1 source ledger](number-theory-scaffolds-2026-10-23/analytic/r1-sources/README.md).

A-page ordered contracts:

- `def-hecke-l-zero-counting-function` (definition) — Multiplicity-counting function for nontrivial Hecke L-zeros. Item suppliers: `def-finite-order-ray-class-hecke-character-and-l-function`.
- `thm-weiss-landau-page-zero-free-region-for-hecke-families` (theorem) — Weiss Landau–Page zero-free region for bounded-conductor Hecke families. Item suppliers: `thm-primitive-hecke-l-analytic-continuation-and-functional-equation`, `thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula`, `thm-finite-order-hecke-l-euler-product`.
- `thm-stark-exceptional-dedekind-zeta-zero-bound` (theorem) — Stark's effective lower bound for an exceptional Dedekind zeta zero. Item suppliers: `thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula`, `thm-minkowski-bound-for-ideal-classes`.
- `thm-tz-relative-hecke-character-exceptional-zero-bound` (theorem) — Stark bound for a real Hecke-character exceptional zero in an abelian extension. Item suppliers: `thm-stark-exceptional-dedekind-zeta-zero-bound`, `thm-conductor-discriminant-formula-for-abelian-extensions`, `thm-number-field-ray-class-field-artin-isomorphism`.

B-page examples/status contracts:

- `ex-hecke-landau-page-exceptional-zero-range` (example) — Translate the Hecke Landau–Page range to a height-dependent zero-free region. Item suppliers: `thm-weiss-landau-page-zero-free-region-for-hecke-families`.
- `rem-stark-bound-is-effective-but-siegel-bound-is-ineffective` (remark) — Effective Stark bounds and ineffective Siegel bounds have different roles. Item suppliers: `thm-stark-exceptional-dedekind-zeta-zero-bound`.

#### hecke-explicit-formula-for-prime-ideal-sums / hecke-explicit-formula-for-prime-ideal-sums-examples

**A:** Smoothed Explicit Formula for Hecke Prime-Ideal Sums. **B:** Hecke Explicit Formula: Examples and Normalizations. **Direct A prerequisites:** `ray-class-hecke-l-functions-and-density`, `perron-inversion-and-the-explicit-formula`. **B prerequisite:** `hecke-explicit-formula-for-prime-ideal-sums-examples` requires `hecke-explicit-formula-for-prime-ideal-sums`. **Inventory:** 2 A items; 1 B items. Contract and source detail: [R1 pair dossier](number-theory-scaffolds-2026-10-23/analytic/r1-foundations-l-functions.md) and [R1 source ledger](number-theory-scaffolds-2026-10-23/analytic/r1-sources/README.md).

A-page ordered contracts:

- `def-abelian-chebotarev-weighted-prime-ideal-sum` (definition) — Weighted prime-ideal counting function for an abelian Frobenius class. Item suppliers: `def-finite-order-ray-class-hecke-character-and-l-function`, `def-prime-above-and-residue-degree`, `def-arithmetic-frobenius-coset`.
- `thm-smoothed-explicit-formula-for-abelian-chebotarev-prime-ideal-sums` (theorem) — Smoothed explicit formula for an abelian Chebotarev prime-ideal sum. Item suppliers: `def-abelian-chebotarev-weighted-prime-ideal-sum`, `thm-finite-order-hecke-l-euler-product`, `thm-primitive-hecke-l-analytic-continuation-and-functional-equation`, `thm-number-field-ray-class-field-artin-isomorphism`.

B-page examples/status contracts:

- `ex-trivial-character-prime-ideal-main-term` (example) — The trivial Hecke character contributes the prime-ideal main term. Item suppliers: `thm-smoothed-explicit-formula-for-abelian-chebotarev-prime-ideal-sums`.

### New-page dependency layer 11

#### dirichlet-l-zero-free-region-and-exceptional-zero / dirichlet-l-zero-free-region-and-exceptional-zero-examples

**A:** The Classical Zero-Free Region for Dirichlet L-Functions. **B:** Dirichlet L Zero-Free Region Examples. **Direct A prerequisites:** `hecke-l-zero-free-regions-and-exceptional-zeros`, `classical-zero-free-region-and-the-prime-number-theorem`, `jensen-theory-and-nevanlinnas-first-main-theorem`. **B prerequisite:** `dirichlet-l-zero-free-region-and-exceptional-zero-examples` requires `dirichlet-l-zero-free-region-and-exceptional-zero`. **Inventory:** 8 A items; 2 B items. Contract and source detail: [R1 pair dossier](number-theory-scaffolds-2026-10-23/analytic/r1-foundations-l-functions.md) and [R1 source ledger](number-theory-scaffolds-2026-10-23/analytic/r1-sources/README.md).

A-page ordered contracts:

- `def-exceptional-zero-of-a-real-primitive-dirichlet-l-function` (definition) — Exceptional real zero for a primitive Dirichlet L-function. Item suppliers: `def-primitive-dirichlet-character-and-conductor`, `thm-primitive-dirichlet-l-analytic-continuation`.
- `thm-classical-zero-free-region-dirichlet-l` (theorem) — Classical zero-free region for primitive Dirichlet L-functions. Item suppliers: `def-exceptional-zero-of-a-real-primitive-dirichlet-l-function`, `thm-weiss-landau-page-zero-free-region-for-hecke-families`, `thm-primitive-dirichlet-l-functional-equation`.
- `thm-vinogradov-mean-value-estimate-for-exponential-sums` (theorem) — Montgomery–Vaughan Theorem 24.5 Vinogradov mean-value bound. Item suppliers: `cor-prime-number-theorem`.
- `thm-vinogradov-higher-derivative-exponential-sum-bound` (theorem) — Montgomery–Vaughan Theorem 24.13 higher-derivative exponential-sum bound. Item suppliers: `thm-vinogradov-mean-value-estimate-for-exponential-sums`.
- `thm-korobov-vinogradov-hurwitz-zeta-estimate` (theorem) — Korobov–Vinogradov bound for Hurwitz zeta and zeta. Item suppliers: `thm-vinogradov-higher-derivative-exponential-sum-bound`, `def-riemann-zeta-function`.
- `lem-log-derivative-bound-from-disc-zero-factorization` (lemma) — Separated-disc logarithmic-derivative bound by nearby zeros. Item suppliers: `thm-poisson-jensen-formula-meromorphic-function`, `thm-cauchy-integral-formula-higher-derivatives`, `thm-jensen-formula-on-a-disc`.
- `thm-korobov-vinogradov-zero-free-region-for-riemann-zeta` (theorem) — Korobov–Vinogradov zero-free region for the Riemann zeta function. Item suppliers: `thm-korobov-vinogradov-hurwitz-zeta-estimate`, `lem-log-derivative-bound-from-disc-zero-factorization`, `thm-riemann-zeta-classical-zero-free-region`.
- `thm-korobov-vinogradov-zero-free-region-for-dirichlet-l-functions` (theorem) — Korobov–Vinogradov zero-free region for Dirichlet L-functions. Item suppliers: `thm-korobov-vinogradov-zero-free-region-for-riemann-zeta`, `thm-classical-zero-free-region-dirichlet-l`.

B-page examples/status contracts:

- `ex-dirichlet-exceptional-zero-conductor-and-height-range` (example) — Conductor and height parameters in the Dirichlet zero-free region. Item suppliers: `thm-classical-zero-free-region-dirichlet-l`.
- `rem-fixed-modulus-and-growing-modulus-zero-free-claims` (remark) — A fixed-modulus result does not supply a growing-modulus zero-free range. Item suppliers: `thm-classical-zero-free-region-dirichlet-l`, `thm-prime-number-theorem-arithmetic-progressions`.

#### hecke-l-log-free-zero-density-and-zero-repulsion / hecke-l-log-free-zero-density-and-zero-repulsion-examples

**A:** Log-Free Zero Density and Zero Repulsion for Hecke L-Functions. **B:** Hecke Zero-Density and Repulsion Examples. **Direct A prerequisites:** `hecke-l-zero-free-regions-and-exceptional-zeros`, `hecke-explicit-formula-for-prime-ideal-sums`. **B prerequisite:** `hecke-l-log-free-zero-density-and-zero-repulsion-examples` requires `hecke-l-log-free-zero-density-and-zero-repulsion`. **Inventory:** 7 A items; 1 B items. Contract and source detail: [R1 pair dossier](number-theory-scaffolds-2026-10-23/analytic/r1-foundations-l-functions.md) and [R1 source ledger](number-theory-scaffolds-2026-10-23/analytic/r1-sources/README.md).

A-page ordered contracts:

- `thm-weiss-selberg-sieve-mean-square-for-hecke-characters` (theorem) — Weiss smoothed Selberg-sieve mean-square bound for Hecke characters. Item suppliers: `def-hecke-l-zero-counting-function`, `thm-number-field-integral-ideal-factorisation-in-zf`, `thm-ideal-norm-is-multiplicative`.
- `thm-turan-power-sum-lower-bound` (theorem) — Turán power-sum lower bound for a finite complex sequence. Item suppliers: `def-finite-cardinality`, `thm-cauchy-schwarz-and-the-euclidean-norm`.
- `thm-thorner-zaman-large-sieve-for-ideals` (theorem) — Field-uniform large-sieve bound for Hecke characters and ideal sums. Item suppliers: `def-hecke-l-zero-counting-function`, `thm-number-field-integral-ideal-factorisation-in-zf`, `thm-ideal-norm-is-multiplicative`, `thm-weiss-selberg-sieve-mean-square-for-hecke-characters`.
- `thm-weiss-log-free-zero-density-for-hecke-l-functions` (theorem) — Weiss field-uniform log-free zero-density theorem for Hecke L-functions. Item suppliers: `def-hecke-l-zero-counting-function`, `thm-weiss-landau-page-zero-free-region-for-hecke-families`, `thm-weiss-selberg-sieve-mean-square-for-hecke-characters`, `thm-turan-power-sum-lower-bound`.
- `thm-thorner-zaman-explicit-log-free-density-for-hecke-l-functions` (theorem) — Explicit Thorner–Zaman log-free density estimate for Hecke L-functions. Item suppliers: `def-hecke-l-zero-counting-function`, `thm-weiss-log-free-zero-density-for-hecke-l-functions`, `thm-thorner-zaman-large-sieve-for-ideals`, `thm-turan-power-sum-lower-bound`.
- `thm-thorner-zaman-exception-sensitive-hecke-zero-density` (theorem) — Log-free Hecke zero density with the exceptional-zero factor B1. Item suppliers: `thm-thorner-zaman-explicit-log-free-density-for-hecke-l-functions`, `thm-weiss-log-free-zero-density-for-hecke-l-functions`, `thm-stark-exceptional-dedekind-zeta-zero-bound`, `thm-tz-relative-hecke-character-exceptional-zero-bound`.
- `thm-deuring-heilbronn-phenomenon-for-hecke-l-functions` (theorem) — Deuring–Heilbronn zero repulsion for Hecke L-functions. Item suppliers: `thm-weiss-landau-page-zero-free-region-for-hecke-families`, `thm-thorner-zaman-explicit-log-free-density-for-hecke-l-functions`, `thm-turan-power-sum-lower-bound`.

B-page examples/status contracts:

- `ex-exceptional-density-factor-when-no-siegel-zero` (example) — The density factor is one when there is no exceptional zero. Item suppliers: `thm-thorner-zaman-exception-sensitive-hecke-zero-density`.

### New-page dependency layer 12

#### landau-page-and-siegel-bounds-for-dirichlet-l-functions / landau-page-and-siegel-bounds-for-dirichlet-l-functions-examples

**A:** Landau–Page Uniqueness and the Ineffective Siegel Bound. **B:** Exceptional-Zero Examples and Ineffectivity. **Direct A prerequisites:** `dirichlet-l-zero-free-region-and-exceptional-zero`. **B prerequisite:** `landau-page-and-siegel-bounds-for-dirichlet-l-functions-examples` requires `landau-page-and-siegel-bounds-for-dirichlet-l-functions`. **Inventory:** 5 A items; 2 B items. Contract and source detail: [R1 pair dossier](number-theory-scaffolds-2026-10-23/analytic/r1-foundations-l-functions.md) and [R1 source ledger](number-theory-scaffolds-2026-10-23/analytic/r1-sources/README.md).

A-page ordered contracts:

- `thm-landau-page-exceptional-zero-uniqueness` (theorem) — At most one real primitive Dirichlet character has an exceptional zero in the common range. Item suppliers: `thm-classical-zero-free-region-dirichlet-l`, `thm-weiss-landau-page-zero-free-region-for-hecke-families`.
- `thm-siegel-ineffective-lower-bound-dirichlet-l-at-one` (theorem) — Siegel's ineffective lower bound for real primitive Dirichlet L-values at one. Item suppliers: `thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula`, `thm-biquadratic-dedekind-zeta-factorization`.
- `thm-polya-vinogradov-partial-sum-bound` (theorem) — Pólya–Vinogradov bound for partial sums of a primitive nonprincipal character. Item suppliers: `def-primitive-dirichlet-character-and-conductor`, `lem-nonprincipal-dirichlet-character-partial-sums`.
- `lem-real-dirichlet-l-derivative-bound-near-one` (lemma) — Uniform derivative bound for a real primitive Dirichlet L-function near one. Item suppliers: `thm-polya-vinogradov-partial-sum-bound`, `thm-primitive-dirichlet-l-analytic-continuation`, `thm-primitive-dirichlet-l-functional-equation`.
- `thm-siegel-ineffective-lower-bound-dirichlet-zero` (theorem) — Siegel's ineffective distance bound for a real Dirichlet exceptional zero. Item suppliers: `thm-siegel-ineffective-lower-bound-dirichlet-l-at-one`, `lem-real-dirichlet-l-derivative-bound-near-one`, `def-exceptional-zero-of-a-real-primitive-dirichlet-l-function`.

B-page examples/status contracts:

- `ex-landau-page-common-cutoff` (example) — One common cutoff gives a unique exceptional character across conductors. Item suppliers: `thm-landau-page-exceptional-zero-uniqueness`.
- `rem-siegel-constant-ineffectivity` (remark) — The Siegel constant is not effectively computable by the proof. Item suppliers: `thm-siegel-ineffective-lower-bound-dirichlet-zero`.

#### truncated-explicit-formula-dirichlet-l-functions / truncated-explicit-formula-dirichlet-l-functions-examples

**A:** Truncated Explicit Formula for Dirichlet L-Functions. **B:** Truncated Formula: Cutoff and Zero-Height Examples. **Direct A prerequisites:** `explicit-formula-for-dirichlet-character-von-mangoldt-sums`, `dirichlet-l-zero-free-region-and-exceptional-zero`. **B prerequisite:** `truncated-explicit-formula-dirichlet-l-functions-examples` requires `truncated-explicit-formula-dirichlet-l-functions`. **Inventory:** 2 A items; 1 B items. Contract and source detail: [R1 pair dossier](number-theory-scaffolds-2026-10-23/analytic/r1-foundations-l-functions.md) and [R1 source ledger](number-theory-scaffolds-2026-10-23/analytic/r1-sources/README.md).

A-page ordered contracts:

- `thm-primitive-dirichlet-l-zero-counting` (theorem) — Riemann–von Mangoldt count for zeros of a primitive Dirichlet L-function. Item suppliers: `thm-primitive-dirichlet-l-analytic-continuation`, `thm-primitive-dirichlet-l-functional-equation`, `thm-euler-gamma-function-is-holomorphic`, `thm-argument-principle-null-homologous-cycle`.
- `thm-truncated-explicit-formula-for-dirichlet-character-von-mangoldt-sums` (theorem) — Truncated zero-sum formula for primitive Dirichlet-character von Mangoldt sums. Item suppliers: `thm-smoothed-explicit-formula-for-dirichlet-character-von-mangoldt-sums`, `thm-primitive-dirichlet-l-zero-counting`, `thm-truncated-perron-formula`.

B-page examples/status contracts:

- `ex-truncated-dirichlet-explicit-formula-at-a-zero-separated-height` (example) — Choose a truncation height separated from zero ordinates. Item suppliers: `thm-truncated-explicit-formula-for-dirichlet-character-von-mangoldt-sums`.

#### effective-chebotarev-and-natural-density / effective-chebotarev-and-natural-density-examples

**A:** Effective Chebotarev and Natural Density of Frobenius Classes. **B:** Chebotarev Examples, Field Parameters, and Density Checks. **Direct A prerequisites:** `hecke-l-log-free-zero-density-and-zero-repulsion`, `chebotarev-density-and-frobenius-equidistribution`. **B prerequisite:** `effective-chebotarev-and-natural-density-examples` requires `effective-chebotarev-and-natural-density`. **Inventory:** 5 A items; 2 B items. Contract and source detail: [R1 pair dossier](number-theory-scaffolds-2026-10-23/analytic/r1-foundations-l-functions.md) and [R1 source ledger](number-theory-scaffolds-2026-10-23/analytic/r1-sources/README.md).

A-page ordered contracts:

- `thm-effective-chebotarev-under-grh-lagarias-odlyzko` (theorem) — Lagarias–Odlyzko effective Chebotarev under GRH for the Dedekind zeta function of L. Item suppliers: `def-chebotarev-prime-ideal-counting-function`, `thm-smoothed-explicit-formula-for-abelian-chebotarev-prime-ideal-sums`, `thm-brauer-induction`, `thm-number-field-ray-class-field-artin-isomorphism`, `thm-conductor-discriminant-formula-for-abelian-extensions`.
- `thm-effective-chebotarev-unconditionally-lagarias-odlyzko` (theorem) — Lagarias–Odlyzko unconditional effective Chebotarev with an exceptional-zero term. Item suppliers: `def-chebotarev-prime-ideal-counting-function`, `thm-smoothed-explicit-formula-for-abelian-chebotarev-prime-ideal-sums`, `thm-weiss-landau-page-zero-free-region-for-hecke-families`, `thm-stark-exceptional-dedekind-zeta-zero-bound`, `thm-brauer-induction`, `thm-number-field-ray-class-field-artin-isomorphism`, `thm-conductor-discriminant-formula-for-abelian-extensions`.
- `thm-natural-density-chebotarev` (theorem) — Natural density of unramified prime ideals in a Frobenius conjugacy class. Item suppliers: `def-chebotarev-prime-ideal-counting-function`, `thm-effective-chebotarev-unconditionally-lagarias-odlyzko`.
- `thm-unified-effective-chebotarev-thorner-zaman` (theorem) — Thorner–Zaman uniform effective Chebotarev asymptotic with a secondary exceptional term. Item suppliers: `def-chebotarev-prime-ideal-counting-function`, `thm-thorner-zaman-exception-sensitive-hecke-zero-density`, `thm-smoothed-explicit-formula-for-abelian-chebotarev-prime-ideal-sums`, `thm-number-field-ray-class-field-artin-isomorphism`, `thm-conductor-discriminant-formula-for-abelian-extensions`, `thm-weiss-landau-page-zero-free-region-for-hecke-families`.
- `rem-milne-chebotarev-proof-is-dirichlet-density-only` (remark) — Milne's CFT notes prove Dirichlet density, not natural density. Item suppliers: `thm-natural-density-chebotarev`, `thm-chebotarev-dirichlet-density`.

B-page examples/status contracts:

- `ex-chebotarev-abelian-extension` (example) — Specialize Chebotarev to a ray-class field. Item suppliers: `thm-unified-effective-chebotarev-thorner-zaman`, `thm-number-field-ray-class-field-artin-isomorphism`.
- `ex-natural-density-from-an-unconditional-asymptotic` (example) — Pass from the unconditional counting asymptotic to natural density. Item suppliers: `thm-natural-density-chebotarev`.

#### dirichlet-divisor-and-gauss-circle-discrepancy / dirichlet-divisor-and-gauss-circle-discrepancy-examples

**A:** Dirichlet Divisor and Gauss Circle Discrepancy. **B:** Divisor and Circle Error Examples and Dated Status. **Direct A prerequisites:** `exponent-pairs-and-classical-voronoi-summation`, `dirichlet-l-zero-free-region-and-exceptional-zero`, `sharp-l2-decoupling-for-the-moment-curve`. **B prerequisite:** `dirichlet-divisor-and-gauss-circle-discrepancy-examples` requires `dirichlet-divisor-and-gauss-circle-discrepancy`. **Inventory:** 21 A items; 3 B items. Contract and source detail: [R1 pair dossier](number-theory-scaffolds-2026-10-23/analytic/r1-foundations-l-functions.md) and [R1 source ledger](number-theory-scaffolds-2026-10-23/analytic/r1-sources/README.md).

A-page ordered contracts:

- `thm-balasubramanian-ramachandra-multiplicative-coefficient-count` (theorem) — For positive multiplicative g with g(p)=1/λ and g(n)≫n^{-1/16}, #{n:ng(n)≤x}∼c x(log x)^{λ−1}; KV lemma dependency is explicit. Item suppliers: `def-multiplicative-arithmetic-function`, `thm-korobov-vinogradov-zero-free-region-for-riemann-zeta`.
- `thm-bourgain-watt-variant-double-large-sieve` (theorem) — Bourgain–Watt 1505.04161v1 §5 variant double-large-sieve inequality (complete proof read). Item suppliers: `thm-holder-inequality-for-integrals`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`.
- `thm-guth-maldague-amplitude-dependent-cone-envelope-input` (theorem) — Guth–Maldague arXiv 2206.01093v2 Theorem 2: superlevel wave-envelope inequality for supp f̂⊂N_{R^{-1}}(Γ), fully proved via §§5–9 and Appendix §11.1 Lemmas19–20. Item suppliers: none.
- `thm-guth-maldague-small-cap-cone-decoupling-input` (theorem) — Guth–Maldague Theorem 3: for β1∈[1/2,1], β2∈[0,1], p≥2 and supp f̂⊂N_{R^{-1}}(Γ), \|\|f\|\|_p^p≲εR^ε(R^{(β1+β2)(p/2−1)}+R^{(β1+β2)(p−2)−1}+R^{(β1+β2−1/2)(p−2)})Σγ\|\|fγ\|\|_p^p. Item suppliers: `thm-guth-maldague-amplitude-dependent-cone-envelope-input`.
- `thm-huxley-second-spacing-estimate-for-circle-and-divisor-problems` (theorem) — Huxley second-spacing estimate imported by Li–Yang; exact theorem/source proof contract pending R3 source review. Item suppliers: none.
- `thm-li-yang-first-spacing-proposition-3-1` (theorem) — Li–Yang Proposition 3.1 first-spacing bound. Item suppliers: `thm-guth-maldague-small-cap-cone-decoupling-input`.
- `thm-li-yang-second-spacing-bombieri-iwaniec-bound` (theorem) — Li–Yang §4 Bombieri–Iwaniec bound using Huxley second spacing. Item suppliers: `thm-bourgain-watt-variant-double-large-sieve`, `thm-huxley-second-spacing-estimate-for-circle-and-divisor-problems`.
- `thm-li-yang-final-divisor-circle-reduction` (theorem) — Li–Yang §5 claimed reduction from first/second-spacing estimates to Δ and R; proof gate because the text refers to withdrawn BW17 §7 for error/reduction estimates. Item suppliers: `thm-li-yang-first-spacing-proposition-3-1`, `thm-li-yang-second-spacing-bombieri-iwaniec-bound`, `thm-voronoi-divisor-summation-for-smooth-compact-support`, `thm-voronoi-two-square-summation-for-smooth-radial-tests`.
- `thm-li-yang-joint-divisor-circle-error-bound` (theorem) — Li–Yang arXiv v2 Theorem 1.2 source claim: Δ(X),R(X)=Oε(X^{θ*+ε}); local proof is gated on reconstructing §5 reductions delegated to withdrawn BW17 §7. Item suppliers: `def-dirichlet-divisor-error-term`, `def-gauss-circle-error-term`, `thm-li-yang-final-divisor-circle-reduction`.
- `thm-robert-sargos-three-dimensional-monomial-spacing-estimate` (theorem) — Robert–Sargos 2006 Theorem 2, §5: exponent −1/8, tolerance O(r/Y) as used in Cen §4.16; original proof source gated. Item suppliers: none.
- `lem-robert-sargos-near-diagonal-pair-count` (lemma) — Robert–Sargos 2006 Lemma 8, §6.1 pair-count input used in Cen (4.17); original proof source gated. Item suppliers: none.
- `thm-cen-degree-five-vinogradov-mean-value-bound` (theorem) — Bourgain–Demeter–Guth critical VMVT: J_{15,5}(J)≪εJ^{15+ε}, the s=15 degree-five input used in Cen Appendix B. Item suppliers: `thm-bourgain-demeter-guth-sharp-moment-curve-decoupling`.
- `thm-cen-pair-count-proposition-3-1` (theorem) — Cen et al. Proposition 3.1 diagonal-size pair count. Item suppliers: `thm-cen-degree-five-vinogradov-mean-value-bound`, `thm-robert-sargos-three-dimensional-monomial-spacing-estimate`, `lem-robert-sargos-near-diagonal-pair-count`.
- `lem-watt-lemma-8-1-arc-pair-input` (lemma) — Watt 2004 Lemma 8.1 arc-pair estimate under (2.1)–(2.9),(5.2),(8.14); proof gate on Huxley 1996 §§14–16 and Huxley–Watt 2000 Lemma 5.3. Item suppliers: none.
- `thm-watt-second-spacing-estimate-for-circle-problem` (theorem) — Watt 2004 Lemma 8.2 second-spacing arc-pair count, printed pp.381–382; proof imports Lemma 8.1 and Huxley/IM88 inputs. Item suppliers: `lem-watt-lemma-8-1-arc-pair-input`.
- `thm-cen-second-spacing-bound-section-5` (theorem) — Cen et al. §5 second-spacing bound. Item suppliers: `thm-robert-sargos-three-dimensional-monomial-spacing-estimate`, `thm-watt-second-spacing-estimate-for-circle-problem`.
- `thm-cen-cone-distribution-theorem-6-1` (theorem) — Cen et al. Theorem 6.1 cone distribution estimate. Item suppliers: `thm-guth-maldague-amplitude-dependent-cone-envelope-input`.
- `thm-cen-circle-error-main-reduction` (theorem) — Cen et al. local reduction of pair-count, second-spacing, and cone estimates to the circle remainder bound. Item suppliers: `thm-cen-pair-count-proposition-3-1`, `thm-cen-second-spacing-bound-section-5`, `thm-cen-cone-distribution-theorem-6-1`, `thm-voronoi-two-square-summation-for-smooth-radial-tests`.
- `thm-cen-gauss-circle-error-bound-209-over-670` (theorem) — Cen–Gao–Zhang–Zhang arXiv v1 Theorem 1.1 source claim: \|E(X)\|≪εX^{209/670+ε} for X≥4; R–S/Watt proof gates remain explicit. Item suppliers: `def-gauss-circle-error-term`, `thm-cen-circle-error-main-reduction`.
- `thm-lamzouri-signed-omega-results-divisor-circle` (theorem) — Lamzouri published signed Ω⁺ divisor and Ω⁻ circle lower bounds. Item suppliers: `def-dirichlet-divisor-error-term`, `def-gauss-circle-error-term`, `thm-voronoi-divisor-summation-formula`, `thm-voronoi-divisor-summation-for-smooth-compact-support`, `thm-voronoi-two-square-summation-for-smooth-radial-tests`, `thm-balasubramanian-ramachandra-multiplicative-coefficient-count`, `thm-dirichlet-l-nonzero-at-one`, `lem-meurman-divisor-error-endpoint-conversion`.
- `op-hardys-divisor-and-circle-exponent-one-fourth` (open-problem) — For every ε>0, both Δ(x) and P(x) are Oε(x^{1/4+ε}). Item suppliers: `def-dirichlet-divisor-error-term`, `def-gauss-circle-error-term`.

B-page examples/status contracts:

- `rem-bourgain-watt-2017-preprint-theorem-claims-withdrawn-in-v2` (remark) — Bourgain–Watt arXiv v1 stated 517/1648, but v2 withdrawal invalidates Theorems 1–3; count no theorem item. Item suppliers: none.
- `ex-divisor-circle-errors-at-one` (example) — Compute Δ(1)=2−2γ and P(1)=5−π in the squared-radius convention. Item suppliers: `def-dirichlet-divisor-error-term`, `def-gauss-circle-error-term`.
- `rem-discrepancy-status-is-source-sample-not-exhaustive` (remark) — The dated primary-source table is not a global current-best claim. Item suppliers: `thm-li-yang-joint-divisor-circle-error-bound`, `thm-cen-gauss-circle-error-bound-209-over-670`, `thm-lamzouri-signed-omega-results-divisor-circle`.

### New-page dependency layer 13

#### dirichlet-l-zero-density-estimates / dirichlet-l-zero-density-estimates-examples

**A:** Zero-Density Estimates for Zeta and Dirichlet L-Functions. **B:** Zero-Density Regions and Applications. **Direct A prerequisites:** `large-values-of-dirichlet-polynomials`, `landau-page-and-siegel-bounds-for-dirichlet-l-functions`, `large-sieve-and-finite-group-spectral-sieve`. **B prerequisite:** `dirichlet-l-zero-density-estimates-examples` requires `dirichlet-l-zero-density-estimates`. **Inventory:** 5 A items; 2 B items. Contract and source detail: [R1 pair dossier](number-theory-scaffolds-2026-10-23/analytic/r1-foundations-l-functions.md) and [R1 source ledger](number-theory-scaffolds-2026-10-23/analytic/r1-sources/README.md).

A-page ordered contracts:

- `def-dirichlet-l-zero-density-counting-functions` (definition) — Individual and aggregate zero-density counting functions. Item suppliers: `def-primitive-dirichlet-character-and-conductor`.
- `thm-montgomery-vaughan-zero-density-n1-and-n2` (theorem) — Ingham–Huxley zero-density estimates for Dirichlet L-functions. Item suppliers: `def-dirichlet-l-zero-density-counting-functions`, `thm-unconditional-large-values-for-dirichlet-polynomials`, `thm-multiplicative-large-sieve-inequality`.
- `thm-heath-brown-density-estimate-for-dirichlet-l-functions` (theorem) — Heath–Brown's improved density estimate for primitive Dirichlet L-functions. Item suppliers: `def-dirichlet-l-zero-density-counting-functions`, `thm-unconditional-large-values-for-dirichlet-polynomials`, `thm-multiplicative-large-sieve-inequality`.
- `thm-log-free-zero-density-for-dirichlet-l-functions` (theorem) — Log-free zero-density estimate for primitive Dirichlet L-functions. Item suppliers: `def-dirichlet-l-zero-density-counting-functions`, `thm-montgomery-vaughan-zero-density-n1-and-n2`, `thm-landau-page-exceptional-zero-uniqueness`.
- `thm-deuring-heilbronn-zero-repulsion-for-dirichlet-l-functions` (theorem) — Deuring–Heilbronn repulsion from a Dirichlet exceptional zero. Item suppliers: `thm-log-free-zero-density-for-dirichlet-l-functions`, `thm-landau-page-exceptional-zero-uniqueness`.

B-page examples/status contracts:

- `ex-zero-density-at-q-one` (example) — Specialize the aggregate density bound to the Riemann zeta function. Item suppliers: `thm-heath-brown-density-estimate-for-dirichlet-l-functions`.
- `rem-zero-density-exponents-are-theorem-specific` (remark) — Zero-density exponents retain their stated sigma and conductor ranges. Item suppliers: `thm-montgomery-vaughan-zero-density-n1-and-n2`, `thm-heath-brown-density-estimate-for-dirichlet-l-functions`.

#### prime-distribution-in-arithmetic-progressions / prime-distribution-examples-and-applications

**A:** Siegel–Walfisz and Bombieri–Vinogradov Distribution of Primes. **B:** Prime-Distribution Normalizations, Examples, and Scope. **Direct A prerequisites:** `large-sieve-and-finite-group-spectral-sieve`, `landau-page-and-siegel-bounds-for-dirichlet-l-functions`, `truncated-explicit-formula-dirichlet-l-functions`. **B prerequisite:** `prime-distribution-examples-and-applications` requires `prime-distribution-in-arithmetic-progressions`. **Inventory:** 4 A items; 4 B items. Contract and source detail: [R2 sieve/prime dossier](number-theory-scaffolds-2026-10-23/analytic/r2-sieves-primes.md).

A-page ordered contracts:

- `def-prime-progression-discrepancy` (definition) — Full-weighted Chebyshev discrepancy in a reduced residue class. Item suppliers: `def-chebyshev-psi-function`, `def-unit-group-modulo-n-and-euler-totient`.
- `thm-vaughan-identity-for-von-mangoldt-sums` (theorem) — Vaughan decomposition of von Mangoldt sums. Item suppliers: `def-von-mangoldt-function`, `def-number-theoretic-mobius-function`, `cor-von-mangoldt-mobius-inversion-formula`, `thm-canonical-prime-factorisation`.
- `thm-siegel-walfisz-prime-distribution` (theorem) — Siegel–Walfisz theorem for primes in arithmetic progressions. Item suppliers: `def-prime-progression-discrepancy`, `thm-classical-zero-free-region-dirichlet-l`, `thm-landau-page-exceptional-zero-uniqueness`, `thm-siegel-ineffective-lower-bound-dirichlet-zero`, `thm-truncated-explicit-formula-for-dirichlet-character-von-mangoldt-sums`, `thm-dirichlet-character-orthogonality`.
- `thm-bombieri-vinogradov-prime-distribution` (theorem) — Bombieri–Vinogradov theorem in Chebyshev progression form. Item suppliers: `def-prime-progression-discrepancy`, `thm-siegel-walfisz-prime-distribution`, `thm-vaughan-identity-for-von-mangoldt-sums`, `thm-multiplicative-large-sieve-inequality`, `thm-dirichlet-character-orthogonality`, `cor-chebyshev-theta-prime-number-theorem-error`.

B-page examples/status contracts:

- `ex-bombieri-vinogradov-explicit-logarithmic-cutoff` (example) — An explicit logarithmic cutoff for a chosen BV saving. Item suppliers: `thm-bombieri-vinogradov-prime-distribution`.
- `rem-siegel-walfisz-ineffectivity` (remark) — The Siegel–Walfisz constants are ineffective. Item suppliers: `thm-siegel-walfisz-prime-distribution`, `thm-siegel-ineffective-lower-bound-dirichlet-zero`.
- `rem-fixed-modulus-ap-asymptotic-is-not-uniform` (remark) — Fixed-modulus prime asymptotics do not provide growing-modulus uniformity. Item suppliers: `thm-prime-number-theorem-arithmetic-progressions`, `thm-siegel-walfisz-prime-distribution`.
- `rem-bombieri-vinogradov-cutoff-depends-on-error-saving` (remark) — The BV logarithmic cutoff depends on the requested saving. Item suppliers: `thm-bombieri-vinogradov-prime-distribution`.

### New-page dependency layer 14

#### guth-maynard-zero-density-and-primes-in-short-intervals / guth-maynard-zero-density-and-primes-in-short-intervals-examples

**A:** Guth–Maynard Zero Density and Primes in Short Intervals. **B:** Short-Interval Consequences and Parameter Examples. **Direct A prerequisites:** `dirichlet-l-zero-density-estimates`. **B prerequisite:** `guth-maynard-zero-density-and-primes-in-short-intervals-examples` requires `guth-maynard-zero-density-and-primes-in-short-intervals`. **Inventory:** 7 A items; 2 B items. Contract and source detail: [R1 pair dossier](number-theory-scaffolds-2026-10-23/analytic/r1-foundations-l-functions.md) and [R1 source ledger](number-theory-scaffolds-2026-10-23/analytic/r1-sources/README.md).

A-page ordered contracts:

- `def-guth-maynard-large-value-counting-function` (definition) — For N≤n≤2N set D(t)=Σ b_n n^{it}; define the count of 1-separated t∈[0,T] with \|D(t)\|≥V. Item suppliers: none.
- `thm-guth-maynard-large-values-for-dirichlet-polynomials` (theorem) — Guth–Maynard large-value estimate for Dirichlet polynomials. Item suppliers: `def-guth-maynard-large-value-counting-function`.
- `thm-guth-maynard-zero-density-for-riemann-zeta` (theorem) — Guth–Maynard zero-density estimate for the Riemann zeta function. Item suppliers: `thm-guth-maynard-large-values-for-dirichlet-polynomials`, `def-riemann-zeta-zero-counting`.
- `cor-guth-maynard-zeta-zero-density-exponent-30-over-13` (corollary) — Combined zeta zero-density exponent 30/13. Item suppliers: `thm-guth-maynard-zero-density-for-riemann-zeta`, `thm-montgomery-vaughan-zero-density-n1-and-n2`.
- `thm-guth-maynard-primes-in-short-intervals` (theorem) — Prime-count asymptotic in intervals y≥x^{17/30+ε}. Item suppliers: `thm-guth-maynard-zero-density-for-riemann-zeta`, `thm-von-mangoldt-explicit-formula-truncated`.
- `thm-guth-maynard-almost-all-short-intervals` (theorem) — Prime-count asymptotic in almost all intervals y≥X^{2/15+ε}. Item suppliers: `thm-guth-maynard-large-values-for-dirichlet-polynomials`, `thm-guth-maynard-zero-density-for-riemann-zeta`.
- `op-montgomery-large-value-conjecture` (open-problem) — Montgomery large-value conjecture for 1-separated Dirichlet-polynomial samples. Item suppliers: `def-one-separated-dirichlet-polynomial-samples`.

B-page examples/status contracts:

- `ex-prime-count-in-a-guth-maynard-short-interval` (example) — Substitute a concrete ε into the short-interval range. Item suppliers: `thm-guth-maynard-primes-in-short-intervals`.
- `rem-short-interval-exponent-is-a-dated-proved-result` (remark) — The 17/30 exponent is reported as the theorem of its dated primary source. Item suppliers: `thm-guth-maynard-primes-in-short-intervals`.

#### maynard-sieve-and-bounded-prime-gaps / maynard-sieve-examples-and-frontier

**A:** GPY and Maynard–Tao Sieves for Prime Tuples and Bounded Gaps. **B:** Bounded-Gap Examples, Open Problems, and Dated Frontier. **Direct A prerequisites:** `prime-distribution-in-arithmetic-progressions`. **B prerequisite:** `maynard-sieve-examples-and-frontier` requires `maynard-sieve-and-bounded-prime-gaps`. **Inventory:** 25 A items; 5 B items. Contract and source detail: [R2 sieve/prime dossier](number-theory-scaffolds-2026-10-23/analytic/r2-sieves-primes.md).

A-page ordered contracts:

- `def-admissible-prime-tuple` (definition) — Admissible finite tuple of integer shifts. Item suppliers: `def-prime`, `thm-standard-representatives-modulo-n`, `def-finite-cardinality`.
- `def-liminf-consecutive-prime-gap-hm` (definition) — The liminf gap H_m between consecutive primes. Item suppliers: `def-prime`, `def-prime-counting-function`.
- `def-prime-level-of-distribution` (definition) — Level of distribution for primes in arithmetic progressions. Item suppliers: `def-prime-progression-discrepancy`.
- `def-prime-tuple-singular-series` (definition) — Hardy–Littlewood singular series of an admissible tuple. Item suppliers: `def-admissible-prime-tuple`, `def-prime`, `def-unit-group-modulo-n-and-euler-totient`.
- `def-gpy-prime-tuple-divisor-sum-weight` (definition) — GPY truncated divisor-sum weights for a prime tuple. Item suppliers: `def-admissible-prime-tuple`, `def-number-theoretic-mobius-function`, `def-von-mangoldt-function`, `thm-canonical-prime-factorisation`.
- `thm-gpy-level-of-distribution-small-gap-criterion` (theorem) — GPY small-gap criterion from distribution beyond one half. Item suppliers: `def-gpy-prime-tuple-divisor-sum-weight`, `def-prime-level-of-distribution`, `def-prime-tuple-singular-series`, `def-admissible-prime-tuple`.
- `def-maynard-variational-quantity-mk` (definition) — Maynard simplex functionals I_k, J_k,i, and M_k. Item suppliers: `def-admissible-prime-tuple`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-support-and-compactly-supported-riemann-integral-in-rn`.
- `thm-maynard-multidimensional-sieve-dhl-criterion` (theorem) — Maynard criterion for DHL[k,m+1]. Item suppliers: `def-maynard-variational-quantity-mk`, `def-prime-level-of-distribution`, `def-admissible-prime-tuple`.
- `thm-maynard-simplex-growth-bound` (theorem) — Maynard’s logarithmic growth lower bound for M_k. Item suppliers: `def-maynard-variational-quantity-mk`.
- `thm-maynard-growth-bound-for-hm` (theorem) — Maynard exponential upper bound for H_m. Item suppliers: `thm-maynard-multidimensional-sieve-dhl-criterion`, `def-liminf-consecutive-prime-gap-hm`, `thm-maynard-simplex-growth-bound`.
- `thm-polymath8b-enlarged-simplex-m50-bound` (theorem) — Polymath8b variational bound M_{50,1/25}>4. Item suppliers: `def-maynard-variational-quantity-mk`.
- `thm-maynard-admissible-5-tuple-diameter-12` (theorem) — Admissibility and diameter of Maynard’s 5-tuple. Item suppliers: `def-admissible-prime-tuple`.
- `thm-polymath8b-admissible-3-tuple-diameter-6` (theorem) — Admissibility and diameter of the 3-tuple {0,2,6}. Item suppliers: `def-admissible-prime-tuple`.
- `thm-maynard-admissible-105-tuple-diameter-600` (theorem) — Admissibility and diameter of Maynard’s 105-tuple. Item suppliers: `def-admissible-prime-tuple`.
- `thm-polymath8b-admissible-50-tuple-diameter-246` (theorem) — Admissibility and diameter of Polymath8b’s 50-tuple. Item suppliers: `def-admissible-prime-tuple`.
- `op-hardly-littlewood-prime-tuples` (open-problem) — Hardy–Littlewood prime k-tuples conjecture. Item suppliers: `def-prime-tuple-singular-series`.
- `op-elliott-halberstam-conjecture` (open-problem) — Elliott–Halberstam conjecture. Item suppliers: `def-prime-level-of-distribution`.
- `def-generalized-elliott-halberstam-hypothesis` (definition) — Generalized Elliott–Halberstam hypothesis GEH(θ) for coefficient convolutions. Item suppliers: none.
- `op-generalized-elliott-halberstam-conjecture` (open-problem) — Generalized Elliott–Halberstam conjecture. Item suppliers: `def-generalized-elliott-halberstam-hypothesis`.
- `op-twin-prime-conjecture` (open-problem) — Twin prime conjecture, equivalently H_1=2. Item suppliers: `def-liminf-consecutive-prime-gap-hm`.
- `thm-maynard-unconditional-h1-at-most-600` (theorem) — Maynard's unconditional bound H_1≤600. Item suppliers: `thm-maynard-multidimensional-sieve-dhl-criterion`, `thm-maynard-admissible-105-tuple-diameter-600`, `thm-bombieri-vinogradov-prime-distribution`.
- `thm-maynard-eh-conditional-h1-at-most-12` (theorem) — Maynard's conditional bound H_1≤12 under EH. Item suppliers: `thm-maynard-multidimensional-sieve-dhl-criterion`, `def-maynard-variational-quantity-mk`, `thm-maynard-admissible-5-tuple-diameter-12`.
- `thm-polymath8b-unconditional-h1-at-most-246` (theorem) — Polymath8b unconditional bound H_1≤246. Item suppliers: `thm-maynard-multidimensional-sieve-dhl-criterion`, `thm-polymath8b-enlarged-simplex-m50-bound`, `thm-polymath8b-admissible-50-tuple-diameter-246`, `thm-bombieri-vinogradov-prime-distribution`.
- `thm-polymath8b-geh-dhl-3-2-criterion` (theorem) — Polymath8b generalized-EH criterion for DHL[3,2]. Item suppliers: `def-admissible-prime-tuple`.
- `thm-polymath8b-geh-conditional-h1-at-most-6` (theorem) — Polymath8b conditional bound H_1≤6 under GEH. Item suppliers: `thm-polymath8b-geh-dhl-3-2-criterion`, `thm-polymath8b-admissible-3-tuple-diameter-6`.

B-page examples/status contracts:

- `ex-maynard-admissible-5-tuple-of-diameter-12` (example) — Admissible 5-tuple of diameter 12. Item suppliers: `thm-maynard-admissible-5-tuple-diameter-12`.
- `ex-polymath8b-admissible-3-tuple-of-diameter-6` (example) — Admissible 3-tuple of diameter 6. Item suppliers: `thm-polymath8b-admissible-3-tuple-diameter-6`.
- `ex-maynard-admissible-105-tuple-of-diameter-600` (example) — Maynard's admissible 105-tuple of diameter 600. Item suppliers: `thm-maynard-admissible-105-tuple-diameter-600`.
- `ex-polymath8b-admissible-50-tuple-of-diameter-246` (example) — Polymath8b admissible 50-tuple of diameter 246. Item suppliers: `thm-polymath8b-admissible-50-tuple-diameter-246`.
- `rem-2026-bounded-prime-gap-source-frontier` (remark) — Dated source claims for bounded prime gaps as of 2026-10-23. Item suppliers: `def-liminf-consecutive-prime-gap-hm`, `thm-polymath8b-unconditional-h1-at-most-246`.

#### w-tricked-prime-pseudorandomness / w-tricked-prime-pseudorandomness-examples

**A:** Pseudorandom Majorant for W-Tricked Primes. **B:** W-Tricked Prime-Majorant Examples. **Direct A prerequisites:** `prime-distribution-in-arithmetic-progressions`. **B prerequisite:** `w-tricked-prime-pseudorandomness-examples` requires `w-tricked-prime-pseudorandomness`. **Inventory:** 8 A items; 2 B items. Contract and source detail: [R3 sums/circle-method dossier](number-theory-scaffolds-2026-10-23/analytic/r3-sums-circle-method.md), [R3 source review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/source-review.md), [noncompact entropy review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/noncompact-entropy-source-review.md), and [divisor/circle import review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/li-yang-cen-import-source-review.md).

A-page ordered contracts:

- `def-w-trick-prime-modulus` (definition) — W=∏_{p≤w}p and the progression Wn+b. Item suppliers: none.
- `def-w-tricked-von-mangoldt-function` (definition) — Rescaled prime von Mangoldt function on Wn+b. Item suppliers: `def-w-trick-prime-modulus`.
- `def-goldston-yildirim-truncated-divisor-sum` (definition) — Λ_R(n)=Σ_{d\|n,d≤R} μ(d)log(R/d). Item suppliers: none.
- `alg-goldston-yildirim-pseudorandom-majorant` (algorithm) — Construct the truncated-divisor-square majorant ν for W-tricked primes. Item suppliers: `def-w-trick-prime-modulus`, `def-w-tricked-von-mangoldt-function`, `def-goldston-yildirim-truncated-divisor-sum`.
- `lem-goldston-yildirim-zeta-contour-integral` (lemma) — Multivariable ζ-contour asymptotic used in GY linear-form correlations. Item suppliers: `thm-riemann-zeta-classical-zero-free-region`, `thm-zeta-bounds-in-classical-zero-free-region`.
- `thm-goldston-yildirim-linear-forms-asymptotic` (theorem) — Asymptotics for products of Λ_R(Wψ_i+1)^2 over nonparallel forms. Item suppliers: `def-goldston-yildirim-truncated-divisor-sum`, `lem-goldston-yildirim-zeta-contour-integral`.
- `thm-goldston-yildirim-correlation-bound` (theorem) — Higher correlation bound with the arithmetic difference factor. Item suppliers: `def-goldston-yildirim-truncated-divisor-sum`, `lem-goldston-yildirim-zeta-contour-integral`.
- `thm-w-tricked-primes-have-pseudorandom-majorant` (theorem) — The Goldston–Yıldırım measure majorizes W-tricked primes and is k-pseudorandom. Item suppliers: `alg-goldston-yildirim-pseudorandom-majorant`, `thm-goldston-yildirim-linear-forms-asymptotic`, `thm-goldston-yildirim-correlation-bound`, `thm-siegel-walfisz-prime-distribution`.

B-page examples/status contracts:

- `ex-w-trick-removes-small-prime-local-obstructions` (example) — Why the residue class b mod W removes local obstructions. Item suppliers: `def-w-trick-prime-modulus`.
- `ex-truncated-divisor-majorant-on-a-prime` (example) — Evaluate Λ_R(n) at a prime n>R. Item suppliers: `def-goldston-yildirim-truncated-divisor-sum`.

### New-page dependency layer 15

#### chen-double-sieve-and-almost-primes / chen-sieve-examples-and-frontier

**A:** Chen's theorem, weighted sieves, and switching. **B:** Chen sieve examples and weighted-switching developments. **Direct A prerequisites:** `maynard-sieve-and-bounded-prime-gaps`. **B prerequisite:** `chen-sieve-examples-and-frontier` requires `chen-double-sieve-and-almost-primes`. **Inventory:** 13 A items; 3 B items. Contract and source detail: [R2 sieve/prime dossier](number-theory-scaffolds-2026-10-23/analytic/r2-sieves-primes.md).

A-page ordered contracts:

- `def-prime-factor-count-with-multiplicity` (definition) — Almost-primes and prime-factor count with multiplicity. Item suppliers: `thm-canonical-prime-factorisation`, `def-prime`.
- `lem-chen-singular-series-specialization` (lemma) — Chen's even-shift singular series as the two-tuple singular series. Item suppliers: `def-prime-tuple-singular-series`, `def-prime`, `def-unit-group-modulo-n-and-euler-totient`, `def-admissible-prime-tuple`.
- `def-linear-sieve-level-of-distribution` (definition) — Level of distribution and local density for a linear sieve sequence. Item suppliers: `def-sieve-sequence-local-density-and-remainders`.
- `thm-linear-sieve-fundamental-lemma` (theorem) — Fundamental lemma of sieve theory under distribution and dimension hypotheses. Item suppliers: `def-linear-sieve-level-of-distribution`, `thm-brun-combinatorial-sieve-inequalities`.
- `def-chen-kuehn-weighted-sifted-sum` (definition) — Kuhn weight and the weighted sifted sum in Chen's argument. Item suppliers: `def-prime-factor-count-with-multiplicity`, `lem-chen-singular-series-specialization`, `def-sieve-sequence-local-density-and-remainders`.
- `def-weighted-switching-level-hypotheses` (definition) — Original and switched level-of-distribution hypotheses for weighted sieves. Item suppliers: `def-linear-sieve-level-of-distribution`, `def-prime-factor-count-with-multiplicity`.
- `thm-kuehn-weighted-prime-translate-sieve` (theorem) — Kuhn weighted-sieve lower bound for prime translates. Item suppliers: `def-chen-kuehn-weighted-sifted-sum`, `thm-linear-sieve-fundamental-lemma`, `thm-bombieri-vinogradov-prime-distribution`, `thm-siegel-walfisz-prime-distribution`.
- `thm-chen-weighted-sifted-lower-bound` (theorem) — Lower bound for Chen's weighted rough-prime sum. Item suppliers: `thm-kuehn-weighted-prime-translate-sieve`, `lem-chen-singular-series-specialization`.
- `thm-chen-switched-triple-product-upper-bound` (theorem) — Upper bound for the switched prime and three-factor contribution. Item suppliers: `lem-chen-singular-series-specialization`, `thm-selberg-sieve-upper-bound-with-remainders`, `thm-multiplicative-large-sieve-inequality`, `thm-bombieri-vinogradov-prime-distribution`, `thm-siegel-walfisz-prime-distribution`.
- `lem-chen-switching-count-lower-bound` (lemma) — Switching and half-counting the three-prime-factor obstruction. Item suppliers: `def-prime-factor-count-with-multiplicity`, `thm-chen-weighted-sifted-lower-bound`, `thm-chen-switched-triple-product-upper-bound`.
- `thm-chen-goldbach-prime-plus-p2` (theorem) — Every sufficiently large even integer is a prime plus a P2 number. Item suppliers: `lem-chen-switching-count-lower-bound`, `lem-chen-singular-series-specialization`.
- `thm-chen-prime-shift-plus-p2` (theorem) — Infinitely many prime shifts with at most two prime factors. Item suppliers: `lem-chen-switching-count-lower-bound`, `lem-chen-singular-series-specialization`.
- `thm-weighted-switching-p-p3-at-level-0-267` (theorem) — Weighted switching detects prime–P3 pairs at level 0.267 in both problems. Item suppliers: `def-weighted-switching-level-hypotheses`, `thm-linear-sieve-fundamental-lemma`.

B-page examples/status contracts:

- `ex-chen-goldbach-and-shifted-prime-specializations` (example) — Goldbach and shifted-prime specializations of Chen's theorem. Item suppliers: `thm-chen-goldbach-prime-plus-p2`, `thm-chen-prime-shift-plus-p2`.
- `rem-weighted-switching-diophantine-approximation-application` (remark) — A separate weighted-switching Diophantine-approximation application. Item suppliers: none.
- `rem-chen-proof-source-corrections` (remark) — Chen proof sources, corrected inequalities, and scope limits. Item suppliers: `thm-chen-goldbach-prime-plus-p2`, `thm-chen-prime-shift-plus-p2`.

#### green-tao-prime-arithmetic-progressions / green-tao-prime-arithmetic-progressions-examples

**A:** The Primes Contain Arbitrarily Long Arithmetic Progressions. **B:** Examples of Prime Arithmetic Progressions. **Direct A prerequisites:** `relative-szemeredi-transference-theorem`, `w-tricked-prime-pseudorandomness`. **B prerequisite:** `green-tao-prime-arithmetic-progressions-examples` requires `green-tao-prime-arithmetic-progressions`. **Inventory:** 4 A items; 2 B items. Contract and source detail: [R3 sums/circle-method dossier](number-theory-scaffolds-2026-10-23/analytic/r3-sums-circle-method.md), [R3 source review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/source-review.md), [noncompact entropy review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/noncompact-entropy-source-review.md), and [divisor/circle import review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/li-yang-cen-import-source-review.md).

A-page ordered contracts:

- `alg-green-tao-prime-progression-transfer` (algorithm) — Restrict by W, majorize, apply relative Szemerédi, and unwrap a nondegenerate progression. Item suppliers: `thm-szemeredi-relative-to-a-pseudorandom-measure`, `thm-w-tricked-primes-have-pseudorandom-majorant`.
- `lem-unwrap-w-tricked-progression-to-primes` (lemma) — A nondegenerate progression of Wn+b primes gives a prime progression. Item suppliers: `alg-green-tao-prime-progression-transfer`.
- `thm-primes-contain-arbitrarily-long-arithmetic-progressions` (theorem) — The primes contain infinitely many k-term arithmetic progressions for every fixed k. Item suppliers: `alg-green-tao-prime-progression-transfer`, `lem-unwrap-w-tricked-progression-to-primes`.
- `thm-positive-relative-density-subsets-of-primes-contain-progressions` (theorem) — Every positive-relative-upper-density subset of the primes contains all fixed AP lengths. Item suppliers: `thm-primes-contain-arbitrarily-long-arithmetic-progressions`.

B-page examples/status contracts:

- `ex-green-tao-three-term-prime-progression` (example) — A three-term prime progression and its W-tricked parameters. Item suppliers: `thm-primes-contain-arbitrarily-long-arithmetic-progressions`.
- `ex-w-trick-progression-unwrapping` (example) — Unwrap a progression in Wn+b to an integer progression of primes. Item suppliers: `lem-unwrap-w-tricked-progression-to-primes`.

#### green-tao-linear-equations-in-primes / green-tao-linear-equations-in-primes-examples

**A:** Generalized Hardy–Littlewood Asymptotics for Finite-Complexity Systems. **B:** Examples of Finite-Complexity Prime Patterns. **Direct A prerequisites:** `w-tricked-prime-pseudorandomness`, `green-tao-ziegler-gowers-inverse-theorem`, `mobius-nilsequence-orthogonality`. **B prerequisite:** `green-tao-linear-equations-in-primes-examples` requires `green-tao-linear-equations-in-primes`. **Inventory:** 5 A items; 2 B items. Contract and source detail: [R3 sums/circle-method dossier](number-theory-scaffolds-2026-10-23/analytic/r3-sums-circle-method.md), [R3 source review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/source-review.md), [noncompact entropy review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/noncompact-entropy-source-review.md), and [divisor/circle import review](number-theory-scaffolds-2026-10-23/analytic/r3-sources/li-yang-cen-import-source-review.md).

A-page ordered contracts:

- `def-affine-linear-forms-system-and-size` (definition) — Affine-linear system Ψ:Z^d→Z^t and scale-dependent size. Item suppliers: none.
- `def-finite-complexity-of-a-linear-forms-system` (definition) — Cauchy–Schwarz complexity of a finite affine-linear system. Item suppliers: `def-affine-linear-forms-system-and-size`.
- `def-local-von-mangoldt-factor-beta-p` (definition) — Local prime factor β_p(Ψ) and singular product. Item suppliers: `def-affine-linear-forms-system-and-size`.
- `alg-w-trick-and-enveloping-sieve-for-linear-systems` (algorithm) — W-trick, enveloping sieve, and reduction to a Gowers norm. Item suppliers: `def-finite-complexity-of-a-linear-forms-system`, `thm-w-tricked-primes-have-pseudorandom-majorant`.
- `thm-green-tao-generalized-hardy-littlewood-finite-complexity` (theorem) — Prime-pattern asymptotic for systems with no affinely related pair of forms. Item suppliers: `def-local-von-mangoldt-factor-beta-p`, `alg-w-trick-and-enveloping-sieve-for-linear-systems`, `thm-green-tao-ziegler-inverse-theorem-for-gowers-norms`, `thm-green-tao-mobius-orthogonality-to-polynomial-nilsequences`, `thm-siegel-walfisz-prime-distribution`.

B-page examples/status contracts:

- `ex-four-term-prime-progression-as-a-finite-complexity-system` (example) — Four-term prime progressions are a finite-complexity system. Item suppliers: `thm-green-tao-generalized-hardy-littlewood-finite-complexity`.
- `ex-twin-prime-system-is-infinite-complexity` (example) — The twin-prime pair is excluded because its two forms are affinely related. Item suppliers: `def-finite-complexity-of-a-linear-forms-system`.

#### smooth-modulus-prime-distribution-and-harman-gaps / smooth-modulus-prime-distribution-examples

**A:** Prime Distribution to Smooth Moduli and Harman’s Many-Prime Sieve. **B:** Smooth-Modulus Distribution Examples and Harman-Sieve Parameters. **Direct A prerequisites:** `maynard-sieve-and-bounded-prime-gaps`, `deligne-trace-quasi-orthogonality`. **B prerequisite:** `smooth-modulus-prime-distribution-examples` requires `smooth-modulus-prime-distribution-and-harman-gaps`. **Inventory:** 18 A items; 4 B items. Contract and source detail: [R2 sieve/prime dossier](number-theory-scaffolds-2026-10-23/analytic/r2-sieves-primes.md).

A-page ordered contracts:

- `def-smooth-moduli-and-progression-discrepancy` (definition) — Squarefree smooth moduli and progression discrepancy. Item suppliers: `def-arithmetic-function`, `def-unit-group-modulo-n-and-euler-totient`.
- `def-smooth-modulus-exponent-of-distribution` (definition) — Exponent of distribution to squarefree smooth moduli. Item suppliers: `def-smooth-moduli-and-progression-discrepancy`.
- `def-siegel-walfisz-coefficient-sequence` (definition) — Coefficient sequences with the Siegel–Walfisz property. Item suppliers: `def-smooth-moduli-and-progression-discrepancy`.
- `thm-siegel-walfisz-for-heath-brown-coefficients` (theorem) — Siegel–Walfisz property for Heath–Brown coefficient factors. Item suppliers: `def-siegel-walfisz-coefficient-sequence`, `thm-classical-zero-free-region-dirichlet-l`, `thm-landau-page-exceptional-zero-uniqueness`, `thm-siegel-ineffective-lower-bound-dirichlet-zero`, `thm-dirichlet-character-orthogonality`, `thm-primitive-dirichlet-l-analytic-continuation`, `thm-primitive-dirichlet-l-functional-equation`, `thm-truncated-perron-formula`.
- `thm-heath-brown-identity-for-von-mangoldt-sums` (theorem) — Finite Heath–Brown identity for the von Mangoldt function. Item suppliers: `def-von-mangoldt-function`, `def-number-theoretic-mobius-function`, `cor-von-mangoldt-mobius-inversion-formula`, `thm-canonical-prime-factorisation`.
- `def-polymath-densely-divisible-moduli` (definition) — Iterated dense divisibility of squarefree moduli. Item suppliers: `def-smooth-moduli-and-progression-discrepancy`, `thm-canonical-prime-factorisation`.
- `def-polymath-type-iii-estimate` (definition) — Type III distribution estimate for smooth coefficient sequences. Item suppliers: `def-polymath-densely-divisible-moduli`, `def-siegel-walfisz-coefficient-sequence`.
- `thm-bilinear-bombieri-vinogradov-for-coefficients` (theorem) — Bilinear Bombieri–Vinogradov estimate for coefficient sequences. Item suppliers: `def-siegel-walfisz-coefficient-sequence`, `thm-multiplicative-large-sieve-inequality`.
- `thm-kloosterman-sheaf-rank-conductor-monodromy` (theorem) — Rank, conductor, irreducibility, and monodromy of hyper-Kloosterman sheaves. Item suppliers: `def-trace-function-conductor`.
- `thm-hyper-kloosterman-composite-modulus-correlation` (theorem) — Squarefree composite-modulus correlation bound for rank-three hyper-Kloosterman sums. Item suppliers: `thm-kloosterman-sheaf-rank-conductor-monodromy`, `thm-deligne-quasi-orthogonality-for-geometrically-irreducible-trace-functions`.
- `thm-rational-phase-incomplete-sum-bound` (theorem) — Incomplete rational-phase sums from Deligne and one van der Corput step. Item suppliers: `def-polymath-densely-divisible-moduli`, `thm-deligne-quasi-orthogonality-for-geometrically-irreducible-trace-functions`.
- `thm-polymath-type-iii-smooth-modulus-estimate` (theorem) — Polymath8a Type III estimate for densely divisible moduli. Item suppliers: `def-polymath-type-iii-estimate`, `thm-bilinear-bombieri-vinogradov-for-coefficients`, `thm-hyper-kloosterman-composite-modulus-correlation`.
- `thm-stadlmann-type-i-ii-smooth-modulus-estimate` (theorem) — Stadlmann’s improved Type I/II estimate for smooth moduli. Item suppliers: `def-smooth-modulus-exponent-of-distribution`, `def-siegel-walfisz-coefficient-sequence`, `thm-bilinear-bombieri-vinogradov-for-coefficients`, `thm-rational-phase-incomplete-sum-bound`, `thm-siegel-walfisz-for-heath-brown-coefficients`.
- `thm-stadlmann-smooth-modulus-mpz-criterion` (theorem) — MPZ criterion from Stadlmann Type I/II and Polymath Type III estimates. Item suppliers: `def-polymath-type-iii-estimate`, `thm-stadlmann-type-i-ii-smooth-modulus-estimate`, `thm-polymath-type-iii-smooth-modulus-estimate`.
- `thm-stadlmann-smooth-modulus-prime-distribution` (theorem) — Stadlmann’s exponent 1/2+1/40−ε for prime distribution to smooth moduli. Item suppliers: `def-smooth-moduli-and-progression-discrepancy`, `def-smooth-modulus-exponent-of-distribution`, `thm-stadlmann-smooth-modulus-mpz-criterion`, `cor-von-mangoldt-mobius-inversion-formula`, `thm-heath-brown-identity-for-von-mangoldt-sums`, `thm-siegel-walfisz-for-heath-brown-coefficients`, `def-prime`, `def-prime-counting-function`, `def-unit-group-modulo-n-and-euler-totient`.
- `thm-stadlmann-harman-prime-minorant` (theorem) — Stadlmann’s explicit prime minorant with smooth-modulus exponent 0.5253. Item suppliers: `def-smooth-modulus-exponent-of-distribution`, `thm-stadlmann-type-i-ii-smooth-modulus-estimate`, `thm-polymath-type-iii-smooth-modulus-estimate`.
- `thm-harman-minorant-prime-gap-growth-criterion` (theorem) — Harman–Maynard criterion from a prime minorant with smooth-modulus distribution. Item suppliers: `def-smooth-modulus-exponent-of-distribution`, `def-liminf-consecutive-prime-gap-hm`, `thm-maynard-simplex-growth-bound`.
- `thm-stadlmann-bounded-many-prime-gap-growth` (theorem) — Stadlmann’s bound H_m≪exp(3.8075m). Item suppliers: `thm-stadlmann-harman-prime-minorant`, `thm-harman-minorant-prime-gap-growth-criterion`, `def-liminf-consecutive-prime-gap-hm`.

B-page examples/status contracts:

- `ex-stadlmann-2025-prime-distribution-parameter-range` (example) — Stadlmann’s smooth-modulus exponent and parameter choice. Item suppliers: `thm-stadlmann-smooth-modulus-prime-distribution`.
- `ex-stadlmann-corollary-h2-through-h5` (example) — Stadlmann’s improved H₂–H₅ admissible-tuple bounds. Item suppliers: `thm-stadlmann-smooth-modulus-prime-distribution`.
- `ex-stadlmann-2025-many-prime-gap-bound` (example) — From the 0.5253 minorant exponent to H_m≪exp(3.8075m). Item suppliers: `thm-stadlmann-bounded-many-prime-gap-growth`.
- `rem-stadlmann-2025-versus-2026-bound-240` (remark) — The 2025 distribution theorem is separate from the 2026 H_1≤240 preprint. Item suppliers: `thm-stadlmann-smooth-modulus-prime-distribution`, `thm-stadlmann-bounded-many-prime-gap-growth`.

### New-page dependency layer 16

#### rankin-erdos-rankin-large-prime-gaps / large-prime-gap-examples-and-frontier

**A:** Rankin's construction and large prime gaps. **B:** Large-gap constructions and 2026 source status. **Direct A prerequisites:** `chen-double-sieve-and-almost-primes`. **B prerequisite:** `large-prime-gap-examples-and-frontier` requires `rankin-erdos-rankin-large-prime-gaps`. **Inventory:** 9 A items; 2 B items. Contract and source detail: [R2 sieve/prime dossier](number-theory-scaffolds-2026-10-23/analytic/r2-sieves-primes.md).

A-page ordered contracts:

- `def-iterated-logarithms-and-prime-gap-scale` (definition) — Iterated logarithms and the Rankin prime-gap scale. Item suppliers: `def-natural-logarithm`.
- `def-prime-gap-functions` (definition) — Consecutive prime gaps, maximal gaps, and fixed-length gap chains. Item suppliers: `def-prime`, `def-prime-counting-function`.
- `def-prime-residue-covering-length` (definition) — Residue-class covering length for the primes up to a cutoff. Item suppliers: `def-prime`.
- `lem-crt-residue-covering-to-prime-gap` (lemma) — A residue-class cover yields a prime-free interval and a prime gap. Item suppliers: `def-prime-gap-functions`, `def-prime-residue-covering-length`, `thm-chinese-remainder-theorem-for-comaximal-ideals`, `thm-standard-representatives-modulo-n`.
- `lem-rankin-covering-system-lower-bound` (lemma) — Rankin's three-stage covering construction. Item suppliers: `def-prime-residue-covering-length`, `thm-first-mertens-theorem-for-primes`, `thm-third-mertens-theorem-for-primes`, `thm-prime-number-theorem-logarithmic-integral`, `thm-linear-sieve-fundamental-lemma`.
- `thm-rankin-classical-prime-gap-lower-bound` (theorem) — Rankin's classical lower bound for the maximal prime gap. Item suppliers: `def-prime-gap-functions`, `def-iterated-logarithms-and-prime-gap-scale`, `lem-crt-residue-covering-to-prime-gap`, `lem-rankin-covering-system-lower-bound`.
- `thm-erdos-rankin-arbitrarily-large-scale-prime-gaps` (theorem) — Arbitrarily large multiples of the Rankin scale occur as prime gaps. Item suppliers: `def-prime-gap-functions`, `def-iterated-logarithms-and-prime-gap-scale`, `lem-crt-residue-covering-to-prime-gap`, `thm-maynard-simplex-growth-bound`, `thm-maynard-multidimensional-sieve-dhl-criterion`, `thm-bombieri-vinogradov-prime-distribution`.
- `thm-fgmt-quantitative-large-prime-gap-bound` (theorem) — Ford–Green–Konyagin–Maynard–Tao quantitative large-gap bound. Item suppliers: `def-prime-gap-functions`, `def-iterated-logarithms-and-prime-gap-scale`, `thm-maynard-simplex-growth-bound`, `thm-maynard-multidimensional-sieve-dhl-criterion`, `thm-bombieri-vinogradov-prime-distribution`, `lem-crt-residue-covering-to-prime-gap`.
- `thm-ford-maynard-tao-fixed-length-large-gap-chains` (theorem) — Quantitative chains of a fixed number of consecutive large prime gaps. Item suppliers: `def-prime-gap-functions`, `def-iterated-logarithms-and-prime-gap-scale`, `thm-fgmt-quantitative-large-prime-gap-bound`, `thm-maynard-simplex-growth-bound`, `thm-maynard-multidimensional-sieve-dhl-criterion`, `thm-bombieri-vinogradov-prime-distribution`.

B-page examples/status contracts:

- `ex-rankin-residue-covering-and-crt-interval` (example) — A worked residue-class cover and the Chinese-remainder gap transfer. Item suppliers: `def-prime-residue-covering-length`, `lem-crt-residue-covering-to-prime-gap`.
- `rem-2026-large-prime-gap-source-status` (remark) — Dated 2026 large-gap claims and verification boundaries. Item suppliers: `def-prime-gap-functions`, `def-iterated-logarithms-and-prime-gap-scale`, `thm-fgmt-quantitative-large-prime-gap-bound`.

## Source dispositions and frontier limits

The owner dossiers and source indexes are required parts of this plan. They state source identity, exact full-text reading extent, theorem-by-theorem reuse/include/defer disposition, original locators, and unresolved derivation or certificate gates. The source-specific cross-category prerequisites are listed at the page/item edges.

The dated status ledger distinguishes established theorems from preprint claims. It separates Stadlmann’s 2025 smooth-modulus/many-prime result from 2026 bounded-gap claims and records the 182 bundle’s unverified formal/numerical premises. The 2024 Green–Tao–Ziegler erratum controls the inverse theorem. Selberg/QUE scope is corrected, with the BL 2004 noncompact entropy alternative read and explicitly bounded. Chebotarev distinguishes Dirichlet density from natural/effective prime-ideal asymptotics. The analytic Divisor/Circle branch treats Bourgain–Watt v1 as withdrawn in v2, reports conflicting 2026 claims without a current-best label, and keeps the Huxley/Robert–Sargos full-proof gates visible. The 2026 Chowla, metric-manifold, binary Goldbach, general Manin–Peyre, and non-Hecke QUE questions remain nonlogical endpoints with owner/status evidence.

Open proof obligations remain local theorem work: numerical certificate replay; the 182 physical-integral/continuous-adic premises; unreviewed Huxley/Robert–Sargos source inputs; selected imports in R2’s prime-gap chain; and high-rank automorphic proofs beyond the exact adjacent-rank Cogdell/JPSS/Jacquet scope. These do not promote or demote theorem statements; the source dossiers state which claims are proven, conditional, withdrawn, or awaiting a local proof. See [the build report](number-theory-scaffolds-2026-10-23/analytic/build-report.md), [independent audit](number-theory-scaffolds-2026-10-23/analytic/audit-report.md), and [proposed item inventory](number-theory-scaffolds-2026-10-23/analytic/proposed-inventories.json).
