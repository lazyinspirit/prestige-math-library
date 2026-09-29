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
label: step7-v2-initial-r1-u8
covers: 8
output: research/frontier-36-complete-step7-v2/step7-v2-initial-r1-u8.json

# Step 7 adjudicate: initial, round 1, unit 8

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-36-complete-step7-v2/initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-36-complete-step7-v2/step7-v2-initial-r1-u8.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run:"frontier-36-complete",phase:"initial",round:1,unit:"8",input_sha256:"eb847670bab40a2439e5cdb871b71db529fdcd8349675a0f63eb1fb3e18045de",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-36-complete --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

Assigned item order: 0:def-shifted-graded-module, 1:def-standard-open-proj, 4:def-ample-invertible-sheaf, 4:def-globally-generated-sheaf, 4:def-very-ample-invertible-sheaf-relative, 5:lem-relative-proj-affine-local-gluing, 5:thm-projective-space-as-proj, 6:def-relative-proj-quasi-coherent-graded-algebra, 6:thm-line-bundle-sections-define-projective-map, 8:lem-projective-morphism-relative-proj-presentation.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  {
    "id": "def-shifted-graded-module",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The localization justification misstates degrees: m/f has degree d in T^{-1}(M(n)) when deg_M(m)=n+d+deg(f), not n+d. For S=M=k[x], n=0, T={x^r}, the degree -1 element 1/x cannot have a numerator in M_{-1}=0.",
    "context_sha256": "1f1a7c7ac2b279b630240661c1406b495c401c85003815c4e759cc8e45cf3763",
    "item_sha256": "7e4b591dc6f3303e5128958c8fee68005dd59a0706f43458d322db6245749e10",
    "at": "2026-09-29T11:28:01.030Z"
  },
  {
    "id": "def-standard-open-proj",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The claim that standard opens are closed under finite intersections fails for the empty intersection. For S=C[x,y], every positive-degree homogeneous f lies in a homogeneous prime of Proj S, so no D_+(f) equals Proj S.",
    "context_sha256": "db0b11396c67eb506146b0d955ab6f46fc6240bbe240fa7f6bf2ef651c42898c",
    "item_sha256": "cc89f6d3352d741c41e95b86d24802620fd5b531f868e3b7a95fae8f5e0d2ca0",
    "at": "2026-09-29T11:28:06.437Z"
  },
  {
    "id": "def-ample-invertible-sheaf",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The inline proof that X_s is open has an invalid step: a section f of O_X is not a continuous map from X to a topological ring, so continuity cannot show its residue-field zero locus is closed. This leaves the definition’s required well-definedness unjustified.",
    "context_sha256": "0125a828e545d63c91837ee52b5bb1269749f3a2f23aaa9c6055cc3481ef8ba5",
    "item_sha256": "0611e51f6fb271d9193f0da817d769e613caa52735052051b66ad39b9198a236",
    "at": "2026-09-29T11:28:28.342Z"
  },
  {
    "id": "def-globally-generated-sheaf",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The finiteness remark asserts that the stalkwise surjectivity locus of any sheaf morphism is open. This is false: for 0→⊕_{a∈ℂ}k(a) on A¹_ℂ, that locus is the nonopen generic point. Openness here needs a separate argument using L’s local freeness.",
    "context_sha256": "ada4e614ce19e3372842dda8cd9aded6ce14b3ffbe352c591db2ed3d282f8dd5",
    "item_sha256": "1528f91bb8833063fb25866a97a0530d28e50fc0747592b2c5809eb25c259646",
    "at": "2026-09-29T11:28:27.164Z"
  },
  {
    "id": "def-very-ample-invertible-sheaf-relative",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The final remark says [[thm-projective-space-as-proj]] proves that the chart-defined O(1) agrees with the Proj twist and identifies their frames. Its supplied interface establishes only a scheme isomorphism and naturality, so that cited comparison is unsupported.",
    "context_sha256": "71f8817fa3d1df9e66973621310337770c61919dfbc651a3f4b8a9ffa2b61c49",
    "item_sha256": "425ccbe1c0396d7d94152c9391ab6fc6e74f2a4e2aa311b31434a2b6658b508b",
    "at": "2026-09-29T11:28:44.899Z"
  },
  {
    "id": "lem-relative-proj-affine-local-gluing",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F5] attributes graded localization commuting with base change to thm-affine-quasi-coherent-equivalence, whose supplied interface does not state it. Step 2.1 relies on that unsupported dependency restatement.",
    "context_sha256": "d756fce6a2c7712d10a99125f93a2f42f48216f49e65b7233c2d5f200e441370",
    "item_sha256": "b5d9bcbf4169514b0b1d77e21cfca88446298b3651784d8761533575ebb55b9d",
    "at": "2026-09-29T11:28:21.755Z"
  },
  {
    "id": "thm-projective-space-as-proj",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F5] inaccurately restates [[lem-standard-opens-proj-affine]] as a gluing theorem. Its interface proves only that standard opens are affine; it does not supply the gluing uniqueness invoked in steps 2.1 and 3.1.",
    "context_sha256": "d0d62aa6612966047e3cadedff53834a12a36d299f0d149207884336ffc9c4e6",
    "item_sha256": "bae4f0133f00cb64ce432d56d73550345583a5b40abcbbc30cd12371aaab824d",
    "at": "2026-09-29T11:28:09.654Z"
  },
  {
    "id": "def-relative-proj-quasi-coherent-graded-algebra",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The twist-gluing argument falsely says nested affine opens have identified graded rings. For S=Spec k[t], A=O_S[x], U=S and V=D(t), these rings are k[t,x] and k[t,t⁻¹,x]. The cited lemma identifies Proj restrictions, not the rings or their shifted modules.",
    "context_sha256": "b67e88f8cf16831c843fb81ece24ab9659e23e72fed75f1337799a3a5ff5ca3f",
    "item_sha256": "45ad44561fa7b085d1434afef7f740a0b230b47a4c29d318991e5961b9a2541c",
    "at": "2026-09-29T11:28:31.643Z"
  },
  {
    "id": "thm-line-bundle-sections-define-projective-map",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The title asserts a projective morphism, which the hypotheses do not ensure. For X=A¹_k, L=O_X, and s₀=1, the map is A¹_k→P⁰_k=Spec k; it is not proper, hence not projective.",
    "context_sha256": "b535985750f2cf3081e7177f0ca9dabbbc5cd8f3a3157dcaf2d5747dd0ef2d7d",
    "item_sha256": "38658bea5a236195cf80a3b76d6698480a076b7038936cbbf6bc304cce432b65",
    "at": "2026-09-29T11:28:21.338Z"
  },
  {
    "id": "lem-projective-morphism-relative-proj-presentation",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Claim (3) and step 4.1 are false: for every closed subscheme Z of P^n_S, a global quasi-coherent graded ideal sheaf I⊂O_S[x_0,…,x_n] gives Z≅Proj_S(O_S[x_0,…,x_n]/I). This needs no further hypotheses.",
    "context_sha256": "0f2a6c819ea355854f30da4c9c4640b8e3a0cc18dbd15d1a7b958e6b61ba60f6",
    "item_sha256": "491acff53401de021a30f3a613086737efed2ec55f46f44b9bc172b2122667f3",
    "at": "2026-09-29T11:28:39.606Z"
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
