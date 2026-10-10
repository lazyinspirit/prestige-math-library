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
label: e
covers: e

# Step 6 Alpha group reader — read-only digest — group **e**, run `physics-em-sr-40-2026-10-08`

- You are the read-only Step 6 Alpha group reader for batches **35**, **36**, **37**: 3 A/B pair(s), 6 page(s), 32 item(s).

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
| 35 | `em-waveguides-and-cavities` | A | classical-electromagnetism | 349 | `em-electrostatic-boundaries-and-conductors`, `em-material-response`, `em-vacuum-waves-and-polarization`, `sine-cosine-and-the-definition-of-pi`, `limits-of-real-functions` |
| 35 | `em-waveguides-and-cavities-examples` | B | classical-electromagnetism | 350 | `em-waveguides-and-cavities`, `harmonic-functions-and-the-poisson-integral` |
| 36 | `em-retarded-fields-and-radiation` | A | classical-electromagnetism | 351 | `em-causal-response-and-radiation-prerequisites`, `em-electrostatic-multipoles`, `em-energy-momentum-and-angular-balance`, `em-potentials-and-gauge`, `em-retarded-point-prerequisites` |
| 36 | `em-retarded-fields-and-radiation-examples` | B | classical-electromagnetism | 352 | `em-retarded-fields-and-radiation` |
| 37 | `em-lorentz-covariant-formulation` | A | classical-electromagnetism | 353 | `em-vacuum-waves-and-polarization`, `sr-light-and-doppler` |
| 37 | `em-lorentz-covariant-formulation-examples` | B | classical-electromagnetism | 354 | `em-lorentz-covariant-formulation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `em-waveguides-and-cavities` — Waveguides and cavities (10 item(s))

- `lem-em-separated-phasor-calculus` · lemma — Calculus of separated phasor fields: real-part derivative identities and amplitude injectivity
- `lem-em-transverse-vector-identities` · lemma — Transverse vector-calculus identities for the splitting $\mathbb R^3=\mathbb R^2\oplus\mathbb R e_z$
- `lem-em-rectangle-mode-profile-identities` · lemma — The separated sine and cosine rectangle profiles: eigen-identities, boundary traces, orthogonality and Dirichlet integrals
- `lem-em-rectangular-transverse-mode-completeness` · lemma — The sine and cosine systems are complete orthogonal systems of L^2 on an interval and on a rectangle
- `def-em-guide-cavity-geometry` · definition — Rectangular PEC guide and cavity geometry, the zero-normal-B reflection class, and axis-relative TE/TM/TEM
- `pthm-em-rectangular-mode-candidates` · physics-theorem — The separated TE and TM candidate modes of the lossless rectangular PEC guide: exact verification, index restrictions and cutoff
- `pthm-em-guide-dispersion-energy` · physics-theorem — The propagating candidate branch: cutoff, phase and group speeds, cross-section energy and flux, and energy transport at the group velocity
- `pthm-em-uniform-ohmic-modal-decay` · physics-theorem — Constant-Ohmic PEC modal decay and exact energy-class completeness
- `pthm-em-open-rectangular-guide-completeness` · physics-theorem — Complete longitudinal Fourier energy evolution in a rectangular PEC guide
- `pthm-em-guide-completeness` · physics-theorem — Complete mode expansions of the declared guide and cavity classes: transverse profile completeness, the rectangular reflection class and the smooth PEC cavity eigenbasis

### `em-waveguides-and-cavities-examples` — Waveguides and cavities — Examples (3 item(s))

- `ex-em-te-ten-example` · example — The TE10 candidate of a lossless rectangular guide: explicit fields, cutoff and propagating branch
- `ex-em-rectangular-cavity-example` · example — A rectangular-cavity standing mode at resonance: explicit fields and the PEC end-cap check
- `ex-em-tem-topology-example` · example — TEM modes of a coaxial guide and the single-conductor obstruction for harmonic transverse potentials

### `em-retarded-fields-and-radiation` — Retarded fields and radiation (9 item(s))

- `post-em-radiation-selection` · postulate — Adopted retarded solution selection: the physical branch carries no incoming free field
- `def-em-retarded-point-geometry` · definition — Uniformly subluminal prescribed worldline, retarded root and retarded geometric data off the worldline
- `lem-em-sphere-zonal-moments` · lemma — Zonal and quadratic sphere moments for the polar surface measure on $S^2$
- `pthm-em-retarded-potentials` · physics-theorem — Retarded potentials, Lorenz gauge and Maxwell fields of a compactly supported conserved smooth source
- `pthm-em-dipole-radiation` · physics-theorem — Controlled electric-dipole far field and retarded-time radiated power of a compact smooth source
- `pthm-em-lienard-wiechert` · physics-theorem — Retarded point fields off the worldline: Lienard-Wiechert potentials, the velocity/acceleration split and the uniform far-zone remainder
- `pthm-em-larmor-nonrelativistic` · physics-theorem — Instantaneous-rest Larmor power and uniform low-speed comparison for a prescribed point charge
- `pthm-em-lienard-emitted-power` · physics-theorem — Relativistic emitted power of a prescribed point charge at a general emission event
- `rem-em-radiation-reaction-limits` · remark — Self-force, runaways and finite-size regularizations are not supplied by this page

### `em-retarded-fields-and-radiation-examples` — Retarded fields and radiation — Examples (3 item(s))

- `ex-em-no-retarded-root-example` · example — A smooth pointwise subluminal curve with no retarded root at an event
- `ex-em-dipole-antenna-example` · example — Harmonic dipole pattern and period-averaged power in the exact dipole law
- `texp-em-classical-orbit-instability` · thought-experiment — Conditional radius loss of a prescribed slowly orbiting charge in a reduced quasistatic model

### `em-lorentz-covariant-formulation` — Lorentz covariant formulation (5 item(s))

- `pthm-em-tensor-maxwell-equivalence` · physics-theorem — Tensor Maxwell equations equal the four laboratory Maxwell equations
- `pthm-em-lorentz-field-transform` · physics-theorem — Covariance, boosts and the two field invariants
- `pthm-em-observer-field-and-doppler` · physics-theorem — Observer field split and exact classical wave Doppler reading
- `pthm-em-relativistic-lorentz-force` · physics-theorem — The four-force equation reproduces the coordinate Lorentz force and power
- `pthm-em-covariant-stress-energy` · physics-theorem — The covariant field stress-energy tensor and its balance law

### `em-lorentz-covariant-formulation-examples` — Lorentz covariant formulation — Examples (2 item(s))

- `ex-em-boosted-fields-example` · example — Boosted uniform electric field and the mixed magnetic field
- `ex-em-constant-field-trajectory` · example — Exact trajectory in a uniform electric field and the failure of the unscoped Newtonian extrapolation

## Your seams

Your pages depend on another group's:

- `em-waveguides-and-cavities` requires `em-electrostatic-boundaries-and-conductors` (group b, batch 26)
- `em-waveguides-and-cavities` requires `em-material-response` (group c, batch 29)
- `em-waveguides-and-cavities` requires `em-vacuum-waves-and-polarization` (group d, batch 33)
- `em-retarded-fields-and-radiation` requires `em-causal-response-and-radiation-prerequisites` (group i, batch 19)
- `em-retarded-fields-and-radiation` requires `em-electrostatic-multipoles` (group b, batch 27)
- `em-retarded-fields-and-radiation` requires `em-energy-momentum-and-angular-balance` (group d, batch 32)
- `em-retarded-fields-and-radiation` requires `em-potentials-and-gauge` (group c, batch 31)
- `em-retarded-fields-and-radiation` requires `em-retarded-point-prerequisites` (group j, batch 22)
- `em-lorentz-covariant-formulation` requires `em-vacuum-waves-and-polarization` (group d, batch 33)
- `em-lorentz-covariant-formulation` requires `sr-light-and-doppler` (group l, batch 7)

Another group's pages depend on yours:

- `em-empirical-tests-and-scope` (group f) requires your `em-retarded-fields-and-radiation`
- `em-action-and-variational-formulation` (group f) requires your `em-lorentz-covariant-formulation`
- `em-scattering-and-scalar-diffraction` (group f) requires your `em-lorentz-covariant-formulation`
- `em-scattering-and-scalar-diffraction` (group f) requires your `em-retarded-fields-and-radiation`

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
