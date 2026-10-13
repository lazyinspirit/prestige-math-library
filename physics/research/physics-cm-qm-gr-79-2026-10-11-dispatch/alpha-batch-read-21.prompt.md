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
label: 21
covers: 21

# Step 4 batch reviewer — batch **21**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **21**. Step-5 owning group: **g**.
Return `group: "g"` and `batches: ["21"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 21 | `cm05-two-body-central-forces-and-gravitation` | A | cm-math-central, cm03-momentum-work-and-energy-balances, hilbert-space-geometry-and-riesz-representation, construction-of-the-natural-numbers, cm02-forces-initial-data-and-newtonian-flow, cm01-framework-quantities-and-geometry, cm-math-balances |
| 21 | `cm05-two-body-central-forces-and-gravitation-examples` | B | cm05-two-body-central-forces-and-gravitation, cm-math-central, cm01-framework-quantities-and-geometry, cm02-forces-initial-data-and-newtonian-flow, cm03-momentum-work-and-energy-balances, cm-math-balances |

## Your content, in full

### `cm05-two-body-central-forces-and-gravitation` — Two-body, central forces and gravitation

- `lem-cm05-radial-potential-gradient` · lemma — The radial composite $x\mapsto u(\lvert x\rvert)$ on an annulus: $C^k$ regularity and $\nabla\bigl(u\circ\lvert\cdot\rvert\bigr)(x)=u'(\lvert x\rvert)\,x/\lvert x\rvert$
- `pthm-cm05-relative-reduction` · physics-theorem — Two-body reduction of a static central pair-potential model: the relative coordinate is a central-force trajectory for the reduced mass, the centre of mass moves uniformly, and the reconstruction is a bijection
- `post-cm05-central-model` · postulate — Adopted central-force model class: static central pair potentials, the reduced one-label problem, the fixed-centre idealization, reading conventions and exclusions
- `pthm-cm05-plane-area` · physics-theorem — Planarity of the reduced orbit and the area law: the areal-velocity vector is the constant $j/(2\mu)$, the swept-area rate is $J/(2\mu)$, and both labels sweep equal areas in equal times about the centre of mass
- `pthm-cm05-effective-potential` · physics-theorem — Reduction of the central problem to the effective one-dimensional potential: $\mu\rho''=-(U^{\mathrm{eff}}_J)'(\rho)$, the energy identity, and the converse reconstruction of the planar trajectory from the radial data
- `pthm-cm05-circular-orbit` · physics-theorem — Circular relative orbits of the central model: the critical-point criterion $u'(r_0)=J^2/(\mu r_0^3)$, uniform rotation of both labels about the centre of mass, and the linearised radial frequency
- `post-cm05-gravity` · postulate — Adopted two-label gravitational model: the inverse-square pair potential with coupling parameters, the empirical mass identification, and the measured value and uncertainty of the Newtonian constant
- `pthm-cm05-conic` · physics-theorem — The inverse-square gravitational relative trajectory has the Kepler polar form: $\rho=p/(1+e\cos(\theta-\theta_0))$, $E=(\mu\kappa^2/2J^2)(e^2-1)$, elliptic completeness and barycentric scaled ellipses
- `pthm-cm05-kepler-period` · physics-theorem — Kepler's third law for the gravitational two-label model: the relative period is $T=2\pi\mu ab/J=2\pi\sqrt{\mu/\kappa}\,a^{3/2}$, so $T^2=4\pi^2a^3/(G_{\mathrm N}M)$ under the mass identification, and both labels are periodic relative to the centre of mass
- `rem-cm05-collision-scope` · remark — Scope of the two-body and central-force page: collision and radial exclusions, point-particle and finite-size limits, the empirical parameters and their uncertainty, and the conditional status of the orbit statements

### `cm05-two-body-central-forces-and-gravitation-examples` — Two-body, central forces and gravitation — Examples

- `ex-cm05-gravitational-ellipse-and-period-check` · example — An elliptic gravitational relative orbit checked on declared model data: $p=10^{6}\,$m, $e=3/5$, $a=25\cdot10^{6}/16\,$m, $b=5\cdot10^{6}/4\,$m, $E=-3.2\cdot10^{17}\,$J and $T=125\pi\cdot10^{9}/32\,$s, with $T^{2}=4\pi^{2}a^{3}/(G_{\mathrm N}M)$
- `ex-cm05-parabolic-and-hyperbolic-branch-check` · example — The parabolic and hyperbolic branches on declared model data: $E=0$ with $e=1$ and periapsis $p/2$, and $E=1.5\cdot10^{18}\,$J with $e=2$, periapsis $p/3$ and angular domain $\lvert\theta-\theta_0\rvert<2\pi/3$
- `ex-cm05-barycentric-orbits-check` · example — Barycentric orbits of two unequal masses on declared model data: $p_1=(m_2/M)p$, $p_2=(m_1/M)p$, semiaxes in the ratio $3:1$ and areal rates in the ratio $9:1$
- `ex-cm05-circular-orbit-frequency-check` · example — A gravitational circular relative orbit checked on declared model data: $r_0=2\cdot10^{6}\,$m, $\mu r_0\omega^2=u'(r_0)=3\cdot10^{12}\,$N, $E=-3\cdot10^{18}\,$J and $\omega_{\rm lin}=\omega=10^{-9}\,$s$^{-1}$
- `cex-cm05-external-force-breaks-relative-reduction` · counterexample — External forces break the two-body reduction: a two-label model with a static central pair potential and external forces $\pm\gamma$ has $\mu r''=\gamma\ne0$, although its total external force vanishes

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cm05-two-body-central-forces-and-gravitation` requires `cm-math-central`
- `cm05-two-body-central-forces-and-gravitation` requires `cm03-momentum-work-and-energy-balances`
- `cm05-two-body-central-forces-and-gravitation` requires `cm02-forces-initial-data-and-newtonian-flow`
- `cm05-two-body-central-forces-and-gravitation` requires `cm01-framework-quantities-and-geometry`
- `cm05-two-body-central-forces-and-gravitation` requires `cm-math-balances`
- `cm05-two-body-central-forces-and-gravitation-examples` requires `cm-math-central`
- `cm05-two-body-central-forces-and-gravitation-examples` requires `cm01-framework-quantities-and-geometry`
- `cm05-two-body-central-forces-and-gravitation-examples` requires `cm02-forces-initial-data-and-newtonian-flow`
- `cm05-two-body-central-forces-and-gravitation-examples` requires `cm03-momentum-work-and-energy-balances`
- `cm05-two-body-central-forces-and-gravitation-examples` requires `cm-math-balances`
- `cm14-hamilton-jacobi-and-integrability-examples` requires `cm05-two-body-central-forces-and-gravitation`
- `cm15-scattering-and-impulse-model-boundaries` requires `cm05-two-body-central-forces-and-gravitation`
- `cm15-scattering-and-impulse-model-boundaries-examples` requires `cm05-two-body-central-forces-and-gravitation`
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
