# Step 4 batch reviewer — batch **12**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **12**. Step-5 owning group: **d**.
Return `group: "d"` and `batches: ["12"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 12 | `ewald-periodic-potentials-and-particle-mesh-error` | A | computed-fast-transforms-and-convolution, poisson-summation-sampling-and-lattice-duality, euclidean-surface-measure-divergence-and-green-identities |
| 12 | `ewald-periodic-potentials-and-particle-mesh-error-examples` | B | ewald-periodic-potentials-and-particle-mesh-error |

## Your content, in full

### `ewald-periodic-potentials-and-particle-mesh-error` — Ewald periodic potentials and particle mesh error

- `def-ewald-causal-cardinal-spline-window` · definition — Causal cardinal spline window
- `def-ewald-three-dimensional-periodic-source-data` · definition — Neutral point sources and Fourier data on a three-dimensional torus
- `lem-ewald-screened-coulomb-kernel-and-self-limit` · lemma — Gaussian screened Coulomb kernel and its self limit
- `def-ewald-pme-cardinal-assignment-model` · definition — Periodic cardinal-spline assignment and unitary mesh transform
- `lem-ewald-gaussian-poisson-periodization` · lemma — Poisson periodization of a normalized Gaussian on a full-rank lattice
- `lem-ewald-lattice-shell-gaussian-tail-controllers` · lemma — Uniform lattice-shell counts and explicit Gaussian tail controllers
- `lem-ewald-smooth-torus-fourier-pairing` · lemma — Smooth torus test functions have rapidly convergent Fourier pairings
- `lem-ewald-pme-spline-alias-and-dft-normalization` · lemma — Exact three-dimensional spline assignment aliases and FFT normalization
- `thm-ewald-neutral-periodic-poisson-green-function` · theorem — The mean-zero Fourier distribution solves the neutral periodic Poisson equation
- `lem-ewald-pme-derivative-window-alias-bound` · lemma — Derivative-window alias bounds including the P=2 knot branch
- `thm-ewald-alpha-independent-energy-and-potential` · theorem — The alpha-independent Ewald potential and renormalized energy
- `thm-ewald-pme-reciprocal-energy-force-error-bound` · theorem — Deterministic reciprocal particle-mesh Ewald potential, energy, and force bounds
- `thm-ewald-real-reciprocal-cutoff-error-bounds` · theorem — Explicit real and reciprocal Ewald potential, energy, and force tail bounds
- `thm-ewald-total-pme-error-certificate` · theorem — Total deterministic Ewald and particle-mesh error certificate
- `alg-ewald-certified-particle-mesh-evaluator` · algorithm — Certified three-dimensional particle-mesh Ewald evaluator
- `lem-ewald-certified-particle-mesh-evaluator-terminates` · lemma — The certified particle-mesh Ewald evaluator terminates with finite outputs or an explicit status

### `ewald-periodic-potentials-and-particle-mesh-error-examples` — Ewald periodic potentials and particle mesh error — Examples

- `ex-ewald-nonneutral-zero-mode-obstruction` · example — A nonneutral periodic source has no periodic Poisson solution
- `ex-ewald-neutral-dipole-cell` · example — A neutral dipole cell and its reciprocal modes
- `ex-ewald-source-collision-field-singularity` · example — A point-source potential is singular at a source
- `ex-ewald-alpha-cutoff-tradeoff` · example — Opposite real and reciprocal cutoff trends in the Ewald parameter
- `ex-ewald-mesh-energy-force-consistency` · example — The energy-gradient mesh force matches the differentiated mesh energy

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
