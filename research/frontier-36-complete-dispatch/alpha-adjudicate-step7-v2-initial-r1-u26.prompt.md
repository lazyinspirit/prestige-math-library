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
label: step7-v2-initial-r1-u26
covers: 26
output: research/frontier-36-complete-step7-v2/step7-v2-initial-r1-u26.json

# Step 7 adjudicate: initial, round 1, unit 26

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-36-complete-step7-v2/initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-36-complete-step7-v2/step7-v2-initial-r1-u26.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run:"frontier-36-complete",phase:"initial",round:1,unit:"26",input_sha256:"eb847670bab40a2439e5cdb871b71db529fdcd8349675a0f63eb1fb3e18045de",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-36-complete --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

Assigned item order: 0:lem-analytic-exhaustion-of-plane-domains, 0:ex-upper-half-plane-harmonic-measure-density, 2:def-green-function-plane-domain, 2:ex-annulus-harmonic-measure-of-boundary-circles, 3:thm-green-function-simply-connected-plane-domain, 3:thm-planar-green-kernel-conformal-covariance, 5:lem-analytic-boundary-green-corrector-is-smooth, 8:thm-green-function-harmonic-measure-representation.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  {
    "id": "lem-analytic-exhaustion-of-plane-domains",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F11] inaccurately restates the supplied implicit-function theorem: it gives a local zero-set graph, not that P>0 lies above it. For P(x,y)=-y, P>0 lies below y=0. Step 8.1 relies on this false sign claim.",
    "context_sha256": "66b4d0982d47619d1ec6feeaa9a9ed55bb361b8794f04bb679fddf9ae810b489",
    "item_sha256": "cafff3cda700008e5b4db4506f368b00f5054d99160a2629d96901a9dfd3cc65",
    "at": "2026-09-29T11:36:47.895Z"
  },
  {
    "id": "ex-upper-half-plane-harmonic-measure-density",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The choice-use claim is false for this proof: step 4.2 applies the locally uniform limit theorem [F6], whose supplied interface explicitly assumes ACω. Thus ACω is used beyond the improper-Riemann-to-Lebesgue passage, contrary to the statement and step 6.1.",
    "context_sha256": "fce23dddb8d73689dd42883439e201af7dde959d65222a8a2c321636948606a6",
    "item_sha256": "90360ded84c21174712a559682183e76951de8cd6d8853dc73fb3805f4d3e9aa",
    "at": "2026-09-29T11:36:55.086Z"
  },
  {
    "id": "def-green-function-plane-domain",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The remarks claim that an existence theorem, boundary-limit results, and the PDE normalization are proved later on this page, but the page ends without those proofs. The cited PDE dependency only defines the fundamental solution.",
    "context_sha256": "c751afee80804fcaa366827569f44924215af95f68c723eb7d3c42ea58a89eae",
    "item_sha256": "a200fbf13930f539bd1acab571a52b7dc6f4f9199b07016b3e1b6c938f21f4ac",
    "at": "2026-09-29T11:36:09.779Z"
  },
  {
    "id": "ex-annulus-harmonic-measure-of-boundary-circles",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The annulus definition allows R=∞, which satisfies 0<r<R. In that case A is unbounded, C_R is not a boundary circle, and log R is undefined. The statement needs R<∞.",
    "context_sha256": "36492eb39aa24fe4882d7298e4b89f973e2c7689f407db78ab2605171188643d",
    "item_sha256": "04b7ba7514412699afb3bd465d4c2ab0dbc1067ff077c7b9a8784346ecd50697",
    "at": "2026-09-29T11:36:52.360Z"
  },
  {
    "id": "thm-green-function-simply-connected-plane-domain",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F1] inaccurately restates [[def-green-function-plane-domain]]: a logarithmic-pole candidate is required to be nonnegative (u≥0), not strictly positive. Step 2.2 repeats this for an arbitrary candidate without establishing strict positivity.",
    "context_sha256": "e06753461c8aa968a2d986be2ed30ae3eae8d93846b40064a692b4ab0e3efbcf",
    "item_sha256": "510cdce90826c16fb79365c07b964ccb6a3b1038740c026b9aa4946c073040ae",
    "at": "2026-09-29T11:37:00.451Z"
  },
  {
    "id": "thm-planar-green-kernel-conformal-covariance",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F1] inaccurately restates the cited definition: a logarithmic-pole candidate is required to be nonnegative, not strictly positive. Step 2.1 likewise claims positivity from that definition, which supplies only nonnegativity.",
    "context_sha256": "524e8091c186e05b1dd0669b43298d9c046ba68628413ade5aeaa867d8198c02",
    "item_sha256": "034d9dea3ccf7327f4ea8fa05777f6608da4be60a91d3318416148edb42427e0",
    "at": "2026-09-29T11:36:34.007Z"
  },
  {
    "id": "lem-analytic-boundary-green-corrector-is-smooth",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F6] inaccurately restates the cited holomorphic-components theorem: it requires both components to be C². Step 2.1 uses the stronger claim to call the square-root real part harmonic without establishing that hypothesis.",
    "context_sha256": "16382a96840ddfb01a45aafe23b2790ab6bbf918e664ceb98023057410e2d020",
    "item_sha256": "1b955480a318955dace03834c16d9b735e4a64dfa5e73561179e1e1f4916c6a1",
    "at": "2026-09-29T11:36:40.740Z"
  },
  {
    "id": "thm-green-function-harmonic-measure-representation",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F12] misstates its dependency: it says the Perron corrector has zero boundary trace. The dependency gives zero trace to the Green kernel; the corrector’s trace is −log|ξ−a|, generally nonzero.",
    "context_sha256": "7ac967a2819731406ef980c34bc07e40bb84756d49f3e9583dbf697705b40da9",
    "item_sha256": "057da946e6c6adf952d99706c55bfa565d3442aaffbf3e1f7098c71bce46864c",
    "at": "2026-09-29T11:36:53.411Z"
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
