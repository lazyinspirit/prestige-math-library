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
label: step5-v2-initial-r1-u10
covers: 10
output: research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u10.json

# Step 5 adjudicate: initial, round 1, unit 10

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-batch-10-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u10.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-44-special-representation-examples-28-six-step",phase:"initial",round:1,unit:"10",input_sha256:"a3c0decd85fdbe71b25b7ccd7e6264df187be55612edc2bcfbd9729c1e231624",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run frontier-44-special-representation-examples-28-six-step --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-indecomposable-type-a-soergel-bimodules-are-classified-by-top-support, 1:ex-the-rank-two-bott-samelson-bimodule-and-its-character-decomposition, 4:def-invariant-intersection-form-on-a-bott-samelson-bimodule, 5:def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs, 7:def-local-intersection-form-for-a-soergel-summand, 8:lem-undeformed-lefschetz-and-hodge-riemann-restrict-to-soergel-summands, 9:lem-local-intersection-forms-embed-in-primitive-lefschetz-forms, 10:thm-deformed-hard-lefschetz-for-b-x-b-s, 11:thm-hodge-riemann-for-indecomposable-soergel-bimodules, 12:thm-soergels-character-conjecture.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-indecomposable-type-a-soergel-bimodules-are-classified-by-top-support",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F3] extends the cited Hom formula beyond its interface, which covers only pairs of Soergel objects, to flagged objects and exact Hom sequences. Step 5.1 requires these unsupported lifting surjections; the classification proof therefore has a fatal gap.",
      "context_sha256": "77817c417b57d29c8d34e3efcdb4c21cbee8c45c24f17dbdc7d4e49c8a3d6b52",
      "item_sha256": "1700ae601c52106072197d926b6fe05b5143c724fdc595f6f37937c54685d9e8",
      "at": "2026-10-11T14:59:45.074Z"
    },
    {
      "id": "ex-the-rank-two-bott-samelson-bimodule-and-its-character-decomposition",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The supplied reduction interface defines dim(overline M) as a graded Laurent polynomial. In step 1.1, the stated layers give dim(overline(B_sB_t))=v^2+2+v^{-2}, not 4. The asserted equality holds only after specializing v=1.",
      "context_sha256": "8cd5d21d9865ee03b8c8c9c79ad171d7ae65ce6dd00bd7d2df6a083febd39a39",
      "item_sha256": "f9709039253260f1ee46925f9e66440bd28a31473c8237510c2ab962b7edb299",
      "at": "2026-10-11T15:01:13.096Z"
    },
    {
      "id": "def-invariant-intersection-form-on-a-bott-samelson-bimodule",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Remark (vi) falsely infers B≅B* as graded real vector spaces from B≅DB. For the empty word B=S with n≥1, DS≅S, but (S*)^2=(S^{-2})*=0 whereas S^2≠0. The vector-space self-duality applies to the reduction, not B.",
      "context_sha256": "9146fe9908dc0b4860443b35c119d19cccfe62ce45645bed44de46f33b0a8177",
      "item_sha256": "b0cea76d024ff1fd841ac3d30fbc1e922b3780d6e538ce0d2d06e629a450a288",
      "at": "2026-10-11T15:00:39.310Z"
    },
    {
      "id": "def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The intrinsic form is normalized by a bottom Lefschetz value asserted to be nonzero by the invariant-form lemma. Its supplied interface proves nondegeneracy and positive scalar comparison, neither of which ensures that this Lefschetz value is nonzero.",
      "context_sha256": "f71e864c251a435a68ced922a2f477305e085a59d43a29a68a2d3bb3939c672a",
      "item_sha256": "0708b814bb33948ce85ade893e9d3d34c93413708a13d0c58234f044cf5cf60d",
      "at": "2026-10-11T14:59:53.928Z"
    },
    {
      "id": "def-local-intersection-form-for-a-soergel-summand",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The claimed identifications B_y^R ≅ (B_y^R)^* and M ≅ M^* misuse the cited real algebraic dual. These invariant forms are S-valued and identify bimodules with their right S-module duals, not their real algebraic duals; the transpose justification is ill-typed.",
      "context_sha256": "86a4eb84846c7fa1af5958f283d1d928634103fd2c5851a9c0b4b1168aab8dd8",
      "item_sha256": "a962e88024b306a4d79b449661a1e7b6f6bc9aafa2e6a95a33e58acf12b7231b",
      "at": "2026-10-11T15:00:05.162Z"
    },
    {
      "id": "lem-undeformed-lefschetz-and-hodge-riemann-restrict-to-soergel-summands",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Part (d) omits symmetric dimensions or an invariant complement for its direct-summand claim. In an HR string H^{-1}→H^1, V=H^1 is L-stable and a graded direct summand, but L:V^{-1}→V^1 is not an isomorphism. F2 does not license this conclusion.",
      "context_sha256": "b03249c41440946d25bc2427af490668e4bd1b90e63dc38e74b0b4aebb146aba",
      "item_sha256": "38122ff7cb8cb60e0f1df548a09541f2b9ab8ebb37fa6005720353fcdbf750d5",
      "at": "2026-10-11T15:00:40.735Z"
    },
    {
      "id": "lem-local-intersection-forms-embed-in-primitive-lefschetz-forms",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 and step 1.1 extend the cited Hom formula to arbitrary Delta-filtered sources Q and Delta_y. Its supplied interface covers only Soergel objects; these sources need not be Soergel. The asserted freeness and rank additivity, hence the restriction isomorphism, are unlicensed.",
      "context_sha256": "a4d766c7f411e838c678ebffcdca22ec1d58780f12d4b1d78e8cca50bf18905f",
      "item_sha256": "2afa0721f32a47bf8cad061bc457d5545ff4e7105a4654d91c34422206436ec4",
      "at": "2026-10-11T15:00:41.738Z"
    },
    {
      "id": "thm-deformed-hard-lefschetz-for-b-x-b-s",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 and F7 falsely assert ^1F_x(-1)=⊕_{z<x}B_z. For x=st of length 2, this includes B_e, but the cited linearity theorem forces m_{e,1}=0 by parity. The dependency supplies a sum with multiplicities, not every lower B_z once.",
      "context_sha256": "1dd15dcbf6d08362cccf9df15e54ec8c65d81096caedc1b4151eb3cc719982c4",
      "item_sha256": "cf2742ad9a54b2c02c8311d1aa35370cc39d9a14af4c462127049d56eb358473",
      "at": "2026-10-11T15:02:11.756Z"
    },
    {
      "id": "thm-hodge-riemann-for-indecomposable-soergel-bimodules",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F7 misstates the comparison lemma: the unshifted decomposition requires ys>y and S(<ys), not merely S(≤y). For y=s, S(≤s) holds but B_sB_s=B_s(1)⊕B_s(-1), with grading shifts.",
      "context_sha256": "ace8182f5e2c8900f4c7df39580598386641ce36c780cc36bb228eb18e6a14ea",
      "item_sha256": "599dc4b42f754f053aa75cc1a7824b249a3439f3c4c29655bf5997f7ec49bb7e",
      "at": "2026-10-11T15:01:19.487Z"
    },
    {
      "id": "thm-soergels-character-conjecture",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Statement and step 3.1 assert the reduced matrix on unreduced B_xB_s. For n=2, x=s, rho=alpha_s/2, zeta=1, (L_1-rho_left)^2 is nonzero right multiplication by alpha_s^2/4; the asserted matrix makes this square zero.",
      "context_sha256": "0a1d5ae29c802b4b21354a172b2bd67bde95fd22b392d5a90a49e38fed0664fd",
      "item_sha256": "2ffa2e6c1045ea1f367c8104b36df17e4657fb2a24601988f59f00b1f21d2445",
      "at": "2026-10-11T15:01:12.047Z"
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
