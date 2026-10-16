# Step 4 batch reviewer — batch **23**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **23**. Step-5 owning group: **t**.
Return `group: "t"` and `batches: ["23"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 23 | `circuit-optimization-resource-tradeoffs-and-lower-bounds` | A | approximate-universality-and-solovay-kitaev, circuit-syntax-denotational-semantics-and-measurement, clifford-t-exact-and-approximate-synthesis, continuous-gate-universality-and-exact-synthesis, counting-complexity-and-sharpp, effective-numberings-reductions-resources-and-randomness, formal-languages-encodings-and-decision-problems, matrix-norms-condition-numbers-and-numerical-stability, reversible-computation-ancillas-and-coherent-oracles, uniform-circuit-families-promise-problems-and-complexity, classical-zero-free-region-and-the-prime-number-theorem |
| 23 | `circuit-optimization-resource-tradeoffs-and-lower-bounds-examples` | B | circuit-optimization-resource-tradeoffs-and-lower-bounds |

## Your content, in full

### `circuit-optimization-resource-tradeoffs-and-lower-bounds` — Circuit Optimization, Resource Tradeoffs, and Lower Bounds

- `def-qc-unbounded-error-time-space-counting-model` · definition — Unbounded error time space counting model
- `lem-qc-logspace-uniform-iterated-addition-tc0` · lemma — DLOGTIME uniform iterated addition threshold circuits
- `lem-qc-logspace-uniform-iterated-multiplication-tc0` · lemma — Logspace uniform iterated multiplication threshold circuits
- `def-qc-bqtisp-model` · definition — BQTISP Model
- `lem-qc-unbounded-error-tie-normalization` · lemma — Bounded-overhead tie normalization for fair-bit machines
- `lem-qc-uniform-probabilistic-clocked-simulation` · lemma — Uniform clocked simulation of encoded probabilistic machines
- `lem-qc-bounded-space-virtual-input-simulation` · lemma — Bounded-space simulation of a generated input
- `lem-qc-logspace-predicates-in-linear-counting-hierarchy` · lemma — Logspace predicates in a fixed linear counting hierarchy level
- `thm-qc-uniform-threshold-iterated-integer-arithmetic` · theorem — Uniform threshold iterated integer arithmetic
- `lem-qc-basis-query-time-normalization` · lemma — Time normalization of classical basis queries
- `lem-qc-logspace-uniform-cook-formula-encoding` · lemma — Logspace uniform near-linear Cook formula encoding
- `lem-qc-counting-time-space-to-linear-hierarchy` · lemma — Counting time space to linear hierarchy
- `thm-qc-probabilistic-polynomial-time-hierarchy` · theorem — Probabilistic polynomial time hierarchy
- `lem-qc-tight-majority-formula-completeness` · lemma — Tight majority formula completeness
- `thm-qc-unbounded-error-counting-time-space-alternative` · theorem — Unbounded error counting time space alternative
- `lem-qc-vmw-fh-density-and-base-net` · lemma — The VMW F/H Alphabet Has an Algebraic Dense SU(2) Lift and a Fixed Base Net
- `lem-qc-multiplexed-rz-gray-code` · lemma — Gray-code synthesis of a multiplexed Z rotation
- `alg-qc-basic-clifford-t-rewrite` · algorithm — Basic Clifford T Rewrite
- `lem-qc-circuit-resource-composition` · lemma — Circuit Resource Composition
- `lem-qc-unoptimized-qsd-recursive-decomposition-and-count` · lemma — Unoptimized recursive QSD decomposition and CNOT count
- `lem-qc-vmw-finite-precision-sk-compiler` · lemma — Finite-Bit Compilation into the VMW F/H Alphabet
- `def-qc-circuit-optimization-task` · definition — Circuit Optimization Task
- `lem-qc-ninefold-nearest-neighbor-multiplexor-routing` · lemma — Ninefold nearest-neighbor multiplexor routing
- `thm-qc-basic-rewrite-correct-and-terminating` · theorem — Basic Rewrite Correct And Terminating
- `thm-qc-clean-ancilla-multicontrolled-tradeoff` · theorem — Clean Ancilla Multicontrolled Tradeoff
- `thm-qc-nearest-neighbor-cnot-overhead` · theorem — Nearest Neighbor CNOT Overhead
- `thm-qc-qsd-cnot-upper-bound` · theorem — QSD CNOT Upper Bound
- `lem-qc-fixed-arity-polynomial-cauchy-gate-decomposition` · lemma — Effective Exact Gate Factors for Fixed Local Unitaries
- `thm-qc-bqtisp-to-ptisp-simulation` · theorem — BQTISP To PTISP Simulation
- `thm-qc-generic-circuit-count-lower-bound` · theorem — Generic Circuit Count Lower Bound
- `thm-qc-counting-hierarchy-time-space-lower-bound` · theorem — Counting Hierarchy Time Space Lower Bound

### `circuit-optimization-resource-tradeoffs-and-lower-bounds-examples` — Circuit Optimization, Resource Tradeoffs, and Lower Bounds — Examples

- `ex-qc-two-qubit-qsd-cnot-count` · example — Two-qubit QSD CNOT upper-bound instance

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `circuit-optimization-resource-tradeoffs-and-lower-bounds` requires `approximate-universality-and-solovay-kitaev`
- `circuit-optimization-resource-tradeoffs-and-lower-bounds` requires `circuit-syntax-denotational-semantics-and-measurement`
- `circuit-optimization-resource-tradeoffs-and-lower-bounds` requires `clifford-t-exact-and-approximate-synthesis`
- `circuit-optimization-resource-tradeoffs-and-lower-bounds` requires `continuous-gate-universality-and-exact-synthesis`
- `circuit-optimization-resource-tradeoffs-and-lower-bounds` requires `reversible-computation-ancillas-and-coherent-oracles`
- `circuit-optimization-resource-tradeoffs-and-lower-bounds` requires `uniform-circuit-families-promise-problems-and-complexity`
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
