# Step 4 batch reviewer — batch **39**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **39**. Step-5 owning group: **m**.
Return `group: "m"` and `batches: ["39"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 39 | `analytic-double-fibration-and-bolker-visibility` | A | radon-transform-and-fourier-slice-reconstruction, limited-angle-tomography-and-invisible-singularities, geodesic-x-ray-transforms-on-simple-manifolds, power-series-and-real-analytic-functions, smooth-manifolds-and-smooth-maps, tempered-distributions-and-the-fourier-transform, the-de-rham-theorem-and-degree, analytic-majorants-and-the-cauchy-kovalevskaya-theorem, direct-matrix-factorisations-lu-cholesky-and-qr |
| 39 | `analytic-double-fibration-and-bolker-visibility-examples` | B | analytic-double-fibration-and-bolker-visibility, constant-rank-submersions-and-regular-level-sets, jacobi-fields-conjugate-points-and-the-cut-locus |

## Your content, in full

### `analytic-double-fibration-and-bolker-visibility` — Analytic double fibrations and Bolker visibility

- `def-ip-distributions-conormal-kernels-and-cotangent-relation` · definition — Distributions, conormal kernels, and cotangent relations
- `lem-ip-analytic-cutoff-sequence` · lemma — Finite-order analytic cutoff sequence
- `lem-ip-holomorphic-morse-normalization-and-gaussian-contour` · lemma — Holomorphic Morse normalization and Gaussian contour
- `def-ip-analytic-double-fibration-transform` · definition — Analytic double-fibration transform and canonical relation
- `def-ip-analytic-wavefront-fbi-transform` · definition — Analytic wavefront set by Gaussian FBI packets
- `thm-ip-analytic-stationary-phase-with-exponential-remainder` · theorem — Analytic stationary phase with optimal truncation
- `def-ip-bolker-condition` · definition — Bolker condition for a double-fibration transform
- `lem-ip-double-fibration-conormal-kernel` · lemma — Incidence-coordinate conormal kernel and canonical relation
- `lem-ip-local-analytic-elliptic-packet-calculus` · lemma — Local analytic elliptic packet reconstruction
- `lem-ip-analytic-nonstationary-incidence-localization` · lemma — Analytic incidence localization away from a data cotangent fiber
- `lem-ip-analytic-cutoff-sequence-and-fbi-invariance` · lemma — Analytic cutoff sequence and local FBI invariance
- `lem-ip-bolker-geometric-criteria` · lemma — Global fiber and local differential criteria for Bolker
- `lem-ip-flat-one-sided-analytic-support` · lemma — Both analytic normal directions at a flat support boundary
- `lem-ip-local-bolker-positive-packet-estimate` · lemma — Local Bolker incidence packets have a positive reduced phase
- `lem-ip-one-sided-analytic-support-continuation` · lemma — One-sided support forces its analytic conormal wavefront
- `thm-ip-analytic-wavefront-recovery-under-bolker` · theorem — Analytic wavefront recovery under Bolker
- `thm-ip-local-support-from-one-sided-vanishing` · theorem — Local support from one-sided vanishing and visible conormal data

### `analytic-double-fibration-and-bolker-visibility-examples` — Analytic double fibrations and Bolker visibility — Examples and Counterexamples

- `ex-ip-analytic-missing-angle-covector` · example — A missing-angle covector has no data-side canonical pair
- `ex-ip-conjugate-point-violates-bolker` · example — A conjugate antipode breaks global Bolker injectivity
- `ex-ip-visible-conormal-under-bolker` · example — A visible Euclidean Radon conormal satisfies Bolker

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `analytic-double-fibration-and-bolker-visibility` requires `radon-transform-and-fourier-slice-reconstruction`
- `analytic-double-fibration-and-bolker-visibility` requires `limited-angle-tomography-and-invisible-singularities`
- `analytic-double-fibration-and-bolker-visibility` requires `geodesic-x-ray-transforms-on-simple-manifolds`
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
