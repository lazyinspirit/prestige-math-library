# Step 5 adjudication — group **o**, run `physics-cm-qm-gr-79-2026-10-11`

You are the group Alpha for batches 10, 11, 12: 3 A/B pair(s), 6 page(s), 57 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **10**: `research/physics-cm-qm-gr-79-2026-10-11-batch-10-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **11**: `research/physics-cm-qm-gr-79-2026-10-11-batch-11-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **12**: `research/physics-cm-qm-gr-79-2026-10-11-batch-12-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/physics-cm-qm-gr-79-2026-10-11-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 10 | `cm-math-numerical` | A | non-relativistic-classical-mechanics-mathematics | 99 | `analyticity-liouville-and-morera`, `cm-math-canonical`, `cm-math-dynamics`, `compactness-in-metric-spaces`, `completeness-and-uniform-continuity`, `complex-differentiability-and-cauchy-riemann`, `complex-power-series-and-analytic-functions`, `contour-integration`, `field-extensions-and-the-complex-numbers`, `finite-counting-and-binomial-coefficients`, `fubini-and-change-of-variables`, `goursat-and-cauchys-theorem-in-a-convex-domain`, `inverse-and-implicit-function-theorems`, `line-integrals-and-the-gradient-theorem`, `linear-maps-rank-nullity-and-quotient-spaces`, `matrices-and-the-matrix-of-a-linear-map`, `metric-spaces`, `mixed-partials-taylor-and-extrema`, `norming-and-separation-under-hahn-banach`, `picard-lindelof-and-first-order-odes`, `properties-of-the-integral-and-the-working-ftc`, `rn-as-a-normed-space`, `the-exponential-function`, `the-inverse-function-theorem-completed`, `the-total-derivative` |
| 10 | `cm-math-numerical-examples` | B | non-relativistic-classical-mechanics-mathematics | 100 | `cm-math-numerical` |
| 11 | `cm-math-evidence` | A | non-relativistic-classical-mechanics-mathematics | 101 | `measures-and-their-basic-properties`, `the-lebesgue-integral-and-the-convergence-theorems`, `hilbert-space-geometry-and-riesz-representation`, `mixed-partials-taylor-and-extrema`, `probability-spaces-random-variables-and-expectation`, `rn-as-a-normed-space`, `sigma-algebras-and-borel-sets`, `the-inverse-function-theorem-completed`, `the-spectral-theorem-and-singular-value-decomposition`, `the-total-derivative`, `vector-spaces-and-subspaces`, `foundations-of-the-real-numbers`, `matrices-and-the-matrix-of-a-linear-map`, `measurable-functions-and-simple-approximation`, `suprema-and-infima`, `weak-laws-and-series-of-independent-random-variables`, `independence-borel-cantelli-and-zero-one-laws`, `construction-of-r-via-cauchy-sequences` |
| 11 | `cm-math-evidence-examples` | B | non-relativistic-classical-mechanics-mathematics | 102 | `cm-math-evidence`, `the-derivative-and-mean-value-theorems`, `finite-probability-spaces-and-random-variables` |
| 12 | `cm-math-verification` | A | non-relativistic-classical-mechanics-mathematics | 103 | `cm-math-approximation`, `cm-math-rigid`, `cm-math-variations`, `darboux-lhopital-and-taylor` |
| 12 | `cm-math-verification-examples` | B | non-relativistic-classical-mechanics-mathematics | 104 | `cm-math-verification`, `cm-math-variations`, `cm-math-rigid`, `cm-math-approximation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `cm-math-numerical` — Cm Math Numerical (22 item(s))

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

### `cm-math-numerical-examples` — Cm Math Numerical — Examples (2 item(s))

- `ex-cm-verlet-map-of-the-harmonic-oscillator` · example — Oscillator Verlet: a preserved quadratic form and bounded original-energy oscillation
- `ex-cm-analytic-pendulum-verlet-domain-check` · example — Analytic pendulum: checking the complex bounds and compact-iterate hypothesis

### `cm-math-evidence` — Cm Math Evidence (12 item(s))

- `def-cm-measurement-model` · definition — Measurement models and additive-error observation models
- `def-cm-calibration-rule` · definition — Calibration data and calibration rules
- `def-cm-iid-sampling-model` · definition — Repeated-observation sampling models with IID and finite-variance hypotheses
- `lem-cm-finite-iid-sample-mean-bound` · lemma — Finite IID sample-mean variance and Chebyshev bound
- `def-cm-covariance-matrix-of-a-random-vector` · definition — Mean vector and covariance matrix of a square-integrable random vector
- `lem-cm-linearized-propagation-of-covariance` · lemma — The covariance of the linearization is $A\Sigma A^{\mathsf T}$
- `lem-cm-uniform-second-order-remainder-bound` · lemma — A uniform Hessian bound controls the second-order Taylor remainder
- `cor-cm-linearization-error-bounds` · corollary — Mean, mean-square and covariance bounds for second-order linearization error
- `def-cm-statistical-test-and-size` · definition — Statistical tests, rejection regions, power functions and size
- `def-cm-confidence-set-and-coverage` · definition — Confidence sets and their coverage level
- `def-cm-likelihood-function` · definition — Likelihood functions for a dominated parametric family
- `rem-cm-inference-and-uncertainty-scope` · remark — Scope of the sampling, propagation and inference interfaces

### `cm-math-evidence-examples` — Cm Math Evidence — Examples (6 item(s))

