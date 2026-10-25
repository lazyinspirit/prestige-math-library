# Analytic number theory scaffold report

**Snapshot:** 2026-10-23. **Category:** `analytic-number-theory`.
**Status:** current source-based planning projection; root has spliced the new
category rows into the canonical plan and the official canonical validator is
running. The final validation receipt is pending.

## Scope

This branch plans a new analytic number theory category while preserving the
published `number-theory`, `complex-analysis`, `fourier-analysis`, `lie-theory`,
and other supplier homes. It does not create library item/page carriers, launch an autopilot/native run, certify proofs, or
claim that every future local proof obligation is already closed. Root owns the
canonical plan and has appended both new category splices.
The requested category overview and pathway are recorded in
[`research/plan-analytic-number-theory-track.md`](../../plan-analytic-number-theory-track.md);
that file is a prose planning document, not a library category/pathway page.

The current combined projection contains **71 reciprocal A/B pairs, 142 page
rows, and 677 proposed item contracts**. Its canonical page rows keep
`items: []`; the separate inventory lists ordered item contracts and their
dependencies. This is normal planning representation, not a proof certificate.
Root has topologically appended both new categories above the prior plan
maximum (3215); final canonical validation is running.

## Provisional graph snapshot

- The current combined source projection has 71 A/B pairs, 142 analytic page
  rows, and 677 item contracts. The source fragment uses canonical `items: []`
  rows; the separate inventory carries ordered items and dependencies.
- The root has topologically merged and spliced both proposed categories into
  the canonical plan. Page requirements were reduced with supplier reachability
  preserved. My analytic projection check found no duplicate/missing AN page or
  item IDs, no AN item-to-page gaps or within-page forward refs, no AN open-item
  supplier edges, no B theorem/status misplacement, and no A page over 100 items.
- The root-reported proposed-page/item validation passed for 282 pages and
  1,355 items. The actual canonical `validate-plan` is running; its official
  receipt and independent final cross-track audit are pending.

The source-side machine files and hashes are:

- [`plan-spec.fragment.json`](plan-spec.fragment.json) — SHA-256
  `3e81987036c03409f298d712f545889b61ee916d7a2054d154d9359e66c29281`.
- [`proposed-inventories.json`](proposed-inventories.json) — SHA-256
  `c79380023ce8d6f5b7f1efc85ecbe012d1f584b5880297ad54fbaa1d6769e57d`.

The first temporary `validate-plan` run used the superseded 64-pair pre-repair
snapshot and failed; see [early-1.log](../validation/early-1.log). Its AN
supplier/order/kind issues have since been repaired. The canonical validator
receipt is authoritative for final plan integrity.
## Branches included in the current projection

The root-commissioned breadth audit did not remove any existing pairs. The
current 71-pair projection includes the additional classic branches:

- **R1 divisor/circle discrepancy:** exponent pairs and classical Voronoï,
  then divisor/Gauss-circle discrepancy. Miller–Schmid supplies the proved
  circle `Oε(X^{1/3+ε})` estimate; Meurman supplies the pointwise
  endpoint-averaged divisor Voronoï identity. The broader weighted K₀/Y₀
  formula and Huxley/Robert–Sargos imports remain exact source/proof gates.
  The withdrawn Bourgain–Watt v1 `517/1648` theorem is a nonlogical
  withdrawal remark only.
- **R2 Chen and large gaps:** Chen weighted/double sieve, then
  Erdős–Rankin/modern maximal-gap bounds. The MZ step-profile application is
  explicitly proof-gated where the source assumes Lipschitz regularity and
  prints a nonsmooth step profile.
- **R5 Hausdorff and dynamics:** dimension-function mass transfer,
  Jarník–Besicovitch and Khintchine–Groshev systems, then homogeneous-flow
  correspondences and nondegenerate-manifold results. Littlewood and the
  other manifold dimension questions remain nonlogical open items.

The current AN page/item closure check found zero duplicate or dangling AN IDs,
zero AN item-to-page gaps, zero same-page forward references, zero open-problem
supplier edges, and no A/B or item-cap violations. The mixed two-category page
graph was topologically sorted and reduced; the root's official validator and
auditor remain the acceptance checks. The future-run 130-pair limit is not a
scope ceiling: root will partition the final dependency DAG into build-sized
selections.

