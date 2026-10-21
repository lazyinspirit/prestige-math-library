# Step 4 batch reviewer — batch **41**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **41**. Step-5 owning group: **n**.
Return `group: "n"` and `batches: ["41"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 41 | `calderon-problem-and-cgo-uniqueness` | A | geodesic-x-ray-transforms-on-simple-manifolds, inverse-wave-problems-and-finite-time-observability, fredholm-elliptic-problems-and-the-elliptic-spectrum, sobolev-traces-and-zero-boundary-values, smooth-manifolds-and-smooth-maps, riemannian-comparison-theorems, banach-space-differential-calculus-and-banach-manifolds |
| 41 | `calderon-problem-and-cgo-uniqueness-examples` | B | calderon-problem-and-cgo-uniqueness |

## Your content, in full

### `calderon-problem-and-cgo-uniqueness` — Scalar Calderón maps and conditional uniqueness

- `def-ip-injective-geodesic-ray-transform` · definition — Injective geodesic ray transform on a transversal manifold
- `def-ip-sobolev-spaces-on-compact-riemannian-domain` · definition — Sobolev spaces on a compact Riemannian domain with boundary
- `def-ip-transversally-anisotropic-product-domain` · definition — Transversally anisotropic product domain
- `lem-ip-euclidean-cgo-solvability` · lemma — Euclidean complex geometrical optics solvability with an H1 correction
- `lem-ip-conductivity-map-wellposedness` · lemma — Weak solvability of the positive scalar conductivity equation
- `lem-ip-cta-gaussian-beam-ray-limit` · lemma — CTA Gaussian-beam quasimodes and geodesic concentration
- `lem-ip-limiting-carleman-estimate-on-product` · lemma — Limiting Carleman estimate and right solvability on a product domain
- `lem-ip-smooth-manifold-elliptic-nonresonant-regularity` · lemma — Smooth-manifold elliptic nonresonant solvability and regularity
- `lem-ip-boundary-quasimode-jets-and-borel-correction` · lemma — Boundary quasimode jets and exact-solution correction
- `def-ip-conductivity-dirichlet-to-neumann-map` · definition — Scalar conductivity and Schrödinger Dirichlet-to-Neumann maps
- `lem-ip-cubic-dn-small-data-differentiability` · lemma — Small-data solvability and third differentiability of the cubic DN map
- `thm-ip-cgo-solvability-and-remainder-bound` · theorem — CTA complex geometrical optics solvability and remainder bound
- `lem-ip-alessandrini-identity` · lemma — Alessandrini identities for scalar conductivity and Schrödinger DN maps
- `lem-ip-conductivity-liouville-transform-and-dn-conjugacy` · lemma — Liouville transform and conductivity DN conjugacy
- `lem-ip-cubic-dn-third-linearization-identity` · lemma — Third linearization identity for the cubic Dirichlet-to-Neumann map
- `lem-ip-intersecting-gaussian-beam-four-factor-limit` · lemma — Four-harmonic-product realization of a longitudinal Fourier integral
- `thm-ip-euclidean-schrodinger-calderon-uniqueness` · theorem — Full-data uniqueness for the Euclidean Schrödinger Calderón problem
- `thm-ip-boundary-determination-of-scalar-conductivity` · theorem — Boundary determination of all scalar conductivity jets
- `thm-ip-semilinear-cubic-dn-identification` · theorem — Cubic semilinear DN identification by third linearization
- `thm-ip-transversely-anisotropic-calderon-uniqueness` · theorem — Conditional uniqueness in the transversely anisotropic Calderon problem
- `cor-ip-euclidean-cta-conductivity-uniqueness` · corollary — Conductivity uniqueness on a Euclidean CTA domain with simple transversal

### `calderon-problem-and-cgo-uniqueness-examples` — Scalar Calderón maps and conditional uniqueness — Examples and Counterexamples

- `ex-ip-transversally-anisotropic-product-with-simple-transversal` · example — A product geometry with an injective simple-surface transversal
- `ex-ip-boundary-jets-do-not-imply-interior-uniqueness` · example — Matching boundary jets without interior equality
- `ex-ip-partial-data-outside-full-data-theorem` · example — A partial-data configuration outside the full-data theorem

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `calderon-problem-and-cgo-uniqueness` requires `geodesic-x-ray-transforms-on-simple-manifolds`
- `calderon-problem-and-cgo-uniqueness` requires `inverse-wave-problems-and-finite-time-observability`
- `anisotropic-calderon-gauge-and-open-uniqueness` requires `calderon-problem-and-cgo-uniqueness`
- `eit-logarithmic-stability-and-conductivity-classes` requires `calderon-problem-and-cgo-uniqueness`
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
