# Step 5 adjudication — group **e**, run `quantum-computing-algorithms-60-2026-10-15`

You are the group Alpha for batches 37, 38, 39: 3 A/B pair(s), 6 page(s), 57 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **37**: `research/quantum-computing-algorithms-60-2026-10-15-batch-37-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **38**: `research/quantum-computing-algorithms-60-2026-10-15-batch-38-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **39**: `research/quantum-computing-algorithms-60-2026-10-15-batch-39-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 37 | `amplitude-estimation-and-counting` | A | quantum-algorithms | 2238 | `reversible-arithmetic-and-oracle-conversion`, `quantum-phase-estimation`, `amplitude-amplification`, `computational-problems-promises-and-cost-models`, `controlled-gates-phase-and-entanglement`, `measurements-povms-and-instruments`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`, `circuit-syntax-denotational-semantics-and-measurement`, `effective-numberings-reductions-resources-and-randomness`, `trigonometric-and-oscillatory-examples-in-one-variable` |
| 37 | `amplitude-estimation-and-counting-examples` | B | quantum-algorithms | 2239 | `amplitude-estimation-and-counting` |
| 38 | `quantum-query-lower-bounds-and-search-optimality` | A | quantum-algorithms | 2240 | `grover-search-and-invariant-plane-rotations`, `computational-problems-promises-and-cost-models`, `reversible-arithmetic-and-oracle-conversion`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `registers-tensor-products-and-partial-trace`, `uniform-circuit-families-promise-problems-and-complexity` |
| 38 | `quantum-query-lower-bounds-and-search-optimality-examples` | B | quantum-algorithms | 2241 | `quantum-query-lower-bounds-and-search-optimality` |
| 39 | `polynomial-method-and-approximate-degree` | A | quantum-algorithms | 2242 | `reversible-arithmetic-and-oracle-conversion`, `fundamental-trigonometric-identities`, `linear-algebra-methods-in-combinatorics`, `computational-problems-promises-and-cost-models`, `the-complex-exponential-and-eulers-formula`, `uniform-circuit-families-promise-problems-and-complexity` |
| 39 | `polynomial-method-and-approximate-degree-examples` | B | quantum-algorithms | 2243 | `polynomial-method-and-approximate-degree` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `amplitude-estimation-and-counting` — Amplitude Estimation and Counting (21 item(s))

- `lem-qa-13-pi-rational-bounds` · lemma — Rational bounds for pi used in finite schedules
- `lem-qa-13-two-nearest-phase-mass` · lemma — Two nearest phase labels carry probability at least eight over pi squared
- `def-qa-13-amplitude-estimation-task` · definition — Amplitude estimation and counting input/output contract
- `lem-qa-13-grover-eigenphase-relation` · lemma — Grover eigenphases encode the good probability
- `lem-qa-13-real-cyclotomic-comparison` · lemma — Finite exact comparison of real cyclotomic values
- `alg-qa-13-iterative-likelihood-amplitude-estimation` · algorithm — Iterative no-QFT amplitude estimation by finite-grid likelihood
- `alg-qa-13-phase-estimation-amplitude-estimation` · algorithm — QFT-based amplitude estimation
- `alg-qa-13-counting-from-amplitude-estimation` · algorithm — Quantum counting by uniform-state amplitude estimation
- `alg-qa-13-median-confidence-estimation` · algorithm — Median confidence amplification for amplitude estimation
- `lem-qa-13-certified-count-output-rounding` · lemma — Terminating certified rounding for a counting estimate
- `thm-qa-13-amplitude-estimation-guarantee` · theorem — Amplitude-estimation additive error and success probability
- `thm-qa-13-iterative-likelihood-query-count` · theorem — Exact query count for the finite-grid iterative estimator
- `lem-qa-13-counting-zero-outcome-kernel` · lemma — Exact zero-label probability for counting
- `thm-qa-13-amplitude-estimation-query-complexity` · theorem — Amplitude-estimation query and precision complexity
- `thm-qa-13-counting-error-guarantee` · theorem — Quantum counting error and boundary cases
- `thm-qa-13-median-confidence-guarantee` · theorem — Explicit median confidence guarantee for amplitude estimation
- `alg-qa-13-relative-approximate-counting` · algorithm — Relative approximate counting with unknown marked count
- `thm-qa-13-counting-query-complexity` · theorem — Quantum counting query complexity
- `thm-qa-13-median-confidence-query-cost` · theorem — Median amplitude-estimation query cost
- `thm-qa-13-relative-counting-query-cost` · theorem — Relative approximate counting query complexity
- `thm-qa-13-relative-counting-success` · theorem — Relative approximate counting success guarantee

