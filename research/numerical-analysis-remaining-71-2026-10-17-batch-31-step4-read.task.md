# Step 4 batch reviewer — batch **31**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **31**. Step-5 owning group: **k**.
Return `group: "k"` and `batches: ["31"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 31 | `mixed-finite-elements-and-stokes-stability` | A | finite-element-meshes-and-interpolation, lax-milgram-and-weak-elliptic-solutions, fourier-multipliers-and-sobolev-characterisations, fredholm-elliptic-problems-and-the-elliptic-spectrum, decomposition-inertia-and-frobenius |
| 31 | `mixed-finite-elements-and-stokes-stability-examples` | B | mixed-finite-elements-and-stokes-stability |

## Your content, in full

### `mixed-finite-elements-and-stokes-stability` — Mixed finite elements and Stokes stability

- `lem-na-zero-mean-of-zero-boundary-divergence` · lemma — Zero mean of the divergence of a zero-boundary field
- `lem-na-homogeneous-dirichlet-poincare` · lemma — A bounded-domain Poincare inequality for H1-zero fields
- `lem-na-homogeneous-dirichlet-korn-identity` · lemma — The homogeneous Dirichlet strain identity
- `lem-na-lipschitz-domain-finite-star-shaped-cover` · lemma — Finite star-shaped cover of a bounded Lipschitz domain
- `def-na-star-shaped-bogovskii-integral` · definition — The Bogovskii integral on a star-shaped set
- `thm-na-infsup-bounded-right-inverse-hilbert` · theorem — Hilbert inf-sup gives a bounded constraint right inverse
- `lem-na-scott-zhang-boundary-preserving-p1-interpolant` · lemma — Boundary-preserving face-average P1 interpolation
- `def-na-stokes-zero-mean-pressure-and-velocity-spaces` · definition — Stokes velocity and pressure spaces and weak forms
- `lem-na-finite-cover-zero-mean-data-decomposition` · lemma — Zero-mean L2 decomposition over a finite cover
- `lem-na-bogovskii-kernel-support-and-divergence` · lemma — Support, integrability, and divergence identity for the Bogovskii kernel
- `thm-na-babuska-brezzi-kernel-coercivity` · theorem — Babuska-Brezzi solvability by kernel coercivity and inf-sup
- `lem-na-bogovskii-truncated-derivative-fourier-formula` · lemma — Truncated Fourier formula for derivatives of the Bogovskii operator
- `def-na-fortin-operator` · definition — Fortin operator for a discrete constraint
- `thm-na-mixed-galerkin-quasioptimality` · theorem — Mixed Galerkin error bound retaining beta_h
- `def-na-mini-element-p1-bubble-p1-spaces` · definition — The conforming P1-bubble/P1 mini element
- `lem-na-bogovskii-fourier-ray-and-derivative-ltwo-bound` · lemma — Elementary Fourier ray and derivative L2 bounds
- `lem-na-fortin-transfers-discrete-infsup` · lemma — Fortin operators transfer the continuous inf-sup bound
- `lem-na-mini-element-local-and-global-dimensions` · lemma — Local and global dimensions of the mini element
- `def-na-discrete-weak-and-exact-divergence-free-spaces` · definition — Weak and pointwise divergence-free discrete velocities
- `thm-na-star-shaped-bogovskii-bounded-right-inverse` · theorem — Bounded Bogovskii right inverse on a star-shaped domain
- `thm-na-bounded-lipschitz-domain-divergence-right-inverse` · theorem — Divergence right inverse on bounded connected Lipschitz domains
- `thm-na-continuous-stokes-divergence-infsup` · theorem — Continuous Stokes divergence inf-sup on a Lipschitz domain
- `thm-na-mini-element-fortin-stability` · theorem — Uniform Fortin stability of the mini element
- `thm-na-weak-stokes-solvability-lipschitz-domain` · theorem — Weak Stokes solvability on bounded connected Lipschitz domains
- `thm-na-mini-element-h1-pressure-error` · theorem — Mini-element H1 velocity and L2 pressure error estimate
- `thm-na-discrete-helmholtz-projection-and-pressure-schur` · theorem — Discrete Helmholtz projection and pressure Schur identities

### `mixed-finite-elements-and-stokes-stability-examples` — Mixed finite elements and Stokes stability — Examples

- `ex-na-taylor-hood-pressure-mode` · example — A Taylor-Hood local pressure mode on a right triangle
- `ex-na-mini-element-bubble-moment` · example — A mini-element bubble detects an affine pressure gradient
- `cex-na-q1-p0-checkerboard-pressure-mode` · counterexample — The alternating Q1/P0 checkerboard pressure defeats the discrete inf-sup condition
- `ex-na-weakly-versus-exactly-divergence-free-mini-velocity` · example — A weakly divergence-free mini velocity need not be pointwise divergence-free

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `mixed-hdiv-fluxes-and-darcy-discretization` requires `mixed-finite-elements-and-stokes-stability`
- `elasticity-near-incompressibility-and-locking-free-discretization` requires `mixed-finite-elements-and-stokes-stability`
- `energy-stable-incompressible-navier-stokes-discretization` requires `mixed-finite-elements-and-stokes-stability`
- `overlapping-schwarz-and-stable-subspace-decompositions` requires `mixed-finite-elements-and-stokes-stability`
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
