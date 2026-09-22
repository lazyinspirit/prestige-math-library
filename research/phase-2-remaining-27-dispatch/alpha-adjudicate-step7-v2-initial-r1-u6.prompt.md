# Step 7 batch adjudicator

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md and the generated task fully.
You are the Sol xhigh adjudicator for one assigned batch in 7.1 or 7.5.
The task binds the run, round, exact rejections, ownership, evidence inputs and
output schema. Do not substitute a historical task or receipt.

Logical validity is the ground truth. Independently inspect each rejected
statement, proof, definitions, actual dependencies, page interface and contract.
A judge's rejection or an earlier acceptance can be mistaken. State uncertainty
honestly. When unsure, search the web and read the relevant complete arguments
in authoritative sources; record exact sources and what they establish. Sources
can also err: verify their hypotheses and reasoning rather than treating their
reputation as proof. Never invent reading, confidence or completed checks.

Adjudicate every assigned rejection against its exact rejected carrier. Record
confirmed fatal and nonfatal defects, false positives and unresolved
uncertainty using the task's schema and concrete mathematical evidence.
Multiple rejection rows for one item still require complete coverage.
Repair all confirmed defects, including nonfatal defects, in assigned items and
local contracts/metadata. Fatal classification controls only the threshold;
a sound item needs no cosmetic rewrite. Preserve the content contract and
Foundations boundary. Unresolved mathematics blocks closure.

You and all three owner repair agents may author new items only to satisfy
genuine unmet prerequisites of assigned repairs. Identify the precise missing
claim, its consuming proof step and why existing items cannot supply it.
Do not add unrelated results or assume the missing claim. Fully author the
definition or proof, state exact hypotheses and dependency uses, and apply the
same logical and source-evidence standard as to every repaired item.
Choose unique IDs after checking existing IDs, aliases and current assignments;
resolve an ownership or ID collision before writing. Register each addition in
the canonical registry/index, owning page, applicable manifest and proof contract
through the task's serialized integration path. Do not leave orphan item files.
Include each new item and its creation evidence in the generated task's result
schema. Declare dependency edges and discover all downstream consumers of the
addition, including published consumers. Complete their relevant repairs before
certification. New items enter the central certification inventory and complete
gate battery; they do not enlarge the frozen original-frontier denominator or
permit self-issued judge verdicts, certificates or pass stamps.

Identify every relevant downstream consumer throughout the library, including
published items and consumers outside this run or batch. Inspect transitive
dependencies, citations, proof uses, definitions and page interfaces. Give exact
paths, affected clauses, required repairs or reasons no repair is needed.
A mechanically discovered candidate is not automatically defective.
Route targets outside your write ownership to the three owner repair agents;
do not overlap their writers or defer a relevant published consumer.
Record newly discovered targets even when absent from the initial task.

Run focused local checks and report actual results. Update only assigned
evidence and files; use the task's integration route for shared ledgers.
The published-consumer-supplier ledger contains mathematical findings and audit
status, not dispatch history. Preserve prior round evidence.

Return the exact structured result requested by the generated task, with every
decision, changed item, downstream finding, source and unresolved point.
The report is `{run, phase, round, unit, input_sha256, decisions:[], reviews:[], downstream:[]}`.
Copy `input_sha256` from the generated task; it binds the exact assignment.
Each exact rejected tuple needs a decision with `id`, `model`, `context_sha256`,
`outcome` (`confirmed_fatal`, `confirmed_nonfatal` or `false_positive`), `reason`,
`uncertain:false`, `source_urls` and `familiar`. Every assigned item also needs
a review with `id`, `disposition` (`repaired` or `unaffected`), `post_sha256`
(the current itemHashGuard), `review_context_sha256`, and the same evidence fields.
Immediately after completing each review, before editing another supplier, run
`node tools/step7-workflow.mjs review-contexts --run RUN --items ID` and copy both
hashes. Items reviewed together on a stable state may be batched. Preserve the
original review hash if a supplier later changes; never refresh it without
reviewing the new effects. The engine schedules any required continuation.
Reasons must contain
at least 40 characters of actual mathematical explanation. `downstream` contains
item IDs. Honest unresolved uncertainty blocks completion; never set false to
satisfy the schema when uncertain. Empty assignments return empty arrays.
Do not write judge verdicts, stamps, central certification or round state.
Do not launch workers, judges or another cycle. The engine collects all batch
results, dispatches exactly three downstream owner lanes, then certifies the
stable complete state once after every writer drains.
ALL assigned repairs and all relevant downstream repairs must be complete
before that certification pass. A successful dispatch or empty active writer
list alone does not establish completion; any unfinished repair blocks it.
Newly discovered downstream work continues in the repair phase with fresh
disjoint assignments until all effects are resolved. Never enter certification
with known additional repairs awaiting a later round.

