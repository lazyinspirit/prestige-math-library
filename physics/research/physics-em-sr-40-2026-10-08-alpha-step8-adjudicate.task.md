# Owner scope and authoring direction

Read `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` before working. It is binding and overrides stale task or design text.

# Mandatory physics instructions

Read `CLAUDE.md`, `SCHEMA.md`, and `../PHYSICS-CONTENT-MODEL.md`. Follow the assigned role and scope. These rules apply to every physics framework.

**Define, do not merely name.** Be as mathematically rigorous and explicit as possible. Before using a technical term, give its mathematical definition or identify an exact earlier definition and state its relevant content. Specify objects, domains, maps, regularity, hypotheses, and conventions. Use published, draft or planned mathematics suppliers with exact statements, hypotheses and honest proof status; complete remaining gaps locally.

**Example—classical EM:** write $\mathbf E,\mathbf B:\Omega\times I\to\mathbb R^3$, with spatial region $\Omega\subseteq\mathbb R^3$, time interval $I$, and stated regularity; at fixed time these are spatial vector fields. Specify units. Do not assume smoothness across point charges or surface sources; state exclusions or use an appropriate weak/distributional formulation. Likewise, define a worldline as a curve with specified domain and conditions, and a reference frame as a precise geometric object appropriate to the framework.

**Evidence is statistical.** Separate predictions, observations, and inference. State preparation, apparatus assumptions, sampling model, uncertainty, and source limitations. Never invent measurements or statistical precision. Carry empirical qualifications into downstream conclusions.

**Example—double slit:** each detection is localized; fringes concern the accumulated distribution. A finite sample can lack visible fringes with nonzero probability under ordinary coherent sampling models. Agreement does not prove quantum mechanics; missing fringes do not automatically falsify it. Test a specified competing model, not “all classical physics.” A p-value is not the probability that a theory is false. Classical waves also interfere, and reviewer confidence is not empirical certainty.

Postulates are adopted assumptions; experiments report source-backed observations, not proofs. Physics theorems and thought experiments require complete conditional deductions. Use schema classifications, dependency roles, uncertainty records, and nonproof reviews. Keep evidence links separate from acyclic prerequisites. Mathematical items cannot depend on physics; imports and the root mathematics workspace are read-only. Physical public-interface changes require consumer review.

Authors supply definitions and prerequisites; reviewers and adjudicators check them, source fidelity, and statistical qualifications. Reject undefined reasoning and fabricated certainty.

---

# Step 8 — changed-mathematics adjudication, `physics-em-sr-40-2026-10-08`

- Act only on IDs in `research/physics-em-sr-40-2026-10-08-step8-changes.json`. Read their current rejection rows, item, dependencies, owning manifest, and proof contract. Match each adjudication by exact `(id, model, context_sha256)`.
- Mathematical soundness and accurate citation of dependencies are non-negotiable. Logical validity is the ground truth. Never pretend to understand something you do not; consult authoritative sources if unsure, and escalate to the owner if you are genuinely uncertain.
- Append each outcome with the pre-edit guard hash. A nonfatal or false-positive outcome changes no content. A confirmed fatal licenses one coherent repair, its ledger row, and only the associated contract, manifest, plan, or impact update. The engine rejudges that exact changed ID against the configured judge set.
- If a repair changes an item's `## Statement` or `## Definition`, trace every direct dependency and reference consumer and check its actual use of the changed claim. Make only necessary, surgical repairs within this dispatch's authorized scope. For each affected consumer outside scope, record its invalidated use and minimal needed correction for downstream impact routing. Continue another hop only if a necessary repair changes that consumer's own Statement or Definition. A citation alone does not justify an edit.
- For a contract-detector dispatch, correct the genuine contract or risk defect, or record why the detector is inapplicable.
- Write `research/physics-em-sr-40-2026-10-08-alpha-step8-adjudicate.md` with every tuple, outcome, evidence, edit, and rejudge target. The mechanical stamp stage writes stamps.
