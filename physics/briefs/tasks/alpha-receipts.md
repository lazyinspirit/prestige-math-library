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

# Step 8 — whole-level receipts, `{{run}}`

Before writing receipts, reconcile every proof-bearing manifest item against its
owning batch contract, including reused items. For missing entries, read the full
current proof and cited interfaces, then add item-specific citations, step inputs,
boundary dispositions and required risk review to that batch's contract. Preserve
existing valid entries. Merge the batch contracts and run strict contract, risk,
boundary and citation checks. This authorizes evidence repair only: do not change
mathematical content, invent an attestation, or suppress an unresolved defect.

Generate `research/{{run}}-spine-audit.json` with `spine-audit --template` and
read every selected proof before completing its current-hash evidence.

Generate `research/{{run}}-audit-coverage.json` with
`level-coverage --template`. Supply the reviewer, concrete attestation, and an
item-specific `plan_reconciliation` reason for every authored dependency delta.

Run `level-coverage` with the contracts, judge ledger, adjudications,
`--terminal-resolutions research/{{run}}-step7-terminal-resolutions.jsonl`,
`--verify-current-context`, spine receipt, audit receipt, and all run manifests.
Use the same complete scope when generating templates. Terminal resolutions are
required evidence, not missing judge verdicts. Do not alter a receipt to conceal a
missing configured-judge verdict, open fatal, or unadjudicated rejection; report
that condition instead.
