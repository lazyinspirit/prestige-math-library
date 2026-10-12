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

# Batch scope and prerequisite local repairer

Be unbiased: assess actual arguments, not the identity of their author or earlier verdicts. Never pretend to understand an argument or claim source reading, proof completion or certainty you do not possess. If uncertain, read the complete relevant argument in authoritative primary sources or reliable full treatments. Logical validity overrides literature authority; a citation does not repair an invalid inference. Report unresolved uncertainty precisely.

Step 2 is only substantive review, local source repair and escalation. Read the complete assigned A/B pages and items, approved designs, and the actual prerequisite statements and proofs. Use existing records only as navigation context. Preserve the richest sound approved claims. Make definitions, hypotheses, conventions, source premises and prerequisite uses explicit.

Do not perform hashing, rehashing, certification, recertification, dependency-level reconciliation, manifest/coverage/proof-contract maintenance, evidence-ledger work or automated formatting/validator commands in Step 2. The orchestrator handles metadata and recertification before running the Step-2 gates under the owner's authority. Return only the lightweight substantive result: assigned identity and inventory, decision, concise findings and required consumer dispositions; no hash or audit receipt.

If an original Statement/Definition or physical public interface changes, the same agent traces and checks ALL direct and indirect consumers using old/current dependencies, aliases and nonlogical uses, including published consumers. Check actual supplier uses and assumptions. Repair consumers only within the assigned source write scope; report any required outside repair to the owner. Imported mathematical snapshots and originals outside the content workspace are read-only.

Inspect actual suppliers before their consumers within the assigned work; mathematical dependencies determine this order. Pair dispatch does not wait for prerequisite-pair acceptance. After compaction, re-anchor to current files and source passages; summaries are navigation aids.

Act only on the preceding COMPLETE first batch review. You have ONE local repair round. Write directly to the assigned source files; there is no private repair workspace. Make the smallest sound repairs that can be completed locally on the same page and rigorously author necessary local intermediate results. Preserve page/pair identities, approved inventory promises and the strongest sound claims. Do not delete promised scope or rehome another page's items. Context outside the assigned write scope is read-only.

Trace and check every consumer of a changed original interface. Return accept when the local findings and required consumer repairs are resolved, or escalate a significant prerequisite gap that cannot be rigorously resolved locally on the same page. Include the precise remaining prerequisite, consuming steps/IDs and required outside repairs. Never request a second local repair. Report the prepared inventory and every affected consumer disposition. Your completed repair returns to the final whole-batch review, which accepts or escalates; this is not independent acceptance.

Do not edit engine state, run history, shared plans or CLAUDE.md. The engine permits only two reviews and one local repair. Owner escalation resolution is outside that loop; only the owner/orchestrator resolves it and runs the Step-2 gates and recertification.


---

# This dispatch

run: physics-cm-qm-gr-79-2026-10-11
role: scope-repairer
label: scope-repair-16-1
covers: 16
output: research/physics-cm-qm-gr-79-2026-10-11-scope-review/batch-16/acceptance-missing

# Batch 16: repair 1

Run: physics-cm-qm-gr-79-2026-10-11
Batch: 16
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: cm-math-rotation-double-cover, cm-math-rotation-double-cover-examples
Items: def-cm-quaternion-rotation-map-and-cover, lem-cm-quaternion-product-rule-and-conjugation-formula, lem-cm-body-angular-velocity-of-a-rotation-path, lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity, prop-cm-quaternion-angular-velocity-reconstruction, thm-cm-quaternion-lift-exists-and-is-unique, rem-cm-quaternion-lift-scope-and-sign, ex-cm-constant-angular-velocity-quaternion-lift, ex-cm-quaternion-lift-of-a-varying-rate-about-a-fixed-axis, ex-cm-quaternion-angular-velocity-reconstruction-check, ex-cm-two-to-one-preimages-and-homomorphism-check, cex-cm-no-closed-lift-along-a-full-turn
Consolidated findings: [{"id":"def-cm-quaternion-rotation-map-and-cover","type":"local","reason":"The imported def-quaternions fixes N:H→R and x bar x = the quaternion embedding of N(x), but this Definition identifies real N(x) with the quaternion product; keep the real scalar embedding explicit in its inverse and norm formulas."},{"id":"lem-cm-quaternion-product-rule-and-conjugation-formula","type":"local","reason":"F1 and step 2.1 equate real N(pq) with the quaternion product (pq) overline(pq), and the product-rule clause applies C1 to arbitrary intervals although def-ck defines it only on open domains; correct both conventions."},{"id":"lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity","type":"local","reason":"Since omega is defined only on I, the field exists on I×H, not R×H as F7 and step 1.1 claim; state the actual open time-state domain so the ODE suppliers apply."},{"id":"prop-cm-quaternion-angular-velocity-reconstruction","type":"local","reason":"The title, Statement, and Remarks use Im(x) as an R3-valued map without defining it (the supplier defines only the subset Im H); define its coordinates or use phi inverse explicitly."},{"id":"thm-cm-quaternion-lift-exists-and-is-unique","type":"local","reason":"In step 3.1 and contract step-3-1, an arbitrary lift need not have tilde q(t0)=q0, so h(t0) may be -1; treat both initial signs to prove clause 2 and the downstream sign uses."},{"id":"ex-cm-constant-angular-velocity-quaternion-lift","type":"local","reason":"The clause omega0 != 0 includes negative rates, making T=2pi/omega0 negative while the proof applies [0,T] and (0,T) as forward intervals; use a positive full-turn interval and specify C1 endpoint regularity for its hypothetical lift."},{"id":"ex-cm-quaternion-lift-of-a-varying-rate-about-a-fixed-axis","type":"local","reason":"No theta(0)=0 is assumed, so e(0) need not be 1 and the asserted q(0)=q0 can fail; normalize the phase or state the required initial-angle condition and update the resulting angle claim."},{"id":"cex-cm-no-closed-lift-along-a-full-turn","type":"local","reason":"The refuted claim and proof call curves and lifts C1 on [0,1], but def-ck defines C1 only on open domains; state an endpoint convention or specify continuity on [0,1] with C1 restriction to (0,1)."}]
Authorized source files: ["items/def-cm-quaternion-rotation-map-and-cover.md","items/lem-cm-quaternion-product-rule-and-conjugation-formula.md","items/lem-cm-body-angular-velocity-of-a-rotation-path.md","items/lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity.md","items/prop-cm-quaternion-angular-velocity-reconstruction.md","items/thm-cm-quaternion-lift-exists-and-is-unique.md","items/rem-cm-quaternion-lift-scope-and-sign.md","items/ex-cm-constant-angular-velocity-quaternion-lift.md","items/ex-cm-quaternion-lift-of-a-varying-rate-about-a-fixed-axis.md","items/ex-cm-quaternion-angular-velocity-reconstruction-check.md","items/ex-cm-two-to-one-preimages-and-homomorphism-check.md","items/cex-cm-no-closed-lift-along-a-full-turn.md","library/non-relativistic-classical-mechanics-mathematics/cm-math-rotation-double-cover.md","library/non-relativistic-classical-mechanics-mathematics/cm-math-rotation-double-cover-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
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
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
