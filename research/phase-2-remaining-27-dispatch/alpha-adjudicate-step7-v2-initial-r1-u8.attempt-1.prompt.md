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
label: step7-v2-initial-r1-u8
covers: 8
output: research/phase-2-remaining-27-step7-v2/step7-v2-initial-r1-u8.json

# Step 7 adjudicate: initial, round 1, unit 8

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/initial-1.json.

Write only your assigned item files, genuinely required new prerequisite items, their owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/step7-v2-initial-r1-u8.json.

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
    "id": "lem-cross-ito-isometry",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "F4 inaccurately claims the supplied isometry has a “conditional-expectation interface”; its interface states only martingality and the squared isometry. The proof invokes this nonexistent interface in its AC accounting.",
    "context_sha256": "67074b8bcb46ec8adb219dcc421a283eaaf283a33c393b2aa8df049327e1f488",
    "item_sha256": "51986f7ab5c08f91488f21966bd90b823576ef6daf5a01969854f781fcbb4908",
    "at": "2026-09-21T13:01:10.432Z"
  },
  {
    "id": "def-progressively-measurable-and-predictable-process",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "It claims the definition “uses no choice principle,” but its cited continuous-time-filtration interface explicitly begins by assuming AC. Thus the local dependency context is misstated and the no-choice assertion is unsupported.",
    "context_sha256": "89b93a3e7be36eedacfed921fe597afedac083f8820750b4a1f76abe71fea4e1",
    "item_sha256": "aefe68f2140197c0fdb505ff3c2322b6f8faf7f5e340ace0aef6f0ae77ae5dfc",
    "at": "2026-09-21T13:02:04.575Z"
  },
  {
    "id": "ex-time-changed-quadratic-variation-of-an-ito-integral",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The example assumes only AC and (H), but F2’s cited theorem additionally requires the filtration’s usual conditions. Thus its application to M and the claimed quadratic-variation conclusion are not licensed by the stated hypotheses.",
    "context_sha256": "e1da035362bf4c5bf957177df88f3fe628c01a25e03e7dc78f26d0d6111c6193",
    "item_sha256": "d011d73af798346c671da5d6b2af70778a9678cd496250c83323049411c55ec9",
    "at": "2026-09-21T13:02:18.551Z"
  },
  {
    "id": "thm-ito-integral-process-has-a-continuous-martingale-version",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The uniqueness conclusion conflicts with the supplied indistinguishability interface, which requires the exact all-times equality event to be measurable. The item explicitly disclaims that on noncomplete spaces and substitutes a weaker common-full-measure-event notion.",
    "context_sha256": "19b52dc526d12f1d25076d243acddc9aaf60051924443b7d756399ca41cf72f2",
    "item_sha256": "88a614b9b36dbc37610ca37ddce10d1fb6e3b44b831cb4e6fa5e931b29bfa6e5",
    "at": "2026-09-21T13:02:23.034Z"
  },
  {
    "id": "cex-pathwise-riemann-stieltjes-integration-does-not-construct-the-brownian-ito-integral",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "F2 inaccurately restates its cited theorem: the supplied interface only concludes that \\(\\int_a^b f\\,d\\alpha\\) exists; it does not state convergence of all tagged Riemann–Stieltjes sums under mesh refinement or evaluation-point independence. The later mismatch relies on this unst",
    "context_sha256": "addf15cf16d81e6d3b55890f6a32f02212f970d598327502ff42d49265308b0e",
    "item_sha256": "6b789557a23ea38cbf5c44cce73a29c37da28acb422a4b32e590c725e08b5927",
    "at": "2026-09-21T13:02:28.492Z"
  },
  {
    "id": "ex-integral-of-the-indicator-of-a-stopping-interval",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "F1 is false: under the elementary-integrand interface every elementary process has H_0=0, so the constant process 1 is not elementary (only 1_(0,T] is an a.e. representative). Step 1.1 therefore invokes an unavailable elementary representation.",
    "context_sha256": "4c4be4fa212d882e29ddb2c16caf00771ac0c2d675c75cf5b56a030397e9d749",
    "item_sha256": "12896b275212d58347d16d38ae7eef2531fb65b118e7276c36874605ba171c6a",
    "at": "2026-09-21T13:02:29.484Z"
  },
  {
    "id": "def-continuous-time-adapted-process-and-martingale",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Clause 4 calls $(\\tau_n)$ a sequence but specifies only $\\tau_1\\le\\tau_2\\le\\cdots$; under the library convention a sequence is indexed by $\\mathbb N$ and must include $\\tau_0$. Thus the localizing-sequence quantifier (and later $\\tau_n:=n$) is underspecified.",
    "context_sha256": "83a4be24646905070c9fafc62fe7a16792a1bf3093546eb87b05db996f5e0e4a",
    "item_sha256": "07394e908a5bd3c717fcdac658a645a59e65d2973a7d1d37df0245ddfae2b42a",
    "at": "2026-09-21T13:02:30.388Z"
  },
  {
    "id": "cor-deterministic-ito-integrals-are-gaussian",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "F3 inaccurately restates weak convergence: its interface tests bounded continuous real functions only, whereas e^{itx} is complex-valued. Thus step 2.1's cited route to characteristic-function convergence is not licensed as written.",
    "context_sha256": "62d5fe87192b257ade73d9f9058419b713cb2cb0191ac5a23649de5883100054",
    "item_sha256": "ea6e6cdc50bf1bedd8a7d7feba8cb87c6bfd552e9d9c54be30bef98b80aa512e",
    "at": "2026-09-21T13:02:41.373Z"
  },
  {
    "id": "thm-density-of-elementary-predictable-processes-in-predictable-l2",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[F1] inaccurately says the constant process 1 is elementary. The supplied definition forces every elementary integrand to equal 0 at time 0; only its L2 class has an elementary representative. Step 2.1 likewise calls 1-G^n elementary as a process.",
    "context_sha256": "8cdea179fd84a82a83ba6ef337c3dfd37beebe18d8526af8c61aaf0867cf837c",
    "item_sha256": "bca412471920f3751bf39ef8c12e01efed72dde320a3c136b6ddf1971815a336",
    "at": "2026-09-21T13:02:52.806Z"
  },
  {
    "id": "cor-heat-semigroup-martingale",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The statement asserts u is smooth, but F5 and steps 1.1/2.2 establish only two x-derivatives and one t-derivative. No bounds or argument for arbitrary higher/mixed derivatives are supplied, so the C∞ claim is unproved.",
    "context_sha256": "73c5f7b63294a4c0012a5f4ff22df994abe83a88e6dc539099ab2c0a902da060",
    "item_sha256": "0304c72a7fb62ff72b9b41ff0eb54120571fb50e91a7e8d4059032df0b34e0c9",
    "at": "2026-09-21T13:02:56.267Z"
  },
  {
    "id": "cor-brownian-filtration-local-martingales-have-continuous-versions",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The title omits the cadlag hypothesis: the cited representation theorem and proof apply only to local martingales with cadlag paths on one full-measure event. Thus the title asserts continuity for all Brownian-filtration local martingales, beyond what is proved.",
    "context_sha256": "43f041f8230e64c5beca4b398af4679a2b43554f257166c628c029d6c3eeafa4",
    "item_sha256": "1e52bb7cea78220e5710d80738a6d9b6d1403e18c4f5db5bf500a7542f98b468",
    "at": "2026-09-21T13:03:42.249Z"
  },
  {
    "id": "cor-square-integrable-brownian-terminal-variables-have-ito-representations",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 3 falsely says AC enters only through F4. F1 and F2 themselves explicitly assume AC, while def-axiom-of-choice does not supply F4's claimed bookkeeping about conditional expectation or completeness interfaces.",
    "context_sha256": "e62c4a1306235cbb2dea1bf12da31dc46e39d5bcf912034915a00e644d4ab195",
    "item_sha256": "1c738d3bc57984787aa30e0b4efe978eb6197e81beb91e359a23e4e9be5a6857",
    "at": "2026-09-21T13:04:02.627Z"
  },
  {
    "id": "cor-exponential-brownian-martingale",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "(H) does not impose the usual conditions, but the cited localized-integral definition and Ito formula explicitly require them. Thus F1/F2/F5 and the claimed localized integral are not licensed under the statement's assumptions (e.g. raw natural filtration satisfies H).",
    "context_sha256": "17d284dd5532ed4cb8716126da9360e8e3d2150c7d66d86bc542b45d0f7f43bd",
    "item_sha256": "421dec5f3c2a2e1d34495438305cdccee7610a5e727c846ce51b4e6d8ea3396e",
    "at": "2026-09-21T13:04:06.466Z"
  },
  {
    "id": "cex-the-ordinary-chain-rule-fails-for-brownian-motion",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "F1 inaccurately calls the integral a localized Ito integral under only AC and (H). The cited local-integrability definition and localized-integral theorem additionally require the filtration’s usual conditions, absent from the given assumptions. The corollary supplies a finite-en",
    "context_sha256": "aa966f28dfde85e1d86e473ab6adf863b910b068cf29a35d3b80c6fd1d1f8fad",
    "item_sha256": "86fd34c1b90fce7f35fc55fae544213188e3a3c0ca84fb9452d704ad0bd1c916",
    "at": "2026-09-21T13:04:07.254Z"
  },
  {
    "id": "cor-vector-levy-characterization",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The cited local-martingale interface explicitly defines only real-valued processes. No supplied definition makes an R^d-valued “continuous local martingale” coordinatewise local, so step 1.1 cannot apply the scalar characteristic-exponential lemma to M^i.",
    "context_sha256": "0d3dfaca359f653df22648d8b451eed0ab8fd8b8e4d1aad310dcf511925ae4f8",
    "item_sha256": "b347190ce821626c47956ceed4326175f1c2e8fa63ae84f17675b95c4b3e14f3",
    "at": "2026-09-21T13:04:11.083Z"
  },
  {
    "id": "def-quadratic-covariation-of-brownian-ito-processes",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Clause 4/title overstate the result for continuous finite-variation processes: the hypothesis only covers pathwise absolutely continuous A_t=∫a_s ds. Continuous BV paths need not have that form (e.g. Cantor function), so the claimed finite-variation scope is not established.",
    "context_sha256": "6aecb992eca151ba2dab99dfe0e3c13d68ae4a6691f3a1174685ea45f787d6a8",
    "item_sha256": "fc02e4d353d0178c7dd30c44892c49f937f3d7a0f9b207cb2ab5bbd1f8652e1b",
    "at": "2026-09-21T13:04:32.097Z"
  },
  {
    "id": "cor-brownian-square-martingale",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "F1 is unlicensed: (H) gives adaptedness and Brownian paths are only a.s. continuous, not progressive/predictable. A null-path modification can preserve both while destroying predictability, so B need not be an Ito process and ∫B dB is undefined; step 1.1 cannot apply Ito.",
    "context_sha256": "af3cd268b486f4cbac3c508af57bd446cb6d374121f4333930814a13f6ae907c",
    "item_sha256": "23fdd00b4d409ac44af17e78afcd1e8aa64dbca96a4680c9babaec2d986a41ea",
    "at": "2026-09-21T13:05:29.424Z"
  },
  {
    "id": "thm-space-time-harmonic-functions-yield-brownian-local-martingales",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "For d>1, (H) is only a scalar Brownian increment condition and does not supply independence of vector increments from the filtration. Usual conditions do not add it, so [F1] cannot make B an Ito process; an anticipating filtration can make a coordinate nonmartingale.",
    "context_sha256": "61e09b8d291e958efc4ee94f6e822a2abbad0d95df46feac16337ba78b4374ae",
    "item_sha256": "2ce7ccf2455a7732626e95b1f0d2d1b9ab8dce2ca1bdafb33f0cb4dc3a9b8b91",
    "at": "2026-09-21T13:05:32.612Z"
  },
  {
    "id": "def-continuous-brownian-ito-process",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Clause 5 promises that a quadratic covariation \"below\" is defined from X, but this item contains no quadratic-covariation definition at all. This is a false/unfinished page promise.",
    "context_sha256": "856dda51a9f37a4ac0127c811ecb5364a1ad0e3a7421e259442e96fb6ba48d49",
    "item_sha256": "cfa9fa60cf0df275fb8658d9094969355aea113e47f52d1303aa96a2b9b9428c",
    "at": "2026-09-21T13:05:46.066Z"
  },
  {
    "id": "thm-dynkin-formula-for-bounded-brownian-stopping",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "F7 falsely says AC supplies Brownian/normal-law interfaces. The supplied AC interface asserts only choice functions; Brownian motion and its Gaussian laws are hypotheses, not consequences of AC. This is an inaccurate dependency restatement.",
    "context_sha256": "7c1c1af28ce0f0d3bd079fb3fa7f06528d6fd6627cb50b62f0d782cd7b68ad8b",
    "item_sha256": "135383a9087bbecc861b32f64dbd4dde36c048a3a09dea5e8cd4b861329a04cd",
    "at": "2026-09-21T13:08:19.817Z"
  },
  {
    "id": "ex-expected-exit-time-from-an-interval-via-ito-formula",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[F5] is an invalid dependency claim: AC only gives choice functions (and, via a separate lemma, countable choice); it cannot supply a Brownian process, adaptation/independent-increment standing hypothesis (H), or Dynkin’s other data. Thus F5 misstates its cited interface.",
    "context_sha256": "523dc7f682583eea0d521e492edf121d0d3c9667b640c8f7f1fab33a4ac26aef",
    "item_sha256": "96f465fae556006849826905c4d76314fcc37b1d225a53aaa0c3f1ef11c941d2",
    "at": "2026-09-21T13:08:20.961Z"
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
