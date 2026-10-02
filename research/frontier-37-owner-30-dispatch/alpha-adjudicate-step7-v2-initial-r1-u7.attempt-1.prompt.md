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
label: step7-v2-initial-r1-u7
covers: 7
output: research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u7.json

# Step 7 adjudicate: initial, round 1, unit 7

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u7.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"7",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-vector-bundle-p1-extension-splits, 13:cor-negative-degree-no-sections-rr, 15:cor-picard-projective-line-integers, 17:lem-vector-bundle-p1-maximal-line-quotient-locally-free, 21:cor-existence-rational-function-bounded-pole, 21:cex-negative-degree-rr-right-side-negative, 22:cex-riemann-inequality-not-equality-special-divisor, 22:ex-riemann-roch-projective-line-divisor, 24:cor-riemann-theorem-large-degree.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-vector-bundle-p1-extension-splits",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F6 falsely claims AC enters only through F2 and F3. The supplied interfaces for the Proj identification, twisting-sheaf construction, and invertible-twist theorem used in F1 also explicitly assume inherited AC.",
      "context_sha256": "3e7f15caf657493af01b051dd140fb7701491e524c80c935e3c3aab83520abae",
      "item_sha256": "c99e9505d1847e85b2a522e8103bf2eec828c03daa35005511fb54396a5cf96f",
      "at": "2026-10-01T20:50:42.442Z"
    },
    {
      "id": "cor-negative-degree-no-sections-rr",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F6] inaccurately restates the cited theorem for a proper curve without its required normality hypothesis. The supplied interface asserts degree zero only for normal proper curves.",
      "context_sha256": "3d7b3236f6aaacd505626608c23d4d2c153e7f6d44c5ef007e7b72149a2fb72f",
      "item_sha256": "a6b29504fcc4cb31b5f538dea9482e7e588be677a4c0ccdbfa6099a163498ab4",
      "at": "2026-10-01T20:49:47.843Z"
    },
    {
      "id": "cor-picard-projective-line-integers",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F6 and step 5.1 inaccurately attribute inherited AC to the Cartier-to-Picard dictionary, whose interface explicitly says no choice principle is used. F6's claim that AC enters only through F5 also omits the twisting-sheaf supplier's explicit AC assumption.",
      "context_sha256": "6af5dcabf1e98d4f4ca192ff2e6199d12128d2d3fe167430e2ab26cbbc52f29d",
      "item_sha256": "29ea0879af8e57dbc91f006d4be7416255837eaf1c070e09021365a4d1705a49",
      "at": "2026-10-01T20:49:56.334Z"
    },
    {
      "id": "lem-vector-bundle-p1-maximal-line-quotient-locally-free",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F7 omits the supplier’s quasi-coherence hypothesis: the affine comparison is not an isomorphism for arbitrary module sheaves. Its unconditional restatement is false, although the sheaves used in step 4.1 are coherent.",
      "context_sha256": "fcd2225e7511dadcf2187c30e802cbdd476dfbc908fa0e61c1ee6b636d102ec8",
      "item_sha256": "d8a9057ba164682ff77b164e386f718a60135f24e4b61d10bea2d793df2beb1a",
      "at": "2026-10-01T20:50:28.830Z"
    },
    {
      "id": "cor-existence-rational-function-bounded-pole",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F5] asserts div(c)=0 for every c∈k, including c=0. The supplied order and divisor interfaces define div only for nonzero rational functions, so div(0) is undefined. Zero belongs to L(D) by definition, not by this divisor assertion.",
      "context_sha256": "7b0a2db76851bcedae3a8a026c710d1a1295aef1efa8bbaf0ec87ff2e865e94f",
      "item_sha256": "7e483c5e5630dd5ade82bd74181acd283de1b4227e71b4c04a2dde89642035c6",
      "at": "2026-10-01T20:49:56.679Z"
    },
    {
      "id": "cex-negative-degree-rr-right-side-negative",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.2 falsely says all three readings hold at m=1. Here l(-[∞])=0 and the Riemann inequality is 0≥0, so it still guarantees no nonzero section. The third reading already fails at m=1; the claimed sharpness at m=2 is incorrect.",
      "context_sha256": "7fa1ff83f7b439d364d98c7a1744e5e61d4f080c7ba8837713a549012afc6295",
      "item_sha256": "36e2249fe877cbf9eb0a992bdc74f5e73bcfab67cd915109aa4992f6b1c9ad4a",
      "at": "2026-10-01T20:50:36.646Z"
    },
    {
      "id": "cex-riemann-inequality-not-equality-special-divisor",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F2] inaccurately restates the functions theorem for every proper integral curve. For example, P¹_C viewed over R has H⁰(O)=C, not R. The supplied interface requires geometric connectedness and reducedness for H⁰(O)=k.",
      "context_sha256": "2eabacaf6d7986dce357c1c914e49a265c3971a626da5dc8748d2d55d0582604",
      "item_sha256": "70cfe5c8f7f689a9e0010676faff1420248c9a1eb17851be24c4286703b8bfca",
      "at": "2026-10-01T20:50:28.063Z"
    },
    {
      "id": "ex-riemann-roch-projective-line-divisor",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 asserts i(D)=-d-1>0 in the negative-degree range. For d=-1, i(D)=0 and D is nonspecial, contradicting that assertion and agreeing with steps 2.1 and 3.2.",
      "context_sha256": "eaf5839d55692bf145012389ad1721606a73399f039496111e90305d66cee2a5",
      "item_sha256": "4cacad597e14da3810111af318a592b6cf0e74827a268f2c0dc499df3a277de7",
      "at": "2026-10-01T20:50:16.901Z"
    },
    {
      "id": "cor-riemann-theorem-large-degree",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F4] and step 3.1 incorrectly claim AC is inherited only through the vanishing theorem. The supplied Riemann–Roch, genus, and l(D) interfaces explicitly inherit or assume AC through additional suppliers.",
      "context_sha256": "725db995db8653edc9cc9235bfb43a6544f2ba7bca881314b547419234db7327",
      "item_sha256": "6b5d8c136f8d69c4aa4307bab2cdb7e9f40888647b2fd171ee61fa76884fc4da",
      "at": "2026-10-01T20:49:57.126Z"
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
