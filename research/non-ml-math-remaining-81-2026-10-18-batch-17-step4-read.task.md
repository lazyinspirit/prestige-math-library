# Step 4 batch reviewer — batch **17**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **17**. Step-5 owning group: **r**.
Return `group: "r"` and `batches: ["17"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 17 | `lossy-source-coding-with-side-information` | A | rate-distortion-and-lossy-source-coding, distributed-source-coding, cost-constrained-gaussian-and-feedback-channels |
| 17 | `lossy-source-coding-with-side-information-examples` | B | lossy-source-coding-with-side-information |

## Your content, in full

### `lossy-source-coding-with-side-information` — Lossy Source Coding with Side Information

- `def-it-finite-strongly-typical-set` · definition — Finite strongly typical sets with support restriction
- `lem-it-finite-type-class-cardinality-bounds` · lemma — Finite type-class cardinality bounds
- `lem-it-finite-codebook-covering-selection-law` · lemma — Finite random-codebook covering and selected-codeword law
- `lem-it-finite-random-bin-packing-bound` · lemma — Finite joint-typicality packing bound for independent random bins
- `lem-it-finite-selected-codeword-markov-typicality` · lemma — Markov typicality for independently selected finite codewords
- `def-it-finite-wyner-ziv-code` · definition — Finite-alphabet lossy source coding with decoder-only side information
- `def-it-finite-multiterminal-lossy-code` · definition — Finite-alphabet multiterminal lossy source code
- `lem-it-wyner-ziv-auxiliary-cardinality-bound` · lemma — Cardinality bound for the finite Wyner-Ziv auxiliary
- `lem-it-finite-wyner-ziv-function-convexity-continuity` · lemma — Convexity, monotonicity, and continuity of finite Wyner-Ziv rate
- `thm-it-berger-tung-finite-multiterminal-inner-bound` · theorem — Finite-alphabet Berger-Tung multiterminal lossy inner bound
- `thm-it-finite-alphabet-wyner-ziv-rate-distortion` · theorem — Finite-alphabet memoryless Wyner-Ziv theorem

### `lossy-source-coding-with-side-information-examples` — Lossy Source Coding with Side Information — Examples

- `ex-it-wyner-ziv-with-no-side-information` · example — No side information reduces Wyner-Ziv to ordinary rate distortion
- `ex-it-wyner-ziv-lossless-slepian-wolf-endpoint` · example — Lossless Wyner-Ziv endpoint is the Slepian-Wolf rate
- `ex-it-berger-tung-lossless-slepian-wolf-special-case` · example — Berger-Tung inner bound contains the Slepian-Wolf region

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `lossy-source-coding-with-side-information` requires `rate-distortion-and-lossy-source-coding`
- `lossy-source-coding-with-side-information` requires `distributed-source-coding`
- `lossy-source-coding-with-side-information` requires `cost-constrained-gaussian-and-feedback-channels`
- `multiuser-channel-networks` requires `lossy-source-coding-with-side-information`
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
