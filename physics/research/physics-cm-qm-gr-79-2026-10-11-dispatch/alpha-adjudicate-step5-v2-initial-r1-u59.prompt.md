# Mandatory physics instructions

Read `CLAUDE.md`, `SCHEMA.md`, and `../PHYSICS-CONTENT-MODEL.md`. Follow the assigned role and scope. These rules apply to every physics framework.

**Define, do not merely name.** Be as mathematically rigorous and explicit as possible. Before using a technical term, give its mathematical definition or identify an exact earlier definition and state its relevant content. Specify objects, domains, maps, regularity, hypotheses, and conventions. Use published, draft or planned mathematics suppliers with exact statements, hypotheses and honest proof status; complete remaining gaps locally.

**Example—classical EM:** write $\mathbf E,\mathbf B:\Omega\times I\to\mathbb R^3$, with spatial region $\Omega\subseteq\mathbb R^3$, time interval $I$, and stated regularity; at fixed time these are spatial vector fields. Specify units. Do not assume smoothness across point charges or surface sources; state exclusions or use an appropriate weak/distributional formulation. Likewise, define a worldline as a curve with specified domain and conditions, and a reference frame as a precise geometric object appropriate to the framework.

**Model deductions and empirical observations are distinct.** A physics proof establishes a logical consequence of explicitly stated model postulates, mathematical hypotheses and idealizations; it does not establish that the model or its postulates describe nature. Experiments report source-backed observations with apparatus, calibration, sampling and uncertainty qualifications. Comparing predictions with observations tests the combined model and apparatus assumptions; agreement is evidence, not a deductive proof of the model. Explicitly distinguish adopted assumptions, derived predictions, reported observations and statistical inference. If a deduction uses measured inputs, state them as qualified empirical premises and carry their uncertainty and conditions into the conclusion.

**Evidence is statistical.** Separate predictions, observations, and inference. State preparation, apparatus assumptions, sampling model, uncertainty, and source limitations. Never invent measurements or statistical precision. Carry empirical qualifications into downstream conclusions.

**Example—double slit:** each detection is localized; fringes concern the accumulated distribution. A finite sample can lack visible fringes with nonzero probability under ordinary coherent sampling models. Agreement does not prove quantum mechanics; missing fringes do not automatically falsify it. Test a specified competing model, not “all classical physics.” A p-value is not the probability that a theory is false. Classical waves also interfere, and reviewer confidence is not empirical certainty.

Postulates are adopted assumptions; experiments report source-backed observations, not proofs. Physics theorems and thought experiments require complete conditional deductions. Use schema classifications, dependency roles, uncertainty records, and nonproof reviews. Keep evidence links separate from acyclic prerequisites. Mathematical items cannot depend on physics; imports and the root mathematics workspace are read-only. Physical public-interface changes require consumer review.

Authors supply definitions and prerequisites; reviewers and adjudicators check them, source fidelity, and statistical qualifications. Reject undefined reasoning and fabricated certainty.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks. In physics, algorithms may have either domain like definitions. Pure mathematical properties use mathematical result kinds and only mathematical prerequisites; consequences relying on physical premises use `physics-theorem` (or `thought-experiment`). Preserve physical scope and empirical qualifications.

---

# Step 5 batch adjudicator

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/physics-support/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

