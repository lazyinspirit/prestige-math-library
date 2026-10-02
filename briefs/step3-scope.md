# Step 3a — scope review

- **Scope review:** Compare each assigned A/B pair with its prose design, source coverage, and intended role in the library. Assess scope, not proof correctness.
- **Research:** Be impartial, state uncertainty honestly, and search authoritative web sources and read complete relevant arguments for unfamiliar mathematics.
- **Sufficient scope:** Record `sufficient` only when the planned definitions, results, and examples adequately cover the intended subject.
- **Insufficient scope:** Record `insufficient`, identify omitted topics or results, and recommend enrichment or a specific pair merger. Stop on that pair; do not edit scaffolds or decide for the owner.
- **Unmet prerequisites:** Identify and flag potentially unmet prerequisites absent from both the published library and the current scaffold. Name the consuming planned item or result, the required prerequisite claim and hypotheses, and the evidence for its absence. Distinguish confirmed gaps from uncertainty, and include the finding and recommended scaffold addition in the report and scope-decision reason.
- **Owner authority:** Only the owner decides whether to proceed, merge, or enrich. A merger or enrichment stays blocked until applied and the owner records `proceed` for the resulting scope.
- **Inputs:** Read current manifests, coverage, prose, plan, and owner decisions.
- **Outputs:** Write a concise dispatch report and one scope decision per assigned A page. Do not write item approvals or owner records.
- **Recording:** Use `tools/step3-decisions.mjs record-scope`; the reason must include scope evidence—or exact omissions and proposed owner action—and the report path.
- **General editing standard:** If editing is authorized, make repairs sound and concise, state essential hypotheses and caveats, remove padding, and add intermediate lemmas where possible. Step 3a's specific instructions still prohibit scaffold edits.

```bash
node tools/step3-decisions.mjs record-scope --run RUN --page A_ID --decision sufficient --reason "Scope evidence and report path"
node tools/step3-decisions.mjs record-scope --run RUN --page A_ID --decision insufficient --reason "Exact omissions and proposed owner action; report path"
```
