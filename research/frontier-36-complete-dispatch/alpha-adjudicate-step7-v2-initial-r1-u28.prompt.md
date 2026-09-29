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
label: step7-v2-initial-r1-u28
covers: 28
output: research/frontier-36-complete-step7-v2/step7-v2-initial-r1-u28.json

# Step 7 adjudicate: initial, round 1, unit 28

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-36-complete-step7-v2/initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-36-complete-step7-v2/step7-v2-initial-r1-u28.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run:"frontier-36-complete",phase:"initial",round:1,unit:"28",input_sha256:"eb847670bab40a2439e5cdb871b71db529fdcd8349675a0f63eb1fb3e18045de",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-36-complete --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

Assigned item order: 0:def-riemann-surface-and-holomorphic-atlas, 0:lem-planar-piecewise-analytic-region-triangulation, 1:def-holomorphic-and-meromorphic-map-of-riemann-surfaces, 1:ex-basic-riemann-surface-atlases, 2:def-meromorphic-differential-on-a-riemann-surface, 2:ex-smooth-affine-conic-as-punctured-plane, 4:lem-pullback-order-of-meromorphic-differentials-under-branched-maps, 4:thm-proper-holomorphic-map-riemann-surfaces-has-degree, 5:cex-exponential-local-biholomorphism-is-not-proper, 10:ex-power-map-riemann-hurwitz.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  {
    "id": "def-riemann-surface-and-holomorphic-atlas",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The claim that every pairwise compatible family lies in a unique maximal atlas is false unless the family covers X. On X=ℂ, the empty family is pairwise compatible but extends to distinct maximal atlases containing the charts z↦z and z↦conj(z).",
    "context_sha256": "834069c9360f565af6c7a3665bb3e6240af0409755bf9c4dc56629e8228da665",
    "item_sha256": "4dcc20b4dc526c3584495c9d97350a561a91595734d0609062ec40376c9ca470",
    "at": "2026-09-29T11:37:11.943Z"
  },
  {
    "id": "lem-planar-piecewise-analytic-region-triangulation",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 4.1 wrongly infers that a strip without corners contains no analytic-piece junctions. The hypotheses allow a smooth but nonanalytic join, such as y=x for x≤0 and y=x+x² for x≥0. Its strip graph is not analytic, so the later fan construction lacks its claimed regularity.",
    "context_sha256": "95d555b6764d2bade0c2e95b1a51e3af0058e0cf938af19bc2efed9338d54409",
    "item_sha256": "9ae662dfdb4be1ff928fc8f0f36c156344948804d18275886c4aa4d166ad1046",
    "at": "2026-09-29T11:38:40.613Z"
  },
  {
    "id": "def-holomorphic-and-meromorphic-map-of-riemann-surfaces",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The plane-domain agreement misstates its dependency: it takes g:Ω→ℂ with pole set P, but the cited definition requires g:Ω\\P→ℂ. As written, the argument does not cover meromorphic functions with poles.",
    "context_sha256": "aa39028f53f3bacd7716c10faae4d835ef76e3e42e36a88f225cb978f58f95c4",
    "item_sha256": "861bf3ac9df8c74c6f03a8e0e1ccf979871b428e3804f8460665a5399633c2b4",
    "at": "2026-09-29T11:37:44.916Z"
  },
  {
    "id": "ex-basic-riemann-surface-atlases",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The cited annulus definition permits R=∞, which satisfies 0<r<R. Step 2.1 uses (r+R)/2, undefined when R=∞, so the proof does not cover the claimed exterior annuli A(0;r,∞).",
    "context_sha256": "bedd4988211b6f9c14abc2c3e01c11827afdc811f4714dc18fd18123271caa43",
    "item_sha256": "2a219889f051ebb04754bc0e4e8f1c7a0d28bafb71f0f24ced16af072dc88cfd",
    "at": "2026-09-29T11:37:25.578Z"
  },
  {
    "id": "def-meromorphic-differential-on-a-riemann-surface",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The family is indexed by every chart in the maximal atlas, but the cited definition of a meromorphic function requires a connected domain. The maximal atlas of C includes the identity chart on two disjoint discs. Shrinking charts does not remove that chart from the atlas.",
    "context_sha256": "914e2961d53a308305b9c42677519cd05b6f7f94bc43083c38a310ad362bfe5c",
    "item_sha256": "342ba34c29c7d38bee44c0dfad1fcce6935cec55366113c72aef186c2c92c108",
    "at": "2026-09-29T11:37:27.088Z"
  },
  {
    "id": "ex-smooth-affine-conic-as-punctured-plane",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The title asserts that any nonsingular affine conic is biholomorphic to the punctured plane, but the proof covers only x²+y²=1. The nonsingular conic y=x² is biholomorphic to C, so the title is false.",
    "context_sha256": "ffc376bc130060d4561da281680c411c1bee0e32bba6034b69b6adc9038eb6d5",
    "item_sha256": "a6a797619d5eb1f9bc1e7d11a812d449f44f3587d71b0c2091fc3884e1b93ce7",
    "at": "2026-09-29T11:37:24.719Z"
  },
  {
    "id": "lem-pullback-order-of-meromorphic-differentials-under-branched-maps",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The final remark falsely claims that the pullback of any holomorphic differential has a zero of order exactly e−1 at a ramification point. For f(z)=z² and η=w dw, the pullback is 2z³ dz, of order 3 rather than 1.",
    "context_sha256": "a7ba2bcff3aa12258c8aba3e341368c296d04a74717d9240f61e98f7e91b855e",
    "item_sha256": "66f90a7f49a5efb93263c0e952d8abc1cacbb2e40893776c5a97411018d15eee",
    "at": "2026-09-29T11:37:12.837Z"
  },
  {
    "id": "thm-proper-holomorphic-map-riemann-surfaces-has-degree",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F4] inaccurately restates the cited compact-image theorem: its interface covers metric spaces only. Step 1.1 applies it to Riemann surfaces without establishing metrizability or proving the general topological result.",
    "context_sha256": "968b947aee4c7eaab4ad35464c8533b366aba9ece4e1448e0d6a74f4a58f6502",
    "item_sha256": "d9a01c7fa6f48020774123d3a677834e8c24e5c324141b29eca7cf1650af6f6a",
    "at": "2026-09-29T11:37:25.905Z"
  },
  {
    "id": "cex-exponential-local-biholomorphism-is-not-proper",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "F7 omits the cited degree theorem’s connectedness hypotheses on X and Y, asserting its conclusion for any proper nonconstant holomorphic map of Riemann surfaces. That restatement is false when the target is disconnected.",
    "context_sha256": "1131e5f21886a3f57abdaa224da3ef60bd1f53a95e768b305663495705653589",
    "item_sha256": "454665458733aaf06d14205c8c3c6833bd7a35909aa1654919b29c9cd5849f6d",
    "at": "2026-09-29T11:37:45.058Z"
  },
  {
    "id": "ex-power-map-riemann-hurwitz",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The Remarks falsely claim two ways a point can be critical, attributing ramification at 0 to the source coordinate and at infinity to the target coordinate. Criticality is coordinate invariant; step 1.3 gives the same local model u↦u^n at both points.",
    "context_sha256": "f7e8a272b1f8fe616e38448c2d8b3ef38ab4e957c97c9b1b33b6edcc0a961759",
    "item_sha256": "8326823b97ef35809fc58ce155fad68782a857fdf70d55c3928c635950521fc7",
    "at": "2026-09-29T11:37:36.756Z"
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
