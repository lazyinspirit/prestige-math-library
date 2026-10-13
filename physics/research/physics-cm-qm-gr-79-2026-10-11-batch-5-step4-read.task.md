# Step 4 batch reviewer — batch **5**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **5**. Step-5 owning group: **m**.
Return `group: "m"` and `batches: ["5"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 5 | `cm-math-central` | A | cm-math-balances, inverse-and-implicit-function-theorems, product-measures-and-the-fubini-tonelli-theorems, fubini-and-change-of-variables, linear-independence-bases-and-dimension, orthonormal-bases-parseval-and-fourier-series, the-fundamental-theorems-of-calculus, continuity-ivt-evt-and-uniform-continuity, fundamental-trigonometric-identities, inner-product-spaces-and-orthogonality, lebesgue-measure-on-euclidean-space, sine-cosine-and-the-definition-of-pi, the-real-gamma-and-beta-functions, further-trigonometric-identities-and-inverses |
| 5 | `cm-math-central-examples` | B | cm-math-central, the-logarithm-and-general-powers |

## Your content, in full

### `cm-math-central` — Cm Math Central

- `def-cm-central-force-trajectory` · definition — Central-force trajectories: the central-force equation, angular momentum, energy and the effective potential
- `lem-cm-planar-polar-lift` · lemma — Local polar coordinates for a curve with nonvanishing position in the plane: a differentiable angle function with prescribed derivative
- `lem-cm-second-order-oscillator-form` · lemma — Solutions of $v''+\omega^2v=0$ are exactly the functions $A\cos(\omega(t-t_0))+B\sin(\omega(t-t_0))$
- `lem-cm-cross-product-triple-identity` · lemma — The vector triple product identity $u\times(v\times w)=\langle u,w\rangle v-\langle u,v\rangle w$
- `lem-cm-oriented-orthonormal-triads` · lemma — Oriented orthonormal triads in $\mathbb R^3$: existence over any unit vector, and the orthonormal expansion with no fourth orthogonal direction
- `thm-cm-central-force-angular-momentum-conservation` · theorem — Conservation of the angular momentum vector along a central-force trajectory and its orthogonality to position and velocity
- `thm-cm-central-force-polar-reduction` · theorem — Polar reduction of a non-radial central-force trajectory: $\rho^2\theta'=J/\mu$, the effective-potential equation and energy conservation
- `thm-cm-circular-orbit-and-radial-frequency` · theorem — Circular orbits of a non-radial central-force trajectory: the critical-point condition and the squared frequency of the linearised radial equation
- `thm-cm-kepler-binet-equation` · theorem — Binet's equation for the attractive inverse-square field: $\mathrm d^2u/\mathrm d\varphi^2+u=\mu\kappa/J^2$ for $u=1/\rho$
- `thm-cm-kepler-conic-and-eccentricity` · theorem — The Kepler orbit equation is a conic: $u=c(1+e\cos(\varphi-\theta_0))$ with $E=(\mu\kappa^2/2J^2)(e^2-1)$
- `def-cm-one-dimensional-action-variable` · definition — The one-dimensional action variable of a family of two-simple-turning-point energy levels
- `thm-cm-kepler-ellipse-geometry` · theorem — The subcritical Kepler conic is an ellipse with semiaxes $a=p/(1-e^2)$, $b=a\sqrt{1-e^2}$, focus at the origin and area $\pi ab$; its area is also $\tfrac12\int_0^{2\pi}\varrho^2$
- `thm-cm-kepler-orbit-period` · theorem — Completeness and periodicity of the negative-energy Kepler orbit, with $T=2\pi\mu ab/J$ and $T^2=4\pi^2\mu a^3/\kappa$
- `thm-cm-action-variable-derivative` · theorem — The action variable of a two-simple-turning-point family is $C^1$ with derivative $T(E)/(2\pi)$, the period quadrature over $2\pi$
- `def-cm-scattering-data` · definition — Scattering data: the incident flux measure, the solid-angle element, deflection branches and the cross-section density
- `thm-cm-scattering-turning-point-and-global-branches` · theorem — Finite-range scattering: the simple outer turning point, the two global branches and the free tails
- `thm-cm-scattering-asymptotic-velocities-and-impact-parameter` · theorem — Existence of the asymptotic velocities and the impact-parameter identity $J=\mu b|v_-|$
- `thm-cm-scattering-angle-advance` · theorem — The scattering angle advance $\Delta$ and the deflection relation: the total polar advance is $2\Delta$ and the velocity directions make the cosine $\cos(\pi-2\Delta)$
- `thm-cm-differential-cross-section-density` · theorem — One-dimensional substitution on a deflection branch: the outgoing angular measure has density $b|\mathrm db/\mathrm d\theta|$, hence cross-section density $b|\mathrm db/\mathrm d\theta|/\sin\theta$
- `thm-cm-coulomb-scattering` · theorem — Repulsive Coulomb scattering: the unique outer turning point, global non-colliding motion, the asymptotic impact distance and $\Delta=\pi/2-\arctan(\kappa/(2Eb))$
- `thm-cm-rutherford-cross-section` · theorem — The Rutherford deflection map, its inverse, the cross-section density $(\kappa/4E)^2\csc^4(\theta/2)$ and the divergence of the total cross-section

### `cm-math-central-examples` — Cm Math Central — Examples

- `ex-cm-harmonic-oscillator-action-derivative` · example — The harmonic oscillator action variable $J_{\mathrm a}(E)=E/\omega$ and $J_{\mathrm a}'(E)=T/(2\pi)$
- `ex-cm-kepler-ellipse-data-check` · example — An exact Kepler ellipse check: $e=1/2$, $J=1$, $\mu=\kappa=1$ give $a=4/3$, $b=2\sqrt3/3$, $E=-3/8$ and $T^2=256\pi^2/27$
- `ex-cm-rutherford-cross-section-check` · example — An exact Rutherford check: $\kappa=E=1$, $b=1$ give $\theta=2\arctan\frac12$ and $\mathrm d\sigma/\mathrm d\Omega=25/16$
- `cex-cm-radial-kepler-collision` · counterexample — A zero-angular-momentum Kepler trajectory reaches the force centre in finite time, refuting unconditional global existence

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cm-math-central` requires `cm-math-balances`
- `cm05-two-body-central-forces-and-gravitation` requires `cm-math-central`
- `cm05-two-body-central-forces-and-gravitation-examples` requires `cm-math-central`
- `cm14-hamilton-jacobi-and-integrability` requires `cm-math-central`
- `cm14-hamilton-jacobi-and-integrability-examples` requires `cm-math-central`
- `cm15-scattering-and-impulse-model-boundaries` requires `cm-math-central`
- `cm15-scattering-and-impulse-model-boundaries-examples` requires `cm-math-central`
- `qm-angular-momentum-and-spin` requires `cm-math-central`
- `qm-math-orbital-and-spin` requires `cm-math-central`
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
