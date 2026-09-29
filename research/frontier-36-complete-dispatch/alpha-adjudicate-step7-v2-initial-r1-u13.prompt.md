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
label: step7-v2-initial-r1-u13
covers: 13
output: research/frontier-36-complete-step7-v2/step7-v2-initial-r1-u13.json

# Step 7 adjudicate: initial, round 1, unit 13

Read briefs/step7-adjudicator.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-36-complete-step7-v2/initial-1.json.

Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-36-complete-step7-v2/step7-v2-initial-r1-u13.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may fully author and register a genuinely missing prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

Return JSON {run:"frontier-36-complete",phase:"initial",round:1,unit:"13",input_sha256:"eb847670bab40a2439e5cdb871b71db529fdcd8349675a0f63eb1fb3e18045de",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-36-complete --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

Assigned item order: 0:def-translation-invariant-fourier-multiplier-on-schwartz-space, 0:thm-hausdorff-young-for-periodic-fourier-coefficients, 1:lem-ltwo-fourier-multiplier-bound, 2:ex-heat-and-poisson-semigroups-as-fourier-multipliers, 2:ex-translation-and-differentiation-multiplier-symbols, 6:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces, 7:lem-bessel-potentials-shift-sobolev-order-isometrically, 7:ex-negative-sobolev-order-containing-a-dirac-mass.

Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  {
    "id": "def-translation-invariant-fourier-multiplier-on-schwartz-space",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "The claimed pairing ∫gφ for every Schwartz φ need not exist even when g is locally integrable and its distribution is tempered. In one dimension, g=(sin(e^{x²}))′ is a tempered distribution, but ge^{-x²} is not Lebesgue integrable.",
    "context_sha256": "8a2116b88e2134ec1940fc0858f54bf97bebf500a8c638f531835d4a73ab7d8b",
    "item_sha256": "8dce75d7ad4213e63d117774bd9226f6af0575feca4fea8f14d2ac6c7d0a958b",
    "at": "2026-09-29T11:22:24.596Z"
  },
  {
    "id": "thm-hausdorff-young-for-periodic-fourier-coefficients",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 3.1 gives T_p codomain L^{p'}(𝕋), but interpolation of the coefficient operator gives ℓ^{p'}(ℤ). As written, step 4.1 cannot compare its outputs with the L¹ coefficient extension, and step 5.1 cannot treat T_pf as a coefficient sequence.",
    "context_sha256": "d1ed061044444e1a2af61508e176f505b355f3cbbbd87937faa9e88ef3af625d",
    "item_sha256": "122b7220a8be46976c4cb4c211f673ea6e825855d9620929209a62703c13334f",
    "at": "2026-09-29T11:22:26.749Z"
  },
  {
    "id": "lem-ltwo-fourier-multiplier-bound",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 3.3 falsely asserts ‖S_m g‖₂=‖M_m g‖₂. Plancherel gives ‖S_m g‖₂=‖M_m F₂g‖₂. The superlevel-set indicator must be transported back by F₂⁻¹, so the claimed lower bound on ‖S_m‖ does not follow.",
    "context_sha256": "4aadaef1164edf542de542d13a4f7dbe3746ba199ad1fcc55914737e5ea283f8",
    "item_sha256": "10029b827f0c573102e204d3f78762e474436586c242ee6322d072c752e18f6b",
    "at": "2026-09-29T11:22:16.652Z"
  },
  {
    "id": "ex-heat-and-poisson-semigroups-as-fourier-multipliers",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "F7 inaccurately restates the multiplier lemma for every locally integrable g. Such u_g need not be tempered: for g(x)=e^{|x|²}, its pairing with the Schwartz function e^{-|x|²} diverges. The cited S′ multiplier identity cannot apply to u_g.",
    "context_sha256": "7e5122cceb8b8b4382b4586d45092a3054540d25f0560a7346625c8d78e6904c",
    "item_sha256": "5f2c6386c7a3fe84fc3a21bfd7c148e17ab4125bd9601244230cdc1d01ebdfd0",
    "at": "2026-09-29T11:22:48.796Z"
  },
  {
    "id": "ex-translation-and-differentiation-multiplier-symbols",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Step 1.3 claims the bump supplied by F11 lies in C_c^\u001einfty. F11 only places its support inside the unbounded half-space U; it does not make that support compact. Thus the construction of the Schwartz functions f_N, needed for the unboundedness proof, is unjustified.",
    "context_sha256": "55a46246b1a663273a577681b2cbc555ea0665fce2804621db0ece51f2f74efc",
    "item_sha256": "35740e79e4361eb80808a1fdb3d8198ce22e145a4296ed5601d610a70c5b1a6e",
    "at": "2026-09-29T11:22:37.023Z"
  },
  {
    "id": "thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "This item restates its direct dependency [F1] verbatim in substance: W_s is exactly F1's M_s, and steps 1.1 and 4.1 simply rename that set and invoke F1 for the entire bijection, uniqueness, and norm identity. It supplies no distinct theorem or proof route.",
    "context_sha256": "10be4607ba27520418616f0c65f9a76491f0283837762584b3bb0fb614234736",
    "item_sha256": "16d1bc75e625cd6f12e6df19e9b639a5ba69cf328ede515a9ea69a701bff1a62",
    "at": "2026-09-29T11:22:42.784Z"
  },
  {
    "id": "lem-bessel-potentials-shift-sobolev-order-isometrically",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "Part 4 uses g defined in the preamble as the H^s weighted Fourier class of U. For U∈H^{s+1}, the derivative’s H^s class is 2πiξ_j g, not 2πiξ_j⟨ξ⟩⁻¹g. The proof silently redefines g at order s+1.",
    "context_sha256": "76ccca425141a33eb3a18ade8c6f732aac37028c5322e46c403d124854a86bef",
    "item_sha256": "4a0bc681b0257c15b88ce13169a86f68fa8a90608f69b052a81638718274eb7d",
    "at": "2026-09-29T11:22:54.666Z"
  },
  {
    "id": "ex-negative-sobolev-order-containing-a-dirac-mass",
    "model": "gpt-6-sol",
    "keep": false,
    "reason": "[F6] falsely says {0<|x|≤1} contains B(0,1/2); that ball contains 0. The cited positive-ball measure result therefore does not justify the claimed positive surface mass as written.",
    "context_sha256": "5e3e904b217b314338e1f5a723535a0250a146b8b49882b395baa8d70d453b3f",
    "item_sha256": "719470d9db1c6af3f23b365f25907c16d67e88bb008308e79b767a9d97cde168",
    "at": "2026-09-29T11:22:33.585Z"
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
