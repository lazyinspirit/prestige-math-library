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
label: step5-v2-initial-r1-u60
covers: 60
output: research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u60.json

# Step 5 adjudicate: initial, round 1, unit 60

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-60-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u60.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"60",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 10:def-nrqm-driven-dynamics-framework-adiabatic-protocol, 10:def-nrqm-driven-dynamics-framework-interaction-picture, 10:pthm-nrqm-driven-dynamics-bounded-norm-propagator, 10:pthm-nrqm-driven-dynamics-common-domain-propagator, 11:pthm-nrqm-driven-dynamics-circular-drive-exact-rabi, 11:pthm-nrqm-driven-dynamics-mild-propagator-and-pictures, 12:ex-nrqm-driven-dynamics-ammonia-two-level-resonance, 12:ex-nrqm-driven-dynamics-circular-drive-exact-populations, 12:ex-nrqm-driven-dynamics-linear-drive-rotating-wave-budget, 14:ex-nrqm-driven-dynamics-driven-oscillator-coherent-response.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-nrqm-driven-dynamics-framework-adiabatic-protocol",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: Binney §9.1.2, pp. 206–208, treats the linear Stark effect and degenerate perturbation theory, not slow gapped-level following; its adiabatic principle is in §11.1 ([source](https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf)).",
      "context_sha256": "458ffbf1fd2acfa132c40b812a7753fc991dd27d059317fed758b189e0be6e03",
      "item_sha256": "5974476a1df70a41911a996e24b3daae1dec58be54e37280b6e335e63e792d6d",
      "at": "2026-10-12T20:16:18.582Z"
    },
    {
      "id": "def-nrqm-driven-dynamics-framework-interaction-picture",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (e) has a fatal phase error: the decomposition gives A_ba(t,s)=exp(i(sE_a−tE_b)/ℏ)⟨U_I(t,s)φ_a,φ_b⟩, since E(t) contributes exp(−itE_b/ℏ). The stated phase incorrectly uses sE_b.",
      "context_sha256": "8dce0d247063dcfdb41d0de80a6ba93d7e80e591983d830f7b547e57d35754f5",
      "item_sha256": "89eda5b2a7bc54eeaf5e497b8ebcde0ae0cc1213c5ac3988459a4fa5c60b6fb9",
      "at": "2026-10-12T20:15:03.303Z"
    },
    {
      "id": "pthm-nrqm-driven-dynamics-bounded-norm-propagator",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For the allowed singleton interval a=b, F1 supplies U(a,a)=I but no endpoint derivatives. Clause (a) still asserts both operator-norm differential equations, and step 1.1 incorrectly claims F1 supplies them. Restrict to a<b or qualify the derivative claim.",
      "context_sha256": "407ea12d56607e1e082632aeaa6eb16419e06f33f68a6bf8938dee2c4841eb81",
      "item_sha256": "e24429fb4070e3e32131d57764993979e716f0ea2dfbd757c3ab329abcf16c14",
      "at": "2026-10-12T20:15:58.912Z"
    },
    {
      "id": "pthm-nrqm-driven-dynamics-common-domain-propagator",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For I=[a,a], clauses (a) and (b) assert strong derivative equations, but step 1.1 handles the singleton by U(a,a)=I and explicitly asserts no derivative. The proof therefore does not establish the stated claims for every allowed interval.",
      "context_sha256": "f3b924f407808085f9ab0617b59373bdc635e42b5265b72d63410bd911939cd5",
      "item_sha256": "8384ba5881107b861e83840035a3fbf50b503352710f8b65d0636b7006f45752",
      "at": "2026-10-12T20:16:32.478Z"
    },
    {
      "id": "pthm-nrqm-driven-dynamics-circular-drive-exact-rabi",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (c) overclaims for the declared finite interval: with I=[0,1] s and s=0, resonance, and Ω₁=1 s⁻¹, the stated π-pulse and return times lie outside I−s. Qualify those claims by s+τ∈I and periodicity to pairs of times in the domain.",
      "context_sha256": "38d3a51d02b8baade22790e2efe558d257caeb6674b833f314c75d5b607a684c",
      "item_sha256": "b4e75abd448e827dd83c4dd2e48aeb25c9c9670f9a8f7b370163cdf5b1c3e2df",
      "at": "2026-10-12T20:15:35.753Z"
    },
    {
      "id": "pthm-nrqm-driven-dynamics-mild-propagator-and-pictures",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 does not establish uniqueness: F1 constructs a Dyson-sum solution but does not say every family satisfying the mild identity equals that sum. Convergence of the constructed series alone does not prove uniqueness; a Volterra iteration or Grönwall argument is needed.",
      "context_sha256": "3eca8e483b6f64685ea17a6000e68594c010c3b029683379fad088575a0ba134",
      "item_sha256": "a52cdceef26ac4bbd42854acf53d1b7d5df55ddea2e1fac8460a996a3831a6d0",
      "at": "2026-10-12T20:15:25.453Z"
    },
    {
      "id": "ex-nrqm-driven-dynamics-ammonia-two-level-resonance",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[L1] omits the error contract’s essential preparation condition: supplier clause (c) assumes ψ(s)=e_up. Its unqualified exact/averaged population claim is false for general preparations; the contract applies only to the specified initial |E> preparation.",
      "context_sha256": "0aaadf72f271f240d533bfdcf0556add5015884488ef9c19f3dbd4b863425e79",
      "item_sha256": "3f01b7de2d5eb8cc3d6fdb9d8a14ba6a8af18ea65a72579a4929cdee88cad5fe",
      "at": "2026-10-12T20:16:52.023Z"
    },
    {
      "id": "ex-nrqm-driven-dynamics-circular-drive-exact-populations",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The supplied theorem defines U_c(t,s) only for s,t in its compact interval I, but the example neither fixes I nor requires it to contain the claimed elapsed times. A shorter I makes the quarter-pulse, pi-pulse and return evaluations out of domain.",
      "context_sha256": "0bfb69d31a04af6e96eae7eaf36755b3725484e0b41db43a0983e20a25c07983",
      "item_sha256": "be1ef1f8fb563b7880c794a978f49f5154d8c8c4001f2c5e96a0e15201822998",
      "at": "2026-10-12T20:16:48.903Z"
    },
    {
      "id": "ex-nrqm-driven-dynamics-linear-drive-rotating-wave-budget",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal arithmetic error: with Ω₁=ω/50, ε(0)=|Ω₁|/(2|ω|)=1/100, not the 1/50 claimed in (d). The bound is conservative there, but its stated value is wrong.",
      "context_sha256": "61a1c28a06a9f61e152a74cfd58d6da23f3d2519d8457caf62bec3eaefbdab49",
      "item_sha256": "7a224a15f29049d10714b10b04518696c985243ad488032fbc3ba6ebfad4526c",
      "at": "2026-10-12T20:15:38.091Z"
    },
    {
      "id": "ex-nrqm-driven-dynamics-driven-oscillator-coherent-response",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Scope mismatch: [L1] and the cited propagator clauses give the formula only for a≤s≤t≤b, but the example quantifies over all s,t∈[a,b]. The proof never extends it to t<s via the inverse evolution.",
      "context_sha256": "b23b3db541c042e37421d9a50c137b75236efa8ed8d16f448e41308ebdcf5981",
      "item_sha256": "5f2b5f4dcffcf1adbeb6804fc012800f349c67257dad7ae5efd554e99091e9c4",
      "at": "2026-10-12T20:16:24.862Z"
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
