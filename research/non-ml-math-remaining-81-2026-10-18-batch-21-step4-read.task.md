# Step 4 batch reviewer — batch **21**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **21**. Step-5 owning group: **s**.
Return `group: "s"` and `batches: ["21"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 21 | `quantum-information-measures` | A | finite-alphabet-entropy-and-divergence, trace-distance-fidelity-and-information-limits, knill-laflamme-recovery-and-subsystem-codes, trust-region-and-cubic-regularization-methods |
| 21 | `quantum-information-measures-examples` | B | quantum-information-measures |

## Your content, in full

### `quantum-information-measures` — Quantum Information Measures

- `def-it-von-neumann-entropy` · definition — Finite-dimensional von Neumann entropy
- `lem-it-partial-traces-of-a-state-are-states` · lemma — Partial traces of a finite bipartite state are states
- `lem-it-finite-cq-block-sum-is-a-state` · lemma — An orthogonal finite ensemble block sum is a density operator
- `lem-it-inverse-compression-resolvent` · lemma — Inverse compression for positive resolvents
- `lem-it-finite-classical-kl-nonnegative-equality` · lemma — Nonnegativity and equality for finite classical relative entropy
- `lem-it-finite-povm-measurement-channel` · lemma — A finite POVM defines a classical-output quantum channel
- `def-it-finite-dimensional-quantum-relative-entropy` · definition — Finite-dimensional quantum relative entropy
- `def-it-finite-quantum-information-measures` · definition — Finite quantum mutual, conditional, and conditional mutual information
- `lem-it-operator-jensen-negative-log` · lemma — The compression Jensen inequality for the negative logarithm
- `def-it-classical-quantum-state-and-holevo-information` · definition — Finite classical-quantum states and Holevo information
- `lem-it-quantum-entropy-support-and-finiteness` · lemma — Joint state support is contained in the tensor product of its marginal supports
- `lem-it-relative-modular-representation` · lemma — Relative modular representation of finite quantum relative entropy
- `lem-it-quantum-relative-entropy-support-regularization` · lemma — Support-sensitive regularization limit for quantum relative entropy
- `lem-it-quantum-relative-entropy-isometric-invariance` · lemma — Isometric invariance of finite quantum relative entropy
- `thm-it-finite-quantum-conditional-mutual-information-identities` · theorem — Finite quantum conditional mutual information identity
- `thm-it-quantum-relative-entropy-joint-convexity` · theorem — Joint convexity of finite quantum relative entropy
- `thm-it-quantum-entropy-identities` · theorem — Finite quantum mutual information identities and the Holevo identity
- `thm-it-quantum-relative-entropy-partial-trace-data-processing` · theorem — Partial-trace data processing for finite quantum relative entropy
- `thm-it-quantum-relative-entropy-channel-data-processing` · theorem — Channel data processing for finite quantum relative entropy
- `thm-it-quantum-relative-entropy-nonnegative-equality` · theorem — Nonnegativity and equality for finite quantum relative entropy
- `thm-it-holevo-measurement-bound` · theorem — The finite Holevo measurement bound

### `quantum-information-measures-examples` — Quantum Information Measures — Examples

- `ex-it-qubit-von-neumann-entropy` · example — Entropy of a diagonal qubit state
- `ex-it-classical-ensemble-holevo-equality` · example — An orthogonal ensemble attains its Holevo information
- `cex-it-non-full-support-quantum-kl-is-infinite` · counterexample — Normalized states can have infinite quantum relative entropy
- `ex-it-bell-pair-negative-conditional-entropy` · example — A Bell pair has negative quantum conditional entropy

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `quantum-information-measures` requires `finite-alphabet-entropy-and-divergence`
- `quantum-relative-entropy-data-processing-and-strong-subadditivity` requires `quantum-information-measures`
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
