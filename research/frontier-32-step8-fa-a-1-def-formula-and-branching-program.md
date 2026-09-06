# FA terminal evidence: def-formula-and-branching-program

Disposition: repaired. Queue frontier-32, group a, position 1.

Read the current item, direct prerequisite
`items/def-boolean-circuit-size-depth-fanin-and-basis.md`, the surrounding
`def-boolean-formula-cnf-and-sat`, both Boolean-circuit A/B pages, batch-1
manifest and coverage entries, batch-1 notes, batch and merged proof-contract
scope, group-a convention/concern digest, refute-1 scope, Alpha repair report
and exact adjudication, and both Terra rejection records. This definition has
no proof contract (proof is not-applicable); no separate frontier-32 risk file
exists. The group concern list raises no formula-specific warning. The actual
risk is the input-node interface explicitly identified in the final rejection.

The first rejection correctly demanded bit-labelled branching edges; Alpha
added both labels and the transition rule. That correction is sound. The final
rejection is also correct: a single graph node for each input together with
fan-out at most one forbids repeated occurrences. For example the syntax
(x AND y) OR (x AND z) must be permitted with two distinct x leaves.

Independently replaced the formula clause by a finite rooted syntax tree,
with unary NOT, binary AND/OR, and repeated variable/constant leaves. Equal
variable labels are evaluated at the same input bit, without sharing computed
subformulas. Size explicitly counts connective gates and constant occurrences,
not variable leaves, consistent with the direct prerequisite's non-input-gate
convention (constants are counted on this page). A variable alone has size
zero; a constant alone has size one. Branching programs are explicitly finite,
acyclic, deterministic query graphs, measured by vertices. Finiteness and
acyclicity ensure termination at a labelled sink. No dependency was edited.
The exact manifest strategy was synchronized; no proof contract is required.

Source verification: https://theory.cs.princeton.edu/complexity/book.pdf,
Arora--Barak web draft, Chapter 6 Exercise 10, PDF page 129 (zero-based),
printed page 114. Opened the original PDF and its complete exercise/hint.
The exercise exempts input nodes from the fan-out restriction and describes
the tree interpretation. This supports repeated inputs and the separation of
computed subformulas. The local size convention comes from the inspected
library prerequisite, not an inferred identity of all textbook size models.

Focused validation: rendercheck passed (1 file, real KaTeX and YAML);
precheck correctly checked zero proof-bearing items, zero failures. Manual
checks covered repeated variables, unary/binary arities, constant and variable
roots, both outgoing bit choices and finite termination. No judge pass stamp
or new judge verdict was created. No unresolved mathematical obligation.
Next action: record position 1, then open position 2 only after acceptance.
