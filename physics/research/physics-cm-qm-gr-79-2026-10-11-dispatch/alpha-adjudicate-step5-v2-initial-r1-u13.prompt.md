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
label: step5-v2-initial-r1-u13
covers: 13
output: research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u13.json

# Step 5 adjudicate: initial, round 1, unit 13

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-13-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u13.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"13",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-stable-unstable-cones-and-line-slopes, 1:lem-slope-graph-transforms-converge, 2:def-bilateral-symbol-and-bounded-sequence-space, 3:def-smooth-periodic-oscillator-pulse-model, 3:lem-bounded-bilateral-sequence-ball-is-complete, 3:lem-close-map-first-component-has-uniform-inverse, 4:lem-perturbed-scalar-recurrence-root-bounds, 4:ex-cm-chaos-pulse-and-rotation-endpoint-checks, 5:lem-symbol-locality-gives-coding-continuity, 5:thm-explicit-perturbed-horseshoe-and-transversality, 5:ex-cm-chaos-slope-transform-fixed-point-checks, 6:thm-smooth-fixed-mass-mechanical-horseshoe, 8:ex-cm-chaos-finite-word-homoclinic-code-checks.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-stable-unstable-cones-and-line-slopes",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The line-field existence claim omits the companion lemma’s required aperture condition k(2L−k)≥1, and L is unintroduced here. For k=0.01, L=2, and s_n=2, an invariant slope must satisfy h=1/(4−h), whose roots 2±√3 lie outside [−k,k].",
      "context_sha256": "beaa297190c22e0f8ac1522b0ab8cd5763b8efece56d51025424e3444452318d",
      "item_sha256": "e4e6bd3823730bb00a1fc1133f583f6f4c0fc2c5edbb52f7fc4b9ee450d099d4",
      "at": "2026-10-12T19:32:30.845Z"
    },
    {
      "id": "lem-slope-graph-transforms-converge",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 concludes the Cauchy slope sequences converge using F3 and F4, but those give geometric tail bounds and rules for already-convergent sequences. No cited fact establishes that Cauchy real sequences converge; add that theorem or prove it from completeness.",
      "context_sha256": "b8bde5da43982a954998a3deaaff010d32536dbbf54f035375ca098f647dd2e9",
      "item_sha256": "8f37796c7fc1842542fbaf43a580cda9893b7f115fe03d7b10911d767469c278",
      "at": "2026-10-12T19:32:10.363Z"
    },
    {
      "id": "def-bilateral-symbol-and-bounded-sequence-space",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition introduces B_R only for R>0, but its companion lemma claims the item’s B_R is complete for every R≥0. B_0 is undefined, so the supplied interface is ill-typed; define B_R for R≥0 or narrow the lemma.",
      "context_sha256": "19fedf2d076b6da17210c643349ae4f54384a1810d9f19f948df36213e46603c",
      "item_sha256": "63cd249e3b6a5951b1de72c3d87aca82507dcd0a3773d9a319a13041c5ef2eff",
      "at": "2026-10-12T19:32:10.404Z"
    },
    {
      "id": "def-smooth-periodic-oscillator-pulse-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cutoff lemma gives χ only on (0,1), but I=∫₀¹χ is used before any extension to [0,1] is defined. The Riemann integral is ill-typed as written; explicitly zero-extend χ first.",
      "context_sha256": "982e43b2e89d859385088fa5eeb73681a4dcb57b2480954b6f9cd448e124fd56",
      "item_sha256": "df92b83041b494281e9b62f0af812a3606a82e9d901ed4c4dc0137526a6711cd",
      "at": "2026-10-12T19:33:29.586Z"
    },
    {
      "id": "lem-bounded-bilateral-sequence-ball-is-complete",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F6 attributes the absolute-value triangle inequality to def-abs-value and lem-of-abs-value, but their interface assigns it to lem-of-triangle-inequality, which is not a dependency. Step 2.1 uses it to prove boundedness, so that inference lacks a licensed premise.",
      "context_sha256": "3ac44444c1ffbdb86718803dfbf7bf1b7811ec8e150f02dd6e8b378ba0d490df",
      "item_sha256": "88546d7f92d302b9bfb8509da4f0de6ed38b2e8fcaa5998c61ddeee88ae2729a",
      "at": "2026-10-12T19:31:52.842Z"
    },
    {
      "id": "lem-close-map-first-component-has-uniform-inverse",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 applies the mean-value inequality on a closed interval, but the supplied theorem requires a convex open domain. It gives the estimate only for interior endpoints; F1 does not extend it to the boundary, so the contraction claim is unproved there.",
      "context_sha256": "4a9e58e6ac97204e50e5ef3b0dbf13e84f982f42d129e6d4c48336051d26edc8",
      "item_sha256": "05191262d477d743d1c31145cd87a82f97cd2512352d7ea16e25c5fda19ed09a",
      "at": "2026-10-12T19:33:00.560Z"
    },
    {
      "id": "lem-perturbed-scalar-recurrence-root-bounds",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 uses the mean value theorem for the 3/4 root margins, and F5’s derivative-implies-monotonicity claim also depends on it. No MVT supplier appears in deps or Facts & Assumptions, leaving essential results for clause 2 unsupported.",
      "context_sha256": "acddd50c1f2e305916cabf572bf51d02f8486c7103d1077b53e42cbf56db21f2",
      "item_sha256": "dde25da219ac78af5b8e470cc35bf65b20fa835de2a3b0156ee104dd58d36a32",
      "at": "2026-10-12T19:33:29.525Z"
    },
    {
      "id": "ex-cm-chaos-pulse-and-rotation-endpoint-checks",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: βδ is defined P-periodically on ℝ, so its support repeats every period. It does not vanish outside [π/2,P] as 3.1 claims, nor is its global support contained in (π/2,P); only its restriction to one period has that support property.",
      "context_sha256": "eb9e5cee0291f11afa6ae3489a6ecf1097c3919e394fc6d0fb69b5e2d31994aa",
      "item_sha256": "a6a534dfc64c7e0fc260c0f9de5e8441e9fdc97e3a33cd34e041fe002063f25c",
      "at": "2026-10-12T19:32:50.567Z"
    },
    {
      "id": "lem-symbol-locality-gives-coding-continuity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 attributes T_s(B_R)⊆B_R and ||T_s^m0||∞≤R to the sequence-space and completeness interfaces, which establish neither. These claims require clause 2 of lem-coded-quadratic-recurrence-is-a-contraction, so the local dependency restatement used in step 2.1 is unsupported.",
      "context_sha256": "4d254e87f80950a61ec26f5bd82735a406753bac487c7ec10b7e72c71b717dd6",
      "item_sha256": "c624969be1175248de4dbd2b2add999f05a5dcce434f7dd7d402e23ebe7aa8cc",
      "at": "2026-10-12T19:33:42.871Z"
    },
    {
      "id": "thm-explicit-perturbed-horseshoe-and-transversality",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Steps 5.2 and 6.2 apply the weighted-tail lemma, which requires C² extensions of M_u and M^H_u. The root-bounds interface supplies only C¹ maps on [-R,R]²; F1's claimed C² extensions are not licensed, so the lemma's hypotheses are unmet.",
      "context_sha256": "fb25d4c20ac59986292b8aebfe6b6b2ddeeb3d908bda887b73780b791ef8d60a",
      "item_sha256": "31ba247a9b21908f2aff62070e3ac37dfd4fcd8c1f64c6b5609916022b6de8c4",
      "at": "2026-10-12T19:33:37.057Z"
    },
    {
      "id": "ex-cm-chaos-slope-transform-fixed-point-checks",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[L1] overstates the supplied slope lemma: it claims cone invariance from only λ>1 and kλ>1, omitting the lemma’s required L≥2 hypothesis. That generalized dependency restatement is not licensed by the supplied interface.",
      "context_sha256": "e497f4d7aaf255ba6c37a0fda97a12d06f4f2590cd8bcbf7acaa38104c5b5232",
      "item_sha256": "9fb45adc90c34e1142fa9e42ce339446cdbd87674e844f8f7ba621b42315573c",
      "at": "2026-10-12T19:33:34.994Z"
    },
    {
      "id": "thm-smooth-fixed-mass-mechanical-horseshoe",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 misstates its cited interfaces: they define chaos, continuity, hyperbolicity, and homoclinic points, but not homeomorphism, metric compactness, or conjugacy. This unsupported dependency restatement is a defect.",
      "context_sha256": "ac412c5ed4d3de44455b08d70209f5612ff4a15e24b74c3466c46addbd9bccf1",
      "item_sha256": "11ae305491b54a93261e4597b581845c3186d11dcf429c70a138e31dc25b52a3",
      "at": "2026-10-12T19:33:40.817Z"
    },
    {
      "id": "ex-cm-chaos-finite-word-homoclinic-code-checks",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L4 attributes sign(x_n(t))=t_n to the bilateral-space definition, square-roots theorem, and absolute-value definition; they do not license this coded-solution claim. The contraction lemma establishes it, but L4 omits that source, and step 2.1 relies on L4.",
      "context_sha256": "b54527697bb99b2055205fa22d268dc5e2dfc624e270eac8600cd32c4bfefaef",
      "item_sha256": "2ea6b800674db8511e1b5825715ddfdd8bbc9c3120000a5dd1ae6c654835f5c0",
      "at": "2026-10-12T19:33:32.928Z"
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
