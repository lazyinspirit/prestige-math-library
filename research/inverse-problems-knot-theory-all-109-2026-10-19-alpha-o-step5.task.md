# Step 5 adjudication — group **o**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the group Alpha for batches 43, 44, 45: 3 A/B pair(s), 6 page(s), 47 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **43**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-43-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **44**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-44-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **45**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-45-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/inverse-problems-knot-theory-all-109-2026-10-19-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 43 | `inverse-scattering-and-born-linearization` | A | inverse-problems | 3082 | `inverse-problems-identifiability-and-stability`, `linear-operators-pseudoinverses-and-picard-criteria`, `volume-integral-scattering-and-partial-wave-error` |
| 43 | `inverse-scattering-and-born-linearization-examples` | B | inverse-problems | 3083 | `inverse-scattering-and-born-linearization` |
| 44 | `numerical-pde-inversion-and-adjoint-error-control` | A | inverse-problems | 3084 | `nonlinear-inverse-problems-and-tangential-cone-conditions`, `nonlinear-tikhonov-existence-and-stability`, `operator-approximation-and-regularization-error`, `finite-element-pde-constrained-optimization`, `discrete-continuous-and-pde-adjoint-sensitivities`, `finite-element-meshes-and-interpolation`, `hilbert-space-geometry-and-riesz-representation`, `nonsmooth-contact-time-stepping-and-projections` |
| 44 | `numerical-pde-inversion-and-adjoint-error-control-examples` | B | inverse-problems | 3085 | `numerical-pde-inversion-and-adjoint-error-control` |
| 45 | `eit-logarithmic-stability-and-conductivity-classes` | A | inverse-problems | 3086 | `spatial-bv-and-total-variation-regularization`, `calderon-problem-and-cgo-uniqueness`, `fredholm-elliptic-problems-and-the-elliptic-spectrum`, `sobolev-traces-and-zero-boundary-values`, `beltrami-equation-and-measurable-riemann-mapping`, `banach-range-invariance-and-eit-rates` |
| 45 | `eit-logarithmic-stability-and-conductivity-classes-examples` | B | inverse-problems | 3087 | `eit-logarithmic-stability-and-conductivity-classes` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `inverse-scattering-and-born-linearization` — Fixed-frequency inverse scattering and Born linearization (4 item(s))

- `def-ip-fixed-frequency-far-field-data` · definition — Fixed-frequency far-field data on the small-norm volume branch
- `lem-ip-small-contrast-scattering-map-well-defined` · lemma — Well-definedness of the small-norm fixed-frequency scattering map
- `lem-ip-born-linearization-of-the-scattering-map` · lemma — The first Born data are the Fréchet linearization at zero contrast
- `alg-ip-regularized-born-reconstruction` · algorithm — One-pass filtered reconstruction from finite Born data

### `inverse-scattering-and-born-linearization-examples` — Fixed-frequency inverse scattering and Born linearization — Examples and Counterexamples (3 item(s))

- `ex-ip-outside-neumann-norm-ball` · example — A compactly supported contrast with volume-operator norm greater than two
- `ex-ip-small-volume-contrast-in-born-regime` · example — A unit contrast on a small cube lies in the Born regime
- `ex-ip-limited-aperture-born-data-have-a-nontrivial-kernel` · example — Finite limited-aperture Born samples miss a nonzero contrast

### `numerical-pde-inversion-and-adjoint-error-control` — PDE-constrained inversion and adjoint error control (6 item(s))

- `def-ip-pde-solver-admissibility-contract` · definition — Finite-element PDE solver admissibility and certificate contract
- `lem-ip-finite-element-reduced-gradient-from-discrete-adjoint` · lemma — The finite-element discrete adjoint gives the reduced gradient
- `lem-ip-linear-finite-element-solve-residual-controls-state-error` · lemma — Certified inverse bounds turn finite-element solve residuals into state and adjoint error bounds
- `prop-ip-discrete-adjoint-gradient-and-residual-status` · proposition — Certified discrete-adjoint residuals give sound finite statuses
- `alg-ip-finite-element-pde-tikhonov` · algorithm — Finite-budget finite-element PDE Tikhonov inversion
- `thm-ip-finite-element-pde-tikhonov-status-soundness-and-termination` · theorem — Finite-element PDE Tikhonov statuses are sound and terminate

### `numerical-pde-inversion-and-adjoint-error-control-examples` — PDE-constrained inversion and adjoint error control — Examples and Counterexamples (3 item(s))

- `ex-ip-pde-cfl-invalid-iterate` · example — A CFL-violating finite-element iterate is rejected before inversion
- `cex-ip-pde-biased-under-solved-adjoint-gradient` · counterexample — An unchecked under-solved adjoint can reverse the reduced gradient
- `ex-ip-finite-element-mesh-error-at-zero-solve-residual` · example — A zero algebraic solve residual leaves a separate finite-element model error

### `eit-logarithmic-stability-and-conductivity-classes` — Logarithmic EIT stability on explicit conductivity classes (28 item(s))