### `amplitude-estimation-and-counting-examples` — Amplitude Estimation and Counting — Examples (2 item(s))

- `cex-qa-13-controlled-powers-are-not-free` · counterexample — A bare unitary oracle does not supply controlled powers for free
- `ex-qa-13-counting-error-regimes` · example — Counting bounds at zero, one, half, and all marked

### `quantum-query-lower-bounds-and-search-optimality` — Quantum Query Lower Bounds and Search Optimality (16 item(s))

- `lem-qa-14-coherent-query-normal-form` · lemma — Coherent normal form for finite quantum query algorithms
- `def-qa-14-boolean-search-query-model` · definition — Boolean oracle query model for search lower bounds
- `alg-qa-14-zero-completion-query-simulation` · algorithm — Reversible zero-completion of an N-address bit query
- `def-qa-14-query-mismatch-projectors` · definition — Query-register projectors and mismatch indicators
- `def-qa-14-search-promise` · definition — All-zero versus exactly-one-marked search promise
- `lem-qa-14-state-distance-from-acceptance-gap` · lemma — Acceptance-gap lower bound on final-state distance
- `lem-qa-14-one-query-hybrid-bound` · lemma — One-query oracle perturbation bound
- `thm-qa-14-zero-completion-query-simulation-correct` · theorem — Zero-completed query simulation is exact and uses one raw query
- `alg-qa-14-one-marked-search-with-verification` · algorithm — Fixed-one Grover search with candidate verification
- `lem-qa-14-cumulative-hybrid-bound` · lemma — Cumulative hybrid distance for a T-query algorithm
- `lem-qa-14-aggregate-hybrid-squared-distance` · lemma — Aggregate hybrid distance budget over all marked indices
- `lem-qa-14-chebyshev-recurrence-matches-grover-success` · lemma — The rational Grover recurrence equals the success probability
- `thm-qa-14-grover-search-upper-query-cost` · theorem — Grover search upper-bound query cost
- `thm-qa-14-bbbv-search-lower-bound` · theorem — BBBV hybrid lower bound for unstructured search
- `thm-qa-14-grover-search-upper-success` · theorem — Grover search upper-bound success guarantee
- `thm-qa-14-optimal-search-query-complexity` · theorem — Bounded-error unstructured search query complexity is Theta of square root N

### `quantum-query-lower-bounds-and-search-optimality-examples` — Quantum Query Lower Bounds and Search Optimality — Examples (2 item(s))

- `ex-qa-14-hybrid-budget-for-n-small` · example — Finite hybrid budget for a four-address search space
- `cex-qa-14-query-parallelism-does-not-give-exponential-search` · counterexample — One uniform phase query gives small trace-distance advantage

### `polynomial-method-and-approximate-degree` — Polynomial Method and Approximate Degree (14 item(s))