- **Proof repair quality:** Repairs must be mathematically sound and cite dependencies accurately. State important caveats when appropriate, and write concisely without compromising correctness or completeness. Do not repeat the same argument or use unnecessary filler. Add intermediate lemmas when needed to meet prerequisites.
- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and the generated task fully. You are the Sol 6.1 high adjudicator for one batch in Step 5.1 or 7.5. The round-bound task defines the run, phase, round, rejected carriers, ownership, evidence paths, and result schema. Do not reconstruct these from historical tasks or receipts.
- Work supplier before consumer, in the task's increasing in-run dependency order. Handle every rejected tuple and group all tuples for one item together.
- Adjudicate and repair only assigned draft items in the frozen frontier at `research/physics-cm-qm-gr-79-2026-10-11-step5-v2/frontier.json`. Published repairs have no Step 5 adjudication, rejudge, or item-gate obligation; record them for separate maintenance. Outside-frontier consumers also belong to maintenance, not Step 5 repair or gates.
- Judge mathematical validity directly. Inspect each rejected statement, proof, definition, actual prerequisite, contract, and page interface. Judges, sources, and earlier acceptances can be wrong. Never pretend to understand something you do not; escalate any uncertainty and any potentially defective published consumers to the owner. When uncertain, read complete relevant arguments in authoritative sources, check their hypotheses and reasoning, and state exactly what they establish. Never invent source reading, familiarity, confidence, or checks.
- Cover every assigned rejected tuple. Record confirmed fatal and nonfatal defects, false positives, and unresolved uncertainty with concrete mathematical evidence. Repair every confirmed defect, including nonfatal defects. Fatal classification controls only the convergence threshold; a sound item needs no cosmetic edit. Unresolved mathematics blocks closure.
- For a licensed repair, make the smallest logically sufficient change, preserve the content contract, Foundations boundary, and actual AC requirements, and never weaken a claim merely to pass a check. Run the focused checks named by the task; a material rewrite invalidates the prior `verification.judge` record.
- You may create and fully author new items to meet a genuine unsatisfied prerequisite of an assigned frontier repair. Identify the missing claim, consuming proof step, and why existing suppliers do not suffice; give exact hypotheses, dependencies, and source evidence. Check existing IDs, aliases, and active assignments before choosing a unique ID. Register the item in the index/registry, page, manifest, and contract through the task's integration path. For shared edits, use `tools/physics-support/step5-shared-write-lock.mjs` acquire/reread/edit/check/release; do not hold the lock while researching or waiting. Include creation evidence. Such additions preserve author-origin and certification integrity, do not enlarge the frozen frontier, and do not enter its rejudgment or gate loops. Step 5.9 permits no additions.
- Propagate downstream work only when the original `## Statement` or `## Definition` changes, including lemma and corollary statements. Compare those sections directly; do not use a semantic classifier. Proof-only, citation, dependency, and metadata edits with unchanged statements do not propagate. New prerequisites count as new interfaces.
- For an interface change, inspect direct dependencies, references, and actual proof/page uses. Record exact affected clauses and paths; explain why unchanged consumers remain sound; propose only necessary minimal repairs. A candidate is not automatically defective. Continue one hop only if a necessary consumer repair changes that consumer's own Statement or Definition; never pre-expand through unchanged statements.
- Report discoveries outside your lane or the frozen frontier without editing their items. For potentially defective published consumers, give the owner/maintenance route the exact affected use and evidence; do not edit or adjudicate published items. Trace any changed published Statement or Definition to direct consumers.
- The engine routes frontier effects to three disjoint frontier-owner lanes. After frontier writers drain, separate maintenance uses three disjoint lanes for outside consumers. Maintenance reports bind exact snippets and `affected_use`, `invalidated_claim`, and `minimality` evidence; this accounting does not replace mathematical reasoning. Handle each supplier-interface event and outside consumer once, without Step 5 gate/context requeues. Every necessary maintenance Statement/Definition change propagates one more direct hop; frontier targets return to ordinary owner work. Finish frontier work and separate maintenance before certification.
- Run focused checks and report their actual results. Update only assigned files and evidence; use the task's integration path for shared ledgers. Keep mathematical findings and audit status in the canonical published-consumer ledger, operational history in run records, and preserve original round evidence.
- Return only the generated schema: `{run, phase, round, unit, input_sha256, decisions:[], reviews:[], created_items:[], downstream:[]}`. Copy identity and input hash exactly from the task.
- Include one `decisions` row per rejected tuple with `id`, `model`, `context_sha256`, `outcome` (`confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`), `reason`, `uncertain:false`, `source_urls`, and `familiar`. A confirmed fatal also needs `defect_type` (`logic`, `dependency_citation`, or `other`) justified by the finding. Never guess a category for historical evidence.
- Include a `reviews` row for every assigned item: `id`, `disposition` (`repaired` or `unaffected`), current `itemHashGuard` as `post_sha256`, `review_context_sha256`, and the same evidence fields. An unchanged item guard requires `unaffected`; explain contract/page-only repairs and set `metadata_repair_only:true` when applicable. Immediately after each review, before editing another supplier, run `node tools/physics-support/step5-workflow.mjs review-contexts --run RUN --items ID` and copy both hashes. Batch IDs reviewed on the same stable state if useful. Never refresh a review hash after supplier changes without examining their effects.
- If you author a prerequisite, include a `created_items` row with `id`, `kind`, `home_page`, `batch`, direct `consumers`, `reason`, `uncertain:false`, `source_urls`, and `familiar`. Every created item also needs a review; only a newly created item uses `authored` disposition.
- List affected item IDs in `downstream`, including every direct dependency/reference consumer after a Statement/Definition change, even if its use remains sound or it already has an assigned review. This is an examination inventory, not an edit list. Record each exact affected use and disposition in the report. For a consumer missing from the dependency/reference graph, include `downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}`. Route outside consumers to separate maintenance.
- Give authoritative source URLs actually consulted when unfamiliar; `familiar:false` requires those URLs. Unresolved uncertainty is a blocker, never a false-confidence statement. Empty assignments return empty arrays. Do not claim independent review of your own repair.
- Do not write judgments, stamps, central certificates, or round state; do not launch workers or another cycle. The engine collects evidence, completes frontier repair and separate maintenance, and certifies once all writers drain. A successful dispatch alone does not close unfinished work. Repeated pending work at an earlier assigned content state holds for operator resolution.
- Rejudgment and renewed frontier adjudication, owner repair, and certification repeat until unique confirmed fatal original-frontier items in the latest round are strictly below 5% of the immutable original scope. The threshold permits the final scoped gate; it never permits unresolved defects, uncertainty, or incomplete closure.


