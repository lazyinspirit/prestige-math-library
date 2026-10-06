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
- Adjudicate and repair only assigned draft items in the frozen frontier at `research/frontier-41-ha-dt-29-step7-v2/frontier.json`. Published repairs have no Step 7 adjudication, rejudge, or item-gate obligation; record them for separate maintenance. Outside-frontier consumers also belong to maintenance, not Step 7 repair or gates.
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

run: frontier-41-ha-dt-29
role: alpha-adjudicate
label: step7-v2-initial-r1-u23
covers: 23
output: research/frontier-41-ha-dt-29-step7-v2/step7-v2-initial-r1-u23.json

# Step 7 adjudicate: initial, round 1, unit 23

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/step7-v2-initial-r1-u23.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-41-ha-dt-29",phase:"initial",round:1,unit:"23",input_sha256:"79b0e989c27d1e96f1d9b9eaa6792321ec4c5196c7f8d892843c34832f7ef2a9",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-41-ha-dt-29 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-winding-number-jumps-by-one-across-a-regular-planar-arc, 1:lem-c1-euclidean-maximal-flow-with-c2-upgrade, 2:lem-c1-planar-hyperbolic-gradient-has-local-stable-and-unstable-curves, 3:lem-eta-wedge-d-eta-is-closed, 3:lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups, 4:lem-characteristic-disk-singular-images-can-be-separated-into-distinct-leaves-rel-collar, 6:def-limit-cycle-of-a-leaf-of-a-codimension-one-foliation, 6:lem-characteristic-period-annulus-has-an-orbit-or-polycycle-frontier, 6:rem-classical-godbillon-vey-requires-at-least-c-two-regularity, 8:lem-limitwise-nullhomotopy-predicate-descends-to-a-normal-subgroup, 8:lem-saddle-polycycle-rounding-preserves-the-inward-transverse-family.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-winding-number-jumps-by-one-across-a-regular-planar-arc",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F6 inaccurately restates the mean value theorem by omitting a<b. For a=b=0, the constant real function satisfies its stated continuity and differentiability hypotheses, but there is no interior point c. The supplied dependency explicitly requires a<b.",
      "context_sha256": "c09441b712519031f7a326552963a76711bb4e8e4776679058a068eac29c9b36",
      "item_sha256": "aad8db4240869bcaba59cb518ba7827a3a8c04e3a9a5bc45172254b6bd333263",
      "at": "2026-10-06T07:02:47.577Z"
    },
    {
      "id": "lem-c1-euclidean-maximal-flow-with-c2-upgrade",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F7 omits the dependency's hypothesis a<b. When a=b, a constant function satisfies its stated assumptions, but (a,b) is empty, so the asserted interior point c does not exist. This dependency restatement is false.",
      "context_sha256": "dba177c38a4079677c139fbebd509093ecfd5b32f409fb76fbfb971dea87f703",
      "item_sha256": "23a3053e9dee499082568c85c11a50f874f73b183c7bd3bd70145d386a2cd59c",
      "at": "2026-10-06T07:03:22.451Z"
    },
    {
      "id": "lem-c1-planar-hyperbolic-gradient-has-local-stable-and-unstable-curves",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title omits the saddle hypothesis. For u(x,y)=(x²+y²)/2, X=−(x,y) is a C¹ hyperbolic planar gradient field, but its unstable set is only {0}; no nontrivial unstable curve exists.",
      "context_sha256": "cef6a4ba4d087f8773363c8065fcda6ab7029392e78d4b257996ab67a15b21c5",
      "item_sha256": "009ed11cb845b8ab78cace02592b68f1d51fc00abe265a73e0f0db83f5c5c9df",
      "at": "2026-10-06T07:03:14.362Z"
    },
    {
      "id": "lem-eta-wedge-d-eta-is-closed",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1 claims all steps use no choice principle, but step 2.1 invokes the divisibility lemma, whose supplied interface requires AC_omega. That interface does not license the claimed choice independence.",
      "context_sha256": "07fdb56dc34efbc3ec0d48900c4da44b6ade4e6fd01183e5b2b9886a8bd58930",
      "item_sha256": "04e6bb96888eb0ffdedb921682ef3a590fcd8c7537aaa9e2d59bffb429ffa344",
      "at": "2026-10-06T07:03:00.429Z"
    },
    {
      "id": "lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 drops its dependency's second-countable ambient-surface hypothesis. The statement allows arbitrary Hausdorff S, and step 1.1 invokes F1 without restricting to a second-countable chart neighborhood; the supplied interface does not license that application.",
      "context_sha256": "e3b0ce70e8d42d4d8a4248197c8e3d136798280b60a8eb7bd80a7eea841b8144",
      "item_sha256": "1d926f30982d1bee9898c4bd31326edfbadf97ee872d5d751d65153bf007512f",
      "at": "2026-10-06T07:03:37.561Z"
    },
    {
      "id": "lem-characteristic-disk-singular-images-can-be-separated-into-distinct-leaves-rel-collar",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The collar need not be closed. Take F={z=constant}, h(x,y)=(x,y,(x²−a²)²+y²), 0<a<1, and C={r>a}. The nondegenerate minima (±a,0) lie in closure(C), so continuity fixes their images under any rel-C homotopy. Both remain on z=0, contradicting (ii).",
      "context_sha256": "dda17624c69b3b5890c4f6168d343ccfce11f66a3147b51a21ec06eab9554110",
      "item_sha256": "9396fe2181eea734ea38cd81feb3ff886ce96aa4acf9a6690dc126bedec15488",
      "at": "2026-10-06T07:03:27.902Z"
    },
    {
      "id": "def-limit-cycle-of-a-leaf-of-a-codimension-one-foliation",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The final sentence claims Π^j_1(L,x)⊆N_j(L,x), but Π^j_1 is neither defined in the full item nor supplied by a dependency interface. The promised definition “below” is absent, leaving this inclusion unsupported.",
      "context_sha256": "194a270ee9b618062bbe34021dffc29662dc9266212ebabe4a25444708cfb020",
      "item_sha256": "9d5c1a36da5f74bd924d302625918c079751008151fe46f5118cd5b8c536218d",
      "at": "2026-10-06T07:03:47.425Z"
    },
    {
      "id": "lem-characteristic-period-annulus-has-an-orbit-or-polycycle-frontier",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 9.1 claims DY=DX on Γ, but F3 supplies only Y=X there, and no argument establishes derivative equality. The saddle-graph dependency explicitly requires DY=DX on Γ, so its application in step 11.1 is unlicensed.",
      "context_sha256": "5045b1f1d4b3893456dc6e7fb57af6c8dea728dad7727071f3f29038f8531ad6",
      "item_sha256": "34698a2cdab6cde6c3acd2cb6465b40c2fa32cbe45f63709118fa29e5237501c",
      "at": "2026-10-06T07:03:55.363Z"
    },
    {
      "id": "rem-classical-godbillon-vey-requires-at-least-c-two-regularity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title falsely asserts C^2 is necessary. Hurder–Katok §7 extend GV to C^{1+alpha} foliations with 1/2<alpha<1; the statement only restricts the supplied smooth construction. [Source](https://www.numdam.org/item/PMIHES_1990__72__5_0.pdf)",
      "context_sha256": "4f18388e083cbf26b8402a8a1074e46cb5b2126dfe49153a4f58b61b0d696f54",
      "item_sha256": "a41ca312886d01edf19e06ad59a2ce3d89414d5044fa0463409134270f708171",
      "at": "2026-10-06T07:03:48.592Z"
    },
    {
      "id": "lem-limitwise-nullhomotopy-predicate-descends-to-a-normal-subgroup",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1 incorrectly identifies N_j with the kernel of the cited two-sided holonomy representation. A smooth holonomy germ can be identity on side j but nonidentity on the other side. Normality requires the kernel of the one-sided restriction.",
      "context_sha256": "42891559b54b793ba91fe9ce1a6059e05d2458b55f0e872e51bc828fea8e55bb",
      "item_sha256": "ae8f32accd01fd727290a3df6d1c037a4ca8a612dde9d97cb30b7883bff3996d",
      "at": "2026-10-06T07:03:32.308Z"
    },
    {
      "id": "lem-saddle-polycycle-rounding-preserves-the-inward-transverse-family",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Steps 1.1 and 7.1 invoke F1/F2 for either adjacent annulus, but their interfaces supply data only at the outer frontier of a maximal center period annulus. The statement allows arbitrary circuits and other adjacent annuli; this extension is not proved.",
      "context_sha256": "5b89741f6e3424417305ef2832ff8c9472bb3dad781ecf85218153b9526d1112",
      "item_sha256": "56255df66585860071c27d470db05fe1d51f898adc03cb5b46f5c2171c099a12",
      "at": "2026-10-06T07:04:11.584Z"
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
