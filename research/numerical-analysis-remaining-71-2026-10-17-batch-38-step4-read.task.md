# Step 4 batch reviewer — batch **38**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **38**. Step-5 owning group: **m**.
Return `group: "m"` and `batches: ["38"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 38 | `discrete-de-rham-complexes-and-edge-elements` | A | mixed-hdiv-fluxes-and-darcy-discretization, simply-connected-plane-domains, the-de-rham-theorem-and-degree, geodesics-the-exponential-map-completeness-and-hopf-rinow |
| 38 | `discrete-de-rham-complexes-and-edge-elements-examples` | B | discrete-de-rham-complexes-and-edge-elements |

## Your content, in full

### `discrete-de-rham-complexes-and-edge-elements` — Discrete de Rham complexes and edge-element foundations

- `def-na-hcurl-space` · definition — The real H(curl) graph space on a polyhedron
- `lem-na-contractible-lipschitz-polyhedron-boundary-connected` · lemma — The boundary of a bounded contractible Lipschitz polyhedron is connected
- `lem-na-lipschitz-scalar-h1-h2-extension` · lemma — Scalar H1 and H2 extension across a bounded Lipschitz boundary
- `lem-na-graded-whitney-mesh-size-and-boundary-shifts` · lemma — Graded Whitney mesh size and inward and outward boundary shifts
- `def-na-lowest-order-whitney-de-rham-spaces` · definition — Lowest-order Whitney and Nedelec de Rham spaces
- `def-na-zero-tangential-hcurl` · definition — Zero tangential trace H(curl) space
- `lem-na-compact-support-hcurl-fourier-splitting` · lemma — A whole-space Fourier splitting for compactly supported H(curl) fields
- `lem-na-weak-local-potentials-and-continuation` · lemma — Local weak scalar potentials and continuation on a simply connected open set
- `lem-na-hcurl-curlfree-potential-contractible` · lemma — Weak curl-free fields on a contractible polyhedron are gradients
- `cex-na-canonical-edge-moments-not-bounded-on-hcurl` · counterexample — Canonical edge moments are not bounded on H(curl)
- `def-na-curl-curl-kernel-quotient-gauge` · definition — Kernel quotient and gauge for discrete curl-curl
- `lem-na-nedelec-edge-unisolvence` · lemma — Lowest-order Nedelec edge circulation unisolvence
- `lem-na-weak-hcurl-tangential-trace` · lemma — Weak tangential trace on a Lipschitz polyhedron
- `lem-na-lipschitz-support-and-zero-boundary-closure` · lemma — Whole-space support and the zero-boundary Sobolev closure
- `lem-na-whitney-moments-commute-with-grad-curl-div` · lemma — Whitney edge, face, and cell moments commute with grad, curl, and div
- `thm-na-stable-mixed-curl-curl-kernel-quotient` · theorem — Stable mixed curl-curl formulation with kernel gauge
- `lem-na-full-dirichlet-hcurl-regular-decomposition` · lemma — A bounded regular decomposition with both summands satisfying full Dirichlet conditions
- `thm-na-regular-decomposition-zero-tangential-hcurl` · theorem — Regular decomposition of zero-tangential H(curl) fields
- `thm-na-lowest-order-discrete-de-rham-cohomology-and-harmonic-modes` · theorem — Discrete de Rham cohomology and contractible-mesh exactness
- `lem-na-relative-curl-kernel-is-zero-boundary-gradients` · lemma — The relative curl kernel on a contractible Lipschitz polyhedron
- `lem-na-whitney-averaged-pullback-moment-bounds` · lemma — Averaged pullback Whitney moments and uniform near identity
- `lem-na-whitney-cochain-correction-and-strong-convergence` · lemma — Finite element correction and strong convergence of Whitney cochain projections
- `thm-na-uniformly-bounded-commuting-cochain-projection` · theorem — Uniformly bounded commuting projection for lowest-order Nedelec spaces
- `lem-na-discrete-gradient-lift-gap-estimate` · lemma — Discrete gradient gap from a relative commuting projection
- `thm-na-discrete-compactness-and-poincare-lowest-order-nedelec` · theorem — Discrete compactness and uniform Poincare inequality for Nedelec fields

### `discrete-de-rham-complexes-and-edge-elements-examples` — Discrete de Rham complexes and edge-element foundations — Examples

- `ex-na-nedelec-edge-circulation-and-stokes` · example — An oriented Nedelec edge circulation on one tetrahedron
- `ex-na-nodal-curlcurl-spurious-gradient-mode` · example — A nodal curl-free mode outside the compatible gradient image
- `ex-na-handle-domain-harmonic-edge-field` · example — A handle-domain harmonic field with nonzero circulation

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `discrete-de-rham-complexes-and-edge-elements` requires `mixed-hdiv-fluxes-and-darcy-discretization`
- `yee-fdtd-and-transient-maxwell-discretization` requires `discrete-de-rham-complexes-and-edge-elements`
- `maxwell-eigenproblems-and-compatible-vector-waves` requires `discrete-de-rham-complexes-and-edge-elements`
- `boundary-integral-equations-and-galerkin-bem` requires `discrete-de-rham-complexes-and-edge-elements`
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
