# Step 5 adjudication — group **o**, run `physics-td-qft-rpm-62-2026-10-14`

You are the group Alpha for batches 1, 2, 31: 3 A/B pair(s), 6 page(s), 30 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **1**: `research/physics-td-qft-rpm-62-2026-10-14-batch-1-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **2**: `research/physics-td-qft-rpm-62-2026-10-14-batch-2-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **31**: `research/physics-td-qft-rpm-62-2026-10-14-batch-31-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 1 | `td-thermodynamic-framework` | A | thermodynamics | 263 | `the-zfc-axioms-and-basic-set-constructions`, `roots-and-rational-powers`, `monotone-sequences-and-cauchy-completeness`, `matrices-and-the-matrix-of-a-linear-map`, `limits-of-real-functions`, `construction-of-the-natural-numbers`, `vector-spaces-and-subspaces`, `the-total-derivative`, `rn-as-a-normed-space`, `measures-and-their-basic-properties` |
| 1 | `td-thermodynamic-framework-examples` | B | thermodynamics | 264 | `td-thermodynamic-framework` |
| 2 | `td-entropy-foundation` | A | thermodynamics | 265 | `td-thermodynamic-framework`, `suprema-and-infima`, `the-inverse-function-theorem-completed` |
| 2 | `td-entropy-foundation-examples` | B | thermodynamics | 266 | `td-entropy-foundation`, `the-logarithm-and-general-powers`, `foundations-of-the-real-numbers` |
| 31 | `rpm-controlled-limits` | A | relativistic-particle-mechanics | 431 | `em-lorentz-covariant-formulation`, `gr-flat-and-newtonian-bridges`, `rpm-momentum-collisions`, `rpm-geometry-actions` |
| 31 | `rpm-controlled-limits-examples` | B | relativistic-particle-mechanics | 432 | `rpm-controlled-limits` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `td-thermodynamic-framework` — Thermodynamic Framework (7 item(s))

- `def-td-si-quantities` · definition — SI quantities and unit conventions
- `def-td-system-and-permitted-exchanges` · definition — Thermodynamic systems and permitted exchanges
- `def-td-galilean-rest-frame` · definition — Galilean inertial charts and the center-of-mass rest frame
- `def-td-equilibrium-state-domain` · definition — Equilibrium state domains
- `def-td-process-and-protocol` · definition — Thermodynamic process records and transfer conventions
- `post-td-bulk-additivity` · postulate — Additive separated systems and tagged bulk scaling
- `post-td-first-law-energy` · postulate — First-law energy balance for closed process records

### `td-thermodynamic-framework-examples` — Thermodynamic Framework — Examples (4 item(s))

- `ex-td-system-exchange-boundaries` · example — Classifying closed, open, and isolated system boundaries
- `ex-td-si-unit-arithmetic` · example — Pressure-volume and force-distance units
- `ex-td-first-law-sign-convention` · example — Converting work-on and work-by conventions
- `ex-td-joule-primary-work-heat-report` · example — Joule's 1850 paddle-wheel report

### `td-entropy-foundation` — Entropy Foundation (8 item(s))

- `def-td-reversible-process` · definition — Reversible thermodynamic process record
- `def-td-thermal-contact-constraints` · definition — Thermal contact family and constraints
- `post-td-concave-fundamental-entropy` · postulate — Concave macroscopic fundamental entropy
- `def-td-isolated-compound-feasible-set` · definition — Isolated compound and feasible equilibrium set
- `post-td-entropy-maximum` · postulate — Stable equilibrium requires an attained global entropy maximum
- `post-td-macroscopic-second-law` · postulate — Macroscopic second law for isolated compounds
- `post-td-zeroth-law` · postulate — Zeroth law for the declared thermal-contact family
- `post-td-common-bulk-constitutive-law` · postulate — Common constitutive entropy law for a designated bulk family

### `td-entropy-foundation-examples` — Entropy Foundation — Examples (3 item(s))

- `ex-td-irreversible-adiabatic-compression` · example — Entropy increase in an idealized adiabatic compression
- `ex-td-noncompact-entropy-supremum-not-attained` · example — A concave entropy supremum not attained on an open energy-partition set
- `ex-td-local-entropy-maximum-below-global` · example — A local entropy maximum below a feasible global maximum

### `rpm-controlled-limits` — Finite-time comparison of bounded vector fields (7 item(s))

- `lem-rpm-finite-time-ode-comparison` · lemma — Finite-time comparison of bounded vector fields
- `lem-rpm-low-speed-remainders` · lemma — Explicit low-speed momentum and energy remainders
- `lem-rpm-low-speed-uniform-remainders` · lemma — Uniform low-speed relativistic remainders
- `lem-rpm-shell-force-ivp` · lemma — Orthogonal shell force local IVP and compact continuation
- `pthm-rpm-prescribed-em-nr-trajectory-limit` · physics-theorem — Controlled prescribed-field trajectory limit
- `pthm-rpm-prescribed-force-local-motion` · physics-theorem — Local massive motion in smooth orthogonal prescribed forces
- `pthm-rpm-controlled-newtonian-reduction` · physics-theorem — Controlled Newtonian reductions for test motion

### `rpm-controlled-limits-examples` — Finite-time comparison of bounded vector fields — Examples (1 item(s))

- `ex-rpm-low-speed-energy-bound` · example — One-tenth-light-speed kinetic remainder

## Your seams

Your pages depend on another group's:

- `rpm-controlled-limits` requires `rpm-momentum-collisions` (group l, batch 23)
- `rpm-controlled-limits` requires `rpm-geometry-actions` (group l, batch 22)

Another group's pages depend on yours:

- `td-accessibility-foundation` (group p) requires your `td-thermodynamic-framework`
- `td-representation-and-equilibrium` (group p) requires your `td-entropy-foundation`
- `td-continuum-heat-model` (group r) requires your `td-entropy-foundation`

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

# Historical Step-5 closure recovery, `physics-td-qft-rpm-62-2026-10-14`

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