## Existing supplier audit

I inspected the current plan rows, published page files, and item carriers for
the existing analytic backbone. In particular, the orders 692–707 number
theory block already supplies arithmetic functions and convolution, average
orders, Chebyshev and Mertens estimates, Dirichlet series/Euler products,
Dirichlet characters and L-functions, explicit formulae, the classical zeta
zero-free region, the prime number theorem, and fixed-modulus prime number
theorems in arithmetic progressions. The new category reuses these stable
contracts; it does not rehome or duplicate them.

Exact inspected boundaries include:

- [`dirichlet-characters-l-functions-and-primes-in-progressions.md`](../../../library/number-theory/dirichlet-characters-l-functions-and-primes-in-progressions.md)
  and `items/thm-prime-number-theorem-arithmetic-progressions.md`: the latter
  is fixed-modulus only and cannot supply uniform growing-modulus estimates.
- [`classical-zero-free-region-and-the-prime-number-theorem.md`](../../../library/number-theory/classical-zero-free-region-and-the-prime-number-theorem.md):
  its classical zero-free item explicitly assumes countable choice.
- `items/thm-primitive-dirichlet-l-functional-equation.md`: the parity-normalized
  functional equation was inspected.
- [`the-riemann-zeta-function.md`](../../../library/complex-analysis/the-riemann-zeta-function.md):
  22 published items, including continuation, functional equation, trivial
  zeros, Hadamard product, and special values.
- [`level-one-modular-forms-and-the-j-invariant.md`](../../../library/complex-analysis/level-one-modular-forms-and-the-j-invariant.md):
  27 published items; the level-one form/cusp-form definition, q-expansion,
  Eisenstein, valence, and ring interfaces were inspected. The new automorphic
  pairs extend to congruence Hecke forms and Maass/automorphic theory.
- Published number-field, ideal-factorization, Minkowski/class-group, unit,
  and Frobenius pages were inspected. Existing Frobenius items already cover
  the unramified arithmetic Frobenius class, uniqueness, and conjugacy.
- [`poisson-summation-sampling-and-lattice-duality.md`](../../../library/fourier-analysis/poisson-summation-sampling-and-lattice-duality.md)
  supplies `thm-poisson-summation-for-a-full-rank-lattice`, used as an input to
  the planned Dedekind-zeta proof.

## Full-text source work and dispositions

The source ledgers are the detailed evidence record; each gives original
locators, full-text read ranges, theorem/result harvests, inclusion/reuse/defer
decisions, and local source files. “Retrieved” is not used as a synonym for
“read,” and source citation does not close the future local proof.

- [R1 source ledger](r1-sources/README.md) covers Green's PNT notes, Evertse
  Chapters 0–6, Montgomery–Vaughan Chapters 27–29, Heath-Brown's complete
  density paper, Guth–Maynard, Turnage-Butterbaugh, Thorner–Zaman, Weiss, Stark,
  Lagarias–Odlyzko, Neukirch Chapter VII, and numerical-zero sources. It
  distinguishes direct theorem suppliers from reused library material, deeper
  imports, computation examples, and proof-gated inputs.
- [R2 sieve/prime report](r2-sieves-primes.md) records complete relevant
  Kedlaya chapters and primary GPY, Maynard, Polymath8, Stadlmann, Baker–Irving,
  and frontier reads, with exact statement hypotheses and discovered source
  defects. The 2025 smooth-modulus exponent and many-prime bound are separated
  from 2026 single-gap claims.
- [R3 sums/circle-method report](r3-sums-circle-method.md) and
  [R3 source review](r3-sources/source-review.md) and [noncompact entropy correction review](r3-sources/noncompact-entropy-source-review.md) and [divisor/circle import review](r3-sources/li-yang-cen-import-source-review.md) record exponential-sum,
  VMVT/decoupling, Gowers/transference, Green–Tao, nilsequence, trace-function,
  and Goldbach sources; they also carry corrected Green–Tao–Ziegler erratum
  scope and explicit proof/computation obligations.
