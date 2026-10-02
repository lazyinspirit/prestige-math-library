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
label: step7-v2-initial-r1-u14
covers: 14
output: research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u14.json

# Step 7 adjudicate: initial, round 1, unit 14

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u14.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"14",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-commuting-symmetric-and-linear-actions-on-tensor-power, 0:def-young-graph, 1:def-corner-order-and-specht-deletion-map, 1:lem-tensor-place-operators-span-the-symmetric-centralizer, 2:lem-semistandard-homomorphisms-span-in-characteristic-zero, 3:lem-schur-weyl-polytabloid-highest-weight, 3:lem-specht-branching-successive-quotients, 3:thm-youngs-rule-for-permutation-modules, 4:thm-specht-restriction-branching-filtration, 4:ex-youngs-rule-for-m-two-one, 5:cex-branching-filtration-need-not-split-in-modular-characteristic, 5:ex-schur-weyl-for-c2-tensor-three.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-commuting-symmetric-and-linear-actions-on-tensor-power",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The diagonal-action composition identity is false: with n=1, V=C, g'=g=id and h=2id, its left side sends v to 2v while its right side sends v to v. The displayed step therefore does not establish the claimed homomorphism.",
      "context_sha256": "6e12ae960e35b4959fc6dbdb44d477cfc4d553f341638572872fbe0f3caba7eb",
      "item_sha256": "b52de9fb31f0238388ff0089c2388c419fea3310d5adbea0fa705fb8abda2120",
      "at": "2026-10-01T20:52:47.445Z"
    },
    {
      "id": "def-young-graph",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The claim of a countably infinite layer for each n is false: every fixed-size layer is finite, and size 0 has one vertex. Also, containment of Young diagrams of neighbouring sizes is exactly adjacency, contrary to the final remark.",
      "context_sha256": "e15b83f3c60df5d8e69a4bf1ac8f097b8fc1f3cbc0ab2fb32c4023560e509872",
      "item_sha256": "849809debd59fa33a2627f95470e9e21ac3895e52a01032b8ec825aa9a27cf96",
      "at": "2026-10-01T20:52:29.987Z"
    },
    {
      "id": "def-corner-order-and-specht-deletion-map",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The equivariance paragraph incorrectly claims both modules are S_n-modules by the cited dependency. Since λ^(i) partitions n−1, M_R^{λ^(i)} has an S_{n−1}-action, not the asserted S_n-action; its action cannot be defined by the stated restriction.",
      "context_sha256": "02b3e7ec296fb1e66e25f885d2f3751c2a757940f5a2401484199173dba7d0a5",
      "item_sha256": "6f406f62790e337195fa74e96a87f58d7e109d32d9c6267fe52454843242fcdb",
      "at": "2026-10-01T20:52:27.718Z"
    },
    {
      "id": "lem-tensor-place-operators-span-the-symmetric-centralizer",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 inaccurately restates the characteristic-polynomial dependency: det(tI+T) is χ_{−T}(t), not χ_T(t). For V=ℂ and T=id, it equals t+1, whereas χ_T(t)=t−1.",
      "context_sha256": "593164e7e07c31b0cc2e2da2b6440429b62300530a554a66c5a7a1ec14ec8c48",
      "item_sha256": "43039e395ccacda7f4de69957ee0eb1ecec26067d7e01f5ccf5c63c8e46246ac",
      "at": "2026-10-01T20:53:18.876Z"
    },
    {
      "id": "lem-semistandard-homomorphisms-span-in-characteristic-zero",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Claim 1.5 fails as typed: for n=1, λ=μ=(1), and f=id, the unique semistandard S gives v−c_Sθ_S(e)=0, but m is defined only for nonzero vectors. Thus the claimed strict decrease is undefined; zero residuals need an explicit exception.",
      "context_sha256": "22f29dd44801143abbe7ba446d9cf39de5a3c82b2631d177490e64b28bafc105",
      "item_sha256": "aa34374f44075c5e0a4c55c520e0ad2cb82e92caac43a2a4481253424621ba02",
      "at": "2026-10-01T20:53:33.867Z"
    },
    {
      "id": "lem-schur-weyl-polytabloid-highest-weight",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.4 falsely asserts that a commutator of matrix units is a matrix unit or zero: [E12,E21]=E11−E22. Thus its shorter-word term falls outside the stated induction hypothesis; the proof must expand this term before applying induction.",
      "context_sha256": "4b77daff065aadb27159c7283fa553b062447e8e4de6c5c1c75131e51449118d",
      "item_sha256": "a55d05412866d04693c3bbf85e0061d4f8be11f5592fd9c2bd8853aecfccd6a8",
      "at": "2026-10-01T20:53:24.068Z"
    },
    {
      "id": "lem-specht-branching-successive-quotients",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Claim 3 is ill-typed: S^{lambda^(i)}_F is naturally an S_{n-1}-module. No S_n-action on this Specht module is supplied from which to restrict. The proof establishes equivariance for its natural S_{n-1}-action only.",
      "context_sha256": "c1ff8a317821007088e6715761234cb76278b0b95e75974534b6fce0d53d404e",
      "item_sha256": "288713f44bd8ad4593b3a4457a962b67dcf295edaf653b7855ae01fd2f208473",
      "at": "2026-10-01T20:53:33.884Z"
    },
    {
      "id": "thm-youngs-rule-for-permutation-modules",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The Dominance remark reverses F3: occurring shapes dominate μ, rather than being dominated by μ. For μ=(1,1), K_{(2),(1,1)}=1, so S^{(2)} occurs, although (2) is not dominated by (1,1).",
      "context_sha256": "e6ec68642d5863bc241801f6d746eaddef279526e6b4b1b3189c1cefe1f99cc3",
      "item_sha256": "39f481da3248cb51da9416d489b716204a004836bce4344138294da60e83bc97",
      "at": "2026-10-01T20:52:47.215Z"
    },
    {
      "id": "thm-specht-restriction-branching-filtration",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The first remark falsely permits arbitrary corner orders. For λ=(2,1), putting the bottom corner first gives span(v), where v={12|3}−{23|1}. But (12)v={12|3}−{13|2} lies outside span(v), so the reordered chain is not a submodule filtration.",
      "context_sha256": "f8cb81e376a2f16fe32a38205be9eba1e6894b63a7edad731861e885b3b058a0",
      "item_sha256": "ade6e28f6bd7d4a3ac215117120f545c8e60be47d37827acfcdee5c75ed133ba",
      "at": "2026-10-01T20:52:48.285Z"
    },
    {
      "id": "ex-youngs-rule-for-m-two-one",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F6] inaccurately restates the cited irreducibility theorem by adding that the S^λ are pairwise non-isomorphic. The supplied interface asserts only irreducibility, so it does not license this added claim, invoked in step 3.1.",
      "context_sha256": "5787c85545d199a893b76f990c13831580422d0fb4f73b1ecacd968049934bef",
      "item_sha256": "09840e5961ba58c4a47023ebba63c884cf9961e4dc33bb265bc43debe4aadc98",
      "at": "2026-10-01T20:53:01.349Z"
    },
    {
      "id": "cex-branching-filtration-need-not-split-in-modular-characteristic",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 incorrectly drops the dependency's standard-tableau restriction. The tableau with rows (3,1) and (2) has 3 in row 1 but polytabloid v₂+v₃, outside span{v₁+v₂}; thus the claimed description of V₁ is false.",
      "context_sha256": "10193c0d6b0cf8092255493312aa574189b4397da1be52cecf46357e9fcfb734",
      "item_sha256": "0a9e8bd8ddc7dc27c82da20fd38ae77545350bedba7359db8503ba2a9cee12ea",
      "at": "2026-10-01T20:52:52.857Z"
    },
    {
      "id": "ex-schur-weyl-for-c2-tensor-three",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 defines λ_i=0 only for i>2, leaving λ_2 undefined for λ=(3), although it asserts the E_{22} weight identity. The dependency instead pads with zeros for i>ℓ(λ). Thus F4 and its use for (3) in step 2.2 are ill-typed.",
      "context_sha256": "b70716cecb236c447643cf482342575ed04c7f307e10e8b284558c684b26d4dc",
      "item_sha256": "fd5a5ca49296169bf742fe99f5ed1302c24508752d6f76034e8ff44ed08d9ffc",
      "at": "2026-10-01T20:53:15.791Z"
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
