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
label: step5-v2-initial-r1-u55
covers: 55
output: research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u55.json

# Step 5 adjudicate: initial, round 1, unit 55

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-55-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u55.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"55",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 5:def-nrqm-composites-separable-and-entangled-states, 10:def-nrqm-composites-framework-composite-systems-and-local-readouts, 11:def-nrqm-composites-framework-reduced-preparations, 12:def-nrqm-composites-marker-model-and-fringe-visibility, 12:pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement, 13:pthm-nrqm-composites-local-instruments-and-no-signalling, 13:pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations, 13:pthm-nrqm-composites-marker-overlap-and-visibility-bound, 14:rem-nrqm-composites-scope-and-empirical-status, 14:ex-nrqm-composites-marker-overlap-visibility, 14:texp-nrqm-composites-singlet-correlations, 15:ex-nrqm-composites-improper-versus-proper-mixtures.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-nrqm-composites-separable-and-entangled-states",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (c) says the cited density expansion supports arbitrary finite convex mixtures in finite dimensions, but that expansion covers orthogonal pure states; product vectors in a finite mixture need not be orthogonal. State-geometry clause (a) does prove the claim, but the added ",
      "context_sha256": "2525ad15befd7779258ef562d13005972cfa24ab38b108afa541c7da28c4a27d",
      "item_sha256": "36bfcc8e490993699fdb9d259fdd4115611cc97288169b36da819d203b616346",
      "at": "2026-10-12T20:13:47.213Z"
    },
    {
      "id": "def-nrqm-composites-framework-composite-systems-and-local-readouts",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal type error in (b): a “product preparation” is defined as a density operator, but general preparations are then said to be linear superpositions of them. Superposition acts on vectors; mixtures of product density operators also cannot represent entangled pure preparations.",
      "context_sha256": "7f3ef2574dc4ea467cceb569b8ba30c0aad685ad07e4aba8cc89617e1af374c4",
      "item_sha256": "6f1125d4d065bd7935039e1a9e9b8e4efcd43c0134f09efe7754c950e20ad35e",
      "at": "2026-10-12T20:12:59.733Z"
    },
    {
      "id": "def-nrqm-composites-framework-reduced-preparations",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (d) promises a theorem that non-product pure preparations fail local-outcome factorization, but this page gives no such theorem or proof. Its partial-trace algebraic criteria do not establish that statistical claim.",
      "context_sha256": "c95d2efc9cb48be4bc297accdfa73cc2804110dffdf912bd3c3c56d947993c14",
      "item_sha256": "51d316f4cf5256981f110eb9c4202ea393d03b0edc1aea1002589c4d97a82f14",
      "at": "2026-10-12T20:13:04.070Z"
    },
    {
      "id": "def-nrqm-composites-marker-model-and-fringe-visibility",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "In (c), ρ_mix applies T to ψ_j⊗e_j without κ. These are algebraic tensors, but T must act on vectors of H_s ⊗̂ K. Use T_{κ(ψ_j⊗e_j),κ(ψ_j⊗e_j)} in both terms.",
      "context_sha256": "7e52bbdb3b1293641a89a22b7b75827cba36d38ebe9562b5812beb25dd6365e4",
      "item_sha256": "ac582662647f2cafedef8a28cbd9ebb5f4213f745723076ecae5c72ea63b1e2c",
      "at": "2026-10-12T20:13:29.516Z"
    },
    {
      "id": "pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The adopted composite-framework interface assumes both countable choice and the Axiom of Choice, but this theorem states only countable choice. Its conditional hypotheses omit a required assumption from the supplied interface.",
      "context_sha256": "8c5842ee0e38e1e0b2d052aaee389097466f07a8aaa6da58bd783ff23f0f0d9d",
      "item_sha256": "79e92c626eb3f433b2d04ff443b62d5f700e55ec7aa1c067649c5c9511e0e0ce",
      "at": "2026-10-12T20:12:47.582Z"
    },
    {
      "id": "pthm-nrqm-composites-local-instruments-and-no-signalling",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 applies the single-system Kraus theorem to operators N_b on K but uses ρ on H⊗K; that is ill-typed and does not establish the composite discarded map is a state. Apply the theorem to the extended operators I_H⊗N_b.",
      "context_sha256": "5321b6cf3e0b4669ef695d7aa2e1b4844a436b068b1d428d4dfb763afa5f2467",
      "item_sha256": "35d4b09205f5fe428f4471293fc6a1479811e8a7936453b64b53996540481934",
      "at": "2026-10-12T20:13:44.277Z"
    },
    {
      "id": "pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F2] overstates its cited interface: rank-one clause (e) requires S to be trace-class, but the proof uses tr(T_{w,w}S) for arbitrary bounded S. Ideality only ensures trace-classness; clauses (d) and (b) would establish the identity but are not cited.",
      "context_sha256": "9be1b4bf718fbfc7328f52f702a11d1cc760330ac7283280daf62c2ab275f107",
      "item_sha256": "9f4c05d0f2d7ad2d0c28c8efaa1c9d71ef80c5d8bc99b1dccd9c6bbb202a3f28",
      "at": "2026-10-12T20:12:56.812Z"
    },
    {
      "id": "pthm-nrqm-composites-marker-overlap-and-visibility-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F3] overstates its supplier: the local-readout theorem covers an assigned real-valued sharp observable and Borel subsets of ℝ. It does not license the joint position PVM G on ℝ³; step 2.1 uses it for G(B), so the detection-law deduction is unsupported as cited.",
      "context_sha256": "60396687ca094f3c124300b5a5f13e0ce65b7bae8ac5cc9597846503d90c571f",
      "item_sha256": "6a80ae3c21122ae7484620ce6b5346b7fb12585e5d19b28008a419ddbaa53b8e",
      "at": "2026-10-12T20:13:24.317Z"
    },
    {
      "id": "rem-nrqm-composites-scope-and-empirical-status",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Binney entry attributes reduced density operators to §6.1, pp.105–115, but the book places them in §6.3.1, p.125; the listed range misidentifies its source. [Source](https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf)",
      "context_sha256": "7dcd59854e1b746c4579c809a3498ba9dddf2237a749d00ad85ab3437d6abef7",
      "item_sha256": "a77684bbf693c4643323a6cd3132894a26f1a6ce9b3c2e9a4f29dc2ae9dafa3a",
      "at": "2026-10-12T20:13:16.505Z"
    },
    {
      "id": "ex-nrqm-composites-marker-overlap-visibility",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The profiles are dimensionally inconsistent with the cited model: position is in metres and H₀ wavefunctions carry ℓ⁻³ᐟ², but unit η in L²(ℝ²) carries ℓ⁻¹ while the longitudinal indicators are dimensionless. Thus ψⱼ have ℓ⁻¹; include normalized longitudinal factors or define dime",
      "context_sha256": "397cd7ac13418017d14a3088f84f63979fcd53a09960a692b0caa75369c7f366",
      "item_sha256": "eeaa9a766f33000cfdd63e874253552f8c9aa5e2ac0fd859388582af45119c42",
      "at": "2026-10-12T20:12:53.429Z"
    },
    {
      "id": "texp-nrqm-composites-singlet-correlations",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 misstates its cited interface: the spin-outcome theorem gives laws on H₁/₂=L²(R³;C²), with fibrewise projections, not on V=C². Steps 1.2/2.1 use that law for internal vectors u±, so the cited physical outcome premise does not license these probabilities.",
      "context_sha256": "1c2a4fd49c047b9194ae9be6a37f60f72884a565e78fa5767196c0c4ca513b2a",
      "item_sha256": "cfaab275d0a98a20fe0e2cadecadeb4e54e22772e0636651517ef835521ce964",
      "at": "2026-10-12T20:15:11.774Z"
    },
    {
      "id": "ex-nrqm-composites-improper-versus-proper-mixtures",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 claims to prove (i), but its cited partial-trace calculations establish only the equal marginals, not ρ≠M. That distinction is derived later from differing x,x correlations, so the claimed step conclusion is unsupported.",
      "context_sha256": "126206a5aedbf5ff2a71363b800cbbdce2ee00781b814e2569a47f05a89dc711",
      "item_sha256": "12dd555e17e69189d9688f9b07ff6998aac8d3928df045e17b18d9cc1a0346a3",
      "at": "2026-10-12T20:13:47.979Z"
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
