# Step 5 batch adjudicator

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

- **Proof repair quality:** Repairs must be mathematically sound and cite dependencies accurately. State important caveats when appropriate, and write concisely without compromising correctness or completeness. Do not repeat the same argument or use unnecessary filler. Add intermediate lemmas when needed to meet prerequisites.
- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and the generated task fully. You are the Sol 6.1 high adjudicator for one batch in Step 5.1 or 7.5. The round-bound task defines the run, phase, round, rejected carriers, ownership, evidence paths, and result schema. Do not reconstruct these from historical tasks or receipts.
- Work supplier before consumer, in the task's increasing in-run dependency order. Handle every rejected tuple and group all tuples for one item together.
- Adjudicate and repair only assigned draft items in the frozen frontier at `research/frontier-44-special-representation-examples-28-six-step-step5-v2/frontier.json`. Published repairs have no Step 5 adjudication, rejudge, or item-gate obligation; record them for separate maintenance. Outside-frontier consumers also belong to maintenance, not Step 5 repair or gates.
- Judge mathematical validity directly. Inspect each rejected statement, proof, definition, actual prerequisite, contract, and page interface. Judges, sources, and earlier acceptances can be wrong. Never pretend to understand something you do not; escalate any uncertainty and any potentially defective published consumers to the owner. When uncertain, read complete relevant arguments in authoritative sources, check their hypotheses and reasoning, and state exactly what they establish. Never invent source reading, familiarity, confidence, or checks.
- Cover every assigned rejected tuple. Record confirmed fatal and nonfatal defects, false positives, and unresolved uncertainty with concrete mathematical evidence. Repair every confirmed defect, including nonfatal defects. Fatal classification controls only the convergence threshold; a sound item needs no cosmetic edit. Unresolved mathematics blocks closure.
- For a licensed repair, make the smallest logically sufficient change, preserve the content contract, Foundations boundary, and actual AC requirements, and never weaken a claim merely to pass a check. Run the focused checks named by the task; a material rewrite invalidates the prior `verification.judge` record.
- You may create and fully author new items to meet a genuine unsatisfied prerequisite of an assigned frontier repair. Identify the missing claim, consuming proof step, and why existing suppliers do not suffice; give exact hypotheses, dependencies, and source evidence. Check existing IDs, aliases, and active assignments before choosing a unique ID. Register the item in the index/registry, page, manifest, and contract through the task's integration path. For shared edits, use `tools/step5-shared-write-lock.mjs` acquire/reread/edit/check/release; do not hold the lock while researching or waiting. Include creation evidence. Such additions preserve author-origin and certification integrity, do not enlarge the frozen frontier, and do not enter its rejudgment or gate loops. Step 5.9 permits no additions.
- Propagate downstream work only when the original `## Statement` or `## Definition` changes, including lemma and corollary statements. Compare those sections directly; do not use a semantic classifier. Proof-only, citation, dependency, and metadata edits with unchanged statements do not propagate. New prerequisites count as new interfaces.
- For an interface change, inspect direct dependencies, references, and actual proof/page uses. Record exact affected clauses and paths; explain why unchanged consumers remain sound; propose only necessary minimal repairs. A candidate is not automatically defective. Continue one hop only if a necessary consumer repair changes that consumer's own Statement or Definition; never pre-expand through unchanged statements.
- Report discoveries outside your lane or the frozen frontier without editing their items. For potentially defective published consumers, give the owner/maintenance route the exact affected use and evidence; do not edit or adjudicate published items. Trace any changed published Statement or Definition to direct consumers.
- The engine routes frontier effects to three disjoint frontier-owner lanes. After frontier writers drain, separate maintenance uses three disjoint lanes for outside consumers. Maintenance reports bind exact snippets and `affected_use`, `invalidated_claim`, and `minimality` evidence; this accounting does not replace mathematical reasoning. Handle each supplier-interface event and outside consumer once, without Step 5 gate/context requeues. Every necessary maintenance Statement/Definition change propagates one more direct hop; frontier targets return to ordinary owner work. Finish frontier work and separate maintenance before certification.
- Run focused checks and report their actual results. Update only assigned files and evidence; use the task's integration path for shared ledgers. Keep mathematical findings and audit status in the canonical published-consumer ledger, operational history in run records, and preserve original round evidence.
- Return only the generated schema: `{run, phase, round, unit, input_sha256, decisions:[], reviews:[], created_items:[], downstream:[]}`. Copy identity and input hash exactly from the task.
- Include one `decisions` row per rejected tuple with `id`, `model`, `context_sha256`, `outcome` (`confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`), `reason`, `uncertain:false`, `source_urls`, and `familiar`. A confirmed fatal also needs `defect_type` (`logic`, `dependency_citation`, or `other`) justified by the finding. Never guess a category for historical evidence.
- Include a `reviews` row for every assigned item: `id`, `disposition` (`repaired` or `unaffected`), current `itemHashGuard` as `post_sha256`, `review_context_sha256`, and the same evidence fields. An unchanged item guard requires `unaffected`; explain contract/page-only repairs and set `metadata_repair_only:true` when applicable. Immediately after each review, before editing another supplier, run `node tools/step5-workflow.mjs review-contexts --run RUN --items ID` and copy both hashes. Batch IDs reviewed on the same stable state if useful. Never refresh a review hash after supplier changes without examining their effects.
- If you author a prerequisite, include a `created_items` row with `id`, `kind`, `home_page`, `batch`, direct `consumers`, `reason`, `uncertain:false`, `source_urls`, and `familiar`. Every created item also needs a review; only a newly created item uses `authored` disposition.
- List affected item IDs in `downstream`, including every direct dependency/reference consumer after a Statement/Definition change, even if its use remains sound or it already has an assigned review. This is an examination inventory, not an edit list. Record each exact affected use and disposition in the report. For a consumer missing from the dependency/reference graph, include `downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}`. Route outside consumers to separate maintenance.
- Give authoritative source URLs actually consulted when unfamiliar; `familiar:false` requires those URLs. Unresolved uncertainty is a blocker, never a false-confidence statement. Empty assignments return empty arrays. Do not claim independent review of your own repair.
- Do not write judgments, stamps, central certificates, or round state; do not launch workers or another cycle. The engine collects evidence, completes frontier repair and separate maintenance, and certifies once all writers drain. A successful dispatch alone does not close unfinished work. Repeated pending work at an earlier assigned content state holds for operator resolution.
- Rejudgment and renewed frontier adjudication, owner repair, and certification repeat until unique confirmed fatal original-frontier items in the latest round are strictly below 5% of the immutable original scope. The threshold permits the final scoped gate; it never permits unresolved defects, uncertainty, or incomplete closure.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.


