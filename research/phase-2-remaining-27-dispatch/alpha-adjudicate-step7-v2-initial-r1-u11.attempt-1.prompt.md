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
label: step7-v2-initial-r1-u11
covers: 11
output: research/phase-2-remaining-27-step7-v2/step7-v2-initial-r1-u11.json

# Step 7 adjudicate: initial, round 1, unit 11

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/initial-1.json.

Write only your assigned item files, genuinely required new prerequisite items, their owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/step7-v2-initial-r1-u11.json.

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
    "id": "prop-killing-form-orthogonality-of-root-spaces",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 2.1 relies on \\(\\mathfrak h=\\mathfrak g_0\\), but no cited fact establishes this (or even \\(\\mathfrak h\\subseteq\\mathfrak g_0\\)). The supplied root-space decomposition only splits off \\(\\mathfrak h\\); it does not identify it with the zero root space.",
    "context_sha256": "029acbc3ca2d42a08ac71093a898e813323cb5e5ff1bb2cf4fb70d6b2a27b8b3",
    "item_sha256": "0281b719396626400329c674850bff347b3439359d7987d39a15724aa795d9a2",
    "at": "2026-09-21T13:12:43.914Z"
  },
  {
    "id": "thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The title’s root-system conclusion is not established: (i)–(v) concern roots in complex h* but provide neither a real Euclidean ambient space nor a positive-definite form, required by the usual reduced crystallographic root-system axioms. The disclaimer cannot narrow the title.",
    "context_sha256": "ce3b377b403a797bfef755ee87e81a1f517c5dc868dd8b49f9d7eab3a8262fee",
    "item_sha256": "02c81776b44f5c216cb3db1e7210b8389eabebefdd5932abb74b29d8c941f4fa",
    "at": "2026-09-21T13:13:16.078Z"
  },
  {
    "id": "prop-centralizer-dimension-from-vanishing-roots",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "L1 restates the cited root-space decomposition without its explicit Axiom of Choice hypothesis. The proposition supplies no AC assumption, so its use of that dependency is not licensed under the given interface.",
    "context_sha256": "886b0b218ad2194645f11d09e8ce6b571187494ce7e0471f1be1c62f74568f95",
    "item_sha256": "e2e54c5c8fa1782eaff209a96a279f8b8ca8cb733c24f8a3ccca6bedc04f6dc3",
    "at": "2026-09-21T13:13:22.821Z"
  },
  {
    "id": "def-regular-root-hyperplanes",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "It restates the root set as finite using the cited theorem but omits that theorem’s explicit Axiom of Choice hypothesis; the supplied interface therefore does not license this unconditional assertion.",
    "context_sha256": "89dc1e8481c1ad812c6220210703a417acd5896faab8807edeb02d95add1c347",
    "item_sha256": "e406cba9de7ed18b3962acf37695cdb5229742124c8380821814c358336e4ae8",
    "at": "2026-09-21T13:13:25.131Z"
  },
  {
    "id": "prop-the-center-is-the-common-kernel-of-all-roots-inside-the-cartan-subalgebra",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The proof invokes [L1] and [L2] from the cited theorems, each explicitly assuming the Axiom of Choice, but the proposition's Statement/Facts assume no AC. Thus its cited dependencies do not license those steps under the stated hypotheses.",
    "context_sha256": "eba80ed2872145e468a435cc19c14f62fe8900129935e5b8091ae4315a61f9dd",
    "item_sha256": "c111c8be7d5ef5d40f53205afa9cdd5a34be72dcad5b07d90f6c21a1b8518364",
    "at": "2026-09-21T13:13:34.994Z"
  },
  {
    "id": "cex-a-maximal-abelian-subalgebra-that-is-not-a-cartan-subalgebra-in-a-nonsemisimple-algebra",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The title and step 3 call the displayed Lie algebra nonsemisimple, but the proof never establishes this (nor supplies a semisimplicity definition or dependency). Thus it asserts more than the proof proves, despite the maximal-abelian/Cartan calculations being correct.",
    "context_sha256": "36a327998af29c4360a00a2f60ec644389761e5fba28a3b507c0be7baa087c77",
    "item_sha256": "e7fab539189922bf31398464961ae0787e440b5cafcde0eae371925d6249d570",
    "at": "2026-09-21T13:13:55.397Z"
  },
  {
    "id": "def-cartan-matrix-of-a-based-root-system",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "It falsely calls a_ij an eigenvalue by which α_j is multiplied under s_{α_i}. In general s_{α_i}(α_j)=α_j−a_ijα_i is not a scalar multiple of α_j; a_ij is the coefficient of α_i.",
    "context_sha256": "d043b0de64d75178f5dea7b7fb279e84759f776381b400702a1d9762ff786f7b",
    "item_sha256": "d927128adf3b10b3a384ff98a77bc0439d70fdbbe4628c7ebe77dd6d22525867",
    "at": "2026-09-21T13:14:15.467Z"
  },
  {
    "id": "ex-cartan-subalgebras-of-a-direct-sum",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The needed claim that rad(g1⊕g2)=rad(g1)⊕rad(g2) is not supplied by either cited definition/interface. Thus semisimplicity of g is unlicensed, yet is required to apply the Cartan/maximal-toral theorem in step 1.2.",
    "context_sha256": "72b2234516d5db4c0466fe293d1a2ee621416e28bbfd40550e3e00d9d0a058e2",
    "item_sha256": "7f1d1c2408219e4a3adc46be42f54f7833b820b0948f4a5fb4b780c6e4c27edb",
    "at": "2026-09-21T13:14:43.679Z"
  },
  {
    "id": "prop-duality-exchanges-b-n-and-c-n-and-fixes-the-other-types",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "L2 inaccurately treats the coroots as a base of the dual system: the cited interfaces only give a vector-space basis and define Cartan matrices for a root-system base. The proof never establishes that Δ∨ is a base, so 1.2’s dual Cartan matrix/diagram claim is not licensed.",
    "context_sha256": "99ae928f71dbbf678f2e97061a6e541965bbae87f8c2c40a1b9455224cff8202",
    "item_sha256": "5b7f31506ad516ba1feacfb734d9a9c828e88811ad262972a3ba09245b6b8063",
    "at": "2026-09-21T13:15:02.770Z"
  },
  {
    "id": "prop-classical-matrix-lie-algebras-have-split-cartan-subalgebras",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The Statement reverses the dimensions: in the listed order, \\(\\mathfrak{sl}_n\\)'s diagonal Cartan is \\(\\mathbb C^{n-1}\\), while the symplectic/orthogonal cases give \\(\\mathbb C^n\\), not vice versa.",
    "context_sha256": "06c4e7039f6f9a9b83101ecd9e93b2d8481055d32b53ef07f6a893bc82072fbe",
    "item_sha256": "e15d052404c51a28a9b39083cb7e2ada4b7af1f0f5a418e562ac4730e57d20f6",
    "at": "2026-09-21T13:15:09.173Z"
  },
  {
    "id": "prop-dimensions-of-the-exceptional-simple-lie-algebras",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 1.1 needs \u0000dim h=rank(Phi) to use L1, but L2 only identifies dim h with rank(g); L3 supplies a root-system isomorphism, not equality of Lie-algebra rank with root-system rank. This unstated structural fact is essential.",
    "context_sha256": "bcb6704056589ce794e09f41684161ee1cb449b32d7f86bef563f9832a028c8c",
    "item_sha256": "0703fdfbe473d59d6a21214cb482319fc17d1f8892628f19807030ef865f6b59",
    "at": "2026-09-21T13:15:18.875Z"
  },
  {
    "id": "rem-dynkin-diagrams-do-not-classify-global-lie-groups",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "It overstates both cited classifications: the interfaces classify finite-dimensional complex simple/semisimple Lie algebras, but the remark omits “finite-dimensional,” thereby falsely suggesting Dynkin diagrams classify arbitrary complex simple or semisimple Lie algebras.",
    "context_sha256": "88165f391649392c58c56c938759364434d167483560c89f465ce5f25a315681",
    "item_sha256": "39600680dd25ec50edb04dbfee67a06168838ce555ae315690f4ad33b943a7ca",
    "at": "2026-09-21T13:15:20.882Z"
  },
  {
    "id": "fs-b-n-and-c-n-are-isomorphic-root-systems-for-all-n",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The proof establishes only n=2 among n≤2. It never proves B_1≅C_1 (nor cites the supplied classical-roots interface that states it), yet concludes the isomorphism holds exactly for n≤2.",
    "context_sha256": "758d08e75a5f3e686bfb17a03ec8f5088ba92ecc1b94f9c9fc6000ed38f8228d",
    "item_sha256": "ff374966b2fb75aa619c5a2c1f2101e6ba17706a6672fe11b63e61b7b51be927",
    "at": "2026-09-21T13:15:30.407Z"
  },
  {
    "id": "thm-cartan-killing-classification-of-complex-simple-lie-algebras",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[L2] inaccurately restates its dependency: the supplied theorem treats the empty rank-zero root system as irreducible under the local convention, whereas L2 says irreducible systems are exactly the displayed nonempty types.",
    "context_sha256": "06c451c262b94ddec13cf3bf530886cb8588e62281c80bb5ad4e5883fe14c3aa",
    "item_sha256": "2a2a8d5142e36860152063e94dd3fa909d7deb54d7e0243ef7c5c066e52969d4",
    "at": "2026-09-21T13:15:34.083Z"
  },
  {
    "id": "prop-root-systems-of-the-classical-complex-lie-algebras",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 5.1 is not licensed by L3: its supplied interface only asserts existence of some realizations of each type, not coordinate constructions or a proof identifying these listed sets with types A/B/C/D. Thus the asserted types do not follow from the cited dependency.",
    "context_sha256": "1203301d0333092939545120b493682e5b3610845e3bbda3d757c695e5b897e8",
    "item_sha256": "5ea180ae845c5c72a2185f51eb3fa25531bce798d9f1782a41af1b77063a64ab",
    "at": "2026-09-21T13:15:46.814Z"
  },
  {
    "id": "thm-isomorphism-theorem-for-complex-semisimple-lie-algebras",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "[L2] overstates the Serre theorem: its converse is conditional on chosen root sl_2 triples. No cited fact supplies existence of such triples, yet step 2.1 simply chooses them; thus the required isomorphisms are not licensed by the supplied dependencies.",
    "context_sha256": "ce451dce88a82c1c762b3d426e4d5c6ef558186102c2012d969db089edc7a3f3",
    "item_sha256": "e126f621f36501c5f51ca2e0c8caaa0331af73de26cdf87d36d546e499a8e18c",
    "at": "2026-09-21T13:15:47.310Z"
  },
  {
    "id": "cex-a-cycle-graph-fails-finite-type-positive-definiteness",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 2.1 invokes an unspecified “tree lemma” to assert the general exclusion of loops. No such dependency is supplied or proved, and the preceding cycle calculation does not establish that broader claim.",
    "context_sha256": "90ca703b4555af5227044eb75af02801eb787a522cb4920e53584a578084bc0a",
    "item_sha256": "c32e547e9210e7188516a82a7001b8000fa0620f898cf1338239a0c9153cbef7",
    "at": "2026-09-21T13:16:20.094Z"
  },
  {
    "id": "ex-positive-roots-and-highest-root-of-g-two",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "The stated model is in α,β, but step 1.1 silently replaces its generators by unrelated α₀,β₀. No hypothesis identifies them; indeed the displayed model has α+2β, while the claimed positive list has 2α+β. Thus the root conversion is unsupported.",
    "context_sha256": "532481e42a6b09ce42d206d855bf2dc41222853d2338743cf5a9bf6098ec4968",
    "item_sha256": "b605fed74a8a061a708213e49eef53c97621698f1ab0bc145ffa4ae3a3ae1098",
    "at": "2026-09-21T13:16:32.823Z"
  },
  {
    "id": "lem-dynkin-diagrams-of-irreducible-finite-root-systems-are-trees-with-controlled-branching",
    "model": "gpt-5.6-terra",
    "keep": false,
    "reason": "Step 1.4 assumes both arms have only simple edges (and uniform root lengths), but its hypothesis only says the path contains a double edge. Other multiple arm edges are excluded only later in 3.1, so its expansions and conclusion are unlicensed.",
    "context_sha256": "205c94600c2dc1518711bd666e98cb9827127e8e6d47916b1141e6f53458c256",
    "item_sha256": "625da9a28260b10ad837dd01e47113f2333b51f632be53890bf873b3c0679f15",
    "at": "2026-09-21T13:17:36.218Z"
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
