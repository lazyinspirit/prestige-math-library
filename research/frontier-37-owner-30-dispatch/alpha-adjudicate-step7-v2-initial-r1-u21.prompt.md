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
label: step7-v2-initial-r1-u21
covers: 21
output: research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u21.json

# Step 7 adjudicate: initial, round 1, unit 21

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u21.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"21",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-standard-pure-braid-generators, 0:lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles, 1:lem-the-planar-forgetful-map-has-a-continuous-section, 8:thm-point-pushing-is-the-kernel-of-forgetting-a-puncture, 10:thm-standard-pure-braids-generate-the-pure-braid-group, 10:ex-the-pure-two-strand-braid-group-is-infinite-cyclic, 11:ex-the-pure-three-strand-group-as-a-split-free-by-cyclic-extension.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-standard-pure-braid-generators",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The purity paragraph incorrectly describes the outer permutation as cycling labels i,…,j. It fixes i and cycles i+1,…,j. For n=3, i=1, j=3, the outer word is σ₂ and its permutation is (2 3), fixing label 1.",
      "context_sha256": "4448064672d3f8a077bd2a2d65668569388645ca61502dcce2ba140b3deb4e8c",
      "item_sha256": "fa1c59049213d41a804b198bf357b86de5531cd0d02ef970f3416b2323251fdc",
      "at": "2026-10-01T20:54:55.999Z"
    },
    {
      "id": "lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "In 1.6, P is a planar closed disk and q is inclusion on its dense interior. Continuity therefore forces q to be inclusion throughout P, preventing identification of distinct banks. Thus the claimed quotient and ensuing spine retraction are not established.",
      "context_sha256": "ac351f7462ce8d670409e5ef5d0c057e259e62037b2a1308f1b00bd0657bc3f1",
      "item_sha256": "ad2b5d5641a36b0d0556eaa485204cf529bb92cbb113754a790ce214dbdf01ae",
      "at": "2026-10-01T20:55:03.727Z"
    },
    {
      "id": "lem-the-planar-forgetful-map-has-a-continuous-section",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1's projected-path identity is ill-typed: the middle factor s'∘γ lies in F_n, whereas both outer factors lie in F_{n-1}. The middle factor must be p̃∘s'∘γ=γ; the displayed concatenation is undefined.",
      "context_sha256": "14a927367b32d8679f518677ac9e13b2b8205f68b8716b5a1320c09665416ee3",
      "item_sha256": "af21186567c4cc4b01b45b13831db16fdb76e7efbf765224e52b98fbcd746b70",
      "at": "2026-10-01T20:54:44.560Z"
    },
    {
      "id": "thm-point-pushing-is-the-kernel-of-forgetting-a-puncture",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.2 assumes nested canonical configurations, but they are not nested: Q_2=(-1/12,1/12), whereas Q_1=(0). A homeomorphism fixing Q_2 need not fix 0, so the asserted stabiliser inclusion and the stated forgetting map ψ are undefined.",
      "context_sha256": "1e0ad5f79cc99a5349c907c194dbdc67e7152f24d05b06851891a66ca59f4e46",
      "item_sha256": "bd088fa678e15eac3203eed2aec7338fcd71931444378d47b3500715fe146109",
      "at": "2026-10-01T20:54:33.382Z"
    },
    {
      "id": "thm-standard-pure-braids-generate-the-pure-braid-group",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.4 falsely asserts g₁∘ρ⁽ⁿ⁾=ρ⁽ⁿ⁻¹⁾, dropping g₁’s translation. At t=0 the left side is (0,0), while the right side is (−hₙ₋₁,0). The affine comparison must instead scale the displacement and translate only the midpoint.",
      "context_sha256": "b798556719a03c8fbb2c0a1c6ad6114fbaa033ffb43973987dcf99cecf877cee",
      "item_sha256": "6ee549d9164a79b9399d544cbe41596a8b12e51aece341f2f12c74976fe91949",
      "at": "2026-10-01T20:54:54.989Z"
    },
    {
      "id": "ex-the-pure-two-strand-braid-group-is-infinite-cyclic",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 miscomputes the composition: κ∘ν⁻¹ sends k to κ(γ₁^k)=A₁₂⁻ᵏ, not A₁₂ᵏ. The claimed map requires an additional negation automorphism. Also, a map ℤ→PB₂ cannot send A₁₂ to 1.",
      "context_sha256": "b528367c617e99b3dcdaf4cced9602d50ea7c4a704043b8b6f59e30de3f2c3f9",
      "item_sha256": "d26c65ad49d4520926c58b89d0321c18de83d6464ff59915de18dca3b88de1fe",
      "at": "2026-10-01T20:54:57.815Z"
    },
    {
      "id": "ex-the-pure-three-strand-group-as-a-split-free-by-cyclic-extension",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F7 and steps 1.3/2.2 use the canonical two-strand A_12 at Q'=(-1/8,0). Its cited definition instead bases it at (-1/12,1/12). No transport is specified, so the claimed naturality and section calculation identify elements of differently based groups.",
      "context_sha256": "74f46921a23367a5893f5e25df4ee66fbdc8c690b394d1e85a91f00b02b7b5b1",
      "item_sha256": "ee759942b19f18c9d856ccf486cc1cbefed70daee9c6765379e3d7aefbeefad7",
      "at": "2026-10-01T20:55:35.851Z"
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
