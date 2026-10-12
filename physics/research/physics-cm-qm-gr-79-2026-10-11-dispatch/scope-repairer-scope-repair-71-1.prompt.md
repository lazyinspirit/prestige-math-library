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
label: scope-repair-71-1
covers: 71
output: research/physics-cm-qm-gr-79-2026-10-11-scope-review/batch-71/acceptance-missing

# Batch 71: repair 1

Run: physics-cm-qm-gr-79-2026-10-11
Batch: 71
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: gr-flat-and-newtonian-bridges, gr-flat-and-newtonian-bridges-examples
Items: def-gr-minkowski-model-and-inertial-chart, lem-gr-flat-model-connection-curvature-and-geodesics, def-gr-flat-linearized-perturbation, thm-gr-flat-linearized-curvature-and-gauge, thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge, def-gr-stationary-weak-field-data, lem-gr-weak-field-admissibility-and-inverse-bounds, lem-gr-weak-field-christoffel-bounds, thm-gr-weak-field-einstein-stress-hierarchy, lem-gr-weak-field-geodesic-acceleration, thm-gr-weak-field-scaled-trajectory-limit, lem-gr-observer-relative-velocity-expansions, thm-gr-vanishing-curvature-implies-locally-minkowski, def-gr-newtonian-comparison-model-and-identification, pthm-gr-minkowski-vacuum-model, pthm-gr-uniform-weak-slow-correspondence, rem-gr-local-flatness-versus-global-flatness, rem-gr-flat-bridge-scope-and-limits, ex-gr-linearized-curvature-of-the-diagonal-perturbation, ex-gr-minkowski-free-fall-and-clock-identities, ex-gr-observer-velocity-expansion-numeric-check, ex-gr-weak-field-poisson-quadratic-potential, ex-gr-scaled-newtonian-harmonic-trajectory, cex-gr-first-order-vacuum-is-not-exact-vacuum, cex-gr-flat-quotient-is-not-globally-minkowski
Consolidated findings: [{"id":"pthm-gr-uniform-weak-slow-correspondence","type":"prerequisite","reason":"The owner-approved scope record for this item requires an admissible coupled model with independent tilted nonnegative dust. The current statement and proof use only an abstract Einstein family; moreover, def-gr-stationary-weak-field-data clause (c) defines rho_epsilon=T_00/c^2, making the additional matter hierarchy in thm-gr-weak-field-einstein-stress-hierarchy clause (c) an identity. Add the explicit dust matter input, independent density and SI normalization, its required admissibility/conservation supplier, and a non-tautological T_00 estimate; consuming claims are clause (a), [A1] and proof 1.1, plus hierarchy clause (c)/proof 5.1 and ex-gr-weak-field-poisson-quadratic-potential clauses 2-3. The existing dust definition and evolution theorem use different density normalizations, so state their identification explicitly."},{"id":"def-gr-newtonian-comparison-model-and-identification","type":"scope","reason":"Clause (a) requires the exact equation Delta Phi_N=4 pi G_cmp rho_N, while clause (b) identifies Phi_N=Phi, rho_N=rho_epsilon and G_cmp=G_N exactly. Any comparison reading therefore already has an exact Poisson equation; pthm-gr-uniform-weak-slow-correspondence instead presents it as an approximation, and the quadratic example establishes only approximate equality between rho_epsilon and its exact Poisson density. Define distinct Newtonian and relativistic densities with an error-qualified matching, or state exact Poisson compatibility as an additional premise; check the pthm, rem-gr-flat-bridge-scope-and-limits and page summary if the Definition changes."},{"id":"def-gr-stationary-weak-field-data","type":"scope","reason":"Omega and K are defined in four-dimensional spacetime, but def-gr-newtonian-comparison-model-and-identification projects Omega to three-space and treats Phi and rho_epsilon as functions there; stationarity alone does not make them descend when vertical time fibres are disconnected. The same domain mismatch makes lem-gr-weak-field-geodesic-acceleration and thm-gr-weak-field-scaled-trajectory-limit write spatial x(t) in K subset Omega and define psi(X)=phi(LX) from a four-dimensional field. Specify a spatial base and product/factorization condition, and distinguish spatial compact sets from spacetime compact sets; check the direct consumers lem-gr-weak-field-admissibility-and-inverse-bounds, lem-gr-weak-field-christoffel-bounds, thm-gr-weak-field-einstein-stress-hierarchy, lem-gr-weak-field-geodesic-acceleration, thm-gr-weak-field-scaled-trajectory-limit, def-gr-newtonian-comparison-model-and-identification, pthm-gr-uniform-weak-slow-correspondence, both assigned weak-field examples and rem-gr-flat-bridge-scope-and-limits."},{"id":"lem-gr-weak-field-admissibility-and-inverse-bounds","type":"local","reason":"Proof 1.2 asserts the translation flow is global on arbitrary open Omega; such an Omega need not be translation-invariant. Prove the Killing property locally from stationarity (or add a domain hypothesis). Also epsilon_* includes L although L is a length and epsilon is dimensionless; ex-gr-scaled-newtonian-harmonic-trajectory similarly sets C=1+L^2. Use dimensionally consistent thresholds and constants."},{"id":"thm-gr-weak-field-einstein-stress-hierarchy","type":"local","reason":"The statement promises C2 depending only on C, L and dimension, but proof 1.1 invokes the linearized remainder supplier with constant C_K. Supply a jet-space bound independent of K, or make the claimed dependence match the supplied bound."},{"id":"thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge","type":"local","reason":"Proof 5.1 bounds derivatives on K x [a,b] using the time interval [t0,b]. This interval is invalid when b<t0, although the statement permits any t0 in I. Use the compact interval between t0 and [a,b], with oriented integration."},{"id":"thm-gr-weak-field-scaled-trajectory-limit","type":"local","reason":"Hypothesis H1 places the spatial trajectory x_epsilon(t) in K even though K is a compact subset of the four-dimensional Omega; H2 also uses psi on K' without requiring K' to lie in its spatial domain. State compatible spatial/spacetime domains and ensure the scaled comparison region lies within the domain of psi."},{"id":"ex-gr-scaled-newtonian-harmonic-trajectory","type":"local","reason":"The chosen ball of radius |X0|+|W0|/L is shown to contain X_* only, while H2 requires it to contain every X_epsilon as well. Enlarge K' to include the scaled geodesic region under H1, or state the necessary bound on that region."},{"id":"cex-gr-first-order-vacuum-is-not-exact-vacuum","type":"local","reason":"Proof 1.1 asserts 1/2<1/8, which is false, so the cited matrix-perturbation criterion does not establish Lorentzian signature. Here the diagonal entries p=1+2 lambda x^1 and q=1-2 lambda x^1 are positive on Omega for the stated parameter range; use that direct signature check."}]
Authorized source files: ["items/def-gr-minkowski-model-and-inertial-chart.md","items/lem-gr-flat-model-connection-curvature-and-geodesics.md","items/def-gr-flat-linearized-perturbation.md","items/thm-gr-flat-linearized-curvature-and-gauge.md","items/thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge.md","items/def-gr-stationary-weak-field-data.md","items/lem-gr-weak-field-admissibility-and-inverse-bounds.md","items/lem-gr-weak-field-christoffel-bounds.md","items/thm-gr-weak-field-einstein-stress-hierarchy.md","items/lem-gr-weak-field-geodesic-acceleration.md","items/thm-gr-weak-field-scaled-trajectory-limit.md","items/lem-gr-observer-relative-velocity-expansions.md","items/thm-gr-vanishing-curvature-implies-locally-minkowski.md","items/def-gr-newtonian-comparison-model-and-identification.md","items/pthm-gr-minkowski-vacuum-model.md","items/pthm-gr-uniform-weak-slow-correspondence.md","items/rem-gr-local-flatness-versus-global-flatness.md","items/rem-gr-flat-bridge-scope-and-limits.md","items/ex-gr-linearized-curvature-of-the-diagonal-perturbation.md","items/ex-gr-minkowski-free-fall-and-clock-identities.md","items/ex-gr-observer-velocity-expansion-numeric-check.md","items/ex-gr-weak-field-poisson-quadratic-potential.md","items/ex-gr-scaled-newtonian-harmonic-trajectory.md","items/cex-gr-first-order-vacuum-is-not-exact-vacuum.md","items/cex-gr-flat-quotient-is-not-globally-minkowski.md","library/general-relativity/gr-flat-and-newtonian-bridges.md","library/general-relativity/gr-flat-and-newtonian-bridges-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
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
