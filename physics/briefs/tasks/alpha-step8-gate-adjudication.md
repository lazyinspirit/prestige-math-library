# Mandatory physics instructions

Read `CLAUDE.md`, `SCHEMA.md`, and `../PHYSICS-CONTENT-MODEL.md`. Follow the assigned role and scope. These rules apply to every physics framework.

**Define, do not merely name.** Be as mathematically rigorous and explicit as possible. Before using a technical term, give its mathematical definition or identify an exact earlier definition and state its relevant content. Specify objects, domains, maps, regularity, hypotheses, and conventions. Use published, draft or planned mathematics suppliers with exact statements, hypotheses and honest proof status; complete remaining gaps locally.

**Example—classical EM:** write $\mathbf E,\mathbf B:\Omega\times I\to\mathbb R^3$, with spatial region $\Omega\subseteq\mathbb R^3$, time interval $I$, and stated regularity; at fixed time these are spatial vector fields. Specify units. Do not assume smoothness across point charges or surface sources; state exclusions or use an appropriate weak/distributional formulation. Likewise, define a worldline as a curve with specified domain and conditions, and a reference frame as a precise geometric object appropriate to the framework.

**Model deductions and empirical observations are distinct.** A physics proof establishes a logical consequence of explicitly stated model postulates, mathematical hypotheses and idealizations; it does not establish that the model or its postulates describe nature. Experiments report source-backed observations with apparatus, calibration, sampling and uncertainty qualifications. Comparing predictions with observations tests the combined model and apparatus assumptions; agreement is evidence, not a deductive proof of the model. Explicitly distinguish adopted assumptions, derived predictions, reported observations and statistical inference. If a deduction uses measured inputs, state them as qualified empirical premises and carry their uncertainty and conditions into the conclusion.

**Evidence is statistical.** Separate predictions, observations, and inference. State preparation, apparatus assumptions, sampling model, uncertainty, and source limitations. Never invent measurements or statistical precision. Carry empirical qualifications into downstream conclusions.

**Example—double slit:** each detection is localized; fringes concern the accumulated distribution. A finite sample can lack visible fringes with nonzero probability under ordinary coherent sampling models. Agreement does not prove quantum mechanics; missing fringes do not automatically falsify it. Test a specified competing model, not “all classical physics.” A p-value is not the probability that a theory is false. Classical waves also interfere, and reviewer confidence is not empirical certainty.

Postulates are adopted assumptions; experiments report source-backed observations, not proofs. Physics theorems and thought experiments require complete conditional deductions. Use schema classifications, dependency roles, uncertainty records, and nonproof reviews. Keep evidence links separate from acyclic prerequisites. Mathematical items cannot depend on physics; imports and the root mathematics workspace are read-only. Physical public-interface changes require consumer review.

Authors supply definitions and prerequisites; reviewers and adjudicators check them, source fidelity, and statistical qualifications. Reject undefined reasoning and fabricated certainty.

---

# Step 8 — gate adjudication, `{{run}}`

- Treat the exact gate envelope above as authoritative. Reproduce and adjudicate every listed primary or advisory gate against the current tree.
- Mathematical soundness and accurate citation of dependencies are non-negotiable. Logical validity is the ground truth. Never pretend to understand something you do not; consult authoritative sources if unsure, and escalate to the owner if you are genuinely uncertain.
- Repair only a confirmed in-scope defect. Preserve correct content and report false-positive detectors.
- Do not change a gate, detector, threshold, judge verdict, or workflow state. A published correction requiring a debatable restatement, new result, deletion, or reading-order change is an owner blocker.
- A mathematical edit invalidates its prior judge currency. Record the exact changed IDs so the engine can refresh the Step 8 delta and rejudge them.
- If an authorized repair changes an item's `## Statement` or `## Definition`, trace every direct dependency and reference consumer and check its actual use. Apply only necessary, surgical repairs within this dispatch's scope. Report affected consumers outside scope with their invalidated uses and minimal needed corrections for downstream routing. Continue another hop only when a necessary consumer repair changes its own Statement or Definition; a citation alone does not require an edit.
- Return every gate ID, finding, disposition, evidence, edit, focused rerun, and unresolved blocker. This repair dispatch claims no stage coverage.
