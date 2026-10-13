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
label: step5-v2-initial-r1-u71
covers: 71
output: research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u71.json

# Step 5 adjudicate: initial, round 1, unit 71

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-71-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u71.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"71",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 5:def-gr-minkowski-model-and-inertial-chart, 7:lem-gr-observer-relative-velocity-expansions, 8:def-gr-stationary-weak-field-data, 9:def-gr-newtonian-comparison-model-and-identification, 9:lem-gr-weak-field-admissibility-and-inverse-bounds, 12:thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge, 12:thm-gr-weak-field-scaled-trajectory-limit, 13:ex-gr-scaled-newtonian-harmonic-trajectory, 14:pthm-gr-minkowski-vacuum-model, 15:rem-gr-flat-bridge-scope-and-limits, 15:rem-gr-local-flatness-versus-global-flatness.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-gr-minkowski-model-and-inertial-chart",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title calls this spacetime flat, but clause (d) explicitly says the item makes no claim about curvature. That contradicts the item’s stated scope.",
      "context_sha256": "4d37d26e6ca297647c21be1d4cfcab613df620f52d367f1de367bd339774cd5a",
      "item_sha256": "2a041d080eb2af7c04b21f7c78f083a1a95ec81a4e64f0971d2d08646b682693",
      "at": "2026-10-12T20:24:19.717Z"
    },
    {
      "id": "lem-gr-observer-relative-velocity-expansions",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement never assumes or quantifies c>0. The cited definition treats c as a parameter, yet m(P), U/c, w, and every conclusion depend on it, so the claimed quantities are not determined by the stated hypotheses.",
      "context_sha256": "3616000d921aa416f332c90e18f0a8a1ddd9279841ccf1b6c42f0a02b292a7ac",
      "item_sha256": "7bc329a8d5f706d8c9504a84480f5b18810b57e446e9601e5e753bf6b13bea8f",
      "at": "2026-10-12T20:24:41.094Z"
    },
    {
      "id": "def-gr-stationary-weak-field-data",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "By (a), ∂₀g_ab=0; since ∂₀ has constant coordinate components, (L_{∂₀}g)_ab=∂₀g_ab=0. Thus ∂₀ is Killing, contradicting (d)'s claim that this is not asserted.",
      "context_sha256": "8e4611c32d3cb1495a7a7fa09ebb59b2c6cb28b835c3dddd6ecb6c8b1c59f41f",
      "item_sha256": "a8a75140d3f895921af938af1a22575dd0fec71d89f09c99400d018bdddabc93",
      "at": "2026-10-12T20:24:33.246Z"
    },
    {
      "id": "def-gr-newtonian-comparison-model-and-identification",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (a) permits closed or half-open J, but the cited C^r convention is for open domains, so q'' at included endpoints is undefined while the equation is required there. Restrict J to a nonempty open interval or state an endpoint-regularity convention.",
      "context_sha256": "afb7fe8dac63b91645378ffff3ce7e8f0716853668ce6ef598f94094aa4a0567",
      "item_sha256": "fa8d198d747df44c5c6f651a6645f86b75b0395e6d32ca0acce9a4857255fedb",
      "at": "2026-10-12T20:26:02.629Z"
    },
    {
      "id": "lem-gr-weak-field-admissibility-and-inverse-bounds",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal typing gap: def-gr-killing-field requires a time-oriented Lorentzian four-manifold, but the data give only a Lorentzian metric on Ω. ∂₀ is shown timelike only over K, so a time orientation on all Ω is not established.",
      "context_sha256": "e9e1041941f9fd30951322c79e18e6aaab03eaa620a03c4a33e9609e549f83c6",
      "item_sha256": "9a8043e2a33a288e48a653e58fdd7f40a4bb7c8a5dd4b5d5a36a4719ba2c6d89",
      "at": "2026-10-12T20:25:00.713Z"
    },
    {
      "id": "thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Proof step 5.1 stops after defining G and listing citations; it gives no derivation of the PDE, zero data, smoothness, or compact-slab derivative bounds in (b). Thus (b), and the gauge construction in (c) that uses it, are unproved.",
      "context_sha256": "04dd3e8d0ac5e6772381418279421e495d2d03d3c774b84a21a7e9aafe80f1ca",
      "item_sha256": "2b9c94846ffac9fc06f440ad2cbb55ffd508af541be840c070bd65006a96612e",
      "at": "2026-10-12T20:24:09.803Z"
    },
    {
      "id": "thm-gr-weak-field-scaled-trajectory-limit",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title overclaims an O(ε) rate: the bound includes D(0), and O(ε) is established only for identical initial data (D(0)=0). With merely D(0)→0, the theorem proves convergence but no O(ε) rate.",
      "context_sha256": "b963ae6412a18ea358f2e40fac550363dbdcabbf05bb2b90f5ae278906237996",
      "item_sha256": "36b74346a9320d2cdd254c6422abd0ba6836b76d72374be5fee306e5ecd4a62c",
      "at": "2026-10-12T20:24:44.601Z"
    },
    {
      "id": "ex-gr-scaled-newtonian-harmonic-trajectory",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: this item declares domain: mathematics but uses the GR scaled-trajectory theorem and stationary weak-field definition as mathematical premises; the theorem supplies its geodesic estimate. Physical items cannot justify a mathematical item.",
      "context_sha256": "69e4a7773a135ddd45e03b76a3b51559a25d5ccdf0f37471f05f3ecf21787dcc",
      "item_sha256": "f78f6ac59c7c600ac5c2f2fa80bcd1cd2c393fd9576e449f3fcd99c408c829a9",
      "at": "2026-10-12T20:25:20.762Z"
    },
    {
      "id": "pthm-gr-minkowski-vacuum-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "§2.1 says (d) follows from 1.1–1.3 and “given,” but these establish only the R⁴ model. They do not establish the claimed existence of other solutions or flat solutions with different topology, which also lies outside the stated physical_scope.",
      "context_sha256": "9c0e16af633758dae011fd485c4e149e9ee0c979d9aa02f7185520c1544d918b",
      "item_sha256": "37f6816c0abc96bf60e24afbf959e17851a370703f24e8b322dd0fa787de9260",
      "at": "2026-10-12T20:25:20.223Z"
    },
    {
      "id": "rem-gr-flat-bridge-scope-and-limits",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reall’s cited 2022 notes place §4.2 on the Riemann tensor and the Newtonian limit at §7.2, so the item’s source locator misattributes support ([official notes](https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf)).",
      "context_sha256": "428402d2572c0b051caa3333cfcd4b77bc9c538fbe9426b81d145e0ab8f255e0",
      "item_sha256": "5a5d4467f0f1cb570921913f3313d162f74c4da88f7e8728e016dc6338cfeac7",
      "at": "2026-10-12T20:26:16.715Z"
    },
    {
      "id": "rem-gr-local-flatness-versus-global-flatness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The note claims point-normal and exponential charts for every smooth Lorentzian four-manifold, but the cited theorem’s interface assumes a time-oriented (M,g,N). That dependency does not license the broader scope.",
      "context_sha256": "094e59604e2db4f109abcfa2ea437ff26f7f86fea142f3a75068d2dd5e7d3379",
      "item_sha256": "20ebdbe4d614b5b31ad3e786376474fe0dffcec610c525ef49ece6c0f58387aa",
      "at": "2026-10-12T20:24:57.375Z"
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
