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
label: scope-repair-75-1
covers: 75
output: research/physics-cm-qm-gr-79-2026-10-11-scope-review/batch-75/acceptance-missing

# Batch 75: repair 1

Run: physics-cm-qm-gr-79-2026-10-11
Batch: 75
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: gr-causal-and-initial-value-boundaries, gr-causal-and-initial-value-boundaries-examples
Items: def-gr-causal-curves-and-reachability, lem-gr-causal-curve-calculus, def-gr-causal-conditions-and-global-hyperbolicity, lem-gr-temporal-functions-and-time-functions, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-spacelike-initial-data-and-constraints, lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form, lem-gr-constraint-projections, def-gr-geodesic-congruence-and-kinematics, lem-gr-kinematic-decomposition-identities, lem-gr-contracted-commutator-identity, thm-gr-timelike-raychaudhuri-and-local-focusing, lem-gr-maximal-geodesics-and-extension, lem-gr-constant-component-chart-flatness, def-gr-flat-minkowski-model-and-inertial-charts, lem-gr-flat-inertial-cone-criterion-and-sums, lem-gr-flat-time-monotonicity-and-lipschitz-graphs, thm-gr-minkowski-cauchy-and-global-hyperbolicity, lem-gr-quotient-by-isometric-free-proper-action, thm-gr-flat-cylinder-closed-timelike-and-no-cauchy-set, thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice, rem-gr-causal-and-initial-value-scope, ex-gr-minkowski-level-sets-and-causal-double-cones, ex-gr-flat-slab-vertical-line-proper-time, ex-gr-radial-focusing-in-flat-minkowski, cex-gr-flat-cylinder-has-a-closed-timelike-curve, cex-gr-spacelike-hypersurface-need-not-be-cauchy, cex-gr-achronal-set-need-not-be-acausal
Consolidated findings: [{"id":"lem-gr-causal-curve-calculus","type":"local","reason":"Proof steps 1.1 and 2.1 require a single compact convex coordinate region for an arbitrary curve image and smooth-map image; such a region need not exist. Subdivide compact parameter intervals into finitely many chart patches and apply local derivative bounds. Clause (c) also attributes the piecewise-C1 endpoint convention to def-c-r-and-smooth-maps-between-smooth-manifolds, which does not define it; cite the actual worldline definition or define the convention here."},{"id":"def-gr-spacelike-initial-data-and-constraints","type":"local","reason":"Clause (c) says matter fields pull back to rho and j, but pulling back a stress tensor gives a covariant 2-tensor, not a scalar and covector. State the normal projections explicitly, for example T'(n',n') composed with the embedding equals rho and -T'(n',d-embedding(V)) equals j(V), and clarify whether other matter data are included."},{"id":"def-gr-geodesic-congruence-and-kinematics","type":"local","reason":"Clause (b) asserts proper time is s/c without identifying the earlier mathematical definition or its normalization. Cite the smooth-curve proper-time definition and state that g(n,n)=-1 gives tau(s)=tau(0)+s/c; keep that mathematical parameter distinct from a clock reading."},{"id":"lem-gr-contracted-commutator-identity","type":"local","reason":"The item defines B^a_bc as nabla_b A^a_c, but Fact L2 gives the components of nabla_c A^a_b, and proof step 1.1 then obtains the opposite curvature sign. Correct L2 and the computation so B^a_bc-B^a_cb equals R^a_dbc Z^d under the stated curvature convention; the intended Statement is consistent with its supplier."},{"id":"thm-gr-timelike-raychaudhuri-and-local-focusing","type":"local","reason":"Clause (b) rules out any smooth continuation beyond the bound, while the proof establishes only that the maximal integral curve in U has supremum at most that bound, with the hypotheses holding on U. A continuation outside U could fail the zero-vorticity or Ricci-sign assumptions. Restrict the continuation claim to extensions preserving those hypotheses, or state the domain bound only."},{"id":"ex-gr-minkowski-level-sets-and-causal-double-cones","type":"local","reason":"Step 2.3 obtains a convergent sequence of spatial positions and infers convergence of the whole curve. A subsequence limit is insufficient; use monotonicity of time and the Lipschitz bound on all tail pairs to show the full spatial tail is Cauchy, or cite the one-sided inextendibility conclusion of the flat-time lemma."},{"id":"thm-gr-flat-cylinder-closed-timelike-and-no-cauchy-set","type":"local","reason":"Step 4.1 needs an inextendible causal curve to rule out the empty set being Cauchy. Explicitly show the constructed nonconstant periodic timelike curve has no limits at either parameter end, using distinct phase subsequences."},{"id":"ex-gr-radial-focusing-in-flat-minkowski","type":"local","reason":"The stated domain (0,rho(p)) excludes s=0 although gamma_p(0)=p; use a domain including 0 or state the maximal flow interval. The derivative has sign errors: partial_b rho=y_b/rho and partial_b W^a=-delta^a_b/rho-y^a y_b/rho^3. After narrowing the general focusing theorem's continuation claim, prove this example's nonextension directly from the distinct limiting directions of W at e."},{"id":"ex-gr-flat-slab-vertical-line-proper-time","type":"local","reason":"The conditional physical reading x^0=ct uses c, x^0 and proper time without their dimensions. State the length and speed units and that the resulting duration is in seconds; retain the clock-reading interpretation as conditional on the ideal-clock assumption."},{"id":"cex-gr-achronal-set-need-not-be-acausal","type":"local","reason":"Step 2.1 uses that p chronologically precedes r only if the displacement lies in the open cone. Fact L1 states the straight-path criterion but omits the full Minkowski reachability equivalence needed to exclude other timelike curves. State the exact reachability conclusion from thm-gr-minkowski-cauchy-and-global-hyperbolicity clause (a) in L1."},{"id":"rem-gr-causal-and-initial-value-scope","type":"scope","reason":"The cited framework postulates adopt the Lorentzian geometry and ideal null-geodesic light-ray rule, but do not state that this exhausts all signalling or that lacking a Cauchy set means general unpredictability. Present these as qualified model interpretations rather than readings already adopted by those postulates."},{"id":"gr-causal-and-initial-value-boundaries","type":"local","reason":"The introduction classifies all 22 mathematical items as conditional deductions, but the page includes mathematical definitions. Distinguish definitions from conditional deductions and the closing physics remark."}]
Authorized source files: ["items/def-gr-causal-curves-and-reachability.md","items/lem-gr-causal-curve-calculus.md","items/def-gr-causal-conditions-and-global-hyperbolicity.md","items/lem-gr-temporal-functions-and-time-functions.md","items/def-gr-spacelike-hypersurfaces-and-cauchy-sets.md","items/def-gr-spacelike-initial-data-and-constraints.md","items/lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form.md","items/lem-gr-constraint-projections.md","items/def-gr-geodesic-congruence-and-kinematics.md","items/lem-gr-kinematic-decomposition-identities.md","items/lem-gr-contracted-commutator-identity.md","items/thm-gr-timelike-raychaudhuri-and-local-focusing.md","items/lem-gr-maximal-geodesics-and-extension.md","items/lem-gr-constant-component-chart-flatness.md","items/def-gr-flat-minkowski-model-and-inertial-charts.md","items/lem-gr-flat-inertial-cone-criterion-and-sums.md","items/lem-gr-flat-time-monotonicity-and-lipschitz-graphs.md","items/thm-gr-minkowski-cauchy-and-global-hyperbolicity.md","items/lem-gr-quotient-by-isometric-free-proper-action.md","items/thm-gr-flat-cylinder-closed-timelike-and-no-cauchy-set.md","items/thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice.md","items/rem-gr-causal-and-initial-value-scope.md","items/ex-gr-minkowski-level-sets-and-causal-double-cones.md","items/ex-gr-flat-slab-vertical-line-proper-time.md","items/ex-gr-radial-focusing-in-flat-minkowski.md","items/cex-gr-flat-cylinder-has-a-closed-timelike-curve.md","items/cex-gr-spacelike-hypersurface-need-not-be-cauchy.md","items/cex-gr-achronal-set-need-not-be-acausal.md","library/general-relativity/gr-causal-and-initial-value-boundaries.md","library/general-relativity/gr-causal-and-initial-value-boundaries-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
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
