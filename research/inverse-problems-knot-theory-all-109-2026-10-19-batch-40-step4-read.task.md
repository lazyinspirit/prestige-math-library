# Step 4 batch reviewer — batch **40**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **40**. Step-5 owning group: **n**.
Return `group: "n"` and `batches: ["40"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 40 | `inverse-wave-problems-and-finite-time-observability` | A | geodesic-x-ray-transforms-on-simple-manifolds, wave-energy-finite-propagation-and-huygens, sobolev-traces-and-zero-boundary-values, hamiltonian-mechanics-and-completely-integrable-systems, jacobi-fields-conjugate-points-and-the-cut-locus, interior-and-boundary-sobolev-elliptic-regularity, homology-axioms-degree-and-classical-applications |
| 40 | `inverse-wave-problems-and-finite-time-observability-examples` | B | inverse-wave-problems-and-finite-time-observability |

## Your content, in full

### `inverse-wave-problems-and-finite-time-observability` — Hyperbolic inverse problems and finite-time visibility

- `lem-ip-riemannian-green-boundary-traces-and-wave-lifting` · lemma — Riemannian Green identity, boundary trace, and wave lifting
- `lem-ip-smooth-boundary-tests-separate-locally-integrable-traces` · lemma — Smooth boundary tests separate locally integrable traces
- `lem-ip-smooth-whitney-extension-on-compact-sets` · lemma — Smooth Whitney extension on compact sets
- `lem-ip-borel-jet-realization-and-beam-patching` · lemma — Parameter-uniform Borel jet realization and ray-tube patching
- `def-ip-simple-riemannian-background` · definition — Simple Riemannian background
- `lem-ip-variable-metric-domain-of-dependence` · lemma — Finite propagation for the wave equation on a Riemannian manifold
- `lem-ip-compact-manifold-dirichlet-spectrum-and-regularity` · lemma — Compact-manifold Dirichlet spectrum and boundary regularity
- `thm-ip-variable-metric-wave-ibvp-energy-wellposedness` · theorem — Energy well-posedness for the variable-metric wave equation
- `lem-ip-simple-manifold-no-return-extension` · lemma — A complete no-return extension of a strictly convex manifold
- `def-ip-hyperbolic-dirichlet-to-neumann-map` · definition — Time-dependent Dirichlet-to-Neumann map for the wave equation
- `lem-ip-gaussian-beam-null-bicharacteristic` · lemma — Gaussian beams concentrated on an embedded null bicharacteristic
- `lem-ip-simple-geodesic-polar-extension` · lemma — Global geodesic-polar coordinates from a boundary point on a simple manifold
- `lem-ip-wave-alessandrini-identity` · lemma — Alessandrini identity for the time-dependent wave Dirichlet-to-Neumann maps
- `lem-ip-simple-geometry-global-eikonal-geometric-optics` · lemma — Finite-order geometric optics along a maximal ray in simple geometry
- `thm-ip-wave-data-determine-light-ray-integrals` · theorem — Wave boundary data determine integrals along maximal geodesics shorter than T
- `cor-ip-wave-coefficient-uniqueness-under-simple-geometry` · corollary — Static wave coefficients are determined on a simple surface with adequate observation time

### `inverse-wave-problems-and-finite-time-observability-examples` — Hyperbolic inverse problems and finite-time visibility — Examples and Counterexamples

- `ex-ip-40-ray-limit-error-accounting` · example — Exact-solution correction errors vanish in the Gaussian-beam ray limit
- `ex-ip-40-finite-time-invisible-perturbation` · example — A potential perturbation beyond the two-trip distance is invisible before time T
- `ex-ip-40-simple-geometry-adequate-observation-time` · example — Adequate observation time on a simple surface

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `inverse-wave-problems-and-finite-time-observability` requires `geodesic-x-ray-transforms-on-simple-manifolds`
- `calderon-problem-and-cgo-uniqueness` requires `inverse-wave-problems-and-finite-time-observability`
---

# Step 4 Alpha batch reviewer — read-only digest, `inverse-problems-knot-theory-all-109-2026-10-19`

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
