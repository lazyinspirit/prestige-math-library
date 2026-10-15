# Historical Step-5 integrity close, `quantum-prerequisites-4-2026-10-15`

Historical compatibility task only. This template grants no current repair or
certification authority. Preserve existing receipts as evidence; do not dispatch
the retired frozen-close lane for a current run.

Current rounds use `tools/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs and the generated task:
repair every confirmed defect, finish all newly discovered downstream repairs,
then centrally certify once all writers drain. Repeat the full final gate and
owner repair until green. Use the generated round task for scope and schema.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
