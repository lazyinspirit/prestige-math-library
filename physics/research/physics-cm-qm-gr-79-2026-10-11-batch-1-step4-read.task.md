# Step 4 batch reviewer — batch **1**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **1**. Step-5 owning group: **l**.
Return `group: "l"` and `batches: ["1"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 1 | `cm-math-geometry` | A | countability-and-uncountability, rank-theorems-and-embedded-submanifolds, regular-surfaces-and-surface-integrals, rn-as-a-normed-space, the-total-derivative, compactness-in-metric-spaces, dual-spaces-bilinear-forms-and-inertia, linear-independence-bases-and-dimension, picard-lindelof-and-first-order-odes, the-derivative-and-mean-value-theorems, the-inverse-function-theorem-completed, the-lebesgue-integral-and-the-convergence-theorems, vector-spaces-and-subspaces, determinants-of-matrices-over-a-commutative-ring, exterior-powers-orientation-and-hodge-duality, inner-product-spaces-and-orthogonality, lebesgue-measure-on-euclidean-space, linear-maps-rank-nullity-and-quotient-spaces, matrices-and-the-matrix-of-a-linear-map, metric-spaces, monotone-sequences-and-cauchy-completeness, separation-axioms, smooth-manifolds-and-smooth-maps, tangent-cotangent-and-the-differential, the-topology-of-euclidean-space, eigenvalues-eigenvectors-and-the-characteristic-polynomial |
| 1 | `cm-math-geometry-examples` | B | cm-math-geometry, line-integrals-and-the-gradient-theorem, the-fundamental-theorems-of-calculus, sine-cosine-and-the-definition-of-pi, rank-theorems-and-embedded-submanifolds, fundamental-trigonometric-identities |

## Your content, in full

### `cm-math-geometry` — Cm Math Geometry

- `def-cm-equilibrium-and-lyapunov-stability` · definition — Equilibria, Lyapunov stability and asymptotic stability of an autonomous first-order system
- `def-cm-orbital-and-linear-stability` · definition — Invariant sets, orbital stability of an invariant set, and linear stability of an equilibrium
- `def-cm-hyperbolic-equilibrium-and-limit-cycles` · definition — Hyperbolic equilibria, hyperbolic fixed points, periodic orbits, limit cycles and homoclinic trajectories
- `def-cm-stroboscopic-map` · definition — The stroboscopic (time-$P$) map of a $P$-periodic first-order system
- `lem-cm-stroboscopic-iterate-identity` · lemma — Iterates of the stroboscopic map, and equilibria as fixed points
- `def-cm-constrained-configuration-and-mass-metric` · definition — Constrained configurations, the mass matrix and the mass metric
- `lem-cm-mass-metric-positivity` · lemma — The mass metric is symmetric, positive semidefinite, and positive definite exactly when the configuration differential is injective
- `def-cm-material-region-and-density` · definition — Material regions, densities and their mass
- `def-cm-traction-and-stress` · definition — Traction fields and stress matrices representing them
- `def-cm-affine-time-space` · definition — Affine time space with Euclidean simultaneous slices and adapted charts
- `lem-cm-adapted-coordinates-exist-and-are-unique` · lemma — Existence and uniqueness of adapted coordinates, and the affine structure of simultaneous slices
- `lem-cm-adapted-charts-and-galilean-transformations` · lemma — Transformation between adapted charts and its kinematic consequences
- `lem-cm-moving-frame-acceleration-identity` · lemma — Angular velocity of a moving frame and the rotating-frame acceleration identity
- `def-cm-special-orthogonal-group` · definition — The orthogonal group $O(3)$ and the rotation group $SO(3)$
- `lem-cm-so3-is-a-matrix-group` · lemma — $SO(3)$ is a subgroup of the general linear group, with $R^{-1}=R^{\mathsf T}$
- `lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold` · lemma — $SO(3)$ is a compact three-dimensional embedded submanifold of $M_3(\mathbb R)$, with tangent space the matrices $R\Omega$ for skew $\Omega$
- `lem-cm-rigid-labeling-stabilizer` · lemma — A labeling containing two independent vectors has trivial $SO(3)$-stabilizer

### `cm-math-geometry-examples` — Cm Math Geometry — Examples

- `ex-cm-galilean-boost-coordinate-change` · example — Worked change of adapted chart with a rotation, a boost and a spatial shift
- `ex-cm-rotating-frame-identity` · example — The rotating-frame acceleration identity for a uniform rotation about an axis
- `ex-cm-mass-metric-on-a-sphere` · example — The mass metric of a particle constrained to the unit sphere in spherical coordinates
- `cex-cm-collinear-labeling-admits-a-nontrivial-rotation` · counterexample — A collinear labeling admits a nontrivial rotation
- `ex-cm-closed-one-form-radial-primitive` · example — A closed field on a star-shaped domain with its radial primitive computed
- `ex-cm-stroboscopic-map-of-the-plane-oscillator` · example — The stroboscopic map of the plane oscillator

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cm01-framework-quantities-and-geometry` requires `cm-math-geometry`
- `cm01-framework-quantities-and-geometry-examples` requires `cm-math-geometry`
- `cm03-momentum-work-and-energy-balances` requires `cm-math-geometry`
- `cm04-one-dimensional-conservative-and-dissipative-models` requires `cm-math-geometry`
- `cm06-regular-constraints-and-moving-frames` requires `cm-math-geometry`
- `cm06-regular-constraints-and-moving-frames-examples` requires `cm-math-geometry`
- `cm08-symmetry-noether-and-conditional-conservation-examples` requires `cm-math-geometry`
- `cm09-coupled-oscillations-and-approximation` requires `cm-math-geometry`
- `cm09-coupled-oscillations-and-approximation-examples` requires `cm-math-geometry`
- `cm10-rigid-body-configuration-and-inertia` requires `cm-math-geometry`
- `cm10-rigid-body-configuration-and-inertia-examples` requires `cm-math-geometry`
- `cm11-rigid-body-dynamics-and-stability` requires `cm-math-geometry`
- `cm15-scattering-and-impulse-model-boundaries` requires `cm-math-geometry`
- `cm16-stability-perturbations-and-chaos` requires `cm-math-geometry`
- `cm17-classical-continua-with-explicit-constitutive-assumptions` requires `cm-math-geometry`
- `cm17-classical-continua-with-explicit-constitutive-assumptions-examples` requires `cm-math-geometry`
- `cm-math-dynamics` requires `cm-math-geometry`
- `cm-math-dynamics-examples` requires `cm-math-geometry`
- `cm-math-continuum` requires `cm-math-geometry`
- `cm-math-continuum-examples` requires `cm-math-geometry`
- `cm-math-rigid` requires `cm-math-geometry`
- `cm-math-chaos` requires `cm-math-geometry`
- `cm-math-rotation-double-cover` requires `cm-math-geometry`
- `qm-framework-and-quantities` requires `cm-math-geometry`
- `qm-framework-and-quantities-examples` requires `cm-math-geometry`
- `qm-symmetries-and-conservation` requires `cm-math-geometry`
- `qm-symmetries-and-conservation-examples` requires `cm-math-geometry`
- `qm-angular-momentum-and-spin` requires `cm-math-geometry`
- `qm-math-orbital-and-spin` requires `cm-math-geometry`
---

