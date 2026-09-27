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
label: step7-v2-initial-r1-u14
covers: 14
output: research/frontier-35-ten-categories-step7-v2/step7-v2-initial-r1-u14.json

# Step 7 adjudicate: initial, round 1, unit 14

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-35-ten-categories-step7-v2/initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-35-ten-categories-step7-v2/step7-v2-initial-r1-u14.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned frozen-frontier items, including published items if they belong to that frontier. Outside consumers are handled separately by consumer maintenance, never by this repair/adjudication task. Record their affected uses; do not edit them, rejudge them, or treat outside findings as frontier gate blockers.

You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run:"frontier-35-ten-categories",phase:"initial",round:1,unit:"14",input_sha256:"6633f07f32d31f9c22bad6cbabdc3a480c1e46dea00812a35534131748b37a18",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-35-ten-categories --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. Downstream is an array of consumer IDs affected by a Statement/Definition change; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  {
    "id": "def-complex-homotopy-and-contractibility-in-an-additive-category",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "“A homotopy into the zero complex is a null homotopy” misdefines the term. A null homotopy is a homotopy f≃0 between maps C→D, where D need not be zero; the stated meaning conflicts with the contractibility clause for nonzero complexes.",
    "context_sha256": "12a6a39b82005bc95ee9095bfc9eb037c1a883c60517f022138531026eecdbd9",
    "item_sha256": "8039f7ceb3eacc3eb7ebd7a09009aae5688a9cf3a2c6669b225edc22914f70c4",
    "at": "2026-09-27T02:14:23.176Z"
  },
  {
    "id": "prop-additive-functors-preserve-chosen-homological-gaussian-cancellations",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Clause 4 is false as stated: if B is abelian, the displayed retract identities induce inverse isomorphisms H(F(X))≅H(F(bar X)) without any exactness assumption on F. Exactness concerns comparing F(H(X)) with H(F(X)).",
    "context_sha256": "3a56068469e0d9d7fdd2bd2a59aa242e707844aded3c2996cbbf49ac8616da49",
    "item_sha256": "a8fdf51996ef36e9ad16da1d2a3bc00e46142e6ee190fb17076d005252482dc2",
    "at": "2026-09-27T02:14:27.023Z"
  },
  {
    "id": "ex-a-two-by-two-unit-pivot-fixes-the-minus-schur-sign",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "L4 inaccurately restates two-term homology: at the source it is the kernel of the outgoing differential, and at the target it is the cokernel of the incoming differential. L4 reverses both, though step 1.3 uses the correct formulas.",
    "context_sha256": "cbbce40a0648882a15c4bbf7490ed709328af41d110c7a134b18df309892974a",
    "item_sha256": "a60d40afeaebf565fe43381a33678dae2285ff67240acb6afe94784b7b154125",
    "at": "2026-09-27T02:14:33.126Z"
  },
  {
    "id": "cex-a-nonunit-differential-entry-cannot-be-gaussian-cancelled",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The title is too broad. A nonunit entry can lie in a cancellable invertible block: [[2,1],[1,0]] over Z has determinant −1, so its two-term complex contracts. The proof only rules out cancelling the isolated map ×2.",
    "context_sha256": "0280de85bb6660db9d6a72321bf559392a4b5286722e7b22f98c671b8a9f98a4",
    "item_sha256": "f68b4d5e9b48dc320d45f0b75813e5f6babad04d7a64ef05e29144cc62441b9c",
    "at": "2026-09-27T02:14:34.395Z"
  },
  {
    "id": "cex-gaussian-reduction-is-not-strictly-natural-for-arbitrary-chain-maps",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "This repeats the counterexample already asserted in clause 3 of the cited transfer proposition: the same split-off contractible two-term summand and maps with zero individual transfers but identity composite transfer. The matrices only spell out that construction.",
    "context_sha256": "ed9216632ad7bd73f270bb87de41d87346ab0fba335d88c5f1c3c2b518a03875",
    "item_sha256": "699afe59742de7cb1dd7bf5f13ef7a2583a5bcf3fbd69a3429ce6bf854f30504",
    "at": "2026-09-27T02:14:35.181Z"
  },
  {
    "id": "def-graded-ring-module-bimodule-and-internal-shift",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The final paragraph falsely says Koszul signs occur only when a differential is declared. The symmetry on graded tensor products sends homogeneous x⊗y to (−1)^{|x||y|}y⊗x without any differential.",
    "context_sha256": "0fca655e48fa8d7c570b8b1d609a9bae92bbe8163c4031b3675eb2d636f31975",
    "item_sha256": "66af55599377a10790c7990d443da35adf763d9efc59b75349b353afd968cca8",
    "at": "2026-09-27T02:14:50.860Z"
  },
  {
    "id": "prop-transfer-of-chain-maps-across-gaussian-reductions-and-naturality-limits",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Clause 3 overstates the example: for arbitrary X=Y⊕K it claims maps with zero transfers whose composite transfers to 1_Y. By clause 2 this would make Y contractible. Take Y=k concentrated in degree 2 and K=(k→k) in degrees 0,1; such maps cannot exist.",
    "context_sha256": "af2384d1cc43f02b4e7838e0f7928c7c8bfef6c0a30bcf27440b234506934acb",
    "item_sha256": "a0d0eb102361fe1fcbdddd02ade11056f2b3e48ace27c16067d411f38efa2adc",
    "at": "2026-09-27T02:14:54.174Z"
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