---

# This dispatch

run: physics-cm-qm-gr-79-2026-10-11
role: alpha-adjudicate
label: step5-v2-initial-r1-u59
covers: 59
output: research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u59.json

# Step 5 adjudicate: initial, round 1, unit 59

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-59-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u59.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"59",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:lem-nrqm-approximations-finite-rank-gapped-cluster-projection, 9:def-nrqm-approximations-framework-perturbed-family-model, 10:def-nrqm-approximations-framework-variational-trial-model, 11:def-nrqm-approximations-framework-wkb-regime-model, 11:ex-nrqm-approximations-two-level-finite-gap-correction, 12:ex-nrqm-approximations-zeeman-multiplet-splitting, 14:rem-nrqm-approximations-scope-and-empirical-status, 14:ex-nrqm-approximations-smooth-barrier-tunnelling-limits, 15:ex-nrqm-approximations-stark-finite-level-shift, 16:rem-nrqm-approximations-examples-scope-limits.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-nrqm-approximations-finite-rank-gapped-cluster-projection",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.2 (and 6.1) identifies the contour integral with +P0. The cited spectral-calculus interface gives the resolvent multiplier as (t−z)^−1, whose contour integral is −P0. Thus Pλ=P0 at λ=0 and the ensuing rank proof do not follow from the supplied dependency.",
      "context_sha256": "fe578ce18a0ad98430fb9a039255c6de544556767f299057776fd682e85a6d6a",
      "item_sha256": "4411f3e46985ca1e27604e2460bf83ad8b157d123e1bff0b94f7cb9978bb4089",
      "at": "2026-10-12T20:14:45.275Z"
    },
    {
      "id": "def-nrqm-approximations-framework-perturbed-family-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The unqualified title promises a followed spectral label, but for r>1 the definition follows only a finite spectral cluster and explicitly supplies no unique scalar label; the title overstates the item's scope.",
      "context_sha256": "d42699e9e591f775964752139098846be93468f5cdbf90e8952b2ad438dfc92a",
      "item_sha256": "8ea93169c78bb801f3f6e24246fce53d23636120487f1b6a94a7e28755543496",
      "at": "2026-10-12T20:15:51.691Z"
    },
    {
      "id": "def-nrqm-approximations-framework-variational-trial-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (d)'s ladder forces E0=E1: if E0 is discrete it is the first listed eigenvalue; otherwise E0 lies in σess, so Λ=E0 and the padded ladder has E1=Λ. The scope sentence denying this consequence is false.",
      "context_sha256": "34272dc0f456f792e3d1329e18f68a9501538f065cf1ed0d877a3fbd57b8106a",
      "item_sha256": "f11a98ce634990fa0770deb6f19dedc23d6dc0dde69c931ae74dd467e61149ed",
      "at": "2026-10-12T20:14:53.319Z"
    },
    {
      "id": "def-nrqm-approximations-framework-wkb-regime-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal scaling error: on an allowed interval, the equation gives oscillation wavenumber p/h and phase h⁻¹∫p. The item calls p the wavenumber and θ=∫p the WKB phase, omitting h and conflicting with its own 1/h phase integral in (b)(ii).",
      "context_sha256": "02aa021d99d4aece728b868d34e53dbde2c75563715bee603e5d69b620671d1f",
      "item_sha256": "8cc8ca4cb4f198d4559ccfe7ac669174a6dfeebfed16a387fc7dc966b9aa99dd",
      "at": "2026-10-12T20:15:46.318Z"
    },
    {
      "id": "ex-nrqm-approximations-two-level-finite-gap-correction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Verification’s Given misstates the perturbed-family interface: it assumes both countable choice and the Axiom of Choice, but the Given names only countable choice as the model’s supplier hypothesis.",
      "context_sha256": "6f299e1182ed1bc19bf8b5421d4ec06e0ba67e150e731950e5a1e8a831154c2e",
      "item_sha256": "799bb6e215ea162d3062cbc2ddf6cc123555c35c2fc59fe95d7e192fdb0ce096",
      "at": "2026-10-12T20:16:01.925Z"
    },
    {
      "id": "ex-nrqm-approximations-zeeman-multiplet-splitting",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The spin-one model uses \\(\\mathfrak H=\\mathbb C^3\\), but the cited massive-particle Zeeman theorem applies on \\(L^2(\\mathbb R^3;\\mathbb C^3)\\) with the free kinetic term. Step 4.1 applies it to \\(\\varepsilon I-\\lambda\\gamma B_zS_3\\) without deriving that finite-level precession r",
      "context_sha256": "26a58ec9531dc1308d1a0a7578aef93962f07de6bec4b48f373cf3baf52cf13a",
      "item_sha256": "f83be6c992e21fe24197d9bc34d55dddaeb8dc7424c88c774a5f55318e210b54",
      "at": "2026-10-12T20:16:43.138Z"
    },
    {
      "id": "rem-nrqm-approximations-scope-and-empirical-status",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "P4 is autonomous and treats driven H(t) separately. The cited conjecture concerns β ramped over time, so P4 cannot fix populations of instantaneous branches during that ramp. Restrict the claim to fixed λ or supply driven dynamics. [Binney–Skinner §9.1.2](https://www-thphys.physi",
      "context_sha256": "f1abc705ac5f59afa26ae199bc85d7588ad24dfd5c63d9c1af1edac630012361",
      "item_sha256": "a8d92798ff50ff77270f5a20b5a812420bbed78da20a4d3fbfffad755eb09eb8",
      "at": "2026-10-12T20:16:08.407Z"
    },
    {
      "id": "ex-nrqm-approximations-smooth-barrier-tunnelling-limits",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Part (a) omits the supplier theorem’s required range 0<h<h₀, yet asserts the quantitative bound whenever the denominator is positive. That overstates the cited result; state the small-h range explicitly.",
      "context_sha256": "1391c7794ecd9811251107cd71a32ef0ff4e63138bc4bf756c96196897845486",
      "item_sha256": "28912a300b948475fcff5ab514b176073858bea4d12354befdf3f1163ad11dd4",
      "at": "2026-10-12T20:15:22.518Z"
    },
    {
      "id": "ex-nrqm-approximations-stark-finite-level-shift",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title claims an “exact quadratic splitting,” but the exact eigenvalue separation is √(Δ²+4(D_relℰ)²); only its leading small-field correction is quadratic.",
      "context_sha256": "c610914f87c4a7f62da2e02bed4dc55b3bed232f6e2c8e34cd042123090cf744",
      "item_sha256": "adf8586b90eb0d49725c694b013a1615c62b4fc87a7c341a7fe13b81e8e3ee09",
      "at": "2026-10-12T20:15:01.252Z"
    },
    {
      "id": "rem-nrqm-approximations-examples-scope-limits",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Stark example gives exact levels with splitting 2√((Δ/2)^2+(D_relℰ)^2), not an exact quadratic dependence on field. Only its small-field expansion has a quadratic term; calling it “the exact quadratic splitting” overstates the supplied interface.",
      "context_sha256": "5dcfd9f5933454e97c91ad96c46d81c971428c8b4e05f0fb37194428415ff428",
      "item_sha256": "a2c368a454a6a8673ca8fb931e5b738dba145e6d2d71895c890d38592f7f21e9",
      "at": "2026-10-12T20:15:34.101Z"
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
