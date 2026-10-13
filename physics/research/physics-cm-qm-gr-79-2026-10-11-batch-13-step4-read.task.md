# Step 4 batch reviewer — batch **13**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **13**. Step-5 owning group: **p**.
Return `group: "p"` and `batches: ["13"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 13 | `cm-math-chaos` | A | cm-math-canonical, completeness-and-uniform-continuity, construction-of-r-via-cauchy-sequences, cm-math-dynamics, cm-math-geometry, cm-math-balances |
| 13 | `cm-math-chaos-examples` | B | cm-math-chaos, cm-math-dynamics |

## Your content, in full

### `cm-math-chaos` — Cm Math Chaos

- `def-bilateral-symbol-and-bounded-sequence-space` · definition — The two-sign bilateral shift space, its coding map, and the ball of bounded bilateral real sequences
- `lem-bounded-bilateral-sequence-ball-is-complete` · lemma — The bounded functions on a set form a complete metric space in the supremum metric, and the coding map of the two-sign shift space is an isometry
- `lem-coded-quadratic-recurrence-is-a-contraction` · lemma — The square-root recurrence $T_s(x)_n = s_n\sqrt{a+x_{n-1}+x_{n+1}}$ is a contraction of $B_R$ with a unique coded solution
- `lem-symbol-locality-gives-coding-continuity` · lemma — Finite symbol windows determine the code: locality of the iterates, coding continuity and injectivity of $h(\sigma)=(x_{-1}(\sigma),x_0(\sigma))$
- `thm-henon-coded-invariant-set-is-conjugate-to-shift` · theorem — The quadratic map $F(x,y)=(y,y^2-a-x)$ has a compact coded invariant set conjugate to the two-sign shift, with chaos under $\mathrm{AC}_\omega$
- `lem-finite-word-deviations-give-homoclinic-orbits` · lemma — Constant codes give the fixed points, and finite nonconstant word codes give homoclinic orbits converging to a fixed point at both ends
- `def-stable-unstable-cones-and-line-slopes` · definition — Stable and unstable cones, invariant line slopes, stable and unstable sets, and transverse homoclinic points of the quadratic family
- `lem-slope-graph-transforms-converge` · lemma — Cone invariance and expansion, and convergence of the slope graph transforms to unique invariant stable and unstable line fields
- `lem-weighted-tail-contractions-give-c-one-curves` · lemma — Weighted half-tail contractions for $q_n=M_{s_n}(q_{n-1},q_{n+1})$ give a unique $C^1$ curve with tangent slope bounded by $c/(1-q)$
- `lem-tail-curve-tangents-and-homoclinic-transversality` · lemma — The coded curves are genuine $C^1$ stable and unstable curves of $F$, with transverse intersection at every finite-word homoclinic point
- `lem-close-map-first-component-has-uniform-inverse` · lemma — A $C^2$ map $C^1$-close to $F$ has a unique inverse branch for its first component, with $O(\varepsilon)$ derivative bounds
- `lem-perturbed-scalar-recurrence-root-bounds` · lemma — Root bounds and $C^1$ dependence for the perturbed scalar recurrence $v^2-a-u-w+e(u,v,w)=0$
- `thm-explicit-perturbed-horseshoe-and-transversality` · theorem — Explicit persistence under the stated forward and conjugated-inverse bounds: coded chaos, hyperbolic fixed points and transverse homoclinic points
- `def-smooth-periodic-oscillator-pulse-model` · definition — The smooth $P$-periodic pulsed oscillator: the normalized pulse, its Hamiltonian and its stroboscopic (period) map
- `lem-rescaled-pulse-map-is-c-one-close-to-kick` · lemma — The rescaled pulse endpoint map converges to the kick $K(q,p)=(q,p+q^2-a)$ in $C^1$, and the period map is smooth, symplectic and $C^1$-close to $F$
- `thm-smooth-fixed-mass-mechanical-horseshoe` · theorem — A smooth periodic one-degree-of-freedom oscillator with polynomial pulse forcing has stroboscopic chaos and a transverse homoclinic point

### `cm-math-chaos-examples` — Cm Math Chaos — Examples

- `ex-cm-chaos-contraction-and-coded-fixed-sequence-checks` · example — Explicit constants at $a=100$: the contraction factor, the fixed points $r_\pm$ and the constant-code solutions
- `ex-cm-chaos-slope-transform-fixed-point-checks` · example — The constant-code slope transform at $a=100$: the invariant slope of $h\mapsto1/(2r_+-h)$ and the cone constants
- `ex-cm-chaos-finite-word-homoclinic-code-checks` · example — The single-flip code at $a=100$: a nonperiodic coded orbit converging to the fixed point at both ends
- `ex-cm-chaos-pulse-and-rotation-endpoint-checks` · example — The $\delta=0$ endpoint computation: the free rotation $(q,p)\mapsto(p,-q)$, the kick $(q,p)\mapsto(q,p+q^2-a)$ and $K\circ R_0=F$
- `ex-cm-chaos-perturbed-root-and-margin-checks` · example — Explicit root margins at $a=100$: endpoint signs $25$ and $43$, and $d=2/13$ for $\eta=1$

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cm-math-chaos` requires `cm-math-canonical`
- `cm-math-chaos` requires `cm-math-dynamics`
- `cm-math-chaos` requires `cm-math-geometry`
- `cm-math-chaos` requires `cm-math-balances`
- `cm-math-chaos-examples` requires `cm-math-dynamics`
- `cm16-stability-perturbations-and-chaos` requires `cm-math-chaos`
- `cm16-stability-perturbations-and-chaos-examples` requires `cm-math-chaos`
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
