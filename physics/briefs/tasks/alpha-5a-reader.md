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

# Step 5a reader — batch `<i>`, run `<run>`

- This dispatch owns exactly one batch: `<i>`, as listed in `covers:`.
- Read `research/<run>-batch-<i>.pages.json`; open every listed page at `library/<category>/<page>.md` and every listed item at `items/<id>.md`, plus dependencies needed to verify claims. Read items in dependency order, suppliers before consumers.
- Follow `briefs/reader.md`. The assigned batch is your full scope, and its authors' decisions do not govern your independent review.
- Repair only confirmed defects in an in-flight item of this batch or its assigned A-page prose. Keep proposed withdrawals present for the 5b lead. Do not edit another batch, `research/plan-spec.json`, B-page prose, or published content.
- After a material item repair, update the affected proof contract, remove the stale `verification.judge` record, and run reflow and precheck on each changed item:
  `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/<id>.md` and
  `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/<id>.md`.
- Write `research/<run>-reader-<i>.md` with the opened item and page inventory, every edit and its evidence, every defect you could not edit, a verdict for each page, and any blocker.
- Return only schema-conforming JSON for `research/<run>-reader-findings-<i>.json`. Set `batch` to the bare batch ID `<i>`; include uneditable findings only, and use an empty `findings` array when none remains.
- For each finding, give the defective subject's exact existing item or page ID, exact location, defect class, evidence, and severity. For a published dependency, identify the assigned consumer whose dependency closure reaches it. Do not use reader-local finding labels; the routing tool assigns obligation IDs.
- Put repaired defects in the report and disk diff, not the findings array; the mechanical split rejects findings that name carriers changed by the reader.
- Record genuine limitations in `coverage_note`; do not claim coverage you did not achieve.
