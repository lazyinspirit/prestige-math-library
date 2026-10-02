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
label: step7-v2-initial-r1-u8
covers: 8
output: research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u8.json

# Step 7 adjudicate: initial, round 1, unit 8

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u8.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"8",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-commensurable-subspaces-and-ideals-of-endomorphisms, 2:lem-adelic-quotient-computes-h1-structure-sheaf, 2:lem-uniformizer-differential-is-a-basis, 3:def-principal-parts-sheaf-line-bundle-curve, 11:lem-degree-pullback-divisor-finite-morphism-curves, 12:lem-local-residue-annihilator-regular-sections, 13:lem-residue-pairing-descends-cohomology, 15:rem-duality-trace-normalization, 20:cor-h0-canonical-differentials-genus, 21:cor-h1-line-bundle-dual-sections, 25:cor-rr-exact-high-degree-formula, 25:ex-riemann-hurwitz-double-cover, 26:ex-genus-one-rr-degree-positive, 26:ex-plane-quartic-canonical-hyperplane, 28:cor-degree-three-line-bundle-embeds-genus-one-plane-cubic.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-commensurable-subspaces-and-ideals-of-endomorphisms",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title incorrectly calls these ideals of End_k(V). Let V=U⊕U with U infinite-dimensional and A=U⊕0. Projection P onto A belongs to E_1, but swapping summands S gives SP∉E_1. The ideals are relative to E, not all of End_k(V).",
      "context_sha256": "6e542aa480962fc44df02f446bcbe697984a26932d1ac8c095fe4949a3317979",
      "item_sha256": "6c86b2155a13b4b735a58fa32b9bc812964c3f062ff4cea8c089227344b5f3c4",
      "at": "2026-10-01T20:51:57.625Z"
    },
    {
      "id": "lem-adelic-quotient-computes-h1-structure-sheaf",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 asserts fA_p=t_p^{ord_p(f)}A_p for every f∈K, but the supplied order interface only defines ord_p on K×. For f=0 this formula and the set S in step 1.2 are undefined; the later zero-ideal parenthetical does not repair that construction.",
      "context_sha256": "60168843a09d1cc212b0cff07025f93606a4b13810c6ff40682391ee4fcca683",
      "item_sha256": "8d2c99204f4089c245cadef639dece55bfdb716e1ca022016f849079210feeaa",
      "at": "2026-10-01T20:52:28.401Z"
    },
    {
      "id": "lem-uniformizer-differential-is-a-basis",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 5.1 inaccurately attributes all choice dependence to the smooth-locally-free theorem and its suppliers. The supplied DVR and completion interfaces also explicitly require AC, and both are invoked in this proof.",
      "context_sha256": "e5d935bd71b5ff016e7c2c24bb8550369f777f4b2c744af66d6c780491466a63",
      "item_sha256": "5c5b8586f465b72f8bdac68716a10facc35ad337590eaadd15c9532f2be4de26",
      "at": "2026-10-01T20:51:58.344Z"
    },
    {
      "id": "def-principal-parts-sheaf-line-bundle-curve",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The item defines rational sections as all elements of the generic stalk and explicitly calls zero a rational section. The cited def-rational-section-line-bundle restricts rational sections to nonzero elements, so this restatement contradicts its supplied interface.",
      "context_sha256": "38a6fbdf89c8ce416960f165bb433c25dce35e0ebe1bdd989d83358a0370d231",
      "item_sha256": "f61f5293c0a6c1b37057f39ce150b62a5ccae864fd488a7d53808e4daf9ff21c",
      "at": "2026-10-01T20:51:44.886Z"
    },
    {
      "id": "lem-degree-pullback-divisor-finite-morphism-curves",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F6 asserts that divisor degree defines the degree of an invertible sheaf, but its cited interfaces only identify Picard and divisor classes. No cited result or proof shows principal divisors have degree zero, so step 7.1 lacks an essential prerequisite.",
      "context_sha256": "6ec68d04337c5f3f76abb53467fc9af551e88e2fad0b4cab2ae4776f0a5f302a",
      "item_sha256": "abcaecdddea860d0f41eef77bf98cdcda43b2b9fed0bd71fd16742e4d9fac297",
      "at": "2026-10-01T20:52:16.571Z"
    },
    {
      "id": "lem-local-residue-annihilator-regular-sections",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.2 falsely asserts that the regular section's power series is finite. On C=P¹ over Q at t=0, the regular differential dt/(1-t) has expansion (1+t+t²+⋯)dt, contradicting that assertion.",
      "context_sha256": "1cccdcfc94d684305ca02851cf120ea6dc5073d04b27a53ca8c0b8ff66ec785c",
      "item_sha256": "e2b074877a8fa5aba52a5256089836f5d37390ea09d57303572de2dd5023a31d",
      "at": "2026-10-01T20:52:12.196Z"
    },
    {
      "id": "lem-residue-pairing-descends-cohomology",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 incorrectly extends the local pairing to rational s; the dependency requires s regular. On P¹ with L=O at t=0, take s=dt/t². The zero principal part has lifts 0 and t, whose products with s have residues 0 and 1.",
      "context_sha256": "0f7a985c3b48b733b97e10a73d57d392de309e7864a94d1c5a536369c019a1ca",
      "item_sha256": "e9f181fac728c64bbf44bbba25d1e531ac860c856e314c17d18895b29e2968b9",
      "at": "2026-10-01T20:51:47.907Z"
    },
    {
      "id": "rem-duality-trace-normalization",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The final normalization res_p(t^{-1}dt)=1 conflicts with the coefficient-trace residue used here. At p=(x²−2) on P¹_Q, with uniformizer t=x²−2, this residue is Tr_{Q(√2)/Q}(1)=2. Only the residue-field-valued local residue equals 1.",
      "context_sha256": "e4a3f20a5266457a9e8ed2348e382fb67f324d215c317736034a473c84b158c1",
      "item_sha256": "909c1fe821c1626fef416dfe9bfd198bee49e9fe5425f1dd6de8815c168a4fa0",
      "at": "2026-10-01T20:52:32.856Z"
    },
    {
      "id": "cor-h0-canonical-differentials-genus",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 asserts i(\\mathcal O_C)=g, but F6 defines i only for divisors, not sheaves. This expression is ill-typed; the cited interface licenses i(0)=g instead.",
      "context_sha256": "3f8c27878c75f385f189abbfcca5614fac9056ad94677f4c76edcd30eccb44cb",
      "item_sha256": "6a7dcd801662512f38a5ac6e8873745ae0d4f825750da36bc29d3b4986dcf452",
      "at": "2026-10-01T20:52:01.124Z"
    },
    {
      "id": "cor-h1-line-bundle-dual-sections",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title equates h^1, an integer, with a space of sections. The proof establishes equality with that space's dimension, not with the space itself; the title is ill-typed and must say \"dimension of dual sections.\"",
      "context_sha256": "69b3c9dad4a94b41a0eb943a237182541218276ae209b57a308bef791854cd6b",
      "item_sha256": "57593771af756eaa2dd5c7c442400fc792bdc8820155e3773ffc43cb1a457b7d",
      "at": "2026-10-01T20:52:10.143Z"
    },
    {
      "id": "cor-rr-exact-high-degree-formula",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 attributes deg(O_C(D))=deg_k(D) to def-degree-divisor-proper-curve, whose supplied interface only defines divisor degree. This essential bridge for applying F1 is neither supplied by that dependency nor proved.",
      "context_sha256": "bfb76feb9cc0a3f7c7d2adbf6e990964d424e5f63b40e2953571647fb3cc725a",
      "item_sha256": "904fa2100661911e8da2d6542f2426da8c18d9af528e2d5d0708753ecc65c5f4",
      "at": "2026-10-01T20:52:02.939Z"
    },
    {
      "id": "ex-riemann-hurwitz-double-cover",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F12] incorrectly asserts uniqueness up to unique k-isomorphism without fixing a function-field identification. The dependency guarantees only compatible uniqueness. The model has distinct k-automorphisms: identity and (x,y)↦(x,−y).",
      "context_sha256": "f48c684cf1b103b288b806134a9c49fe5cb41ad4877d97cd57b775145b4a18f9",
      "item_sha256": "283734f416e49b749f6f6d0c3ebc1143c3f5c61f5ec9fdecf88c4e060907df0c",
      "at": "2026-10-01T20:52:54.259Z"
    },
    {
      "id": "ex-genus-one-rr-degree-positive",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title asserts exactly n sections, but the proof establishes h^0=n. For n=1, H^0(C,L)≅k has infinitely many sections when k is infinite. The title should assert that the space of sections has dimension n.",
      "context_sha256": "6a7208313790109187eb7bc5d08c5650d073dbf77944a642bb6c3b16d9423877",
      "item_sha256": "f11c6aeb518a4e297969f8dbb2b6bfb7bda6c5c573649dc6c3302996cb28f77b",
      "at": "2026-10-01T20:52:37.519Z"
    },
    {
      "id": "ex-plane-quartic-canonical-hyperplane",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 incorrectly asserts a canonical morphism for every genus. For C=P¹, H⁰(C,ω_C)=0, so the canonical system is empty and defines no morphism. The cited linear-system theorem requires base-point-freeness and a nonzero section space.",
      "context_sha256": "baa451d67a4d0ac64177672f5a010dfb5fe31220377cf160ab68f3a2e6fd8703",
      "item_sha256": "828b7d6d1d1092730624f33f598d2a0af69d54813901f2bbc854edc8e98622d2",
      "at": "2026-10-01T20:52:42.766Z"
    },
    {
      "id": "cor-degree-three-line-bundle-embeds-genus-one-plane-cubic",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 inaccurately restates the linear-system supplier: |L|=P(H^0(C,L)) has dimension h^0(C,L)-1=2, not h^0(C,L)=3. The supplier assigns dimension r+1 to the vector space V, not its projectivization.",
      "context_sha256": "6bf2f352421eab868893caac71170f141506859ec3de68a1fe6fc8d071f37612",
      "item_sha256": "5c6e27c27d3558fcb62fb6a01b022a7298789328eef6a498800a6ecfd2f59f66",
      "at": "2026-10-01T20:52:32.717Z"
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
