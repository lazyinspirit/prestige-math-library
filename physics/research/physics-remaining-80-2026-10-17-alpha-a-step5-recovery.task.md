# Step 5 adjudication — group **a**, run `physics-remaining-80-2026-10-17`

You are the group Alpha for batches 26, 27, 28: 3 A/B pair(s), 6 page(s), 60 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **26**: `research/physics-remaining-80-2026-10-17-batch-26-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **27**: `research/physics-remaining-80-2026-10-17-batch-27-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **28**: `research/physics-remaining-80-2026-10-17-batch-28-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/physics-remaining-80-2026-10-17-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 26 | `csm-phase-ensembles` | A | classical-statistical-mechanics | 487 | `cm-math-canonical`, `improper-and-parameter-dependent-multiple-integrals`, `td-math-mixture-dynamics-and-shells`, `the-lebesgue-integral-and-the-convergence-theorems`, `em-potentials-and-gauge`, `cm12-legendre-transformation-and-hamiltonian-mechanics`, `td-thermodynamic-framework` |
| 26 | `csm-phase-ensembles-examples` | B | classical-statistical-mechanics | 488 | `csm-phase-ensembles` |
| 27 | `csm-gibbs-lattice` | A | classical-statistical-mechanics | 489 | `csm-phase-ensembles`, `outer-measure-and-the-caratheodory-extension-theorem`, `sigma-algebras-and-borel-sets` |
| 27 | `csm-gibbs-lattice-examples` | B | classical-statistical-mechanics | 490 | `csm-gibbs-lattice` |
| 28 | `csm-continuum-limits` | A | classical-statistical-mechanics | 491 | `csm-gibbs-lattice`, `td-math-interacting-ensemble-geometry` |
| 28 | `csm-continuum-limits-examples` | B | classical-statistical-mechanics | 492 | `csm-continuum-limits` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `csm-phase-ensembles` — Classical configuration, phase and reference spaces (20 item(s))

- `def-csm-phase-space-reference` · definition — Classical configuration, cotangent phase and reference measures
- `thm-csm-equipartition-boundary-lemma` · theorem — Equipartition identity with explicit integrated boundary terms
- `def-csm-statistical-state-observable` · definition — Statistical states, densities, observables and expectations
- `thm-csm-regular-shell-coarea` · theorem — Coarea and invariant probability on compact regular phase shells
- `post-csm-counting-and-physical-observables` · postulate — Classical particle counting and physical observables
- `thm-csm-exponential-normalization-covariance` · theorem — Dominated exponential normalization and covariance
- `thm-csm-kinetic-potential-shell-marginals` · theorem — Kinetic-plus-potential shell marginals and moments
- `thm-csm-liouville-entropy-transport` · theorem — Liouville transport and fine-grained entropy invariance
- `post-csm-canonical-preparation` · postulate — Canonical thermal preparation
- `post-csm-grand-preparation` · postulate — Grand canonical particle-exchange preparation
- `post-csm-isobaric-preparation` · postulate — Isothermal-isobaric joint preparation
- `post-csm-microcanonical-preparation` · postulate — Regular full-shell or finite-band preparation
- `thm-csm-relative-gibbs-variational-principle` · theorem — Reference-relative entropy and Gibbs variational inequality
- `pthm-csm-canonical-momentum-equipartition` · physics-theorem — Canonical momentum distribution and equipartition
- `pthm-csm-canonical-response-identities` · physics-theorem — Canonical energy and fluctuation responses
- `pthm-csm-ensemble-potentials` · physics-theorem — Ensemble entropy and potential identities
- `pthm-csm-grand-response-identities` · physics-theorem — Grand responses in beta and chemical potential
- `pthm-csm-isobaric-response-identities` · physics-theorem — Isobaric volume and enthalpy fluctuations
- `def-csm-static-gauge-coupled-particle-model` · definition — Static electromagnetic coupling and typed canonical momentum
- `pthm-csm-static-gauge-canonical-partition-invariance` · physics-theorem — Finite canonical partition is invariant under static electromagnetic gauge changes

### `csm-phase-ensembles-examples` — Classical configuration, phase and reference spaces — Examples (4 item(s))

- `ex-csm-finite-mixing-count` · example — Finite-size mixing and distinguishability conventions
- `ex-csm-ideal-full-shell` · example — Full ideal-gas shell moments and entropy conventions
- `ex-csm-ideal-canonical-grand` · example — Exact ideal-gas canonical and grand laws
- `ex-csm-ideal-isobaric` · example — Exact finite ideal-gas volume fluctuations

### `csm-gibbs-lattice` — Finite-range lattice interaction and conditional energy (27 item(s))

- `def-csm-finite-range-lattice-interaction` · definition — Finite-range lattice interaction and conditional energy
- `def-csm-stable-superstable-continuum-interaction` · definition — Stability, superstability and regular tails
- `def-csm-gibbs-physical-parameters` · definition — Classical Gibbs quantities and SI reference conventions
- `post-csm-interacting-equilibrium-gibbs` · postulate — Interacting classical Gibbs equilibrium adoption
- `lem-csm-finite-gibbs-variational-identity` · lemma — Finite Gibbs relative entropy and free-energy minimum
- `lem-csm-gibbs-response-covariance` · lemma — Finite Gibbs response and covariance identities
- `lem-csm-lattice-product-and-measure-compactness` · lemma — Finite-alphabet product and probability compactness
- `def-csm-lattice-gibbs-specification` · definition — Lattice Gibbs kernels and DLR states
- `lem-csm-lattice-specification-consistency` · lemma — Conditional Gibbs kernel consistency
- `thm-csm-lattice-dlr-existence` · theorem — Finite-range lattice DLR existence and closed convex state set
- `lem-csm-stationary-dlr-construction` · lemma — Translation-averaged stationary Gibbs state
- `lem-csm-maximal-coupling-and-heat-bath` · lemma — Finite maximal coupling and heat-bath stationary law
- `thm-csm-dobrushin-finite-range-uniqueness` · theorem — Finite-range Dobrushin uniqueness and boundary influence
- `lem-csm-ising-influence-bound` · lemma — Ising influence bounded by hyperbolic tangent
- `thm-csm-ising-high-temperature-state` · theorem — Unique interacting Ising state at sufficient high temperature
- `thm-csm-lattice-van-hove-pressure` · theorem — Bounded lattice pressure on van Hove sets
- `lem-csm-stationary-lattice-entropy-energy` · lemma — Stationary lattice entropy and energy densities
- `thm-csm-lattice-dlr-variational-pressure` · theorem — DLR states attain the bounded lattice pressure variational principle
- `lem-csm-ising-parity-contours` · lemma — Square-lattice even graphs and parity contour separation
- `lem-csm-peierls-energy-injection` · lemma — Peierls contour probability bound
- `thm-csm-ising-low-temperature-coexistence` · theorem — Two-dimensional Ising Gibbs coexistence at low temperature
- `thm-csm-ising-coexistence-pressure-cusp` · theorem — Coexistence implies an Ising pressure cusp
- `thm-csm-ising-chain-convergent-series` · theorem — Exact convergent Ising-chain high-temperature series
- `lem-csm-chain-markov-bridge` · lemma — Positive Ising transfer matrix Markov bridge
- `thm-csm-chain-dlr-uniqueness` · theorem — All-positive-temperature one-dimensional Ising DLR uniqueness
- `pthm-csm-ising-equilibrium-phases` · physics-theorem — Conditional Ising equilibrium phase predictions
- `pthm-csm-pressure-entropy-reference-units` · physics-theorem — Gibbs pressure and entropy with physical reference units

### `csm-gibbs-lattice-examples` — Finite-range lattice interaction and conditional energy — Examples (3 item(s))

- `cex-csm-gibbs-marginals-not-free` · counterexample — Interacting marginals are not free Gibbs laws
- `ex-csm-chain-analytic-interacting-model` · example — Analytic interacting chain and its Gibbs state
- `ex-csm-high-low-temperature-regimes` · example — Sufficient Ising uniqueness and coexistence regimes

### `csm-continuum-limits` — Finite-range continuum Gibbs kernels and DLR notion (3 item(s))

- `def-csm-continuum-dlr-kernels` · definition — Finite-range continuum Gibbs kernels and DLR notion
- `lem-csm-continuum-kernel-normalization` · lemma — Stable finite-range continuum specification normalization and consistency
- `pthm-csm-qualified-continuum-equilibrium-limits` · physics-theorem — Qualified interacting continuum thermodynamic and positional ensemble limits

### `csm-continuum-limits-examples` — Finite-range continuum Gibbs kernels and DLR notion — Examples (3 item(s))

- `cex-csm-finite-range-attraction-collapse` · counterexample — Finite range alone does not imply stability
- `cex-csm-stable-not-superstable` · counterexample — Stability does not imply cell superstability
- `cex-csm-bulk-field-changes-pressure` · counterexample — A uniform one-body energy changes fixed-activity ideal-gas pressure

## Your seams

Another group's pages depend on yours:

- `csm-full-phase-local-equivalence` (group b) requires your `csm-gibbs-lattice`
- `csm-exact-models` (group c) requires your `csm-phase-ensembles`
- `qsm-commuting-quantum-phases` (group n) requires your `csm-gibbs-lattice`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/physics-remaining-80-2026-10-17-judge.jsonl` yourself before reporting nothing to do —
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

# Historical Step-5 closure recovery, `physics-remaining-80-2026-10-17`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/physics-support/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.
