# Step 4 batch reviewer — batch **97**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **97**. Step-5 owning group: **ad**.
Return `group: "ad"` and `batches: ["97"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 97 | `self-consistent-projector-iterations-and-certified-mixing` | A | banach-algebras-spectrum-and-holomorphic-functional-calculus, completeness-and-uniform-continuity, the-spectral-theorem-and-singular-value-decomposition, nonlinear-equations-and-newton-methods, finite-basis-projector-energies-and-variational-electronic-structure |
| 97 | `self-consistent-projector-iterations-and-certified-mixing-examples` | B | self-consistent-projector-iterations-and-certified-mixing |

## Your content, in full

### `self-consistent-projector-iterations-and-certified-mixing` — Self consistent projector iterations and certified mixing

- `lem-capped-diis-coefficient-minimizer-exists` · lemma — Capped DIIS coefficients have a unique minimum-norm least-squares selection
- `def-self-consistent-projector-response-map` · definition — The occupied-projector response map on its strict-gap domain
- `def-admissible-hermitian-density-domain` · definition — The fixed-particle admissible Hermitian density domain
- `lem-spectral-gap-persistence-and-uniform-resolvent-bound` · lemma — A spectral gap persists on a computable matrix ball with a uniform resolvent bound
- `lem-gapped-projector-map-well-defined` · lemma — A strict occupied gap defines a unique rank-r spectral projector
- `lem-projector-is-admissible-density` · lemma — Every rank-r orthogonal projector is an admissible density
- `lem-admissible-density-domain-is-closed-convex-complete` · lemma — The admissible Hermitian density domain is closed, convex, and complete
- `thm-block-projector-frechet-derivative-and-bound` · theorem — A separated block spectral projector is Frechet differentiable with a resolvent bound
- `thm-contractive-scf-convergence-and-inexact-error-bound` · theorem — A contractive self-consistent map converges and admits residual and inexact-solve bounds
- `thm-level-shift-fixed-projector-equivalence` · theorem — A level shift preserves a fixed occupied projector exactly under block ordering
- `alg-undamped-scf-with-gap-and-residual-status` · algorithm — Finite-budget undamped self-consistent projector iteration
- `alg-capped-diis-projector-proposal` · algorithm — Finite-memory capped DIIS projector proposal with fallback
- `lem-density-mixing-preserves-domain-but-not-projectors` · lemma — Density mixing preserves admissibility but need not preserve idempotence
- `thm-gapped-response-projector-lipschitz-certificate` · theorem — A common separating resolvent contour certifies a Lipschitz response map
- `cor-finite-basis-energy-model-has-c1-response` · corollary — The finite-basis projector energy model supplies a C1 Hermitian response map
- `thm-density-mixing-contracts-under-jacobian-certificate` · theorem — A uniform derivative bound certifies contraction of relaxed density mixing
- `alg-certified-scf-with-diis-safeguard` · algorithm — Finite-budget certified SCF with safeguarded DIIS and a contractive fallback
- `thm-certified-diis-error-inheritance` · theorem — Residual-certified DIIS candidates inherit the contractive SCF error budget
- `alg-relaxed-density-mixing-with-finite-budget` · algorithm — Finite-budget relaxed density-matrix mixing
- `lem-finite-budget-scf-iteration-work` · lemma — Finite-budget SCF response iterations return a status in bounded outer work

### `self-consistent-projector-iterations-and-certified-mixing-examples` — Self consistent projector iterations and certified mixing — Examples

- `ex-occupied-projector-discontinuity-at-zero-gap` · example — The occupied spectral projector has no continuous extension through a zero gap
- `ex-self-consistent-projector-two-cycle-with-gap` · example — A finite-basis occupied projector map can two-cycle despite a uniform gap
- `ex-affine-contractive-response-and-residual-error` · example — An affine response map realizes the contraction and residual estimates
- `ex-density-mixture-leaves-projector-manifold` · example — A convex density mixture can be admissible without being a projector
- `ex-diis-singular-gram-fallback` · example — A reported singular DIIS Gram system triggers the baseline fallback
- `ex-additive-eigensolve-tolerance-residual-certificate` · example — An additive response-evaluation tolerance enters the fixed-point residual certificate

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `self-consistent-projector-iterations-and-certified-mixing` requires `nonlinear-equations-and-newton-methods`
- `self-consistent-projector-iterations-and-certified-mixing` requires `finite-basis-projector-energies-and-variational-electronic-structure`
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
