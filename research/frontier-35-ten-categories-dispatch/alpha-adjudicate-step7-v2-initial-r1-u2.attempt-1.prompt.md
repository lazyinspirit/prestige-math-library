# Step 7 batch adjudicator

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md and the generated task fully.
You are the Astra medium adjudicator for one batch in 7.1 or 7.5. The task binds
the run, phase, round, exact rejected carriers, ownership and result schema.
Do not substitute historical tasks or receipts.

Adjudicate and repair only assigned draft items in the frozen frontier at
`research/frontier-35-ten-categories-step7-v2/frontier.json`. Published repairs have no adjudication,
rejudge or item-gate obligation. Outside consumers belong to separate
maintenance, never Step-7 repair, adjudication, rejudgment or item gates.

Logical validity is the ground truth. Independently inspect each rejected
statement, proof, definitions, actual prerequisites, contract and page interface.
A judge rejection, source or earlier acceptance can be mistaken. Be honest
about uncertainty; when unsure, read complete relevant arguments in authoritative
sources and check their hypotheses and reasoning. Record what sources actually
establish. Never invent source reading, familiarity, confidence or checks.

Cover every assigned rejected tuple, including multiple rows for one item.
Record confirmed fatal/nonfatal defects, false positives and unresolved
uncertainty using concrete mathematical evidence. Repair all confirmed defects
in assigned items and necessary local metadata. Fatal classification controls
only convergence; a sound item requires no cosmetic edit. Make the smallest
logically sufficient repair, preserve the content contract, Foundations boundary
and actual AC requirements, and never weaken claims merely to clear a check.
Unresolved mathematics blocks closure.

You may fully author a new item only for a genuine unmet prerequisite of an
assigned frontier repair. Identify the missing claim, consuming proof step and
why existing suppliers do not suffice. State exact hypotheses, dependencies
and source evidence, and fully author the definition/proof. Choose a unique ID
after checking existing IDs, aliases and active assignments. Register its
index/registry, page, manifest and contract through the task's integration path;
shared edits use the short `tools/step7-shared-write-lock.mjs` acquire/reread/
edit/check/release protocol. Never hold that lock during research or waiting.
Include creation evidence in the result. Additions preserve author-origin and
certification integrity without enlarging the frozen frontier or entering its
Step-7 rejudgment/gate loops. 7.9 permits no additions.

Downstream work follows only a change to the original `## Statement` or
`## Definition`, including lemma and corollary statements. Compare directly;
do not use a semantic classifier. Proof-only, citation, dependency and metadata
edits do not propagate. New prerequisites count as new interfaces.
Inspect direct dependencies, references and actual proof/page uses. Record
exact affected clauses and paths, explain why an unchanged consumer remains
sound, and propose only necessary minimal repairs. A candidate is not
automatically defective. Continue another hop only if a necessary consumer
repair changes its own Statement/Definition; never pre-expand a transitive
closure through unchanged statements.

Report discoveries outside your lane or frontier without editing their items.
Published repairs, including published IDs in the frozen frontier, do not enter
this adjudication, a rejudge queue, or an item gate. Record the finding for
maintenance and trace any changed Statement or Definition to direct consumers.
The engine routes frontier effects to three parallel disjoint frontier owner
lanes. After frontier writers drain, separate maintenance uses three disjoint
lanes for outside consumers. Maintenance reports bind exact snippets and
`affected_use`, `invalidated_claim`, `minimality` evidence; this accounting
does not replace mathematical reasoning. Each supplier-interface event and
outside consumer is handled once, without Step-7 gate/context requeues.
Every necessary maintenance statement change, published or draft, propagates
another direct hop; frontier targets return to ordinary owner work.
Complete required frontier work and separate maintenance before certification.

Run focused checks and report their actual results. Update only assigned files
and evidence; use the task's integration path for shared ledgers. The canonical
published-consumer ledger holds mathematical findings and audit status;
operational history belongs in run records. Preserve original round evidence.

Return the generated schema:
`{run, phase, round, unit, input_sha256, decisions:[], reviews:[], downstream:[]}`.
Copy the exact identity and input hash from the task. Each rejected tuple needs
`id`, `model`, `context_sha256`, `outcome` (`confirmed_fatal`,
`confirmed_nonfatal` or `false_positive`), `reason`, `uncertain:false`,
`source_urls` and `familiar`. A confirmed fatal also requires `defect_type`:
`logic`, `dependency_citation` or `other`, justified by the actual finding.
Never guess a category for historical evidence.

