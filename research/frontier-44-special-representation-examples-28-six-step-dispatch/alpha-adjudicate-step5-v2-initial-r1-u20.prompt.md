# Step 5 batch adjudicator

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

- **Proof repair quality:** Repairs must be mathematically sound and cite dependencies accurately. State important caveats when appropriate, and write concisely without compromising correctness or completeness. Do not repeat the same argument or use unnecessary filler. Add intermediate lemmas when needed to meet prerequisites.
- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and the generated task fully. You are the Sol 6.1 high adjudicator for one batch in Step 5.1 or 7.5. The round-bound task defines the run, phase, round, rejected carriers, ownership, evidence paths, and result schema. Do not reconstruct these from historical tasks or receipts.
- Work supplier before consumer, in the task's increasing in-run dependency order. Handle every rejected tuple and group all tuples for one item together.
- Adjudicate and repair only assigned draft items in the frozen frontier at `research/frontier-44-special-representation-examples-28-six-step-step5-v2/frontier.json`. Published repairs have no Step 5 adjudication, rejudge, or item-gate obligation; record them for separate maintenance. Outside-frontier consumers also belong to maintenance, not Step 5 repair or gates.
- Judge mathematical validity directly. Inspect each rejected statement, proof, definition, actual prerequisite, contract, and page interface. Judges, sources, and earlier acceptances can be wrong. Never pretend to understand something you do not; escalate any uncertainty and any potentially defective published consumers to the owner. When uncertain, read complete relevant arguments in authoritative sources, check their hypotheses and reasoning, and state exactly what they establish. Never invent source reading, familiarity, confidence, or checks.
- Cover every assigned rejected tuple. Record confirmed fatal and nonfatal defects, false positives, and unresolved uncertainty with concrete mathematical evidence. Repair every confirmed defect, including nonfatal defects. Fatal classification controls only the convergence threshold; a sound item needs no cosmetic edit. Unresolved mathematics blocks closure.
- For a licensed repair, make the smallest logically sufficient change, preserve the content contract, Foundations boundary, and actual AC requirements, and never weaken a claim merely to pass a check. Run the focused checks named by the task; a material rewrite invalidates the prior `verification.judge` record.
- You may create and fully author new items to meet a genuine unsatisfied prerequisite of an assigned frontier repair. Identify the missing claim, consuming proof step, and why existing suppliers do not suffice; give exact hypotheses, dependencies, and source evidence. Check existing IDs, aliases, and active assignments before choosing a unique ID. Register the item in the index/registry, page, manifest, and contract through the task's integration path. For shared edits, use `tools/step5-shared-write-lock.mjs` acquire/reread/edit/check/release; do not hold the lock while researching or waiting. Include creation evidence. Such additions preserve author-origin and certification integrity, do not enlarge the frozen frontier, and do not enter its rejudgment or gate loops. Step 5.9 permits no additions.
- Propagate downstream work only when the original `## Statement` or `## Definition` changes, including lemma and corollary statements. Compare those sections directly; do not use a semantic classifier. Proof-only, citation, dependency, and metadata edits with unchanged statements do not propagate. New prerequisites count as new interfaces.
- For an interface change, inspect direct dependencies, references, and actual proof/page uses. Record exact affected clauses and paths; explain why unchanged consumers remain sound; propose only necessary minimal repairs. A candidate is not automatically defective. Continue one hop only if a necessary consumer repair changes that consumer's own Statement or Definition; never pre-expand through unchanged statements.
- Report discoveries outside your lane or the frozen frontier without editing their items. For potentially defective published consumers, give the owner/maintenance route the exact affected use and evidence; do not edit or adjudicate published items. Trace any changed published Statement or Definition to direct consumers.
- The engine routes frontier effects to three disjoint frontier-owner lanes. After frontier writers drain, separate maintenance uses three disjoint lanes for outside consumers. Maintenance reports bind exact snippets and `affected_use`, `invalidated_claim`, and `minimality` evidence; this accounting does not replace mathematical reasoning. Handle each supplier-interface event and outside consumer once, without Step 5 gate/context requeues. Every necessary maintenance Statement/Definition change propagates one more direct hop; frontier targets return to ordinary owner work. Finish frontier work and separate maintenance before certification.
- Run focused checks and report their actual results. Update only assigned files and evidence; use the task's integration path for shared ledgers. Keep mathematical findings and audit status in the canonical published-consumer ledger, operational history in run records, and preserve original round evidence.
- Return only the generated schema: `{run, phase, round, unit, input_sha256, decisions:[], reviews:[], created_items:[], downstream:[]}`. Copy identity and input hash exactly from the task.
- Include one `decisions` row per rejected tuple with `id`, `model`, `context_sha256`, `outcome` (`confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`), `reason`, `uncertain:false`, `source_urls`, and `familiar`. A confirmed fatal also needs `defect_type` (`logic`, `dependency_citation`, or `other`) justified by the finding. Never guess a category for historical evidence.
- Include a `reviews` row for every assigned item: `id`, `disposition` (`repaired` or `unaffected`), current `itemHashGuard` as `post_sha256`, `review_context_sha256`, and the same evidence fields. An unchanged item guard requires `unaffected`; explain contract/page-only repairs and set `metadata_repair_only:true` when applicable. Immediately after each review, before editing another supplier, run `node tools/step5-workflow.mjs review-contexts --run RUN --items ID` and copy both hashes. Batch IDs reviewed on the same stable state if useful. Never refresh a review hash after supplier changes without examining their effects.
- If you author a prerequisite, include a `created_items` row with `id`, `kind`, `home_page`, `batch`, direct `consumers`, `reason`, `uncertain:false`, `source_urls`, and `familiar`. Every created item also needs a review; only a newly created item uses `authored` disposition.
- List affected item IDs in `downstream`, including every direct dependency/reference consumer after a Statement/Definition change, even if its use remains sound or it already has an assigned review. This is an examination inventory, not an edit list. Record each exact affected use and disposition in the report. For a consumer missing from the dependency/reference graph, include `downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}`. Route outside consumers to separate maintenance.
- Give authoritative source URLs actually consulted when unfamiliar; `familiar:false` requires those URLs. Unresolved uncertainty is a blocker, never a false-confidence statement. Empty assignments return empty arrays. Do not claim independent review of your own repair.
- Do not write judgments, stamps, central certificates, or round state; do not launch workers or another cycle. The engine collects evidence, completes frontier repair and separate maintenance, and certifies once all writers drain. A successful dispatch alone does not close unfinished work. Repeated pending work at an earlier assigned content state holds for operator resolution.
- Rejudgment and renewed frontier adjudication, owner repair, and certification repeat until unique confirmed fatal original-frontier items in the latest round are strictly below 5% of the immutable original scope. The threshold permits the final scoped gate; it never permits unresolved defects, uncertainty, or incomplete closure.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.