# Mandatory physics instructions

Read `CLAUDE.md`, `SCHEMA.md`, and `../PHYSICS-CONTENT-MODEL.md`. Follow the assigned role and scope. These rules apply to every physics framework.

**Define, do not merely name.** Be as mathematically rigorous and explicit as possible. Before using a technical term, give its mathematical definition or identify an exact earlier definition and state its relevant content. Specify objects, domains, maps, regularity, hypotheses, and conventions. Use published, draft or planned mathematics suppliers with exact statements, hypotheses and honest proof status; complete remaining gaps locally.

**Example—classical EM:** write $\mathbf E,\mathbf B:\Omega\times I\to\mathbb R^3$, with spatial region $\Omega\subseteq\mathbb R^3$, time interval $I$, and stated regularity; at fixed time these are spatial vector fields. Specify units. Do not assume smoothness across point charges or surface sources; state exclusions or use an appropriate weak/distributional formulation. Likewise, define a worldline as a curve with specified domain and conditions, and a reference frame as a precise geometric object appropriate to the framework.

**Model deductions and empirical observations are distinct.** A physics proof establishes a logical consequence of explicitly stated model postulates, mathematical hypotheses and idealizations; it does not establish that the model or its postulates describe nature. Experiments report source-backed observations with apparatus, calibration, sampling and uncertainty qualifications. Comparing predictions with observations tests the combined model and apparatus assumptions; agreement is evidence, not a deductive proof of the model. Explicitly distinguish adopted assumptions, derived predictions, reported observations and statistical inference. If a deduction uses measured inputs, state them as qualified empirical premises and carry their uncertainty and conditions into the conclusion.

**Evidence is statistical.** Separate predictions, observations, and inference. State preparation, apparatus assumptions, sampling model, uncertainty, and source limitations. Never invent measurements or statistical precision. Carry empirical qualifications into downstream conclusions.

**Example—double slit:** each detection is localized; fringes concern the accumulated distribution. A finite sample can lack visible fringes with nonzero probability under ordinary coherent sampling models. Agreement does not prove quantum mechanics; missing fringes do not automatically falsify it. Test a specified competing model, not “all classical physics.” A p-value is not the probability that a theory is false. Classical waves also interfere, and reviewer confidence is not empirical certainty.

Postulates are adopted assumptions; experiments report source-backed observations, not proofs. Physics theorems and thought experiments require complete conditional deductions. Use schema classifications, dependency roles, uncertainty records, and nonproof reviews. Keep evidence links separate from acyclic prerequisites. Mathematical items cannot depend on physics; imports and the root mathematics workspace are read-only. Physical public-interface changes require consumer review.

Authors supply definitions and prerequisites; reviewers and adjudicators check them, source fidelity, and statistical qualifications. Reject undefined reasoning and fabricated certainty.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks. In physics, algorithms may have either domain like definitions. Pure mathematical properties use mathematical result kinds and only mathematical prerequisites; consequences relying on physical premises use `physics-theorem` (or `thought-experiment`). Preserve physical scope and empirical qualifications.

---

# Step 4 Alpha batch reviewer — read-only digest, `physics-cm-qm-gr-79-2026-10-11`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.
