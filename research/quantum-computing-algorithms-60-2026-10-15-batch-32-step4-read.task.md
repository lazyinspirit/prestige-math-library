# Step 4 batch reviewer — batch **32**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **32**. Step-5 owning group: **c**.
Return `group: "c"` and `batches: ["32"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 32 | `quantum-order-finding-and-rational-reconstruction` | A | quantum-phase-estimation, congruences-and-the-chinese-remainder-theorem, monoids-groups-and-subgroups, primes-and-the-fundamental-theorem-of-arithmetic, regular-continued-fractions-and-diophantine-approximation, reversible-computation-ancillas-and-coherent-oracles, finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces, circuit-syntax-denotational-semantics-and-measurement, registers-tensor-products-and-partial-trace, uniform-circuit-families-promise-problems-and-complexity, computational-problems-promises-and-cost-models |
| 32 | `quantum-order-finding-and-rational-reconstruction-examples` | B | quantum-order-finding-and-rational-reconstruction |

## Your content, in full

### `quantum-order-finding-and-rational-reconstruction` — Quantum Order Finding and Rational Reconstruction

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

### `quantum-order-finding-and-rational-reconstruction-examples` — Quantum Order Finding and Rational Reconstruction — Examples

- `ex-qa-rational-reconstruction-boundary` · example — Denominator-bounded reconstruction at the strict boundary
- `ex-qa-order-finding-noncoprime-phase` · example — A non-coprime phase gives a proper order divisor

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `quantum-order-finding-and-rational-reconstruction` requires `quantum-phase-estimation`
- `quantum-order-finding-and-rational-reconstruction` requires `reversible-computation-ancillas-and-coherent-oracles`
- `quantum-order-finding-and-rational-reconstruction` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `quantum-order-finding-and-rational-reconstruction` requires `circuit-syntax-denotational-semantics-and-measurement`
- `quantum-order-finding-and-rational-reconstruction` requires `registers-tensor-products-and-partial-trace`
- `quantum-order-finding-and-rational-reconstruction` requires `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-order-finding-and-rational-reconstruction` requires `computational-problems-promises-and-cost-models`
- `shors-factoring-algorithm` requires `quantum-order-finding-and-rational-reconstruction`
- `period-hidden-shift-and-number-theoretic-algorithms` requires `quantum-order-finding-and-rational-reconstruction`
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
