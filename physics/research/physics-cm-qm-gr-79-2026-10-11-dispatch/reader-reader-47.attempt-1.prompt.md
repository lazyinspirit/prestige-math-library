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

# Step 3a reader

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/physics-support/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

- Read the assigned batch independently of its authors. Treat manifests, contracts, earlier reports, and author decisions as evidence, not verdicts; judge the current authored mathematics, not Step 3 scaffold decisions.
- Open every assigned page and item, plus every dependency needed to verify a claim. Read items in dependency order: suppliers before their direct or indirect consumers.
- Check titles, definitions, statements, constructions, facts, proofs, witnesses, computations, remarks, contracts, and page summaries. Trace every inference to its hypotheses, exact citation, earlier step, or elementary derivation. Open cited targets before calling them insufficient, and preserve domains, quantifiers, hypotheses, direction, and conclusion.
- Identify and flag every prerequisite the proof silently assumes but does not establish, and every other insufficiently justified proof step. For each, give the exact location, state what is assumed or missing and why the available hypotheses and dependencies do not supply it, and specify the proof or authoritative source needed to close the gap. Do not treat an unstated prerequisite as standard background.
- Treat a short proof-step omission as nonfatal only when a competent reader closes it immediately. This never excuses a defective claim, definition, title, witness, computation, or citation.
- Search authoritative sources when the mathematics is unfamiliar; record the exact statement and location that resolves the uncertainty.
- Repair confirmed defects only in an in-flight assigned item or assigned A-page prose. Keep a proposed withdrawal present for owner disposition. Do not edit another batch, `research/plan-spec.json`, B-page prose, or published content; do not judge, stamp, or self-certify.
- When editing an item, make proof repairs mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats; remove repetition, filler, and padding. Add intermediate lemmas to meet unmet prerequisites when possible.
- After a material item repair, update its affected proof contract, remove the stale `verification.judge` record, and run reflow and precheck for each changed item:
  `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/<id>.md` and
  `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/<id>.md`.
- Write the task-named Markdown report with the opened inventory, every edit and its evidence, every defect you could not edit, a verdict for each page, and any blocker.
- Return schema-conforming JSON containing only findings you could not edit. Give each finding its exact location, defect class, evidence, and severity. For a published dependency, name the assigned consumer whose dependency closure reaches it. Use the exact existing item or page ID of the defective subject; the routing tool assigns the obligation ID. Use an empty `findings` array when nothing remains.
- Record genuine limitations in `coverage_note`; never claim coverage, reading, or evidence you did not produce.


---

# This dispatch

run: physics-cm-qm-gr-79-2026-10-11
role: reader
label: reader-47
covers: 47
output: research/physics-cm-qm-gr-79-2026-10-11-reader-47.md

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

# Step 3a reader — batch `47`, run `physics-cm-qm-gr-79-2026-10-11`

- This dispatch owns exactly one batch: `47`, as listed in `covers:`.
- Read `research/physics-cm-qm-gr-79-2026-10-11-batch-47.pages.json`; open every listed page at `library/<category>/<page>.md` and every listed item at `items/<id>.md`, plus dependencies needed to verify claims. Read items in dependency order, suppliers before consumers.
- Follow `briefs/reader.md`. The assigned batch is your full scope, and its authors' decisions do not govern your independent review.
- Repair only confirmed defects in an in-flight item of this batch or its assigned A-page prose. Keep proposed withdrawals present for owner disposition. Do not edit another batch, `research/plan-spec.json`, B-page prose, or published content.
- After a material item repair, update the affected proof contract, remove the stale `verification.judge` record, and run reflow and precheck on each changed item:
  `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/<id>.md` and
  `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/<id>.md`.
- Write `research/physics-cm-qm-gr-79-2026-10-11-reader-47.md` with the opened item and page inventory, every edit and its evidence, every defect you could not edit, a verdict for each page, and any blocker.
- Return only schema-conforming JSON for `research/physics-cm-qm-gr-79-2026-10-11-reader-findings-47.json`. Set `batch` to the bare batch ID `47`; include uneditable findings only, and use an empty `findings` array when none remains.
- For each finding, give the defective subject's exact existing item or page ID, exact location, defect class, evidence, and severity. For a published dependency, use `subject_type: "published-dependency"` and identify the assigned consumer whose dependency closure reaches it. For a draft supplier in another exact current-run batch, use `subject_type: "in-run-dependency"` with that assigned `consumer_id`; its producer remains outside your edit scope. Do not relabel a draft supplier as published or an assigned item. Do not use reader-local finding labels; the routing tool assigns obligation IDs.
- Set `observed_source` to `null` unless an in-run dependency finding can bind the exact bytes you observed. When it can, use `{snapshot: "pre" | "current", item_sha256: "<raw source SHA-256>"}` for the producer's pre-reader snapshot or source still current at split. If another writer has corrected it and you cannot bind the original bytes, retain the historical claim/evidence and explain the missing-byte limit. A stored pre-reader fingerprint is a baseline, not proof that you observed those exact bytes.
- Put repaired defects in the report and disk diff, not the findings array; the mechanical split rejects findings that name carriers changed by the reader.
- Record genuine limitations in `coverage_note`; do not claim coverage you did not achieve.


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
