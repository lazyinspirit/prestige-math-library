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

# Alpha

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/physics-support/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

**Proof repair quality for item editors.** When editing an item file, make every proof repair mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats clearly; remove repeated talking points, filler, and padding that add no mathematical content. Add intermediate lemmas to satisfy unmet prerequisite if possible.

For Step 3 onward, follow `briefs/tasks/frontier-dependency-ledger.md` within
your write scope. The engine refreshes the unified frontier ledger at mutable joins.

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/physics-support/models.mjs` and `tools/physics-support/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/physics-cm-qm-gr-79-2026-10-11-alpha-groups.json` is the assignment: it permits at
most the capacity-derived group count (currently 80), with at most three batches
per group and lowercase alphabetic labels (`a` through `z`, then `aa`). A group
writes only its own artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol. Step-5
adjudicators and all three owner repair agents may fully author new items only
for genuine unmet prerequisites of assigned repairs. Use unique IDs and register
each addition in the canonical registry/index, page, applicable manifest and
contract. Resolve dependency and downstream effects before central certification
and the complete gate battery. Otherwise report the issue without changing it.
Current Step-5 dispatches also follow
`step5-adjudicator.md` or `step5-owner-repair.md`; their tasks authorize assigned
published downstream repairs across the whole library.

At Step 5, an item genuinely created and fully authored by an authorised
auditor/adjudicator is a separate certification class. Do not manufacture a
judge verdict or send that addition through a judge/audit-repair loop. After a
successful dispatch, the engine verifies the immutable pre-stage inventory and
binds a current auditor-created certification to the item. This does not widen
write scope or waive content, dependency, source, rendering, proof-contract, or
Step-5 task ownership rules. Existing-item edits still require ordinary
current judge evidence.

## Review and repair standard

Logical validity is the ground truth; authoritative sources and judges can err.
State uncertainty honestly and consult primary sources when unsure.
Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/physics-support/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. Current Step-5 adjudication repairs every confirmed defect,
including `confirmed_nonfatal`; `confirmed_fatal` additionally enters the fatal
threshold count. A `false_positive` requires evidence without unnecessary edits.
The task controls repair ownership, fresh downstream continuation and any
required rejudge; never initiate a cycle independently.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: physics-cm-qm-gr-79-2026-10-11
role: alpha-batch-read
label: 17
covers: 17

# Step 4 batch reviewer — batch **17**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **17**. Step-5 owning group: **f**.
Return `group: "f"` and `batches: ["17"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 17 | `cm01-framework-quantities-and-geometry` | A | cm-math-geometry |
| 17 | `cm01-framework-quantities-and-geometry-examples` | B | cm01-framework-quantities-and-geometry, sine-cosine-and-the-definition-of-pi, cm-math-geometry |

## Your content, in full

### `cm01-framework-quantities-and-geometry` — Framework, quantities and geometry

- `post-cm01-spacetime` · postulate — Adopted Newtonian spacetime structure: absolute time, Euclidean spatial slices and their smooth structure
- `post-cm01-frames` · postulate — Inertial frames, stationary observers and the adopted Galilean transformations between frames
- `post-cm01-worldlines` · postulate — Particle labels, worldlines, the frame-time parameter condition and fixed inertial masses
- `def-cm01-units` · definition — Dimensions and SI unit conventions of the non-relativistic classical mechanics framework
- `def-cm01-configuration` · definition — Configuration domain of $N$ labeled particles: open admissible sets, regular holonomic constraints and the mass operator
- `def-cm01-velocity-acceleration` · definition — Coordinate velocity and acceleration of a worldline in an inertial frame, and the spatial velocity and acceleration vectors
- `pthm-cm01-galilean-kinematics` · physics-theorem — Galilean transformation of worldlines: velocity and acceleration laws, frame-independence of zero coordinate acceleration, and the group of frame changes
- `rem-cm01-model-limit` · remark — Status audit and model limits of the framework page: primitive data, adopted assumptions, derived objects and what is not claimed

### `cm01-framework-quantities-and-geometry-examples` — Framework, quantities and geometry — Examples

- `ex-cm01-galilean-boost-of-a-free-motion` · example — A worked Galilean boost: the same uniform motion in two inertial frames
- `ex-cm01-rotating-basis-of-a-free-motion` · example — A rotating spatial basis is not an inertial frame: nonzero coordinate acceleration of a uniform motion
- `cex-cm01-coordinate-velocity-is-frame-dependent` · counterexample — Coordinate velocity is not an inertial-frame-independent quantity
- `ex-cm01-two-particle-rigid-rod-configuration` · example — Configuration domains of two labeled particles: collision exclusion and a rigid rod as a regular holonomic constraint
- `ex-cm01-dimension-bookkeeping` · example — Dimension bookkeeping for the quantities and frame parameters of the framework page
- `ex-cm01-worldline-parameter-condition` · example — The frame-time parameter condition of a worldline: failure under rescaling and behaviour under time shifts

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cm01-framework-quantities-and-geometry` requires `cm-math-geometry`
- `cm01-framework-quantities-and-geometry-examples` requires `cm-math-geometry`
- `cm02-forces-initial-data-and-newtonian-flow` requires `cm01-framework-quantities-and-geometry`
- `cm02-forces-initial-data-and-newtonian-flow-examples` requires `cm01-framework-quantities-and-geometry`
- `cm03-momentum-work-and-energy-balances` requires `cm01-framework-quantities-and-geometry`
- `cm03-momentum-work-and-energy-balances-examples` requires `cm01-framework-quantities-and-geometry`
- `cm04-one-dimensional-conservative-and-dissipative-models` requires `cm01-framework-quantities-and-geometry`
- `cm04-one-dimensional-conservative-and-dissipative-models-examples` requires `cm01-framework-quantities-and-geometry`
- `cm05-two-body-central-forces-and-gravitation` requires `cm01-framework-quantities-and-geometry`
- `cm05-two-body-central-forces-and-gravitation-examples` requires `cm01-framework-quantities-and-geometry`
- `cm06-regular-constraints-and-moving-frames` requires `cm01-framework-quantities-and-geometry`
- `cm06-regular-constraints-and-moving-frames-examples` requires `cm01-framework-quantities-and-geometry`
- `cm07-stationary-action-and-lagrangian-dynamics` requires `cm01-framework-quantities-and-geometry`
- `cm07-stationary-action-and-lagrangian-dynamics-examples` requires `cm01-framework-quantities-and-geometry`
- `cm08-symmetry-noether-and-conditional-conservation` requires `cm01-framework-quantities-and-geometry`
- `cm08-symmetry-noether-and-conditional-conservation-examples` requires `cm01-framework-quantities-and-geometry`
- `cm09-coupled-oscillations-and-approximation` requires `cm01-framework-quantities-and-geometry`
- `cm09-coupled-oscillations-and-approximation-examples` requires `cm01-framework-quantities-and-geometry`
- `cm10-rigid-body-configuration-and-inertia` requires `cm01-framework-quantities-and-geometry`
- `cm10-rigid-body-configuration-and-inertia-examples` requires `cm01-framework-quantities-and-geometry`
- `cm11-rigid-body-dynamics-and-stability` requires `cm01-framework-quantities-and-geometry`
- `cm11-rigid-body-dynamics-and-stability-examples` requires `cm01-framework-quantities-and-geometry`
- `cm12-legendre-transformation-and-hamiltonian-mechanics` requires `cm01-framework-quantities-and-geometry`
- `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` requires `cm01-framework-quantities-and-geometry`
- `cm13-symplectic-geometry-and-canonical-methods` requires `cm01-framework-quantities-and-geometry`
- `cm13-symplectic-geometry-and-canonical-methods-examples` requires `cm01-framework-quantities-and-geometry`
- `cm14-hamilton-jacobi-and-integrability` requires `cm01-framework-quantities-and-geometry`
- `cm14-hamilton-jacobi-and-integrability-examples` requires `cm01-framework-quantities-and-geometry`
- `cm15-scattering-and-impulse-model-boundaries` requires `cm01-framework-quantities-and-geometry`
- `cm15-scattering-and-impulse-model-boundaries-examples` requires `cm01-framework-quantities-and-geometry`
- `cm16-stability-perturbations-and-chaos` requires `cm01-framework-quantities-and-geometry`
- `cm16-stability-perturbations-and-chaos-examples` requires `cm01-framework-quantities-and-geometry`
- `cm17-classical-continua-with-explicit-constitutive-assumptions` requires `cm01-framework-quantities-and-geometry`
- `cm17-classical-continua-with-explicit-constitutive-assumptions-examples` requires `cm01-framework-quantities-and-geometry`
- `cm18-measurement-uncertainty-and-later-bridges` requires `cm01-framework-quantities-and-geometry`
- `cm18-measurement-uncertainty-and-later-bridges-examples` requires `cm01-framework-quantities-and-geometry`
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

# Step 4 Alpha batch reviewer — read-only digest, `physics-cm-qm-gr-79-2026-10-11`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.


## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

Read each file ONCE per session, in the order the task gives it, and pull only the sections
and clauses you need — use the rendered evidence bundle first, and read the cited lines
rather than re-reading whole items. Budget the context you carry: this same
context is re-sent on every turn. The bundle is an entry point, never a fence: read
whatever else the mathematics requires, including other items of this frontier and the
published library, and search the web when a source must be checked.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
This role is read-only: do not write checkpoints or extra files. Use the task-provided durable evidence and reread it after compaction; return only the required response format.
