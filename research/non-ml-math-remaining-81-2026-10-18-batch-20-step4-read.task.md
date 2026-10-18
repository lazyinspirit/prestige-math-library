# Step 4 batch reviewer — batch **20**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **20**. Step-5 owning group: **s**.
Return `group: "s"` and `batches: ["20"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 20 | `secrecy-and-information-privacy` | A | discrete-memoryless-channel-capacity, iid-lossless-source-coding-and-the-aep, trust-region-and-cubic-regularization-methods |
| 20 | `secrecy-and-information-privacy-examples` | B | secrecy-and-information-privacy |

## Your content, in full

### `secrecy-and-information-privacy` — Secrecy and Information Privacy

- `thm-it-universal-hashing-leftover-bound` · theorem — Classical leftover-hash bound with public side information
- `def-it-finite-source-privacy-utility-region` · definition — Finite-source privacy–utility region
- `def-it-information-leakage-and-equivocation` · definition — Information leakage and equivocation for finite observations
- `lem-it-finite-wiretap-product-kernel-is-stochastic` · lemma — The finite wiretap product law is stochastic
- `def-it-wiretap-channel` · definition — Finite discrete memoryless wiretap channel and code model
- `thm-it-perfect-privacy-kernel-criterion` · theorem — A finite kernel criterion for perfect privacy
- `def-it-degraded-wiretap-channel` · definition — Finite degraded wiretap channel
- `def-it-weak-and-strong-secrecy` · definition — Weak and strong secrecy for wiretap code sequences
- `lem-it-finite-dmc-information-density-concentration` · lemma — Information-density concentration for a fixed finite DMC input law
- `def-it-wiretap-secrecy-capacities` · definition — Operational weak and strong secrecy capacities
- `lem-it-channel-resolvability-soft-covering` · lemma — Finite DMC resolvability by random codebooks
- `lem-it-classical-wiretap-auxiliary-cardinality` · lemma — The finite wiretap auxiliary has cardinality at most |X|
- `thm-it-finite-classical-wiretap-auxiliary-capacity` · theorem — Strong-secrecy capacity of a finite DMC wiretap channel
- `thm-it-degraded-wiretap-secrecy-capacity` · theorem — Secrecy capacity of a finite degraded wiretap channel

### `secrecy-and-information-privacy-examples` — Secrecy and Information Privacy — Examples

- `ex-it-information-bottleneck-finite-model` · example — A finite information-bottleneck privacy model
- `ex-it-weak-secrecy-does-not-imply-strong-secrecy` · example — Weak secrecy does not imply strong secrecy
- `ex-it-degraded-wiretap-capacity` · example — A degraded binary erasure wiretap channel

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `secrecy-and-information-privacy` requires `discrete-memoryless-channel-capacity`
- `secrecy-and-information-privacy` requires `iid-lossless-source-coding-and-the-aep`
- `quantum-key-distribution-and-composable-secrecy` requires `secrecy-and-information-privacy`
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
