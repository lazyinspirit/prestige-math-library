# Step 4 batch reviewer — batch **40**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **40**. Step-5 owning group: **f**.
Return `group: "f"` and `batches: ["40"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 40 | `adversary-methods-and-quantum-query-complexity` | A | reversible-arithmetic-and-oracle-conversion, quantum-phase-estimation, convex-and-semicontinuous-functions-on-rn, inner-product-spaces-and-orthogonality, the-spectral-theorem-and-singular-value-decomposition, controlled-gates-phase-and-entanglement, finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces, computational-problems-promises-and-cost-models, registers-tensor-products-and-partial-trace, reversible-computation-ancillas-and-coherent-oracles, pure-and-mixed-states-ensembles-and-schmidt-decomposition, uniform-circuit-families-promise-problems-and-complexity, amplitude-estimation-and-counting |
| 40 | `adversary-methods-and-quantum-query-complexity-examples` | B | adversary-methods-and-quantum-query-complexity |

## Your content, in full

### `adversary-methods-and-quantum-query-complexity` — Adversary Methods and Quantum Query Complexity

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

### `adversary-methods-and-quantum-query-complexity-examples` — Adversary Methods and Quantum Query Complexity — Examples

- `ex-qa-16-or-dual-certificate` · example — Dual adversary certificate for OR_N
- `cex-qa-16-negative-weights-matter` · counterexample — A nonnegative-only adversary estimate need not capture the general bound

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `adversary-methods-and-quantum-query-complexity` requires `reversible-arithmetic-and-oracle-conversion`
- `adversary-methods-and-quantum-query-complexity` requires `quantum-phase-estimation`
- `adversary-methods-and-quantum-query-complexity` requires `controlled-gates-phase-and-entanglement`
- `adversary-methods-and-quantum-query-complexity` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `adversary-methods-and-quantum-query-complexity` requires `computational-problems-promises-and-cost-models`
- `adversary-methods-and-quantum-query-complexity` requires `registers-tensor-products-and-partial-trace`
- `adversary-methods-and-quantum-query-complexity` requires `reversible-computation-ancillas-and-coherent-oracles`
- `adversary-methods-and-quantum-query-complexity` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `adversary-methods-and-quantum-query-complexity` requires `uniform-circuit-families-promise-problems-and-complexity`
- `adversary-methods-and-quantum-query-complexity` requires `amplitude-estimation-and-counting`
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
