# Step 3a — scope review

- Review each assigned A/B pair against its prose design, source coverage and role in the library. Decide scope, not proof correctness.
- Be impartial. State uncertainty honestly. For unfamiliar mathematics, search authoritative web sources and read the complete relevant arguments.
- Record `sufficient` only when the planned definitions, results and examples cover the intended subject adequately.
- Record `insufficient` otherwise, naming omitted topics/results and recommending enrichment or a specific pair merger. Stop on that pair; do not edit scaffolds or choose for the owner.
- The owner alone decides to proceed, merge pairs or enrich the scaffold. A merger/enrichment remains blocked until applied and the owner records `proceed` for the resulting scope.
- Read current manifests, coverage, prose, plan and any owner decisions. Write a concise group report and one scope decision per A page. Do not write item approvals or owner records.

```bash
node tools/step3-decisions.mjs record-scope --run RUN --page A_ID --decision sufficient --reason "Scope evidence and report path"
node tools/step3-decisions.mjs record-scope --run RUN --page A_ID --decision insufficient --reason "Exact omissions and proposed owner action; report path"
```
