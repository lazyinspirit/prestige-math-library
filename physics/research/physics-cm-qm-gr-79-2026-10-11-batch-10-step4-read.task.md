# Step 4 batch reviewer — batch **10**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **10**. Step-5 owning group: **o**.
Return `group: "o"` and `batches: ["10"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 10 | `cm-math-numerical` | A | analyticity-liouville-and-morera, cm-math-canonical, cm-math-dynamics, compactness-in-metric-spaces, completeness-and-uniform-continuity, complex-differentiability-and-cauchy-riemann, complex-power-series-and-analytic-functions, contour-integration, field-extensions-and-the-complex-numbers, finite-counting-and-binomial-coefficients, fubini-and-change-of-variables, goursat-and-cauchys-theorem-in-a-convex-domain, inverse-and-implicit-function-theorems, line-integrals-and-the-gradient-theorem, linear-maps-rank-nullity-and-quotient-spaces, matrices-and-the-matrix-of-a-linear-map, metric-spaces, mixed-partials-taylor-and-extrema, norming-and-separation-under-hahn-banach, picard-lindelof-and-first-order-odes, properties-of-the-integral-and-the-working-ftc, rn-as-a-normed-space, the-exponential-function, the-inverse-function-theorem-completed, the-total-derivative |
| 10 | `cm-math-numerical-examples` | B | cm-math-numerical |

## Your content, in full

### `cm-math-numerical` — Cm Math Numerical

- `lem-cm-roundoff-accumulation-in-one-step-schemes` · lemma — Additive per-step errors in a Lipschitzian one-step scheme accumulate geometrically: $\eta((1+Lh)^n-1)/(Lh)$
- `def-cm-complex-phase-domains-and-holomorphic-maps` · definition — Complex phase domains, holomorphic maps on $\mathbb C^m$, and the complexified canonical form and bracket
- `def-cm-splitting-hamiltonian-and-verlet-map` · definition — The splitting Hamiltonian $H=A+B$, the drift and kick maps, and the velocity-Verlet map
- `lem-cm-cauchy-formula-and-power-series-on-polydiscs` · lemma — Iterated Cauchy formula, power-series expansion and Cauchy estimates for functions continuous and separately holomorphic on a polydisc
- `lem-cm-verlet-local-truncation-error-is-cubic` · lemma — The velocity-Verlet step matches the exact flow through order two: local truncation error $O(h^3)$ on a convex tube
- `lem-cm-holomorphic-map-calculus` · lemma — Calculus of holomorphic maps: chain rule, Wirtinger derivatives, coefficient extraction in one variable, and locally uniform limits
- `prop-cm-drift-kick-and-verlet-preserve-the-canonical-form` · proposition — The drift, kick and velocity-Verlet maps are canonical: $(DC)^{\mathsf T}J\,DC=J$ and $C^*\omega=\omega$
- `def-cm-analytic-splitting-data-and-exact-splitting-map` · definition — Analytic splitting data with uniform holomorphic neighbourhood, and the exact symmetric splitting map $\Psi_h$
- `thm-cm-verlet-finite-time-error-is-quadratic` · theorem — Finite-time global error of the velocity-Verlet method: $\lVert z_n-\Phi_{nh}(z_0)\rVert\le C(e^{LT}-1)h^2/L$
- `lem-cm-complex-analytic-flow-existence-and-holomorphy` · lemma — The flow of a bounded holomorphic field on a polydisc: existence in complex time, displacement bound, holomorphy, and the composition law
- `lem-cm-exact-splitting-map-preserves-the-complex-canonical-form` · lemma — Hamiltonian flows and the exact splitting map preserve the complexified canonical form and the Poisson bracket
- `lem-cm-difference-operator-and-domain-loss-bound` · lemma — The difference operator $\Delta_h=\Psi_h^*-\mathrm{id}$ loses a controlled domain margin and is bounded by $C_dM|h|/b$
- `def-cm-modified-log-coefficients-and-truncations` · definition — The truncated binomial family $T_h^{s,N}$, the truncated logarithm $L_N(h)$, its coefficient fields $X_j$ and the truncations $X^{[N]}$
- `lem-cm-binomial-pullback-family-and-its-log-are-derivations` · lemma — The binomial family of the splitting pullback is multiplicative and bracket-preserving, and its logarithm is a derivation
- `lem-cm-truncated-log-coefficient-bounds` · lemma — Bounds for the truncated logarithm: $\lvert L_N(h)z_i/h\rvert\le8M/3$ and $\lvert X_j\rvert\le(8M/3)(C_0Mj/\rho)^{j-1}$
- `lem-cm-log-coefficients-are-symplectic-fields-with-hamiltonian-primitives` · lemma — Each coefficient field $X_j$ of the modified logarithm is a holomorphic symplectic field with a global holomorphic primitive $H_j$ on the star-shaped domain, and $X_1=X_{\tilde A+\tilde B}$
- `lem-cm-symmetric-log-parity-removes-odd-coefficients` · lemma — Symmetry of the splitting map forces $X_j=0$ for every even $j$, so the first modified-energy correction is of order $h^2$
- `lem-cm-optimal-truncation-gives-exponential-local-defect` · lemma — Optimal finite truncation gives an exponential local splitting defect
- `lem-cm-modified-energy-differs-by-order-two` · lemma — The optimal modified Hamiltonian differs from the original by order two
- `thm-cm-analytic-verlet-energy-on-exponential-times` · theorem — Analytic Verlet retains order-two energy accuracy on exponential times
- `lem-cm-separate-roundoff-energy-accumulation` · lemma — Bounded per-step state perturbations add a separate linear energy term
- `rem-cm-scope-of-the-certified-verlet-estimates` · remark — Scope of the certified velocity-Verlet estimates: exact arithmetic, compact tubes, roundoff, and absent all-time claims

### `cm-math-numerical-examples` — Cm Math Numerical — Examples

- `ex-cm-verlet-map-of-the-harmonic-oscillator` · example — Oscillator Verlet: a preserved quadratic form and bounded original-energy oscillation
- `ex-cm-analytic-pendulum-verlet-domain-check` · example — Analytic pendulum: checking the complex bounds and compact-iterate hypothesis

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cm-math-numerical` requires `cm-math-canonical`
- `cm-math-numerical` requires `cm-math-dynamics`
- `cm13-symplectic-geometry-and-canonical-methods` requires `cm-math-numerical`
- `cm13-symplectic-geometry-and-canonical-methods-examples` requires `cm-math-numerical`
- `cm18-measurement-uncertainty-and-later-bridges` requires `cm-math-numerical`
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
