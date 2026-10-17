# Batch 19 authoring notes

## Controlling plan and conflicts

The controlling design is NA-11 in research/plan-numerical-linear-track.md and
its full NA-11 contract in
research/numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md.
The current owner direction explicitly routes this pair to that category plan
and audit. The current plan-spec.json independently confirms order 2322,
category numerical-linear-algebra-and-approximation, the two page IDs, and the
three declared page requirements. The older NA-11 paragraph in
research/plan-numerical-analysis-track.md is historical summary text; it agrees
on the main mathematical scope but does not control.

There is no substantive claim conflict with the plan-spec row. The repaired
linear contract adds clarifications that control authoring: treat the Lobatto
case n=0 separately; prove a bound C log(n+1) for both named node families; do
not infer interpolation convergence from E_n(f) -> 0; and give a concrete
transferred rate. These are preserved here. The older NA-10 requirements for
Rolle and interpolation remainder belong to batch 4's supplier, not to batch
19's direct item dependencies.

## Item inventory and dependency levels

The A page contains seven items; the B page contains three examples. The
manifest and item frontmatter carry identical direct dependency arrays.

| Item | Level | In-run suppliers |
|---|---:|---|
| def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants | 0 | none |
| lem-sine-chord-and-lipschitz-bounds | 0 | none |
| lem-cardinal-lagrange-interpolation-and-operator-norm | 1 | A-page definition |
| cor-best-polynomial-approximation-errors-vanish | 1 | A-page definition |
| lem-chebyshev-cardinal-polynomial-formulas | 2 | A-page definition; cardinal lemma |
| thm-chebyshev-interpolation-near-best-error-bound | 2 | A-page definition; cardinal lemma |
| thm-chebyshev-interpolation-lebesgue-constant-log-bound | 3 | A-page definition; cardinal lemma; trigonometric cardinal-formula lemma |
| ex-equispaced-runge-function-interpolation-diverges | 2 | A-page definition; best-error corollary |
| ex-chebyshev-interpolation-node-families-and-degree-one-norms | 2 | A-page definition; cardinal lemma |
| ex-exponential-best-error-rate-for-chebyshev-interpolation | 4 | A-page definition; near-best theorem; logarithmic-norm theorem |

The named local proofs are choice-free. No axiom of choice or dependent choice
is used.

## Supplier-body checks

I inspected the complete Statements/Definitions and Proofs of the actual
published logical suppliers used by these items: def-chebyshev-polynomials-
first-and-second-kind, thm-chebyshev-multiple-angle-identities,
lem-chebyshev-degree-leading-coefficients-and-extreme-values,
thm-sine-cosine-signs-monotonicity-and-ranges,
thm-sine-and-cosine-subtraction-formulas,
thm-sine-and-cosine-derivatives, thm-chain-rule,
thm-quarter-turn-values-and-shift-formulas, thm-half-angle-identities-with-sign-conditions,
thm-binomial-theorem, thm-binomial-closed-formula,
lem-binomial-coefficients-symmetric-and-unimodal,
thm-algebra-of-derivatives, cor-mean-value-theorem,
lem-derivative-of-a-power, lem-real-polynomial-factor-at-a-root,
thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots,
thm-logarithm-derivative-and-integral,
def-natural-logarithm,
cor-weierstrass-approximation-on-a-closed-interval,
cor-weierstrass-approximation-on-the-unit-interval,
def-real-exponential-function-and-e,
lem-exponential-series-has-infinite-radius,
def-factorial-and-falling-factorial, and thm-geometric-series.
Their cited hypotheses match the uses recorded in the Facts blocks and proof
contracts.

The well-definedness audit added explicit published prerequisites for bounded
supremum norms and real suprema/infima: def-interval,
thm-algebra-of-continuous-functions,
thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, and
def-complete-ordered-field, plus canonical-natural embedding and positivity.
The sine MVT arguments now also name lem-derivative-of-a-power and
cor-differentiable-implies-continuous, and the Lebesgue estimate names
thm-sine-and-cosine-addition-formulas together with the subtraction, range,
and shift identities. Their complete relevant Statements/Definitions and
Proofs were inspected; the real-extrema theorem is explicitly choice-free.

The Runge counterexample's complex-pole derivation is also explicit about its
field and modulus prerequisites: def-complex-numbers-and-arithmetic,
thm-complex-numbers-form-a-field,
def-complex-polynomial-degree-and-monic,
def-complex-conjugate-real-imaginary-part-and-modulus,
lem-complex-conjugation-and-modulus-laws, and
lem-complex-modulus-of-real-embedding-equals-real-absolute-value. Their
complete relevant Statements/Definitions and Proofs were inspected. The
complex polynomial identity is proved by splitting coefficients into real and
imaginary parts and applying the real root bound; no complex root theorem or
choice principle is used.

cor-runge-polynomial-approximation was inspected. It proves complex Runge
approximation on compact sets with connected complement; it is optional
context only and is not used to prove the real equispaced Runge-function
counterexample. The latter is proved directly by a complex-pole identity and
finite product estimates.