Every assigned item needs a review with `id`, `disposition` (`repaired` or
`unaffected`), current itemHashGuard as `post_sha256`,
`review_context_sha256`, and the same evidence fields. Reasons contain at
least 40 characters of actual mathematical explanation. An unchanged item
guard requires `unaffected`; explain contract/page-only repairs and record
`metadata_repair_only:true`. Immediately after each review, before another
supplier edit, run
`node tools/step7-workflow.mjs review-contexts --run RUN --items ID` and copy both
hashes. Stable batches may use comma-separated IDs. Never refresh a review hash
without examining new effects; retain its original hash if suppliers change.

`downstream` lists affected item IDs. When unfamiliar, give authoritative URLs
actually consulted. Unresolved uncertainty is a blocker, never a false
confidence statement. Empty assignments return empty arrays. Do not claim
independent review of your own repair.

Do not write judgments, stamps, central certificates or round state, and do not
launch workers or another cycle. The engine collects evidence, completes
frontier repair and separate maintenance, and certifies once after all writers
drain. A successful dispatch alone does not close unfinished work. Repeated
pending work at an earlier assigned content state holds for operator resolution.

Sol high rejudgment and renewed frontier adjudication/owner repair/certification
repeat until unique fatal original-frontier items in the latest round are
strictly below 5% of the immutable original scope. The threshold permits the
final scoped gate, never unresolved defects, uncertainty or incomplete closure.


---

# This dispatch

run: frontier-35-ten-categories
role: alpha-adjudicate
label: step7-v2-initial-r1-u2
covers: 2
output: research/frontier-35-ten-categories-step7-v2/step7-v2-initial-r1-u2.json

# Step 7 adjudicate: initial, round 1, unit 2

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-35-ten-categories-step7-v2/initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-35-ten-categories-step7-v2/step7-v2-initial-r1-u2.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned frozen-frontier items, including published items if they belong to that frontier. Outside consumers are handled separately by consumer maintenance, never by this repair/adjudication task. Record their affected uses; do not edit them, rejudge them, or treat outside findings as frontier gate blockers.

