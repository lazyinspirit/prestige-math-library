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
label: scope-repair-38-1
covers: 38
output: research/physics-cm-qm-gr-79-2026-10-11-scope-review/batch-38/acceptance-missing

# Batch 38: repair 1

Run: physics-cm-qm-gr-79-2026-10-11
Batch: 38
Round: 1
Read the complete assigned A/B pages and items, approved scope and actual supplier claims/proofs. Review the whole batch before reporting.
Pages: qm-math-intervals-and-contacts, qm-math-intervals-and-contacts-examples
Items: def-nrqm-intervals-hilbert-sobolev-spaces, lem-nrqm-intervals-weak-derivative-ac-representative, lem-nrqm-intervals-endpoint-trace-and-half-line-decay, lem-nrqm-intervals-integration-by-parts, thm-nrqm-intervals-sine-on-completeness, lem-nrqm-intervals-free-line-resolvent, thm-nrqm-intervals-dirichlet-diagonal-domain-identification, lem-nrqm-intervals-compact-resolvent-eigenbasis, thm-nrqm-intervals-twisted-periodic-momentum-domain, thm-nrqm-intervals-bounded-interval-perturbation-compact-resolvent, thm-nrqm-intervals-regular-ivp-parameter-series, thm-nrqm-intervals-prufer-energy-monotonicity, thm-nrqm-intervals-dirichlet-nodal-theorem, thm-nrqm-intervals-delta-interface-operator, thm-nrqm-intervals-delta-rank-one-resolvent, thm-nrqm-intervals-delta-unique-bound-state, thm-nrqm-intervals-separated-robin-green-resolvent, thm-nrqm-intervals-robin-simple-complete-spectrum, thm-nrqm-intervals-barrier-transfer-and-thick-limit-error, thm-nrqm-intervals-finite-well-root-conditions-and-bound-count, ex-nrqm-intervals-contacts-dirichlet-momentum-failure, ex-nrqm-intervals-contacts-separated-box-degeneracy, ex-nrqm-intervals-contacts-attractive-contact-energy
Consolidated findings: [{"id":"thm-nrqm-intervals-sine-on-completeness","type":"local","reason":"Proof step 3.1 defines G([t])=g(2Lt) for t in [0,1), but g is defined on (-L,L) and the map has range [0,2L). The asserted image [-L,L) is false, so the Fourier coefficient argument does not establish completeness. Use a map onto (-L,L), accounting for the resulting phase."},{"id":"thm-nrqm-intervals-delta-rank-one-resolvent","type":"local","reason":"The proof establishes range at most one, but not rank one when alpha is nonzero; exhibit a nonzero input, for example f=conjugate(G_z), for which ell_z(f)=||G_z||_2^2>0. Also change |K_z| in the final norm inequality to ||K_z||."},{"id":"thm-nrqm-intervals-regular-ivp-parameter-series","type":"scope","reason":"The approved M19 design and cited Teschl Theorem 9.1 include locally uniform Picard parameter series and entire dependence on z; the current Statement and proof give only real differentiability on [-R,R]. State and prove the approved analytic scope. [Teschl, Theorem 9.1](https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf). A Statement expansion requires the repairer to check its direct consumers: thm-nrqm-intervals-prufer-energy-monotonicity, thm-nrqm-intervals-dirichlet-nodal-theorem, thm-nrqm-intervals-separated-robin-green-resolvent, thm-nrqm-intervals-robin-simple-complete-spectrum, thm-nrqm-intervals-finite-well-root-conditions-and-bound-count, thm-nrqm-coulomb-kummer-recurrence-and-termination, thm-nrqm-coulomb-jost-volterra-solution, thm-nrqm-coulomb-laguerre-bound-energy-exhaustion, thm-nrqm-controlled-dynamics-dollard-integrable-remainder, and thm-nrqm-controlled-dynamics-dollard-channel-completeness, along with their existing consumer chains."},{"id":"thm-nrqm-intervals-regular-ivp-parameter-series","type":"local","reason":"Proof step 5.1 bounds the source integral involving u(z+h)-u(z) by |h| C_R L^2/2, although step 4.1 only bounds that difference by |h| times a larger constant containing additional L^2 and exponential factors. Replace it with a bound following from step 4.1; the limit still follows from an explicit O(|h|) estimate."},{"id":"thm-nrqm-intervals-barrier-transfer-and-thick-limit-error","type":"scope","reason":"The approved M41 design gives the relative error bound (|4/C-2|q+q^2)/(1-|4/C-2|q-q^2) whenever its denominator is positive. The Statement restricts the error claim to |delta|<=1/2, excluding part of the approved regime even though the proof has the exact difference formula. Preserve the broader approved bound and check pthm-nrqm-potentials-barrier-flux-and-transmission, which currently uses the narrower clause."},{"id":"thm-nrqm-intervals-barrier-transfer-and-thick-limit-error","type":"local","reason":"Proof step 1.1 says the solution is described by eight constants but lists only six: c1, c2, A, B, c3, c4. Correct the count."},{"id":"thm-nrqm-intervals-finite-well-root-conditions-and-bound-count","type":"local","reason":"The Statement does not assign V at x=±a, so V is not a total function as written. Assign endpoint values (which do not change the multiplication operator) and explicitly show the matched, decaying piecewise solutions belong to H^2(R): their first derivatives match and their piecewise second derivatives are in L^2. In step 2.2, distinguish K at an interior branch point from K at the singular upper endpoint, where L_n(K) is undefined and the one-sided limit is used."},{"id":"pthm-nrqm-potentials-finite-well-bound-states","type":"outside-batch","reason":"This direct physical consumer repeats the finite-well potential formula without defining V at x=±a in its Statement and F1. The owner must assign consistent endpoint values when the supplier is repaired."},{"id":"thm-nrqm-intervals-twisted-periodic-momentum-domain","type":"prerequisite","reason":"The density proof uses C_c^infinity(0,L) dense in L^2(0,L), as do thm-nrqm-intervals-separated-robin-green-resolvent and ex-nrqm-intervals-contacts-dirichlet-momentum-failure. Their cited lem-integration-by-parts supplier does not prove this L^2 density. Add an exact density supplier or a local truncation-and-mollification argument."},{"id":"def-nrqm-intervals-hilbert-sobolev-spaces","type":"local","reason":"The title calls H^1 and H^2 Hilbert-Sobolev spaces, but the Definition only supplies their graph inner products and does not establish completeness. State or prove completeness, or use a title that does not assert the Hilbert property."},{"id":"lem-nrqm-intervals-endpoint-trace-and-half-line-decay","type":"local","reason":"Proof step 3.1 chooses gaps x_(n+1)>=x_n+delta and then calls the closed intervals [x_n,x_n+delta] pairwise disjoint; adjacent intervals can share an endpoint. Use strict gaps or half-open intervals before applying countable additivity."}]
Authorized source files: ["items/def-nrqm-intervals-hilbert-sobolev-spaces.md","items/lem-nrqm-intervals-weak-derivative-ac-representative.md","items/lem-nrqm-intervals-endpoint-trace-and-half-line-decay.md","items/lem-nrqm-intervals-integration-by-parts.md","items/thm-nrqm-intervals-sine-on-completeness.md","items/lem-nrqm-intervals-free-line-resolvent.md","items/thm-nrqm-intervals-dirichlet-diagonal-domain-identification.md","items/lem-nrqm-intervals-compact-resolvent-eigenbasis.md","items/thm-nrqm-intervals-twisted-periodic-momentum-domain.md","items/thm-nrqm-intervals-bounded-interval-perturbation-compact-resolvent.md","items/thm-nrqm-intervals-regular-ivp-parameter-series.md","items/thm-nrqm-intervals-prufer-energy-monotonicity.md","items/thm-nrqm-intervals-dirichlet-nodal-theorem.md","items/thm-nrqm-intervals-delta-interface-operator.md","items/thm-nrqm-intervals-delta-rank-one-resolvent.md","items/thm-nrqm-intervals-delta-unique-bound-state.md","items/thm-nrqm-intervals-separated-robin-green-resolvent.md","items/thm-nrqm-intervals-robin-simple-complete-spectrum.md","items/thm-nrqm-intervals-barrier-transfer-and-thick-limit-error.md","items/thm-nrqm-intervals-finite-well-root-conditions-and-bound-count.md","items/ex-nrqm-intervals-contacts-dirichlet-momentum-failure.md","items/ex-nrqm-intervals-contacts-separated-box-degeneracy.md","items/ex-nrqm-intervals-contacts-attractive-contact-energy.md","library/non-relativistic-quantum-mechanics-mathematics/qm-math-intervals-and-contacts.md","library/non-relativistic-quantum-mechanics-mathematics/qm-math-intervals-and-contacts-examples.md"]. Edit these assigned source files directly. Resolve prerequisite gaps locally on the same page where possible.
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
