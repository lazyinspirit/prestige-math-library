# Step 3a Reader Report — Batch 11

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: `reader-11`  
Batch: `11`

## Scope and run state

I read the assigned batch manifest and its proof contracts, opened both assigned pages and all 22 assigned items, then reviewed their mathematical suppliers before their consumers. The live status command showed the run at `3a-read`, with no worker running. This is the expected pending-reader state and did not block the review.

## Opened inventory

Assigned files:

- `research/numerical-optimization-dynamics-2026-10-16-batch-11.pages.json`
- `research/numerical-optimization-dynamics-2026-10-16-batch-11.proof-contracts.json`
- `library/numerical-differential-equations-and-stochastic-dynamics/finite-bit-random-streams-and-variate-generation.md`
- `library/numerical-differential-equations-and-stochastic-dynamics/finite-bit-random-streams-and-variate-generation-examples.md`

Assigned items, reviewed in declared dependency order:

- Level 0: `alg-linear-congruential-generator-mod-power-of-two`, `alg-counter-based-keyed-permutation-stream`, `thm-finite-state-streams-eventually-periodic`, `thm-independent-fair-bit-streams-produce-uniforms`, `lem-generalized-inverse-sublevel-identity`, `lem-box-muller-product-density-and-radius-moment`, `alg-certified-bracketed-cdf-inversion`.
- Level 1: `thm-midpoint-bit-stream-coupling-and-error`, `thm-lcg-full-period-and-adjacent-dependence`, `lem-counter-based-keyed-stream-no-reuse`, `alg-rational-bernoulli-rejection-from-fair-bits`, `cor-box-muller-from-independent-bits-gives-standard-normals`.
- Level 2: `alg-finite-categorical-inverse-cdf`, `thm-rational-bernoulli-rejection-law-and-cost`, `thm-certified-bracketed-inverse-error`, `ex-lcg-low-bit-alternation`, `ex-box-muller-finite-midpoint-tail`, `ex-box-muller-zero-endpoint`.
- Level 3: `thm-finite-categorical-midpoint-count-bound`, `ex-inverse-cdf-near-zero-density`.
- Level 13: `alg-box-muller-finite-bit-transform`.
- Level 14: `thm-box-muller-finite-bit-coupling-error`.

I also opened the five required-page summaries named by the assigned A page:
`conditional-and-finite-group-exact-inference`,
`probability-spaces-random-variables-and-expectation`,
`outward-rounded-interval-and-ball-arithmetic`,
`computed-fast-transforms-and-convolution`, and
`stationary-markov-chains-and-ergodic-limits`.

Direct mathematical suppliers opened for the assigned proofs included:

- Probability and measure: `thm-rectangle-criterion-for-independent-random-elements`, `thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn`, `thm-countable-product-of-probability-spaces`, `cor-coordinate-random-elements-on-a-countable-product-are-independent`, `def-coordinate-maps-and-cylinder-sigma-algebra`, `def-independent-random-elements`, `def-random-element-and-real-random-variable`, `prop-closure-properties-of-measurable-functions-used-by-the-integral`, `thm-continuity-from-above-for-measures`, `thm-measure-uniqueness-on-a-sigma-finite-pi-system`, `def-countable-choice`, `def-dependent-choice`, `thm-probability-law-and-distribution-function-correspondence`, `def-complete-ordered-field`, `def-probability-measure`, and `def-uniform-finite-probability-space`.
- Box–Muller and elementary probability: `lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`, `prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `def-real-exponential-function-and-e`, `thm-exponential-is-strictly-increasing`, `thm-derivative-of-exponential`, `thm-chain-rule`, `thm-natural-logarithm-laws`, `thm-of-square-roots`, `thm-continuous-preimages-of-borel-sets-are-borel`, `def-pi-via-first-positive-cosine-zero`, `def-standard-normal-and-normal-laws`, `def-axiom-of-choice`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `def-total-variation-distance-for-probability-laws`, `cor-cauchy-schwarz-for-random-variables`, `thm-logarithm-derivative-and-integral`, and `cor-mean-value-theorem`.
- Discrete and inverse-CDF claims: `thm-fundamental-theorem-of-arithmetic`, `def-prime`, `thm-geometric-series`, `thm-monotone-convergence-for-the-integral`, `lem-geometric-sequence-null`, `cor-compact-domain-maps-are-uniformly-continuous`, and `lem-of-square-monotone`.
- Finite evaluator and phase procedures used by the assigned Box–Muller algorithm: `alg-budgeted-validated-range-evaluation`, `thm-budgeted-range-evaluation-terminates-and-is-sound`, `alg-certified-elementary-range-evaluation`, `thm-real-elementary-range-enclosures`, `def-dyadic-floating-point-format-and-directed-rounding`, `def-intervals-rectangles-and-complex-balls`, `def-outward-rounded-interval-and-ball-operations`, `thm-outward-rounded-operations-are-isotone-and-dag-sound`, `def-real-elementary-functions-and-domains`, `lem-range-reduced-exp-log-and-arctan-series-enclosures`, `lem-trigonometric-identities-machin-and-range-reduction`, `alg-dyadic-square-root-bisection`, `thm-dyadic-square-root-bisection-encloses`, `lem-directed-dyadic-rounding-enclosure-and-error`, `lem-nonnegative-square-root-exists-and-unique`, `alg-na-certified-unit-circle-phase`, `thm-na-certified-unit-circle-phase-enclosure`, `thm-na-interval-pi-matches-canonical-fourier-pi`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-principal-inverse-tangent-calculus`, `thm-abel-limit-theorem`, `cor-differentiable-implies-continuous`, `lem-mean-value-theorem-on-closed-interval`, `lem-derivative-algebra-and-chain-rules`, `lem-power-series-termwise-differentiation`, `lem-elementary-power-series-converge-uniformly-on-bounded-sets`, `lem-archimedean-property-from-completeness`, `lem-real-and-complex-modulus-rules`, and `lem-absolutely-convergent-series-cauchy-product`.

