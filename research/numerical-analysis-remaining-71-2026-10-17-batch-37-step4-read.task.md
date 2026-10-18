# Step 4 batch reviewer — batch **37**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **37**. Step-5 owning group: **m**.
Return `group: "m"` and `batches: ["37"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 37 | `well-balanced-balance-laws-and-wet-dry-fronts` | A | invariant-domain-and-entropy-stable-conservative-schemes |
| 37 | `well-balanced-balance-laws-and-wet-dry-fronts-examples` | B | well-balanced-balance-laws-and-wet-dry-fronts |

## Your content, in full

### `well-balanced-balance-laws-and-wet-dry-fronts` — Well-balanced balance laws and wet/dry fronts

- `def-pe05-shallow-water-balance-law` · definition — One-dimensional shallow-water balance law with a dry-state convention
- `def-pe05-hydrostatic-hll-scheme` · definition — Hydrostatic reconstruction with a dry-safe HLL flux and one-sided pressure corrections
- `lem-pe05-strong-l1-limit-preserves-dry-admissibility` · lemma — A strong local L1 limit preserves shallow-water dry admissibility
- `prop-pe05-shallow-water-admissible-state-set-is-convex` · proposition — The shallow-water wet/dry state set is convex
- `lem-pe05-hll-depth-flux-decomposition` · lemma — HLL depth flux is a bounded outflow/inflow combination
- `thm-pe05-hydrostatic-reconstruction-is-well-balanced` · theorem — The hydrostatic HLL update preserves lakes at rest, including dry cells
- `lem-pe05-source-quadrature-consistency` · lemma — Hydrostatic pressure corrections converge to the smooth-bed source
- `lem-pe05-discrete-weak-identity-with-source` · lemma — Exact space-time weak identity for the hydrostatic update
- `lem-pe05-hll-flux-reconstruction-converges-under-strong-primitive-l1` · lemma — Hydrostatic HLL face fluxes converge under strong state and velocity convergence
- `lem-pe05-hll-dry-face-direction-and-zero-flux` · lemma — A dry HLL face sends water only into the dry side
- `thm-pe05-strong-limit-satisfies-smooth-bed-balance-law` · theorem — A strong limit of hydrostatic HLL updates solves the smooth-bed balance law weakly
- `thm-pe05-hydrostatic-update-preserves-water-and-dry-admissibility` · theorem — The hydrostatic HLL step conserves water and preserves dry admissibility

### `well-balanced-balance-laws-and-wet-dry-fronts-examples` — Well-balanced balance laws and wet/dry fronts — Examples

- `cex-pe05-centered-source-produces-spurious-current` · counterexample — A centered pressure flux and centered bed source move a discrete lake
- `ex-pe05-lake-at-rest-over-a-dry-crest` · example — A lake at rest over a bump with a dry crest
- `ex-pe05-hll-dam-break-wets-dry-cell` · example — A first HLL step wets a dry cell without negative depth

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `well-balanced-balance-laws-and-wet-dry-fronts` requires `invariant-domain-and-entropy-stable-conservative-schemes`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-analysis-remaining-71-2026-10-17`

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