---

# This dispatch

run: frontier-44-special-representation-examples-28-six-step
role: alpha-adjudicate
label: step5-v2-initial-r1-u15
covers: 15
output: research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u15.json

# Step 5 adjudicate: initial, round 1, unit 15

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-batch-15-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u15.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-44-special-representation-examples-28-six-step",phase:"initial",round:1,unit:"15",input_sha256:"a3c0decd85fdbe71b25b7ccd7e6264df187be55612edc2bcfbd9729c1e231624",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run frontier-44-special-representation-examples-28-six-step --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-residue-signature-normal-good-conormal-and-cogood-nodes, 0:lem-finite-group-induction-is-coinduction-and-thus-biadjoint, 1:def-generalized-jm-primary-idempotents-and-residue-summand-functors, 1:def-good-node-and-cogood-node-crystal-operators, 17:thm-cogood-node-gives-the-simple-socle-and-head-of-residue-induction, 18:cor-socle-of-uncoloured-modular-restriction-is-the-sum-over-good-residues, 19:lem-general-hecke-residue-branching-endpoints-from-normalized-schur-cells, 19:prop-every-p-restricted-partition-is-reached-by-cogood-node-additions, 20:rem-the-crystal-identification-does-not-elementarily-identify-cellular-simple-labels.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-residue-signature-normal-good-conormal-and-cogood-nodes",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The transpose warning is false. At p=3, μ=(5,5,4,3,1,1), removable A=(2,5) cancels with addable (4,4), so is nonnormal. Its transpose (5,2) is normal for μ'=(6,4,4,3,2) in the supplied Brundan example.",
      "context_sha256": "8193ea22946e59ed5f76c113b57601dc165c5212ee1c5a1f0b1a359295569cd0",
      "item_sha256": "a0fc2228d76ea907ee4dde6f8dcebb9e25d29ab28920b7663d4bc52bfb115e5a",
      "at": "2026-10-11T15:05:33.311Z"
    },
    {
      "id": "lem-finite-group-induction-is-coinduction-and-thus-biadjoint",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 falsely states that the elements of kG form a k-basis; they include 0 and are not linearly independent. The correct basis is G. This is an inaccurate local dependency restatement, although the isomorphism argument otherwise works.",
      "context_sha256": "0986297b407033950cbc41fc7739308ab3243c480e979ac7207d0eea3cbdfda2",
      "item_sha256": "a566b023ae9920192ff854eb24bf42b376c13fd2c6b282293692082bc12a08aa",
      "at": "2026-10-11T15:05:12.505Z"
    },
    {
      "id": "def-generalized-jm-primary-idempotents-and-residue-summand-functors",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F4] incorrectly claims CRT gives separating idempotents in R. For R=Z with ideals (2) and (3), CRT applies, but Z has only idempotents 0 and 1. The supplied interface gives the coordinate idempotents in R/((2)(3)), not in R.",
      "context_sha256": "1007d7a6de44449e05cf806c7424a5ee29549ee54b672049b50bcfa415c6875f",
      "item_sha256": "f2412ab3aa34223e2a016af95ac5502173b6f806914e38e5575165213c8c3626",
      "at": "2026-10-11T15:05:01.200Z"
    },
    {
      "id": "def-good-node-and-cogood-node-crystal-operators",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1 applies step 3.1 to ν=μ∪Y for arbitrary addable Y, although ν need not be p-restricted. For p=2, μ=(1) and Y=(1,2) give ν=(2), outside the supplied good-node definition's domain.",
      "context_sha256": "56d7afb9aff3c782f49da73513c83f2c723512f185d1307590a319bafc5680ed",
      "item_sha256": "52554060ebb9be2c9e68a8cd66df201d0b9923b5ab89f3a87984a031a8d9b25a",
      "at": "2026-10-11T15:05:21.970Z"
    },
    {
      "id": "thm-cogood-node-gives-the-simple-socle-and-head-of-residue-induction",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 overstates the root-interval interface: it supplies a basis and count recurrence, not identities (P), (Z), (M), distinct essential hats or the essential–regular equivalence. Steps 4–9 depend essentially on these unsupported prerequisites.",
      "context_sha256": "74cc114eb8e76938c8009af1e0408d1f899190ed5af1bbbd6ba1473a6432ec66",
      "item_sha256": "645819105c67551255d46ea7517bcadc7cabd826c7e7784c393b29ecb3524e27",
      "at": "2026-10-11T15:07:13.220Z"
    },
    {
      "id": "cor-socle-of-uncoloured-modular-restriction-is-the-sum-over-good-residues",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3, used in step 1.2, imports a restriction-socle theorem from the cogood-induction dependency. Its supplied interface asserts only induction endpoints and multiplicity; it does not supply the restriction formula on which this proof rests.",
      "context_sha256": "014c2c72756df2321563a97be6ce3394ca537a52302f403183f12b2a088f5659",
      "item_sha256": "fcfcd7d8461e3099a67193d13263dbb498f9338f2a7eb4fc48f11261eb4b39d4",
      "at": "2026-10-11T15:05:00.878Z"
    },
    {
      "id": "lem-general-hecke-residue-branching-endpoints-from-normalized-schur-cells",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 5.1 relies on F1's alleged exact coefficient test: nonzero evaluation on the uncut lowering vector and zero on every nonempty cut product. The supplied F1 interface states no such test, leaving the essential necessity argument unsupported.",
      "context_sha256": "48f4d26c1f88113b27e1c313a7c07513c54951c8d5d75d8290473f43ccefadbe",
      "item_sha256": "d7f8e806eec6b84101638da48653d5345ea1a2d0d63ca1c28c254c076631df46",
      "at": "2026-10-11T15:07:19.337Z"
    },
    {
      "id": "prop-every-p-restricted-partition-is-reached-by-cogood-node-additions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 drops the splitting p-modular-system hypotheses of both cited classification interfaces. No reduction to that setting is supplied for arbitrary k, so step 1.3 is not justified by its cited dependencies.",
      "context_sha256": "dd9253d6c0c9337a62e45a391bddc9fc75de58152d83706eada21a54399c8a83",
      "item_sha256": "7729be2a780e7ed7a6a9db780c82f3966b5a102647524f2f13a646fd62c10af6",
      "at": "2026-10-11T15:05:19.593Z"
    },
    {
      "id": "rem-the-crystal-identification-does-not-elementarily-identify-cellular-simple-labels",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The Statement calls the displayed level-one equality non-elementary and attributes its first proof to Ariki. The closing caveat instead assigns that claim to the broader cyclotomic theorem, while proving the displayed equality by branching and rank induction.",
      "context_sha256": "0543bdc863c54a3ee56bd6bccb180f52f2d0a0c7efd7e986587a3546a572330f",
      "item_sha256": "42756f5939104ff8969967ada3a32da306c785b313040e55bb563f0761dc28d3",
      "at": "2026-10-11T15:05:36.136Z"
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
