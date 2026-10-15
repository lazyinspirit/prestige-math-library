# Step 4 batch reviewer — batch **48**, run `statistical-models-experiments-62`

You are the only reviewer for batch **48**. Step-5 owning group: **p**.
Return `group: "p"` and `batches: ["48"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 48 | `poisson-and-cox-point-process-models` | A | counting-process-compensators-and-integrals, measures-and-their-basic-properties, conditional-distributions-and-regular-conditional-probability, infinite-product-measures-and-kolmogorov-extension, product-measures-and-the-fubini-tonelli-theorems, conditional-expectation |
| 48 | `poisson-and-cox-point-process-models-examples` | B | poisson-and-cox-point-process-models |

## Your content, in full

### `poisson-and-cox-point-process-models` — Poisson and Cox point processes

- `def-random-measure-and-locally-finite-point-process` · definition — Random measures and locally finite point processes
- `lem-locally-compact-second-countable-spaces-have-compact-exhaustions` · lemma — Second-countable locally compact Hausdorff spaces admit compact exhaustions
- `def-scalar-poisson-count-law` · definition — The scalar Poisson count law
- `lem-mean-measure-and-integrals-of-a-random-point-process` · lemma — Mean measures and measurable nonnegative integrals of random measures
- `lem-point-process-law-is-determined-by-count-fidi` · lemma — A point-process law is determined by its finite-dimensional count laws
- `lem-poisson-count-law-normalization-and-moments` · lemma — Normalization, moments, and generating function of the Poisson count law
- `lem-deletion-of-one-point-is-measurable` · lemma — Deleting one occurrence from a locally finite counting measure is measurable
- `def-poisson-and-cox-point-process` · definition — Poisson and Cox point processes
- `thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law` · theorem — Finite-intensity Poisson-process existence and mixed-binomial law
- `lem-poisson-integral-moment-identities` · lemma — First and second moments of a Poisson random integral
- `lem-finite-intensity-mecke-identity` · lemma — Mecke identity for a finite-intensity Poisson point process
- `thm-poisson-point-process-existence` · theorem — Existence of a locally finite Poisson point process
- `thm-campbell-laplace-mecke-and-cox-moments` · theorem — Campbell, Laplace, Mecke, and Cox moment formulas

### `poisson-and-cox-point-process-models-examples` — Poisson and Cox point processes — Examples

- `ex-poisson-and-cox-count-laws-on-a-finite-window` · example — Poisson and Cox counts with the same mean on a finite window

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `poisson-and-cox-point-process-models` requires `counting-process-compensators-and-integrals`
- `spatial-point-process-summaries-and-palm-laws` requires `poisson-and-cox-point-process-models`
- `finite-window-spatial-point-process-likelihoods` requires `poisson-and-cox-point-process-models`
- `temporal-point-process-intensity-and-likelihood` requires `poisson-and-cox-point-process-models`
---

# Step 4 Alpha batch reviewer — read-only digest, `statistical-models-experiments-62`

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
