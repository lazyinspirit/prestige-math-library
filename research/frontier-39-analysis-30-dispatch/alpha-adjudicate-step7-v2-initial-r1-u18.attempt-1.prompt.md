# Step 7 batch adjudicator

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

- **Proof repair quality:** Repairs must be mathematically sound and cite dependencies accurately. State important caveats when appropriate, and write concisely without compromising correctness or completeness. Do not repeat the same argument or use unnecessary filler. Add intermediate lemmas when needed to meet prerequisites.
- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and the generated task fully. You are the Sol 6.1 high adjudicator for one batch in Step 7.1 or 7.5. The round-bound task defines the run, phase, round, rejected carriers, ownership, evidence paths, and result schema. Do not reconstruct these from historical tasks or receipts.
- Work supplier before consumer, in the task's increasing in-run dependency order. Handle every rejected tuple and group all tuples for one item together.
- Adjudicate and repair only assigned draft items in the frozen frontier at `research/frontier-39-analysis-30-step7-v2/frontier.json`. Published repairs have no Step 7 adjudication, rejudge, or item-gate obligation; record them for separate maintenance. Outside-frontier consumers also belong to maintenance, not Step 7 repair or gates.
- Judge mathematical validity directly. Inspect each rejected statement, proof, definition, actual prerequisite, contract, and page interface. Judges, sources, and earlier acceptances can be wrong. Never pretend to understand something you do not; escalate any uncertainty and any potentially defective published consumers to the owner. When uncertain, read complete relevant arguments in authoritative sources, check their hypotheses and reasoning, and state exactly what they establish. Never invent source reading, familiarity, confidence, or checks.
- Cover every assigned rejected tuple. Record confirmed fatal and nonfatal defects, false positives, and unresolved uncertainty with concrete mathematical evidence. Repair every confirmed defect, including nonfatal defects. Fatal classification controls only the convergence threshold; a sound item needs no cosmetic edit. Unresolved mathematics blocks closure.
- For a licensed repair, make the smallest logically sufficient change, preserve the content contract, Foundations boundary, and actual AC requirements, and never weaken a claim merely to pass a check. Run the focused checks named by the task; a material rewrite invalidates the prior `verification.judge` record.
- You may create and fully author new items to meet a genuine unsatisfied prerequisite of an assigned frontier repair. Identify the missing claim, consuming proof step, and why existing suppliers do not suffice; give exact hypotheses, dependencies, and source evidence. Check existing IDs, aliases, and active assignments before choosing a unique ID. Register the item in the index/registry, page, manifest, and contract through the task's integration path. For shared edits, use `tools/step7-shared-write-lock.mjs` acquire/reread/edit/check/release; do not hold the lock while researching or waiting. Include creation evidence. Such additions preserve author-origin and certification integrity, do not enlarge the frozen frontier, and do not enter its rejudgment or gate loops. Step 7.9 permits no additions.
- Propagate downstream work only when the original `## Statement` or `## Definition` changes, including lemma and corollary statements. Compare those sections directly; do not use a semantic classifier. Proof-only, citation, dependency, and metadata edits with unchanged statements do not propagate. New prerequisites count as new interfaces.
- For an interface change, inspect direct dependencies, references, and actual proof/page uses. Record exact affected clauses and paths; explain why unchanged consumers remain sound; propose only necessary minimal repairs. A candidate is not automatically defective. Continue one hop only if a necessary consumer repair changes that consumer's own Statement or Definition; never pre-expand through unchanged statements.
- Report discoveries outside your lane or the frozen frontier without editing their items. For potentially defective published consumers, give the owner/maintenance route the exact affected use and evidence; do not edit or adjudicate published items. Trace any changed published Statement or Definition to direct consumers.
- The engine routes frontier effects to three disjoint frontier-owner lanes. After frontier writers drain, separate maintenance uses three disjoint lanes for outside consumers. Maintenance reports bind exact snippets and `affected_use`, `invalidated_claim`, and `minimality` evidence; this accounting does not replace mathematical reasoning. Handle each supplier-interface event and outside consumer once, without Step 7 gate/context requeues. Every necessary maintenance Statement/Definition change propagates one more direct hop; frontier targets return to ordinary owner work. Finish frontier work and separate maintenance before certification.
- Run focused checks and report their actual results. Update only assigned files and evidence; use the task's integration path for shared ledgers. Keep mathematical findings and audit status in the canonical published-consumer ledger, operational history in run records, and preserve original round evidence.
- Return only the generated schema: `{run, phase, round, unit, input_sha256, decisions:[], reviews:[], created_items:[], downstream:[]}`. Copy identity and input hash exactly from the task.
- Include one `decisions` row per rejected tuple with `id`, `model`, `context_sha256`, `outcome` (`confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`), `reason`, `uncertain:false`, `source_urls`, and `familiar`. A confirmed fatal also needs `defect_type` (`logic`, `dependency_citation`, or `other`) justified by the finding. Never guess a category for historical evidence.
- Include a `reviews` row for every assigned item: `id`, `disposition` (`repaired` or `unaffected`), current `itemHashGuard` as `post_sha256`, `review_context_sha256`, and the same evidence fields. An unchanged item guard requires `unaffected`; explain contract/page-only repairs and set `metadata_repair_only:true` when applicable. Immediately after each review, before editing another supplier, run `node tools/step7-workflow.mjs review-contexts --run RUN --items ID` and copy both hashes. Batch IDs reviewed on the same stable state if useful. Never refresh a review hash after supplier changes without examining their effects.
- If you author a prerequisite, include a `created_items` row with `id`, `kind`, `home_page`, `batch`, direct `consumers`, `reason`, `uncertain:false`, `source_urls`, and `familiar`. Every created item also needs a review; only a newly created item uses `authored` disposition.
- List affected item IDs in `downstream`, including every direct dependency/reference consumer after a Statement/Definition change, even if its use remains sound or it already has an assigned review. This is an examination inventory, not an edit list. Record each exact affected use and disposition in the report. For a consumer missing from the dependency/reference graph, include `downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}`. Route outside consumers to separate maintenance.
- Give authoritative source URLs actually consulted when unfamiliar; `familiar:false` requires those URLs. Unresolved uncertainty is a blocker, never a false-confidence statement. Empty assignments return empty arrays. Do not claim independent review of your own repair.
- Do not write judgments, stamps, central certificates, or round state; do not launch workers or another cycle. The engine collects evidence, completes frontier repair and separate maintenance, and certifies once all writers drain. A successful dispatch alone does not close unfinished work. Repeated pending work at an earlier assigned content state holds for operator resolution.
- Rejudgment and renewed frontier adjudication, owner repair, and certification repeat until unique confirmed fatal original-frontier items in the latest round are strictly below 5% of the immutable original scope. The threshold permits the final scoped gate; it never permits unresolved defects, uncertainty, or incomplete closure.


