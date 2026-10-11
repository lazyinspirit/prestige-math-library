# Step 4 batch reviewer — batch **28**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **28**. Step-5 owning group: **e**.
Return `group: "e"` and `batches: ["28"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 28 | `compact-support-sheaf-calculus` | A | cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes, compactness, hausdorff-via-the-diagonal, presheaves-sheaves-stalks-and-sheafification, relations-functions-and-quotients, sheaf-cohomology-cech-cohomology-and-comparison, sheaf-operations-exactness-ringed-spaces-and-module-pullback, uniform-spaces, simplicial-complexes-and-simplicial-homology, simplicial-subdivision-and-simplicial-approximation |
| 28 | `compact-support-sheaf-calculus-examples` | B | compact-support-sheaf-calculus |

## Your content, in full

### `compact-support-sheaf-calculus` — Compact Support Sheaf Calculus

- `def-support-of-a-sheaf-section` · definition — Support of a section of a sheaf
- `lem-compatible-refinement-for-tuple-indexed-coverings` · lemma — A refinement compatible with tuple-indexed coverings
- `lem-sections-near-a-compact-set-are-sections-on-that-set` · lemma — Sections on a compact set extend to a neighbourhood
- `def-c-soft-sheaf` · definition — c-soft sheaves
- `def-compactly-supported-global-sections` · definition — Compactly supported global sections and their right derived functors
- `lem-refinement-limit-cech-cohomology-agrees-with-sheaf-cohomology` · lemma — Refinement-limit Cech cohomology computes sheaf cohomology on compact Hausdorff spaces
- `lem-c-soft-field-sheaves-are-compact-support-acyclic` · lemma — Compact-support acyclicity of c-soft sheaves
- `lem-compact-support-calculus-of-extension-by-zero-and-closed-pushforward` · lemma — Compact-support calculus along open and closed embeddings
- `lem-finite-polyhedral-covering-dimension-bounds-all-sheaf-cohomology` · lemma — A polyhedral dimension bound for every sheaf
- `lem-vanishing-compactly-supported-h1-on-opens-implies-c-soft` · lemma — Vanishing compactly supported first cohomology on opens characterises c-softness
- `lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions` · lemma — Bounded fibrewise-soft resolutions from a uniform all-sheaf dimension bound

### `compact-support-sheaf-calculus-examples` — Compact Support Sheaf Calculus Examples

- `ex-compact-support-and-softness-on-a-finite-discrete-space` · example — Compact support and softness on a finite discrete space

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `constructible-incidence-and-cochain-models` requires `compact-support-sheaf-calculus`
- `analytic-derived-six-operations-and-duality` requires `compact-support-sheaf-calculus`
---

# Step 4 Alpha batch reviewer — read-only digest, `frontier-44-special-representation-examples-28-six-step`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
