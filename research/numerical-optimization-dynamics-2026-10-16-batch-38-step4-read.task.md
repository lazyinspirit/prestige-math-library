# Step 4 batch reviewer — batch **38**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **38**. Step-5 owning group: **ah**.
Return `group: "ah"` and `batches: ["38"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 38 | `ceas-lemma-and-aubin-nitsche-error-estimates` | A | interior-and-boundary-sobolev-elliptic-regularity, lax-milgram-and-weak-elliptic-solutions, finite-element-meshes-and-interpolation |
| 38 | `ceas-lemma-and-aubin-nitsche-error-estimates-examples` | B | ceas-lemma-and-aubin-nitsche-error-estimates |

## Your content, in full

### `ceas-lemma-and-aubin-nitsche-error-estimates` — Céa and Aubin–Nitsche error estimates

- `lem-galerkin-orthogonality-for-conforming-galerkin-approximations` · lemma — Galerkin orthogonality for conforming approximations
- `thm-adjoint-problem-for-bounded-coercive-variational-forms` · theorem — Well-posedness of the adjoint variational problem
- `cor-poisson-adjoint-h2-estimate-from-global-regularity` · corollary — A global H² bound for the Poisson adjoint on a C² domain
- `lem-two-cell-hat-and-quadratic-functions-lie-in-h10` · lemma — The two-cell hat and quadratic functions belong to H¹₀
- `thm-cea-quasi-optimality-for-conforming-galerkin-approximations` · theorem — Céa quasi-optimality for coercive conforming Galerkin problems
- `cor-symmetric-galerkin-best-approximation-in-energy-norm` · corollary — Hermitian Galerkin solutions are best in the energy norm
- `thm-aubin-nitsche-l2-error-estimate-under-adjoint-regularity` · theorem — Aubin–Nitsche L² error estimate from adjoint approximation
- `cor-shape-regular-affine-fe-primal-energy-approximation` · corollary — Primal H¹ approximation on shape-regular affine finite-element meshes
- `cor-aubin-nitsche-h-r-plus-s-rate-under-primal-and-dual-approximation` · corollary — The h^(r+s) L² rate under primal and dual approximation

### `ceas-lemma-and-aubin-nitsche-error-estimates-examples` — Céa and Aubin–Nitsche error estimates — Examples

- `ex-nonsymmetric-coercive-form-attains-cea-factor` · example — A nonsymmetric coercive form attains the M over alpha factor
- `ex-symmetric-poisson-best-approximation-on-two-cell-mesh` · example — A two-cell linear finite element best approximation for Poisson
- `cex-reentrant-corner-poisson-solution-not-h2` · counterexample — A reentrant corner prevents automatic H² dual regularity

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `ceas-lemma-and-aubin-nitsche-error-estimates` requires `finite-element-meshes-and-interpolation`
- `discrete-continuous-and-pde-adjoint-sensitivities` requires `ceas-lemma-and-aubin-nitsche-error-estimates`
- `polynomial-chaos-stochastic-collocation-and-galerkin-uq` requires `ceas-lemma-and-aubin-nitsche-error-estimates`
- `finite-element-pde-constrained-optimization` requires `ceas-lemma-and-aubin-nitsche-error-estimates`
- `parabolic-finite-element-methods` requires `ceas-lemma-and-aubin-nitsche-error-estimates`
- `finite-element-eigenvalue-approximation` requires `ceas-lemma-and-aubin-nitsche-error-estimates`
- `variational-crimes-and-strang-lemmas` requires `ceas-lemma-and-aubin-nitsche-error-estimates`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-optimization-dynamics-2026-10-16`

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
