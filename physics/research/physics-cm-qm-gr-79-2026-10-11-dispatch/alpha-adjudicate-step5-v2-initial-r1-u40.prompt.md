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

# Step 5 batch adjudicator

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/physics-support/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

- **Proof repair quality:** Repairs must be mathematically sound and cite dependencies accurately. State important caveats when appropriate, and write concisely without compromising correctness or completeness. Do not repeat the same argument or use unnecessary filler. Add intermediate lemmas when needed to meet prerequisites.
- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and the generated task fully. You are the Sol 6.1 high adjudicator for one batch in Step 5.1 or 7.5. The round-bound task defines the run, phase, round, rejected carriers, ownership, evidence paths, and result schema. Do not reconstruct these from historical tasks or receipts.
- Work supplier before consumer, in the task's increasing in-run dependency order. Handle every rejected tuple and group all tuples for one item together.
- Adjudicate and repair only assigned draft items in the frozen frontier at `research/physics-cm-qm-gr-79-2026-10-11-step5-v2/frontier.json`. Published repairs have no Step 5 adjudication, rejudge, or item-gate obligation; record them for separate maintenance. Outside-frontier consumers also belong to maintenance, not Step 5 repair or gates.
- Judge mathematical validity directly. Inspect each rejected statement, proof, definition, actual prerequisite, contract, and page interface. Judges, sources, and earlier acceptances can be wrong. Never pretend to understand something you do not; escalate any uncertainty and any potentially defective published consumers to the owner. When uncertain, read complete relevant arguments in authoritative sources, check their hypotheses and reasoning, and state exactly what they establish. Never invent source reading, familiarity, confidence, or checks.
- Cover every assigned rejected tuple. Record confirmed fatal and nonfatal defects, false positives, and unresolved uncertainty with concrete mathematical evidence. Repair every confirmed defect, including nonfatal defects. Fatal classification controls only the convergence threshold; a sound item needs no cosmetic edit. Unresolved mathematics blocks closure.
- For a licensed repair, make the smallest logically sufficient change, preserve the content contract, Foundations boundary, and actual AC requirements, and never weaken a claim merely to pass a check. Run the focused checks named by the task; a material rewrite invalidates the prior `verification.judge` record.
- You may create and fully author new items to meet a genuine unsatisfied prerequisite of an assigned frontier repair. Identify the missing claim, consuming proof step, and why existing suppliers do not suffice; give exact hypotheses, dependencies, and source evidence. Check existing IDs, aliases, and active assignments before choosing a unique ID. Register the item in the index/registry, page, manifest, and contract through the task's integration path. For shared edits, use `tools/physics-support/step5-shared-write-lock.mjs` acquire/reread/edit/check/release; do not hold the lock while researching or waiting. Include creation evidence. Such additions preserve author-origin and certification integrity, do not enlarge the frozen frontier, and do not enter its rejudgment or gate loops. Step 5.9 permits no additions.
- Propagate downstream work only when the original `## Statement` or `## Definition` changes, including lemma and corollary statements. Compare those sections directly; do not use a semantic classifier. Proof-only, citation, dependency, and metadata edits with unchanged statements do not propagate. New prerequisites count as new interfaces.
- For an interface change, inspect direct dependencies, references, and actual proof/page uses. Record exact affected clauses and paths; explain why unchanged consumers remain sound; propose only necessary minimal repairs. A candidate is not automatically defective. Continue one hop only if a necessary consumer repair changes that consumer's own Statement or Definition; never pre-expand through unchanged statements.
- Report discoveries outside your lane or the frozen frontier without editing their items. For potentially defective published consumers, give the owner/maintenance route the exact affected use and evidence; do not edit or adjudicate published items. Trace any changed published Statement or Definition to direct consumers.
- The engine routes frontier effects to three disjoint frontier-owner lanes. After frontier writers drain, separate maintenance uses three disjoint lanes for outside consumers. Maintenance reports bind exact snippets and `affected_use`, `invalidated_claim`, and `minimality` evidence; this accounting does not replace mathematical reasoning. Handle each supplier-interface event and outside consumer once, without Step 5 gate/context requeues. Every necessary maintenance Statement/Definition change propagates one more direct hop; frontier targets return to ordinary owner work. Finish frontier work and separate maintenance before certification.
- Run focused checks and report their actual results. Update only assigned files and evidence; use the task's integration path for shared ledgers. Keep mathematical findings and audit status in the canonical published-consumer ledger, operational history in run records, and preserve original round evidence.
- Return only the generated schema: `{run, phase, round, unit, input_sha256, decisions:[], reviews:[], created_items:[], downstream:[]}`. Copy identity and input hash exactly from the task.
- Include one `decisions` row per rejected tuple with `id`, `model`, `context_sha256`, `outcome` (`confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`), `reason`, `uncertain:false`, `source_urls`, and `familiar`. A confirmed fatal also needs `defect_type` (`logic`, `dependency_citation`, or `other`) justified by the finding. Never guess a category for historical evidence.
- Include a `reviews` row for every assigned item: `id`, `disposition` (`repaired` or `unaffected`), current `itemHashGuard` as `post_sha256`, `review_context_sha256`, and the same evidence fields. An unchanged item guard requires `unaffected`; explain contract/page-only repairs and set `metadata_repair_only:true` when applicable. Immediately after each review, before editing another supplier, run `node tools/physics-support/step5-workflow.mjs review-contexts --run RUN --items ID` and copy both hashes. Batch IDs reviewed on the same stable state if useful. Never refresh a review hash after supplier changes without examining their effects.
- If you author a prerequisite, include a `created_items` row with `id`, `kind`, `home_page`, `batch`, direct `consumers`, `reason`, `uncertain:false`, `source_urls`, and `familiar`. Every created item also needs a review; only a newly created item uses `authored` disposition.
- List affected item IDs in `downstream`, including every direct dependency/reference consumer after a Statement/Definition change, even if its use remains sound or it already has an assigned review. This is an examination inventory, not an edit list. Record each exact affected use and disposition in the report. For a consumer missing from the dependency/reference graph, include `downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}`. Route outside consumers to separate maintenance.
- Give authoritative source URLs actually consulted when unfamiliar; `familiar:false` requires those URLs. Unresolved uncertainty is a blocker, never a false-confidence statement. Empty assignments return empty arrays. Do not claim independent review of your own repair.
- Do not write judgments, stamps, central certificates, or round state; do not launch workers or another cycle. The engine collects evidence, completes frontier repair and separate maintenance, and certifies once all writers drain. A successful dispatch alone does not close unfinished work. Repeated pending work at an earlier assigned content state holds for operator resolution.
- Rejudgment and renewed frontier adjudication, owner repair, and certification repeat until unique confirmed fatal original-frontier items in the latest round are strictly below 5% of the immutable original scope. The threshold permits the final scoped gate; it never permits unresolved defects, uncertainty, or incomplete closure.


