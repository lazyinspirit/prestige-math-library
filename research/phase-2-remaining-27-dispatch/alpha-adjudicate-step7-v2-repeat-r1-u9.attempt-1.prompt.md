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
label: step7-v2-repeat-r1-u9
covers: 9
output: research/phase-2-remaining-27-step7-v2/step7-v2-repeat-r1-u9.json

# Step 7 adjudicate: repeat, round 1, unit 9

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/repeat-1.json.

Write only your assigned item files, genuinely required new prerequisite items, their owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/step7-v2-repeat-r1-u9.json.

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
    "id": "def-reduced-generalized-homology-theory",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The connecting maps are declared independently but never required to equal the cofiber map followed by inverse suspension, \\(\\sigma_n(X)^{-1}q_{f*}\\). Exactness/naturality allow e.g. their negatives, so the claimed cofiber LES is not coherently tied to the given suspension data.",
    "context_sha256": "0a4cefca7ac1ada0261447e88ba1e5063dcc4e99059da9c086d020b0315d0fc3",
    "item_sha256": "1f48985ef9dab41d2694e06126dcb9e8e19fa0ff3fda9f8bd51b3750c192b4b4",
    "at": "2026-09-22T00:26:43.282Z"
  },
  {
    "id": "ex-complex-k-ahss-for-spheres",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The claim covers n=1, but step 2.2 invokes d_n=d_1 and E_1. The supplied AHSS is stated from E_2 (whose differentials start at r=2), so this differential and its argument are not licensed; S^1 is not actually handled.",
    "context_sha256": "5fde1a91cb6725970ac38256f7bf8361a12b223f91a32be495c020664101f86e",
    "item_sha256": "964b4cafaf8ee42241c47f5df9dcc8b05d26cc21921e14a9fb50299e82cb839d",
    "at": "2026-09-22T00:27:12.230Z"
  },
  {
    "id": "ex-stability-and-rank-cutoff-under-adding-a-trivial-summand",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The stated base need not be nonempty, but the cited Pontryagin stability theorem requires a nonempty path-connected paracompact Hausdorff CW base. Thus step 1.2 invokes F2 outside its supplied hypotheses.",
    "context_sha256": "b5a182017a8dcdb16e9d4d419c3b4eb404fa2a0fbe4d7f90a5430707eeaaf06d",
    "item_sha256": "1791c4d845348e333c2536091e1dc108e4e028fd784d929a5b7cf9f07257e0ca",
    "at": "2026-09-22T00:27:20.748Z"
  },
  {
    "id": "lem-complex-orientation-of-underlying-real-bundles",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Part 3 invokes Euler classes and [F4] for arbitrary V, but never assumes or establishes that V (hence (V_C)_R) is numerable. The supplied Euler/Whitney interface applies only to numerable bundles, so e(V) and the conclusion are outside its licensed scope.",
    "context_sha256": "f03db128f6150020e312a21aa3da92deb63572dc7e5f2ac6f09f3a4c4bee0bb2",
    "item_sha256": "3bc55715f12cef21d1ffdbb030b081c94e77706d9187fd5f6815077ea686a5da",
    "at": "2026-09-22T00:29:15.098Z"
  },
  {
    "id": "lem-complexified-tautological-line-resolves-real-projective-k-theory-extensions",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 1.2 misreads A3: for odd r, E_2^{r,q}=H^r(RP^r;Z)=Z for even q, so it is false that every nonzero source with p≥1 has p even. Its claimed exhaustion of differentials omits this source column.",
    "context_sha256": "b763da4bf2b5e30857a1e265aace1d7352ae142f9c0513465c13680c2039cbdf",
    "item_sha256": "d69eb4b837eb21dda1c7c9c74007c153f4d63bb7e109aff232ef944f0446778e",
    "at": "2026-09-22T00:30:09.486Z"
  },
  {
    "id": "lem-homological-ahss-exact-couple-from-the-skeletal-filtration",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "F4 misidentifies the relevant pair boundary: with F2, h(D^r,S^{r-1})→h(S^{r-1}) targets \\tilde h((S^{r-1})_+), not \\tilde h(S^{r-1}), and is not generally an isomorphism. Thus 1.4's claim it is k is invalid.",
    "context_sha256": "24aad221ac778f18de4d1868dfe0af1b8b8614a3d3a397deae42d102f294b746",
    "item_sha256": "2f8f2558582a9e2cde08400e70bf21230acc29f0cc8d1d691181ad44709165fb",
    "at": "2026-09-22T00:29:29.585Z"
  },
  {
    "id": "lem-ku-representability-and-skeletal-postnikov-d-three-comparison",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 1.3 misidentifies the representing space for AHSS bidegree (p,q): it is ku_{p+q} (with π_p=π_{-q}ku), not ku_{-q}. Thus ku_m's k-invariant evaluates H^m classes, not an arbitrary H^p cellular cocycle, so step 2.1 and the d3 claim do not follow.",
    "context_sha256": "bbb41093f3da665f4bd0bbcacd249fa8f1ba8bac59b6b583f36f91362b0bc191",
    "item_sha256": "5d87f7efa4413b929d91313658c2fc460b2bf2a3d36f7883a84dbc0c6a127cee",
    "at": "2026-09-22T00:28:41.911Z"
  },
  {
    "id": "lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The claimed E1 pairing is not natural in arbitrary cellular maps with independently chosen diagonal approximations: such maps need not commute with the chosen approximations. Step 2.1 simply asserts this from naturality, which does not license it.",
    "context_sha256": "c9e8fd1492ed6b1d7167eab287e64dacdb5e60cf248f6b34f4257f3c726e3e77",
    "item_sha256": "c45ae65eec9735ac478a46519399c81de14821a53589b66a1bdca71a5225d51a",
    "at": "2026-09-22T00:28:49.933Z"
  },
  {
    "id": "lem-universal-oriented-sphere-bundle-has-bso-n-minus-one-total-space",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The title falsely says BSO(n-1) is the total space. The proof establishes only a homotopy equivalence r:S_n≃B_{n-1}, and explicitly denies a literal Grassmannian replacement; thus the title overclaims.",
    "context_sha256": "12c3513ef2d46bd6a5b26832be98d0301e54954bc58523d1f049995478530c85",
    "item_sha256": "75de213dfc84b73dd777c7196770b6ce96d56e94b868f009d4cb69bc217e44f8",
    "at": "2026-09-22T00:31:47.777Z"
  },
  {
    "id": "thm-first-chern-class-classifies-complex-line-bundles",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The title overclaims: proof and statement cover only numerable line bundles on the specified CW/CW-type bases, not complex line bundles in general. The supplied classifier expressly excludes nonnumerable bundles.",
    "context_sha256": "b7c7ca2e4ddb030c24efeaf31dcca45b0e51dfe4745d2c70dc967b908d62b63e",
    "item_sha256": "53184a15c4d80495922a440c73790cea3430a35e2c89629c1ccf266d3afb1e08",
    "at": "2026-09-22T00:32:08.175Z"
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
