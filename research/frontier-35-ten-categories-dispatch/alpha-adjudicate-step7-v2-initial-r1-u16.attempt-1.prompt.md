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
label: step7-v2-initial-r1-u16
covers: 16
output: research/frontier-35-ten-categories-step7-v2/step7-v2-initial-r1-u16.json

# Step 7 adjudicate: initial, round 1, unit 16

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-35-ten-categories-step7-v2/initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-35-ten-categories-step7-v2/step7-v2-initial-r1-u16.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned frozen-frontier items, including published items if they belong to that frontier. Outside consumers are handled separately by consumer maintenance, never by this repair/adjudication task. Record their affected uses; do not edit them, rejudge them, or treat outside findings as frontier gate blockers.

You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run:"frontier-35-ten-categories",phase:"initial",round:1,unit:"16",input_sha256:"6633f07f32d31f9c22bad6cbabdc3a480c1e46dea00812a35534131748b37a18",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-35-ten-categories --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. Downstream is an array of consumer IDs affected by a Statement/Definition change; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  {
    "id": "lem-forgetting-configuration-points-is-locally-trivial",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[L5] falsely restates the pasting lemma: continuous formulas on an open set and its closed complement need not paste continuously (take 0 on (0,∞), 1 on (−∞,0]). Step 4.1 also calls M\\cl(S_j) closed and uses pieces that omit ∂S_j.",
    "context_sha256": "9e877593a647f5d98cb8bd05603eef4311dd5481d3ca55df1fff3b90d25de11a",
    "item_sha256": "3e115c47fb92481b5cf7224b4303f54774284332d74a24ac4b28d82cd75d668a",
    "at": "2026-09-27T02:15:01.299Z"
  },
  {
    "id": "def-unordered-configuration-space",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The subset-bijection argument reverses the permutation. If y_i=x_{σ(i)}, the stated action sends x to y using σ^{-1}, not σ. For x=(a,b,c), y=(b,c,a), the indicated 3-cycle sends x to (c,a,b), so the cited action does not justify that proof step.",
    "context_sha256": "54c3a641a3173520c5e8c8cabcc483ff1f4367944e2679cca388a33e8f0013d4",
    "item_sha256": "6817e8e7c45af3dbdf956039cfa8d28d18326fc75ec54bbafaaa5874413b70ac",
    "at": "2026-09-27T02:15:09.020Z"
  },
  {
    "id": "ex-the-two-point-unordered-cover-and-its-monodromy",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The cited definition of σ_α applies to loops in C_n(D²) based at configurations in the disk. Here q is arbitrary in F₂(ℂ) and α lies in C₂(ℂ), so claim 3’s appeal to that definition is ill-typed.",
    "context_sha256": "f06ebec1b205d3712743a94cb2c3c3954ea092d8884013974c4e6e032f8eb611",
    "item_sha256": "217827308a5e218175fc9992f9db61458d22469489053b217e732bc504061934",
    "at": "2026-09-27T02:15:12.574Z"
  },
  {
    "id": "def-path-ring-of-a-finite-quiver-over-the-integers",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The definition allows parallel arrows but records paths only as vertex sequences. Two distinct arrows u→v both become (u|v), so the resulting free abelian group loses a path generator and is not the path ring of the stated quiver.",
    "context_sha256": "f8a8d12299dbbc2de67ef543f8731793cd31c8ad965dba410a8cb4e4b8a40554",
    "item_sha256": "6a02970323bf1a2ee4d950db12557af41c01c53b399b2151af37e254593ed182",
    "at": "2026-09-27T02:15:29.679Z"
  },
  {
    "id": "lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 4.2 falsely infers that equivariance makes ρ^F constant on quotient fibres. For n=2, (0,1) and (1,0) share a fibre, but their scaled ordered tuples differ. [L6] applies to p_int∘ρ^F, so the factorization argument is invalid as written.",
    "context_sha256": "f1cfa7012668b9b23079dba02ba8f884c4dd7dfced52cbb9dc8582d5131f95a0",
    "item_sha256": "affdc33f98d4462462937b6cfb522cf20ba6ef7fc14cacbfd3625f6e5d1ee5d2",
    "at": "2026-09-27T02:15:40.393Z"
  },
  {
    "id": "def-graded-khovanov-seidel-module-category-and-projectives",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[L3] misstates the cited path basis: it lists returns (i|i+1|i) for 1≤i≤m, while the dependency lists (i|i−1|i). At i=m, the stated path uses the nonexistent vertex m+1.",
    "context_sha256": "f84a2ef8290114809b51c70825423a28dca9f2508b702920de303eae9810381b",
    "item_sha256": "7f6f69aa57ebffd2c949f2ee17d453c974a0d8a5cc72cb5d4754f5077494fb5b",
    "at": "2026-09-27T02:15:47.347Z"
  },
  {
    "id": "def-vertex-khovanov-seidel-modules",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F1] misstates the defining relations: the monotone paths should be (i−1|i|i+1) and its reverse for 0<i<m. Its shifted indices omit (0|1|2) and, for m=2, invoke nonexistent vertex 3.",
    "context_sha256": "18ef4307129d352eae4609e489a610ac2589d3ac3a42c5e08236db9c3e623f19",
    "item_sha256": "3f7ab3c8dbdc0bd1c524cdd4ba1d2ef2d7ed089a792a9da8ae1768391ea0b4e9",
    "at": "2026-09-27T02:15:48.957Z"
  },
  {
    "id": "ex-a-simple-module-projective-resolution-for-a-two",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[L4] inaccurately restates the dependency: right multiplication by an arbitrary path need not have degree zero. For example, multiplying e₁∈P₁ by the descending arrow (1|0) sends degree 0 to degree 1. Only multiplication by degree-zero paths gives degree-zero maps.",
    "context_sha256": "9a57daa681cf72eaebfcfdde6ca24be4a1c9a2d655335b410fb39cc70ac83014",
    "item_sha256": "25e5d8f72f1301cf66499dcbc47f825ef4b8bd1ac0da31c03a34447bd857087b",
    "at": "2026-09-27T02:15:49.068Z"
  },
  {
    "id": "lem-the-khovanov-seidel-algebra-has-the-four-m-plus-one-path-basis",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 2.3 falsely says every length-two product a₀s₀b₀ that is nonzero in the path ring must be a return. For m=2, (0)(u₀u₁)(2)=(0|1|2) is a nonzero monotone path. The case analysis used to show ρ vanishes on Iₘ is invalid.",
    "context_sha256": "e77656fbf51bb44903b533226f9e202865cfebbd8b0b298e239eb18c9de9370d",
    "item_sha256": "02d5bbe35d2053f858cf7d38760233a1a80d7065ddf9d65a582a2e7356390e29",
    "at": "2026-09-27T02:15:57.556Z"
  },
  {
    "id": "def-signed-totalization-of-graded-a-m-bimodule-actions",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 4.3 miscalculates Hd. Its d_R term should have coefficient (-1)^{p+1}, but the displayed coefficient is (-1)^p(-1)^{p+1}. For odd p, the displayed dH and Hd terms add instead of cancel, so the homotopy claim does not follow as written.",
    "context_sha256": "d5bfb02e054fe165ed5ce177416a892cc2aaf3e971d45c5e062b2890a3a8914b",
    "item_sha256": "d02f2f55f771add73215bf446775a628871b84a2b13fc876a476dbd857b5e2aa",
    "at": "2026-09-27T02:16:00.096Z"
  },
  {
    "id": "lem-simple-khovanov-seidel-modules-have-explicit-finite-projective-resolutions",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The boundary maps are ill-typed. For m=1, i=0, v_{0,0} is declared P_0→C_{0,-1}=0, but its formula sends e_0 to e_0(0|1)=(0|1)≠0. The stated zero-map convention covers maps out of zero modules, not maps into them.",
    "context_sha256": "6d3a6c8c4635290799c067761844cbeb4aca3677dd9ef4d24d3bdba711f4dbe6",
    "item_sha256": "8a2472ea54ba9381e477910757a7fda2f45a4d60e4302456f74b41356aaeced6",
    "at": "2026-09-27T02:16:02.626Z"
  },
  {
    "id": "cex-internal-and-homological-shifts-are-not-interchangeable",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "L3 incorrectly says M and M{r} are isomorphic as graded abelian groups. The shift reindexes degrees: P_i has a nonzero degree-0 piece, while P_i{1} has none. The cited definition gives an inverse shift, not a degree-preserving isomorphism.",
    "context_sha256": "e72837b2dd164215b7e2ae6ef6e38c5ced5f7b51cbaa28106e6addf6a0cabea3",
    "item_sha256": "5e6a6a84f2570209d91e3e777288a7341225622fcd5077bacd1a635d5e5f94e5",
    "at": "2026-09-27T02:16:05.250Z"
  },
  {
    "id": "def-two-sided-projective-khovanov-seidel-bimodule-functors",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 2.1 confuses internal degree with vertex index: it asserts A₁P₁⊆P₂. For m≥2, the nonzero degree-one return r=(1|0|1) satisfies r·e₁=r∈P₁, while r∉P₂. The asserted inclusion used to justify grading is false.",
    "context_sha256": "7d1644e98a5e567f47c6fcda73d0ea5d73dff9ae100fe64510aaa175e863014c",
    "item_sha256": "b53b10ba04128a1c2754c24ee06d72369d4b742be405b74fc36e30fcb1eb414b",
    "at": "2026-09-27T02:16:07.376Z"
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
