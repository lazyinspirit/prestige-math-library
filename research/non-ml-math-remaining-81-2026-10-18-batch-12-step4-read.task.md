# Step 4 batch reviewer — batch **12**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **12**. Step-5 owning group: **p**.
Return `group: "p"` and `batches: ["12"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 12 | `discrete-memoryless-channel-capacity` | A | f-divergences-renyi-and-hypothesis-testing |
| 12 | `discrete-memoryless-channel-capacity-examples` | B | discrete-memoryless-channel-capacity |

## Your content, in full

### `discrete-memoryless-channel-capacity` — Discrete Memoryless Channel Capacity

- `def-channel-sequence` · definition — Channel sequences
- `def-discrete-memoryless-channel` · definition — Finite discrete memoryless channels
- `lem-discrete-memoryless-channel-block-kernels-are-stochastic` · lemma — The DMC product laws are stochastic kernels
- `def-discrete-memoryless-channel-information-capacity` · definition — Single-letter information capacity of a finite DMC
- `def-fixed-length-channel-code` · definition — Fixed-length codes for a finite DMC
- `def-discrete-memoryless-channel-information-density` · definition — Finite DMC information density
- `lem-discrete-memoryless-channel-capacity-is-attained` · lemma — Finite DMC information capacity is attained
- `lem-discrete-memoryless-channel-n-letter-information-bound` · lemma — The n-letter mutual information of a DMC is at most nC
- `def-fixed-length-channel-code-errors` · definition — Average and maximal error of a fixed-length code
- `lem-discrete-memoryless-channel-iid-information-density-converges` · lemma — IID DMC information density converges to mutual information
- `lem-discrete-memoryless-channel-capacity-achieving-output-divergence-bound` · lemma — Capacity-achieving output laws bound every row divergence
- `def-discrete-memoryless-channel-operational-capacity` · definition — Average-error and maximal-error DMC capacities
- `lem-discrete-memoryless-channel-average-to-maximal-expurgation` · lemma — Expurgation converts small average error to small maximal error
- `thm-discrete-memoryless-channel-random-coding-achievability` · theorem — Random coding achieves every rate below finite DMC capacity
- `lem-discrete-memoryless-channel-information-density-concentration` · lemma — Uniform concentration around the capacity output divergence bound
- `thm-discrete-memoryless-channel-average-error-converse` · theorem — Reliable average-error DMC rates do not exceed capacity
- `thm-discrete-memoryless-channel-alphabet-scoped-strong-converse` · theorem — Strong converse for finite-alphabet DMCs
- `thm-discrete-memoryless-channel-capacity-formula` · theorem — Operational capacity formula for a finite DMC

### `discrete-memoryless-channel-capacity-examples` — Discrete Memoryless Channel Capacity — Examples

- `ex-binary-symmetric-channel-capacity` · example — Capacity of the binary symmetric channel
- `ex-binary-erasure-channel-capacity` · example — Capacity of the binary erasure channel

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `discrete-memoryless-channel-capacity` requires `f-divergences-renyi-and-hypothesis-testing`
- `cost-constrained-gaussian-and-feedback-channels` requires `discrete-memoryless-channel-capacity`
- `point-to-point-source-channel-separation` requires `discrete-memoryless-channel-capacity`
- `secrecy-and-information-privacy` requires `discrete-memoryless-channel-capacity`
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
