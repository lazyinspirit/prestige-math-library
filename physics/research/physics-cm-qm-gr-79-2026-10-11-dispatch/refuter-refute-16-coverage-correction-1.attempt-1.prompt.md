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

# Step 3a refuter

**Proof repair quality for item editors.** When editing an item file, make every proof repair mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats clearly; remove repeated talking points, filler, and padding that add no mathematical content. Add intermediate lemmas to satisfy unmet prerequisite if possible.

- Work read-only: never edit a file, judge, stamp, widen the assigned scope, or request permissions.
- Read the task and `research/physics-cm-qm-gr-79-2026-10-11-step3-scope-16.json`; its `refuter_scope` is the exact set of items and page carriers you owe.
- Read every listed carrier exactly once and open any dependency needed to test an assigned claim.
- Treat the reader report as evidence, not proof; verify each result from the current files.
- Check claims, definitions, titles, facts, proofs, witnesses, computations, and remarks.
- Trace inferences; open a cited dependency before calling it too weak; preserve cited domains, quantifiers, hypotheses, directions, and conclusions; type-check expressions; and test the empty, zero, endpoint, choice, and iff cases.
- Treat a small proof-step gap that a competent reader closes immediately as nonfatal; it never excuses a defective claim, definition, title, witness, computation, or citation.
- Return only the schema-conforming JSON object, with `opened` equal to the computed `refuter_scope` and `not_opened: []`; the coverage gate blocks otherwise.
- Report in `flagged` only concrete in-scope defects, each with its exact location, defect class, evidence, and severity; `flagged: []` is the correct result of a complete skeptical read with no concrete defect.
- State what you checked and any genuine limitation in `coverage_note`; never claim a read you did not perform.


---

# This dispatch

run: physics-cm-qm-gr-79-2026-10-11
role: refuter
label: refute-16-coverage-correction-1
covers: 16
output: research/physics-cm-qm-gr-79-2026-10-11-refute-16.json

# Fresh native refutation: batch16, run physics-cm-qm-gr-79-2026-10-11

Read briefs/tasks/alpha-3a-refuter.md and follow its complete independent refutation obligations. This is an owner-authorized fresh session because the original coverage output included outside context and the dispatch evidence did not substantiate its scoped carrier reads. Do not assume the prior opened array certifies reading or correctness.

Independently open and read the COMPLETE current body of every scoped carrier below, including both prose pages, then check each as required by your refuter brief with its actual prerequisites. Use recorded tool reads of complete files. Do not infer content from filenames, search snippets, or earlier acceptance. The listed initial hashes bind scheduling inputs and are not proof that you have read the files.

Scope:
- cex-cm-no-closed-lift-along-a-full-turn: items/cex-cm-no-closed-lift-along-a-full-turn.md (initial raw SHA256 956895994c82200b6050eab5bb3bdc2e04b87c36852ac892f64a112cb7fafc29)
- cm-math-rotation-double-cover: library/non-relativistic-classical-mechanics-mathematics/cm-math-rotation-double-cover.md (initial raw SHA256 25e1e239ab15590a888ac9bb345c82ee656615d3554480c6eb8abfafd6ea0dfb)
- cm-math-rotation-double-cover-examples: library/non-relativistic-classical-mechanics-mathematics/cm-math-rotation-double-cover-examples.md (initial raw SHA256 9357a6d03307f3a4667912037bc42b04b04f3e2c8d8b55b4b6b6a650080e184e)
- def-cm-quaternion-rotation-map-and-cover: items/def-cm-quaternion-rotation-map-and-cover.md (initial raw SHA256 ea0293659fb81668295474c606c9e55435656127ef8ef52d3d1020b2647e07c2)
- ex-cm-constant-angular-velocity-quaternion-lift: items/ex-cm-constant-angular-velocity-quaternion-lift.md (initial raw SHA256 cc6da31be32c08b3e8054a62838c0327ac6db7e037d80bc80d453ff22e5d50d4)
- ex-cm-quaternion-angular-velocity-reconstruction-check: items/ex-cm-quaternion-angular-velocity-reconstruction-check.md (initial raw SHA256 1885ef1881fd46cc5546bfb5201d9f5c491c5ca4ee92e602f59b0fd8fb699cfc)
- ex-cm-quaternion-lift-of-a-varying-rate-about-a-fixed-axis: items/ex-cm-quaternion-lift-of-a-varying-rate-about-a-fixed-axis.md (initial raw SHA256 61d8bfb69fc08d129ef6a48c1d8ac6c59acd73c01d68e34251366feaeb66d1c0)
- ex-cm-two-to-one-preimages-and-homomorphism-check: items/ex-cm-two-to-one-preimages-and-homomorphism-check.md (initial raw SHA256 c8e93615798f11a60a37ef230fac268331716af6746dc3f3277917134b820074)
- lem-cm-body-angular-velocity-of-a-rotation-path: items/lem-cm-body-angular-velocity-of-a-rotation-path.md (initial raw SHA256 43b0fc5019f3e13b9ee94c04f69278b1a1f60bc594ecb6c971754b15ab825b5a)
- lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity: items/lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity.md (initial raw SHA256 f46aba2e285a5ef0bc4695f285ed53ffed606e77f15a3a0b8c4b9480f72357a5)
- lem-cm-quaternion-product-rule-and-conjugation-formula: items/lem-cm-quaternion-product-rule-and-conjugation-formula.md (initial raw SHA256 5a8c9286bc8bff37658b9ff13df02cba2a64cc3663d449081f122c3be569e994)
- prop-cm-quaternion-angular-velocity-reconstruction: items/prop-cm-quaternion-angular-velocity-reconstruction.md (initial raw SHA256 7ff128fc89f363eaec3c4e386ea95682510990a4f0d9d67484eb42b95c426240)
- rem-cm-quaternion-lift-scope-and-sign: items/rem-cm-quaternion-lift-scope-and-sign.md (initial raw SHA256 283220bada703967de9635f755941ae561f735c35a743f9855dc69cc444bd875)
- thm-cm-quaternion-lift-exists-and-is-unique: items/thm-cm-quaternion-lift-exists-and-is-unique.md (initial raw SHA256 f67ab978d9982f892e044a4b20029e431c7aa86df8636fd69f91dd98c38957fc)

Return the exact refute-report schema with batch16 and findings from this fresh review. opened and not_opened must exactly partition the computed research/physics-cm-qm-gr-79-2026-10-11-step3-scope-16.json refuter_scope; put any extra prerequisite reads in coverage_note, never extra opened IDs. Report any unfinished reads truthfully. Preserve substantive defects; do not claim repairs or certainty you cannot justify. Your role is read-only; the engine writes your returned JSON to the canonical refuter artifact.


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
This role is read-only: do not write checkpoints or extra files. Use the task-provided durable evidence and reread it after compaction; return only the required response format.
