# Step 5 adjudication — group **i**, run `quantum-computing-algorithms-60-2026-10-15`

You are the group Alpha for batches 49, 50, 51: 3 A/B pair(s), 6 page(s), 64 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **49**: `research/quantum-computing-algorithms-60-2026-10-15-batch-49-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **50**: `research/quantum-computing-algorithms-60-2026-10-15-batch-50-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **51**: `research/quantum-computing-algorithms-60-2026-10-15-batch-51-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 49 | `qubitization-and-optimal-hamiltonian-simulation` | A | quantum-algorithms | 2262 | `hamiltonian-simulation-and-product-formulas`, `quantum-singular-value-transformation`, `block-encodings`, `quantum-signal-processing`, `controlled-gates-phase-and-entanglement`, `uniform-circuit-families-promise-problems-and-complexity`, `inner-product-spaces-and-orthogonality`, `the-spectral-theorem-and-singular-value-decomposition`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `continuous-time-quantum-walks`, `the-complex-exponential-and-eulers-formula`, `the-polynomial-hierarchy-and-relativization`, `reversible-computation-ancillas-and-coherent-oracles`, `state-preparation-isometry-synthesis-and-limits`, `lcu-oblivious-amplitude-amplification-and-taylor-simulation` |
| 49 | `qubitization-and-optimal-hamiltonian-simulation-examples` | B | quantum-algorithms | 2263 | `qubitization-and-optimal-hamiltonian-simulation` |
| 50 | `hhl-phase-estimation-linear-systems` | A | quantum-algorithms | 2264 | `quantum-phase-estimation`, `amplitude-amplification`, `hamiltonian-simulation-and-product-formulas`, `the-spectral-theorem-and-singular-value-decomposition`, `inner-product-spaces-and-orthogonality`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `registers-tensor-products-and-partial-trace`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `controlled-gates-phase-and-entanglement`, `uniform-circuit-families-promise-problems-and-complexity`, `amplitude-estimation-and-counting`, `qubitization-and-optimal-hamiltonian-simulation`, `trigonometric-and-oscillatory-examples-in-one-variable` |
| 50 | `hhl-phase-estimation-linear-systems-examples` | B | quantum-algorithms | 2265 | `hhl-phase-estimation-linear-systems` |
| 51 | `block-encoding-linear-systems-and-variable-time-amplification` | A | quantum-algorithms | 2266 | `quantum-singular-value-transformation`, `hhl-phase-estimation-linear-systems`, `circuit-syntax-denotational-semantics-and-measurement`, `reversible-computation-ancillas-and-coherent-oracles`, `controlled-gates-phase-and-entanglement`, `block-encodings`, `the-spectral-theorem-and-singular-value-decomposition`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `uniform-circuit-families-promise-problems-and-complexity`, `amplitude-estimation-and-counting`, `qubitization-and-optimal-hamiltonian-simulation` |
| 51 | `block-encoding-linear-systems-and-variable-time-amplification-examples` | B | quantum-algorithms | 2267 | `block-encoding-linear-systems-and-variable-time-amplification` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qubitization-and-optimal-hamiltonian-simulation` — Qubitization and Near-Optimal Hamiltonian Simulation (18 item(s))

- `lem-qa-25-isometry-error-implies-trace-distance` · lemma — Clean-input isometry error bounds output trace distance
- `lem-qa-25-parity-path-transfer` · lemma — Sparse parity-path transfer and norm
- `def-qa-25-qubitization-access-model` · definition — Qubitization access model
- `def-qa-25-hamiltonian-simulation-polynomial` · definition — Hamiltonian-simulation polynomial target
- `lem-qa-25-hermitian-block-encoding-signal-subspaces` · lemma — Hermitian block-encoding signal subspaces
- `thm-qa-25-qubitization-signal-sequence` · theorem — Qubitization lifts scalar QSP
- `thm-qa-25-bounded-error-parity-query-lower-bound` · theorem — Bounded-error parity query lower bound
- `alg-qa-25-qubitized-hamiltonian-simulation` · algorithm — Qubitized Hamiltonian simulator
- `lem-qa-25-sorted-xor-sparse-access-isometries` · lemma — Clean sparse-state preparation from sorted XOR locations
- `lem-qa-25-clean-subspace-unitary-hybrid` · lemma — Unitary hybrids on a preserved clean-work subspace
- `alg-qa-25-sparse-hamiltonian-block-encoding` · algorithm — Sparse Hermitian block encoding
- `thm-qa-25-sparse-no-fast-forwarding-lower-bound` · theorem — Sparse Hamiltonian no-fast-forwarding
- `alg-qa-25-small-time-aware-simulator` · algorithm — Small-time-aware qubitized simulator
- `thm-qa-25-sparse-hamiltonian-block-encoding-correctness` · theorem — Correctness and access cost of sparse block encoding
- `lem-qa-25-jacobi-anger-truncation` · lemma — Jacobi–Anger Chebyshev truncation
- `thm-qa-25-qubitized-simulation-correctness` · theorem — Near-optimal simulation correctness
- `thm-qa-25-small-time-aware-simulator-correctness` · theorem — Correctness of the small-time-aware simulator
- `thm-qa-25-qubitized-simulation-resource-bound` · theorem — Qubitization query and gate resources

