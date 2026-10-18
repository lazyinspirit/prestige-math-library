# Step 4 batch reviewer — batch **4**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **4**. Step-5 owning group: **m**.
Return `group: "m"` and `batches: ["4"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 4 | `finite-alphabet-entropy-and-divergence` | A | probability-spaces-random-variables-and-expectation, quantum-communication-and-fingerprinting, minimax-lower-bounds-and-information-theoretic-methods |
| 4 | `finite-alphabet-entropy-and-divergence-examples` | B | finite-alphabet-entropy-and-divergence |

## Your content, in full

### `finite-alphabet-entropy-and-divergence` — Finite-Alphabet Entropy and Divergence

- `def-it-information-units-and-logarithm-base` · definition — Information units and logarithm-base convention
- `lem-it-finite-marginals-and-conditionals-are-pmfs` · lemma — Marginals and positive-mass conditionals of a finite joint law are probability vectors
- `lem-it-finite-kl-agrees-with-measurable-kl` · lemma — Finite KL divergence agrees with measurable-space KL
- `lem-it-finite-log-sum-inequality` · lemma — Finite log-sum inequality with support and equality cases
- `def-it-finite-conditional-entropy` · definition — Finite conditional entropy
- `def-it-finite-mutual-information` · definition — Finite mutual information
- `def-it-finite-conditional-mutual-information` · definition — Finite conditional mutual information
- `thm-it-finite-kl-nonnegative-equality` · theorem — Finite KL divergence is nonnegative with equality exactly at equal laws
- `thm-it-information-unit-conversion` · theorem — Finite information quantities convert by the logarithm base
- `thm-it-finite-conditional-mutual-information-identities-and-equality` · theorem — Finite conditional mutual information identities and equality
- `thm-it-finite-entropy-chain-rule` · theorem — Finite entropy and mutual-information chain rules
- `thm-it-finite-markov-data-processing` · theorem — Data processing for a finite Markov chain, with equality condition
- `thm-it-fano-inequality` · theorem — Finite-alphabet Fano inequality
- `cor-it-fano-with-erasure-or-out-of-alphabet-estimates` · corollary — Fano bound for erasure and out-of-alphabet estimates

### `finite-alphabet-entropy-and-divergence-examples` — Finite-Alphabet Entropy and Divergence — Examples

- `ex-it-binary-entropy-and-extremizers` · example — Binary entropy and its extremizers
- `cex-it-kl-is-directional-and-can-be-infinite` · counterexample — Finite KL divergence is directional and may be infinite
- `ex-it-independent-and-deterministic-information` · example — Independent and deterministic finite information

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `measure-theoretic-information-and-conditioning` requires `finite-alphabet-entropy-and-divergence`
- `method-of-types-and-finite-large-deviations` requires `finite-alphabet-entropy-and-divergence`
- `prefix-codes-and-finite-lossless-coding` requires `finite-alphabet-entropy-and-divergence`
- `iid-lossless-source-coding-and-the-aep` requires `finite-alphabet-entropy-and-divergence`
- `quantum-information-measures` requires `finite-alphabet-entropy-and-divergence`
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
