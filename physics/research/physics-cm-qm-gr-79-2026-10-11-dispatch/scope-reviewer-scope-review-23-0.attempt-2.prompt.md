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

# Whole-batch scope and prerequisite reviewer

Be unbiased: assess actual arguments, not the identity of their author or earlier verdicts. Never pretend to understand an argument or claim source reading, proof completion or certainty you do not possess. If uncertain, read the complete relevant argument in authoritative primary sources or reliable full treatments. Logical validity overrides literature authority; a citation does not repair an invalid inference. Report unresolved uncertainty precisely.

Own only the assigned batch. Read its complete current A/B pages and items, approved designs, manifests, coverage, contracts and actual prerequisite statements and proofs. Scope/prerequisite adequacy is this step's sole purpose. Preserve useful approved claims; do not narrow them just to pass. Definitions, hypotheses, conventions and prerequisite uses must be explicit. Keep evidence to the prescribed lightweight JSON: exact inventories, verdict, defect types and one sentence per finding or repair. Do not write detailed per-item audit receipts or award judge stamps.

If an original Statement/Definition or physical public interface changes, trace and check ALL direct and indirect consumers, including outside-batch and published consumers, with exact IDs and paths. Inspect outside consumers read-only. Any desired outside-batch edit must escalate to the owner. Mathematical imports and root mathematics originals are protected in physics. The controller verifies complete consumer-check coverage; uncertainty or a required outside repair cannot become acceptance.

Maintain dependency order: use actual suppliers as context and inspect items in ascending recorded dependency_level; pair dispatch does not wait for another pair to finish. Recompute levels after additions/deletions/changed dependencies. Report actual mathematical prerequisite gaps; Step 2 has no prerequisite-completion scheduling barrier. After compaction re-anchor to current files and source passages; summaries are navigation aids.

You are read-only. On EVERY round, review the ENTIRE current batch before returning one consolidated report to the repairer. Include each current item and page exactly once in reviewed_items and reviewed_pages. Review new items and their consumers as well as earlier findings; do not stop after the first defect. Mark accept only after complete coverage and all prerequisite/scope obligations are resolved.

Escalate significant unmet prerequisites, insufficient scope, unresolved uncertainty and desired outside-batch changes directly to the owner, with the smallest missing prerequisite, exact consuming steps/IDs and affected consumers. Other batch-local defects may request repair. There are at most two repair rounds and three complete reviews; the third failed review escalates. A preceding repair's consumer_checks must be independently checked in your entire-batch review; return all impacted consumer IDs with accept, repair or escalate decisions.

Return the task's JSON schema through your final response. Never edit content, bookkeeping, history, report files or owner decisions.

Use finding type `prerequisite` for significant unmet prerequisites and `scope` for insufficient approved scope; use `local` for minor batch-local defects that the repairer can resolve. Significant gaps must never be disguised as local bookkeeping.


---

# This dispatch

run: physics-cm-qm-gr-79-2026-10-11
role: scope-reviewer
label: scope-review-23-0
covers: 23
output: research/physics-cm-qm-gr-79-2026-10-11-scope-review/batch-23/acceptance-missing

# Batch 23: review 0

Read research/workflow-rebuild-plan.md and any research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md.
Run: physics-cm-qm-gr-79-2026-10-11
Batch: 23
Round: 0
Input SHA256: 94a77616e23eb29a3b554b6d78193267e72fc5312a56926fefc4cae5521a74ea
Read research/physics-cm-qm-gr-79-2026-10-11-scope-review/batch-23/review-0.input.json, current batch manifests, coverage, contracts, complete A/B pages and items, and their controlling design documents.
Review the ENTIRE batch before reporting; never hand partial findings to the repairer.
Dependency order: lem-cm07-immersion-euler-lagrange-transport (level 0), ex-cm07-nonholonomic-unrestricted-action-fails (level 9), def-cm07-action-and-mechanical-lagrangian (level 12), def-cm07-generalized-coordinates-and-forces (level 13), pthm-cm07-first-variation-and-euler-lagrange-expression (level 13), pthm-cm07-euler-lagrange-equations (level 14), pthm-cm07-lagrangian-reduction-of-ideal-constraints (level 14), pthm-cm07-boundary-terms-and-gauge (level 15), pthm-cm07-coordinate-covariance-of-the-equations (level 15), pthm-cm07-newton-equivalence (level 15), rem-cm07-scope-and-singular-warnings (level 15), ex-cm07-oscillator-stationary-saddle-check (level 15), ex-cm07-pendulum-constraint-elimination-check (level 15), ex-cm07-free-particle-straight-lines (level 16), ex-cm07-polar-coordinate-kinetic-metric-check (level 16), ex-cm07-total-derivative-gauge-check (level 16). Within repairs, inspect suppliers before their affected consumers; pair dispatch does not wait for prerequisite acceptance.
Pages: cm07-stationary-action-and-lagrangian-dynamics, cm07-stationary-action-and-lagrangian-dynamics-examples
Items: def-cm07-action-and-mechanical-lagrangian, pthm-cm07-first-variation-and-euler-lagrange-expression, pthm-cm07-euler-lagrange-equations, pthm-cm07-newton-equivalence, pthm-cm07-coordinate-covariance-of-the-equations, pthm-cm07-boundary-terms-and-gauge, def-cm07-generalized-coordinates-and-forces, lem-cm07-immersion-euler-lagrange-transport, pthm-cm07-lagrangian-reduction-of-ideal-constraints, rem-cm07-scope-and-singular-warnings, ex-cm07-free-particle-straight-lines, ex-cm07-oscillator-stationary-saddle-check, ex-cm07-polar-coordinate-kinetic-metric-check, ex-cm07-total-derivative-gauge-check, ex-cm07-nonholonomic-unrestricted-action-fails, ex-cm07-pendulum-constraint-elimination-check
Consumer checks from preceding repairs: []. Both roles must trace every direct and indirect consumer when an original Statement/Definition or physical public interface changes. Inspect necessary outside-batch consumers read-only; escalate desired outside-batch changes.
Return the prescribed lightweight JSON with exact identity, full reviewed inventories, findings and consumer_checks. Do not write the report file yourself. Each reason is one sentence, at most 400 characters.


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