### `qubitization-and-optimal-hamiltonian-simulation-examples` — Qubitization and Near-Optimal Hamiltonian Simulation — Examples (3 item(s))

- `ex-qa-25-two-dimensional-block-encoding` · example — Two-dimensional Hermitian block-encoding signal
- `ex-qa-25-parity-no-fast-forwarding` · example — Two-bit parity path and sparse normalization
- `ex-qa-25-chebyshev-truncation` · example — Low-degree Chebyshev simulation polynomial

### `hhl-phase-estimation-linear-systems` — Phase-Estimation Linear-System Algorithms (20 item(s))

- `def-qa-26-hhl-reciprocal-filter` · definition — Odd-well and even-ill reciprocal filter
- `def-qa-26-hhl-sine-window` · definition — Finite sine-window phase state
- `lem-qa-26-hermitian-dilation` · lemma — Hermitian dilation for a rectangular linear system
- `lem-qa-26-hhl-filter-geometry` · lemma — The reciprocal filter defines valid three-outcome amplitudes
- `def-qa-26-qlsp-task` · definition — Quantum linear-systems state-output task
- `lem-qa-26-hhl-filter-perturbation` · lemma — Relative stability of the HHL filter on supported eigenvalues
- `lem-qa-26-hhl-sine-window-prefix-masses` · lemma — Sine-window normalization and positive prefix weights
- `lem-qa-26-qlsp-target-is-well-defined` · lemma — The QLSP target is nonzero
- `lem-qa-26-hhl-prefix-table-synthesis-error` · lemma — Operator error for the finite sine-prefix rotation table
- `def-qa-26-hhl-access-model` · definition — HHL state-preparation and simulation access model
- `lem-qa-26-hhl-sine-window-kernel-moment` · lemma — Second moment of the signed sine-window phase kernel
- `lem-qa-26-phase-to-eigenvalue-unwrapping` · lemma — Signed phase decoding has no alias on the promised spectrum
- `lem-qa-26-hhl-capped-amplification` · lemma — Finite capped amplification succeeds with a supplied lower bound
- `alg-qa-26-hhl-phase-estimation` · algorithm — HHL finite sine-window phase-estimation algorithm
- `lem-qa-26-hhl-success-amplitude` · lemma — Ideal inverse amplitude and HHL postselection probability
- `thm-qa-26-hhl-amplified-postselection-cost` · theorem — HHL capped postselection amplification cost
- `thm-qa-26-hhl-simulator-cost` · theorem — HHL cost under direct controlled-simulation access
- `lem-qa-26-postselection-normalization-bound` · lemma — Normalization is stable under a small flagged-vector error
- `thm-qa-26-hhl-state-correctness` · theorem — OP5 HHL returns the QLSP state within the requested error
- `thm-qa-26-hhl-query-cost` · theorem — HHL sparse-query and state-preparation cost

### `hhl-phase-estimation-linear-systems-examples` — Phase-Estimation Linear-System Algorithms — Examples (2 item(s))

- `cex-qa-26-hhl-classical-vector-output` · counterexample — State preparation does not print all coordinates
- `ex-qa-26-diagonal-hhl` · example — Two-eigenvalue HHL inversion

### `block-encoding-linear-systems-and-variable-time-amplification` — Block-Encoding Linear Systems and Variable-Time Amplification (19 item(s))

