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
label: step7-v2-initial-r1-u13
covers: 13
output: research/frontier-35-ten-categories-step7-v2/step7-v2-initial-r1-u13.json

# Step 7 adjudicate: initial, round 1, unit 13

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-35-ten-categories-step7-v2/initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-35-ten-categories-step7-v2/step7-v2-initial-r1-u13.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned frozen-frontier items, including published items if they belong to that frontier. Outside consumers are handled separately by consumer maintenance, never by this repair/adjudication task. Record their affected uses; do not edit them, rejudge them, or treat outside findings as frontier gate blockers.

You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run:"frontier-35-ten-categories",phase:"initial",round:1,unit:"13",input_sha256:"6633f07f32d31f9c22bad6cbabdc3a480c1e46dea00812a35534131748b37a18",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-35-ten-categories --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. Downstream is an array of consumer IDs affected by a Statement/Definition change; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  {
    "id": "lem-easton-head-cc-and-tail-closure",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F6] misstates cor-cardinal-absorption: it claims μ⊗ν=μ whenever ν≤μ and μ is infinite, but the cited result requires ν≠0 and explicitly states μ⊗0=0.",
    "context_sha256": "9b504cb2c8e8f4b16dd9df52ec4491fea039bb59e0206a9baa4a1e13ad241b2b",
    "item_sha256": "6f418ecc616e3ccf454e4a713882781ef80ae240479762ae691ffc824a41fdf8",
    "at": "2026-09-27T02:10:44.407Z"
  },
  {
    "id": "lem-easton-head-cardinality-and-name-count",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F6] falsely restates cardinal absorption: it claims μ⊗ν=μ for every ν≤μ with μ infinite. The cited corollary requires ν≠0; at ν=0, μ⊗0=0. The required dependency check fails.",
    "context_sha256": "df679f8910d3191e3ed9f8628bcbbacade18c527451bc6448b143f42882206ef",
    "item_sha256": "1190588bab92cd50887b86a94d1154f987b4dd06f2efc0d5278843ce5aa29082",
    "at": "2026-09-27T02:10:44.898Z"
  },
  {
    "id": "def-easton-support-product",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The factorization argument asserts that every set of triples lies entirely at coordinates ≤λ or entirely above λ. A valid condition can have one triple at ω and another at ω₁ when λ=ω. The stated proof step is false, even though the factorization can be proved by a different argu",
    "context_sha256": "4192f8505379b31cdfd6def78749c1ae8ba5f48ac99dc2fed7320652a31ce597",
    "item_sha256": "e4c52bfe8df9a996949d57809bcc44da93bbd07d41cf6a1d80af69125fcf5281",
    "at": "2026-09-27T02:10:50.871Z"
  },
  {
    "id": "thm-regular-continuum-function-constraints",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The Statement says (c) alone constrains values, but (a) directly excludes every value ≤κ. It also says strictness is used in the Easton-function definition; the supplied interface derives strictness from the cofinality condition instead.",
    "context_sha256": "e1e4d6e4018aaa280dcac66f5f901f85931fa69295384f67cb07f0b7ee8acb0a",
    "item_sha256": "4fe904e6aa3fb089efaf22a5c4fca6134271fb7c915ea11cfb20f6673a6097d0",
    "at": "2026-09-27T02:10:53.528Z"
  },
  {
    "id": "def-easton-function",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The class paragraph says set-sized restrictions of F can be forcing conditions. But a restriction maps cardinals to cardinals; conditions in P(F) are binary-valued functions on triples. Even F restricted to one cardinal has the wrong type.",
    "context_sha256": "dae57372520441821574617dd306a62db26f9bc071082b69ec18dc169c75418b",
    "item_sha256": "34587a7a71bde957f195581df453bc69cf2cc30aca4be03dadca18fceebad274",
    "at": "2026-09-27T02:11:00.730Z"
  },
  {
    "id": "def-gbc-global-choice-ground-for-easton",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The class clause is inconsistent as written. It requires M∈C⊆P(M) and closure under pairing, so pairing M with itself gives {M}∈C. But {M} is not a subset of M, since M∉M. No ground satisfies the definition.",
    "context_sha256": "d3375275ddc84f24d323d6172ba2c2ad6eb50024472de49e4c17b54b92119927",
    "item_sha256": "dc73d625d9b9b218de5357255df5a1fc0f25f8420a92d18c795e3ff10e582b90",
    "at": "2026-09-27T02:11:00.850Z"
  },
  {
    "id": "def-easton-support-iteration",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The stated iteration data omit the distinguished top names 1̇α, yet the limit-stage support is defined using them. The cited finite-support iteration requires those names as part of its data and explicitly says they cannot generally be selected uniformly in ZF.",
    "context_sha256": "5ea6e81dce45fc6f1cfce57a056e4ff3a1cdf9d4c3b59ab73f1663cdfc05fc5b",
    "item_sha256": "99397522e27f54cabd45223d0fdb6e1f108442e3288370b7618bfadb8aff919d",
    "at": "2026-09-27T02:13:54.205Z"
  },
  {
    "id": "lem-easton-class-tail-head-decision",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F7] inaccurately restates [[def-axiom-of-choice]] as asserting that AC holds in set-generic extensions. That interface only defines AC and does not supply a forcing-preservation result.",
    "context_sha256": "2fb1c9d69c198c7fe67e961afee5e7b32454aeef8a3c6f598efaa64d74838a34",
    "item_sha256": "bbb1fc531e0fe17aa9ecf5b9ee3ca42780ab983debae531a0c5b24fcbf2f7373",
    "at": "2026-09-27T02:13:54.345Z"
  },
  {
    "id": "def-null-meagre-borel-master-codes",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The specified length-lexicographic enumeration omits the empty word, which belongs to 2^{<N}. Thus it is not the claimed bijection, and U_k never includes the basic cylinder [∅]=C.",
    "context_sha256": "02ff4dd286655501de341ec337fc1ff31412c64388874fb63f2655d4b9f78b21",
    "item_sha256": "f275eb1ee8f13a375d185181d5bb8b334a769857379d08fe6b091184196048c2",
    "at": "2026-09-27T02:13:54.518Z"
  },
  {
    "id": "lem-null-meagre-master-codes-are-cofinal",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 3.1 wrongly asserts that a countable union of nowhere-dense sets is Borel. Nowhere-dense sets can be non-Borel, so step 1.2 cannot be applied to that union as written.",
    "context_sha256": "cbdd8ef1aab1a6dd04b112e4b3461692be8bbfd0e1cab3be46f7a967c90c0620",
    "item_sha256": "49b7e8c37a85b5343246876a823ecae32789c8af5fdd8dab561a6be0f4708f35",
    "at": "2026-09-27T02:13:54.558Z"
  },
  {
    "id": "ex-countable-decreasing-family-has-a-pseudointersection",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "F2 already proves the countable descending case by this same running-intersection, least-new-element construction. This item repeats that argument and conclusion without a distinct example or proof route.",
    "context_sha256": "65035f9c50d8691f068de14310c3457fcb2171604301fd5ed4ca76f988e9ae03",
    "item_sha256": "bb717059696332a09d1804e4d86a9071d4784edad940a6cd12c8754c68d71b87",
    "at": "2026-09-27T02:13:54.582Z"
  },
  {
    "id": "def-almost-inclusion-pseudointersection-and-tower",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The final remark reverses the forcing order. By the item's own definition, p is stronger than q when p⊆*q, so stronger conditions are almost subsets; they do not contain more naturals.",
    "context_sha256": "fa1f7f97eb29a9e4e156f4cb44a5581fe7f1657bee4877479ab3f43c9b770486",
    "item_sha256": "0076596399326c75d357e4dcd0641f0d715aa74f0b32c7dbec0b0300161a3d9d",
    "at": "2026-09-27T02:13:55.191Z"
  },
  {
    "id": "def-null-and-meagre-cardinal-invariants",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The Remarks falsely claim that ⋃𝒜=X forces X≠∅. With X=∅ and 𝒜=∅, the equality holds. The edge-case analysis for the general definition is therefore incorrect.",
    "context_sha256": "305493e1e6144a618134ce97d8c5da564d791a484a92218518b8a210a478860e",
    "item_sha256": "83181595548d3801d8c5c2c98482ae4cdfa010334f96f458beaa03ed45e39341",
    "at": "2026-09-27T02:14:06.607Z"
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
