# Step 5 adjudication — group **i**, run `physics-non-fluid-129-2026-10-21-r2`

You are the group Alpha for batches 95, 96, 97: 3 A/B pair(s), 6 page(s), 36 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **95**: `research/physics-non-fluid-129-2026-10-21-r2-batch-95-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **96**: `research/physics-non-fluid-129-2026-10-21-r2-batch-96-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **97**: `research/physics-non-fluid-129-2026-10-21-r2-batch-97-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/physics-non-fluid-129-2026-10-21-r2-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 95 | `csm-frontier-sampling-certificates` | A | classical-statistical-mechanics | 887 | `csm-frontier-quantitative-dlr`, `csm-frontier-fk-loop-algebra`, `csm-gibbs-lattice`, `metropolis-hastings-algorithm-and-invariance` |
| 95 | `csm-frontier-sampling-certificates-examples` | B | classical-statistical-mechanics | 888 | `csm-frontier-sampling-certificates` |
| 96 | `csm-frontier-inverse-gibbs` | A | classical-statistical-mechanics | 889 | `csm-frontier-sampling-certificates`, `csm-frontier-large-deviation-ensembles`, `csm-phase-ensembles`, `bayesian-models-priors-and-posterior-laws` |
| 96 | `csm-frontier-inverse-gibbs-examples` | B | classical-statistical-mechanics | 890 | `csm-frontier-inverse-gibbs` |
| 97 | `csm-frontier-planar-critical-point` | A | classical-statistical-mechanics | 891 | `csm-frontier-fk-loop-algebra`, `csm-frontier-quantitative-dlr`, `graphs-walks-and-connectivity`, `plane-graphs-euler-and-the-five-colour-theorem` |
| 97 | `csm-frontier-planar-critical-point-examples` | B | classical-statistical-mechanics | 892 | `csm-frontier-planar-critical-point` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `csm-frontier-sampling-certificates` — Gibbs sampling, exact coupling and finite-error certificates (7 item(s))

- `alg-csm-frontier-heat-bath-update` · algorithm — Finite-spin random-scan heat-bath update
- `thm-csm-frontier-heat-bath-tv-bound` · theorem — Finite Dobrushin bound for random-scan heat-bath sampling
- `lem-csm-frontier-error-budget-composition` · lemma — Additive composition of finite sampling error budgets
- `alg-csm-frontier-monotone-cftp` · algorithm — Monotone coupling from the past for finite ferromagnetic Ising weights
- `thm-csm-frontier-monotone-cftp-exact` · theorem — Exactness and almost-sure termination of finite monotone CFTP
- `alg-csm-frontier-swendsen-wang` · algorithm — Finite Potts Swendsen–Wang update
- `thm-csm-frontier-swendsen-wang-invariance` · theorem — Finite Swendsen–Wang update preserves the Potts law

### `csm-frontier-sampling-certificates-examples` — Gibbs sampling, exact coupling and finite-error certificates — Examples (1 item(s))

- `ex-csm-frontier-metastable-diagnostic` · example — A finite Metropolis chain can equilibrate within a well and remain far from equilibrium

### `csm-frontier-inverse-gibbs` — Inverse Gibbs models, identifiability and correlated uncertainty (7 item(s))

- `def-csm-frontier-inverse-finite-exponential` · definition — Finite exponential Gibbs family for inverse inference
- `thm-csm-frontier-inverse-identifiability` · theorem — Identifiability and covariance in a finite exponential Gibbs family
- `lem-csm-frontier-finite-polytope-support` · lemma — Supporting direction at a boundary point of a finite full-dimensional polytope
- `thm-csm-frontier-finite-mle-existence` · theorem — Exact finite-MLE criterion for a minimal finite exponential Gibbs family
- `def-csm-frontier-latent-gibbs-observation` · definition — Finite latent Gibbs observation model
- `thm-csm-frontier-inverse-posterior` · theorem — Posterior kernel and dominated formula for a latent Gibbs observation
- `def-csm-frontier-pseudolikelihood` · definition — Finite-volume Gibbs pseudo-likelihood with fixed boundary

### `csm-frontier-inverse-gibbs-examples` — Inverse Gibbs models, identifiability and correlated uncertainty — Examples (2 item(s))

- `ex-csm-frontier-boundary-mle` · example — All-plus data have no finite Bernoulli-spin field MLE
- `ex-csm-frontier-pseudolikelihood-not-joint` · example — Two-spin pseudo-likelihood is not the exact joint posterior input

### `csm-frontier-planar-critical-point` — Planar random clusters, sharpness and the exact square-lattice critical point (18 item(s))

- `def-csm-frontier-fk-real-boundaries` · definition — Finite FK random-cluster weights for real q and boundary partitions
- `def-csm-frontier-fk-infinite-volume-states` · definition — Free, wired, and subsequential infinite-volume FK states on the square lattice
- `lem-csm-frontier-fk-fkg-spatial-markov` · lemma — Finite FK association, spatial Markov property, and boundary monotonicity
- `lem-csm-frontier-fk-planar-duality` · lemma — Planar FK duality with the free exterior-face convention
- `lem-csm-frontier-fk-free-wired-limits` · lemma — Existence of the free and wired infinite-volume FK limits
- `lem-csm-frontier-grid-crossings-intersect` · lemma — Opposite crossings of a rectangular grid intersect
- `lem-csm-frontier-finite-box-cube-max-fiber-influence` · lemma — Maximum endpoint influence for an increasing finite-box set
- `lem-csm-frontier-fk-torus-cellular-duality` · lemma — Cellular component counts and self-dual FK likelihoods on a finite square torus
- `lem-csm-frontier-fk-cylinder-pressure-comparison` · lemma — Numerical FK cylinder limits and pressure comparison
- `lem-csm-frontier-fk-mixed-reflection-gluing` · lemma — Finite mixed-boundary reflection and gluing on the rotated FK torus
- `thm-csm-frontier-fk-torus-rsw` · theorem — Periodic-torus RSW lower bounds at the FK self-dual point
- `lem-csm-frontier-fk-influence-threshold` · lemma — A maximum conditional edge influence bound for finite FK measures
- `lem-csm-frontier-fk-wired-annuli-and-numerical-threshold` · lemma — Wired FK annuli and the numerical self-dual threshold
- `lem-csm-frontier-fk-independent-cluster-animal-envelope` · lemma — Independent connected-set envelopes and a greedy lattice-animal bound
- `lem-csm-frontier-fk-subcritical-exponential-decay` · lemma — Subcritical FK exponential connectivity under Countable Choice
- `lem-csm-frontier-fk-crossing-amplification` · lemma — Crossing sharpness and subcritical decay for square-lattice FK
- `thm-csm-frontier-fk-square-critical-point` · theorem — Exact square-lattice FK critical point and subcritical decay
- `thm-csm-frontier-potts-square-critical-temperature` · theorem — Square-lattice Potts critical inverse temperature

### `csm-frontier-planar-critical-point-examples` — Planar random clusters, sharpness and the exact square-lattice critical point — Examples (1 item(s))

- `ex-csm-frontier-ising-coupling-conversion` · example — Square-lattice Ising critical coupling from the two-state Potts model

## Your seams

Your pages depend on another group's:

- `csm-frontier-sampling-certificates` requires `csm-frontier-quantitative-dlr` (group f, batch 86)
- `csm-frontier-sampling-certificates` requires `csm-frontier-fk-loop-algebra` (group g, batch 90)
- `csm-frontier-inverse-gibbs` requires `csm-frontier-large-deviation-ensembles` (group f, batch 88)
- `csm-frontier-planar-critical-point` requires `csm-frontier-fk-loop-algebra` (group g, batch 90)
- `csm-frontier-planar-critical-point` requires `csm-frontier-quantitative-dlr` (group f, batch 86)

Another group's pages depend on yours:

- `csm-frontier-rare-event-numerics` (group j) requires your `csm-frontier-sampling-certificates`
- `csm-frontier-rare-event-numerics` (group j) requires your `csm-frontier-inverse-gibbs`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/physics-non-fluid-129-2026-10-21-r2-judge.jsonl` yourself before reporting nothing to do —
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

# Historical Step-5 closure recovery, `physics-non-fluid-129-2026-10-21-r2`

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
