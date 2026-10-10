# Step 7 adjudication — group **i**, run `physics-em-sr-40-2026-10-08`

You are the group Alpha for batches **19**, **20**, **21**: 3 A/B pair(s), 6 page(s), 12 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/physics-support/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

**No step-6 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/physics-em-sr-40-2026-10-08-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 19 | `em-causal-response-and-radiation-prerequisites` | A | classical-electromagnetism-mathematics | 315 | `em-wave-equation-prerequisites`, `the-lebesgue-and-riemann-integrals-compared` |
| 19 | `em-causal-response-and-radiation-prerequisites-examples` | B | classical-electromagnetism-mathematics | 316 | `em-causal-response-and-radiation-prerequisites` |
| 20 | `em-experiment-analysis-prerequisites` | A | classical-electromagnetism-mathematics | 317 | `em-expanded-analysis-prerequisites`, `limits-of-real-functions` |
| 20 | `em-experiment-analysis-prerequisites-examples` | B | classical-electromagnetism-mathematics | 318 | `em-experiment-analysis-prerequisites` |
| 21 | `em-causal-wave-kernel-prerequisites` | A | classical-electromagnetism-mathematics | 321 | `em-wave-equation-prerequisites`, `density-separability-and-convolution-in-lp`, `fubini-and-change-of-variables`, `the-topology-of-euclidean-space` |
| 21 | `em-causal-wave-kernel-prerequisites-examples` | B | classical-electromagnetism-mathematics | 322 | `em-causal-wave-kernel-prerequisites` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `em-causal-response-and-radiation-prerequisites` — Em Causal Response And Radiation Prerequisites (2 item(s))

- `thm-em-causal-dispersive-response` · theorem — Causal convolution response, transfer function and dispersion relations
- `thm-em-radiation-asymptotic-flux` · theorem — Uniform far-zone asymptotics and retarded-time flux limit for compact conserved smooth sources

### `em-causal-response-and-radiation-prerequisites-examples` — Em Causal Response And Radiation Prerequisites — Examples (1 item(s))

- `ex-em-causal-response-and-radiation-prerequisites-hypothesis-boundaries` · example — Hypothesis boundaries: a causal response without passivity, and the fixed-retarded-time flux limit

### `em-experiment-analysis-prerequisites` — Em Experiment Analysis Prerequisites (1 item(s))

- `thm-em-uncertainty-analysis` · theorem — Uncertainty analysis: bounded-error data confine the parameter of a $C^1$ prediction along a declared unit direction in $\mathbb R^n$

### `em-experiment-analysis-prerequisites-examples` — Em Experiment Analysis Prerequisites — Examples (1 item(s))

- `ex-em-experiment-analysis-prerequisites-hypothesis-boundaries` · example — Sharpness of the bounded-error uncertainty bound for a linear prediction, and failure once the response lower bound is dropped

### `em-causal-wave-kernel-prerequisites` — Causal kernels, gauge and point fields after wave existence (6 item(s))

- `def-em-potential-gauge-and-field-conventions` · definition — Scalar-vector potential pairs, gauge transformation, Lorenz divergence and the wave expression
- `lem-em-retarded-wave-kernel` · lemma — The retarded wave kernel is a distribution supported on the cone, solves the point-wave equation, and convolves to the retarded solution
- `lem-em-gauge-wave-reachability` · lemma — Every smooth potential pair on a slab can be put in Lorenz gauge by a wave-equation gauge function, without changing the fields
- `lem-em-smooth-forced-maxwell-cauchy-system` · lemma — The smooth forced Maxwell Cauchy system on a slab: existence, uniqueness, Gauss constraints and the c-cone of dependence
- `lem-em-point-retarded-potential-and-fields` · lemma — Retarded Liénard-Wiechert potentials and fields of a uniformly subluminal smooth point source
- `thm-em-retarded-point-distributional-maxwell` · theorem — The proper retarded point-history pair solves the distributional wave and Maxwell equations

### `em-causal-wave-kernel-prerequisites-examples` — Causal kernels, gauge and point fields after wave existence — Examples (1 item(s))

- `ex-em-causal-wave-kernel-prerequisites-explicit-checks` · example — Explicit checks of the retarded kernel, the static Liénard-Wiechert specialization and an explicit Lorenz-gauge transformation

## Your seams

Your pages depend on another group's:

- `em-causal-response-and-radiation-prerequisites` requires `em-wave-equation-prerequisites` (group h, batch 17)
- `em-experiment-analysis-prerequisites` requires `em-expanded-analysis-prerequisites` (group h, batch 16)
- `em-causal-wave-kernel-prerequisites` requires `em-wave-equation-prerequisites` (group h, batch 17)

Another group's pages depend on yours:

- `em-material-response` (group c) requires your `em-causal-response-and-radiation-prerequisites`
- `em-potentials-and-gauge` (group c) requires your `em-causal-wave-kernel-prerequisites`
- `em-retarded-fields-and-radiation` (group e) requires your `em-causal-response-and-radiation-prerequisites`
- `em-empirical-tests-and-scope` (group f) requires your `em-experiment-analysis-prerequisites`
- `em-retarded-point-prerequisites` (group j) requires your `em-causal-wave-kernel-prerequisites`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/physics-em-sr-40-2026-10-08-judge.jsonl` yourself before reporting nothing to do —
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

---

# Step 7 batch adjudication, `physics-em-sr-40-2026-10-08`

- Follow `briefs/step7-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
