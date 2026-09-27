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
label: step7-v2-initial-r1-u15
covers: 15
output: research/frontier-35-ten-categories-step7-v2/step7-v2-initial-r1-u15.json

# Step 7 adjudicate: initial, round 1, unit 15

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-35-ten-categories-step7-v2/initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-35-ten-categories-step7-v2/step7-v2-initial-r1-u15.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned frozen-frontier items, including published items if they belong to that frontier. Outside consumers are handled separately by consumer maintenance, never by this repair/adjudication task. Record their affected uses; do not edit them, rejudge them, or treat outside findings as frontier gate blockers.

You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run:"frontier-35-ten-categories",phase:"initial",round:1,unit:"15",input_sha256:"6633f07f32d31f9c22bad6cbabdc3a480c1e46dea00812a35534131748b37a18",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-35-ten-categories --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. Downstream is an array of consumer IDs affected by a Statement/Definition change; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  {
    "id": "def-positive-braid-monoid",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The cited word definition allows letters from X and its formal inverse copy. Thus a “word on Σₙ” includes inverse letters, contradicting the generator-only construction. For n=2, the quotient would contain an unconstrained σ₁⁻¹ letter, so the stated universal property fails.",
    "context_sha256": "455c2ae79b44b5a95d93600c5908f14838d1fd817fb1615b06dc96440e3ec38e",
    "item_sha256": "2951fb14b46c2fdcf14a4d48a2de417f7c9c8bc8692b79eb3e3b02d7cde62f85",
    "at": "2026-09-27T02:15:05.961Z"
  },
  {
    "id": "lem-geometric-braids-admit-generic-polygonal-representatives",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 4.1 defines X, A and B using the fixed braid p. Step 5.1 then treats them as functions of the perturbation parameters. As written, a projected coincidence of p at a breakpoint gives an identically zero condition, so step 6.1 cannot avoid it.",
    "context_sha256": "fc65fe3c25d3b236aad76a0fe13430955bd8c1bf38d688fbf082a87e7587becf",
    "item_sha256": "96aab7920ea340ac512a3d3301297441296e8f62e5d4edb0f5fcf0d1698dda66",
    "at": "2026-09-27T02:15:14.974Z"
  },
  {
    "id": "lem-every-geometric-braid-is-a-word-in-half-twists",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The title claims every braid literally is a stacking of half twists, but the proof establishes only braid isotopy to one. For n=1, a nonconstant loop based at q1 is a braid, while the only stacking is the constant empty word e.",
    "context_sha256": "c8a8a44a9d9e987fc1acd4f943947d5ebf18e0308b60270658459b3181f9f618",
    "item_sha256": "53f0159ea26f772ea6e2d1b6de68a4d5d73c294a5778d4d0ee7f896606296001",
    "at": "2026-09-27T02:15:16.288Z"
  },
  {
    "id": "lem-reduced-adjacent-transposition-words-have-well-defined-positive-lifts",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The inversion dependency defines S_n=Sym(n) on {0,…,n−1} and Inv(σ) using indices in n×n. This item instead takes S_n on {1,…,n}, so its cited inv is ill-typed and [F2] inaccurately restates the dependency.",
    "context_sha256": "13d22d3ea8d8865b13a336b4d922457c741b2c7411f05249dd7813e91c491cdd",
    "item_sha256": "5d54cefb2cadb7401611a5e534dd9c145ae4549b5487c54ea4cdb967684f0df0",
    "at": "2026-09-27T02:15:21.562Z"
  },
  {
    "id": "lem-artin-right-complements-satisfy-the-cube-condition",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 3.1 incorrectly claims step 2.3 covers every triple with exactly one adjacent pair. For (u,v,w)=(σ₁,σ₄,σ₂), the adjacent pair is (u,w); swapping u and v leaves w in that pair. Neither orientation is proved, so the case enumeration is incomplete.",
    "context_sha256": "c13d6c44d4ed2ba29462674c506da057ec506d7cf331a1b78bc1f60886007c0e",
    "item_sha256": "df8337a8e1988687c3319ae8f84fae197a319196519b9c6713a5816915466ea5",
    "at": "2026-09-27T02:15:26.936Z"
  },
  {
    "id": "cor-the-braid-group-word-problem-is-decidable-by-garside-normal-form",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Part (a)(iii) extends the gcd algorithm to “any finite family,” including the empty family. The cited theorem covers only nonempty families. An empty family has no left-gcd in B_n⁺: every σ₁^k is a common divisor, with unbounded length.",
    "context_sha256": "a1c90df29f161305472d0d4a45e0c5c9f82f83ae0b51c4fb7a66584ad2079fa0",
    "item_sha256": "21c43cf8229d3cecd467b5e0dc3dd56f56e0f1888adf583103c5c4308a9f5f75",
    "at": "2026-09-27T02:15:33.719Z"
  },
  {
    "id": "ex-the-full-twist-in-b-three",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The first Remark says Δ and (σ₁σ₂)³ have the same exponent sum, then gives 3 and 6 respectively. Their exponent sums differ, so the item contains a false mathematical assertion.",
    "context_sha256": "54e44d35bcba213cfe0e60217e1ff016e27adc4aaf6ed7bc62f5f103ca4709ca",
    "item_sha256": "effc145cfe6b81945e3239548596565ecc96312af3d9610c42d8a4f63213e85d",
    "at": "2026-09-27T02:15:33.773Z"
  },
  {
    "id": "thm-the-center-of-b-n-is-generated-by-the-full-twist-for-n-greater-than-two",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The comparison remark claims the theorem and the n=2 proposition describe the center for every n. They cover only n≥2; this library also defines B₀ and B₁, whose centers neither statement addresses.",
    "context_sha256": "cf6aa009b4a198940144a87a2ef72e162fdb6d5aa7d9f20bb927c7d5534cc116",
    "item_sha256": "182f830ba2d9cb0b4603049dfc14f173b7550f608a22483d8383157aa9c60d8d",
    "at": "2026-09-27T02:15:55.027Z"
  },
  {
    "id": "def-artin-right-complements-and-word-reversing",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The word-reversing paragraph types signed paths as paths in the one-object category B_n^+. For n=2, σ₁⁻¹ is a signed path but cannot be a morphism of B₂⁺: positive length rules out an inverse to σ₁. Signed paths belong to the formal signed alphabet.",
    "context_sha256": "c8ad83b9af058208a8ea08e44ca9deab5dbcbae8ac5def95e6058096707ec086",
    "item_sha256": "bee5e46f5f7858fafd9f4c627413aca2b5df1aed72710ca041525ffda7c673bf",
    "at": "2026-09-27T02:16:27.582Z"
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
