# Step 7 batch adjudicator

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md and the generated task fully.
You are the Astra medium adjudicator for one batch in 7.1 or 7.5. The task binds
the run, phase, round, exact rejected carriers, ownership and result schema.
Do not substitute historical tasks or receipts.

The task's rejected tuples are sorted by increasing in-run dependency level.
Adjudicate and repair lower-level items before higher-level items within your
assigned batch. Handle all rejected tuples for an item together.

Adjudicate and repair only assigned draft items in the frozen frontier at
`research/frontier-36-complete-step7-v2/frontier.json`. Published repairs have no adjudication,
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

run: frontier-36-complete
role: alpha-adjudicate
label: step7-v2-initial-r1-u30
covers: 30
output: research/frontier-36-complete-step7-v2/step7-v2-initial-r1-u30.json

# Step 7 adjudicate: initial, round 1, unit 30

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-36-complete-step7-v2/initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-36-complete-step7-v2/step7-v2-initial-r1-u30.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run:"frontier-36-complete",phase:"initial",round:1,unit:"30",input_sha256:"eb847670bab40a2439e5cdb871b71db529fdcd8349675a0f63eb1fb3e18045de",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-36-complete --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

Assigned item order: 4:lem-sobolev-pasting-across-an-overlap, 4:cex-w-one-p-point-evaluation-is-unbounded-in-the-subcritical-and-higher-dimensional-critical-cases, 4:ex-piecewise-c-one-functions-with-matching-traces, 4:ex-radial-power-membership-in-w-one-p, 5:cor-weak-derivative-operator-is-closed-between-lp-spaces, 5:lem-weak-lower-semicontinuity-of-the-sobolev-norm, 5:ex-absolute-value-has-dirac-second-distributional-derivative, 6:thm-acl-characterisation-of-w-one-p, 7:thm-sobolev-chain-rule-for-c-one-lipschitz-compositions, 9:ex-sobolev-truncations-preserve-zero-regions.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  {
    "id": "lem-sobolev-pasting-across-an-overlap",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F6] inaccurately says its cited interfaces supply finite additivity of the nonnegative integral. They supply the definition of integration over a set, monotonicity, and homogeneity only. Step 4.1 relies on the unsupported additivity claim for its norm bound.",
    "context_sha256": "267736bea0d7b879eb03bd64a31733c28c6b7948f39ea76969f19d4a9b16173c",
    "item_sha256": "464e351afb9baabc688acc660fa7a4bb696ff591273db1608a76182355bf0287",
    "at": "2026-09-29T11:23:25.712Z"
  },
  {
    "id": "cex-w-one-p-point-evaluation-is-unbounded-in-the-subcritical-and-higher-dimensional-critical-cases",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F2] misstates the Sobolev norm: the supplied interfaces index coordinates of ℝⁿ from 0 to n−1, but the item sums derivatives from 1 to n. Thus ∂ₙ and xₙ used in the proof are undefined, while ∂₀ is omitted from the norm estimates.",
    "context_sha256": "831423cd0421398aca4e4a42920264833ef4242a7d171d9b87ceabff35d480c2",
    "item_sha256": "35e99030a34ee27d8b95e1bc72d944d2cfe4f3f918f5108f2f9f44944f6d831c",
    "at": "2026-09-29T11:23:41.528Z"
  },
  {
    "id": "ex-piecewise-c-one-functions-with-matching-traces",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The item uses x_n, ∂_n and D_n for vectors in ℝ^n. The supplied Euclidean and multi-index interfaces index coordinates 0,…,n−1, so these expressions are undefined and the statement omits the 0th derivative.",
    "context_sha256": "a77daf18a064f5b4d29324e26a2b9b69c407854b21559839005c6f785f68b0a5",
    "item_sha256": "1b23d32c9c22857a001f8a2aa75e6ccc0aceeb194f232dac973814b83a3d7d69",
    "at": "2026-09-29T11:23:48.727Z"
  },
  {
    "id": "ex-radial-power-membership-in-w-one-p",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 3.3 sums derivatives from i=1 to n, but this library indexes coordinates of R^n by 0,...,n−1. D_n u is undefined and D_0 u is omitted, so the displayed bound does not establish the converse.",
    "context_sha256": "23210f0d6a0056e4fe78469f7fd307b1eb7e6a3e204356556cd6d8dbdbd7579e",
    "item_sha256": "fd3e243858189506cdb5fb17fd2fa13c9a3f064da16cd6cf01cb478655f7e231",
    "at": "2026-09-29T11:23:55.288Z"
  },
  {
    "id": "cor-weak-derivative-operator-is-closed-between-lp-spaces",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 2.2 defines w_j using 1/j. Library sequences are indexed by all of ℕ, including 0, so w_0 is undefined. The claimed sequence witnessing the p=∞ failure is therefore not defined.",
    "context_sha256": "3389e2e614ecce1b0fafa54033c4e12e1920fe242b0e022e27ffbe82c8cb56fe",
    "item_sha256": "38599f94b8d4d0114c673fde6bfea3d477fb3740441add3626aef849e3c58a1b",
    "at": "2026-09-29T11:23:13.092Z"
  },
  {
    "id": "lem-weak-lower-semicontinuity-of-the-sobolev-norm",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "F5 omits the Countable Choice hypothesis of both Sobolev dependencies, and step 3.1 falsely calls their normed-space structure choice-free. AC supplies Countable Choice here, but the dependency restatement and choice accounting are inaccurate.",
    "context_sha256": "d816cdd678db8ca8f9c51647fba53bf9b6475c9279b24978e760e9f1b7612367",
    "item_sha256": "106682e2448242f7c30ead69a08a61b18315fc3d45a8fc8333b18010d57b9e54",
    "at": "2026-09-29T11:23:09.567Z"
  },
  {
    "id": "ex-absolute-value-has-dirac-second-distributional-derivative",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 4.1 inaccurately restates its dependencies: it calls integration by parts [F4] choice-free and says Countable Choice is used only through [F1] and [F9], but the supplied [F4] interface explicitly assumes Countable Choice (as do [F6] and [F7]).",
    "context_sha256": "fe4068f15f07069c9248fa57858c7b84903aacd093a8665f48f14db8db619cba",
    "item_sha256": "363f1ad42ed9275eaf14f4b7afd229dab757c8100f3c0c714daf83da2ece166b",
    "at": "2026-09-29T11:23:24.073Z"
  },
  {
    "id": "thm-acl-characterisation-of-w-one-p",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F7] broadens its cited definition from nonnegative functions to arbitrary measurable functions. Step 1.2 then cites it for signed or complex integrals, which that interface does not define or license.",
    "context_sha256": "457f5634b1bb2c5d651a1cd24512a945307a64c85d75c312d6f9ee6b454a6b59",
    "item_sha256": "da8b2c83bdf316d503cfce99850a3c2e7b2c2afc6dea1d2934dc4e1e3d60f540",
    "at": "2026-09-29T11:23:53.029Z"
  },
  {
    "id": "thm-sobolev-chain-rule-for-c-one-lipschitz-compositions",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "F3 inaccurately attributes the definition of L^p as an almost-everywhere quotient to def-calligraphic-l-p-on-a-measure-space. That interface defines only the measurable-function space ℒ^p; the quotient is defined by F4.",
    "context_sha256": "3b85384c25a28de1a0cd96b986833bd5fa1517ce151fdaad40d738f5aa3b21fd",
    "item_sha256": "279ce9bba00dd9c74c3dc7ae121e78cdced39d34754e69738a8f349a83578e4b",
    "at": "2026-09-29T11:24:01.587Z"
  },
  {
    "id": "ex-sobolev-truncations-preserve-zero-regions",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The library indexes coordinates and basis vectors from 0. For n=1, x_1 and e_1 are undefined, so the stated function, gradient, and proof are ill-typed in a case the item explicitly includes.",
    "context_sha256": "3a92bed6e48ef125f44c1461e3da3e77856e656d5c93d974b115b9e8a764f092",
    "item_sha256": "48c3b17704880b8b041ed84a3288558269fd7d6a1450c47ae9e1a33bd41b00d1",
    "at": "2026-09-29T11:23:36.831Z"
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
