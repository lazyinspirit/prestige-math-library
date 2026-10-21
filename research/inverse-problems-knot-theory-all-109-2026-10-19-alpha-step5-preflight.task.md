# Historical Step-5 preflight, `inverse-problems-knot-theory-all-109-2026-10-19`

Historical compatibility task only. This template grants no current repair or
certification authority. Preserve earlier diagnostic reports as evidence;
do not use the retired preflight/final-adjudicator sequence for a current round.

Current tasks come from `tools/step5-workflow.mjs` and use
`briefs/step5-adjudicator.md` or `briefs/step5-owner-repair.md`.
Follow those briefs and the generated task's exact ownership.
All confirmed defects, including nonfatal defects, and every newly discovered
downstream effect must be repaired before the stable certification pass.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
