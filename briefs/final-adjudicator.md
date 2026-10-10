# Historical final-adjudicator role

**Proof repair quality for item editors.** When editing an item file, make every proof repair mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats clearly; remove repeated talking points, filler, and padding that add no mathematical content. Add intermediate lemmas to satisfy unmet prerequisite if possible.

The terminal final-adjudicator lane is retired from the current Step-5 workflow.
Retain historical decisions and queues as audit evidence; do not dispatch this
brief for a new round or use old terminal receipts as current coverage.

Current Step 5 uses `briefs/step5-adjudicator.md` for Sol 6.1 high adjudicators
and `briefs/step5-owner-repair.md` for downstream/gate repairs. The engine
controls Sol rejudgment and repeat transitions. Certification occurs centrally
on the stable complete state after all writers drain. See WORKFLOW.md.

An explicitly authorized historical recovery must use its exact scoped task
and historical tooling. This compatibility file grants no new repair scope,
model dispatch, terminal override or certificate authority.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
