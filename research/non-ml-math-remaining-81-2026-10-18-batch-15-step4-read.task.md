# Step 4 batch reviewer — batch **15**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **15**. Step-5 owning group: **q**.
Return `group: "q"` and `batches: ["15"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 15 | `point-to-point-source-channel-separation` | A | discrete-memoryless-channel-capacity, rate-distortion-and-lossy-source-coding |
| 15 | `point-to-point-source-channel-separation-examples` | B | point-to-point-source-channel-separation |

## Your content, in full

### `point-to-point-source-channel-separation` — Point-to-Point Source–Channel Separation

- `def-it-point-to-point-joint-source-channel-code` · definition — Finite-alphabet point-to-point joint source-channel codes
- `lem-it-finite-iid-source-lossless-code-achievability` · lemma — Finite-IID lossless source coding above entropy
- `lem-it-finite-iid-rate-distortion-mutual-information-bound` · lemma — Finite-IID rate-distortion mutual-information converse
- `thm-it-point-to-point-lossless-source-channel-separation` · theorem — Lossless separation for finite IID sources and finite DMCs
- `thm-it-point-to-point-lossy-source-channel-separation` · theorem — Lossy separation for finite IID sources and finite DMCs

### `point-to-point-source-channel-separation-examples` — Point-to-Point Source–Channel Separation — Examples

- `ex-it-point-to-point-source-channel-rate-budget` · example — A finite-alphabet source-channel rate budget
- `cex-it-asymptotic-source-channel-threshold-does-not-give-zero-error-at-finite-blocklength` · counterexample — Strict asymptotic separation need not give zero finite-block error

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `point-to-point-source-channel-separation` requires `discrete-memoryless-channel-capacity`
- `point-to-point-source-channel-separation` requires `rate-distortion-and-lossy-source-coding`
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
