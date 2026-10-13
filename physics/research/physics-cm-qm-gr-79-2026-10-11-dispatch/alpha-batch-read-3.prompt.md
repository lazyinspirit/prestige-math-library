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
label: 3
covers: 3

# Step 4 batch reviewer — batch **3**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **3**. Step-5 owning group: **l**.
Return `group: "l"` and `batches: ["3"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 3 | `cm-math-dynamics` | A | cm-math-balances, cm-math-geometry, mixed-partials-taylor-and-extrema, modules-over-a-pid-and-canonical-forms, the-complex-exponential-and-eulers-formula, the-spectral-theorem-and-singular-value-decomposition, complexification-realification-and-real-structures, diagonalisation-and-the-minimal-polynomial, continuity-ivt-evt-and-uniform-continuity, euclidean-ordinary-differential-equations-with-smooth-dependence, finite-dimensional-normed-spaces-and-riesz-lemma, hamiltonian-mechanics-and-completely-integrable-systems, improper-integrals, inverse-and-implicit-function-theorems, limits-of-real-functions, measure-preserving-transformations-and-poincare-recurrence, monoids-groups-and-subgroups, norming-and-separation-under-hahn-banach, polynomial-rings-and-roots, sard-theorem-and-transversality, sequences-and-limits, series-and-nonnegative-tests, sine-cosine-and-the-definition-of-pi, strongly-continuous-semigroups-and-hille-yosida, suprema-and-infima, the-determinant-of-a-linear-operator, the-logarithm-and-general-powers, topological-spaces-and-continuity |
| 3 | `cm-math-dynamics-examples` | B | cm-math-dynamics, finite-probability-and-the-probabilistic-method, the-exponential-function, the-derivative-and-mean-value-theorems, cm-math-geometry |

## Your content, in full

### `cm-math-dynamics` — Cm Math Dynamics

- `def-cm-local-flow-of-an-autonomous-system` · definition — The local flow of an autonomous first-order system
- `lem-cm-local-flow-composition-law` · lemma — The local flow is a partial one-parameter group: identity, composition and inverse-time laws
- `lem-cm-continuous-dependence-on-initial-data` · lemma — Continuous and Lipschitz dependence on the initial condition on a Picard-Lindelof cylinder
- `thm-cm-smooth-dependence-and-the-variational-equation` · theorem — C¹ dependence of an autonomous flow on the initial condition, and the variational equation
- `cor-cm-flow-domain-open-and-flow-is-c1` · corollary — The flow domain of a C¹ autonomous field is open and the flow is C¹ on it
- `prop-cm-first-return-map-is-a-local-c1-diffeomorphism` · proposition — A transversal return of a C¹ flow yields a local C¹ Poincaré map, with inverse given by the reversed crossing
- `def-cm-finite-time-tangent-growth-rate-and-lyapunov-exponent` · definition — Finite-time tangent growth rates and Lyapunov exponents of a C¹ flow
- `def-cm-bilateral-shift-space-and-cylinders` · definition — The bilateral two-symbol shift space, its metric, its shift map and its cylinder sets
- `lem-cm-bilateral-shift-metric-and-sequential-compactness` · lemma — The bilateral shift metric is a metric, cylinders are its basic balls, and the shift space is sequentially compact
- `def-cm-topologically-mixing-dense-periodic-and-sensitive-maps` · definition — Topological mixing, dense periodic points, sensitive dependence, and the stated chaos list
- `thm-cm-bilateral-shift-mixing-dense-periodic-and-sensitive` · theorem — The bilateral two-symbol shift is continuous, topologically mixing, has dense periodic points and is sensitive; it is chaotic in the stated sense
- `rem-cm-recurrence-scope-for-mechanical-systems` · remark — Scope of Poincaré recurrence for mechanical systems: finite invariant volume and complete return maps
- `thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism` · theorem — Exponential dichotomy for a hyperbolic endomorphism: invariant stable and unstable subspaces with exponential estimates
- `thm-cm-exponential-stability-by-a-lyapunov-quadratic-form` · theorem — An equilibrium whose linearisation has all eigenvalues in the open left half-plane is locally exponentially stable
- `thm-cm-instability-of-a-hyperbolic-saddle` · theorem — A hyperbolic equilibrium whose linearisation has an eigenvalue with positive real part is unstable
- `def-cm-mechanical-vector-field-and-energy-in-a-chart` · definition — The mechanical first-order field, Lagrangian and energy of a configuration-dependent kinetic metric in a chart
- `lem-cm-energy-conservation-for-the-mechanical-system` · lemma — Energy is conserved along solutions of the mechanical system with a configuration-dependent kinetic metric
- `lem-cm-positive-definite-matrix-square-roots` · lemma — Positive definite symmetric matrices have positive definite square roots, and the congruence M^{-1/2} K M^{-1/2} preserves symmetry and positivity
- `lem-cm-strict-minimum-has-positive-semidefinite-hessian` · lemma — A C² local minimum has vanishing gradient and positive semidefinite Hessian
- `thm-cm-quadratic-mode-decomposition` · theorem — Decoupling of the constant-coefficient quadratic system $Mq''+Kq=0$ into normal modes, with the zero-mode and energy identities
- `thm-cm-energy-stability-of-a-strict-minimum` · theorem — A strict local minimum of the potential gives a Lyapunov stable equilibrium of the mechanical system, by energy conservation
- `prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium` · proposition — Linearisation of the mechanical system at an equilibrium: M(q_0) xi'' + D²U(q_0) xi = 0, and the small-oscillation quadratic model
- `rem-cm-scope-of-energy-stability-and-quadratic-modes` · remark — Scope of the quadratic-mode and energy-stability results: exact quadratic model versus linearisation approximation

### `cm-math-dynamics-examples` — Cm Math Dynamics — Examples

- `ex-cm-flow-of-a-linear-system-is-the-matrix-exponential` · example — The flow and variational equation of a linear system: Phi(t,a)=e^{tA}a
- `ex-cm-coupled-oscillator-modes` · example — Two coupled equal masses: mode frequencies sqrt(k/m) and sqrt((k+2c)/m), and the free zero mode when k=0
- `ex-cm-planar-harmonic-oscillator-return-map` · example — The Poincaré return map of the planar isotropic oscillator on the line y=0 is the reflection x->-x
- `ex-cm-bilateral-shift-finite-checks` · example — Explicit mixing, periodic and sensitivity checks in the bilateral shift
- `ex-cm-jordan-block-dichotomy-computed` · example — Computed dichotomy constants for a Jordan block and for a diagonal sink-source
- `cex-cm-nonhyperbolic-equilibria-defeat-exponential-conclusions` · counterexample — A non-hyperbolic equilibrium with no positive eigenvalue can still be unstable: x'=x^3

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cm-math-dynamics` requires `cm-math-balances`
- `cm-math-dynamics` requires `cm-math-geometry`
- `cm-math-dynamics-examples` requires `cm-math-geometry`
- `cm04-one-dimensional-conservative-and-dissipative-models` requires `cm-math-dynamics`
- `cm04-one-dimensional-conservative-and-dissipative-models-examples` requires `cm-math-dynamics`
- `cm09-coupled-oscillations-and-approximation` requires `cm-math-dynamics`
- `cm09-coupled-oscillations-and-approximation-examples` requires `cm-math-dynamics`
- `cm16-stability-perturbations-and-chaos` requires `cm-math-dynamics`
- `cm16-stability-perturbations-and-chaos-examples` requires `cm-math-dynamics`
- `cm18-measurement-uncertainty-and-later-bridges` requires `cm-math-dynamics`
- `cm-math-variations` requires `cm-math-dynamics`
- `cm-math-variations-examples` requires `cm-math-dynamics`
- `cm-math-canonical` requires `cm-math-dynamics`
- `cm-math-approximation` requires `cm-math-dynamics`
- `cm-math-approximation-examples` requires `cm-math-dynamics`
- `cm-math-continuum` requires `cm-math-dynamics`
- `cm-math-numerical` requires `cm-math-dynamics`
- `cm-math-chaos` requires `cm-math-dynamics`
- `cm-math-chaos-examples` requires `cm-math-dynamics`
- `cm-math-kam` requires `cm-math-dynamics`
- `cm-math-rotation-double-cover` requires `cm-math-dynamics`
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
