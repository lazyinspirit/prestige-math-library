# Step 4 batch reviewer — batch **33**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **33**. Step-5 owning group: **k**.
Return `group: "k"` and `batches: ["33"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 33 | `convolution-and-group-equivariance` | A | group-actions-and-cayleys-theorem |
| 33 | `convolution-and-group-equivariance-examples` | B | convolution-and-group-equivariance |

## Your content, in full

### `convolution-and-group-equivariance` — Convolution and finite-group equivariance

- `def-discrete-convolutional-layer` · definition — Discrete convolutional layer with local receptive fields, channel mixing, stride, and padding
- `def-group-action-on-feature-maps` · definition — The left action on feature maps induced by an action on sites
- `def-p4-p4m-lattice-symmetry-groups` · definition — The p4 and p4m square-lattice symmetry groups
- `def-equivariant-neural-layer` · definition — Equivariant neural layers between group-action feature spaces
- `def-group-convolution` · definition — First-layer and group-to-group cross-correlation
- `def-pointwise-nonlinearity-and-pooling-on-group-features` · definition — Pointwise nonlinearities, neighborhood pooling, subgroup sampling, and coset pooling
- `thm-group-convolution-equivariance` · theorem — Group cross-correlation and compatible layers are equivariant

### `convolution-and-group-equivariance-examples` — Convolution and finite-group equivariance — Examples

- `ex-translation-equivariance-and-zero-padding` · example — Full-lattice translation equivariance and a zero-padding boundary failure
- `ex-p4-and-p4m-orientation-indexed-features` · example — p4 and p4m orientation-indexed feature maps
- `ex-nonstrided-subgroup-and-coset-pooling` · example — Non-strided, subgroup, and coset pooling on p4 features

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
No dependency edge crosses this batch boundary.
---

# Step 4 Alpha batch reviewer — read-only digest, `machine-learning-all-101-2026-10-19`

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
