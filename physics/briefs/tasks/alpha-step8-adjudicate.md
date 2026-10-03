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

# Step 8 — changed-mathematics adjudication, `{{run}}`

- Act only on IDs in `research/{{run}}-step8-changes.json`. Read their current rejection rows, item, dependencies, owning manifest, and proof contract. Match each adjudication by exact `(id, model, context_sha256)`.
- Mathematical soundness and accurate citation of dependencies are non-negotiable. Logical validity is the ground truth. Never pretend to understand something you do not; consult authoritative sources if unsure, and escalate to the owner if you are genuinely uncertain.
- Append each outcome with the pre-edit guard hash. A nonfatal or false-positive outcome changes no content. A confirmed fatal licenses one coherent repair, its ledger row, and only the associated contract, manifest, plan, or impact update. The engine rejudges that exact changed ID against the configured judge set.
- If a repair changes an item's `## Statement` or `## Definition`, trace every direct dependency and reference consumer and check its actual use of the changed claim. Make only necessary, surgical repairs within this dispatch's authorized scope. For each affected consumer outside scope, record its invalidated use and minimal needed correction for downstream impact routing. Continue another hop only if a necessary repair changes that consumer's own Statement or Definition. A citation alone does not justify an edit.
- For a contract-detector dispatch, correct the genuine contract or risk defect, or record why the detector is inapplicable.
- Write `research/{{run}}-alpha-step8-adjudicate.md` with every tuple, outcome, evidence, edit, and rejudge target. The mechanical stamp stage writes stamps.
