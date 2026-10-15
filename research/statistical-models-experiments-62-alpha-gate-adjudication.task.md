# Gate adjudication — `statistical-models-experiments-62`

Use the dispatch label and latest primary gate event to identify the failed
gate, then reproduce it on the current tree. Adjudicate each reported item or
repository finding from disk.

Repair only a confirmed in-scope content defect; preserve correct content and
report a false-positive detector. Do not change a gate, detector, or threshold.
A published correction requiring a debatable restatement, new result, deletion,
or reading-order change is an owner blocker.

Return a dispatch report with the gate id, each finding, disposition, evidence,
edit, rerun result, and unresolved blocker. This Step-3 repair route has no
Step-3 group or lead artifact.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