- `lem-ip-calderon-bourgain-cutoff-estimates` · lemma — Uniform cutoff estimates at the CGO characteristic sphere
- `lem-ip-planar-cauchy-beurling-and-near-two-inversion` · lemma — Planar Cauchy and Beurling transforms and near-two Beltrami inversion
- `lem-ip-calderon-averaged-negative-bourgain-estimate` · lemma — Circle-averaged negative Bourgain estimate for rough vector fields
- `lem-ip-planar-beltrami-caccioppoli-translation-tail` · lemma — Beltrami Caccioppoli translation and Fourier-tail estimates
- `lem-ip-planar-principal-beltrami-inverse-gradient-integrability` · lemma — Principal Beltrami solutions and uniform inverse-gradient integrability
- `lem-ip-planar-scattering-topological-zero-separation` · lemma — Logarithmic zero separation for perturbed scattering phase equations
- `def-ip-calderon-admissible-conductivity-class` · definition — Calderón admissible conductivity classes
- `lem-ip-calderon-disk-inclusion-perimeter-scaling` · lemma — Scaling the perimeter of a disk inclusion
- `lem-ip-calderon-rough-potential-cgo-construction` · lemma — Quantitative CGO construction for C1alpha conductivity potentials
- `lem-ip-planar-conductivity-l2-interpolation` · lemma — Conductivity L2 recovery from fixed-parameter Beltrami solution stability
- `lem-ip-planar-measurable-beltrami-cgo-solutions` · lemma — Measurable-coefficient Beltrami CGO solutions and principal phases
- `lem-ip-planar-qc-composition-preserves-power-translation-moduli` · lemma — Positive power translation moduli after principal quasiconformal composition
- `lem-ip-planar-oscillatory-beltrami-phase-decay` · lemma — Power decay for oscillatory complex-linear Beltrami phases
- `def-ip-calderon-weak-dn-map-for-bounded-conductivities` · definition — Weak Dirichlet-to-Neumann map for bounded conductivities
- `lem-ip-calderon-fixed-collar-c1alpha-extension` · lemma — Fixed-collar extension of C1alpha conductivities
- `lem-ip-planar-beltrami-cgo-power-phase-decay` · lemma — Uniform power phase decay for Beltrami CGO solutions
- `lem-ip-planar-forced-beltrami-similarity-estimate` · lemma — Quantitative forced similarity estimate for real-linear Beltrami equations
- `lem-ip-calderon-rough-dn-map-wellposedness` · lemma — Well-posedness of the weak conductivity Dirichlet-to-Neumann map
- `lem-ip-planar-conductivity-cgo-logarithmic-phases` · lemma — Conductivity CGO solutions and continuous logarithmic phases
- `lem-ip-bv-translation-modulus-for-conductivity` · lemma — BV translation modulus for the extended conductivity
- `lem-ip-calderon-radial-inclusion-dn-spectrum` · lemma — DN spectrum of a concentric radial conductivity inclusion
- `lem-ip-calderon-rough-alessandrini-and-quotient-norm` · lemma — Rough conductivity Alessandrini identity and constant-quotient norm
- `lem-ip-planar-scattering-dbar-equation-and-parameter-bounds` · lemma — Planar scattering dbar equation and uniform parameter bounds
- `lem-ip-calderon-higher-dimensional-cgo-fourier-logarithmic-stability` · lemma — Higher-dimensional C1alpha logarithmic Calderón stability
- `lem-ip-planar-dn-to-scattering-lipschitz-estimate` · lemma — Uniform DN-to-scattering stability for planar conductivities
- `lem-ip-planar-dn-enclosure-and-reciprocal-comparison` · lemma — Planar DN comparison under disk enclosure and conductivity reciprocation
- `lem-ip-calderon-planar-beltrami-dbar-logarithmic-stability` · lemma — Planar BV logarithmic Calderón stability
- `thm-ip-calderon-logarithmic-l2-stability` · theorem — Logarithmic L2 stability for Calderón conductivity classes

### `eit-logarithmic-stability-and-conductivity-classes-examples` — Logarithmic EIT stability on explicit conductivity classes — Examples and Counterexamples (3 item(s))

- `ex-ip-calderon-smooth-c1alpha-conductivity-class` · example — A compactly supported smooth conductivity in the higher-dimensional class
- `ex-ip-calderon-discontinuous-bv-conductivity-class` · example — A discontinuous inclusion in the planar BV class
- `cex-ip-calderon-logarithmic-modulus-not-lipschitz` · counterexample — A shrinking inclusion rules out uniform Lipschitz stability on the BV class

## Your seams

Your pages depend on another group's:

- `inverse-scattering-and-born-linearization` requires `inverse-problems-identifiability-and-stability` (group a, batch 1)
- `inverse-scattering-and-born-linearization` requires `linear-operators-pseudoinverses-and-picard-criteria` (group a, batch 2)
- `numerical-pde-inversion-and-adjoint-error-control` requires `nonlinear-inverse-problems-and-tangential-cone-conditions` (group i, batch 25)
- `numerical-pde-inversion-and-adjoint-error-control` requires `nonlinear-tikhonov-existence-and-stability` (group i, batch 26)
- `numerical-pde-inversion-and-adjoint-error-control` requires `operator-approximation-and-regularization-error` (group b, batch 4)
- `eit-logarithmic-stability-and-conductivity-classes` requires `spatial-bv-and-total-variation-regularization` (group k, batch 31)
- `eit-logarithmic-stability-and-conductivity-classes` requires `calderon-problem-and-cgo-uniqueness` (group n, batch 41)
- `eit-logarithmic-stability-and-conductivity-classes` requires `banach-range-invariance-and-eit-rates` (group j, batch 30)

Another group's pages depend on yours:

- `neural-operator-eit-inverse-map` (group p) requires your `eit-logarithmic-stability-and-conductivity-classes`
- `inverse-problem-benchmarking-and-shift` (group q) requires your `numerical-pde-inversion-and-adjoint-error-control`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/inverse-problems-knot-theory-all-109-2026-10-19-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `inverse-problems-knot-theory-all-109-2026-10-19`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
