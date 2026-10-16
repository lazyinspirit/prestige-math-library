# Step 4 batch reviewer — batch **37**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **37**. Step-5 owning group: **e**.
Return `group: "e"` and `batches: ["37"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 37 | `amplitude-estimation-and-counting` | A | reversible-arithmetic-and-oracle-conversion, quantum-phase-estimation, amplitude-amplification, computational-problems-promises-and-cost-models, controlled-gates-phase-and-entanglement, measurements-povms-and-instruments, finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces, qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates, circuit-syntax-denotational-semantics-and-measurement, effective-numberings-reductions-resources-and-randomness, trigonometric-and-oscillatory-examples-in-one-variable |
| 37 | `amplitude-estimation-and-counting-examples` | B | amplitude-estimation-and-counting |

## Your content, in full

### `amplitude-estimation-and-counting` — Amplitude Estimation and Counting

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

### `amplitude-estimation-and-counting-examples` — Amplitude Estimation and Counting — Examples

- `cex-qa-13-controlled-powers-are-not-free` · counterexample — A bare unitary oracle does not supply controlled powers for free
- `ex-qa-13-counting-error-regimes` · example — Counting bounds at zero, one, half, and all marked

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `amplitude-estimation-and-counting` requires `reversible-arithmetic-and-oracle-conversion`
- `amplitude-estimation-and-counting` requires `quantum-phase-estimation`
- `amplitude-estimation-and-counting` requires `amplitude-amplification`
- `amplitude-estimation-and-counting` requires `computational-problems-promises-and-cost-models`
- `amplitude-estimation-and-counting` requires `controlled-gates-phase-and-entanglement`
- `amplitude-estimation-and-counting` requires `measurements-povms-and-instruments`
- `amplitude-estimation-and-counting` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `amplitude-estimation-and-counting` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `amplitude-estimation-and-counting` requires `circuit-syntax-denotational-semantics-and-measurement`
- `adversary-methods-and-quantum-query-complexity` requires `amplitude-estimation-and-counting`
- `hhl-phase-estimation-linear-systems` requires `amplitude-estimation-and-counting`
- `block-encoding-linear-systems-and-variable-time-amplification` requires `amplitude-estimation-and-counting`
- `quantum-sampling-expectation-and-monte-carlo` requires `amplitude-estimation-and-counting`
- `quantum-optimization-sdp-and-variational-algorithms` requires `amplitude-estimation-and-counting`
---

# Step 4 Alpha batch reviewer — read-only digest, `quantum-computing-algorithms-60-2026-10-15`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Published supplier findings:** Preserve each exact outside published-supplier finding in `alerts`. It has no in-run producer batch. The owner records a separate evidence-bound route after focused published repair; do not delete the alert, rewrite your digest, fabricate ownership, or claim the repair yourself.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
