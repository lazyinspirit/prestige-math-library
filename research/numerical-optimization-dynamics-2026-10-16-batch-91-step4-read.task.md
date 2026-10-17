# Step 4 batch reviewer — batch **91**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **91**. Step-5 owning group: **ac**.
Return `group: "ac"` and `batches: ["91"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 91 | `minimum-energy-paths-string-neb-and-saddle-certificates` | A | nonlinear-equations-and-newton-methods, numerical-optimization-globalization-and-inexact-certificates, trust-region-and-cubic-regularization-methods, riemannian-optimization-on-stiefel-and-grassmann-manifolds, principal-components-and-eigenspace-stability |
| 91 | `minimum-energy-paths-string-neb-and-saddle-certificates-examples` | B | minimum-energy-paths-string-neb-and-saddle-certificates |

## Your content, in full

### `minimum-energy-paths-string-neb-and-saddle-certificates` — Minimum energy paths string neb and saddle certificates

- `def-regular-minimum-energy-path-in-a-collision-free-tube` · definition — Regular minimum-energy paths on a declared collision-free tube
- `lem-dimer-central-force-hessian-vector-error` · lemma — Paired force evaluations give a second-order Hessian-vector estimate
- `lem-local-root-from-uniformly-small-residual` · lemma — A small residual gives a nearby root under a uniform inverse and Lipschitz bound
- `lem-local-root-in-max-norm` · lemma — A small residual gives a nearby root under a uniform inverse and Lipschitz bound in the maximum norm
- `alg-finite-budget-dimer-mode-following` · algorithm — Finite-budget dimer rotation and saddle translation
- `alg-finite-image-string-method` · algorithm — Finite-image projected-gradient string with arc-length redistribution
- `alg-improved-tangent-climbing-neb` · algorithm — Finite-budget improved-tangent NEB with a climbing image
- `def-validated-eigenvalue-enclosures-for-an-index-one-hessian` · definition — Validated ordered eigenvalue enclosures for an index-one Hessian
- `lem-centered-chord-and-unequal-step-tangent-error` · lemma — Second-order centered and unequal-step tangent estimates
- `lem-arc-length-polyline-interpolation-error` · lemma — Polyline interpolation and equal-length redistribution approximate a smooth arc-length path
- `thm-local-index-one-saddle-certificate-from-enclosures` · theorem — Validated Hessian enclosures and a small gradient residual certify a nearby index-one saddle
- `alg-index-one-eigenvector-following-step` · algorithm — Finite-budget index-one eigenvector-following Newton step
- `prop-central-string-projected-force-consistency` · proposition — Centered-tangent string residuals are second-order consistent on a regular MEP
- `thm-dimer-mode-perturbation-and-local-saddle-error` · theorem — A separated dimer mode gives a local inexact saddle error bound
- `prop-improved-neb-monotone-tangent-has-first-order-projection-error` · proposition — The improved NEB monotone branch is generally only first-order consistent
- `prop-index-one-eigenvector-step-is-the-local-newton-correction` · proposition — An exact index-one eigenvector-following step is the Newton correction at a saddle
- `thm-dimer-mode-error-contracts-local-saddle-translation` · theorem — A gap-controlled dimer mode gives a local saddle-translation error recurrence
- `thm-gauge-fixed-stable-discrete-path-comparison` · theorem — A gauge-fixed stable discrete path lies within second order of a smooth MEP

### `minimum-energy-paths-string-neb-and-saddle-certificates-examples` — Minimum energy paths string neb and saddle certificates — Examples

- `ex-dimer-hessian-vector-bias-noise-tradeoff` · example — Dimer finite-difference bias competes with force-evaluation error
- `ex-corner-and-cusp-break-the-string-tangent-hypotheses` · example — A corner has no unique tangent and a cusp gives a zero centered chord
- `ex-curved-double-well-has-a-circular-minimum-energy-path` · example — A curved double well has an exact circular minimum-energy path
- `ex-straight-chord-is-not-the-curved-double-well-path` · example — The straight chord misses the curved double-well minimum-energy path
- `ex-index-two-maximum-fails-the-index-one-certificate` · example — A local maximum has the wrong Morse index for the saddle certificate
- `ex-near-degenerate-saddle-modes-rotate-under-small-perturbations` · example — A small spectral gap makes the dimer mode sensitive to perturbations
- `ex-zero-discrete-neb-residual-does-not-fix-a-continuum-path` · example — Zero discrete force does not select a unique continuum path

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `minimum-energy-paths-string-neb-and-saddle-certificates` requires `nonlinear-equations-and-newton-methods`
- `minimum-energy-paths-string-neb-and-saddle-certificates` requires `numerical-optimization-globalization-and-inexact-certificates`
- `minimum-energy-paths-string-neb-and-saddle-certificates` requires `trust-region-and-cubic-regularization-methods`
- `minimum-energy-paths-string-neb-and-saddle-certificates` requires `riemannian-optimization-on-stiefel-and-grassmann-manifolds`
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