- [R4 automorphic report](r4-automorphic-spectral.md) and
  [R4 source index](r4-sources/source-index.md) record modular/Hecke, Maass,
  trace formula, QUE, GL2/GL3 and scoped higher-rank sources, including exactly
  which GL(n) source chains remain unclosed.
- [R5 multiplicative/metric report](r5-multiplicative-metric.md) and
  [R5 source register](r5-sources/README.md) cover pretentious mean values,
  short intervals/correlations, probabilistic and smooth-number theory,
  uniform distribution, metric Diophantine approximation, Schanuel height
  counts, and determinant-method interfaces.
- [Algebraic number theory plan](../algebraic/plan-spec-fragment.json) supplies
  cross-category fields, class field theory, Galois/étale, and height pages
  consumed by this plan. Those pending local proofs are prerequisites, not
  currently published suppliers.

## Coverage map and ownership

| Branch | Planned analytic destination | Boundary and supplier status |
|---|---|---|
| Dedekind zeta, finite-order Hecke L-functions, ray-class prime density | `dedekind-zeta-and-split-prime-density`; `ray-class-hecke-l-functions-and-density` | Uses existing field/lattice/Poisson suppliers and ANT ray-class/CFT interfaces. Hecke nonvanishing follows the exact Neukirch class-field factorization route. Ray-class Dirichlet density is distinct from ANT's later Chebotarev theorem. |
| Dirichlet/Hecke zero-free regions, explicit formulae, density, exceptional zeros | R1 zero-free, Landau–Page/Siegel, explicit-formula, zero-density, and Hecke-density pairs | The 1935 Siegel lower bound is ineffective. R1 includes the Hecke zero-free/log-free density chain, including Weiss, Thorner–Zaman and Stark rather than importing their estimates by citation alone. |
| Sieve, large sieve, uniform AP primes, bounded gaps | R2 sieve, large-sieve, SW/BV, Maynard and smooth-modulus/Harman pairs | Fixed-q PNT-AP is not SW/BV. Maynard criteria retain their distribution assumptions. 2026 gap manuscripts remain dated claims with exact evidence limits. |
| Exponential sums, circle method, VMVT, additive combinatorics and transference | R3 derivative-test, polynomial-Weyl, decoupling/VMVT, Waring, Gowers/Szemerédi, relative-transference and Green–Tao pairs | Existing finite Fourier and stationary-phase suppliers are reused only within scope. The plan includes local Gowers/Szemerédi and pseudorandomness chains. |
| Finite-field trace functions and Deligne bounds | R3 `deligne-trace-quasi-orthogonality`; ANT constructible/lisse, trace-formula, Swan/GOS, and Deligne-weight pages | Requires new AG/étale prerequisites. Special Kloosterman and rational-phase contracts are separate; a generic Deligne citation is not an instantiated proof. |
| Goldbach and finite computational verification | Helfgott ternary Goldbach; R1 certified zero-counting and finite Dirichlet-L verification | The theorem's analytic range and finite remainder need replayable certificates. Binary Goldbach is an open item only, with no supplier edge. |
| Modular forms, Maass spectra, QUE, trace formula, GL2/GL3/GL(n) | R4 congruence-Hecke, Maass, QUE, Kuznetsov, Rankin–Selberg, subconvexity, relative-trace and Selberg pairs | Published level-one forms are reused. Full-level Hecke–Maass QUE and the non-Hecke conjecture are separate. The scoped GL(n+1)×GL(n) Rankin–Selberg continuation/functional equation uses Cogdell’s adjacent-rank global theorem, JPSS local nonarchimedean theory and Jacquet’s archimedean source. The cited global boundedness is not extended to m<n−1; remaining Kim–Shahidi and archimedean inputs stay explicit. |
| Multiplicative functions, smooth numbers, probability, metric approximation | R5 Halász/pretentious, short-interval, correlation/Chowla, Erdős–Kac, Dickman, Weyl and Duffin–Schaeffer pairs | Averaged correlations do not solve fixed-shift Chowla. Reviewed 2026 inhomogeneous counterexamples apply only to the stated highly approximable shifts; arbitrary non-Liouville shifts remain open in the reviewed source. |
| Rational-point counts and heights | R5 Schanuel projective count and determinant method; ANT height and AG suppliers | Schanuel uses relative height first and converts to absolute height with degree-dependent exponents. General Manin–Peyre is owned once by the algebraic track; R5 supplies interfaces and point-count examples. |

