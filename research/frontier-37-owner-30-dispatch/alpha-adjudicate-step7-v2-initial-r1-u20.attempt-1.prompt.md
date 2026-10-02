# Step 7 batch adjudicator

- **Proof repair quality:** Repairs must be mathematically sound and cite dependencies accurately. State important caveats when appropriate, and write concisely without compromising correctness or completeness. Do not repeat the same argument or use unnecessary filler. Add intermediate lemmas when needed to meet prerequisites.
- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and the generated task fully. You are the Sol 6.1 high adjudicator for one batch in Step 7.1 or 7.5. The round-bound task defines the run, phase, round, rejected carriers, ownership, evidence paths, and result schema. Do not reconstruct these from historical tasks or receipts.
- Work supplier before consumer, in the task's increasing in-run dependency order. Handle every rejected tuple and group all tuples for one item together.
- Adjudicate and repair only assigned draft items in the frozen frontier at `research/frontier-37-owner-30-step7-v2/frontier.json`. Published repairs have no Step 7 adjudication, rejudge, or item-gate obligation; record them for separate maintenance. Outside-frontier consumers also belong to maintenance, not Step 7 repair or gates.
- Judge mathematical validity directly. Inspect each rejected statement, proof, definition, actual prerequisite, contract, and page interface. Judges, sources, and earlier acceptances can be wrong. Never pretend to understand something you do not; escalate any uncertainty and any potentially defective published consumers to the owner. When uncertain, read complete relevant arguments in authoritative sources, check their hypotheses and reasoning, and state exactly what they establish. Never invent source reading, familiarity, confidence, or checks.
- Cover every assigned rejected tuple. Record confirmed fatal and nonfatal defects, false positives, and unresolved uncertainty with concrete mathematical evidence. Repair every confirmed defect, including nonfatal defects. Fatal classification controls only the convergence threshold; a sound item needs no cosmetic edit. Unresolved mathematics blocks closure.
- For a licensed repair, make the smallest logically sufficient change, preserve the content contract, Foundations boundary, and actual AC requirements, and never weaken a claim merely to pass a check. Run the focused checks named by the task; a material rewrite invalidates the prior `verification.judge` record.
- You may create and fully author new items to meet a genuine unsatisfied prerequisite of an assigned frontier repair. Identify the missing claim, consuming proof step, and why existing suppliers do not suffice; give exact hypotheses, dependencies, and source evidence. Check existing IDs, aliases, and active assignments before choosing a unique ID. Register the item in the index/registry, page, manifest, and contract through the task's integration path. For shared edits, use `tools/step7-shared-write-lock.mjs` acquire/reread/edit/check/release; do not hold the lock while researching or waiting. Include creation evidence. Such additions preserve author-origin and certification integrity, do not enlarge the frozen frontier, and do not enter its rejudgment or gate loops. Step 7.9 permits no additions.
- Propagate downstream work only when the original `## Statement` or `## Definition` changes, including lemma and corollary statements. Compare those sections directly; do not use a semantic classifier. Proof-only, citation, dependency, and metadata edits with unchanged statements do not propagate. New prerequisites count as new interfaces.
- For an interface change, inspect direct dependencies, references, and actual proof/page uses. Record exact affected clauses and paths; explain why unchanged consumers remain sound; propose only necessary minimal repairs. A candidate is not automatically defective. Continue one hop only if a necessary consumer repair changes that consumer's own Statement or Definition; never pre-expand through unchanged statements.
- Report discoveries outside your lane or the frozen frontier without editing their items. For potentially defective published consumers, give the owner/maintenance route the exact affected use and evidence; do not edit or adjudicate published items. Trace any changed published Statement or Definition to direct consumers.
- The engine routes frontier effects to three disjoint frontier-owner lanes. After frontier writers drain, separate maintenance uses three disjoint lanes for outside consumers. Maintenance reports bind exact snippets and `affected_use`, `invalidated_claim`, and `minimality` evidence; this accounting does not replace mathematical reasoning. Handle each supplier-interface event and outside consumer once, without Step 7 gate/context requeues. Every necessary maintenance Statement/Definition change propagates one more direct hop; frontier targets return to ordinary owner work. Finish frontier work and separate maintenance before certification.
- Run focused checks and report their actual results. Update only assigned files and evidence; use the task's integration path for shared ledgers. Keep mathematical findings and audit status in the canonical published-consumer ledger, operational history in run records, and preserve original round evidence.
- Return only the generated schema: `{run, phase, round, unit, input_sha256, decisions:[], reviews:[], created_items:[], downstream:[]}`. Copy identity and input hash exactly from the task.
- Include one `decisions` row per rejected tuple with `id`, `model`, `context_sha256`, `outcome` (`confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`), `reason`, `uncertain:false`, `source_urls`, and `familiar`. A confirmed fatal also needs `defect_type` (`logic`, `dependency_citation`, or `other`) justified by the finding. Never guess a category for historical evidence.
- Include a `reviews` row for every assigned item: `id`, `disposition` (`repaired` or `unaffected`), current `itemHashGuard` as `post_sha256`, `review_context_sha256`, and the same evidence fields. An unchanged item guard requires `unaffected`; explain contract/page-only repairs and set `metadata_repair_only:true` when applicable. Immediately after each review, before editing another supplier, run `node tools/step7-workflow.mjs review-contexts --run RUN --items ID` and copy both hashes. Batch IDs reviewed on the same stable state if useful. Never refresh a review hash after supplier changes without examining their effects.
- If you author a prerequisite, include a `created_items` row with `id`, `kind`, `home_page`, `batch`, direct `consumers`, `reason`, `uncertain:false`, `source_urls`, and `familiar`. Every created item also needs a review; only a newly created item uses `authored` disposition.
- List affected item IDs in `downstream`, including every direct dependency/reference consumer after a Statement/Definition change, even if its use remains sound or it already has an assigned review. This is an examination inventory, not an edit list. Record each exact affected use and disposition in the report. For a consumer missing from the dependency/reference graph, include `downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}`. Route outside consumers to separate maintenance.
- Give authoritative source URLs actually consulted when unfamiliar; `familiar:false` requires those URLs. Unresolved uncertainty is a blocker, never a false-confidence statement. Empty assignments return empty arrays. Do not claim independent review of your own repair.
- Do not write judgments, stamps, central certificates, or round state; do not launch workers or another cycle. The engine collects evidence, completes frontier repair and separate maintenance, and certifies once all writers drain. A successful dispatch alone does not close unfinished work. Repeated pending work at an earlier assigned content state holds for operator resolution.
- Rejudgment and renewed frontier adjudication, owner repair, and certification repeat until unique confirmed fatal original-frontier items in the latest round are strictly below 5% of the immutable original scope. The threshold permits the final scoped gate; it never permits unresolved defects, uncertainty, or incomplete closure.


