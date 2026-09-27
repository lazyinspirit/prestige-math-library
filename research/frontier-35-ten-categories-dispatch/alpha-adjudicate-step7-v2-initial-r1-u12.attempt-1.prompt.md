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
label: step7-v2-initial-r1-u12
covers: 12
output: research/frontier-35-ten-categories-step7-v2/step7-v2-initial-r1-u12.json

# Step 7 adjudicate: initial, round 1, unit 12

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-35-ten-categories-step7-v2/initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-35-ten-categories-step7-v2/step7-v2-initial-r1-u12.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned frozen-frontier items, including published items if they belong to that frontier. Outside consumers are handled separately by consumer maintenance, never by this repair/adjudication task. Record their affected uses; do not edit them, rejudge them, or treat outside findings as frontier gate blockers.

You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run:"frontier-35-ten-categories",phase:"initial",round:1,unit:"12",input_sha256:"6633f07f32d31f9c22bad6cbabdc3a480c1e46dea00812a35534131748b37a18",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-35-ten-categories --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. Downstream is an array of consumer IDs affected by a Statement/Definition change; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  {
    "id": "lem-ordered-arithmetization-evaluates-to-the-truth-value",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[L3] overstates its dependency: the cited lemma applies only to the arithmetization Pφ of a quantifier-free formula, not to any polynomial agreeing with a Boolean function. Step 3.1 therefore cannot apply it to M_j as claimed.",
    "context_sha256": "a2ee1bb8adcdc41afb2adb334427b1cea11d99d03cec8fb1bb01ebde01516c94",
    "item_sha256": "0d46a04278c1301e2647535d5c292acdaec8f6c05574b92d14537183111e3eef",
    "at": "2026-09-27T02:09:37.340Z"
  },
  {
    "id": "def-qbf-arithmetization-operators",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The remark says [[lem-ordered-arithmetization-evaluates-to-the-truth-value]] proves this definition's final value equals QBF truth. That lemma concerns the different multilinearized sequence; it does not establish the claimed result for this sequence.",
    "context_sha256": "94ff2ff52dc667fb884144a4d664aad4c50b0637a9d4257ade8f8f8efc14e96b",
    "item_sha256": "43ab27069f62ef2734c6ad8d68a4737af6d0fb4b6ae75da96ef2f686f815f450",
    "at": "2026-09-27T02:09:40.053Z"
  },
  {
    "id": "lem-each-round-has-polynomial-communication",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The protocol rejects and stops when a round check fails. For n=1, T=2; a prover sending the zero polynomial in the first round fails the check, so only one message is sent and no random bits are drawn. Claims 1 and 3 incorrectly assert exact counts for every run.",
    "context_sha256": "97048cd9127798314ac3bab7ecd4dcf4d6cb418d0d619ff29ca05cccbf98c913",
    "item_sha256": "e48a25d6cc669de0773ad0d4893bb06cae063293e05e31904662402102a0f4d7",
    "at": "2026-09-27T02:09:52.479Z"
  },
  {
    "id": "lem-shamir-qbf-verifier-runs-in-polynomial-time",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The protocol stops when a prover message fails a check. For the valid input ∃x(x), a prover can send the zero polynomial in round 1; the verifier rejects before drawing any random bits. Thus the claimed exact T rounds and 2T⌈log₂p⌉ random bits are false.",
    "context_sha256": "c09e95f5894a2f27e46783bd1d00fd044ae98f698d57b1c2c4f484f77e106a91",
    "item_sha256": "4012f276c4da56afeb1786d14b78b6f116bdc26b354a44ae9bb1fd8864c6e080",
    "at": "2026-09-27T02:09:58.427Z"
  },
  {
    "id": "lem-cloud-consistency-forces-near-constant-labels",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "This repeats [[lem-cloud-plurality-rounding]]: step 1.1 only substitutes h₀=7/10 into its first inequality, and step 1.2 copies its second. It supplies no different proof or new result.",
    "context_sha256": "2267ad0a2789c310a3bcc7db07d6266c4bcfd79fee641d0a3a33688f3aaea92c",
    "item_sha256": "c4741a01a4c12a10e3e5dc3bf57e78cd97fb102d6b540758fe16f89b03e25dfc",
    "at": "2026-09-27T02:10:01.027Z"
  },
  {
    "id": "lem-canonical-local-view-lift-preserves-perfect-satisfiability",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "F1 inaccurately restates the powering definition: a powered slot’s relation table depends on its starting vertex as well as its option pattern. The same pattern read from different vertices can traverse edges with different relations.",
    "context_sha256": "841240c1c43d9aadf12ed148b4dfa78f5672e869bcfcd12ea496f126d3610070",
    "item_sha256": "345796302b4116d5f1234f17d6c358b9b34f2846b3a9cb41ab165788f898de5f",
    "at": "2026-09-27T02:10:14.470Z"
  },
  {
    "id": "lem-first-false-claim-survives-with-root-bound-probability",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The title reverses the result: the proof bounds the chance that a false claim becomes true, not that it survives as false. Survival can have probability 1, for example at a universal round with q*=0, s=1, and c=1.",
    "context_sha256": "3f850dbe00590318c1e7222655f5d49abfa31f2d9d0ff8b17d8d6a61993055df",
    "item_sha256": "69cf83711fd35df223951cb30bcf51efd683beef70fe0f13970f5b85646282ed",
    "at": "2026-09-27T02:10:17.154Z"
  },
  {
    "id": "lem-lazy-walk-lengths-within-root-t-have-close-endpoint-laws",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Claim 2 requires only R≥ℓ, but X_{v,ℓ′} needs ℓ′≤R to have a canonical coordinate. For t=1 (R=2) on an 8-cycle, ℓ=2 and ℓ′=3 meet the window condition, yet a three-move walk can end at distance 3, where its claimed value is undefined.",
    "context_sha256": "604fcc79925d44df8ba8815c84a468a17f62d0686846e8089006ca5488b00a6a",
    "item_sha256": "bb74d1cadc0f9fdaa097a5cd39a633c618d22c3050355bea99fc79350fe49314",
    "at": "2026-09-27T02:10:18.177Z"
  },
  {
    "id": "thm-tqbf-has-a-polynomial-round-interactive-proof",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The public-coin claim is unsupported. The verifier draws k random bits but sends only their residue modulo p as a challenge. That residue does not reveal the coins and is not uniformly distributed. Step 1.1 therefore does not establish the public-coin clause of the statement.",
    "context_sha256": "052c446f87f9a95e4958cf985c3239871804ed97dc972f23706e772eb7477135",
    "item_sha256": "0ba933bf720cb4fc2977175cf80d058048f1d92c4df2db025250869404418dae",
    "at": "2026-09-27T02:10:21.815Z"
  },
  {
    "id": "lem-powering-preserves-perfect-satisfiability",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The final remark falsely claims the converse is false. Set a(v)=φ(v)(κ_{v,v}). For each base edge, a powered walk can hold t steps, traverse that edge, then hold t steps. Its central test forces a to satisfy the edge. Thus val(G_t)=1 implies val(G)=1.",
    "context_sha256": "8d2697696b65e9abff85f8f894ef632584c9092c6c4530a04ff4ed96fe6f7f5c",
    "item_sha256": "80030816d7733f4a6ad935f5c867d0f6cf09ce26a0064d370ede6335deccfb14",
    "at": "2026-09-27T02:10:22.528Z"
  },
  {
    "id": "def-explicit-constant-rate-constant-distance-code",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "It defines a binary code family as a sequence indexed only by k≥1. Under the library convention, sequences are functions on ℕ and must have a term at 0. No C₀ is specified, so the stated object is not a sequence.",
    "context_sha256": "8cb61dee45c95c44f46c6bbdfa8359b1f63b52a757b1e7035cb9e867b7c3a007",
    "item_sha256": "7027152cf1a5631301d18af30c390ff6c7132d15b7f329dc989df5f09d3a4cd5",
    "at": "2026-09-27T02:10:24.109Z"
  },
  {
    "id": "cex-repeating-constraints-amplifies-the-gap",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The title asserts that duplicating constraints never changes UNSAT, but the proof establishes equality only for the particular two-loop graph G. Under the library’s title rule, this unproved general claim is a defect.",
    "context_sha256": "0259e3ead835dac337e11944db8c860e8c42a8ce53df27a83719a36c5ca6e995",
    "item_sha256": "2f10a60a42a66eb15100cecada8277cb2a8eea0605908606cf90df81ae2183f3",
    "at": "2026-09-27T02:10:33.011Z"
  },
  {
    "id": "def-constraint-graph-powering",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The claimed explicit-encoding length is false in the supplied bit-encoding convention. Endpoint names take up to Θ(log|V|) bits, so listing |V|(2d)^L powered edges generally needs Θ(|V|(2d)^L log|V|) bits, not a constant times |V|(2d)^L.",
    "context_sha256": "5806148f77cfff2fa34be4e980db655a71c61ed2358ecd035fd95f1e79eaa3d9",
    "item_sha256": "44011c421ae7238bf91e4e2043f9bca2b19805ffa7a4ed4a6589fa2dbcafab0e",
    "at": "2026-09-27T02:11:08.113Z"
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
