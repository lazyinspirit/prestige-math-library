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
- Adjudicate and repair only assigned draft items in the frozen frontier at `research/frontier-39-analysis-30-step7-v2/frontier.json`. Published repairs have no Step 7 adjudication, rejudge, or item-gate obligation; record them for separate maintenance. Outside-frontier consumers also belong to maintenance, not Step 7 repair or gates.
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

run: frontier-39-analysis-30
role: alpha-adjudicate
label: step7-v2-initial-r1-u12
covers: 12
output: research/frontier-39-analysis-30-step7-v2/step7-v2-initial-r1-u12.json

# Step 7 adjudicate: initial, round 1, unit 12

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/step7-v2-initial-r1-u12.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-39-analysis-30",phase:"initial",round:1,unit:"12",input_sha256:"9338524b8f90ef76ff4d0d3c41b2d942e870edbc6da3d7062fa8aeac770c3e1f",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-39-analysis-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative, 3:def-local-weak-solution-for-a-divergence-form-operator, 4:lem-normal-second-derivative-recovered-from-the-elliptic-equation, 4:lem-weak-divergence-form-equations-are-invariant-under-c-two-boundary-charts, 4:lem-weak-equation-for-a-first-derivative-includes-coefficient-commutators, 7:cex-bounded-discontinuous-elliptic-coefficients-do-not-force-h-two-regularity, 9:cor-smooth-data-give-smooth-interior-solutions, 9:cex-boundary-h-two-regularity-needs-domain-regularity, 9:ex-bootstrapping-a-smooth-poisson-problem.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F2] and step 1.1 integrate δ_h^iu over Ω, although it is defined only on Ω_{i,h}. The dependency supplies integrals over the respective shrunken domains; no extension to Ω is defined.",
      "context_sha256": "947ffd67e9f2a68a4cb5b0c4b18ab21eb842f7a2ea9225c0287113bb29f5bd66",
      "item_sha256": "0e39799281131727e068b6cb51f2e013bf4e44d4ec0fde29038d95092e516390",
      "at": "2026-10-06T01:51:33.961Z"
    },
    {
      "id": "def-local-weak-solution-for-a-divergence-form-operator",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The claimed 'strictly weaker' relation is false. On (0,1), u(x)=min(x,1−x) is a weak Dirichlet solution for L=−d²/dx² with datum 2δ_{1/2}∈H^{-1}, but this datum has no L²_loc representative, so u is excluded by the local definition.",
      "context_sha256": "00943714effe997da44607d6ebc0797243ad11f232aec7dae3f2ecefe9ac2047",
      "item_sha256": "50afe427276f7ee69b17de14d2745280c04cd670a9b1408bc15b66779b036dba",
      "at": "2026-10-06T01:51:50.995Z"
    },
    {
      "id": "lem-normal-second-derivative-recovered-from-the-elliptic-equation",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The cited definition of R^n indexes coordinates by 0,...,n−1, so x_n is undefined. No coordinate relabeling is supplied; consequently H={x:x_n>0}, its boundary, and the boundary half-balls are not well-defined.",
      "context_sha256": "ebaedc20c66fa377096f2b613a8f8f829de88277c732285ceffa2f1e4de08983",
      "item_sha256": "486dbc899a58e692d0e448df1b17f7cd02a8352d964209717114e8844fa85f9c",
      "at": "2026-10-06T01:53:12.036Z"
    },
    {
      "id": "lem-weak-divergence-form-equations-are-invariant-under-c-two-boundary-charts",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The cited local-weak-solution definition requires global H¹ and bounded coefficients. Take Ω=(0,∞), Φ(x)=sinh x, L=−d²/dx², u=(1+x)⁻¹ and f=−2(1+x)⁻³. Then û=(1+arsinh y)⁻¹∉L², and ã=√(1+y²) is unbounded.",
      "context_sha256": "1132a9c213f5ca22fb11e7847ac9788f13fc6bd03a469846a2b1a92e134dfcff",
      "item_sha256": "9ce35e3d18146004814531dc9ced04fa10bb5f6ba943b30cbe807a73e7ab8425",
      "at": "2026-10-06T01:53:12.853Z"
    },
    {
      "id": "lem-weak-equation-for-a-first-derivative-includes-coefficient-commutators",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The cited definition requires local weak solutions to belong to H^1(Ω), but D_ku need not. On Ω=(0,1), take a=1, b=c=0, u=x^{3/4}, f=3x^{-5/4}/16. All hypotheses hold, yet u'∉H^1(Ω), contradicting the claimed solution status.",
      "context_sha256": "47eb453ff5e3c480480cb267de24d87ac4861bb8b9cdc26d93aed8909340ea64",
      "item_sha256": "b5997d39fb7ecc1dc23ce5f67dd6c36b4f55a4a10100a9bed5d808871a9cfa79",
      "at": "2026-10-06T01:52:26.052Z"
    },
    {
      "id": "cex-bounded-discontinuous-elliptic-coefficients-do-not-force-h-two-regularity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 inaccurately restates the cited interior theorem’s hypothesis as W^{1,∞}_{loc}. The supplied interface requires W^{1,∞}(Ω) with a global derivative bound M₁. A localized version is neither stated nor established here.",
      "context_sha256": "a0ce16a93023bbcbe36f0fb28706546ee9576a4a529065e7f9e21d638b51a149",
      "item_sha256": "f688226b40736a309f9333ee5dcd0e5dde73bf3bd129d3cbd19a22052e85550f",
      "at": "2026-10-06T01:54:34.512Z"
    },
    {
      "id": "cor-smooth-data-give-smooth-interior-solutions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F3] omits the dependency’s essential restriction n≥2, restating its embedding for the statement’s full range n≥1. The separate one-dimensional argument does not correct this inaccurate dependency restatement.",
      "context_sha256": "437cfb22c89cadb8a1e6f68bddbab34da71be8dc9ae3542c8b7237bf96d0223f",
      "item_sha256": "8ee90f5d6f0dd4f5dd07c9db5716fd2b4e823f920f1fdfbc8f16299fa1a52c50",
      "at": "2026-10-06T01:52:44.580Z"
    },
    {
      "id": "cex-boundary-h-two-regularity-needs-domain-regularity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 omits the global L² hypothesis on g required for its density extension. For g∈L²_loc and w∈H¹₀, the integral ∫gφ need not exist for every H¹₀ test. The supplied local-solution interface explicitly requires g∈L² for that extension.",
      "context_sha256": "286ceeddb9abb201a24ddfc37fa4ca1d165ad49e44b43066308ecd9efcf58544",
      "item_sha256": "ca7c5d91b53326e26289006a02c85bf30c9e89010fd4d70dbbc1a31ed74aca11",
      "at": "2026-10-06T01:54:33.382Z"
    },
    {
      "id": "ex-bootstrapping-a-smooth-poisson-problem",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F6] omits the cited theorem’s hypothesis a^{ij}∈W^{1,∞}(Ω). For bounded measurable coefficients, D_i a^{ij} need not be an a.e. function, so the asserted product formula is an inaccurate dependency restatement, although valid for the Laplacian.",
      "context_sha256": "c1f4f53eaf0f88026ca7ac32bcb8ca6fd782a04ddda44b224b0e91c15162ecf3",
      "item_sha256": "e36e889d77c663916db0a1504e587161b86a73d2f69dd3a48c795ca6b598ca6f",
      "at": "2026-10-06T01:54:37.445Z"
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
