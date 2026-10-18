# Step 4 batch reviewer — batch **9**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **9**. Step-5 owning group: **o**.
Return `group: "o"` and `batches: ["9"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 9 | `iid-lossless-source-coding-and-the-aep` | A | weak-laws-and-series-of-independent-random-variables, finite-alphabet-entropy-and-divergence |
| 9 | `iid-lossless-source-coding-and-the-aep-examples` | B | iid-lossless-source-coding-and-the-aep |

## Your content, in full

### `iid-lossless-source-coding-and-the-aep` — IID Lossless Source Coding and the AEP

- `def-finite-law-self-information-and-entropy` · definition — Self-information and surprisal variance for a finite law
- `def-finite-alphabet-iid-source` · definition — Finite-alphabet IID source
- `def-finite-source-information-density-and-typical-set` · definition — Information density and typical sets for a finite source
- `def-fixed-length-lossless-block-code` · definition — Deterministic fixed-length binary block code and block error
- `lem-finite-alphabet-iid-information-aep` · lemma — Finite-alphabet IID information AEP with a variance bound
- `cor-aep-typical-set-probability-and-size-bounds` · corollary — Typical-set probability and cardinality bounds
- `thm-fixed-length-lossless-source-coding` · theorem — Fixed-length lossless source coding at the entropy rate

### `iid-lossless-source-coding-and-the-aep-examples` — IID Lossless Source Coding and the AEP — Examples

- `ex-correlated-bernoulli-source-fails-the-iid-aep` · example — A perfectly dependent Bernoulli source has zero block information rate
- `ex-independent-nonidentical-source-has-no-information-rate-limit` · example — Independent non-identical finite sources can have no information-rate limit
- `ex-bernoulli-aep-and-typical-set-count` · example — Bernoulli information density and exact typical-set counts

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `iid-lossless-source-coding-and-the-aep` requires `finite-alphabet-entropy-and-divergence`
- `stationary-ergodic-sources-and-universal-coding` requires `iid-lossless-source-coding-and-the-aep`
- `distributed-source-coding` requires `iid-lossless-source-coding-and-the-aep`
- `secrecy-and-information-privacy` requires `iid-lossless-source-coding-and-the-aep`
- `quantum-source-compression-and-cq-capacity` requires `iid-lossless-source-coding-and-the-aep`
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
