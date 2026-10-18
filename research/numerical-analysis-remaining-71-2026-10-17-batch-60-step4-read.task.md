# Step 4 batch reviewer — batch **60**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **60**. Step-5 owning group: **t**.
Return `group: "t"` and `batches: ["60"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 60 | `least-squares-fem-and-practical-dpg` | A | variational-crimes-and-strang-lemmas, discrete-de-rham-complexes-and-edge-elements |
| 60 | `least-squares-fem-and-practical-dpg-examples` | B | least-squares-fem-and-practical-dpg |

## Your content, in full

### `least-squares-fem-and-practical-dpg` — First-order least-squares FEM and practical DPG

- `lem-na-ultraweak-poisson-rotation-trace-2d` · lemma — Planar rotation carries H(div) normal traces to tangential traces
- `def-na-least-squares-poisson-first-order` · definition — First-order least-squares formulation of the Dirichlet Poisson problem
- `def-na-ultraweak-poisson-dpg-formulation` · definition — Ultraweak Poisson DPG spaces and plan-consistent bilinear form
- `lem-na-least-squares-poisson-residual-norm-equivalence` · lemma — Least-squares residual norm is equivalent to H(div) x H1_0 error
- `alg-na-practical-dpg-finite-riesz-solves` · algorithm — Exact local finite Riesz solves for practical DPG tests
- `lem-na-hdiv-normal-trace-surjectivity` · lemma — Weak H(div) normal trace surjects onto the scalar trace dual
- `lem-na-ultraweak-poisson-skeleton-quotients` · lemma — Ultraweak Poisson skeleton spaces are Hilbert trace quotients
- `rem-na-practical-dpg-roundoff-and-normal-equations` · remark — Exact DPG stability does not certify quadrature or algebraic solve errors
- `lem-na-ultraweak-poisson-bilinear-form-bounded` · lemma — The ultraweak Poisson DPG bilinear form is bounded
- `lem-na-ultraweak-poisson-trial-kernel` · lemma — The ultraweak Poisson trial operator has trivial kernel
- `lem-na-least-squares-poisson-space-conformity` · lemma — The RT0/P1 least-squares family is conforming
- `lem-na-practical-dpg-fortin-p1-r3` · lemma — A uniformly bounded Fortin map for the practical P1/R3 DPG family
- `alg-na-ultraweak-poisson-ideal-trial-to-test` · algorithm — Ideal Poisson DPG trial-to-test Riesz map
- `thm-na-least-squares-poisson-best-approximation` · theorem — The conforming RT0/P1 least-squares Poisson minimizer is unique and best approximating
- `lem-na-ultraweak-poisson-bounded-load-lifting` · lemma — A topology-free bounded lifting of every ultraweak Poisson load
- `thm-na-practical-dpg-fortin-quasioptimality` · theorem — Fortin stability and quasi-optimality for practical DPG
- `thm-na-ultraweak-poisson-adjoint-graph-infsup` · theorem — Adjoint graph inf-sup for ultraweak Poisson on connected Lipschitz polyhedra
- `thm-na-ideal-ultraweak-poisson-energy-best-approximation` · theorem — Ideal ultraweak Poisson DPG is the energy best approximation
- `thm-na-practical-dpg-residual-estimator-equivalence` · theorem — Practical DPG residual is reliable and efficient up to data oscillation
- `cor-na-practical-dpg-poisson-quasioptimality-estimator` · corollary — P1/R3 practical DPG quasi-optimality and residual estimator for Poisson

### `least-squares-fem-and-practical-dpg-examples` — First-order least-squares FEM and practical DPG — Examples

- `cex-na-least-squares-boundary-omission-nonunique` · counterexample — Dropping the H1-zero boundary condition makes least squares nonunique
- `ex-na-least-squares-poisson-residual-certificate` · example — An exact polynomial Poisson solution has a zero residual certificate
- `cex-na-practical-dpg-too-small-test-space` · counterexample — A test space smaller than the trial space cannot be stable
- `ex-na-ideal-and-practical-dpg-test-vectors` · example — An explicit finite model separates ideal and practical test vectors

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `least-squares-fem-and-practical-dpg` requires `discrete-de-rham-complexes-and-edge-elements`
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
