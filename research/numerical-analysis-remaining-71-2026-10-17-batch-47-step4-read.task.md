# Step 4 batch reviewer — batch **47**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **47**. Step-5 owning group: **p**.
Return `group: "p"` and `batches: ["47"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 47 | `meshfree-kernel-approximation-and-conservative-sph` | A | interacting-particle-mean-field-and-vortex-blob-error |
| 47 | `meshfree-kernel-approximation-and-conservative-sph-examples` | B | meshfree-kernel-approximation-and-conservative-sph |

## Your content, in full

### `meshfree-kernel-approximation-and-conservative-sph` — Meshfree kernel approximation and conservative sph

- `def-meshfree-cell-quadrature-and-fill-radius` · definition — Meshfree cell quadrature and fill radius
- `def-scaled-symmetric-compact-kernel-family` · definition — Scaled symmetric compactly supported kernel family
- `def-regularized-conservative-sph-system` · definition — Fixed-width regularized conservative SPH particle system
- `lem-cellwise-particle-quadrature-oscillation-bound` · lemma — Cellwise oscillation bound for particle quadrature
- `lem-symmetric-kernel-moment-cancellation` · lemma — Symmetry cancels the first kernel moment
- `lem-compact-kernel-derivative-moment-identities` · lemma — Derivative moments of a compact radial kernel
- `lem-scaled-kernel-moments-and-derivative-bounds` · lemma — Scaling identities for kernel moments and derivatives
- `lem-sph-pair-forces-antisymmetric-and-central` · lemma — SPH pressure forces are equal-opposite and central
- `thm-second-order-meshfree-convolution-bias` · theorem — Second-order convolution bias for an interior C² field
- `lem-regularized-sph-vector-field-lipschitz-on-positive-density-tube` · lemma — Explicit local Lipschitz bound for the regularized SPH vector field
- `prop-sph-conserves-linear-and-angular-momentum` · proposition — Linear and angular momentum are conserved by semidiscrete SPH
- `prop-sph-matched-internal-energy-conserves-total-energy` · proposition — The matched internal-energy equation conserves total semidiscrete energy
- `thm-first-derivative-meshfree-convolution-bias` · theorem — Second-order bias for the kernel particle gradient
- `thm-meshfree-particle-kernel-quadrature-error` · theorem — Explicit cellwise error for kernel value and gradient quadrature
- `cor-meshfree-joint-refinement-consistency` · corollary — Joint fill-distance and kernel-width refinement for value and derivative consistency
- `thm-regularized-sph-local-wellposedness` · theorem — Local well-posedness of the regularized finite-particle SPH system
- `thm-forward-euler-global-error-on-controlled-sph-tube` · theorem — Forward Euler has first-order global error and preserves a margin tube for the regularized SPH ODE

### `meshfree-kernel-approximation-and-conservative-sph-examples` — Meshfree kernel approximation and conservative sph — Examples

- `cex-truncated-kernel-loses-boundary-constant-reproduction` · counterexample — A normalized kernel loses constant reproduction when truncated at a boundary
- `ex-interior-constant-and-affine-kernel-reproduction` · example — Interior constant and affine reproduction by a symmetric kernel
- `ex-two-particle-sph-force-pair` · example — Two SPH particles receive equal and opposite pressure forces
- `cex-fixed-neighbor-irregular-derivative-not-consistent` · counterexample — A disordered fixed-neighbor stencil can fail derivative consistency
- `cex-conservative-sph-can-clump-under-positive-pressure` · counterexample — A conservative positive-pressure SPH system can close a particle gap

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
No dependency edge crosses this batch boundary.
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
