# Step 5 adjudication — group **p**, run `physics-cm-qm-gr-79-2026-10-11`

You are the group Alpha for batches 13, 14, 15: 3 A/B pair(s), 6 page(s), 54 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **13**: `research/physics-cm-qm-gr-79-2026-10-11-batch-13-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **14**: `research/physics-cm-qm-gr-79-2026-10-11-batch-14-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **15**: `research/physics-cm-qm-gr-79-2026-10-11-batch-15-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 13 | `cm-math-chaos` | A | non-relativistic-classical-mechanics-mathematics | 105 | `cm-math-canonical`, `completeness-and-uniform-continuity`, `construction-of-r-via-cauchy-sequences`, `cm-math-dynamics`, `cm-math-geometry`, `cm-math-balances` |
| 13 | `cm-math-chaos-examples` | B | non-relativistic-classical-mechanics-mathematics | 106 | `cm-math-chaos`, `cm-math-dynamics` |
| 14 | `cm-math-kam` | A | non-relativistic-classical-mechanics-mathematics | 107 | `analytic-majorants-and-the-cauchy-kovalevskaya-theorem`, `analyticity-liouville-and-morera`, `cm-math-canonical`, `goursat-and-cauchys-theorem-in-a-convex-domain`, `holomorphic-functions-of-several-variables`, `complex-differentiability-and-cauchy-riemann`, `construction-of-r-via-cauchy-sequences`, `fubini-and-change-of-variables`, `contour-integration`, `fejer-and-poisson-summability-of-fourier-series`, `bounded-linear-operators-and-quotient-spaces`, `connectedness`, `the-exponential-function`, `cm-math-dynamics` |
| 14 | `cm-math-kam-examples` | B | non-relativistic-classical-mechanics-mathematics | 108 | `cm-math-kam` |
| 15 | `cm-math-fluid` | A | non-relativistic-classical-mechanics-mathematics | 109 | `cm-math-continuum`, `orthonormal-bases-parseval-and-fourier-series`, `complex-lp-spaces-and-test-function-conventions`, `measures-and-their-basic-properties`, `the-real-gamma-and-beta-functions`, `uniform-spaces`, `subspaces-products-and-quotients`, `the-exponential-function`, `fejer-and-poisson-summability-of-fourier-series`, `product-measures-and-the-fubini-tonelli-theorems`, `rn-as-a-normed-space` |
| 15 | `cm-math-fluid-examples` | B | non-relativistic-classical-mechanics-mathematics | 110 | `cm-math-fluid` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `cm-math-chaos` — Cm Math Chaos (16 item(s))

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

### `cm-math-chaos-examples` — Cm Math Chaos — Examples (5 item(s))

- `ex-cm-chaos-contraction-and-coded-fixed-sequence-checks` · example — Explicit constants at $a=100$: the contraction factor, the fixed points $r_\pm$ and the constant-code solutions
- `ex-cm-chaos-slope-transform-fixed-point-checks` · example — The constant-code slope transform at $a=100$: the invariant slope of $h\mapsto1/(2r_+-h)$ and the cone constants
- `ex-cm-chaos-finite-word-homoclinic-code-checks` · example — The single-flip code at $a=100$: a nonperiodic coded orbit converging to the fixed point at both ends
- `ex-cm-chaos-pulse-and-rotation-endpoint-checks` · example — The $\delta=0$ endpoint computation: the free rotation $(q,p)\mapsto(p,-q)$, the kick $(q,p)\mapsto(q,p+q^2-a)$ and $K\circ R_0=F$
- `ex-cm-chaos-perturbed-root-and-margin-checks` · example — Explicit root margins at $a=100$: endpoint signs $25$ and $43$, and $d=2/13$ for $\eta=1$

### `cm-math-kam` — Cm Math Kam (14 item(s))

- `def-holomorphic-kam-domain-and-diophantine-labels` · definition — Analytic KAM data: angular tori, action-angle neighbourhoods, Fourier cutoffs and Diophantine frequency labels
- `lem-cauchy-fourier-and-lattice-shell-bounds` · lemma — Fourier decay, Cauchy derivative bounds, lattice shell counts and the exponential small-divisor sums on action-angle neighbourhoods
- `lem-truncated-homological-equation-with-conservative-loss` · lemma — The linear homological equation $\nu\cdot\partial_\vartheta u=v$ on a Diophantine label set, with uniform parameter bounds and conservative loss
- `lem-kam-affine-taylor-fourier-truncation` · lemma — Affine Taylor splitting in the actions and conservative Fourier truncation of a small perturbation
- `lem-kam-generator-flow-and-remainder-bound` · lemma — One KAM step: the affine generator, its canonical time-one flow, and the quadratic remainder bound
- `lem-frequency-reparametrization-by-contraction` · lemma — Elimination of the frequency shift by a holomorphic contraction retraction
- `lem-kam-parameter-sequences-satisfy-all-step-hypotheses` · lemma — The KAM parameter sequence: every step satisfies the smallness, truncation, parameter and contraction hypotheses
- `lem-kam-composed-map-and-derivative-convergence` · lemma — Convergence of the composed KAM transformations, with derivative and frequency-Lipschitz bounds
- `thm-parameter-kam-torus-invariance-and-lagrangianity` · theorem — The parameter KAM limit: invariant quasi-periodic motion with frequency $\nu$ and Lagrangian images
- `lem-kam-limit-is-an-embedding` · lemma — The KAM limit parametrisation is an embedding of the torus: injectivity modulo $2\pi$, rank-$n$ differential and Lipschitz inverse
- `lem-nondegenerate-frequency-reduction-and-alpha-square-smallness` · lemma — Nondegenerate frequency reduction: translating the action variable by the inverse frequency map and the $\varepsilon\le c\alpha^2$ smallness
- `lem-diophantine-resonance-slab-measure` · lemma — Small-divisor slabs and the positive measure of the Diophantine set: the resonance covering has measure $O(\alpha)$
- `thm-positive-measure-analytic-kam-family` · theorem — Positive-measure families of invariant Lagrangian tori for nondegenerate real analytic Hamiltonians: persistence for $\varepsilon\le c\alpha^2$
- `lem-kam-conjugation-symmetry-of-the-construction` · lemma — Conjugation symmetry of the KAM construction: real perturbations produce real tori

### `cm-math-kam-examples` — Cm Math Kam — Examples (1 item(s))

- `ex-two-rotor-kam-model-with-units` · example — A two-rotor model with units: dimensionless normalisation, Diophantine measure and the conditional KAM family

### `cm-math-fluid` — Cm Math Fluid (15 item(s))

- `def-periodic-vector-sobolev-space-and-leray-projection` · definition — Periodic vector Sobolev spaces on the three-torus, the weight family, and the Leray projection
- `lem-cm-lattice-shell-count-and-weight-sums` · lemma — Lattice ball and shell counts and weight sums on the frequency lattice
- `lem-cm-integral-and-ftc-for-continuous-normed-space-curves` · lemma — Riemann integration of continuous curves in a complete normed space, with the fundamental theorem of calculus and coefficient functionals
- `lem-fourier-lattice-sobolev-embedding` · lemma — Sobolev embedding on the torus: $H^\sigma\subseteq C^j$ for $\sigma>j+3/2$, with continuous representatives
- `lem-discrete-young-and-sobolev-product` · lemma — Discrete Young inequality, the Sobolev product bound, and the transport product bound on the torus
- `lem-tame-transport-commutator` · lemma — The transport term is orthogonal to itself and the tame commutator estimate $\|[\Lambda^m,u\cdot\nabla]u\|_{L^2}\le C_m\|u\|_{H^m}\|u\|_{H^s}$
- `lem-fluid-galerkin-coefficient-ivp` · lemma — The Galerkin coefficient system: finite-dimensional invariance, local Lipschitz property, and the unique maximal approximation on the torus
- `lem-fluid-energy-common-lifespan` · lemma — The higher-order energy inequality and a common Galerkin lifespan with $\|u_N(t)\|_{H^s}\le2Y_0$
- `lem-high-sobolev-norms-share-base-lifespan` · lemma — Finite initial higher Sobolev norms give uniform Galerkin bounds on the common base interval
- `lem-fourier-tail-diagonal-compact-convergence` · lemma — Diagonal extraction of a converging Fourier subsequence from high-norm bounds and the tail estimate
- `lem-cm-strong-solution-smoothness-bootstrap` · lemma — A strong solution of the projected periodic equation with all Sobolev norms continuous in time is $C^\infty$
- `thm-local-smooth-periodic-euler-viscous-solution` · theorem — Local smooth solutions of the periodic incompressible Euler and constant-viscosity equations on $\mathbb T^3$
- `lem-periodic-pressure-reconstruction` · lemma — Reconstruction of the periodic pressure from the velocity: $\nabla p=-(I-P)((u\cdot\nabla)u)$ and $\Delta p=-\sum_{i,j}\partial_i\partial_j(u_iu_j)$
- `thm-fluid-uniqueness-and-continuous-dependence` · theorem — Uniqueness of smooth periodic solutions and continuous dependence in $H^{s-1}$ on the common local interval
- `rem-local-versus-known-open-global-fluid-scope` · remark — Scope of the local periodic result: what is proved, what is not, and the known open global problem

### `cm-math-fluid-examples` — Cm Math Fluid — Examples (3 item(s))

- `ex-cm-leray-projection-explicit-computations` · example — Explicit Leray projection computations on $\mathbb T^3$: gradients, a mixed field, and a divergence-free mode
- `ex-cm-plane-wave-and-shear-exact-solutions` · example — Exact transverse plane waves, the sheared single mode, and the Taylor-Green vortex in the periodic models
- `cex-cm-absolute-convergence-fails-in-h-zero` · counterexample — FALSE: every $L^2$ field on $\mathbb T^3$ has absolutely convergent Fourier coefficients. An explicit $H^0$ family with $\sum_k|\widehat u(k)|=\infty$

## Your seams

Your pages depend on another group's:

- `cm-math-chaos` requires `cm-math-canonical` (group m, batch 6)
- `cm-math-chaos` requires `cm-math-dynamics` (group l, batch 3)
- `cm-math-chaos` requires `cm-math-geometry` (group l, batch 1)
- `cm-math-chaos` requires `cm-math-balances` (group l, batch 2)
- `cm-math-chaos-examples` requires `cm-math-dynamics` (group l, batch 3)
- `cm-math-kam` requires `cm-math-canonical` (group m, batch 6)
- `cm-math-kam` requires `cm-math-dynamics` (group l, batch 3)
- `cm-math-fluid` requires `cm-math-continuum` (group n, batch 8)

Another group's pages depend on yours:

- `cm16-stability-perturbations-and-chaos` (group k) requires your `cm-math-chaos`
- `cm16-stability-perturbations-and-chaos` (group k) requires your `cm-math-kam`
- `cm16-stability-perturbations-and-chaos-examples` (group k) requires your `cm-math-chaos`
- `cm16-stability-perturbations-and-chaos-examples` (group k) requires your `cm-math-kam`
- `cm17-classical-continua-with-explicit-constitutive-assumptions` (group k) requires your `cm-math-fluid`
- `cm17-classical-continua-with-explicit-constitutive-assumptions-examples` (group k) requires your `cm-math-fluid`

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
