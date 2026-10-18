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

**Diagram review and repair (Steps 2–5).** Adjudicate every TikZ/tikzcd diagram
in your assigned scope, including commutative diagrams, string diagrams, Young
tableaux, braids, Temperley–Lieb diagrams and other diagram types. Check
mathematical correctness against the text: objects, labels, arrow directions,
compositions, crossings, conventions and claimed identities. Repair incorrect
diagrams and add missing diagrams wherever the exposition requires them, within
your authorized write scope. Read-only roles report defects and needed additions;
escalate changes outside your scope. Keep diagrams compatible with conventions
in the literature, and keep rigorous proofs independent of the diagrams.
