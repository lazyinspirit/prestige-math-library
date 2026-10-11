# Step 4 batch reviewer — batch **19**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **19**. Step-5 owning group: **m**.
Return `group: "m"` and `batches: ["19"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 19 | `murnaghan-stability-via-fi-modules` | A | kronecker-coefficients-and-internal-products, character-polynomials-fi-modules-and-representation-stability |
| 19 | `murnaghan-stability-via-fi-modules-examples` | B | murnaghan-stability-via-fi-modules |

## Your content, in full

### `murnaghan-stability-via-fi-modules` — Murnaghan Stability via FI-Modules

- `def-lambda-ring-specializations-and-the-sigma-series` · definition — Specializations of symmetric functions and the series $\sigma$
- `def-iterated-schur-coefficients` · definition — Threefold Schur coefficients $c^\delta_{a,b,c}$
- `def-first-row-padding-completion-and-the-stabilization-operator` · definition — The Jacobi–Trudi completion $s_\mu$, the operators $U_n$ and $V$, and $\operatorname{stab}(\alpha,\beta)$
- `lem-schur-specialization-coproduct-and-plethysm-identities` · lemma — Schur functions on sums and products of alphabets
- `lem-sigma-series-cauchy-adjoint-and-reproducing-kernel-identities` · lemma — The series $\sigma$: product formula, Cauchy identity, adjunction and reproducing kernel
- `lem-vertex-operator-series-for-padded-schur-functions` · lemma — Vertex-operator generating series for the padded Schur functions
- `lem-padding-completion-is-compatible-with-the-internal-product` · lemma — The Jacobi–Trudi completion is compatible with the internal product
- `thm-murnaghan-stability-for-kronecker-coefficients` · theorem — Murnaghan stability for Kronecker coefficients
- `def-reduced-kronecker-coefficient` · definition — The reduced (stable) Kronecker coefficient $\bar g^\gamma_{\alpha,\beta}$
- `thm-brion-formula-for-reduced-kronecker-coefficients` · theorem — Brion's formula for the reduced Kronecker coefficients
- `lem-bor-nonnegative-expansion-for-reduced-kronecker-coefficients` · lemma — The nonnegative expansion of a reduced Kronecker coefficient
- `thm-murnaghan-expansion-for-all-admissible-ranks` · theorem — The Murnaghan expansion at every admissible rank
- `lem-murnaghan-littlewood-top-degree-reduced-coefficients-are-lr-coefficients` · lemma — Murnaghan–Littlewood: top-degree reduced coefficients are Littlewood–Richardson coefficients
- `prop-reduced-kronecker-support-satisfies-size-triangle-inequalities` · proposition — The support of the reduced Kronecker coefficients satisfies the size triangle inequalities
- `thm-exact-global-stabilization-threshold-for-a-fixed-kronecker-product` · theorem — The exact global stabilization threshold for a fixed Kronecker product

### `murnaghan-stability-via-fi-modules-examples` — Murnaghan Stability via FI-Modules — Examples

- `ex-murnaghan-stability-for-alpha-beta-two` · example — Murnaghan stability for $\alpha=\beta=(2)$, ranks 4 to 9
- `cex-a-global-product-threshold-is-not-a-per-triple-sharpness-claim` · counterexample — A global product threshold is not a per-coefficient sharpness claim

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `murnaghan-stability-via-fi-modules` requires `kronecker-coefficients-and-internal-products`
- `murnaghan-stability-via-fi-modules` requires `character-polynomials-fi-modules-and-representation-stability`
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