---

# This dispatch

run: frontier-39-analysis-30
role: alpha-adjudicate
label: step7-v2-initial-r1-u18
covers: 18
output: research/frontier-39-analysis-30-step7-v2/step7-v2-initial-r1-u18.json

# Step 7 adjudicate: initial, round 1, unit 18

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/step7-v2-initial-r1-u18.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-39-analysis-30",phase:"initial",round:1,unit:"18",input_sha256:"9338524b8f90ef76ff4d0d3c41b2d942e870edbc6da3d7062fa8aeac770c3e1f",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-39-analysis-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:lem-sectorial-form-angle-controls-the-numerical-range-of-its-operator, 3:lem-taylor-expansion-with-integral-remainder-for-banach-valued-curves, 5:lem-dunford-contour-construction-satisfies-the-semigroup-law, 6:thm-analytic-semigroup-smoothing-estimates, 9:cor-abstract-parabolic-smoothing, 9:rem-real-banach-spaces-require-complexification-for-analyticity, 9:cex-a-time-discontinuous-forcing-can-block-classical-regularity-at-its-jump, 15:cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup, 17:ex-sectorial-nonselfadjoint-multiplication-generator.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-sectorial-form-angle-controls-the-numerical-range-of-its-operator",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 fails for H=V={0}, a=0 and M=theta=0: A is bounded and the set of normalized values is empty, but the cited numerical-range interface defines W(0)={0} on the zero space. The asserted equality needs H nonzero.",
      "context_sha256": "9cb629eff69c0648f072cf6c25a2817078900481162855bbb61ef6f1fad5dd53",
      "item_sha256": "6500e943d80e49d59aa813767a1240ada5e53fc60768c5bd5ef1615dc5203401",
      "at": "2026-10-06T02:14:11.666Z"
    },
    {
      "id": "lem-taylor-expansion-with-integral-remainder-for-banach-valued-curves",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "For h<0, [t,t+h] is empty, so the containment hypothesis does not ensure t+h∈I. Take I=(0,1), u(s)=s, t=1/2, h=-1: all hypotheses hold, but u(-1/2) is undefined. Require the segment between t and t+h to lie in I.",
      "context_sha256": "81d2df7a276d4d3543df3b21d6ec34b594d8105eb2ab56e77a9ceb3ff980b1fe",
      "item_sha256": "543334298dae176348f37bd7d5df53d9714d0a1ca489b21ecc268182587a4576",
      "at": "2026-10-06T02:12:49.568Z"
    },
    {
      "id": "lem-dunford-contour-construction-satisfies-the-semigroup-law",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[L2] asserts its second identity for every μ∈ρ(A), but A=-I is sectorial and has 0∈ρ(A), where μ^{-1} is undefined. The claimed restatement requires μ≠0 and restriction to D(A).",
      "context_sha256": "22d05df70017fed1dc2aecca4465afd0cde005c0b0f44b767870ab35eb8e7409",
      "item_sha256": "9f524ea3bd910e60f0fb98019e24cd63109193d6a73e54d9d1140ab9569f56b5",
      "at": "2026-10-06T02:13:28.386Z"
    },
    {
      "id": "thm-analytic-semigroup-smoothing-estimates",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "L1 falsely claims convergence throughout Σδ for a fixed contour. For A=0, δ=π/2, θ=3π/4 and z=e^{iπ/3}, the lower-ray integrand grows exponentially. The supplier requires θ>π/2+|arg z|.",
      "context_sha256": "4097ca4fd5206144c961457d33d6ad72ada0ce3192e88e583bbb4cbf812f3c0f",
      "item_sha256": "b3ada16d25f00dd1884753b9b8083fdab13d9f442f21a4c92684a367fadc2094",
      "at": "2026-10-06T02:13:42.270Z"
    },
    {
      "id": "cor-abstract-parabolic-smoothing",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "L1 drops the smoothing supplier's vertex-0 hypothesis. The statement permits A=I, sectorial with vertex 1, and T(t)=e^tI; no global bound ||AT(t)||≤C_1/t exists. Thus L1 inaccurately restates its dependency and does not license the cited smoothing constant.",
      "context_sha256": "cc2f3dced72590fe0f877bc367f3518743ab44a5982d8ca326ab9f8cc1cb5e19",
      "item_sha256": "ac61681af9b18a02464bdc35a5d6f71f7a84e3b6bbf174fb4178154265060c02",
      "at": "2026-10-06T02:15:02.863Z"
    },
    {
      "id": "rem-real-banach-spaces-require-complexification-for-analyticity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The claim that only real-time operators preserve X×{0} is false. On X=R, the bounded analytic semigroup T̃_C(z)=I preserves X×{0} at every nonreal time as well. Preservation at real times is guaranteed, but not exclusive.",
      "context_sha256": "95d6c12bae6fd2209b05185fc9e05edabad4365d0984087314eee7f90256cf21",
      "item_sha256": "895e5c0fe36d126eb6aeabc1e91ce87e55e122e8d77bdeceb3d61a204a048a44",
      "at": "2026-10-06T02:15:00.434Z"
    },
    {
      "id": "cex-a-time-discontinuous-forcing-can-block-classical-regularity-at-its-jump",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[L3] and step 3.1 misstate the classical-solution interface: Au must be continuous, and the equation is required only on (0,T₀), with endpoint equations conditional on a continuous extension of f. They assert it unconditionally at every point.",
      "context_sha256": "cb26f25ddec347c38e65948764444adc7d400f50450b40975d2a33a5d33893d8",
      "item_sha256": "64e533253fd16db54c0898c4412b7d2872b67897c1891c200afc9df36671544e",
      "at": "2026-10-06T02:16:05.129Z"
    },
    {
      "id": "cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "L16 and step 5.1 invoke rem-regularity-estimates-do-not-create-boundary-compatibility, whose supplied interface assumes AC. The item expressly restricts AC to clause (2), omitting this dependency's hypothesis elsewhere.",
      "context_sha256": "0ca5e6d0b379f3bf3049f7950df7a81610d7b71daa5e4d0ba4316a1e4912b6fd",
      "item_sha256": "dfb6148e5d75b44eaad5d8b37b0929d6cb88ab3fe2a70e49e4e2101e6499a504",
      "at": "2026-10-06T02:14:05.613Z"
    },
    {
      "id": "ex-sectorial-nonselfadjoint-multiplication-generator",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.2 defines E_n using 1/n and asserts bounds involving 1/n for every n. Under the library convention 0∈ℕ, E_0 and these bounds are undefined. The sequence must use 1/(n+1) or explicitly restrict to n≥1.",
      "context_sha256": "573fa31de7f9553271e726a2df6fe1cb856cc0fd7fedd8380ff9c38be0b486f7",
      "item_sha256": "0d511c63fb5157d27a6ee06a20b303ccecda77d1a9d4a9d4814e12f2505665cc",
      "at": "2026-10-06T02:15:50.759Z"
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
