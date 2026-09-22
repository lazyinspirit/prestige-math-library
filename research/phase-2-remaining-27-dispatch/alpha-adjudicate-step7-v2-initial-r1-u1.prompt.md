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
label: step7-v2-initial-r1-u1
covers: 1
output: research/phase-2-remaining-27-step7-v2/step7-v2-initial-r1-u1.json

# Step 7 adjudicate: initial, round 1, unit 1

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/initial-1.json.

Write only your assigned item files, genuinely required new prerequisite items, their owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/step7-v2-initial-r1-u1.json.

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
    "id": "def-real-and-complex-inner-product-space",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The complex-case positivity axiom is ill-typed/incomplete: it says ⟨v,v⟩≥0 without stating ⟨v,v⟩ is real. The cited interface explicitly requires “real and nonnegative”; complex numbers have no order, and the later square-root claim depends on the omitted fact.",
    "context_sha256": "174f54b5b1514074680d4d84aa6956cb2d4c67b21464f04a695a5cb9684a6199",
    "item_sha256": "67b0d8dd2966dfdae619388bbb8578f703be627d4398c89452bc0ab2844c3e22",
    "at": "2026-09-21T12:42:33.750Z"
  },
  {
    "id": "lem-pythagorean-theorem-and-finite-orthogonal-sums",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The induction step changes indexing: for a supplied list x_1,…,x_n it sets s=∑_{j<n}x_j. Under the library’s zero-based convention this invokes x_0 (and omits x_n); even conventionally it is inconsistent with the stated ∑_{j=1}^n.",
    "context_sha256": "486e48a1e61e1fcebb10e3101c68f6cf1ae105aa8123ef3b10f9c26ef0f2585e",
    "item_sha256": "6edcc60a357264ce68af16ec4838529e53cf2835aaf49cfd32e272ffcd9cdd80",
    "at": "2026-09-21T12:42:42.530Z"
  },
  {
    "id": "ex-projection-onto-constants-is-the-mean",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[A4] inaccurately attributes projection availability under Countable Choice to def-countable-choice, whose interface only defines AC_ω. Projection existence is supplied by def-hilbert-orthogonal-projection, not that cited dependency.",
    "context_sha256": "b9f941c7c6b519bf937e1289e945e58194213b34b1457b099e742c13c78e1743",
    "item_sha256": "87d498bbc53f0678101da860a86e5bcb8bb8e970d9623eae775566a74c402a93",
    "at": "2026-09-21T12:43:02.240Z"
  },
  {
    "id": "ex-legendre-polynomials-from-gram-schmidt",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The cited Gram–Schmidt theorem requires the sequence’s range to be dense, but the range {1,x,x²,…} is not dense in L². Only its linear span is dense. Thus A1/step 1.1 do not satisfy the dependency’s hypothesis, and no general Gram–Schmidt result is cited.",
    "context_sha256": "eea7507f67f21a664e63c1e4968d5013bc901acbac59f1c2935b2abaf89420dd",
    "item_sha256": "47262550697846013998e1be7e2c62f9db2de4ad199ad8ad96da0d6987c2e420",
    "at": "2026-09-21T12:44:06.159Z"
  },
  {
    "id": "def-fourier-coefficients-and-trigonometric-polynomials",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The finite-torus paragraph uses L^1(T^n), dm_{T^n}, and “the product measure” without ever defining m_{T^n} as a product measure. The only supplied torus measure is m_T, so these definitions are untyped/undefined.",
    "context_sha256": "c138d6a7473fc44adacbb2927268a146dffae2914ff8f96de5c8bcff9252f6a0",
    "item_sha256": "13cbd3ac79af2e24d83dce714872b4892174ad77b0a4a7bf385b2605d3ac2372",
    "at": "2026-09-21T12:44:46.034Z"
  },
  {
    "id": "ex-fourier-series-of-a-square-wave",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 4.1 asserts mean-square convergence but cites only the coefficient and Parseval steps; neither licenses it. The needed L2 Fourier-convergence theorem is not invoked in the proof, so that stated conclusion is unsupported.",
    "context_sha256": "9881139864049d1e125c5ea160322cd75c529cc6c85e002090e4855f42919b76",
    "item_sha256": "65f76507df3e9dcaa4da9a76b937a8e3d5d70575a1530526072afb2a71fa40d0",
    "at": "2026-09-21T12:45:46.479Z"
  },
  {
    "id": "cor-separable-infinite-dimensional-hilbert-space-is-ell-two",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[A3] obtains a sequence s_k in span(S) converging to x merely from closure/density. In ZF metric closure need not imply sequential closure; selecting approximants for every k needs countable choice, and no cited dependency licenses it. Step 2.1 relies on A3.",
    "context_sha256": "77408a9cdf3e789c26b5c6b7a1eabcba3c194e1f53c8e26267f8256c29d93aa0",
    "item_sha256": "ecbab9ec01c8481c0a35b1f86b97c62b15ea6128a3d5262b35ea4a213f428af1",
    "at": "2026-09-21T12:47:24.531Z"
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