---

# This dispatch

run: physics-cm-qm-gr-79-2026-10-11
role: alpha-adjudicate
label: step5-v2-initial-r1-u40
covers: 40
output: research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u40.json

# Step 5 adjudicate: initial, round 1, unit 40

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-40-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u40.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"40",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:thm-nrqm-controlled-dynamics-cook-domain-criterion, 0:thm-nrqm-controlled-dynamics-liouville-turning-point-transformation, 1:thm-nrqm-controlled-dynamics-cook-isometry-and-intertwining, 1:thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel, 1:thm-nrqm-controlled-dynamics-wkb-explicit-error, 2:thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients, 3:thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness, 4:ex-nrqm-controlled-dynamics-continuum-contribution-in-perturbation, 7:thm-nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues, 10:thm-nrqm-controlled-dynamics-controlled-born-amplitude-error, 10:thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "thm-nrqm-controlled-dynamics-cook-domain-criterion",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates the supplied resolvent interface: it gives nonreal resolvent existence and bounds, but not R_z^*=R_{\\bar z} or commuting resolvent identities. Step 1.1 relies on these imported facts without deriving them.",
      "context_sha256": "438ac58599de907fffa2c3fa5d95b303175704ad3242935b0193f6936b1f4fd7",
      "item_sha256": "854341421103318e32783103db04713008571ca3fa014f12bd9ae2f553c115d1",
      "at": "2026-10-12T20:01:54.857Z"
    },
    {
      "id": "thm-nrqm-controlled-dynamics-liouville-turning-point-transformation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1’s integral formula for b and F2’s differentiation of the defining integral both use the fundamental theorem of calculus. No supplied dependency states it, and it is not proved locally; the derivative definition, chain rule, and dominated convergence do not license those steps.",
      "context_sha256": "89579f28445aec5d387bcd1e3975458e1d25a5b89b170eb0582b971ab08577de",
      "item_sha256": "7171e236c884a3db97fa7b4f441a6247eadddc218a128018e45a2254596ca8d1",
      "at": "2026-10-12T20:03:00.228Z"
    },
    {
      "id": "thm-nrqm-controlled-dynamics-cook-isometry-and-intertwining",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement uses H for both the Hilbert space and the interacting self-adjoint operator, despite claiming to adopt the prerequisite’s notation separating them. The hypotheses and operators “on H” are not well-typed as written.",
      "context_sha256": "85da6551ad078523747bb27b15367f70d9a8114492ae5bbecd494df29dc2acb9",
      "item_sha256": "99d7cdae4a30763f3a78e101c4716b73aafef01276ba1b160811bceb8c30ed91",
      "at": "2026-10-12T20:02:34.033Z"
    },
    {
      "id": "thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 selects the “least eligible reciprocal-integer value,” but once the error bound holds for all sufficiently small 1/m, those eligible values have no least positive member. The stated selection does not construct the sequence needed for the a.e. limit.",
      "context_sha256": "89594df86ca3869aae5f9e0fbbf77fa773ef494241727a7f3bad931a50fae0ad",
      "item_sha256": "9b793151975726ec1f9ae6bcb9f8ef529cc69c6748d4334699bcce4073a5cdef",
      "at": "2026-10-12T20:01:46.086Z"
    },
    {
      "id": "thm-nrqm-controlled-dynamics-wkb-explicit-error",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 attributes integral Gronwall to `def-derivative` and `def-continuity-real`, whose interfaces do not state or prove it. Step 1.1 cites F2, leaving that dependency claim unsupported.",
      "context_sha256": "c4587c49fdf7e6e36d0678ae55dbe48d0363906e22726cecff9fa57c5e6bbf9e",
      "item_sha256": "cc9930d33b55a1493a7e4e43b818535c5c5d6a3d20871e4b51030cb8fdebb87b",
      "at": "2026-10-12T20:01:33.794Z"
    },
    {
      "id": "thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.2 attributes B's stationary-phase remainder to an estimate “proved in [F1],” but F1's interface gives only A's representation and asymptotics, not that localized estimate or error bounds for B's amplitudes. The stated O(Z^-7/4) and O(Z^-5/4) errors lack the cited premise.",
      "context_sha256": "bfc4f65b6d03188beecb2c30461394465fc679ca59586f17073edf7d48491dda",
      "item_sha256": "0feed411e1c5e58b1eb88de11e292fee666be2698b80a27e76e6a746820bcf93",
      "at": "2026-10-12T20:03:45.477Z"
    },
    {
      "id": "thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The proof indexes J_n=[1/n,n] from n=0 by library convention, so J_0 is undefined. Step 1.2 also uses radius 1/n at n=0. The spectral exhaustions and sequence construction are invalid as written.",
      "context_sha256": "2589967d8e475197e70a95db20fe18613bb44eedff28c9dfbd059a3b8ce6053d",
      "item_sha256": "3d8d80494fcfdeea61b71023793a1fd6e2faf22668897f73660d0b0079049ccb",
      "at": "2026-10-12T20:07:24.788Z"
    },
    {
      "id": "ex-nrqm-controlled-dynamics-continuum-contribution-in-perturbation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The example never establishes that L²((1,2)), hence H, is complete. The cited Hilbert-space item is only a definition, and the Lp quotient item gives no completeness result, so the PVM and perturbation-theorem Hilbert-space hypotheses are unverified.",
      "context_sha256": "155fcc0e4f703d5d249197181a0ae4d731c261d652bbb8bd219cfc1819e3498f",
      "item_sha256": "6bf06117e878ecc85d29845c85d53c284588aa64d0754f68fa8ffb0a53124eef",
      "at": "2026-10-12T20:03:43.609Z"
    },
    {
      "id": "thm-nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 misstates the cited interface: clause (c) gives conjugation identities, not the associated-polynomial formula. The formula appears in the supplier’s defining setup, so this dependency restatement is inaccurate.",
      "context_sha256": "3b070eb44cc0476d5c854cf294e0cecadaff5abb5935f8d08101f76800408d5d",
      "item_sha256": "cf3b0040dc282d1ad3a36e5bb3904dcf6b9db8e7e0815e492e1cf8bcee7bd2ae",
      "at": "2026-10-12T20:02:38.084Z"
    },
    {
      "id": "thm-nrqm-controlled-dynamics-controlled-born-amplitude-error",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 identifies f_k with L_Ω(u) via the stationary outgoing integral-and-flux item, a physics result. Mathematical items cannot use physics items as prerequisites, so this dependency does not justify the amplitude estimate.",
      "context_sha256": "8ed4661dd2579d098e01535347aecc79d199ad7f39a360e301ccd3f46c427870",
      "item_sha256": "7189fe5d39d1321fd0d7d42396b606d18b22e7c31d8d62295a7f8f16a89b019b",
      "at": "2026-10-12T20:02:42.739Z"
    },
    {
      "id": "thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates its cited interfaces: they construct Ψ via the invertible Lippmann–Schwinger equation, but do not assert uniqueness among all outgoing PDE solutions. Step 1.1 relies on that stronger uniqueness to infer rotational symmetry.",
      "context_sha256": "4735274bf2bfb6da689c3e0c86ec5804f57c7c55ae60f092a67be885dda6f37c",
      "item_sha256": "fbad59c556d27f96340ae8805012843b2bd75b7a9bfc4922d5473bb9c86834b5",
      "at": "2026-10-12T20:04:13.770Z"
    }
  ]


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
