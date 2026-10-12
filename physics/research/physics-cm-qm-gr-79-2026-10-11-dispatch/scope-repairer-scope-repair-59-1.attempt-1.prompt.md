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
label: scope-repair-59-1
covers: 59
output: research/physics-cm-qm-gr-79-2026-10-11-scope-review/batch-59/acceptance-missing

# Batch 59: repair 1

Run: physics-cm-qm-gr-79-2026-10-11
Batch: 59
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: qm-controlled-approximations, qm-controlled-approximations-examples
Items: lem-nrqm-approximations-scaled-line-model-correspondence, lem-nrqm-approximations-finite-rank-gapped-cluster-projection, def-nrqm-approximations-framework-variational-trial-model, def-nrqm-approximations-framework-perturbed-family-model, def-nrqm-approximations-framework-wkb-regime-model, post-nrqm-approximations-static-finite-level-dipole-coupling, pthm-nrqm-approximations-variational-bounds-and-min-max, pthm-nrqm-approximations-nondegenerate-perturbation-expansion, pthm-nrqm-approximations-degenerate-first-order-splitting, pthm-nrqm-approximations-wkb-allowed-region-error, pthm-nrqm-approximations-turning-point-connection, pthm-nrqm-approximations-barrier-transmission-asymptotics, rem-nrqm-approximations-scope-and-empirical-status, ex-nrqm-approximations-two-level-finite-gap-correction, ex-nrqm-approximations-stark-finite-level-shift, ex-nrqm-approximations-zeeman-multiplet-splitting, ex-nrqm-approximations-smooth-barrier-tunnelling-limits, rem-nrqm-approximations-examples-scope-limits
Consolidated findings: [{"id":"def-nrqm-approximations-framework-perturbed-family-model","type":"prerequisite","reason":"Clause (c)(iii) invokes the degenerate Feshbach theorem at lambda=0 to define the complementary inverse S for every finite multiplicity, but that supplier assumes v=||V||>0 while this definition permits V=0. Define S using the local finite-rank cluster lemma's complementary inverse at lambda=0, or prove the gap-resolvent statement directly; this preserves the v=0 branch."},{"id":"def-nrqm-approximations-framework-wkb-regime-model","type":"local","reason":"Clause (b) says the scaled-line lemma proves the physical phase identity when V<E, but that lemma assumes W-lambda>0 and proves only the forbidden-region square-root identity. Add the allowed-region identity with sqrt(lambda-W) and its change-of-variables calculation."},{"id":"def-nrqm-approximations-framework-wkb-regime-model","type":"prerequisite","reason":"Clause (d) defines the declared scattering solution and T(h) by referring to the matching construction of the two-turn theorem, but that theorem defines neither the normalized incoming/outgoing amplitudes nor T(h). Define the exact in/out normalization and current ratio locally; the consuming barrier theorem's step 2.1 and the smooth-barrier example's L1/step 1.1 depend on it."},{"id":"pthm-nrqm-approximations-wkb-allowed-region-error","type":"prerequisite","reason":"The coefficient-equation supplier's proof omits the first-row relation w_plus c_plus' + w_minus c_minus'=0 needed with its second-row equation to derive c'=Bc. The explicit-error supplier's step 1.1 then does not justify the deviation bound by subtracting the growth estimate or applying it to c-c(a). The assigned proof's steps 1.1-2.1 simply import these bounds. Supply the missing coefficient relations and derive the deviation bound by integrating ||B(s)|| ||c(s)|| using the growth estimate."},{"id":"pthm-nrqm-approximations-turning-point-connection","type":"prerequisite","reason":"The stable weighted Airy supplier's F3 uses reversed envelope monotonicity on the allowed side: for zeta<=v<=0, e_h(v)>=e_h(zeta), not <=. Its Volterra bound therefore does not establish the O(h) error used by this item's proof steps 1.2, 2.2, and 3.1. Supply a correct weighted-kernel estimate under the stated C5 hypotheses or an exact supplier with matching hypotheses."},{"id":"pthm-nrqm-approximations-barrier-transmission-asymptotics","type":"prerequisite","reason":"The two-turn mathematical supplier's proof asserts an interior basis conversion and incoming/outgoing coefficient formulas without defining their matrices or deriving the error bounds; its T(h) is also undefined. This item's F2 and step 2.1, plus the WKB model's clause (d), rely on that construction. Provide the exact scattering normalization and a complete two-turn transfer argument with the stated O(h) control."},{"id":"post-nrqm-approximations-static-finite-level-dipole-coupling","type":"local","reason":"Clause (v) and physical_scope refer to the 'energy form' of H_kappa plus the uncompressed linear term without defining its domain or value. The scope remark gives only an informal translated-test argument. Define a test domain/form or use operator expectations on translated C_c^infinity functions, with an explicit length translation and the Coulomb and kinetic estimates."},{"id":"ex-nrqm-approximations-zeeman-multiplet-splitting","type":"local","reason":"The magnetic-moment postulate permits any real gamma_s, including zero, but this example's scope and wording assert a three-way splitting without that qualification. State eigenvalues with multiplicity and handle gamma=0 and lambda=0; update the examples-page summary and scope remark, which repeat the unqualified splitting claim."},{"id":"ex-nrqm-approximations-smooth-barrier-tunnelling-limits","type":"local","reason":"The prefactor identity in part (b) has a factor-of-four error: 16E(U-E)/U^2 equals 16k^2 kappa^2/(k^2+kappa^2)^2, not 4k^2 kappa^2/(k^2+kappa^2)^2. Parts (c) and the companion summaries also say the rectangular prefactor differs from one universally; it can equal one at admissible E/U values, so say it can differ."}]
Authorized source files: ["items/lem-nrqm-approximations-scaled-line-model-correspondence.md","items/lem-nrqm-approximations-finite-rank-gapped-cluster-projection.md","items/def-nrqm-approximations-framework-variational-trial-model.md","items/def-nrqm-approximations-framework-perturbed-family-model.md","items/def-nrqm-approximations-framework-wkb-regime-model.md","items/post-nrqm-approximations-static-finite-level-dipole-coupling.md","items/pthm-nrqm-approximations-variational-bounds-and-min-max.md","items/pthm-nrqm-approximations-nondegenerate-perturbation-expansion.md","items/pthm-nrqm-approximations-degenerate-first-order-splitting.md","items/pthm-nrqm-approximations-wkb-allowed-region-error.md","items/pthm-nrqm-approximations-turning-point-connection.md","items/pthm-nrqm-approximations-barrier-transmission-asymptotics.md","items/rem-nrqm-approximations-scope-and-empirical-status.md","items/ex-nrqm-approximations-two-level-finite-gap-correction.md","items/ex-nrqm-approximations-stark-finite-level-shift.md","items/ex-nrqm-approximations-zeeman-multiplet-splitting.md","items/ex-nrqm-approximations-smooth-barrier-tunnelling-limits.md","items/rem-nrqm-approximations-examples-scope-limits.md","library/non-relativistic-quantum-mechanics/qm-controlled-approximations.md","library/non-relativistic-quantum-mechanics/qm-controlled-approximations-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
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
