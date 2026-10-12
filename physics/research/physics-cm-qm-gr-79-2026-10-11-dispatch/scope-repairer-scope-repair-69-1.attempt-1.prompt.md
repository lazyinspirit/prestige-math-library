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
label: scope-repair-69-1
covers: 69
output: research/physics-cm-qm-gr-79-2026-10-11-scope-review/batch-69/acceptance-missing

# Batch 69: repair 1

Run: physics-cm-qm-gr-79-2026-10-11
Batch: 69
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: gr-einstein-and-matter, gr-einstein-and-matter-examples
Items: def-gr-metric-volume-form-and-current-flux, lem-gr-metric-volume-form-patching-and-face-normal, lem-gr-metric-divergence-and-density-formula, thm-gr-density-divergence-and-finite-chain-flux, lem-gr-lorentzian-perturbations-remain-lorentzian, lem-gr-compact-variation-coefficient-vanishing, def-gr-hilbert-stress-energy-tensor, lem-gr-hilbert-tensor-uniqueness, thm-gr-compact-metric-and-timelike-curve-variation, def-gr-killing-field, thm-gr-killing-and-on-shell-matter-identities, def-gr-scalar-field-matter-model, prop-gr-scalar-field-stress-energy-conservation, def-gr-dust-matter-model, def-gr-perfect-fluid-matter-model, prop-gr-dust-and-perfect-fluid-conservation-equations, post-gr-classical-gravitational-action, post-gr-einstein-field-law, pthm-gr-adopted-action-and-einstein-equations, pthm-gr-einstein-consistency-and-energy-conditions, rem-gr-einstein-matter-scope-and-conventions, ex-gr-metric-volume-density-and-flux-in-flat-coordinates, ex-gr-flux-balance-for-a-divergence-free-current, ex-gr-dust-conservation-in-flat-space, ex-gr-null-gradient-scalar-field-conservation, ex-gr-killing-current-for-a-static-dust-in-flat-space, cex-gr-energy-conditions-do-not-imply-conservation, cex-gr-divergence-free-does-not-force-zero-flux, ex-gr-perfect-fluid-energy-conditions
Consolidated findings: [{"id":"thm-gr-compact-metric-and-timelike-curve-variation","type":"local","reason":"Clause (e) defines F(s) as an unrestricted chart integral on possibly noncompact U, so F(s) need not exist although its variation difference is compactly supported. In step 4.1, δ(-2Λw)=+Λw g_ab q^ab, but the calculation gives the wrong sign; the final formula has the correct plus sign. Define a relative action difference and correct the calculation."},{"id":"pthm-gr-adopted-action-and-einstein-equations","type":"local","reason":"Proof step 1.1 assumes one chart contains an arbitrary compact variation support, which need not hold. Use finite chart localization and apply the first-variation result to the resulting compactly supported differences."},{"id":"def-gr-hilbert-stress-energy-tensor","type":"local","reason":"The action domain D is an arbitrary subset. If it contains only (g,φ), only constant metric families are admissible and every smooth symmetric T satisfies the defining identity, contradicting the asserted uniqueness. Require admissibility of every sufficiently small compactly supported metric perturbation, or state that condition as a hypothesis of the uniqueness result."},{"id":"def-gr-hilbert-stress-energy-tensor","type":"local","reason":"The orientation-reversal remark asserts that S and both sides change sign, but a generic functional S:D→R has no stated orientation transformation law. Qualify this to actions defined by integrating oriented forms or remove the claim."},{"id":"lem-gr-metric-volume-form-patching-and-face-normal","type":"local","reason":"Step 1.2 uses extension of a functional on H to T_pM and the metric identification of T_pM with its dual. Fact [L6]'s cited basis result does not establish functional extension; supply the finite-dimensional basis-extension and nondegenerate-matrix argument locally."},{"id":"lem-gr-metric-divergence-and-density-formula","type":"local","reason":"In step 3.1, swapping the dummy indices in the third Christoffel term makes it cancel the first term, not the second as stated. Correct the cancellation description; the resulting trace formula is otherwise correct."},{"id":"thm-gr-density-divergence-and-finite-chain-flux","type":"local","reason":"Fact [L3] gives a nonzero exterior derivative formula for a top-degree 4-form, whose exterior derivative in four dimensions is zero. State the coordinate formula for the current 3-form instead; the computation in proof step 1.1 then follows."},{"id":"ex-gr-metric-volume-density-and-flux-in-flat-coordinates","type":"local","reason":"Clause 4 assigns negative flux while requiring (∂1, v1, v2, v3) to be positively oriented, which makes the adapted normal +∂1 and the flux positive. The proof instead uses −∂1. It also assumes unit parameter-area density for any simplex spanning the plane; specify an affine coordinate simplex and consistent orientation, or use its induced area integral."},{"id":"post-gr-classical-gravitational-action","type":"local","reason":"The scalar units are inconsistent: with dimensionless φ and length coordinates, ∂φ has units m^-1; K in J m^-1 makes the displayed action and T formulas consistent only if V has units m^-2, so K V is the potential energy density. The postulate instead assigns V units J m^-3 and multiplies it by K. The dust branch likewise assigns ρ units kg m^-3 while using normalized u with g(u,u)=-1 and T=ρuu, giving T00 mass-density rather than energy-density units. State the scalar potential normalization and explicitly map the dust model's energy coefficient to mass density, for example ε=c²ρ_mass, consistently with U=c u."},{"id":"pthm-gr-einstein-consistency-and-energy-conditions","type":"scope","reason":"The postulates place T and the direct field law on the model's open matter domain U, but the theorem assumes the equation on all of M. Clauses (a)–(c) therefore do not cover models with U≠M. State and prove these clauses on U; clause (d) can remain a global flat example."},{"id":"rem-gr-einstein-matter-scope-and-conventions","type":"local","reason":"The deferred-obligations bullet says current conservation is treated on the later local-and-global energy page, although this page proves divergence and flux balance for currents and Killing currents. Clarify that the broader energy-current discussion and global-energy limits are deferred."}]
Authorized source files: ["items/def-gr-metric-volume-form-and-current-flux.md","items/lem-gr-metric-volume-form-patching-and-face-normal.md","items/lem-gr-metric-divergence-and-density-formula.md","items/thm-gr-density-divergence-and-finite-chain-flux.md","items/lem-gr-lorentzian-perturbations-remain-lorentzian.md","items/lem-gr-compact-variation-coefficient-vanishing.md","items/def-gr-hilbert-stress-energy-tensor.md","items/lem-gr-hilbert-tensor-uniqueness.md","items/thm-gr-compact-metric-and-timelike-curve-variation.md","items/def-gr-killing-field.md","items/thm-gr-killing-and-on-shell-matter-identities.md","items/def-gr-scalar-field-matter-model.md","items/prop-gr-scalar-field-stress-energy-conservation.md","items/def-gr-dust-matter-model.md","items/def-gr-perfect-fluid-matter-model.md","items/prop-gr-dust-and-perfect-fluid-conservation-equations.md","items/post-gr-classical-gravitational-action.md","items/post-gr-einstein-field-law.md","items/pthm-gr-adopted-action-and-einstein-equations.md","items/pthm-gr-einstein-consistency-and-energy-conditions.md","items/rem-gr-einstein-matter-scope-and-conventions.md","items/ex-gr-metric-volume-density-and-flux-in-flat-coordinates.md","items/ex-gr-flux-balance-for-a-divergence-free-current.md","items/ex-gr-dust-conservation-in-flat-space.md","items/ex-gr-null-gradient-scalar-field-conservation.md","items/ex-gr-killing-current-for-a-static-dust-in-flat-space.md","items/cex-gr-energy-conditions-do-not-imply-conservation.md","items/cex-gr-divergence-free-does-not-force-zero-flux.md","items/ex-gr-perfect-fluid-energy-conditions.md","library/general-relativity/gr-einstein-and-matter.md","library/general-relativity/gr-einstein-and-matter-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
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
