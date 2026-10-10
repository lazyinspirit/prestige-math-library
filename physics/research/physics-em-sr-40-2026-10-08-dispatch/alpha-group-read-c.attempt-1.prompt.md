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
your write scope. Step 8's lead must refresh and read the unified frontier ledger.

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
group work, `research/physics-em-sr-40-2026-10-08-alpha-groups.json` is the assignment: it permits at
most the capacity-derived group count (currently 80), with at most three batches
per group and lowercase alphabetic labels (`a` through `z`, then `aa`). A group
writes only its own artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol. Step-7
adjudicators and all three owner repair agents may fully author new items only
for genuine unmet prerequisites of assigned repairs. Use unique IDs and register
each addition in the canonical registry/index, page, applicable manifest and
contract. Resolve dependency and downstream effects before central certification
and the complete gate battery. Otherwise report the issue without changing it.
Current Step-7 dispatches also follow
`step7-adjudicator.md` or `step7-owner-repair.md`; their tasks authorize assigned
published downstream repairs across the whole library.

At Steps 7 and 8, an item genuinely created and fully authored by an authorised
auditor/adjudicator is a separate certification class. Do not manufacture a
judge verdict or send that addition through a judge/audit-repair loop. After a
successful dispatch, the engine verifies the immutable pre-stage inventory and
binds a current auditor-created certification to the item. This does not widen
write scope or waive content, dependency, source, rendering, proof-contract, or
Step-7 task ownership rules. Existing-item edits still require ordinary
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
not current coverage. Current Step-7 adjudication repairs every confirmed defect,
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

run: physics-em-sr-40-2026-10-08
role: alpha-group-read
label: c
covers: c

# Step 6 Alpha group reader — read-only digest — group **c**, run `physics-em-sr-40-2026-10-08`

- You are the read-only Step 6 Alpha group reader for batches **29**, **30**, **31**: 3 A/B pair(s), 6 page(s), 29 item(s).

- Read every owned item and every listed seam before returning the compact
  schema-constrained digest. That file, not this conversation, is the handoff
  to a fresh Step-7 adjudicator. No judge verdict is supplied here.
- Read items in dependency order across the group: suppliers before their
  direct and indirect consumers, including prerequisites outside the group.
- In the digest, `pages_read` is exactly the ids under **Your pages** and
  `items_read` exactly the ids under **Your content**. External items you
  open belong only in `published_dependencies`; never add them to those inventories.
- Everything below is derived from disk by `tools/physics-support/step7-scope.mjs`; no line
  of it is a judgement about mathematics.

## Read scope

- **Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

- **This dispatch is read-only.** Record concerns about owned items and alerts
  about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 29 | `em-material-response` | A | classical-electromagnetism | 337 | `em-causal-response-and-radiation-prerequisites`, `em-maxwell-integral-and-constraints`, `density-separability-and-convolution-in-lp`, `cantor-set-baire-and-measure-zero`, `sard-theorem-and-transversality` |
| 29 | `em-material-response-examples` | B | classical-electromagnetism | 338 | `em-material-response` |
| 30 | `em-induction-and-circuit-limits` | A | classical-electromagnetism | 339 | `em-electrostatic-boundaries-and-conductors`, `em-magnetostatics-in-vacuum`, `em-material-response`, `picard-lindelof-and-first-order-odes`, `gaussian-elimination-and-row-reduction` |
| 30 | `em-induction-and-circuit-limits-examples` | B | classical-electromagnetism | 340 | `em-induction-and-circuit-limits` |
| 31 | `em-potentials-and-gauge` | A | classical-electromagnetism | 341 | `em-boundary-and-spectral-prerequisites`, `em-primitives-and-postulates`, `em-wave-equation-prerequisites`, `mixed-partials-taylor-and-extrema`, `partitions-of-unity-and-paracompactness`, `sine-cosine-and-the-definition-of-pi`, `the-seifert-van-kampen-theorem`, `em-causal-wave-kernel-prerequisites` |
| 31 | `em-potentials-and-gauge-examples` | B | classical-electromagnetism | 342 | `em-potentials-and-gauge` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `em-material-response` — Material response and stationary interfaces (7 item(s))

- `post-em-coarse-graining` · postulate — Declared averaging kernel, macroscopic scale assumptions and averaged fields
- `def-em-polarization-magnetization` · definition — Polarization, magnetization, bound and free sources, and the fields D and H
- `pthm-em-macroscopic-maxwell` · physics-theorem — The macroscopic Maxwell equations in terms of D, H and the free sources
- `post-em-material-closure` · postulate — Declared material-closure branches: linear nondispersive Ohmic response and the causal memory branch
- `pthm-em-material-stationary-jumps` · physics-theorem — Stationary macroscopic interface jump conditions for D, B, E and H
- `pthm-em-causal-dispersive-response` · physics-theorem — Specified causal material response: transfer function, dispersion relations and the passivity condition
- `pthm-em-restricted-material-energy` · physics-theorem — Energy balance and Ohmic dissipation for the constant nondispersive linear model