- `lem-qa-27-even-sign-window` · lemma — A bounded even window from an odd sign approximant
- `def-qa-27-variable-time-model` · definition — Coherent variable-time algorithm model
- `def-qa-27-block-encoded-qlsp` · definition — Block-encoded QLSP input and singular-gap promise
- `lem-qa-27-lcu-projected-block-identity` · lemma — Projected block identity for a supplied LCU circuit
- `lem-qa-27-supported-pseudoinverse-target` · lemma — Normalization and nonzero success weight of the supported pseudoinverse target
- `alg-qa-27-qsvt-pseudoinverse` · algorithm — QSVT regularized pseudoinverse transformation
- `def-qa-27-cks-sparse-oracle-model` · definition — Childs–Kothari–Somma sparse QLSP oracle model
- `thm-qa-27-pseudoinverse-polynomial-degree` · theorem — Gapped pseudoinverse polynomial degree and error
- `lem-qa-coherent-amplitude-grid-rounding` · lemma — Efficient coherent amplitude-grid rounding
- `alg-qa-relative-probability-estimation` · algorithm — Relative estimation of a promised coherent success probability
- `thm-qa-relative-probability-guarantee` · theorem — Relative probability estimation with a charged finite cap
- `alg-qa-27-capped-lower-bound-amplification` · algorithm — Finite amplification from a supplied success lower bound
- `lem-qa-27-capped-lower-bound-amplification` · lemma — Finite amplification preserves the good state with a deterministic call cap
- `lem-qa-27-low-target-amplification` · lemma — Low-target amplification has a controlled multiplicative loss
- `thm-qa-27-vtaa-amplification` · theorem — Variable-time amplitude-amplification theorem
- `thm-qa-27-qsvt-inverse-state-cost` · theorem — QSVT inverse-state output and success cost
- `alg-qa-27-cks-variable-time-linear-solver` · algorithm — Finite CKS sparse QLSP with variable-time inverse estimation
- `lem-qa-27-cks-stopping-time-instantiation` · lemma — CKS stopping-time and success-mass instantiation
- `thm-qa-27-cks-linear-condition-guarantee` · theorem — CKS nearly-linear condition-number guarantee

### `block-encoding-linear-systems-and-variable-time-amplification-examples` — Block-Encoding Linear Systems and Variable-Time Amplification — Examples (2 item(s))

- `ex-qa-27-sparse-diagonal-qlsp` · example — Sparse diagonal block-encoded linear system
- `ex-qa-27-fixed-vs-variable-time-cost` · example — Fixed-time and variable-time solver cost comparison

## Your seams

Your pages depend on another group's:

- `qubitization-and-optimal-hamiltonian-simulation` requires `hamiltonian-simulation-and-product-formulas` (group g, batch 44)
- `qubitization-and-optimal-hamiltonian-simulation` requires `quantum-singular-value-transformation` (group h, batch 48)
- `qubitization-and-optimal-hamiltonian-simulation` requires `block-encodings` (group h, batch 46)
- `qubitization-and-optimal-hamiltonian-simulation` requires `quantum-signal-processing` (group h, batch 47)
- `qubitization-and-optimal-hamiltonian-simulation` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `qubitization-and-optimal-hamiltonian-simulation` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)
- `qubitization-and-optimal-hamiltonian-simulation` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `qubitization-and-optimal-hamiltonian-simulation` requires `continuous-time-quantum-walks` (group g, batch 43)
- `qubitization-and-optimal-hamiltonian-simulation` requires `reversible-computation-ancillas-and-coherent-oracles` (group p, batch 10)
- `qubitization-and-optimal-hamiltonian-simulation` requires `state-preparation-isometry-synthesis-and-limits` (group t, batch 24)
- `qubitization-and-optimal-hamiltonian-simulation` requires `lcu-oblivious-amplitude-amplification-and-taylor-simulation` (group g, batch 45)
- `hhl-phase-estimation-linear-systems` requires `quantum-phase-estimation` (group c, batch 31)
- `hhl-phase-estimation-linear-systems` requires `amplitude-amplification` (group d, batch 36)
- `hhl-phase-estimation-linear-systems` requires `hamiltonian-simulation-and-product-formulas` (group g, batch 44)
- `hhl-phase-estimation-linear-systems` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `hhl-phase-estimation-linear-systems` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `hhl-phase-estimation-linear-systems` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition` (group m, batch 3)
- `hhl-phase-estimation-linear-systems` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `hhl-phase-estimation-linear-systems` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)
- `hhl-phase-estimation-linear-systems` requires `amplitude-estimation-and-counting` (group e, batch 37)
- `block-encoding-linear-systems-and-variable-time-amplification` requires `quantum-singular-value-transformation` (group h, batch 48)
- `block-encoding-linear-systems-and-variable-time-amplification` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)
- `block-encoding-linear-systems-and-variable-time-amplification` requires `reversible-computation-ancillas-and-coherent-oracles` (group p, batch 10)
- `block-encoding-linear-systems-and-variable-time-amplification` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `block-encoding-linear-systems-and-variable-time-amplification` requires `block-encodings` (group h, batch 46)
- `block-encoding-linear-systems-and-variable-time-amplification` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `block-encoding-linear-systems-and-variable-time-amplification` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)
- `block-encoding-linear-systems-and-variable-time-amplification` requires `amplitude-estimation-and-counting` (group e, batch 37)

Another group's pages depend on yours:

- `quantum-optimization-sdp-and-variational-algorithms` (group j) requires your `block-encoding-linear-systems-and-variable-time-amplification`
- `quantum-optimization-sdp-and-variational-algorithms` (group j) requires your `qubitization-and-optimal-hamiltonian-simulation`

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
