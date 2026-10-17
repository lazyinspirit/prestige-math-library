# Step 4 batch reviewer — batch **42**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **42**. Step-5 owning group: **e**.
Return `group: "e"` and `batches: ["42"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 42 | `local-bifurcation-normal-forms-and-numerical-certificates` | A | the-inverse-function-theorem-completed, pseudo-arclength-continuation-and-fold-certificates, codimension-one-foliations-and-secondary-classes |
| 42 | `local-bifurcation-normal-forms-and-numerical-certificates-examples` | B | local-bifurcation-normal-forms-and-numerical-certificates |

## Your content, in full

### `local-bifurcation-normal-forms-and-numerical-certificates` — Local bifurcation normal forms and numerical certificates

- `def-hopf-normal-form-data` · definition — Hopf spectral and multilinear normal-form data
- `def-hopf-weighted-trajectory-space` · definition — Weighted trajectory space for a local center-manifold construction
- `lem-characteristic-roots-stay-in-separated-neighborhoods` · lemma — Characteristic roots preserve separated cluster counts under matrix perturbation
- `lem-hopf-smooth-eigenpair-branch` · lemma — A simple eigenpair has a regularity-matched gauge-fixed parameter branch
- `def-local-periodic-orbit-poincare-and-floquet-data` · definition — Local periodic-orbit, Poincare-return, and Floquet data
- `thm-hyperbolic-local-map-stability` · theorem — A hyperbolic fixed point of a local map is stable exactly when all multipliers contract
- `lem-hopf-weighted-trajectory-space-is-banach` · lemma — The weighted trajectory space is complete
- `alg-validate-local-hopf-certificate` · algorithm — Validate a proof-carrying local Hopf certificate
- `thm-poincare-map-stability-implies-orbital-stability` · theorem — Hyperbolic return-map stability is orbital stability
- `lem-local-center-manifold-for-a-simple-hopf-point` · lemma — A parameterized C5 center manifold exists at a simple Hopf spectral split
- `lem-hopf-first-lyapunov-coefficient-from-multilinear-data` · lemma — The first Lyapunov coefficient is the resonant cubic Hopf coefficient
- `thm-scalar-fold-transcritical-pitchfork-local-normal-forms` · theorem — Scalar fold, transcritical, and symmetric pitchfork equilibrium branches
- `thm-hopf-local-branch-and-stability` · theorem — A simple nondegenerate Hopf point creates a local periodic branch
- `thm-local-hopf-certificate-is-sound` · theorem — A certified interval Hopf record verifies only the local Hopf hypotheses

### `local-bifurcation-normal-forms-and-numerical-certificates-examples` — Local bifurcation normal forms and numerical certificates — Examples

- `ex-degenerate-hopf-with-zero-lyapunov-coefficient` · example — An imaginary eigenvalue crossing with zero Lyapunov coefficient
- `ex-hopf-interval-enclosure-containing-zero` · example — An interval containing zero makes a Hopf certificate inconclusive
- `ex-pitchfork-symmetry-breaking-unfolding` · example — A constant imperfection removes the pitchfork's trivial branch
- `ex-supercritical-hopf-cubic-normal-form` · example — A supercritical planar cubic Hopf bifurcation
- `ex-subcritical-hopf-cubic-normal-form` · example — A subcritical planar cubic Hopf bifurcation

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `local-bifurcation-normal-forms-and-numerical-certificates` requires `pseudo-arclength-continuation-and-fold-certificates`
- `periodic-orbit-shooting-collocation-and-floquet-error` requires `local-bifurcation-normal-forms-and-numerical-certificates`
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