### `em-material-response-examples` — Material response and stationary interfaces — Examples (3 item(s))

- `ex-em-constitutive-unit-counterexample` · example — Matching units does not determine the permittivity or the response law
- `ex-em-dielectric-interface-example` · example — Planar dielectric interface with prescribed free surface charge
- `ex-em-dielectric-sphere-example` · example — Uniform-field dielectric sphere: candidate solution and its class

### `em-induction-and-circuit-limits` — Induction and circuit approximations (8 item(s))

- `lem-em-newtonian-linkage-symmetry` · lemma — Symmetry and Fubini representation of the Newtonian linkage pairing
- `lem-em-newtonian-curl-field-energy` · lemma — Curl-field energy identity for Newtonian potentials of divergence-free compact currents
- `def-em-moving-circuit-geometry` · definition — C2 moving material circuit: swept patch, single-valued material velocity, flux and electromotive force
- `post-em-circuit-approximation` · postulate — Electro- and magneto-quasistatic lumped circuit model
- `pthm-em-motional-emf` · physics-theorem — Moving-loop electromotive force equals the negative flux derivative
- `pthm-em-inductance-reciprocity` · physics-theorem — Linear flux linkage, reciprocal mutual inductance and magnetic energy of compact smooth conserved currents
- `pthm-em-inductor-energy` · physics-theorem — Restricted inductor energy LI^2/2 and its identification with the frozen magnetic field energy
- `pthm-em-rl-lc-dynamics` · physics-theorem — Restricted RL decay and LC oscillation under the adopted circuit model

### `em-induction-and-circuit-limits-examples` — Induction and circuit approximations — Examples (3 item(s))

- `texp-em-sliding-bar-emf` · thought-experiment — Sliding bar on fixed rails: motional emf and mechanical-electrical power balance
- `ex-em-transformer-idealization` · example — Two-circuit mutual inductance, the perfect-linkage bound and ideal-transformer limitations
- `ex-em-rl-time-response` · example — Exponential RL response under a constant terminal voltage

### `em-potentials-and-gauge` — Potentials and gauge (5 item(s))

- `pthm-em-spacetime-potentials` · physics-theorem — Smooth scalar and vector potentials on a star-shaped space-time region
- `def-em-gauge-transformation` · definition — Potential representations, gauge transformations and gauge equivalence of the framework's fields
- `pthm-em-gauge-invariance` · physics-theorem — Gauge transformations preserve the field pair: invariance of the electric and magnetic fields
- `pthm-em-lorenz-gauge-wave-form` · physics-theorem — Maxwell's equations in potential form: the Lorenz divergence, the decoupled wave equations and residual generators
- `pthm-em-gauge-reachability` · physics-theorem — Gauge reachability: Lorenz gauge on the all-space slab and Coulomb gauge on a bounded smooth domain, with residual freedom

### `em-potentials-and-gauge-examples` — Potentials and gauge — Examples (3 item(s))

- `ex-em-topological-potential-obstructions` · example — Topological obstructions to global potentials: a curl-free loop field and a divergence-free sphere-flux field
- `ex-em-pure-gauge-fields` · example — Nonzero pure-gauge potentials representing the zero field pair
- `ex-em-residual-lorenz-example` · example — A homogeneous-wave gauge generator changes Lorenz potentials without changing their fields

## Your seams

Your pages depend on another group's:

- `em-material-response` requires `em-causal-response-and-radiation-prerequisites` (group i, batch 19)
- `em-material-response` requires `em-maxwell-integral-and-constraints` (group a, batch 24)
- `em-induction-and-circuit-limits` requires `em-electrostatic-boundaries-and-conductors` (group b, batch 26)
- `em-induction-and-circuit-limits` requires `em-magnetostatics-in-vacuum` (group b, batch 28)
- `em-potentials-and-gauge` requires `em-boundary-and-spectral-prerequisites` (group h, batch 18)
- `em-potentials-and-gauge` requires `em-primitives-and-postulates` (group a, batch 23)
- `em-potentials-and-gauge` requires `em-wave-equation-prerequisites` (group h, batch 17)
- `em-potentials-and-gauge` requires `em-causal-wave-kernel-prerequisites` (group i, batch 21)

Another group's pages depend on yours:

- `em-wave-interfaces-and-conductors` (group d) requires your `em-material-response`
- `em-waveguides-and-cavities` (group e) requires your `em-material-response`
- `em-retarded-fields-and-radiation` (group e) requires your `em-potentials-and-gauge`
- `em-empirical-tests-and-scope` (group f) requires your `em-material-response`
- `em-scattering-and-scalar-diffraction` (group f) requires your `em-material-response`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

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

# Step 6 Alpha group reader — read-only digest, `physics-em-sr-40-2026-10-08`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.


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
