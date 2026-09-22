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
label: step7-v2-initial-r1-u5
covers: 5
output: research/phase-2-remaining-27-step7-v2/step7-v2-initial-r1-u5.json

# Step 7 adjudicate: initial, round 1, unit 5

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/initial-1.json.

Write only your assigned item files, genuinely required new prerequisite items, their owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/step7-v2-initial-r1-u5.json.

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
    "id": "def-order-on-bounded-self-adjoint-operators",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The claimed companion counterexample is inconsistent with its supplied interface: [[cex-self-adjointness-cannot-be-dropped-from-the-order-calculus]] explicitly asserts that spectral nonnegativity implies quadratic-form nonnegativity for every bounded operator, the converse of thi",
    "context_sha256": "529c41f51a6220592297489166f81546e8cc2bbdcfde142266be14018c1498af",
    "item_sha256": "d6b34ca21d9fa9663faf63b4ec1d426c3228f057e14543ccba4991d9a3a95421",
    "at": "2026-09-21T12:52:18.389Z"
  },
  {
    "id": "thm-bounded-normal-operator-abstract-spectral-theorem",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 1.2 must establish that K=σ(T) is nonempty, but its cited A4 asserts only compactness. Thus the required existential over nonempty compact K does not follow from the stated facts, despite the underlying spectrum dependency containing nonemptiness.",
    "context_sha256": "5d34861e6d74d768acc608c1faa4eda84cca5a9348660c13a23aed7dd6b196e0",
    "item_sha256": "7d8f42b31cde4d3a80ee23af1eb06087772c0a8e20fdd127c96cb371dfafffe6",
    "at": "2026-09-21T12:53:01.840Z"
  },
  {
    "id": "ex-functional-calculus-for-a-diagonal-operator",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "A3 inaccurately restates the calculus property: without requiring a nonzero eigenvector (hence λ∈σ(T)), f(λ) need not be defined. The later application is valid, but the supplied local dependency restatement is ill-typed.",
    "context_sha256": "9e5dbce00c3f32ff2e5e2b3c130cae17fe9aaeb7723ac6b5ac9fbaa2da6b9779",
    "item_sha256": "70bcf84c2c13f0079488b4d37cae9c41c5efd2c40a885fe2935f89c939a4a7b7",
    "at": "2026-09-21T12:53:04.048Z"
  },
  {
    "id": "lem-polynomial-calculus-is-isometric-for-self-adjoint-operators",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 1.2 is not licensed by its citations: A1 gives only real spectral containment and A2 only spectral mapping. Neither establishes that sigma(T) is nonempty or compact. The proof labels this unsupported spectral-theory assertion as following from A1,A2.",
    "context_sha256": "03b8d21356697edbb518106d2cbccb55d5199fa21a1b07174ff3e3c28df1a9c8",
    "item_sha256": "ccdef75c57c422cef54af237aa8261fa4cf139cb51b68b6b82647373c61e304b",
    "at": "2026-09-21T12:53:04.897Z"
  },
  {
    "id": "thm-self-adjoint-norm-and-spectrum-extrema",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The statement omits T∈B(H), while the proof adds boundedness. For an unbounded self-adjoint operator (e.g. multiplication by x on L²(R)), the operator norm and spectral min/max need not exist.",
    "context_sha256": "e1a5d7a4450a2fa02a8454e48161a38477df1c95474422a8086130425b5f1cf1",
    "item_sha256": "896a0b749fb092ceb0a04f152f04bc96fefc5e866afc193fbc51998224e35c7b",
    "at": "2026-09-21T12:53:07.991Z"
  },
  {
    "id": "def-absolute-value-of-a-bounded-operator",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The norm identity uses |T| self-adjoint: ⟨|T|x,|T|x⟩=⟨|T|²x,x⟩. The cited square-root theorem supplies only positivity, while the supplied positivity interface explicitly says positivity implies self-adjointness only later. This step is unlicensed.",
    "context_sha256": "531566fa9d342b8a9d7bad0e882d4f5cea4d410bb9ae2831ab2fefb37b6a8f8f",
    "item_sha256": "0a34e6e4c88b3753863dc4bd95219defd9cce47d5cefa7c00ccf11b8464b96aa",
    "at": "2026-09-21T12:53:16.319Z"
  },
  {
    "id": "thm-continuous-functional-calculus-for-bounded-normal-operators",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "A1/1.1 claims σ(T) and Δ are nonempty compact Hausdorff, but its cited character-space lemma supplies only a homeomorphism and def-c-star gives none of those properties. Thus applying Stone–Weierstrass in 3.1 lacks a licensed compact domain.",
    "context_sha256": "e48b20f9c8eb13e2c2c9310f4274e9959795ec8b0b720739fb1a8a03b4414f55",
    "item_sha256": "26f9898dd1065ea5ed108b50abbe12ee7c7cc757cc3f9646fe4634f9433fd5fb",
    "at": "2026-09-21T12:53:17.120Z"
  },
  {
    "id": "thm-continuous-functional-calculus-properties",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "A1 falsely states f(T)=g(T) for self-adjoint T. The supplier says the normal and self-adjoint calculi agree, not that arbitrary functions have equal images; f=0 and g=1 give 0≠I.",
    "context_sha256": "b129513c181b01c0066be3cab90e0a55010519e111697bbce70fcd41201618e3",
    "item_sha256": "021ca65054cd162ce98eda7c5ff52f1abfd94e22579973ca2d93cb9e17a6a7bb",
    "at": "2026-09-21T12:53:17.274Z"
  },
  {
    "id": "thm-spectral-mapping-for-continuous-normal-functional-calculus",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "A7 is an inaccurate dependency restatement: its cited definition neither proves σ(cI)={c} nor says characters determine elements. The latter is false for general commutative algebras without semisimplicity.",
    "context_sha256": "046cdcc6153daa3ea7853070c2c91869bf200fe55f95a25d597ab1890538e152",
    "item_sha256": "8811a8b6e6f42266646f458d79d188fafde271d92b9abeda0b17ee7e77ba1d7a",
    "at": "2026-09-21T12:53:27.364Z"
  },
  {
    "id": "cex-self-adjointness-cannot-be-dropped-from-the-order-calculus",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 3.1 asserts that for self-adjoint operators spectral nonnegativity is equivalent to positivity, but its cited A1 and A4 only give definitions and Countable Choice. No cited fact licenses that substantive spectral-order equivalence.",
    "context_sha256": "0c2ee2fa731fd30b71a3b971758a127d5787feed1ebafa710c618735c27d0dd0",
    "item_sha256": "550fce447d4e34dae62cb0681addf62712f7361b9e50fc202d4d33143a4e518a",
    "at": "2026-09-21T12:54:10.700Z"
  },
  {
    "id": "def-cyclic-vector-and-cyclic-normal-operator",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "For x=0, H_x={0}; yet the item asserts f(T|_{H_x}) and that x is cyclic for this restriction. Its supplied functional calculus (and cyclicity definition) requires a nonzero Hilbert space, so these expressions are undefined in this edge case.",
    "context_sha256": "f47341d244e8ab368c253abcd3a568e42471cb7062d9ff636c72e6d545756b87",
    "item_sha256": "122dec380817d6ac8f49802358f07599d38b071bb79efd4162796b87f307b55a",
    "at": "2026-09-21T12:54:26.432Z"
  },
  {
    "id": "ex-borel-functional-calculus-defines-a-discontinuous-characteristic-function",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "A3 is not licensed by its cited interfaces: the L^p quotient, orthogonality, and Hilbert-space definitions do not establish indicator-multiplication range/kernel identities or closedness. Step 2.1 relies entirely on this unsupported local fact.",
    "context_sha256": "e761115cc258b70d57bff31e41c73a3767be41a13c89aa562e700a3f55b67f5b",
    "item_sha256": "f354e7511036bc817e27ead5d3ef4dec73c76f93a7baf6c9e2c967f079569f2a",
    "at": "2026-09-21T12:54:37.027Z"
  },
  {
    "id": "thm-borel-functional-calculus-for-bounded-normal-operators",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The proof is not a genuinely independent theorem proof: steps 1.2–2.1 reproduce the same scalar-measure commutation argument already recorded in the cited Borel-calculus definition, and the remaining clauses merely restate that definition's inherited properties.",
    "context_sha256": "96fec7a7b649224f929466ebc5e8f4e501990da46dc74624ef8877402ba8e8b0",
    "item_sha256": "020a6d6eaea91a4a7fc6b0aad315f356e1508a0bd08ebbfb864e4af408dfa42b",
    "at": "2026-09-21T12:54:38.061Z"
  },
  {
    "id": "rem-direct-integrals-and-general-multiplicity-theory",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The cited counterexample interface instead asserts that every bounded normal operator on a nonzero complex Hilbert space has a nonzero eigenvector. Thus the remark's claim that it exhibits a normal operator with no nonzero eigenspaces is an inaccurate dependency restatement.",
    "context_sha256": "38ac16f140c3746ec35505774f9872f23892c73030cf04e52f5e7ff44f4d67be",
    "item_sha256": "7f55a74280eed97a9aedf125fdaa92e06dd0fe31d9dd1bc40d7e2749a4d18618",
    "at": "2026-09-21T12:54:39.878Z"
  },
  {
    "id": "cex-continuous-functional-calculus-cannot-produce-every-spectral-projection",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 4.1 overgeneralizes falsely: a Borel set may have a discontinuous indicator yet yield a continuous-calculus value, e.g. E({0})=0 for M_x on Lebesgue L²([0,1]), and 0 is the value of the continuous zero function.",
    "context_sha256": "13a5bafa8af66c853599adbaa6ba1699a5564447234ad65ca0bfcfcad58008a0",
    "item_sha256": "54acca894918f2ff2511875c648b92298409869320d4fce86b4568bc726bd407",
    "at": "2026-09-21T12:55:02.432Z"
  },
  {
    "id": "ex-sign-and-positive-negative-parts-of-a-self-adjoint-operator",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The cited self-adjoint continuous-calculus interface does not assert σ(T)⊆ℝ. Thus the opening inference is unlicensed, and the subsequent real-valued functions and scalar identities on σ(T) are not justified from the supplied dependencies.",
    "context_sha256": "f8468370788bcc970d3f8f5551d89ff3f830d9281357793fa26ec64cf0c15556",
    "item_sha256": "f029cc6013b821cac947196851a9e35319d37f7f49b48a280170720d533546fe",
    "at": "2026-09-21T12:55:13.672Z"
  },
  {
    "id": "thm-unitary-equivalence-classified-by-measure-class-and-multiplicity",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "A4 is applied outside its interface: the lemma requires m,m':Λ→{1,2,…}∪{∞} everywhere, whereas the supplied definition permits m=0 on null sets and A1 only gives m≥1 a.e. No null-set modification is made before invoking it.",
    "context_sha256": "9ed48ff8df62623974889b0e53bed738e9a60cbbc7bf1f883b2ba0c67c6a6952",
    "item_sha256": "9daa222d5e7727159e5e53c5bb5aeb3fe85c87a54bd8167e787f4006596aba67",
    "at": "2026-09-21T12:55:36.431Z"
  },
  {
    "id": "thm-multiplication-operator-form-of-the-bounded-normal-spectral-theorem",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "A3 is not licensed by its citation: the cyclic-vector definition does not establish that the continuous functional calculus of T restricts to that of T|H_j. Thus 1.1’s essential conclusion H_{x_j}=H_j is unsupported.",
    "context_sha256": "1c572f7e2843b2249364c8d1e70a32918abf0ced5ec7ccd07a0a2f969578c598",
    "item_sha256": "5134c2005316f9836ff27c9033d17ce571f9d87baf3616b8efb8622ef984840e",
    "at": "2026-09-21T12:56:55.505Z"
  },
  {
    "id": "ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The title/conclusion calls λ an isolated eigenvalue, but the proof only assumes an isolated spectral point. It never proves E({λ})≠0 (hence ker(T−λI)≠0); that needs spectral-measure support or a nonzero-Riesz-projection result, neither cited.",
    "context_sha256": "efa633d7c5756c2aefca021511647f3bb1afbb3b54c6c18b95cf63e340cca0eb",
    "item_sha256": "e42381bf69f22e789ced29d48af8fb8b8ee1e9aba4a3cba21b97c835ac207fbc",
    "at": "2026-09-21T12:57:26.227Z"
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
