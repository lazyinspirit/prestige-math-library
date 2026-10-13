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
label: step5-v2-initial-r1-u79
covers: 79
output: research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u79.json

# Step 5 adjudicate: initial, round 1, unit 79

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-79-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u79.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"79",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 26:def-gr-development-and-data-fixing-isometry, 27:def-gr-common-subdevelopment-and-corresponding-boundary, 27:lem-gr-compact-past-above-cauchy-set, 29:lem-gr-intersection-of-developments, 29:lem-gr-isometric-immersion-rigidity, 30:lem-gr-data-fixing-immersion-is-embedding, 31:lem-gr-corresponding-set-smooth-extension, 31:lem-gr-maximal-common-development, 41:ex-gr-minkowski-maximal-development, 42:ex-gr-minkowski-rational-dense-and-basis.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-gr-development-and-data-fixing-isometry",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The model is introduced with equations ℰ(g,ψ)=0, but clause (a) defines a development using E(g,ψ)=0 without defining E or identifying it with ℰ. The matter-equation condition is undefined as written.",
      "context_sha256": "cb09c5ab7a2dcc8d4c04879a3f3b26f2f19fc81efc72285570059f5d321af48d",
      "item_sha256": "45f5dcea346f09dcf646ca994ff54695fed1e47bc55887ea38781dc0ef7542fd",
      "at": "2026-10-12T20:34:51.031Z"
    },
    {
      "id": "def-gr-common-subdevelopment-and-corresponding-boundary",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: clause (d) attributes chronology openness to clauses (a),(b) of the cited Cauchy-set lemma, but its interface states only trichotomy/closedness, not openness of I±(Σ); that claim is needed to choose same-side neighborhoods. Required repo guidance files were unavailable.",
      "context_sha256": "2209fb3110972c4c8a44124e0b387480fdc4f8d5900c199ec1c89901c5afd417",
      "item_sha256": "7c84834f675e368f84cc11a59f5e7028c027f98b2dae5c6868c7c61c42614766",
      "at": "2026-10-12T20:36:33.885Z"
    },
    {
      "id": "lem-gr-compact-past-above-cauchy-set",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: [L1] says J⁺(Σ) is closed, but the cited causal-structure interface gives closedness only for J⁺(x) and J⁺(K) with compact K; the Cauchy-set interface only says Σ is closed. Steps 1.2 and 2.2 rely on this unsupported claim.",
      "context_sha256": "6da3feedd742123aee220393fcf1644385de34237c4fe953bdea7e191ea5fdf1",
      "item_sha256": "e4252500fe3356919ba0dc1d4e1577920ea890bdf07e0bf27c4a8e249cb9e18d",
      "at": "2026-10-12T20:34:51.233Z"
    },
    {
      "id": "lem-gr-intersection-of-developments",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L4 misstates the dependency: the theorem makes only the conformally rescaled metric h' complete, not h=g+2n♭⊗n♭. Steps 3.1–3.2 need completeness for the same metric whose lengths they bound, so convergence of those Cauchy tails is not justified.",
      "context_sha256": "10a650af1d3d98b2a05358ac4fcd844671d14f91c42e5eba84f50a0c61cf94e7",
      "item_sha256": "08da21ba5895ea704a6db3021299ab8dceb0371f2a8cd605d229f86a66f78821",
      "at": "2026-10-12T20:35:31.068Z"
    },
    {
      "id": "lem-gr-isometric-immersion-rigidity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.3 is essential, but its maps lack a specified common codomain: dψ_i(q) lies in Hom(T_qN,T_{ψ_i(q)}N'). No supplied interface defines the “tangent-bundle-like target” or establishes continuity and a closed diagonal there; hence A closed, needed for (a)/(c), is unproved.",
      "context_sha256": "d2d47fa671c01ff5625fe01173eaa3d6c5b675a8804ef395058a17d62ffba547",
      "item_sha256": "5b40a2a878a3592a6bb1559daabd0df159bb6b3aec9d348382b42ca9f4dabf30",
      "at": "2026-10-12T20:34:34.410Z"
    },
    {
      "id": "lem-gr-data-fixing-immersion-is-embedding",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[L5]/step 5.1 misstates [[lem-gr-isometric-immersion-rigidity]] clause (b): it gives equal initial differentials only for data-fixing development embeddings on a common subdevelopment, not arbitrary isometric immersions. The cited fact does not license this step.",
      "context_sha256": "bfee1fdaf1371e87215b91ed59f256fb9773730ff6026b03a32031c005a640d1",
      "item_sha256": "bb271a3c7a2379323f1406c85ec96e2d4a4947a3f7ab469ce3e8e2a8fa2baaa4",
      "at": "2026-10-12T20:35:20.952Z"
    },
    {
      "id": "lem-gr-corresponding-set-smooth-extension",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Title defect: “on the closure side” reads as preservation on the closure of U, but the statement and proof establish it only on U∪C. C contains only boundary points with corresponding points and need not equal all of ∂U.",
      "context_sha256": "82ed5b37912989d1fd0c18fffe2e2e149145d1913dc74533c0126b6c70550fa9",
      "item_sha256": "793e8498e2f6819060436e4e5b79b7b3c112598e36bec6ed574af8de5104a6d1",
      "at": "2026-10-12T20:38:29.650Z"
    },
    {
      "id": "lem-gr-maximal-common-development",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L3 establishes nonemptiness only by citing GR and matter local-evolution results. Those physics items cannot justify this mathematics lemma, and no independent mathematical proof that a common subdevelopment exists is given.",
      "context_sha256": "032fbec426e6835d060d95112b747763233dd02944b5c73f18a19192fe2f322a",
      "item_sha256": "e0b86b4bebee5823f16df34ec8bc203cea0c4b07dcd3ba0a4af34ba2e9cd6685",
      "at": "2026-10-12T20:35:11.507Z"
    },
    {
      "id": "ex-gr-minkowski-maximal-development",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L1 overstates thm-gr-smooth-maximal-globally-hyperbolic-development: its claim also requires an existing development and local existence and uniqueness for the same admissible model at every restart. The cited interface does not license L1 as written.",
      "context_sha256": "bec0f15895b707ed164b1e2859e29cd41f5279f0c3d3fc5ce7356f1467852de2",
      "item_sha256": "359c9d3e65bef3a2e11e9d4da0850e4519ec95dfdb1a8e1c67a73190c27907c4",
      "at": "2026-10-12T20:37:53.329Z"
    },
    {
      "id": "ex-gr-minkowski-rational-dense-and-basis",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L2 attributes exp_d(v)=d+v to clause (a), but the supplied theorem gives local geodesic existence and maximality; it does not establish straight-coordinate geodesics or a globally defined exponential map on all rational balls.",
      "context_sha256": "329ecff3f20a2fdf167f2900d84507e67875720e38d679c517d4ab56b3a5090c",
      "item_sha256": "6eb80bf83dcd778c64ab85d8cda5c4ff1637beb554bf5f310699ccc450257ed3",
      "at": "2026-10-12T20:35:43.577Z"
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
