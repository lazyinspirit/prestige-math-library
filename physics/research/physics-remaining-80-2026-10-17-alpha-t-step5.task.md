# Step 5 adjudication — group **t**, run `physics-remaining-80-2026-10-17`

You are the group Alpha for batches 71, 72, 77: 3 A/B pair(s), 6 page(s), 28 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **71**: `research/physics-remaining-80-2026-10-17-batch-71-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **72**: `research/physics-remaining-80-2026-10-17-batch-72-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **77**: `research/physics-remaining-80-2026-10-17-batch-77-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 71 | `tgr-g01` | A | thermodynamics-and-general-relativity | 639 | `tgr-i01`, `tgr-mg01` |
| 71 | `tgr-g01-examples` | B | thermodynamics-and-general-relativity | 640 | `tgr-g01` |
| 72 | `tgr-g02` | A | thermodynamics-and-general-relativity | 641 | `tgr-g01`, `tgr-mg02` |
| 72 | `tgr-g02-examples` | B | thermodynamics-and-general-relativity | 642 | `tgr-g02` |
| 77 | `tgr-phs01` | A | thermodynamics-and-general-relativity | 651 | `emg-s01`, `tgr-i01`, `tgr-mhs01` |
| 77 | `tgr-phs01-examples` | B | thermodynamics-and-general-relativity | 652 | `tgr-phs01` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `tgr-g01` — Finite regulated Newtonian gravitational canonical preparation (9 item(s))

- `post-tgr-finite-newton-gravity-preparation` · postulate — Finite regulated Newtonian gravitational canonical preparation
- `pthm-tgr-regulated-gravity-canonical-equilibrium` · physics-theorem — Constructed finite canonical gravitational equilibrium
- `post-tgr-unregulated-point-attempt` · postulate — Distinct unregulated point-gravity attempted sampling
- `post-tgr-kepler-canonical-preparation` · postulate — Relative-shell canonical comparison preparation
- `post-tgr-kepler-microcanonical-volume-preparation` · postulate — Confined relative Kepler shell and volume entropy preparation
- `pthm-tgr-regulated-ensemble-response-inequivalence` · physics-theorem — Regulated gravitational preparations have different responses
- `lem-tgr-finite-static-mode-occupation-trace` · lemma — Finite static fermion-mode trace and occupation identity
- `post-tgr-fixed-static-gas-preparation` · postulate — Fixed static ideal gas or finite fermion regulator preparation
- `pthm-tgr-static-gas-local-equilibrium` · physics-theorem — Constructed static gas redshift and hydrostatics

### `tgr-g01-examples` — Finite regulated Newtonian gravitational canonical preparation — Examples (4 item(s))

- `ex-tgr-physical-finite-softened-box` · example — Prepared finite softened two-body ensemble
- `cex-tgr-physical-unregulated-collapse` · counterexample — Point-particle preparation has no finite-box canonical law
- `ex-tgr-physical-negative-kepler-capacity` · example — Confined negative-capacity Kepler preparation
- `ex-tgr-physical-static-lapse-two` · example — Fixed lapse two gas normalization

### `tgr-g02` — Static isotropic Einstein-fluid and supplied EOS model (8 item(s))

- `post-tgr-static-spherical-fluid-preparation` · postulate — Static spherical Einstein-fluid model with a supplied equation of state
- `pthm-tgr-static-tov-local-branch` · physics-theorem — Constructed regular-center local static TOV branch
- `post-tgr-incompressible-star-preparation` · postulate — Specified constant-density star and vacuum boundary model
- `post-tgr-gravitating-entropy-variational-preparation` · postulate — Supplied thermodynamic chart and gravitational entropy variation model
- `pthm-tgr-static-constant-density-star` · physics-theorem — Verified constant-density static star and vacuum exterior
- `pthm-tgr-gravitating-entropy-criticality` · physics-theorem — Constrained entropy criticality yields scoped TOV and Tolman–Klein relations
- `post-tgr-finite-bath-exchange-preparation` · postulate — Selected finite bath and effective energy-exchange preparation
- `pthm-tgr-negative-capacity-exchange-stability` · physics-theorem — Finite bath stabilizes the selected negative-capacity exchange model

### `tgr-g02-examples` — Static isotropic Einstein-fluid and supplied EOS model — Examples (3 item(s))

- `ex-tgr-physical-star-half-compactness` · example — Half-compactness constant-density Einstein star
- `cex-tgr-physical-critical-star-limit` · counterexample — Central pressure is unbounded at the constant-density branch limit
- `ex-tgr-physical-finite-bath-attraction` · example — Half-capacity bath attracts the selected exchange state

### `tgr-phs01` — Restricted smooth horizon Einstein/NEC adoption (3 item(s))

- `post-tgr-smooth-horizon-energy-condition` · postulate — Restricted smooth horizon Einstein/NEC adoption
- `pthm-tgr-restricted-classical-area` · physics-theorem — Conditional restricted classical area increase
- `pthm-tgr-kn-family-mechanics` · physics-theorem — Physical KN family work and constancy

### `tgr-phs01-examples` — Restricted smooth horizon Einstein/NEC adoption — Examples (1 item(s))

- `texp-tgr-classical-schwarzschild-work` · thought-experiment — Classical Schwarzschild SI family work

## Your seams

Your pages depend on another group's:

- `tgr-g01` requires `tgr-i01` (group q, batch 54)
- `tgr-g01` requires `tgr-mg01` (group y, batch 69)
- `tgr-g02` requires `tgr-mg02` (group z, batch 70)
- `tgr-phs01` requires `emg-s01` (group g, batch 24)
- `tgr-phs01` requires `tgr-i01` (group q, batch 54)
- `tgr-phs01` requires `tgr-mhs01` (group z, batch 73)

Another group's pages depend on yours:

- `tgr-phs03` (group u) requires your `tgr-phs01`

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

# Step 5 batch adjudication, `physics-remaining-80-2026-10-17`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
