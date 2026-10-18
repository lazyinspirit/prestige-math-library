# Step 4 batch reviewer — batch **31**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **31**. Step-5 owning group: **z**.
Return `group: "z"` and `batches: ["31"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 31 | `topological-quantum-algorithms-and-braid-compilation` | A | topological-braid-gates-encodings-and-universality, toric-code-anyons-logical-operators-and-protection, adiabatic-computation-and-circuit-equivalence, computational-problems-promises-and-cost-models, lcu-oblivious-amplitude-amplification-and-taylor-simulation |
| 31 | `topological-quantum-algorithms-and-braid-compilation-examples` | B | topological-quantum-algorithms-and-braid-compilation |

## Your content, in full

### `topological-quantum-algorithms-and-braid-compilation` — Topological Quantum Algorithms and Braid Compilation

- `def-qa-37-certified-matrix-input` · definition — Certified fixed-dimensional special-unitary input
- `lem-qa-37-product-error` · lemma — Operator error adds under finite unitary products
- `thm-qa-37-output-distribution-error` · theorem — Operator error bounds measured output variation
- `def-qa-37-anyon-task-and-promise` · definition — Finite anyon task and promise interface
- `def-qa-37-fusion-input-encoding` · definition — Fusion-tree task input encoding
- `def-qa-37-resource-cost-model` · definition — Anyon compiler resource ledger
- `def-qa-37-fusion-measurement` · definition — Fusion-channel measurement access
- `def-qa-37-n-triple-fusion-code` · definition — Arbitrary-n triple-anyon fixed-charge code
- `def-qa-37-phase-reference-cost` · definition — Braid phase reference and correction ledger
- `lem-qa-37-local-braid-acts-trivially-on-spectators` · lemma — A triple braid acts identically on fusion spectators
- `thm-qa-37-fusion-branch-validity` · theorem — Fusion measurement branches are normalized exactly when nonzero
- `alg-qa-37-exhaustive-b6-block-pair-compiler` · algorithm — Exhaustive certified Fibonacci B6 block-pair search
- `def-qa-37-finite-adiabatic-braid-input` · definition — Finite adiabatic braid compilation input
- `lem-qa-37-fixed-sector-global-phase` · lemma — Standalone and controlled phase accounting for a fixed-sector braid
- `thm-qa-37-exhaustive-b6-compiler-terminates` · theorem — Certified B6 block-pair search terminates
- `thm-qa-37-jrs-leakage-bound` · theorem — Finite JRS leakage amplitude and probability
- `lem-qa-37-fibonacci-su2-lifts-are-dense` · lemma — The generated normalized Fibonacci lifts are dense in SU(2)
- `lem-qa-37-total-error-budget` · lemma — Finite braid compilation and adiabatic error budget
- `thm-qa-37-approx-encoded-two-qubit-gate` · theorem — One B6 braid approximates an encoded two-qubit gate
- `def-qa-37-fibonacci-braid-gate-set` · definition — Fixed SU(2) Fibonacci braid gate alphabet
- `def-qa-37-physical-locality-boundary` · definition — Physical realization boundary for braid compilation
- `alg-qa-37-su2-solovay-kitaev-compiler` · algorithm — SU(2) Fibonacci Solovay–Kitaev compiler
- `thm-qa-37-su2-compiler-error-length` · theorem — Fibonacci SU(2) compiler error, length, and bit cost
- `thm-qa-37-arbitrary-n-encoded-circuit` · theorem — Arbitrary-size triple-encoded projective braid approximation

### `topological-quantum-algorithms-and-braid-compilation-examples` — Topological Quantum Algorithms and Braid Compilation — Examples

- `ex-qa-37-fusion-measurement-branches` · example — Fibonacci fusion measurement branches and zero outcomes
- `cex-qa-37-projective-is-not-controlled` · counterexample — A discarded global phase changes a controlled computation
- `ex-qa-37-approximate-b6-target` · example — Identity target in the two B6 charge blocks
- `ex-qa-37-fibonacci-budget` · example — Fibonacci SK level and symbolic gate budget

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `topological-quantum-algorithms-and-braid-compilation` requires `topological-braid-gates-encodings-and-universality`
- `topological-quantum-algorithms-and-braid-compilation` requires `toric-code-anyons-logical-operators-and-protection`
---

# Step 4 Alpha batch reviewer — read-only digest, `non-ml-math-remaining-81-2026-10-18`

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
