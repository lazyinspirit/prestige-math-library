# Historical Step-5 final-adjudicator fallback

Historical compatibility task only. This fallback is not a work queue and grants
no authority to edit content or issue receipts. Retain historical queues and
decisions as evidence; the terminal final-adjudicator lane is retired.

Current rounds use `briefs/step5-adjudicator.md`,
`briefs/step5-owner-repair.md` and generated tasks from
`tools/step5-workflow.mjs`. Follow those briefs and the generated round task:
all confirmed defects and downstream effects must be repaired before central
certification, with further repair-phase continuation whenever needed.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
