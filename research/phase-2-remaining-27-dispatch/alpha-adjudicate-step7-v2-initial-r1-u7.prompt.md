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
label: step7-v2-initial-r1-u7
covers: 7
output: research/phase-2-remaining-27-step7-v2/step7-v2-initial-r1-u7.json

# Step 7 adjudicate: initial, round 1, unit 7

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/initial-1.json.

Write only your assigned item files, genuinely required new prerequisite items, their owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/step7-v2-initial-r1-u7.json.

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
    "id": "def-brownian-transition-semigroup",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The title and definition call $(P_t)$ a semigroup, but no semigroup identity $P_sP_t=P_{s+t}$ is stated or established. The purported “semigroup lemma later on this page” is neither included nor cited, so it cannot support that assertion.",
    "context_sha256": "183d5247a3d633f03c5fe20d935463f5fd3ef96b6507e6668cc4bca3419c316c",
    "item_sha256": "f9967cff43ede9cc95585746923f6bacc60e1311a4738ddcfaa6853f4e784648",
    "at": "2026-09-21T12:58:09.257Z"
  },
  {
    "id": "thm-blumenthal-zero-one-law",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 1.2 is ill-typed: μ is Wiener measure on C([0,∞),R), while Γ is product-measurable in R^[0,∞). Thus μ(Γ) is undefined; it must be μ(j^{-1}(Γ)). The same invalid equality is essential in step 2.1.",
    "context_sha256": "2ac76f92edaab0a934542f3bde3cedda384301bbc1787db21c4bc5ffac7c57ca",
    "item_sha256": "4d7a7470830c65e905617fb476ac02c6a4719cd1668cda41bd59253f9a8c7f1e",
    "at": "2026-09-21T12:58:52.432Z"
  },
  {
    "id": "ex-maximum-crossing-probability-before-a-fixed-time",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The cited maximum-law applies only after replacing B by its specified everywhere-continuous, zero-start representative. For an arbitrary Brownian motion under the supplied definition, the uncountable-path supremum need not even be measurable; this item omits that required replace",
    "context_sha256": "5c58e8bab050c1bcfef706893fb3b1644828a15e86258d1ffeb61c3329ba1aa5",
    "item_sha256": "9885fc629b6a6e6c62eed1e3e58261ac4f7bdbf4f3e1159f33ac74315da4ce49",
    "at": "2026-09-21T12:58:56.535Z"
  },
  {
    "id": "lem-conditioning-a-known-state-and-independent-noise",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Steps 3.1 and 4.1 are ill-typed: D is a class of subsets of S×T, but they assert it contains Ω and use Ω as the pi-system’s whole space. Ω is the probability-space sample space, not generally S×T, so the required lambda-system axiom is not proved.",
    "context_sha256": "8b737cdaddbe194d21a6c7da157dd0c9bd40c39046f23b0dbd6a9cd7ba85e199",
    "item_sha256": "b02ca7f0c3aebb4c93112146c6b9d377047c2e3b3446cff3e156c6c81b72813b",
    "at": "2026-09-21T12:58:58.513Z"
  },
  {
    "id": "cor-one-dimensional-brownian-motion-hits-every-point-almost-surely",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The statement defines τa for an arbitrary Brownian version, but its hitting event need not be measurable: continuity holds only on a full-measure event, and the space need not be complete. The cited hitting-time result explicitly replaces paths off that event; this corollary neve",
    "context_sha256": "5d1bf05a367e290fae1a3d17bd425edae4b628f07d8542ff9b56ee86f3126b4f",
    "item_sha256": "be6d97cf63f2df80fbb91327209da7657dba450fcf6e998a26e110634cedd074",
    "at": "2026-09-21T12:58:59.667Z"
  },
  {
    "id": "ex-density-and-infinite-mean-of-a-one-sided-hitting-time",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "F1 inaccurately restates the distribution corollary: it applies only after replacing B by its specified everywhere-continuous zero-start representative. For an arbitrary B under def-brownian-motion, τ_a as the uncountable-time infimum need not have the asserted measurability/law.",
    "context_sha256": "f32be0449e8d2c82cb375a865e996e62412c619fc8acbda564f6d593815b4637",
    "item_sha256": "394ca6778a5b8739fac10ad6a318db5415e3587e19eb42c2d9b258b5a8fdc56a",
    "at": "2026-09-21T12:59:03.970Z"
  },
  {
    "id": "lem-brownian-transition-semigroup-property",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The final AC-use claim is false: steps 1.1 and 6.1 invoke F3’s Riemann-to-Lebesgue conversion, whose supplied interface requires ACω. Thus AC is used there too, not only via F1–F2 and F4.",
    "context_sha256": "2a012866842197e1ba58d7a8dbd71f7aef40e1d72c7a037ee3ff11359fb81953",
    "item_sha256": "39173a81664391e15a8992564a3605d60a353a825f4078f42a187b6463595511",
    "at": "2026-09-21T13:00:37.235Z"
  },
  {
    "id": "cex-finite-quadratic-variation-does-not-imply-finite-total-variation",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "F2 is not licensed by def-axiom-of-choice: that interface only states AC, not that it is an ambient assumption of Brownian results. AC is instead an explicit hypothesis of the Brownian corollary, so step 3.1's claim that it enters only through F2 misstates the dependency.",
    "context_sha256": "a31b644c26b06dfb7b0c73dbc966797ef5824659e9abfd508c3b85682264dcf7",
    "item_sha256": "6d7654f62c43429a487958958bef7a655e4881edff12937ccf174d85416878e6",
    "at": "2026-09-21T13:01:08.904Z"
  },
  {
    "id": "ex-successive-brownian-hits-restart-independent-copies",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Title overclaims: the restarted future Brownian paths are not independent copies—W^{n+1} is a measurable tail of W^n. The proof explicitly establishes independence only for the stopped exit segments, so it does not support “independent Brownian copies.”",
    "context_sha256": "21ca38b113c61f9e975f8aca88c77d8ee886ee1279645580e85e7d49dce314a0",
    "item_sha256": "ed801a74a54dd461e5c8ff590ac78e125af844c531c713561ac8bfa57321330c",
    "at": "2026-09-21T13:02:20.985Z"
  },
  {
    "id": "cex-strong-markov-fails-at-a-nonstopping-random-time",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 3.1 applies a conditional Wiener law to an event with the G_L-random horizon 1-L, but never proves L is G_L-measurable. This needs reconstructing L from the stopped path (and no flat zero intervals); without it the core conditional-probability inference is unlicensed.",
    "context_sha256": "33194699c426f4a50ea41f1255b2657a4e72f1351ed949b822417ff48040e3b4",
    "item_sha256": "c0d31501bd3fcb8a803969bb84ee2c91f28793ed235d9082f9d12fd9e0a86545",
    "at": "2026-09-21T13:03:06.950Z"
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
