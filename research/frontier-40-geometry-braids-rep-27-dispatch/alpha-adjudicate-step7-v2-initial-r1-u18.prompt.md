# Step 7 batch adjudicator

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

- **Proof repair quality:** Repairs must be mathematically sound and cite dependencies accurately. State important caveats when appropriate, and write concisely without compromising correctness or completeness. Do not repeat the same argument or use unnecessary filler. Add intermediate lemmas when needed to meet prerequisites.
- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and the generated task fully. You are the Sol 6.1 high adjudicator for one batch in Step 7.1 or 7.5. The round-bound task defines the run, phase, round, rejected carriers, ownership, evidence paths, and result schema. Do not reconstruct these from historical tasks or receipts.
- Work supplier before consumer, in the task's increasing in-run dependency order. Handle every rejected tuple and group all tuples for one item together.
- Adjudicate and repair only assigned draft items in the frozen frontier at `research/frontier-40-geometry-braids-rep-27-step7-v2/frontier.json`. Published repairs have no Step 7 adjudication, rejudge, or item-gate obligation; record them for separate maintenance. Outside-frontier consumers also belong to maintenance, not Step 7 repair or gates.
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

run: frontier-40-geometry-braids-rep-27
role: alpha-adjudicate
label: step7-v2-initial-r1-u18
covers: 18
output: research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u18.json

# Step 7 adjudicate: initial, round 1, unit 18

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u18.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-40-geometry-braids-rep-27",phase:"initial",round:1,unit:"18",input_sha256:"2f03bb52479aaa390bb3dcd48c71478e0016d3408c93c2f9769a7db5ae31ba68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-40-geometry-braids-rep-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-complete-connected-scheme-to-affine-scheme-morphism-is-constant, 3:lem-fixed-locus-and-normal-orbit-closure, 4:lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces, 7:thm-unipotent-groups-have-central-series-with-subgroups-of-ga-quotients, 11:thm-maximal-diagonalizable-subgroups-of-trigonalizable-groups-are-conjugate, 11:thm-quotient-by-a-borel-subgroup-is-complete.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-complete-connected-scheme-to-affine-scheme-morphism-is-constant",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F8 inaccurately extends the cited completeness definition to arbitrary schemes. The supplied def-complete-variety defines it only for integral separated finite-type k-varieties, so it does not license step 1.2 for potentially reducible Z.",
      "context_sha256": "66f801d9db614da85ec901c5287a4186de5c501b0910b084987771a209821905",
      "item_sha256": "7e8421b44b1ff72a6d680bc60d5c53009ef06910711bdb848827ef24f2aea988",
      "at": "2026-10-05T19:57:28.457Z"
    },
    {
      "id": "lem-fixed-locus-and-normal-orbit-closure",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F1] incorrectly extends the stabilizer interface from x∈X(k) to arbitrary x∈X. For a nonrational point, x_T is undefined for arbitrary k-schemes T, and the cited fibre product does not define a closed subgroup scheme of G over k.",
      "context_sha256": "0f4923825cbc894b45881f4173913c65680e9dce86cf7f137eebf62a41d7e956",
      "item_sha256": "2cf7691edf39599260fa63607e2390e2728f583e88c231b41e5ec6de9950617a",
      "at": "2026-10-05T19:57:46.832Z"
    },
    {
      "id": "lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The statement allows arbitrary M, including M=⊕_{n∈N}Z, for which D_k(M) is not of finite type. Both cited rational-representation/comodule interfaces require finite type; F1 and F3 apply their correspondence outside its stated hypotheses.",
      "context_sha256": "a90792e1547433206f7795a57b924645d04498640d32ab7b870f9ddbaa93297a",
      "item_sha256": "f6b91de4c9cc9537f4f24c80a10065a8cfb638558cdbf486892b13fbba06c371",
      "at": "2026-10-05T19:57:14.858Z"
    },
    {
      "id": "thm-unipotent-groups-have-central-series-with-subgroups-of-ga-quotients",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 claims its dependency defines subgroup-scheme commutators, but the supplied interface defines only abstract-group commutators. Step 3.1 then applies abstract-group nilpotence to a group scheme without supplying the scheme-theoretic definition or argument.",
      "context_sha256": "8c221f70828dd34b00eae7921647965d6c4bdd0bbd0a9c2755fd4609ab0080c3",
      "item_sha256": "08b0fea8468a053be097646bac52d831799455145e17bf209755753e582317f4",
      "at": "2026-10-05T19:57:22.336Z"
    },
    {
      "id": "thm-maximal-diagonalizable-subgroups-of-trigonalizable-groups-are-conjugate",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F2] falsely asserts that quotienting by every closed normal N⊆U shortens the additive normal series. For G=U=G_a and N=1, G/N=G_a still requires one additive quotient. The cited interfaces do not license this restatement.",
      "context_sha256": "af03e82be99a6baa5959b3f2c855c71e1a78e78afc16827df55ff8e2e135f195",
      "item_sha256": "70bcb7460439d1a0ba243cfa065f04f88f87c55530efc8b0b4f16a7529ddafce",
      "at": "2026-10-05T19:58:55.224Z"
    },
    {
      "id": "thm-quotient-by-a-borel-subgroup-is-complete",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.2 identifies G_{F'} with a closed subgroup of the triangular stabilizer in GL(V), but F1 does not require a faithful representation. G_{F'} is its inverse image, so F2 does not license the asserted solvability and dimension bound.",
      "context_sha256": "fd4c89500dcd3715b7b563212812a697f9b02ede60bdbfbc94a9d029c3af716b",
      "item_sha256": "6b2c038bf902a1b5ea64f5bcb515fcfd4d3d9492d11aeb6d9bce7d879e3dac29",
      "at": "2026-10-05T19:57:37.375Z"
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