Terra rejudgment and renewed adjudication/owner repair/certification repeat
under engine control until the latest round's unique fatal original-frontier
items are strictly below 5% of the frozen original scope. This never permits
unresolved defects, uncertainty or incomplete downstream coverage.


---

# This dispatch

run: phase-2-remaining-27
role: alpha-adjudicate
label: step7-v2-initial-r1-u6
covers: 6
output: research/phase-2-remaining-27-step7-v2/step7-v2-initial-r1-u6.json

# Step 7 adjudicate: initial, round 1, unit 6

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/initial-1.json.

Write only your assigned item files, genuinely required new prerequisite items, their owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/step7-v2-initial-r1-u6.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Read all cited suppliers and relevant consumers. Repair confirmed fatal defects fully. Identify all downstream consumers, including published items.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run,phase,round,unit,input_sha256:"ac52953837f71781b0c07653d319517d1817546b89ee1decf768421291c215c2",decisions:[],reviews:[],created_items:[],downstream:[]}. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters); unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run phase-2-remaining-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. Downstream is an array of item IDs; include consumers reached through changed intermediate items.

Assigned input:
[
  {
    "id": "def-densely-defined-closed-and-closable-operator",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "No Countable Choice is assumed, but Claim 2 uses “complete subspace iff closed,” whose converse needs choosing a sequence approaching each closure point. Likewise Core turns topological density into a sequence. The library explicitly tracks this choice issue, so the graph-norm di",
    "context_sha256": "8a804d90deb3b4e48b00f68a4b8c30349414030c27f353bdf2f4c4dc1d2c1ac9",
    "item_sha256": "f17ec8b2689cbb41aa9479fd244668b6fe5589ad244ffdd5834540cb45ed40f1",
    "at": "2026-09-21T12:55:22.927Z"
  },
  {
    "id": "def-infinitesimal-generator-of-a-unitary-group",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The defining limit is over real t→0 (explicitly called a net), but its sole cited convergence interface defines convergence only for N-indexed sequences. No net/topological-limit definition is supplied, so D(G) and G are not defined under the stated dependencies.",
    "context_sha256": "db4f9489864738657c7c5e4d9b01f0692231c39fddcaa0db4b67f454877128ad",
    "item_sha256": "952c4fb244872c6c91d2249b91d83bb86a4967bb23531f1c3bf013709ad1e063",
    "at": "2026-09-21T12:56:02.809Z"
  },
  {
    "id": "def-adjoint-of-a-densely-defined-unbounded-operator",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The claimed direct uniqueness argument using x↦⟨Tx,y−y'⟩ is invalid: density of D(T) says nothing about density of ran T. For T=0 on H, it vanishes for all y≠y'. Riesz gives uniqueness, but this stated proof step is false.",
    "context_sha256": "33c0f379484cb3ac63d883342498253e24184d47588a824002266414f6dfde6a",
    "item_sha256": "5769f3acf298c96a09450a5dcea9e0313b697c4e581a7c5e63ee750335050897",
    "at": "2026-09-21T12:56:06.237Z"
  },
  {
    "id": "def-strongly-continuous-one-parameter-unitary-group",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[[def-metric-convergence]] defines only N-indexed sequence convergence. It does not define or license the R-indexed limits t→t₀ used to define orbit continuity or throughout the proof, so “strongly continuous” is undefined under the supplied dependencies.",
    "context_sha256": "914d2409d3bc34de881628518fd86e14cca2d3850bc6943277b500b01471d585",
    "item_sha256": "1fe9247619e70265a4d6e35421d5ec4e0fd962d0f51d7af5e7e4d8ac263c23da",
    "at": "2026-09-21T12:56:23.762Z"
  },
  {
    "id": "def-norm-and-strong-resolvent-convergence",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The item invokes self-adjointness and thm-self-adjoint-resolvent-estimate to assert nonreal resolvents, but both supplied interfaces assume Countable Choice. It states no such hypothesis, so its well-posedness claim is not licensed in the stated setting.",
    "context_sha256": "3db44e66424edf0e1ee18da388262afa08068146a207d6799e2e7696bea3d236",
    "item_sha256": "e1bd19322e0480978bb4a79b57036d588a09a1ca695969f72d0bda0f74f47b23",
    "at": "2026-09-21T12:56:53.392Z"
  },
  {
    "id": "def-cayley-transform-of-a-self-adjoint-operator",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The item omits Countable Choice, yet its defining well-definedness invokes thm-self-adjoint-resolvent-estimate, whose interface assumes it, to obtain ±i∈ρ(T). Thus under the stated hypotheses C_T need not be licensed as defined.",
    "context_sha256": "343e6a8455f8c137f39e07f8aaff5ad95c1e760aa6589c3595d793c134576beb",
    "item_sha256": "3ea74152c6c1cf14c14c6b2bc27779a8d7b91a365cb9898e0950d21c2f613b6d",
    "at": "2026-09-21T12:57:06.344Z"
  },
  {
    "id": "thm-self-adjointness-range-criterion",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 2.2 has a resolvent-sign error: surjectivity and the estimate for T+i establish -i∈ρ(T), since (-i-T)=-(T+i), not i∈ρ(T). The claimed inference to i∈ρ(T) is not licensed by the displayed argument.",
    "context_sha256": "09a553915db3614304419b6b03ab9f41b74a96f9670e95254e3d18ad21b08746",
    "item_sha256": "24e50fca2fb06785f8bd5db9dec4c2fc346d423dae706f346f120d7818487d63",
    "at": "2026-09-21T12:57:13.822Z"
  },
  {
    "id": "ex-position-operator-on-l-two-of-r",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[A1] inaccurately restates its dependency: the multiplication-operator result requires a σ-finite measure space, but A1 asserts it for arbitrary L²(X,μ) and real measurable m.",
    "context_sha256": "225b362ea4d72f6ad6b9374be30fe85d4248de5958412eb65b40cc2d6a93a1d5",
    "item_sha256": "536e7376c293cdf0a202926e921f54d461d4921bf9cb26675ffac0e874847281",
    "at": "2026-09-21T12:57:29.558Z"
  },
  {
    "id": "def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The setup invokes the cited spectral theorem for an arbitrary self-adjoint operator, but that interface assumes H is nonzero. Unlike the paired decomposition theorem, this item supplies no direct zero-Hilbert-space PVM convention, so its cited construction is not licensed for H={",
    "context_sha256": "0b421a555e4bf267aa6ec4389c1e774692b9b945fe6b04344af91f6d63edf276",
    "item_sha256": "2f24b06fd44bd87d286b47b394d34007bd1fa66434c3a975abf244a7e5b98c04",
    "at": "2026-09-21T12:57:36.708Z"
  },
  {
    "id": "thm-kato-rellich",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 1.2 defines J_n=[-n,c-1/n] for n∈N, but library naturals include 0, so J_0 is undefined. Its countable-exhaustion argument is therefore not valid as written.",
    "context_sha256": "123205ee85f281721ac35179fb5ec0e549c8052718fe31e0a04668786d3c45e9",
    "item_sha256": "cc9992c9ad14bbaac26ec78330c4c352b8f2c9233cbc0e5702cd850a943a9f16",
    "at": "2026-09-21T12:57:59.326Z"
  },
  {
    "id": "thm-spectral-theorem-for-unbounded-self-adjoint-operators",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 2.1 equates the vector Cx with the scalar integral ∫z dF_x (F_x is a scalar measure). Thus its proof that F({1}) projects onto ker(I−C), hence F({1})=0, is ill-typed and unsupported as written.",
    "context_sha256": "e2d4fb51c02679a3a4d9b34e05a021a0e168da083204eb7d29c561e2111a237f",
    "item_sha256": "a9d71c9042f8144298eadc317e030ff2d22b347d206e73afb7df830cd9c94c2a",
    "at": "2026-09-21T12:59:50.110Z"
  },
  {
    "id": "ex-periodic-derivative-and-its-unitary-translation-group",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 3.1 defines a sequence by n(f(x+1/n)-f(x)), but sequences are indexed by N with 0∈N; its n=0 term is undefined. Thus the Borel-representative/convergence construction is ill-typed, leaving the Tonelli justification unsupported.",
    "context_sha256": "67246a0d7ebb5155a65bbf2311e3ae0e2f6eff9f401a52ee3660abeabed41f0b",
    "item_sha256": "740068147dee4bee6df101bb03f601e6cc1a33d05ba829ccfe2630af7c896a2a",
    "at": "2026-09-21T12:59:58.694Z"
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