For the published dependencies I opened the exact relevant Definition or Statement clauses. For the current-run evaluator and phase chain I also inspected the defining procedures and the soundness arguments needed for its real logarithm, square-root, trigonometric, and canonical-$\pi$ claims. I reviewed the contract rows for all 22 assigned items, including citations, derivations, boundary statuses, axiom uses, and finite checks.

## Repairs

1. `items/thm-independent-fair-bit-streams-produce-uniforms.md`: the original statement allowed a coordinate sequence to repeat an index, although the proof used all prefix indices as distinct. With one stream take $j_1=j_2=0$ and $j_k=k-2$ for $k\ge3$. Then $U=\tfrac34 B_0+\sum_{j\ge1}B_j2^{-(j+2)}$, so $\mathbb P(U\le3/4)=1/2$, whereas a uniform variable has CDF $3/4$ there. I repaired the statement and Given block by requiring each sequence to be injective and their ranges pairwise disjoint, and made that use explicit in step 2.2. The proof contract now records the added Given dependency. I refreshed the exact source-Statement quotations in the four affected direct-consumer contract rows: `thm-midpoint-bit-stream-coupling-and-error`, `cor-box-muller-from-independent-bits-gives-standard-normals`, `thm-rational-bernoulli-rejection-law-and-cost`, and `ex-box-muller-zero-endpoint`. I checked all direct and indirect batch-11 consumers; their stated subsequences or theorem dependencies already satisfy the clarified hypothesis, so no further item repair was needed.

2. `items/thm-lcg-full-period-and-adjacent-dependence.md`: I made two short arithmetic prerequisites explicit. Fact [F3] now states why $2$ is prime, as used to factor $2^w$. Step 6.1 now proves that odd $a$ is invertible modulo $2^w$ by repeated parity cancellation before concluding the update is a permutation. The matching derivation entries were updated in the proof contract.

3. `items/thm-certified-bracketed-inverse-error.md`: the proof used a new assumption that the CDF is continuous on all of $\mathbb R$, while the procedure assumes continuity only on $[a,b]$. I removed that assumption and proved $F(Q(u))=u$ using the successful-call bracket test when $Q(u)=a$, and continuity on the bracket when $Q(u)>a$. This leaves the theorem statement unchanged. The matching proof-contract derivation and inputs were updated.

None of the three edited items contained a `verification.judge` record.

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts` reported each of the three changed item paths unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts` passed for all three changed items.
- Final batched layout check: `node tools/proof-layout.mjs items/thm-independent-fair-bit-streams-produce-uniforms.md items/thm-certified-bracketed-inverse-error.md items/thm-lcg-full-period-and-adjacent-dependence.md` reported 3 items, 16 steps, 0 defects.

## Page verdicts

- `finite-bit-random-streams-and-variate-generation`: pass after the listed in-scope repairs. Its item inventory matches the manifest, and its summary accurately distinguishes ideal independent bits from deterministic finite-state streams, exact Box–Muller from finite evaluation, and CDF error from spatial error.
- `finite-bit-random-streams-and-variate-generation-examples`: pass. Its four examples and summary match the endpoint, finite-tail, low-bit, and vanishing-density results.

## Unedited defects and blocker

No defect requiring an edit outside batch 11 was found. No blocker remains. External bibliography URLs were not independently fetched; the reviewed proofs use the opened local suppliers and elementary derivations, so this review is not a separate URL-accessibility or bibliography audit.