You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run:"frontier-35-ten-categories",phase:"initial",round:1,unit:"2",input_sha256:"6633f07f32d31f9c22bad6cbabdc3a480c1e46dea00812a35534131748b37a18",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-35-ten-categories --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. Downstream is an array of consumer IDs affected by a Statement/Definition change; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  {
    "id": "def-simple-homotopy-equivalence",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The dependency defines an elementary collapse as a formal cell-removal operation, not a continuous map. Thus a collapse cannot serve as one of the maps f_i in the defining composite, and its claimed role as a homotopy inverse is undefined.",
    "context_sha256": "93ad8f140c8e260595ddd853961f7e9dfc7667dd33d49e0c0704902e0aa6f8fd",
    "item_sha256": "557e3beb8edd9a004374d1c1faee4a0cc46daaceadc6671bc7f53be14bb1794a",
    "at": "2026-09-27T02:16:59.966Z"
  },
  {
    "id": "lem-parity-map-of-a-finite-contracted-complex-is-invertible",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 1.2 claims that id+s² has a class in K₁(R) without a finite-rank hypothesis. A bounded complex may have infinitely generated free terms, so that automorphism has no finite matrix and no K₁ class under the cited definition.",
    "context_sha256": "36e0cec254fdebd4ac3e99cf62f608b91f94916cd4abab26eea4cdd74955f8b5",
    "item_sha256": "42de03b34854cdbd0ec8cabcf49bd74214438ac0d116abf53b5e3d14dfe125dd",
    "at": "2026-09-27T02:17:23.993Z"
  },
  {
    "id": "ex-torsion-of-a-two-term-based-contractible-complex",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F1] inaccurately restates the dependency: the displayed vectors are right R-bases, not ℤ-bases. For the allowed ring R=ℤ/2ℤ, its rank-one free R-module has no ℤ-basis.",
    "context_sha256": "70dc2db37a7fdf26544b60f1b9feb6cfbbcbd10c226f3bd38f2f68bf19d275f1",
    "item_sha256": "54d34beb05d3acb4e58c899eb337f1d60991746a79e63f2e2a3ddfbf3be4e132",
    "at": "2026-09-27T02:17:24.308Z"
  },
  {
    "id": "lem-an-elementary-expansion-has-zero-whitehead-torsion",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 5.1 falsely concludes the mapping-cone torsion is zero in reduced K₁. Step 1.4 shows only that [±g] vanishes in Wh. For π=ℤ, a shifted choice of cell lift gives λ=t and cone torsion [t]≠0 in reduced K₁(ℤ[t,t⁻¹]).",
    "context_sha256": "c73ca4a969b41d46fd16dee41ed6758ffc71e5a835f47329b8e476894d656ff4",
    "item_sha256": "ee1b1027a1b7b353f31618f89db46ed0f983fd670eb98c512919199f858ba078",
    "at": "2026-09-27T02:17:27.268Z"
  },
  {
    "id": "lem-basis-change-and-direct-sum-formulas-for-chain-torsion",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Over a non-IBN ring with R≅R², take the two-term identity complexes R→R and R²→R². Both have defined torsion and are chain-isomorphic, but each u_n is a 2×1 matrix. Its class [u_n] in K₁(R) is undefined, so assertion 4 and proof step 1.3 fail.",
    "context_sha256": "69c89e7869ea739b85d4009256bf776150acfed30b3fd4ceab99ed32183c551b",
    "item_sha256": "26319265c78b014553cee6b218aacde8951e8c0b8ceddee443a0f0c9ff2061d2",
    "at": "2026-09-27T02:17:41.472Z"
  },
  {
    "id": "lem-universal-cover-cellular-boundary-and-lifted-maps-are-right-group-ring-linear",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Clause 1 falsely calls every deck transformation an isomorphism of the based right Z[π]-chain complex. For nonabelian π, T_h(c·g)≠T_h(c)·g when h and g do not commute, so T_h is not a module map. Step 2.1 only proves an underlying abelian chain isomorphism.",
    "context_sha256": "826f13fda1ad78815b6eeaa00d0f61bc54b60a0c343e330ccbe8618b181137db",
    "item_sha256": "11744dcdc29956e6fdffffa50a80c3557bd663fb560019b660b46e750929bf4c",
    "at": "2026-09-27T02:17:44.588Z"
  },
  {
    "id": "lem-cell-trading-reduces-a-finite-relative-equivalence-to-two-high-cell-degrees",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 3.1 misuses F4: approximation relative to the bottom and sides requires those fixed maps to be cellular. A cell’s attaching map need only land in the lower skeleton and may send boundary vertices into open cells. The claimed cellular prism and dimension bound do not follow.",
    "context_sha256": "0effdfd110bdd3961251584178a6b3e63677e2352ebcf0ede13b630e6a60a97e",
    "item_sha256": "ff7360cfe92b32629580a71541f5fb51eef91f02406c3f488daa0492e1523283",
    "at": "2026-09-27T02:18:25.482Z"
  },
  {
    "id": "lem-an-identity-relative-boundary-matrix-allows-cell-cancellation",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 2.1 inaccurately attributes the attaching-map simplification to the cell-slides lemma. That dependency only realizes elementary matrix operations; it does not assert that null-homotopic lower attaching maps can be replaced by constant maps through finite elementary moves.",
    "context_sha256": "7c5a4f4809cd7b30137330717e7e80b68822a561a446094b679cba22be674502",
    "item_sha256": "be4a06f2d2a66c7eae6fce50eafd52938a1219ea1c298fee5cbaee6902df2809",
    "at": "2026-09-27T02:18:25.539Z"
  },
  {
    "id": "thm-simple-homotopy-equivalences-have-zero-whitehead-torsion",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "F4 inaccurately attributes τ(Cone(id_C))=0 and τ(id_X)=0 to the elementary-expansion lemma. Its supplied interface states neither result, yet steps 1.1, 1.3, and 2.1 rely on them.",
    "context_sha256": "444d69ba772e229c277afe5436f5f43c8a3e3447e5b6fece652a1331bc5cfcd2",
    "item_sha256": "22d8d898511ad9059f7a71e294a259fce323c7296832b7ba15d3b32f7fcba277",
    "at": "2026-09-27T02:23:00.044Z"
  },
  {
    "id": "lem-cell-slides-and-stabilizations-realize-elementary-group-ring-matrices",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 5.1 uses stable normality to treat A⁻¹PA as a product of elementary matrices at A’s original size. F5 licenses that only after possible stabilization. The cited upper-cell slides therefore do not establish the claimed operation A→PA.",
    "context_sha256": "b6743a3a9a4e98ae36e502f269800273a813952cb4f3c37dd6604b4d4d65d4c8",
    "item_sha256": "94244b69c4263cecc678d9bd78cbb80f24574b6401d4f596e6caa7cf4e8503a6",
    "at": "2026-09-27T02:23:01.521Z"
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
