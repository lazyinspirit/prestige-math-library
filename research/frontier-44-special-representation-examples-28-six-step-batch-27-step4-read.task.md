# Step 4 batch reviewer — batch **27**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **27**. Step-5 owning group: **d**.
Return `group: "d"` and `batches: ["27"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 27 | `compact-laplace-type-operators-and-hodge-representatives` | A | countability-and-uncountability, hilbert-space-geometry-and-riesz-representation, interior-and-boundary-sobolev-elliptic-regularity, lax-milgram-and-weak-elliptic-solutions, orthonormal-bases-parseval-and-fourier-series, product-measures-and-the-fubini-tonelli-theorems, relations-functions-and-quotients, rellich-kondrachov-and-sobolev-compactness, smooth-approximation-and-sobolev-extension, smooth-partitions-of-unity-and-exhaustions, sobolev-poincare-and-morrey-inequalities, the-dbar-complex-and-integral-solutions, the-de-rham-complex-homotopy-and-mayer-vietoris, the-exterior-derivative-and-cartan-calculus, the-logarithm-and-general-powers, the-lp-spaces-holder-minkowski-and-riesz-fischer, the-total-derivative, riemannian-metrics-length-distance-and-volume, chern-weil-theory-and-characteristic-forms, riemann-surfaces-branched-maps-and-differentials |
| 27 | `compact-laplace-type-operators-and-hodge-representatives-examples` | B | compact-laplace-type-operators-and-hodge-representatives, relations-functions-and-quotients, riemannian-comparison-theorems |

## Your content, in full

### `compact-laplace-type-operators-and-hodge-representatives` — Compact Laplace Type Operators And Hodge Representatives

- `def-second-order-laplace-type-operators-on-vector-bundles` · definition — Second-order Laplace-type operators on metric vector bundles
- `lem-formal-adjoints-of-differential-operators-exist-and-are-unique` · lemma — Formal adjoints of differential operators on metric vector bundles
- `def-complex-manifolds-and-holomorphic-vector-bundles` · definition — Complex manifolds, holomorphic vector bundles and Hermitian metrics
- `def-e-valued-dolbeault-operators-and-ltwo-structure` · definition — E-valued Dolbeault operators and their L2 structure
- `thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity` · theorem — Compact Laplace-type bundle operators: regularity and shifted parametrices
- `thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition` · theorem — Compact Laplace-type operators: smooth kernel, closed range and Green inverse
- `thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology` · theorem — Harmonic representatives for compact de Rham and Dolbeault complexes

### `compact-laplace-type-operators-and-hodge-representatives-examples` — Compact Laplace Type Operators And Hodge Representatives Examples

- `ex-compact-flat-torus-hodge-kernel-from-energy-and-coordinates` · example — Flat torus harmonic forms are constant-coefficient forms

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `compact-laplace-type-operators-and-hodge-representatives` requires `countability-and-uncountability`
- `compact-kahler-hodge-foundations` requires `compact-laplace-type-operators-and-hodge-representatives`
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