---

# This dispatch

run: frontier-44-special-representation-examples-28-six-step
role: alpha-adjudicate
label: step5-v2-initial-r1-u20
covers: 20
output: research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u20.json

# Step 5 adjudicate: initial, round 1, unit 20

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-batch-20-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u20.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-44-special-representation-examples-28-six-step",phase:"initial",round:1,unit:"20",input_sha256:"a3c0decd85fdbe71b25b7ccd7e6264df187be55612edc2bcfbd9729c1e231624",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run frontier-44-special-representation-examples-28-six-step --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-kostant-adjoint-isotypic-multiplicities-have-zero-weight-rank, 1:def-the-deformed-category-o-family-and-its-specializations, 1:lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain, 2:thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules, 3:lem-wall-crossing-functors-act-on-standard-modules-by-the-two-step-extension, 11:thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules, 11:ex-wall-crossing-on-projectives-in-the-sl-two-block, 12:prop-verma-flag-multiplicities-are-standard-filtration-ranks-under-v.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-kostant-adjoint-isotypic-multiplicities-have-zero-weight-rank",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 inaccurately strengthens the supplied free-over-center interface to a symmetrized harmonic Z-basis and gr Z=R. That interface asserts only abstract freeness; PBW supplies neither additional claim. Steps 6.2–7.1 rely on this unproved strengthening.",
      "context_sha256": "7a77728eac8310c843fb4e20c9329b1fafe5a04626efa5ffec9187b5b0d92431",
      "item_sha256": "704ab58e9336377237db15f8d7146b7ccf458d8bbd751f03779fb6b5b41481b6",
      "at": "2026-10-11T15:09:39.282Z"
    },
    {
      "id": "def-the-deformed-category-o-family-and-its-specializations",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "For g=sl₂ and T=C(t), the sole closed point has residue field C(t), not C. No C-algebra map T→C exists, so the claimed complex specialization −⊗_T C_ε at every closed point of Spec T is undefined.",
      "context_sha256": "6a8087c5ce37470c6112d85da5533e98da8ab6a21a2fcbab00aa44797dc05685",
      "item_sha256": "a8e8a42acaefc4f06f3b6ec3f66392240448778b8213920f514c0665b46f906b",
      "at": "2026-10-11T15:09:39.225Z"
    },
    {
      "id": "lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F6] overstates its supplier: the interface asserts only freeness over the center, not gr Z=S(g)^g or a filtered harmonic basis. Step 2.2 relies on these additional assertions to identify the associated graded central reduction with A.",
      "context_sha256": "999de041f10881a20987937be3dbffa91f4ba6f5c0cb63b5bd6de8781ea5145d",
      "item_sha256": "923aaa42b9323132e375ac4e317dec937618df610c1d9f30a8d3bb340788b755",
      "at": "2026-10-11T15:09:26.278Z"
    },
    {
      "id": "thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.2 incorrectly bounds the image of U(n⁻)⊗U(n⁺) in Uχ by O(n^{2N−1}). Step 2.3 forces growth at least n^{2N} there. The bound from gr(K) applies to Uχ/K, not Uχ, so the stated inference is invalid.",
      "context_sha256": "d9483fd63fa9637eebe42c51afc0efae29f435c78ab52dac14acf1846e84dfde",
      "item_sha256": "4f4e135a26dcd7d0771e7871ee5e4e8d7f6a9b77da333d9f94d1868cda77e1ee",
      "at": "2026-10-11T15:10:19.001Z"
    },
    {
      "id": "lem-wall-crossing-functors-act-on-standard-modules-by-the-two-step-extension",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 extends the multiplicity/class formula to direct summands of θ_sX, which F3 does not license. For X=Δ(w·λ), the zero direct summand has all multiplicities zero, whereas the formula gives multiplicity one at w and ws.",
      "context_sha256": "f9d7d05e3c55675e3c7e9825108136f782458ce26a58fd193d95b90777733961",
      "item_sha256": "b2c0638ab61dc98e95c192ca8a47382f96d506ead31f88ff022ff35159a0a547",
      "at": "2026-10-11T15:09:43.545Z"
    },
    {
      "id": "thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The Statement omits reducedness. In rank one, take w=e=ss: θ_s²Δ(λ)≅P(s·λ)^{⊕2}, so P(e·λ) is absent, contradicting the asserted top-label summand. F2 licenses this assertion only for reduced words.",
      "context_sha256": "26f5088d803a831bdc8c8d6583cad5e74ef51cf7287a370ef224d5c9a40019f3",
      "item_sha256": "f3e91ab78501cec9d3a523f1cd512b9ca46dec120018cdb3572e866e64457d68",
      "at": "2026-10-11T15:10:57.872Z"
    },
    {
      "id": "ex-wall-crossing-on-projectives-in-the-sl-two-block",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The displayed B_s=k[a]⊗_{k[a²]}k[a](1) is infinite-dimensional over k, not two-dimensional. Only its right origin reduction B_s⊗_{k[a]}k is C(1) and two-dimensional; the dimension comparison conflates these objects.",
      "context_sha256": "36c81b9f50e255f737e10dded77ebaec5ecdd782e944dd72c82384447788712e",
      "item_sha256": "5481543c7ecbcec300d2ed9090304db49583f7bf4d9cac3d4ee7da9520affab9",
      "at": "2026-10-11T15:10:16.289Z"
    },
    {
      "id": "prop-verma-flag-multiplicities-are-standard-filtration-ranks-under-v",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.3 attributes deformed full faithfulness and the action-compatible isomorphism B(P)⊗_S R≅V_RP_R to the dictionary. Its supplied interface gives only an undeformed equivalence; the essential deformed identification and matching of idempotents remain unproved.",
      "context_sha256": "665b5c27a1eded9799e915aa91139474bc7840a3e7a3d2b21ec2fe989fcf5212",
      "item_sha256": "4f197b9192dd1183ea1b763a31666ac75171a6e9d2db8022030d585900fed7d8",
      "at": "2026-10-11T15:24:30.301Z"
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
