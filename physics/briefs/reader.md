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

# Step 5a reader

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
- Treat a short proof-step omission as nonfatal only when a competent reader closes it immediately. This never excuses a defective claim, definition, title, witness, computation, or citation.
- Search authoritative sources when the mathematics is unfamiliar; record the exact statement and location that resolves the uncertainty.
- Repair confirmed defects only in an in-flight assigned item or assigned A-page prose. Keep a proposed withdrawal present for the Step 5b lead. Do not edit another batch, `research/plan-spec.json`, B-page prose, or published content; do not judge, stamp, or self-certify.
- When editing an item, make proof repairs mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats; remove repetition, filler, and padding. Add intermediate lemmas to meet unmet prerequisites when possible.
- After a material item repair, update its affected proof contract, remove the stale `verification.judge` record, and run reflow and precheck for each changed item:
  `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/<id>.md` and
  `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/<id>.md`.
- Write the task-named Markdown report with the opened inventory, every edit and its evidence, every defect you could not edit, a verdict for each page, and any blocker.
- Return schema-conforming JSON containing only findings you could not edit. Give each finding its exact location, defect class, evidence, and severity. For a published dependency, name the assigned consumer whose dependency closure reaches it. Use the exact existing item or page ID of the defective subject; the routing tool assigns the obligation ID. Use an empty `findings` array when nothing remains.
- Record genuine limitations in `coverage_note`; never claim coverage, reading, or evidence you did not produce.
