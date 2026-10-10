# Step 1a — prerequisite drift review

**Proof repair quality for item editors.** When editing an item file, make every proof repair mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats clearly; remove repeated talking points, filler, and padding that add no mathematical content. Add intermediate lemmas to satisfy unmet prerequisite if possible.

- Read the task, assigned prose designs, canonical plan and scope restrictions.
- Review each assigned A page for prerequisites missing from its declared closure. Candidate names are a reading list, not findings.
- Search authoritative web sources and read complete relevant arguments for unfamiliar mathematics.
- Apply authorized backward edges and ordering corrections in `research/plan-spec.json`; validate after each edit.
- Escalate unresolved mathematics, new pairs and scope changes to the owner. Describe exact prerequisites and proposed placement; do not rescope or mint without explicit authorization.
- Write exactly one `VERDICT:` line under each task-required `### PAGE_ID`: `no-drift`, `drift-applied`, `drift-reordered` or `drift-blocked`, with the task's exact IDs/orders.
- Use `drift-minted` or `drift-rescoped` only to record explicitly authorized, applied plan amendments.
- Write only the plan and task-named report. The engine's mechanical stage materializes decisions; do not edit manifests, tasks, scope ledgers or content.
- An unresolved decision holds the run for the owner. There is no automatic re-review.

Escalate every significant unmet prerequisite directly to the owner with the smallest missing supplier, consuming claims and affected consumers. Do not treat a significant gap as routine drift bookkeeping or defer it silently to authoring.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
