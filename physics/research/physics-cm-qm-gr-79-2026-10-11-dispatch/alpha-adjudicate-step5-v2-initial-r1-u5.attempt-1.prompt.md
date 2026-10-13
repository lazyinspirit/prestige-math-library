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
label: step5-v2-initial-r1-u5
covers: 5
output: research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u5.json

# Step 5 adjudicate: initial, round 1, unit 5

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-5-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u5.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"5",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-cm-one-dimensional-action-variable, 0:def-cm-scattering-data, 0:lem-cm-cross-product-triple-identity, 0:lem-cm-planar-polar-lift, 0:lem-cm-second-order-oscillator-form, 1:lem-cm-oriented-orthonormal-triads, 1:thm-cm-differential-cross-section-density, 2:ex-cm-harmonic-oscillator-action-derivative, 3:thm-cm-coulomb-scattering, 3:thm-cm-scattering-turning-point-and-global-branches, 4:thm-cm-rutherford-cross-section, 5:thm-cm-kepler-ellipse-geometry, 7:ex-cm-kepler-ellipse-data-check.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-cm-one-dimensional-action-variable",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition cites thm-of-square-roots for continuity of the square-root map, but its supplied interface establishes only existence and uniqueness of nonnegative roots. The stated well-definedness argument for continuity of the integrand is unsupported.",
      "context_sha256": "43e1483ef51f81f284a0d47c680edd89e39f1e640bf3e9bda1a8c8c22178e2c7",
      "item_sha256": "56208c3f039588a0995f46c7f3fe5bb31238e1db401efdc634649d50ef82a160",
      "at": "2026-10-12T19:21:35.125Z"
    },
    {
      "id": "def-cm-scattering-data",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Ω is asserted to be a measure via an integral defined only for nonnegative measurable integrands, but the cited sine item only defines its power series; no supplied dependency or inline argument establishes sin θ≥0 and Borel measurability on (0,π).",
      "context_sha256": "26bd3638c92a5382a67b08146f544d55c43bc1f87a0473b33130d61857de9f91",
      "item_sha256": "76edad1ef10f8bc409df35618ec8bf436d65b4641e9ac2af09c6fe0cd970e977",
      "at": "2026-10-12T19:21:25.676Z"
    },
    {
      "id": "lem-cm-cross-product-triple-identity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[L2] misstates the supplied inner-product definition: in R^3 its coordinates are indexed 0,1,2 and the sum is over k<3, not k=1,…,3. The proof’s coordinate expansions therefore do not follow from the cited dependency.",
      "context_sha256": "36f112d91f747faa2920f6828c22471276bdc53c4499ece0dc3d2751a586126b",
      "item_sha256": "0641bb81a7e27975ec6c5a00414e0a5b101cad6f8e1378dcfaaa0eb64a649a20",
      "at": "2026-10-12T19:20:58.930Z"
    },
    {
      "id": "lem-cm-planar-polar-lift",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The hypothesis cites def-ck, which defines C^k maps only on open domains. I may be closed or half-open, and the item supplies no extension or interval-relative C² definition to type ρ and σ there.",
      "context_sha256": "c68176af1939ecd28eaacfdf0117b3f43556ccd279c7904f43e51b33d6f09ee8",
      "item_sha256": "df4c6ed48cb8695535762529b203efac08621e48327607303f7e92c792f287da",
      "at": "2026-10-12T19:21:44.891Z"
    },
    {
      "id": "lem-cm-second-order-oscillator-form",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For a permitted non-open interval such as [0,1], the cited C^k definition does not define “twice differentiable” for v:I→R: it defines C^k maps only on open domains. The main hypothesis is ill-typed under its supplied dependency.",
      "context_sha256": "2d6bec037f3302d65e22da5dad9bea31c68ff7f4ebfe403576499173a26ea0a1",
      "item_sha256": "d65460567a774a577f752fe44f0a07458e2386bbc1b812f4a4e8a0d55e415428",
      "at": "2026-10-12T19:21:02.970Z"
    },
    {
      "id": "lem-cm-oriented-orthonormal-triads",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L3 overstates the cited coordinate expansion: it claims every x∈R^n is a sum of exactly three standard-basis terms. The interface gives n terms, indexed 0,…,n−1; as written, this restatement is false unless n=3.",
      "context_sha256": "6118d4c09df1a1df5f1604ba5376744ef7710f1648a9c9b20cde1e43ace4f8b3",
      "item_sha256": "8a15d08249bf3c3c2dde533cab62d884f77b0e7d8a0be1177118ad22767f1480",
      "at": "2026-10-12T19:21:17.934Z"
    },
    {
      "id": "thm-cm-differential-cross-section-density",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L5 is not licensed by the supplied sine theorem interface, which states monotonicity intervals and ranges but not sinθ>0 on (0,π). Step 5.1 lacks the positivity needed to divide by sinθ and identify the solid-angle density.",
      "context_sha256": "c1892b8f4f92c576007fc77ead7ad1e5aab81be4f395a6557efcc816a5142c8a",
      "item_sha256": "a7796004ae5e1fa541ab26d3f6aa1b7521b598d440839cafab3f1bc7a206f68d",
      "at": "2026-10-12T19:22:03.700Z"
    },
    {
      "id": "ex-cm-harmonic-oscillator-action-derivative",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 invokes [[thm-cm-action-variable-derivative]] on (0,∞), but its interface requires finite real endpoints E₀<E₁; ∞ is not real. Restrict the data to finite energy intervals before applying the theorem.",
      "context_sha256": "c612e2af8f1ffce388974cb1e24f77745fcb38411e3b04d77a5ed0f2388e5059",
      "item_sha256": "6c7af9ae9a214e3b66c856804bae401094607ac0a20d663ba4e7e04080c94392",
      "at": "2026-10-12T19:22:26.566Z"
    },
    {
      "id": "thm-cm-coulomb-scattering",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[L2] overstates thm-derivative-of-an-inverse: continuity and strict monotonicity alone do not imply a differentiable inverse. For f(x)=x^3, the inverse ∛x is not differentiable at 0; the cited result requires f differentiable with f'(c)≠0.",
      "context_sha256": "598e1a5bdf855fdd7a231f44830b0bf1350844eee50738b324b9f14abf83cd06",
      "item_sha256": "0539e77453e0b8b67b0bfff3080d7c050699ad72b5ff803c8f69423f2abb0052",
      "at": "2026-10-12T19:22:11.231Z"
    },
    {
      "id": "thm-cm-scattering-turning-point-and-global-branches",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: [L4] says the free speed √(2E/μ) bounds ρ′ without restricting to the free tail. Inside the interaction range U may be negative, making E−V>E and |ρ′| exceed that speed; the stated bound is false.",
      "context_sha256": "89d95fc127f1697a15a62240e5c85ad4910b8e62c38ab6bb0228acfa4a1958f4",
      "item_sha256": "7d8db1ebe1b0694270f46e59c541f07e2018b67382a7e843fb4a90b2e1a344a4",
      "at": "2026-10-12T19:22:04.874Z"
    },
    {
      "id": "thm-cm-rutherford-cross-section",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Facts & Assumptions lists the “asserted inverse b(θ)” as given, although clause 1 must establish it; step 1.1 then uses b(θ)=(κ/2E)cot(θ/2) to verify θ_def(b(θ))=θ. The inverse claim is assumed, so it is not proved.",
      "context_sha256": "e9dca09b993d8f73152cfa7d31563ebd3d92c72452dd1e2f8c764f7c25efd94a",
      "item_sha256": "b6c0877c25791d3c2607121bbf0e1ca259ee8620c3cb31de14f19e8e99a56585",
      "at": "2026-10-12T19:22:54.132Z"
    },
    {
      "id": "thm-cm-kepler-ellipse-geometry",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "This mathematics item lists thm-cm-kepler-conic-and-eccentricity, a Classical Mechanics result about central-force trajectories, as a prerequisite. Mathematical items cannot depend on physics items, even when that prerequisite is unused in the proof.",
      "context_sha256": "aa1c954b2c64f3ae708e14a2e10a5c4bf8d09718c0c6bb5f870b6718739db9c3",
      "item_sha256": "d42e44603ff48c0e2e962bb1f08715f321667c13c75f2e7dcdce7f4a0c8cacda",
      "at": "2026-10-12T19:21:35.300Z"
    },
    {
      "id": "ex-cm-kepler-ellipse-data-check",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The opening claim that ACω is required by all three cited suppliers misstates the conic theorem interface, which has no ACω hypothesis. This local dependency restatement is inaccurate.",
      "context_sha256": "012f54b4288ef0bdd75eb1b9023758b6478a0a8833b315f798c85c85b348ac76",
      "item_sha256": "12967eacb5bf23d359fdf9fe2c509ca692f30253558985813e806a4a31d694b9",
      "at": "2026-10-12T19:21:54.865Z"
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
