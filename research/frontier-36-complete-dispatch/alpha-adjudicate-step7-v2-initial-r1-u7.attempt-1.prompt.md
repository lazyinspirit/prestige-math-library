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
label: step7-v2-initial-r1-u7
covers: 7
output: research/frontier-36-complete-step7-v2/step7-v2-initial-r1-u7.json

# Step 7 adjudicate: initial, round 1, unit 7

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-36-complete-step7-v2/initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-36-complete-step7-v2/step7-v2-initial-r1-u7.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run:"frontier-36-complete",phase:"initial",round:1,unit:"7",input_sha256:"eb847670bab40a2439e5cdb871b71db529fdcd8349675a0f63eb1fb3e18045de",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-36-complete --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

Assigned item order: 0:lem-fitting-ideals-presentation-independent, 3:def-internal-hom-qc-sheaves, 3:cex-stalk-versus-fibre-module, 4:thm-locally-free-locus-finite-presentation-open, 5:thm-quasi-coherence-check-affine-cover, 5:ex-fitting-ideal-two-by-two-presentation, 6:lem-pullback-qc-module-quasi-coherent, 6:lem-tensor-qc-modules-quasi-coherent, 7:def-symmetric-algebra-qc-module, 7:thm-coherent-sheaves-abelian-noetherian-scheme, 8:lem-symmetric-algebra-qc-and-base-change.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  {
    "id": "lem-fitting-ideals-presentation-independent",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The title is false as written: individual minors depend on the presentation. For M=Z/2Z, the presentations [2] and [2 0] have 1×1 minors {2} and {2,0}. The proof establishes independence only of the ideal they generate.",
    "context_sha256": "7070babc27cca1e9ddd9a1b0a77cf11b448cae38e5b89338ab25353ba890f39b",
    "item_sha256": "26a62785706f4beacea1f56bfd41592671cabfe8f792385d50dffce599f760de",
    "at": "2026-09-29T11:27:52.097Z"
  },
  {
    "id": "def-internal-hom-qc-sheaves",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The definition claims that a lemma on this page proves quasi-coherence of the internal Hom for finitely presented F and quasi-coherent G, but the full item contains no such lemma or proof, and justified_by is empty.",
    "context_sha256": "b389d743a9ac0b714e656e9b4ff698609f1d17993e2352c22563719064877afd",
    "item_sha256": "2c876567d66dda074be630b74f1dc195545401ef8c22860663c100f885a47932",
    "at": "2026-09-29T11:27:31.001Z"
  },
  {
    "id": "cex-stalk-versus-fibre-module",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "L3 attributes the local-ring maximal ideal pA_p to def-affine-scheme-spectrum, whose interface explicitly defines only the underlying topological space. That citation does not license the restatement used in step 1.1.",
    "context_sha256": "c3760aa7e6179da65f80b976cc33e6bcb0bd5a7b3a993feb770bf72bc165831c",
    "item_sha256": "72fc4bf3b2d62d936d6f08cb13628da850db6bb4cbb22564784092aa7f4e0ef5",
    "at": "2026-09-29T11:28:00.509Z"
  },
  {
    "id": "thm-locally-free-locus-finite-presentation-open",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 2.1 claims the canonical map M→M⊗_Aκ(p) is surjective. For A=M=ℤ and p=(0), it is ℤ→ℚ, which is not surjective. The stated justification for lifting a fibre basis is therefore invalid.",
    "context_sha256": "b94acfab7e59b14f9c4eabfab32f2b105a61fe223071beb8d35c3bdcd034ffab",
    "item_sha256": "75b641c9816afbc0484d12395d3518b7be7d579a0d550dd8f306e16ccd4b7092",
    "at": "2026-09-29T11:27:56.001Z"
  },
  {
    "id": "thm-quasi-coherence-check-affine-cover",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The compatibility square is ill-typed: its right vertical arrow is marked as an identity from F|W to ˜Γ(W,F), which are only canonically isomorphic via κ_W. The stated square therefore cannot commute as drawn.",
    "context_sha256": "2d8751fa6a394533125bdb2665a44b61df0c1693f59194f7861121a10853a46b",
    "item_sha256": "fa3adefc7fd17f09310c2845e7db803672812182102da839fefa90a2339b6a4e",
    "at": "2026-09-29T11:27:08.440Z"
  },
  {
    "id": "ex-fitting-ideal-two-by-two-presentation",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F9] inaccurately restates the polynomial-ring universal property: a coefficient homomorphism k→S must be specified. As written it asserts a map k[x,y]→S for every ring S; for k=Q and S=F₂, no such unital map exists.",
    "context_sha256": "fcb8d2d742d0f8dd1048b6186df894843e994c0fee6410b6275060ba911f191a",
    "item_sha256": "44678c3befb6741f4583fb3a040a4ef2ce6c39855df4a794cb9778447a99be16",
    "at": "2026-09-29T11:27:52.644Z"
  },
  {
    "id": "lem-pullback-qc-module-quasi-coherent",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F5] attributes D(b)≅Spec(B_b) to def-affine-scheme-spectrum, which defines only the topological spectrum and explicitly postpones its structure sheaf. Step 4.1 relies on D(b) being affine, but the cited interface does not establish it.",
    "context_sha256": "29071c07c6e6452ba364a510ac63d2a4ab685a1735e367440da46096e61cbb2c",
    "item_sha256": "96384cce2bed643b337afb88b9d1c59488710f09409778d3ca6b3a7bcd6f071e",
    "at": "2026-09-29T11:27:48.267Z"
  },
  {
    "id": "lem-tensor-qc-modules-quasi-coherent",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "F5 wrongly attributes D(f)≅Spec(A_f) to def-affine-scheme-spectrum, which defines only the topological spectrum and explicitly defers the structure sheaf. Step 4.1 needs that affine-scheme identification, so the cited interfaces do not justify its cover argument.",
    "context_sha256": "cdc94756bdca8841f1c8555df59c2760e541ecbc9e9232f4a8b4819f50f43e8a",
    "item_sha256": "ff0f7c6e496bc93f271e72b9f7aa7b79071ea4cb6a01bb56d3f5ccf988a3c9cd",
    "at": "2026-09-29T11:27:29.303Z"
  },
  {
    "id": "def-symmetric-algebra-qc-module",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The overlap map is ill-typed: θ_{U,W}∘θ_{U',W}^{−1} cannot be composed. The required map Sym_U|_W→Sym_{U'}|_W is θ_{U',W}^{−1}∘θ_{U,W}, so the stated gluing datum is not established.",
    "context_sha256": "2da9da597f31e946665be7643d615af016561a342ca7d1053d77003d3e7f1cb8",
    "item_sha256": "22ba197745ddfb33b42bcb19f92d0adb3c8f905143987123c19e383517383575",
    "at": "2026-09-29T11:27:28.126Z"
  },
  {
    "id": "thm-coherent-sheaves-abelian-noetherian-scheme",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F7] overstates its dependency: the supplied principal-localisation corollary gives only a homeomorphism of spaces, not a scheme isomorphism D(f)≅Spec(A_f). Steps 1.1 and 1.2 require that unproved affine-scheme identification.",
    "context_sha256": "4bbfb779dd7a6de2da70cecf1d54d35be45423e1180be6fb3a30524a0149e08d",
    "item_sha256": "e2caf25585985f18d160be5ac982d5ca7447854a7f8210c51990cec488b96e1a",
    "at": "2026-09-29T11:27:51.075Z"
  },
  {
    "id": "lem-symmetric-algebra-qc-and-base-change",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F6] falsely equates balanced maps B×M→D with A-bilinear maps. For A=B=M=D=ℤ[x], (b,m)↦the constant term of bm is balanced but not A-linear. The cited tensor-product theorem does not license this restatement.",
    "context_sha256": "9680b7efdb4b6e232e8aef72da8ae7ada4e02374b46343d7a53bde07663ca8bb",
    "item_sha256": "10f28f163d8f7561372cf9e6db6c220a97a72f9e70cd3e9a6294a99694c85ba8",
    "at": "2026-09-29T11:28:31.838Z"
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
