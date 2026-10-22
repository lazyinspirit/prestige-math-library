# Step 5 adjudication — group **am**, run `physics-non-fluid-129-2026-10-21-r2`

You are the group Alpha for batches 117, 118, 120: 3 A/B pair(s), 6 page(s), 12 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **117**: `research/physics-non-fluid-129-2026-10-21-r2-batch-117-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **118**: `research/physics-non-fluid-129-2026-10-21-r2-batch-118-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **120**: `research/physics-non-fluid-129-2026-10-21-r2-batch-120-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 117 | `tgrx-noether-entropy` | A | thermodynamics-and-general-relativity | 931 | `gr-fx12-covariant-phase-space`, `tgr-phs01`, `tgr-phs03` |
| 117 | `tgrx-noether-entropy-examples` | B | thermodynamics-and-general-relativity | 932 | `tgrx-noether-entropy` |
| 118 | `tgrx-gaussian-wedge` | A | thermodynamics-and-general-relativity | 933 | `qsmx-modular-equilibrium`, `tgr-phs02`, `qft-f01`, `tgr-et03` |
| 118 | `tgrx-gaussian-wedge-examples` | B | thermodynamics-and-general-relativity | 934 | `tgrx-gaussian-wedge` |
| 120 | `tgrx-hawking-approximation` | A | thermodynamics-and-general-relativity | 937 | `tgrx-collapse-scattering`, `tgr-phs02`, `qftx-microlocal-products` |
| 120 | `tgrx-hawking-approximation-examples` | B | thermodynamics-and-general-relativity | 938 | `tgrx-hawking-approximation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `tgrx-noether-entropy` — Covariant stationary Noether charge and Wald entropy (4 item(s))

- `def-tgrx-noether-horizon-data` · definition — Stationary covariant Noether boundary data
- `pthm-tgrx-noether-charge-decomposition` · physics-theorem — Noether charge decomposition for algebraic-curvature Lagrangians
- `pthm-tgrx-noether-horizon-entropy-variation` · physics-theorem — Stationary horizon Noether-charge entropy variation
- `pthm-tgrx-noether-first-law` · physics-theorem — Stationary first law from the covariant boundary identity

### `tgrx-noether-entropy-examples` — Covariant stationary Noether charge and Wald entropy — Examples (1 item(s))

- `ex-tgrx-fr-stationary-entropy` · example — f(R) stationary entropy coefficient

### `tgrx-gaussian-wedge` — Free scalar wedge modular geometry (3 item(s))

- `lem-tgrx-modular-kms-time-rescaling` · lemma — Positive rescaling of an upper-strip W*-KMS flow
- `post-tgrx-wedge-modular-model` · postulate — Free scalar wedge data and modular-geometric bridge
- `pthm-tgrx-wedge-unruh-clock` · physics-theorem — Wedge modular bridge implies the Unruh clock temperature

### `tgrx-gaussian-wedge-examples` — Free scalar wedge modular geometry — Examples (1 item(s))

- `ex-tgrx-wedge-typeiii-warning` · example — Finite two-mode squeeze illustrates but does not construct wedge factorization

### `tgrx-hawking-approximation` — Free collapse Hawking approximation and its proof obligations (2 item(s))

- `post-tgrx-free-collapse-scattering` · postulate — Specified late-time free-field collapse scattering model
- `pthm-tgrx-conditional-hawking-occupation` · physics-theorem — Conditional asymptotic occupation in a supplied collapse channel

### `tgrx-hawking-approximation-examples` — Free collapse Hawking approximation and its proof obligations — Examples (1 item(s))

- `rem-tgrx-three-black-hole-states` · remark — Boulware, Unruh and Hartle-Hawking states are distinct

## Your seams

Your pages depend on another group's:

- `tgrx-noether-entropy` requires `gr-fx12-covariant-phase-space` (group r, batch 40)
- `tgrx-gaussian-wedge` requires `qsmx-modular-equilibrium` (group ag, batch 100)
- `tgrx-hawking-approximation` requires `tgrx-collapse-scattering` (group ap, batch 119)
- `tgrx-hawking-approximation` requires `qftx-microlocal-products` (group x, batch 58)

Another group's pages depend on yours:

- `tgrx-renormalized-stress` (group an) requires your `tgrx-hawking-approximation`
- `tgrx-ads-effective-boundaries` (group ao) requires your `tgrx-noether-entropy`

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
