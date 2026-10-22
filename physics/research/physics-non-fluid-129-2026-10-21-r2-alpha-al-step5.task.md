# Step 5 adjudication — group **al**, run `physics-non-fluid-129-2026-10-21-r2`

You are the group Alpha for batches 1, 114, 116: 3 A/B pair(s), 6 page(s), 25 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **1**: `research/physics-non-fluid-129-2026-10-21-r2-batch-1-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **114**: `research/physics-non-fluid-129-2026-10-21-r2-batch-114-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **116**: `research/physics-non-fluid-129-2026-10-21-r2-batch-116-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 1 | `td-phases-and-limits` | A | thermodynamics | 282 | `td-math-mixture-dynamics-and-shells`, `td-potentials-and-responses`, `td-math-continuum-pressure`, `construction-of-the-natural-numbers`, `roots-and-rational-powers`, `the-inverse-function-theorem-completed`, `the-total-derivative`, `sigma-algebras-and-borel-sets`, `measures-and-their-basic-properties`, `the-lebesgue-integral-and-the-convergence-theorems`, `compactness-in-metric-spaces`, `linear-maps-rank-nullity-and-quotient-spaces` |
| 1 | `td-phases-and-limits-examples` | B | thermodynamics | 283 | `td-phases-and-limits`, `power-series-and-real-analytic-functions` |
| 114 | `tgr-phs05` | A | thermodynamics-and-general-relativity | 925 | `tgr-i01`, `tgr-mhs05`, `tgr-phs03`, `tgr-phs01` |
| 114 | `tgr-phs05-examples` | B | thermodynamics-and-general-relativity | 926 | `tgr-phs05`, `tgr-phs01` |
| 116 | `tgrx-hydrostatic-functional` | A | thermodynamics-and-general-relativity | 929 | `tgrx-thermal-geometry`, `tgr-c02`, `tgr-i01`, `riemannian-metrics-length-distance-and-volume` |
| 116 | `tgrx-hydrostatic-functional-examples` | B | thermodynamics-and-general-relativity | 930 | `tgrx-hydrostatic-functional`, `tgr-c02` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `td-phases-and-limits` — Phases And Limits (9 item(s))

- `def-td-thermodynamic-limit-contract` · definition — Finite-state thermodynamic-limit contract
- `pthm-td-fixed-tp-reaction-potential-minimum` · physics-theorem — Fixed-temperature and fixed-pressure potential minimum with internal reactions
- `def-td-phase-and-coexistence-domain` · definition — Phase branches and coexistence domains
- `pthm-td-intensive-coexistence-conditions` · physics-theorem — Intensive equilibrium conditions for coexisting phases
- `pthm-td-reaction-boundary-equilibrium` · physics-theorem — Reaction equilibrium conditions at interior and boundary amounts
- `pthm-td-clapeyron-local` · physics-theorem — Local Clapeyron slope on a regular pure-phase coexistence branch
- `pthm-td-compact-continuous-phase-mixture` · physics-theorem — Attained entropy-maximizing mixtures on compact phase domains
- `pthm-td-regular-gibbs-phase-rule` · physics-theorem — Local regular dimension of a reacting Gibbs phase-coexistence manifold
- `rem-td-nonsmooth-phase-scope` · remark — Scope at phase boundaries and in the thermodynamic limit

### `td-phases-and-limits-examples` — Phases And Limits — Examples (10 item(s))

- `ex-td-finite-two-state-partition-smooth` · example — Smooth free energy for a finite two-state model
- `ex-td-vdw-positive-slope` · example — A positive-slope segment in the reduced van der Waals model
- `ex-td-phase-fraction-lever-rule` · example — Phase fractions from an additive molar volume
- `ex-td-reaction-boundary-example` · example — A boundary reaction minimum with a one-sided extent
- `cex-td-noncompact-phase-mixture-no-attained-maximum` · counterexample — A noncompact phase domain with no attained mixture maximum
- `ex-td-compact-continuous-phase-mixture` · example — A compact two-generator mixture attains the d+1 support bound
- `ex-td-clapeyron-linear-branches` · example — A two-branch Gibbs model with a positive Clapeyron slope
- `cex-td-clapeyron-zero-volume-jump` · counterexample — Equal branch volumes do not give a Clapeyron graph
- `ex-td-phase-rule-single-component` · example — One component in two phases has one regular equation-set degree of freedom
- `ex-td-reactive-phase-rule-three-component` · example — A regular two-phase three-species reaction model

### `tgr-phs05` — Regulated generalized-entropy model (1 item(s))

- `def-tgr-regulated-generalized-entropy` · definition — Specified regulated generalized entropy

### `tgr-phs05-examples` — Regulated generalized-entropy model — Examples (1 item(s))

- `rem-tgr-generalized-entropy-no-automatic-second-law` · remark — Generalized entropy requires a separate physical inequality

### `tgrx-hydrostatic-functional` — Hydrostatic generating functionals and derivative-expansion boundaries (3 item(s))

- `def-tgrx-static-hydrostatic-data` · definition — Static hydrostatic background and equation-of-state data
- `post-tgrx-hydrostatic-effective-model` · postulate — Restricted hydrostatic effective functional
- `pthm-tgrx-hydrostatic-variation` · physics-theorem — Hydrostatic susceptibility and Tolman variables

### `tgrx-hydrostatic-functional-examples` — Hydrostatic generating functionals and derivative-expansion boundaries — Examples (1 item(s))

- `ex-tgrx-entropy-does-not-close-hydrodynamics` · example — Equilibrium functional supplies no transport coefficient

## Your seams

Your pages depend on another group's:

- `tgr-phs05` requires `tgr-mhs05` (group ap, batch 113)
- `tgrx-hydrostatic-functional` requires `tgrx-thermal-geometry` (group ap, batch 115)

Another group's pages depend on yours:

- `tgrx-regulated-second-law` (group an) requires your `tgr-phs05`
- `tgrx-ads-effective-boundaries` (group ao) requires your `tgr-phs05`
- `tgrx-research-boundaries` (group ao) requires your `tgr-phs05`

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

# Step 5 batch adjudication, `physics-non-fluid-129-2026-10-21-r2`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
