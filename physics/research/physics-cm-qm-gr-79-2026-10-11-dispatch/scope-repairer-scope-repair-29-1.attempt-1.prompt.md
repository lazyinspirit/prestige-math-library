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
label: scope-repair-29-1
covers: 29
output: research/physics-cm-qm-gr-79-2026-10-11-scope-review/batch-29/acceptance-missing

# Batch 29: repair 1

Run: physics-cm-qm-gr-79-2026-10-11
Batch: 29
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: cm13-symplectic-geometry-and-canonical-methods, cm13-symplectic-geometry-and-canonical-methods-examples
Items: def-cm13-two-form, pthm-cm13-two-form-is-symplectic, def-cm13-canonical-form, def-cm13-hamiltonian-field, pthm-cm13-hamiltonian-field-integrates-the-model-equations, def-cm13-poisson, pthm-cm13-bracket-identities, pthm-cm13-observable-evolution, def-cm13-canonical-map, pthm-cm13-flow-preservation, pthm-cm13-dynamics-transport-under-canonical-maps, lem-cm13-poincare-cartan-annihilation-characterization, pthm-cm13-liouville, pthm-cm13-generating-functions, rem-cm13-locality-topology, ex-cm13-fundamental-brackets-and-evolution-checks, ex-cm13-isotropic-oscillator-flow-symplectic-and-volume-checks, ex-cm13-free-particle-flow-generating-function, ex-cm13-point-transformation-generating-function-and-projection, ex-cm13-determinant-tests-for-linear-canonical-maps, ex-cm13-verlet-map-of-the-mechanical-splitting-is-canonical
Consolidated findings: [{"id":"pthm-cm13-two-form-is-symplectic","type":"prerequisite","reason":"Proof steps 1.2 and 2.1 use pullback/exterior-derivative commutation for Phi_X, which is C2 from X being C3, while the cited theorems require smooth maps. State Phi_X's C2 regularity and provide the finite-regularity coordinate proof or an exact C2 supplier."},{"id":"pthm-cm13-two-form-is-symplectic","type":"local","reason":"Clause 3 quantifies over overlapping charts, but proof 4.1 only constructs transitions where the maps are local diffeomorphisms. State that transition hypothesis (including the relevant dimensions). The proof's final lambda-to-lambda+dF claim also infers exactness from closedness; retain only the closed-one-form conclusion."},{"id":"def-cm13-canonical-map","type":"prerequisite","reason":"The definition allows maps between phase domains of different dimensions, including the lower-dimensional generalized-coordinate immersions, but the cited matrix test assumes equal dimensions. Its local-diffeomorphism, determinant, and field-transport consequences do not hold for general symplectic embeddings. Distinguish dimension-aware pullback-preserving embeddings from equal-dimensional canonical transformations, and limit those consequences accordingly."},{"id":"pthm-cm13-dynamics-transport-under-canonical-maps","type":"prerequisite","reason":"The statement permits any canonical map, but the iff proof in steps 1.1 and 3.1 uses an inverse derivative. Require an equal-dimensional local diffeomorphism/canonical transformation and limit the chart instances to genuine transitions."},{"id":"pthm-cm13-liouville","type":"local","reason":"The volume form has degree 6N, so its pullback is not the phase-volume form on a lower-dimensional symplectic embedding. Qualify the 'every canonical map' statement and chart-measure comparison to equal-dimensional transformations and genuine chart transitions; state the phase-volume unit as action to the power 3N."},{"id":"pthm-cm13-bracket-identities","type":"local","reason":"The bracket of C2 functions is only guaranteed C1, so the C2 class is not a Poisson algebra. The cited finite-regularity definition explicitly makes no C2-closure claim. Preserve the listed lower-regularity identities and state the Poisson-algebra conclusion for a closed class such as C-infinity."},{"id":"pthm-cm13-observable-evolution","type":"local","reason":"The statement declares f:U->R on a phase-space open set but then uses f(t,z(t)) and partial_t f. Define f on an open time-phase neighborhood of the solution graph, with its C1 regularity there."},{"id":"pthm-cm13-observable-evolution","type":"prerequisite","reason":"Proof step 3.1 applies the cited Jacobi result to f, g, and H, although H is only assumed C2 and the supplier states Jacobi for three C3 functions. Add the mixed-regularity coordinate proof for f,g C3 and H C2 using the C1 bracket extension, or state the stronger H regularity."},{"id":"pthm-cm13-flow-preservation","type":"prerequisite","reason":"Phi_t is only C1, so compositions of C2 test functions are generally C1. Identify the exact finite-regularity definition that extends the coordinate bracket to C1 functions in Facts and use it in the bracket-preservation statement and proof."},{"id":"lem-cm13-poincare-cartan-annihilation-characterization","type":"local","reason":"With H only C1, sigma has continuous coefficients, not a smooth differential form as cited. Define sigma as the needed continuous coordinate 2-form and justify its displayed coordinate derivative, or strengthen the regularity hypothesis."},{"id":"pthm-cm13-generating-functions","type":"prerequisite","reason":"The cited inverse-function theorem supplies a C1 inverse, while the generating-function definitions and cited propositions use a C2 inverse. Add the derivative-formula argument that a C2 map's local inverse is C2. Step 2.1 also uses smooth pullback/d commutation for C2 parameter maps; differentiate the one-form identity directly at its stated regularity. State that S has action dimension and S_t energy dimension."},{"id":"ex-cm13-isotropic-oscillator-flow-symplectic-and-volume-checks","type":"local","reason":"The derivative is called block diagonal in interleaved (x1,p1,x2,p2,x3,p3) order, while the declared Cartesian order is grouped (x,p). Specify the permutation and corresponding J, or verify the grouped block matrix. Declare [k]=mass/time^2, [omega_0]=1/time, and the action^3 units of the six-dimensional phase volume."},{"id":"ex-cm13-free-particle-flow-generating-function","type":"local","reason":"State that the generating function S_t has action dimension, consistent with the declared momentum, position, and time units."},{"id":"ex-cm13-point-transformation-generating-function-and-projection","type":"local","reason":"State the action dimension of S(q,P) and the conjugate units of the generalized and Cartesian momentum slots used in P dot X(q)."},{"id":"ex-cm13-verlet-map-of-the-mechanical-splitting-is-canonical","type":"prerequisite","reason":"Claim 4 invokes the local and finite-time error suppliers without their hypotheses: the compact convex tube and derivative bounds, small-step condition, and retention of exact and numerical trajectories in the compact set. Carry these conditions into the claim. Declare h as a time step and k's stiffness units; the Euclidean error norm mixes position and momentum coordinates, so specify its normalization or coordinate-dependent numerical meaning."},{"id":"rem-cm13-locality-topology","type":"local","reason":"The determinant-test paragraph says the matrix criterion applies to any C1 map of the presentation. Qualify it to equal-dimensional phase domains; lower-dimensional maps require the dimension-aware pullback condition."}]
Authorized source files: ["items/def-cm13-two-form.md","items/pthm-cm13-two-form-is-symplectic.md","items/def-cm13-canonical-form.md","items/def-cm13-hamiltonian-field.md","items/pthm-cm13-hamiltonian-field-integrates-the-model-equations.md","items/def-cm13-poisson.md","items/pthm-cm13-bracket-identities.md","items/pthm-cm13-observable-evolution.md","items/def-cm13-canonical-map.md","items/pthm-cm13-flow-preservation.md","items/pthm-cm13-dynamics-transport-under-canonical-maps.md","items/lem-cm13-poincare-cartan-annihilation-characterization.md","items/pthm-cm13-liouville.md","items/pthm-cm13-generating-functions.md","items/rem-cm13-locality-topology.md","items/ex-cm13-fundamental-brackets-and-evolution-checks.md","items/ex-cm13-isotropic-oscillator-flow-symplectic-and-volume-checks.md","items/ex-cm13-free-particle-flow-generating-function.md","items/ex-cm13-point-transformation-generating-function-and-projection.md","items/ex-cm13-determinant-tests-for-linear-canonical-maps.md","items/ex-cm13-verlet-map-of-the-mechanical-splitting-is-canonical.md","library/non-relativistic-classical-mechanics/cm13-symplectic-geometry-and-canonical-methods.md","library/non-relativistic-classical-mechanics/cm13-symplectic-geometry-and-canonical-methods-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
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
