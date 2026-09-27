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
label: step7-v2-initial-r1-u4
covers: 4
output: research/frontier-35-ten-categories-step7-v2/step7-v2-initial-r1-u4.json

# Step 7 adjudicate: initial, round 1, unit 4

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-35-ten-categories-step7-v2/initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-35-ten-categories-step7-v2/step7-v2-initial-r1-u4.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned frozen-frontier items, including published items if they belong to that frontier. Outside consumers are handled separately by consumer maintenance, never by this repair/adjudication task. Record their affected uses; do not edit them, rejudge them, or treat outside findings as frontier gate blockers.

You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run:"frontier-35-ten-categories",phase:"initial",round:1,unit:"4",input_sha256:"6633f07f32d31f9c22bad6cbabdc3a480c1e46dea00812a35534131748b37a18",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-35-ten-categories --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. Downstream is an array of consumer IDs affected by a Statement/Definition change; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  {
    "id": "lem-polynomial-algebras-over-fields-are-integrally-closed",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 1.3 falsely claims that every unit in R[x] over any commutative ring is constant. In (Z/4Z)[x], (1+2x)^2=1. The cited degree theorem requires R to be a domain, so it cannot justify this claim.",
    "context_sha256": "7e5c21849004ccdb5bb73b482fc57a6b8d7fcc0f8853ede0fba25e08aa578d26",
    "item_sha256": "5d5cde66fc76dda30b39e79141a74524b61ed91fa69e13c678e448c7e3fb71c1",
    "at": "2026-09-27T02:17:28.073Z"
  },
  {
    "id": "lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The zero polynomial has no degree under the cited definition. For I=(0), no f∈I satisfies deg f≤n, so J_n is empty, contrary to step 1.2. It is not an ideal, and the subsequent finite-generation argument fails.",
    "context_sha256": "d67930430e77c892aa0640c3ba21ec1e84299fbd369bc139ba69a4fd1259250e",
    "item_sha256": "db0c503ee343a9d93472b52a7d6a3e82b63a4731574547233e551c2bdcee4d0f",
    "at": "2026-09-27T02:17:32.160Z"
  },
  {
    "id": "thm-polynomial-algebras-over-fields-have-finite-integral-closures",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 2.1 falsely asserts F(roots of h) ⊆ L. For F=Q and L=Q(∛2), a basis containing ∛2 makes h divisible by T³−2; its splitting field contains nonreal roots outside L. The displayed chain of inclusions is invalid.",
    "context_sha256": "baf0b20773c4b98d011e98db3a65d233454891848cc520498cdc899822fa9367",
    "item_sha256": "c8eb686b78bdba4ea0e08fe0c61f5392ad5f5014c2dfc6d691ec85ade782a3af",
    "at": "2026-09-27T02:17:45.567Z"
  },
  {
    "id": "def-strongly-transcendental-element",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The claim that x may be a zero divisor contradicts the definition. Taking P(X)=X, any ux=0 forces u·1=0, hence u=0. Thus every strongly transcendental x is a non-zero-divisor in S.",
    "context_sha256": "82e668baa3f5e8e772cc9dcfbd53f79274f04f7ab2034b739e04c1635914e87b",
    "item_sha256": "0b74de0961b8e7837352373a34a27a8c43454960629a3a4e2c60ddd73e04b745",
    "at": "2026-09-27T02:17:47.701Z"
  },
  {
    "id": "ex-normalization-nodal-coordinate-domain",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "L5 inaccurately restates the dependency: over the zero commutative ring, s^m is the zero polynomial and has no degree or leading coefficient. The cited definition explicitly leaves both undefined for zero polynomials.",
    "context_sha256": "898f391903800e0cd1d378cc2ebf7f41ad187a9c04d019afc4084df6884bc3ea",
    "item_sha256": "c44afd9ecaa7ba7d8412403ad88a8e32a22dd10bfc53aa4d93ca9c60564ffd0b",
    "at": "2026-09-27T02:17:49.321Z"
  },
  {
    "id": "def-integral-subalgebra-of-an-arbitrary-ring-map",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "It equates one element’s monic equation with [[def-integral-ring-extension]], but that dependency requires every element of S to be integral. For Z→Z[x], 0 satisfies the displayed equation while the map is not integral.",
    "context_sha256": "5fd814e326ea69a3c75e0a6b9344a178a8abd39665d42bc248b3f451d49fb891",
    "item_sha256": "facf9bc5e54e9bd457768631cf349f86ab90c93d0f0b674ed67728dc5f59e60b",
    "at": "2026-09-27T02:18:06.665Z"
  },
  {
    "id": "cor-quasi-finite-locus-open-finite-type-algebra",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 4.1 falsely says the image A of R contains g and every y_j. For the finite map k→k×k, the generator (1,0) is integral but lies outside the diagonal image of k. The proof asserts a containment its setup does not give.",
    "context_sha256": "94061a485ebd340f07130fe9b631eab9a76c182e5198fbb0d0d26acdfc1d492a",
    "item_sha256": "99f266a4c66aceaf13bd057edd529bbc22a6f3a21dc91095c7ca82985aa82158",
    "at": "2026-09-27T02:18:20.734Z"
  },
  {
    "id": "lem-strongly-transcendental-finite-one-variable-algebra-is-nowhere-quasi-finite",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The Statement falsely claims every local fibre has dimension at least one. Take R=k, S=k[x], and q=(0). The local fibre S_q=k(x) is a field, so its spectrum has Krull dimension zero.",
    "context_sha256": "3dc196e0097b6c54c004e1b18b74230bf741c610068c51e71c01bd92f327cea3",
    "item_sha256": "d4035a0c54a018ad5b6c27d0ae2bab6c3a585a3e480e80f8f3cf3c4480a8beb9",
    "at": "2026-09-27T02:18:56.070Z"
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