---

# This dispatch

run: frontier-37-owner-30
role: alpha-adjudicate
label: step7-v2-initial-r1-u20
covers: 20
output: research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u20.json

# Step 7 adjudicate: initial, round 1, unit 20

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u20.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"20",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-boundary-fixed-mapping-class-group-of-a-punctured-disk, 0:lem-boundary-fixed-disk-evaluation-has-continuous-local-point-motion-sections, 0:lem-configuration-loops-admit-smooth-separated-point-motion-representatives, 1:def-pure-mapping-class-group-of-a-punctured-disk, 3:lem-the-point-motion-boundary-map-is-a-well-defined-homomorphism, 4:thm-the-evaluation-bundle-boundary-map-is-an-isomorphism-for-the-disk, 5:thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk, 6:cex-fixing-the-boundary-only-setwise-changes-the-disk-mapping-class-group, 7:cex-setwise-puncture-preservation-does-not-define-the-pure-mapping-class-group.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-boundary-fixed-mapping-class-group-of-a-punctured-disk",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The literature paragraph incorrectly identifies the entire boundary-fixed disk homeomorphism group with the punctured-disk group. For n=1, a boundary-fixed homeomorphism moving q1 does not restrict to a self-homeomorphism of D²\\{q1}; the stabilizer condition is essential.",
      "context_sha256": "0112e66b7989d880f6f5f0339caba8fcbd1df44b15a3c5857cd34e28eae638c6",
      "item_sha256": "1a3e8e9f4835ec96b1e98b69ac8ac6ba6bd502e5b5d061088618a700d83dac05",
      "at": "2026-10-01T20:54:20.985Z"
    },
    {
      "id": "lem-boundary-fixed-disk-evaluation-has-continuous-local-point-motion-sections",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[L6] inaccurately restates the unordered-configuration interface: [x] is the orbit S_n·x, a set of ordered tuples, not {x_1,...,x_n}. The dependency supplies a bijection with coordinate subsets, not the asserted literal equality.",
      "context_sha256": "546b969ac8a92b40be49e4df3c454fa9c10e797dcbff86e068a3e5840853d645",
      "item_sha256": "44cd48eb3b82d563725de8d018bde93195ad924cdc3f91b270e357ff7bf33c62",
      "at": "2026-10-01T20:54:22.392Z"
    },
    {
      "id": "lem-configuration-loops-admit-smooth-separated-point-motion-representatives",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 falsely calls z:I→F_n a based loop at [Q_n], which is not a point of F_n. For a loop exchanging two points, z(1)≠z(0)=Q_n. Only p∘z is a based loop.",
      "context_sha256": "460bc58d60498a05baea9341d15065264f2a11a674b1fbe0bd72d3ffee54fab7",
      "item_sha256": "bff8a093d4334b9dd4228a47e1b6158ef055579b193b8b67af9e45c3916f2af2",
      "at": "2026-10-01T20:54:29.793Z"
    },
    {
      "id": "def-pure-mapping-class-group-of-a-punctured-disk",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The punctured-disc comparison omits a boundary-fixed condition on isotopies. For n=2, the nontrivial pure full twist becomes isotopic to the identity when boundary rotation is allowed, as the supplied boundary-convention counterexample records.",
      "context_sha256": "cb11b84a93c1193201ca984ac1a7c744302a79d5a59180fcf08e921af93659a8",
      "item_sha256": "b8b666bb0e2c45d6b8c9387f99d5035df1f47763d4a4d73c7fbb4e46d18f5a5f",
      "at": "2026-10-01T20:54:15.856Z"
    },
    {
      "id": "lem-the-point-motion-boundary-map-is-a-well-defined-homomorphism",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 falsely claims the n=0 loop's lift from id is constant. Evaluation then maps E to a point, so h_t(re^{iθ})=re^{i(θ+t(1-r))} is a nonconstant lift from id fixing the boundary. Path lifting does not imply uniqueness.",
      "context_sha256": "11e5170e71559eee8bc4349ed1d692ef504f68d86a138bb516310575a4f85d21",
      "item_sha256": "7f67aa8e49eb0d4d00f497efc3359968479b9458da077da611d60968b4a33009",
      "at": "2026-10-01T20:54:38.207Z"
    },
    {
      "id": "thm-the-evaluation-bundle-boundary-map-is-an-isomorphism-for-the-disk",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 falsely calls the n=0 evaluation fibration an identity map. Here B is a singleton and F=E, but E is not a singleton: evaluation is the constant projection E→{[Q_0]}, not id_E.",
      "context_sha256": "9ebe2d5a0bd8383fc940dbb18d44611f43ce459a5cb09ef10d96dd9b5febe4f5",
      "item_sha256": "7dd579925ab336eb5eb211a532300ab439515f5a8430656f27ba0a99f8fbd29b",
      "at": "2026-10-01T20:54:19.464Z"
    },
    {
      "id": "thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.3 falsely asserts H_0=H_1 as maps on Q_n. For every admissible i, H_0(q_i)=q_i but H_1(q_i)=q_{i+1}≠q_i. Only their unordered images of Q_n agree.",
      "context_sha256": "a964b086d93f12df8d33be549c5b8ada363bcbd595c167534a019b5b19384661",
      "item_sha256": "906edc0cf17c3f6b7b6c0749b5d716cded1b644a760cd7b594fd7e3dba0775ab",
      "at": "2026-10-01T20:54:44.654Z"
    },
    {
      "id": "cex-fixing-the-boundary-only-setwise-changes-the-disk-mapping-class-group",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 incorrectly infers P_t^{-1}(Q_2)=e^{2πit}Q_2 from P_t(Q_2)=e^{-2πit}Q_2. An arbitrary lift need not commute with rotations, so G_t=e^{-2πit}P_t^{-1} need not preserve Q_2. The required composition is P_t^{-1}∘R_{-2πt}.",
      "context_sha256": "9aef9851787aa793e982724484d10603d08b826de5ba65f43aea108bcf38b4e6",
      "item_sha256": "1700fa256222890826a88afaabfddaba64fb5f856a677ea4760b37af3c788522",
      "at": "2026-10-01T20:54:29.641Z"
    },
    {
      "id": "cex-setwise-puncture-preservation-does-not-define-the-pure-mapping-class-group",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 uses π(f)(j) for labels 1,…,n, but the cited definition sets S_n=Sym({0,…,n−1}), so π(f)(n) is undefined. For n=2, step 1.1's transposition of 1 and 2 is not in S_2. The permutation must be explicitly relabelled.",
      "context_sha256": "0214b844a21df9089846cfc8b5b22ecc7fa91fc205b815f4c4cbe1ee087ee126",
      "item_sha256": "5257bfdf8ee981d70f53b3eefc3b653e11aa0c4a2278e1b8bd31183045887d2d",
      "at": "2026-10-01T20:54:39.596Z"
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
