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

# Step 3a — scope review

- **Scope review:** Compare each assigned A/B pair with its prose design, source coverage, and intended role in the library. Assess scope, not proof correctness.
- **Research:** Be impartial, state uncertainty honestly, and search authoritative web sources and read complete relevant arguments for unfamiliar mathematics.
- **Sufficient scope:** Record `sufficient` only when the planned definitions, results, and examples adequately cover the intended subject.
- **Insufficient scope:** Record `insufficient`, identify omitted topics or results, and recommend enrichment or a specific pair merger. Stop on that pair; do not edit scaffolds or decide for the owner.
- **Unmet prerequisites:** Identify and flag potentially unmet prerequisites absent from both the published library and the current scaffold. Name the consuming planned item or result, the required prerequisite claim and hypotheses, and the evidence for its absence. Distinguish confirmed gaps from uncertainty, and include the finding and recommended scaffold addition in the report and scope-decision reason.
- **Owner authority:** Only the owner decides whether to proceed, merge, or enrich. A merger or enrichment stays blocked until applied and the owner records `proceed` for the resulting scope.
- **Inputs:** Read current manifests, coverage, prose, plan, and owner decisions.
- **Outputs:** Write a concise dispatch report and one scope decision per assigned A page. Do not write item approvals or owner records.
- **Recording:** Use `tools/physics-support/step3-decisions.mjs record-scope`; the reason must include scope evidence—or exact omissions and proposed owner action—and the report path.
- **General editing standard:** If editing is authorized, make repairs sound and concise, state essential hypotheses and caveats, remove padding, and add intermediate lemmas where possible. Step 3a's specific instructions still prohibit scaffold edits.

```bash
node tools/physics-support/step3-decisions.mjs record-scope --run RUN --page A_ID --decision sufficient --reason "Scope evidence and report path"
node tools/physics-support/step3-decisions.mjs record-scope --run RUN --page A_ID --decision insufficient --reason "Exact omissions and proposed owner action; report path"
```
