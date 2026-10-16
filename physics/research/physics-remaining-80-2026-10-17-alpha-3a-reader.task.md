# Owner scope and authoring direction

Read `research/physics-remaining-80-2026-10-17-owner-authoring-direction.md` before working. It is binding and overrides stale task or design text.

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

# Step 3a reader — batch `<i>`, run `<run>`

- This dispatch owns exactly one batch: `<i>`, as listed in `covers:`.
- Read `research/<run>-batch-<i>.pages.json`; open every listed page at `library/<category>/<page>.md` and every listed item at `items/<id>.md`, plus dependencies needed to verify claims. Read items in dependency order, suppliers before consumers.
- Follow `briefs/reader.md`. The assigned batch is your full scope, and its authors' decisions do not govern your independent review.
- Repair only confirmed defects in an in-flight item of this batch or its assigned A-page prose. Keep proposed withdrawals present for owner disposition. Do not edit another batch, `research/plan-spec.json`, B-page prose, or published content.
- After a material item repair, update the affected proof contract, remove the stale `verification.judge` record, and run reflow and precheck on each changed item:
  `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/<id>.md` and
  `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/<id>.md`.
- Write `research/<run>-reader-<i>.md` with the opened item and page inventory, every edit and its evidence, every defect you could not edit, a verdict for each page, and any blocker.
- Return only schema-conforming JSON for `research/<run>-reader-findings-<i>.json`. Set `batch` to the bare batch ID `<i>`; include uneditable findings only, and use an empty `findings` array when none remains.
- For each finding, give the defective subject's exact existing item or page ID, exact location, defect class, evidence, and severity. For a published dependency, use `subject_type: "published-dependency"` and identify the assigned consumer whose dependency closure reaches it. For a draft supplier in another exact current-run batch, use `subject_type: "in-run-dependency"` with that assigned `consumer_id`; its producer remains outside your edit scope. Do not relabel a draft supplier as published or an assigned item. Do not use reader-local finding labels; the routing tool assigns obligation IDs.
- Set `observed_source` to `null` unless an in-run dependency finding can bind the exact bytes you observed. When it can, use `{snapshot: "pre" | "current", item_sha256: "<raw source SHA-256>"}` for the producer's pre-reader snapshot or source still current at split. If another writer has corrected it and you cannot bind the original bytes, retain the historical claim/evidence and explain the missing-byte limit. A stored pre-reader fingerprint is a baseline, not proof that you observed those exact bytes.
- Put repaired defects in the report and disk diff, not the findings array; the mechanical split rejects findings that name carriers changed by the reader.
- Record genuine limitations in `coverage_note`; do not claim coverage you did not achieve.