- `lem-qa-15-continuous-markov-derivative-bound` · lemma — Continuous Markov derivative bound on an interval
- `lem-qa-15-grid-return-derivative` · lemma — Bounded integer-grid values control excursions by the derivative
- `lem-qa-15-discrete-markov-ehlich-zeller` · lemma — Finite-grid Markov derivative inequality
- `def-qa-15-bit-oracle-query-model` · definition — Oracle-only bit-query algorithm
- `def-qa-15-acceptance-polynomial` · definition — Acceptance polynomials and approximate degree on Boolean domains
- `def-qa-15-bit-oracle-query-complexity` · definition — Local bounded-error bit-query complexity
- `lem-qa-15-branch-density-degree` · lemma — Unnormalized branch density entries have degree at most twice the query count
- `lem-qa-15-query-amplitude-degree` · lemma — Coherent query amplitudes have degree at most the query count
- `lem-qa-15-symmetrization` · lemma — Symmetrizing a Boolean-cube polynomial gives a Hamming-weight polynomial
- `prop-qa-15-promise-domain-scope` · proposition — Approximation constraints apply only on the promise domain
- `thm-qa-15-acceptance-degree-bound` · theorem — A T-query bit algorithm has an acceptance polynomial of degree at most 2T
- `thm-qa-15-exact-degree-or` · theorem — The exact polynomial degree of OR is N
- `thm-qa-15-or-approximate-degree-lower-bound` · theorem — OR has a square-root approximate-degree lower bound and corresponding query lower bounds
- `thm-qa-15-parity-approximate-degree` · theorem — Parity has approximate degree N and requires at least N over 2 queries

### `polynomial-method-and-approximate-degree-examples` — Polynomial Method and Approximate Degree — Examples (2 item(s))

- `ex-qa-15-or-polynomial-small-n` · example — A one-query exact algorithm on a two-point OR promise
- `cex-qa-15-off-cube-values-are-unconstrained` · counterexample — A symmetrized acceptance polynomial can exceed one between Hamming layers

## Your seams

Your pages depend on another group's:

- `amplitude-estimation-and-counting` requires `reversible-arithmetic-and-oracle-conversion` (group a, batch 26)
- `amplitude-estimation-and-counting` requires `quantum-phase-estimation` (group c, batch 31)
- `amplitude-estimation-and-counting` requires `amplitude-amplification` (group d, batch 36)
- `amplitude-estimation-and-counting` requires `computational-problems-promises-and-cost-models` (group a, batch 25)
- `amplitude-estimation-and-counting` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `amplitude-estimation-and-counting` requires `measurements-povms-and-instruments` (group n, batch 4)
- `amplitude-estimation-and-counting` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `amplitude-estimation-and-counting` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` (group o, batch 7)
- `amplitude-estimation-and-counting` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)
- `quantum-query-lower-bounds-and-search-optimality` requires `grover-search-and-invariant-plane-rotations` (group d, batch 35)
- `quantum-query-lower-bounds-and-search-optimality` requires `computational-problems-promises-and-cost-models` (group a, batch 25)
- `quantum-query-lower-bounds-and-search-optimality` requires `reversible-arithmetic-and-oracle-conversion` (group a, batch 26)
- `quantum-query-lower-bounds-and-search-optimality` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `quantum-query-lower-bounds-and-search-optimality` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `quantum-query-lower-bounds-and-search-optimality` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)
- `polynomial-method-and-approximate-degree` requires `reversible-arithmetic-and-oracle-conversion` (group a, batch 26)
- `polynomial-method-and-approximate-degree` requires `computational-problems-promises-and-cost-models` (group a, batch 25)
- `polynomial-method-and-approximate-degree` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)

Another group's pages depend on yours:

- `adversary-methods-and-quantum-query-complexity` (group f) requires your `amplitude-estimation-and-counting`
- `hhl-phase-estimation-linear-systems` (group i) requires your `amplitude-estimation-and-counting`
- `block-encoding-linear-systems-and-variable-time-amplification` (group i) requires your `amplitude-estimation-and-counting`
- `quantum-sampling-expectation-and-monte-carlo` (group j) requires your `amplitude-estimation-and-counting`
- `quantum-optimization-sdp-and-variational-algorithms` (group j) requires your `amplitude-estimation-and-counting`

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

# Step 5 batch adjudication, `quantum-computing-algorithms-60-2026-10-15`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
