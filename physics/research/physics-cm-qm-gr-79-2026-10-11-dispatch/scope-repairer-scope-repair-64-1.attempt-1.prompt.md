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
label: scope-repair-64-1
covers: 64
output: research/physics-cm-qm-gr-79-2026-10-11-scope-review/batch-64/acceptance-missing

# Batch 64: repair 1

Run: physics-cm-qm-gr-79-2026-10-11
Batch: 64
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: qm-light-matter-and-spectral-transitions, qm-light-matter-and-spectral-transitions-examples
Items: lem-nrqm-light-matter-first-order-photon-energy-law, def-nrqm-light-matter-framework-finite-level-coupled-model, def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength, def-nrqm-light-matter-framework-spectral-transition-and-detection, post-nrqm-light-matter-vacuum-preparation-and-emission-assumption, pthm-nrqm-light-matter-first-order-emission-and-absorption-coefficients, pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading, pthm-nrqm-light-matter-stimulated-dipole-drive-transitions, pthm-nrqm-light-matter-dipole-selection-rules, rem-nrqm-light-matter-scope-and-empirical-status, ex-nrqm-light-matter-two-level-dipole-drive-check, ex-nrqm-light-matter-hydrogen-dipole-angular-factors, texp-nrqm-light-matter-spectral-density-and-detected-photon-comparison, rem-nrqm-light-matter-examples-scope-limits
Consolidated findings: [{"id":"thm-nrqm-orbital-and-spin-dipole-angular-selection-rules","type":"prerequisite","reason":"Its Statement (a) defines c± using ±(-i), inconsistent with Q±=(x1±ix2)/√2. For h=x2, l=1, q=+, the stated G+ gives Δ(r²G+)=-i√2 while Δ(Q+h)=i√2, so R+ is not harmonic; proof step 1.1 does not establish the degree rule. Assigned pthm-nrqm-light-matter-dipole-selection-rules relies on clause (d) in Facts [F2] and Proof 2.1. Add a direct corrected angular degree and weight proof on that consumer page."},{"id":"qm-light-matter-and-spectral-transitions","type":"local","reason":"The page says the selection-rule zeros transfer to every declared finite-level subspace spanned by bound states. The cited theorem’s clause (e) requires the declared orthonormal basis to be chosen from that bound-state subfamily, while the model definition permits arbitrary bases. State the basis condition."},{"id":"qm-light-matter-and-spectral-transitions-examples","type":"local","reason":"The page says the detected-photon laws differ at every finite time without the item’s qualifications: the result is for t>0, and interpreting the formal normalized law as a one-photon preparation requires η0≠0. Preserve those conditions in the summary."}]
Authorized source files: ["items/lem-nrqm-light-matter-first-order-photon-energy-law.md","items/def-nrqm-light-matter-framework-finite-level-coupled-model.md","items/def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength.md","items/def-nrqm-light-matter-framework-spectral-transition-and-detection.md","items/post-nrqm-light-matter-vacuum-preparation-and-emission-assumption.md","items/pthm-nrqm-light-matter-first-order-emission-and-absorption-coefficients.md","items/pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading.md","items/pthm-nrqm-light-matter-stimulated-dipole-drive-transitions.md","items/pthm-nrqm-light-matter-dipole-selection-rules.md","items/rem-nrqm-light-matter-scope-and-empirical-status.md","items/ex-nrqm-light-matter-two-level-dipole-drive-check.md","items/ex-nrqm-light-matter-hydrogen-dipole-angular-factors.md","items/texp-nrqm-light-matter-spectral-density-and-detected-photon-comparison.md","items/rem-nrqm-light-matter-examples-scope-limits.md","library/non-relativistic-quantum-mechanics/qm-light-matter-and-spectral-transitions.md","library/non-relativistic-quantum-mechanics/qm-light-matter-and-spectral-transitions-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
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
