# Step 5 adjudication — group **aa**, run `physics-remaining-80-2026-10-17`

You are the group Alpha for batches 75, 76: 2 A/B pair(s), 4 page(s), 10 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **75**: `research/physics-remaining-80-2026-10-17-batch-75-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **76**: `research/physics-remaining-80-2026-10-17-batch-76-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 75 | `tgr-mhs03` | A | thermodynamics-and-general-relativity-mathematics | 647 | `qft-mf02`, `tempered-distributions-and-the-fourier-transform`, `tgr-mhs02` |
| 75 | `tgr-mhs03-examples` | B | thermodynamics-and-general-relativity-mathematics | 648 | `tgr-mhs03` |
| 76 | `tgr-mhs04` | A | thermodynamics-and-general-relativity-mathematics | 649 | `orthonormal-bases-parseval-and-fourier-series`, `qsm-bose-fermi-gases`, `qm-math-orbital-and-spin` |
| 76 | `tgr-mhs04-examples` | B | thermodynamics-and-general-relativity-mathematics | 650 | `tgr-mhs04` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `tgr-mhs03` — Constructed timelike smear and massless accelerated spectrum (2 item(s))

- `lem-tgr-timelike-scalar-acceleration` · lemma — Constructed timelike smear and massless accelerated spectrum
- `lem-tgr-spectral-thermometer` · lemma — Exact defined Markov thermometer and switched coefficient bound

### `tgr-mhs03-examples` — Constructed timelike smear and massless accelerated spectrum — Examples (1 item(s))

- `ex-tgr-finite-switch-inertial-rate` · example — Quantitative switched coefficient and inertial rate

### `tgr-mhs04` — Actual photon box trace and Planck energy/entropy flux (5 item(s))

- `lem-tgr-photon-box-shell-summability` · lemma — Exponential mode sums for the periodic photon box
- `lem-tgr-planck-integrals` · lemma — Planck integrals from Fourier Parseval
- `lem-tgr-photon-box-riemann-limits` · lemma — Photon-box energy and singular entropy Riemann limits
- `thm-tgr-photon-planck-flux` · theorem — Actual photon box trace and Planck energy/entropy flux
- `prop-tgr-ideal-evaporation-accounting` · proposition — Exact ideal emitter mass ODE and entropy accounting

### `tgr-mhs04-examples` — Actual photon box trace and Planck energy/entropy flux — Examples (2 item(s))

- `cex-tgr-photon-zero-mode-trace` · counterexample — Zero-energy bosonic mode trace obstruction
- `ex-tgr-ideal-cutoff-entropy` · example — Half-mass cutoff and exact coarse entropy export

## Your seams

Your pages depend on another group's:

- `tgr-mhs03` requires `tgr-mhs02` (group z, batch 74)
- `tgr-mhs04` requires `qsm-bose-fermi-gases` (group o, batch 45)

Another group's pages depend on yours:

- `tgr-phs02` (group u) requires your `tgr-mhs03`
- `tgr-phs04` (group u) requires your `tgr-mhs04`

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
