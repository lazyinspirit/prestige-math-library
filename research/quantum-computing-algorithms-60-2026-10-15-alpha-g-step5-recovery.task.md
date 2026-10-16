# Step 5 adjudication — group **g**, run `quantum-computing-algorithms-60-2026-10-15`

You are the group Alpha for batches 43, 44, 45: 3 A/B pair(s), 6 page(s), 50 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **43**: `research/quantum-computing-algorithms-60-2026-10-15-batch-43-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **44**: `research/quantum-computing-algorithms-60-2026-10-15-batch-44-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **45**: `research/quantum-computing-algorithms-60-2026-10-15-batch-45-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 43 | `continuous-time-quantum-walks` | A | quantum-algorithms | 2250 | `uniform-circuit-families-promise-problems-and-complexity`, `the-spectral-theorem-and-singular-value-decomposition`, `the-complex-exponential-and-eulers-formula`, `inner-product-spaces-and-orthogonality`, `registers-tensor-products-and-partial-trace`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `measurements-povms-and-instruments`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `controlled-gates-phase-and-entanglement`, `reversible-computation-ancillas-and-coherent-oracles` |
| 43 | `continuous-time-quantum-walks-examples` | B | quantum-algorithms | 2251 | `continuous-time-quantum-walks`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` |
| 44 | `hamiltonian-simulation-and-product-formulas` | A | quantum-algorithms | 2252 | `continuous-time-quantum-walks`, `uniform-circuit-families-promise-problems-and-complexity`, `controlled-gates-phase-and-entanglement`, `the-spectral-theorem-and-singular-value-decomposition`, `reversible-computation-ancillas-and-coherent-oracles` |
| 44 | `hamiltonian-simulation-and-product-formulas-examples` | B | quantum-algorithms | 2253 | `hamiltonian-simulation-and-product-formulas` |
| 45 | `lcu-oblivious-amplitude-amplification-and-taylor-simulation` | A | quantum-algorithms | 2254 | `state-preparation-isometry-synthesis-and-limits`, `hamiltonian-simulation-and-product-formulas`, `reversible-computation-ancillas-and-coherent-oracles`, `controlled-gates-phase-and-entanglement`, `uniform-circuit-families-promise-problems-and-complexity`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `the-spectral-theorem-and-singular-value-decomposition`, `registers-tensor-products-and-partial-trace`, `the-complex-exponential-and-eulers-formula`, `classical-and-quantum-error-correcting-codes` |
| 45 | `lcu-oblivious-amplitude-amplification-and-taylor-simulation-examples` | B | quantum-algorithms | 2255 | `lcu-oblivious-amplitude-amplification-and-taylor-simulation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `continuous-time-quantum-walks` — Continuous-Time Quantum Walks (13 item(s))

- `def-qa-19-finite-matrix-dynamics` · definition — Finite Hermitian matrix dynamics
- `lem-qa-19-hadamard-uniform-state-preparation` · lemma — Hadamard preparation of a uniform binary state
- `def-qa-19-graph-generator-conventions` · definition — Graph adjacency and Laplacian generator conventions
- `thm-qa-19-matrix-exponential-unitary-properties` · theorem — Unitary and differential identities for finite matrix dynamics
- `def-qa-19-continuous-time-walk` · definition — Continuous-time quantum walk
- `thm-qa-19-measurement-distribution` · theorem — The measurement law for a finite continuous-time walk
- `lem-qa-19-single-outcome-probability-stability` · lemma — Operator-norm error bounds a basis-outcome probability change
- `def-qa-19-hamiltonian-access-cost-model` · definition — Continuous-time Hamiltonian access cost model
- `alg-qa-19-hypercube-state-transfer` · algorithm — Hypercube continuous-time state transfer
- `thm-qa-19-hypercube-transfer-correctness` · theorem — Exact state transfer on the Boolean hypercube
- `alg-qa-19-complete-graph-spatial-search` · algorithm — Complete-graph continuous-time search
- `thm-qa-19-complete-graph-search-correctness` · theorem — Exact and approximate success of complete-graph continuous-time search
- `thm-qa-19-continuous-walk-resource-accounting` · theorem — Continuous-time walk resource accounting

### `continuous-time-quantum-walks-examples` — Continuous-Time Quantum Walks — Examples (3 item(s))

- `cex-qa-19-adjacency-laplacian-sign-conventions` · counterexample — Generator convention matters
- `ex-qa-19-hypercube-for-n-one-and-two` · example — Small hypercube transfer
- `ex-qa-19-complete-graph-search-matrix` · example — Complete-graph search matrix and gap

### `hamiltonian-simulation-and-product-formulas` — Hamiltonian Simulation and Product Formulas (13 item(s))

- `def-qa-20-simulation-error-and-cost-model` · definition — Hamiltonian simulation error and resources
- `def-qa-20-term-list-access-model` · definition — Term-list Hamiltonian access
- `def-qa-20-sparse-hamiltonian-oracle-model` · definition — Sparse Hamiltonian row and value oracles
- `def-qa-20-first-order-product-formula` · definition — First-order Lie product formula
- `def-qa-20-symmetric-second-order-formula` · definition — Symmetric second-order product formula
- `rem-qa-20-higher-order-formula-proof-obligations` · remark — Scope of higher-order Suzuki claims
- `thm-qa-20-first-order-commutator-error` · theorem — First-order commutator error
- `alg-qa-20-first-order-term-list-simulation` · algorithm — First-order term-list simulator
- `thm-qa-20-second-order-conservative-error` · theorem — Conservative second-order error
- `alg-qa-20-suzuki-recursive-product-formula` · algorithm — Finite higher-order Suzuki product formula
- `thm-qa-20-first-order-resource-bound` · theorem — First-order query and gate cost
- `lem-qa-20-suzuki-order-cancellation` · lemma — Suzuki recursive cancellation of error terms
- `thm-qa-20-suzuki-conservative-error-and-resources` · theorem — Higher-order product-formula error with explicit term counts

### `hamiltonian-simulation-and-product-formulas-examples` — Hamiltonian Simulation and Product Formulas — Examples (3 item(s))

- `ex-qa-20-commuting-two-term-simulation` · example — Exact simulation of two commuting terms
- `cex-qa-20-sparse-oracle-does-not-give-term-list` · counterexample — Sparse access need not give a short term list
- `ex-qa-20-noncommuting-pauli-error` · example — First-order error for two Pauli terms

### `lcu-oblivious-amplitude-amplification-and-taylor-simulation` — Linear Combinations of Unitaries and Taylor Simulation (15 item(s))

- `lem-qa-21-pure-state-trace-distance-from-vector-error` · lemma — Pure-state trace distance is bounded by vector error
- `def-qa-21-clean-ancilla-postselection` · definition — Clean-ancilla zero-branch postselection
- `lem-qa-21-partial-trace-contracts-trace-norm-on-hermitians` · lemma — Partial trace contracts the trace norm on Hermitian operators
- `thm-qa-21-clean-ancilla-postselection-probability-law` · theorem — Clean-ancilla postselection has normalized branch weights
- `def-qa-21-lcu-input-and-access-model` · definition — LCU decomposition and access model
- `alg-qa-21-lcu-block-encoding` · algorithm — LCU block encoding
- `def-qa-21-oblivious-reflection` · definition — Oblivious ancilla reflection
- `def-qa-21-truncated-taylor-lcu` · definition — Finite Taylor LCU polynomial
- `thm-qa-21-lcu-block-correctness` · theorem — LCU projected-block and postselection correctness
- `alg-qa-21-one-step-oblivious-amplification` · algorithm — One-step oblivious amplitude amplification
- `thm-qa-21-taylor-tail-bound` · theorem — Taylor simulation tail bound
- `thm-qa-21-oblivious-amplification-block-identity` · theorem — Oblivious-amplification block identity
- `lem-qa-21-robust-one-step-oaa-isometry` · lemma — Robust one-step OAA including ancilla leakage
- `alg-qa-21-segmented-taylor-simulation` · algorithm — Segmented Taylor LCU simulator
- `thm-qa-21-taylor-simulation-error-and-cost` · theorem — Segmented Taylor error and resources

### `lcu-oblivious-amplitude-amplification-and-taylor-simulation-examples` — Linear Combinations of Unitaries and Taylor Simulation — Examples (3 item(s))

- `ex-qa-21-cancelling-normalization-padding` · example — Cancelling identity padding fixes the LCU scale
- `cex-qa-21-unknown-input-reflection` · counterexample — A preserved unknown state cannot program its own reflection
- `ex-qa-21-two-term-lcu-postselection` · example — Two-term LCU postselection is input dependent

## Your seams

Your pages depend on another group's:

- `continuous-time-quantum-walks` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)
- `continuous-time-quantum-walks` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `continuous-time-quantum-walks` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition` (group m, batch 3)
- `continuous-time-quantum-walks` requires `measurements-povms-and-instruments` (group n, batch 4)
- `continuous-time-quantum-walks` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `continuous-time-quantum-walks` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `continuous-time-quantum-walks` requires `reversible-computation-ancillas-and-coherent-oracles` (group p, batch 10)
- `continuous-time-quantum-walks-examples` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `hamiltonian-simulation-and-product-formulas` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)
- `hamiltonian-simulation-and-product-formulas` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `hamiltonian-simulation-and-product-formulas` requires `reversible-computation-ancillas-and-coherent-oracles` (group p, batch 10)
- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` requires `state-preparation-isometry-synthesis-and-limits` (group t, batch 24)
- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` requires `reversible-computation-ancillas-and-coherent-oracles` (group p, batch 10)
- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)
- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` requires `classical-and-quantum-error-correcting-codes` (group r, batch 18)

Another group's pages depend on yours:

- `qubitization-and-optimal-hamiltonian-simulation` (group i) requires your `hamiltonian-simulation-and-product-formulas`
- `qubitization-and-optimal-hamiltonian-simulation` (group i) requires your `continuous-time-quantum-walks`
- `qubitization-and-optimal-hamiltonian-simulation` (group i) requires your `lcu-oblivious-amplitude-amplification-and-taylor-simulation`
- `hhl-phase-estimation-linear-systems` (group i) requires your `hamiltonian-simulation-and-product-formulas`
- `quantum-spectral-estimation-and-matrix-functions` (group j) requires your `hamiltonian-simulation-and-product-formulas`
- `quantum-optimization-sdp-and-variational-algorithms` (group j) requires your `continuous-time-quantum-walks`
- `adiabatic-computation-and-circuit-equivalence` (group l) requires your `hamiltonian-simulation-and-product-formulas`
- `adiabatic-computation-and-circuit-equivalence` (group l) requires your `continuous-time-quantum-walks`

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
