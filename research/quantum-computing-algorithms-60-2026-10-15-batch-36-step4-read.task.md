# Step 4 batch reviewer — batch **36**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **36**. Step-5 owning group: **d**.
Return `group: "d"` and `batches: ["36"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 36 | `amplitude-amplification` | A | computational-problems-promises-and-cost-models, pure-and-mixed-states-ensembles-and-schmidt-decomposition, measurements-povms-and-instruments, controlled-gates-phase-and-entanglement, finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces, inner-product-spaces-and-orthogonality, reversible-computation-ancillas-and-coherent-oracles, uniform-circuit-families-promise-problems-and-complexity, trigonometric-and-oscillatory-examples-in-one-variable |
| 36 | `amplitude-amplification-examples` | B | amplitude-amplification |

## Your content, in full

### `amplitude-amplification` — Amplitude Amplification

- `def-qa-12-prepared-success-subspace` · definition — Prepared unitary and success subspace for amplitude amplification
- `lem-qa-12-amplification-plane-invariant` · lemma — Amplitude-amplification invariant plane
- `alg-qa-12-amplitude-amplification` · algorithm — Amplitude amplification with a fixed integer iteration count
- `alg-qa-12-unknown-amplitude-search` · algorithm — Unknown-amplitude randomized search
- `alg-qa-12-arbitrary-phase-amplification` · algorithm — Amplitude amplification with independently chosen phase rotations
- `thm-qa-12-amplification-rotation-correctness` · theorem — Exact success probability after amplitude amplification
- `alg-qa-12-known-amplitude-amplification` · algorithm — Known-amplitude amplification with integer rounding
- `alg-qa-12-exact-success-amplification` · algorithm — Exact success amplification by attenuating the good branch
- `thm-qa-12-arbitrary-phase-matching` · theorem — Phase-matching condition for amplitude-amplification rotations
- `thm-qa-12-fixed-amplification-query-cost` · theorem — Fixed-round amplitude amplification query count
- `thm-qa-12-known-amplitude-success-bound` · theorem — Known-amplitude success bound
- `thm-qa-12-exact-success-guarantee` · theorem — Exact success for known positive amplitude with explicit dilution
- `thm-qa-12-unknown-amplitude-success` · theorem — Unknown-amplitude search has no false positives and halts almost surely
- `thm-qa-12-phase-mismatch-robustness` · theorem — Success bound under an explicit amplitude-amplification phase mismatch
- `thm-qa-12-arbitrary-phase-query-cost` · theorem — Arbitrary-phase amplification query count
- `prop-qa-12-amplitude-access-cost-accounting` · proposition — Amplitude-amplification access and resource accounting
- `thm-qa-12-known-amplitude-query-cost` · theorem — Known-amplitude amplification query cost
- `thm-qa-12-exact-success-query-cost` · theorem — Exact-success amplitude amplification query cost
- `thm-qa-12-unknown-amplitude-query-cost` · theorem — Expected cost of unknown-amplitude search

### `amplitude-amplification-examples` — Amplitude Amplification — Examples

- `ex-qa-12-amplitude-amplification-finite-case` · example — A prepared state with success amplitude one half
- `cex-qa-12-known-probability-is-needed-for-the-fixed-rounding-rule` · counterexample — A fixed Grover iteration count can fail when a is unknown

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `amplitude-amplification` requires `computational-problems-promises-and-cost-models`
- `amplitude-amplification` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `amplitude-amplification` requires `measurements-povms-and-instruments`
- `amplitude-amplification` requires `controlled-gates-phase-and-entanglement`
- `amplitude-amplification` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `amplitude-amplification` requires `reversible-computation-ancillas-and-coherent-oracles`
- `amplitude-amplification` requires `uniform-circuit-families-promise-problems-and-complexity`
- `amplitude-estimation-and-counting` requires `amplitude-amplification`
- `hhl-phase-estimation-linear-systems` requires `amplitude-amplification`
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