## Frontier and proof-readiness limits

- **Bounded prime gaps:** the newest local source claim is the Sharifi/OpenAI
  `H_1 ≤ 182` bundle (main article and Type II/III companions, 18 September
  revision with 3 October formalization update). It leaves 262 physical
  integral inequalities, finite-field estimates, and continuous-adic
  compatibility as inputs; repository/code, certificate and numerical replay
  files are not staged. OpenAI's 186 bundle lacks Lean source/comparator/
  certificate/replay and reports unproved axioms. The 212/236/240 files are
  separate dated claims. Stadlmann's 2025 paper instead supplies smooth-modulus
  exponent `1/2+1/40−ε` and `H_m=O(exp(3.8075m))`. Polymath8b's 2015
  `H_1≤246` remains the peer-reviewed explicit-gap baseline in these dossiers.
- **Kedlaya corrections:** Chapter 12 Theorem 12.2 prints a plus sign in a
  lower sieve bound that conflicts with `V⁻≤V` and the following inequality;
  Chapters 20–21 contain `x+h_j`/`N+h_j` variable slips and Chapter 21 says it
  is incomplete. These statements are not copied. Siegel–Walfisz constants
  remain ineffective despite an “explicit” wording in notes that import Siegel.
- **Chebotarev:** the plan distinguishes the ANT-owned base Dirichlet-density
  theorem from AN natural/effective prime-ideal counting formulae. Lagarias–
  Odlyzko supplies unconditional exceptional-zero and conditional GRH proof
  branches; Thorner–Zaman adds its sharper parameter-sensitive uniform
  asymptotic with explicit zero-density, Stark, and class-field prerequisites.
  Natural density is not inferred from Dirichlet density alone.
- **Gowers inverse theorem:** the 2024 Green–Tao–Ziegler erratum rejects original
  Proposition 8.3 as false as stated and supplies the weaker replacement used
  in its argument. The planned statement uses the corrected proposition and
  filtration hypotheses.
- **Selberg and QUE:** Selberg's conjecture concerns positive cuspidal Maass
  eigenvalues (constants excluded). For `λ=1/4+t²`, the exceptional parameter
  is `θ=2|Im t|=√max(0,1−4λ)`; real tempered parameters have `θ=0`. Kim–Sarnak's
  `7/32` bound is separate from the conjecture and finite-level checks.
  Soundararajan's full-level Hecke–Maass QUE is not widened to general
  congruence nonescape. R3 has now full-read the six-page 2004 primary
  correction to Bourgain–Lindenstrauss and staged a full proof review in
  [R3 source notes](r3-sources/noncompact-entropy-source-review.md). Its
  Theorem 2 supplies the noncompact alternative (small plaque mass or
  geodesic-flow maximal-function escape), maximal inequality, entropy 2/9
  bound, and fixed split-matrix case; it does not repair the stronger
  pointwise BL03 Theorem 2.1. R4 uses this corrected alternative in the local QUE chain; the stronger
  pointwise BL03 Theorem 2.1 remains unsupported and is not asserted.
- **High rank and other imports:** GL(n), including `n≥4`, remains in scope,
  with local JPSS, Cogdell adjacent-rank, and Jacquet archimedean source contracts
  now recorded. The proof gates for m<n−1 and imported Kim–Shahidi inputs remain
  explicit. Other cited results whose local proof imports are incomplete remain
  planned theorem obligations, not open problems. A list of source names is never
  treated as a completed proof.

The detailed independent audit and repair log is
[`audit-report.md`](audit-report.md). This projection will be refreshed after
A/B kind-placement and item-to-page-closure repairs, then independently
re-audited before root integrates anything into the canonical plan.
