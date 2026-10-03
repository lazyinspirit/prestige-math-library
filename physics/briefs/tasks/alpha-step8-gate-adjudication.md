# Physics content contract

This is a physics-workspace assignment. Read SCHEMA.md, CLAUDE.md, and
../PHYSICS-CONTENT-MODEL.md. The class-specific rules below override mathematical
proof-only wording in the inherited task:

- Use domain and library classifications, and dependency_roles on local items.
- postulate (post-): explicit adopted assumption, sources and physical_scope;
  review formulation, scope, sources, non_derivation. No proof required.
- experiment (exp-): reported setup, procedure, observations, uncertainty,
  interpretation and empirical_result. Review every field against retrieved
  source text. Do not fabricate observations or prove measured outcomes.
- physical-theorem (pthm-) and thought-experiment (texp-): identical complete
  conditional proofs, explicit physical_scope, and inherited empirical_premises.
- Mathematical items retain all ordinary mathematical proof obligations and
  cannot depend on physics. Imported mathematical items and pages are read-only.
- Nonproof item contracts use physics_review fields with verdict and concrete
  evidence as specified in SCHEMA.md; do not create fictitious proof worksheets.
- Relations (support/testing/motivation/replication/challenge) are not deps.
- Changes to Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications change the public physical interface and require direct-consumer review. Proofs, citations, and audit stamps alone do not propagate.
- Write only in this workspace. Never modify the root math engine, tools,
  briefs, items, or library. Any genuine math supplier defect is an escalation.

## Required experimental-evidence guidance

Before authoring, reviewing, judging, or adjudicating physical content, read
../PHYSICS-CONTENT-MODEL.md, especially "Statistical evidence and the double-slit
example". Apply its author/judge/adjudicator instructions to every statistical
claim. Separate theoretical distributions, finite observed data, and statistical
inference. Finite agreement does not prove a physical framework, and a rare
outcome or missing visible fringe does not automatically falsify one. Classical
waves also interfere: identify the specific competing model and apparatus
assumptions. Never invent sample sizes, uncertainties, p-values, or power.
Confidence in a source review or conditional proof is not certainty that a theory
is true. Carry sampling and measurement qualifications into downstream claims.

---

# Step 8 — gate adjudication, `{{run}}`

- Treat the exact gate envelope above as authoritative. Reproduce and adjudicate every listed primary or advisory gate against the current tree.
- Mathematical soundness and accurate citation of dependencies are non-negotiable. Logical validity is the ground truth. Never pretend to understand something you do not; consult authoritative sources if unsure, and escalate to the owner if you are genuinely uncertain.
- Repair only a confirmed in-scope defect. Preserve correct content and report false-positive detectors.
- Do not change a gate, detector, threshold, judge verdict, or workflow state. A published correction requiring a debatable restatement, new result, deletion, or reading-order change is an owner blocker.
- A mathematical edit invalidates its prior judge currency. Record the exact changed IDs so the engine can refresh the Step 8 delta and rejudge them.
- If an authorized repair changes an item's `## Statement` or `## Definition`, trace every direct dependency and reference consumer and check its actual use. Apply only necessary, surgical repairs within this dispatch's scope. Report affected consumers outside scope with their invalidated uses and minimal needed corrections for downstream routing. Continue another hop only when a necessary consumer repair changes its own Statement or Definition; a citation alone does not require an edit.
- Return every gate ID, finding, disposition, evidence, edit, focused rerun, and unresolved blocker. This repair dispatch claims no stage coverage.
