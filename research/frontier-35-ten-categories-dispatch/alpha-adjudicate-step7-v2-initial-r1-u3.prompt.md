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
label: step7-v2-initial-r1-u3
covers: 3
output: research/frontier-35-ten-categories-step7-v2/step7-v2-initial-r1-u3.json

# Step 7 adjudicate: initial, round 1, unit 3

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-35-ten-categories-step7-v2/initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-35-ten-categories-step7-v2/step7-v2-initial-r1-u3.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned frozen-frontier items, including published items if they belong to that frontier. Outside consumers are handled separately by consumer maintenance, never by this repair/adjudication task. Record their affected uses; do not edit them, rejudge them, or treat outside findings as frontier gate blockers.

You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run:"frontier-35-ten-categories",phase:"initial",round:1,unit:"3",input_sha256:"6633f07f32d31f9c22bad6cbabdc3a480c1e46dea00812a35534131748b37a18",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-35-ten-categories --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. Downstream is an array of consumer IDs affected by a Statement/Definition change; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  {
    "id": "def-ag-separating-transcendence-basis",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Convention 1 incorrectly says the empty tuple is separating whenever K/k is algebraic. For k=F_p(u^p) and K=F_p(u), K/k is finite algebraic but purely inseparable, so the empty tuple is not separating.",
    "context_sha256": "e8a6a23dbd10735a8206f455cb5de2ff83f9f4841057eb143646e21b002e33ab",
    "item_sha256": "3327c1ed87d7fc6b72159e8cc19b4a7fe5abb9671a2dc2c5156e6c2e4d4a7412",
    "at": "2026-09-27T02:03:35.734Z"
  },
  {
    "id": "lem-ag-differentials-localization-base-change",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 2.1 wrongly identifies the map in (3), whose target is Ω_{C/A}, with the base-change isomorphism in (1), whose target is Ω_{C/A'}. Take A=B=ℤ and A'=C=ℤ[t]: the map in (3) has source 0 and nonzero target Ω_{ℤ[t]/ℤ}.",
    "context_sha256": "9fb6df8c4323c2eb3578d244155bf4fde48fcafd54d23c94d719e267296f1669",
    "item_sha256": "fea1c9fb7c47a0ec9fbdf6d1d6de9ae0c0197a02f9884efa71a274c5fc8741a2",
    "at": "2026-09-27T02:03:39.994Z"
  },
  {
    "id": "thm-ag-field-extension-of-schemes",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Clause 2 is false: take X=Spec Q and K=Q(√2). Even for the same affine cover, Spec K has two automorphisms over X: the identity and the one induced by √2↦−√2. Commuting with X does not make the comparison isomorphism unique.",
    "context_sha256": "e97a1fa87ac888c06796ac812174bc6656e680301ebee13c83360d6d4bcf07a3",
    "item_sha256": "e7eea7e83423b9a3940edcd2db40275d7ddaccc4aeefa9a4b04dc8ef9467ac72",
    "at": "2026-09-27T02:03:40.128Z"
  },
  {
    "id": "lem-ag-standard-smooth-flatness",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 1.5 falsely assumes every maximal ideal of S lies over the maximal ideal of local R. Take R=Z_(p) and S=R[1/p]=Q (standard smooth with n=c=0). Its maximal ideal (0) contracts to (0), so mT is not in the maximal ideal; the fibre prime in 1.6 does not exist.",
    "context_sha256": "ca7220823bac04e7228b12ebcb3093b88d0a2cd6bc341588a644ecc797c3624c",
    "item_sha256": "e6566e1fb1e75aa5281bd4b9b35fefe6407cd81c745f1d0de2f3f38913b6c221",
    "at": "2026-09-27T02:03:47.759Z"
  },
  {
    "id": "lem-ag-standard-smooth-regular-geometric-fibres",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 6.1 falsely claims F_K/P ≅ K[x_1,…,x_n]/Q′; it omits localization at g. For c=0, n=1, g=x, P=(0), it claims K[x,x⁻¹] ≅ K[x]. The component-dimension argument therefore does not follow as written.",
    "context_sha256": "864dfd0edbefd65f2e2856a2c94db2aa2cbeba4206410d16c1804b6ebba367ec",
    "item_sha256": "ce9ccd34ab78faec2a762d5bf26d916e5be572eecfaa7e89f960bf28eec18c10",
    "at": "2026-09-27T02:03:49.911Z"
  },
  {
    "id": "def-ag-geometrically-regular-algebra-and-fibre",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The page promise is false as cited: [[def-ag-standard-smooth-algebra]] only defines standard smooth presentations and local standard smoothness. It does not prove the claimed equivalence between geometric regularity and smoothness.",
    "context_sha256": "09f1811b8162ac00276ce5d3984322f00641ef1c88a39ee12294724bcac59305",
    "item_sha256": "6e10b3c4e650d07625f0453d052f57154995d2271e88b1b97eb9ceec6683f49f",
    "at": "2026-09-27T02:03:55.931Z"
  },
  {
    "id": "ex-ag-separable-and-inseparable-field-differentials",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F6] inaccurately restates the cited binomial theorem as a result for every commutative ring. Its interface explicitly states the theorem only for ℝ and reserves the ring version for a separate statement. Step 1.2 relies on that unsupported restatement.",
    "context_sha256": "e67330a4a876f6a01c67d015784ffa5575814ce38806a1386e0d762d3cb5d407",
    "item_sha256": "1adaff7ac8d205d8c0125337e5545c84e3f01114df7389cd7b0633fd12fbe8e9",
    "at": "2026-09-27T02:04:01.143Z"
  },
  {
    "id": "cex-ag-regular-factors-product-not-regular",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F2] attributes the binomial theorem for every commutative ring to [[thm-binomial-theorem]], whose interface explicitly states it only for ℝ and says the ring version is a separate statement. Step 3.1 relies on that inaccurate restatement.",
    "context_sha256": "5b6143ff2cb68f889bbe03dfe9bff59bbf8c4114a8223190e9c81fed4719acc2",
    "item_sha256": "87391bb3d756c5c83a618ce875426d2966314b4fefb00c0ca6dd3564f353c6a4",
    "at": "2026-09-27T02:04:05.478Z"
  },
  {
    "id": "thm-ag-standard-smooth-geometric-regularity",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F1] inaccurately restates its dependency: standard smooth at a prime is defined only for finitely presented R-algebras, not merely through the separate definition of geometric regularity of a fibre.",
    "context_sha256": "0d9fc82a8bf611a47550a72b243027386ac3f72a92db6db241b671187ccd0320",
    "item_sha256": "243480a71428e7263836655f6ddd05cdcbaf2496f88b0e47ff0e02196137b81c",
    "at": "2026-09-27T02:04:06.702Z"
  },
  {
    "id": "thm-ag-standard-smooth-base-change-composition",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "F1 inaccurately omits the definition’s requirement that R→S be finitely presented before it can be standard smooth at a prime. For S=k×k[x_1,x_2,…], S_(1,0)≅k is standard smooth over k, but S is not finitely presented over k.",
    "context_sha256": "9cfab236f012d9c865661543c1c37cf8d8b16ecd3be503e3935f0a3d4bbd5e26",
    "item_sha256": "891437472c9d5e4748bf42e3cf0ce4cebdba1ddf24ad06c4109d63fa38d2d0a1",
    "at": "2026-09-27T02:04:09.493Z"
  },
  {
    "id": "lem-ag-local-flatness-regular-parameters",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 2.1 applies F1 to 0→N′→N→κ→0 in Tor’s first (right-module) variable. F1 supplies a long exact sequence only in the second (left-module) variable; F11–F12 do not establish symmetry between variables. The induction’s Tor vanishing is unproved.",
    "context_sha256": "d55c9ffba841c7c0b29abe05b4800b5ce493c95b138db534e9bf26555b2a58ab",
    "item_sha256": "8da0963382e4b7d098efaf468291ec6d9cdecc3203ad4e06dd5ed2ac192758c9",
    "at": "2026-09-27T02:04:12.196Z"
  },
  {
    "id": "lem-ag-flat-local-regularity-ascent-descent",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 2.1 applies F5 without establishing that the parameters are R-regular. F2 only says they generate the maximal ideal; F5 preserves an already regular sequence. The proof needs the regular-sequence assertion in F17.",
    "context_sha256": "e7f024ac074e9e1292c0d6710117b3655cb9bf4d536c696b4d8e6e3db8402729",
    "item_sha256": "e5733a9b9ef61652bd22c61ceb11781b7a225e154d27dfad99bac63267c55582",
    "at": "2026-09-27T02:04:13.712Z"
  },
  {
    "id": "ex-ag-field-change-inseparable-thickening",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F2] misstates its cited dependency: the supplied binomial theorem is only over ℝ and explicitly says the commutative-ring version is a separate statement. Step 2.1 relies on that unsupported restatement in L[T].",
    "context_sha256": "022406b43446688cd4df552fe00d25ffd72d4fcdb1ca0772b5f6f43ea55d40bc",
    "item_sha256": "da82318b471b9b0cfb7227d0fa89daae40f6af333d6ca19def07ef9baa6f9f8e",
    "at": "2026-09-27T02:04:14.486Z"
  },
  {
    "id": "thm-ag-submersion-criterion-standard-smooth",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The statement assumes f is a finite-type morphism, then claims it “need not be finite type at other points.” Finite type is a global property and implies locally finite type at every point, so this assertion contradicts the hypothesis.",
    "context_sha256": "4bd1db844b6a76530630ef40b01ea947778d5b808a339158f64dd61d1a03a158",
    "item_sha256": "9b57a09edae8d07d62335fb72770b277e8c3e65c27ce91f400d759c6656f7cb8",
    "at": "2026-09-27T02:04:33.272Z"
  },
  {
    "id": "thm-ag-separating-transcendence-basis-perfect-field",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 4.1 misuses [F11]: irreducibility and P(x_j)=0 show only that P is a nonzero scalar multiple of the monic minimal polynomial. F need not be monic in X_j, so the asserted equality is false.",
    "context_sha256": "92a7549a00233d6e7ec784a91bd202d94541c90ad2115e7cbec26e9cdc18f98e",
    "item_sha256": "c9facb9d389f23604d866ce826bb61f04bc94518e959ad2e1c0af34dac55b1ca",
    "at": "2026-09-27T02:04:39.551Z"
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
