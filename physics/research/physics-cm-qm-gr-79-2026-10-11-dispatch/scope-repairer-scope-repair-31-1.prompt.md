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
label: scope-repair-31-1
covers: 31
output: research/physics-cm-qm-gr-79-2026-10-11-scope-review/batch-31/acceptance-missing

# Batch 31: repair 1

Run: physics-cm-qm-gr-79-2026-10-11
Batch: 31
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: cm15-scattering-and-impulse-model-boundaries, cm15-scattering-and-impulse-model-boundaries-examples
Items: def-cm15-asymptotic-data, def-cm15-cross-section, pthm-cm15-central-scattering, pthm-cm15-rutherford-model, post-cm15-impulse, pthm-cm15-impact-balance, pthm-cm15-control-volume-balance, rem-cm15-model-boundaries, ex-cm15-hard-sphere-reflection-check, ex-cm15-rutherford-cutoff-check, cex-cm15-deflection-need-not-decrease, ex-cm15-impact-check, cex-cm15-restitution-above-one-increases-energy, cex-cm15-momentum-alone-does-not-fix-the-impact, ex-cm15-rocket-check, ex-cm15-control-volume-check
Consolidated findings: [{"id":"def-cm15-cross-section","type":"scope","reason":"Approved CM15 E10 and thm-cm-differential-cross-section-density support adding pushforward measures from disjoint incident-parameter intervals even when their angular images overlap. Clause (ii) currently defines a model sum only for disjoint image intervals, leaving valid overlap contributions undefined. Define the total density as the sum on overlaps and distinguish it from each branch contribution."},{"id":"def-cm15-asymptotic-data","type":"local","reason":"Clause (v) identifies relative angles with those of a centre-of-mass frame without defining that special frame. post-cm01-frames defines inertial frames as adapted charts and pthm-cm05-relative-reduction supplies the affine centre-of-mass curve; state the Galilean boost/chart in which that curve is at rest, or use relative-coordinate language alone."},{"id":"pthm-cm15-central-scattering","type":"local","reason":"Clause 2 and Fact [L2] claim exact free motion for rho(t1) >= R, while thm-cm-scattering-turning-point-and-global-branches proves the free-tail claim only for rho > R. Preserve the boundary case with a local uniqueness argument using U = 0 on [R,infinity) and U'(R) = 0, or match the supplier's strict inequality."},{"id":"post-cm15-impulse","type":"local","reason":"Clause (iii) states m' and (mv)' but gives only maps m and v. State that m and v are differentiable on I, as required by thm-cm-variable-mass-momentum-balance, so the adopted identities have explicit regularity."},{"id":"pthm-cm15-impact-balance","type":"local","reason":"Clause 2 reintroduces a smooth-force motion and concludes J = 0, but J was introduced for the impulse-model motion in clause 1. State explicitly that the same candidate motion is being checked in the smooth branch, or state that the smooth motion's momentum jump vanishes and identify it with J under the joint hypothesis."},{"id":"pthm-cm15-control-volume-balance","type":"prerequisite","reason":"The consumed def-cm-euclidean-spatial-calculus defines its advector as u:O->R3, while continuum-motion supplies u:I×O->R3 and this theorem uses D_tu. Locally state D_tu = partial_t u + (D_x u)u, componentwise, as computed in thm-cm-local-momentum-balance. Also make the differentiability of the lumped m,v in clause 3 and the physical types and units of rho,u,sigma,b explicit."},{"id":"ex-cm15-hard-sphere-reflection-check","type":"local","reason":"The fixed-wall normal-reflection rule is an example-specific law, not a formal e = 1 member of post-cm15-impulse clause (ii), which is limited to finite-mass collinear two-label restitution. Keep the rule and calculation, but describe it as separately adopted and call e = 1 only an analogy or limit."},{"id":"cex-cm15-deflection-need-not-decrease","type":"local","reason":"The refracting-shell interface rule is separately adopted, not supplied by post-cm15-impulse's collinear law; clarify this. The remark's 'glory concentration' is unsupported for the stated jump to zero, and theta = 0 is outside the defined branch domain. Classical glory treatments describe a smooth zero-angle deflection; remove the label or define a separate forward contribution ([Mott and Massey, “Semiclassical description of scattering”](https://doi.org/10.1016/0003-4916(59)90026-0)). Also identify b = 0 as an endpoint extension, not a branch value."},{"id":"rem-cm15-model-boundaries","type":"local","reason":"The remark says the hard-sphere and refracting-shell rules are adopted from post-cm15-impulse, although neither full rule is covered by its restricted clauses. Describe them as example-specific assumptions. After the cross-section repair, distinguish branch contributions from the summed model density on overlapping angular images."},{"id":"ex-cm15-rocket-check","type":"local","reason":"The declared interval I = (0, 5/2) excludes t = 0, but the example imposes v(0) = 0 and uses the formula on 0 <= t < 2. Choose an open interval containing 0 or state the initial datum as a one-sided continuous extension."},{"id":"ex-cm15-control-volume-check","type":"local","reason":"The material-ball check should specify its control motion, for example psi(t,X) = exp(alpha t)X, and declare units for alpha, rho0, and p0. The elbow calculation gives the net external resultant required by the steady momentum balance; it does not isolate a pressure-free 'momentum-flux part.' Equal port pressures and inviscid walls do not determine the wall pressure traction. Recast 3.578 N as the conditional net resultant or provide boundary-stress data for a force decomposition. The cited [Moore §11.7](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_Map_%28Moore_2nd_Edition%29/11%3A_Impulse_and_Momentum_in_Particles/11.07%3A_Steady-Flow_Devices) supplies the net steady-flow force relation."}]
Authorized source files: ["items/def-cm15-asymptotic-data.md","items/def-cm15-cross-section.md","items/pthm-cm15-central-scattering.md","items/pthm-cm15-rutherford-model.md","items/post-cm15-impulse.md","items/pthm-cm15-impact-balance.md","items/pthm-cm15-control-volume-balance.md","items/rem-cm15-model-boundaries.md","items/ex-cm15-hard-sphere-reflection-check.md","items/ex-cm15-rutherford-cutoff-check.md","items/cex-cm15-deflection-need-not-decrease.md","items/ex-cm15-impact-check.md","items/cex-cm15-restitution-above-one-increases-energy.md","items/cex-cm15-momentum-alone-does-not-fix-the-impact.md","items/ex-cm15-rocket-check.md","items/ex-cm15-control-volume-check.md","library/non-relativistic-classical-mechanics/cm15-scattering-and-impulse-model-boundaries.md","library/non-relativistic-classical-mechanics/cm15-scattering-and-impulse-model-boundaries-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
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
