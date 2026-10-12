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

Step 2 is only substantive review, local source repair and escalation. Read the complete assigned A/B pages and items, approved designs, and the actual prerequisite statements and proofs. Use existing records only as navigation context. Preserve the richest sound approved claims. Make definitions, hypotheses, conventions, source premises and prerequisite uses explicit.

Do not perform hashing, rehashing, certification, recertification, dependency-level reconciliation, manifest/coverage/proof-contract maintenance, evidence-ledger work or automated formatting/validator commands in Step 2. The orchestrator handles metadata and recertification before running the Step-2 gates under the owner's authority. Return only the lightweight substantive result: assigned identity and inventory, decision, concise findings and required consumer dispositions; no hash or audit receipt.

If an original Statement/Definition or physical public interface changes, the same agent traces and checks ALL direct and indirect consumers using old/current dependencies, aliases and nonlogical uses, including published consumers. Check actual supplier uses and assumptions. Repair consumers only within the assigned source write scope; report any required outside repair to the owner. Imported mathematical snapshots and originals outside the content workspace are read-only.

Inspect actual suppliers before their consumers within the assigned work; mathematical dependencies determine this order. Pair dispatch does not wait for prerequisite-pair acceptance. After compaction, re-anchor to current files and source passages; summaries are navigation aids.

You are read-only. Review the ENTIRE current batch on each round, including additions and complete A/B pages, before returning one consolidated report. Include each assigned item and page exactly once in reviewed_items and reviewed_pages. Check every earlier finding and required consumer disposition; do not stop at the first defect. Accept only after complete substantive coverage and resolved scope/prerequisite obligations.

The sequence is review/accept -> ONE local repair -> final review/accept -> owner escalation. There are at most two complete reviews and one local repair. On the first review, request repair for defects that can be resolved locally on the same page. Escalate immediately when a significant prerequisite gap cannot be rigorously resolved locally on that page. If the second review is still unsatisfied for any reason, escalate to the owner; never request a second engine repair. Give the smallest missing prerequisite, exact consuming steps/IDs and affected consumers. Independently check the local repair's affected consumers and include every required disposition.

Return the task's JSON schema through your final response. Never edit content, bookkeeping, history, report files or owner decisions. Use finding type prerequisite for significant prerequisite gaps, scope for insufficient approved scope and local for page-local defects. The owner/orchestrator alone resolves escalations and runs the Step-2 gates and recertification.


---

# This dispatch

run: physics-cm-qm-gr-79-2026-10-11
role: scope-reviewer
label: scope-review-71-0
covers: 71
output: research/physics-cm-qm-gr-79-2026-10-11-scope-review/batch-71/acceptance-missing

# Batch 71: review 0

Run: physics-cm-qm-gr-79-2026-10-11
Batch: 71
Round: 0
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: gr-flat-and-newtonian-bridges, gr-flat-and-newtonian-bridges-examples
Items: def-gr-minkowski-model-and-inertial-chart, lem-gr-flat-model-connection-curvature-and-geodesics, def-gr-flat-linearized-perturbation, thm-gr-flat-linearized-curvature-and-gauge, thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge, def-gr-stationary-weak-field-data, lem-gr-weak-field-admissibility-and-inverse-bounds, lem-gr-weak-field-christoffel-bounds, thm-gr-weak-field-einstein-stress-hierarchy, lem-gr-weak-field-geodesic-acceleration, thm-gr-weak-field-scaled-trajectory-limit, lem-gr-observer-relative-velocity-expansions, thm-gr-vanishing-curvature-implies-locally-minkowski, def-gr-newtonian-comparison-model-and-identification, pthm-gr-minkowski-vacuum-model, pthm-gr-uniform-weak-slow-correspondence, rem-gr-local-flatness-versus-global-flatness, rem-gr-flat-bridge-scope-and-limits, ex-gr-linearized-curvature-of-the-diagonal-perturbation, ex-gr-minkowski-free-fall-and-clock-identities, ex-gr-observer-velocity-expansion-numeric-check, ex-gr-weak-field-poisson-quadratic-potential, ex-gr-scaled-newtonian-harmonic-trajectory, cex-gr-first-order-vacuum-is-not-exact-vacuum, cex-gr-flat-quotient-is-not-globally-minkowski
Repair suppliers before their affected consumers; pair dispatch has no prerequisite-completion requirement. Preserve sound approved claims and avoid Statement/Definition changes when possible. If a public interface changes, the same repairer owns all affected direct/indirect consumer checks and authorized repairs.
Your duties are review, repair and escalation only. Do not hash, recertify, reconcile dependency levels, maintain manifests/coverage/contracts/ledgers, or run formatting/gate batteries. The owner orchestrator handles that work.
Return only the result schema with prepared reviewed_items/reviewed_pages, verdict, concise findings and consumer_checks. Do not edit reports or engine state.
Escalate to the owner if the final second review remains unsatisfied, or a significant prerequisite gap cannot be resolved locally on the same page. Otherwise use the single local repair and final review.
Previous repair consumers: [].


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
