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

# Step 8 — scope-denial delta review, `{{run}}`

First follow `briefs/tasks/frontier-dependency-ledger.md`. Refresh and read
`research/{{run}}-cross-batch-dependencies.json` for cross-batch scope and impact.

Read only pending rows in `research/{{run}}-step8-scope-delta.json`. Verify each
reason and destination against the current closure, plan, published files, and
cited source, then update its owning group scope-decision row to `stands` or
`owner-decision` with concrete evidence.

If `research/{{run}}-step8-mathematical-review.task.md` exists, also perform its
explicitly scoped supervising review after the Step-7 freeze. Keep its blocking
obligation open pending the engine's Step-8 recertification; do not judge or stamp
your own repair. Record its evidence and exact changed IDs in your report.

An overturned decline may add an in-scope result only when it needs no new page
or forward dependency; write its manifest, coverage, contract, risk, splice,
and impact updates. A new page, forward dependency, or reading-order change is
an owner decision.

Refresh and check all scope decisions, then write
`research/{{run}}-alpha-step8-review.md`. Inspect each open run ledger row and
close or defer that same row with evidence; render the ledger after an edit.
