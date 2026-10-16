# Step 5 adjudication — group **f**, run `quantum-computing-algorithms-60-2026-10-15`

You are the group Alpha for batches 40, 41, 42: 3 A/B pair(s), 6 page(s), 68 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **40**: `research/quantum-computing-algorithms-60-2026-10-15-batch-40-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **41**: `research/quantum-computing-algorithms-60-2026-10-15-batch-41-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **42**: `research/quantum-computing-algorithms-60-2026-10-15-batch-42-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 40 | `adversary-methods-and-quantum-query-complexity` | A | quantum-algorithms | 2244 | `reversible-arithmetic-and-oracle-conversion`, `quantum-phase-estimation`, `convex-and-semicontinuous-functions-on-rn`, `inner-product-spaces-and-orthogonality`, `the-spectral-theorem-and-singular-value-decomposition`, `controlled-gates-phase-and-entanglement`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `computational-problems-promises-and-cost-models`, `registers-tensor-products-and-partial-trace`, `reversible-computation-ancillas-and-coherent-oracles`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `uniform-circuit-families-promise-problems-and-complexity`, `amplitude-estimation-and-counting` |
| 40 | `adversary-methods-and-quantum-query-complexity-examples` | B | quantum-algorithms | 2245 | `adversary-methods-and-quantum-query-complexity` |
| 41 | `discrete-quantum-walks-and-szegedy-theory` | A | quantum-algorithms | 2246 | `uniform-circuit-families-promise-problems-and-complexity`, `recurrence-transience-and-hitting-times-for-markov-chains`, `stationary-markov-chains-and-ergodic-limits`, `registers-tensor-products-and-partial-trace`, `inner-product-spaces-and-orthogonality`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `the-spectral-theorem-and-singular-value-decomposition`, `controlled-gates-phase-and-entanglement`, `circuit-syntax-denotational-semantics-and-measurement` |
| 41 | `discrete-quantum-walks-and-szegedy-theory-examples` | B | quantum-algorithms | 2247 | `discrete-quantum-walks-and-szegedy-theory`, `stationary-markov-chains-and-ergodic-limits` |
| 42 | `quantum-walk-search-and-element-distinctness` | A | quantum-algorithms | 2248 | `quantum-phase-estimation`, `discrete-quantum-walks-and-szegedy-theory`, `the-polynomial-hierarchy-and-relativization`, `measurements-povms-and-instruments`, `recurrence-transience-and-hitting-times-for-markov-chains`, `the-spectral-theorem-and-singular-value-decomposition`, `registers-tensor-products-and-partial-trace`, `circuit-syntax-denotational-semantics-and-measurement`, `uniform-circuit-families-promise-problems-and-complexity`, `controlled-gates-phase-and-entanglement`, `reversible-computation-ancillas-and-coherent-oracles`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `trigonometric-and-oscillatory-examples-in-one-variable` |
| 42 | `quantum-walk-search-and-element-distinctness-examples` | B | quantum-algorithms | 2249 | `quantum-walk-search-and-element-distinctness` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `adversary-methods-and-quantum-query-complexity` — Adversary Methods and Quantum Query Complexity (29 item(s))

- `lem-qa-16-finite-sdp-strong-duality` · lemma — Finite real semidefinite programs satisfy strong duality under strict feasibility
- `lem-qa-16-schur-product-psd` · lemma — Entrywise products of finite positive semidefinite matrices are positive semidefinite
- `lem-qa-16-effective-spectral-gap` · lemma — Effective spectral gap for a product of two reflections
- `lem-qa-16-query-unitary-normal-form` · lemma — Unitary normal form for finite bit-query algorithms without extra queries
- `def-qa-16-boolean-query-domain` · definition — Finite Boolean query problem and error model for adversary bounds
- `alg-qa-16-controlled-consistency-reflection` · algorithm — Controlled input-consistency reflection from a bit query
- `def-qa-16-input-mismatch-matrices` · definition — Input-mismatch masks and entrywise filtering
- `def-qa-16-query-address-projectors` · definition — Query-address projectors for bit-oracle algorithms
- `def-qa-16-filtered-gamma2` · definition — Filtered γ₂ factorization norm for query mismatch masks
- `lem-qa-16-general-adversary-finite-and-attained` · lemma — Finite, attained general adversary value for nonconstant Boolean functions
- `thm-qa-16-controlled-consistency-reflection-correct` · theorem — The controlled input-consistency circuit realizes the exact reflection
- `def-qa-16-general-adversary-bound` · definition — General adversary matrix and spectral bound
- `lem-qa-16-filtered-gamma2-well-defined` · lemma — Finite-dimensional well-definedness of the filtered γ₂ program
- `thm-qa-16-controlled-consistency-reflection-query-cost` · theorem — Controlled consistency reflection uses two bit queries
- `def-qa-16-nonnegative-adversary-bound` · definition — Nonnegative-weight adversary bound
- `lem-qa-16-adversary-progress-endpoints` · lemma — Adversary progress at initial and bounded-error final states
- `lem-qa-16-nonconstant-adversary-at-least-one` · lemma — Nonconstant Boolean functions have adversary value at least one
- `lem-qa-16-one-query-progress-change` · lemma — One oracle call changes adversary progress by at most filtered spectral norm
- `thm-qa-16-dual-vector-characterization` · theorem — Dual vector formulation of the general adversary bound
- `alg-qa-16-dual-adversary-reflection-evaluator` · algorithm — Bounded-error evaluation from a dual adversary certificate
- `lem-qa-16-nonnegative-dual-overlap-upper-bound` · lemma — Input-distribution certificates upper-bound the nonnegative adversary value
- `prop-qa-16-general-versus-nonnegative-adversary` · proposition — Signed weights extend the nonnegative adversary certificate
- `thm-qa-16-filtered-gamma-adversary-equality` · theorem — Boolean-output filtered γ₂ equals the general adversary value
- `thm-qa-16-general-adversary-lower-bound` · theorem — General adversary spectral lower bound for quantum queries
- `prop-qa-16-ambainis-base-separation` · proposition — The four-bit Ambainis function separates nonnegative and signed adversary bounds
- `thm-qa-16-adversary-composition-lower-bound` · theorem — Nonnegative and signed adversary bounds compose from below
- `thm-qa-16-dual-evaluator-success` · theorem — Dual reflection evaluator has bounded-error correctness
- `thm-qa-16-dual-evaluator-query-cost` · theorem — Dual reflection evaluator query complexity
- `thm-qa-16-general-adversary-tightness` · theorem — General adversary bound characterizes Boolean quantum query complexity

### `adversary-methods-and-quantum-query-complexity-examples` — Adversary Methods and Quantum Query Complexity — Examples (2 item(s))

- `ex-qa-16-or-dual-certificate` · example — Dual adversary certificate for OR_N
- `cex-qa-16-negative-weights-matter` · counterexample — A nonnegative-only adversary estimate need not capture the general bound

### `discrete-quantum-walks-and-szegedy-theory` — Discrete Quantum Walks and Szegedy Theory (14 item(s))

- `def-qa-17-finite-stochastic-kernel` · definition — Finite row-stochastic kernel
- `def-qa-17-finite-reversible-chain` · definition — Finite reversible Markov chain with positive stationary law
- `def-qa-17-szegedy-transition-isometry` · definition — Szegedy row-preparation map and discriminant
- `lem-qa-17-stochastic-l2-contraction` · lemma — Finite stationary Markov operators contract in weighted L2
- `lem-qa-17-reversible-transition-self-adjoint-on-l2-pi` · lemma — A finite reversible transition operator is self-adjoint on weighted L2
- `def-qa-17-absolute-spectral-gap` · definition — Absolute spectral gap of a finite reversible chain
- `thm-qa-17-absolute-gap-eigenvalue-characterization` · theorem — Absolute gap equals one minus the largest nonconstant eigenvalue modulus
- `thm-qa-17-discriminant-self-adjoint` · theorem — The Szegedy discriminant is self-adjoint and contractive
- `def-qa-17-szegedy-walk` · definition — Szegedy reflection walk and its two-reflection square
- `lem-qa-17-walk-reflection-unitarity` · lemma — Szegedy reflections and walk operators are unitary
- `lem-qa-17-invariant-eigenplane` · lemma — Szegedy walk invariant subspaces from discriminant eigenvectors
- `def-qa-17-walk-access-model` · definition — Finite row-preparation access model for a Szegedy walk
- `thm-qa-17-szegedy-spectral-mapping` · theorem — Szegedy spectral mapping for one and two reflections
- `thm-qa-17-walk-access-cost` · theorem — Exact row-preparation access count for one and two walk steps

### `discrete-quantum-walks-and-szegedy-theory-examples` — Discrete Quantum Walks and Szegedy Theory — Examples (4 item(s))

- `cex-qa-17-zero-stationary-weight` · counterexample — A zero stationary weight makes the full-state similarity undefined
- `cex-qa-17-nonreversible-discriminant` · counterexample — A stationary directed cycle is not similar to its discriminant
- `ex-qa-17-period-two-walk` · example — The two-vertex deterministic swap has absolute gap zero
- `ex-qa-17-two-state-reversible-walk` · example — Two-state reversible walk and its endpoint phases

### `quantum-walk-search-and-element-distinctness` — Quantum-Walk Search and Element Distinctness (16 item(s))

- `def-qa-18-marked-set-and-stationary-mass` · definition — Marked sets, stationary mass, and walk-search tasks
- `def-qa-18-classical-hitting-time` · definition — Finite-chain hitting time and survival law
- `lem-qa-18-absorbing-walk-discriminant-decomposition` · lemma — Discriminant of the marked-state absorbing walk
- `lem-qa-18-symmetric-compressed-walk-bound` · lemma — Spectral bound for a symmetric lazy walk killed on a marked set
- `thm-qa-18-classical-spectral-hitting-bound` · theorem — Classical marked-set hitting bound from a spectral gap
- `def-qa-18-random-access-gate-model` · definition — Random-access quantum-memory gate model
- `alg-qa-18-reversible-walk-finding` · algorithm — MNRS finite reversible-walk finding
- `def-qa-18-element-distinctness-johnson-walk` · definition — Element-distinctness Johnson walk and value access
- `def-qa-18-canonical-skip-list-for-element-distinctness` · definition — Canonical hash-bucket and nested skip-list storage
- `lem-qa-18-johnson-walk-spectrum` · lemma — Spectrum of the lazy Johnson walk
- `thm-qa-18-reversible-search-cost` · theorem — Finite reversible-walk finding cost
- `alg-qa-18-szegedy-phase-detection` · algorithm — Szegedy-walk marked-set detection
- `lem-qa-18-johnson-stored-data-query-access` · lemma — Coherent Johnson row access with stored values
- `thm-qa-18-element-distinctness-query-cost` · theorem — Element-distinctness O(N^{2/3}) query bound
- `thm-qa-18-detection-correctness-cost` · theorem — Walk detection correctness and cost
- `thm-qa-18-element-distinctness-qr-access-gate-cost` · theorem — Element-distinctness gate cost in the QRAM model

### `quantum-walk-search-and-element-distinctness-examples` — Quantum-Walk Search and Element Distinctness — Examples (3 item(s))

- `cex-qa-18-query-cost-is-not-gate-cost` · counterexample — One oracle query can require many ordinary gates
- `ex-qa-18-johnson-walk-parameters` · example — Small Johnson-walk spectra and marked fractions
- `ex-qa-18-element-distinctness-unique-collision` · example — Unique-collision element-distinctness parameters

## Your seams

Your pages depend on another group's:

- `adversary-methods-and-quantum-query-complexity` requires `reversible-arithmetic-and-oracle-conversion` (group a, batch 26)
- `adversary-methods-and-quantum-query-complexity` requires `quantum-phase-estimation` (group c, batch 31)
- `adversary-methods-and-quantum-query-complexity` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `adversary-methods-and-quantum-query-complexity` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `adversary-methods-and-quantum-query-complexity` requires `computational-problems-promises-and-cost-models` (group a, batch 25)
- `adversary-methods-and-quantum-query-complexity` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `adversary-methods-and-quantum-query-complexity` requires `reversible-computation-ancillas-and-coherent-oracles` (group p, batch 10)
- `adversary-methods-and-quantum-query-complexity` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition` (group m, batch 3)
- `adversary-methods-and-quantum-query-complexity` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)
- `adversary-methods-and-quantum-query-complexity` requires `amplitude-estimation-and-counting` (group e, batch 37)
- `discrete-quantum-walks-and-szegedy-theory` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)
- `discrete-quantum-walks-and-szegedy-theory` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `discrete-quantum-walks-and-szegedy-theory` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `discrete-quantum-walks-and-szegedy-theory` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `discrete-quantum-walks-and-szegedy-theory` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)
- `quantum-walk-search-and-element-distinctness` requires `quantum-phase-estimation` (group c, batch 31)
- `quantum-walk-search-and-element-distinctness` requires `measurements-povms-and-instruments` (group n, batch 4)
- `quantum-walk-search-and-element-distinctness` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `quantum-walk-search-and-element-distinctness` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)
- `quantum-walk-search-and-element-distinctness` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)
- `quantum-walk-search-and-element-distinctness` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `quantum-walk-search-and-element-distinctness` requires `reversible-computation-ancillas-and-coherent-oracles` (group p, batch 10)
- `quantum-walk-search-and-element-distinctness` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)

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
