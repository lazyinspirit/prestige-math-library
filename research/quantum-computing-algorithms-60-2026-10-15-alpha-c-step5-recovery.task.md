# Step 5 adjudication — group **c**, run `quantum-computing-algorithms-60-2026-10-15`

You are the group Alpha for batches 31, 32, 33: 3 A/B pair(s), 6 page(s), 44 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **31**: `research/quantum-computing-algorithms-60-2026-10-15-batch-31-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **32**: `research/quantum-computing-algorithms-60-2026-10-15-batch-32-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **33**: `research/quantum-computing-algorithms-60-2026-10-15-batch-33-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/quantum-computing-algorithms-60-2026-10-15-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 31 | `quantum-phase-estimation` | A | quantum-algorithms | 2226 | `uniform-circuit-families-promise-problems-and-complexity`, `quantum-fourier-transform-circuits`, `the-complex-exponential-and-eulers-formula`, `field-extensions-and-the-complex-numbers`, `registers-tensor-products-and-partial-trace`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `controlled-gates-phase-and-entanglement`, `circuit-syntax-denotational-semantics-and-measurement`, `measurements-povms-and-instruments`, `finite-fourier-analysis-and-the-fast-fourier-transform`, `the-spectral-theorem-and-singular-value-decomposition`, `trigonometric-and-oscillatory-examples-in-one-variable` |
| 31 | `quantum-phase-estimation-examples` | B | quantum-algorithms | 2227 | `quantum-phase-estimation` |
| 32 | `quantum-order-finding-and-rational-reconstruction` | A | quantum-algorithms | 2228 | `quantum-phase-estimation`, `congruences-and-the-chinese-remainder-theorem`, `monoids-groups-and-subgroups`, `primes-and-the-fundamental-theorem-of-arithmetic`, `regular-continued-fractions-and-diophantine-approximation`, `reversible-computation-ancillas-and-coherent-oracles`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `circuit-syntax-denotational-semantics-and-measurement`, `registers-tensor-products-and-partial-trace`, `uniform-circuit-families-promise-problems-and-complexity`, `computational-problems-promises-and-cost-models` |
| 32 | `quantum-order-finding-and-rational-reconstruction-examples` | B | quantum-algorithms | 2229 | `quantum-order-finding-and-rational-reconstruction` |
| 33 | `shors-factoring-algorithm` | A | quantum-algorithms | 2230 | `quantum-order-finding-and-rational-reconstruction`, `divisibility-gcd-and-bezout`, `primitive-roots-and-unit-groups-modulo-n`, `congruences-and-the-chinese-remainder-theorem`, `monoids-groups-and-subgroups`, `uniform-circuit-families-promise-problems-and-complexity`, `primes-and-the-fundamental-theorem-of-arithmetic` |
| 33 | `shors-factoring-algorithm-examples` | B | quantum-algorithms | 2231 | `shors-factoring-algorithm` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `quantum-phase-estimation` — Quantum Phase Estimation (12 item(s))

- `lem-qa-phase-estimation-geometric-sum` · lemma — Finite geometric sum for phase-estimation amplitudes
- `lem-qa-phase-estimation-sine-chord-bounds` · lemma — Sine chord and linear bounds
- `def-qa-circular-phase-distance` · definition — Circular phase distance modulo one
- `def-qa-eigenphase-estimation-model` · definition — Eigenphase estimation access model
- `alg-qa-quantum-phase-estimation` · algorithm — Quantum phase estimation
- `lem-qa-phase-estimation-outcome-kernel` · lemma — Phase-estimation finite outcome law
- `thm-qa-phase-estimation-access-cost` · theorem — Phase-estimation query and gate costs
- `lem-qa-phase-estimation-nearest-grid-bound` · lemma — Nearest-grid probability in phase estimation
- `lem-qa-phase-estimation-tail-bound` · lemma — Circular-distance tail bound in phase estimation
- `thm-qa-phase-estimation-exact-grid` · theorem — Exact phase recovery on the QPE grid
- `thm-qa-phase-estimation-superposition-law` · theorem — Phase estimation on a superposition of eigenspaces
- `thm-qa-phase-estimation-success-and-tail` · theorem — Phase-estimation nearest-grid and tail bounds

### `quantum-phase-estimation-examples` — Quantum Phase Estimation — Examples (2 item(s))

- `ex-qa-exact-phase-estimation` · example — Exact estimation of a binary phase
- `ex-qa-phase-estimation-nearest-grid-and-tail` · example — Nearest-grid and tail estimates in phase estimation

### `quantum-order-finding-and-rational-reconstruction` — Quantum Order Finding and Rational Reconstruction (13 item(s))

- `lem-qa-finite-rational-legendre-criterion` · lemma — Finite-rational Legendre criterion before the terminal convergent
- `lem-qa-rational-reconstruction-candidate-uniqueness` · lemma — Uniqueness of denominator-bounded phase candidates
- `lem-qa-totient-ratio-logarithmic-lower-bound` · lemma — Elementary lower bound for the totient ratio
- `def-qa-rational-phase-reconstruction` · definition — Denominator-bounded rational phase reconstruction
- `alg-qa-rational-reconstruction-from-phase-sample` · algorithm — Rational reconstruction from a phase sample
- `thm-qa-rational-reconstruction-correctness` · theorem — Correctness of phase-sample rational reconstruction
- `alg-qa-modular-multiplication-circuit` · algorithm — Reversible modular multiplication by a unit
- `thm-qa-modular-multiplication-circuit-correctness` · theorem — Correctness of the reversible modular multiplier
- `alg-qa-modular-order-finding` · algorithm — Modular order finding with rational reconstruction
- `thm-qa-modular-arithmetic-cost` · theorem — Gate and bit cost of modular multiplication and powering
- `thm-qa-modular-order-finding-success` · theorem — Success probability and repetition for modular order finding
- `thm-qa-rational-reconstruction-bit-cost` · theorem — Bit cost of phase-sample rational reconstruction
- `thm-qa-modular-order-finding-cost` · theorem — Separate order-finding query, gate, and bit costs

### `quantum-order-finding-and-rational-reconstruction-examples` — Quantum Order Finding and Rational Reconstruction — Examples (2 item(s))

- `ex-qa-rational-reconstruction-boundary` · example — Denominator-bounded reconstruction at the strict boundary
- `ex-qa-order-finding-noncoprime-phase` · example — A non-coprime phase gives a proper order divisor

### `shors-factoring-algorithm` — Shor’s Factoring Algorithm (13 item(s))

- `alg-qa-shor-uniform-residue-sampler` · algorithm — Exact uniform sampling from the nonzero residue representatives
- `lem-qa-crt-sign-vector-factorization` · lemma — Mixed CRT signs yield proper gcd factors
- `lem-qa-even-order-square-root` · lemma — Half an even order gives a square root of one
- `lem-qa-prime-power-order-two-adic-law` · lemma — Two-adic order distribution in odd prime-power unit groups
- `lem-qa-shor-residue-gcd-branch` · lemma — Random residue gcd branch for factoring
- `thm-qa-order-to-factor-success` · theorem — Classical randomized order-to-factor success bound
- `alg-qa-shor-factoring` · algorithm — Shor factoring with verified output and bounded outer retries
- `def-qa-shor-cost-accounting` · definition — Shor factoring cost-accounting branches
- `lem-qa-shor-perfect-power-precheck` · lemma — Even and perfect-power preprocessing returns a proper factor
- `thm-qa-shor-residue-sampler-correct-and-cost` · theorem — Rejection sampling is uniform, almost surely terminating, and has expected linear bit cost
- `thm-qa-order-to-factor-correctness` · theorem — Order-to-factor output correctness
- `thm-qa-shor-factoring-cost` · theorem — Separate Shor factoring bit, gate, and query costs
- `thm-qa-shor-factoring-success` · theorem — Bounded-error success of Shor factoring

### `shors-factoring-algorithm-examples` — Shor’s Factoring Algorithm — Examples (2 item(s))

- `ex-qa-shor-factorization-of-fifteen` · example — A Shor order sample for factoring fifteen
- `ex-qa-shor-factorization-retry-branches` · example — Shor factoring preprocessing and retry branches

## Your seams

Your pages depend on another group's:

- `quantum-phase-estimation` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)
- `quantum-phase-estimation` requires `quantum-fourier-transform-circuits` (group b, batch 30)
- `quantum-phase-estimation` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `quantum-phase-estimation` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `quantum-phase-estimation` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition` (group m, batch 3)
- `quantum-phase-estimation` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `quantum-phase-estimation` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)
- `quantum-phase-estimation` requires `measurements-povms-and-instruments` (group n, batch 4)
- `quantum-order-finding-and-rational-reconstruction` requires `reversible-computation-ancillas-and-coherent-oracles` (group p, batch 10)
- `quantum-order-finding-and-rational-reconstruction` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `quantum-order-finding-and-rational-reconstruction` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)
- `quantum-order-finding-and-rational-reconstruction` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `quantum-order-finding-and-rational-reconstruction` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)
- `quantum-order-finding-and-rational-reconstruction` requires `computational-problems-promises-and-cost-models` (group a, batch 25)
- `shors-factoring-algorithm` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)

Another group's pages depend on yours:

- `amplitude-estimation-and-counting` (group e) requires your `quantum-phase-estimation`
- `adversary-methods-and-quantum-query-complexity` (group f) requires your `quantum-phase-estimation`
- `quantum-walk-search-and-element-distinctness` (group f) requires your `quantum-phase-estimation`
- `hhl-phase-estimation-linear-systems` (group i) requires your `quantum-phase-estimation`
- `quantum-spectral-estimation-and-matrix-functions` (group j) requires your `quantum-phase-estimation`
- `quantum-optimization-sdp-and-variational-algorithms` (group j) requires your `quantum-phase-estimation`
- `period-hidden-shift-and-number-theoretic-algorithms` (group k) requires your `quantum-order-finding-and-rational-reconstruction`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/quantum-computing-algorithms-60-2026-10-15-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `quantum-computing-algorithms-60-2026-10-15`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
