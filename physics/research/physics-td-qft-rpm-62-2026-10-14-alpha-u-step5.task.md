# Step 5 adjudication — group **u**, run `physics-td-qft-rpm-62-2026-10-14`

You are the group Alpha for batches 12, 14, 17: 3 A/B pair(s), 6 page(s), 37 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **12**: `research/physics-td-qft-rpm-62-2026-10-14-batch-12-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **14**: `research/physics-td-qft-rpm-62-2026-10-14-batch-14-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **17**: `research/physics-td-qft-rpm-62-2026-10-14-batch-17-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/physics-td-qft-rpm-62-2026-10-14-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 12 | `td-math-mixture-dynamics-and-shells` | A | thermodynamics-mathematics | 280 | `fubini-and-change-of-variables`, `improper-and-parameter-dependent-multiple-integrals`, `product-measures-and-the-fubini-tonelli-theorems`, `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory`, `lebesgue-measure-on-euclidean-space`, `brownian-motion-construction-and-continuity`, `the-ito-integral-with-respect-to-brownian-motion`, `the-ergodic-theorems-of-von-neumann-and-birkhoff`, `td-math-ensembles-and-limits`, `fredholm-determinants-and-the-lidskii-trace-formula`, `hamiltonian-mechanics-and-completely-integrable-systems`, `the-integral-logarithm-and-its-characterisations`, `complex-differentiability-and-cauchy-riemann` |
| 12 | `td-math-mixture-dynamics-and-shells-examples` | B | thermodynamics-mathematics | 293 | `td-math-mixture-dynamics-and-shells` |
| 14 | `td-math-continuum-pressure` | A | thermodynamics-mathematics | 281 | `product-measures-and-the-fubini-tonelli-theorems`, `td-math-ensembles-and-limits`, `measurable-functions-and-simple-approximation`, `limsup-and-subsequential-limits`, `limits-of-real-functions`, `lebesgue-measure-on-euclidean-space`, `finite-counting-and-binomial-coefficients`, `sigma-algebras-and-borel-sets`, `measures-and-their-basic-properties` |
| 14 | `td-math-continuum-pressure-examples` | B | thermodynamics-mathematics | 294 | `td-math-continuum-pressure` |
| 17 | `td-math-spatial-measure-and-information` | A | thermodynamics-mathematics | 295 | `nets-and-filters`, `infinite-product-measures-and-kolmogorov-extension`, `modes-of-convergence-for-random-variables`, `conditional-distributions-and-regular-conditional-probability`, `martingale-inequalities-and-convergence`, `the-ergodic-theorems-of-von-neumann-and-birkhoff`, `td-math-ensembles-and-limits`, `reflexivity-and-eberlein-smulian`, `banach-valued-integration-and-the-radon-nikodym-property`, `norming-and-separation-under-hahn-banach`, `monadicity-and-becks-theorem`, `weak-and-weak-star-topologies`, `the-logarithm-and-general-powers` |
| 17 | `td-math-spatial-measure-and-information-examples` | B | thermodynamics-mathematics | 296 | `td-math-spatial-measure-and-information` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `td-math-mixture-dynamics-and-shells` — Mixture Dynamics And Shells (13 item(s))

- `def-tdmath-mixture-generator-space-and-energy` · definition — Compact phase-generator mixture
- `def-tdmath-elastic-collision-kernel` · definition — Elastic collision model and weak collision identity
- `def-tdmath-finite-site-shell-and-canonical-law` · definition — Finite-site canonical law and narrow microcanonical shell
- `def-tdmath-ornstein-uhlenbeck-equation` · definition — Ornstein–Uhlenbeck integral equation
- `def-tdmath-regular-energy-shell` · definition — Regular energy shell and weighted area measure
- `thm-tdmath-continuous-ideal-gas-block-limit` · theorem — Continuous ideal-gas bulk limit and finite-block bridge
- `thm-tdmath-hamiltonian-measure-and-recurrence` · theorem — Hamiltonian volume, recurrence, and ergodic scope
- `thm-tdmath-compact-continuous-mixture-attainment` · theorem — Attainment and finite support for compact continuous mixtures
- `thm-tdmath-independent-microcanonical-block-limit` · theorem — Finite-site microcanonical and canonical block equivalence
- `thm-tdmath-ornstein-uhlenbeck-model` · theorem — Ornstein–Uhlenbeck equation, transition law, and fluctuations
- `thm-tdmath-regular-collision-entropy` · theorem — Conditional Boltzmann entropy inequality and equality form
- `thm-tdmath-regular-energy-shell-measure` · theorem — Coarea and invariant measure on compact regular energy shells
- `thm-tdmath-discrete-quantum-cesaro-dephasing` · theorem — Trace-norm Cesàro dephasing for a discrete Gibbs spectrum

### `td-math-mixture-dynamics-and-shells-examples` — Mixture Dynamics And Shells — Examples (4 item(s))

- `cex-tdmath-noncompact-mixture-nonattainment` · counterexample — Noncompact mixtures can have an unattained energy infimum
- `cex-tdmath-nonconcave-ensemble-inequivalence` · counterexample — A controlled nonconcave entropy model with ensemble inequivalence
- `cex-tdmath-nonergodic-volume-flow` · counterexample — A finite-volume Hamiltonian map that is not ergodic
- `ex-tdmath-pure-state-versus-average-entropy` · example — Pure-state entropy and entropy of a dephased average

### `td-math-continuum-pressure` — Continuum Pressure (5 item(s))

- `def-tdmath-stable-power-tempered-particle-model` · definition — Stable power-tempered pair-potential model
- `lem-tdmath-measure-integral-agrees-with-root-lebesgue-integral` · lemma — The thermodynamics measure integral agrees with the shared nonnegative integral
- `lem-tdmath-particle-exponential-cutoff` · lemma — Stability gives finite grand normalization and an exponential particle cutoff
- `lem-tdmath-separated-cube-tail-bound` · lemma — Power tempering bounds interactions between separated cubes
- `thm-tdmath-stable-tempered-free-cube-grand-pressure` · theorem — Finite free-cube grand pressure for stable power-tempered pair potentials

### `td-math-continuum-pressure-examples` — Continuum Pressure — Examples (2 item(s))

- `ex-tdmath-repulsive-power-tail` · example — A singular repulsive power tail is stable
- `ex-tdmath-hard-core-attractive-power-tail` · example — A hard core stabilizes an attractive power tail

### `td-math-spatial-measure-and-information` — Spatial Measure And Information (10 item(s))

- `def-tdmath-finite-region-relative-entropy` · definition — Finite-Region Relative Entropy
- `lem-tdmath-counts-generate-configuration-sigma` · lemma — Counts Generate the Sigma-Algebra of Finite Configurations
- `lem-tdmath-relative-entropy-variational-and-chain-rules` · lemma — Relative Entropy Variational, Chain, and Conditioning Rules
- `def-tdmath-poisson-configuration-reference` · definition — Poisson Configuration Reference
- `def-tdmath-local-tame-topology` · definition — Local-Tame Topology
- `thm-tdmath-poisson-reference-count-properties` · theorem — Poisson Reference Counts and Translation Invariance
- `thm-tdmath-specific-entropy-density` · theorem — Specific Relative Entropy Density
- `lem-tdmath-conditional-log-density-convergence` · lemma — Conditional Log-Density Convergence for the Poisson Reference
- `thm-tdmath-local-tame-entropy-compactness` · theorem — Compactness of Finite-Specific-Entropy Levels in the Local-Tame Topology
- `thm-tdmath-spatial-mean-information` · theorem — Spatial Mean-Information Theorem

### `td-math-spatial-measure-and-information-examples` — Spatial Measure And Information — Examples (3 item(s))

- `ex-tdmath-unit-poisson-reference-information-zero` · example — The Reference Has Zero Specific Relative Entropy
- `ex-tdmath-poisson-intensity-information-density` · example — Specific Relative Entropy of a Poisson Law with Changed Intensity
- `ex-tdmath-superlinear-count-test-is-not-tame` · example — A Superlinear Count Test Is Not Local-Tame

## Your seams

Your pages depend on another group's:

- `td-math-mixture-dynamics-and-shells` requires `td-math-ensembles-and-limits` (group t, batch 11)
- `td-math-continuum-pressure` requires `td-math-ensembles-and-limits` (group t, batch 11)
- `td-math-spatial-measure-and-information` requires `td-math-ensembles-and-limits` (group t, batch 11)

Another group's pages depend on yours:

- `td-phases-and-limits` (group q) requires your `td-math-mixture-dynamics-and-shells`
- `td-phases-and-limits` (group q) requires your `td-math-continuum-pressure`
- `td-finite-statistical-bridge` (group q) requires your `td-math-continuum-pressure`
- `td-finite-statistical-bridge` (group q) requires your `td-math-mixture-dynamics-and-shells`
- `td-continuum-heat-model` (group r) requires your `td-math-mixture-dynamics-and-shells`
- `td-math-interacting-ensemble-geometry` (group v) requires your `td-math-continuum-pressure`
- `td-math-interacting-ensemble-geometry` (group v) requires your `td-math-mixture-dynamics-and-shells`
- `td-math-interacting-ensemble-geometry` (group v) requires your `td-math-spatial-measure-and-information`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/physics-td-qft-rpm-62-2026-10-14-judge.jsonl` yourself before reporting nothing to do —
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

# Step 5 batch adjudication, `physics-td-qft-rpm-62-2026-10-14`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
