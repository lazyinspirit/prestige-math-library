# Step 4 batch reviewer — batch **19**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **19**. Step-5 owning group: **g**.
Return `group: "g"` and `batches: ["19"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 19 | `fast-multipole-expansions-and-error` | A | hierarchical-low-rank-matrices-and-error-propagation, computed-fast-transforms-and-convolution |
| 19 | `fast-multipole-expansions-and-error-examples` | B | fast-multipole-expansions-and-error |

## Your content, in full

### `fast-multipole-expansions-and-error` — Fast multipole expansions and error

- `def-finite-planar-quadtree-fmm-pair-lists` · definition — Finite planar quadtree and separated interaction lists
- `def-three-dimensional-spherical-harmonic-space` · definition — Degree-indexed spherical harmonic spaces in three dimensions
- `alg-planar-laplace-fmm-fixed-order` · algorithm — Fixed-order planar Laplace fast multipole procedure
- `lem-planar-fmm-pair-lists-partition-off-diagonal-pairs` · lemma — Planar FMM lists partition all ordered off-diagonal particle pairs
- `lem-three-dimensional-laplace-spherical-harmonic-addition-theorem` · lemma — Three-dimensional Laplace spherical-harmonic addition theorem
- `lem-planar-fmm-multipole-local-translation-identities` · lemma — Planar Laplace multipole and local translation identities
- `thm-planar-fmm-operation-count-under-linear-list-assumptions` · theorem — Planar FMM operation count under explicit linear-size tree and list bounds
- `alg-three-dimensional-laplace-cluster-expansion` · algorithm — Single-cluster three-dimensional Laplace multipole evaluator
- `thm-planar-fmm-global-potential-force-error` · theorem — Global planar FMM potential and derivative error
- `thm-three-dimensional-laplace-expansion-error-and-work` · theorem — Three-dimensional Laplace cluster expansion error and work

### `fast-multipole-expansions-and-error-examples` — Fast multipole expansions and error — Examples

- `ex-fmm-clustered-points-require-depth-sensitive-work` · example — A clustered point set makes tree depth enter the work
- `ex-fmm-two-separated-charge-clusters` · example — Two separated planar charge clusters
- `ex-fmm-near-far-potential-and-force-error` · example — Near/far split with exact near evaluation and truncated far error

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `fast-multipole-expansions-and-error` requires `hierarchical-low-rank-matrices-and-error-propagation`
- `boundary-integral-equations-and-galerkin-bem` requires `fast-multipole-expansions-and-error`
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
