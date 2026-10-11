# Step 4 batch reviewer — batch **38**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **38**. Step-5 owning group: **b**.
Return `group: "b"` and `batches: ["38"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 38 | `geometric-fixed-parts-and-gauss-manin-semisimplicity` | A | analytic-constructible-sheaf-foundations, analytic-derived-six-operations-and-duality, chain-conditions-and-semisimple-modules, compact-kahler-hodge-foundations, compact-operators-and-riesz-schauder-theory, compactness, countability-and-uncountability, delta-functors-and-universality, derived-functors, dimension-constructible-images-and-dimensions-of-fibres, flat-smooth-and-etale-morphisms, lefschetz-splitting-in-bounded-triangulated-categories, local-coefficients-twisted-homology-and-duality, logarithmic-hodge-complexes-and-smooth-open-weights, long-exact-sequences-in-homology, mixed-hodge-structures-and-strictness, modular-representations-and-projective-covers, modules-over-a-pid-and-canonical-forms, partitions-of-unity-and-paracompactness, presheaves-sheaves-stalks-and-sheafification, principal-series-representations-of-gl-n-over-a-finite-field, projective-hodge-polarization-foundations, reeb-stability-and-global-foliation-constructions, regular-local-rings-and-homological-dimension, relations-functions-and-quotients, relative-homology-excision-and-mayer-vietoris, rn-as-a-normed-space, sard-theorem-and-transversality, schemes-subschemes-and-morphisms-locally-of-finite-type, sheaf-cohomology-cech-cohomology-and-comparison, sheaf-operations-exactness-ringed-spaces-and-module-pullback, singular-chains-and-singular-homology, singular-cohomology-and-coefficient-theorems, triangularisation-and-jordan-canonical-form, universal-coefficients-and-kunneth-theorems, whitney-embedding-tubular-neighbourhoods-and-approximation, zariski-tangent-spaces-regular-points-smoothness-and-bertini, zariski-topology-on-prime-spectra |
| 38 | `geometric-fixed-parts-and-gauss-manin-semisimplicity-examples` | B | geometric-fixed-parts-and-gauss-manin-semisimplicity, the-complex-exponential-and-eulers-formula, the-fundamental-group-of-the-circle |

## Your content, in full

### `geometric-fixed-parts-and-gauss-manin-semisimplicity` — Geometric Fixed Parts And Gauss Manin Semisimplicity

- `def-geometric-polarizable-hodge-variation` · definition — Geometric polarizable Hodge variations on algebraic bases
- `lem-algebraic-open-inclusion-surjects-on-fundamental-groups` · lemma — Algebraic open inclusions surject on fundamental groups
- `lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations` · lemma — Geometric Gauss-Manin Hodge variations and integral lattices
- `lem-regular-trace-kernel-descends-the-complex-socle` · lemma — Rational descent of a complex monodromy socle
- `lem-characteristic-zero-scalar-extension-preserves-geometric-local-system-semisimplicity` · lemma — Characteristic-zero scalar extension of geometric semisimplicity
- `thm-fixed-part-for-geometric-polarizable-variations-on-smooth-algebraic-bases` · theorem — The fixed part of a geometric Hodge variation
- `thm-smooth-projective-gauss-manin-local-systems-are-semisimple` · theorem — Semisimplicity of geometric Gauss-Manin local systems

### `geometric-fixed-parts-and-gauss-manin-semisimplicity-examples` — Geometric Fixed Parts And Gauss Manin Semisimplicity Examples

- `ex-cyclic-etale-covers-give-geometric-semisimple-weight-zero-monodromy` · example — A cyclic geometric weight-zero monodromy system

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `geometric-fixed-parts-and-gauss-manin-semisimplicity` requires `analytic-constructible-sheaf-foundations`
- `geometric-fixed-parts-and-gauss-manin-semisimplicity` requires `analytic-derived-six-operations-and-duality`
- `geometric-fixed-parts-and-gauss-manin-semisimplicity` requires `compact-kahler-hodge-foundations`
- `geometric-fixed-parts-and-gauss-manin-semisimplicity` requires `countability-and-uncountability`
- `geometric-fixed-parts-and-gauss-manin-semisimplicity` requires `lefschetz-splitting-in-bounded-triangulated-categories`
- `geometric-fixed-parts-and-gauss-manin-semisimplicity` requires `logarithmic-hodge-complexes-and-smooth-open-weights`
- `geometric-fixed-parts-and-gauss-manin-semisimplicity` requires `mixed-hodge-structures-and-strictness`
- `geometric-fixed-parts-and-gauss-manin-semisimplicity` requires `projective-hodge-polarization-foundations`
- `projective-perverse-hard-lefschetz-and-decomposition` requires `geometric-fixed-parts-and-gauss-manin-semisimplicity`
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
