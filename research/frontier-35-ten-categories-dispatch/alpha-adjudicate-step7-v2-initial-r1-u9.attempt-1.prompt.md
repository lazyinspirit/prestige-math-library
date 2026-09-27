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
label: step7-v2-initial-r1-u9
covers: 9
output: research/frontier-35-ten-categories-step7-v2/step7-v2-initial-r1-u9.json

# Step 7 adjudicate: initial, round 1, unit 9

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-35-ten-categories-step7-v2/initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-35-ten-categories-step7-v2/step7-v2-initial-r1-u9.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned frozen-frontier items, including published items if they belong to that frontier. Outside consumers are handled separately by consumer maintenance, never by this repair/adjudication task. Record their affected uses; do not edit them, rejudge them, or treat outside findings as frontier gate blockers.

You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run:"frontier-35-ten-categories",phase:"initial",round:1,unit:"9",input_sha256:"6633f07f32d31f9c22bad6cbabdc3a480c1e46dea00812a35534131748b37a18",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-35-ten-categories --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. Downstream is an array of consumer IDs affected by a Statement/Definition change; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  {
    "id": "lem-central-extension-linearizes-a-projective-representation",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The cited definition applies only when Q is finite. F2 omits that hypothesis, and the statement claims a correspondence for arbitrary groups Q. The dependency does not license that scope.",
    "context_sha256": "c71436044abecb8388e788b614abb20c7642eb749cd1285d662b659569d32067",
    "item_sha256": "eba6c9f964ed7c6d15a016a6b5e9d5fec3577cd854a09f8541af1e1d3e6cce73",
    "at": "2026-09-27T02:06:47.510Z"
  },
  {
    "id": "lem-projective-representations-are-twisted-group-algebra-modules",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 1.4 averages P(q) on M before any such operators are defined. The only P introduced in step 1.3 acts on V, so P(q)πP(q)^{-1} is ill-typed. Steps 2.2–3.2 rely on this undefined average; the action on M is introduced only in step 3.1.",
    "context_sha256": "e67c61b3cc2e77591cb05617b713b005716dff980f65ae17dba2321fd7da534e",
    "item_sha256": "b2e55c86ebcc528b69627920c551df065afb53661b238969a0a8f701dca73f8f",
    "at": "2026-09-27T02:06:48.806Z"
  },
  {
    "id": "thm-little-group-method-for-a-split-abelian-normal-subgroup",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 5.2 falsely identifies the induced degree [H:Hθ]dimσ with the ramification index. By F6 the index is dimσ. For S3=C3⋊C2 and nontrivial θ, the induced degree is 2 but the ramification index is 1.",
    "context_sha256": "d6dfb8d910191461c8f819f965053aecc462290a7d374ff90f4eb7edc7b83b69",
    "item_sha256": "049bc85e9fcf36752d751c3f9e4008ad6ee06753efe902c7f4aca952e6d3fef9",
    "at": "2026-09-27T02:07:03.185Z"
  },
  {
    "id": "ex-coboundary-rephasing-of-a-projective-representation",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 4.1 assigns a Clifford obstruction to the projective representation in step 1.1. The cited definition assigns that obstruction to an invariant irreducible representation of a normal subgroup; no such representation or group extension is specified here.",
    "context_sha256": "f2ed35e7ce34a5f7916758a51e6c69794c1bb7d02f4f34c45d31607f7b13996d",
    "item_sha256": "e8aa75b7773966bf941177b635dd7627c325a3dab0b387a1961a3a1a05f86bba",
    "at": "2026-09-27T02:07:03.763Z"
  },
  {
    "id": "cex-invariant-character-need-not-extend-linearly",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 2.1 states a false homomorphism criterion: a map from C₂ to ℂ× can send the identity to 1 and its other element to 2. The argument for θ being a character relies on this invalid claim.",
    "context_sha256": "4155e0c62e62be02d53d5cb6e7125e5e15c7f3bdcb99b8cee4391117a71991ea",
    "item_sha256": "c991c6627611715d4a25ea8b3242e3b0fd52efb3b114be0c7ca167c16805686d",
    "at": "2026-09-27T02:07:05.436Z"
  },
  {
    "id": "lem-monomial-representation-has-a-monomial-matrix-model",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F4] inaccurately restates the cited definition: irreducibility also requires V≠0. The zero representation has no invariant subspaces other than 0=V, but the dependency explicitly says it is not irreducible.",
    "context_sha256": "4effa3f129cbd64a7e3e11dd4677c2dd1c7d84f9fd7212ea6bfc75cd8698d19a",
    "item_sha256": "ef117e5ee56bf1a4846942fb76a454a23170a27e5929b2c0fef6433def6c58ea",
    "at": "2026-09-27T02:07:07.711Z"
  },
  {
    "id": "lem-cocycle-central-extension-is-a-group",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "F6 misstates its cited dependency: the kernel-and-image definition does not assert that kernels are normal. Step 4.1 cites F6 for normality, so the local dependency restatement is inaccurate.",
    "context_sha256": "cffa4fcb1600891f49a571a58e7f19e2aa89c143fb50ac618e007b57a0fb1395",
    "item_sha256": "a7446697094c7818bccbe146826a1677787923132a3ff1ef0b1a1053021e6cfa",
    "at": "2026-09-27T02:07:08.204Z"
  },
  {
    "id": "ex-one-dimensional-and-trivial-monomial-boundaries",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F3] inaccurately restates irreducibility: the dependency also requires V≠0. As written, [F3] would classify the zero representation as irreducible.",
    "context_sha256": "c6af1f44a413537221e7c28bfd0d6aeb43de7ce5c800803779a5b28cf1a556ea",
    "item_sha256": "603d7d3965ef65337cbd76784481142bcc7d14ac29cebc1d217172e9f2919c15",
    "at": "2026-09-27T02:07:12.855Z"
  },
  {
    "id": "ex-unitriangular-group-of-order-p-cubed-is-an-m-group",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 9.1 claims every irreducible is induced from a linear character of an abelian subgroup, including the degree-1 characters from a subgroup of index 1. That subgroup must be U, which is nonabelian by F1. The asserted conclusion is false.",
    "context_sha256": "83a22f22c9a249bfb5eec6dc345d1d0b3df82b93e3e94e896d5fae880f16d559",
    "item_sha256": "6353f5a09c1b6754ce53007e7687d375c85c7e5c204e5073f30c31b8d033ea8e",
    "at": "2026-09-27T02:07:17.578Z"
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
