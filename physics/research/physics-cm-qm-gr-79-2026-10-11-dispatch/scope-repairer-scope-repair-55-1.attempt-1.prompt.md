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
label: scope-repair-55-1
covers: 55
output: research/physics-cm-qm-gr-79-2026-10-11-scope-review/batch-55/acceptance-missing

# Batch 55: repair 1

Run: physics-cm-qm-gr-79-2026-10-11
Batch: 55
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: qm-composites-entanglement-and-reduced-states, qm-composites-entanglement-and-reduced-states-examples
Items: lem-nrqm-composites-local-pvm-tensor-extension, lem-nrqm-composites-pure-state-separability-criterion, def-nrqm-composites-separable-and-entangled-states, def-nrqm-composites-framework-composite-systems-and-local-readouts, def-nrqm-composites-framework-reduced-preparations, pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement, pthm-nrqm-composites-local-readout-laws-and-reduced-preparations, pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations, pthm-nrqm-composites-local-instruments-and-no-signalling, def-nrqm-composites-marker-model-and-fringe-visibility, pthm-nrqm-composites-marker-overlap-and-visibility-bound, rem-nrqm-composites-scope-and-empirical-status, texp-nrqm-composites-singlet-correlations, ex-nrqm-composites-marker-overlap-visibility, ex-nrqm-composites-improper-versus-proper-mixtures, rem-nrqm-composites-examples-scope-limits
Consolidated findings: [{"id":"lem-nrqm-composites-local-pvm-tensor-extension","type":"local","reason":"Proof step 1.3 applies the bounded PVM integral theorem to F before step 2.1 establishes that F is a PVM. Prove countable additivity first or reorder the proof."},{"id":"def-nrqm-composites-separable-and-entangled-states","type":"local","reason":"Clause (d) asserts that conv(P) is compact and closed in finite dimension but supplies no exact finite-dimensional convex-hull result or local argument. Add proof support in Remarks while retaining the declared trace-norm closure for infinite dimension."},{"id":"def-nrqm-composites-framework-composite-systems-and-local-readouts","type":"local","reason":"Clause (e) states the per-outcome strong-sum identity but only details transfer of the total sum; specify the countable indexing and apply the strong-continuity result to each outcome. The bounded-A remark also invokes clause (b) for the globally unbounded function lambda; use the unbounded spectral theorem or a bounded extension on the spectral support."},{"id":"def-nrqm-composites-framework-reduced-preparations","type":"prerequisite","reason":"Clause (c)'s reverse product criterion is asserted but not proved or cited. The available mathematical supplier thm-nrqm-composites-infinite-schmidt-decomposition gives the needed purity/product implication; state its relevant claim and record the dependency, or prove the implication locally."},{"id":"pthm-nrqm-composites-local-readout-laws-and-reduced-preparations","type":"local","reason":"In step 2.3, strong convergence of the tensor sums does not follow through the trace pairing from the operator-norm bound alone. Justify the limit with a nuclear representation and a uniform summable bound, or cite an exact strong-limit trace result."},{"id":"pthm-nrqm-composites-local-readout-laws-and-reduced-preparations","type":"scope","reason":"Its physical_scope says there is no disturbance of the other factor's statistics under a discarded measurement, while clause (c) proves that the opposite reduction is unchanged in the declared P3 model. Clarify that it makes no claim about disturbance by a real apparatus."},{"id":"pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations","type":"prerequisite","reason":"The joint-law claim for two local effect families lacks an explicit declared product POVM. Define G_ij = F_i tensor F'_j, verify positivity and that the effects sum to identity using the bounded tensor calculus, then apply P2. This can be supplied locally."},{"id":"texp-nrqm-composites-singlet-correlations","type":"local","reason":"S_tot_i is undefined here; the cited tensor-spin theorem defines dimensionless J_tot_i and does not state that this displayed vector is annihilated. Define S_tot_i = S_i tensor I + I tensor S_i and show the action from the Pauli matrices."},{"id":"texp-nrqm-composites-singlet-correlations","type":"scope","reason":"The statement and physical_scope say no measurement enters, although the ideal joint P2/P3 outcome laws are calculated. Distinguish the model's declared joint PVM and predicted probabilities from any actual apparatus, recorded trial, or empirical claim."},{"id":"ex-nrqm-composites-improper-versus-proper-mixtures","type":"local","reason":"Clause (iii) has incomplete rank-one expressions T_{e+ tensor e-, dot} and T_{e- tensor e+, dot}; write the full repeated vector in each operator."},{"id":"rem-nrqm-composites-examples-scope-limits","type":"local","reason":"The remark calls correlation functions probabilities. They are expected products of outcome labels computed from joint probabilities; state that distinction."},{"id":"pthm-nrqm-measurement-countable-kraus-instruments","type":"outside-batch","reason":"The draft supplier's clause (b) repeatability criterion is false. Its step 3.1 equates M_a* F_a M_a with F_a^2. For H = l2 direct-sum l2 direct-sum C, let M1 and M2 act by unilateral shifts on their respective l2 factors and map the C factor to the first basis vector with amplitudes sqrt(p) and sqrt(1-p), where 0<p<1. Their effects sum to I; each outcome maps states into a subspace where only that outcome has effect I, so the instrument is repeatable, although neither effect is a projection on C. The assigned local-instruments theorem uses clauses (a) and (e), not the defective clause (b)."},{"id":"texp-nrqm-bell-singlet-arrangement-contrast","type":"outside-batch","reason":"This indirect consumer says no measurement entered while calculating the declared joint sign tables. If the assigned singlet scope is clarified, the owner should likewise distinguish ideal model outcome laws from actual apparatus measurements and recorded data."}]
Authorized source files: ["items/lem-nrqm-composites-local-pvm-tensor-extension.md","items/lem-nrqm-composites-pure-state-separability-criterion.md","items/def-nrqm-composites-separable-and-entangled-states.md","items/def-nrqm-composites-framework-composite-systems-and-local-readouts.md","items/def-nrqm-composites-framework-reduced-preparations.md","items/pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement.md","items/pthm-nrqm-composites-local-readout-laws-and-reduced-preparations.md","items/pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations.md","items/pthm-nrqm-composites-local-instruments-and-no-signalling.md","items/def-nrqm-composites-marker-model-and-fringe-visibility.md","items/pthm-nrqm-composites-marker-overlap-and-visibility-bound.md","items/rem-nrqm-composites-scope-and-empirical-status.md","items/texp-nrqm-composites-singlet-correlations.md","items/ex-nrqm-composites-marker-overlap-visibility.md","items/ex-nrqm-composites-improper-versus-proper-mixtures.md","items/rem-nrqm-composites-examples-scope-limits.md","library/non-relativistic-quantum-mechanics/qm-composites-entanglement-and-reduced-states.md","library/non-relativistic-quantum-mechanics/qm-composites-entanglement-and-reduced-states-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
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
