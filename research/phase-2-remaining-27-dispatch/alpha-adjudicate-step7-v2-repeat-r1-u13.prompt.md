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
A mechanically discovered candidate is not automatically defective. Route it
for examination, but never prescribe an edit unless the supplier repair makes
one absolutely necessary; identify the smallest logically sufficient change
when it does.
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
label: step7-v2-repeat-r1-u13
covers: 13
output: research/phase-2-remaining-27-step7-v2/step7-v2-repeat-r1-u13.json

# Step 7 adjudicate: repeat, round 1, unit 13

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/repeat-1.json.

Write only your assigned item files, genuinely required new prerequisite items, their owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/step7-v2-repeat-r1-u13.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Read all cited suppliers and relevant consumers. Repair confirmed fatal defects fully. Identify all downstream consumers, including published items.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run,phase,round,unit,input_sha256:"aebd8478a16fa4d7b4006b0433b138d177058998ef64d668e9a1d594216923ba",decisions:[],reviews:[],created_items:[],downstream:[]}. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters); unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run phase-2-remaining-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. Downstream is an array of item IDs; include consumers reached through changed intermediate items.

Assigned input:
[
  {
    "id": "def-complexification-of-a-real-lie-algebra",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The title is unqualified, but the definition only treats finite-dimensional real Lie algebras. Complexification is defined for arbitrary real Lie algebras, so the title asserts broader scope than the item establishes.",
    "context_sha256": "e8d1792e35ab0a213e50752e94f4f0cc443605e3899cb7f787aeed8071b45645",
    "item_sha256": "89275957fc86ce245a120d2329922b9b2e0f486aa9e9b5d8004752694d0a7b94",
    "at": "2026-09-22T00:25:09.299Z"
  },
  {
    "id": "def-theta-stable-cartan-subalgebra-and-compact-split-parts",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The cited conjugacy theorem is universal over already-given Cartan subalgebras; it supplies no Cartan subalgebra to start with. Thus it does not license the claimed nonemptiness of theta-stable Cartans (or the `justified_by` attainment claim) without a Cartan-existence result.",
    "context_sha256": "4d2249b4e8f5fe49d5e53c2b6821c1ca8776de439cd0aff0e5cb8b255b37c188",
    "item_sha256": "aee53e025876e7dae69ff67e6e118a31cd7de9f1bd8adf4ddfb75de122713771",
    "at": "2026-09-22T00:26:21.629Z"
  },
  {
    "id": "ex-grassmannians-from-unitary-symplectic-reduction",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 6 falsely calls the reduced form the fixed standard Kähler form for every λ>0. Under the row-space identification, scaling frames by √(λ'/λ) scales ω^red by λ'/λ, so it is a λ-dependent multiple of any fixed standard form.",
    "context_sha256": "58f7a92d27a193a8c679bb46414db0b251a047b189b7d4ebc215c0bcf5eeb9f6",
    "item_sha256": "cec30ecfcb3328902d1128d1b9ed2800f01efb254c765e20eb60d0d3e3d59802",
    "at": "2026-09-22T00:29:56.541Z"
  },
  {
    "id": "ex-hyperbolic-space-as-so-zero-n-one-mod-so-n",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[L6] inaccurately attributes to the supplied exponential/local-diffeomorphism interfaces the claim that the subgroup generated by exp(G) is the identity component. Neither interface states or licenses that global claim.",
    "context_sha256": "bdfadae970d0bd00ee42dc283bae1800c8038eb05ccfef1697ca306a7c9ba74c",
    "item_sha256": "dff43b65ccfd92060ba01783b2323c4d668f4e2cdd5ce06d40ad3f76c7c73d48",
    "at": "2026-09-22T00:26:36.593Z"
  },
  {
    "id": "prop-classical-real-forms-of-the-classical-complex-lie-algebras",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[A1] is an inaccurate dependency claim: it attributes a classification theorem to [L4], which contains none, and invokes nonexistent [L5] for matrix realizations. Step 3.1 cites this invalid fact, so its dependency justification is defective.",
    "context_sha256": "20d10407d03a90cc74b22c073811d55d8a1041589de07809177fc7e2c5ba3b08",
    "item_sha256": "add73d3bf83294c90a9702c589117cfc6589e8b26a2d1fd6183aad0604724e9b",
    "at": "2026-09-22T00:31:01.216Z"
  },
  {
    "id": "thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[L2] inaccurately attributes to the supplied global Cartan decomposition theorem that Ad_K preserves p_0 and B_theta; its interface states only compactness/lie algebra and the K×p→G diffeomorphism. Step 5–6 need Ad_K p_0, so this unsupported restatement is fatal.",
    "context_sha256": "d7014d803f6c6699956f7e27493dd9d902a8225d506ccf0f4eb9b7943f009267",
    "item_sha256": "60e290671834b9d4a2ac8f78b441277d84fa7222c484abac24f4ed50476aa744",
    "at": "2026-09-22T00:31:09.224Z"
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