- `ex-cm-math-evidence-pendulum-propagation` · example — Symbolic two-input propagation of a period–length model
- `ex-cm-math-evidence-exact-versus-linear-variance` · example — Exact variance against propagated variance for a nonlinear observation map
- `ex-cm-math-evidence-chebyshev-sample-mean-check` · example — Finite check of the IID sample-mean variance and Chebyshev bound
- `ex-cm-math-evidence-remainder-bound-check` · example — Equality and strictness in the uniform second-order remainder bound
- `cex-cm-math-evidence-confidence-coverage-is-not-posterior` · counterexample — Coverage level is not the posterior probability of the realized confidence set
- `cex-cm-math-evidence-propagation-is-not-exact-for-nonlinear-maps` · counterexample — The propagated covariance is not the exact covariance of a nonlinear observation map

### `cm-math-verification` — Cm Math Verification (10 item(s))

- `def-cm-second-variation-of-the-action` · definition — The fixed-endpoint second variation of a time-dependent action at a curve
- `lem-cm-second-variation-formula` · lemma — The second variation of a time-dependent action: twice differentiability of the fixed-endpoint family and the Hessian integral formula
- `prop-cm-oscillator-second-variation-signs` · proposition — Second variation of the oscillator action on a finite interval: both signs for $T>\pi/\omega$ and the value at $T=\pi/\omega$
- `prop-cm-oscillator-boundary-value-nonuniqueness` · proposition — The undamped oscillator: Dirichlet non-uniqueness at $T=n\pi/\omega$ despite unique initial-value solutions
- `def-cm-inertia-tensor-about-a-point` · definition — The inertia tensor of a finite bounded Borel measure about any point of $\mathbb R^3$
- `lem-cm-inertia-tensor-about-a-point-is-finite` · lemma — Finiteness and a uniform bound for the entries of the inertia tensor about an arbitrary point
- `thm-cm-parallel-axis-theorem` · theorem — Parallel-axis theorem: the inertia tensor about a displaced point of a centred mass distribution
- `prop-cm-two-mass-spring-modes` · proposition — Two equal masses with two outer springs and a coupling spring: eigenmodes, decoupling and the explicit normal frequencies
- `prop-cm-pendulum-small-angle-linearization-bound` · proposition — The pendulum field near the downward equilibrium: bounded force derivative, cubic remainder and the finite-time small-angle error bound
- `rem-cm-verification-scope-and-limits` · remark — Scope and limits of the verification items on this page

### `cm-math-verification-examples` — Cm Math Verification — Examples (5 item(s))

- `ex-cm-oscillator-saddle-second-variation-checks` · example — An explicit saddle of the oscillator action at $T=2\pi$: the two variations $\sin(t/2)$ and $\sin(3t/2)$
- `ex-cm-oscillator-boundary-value-nonuniqueness-check` · example — Two distinct oscillator solutions with the same zero endpoints at $T=\pi$, and their common action value
- `ex-cm-parallel-axis-two-point-masses` · example — Parallel-axis theorem checked on two equal point masses on the third axis
- `ex-cm-two-mass-modes-numerical-check` · example — Two-mass spring eigenmodes at explicit parameters: eigenrelations, a mode solution, and the zero-frequency case
- `ex-cm-pendulum-linearization-error-check` · example — The pendulum linearisation bound at $g=l=1$: exact error expression for the data $\delta=1/100$, $T=1$

## Your seams

Your pages depend on another group's:

- `cm-math-numerical` requires `cm-math-canonical` (group m, batch 6)
- `cm-math-numerical` requires `cm-math-dynamics` (group l, batch 3)
- `cm-math-verification` requires `cm-math-approximation` (group n, batch 7)
- `cm-math-verification` requires `cm-math-rigid` (group n, batch 9)
- `cm-math-verification` requires `cm-math-variations` (group m, batch 4)
- `cm-math-verification-examples` requires `cm-math-variations` (group m, batch 4)
- `cm-math-verification-examples` requires `cm-math-rigid` (group n, batch 9)
- `cm-math-verification-examples` requires `cm-math-approximation` (group n, batch 7)

Another group's pages depend on yours:

- `cm04-one-dimensional-conservative-and-dissipative-models` (group g) requires your `cm-math-verification`
- `cm04-one-dimensional-conservative-and-dissipative-models-examples` (group g) requires your `cm-math-verification`
- `cm07-stationary-action-and-lagrangian-dynamics` (group h) requires your `cm-math-verification`
- `cm09-coupled-oscillations-and-approximation-examples` (group h) requires your `cm-math-verification`
- `cm10-rigid-body-configuration-and-inertia` (group i) requires your `cm-math-verification`
- `cm10-rigid-body-configuration-and-inertia-examples` (group i) requires your `cm-math-verification`
- `cm13-symplectic-geometry-and-canonical-methods` (group j) requires your `cm-math-numerical`
- `cm13-symplectic-geometry-and-canonical-methods-examples` (group j) requires your `cm-math-numerical`
- `cm18-measurement-uncertainty-and-later-bridges` (group k) requires your `cm-math-evidence`
- `cm18-measurement-uncertainty-and-later-bridges` (group k) requires your `cm-math-numerical`
- `cm18-measurement-uncertainty-and-later-bridges-examples` (group k) requires your `cm-math-evidence`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/physics-cm-qm-gr-79-2026-10-11-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

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

# Step 5 batch adjudication, `physics-cm-qm-gr-79-2026-10-11`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