The batch-4 page polynomial-interpolation-and-remainder (order 2292) was
initially empty during drafting; its current manifest now contains the complete
15-item inventory. I re-read the actual cardinal-polynomial definition, basis
lemma, and interpolant-existence/uniqueness theorem and their proofs. The basis
lemma verifies the delta values; the uniqueness theorem invokes the exact
$n+1$-distinct-roots bound. Reproduction follows by applying uniqueness to
the data values of an arbitrary $p\in\mathcal P_n$. Batch 4 orders nodes
increasingly, while the Chebyshev formulas list them decreasingly; reversing
the indices preserves the product and sum, and the batch-19 local proofs also
establish their claims in the stated Chebyshev order. The exact supplier IDs,
source excerpts, hypotheses, and interface reconciliation are in
batch-19.cross-batch-dependencies.json. Scoped precheck, proof-layout, strict
proof-contract and dependency-level checks passed for the two proof-bearing
interface suppliers, and source-fetch check confirmed 2/2 batch-4 sources.
This records authoring/interface verification, not independent approval of
batch 4.

## Source reading and dispositions

The author-hosted Trefethen first-six-chapter PDF was fetched and inspected:
Chapter 2 in full (printed pp. 7–12), the Chebyshev identities at the start of
Chapter 3 (printed pp. 14–15), Chapter 5 in full (printed pp. 33–41), and
Chapter 6 in full (printed pp. 43–48). It supports the node conventions,
Lagrange/cardinal representation, barycentric formula, and the statement of
Weierstrass density. It explicitly treats interpolation uniqueness as known,
and its Chapter 6 proof is an outline that imports Gaussian smoothing and
entire-function facts. Its first-six-chapter sample does not contain the
general logarithmic Lebesgue-constant proof. No source claim substitutes for
the local proofs authored here.

The complete Driscoll–Braun polynomial-interpolation article was read, including
Definition 2.1.1, the Vandermonde discussion, worked examples, and exercises.
It states interpolation uniqueness but does not prove it. The complete
conditioning article was also read, including the problem condition-number
definition, cancellation discussion, polynomial-root sensitivity, examples,
and exercises. It supports separating exact interpolation/approximation claims
from conditioning and algorithm rounding. Neither article proves the local
Chebyshev logarithmic bound. The source and per-result dispositions are recorded in
batch-19.coverage.json. The actual command
node tools/source-fetch-check.mjs --coverage research/numerical-optimization-dynamics-2026-10-16-batch-19.coverage.json --stamp
returned 3/3 source(s) fetch-verified and 3/3 source(s) resolved, with zero
documented drops. The PDF stamp records 55 pages, 1,093,943 bytes, and SHA-256
prefix c31ac03355beb660; the HTML stamps record 16,748 characters with prefix
65dbce2be1d4df2b and 22,861 characters with prefix 8e00e1d68df2d14f. No
retrieval failed, so no source_resolution drop or owner-escalation record was
created.

## Proof scope and caveats

The logarithmic proof derives the exact cardinal quotients for both node
families, bounds their trigonometric denominators, and sums reciprocal angular
distances through the harmonic bound H_n <= 1 + log n. The near-best
inequality follows by polynomial reproduction and an operator-norm estimate.
Weierstrass proves only E_n(f) -> 0. The exponential example supplies an
explicit factorial rate, while the equispaced Runge example proves divergence
for its named node sequence and function.

No barycentric floating-point stability theorem, general arbitrary-node
interpolation convergence theorem, or unproved fallback supplier is asserted.

## Scoped checks and blockers

`manifest-deps.mjs` accepted all 10 manifest dependency arrays. The scoped
dependency-level computation checked all 10 items with maximum level 4. The
`content-policy.mjs` check covered 10 items with zero errors or warnings. The
proof-format check passed 9/9 proof-bearing items; `proof-layout.mjs` found
zero defects across 33 steps; strict proof-contract validation checked 9/9
items with zero errors or warnings; focused `depcheck` found zero errors or
warnings across the 604-item dependency closure. `source-fetch-check.mjs`
confirmed all 3/3 recorded sources fetch-verified and resolved.

The full-run dependency-level check remains blocked by other scaffold state:
it currently reports 150 errors, comprising 146 empty scaffold inventories,
three items missing a nonnegative `dependency_level`, and one stale level label
elsewhere in the run. The three missing labels are
lem-rounded-triangular-substitution-componentwise-backward-error,
lem-rounded-linear-and-normal-residual-certificates, and
lem-certified-linear-solve-jacobian-and-pullback-error; the stale item is
ex-implicit-linear-solve-adjoint (recorded 1, computed 3). The scoped batch-19
dependency check passes; none of those unrelated items or manifests was
changed.

`step1-decisions.mjs check --run numerical-optimization-dynamics-2026-10-16`
reports 550 run items, 334 ready, and the run still open. All 10 batch-19
records are hash-current and produce no batch-19 work rows.

All 10 batch-19 items receive `ready` Step-1 records: placement and dependency
levels are consistent; all nine proof-bearing items pass scoped precheck,
strict contracts, and proof-layout; and the declared batch-4 interpolation
interface is now verified against actual supplier bodies and proofs. These
records are authoring readiness only and do not constitute independent
approval.
