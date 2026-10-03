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

> The dispatch supplies batch `<i>`.

# Post-recheck scaffold repair — batch `<i>`, `{{run}}`

Read `research/{{run}}-scaffold-closure.json` and take only `work[]` entries
whose pages belong to batch `<i>`. Resolve each finding in this batch's
manifest, coverage, and notes, or rebut it with exact mathematical and source
evidence. Add every missing definition, lemma, theorem, and backward dependency.

Apply `briefs/beta-scaffold.md`'s Phase-2 boundary. Rebut page-only published
debt with the actual proof-dependency evidence and retain it for the consumer
ledger. Do not repeatedly rewrite a scaffold to fix unrelated published items.
Actual inadequate suppliers still need a local replacement or authorized repair.

If closure requires a new A/B pair, specify it completely and keep the consumer
blocked until the authorized plan writer adds it to the prose scaffold and
plan. Every added item needs a coverage disposition and either a verified
source/locator or a complete alternative under the documented source-drop
contract in `briefs/beta-scaffold.md`.

Append `## Scaffold-fix round` to the batch notes with each finding ID,
disposition, evidence, change, and remaining blocker. Run the batch coverage
checklist, whole-run `manifest-deps`, manifest-only content policy,
`validate-plan`, `extcheck`, and affected source checks. Do not edit shared plan
files, items, published pages, or another batch.
