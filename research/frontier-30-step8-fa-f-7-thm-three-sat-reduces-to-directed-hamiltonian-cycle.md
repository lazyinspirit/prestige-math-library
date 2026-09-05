# Final-adjudicator evidence: `thm-three-sat-reduces-to-directed-hamiltonian-cycle`

## Disposition

`repaired`

## Mathematical basis

The Alpha's second repair is correct.  For the empty conjunction, the
one-vertex digraph has a one-vertex Hamiltonian path with coincident named
endpoints, and adding a fresh vertex with the two opposite arcs produces a
two-vertex directed Hamiltonian cycle.  The construction refers to variable
gadgets only after assuming a nonempty list of exactly-three-literal clauses,
which guarantees at least one occurring variable.

I inspected the theorem, all direct dependency interfaces, the classical
NP-completeness A-page and paired examples page, batch-20 manifest and
coverage, the batch and merged proof contracts, their critical-risk and
boundary records, both frozen judge rejections, defects
`frontier-30-S8-f-039` and `frontier-30-S8-f-048`, and the Alpha recovery
adjudication.

The reverse gadget invariant also checks out.  If a path enters a clause
vertex from one occurrence pair and exits to a different pair, the unused mate
of the first pair can later be reached only from its other already committed
crossbar neighbour; once reached, all exits go to visited vertices.  It is
therefore stranded before the distinguished target.  Hence each clause visit
is a same-pair detour, each variable crossbar is traversed monotonically, and
the traversal directions define an assignment satisfying every visited clause
vertex.  The fresh closing vertex has unique predecessor and successor, so
deleting it from any Hamiltonian cycle recovers the required distinguished
path.

Authoritative verification:

- https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/567d75f927ca3c11a819baee9ab260ac_MIT6_045JS11_lec16.pdf — MIT 6.045J
  Lecture 16 gives the 3SAT-to-directed-Hamiltonian-path crossbar construction,
  the left-to-right/right-to-left truth assignment, clause detours, the exact
  stranded-mate argument excluding jumps between gadgets, and the wraparound
  conversion to directed Hamiltonian circuit.
- https://theory.cs.princeton.edu/complexity/book.pdf — Arora and Barak is the
  cited standard complexity text supporting the polynomial many-one reduction
  framework and gadget-proof obligations used by the page.

## Independent repairs

- Totalized the many-one map on all source strings: malformed strings are
  recognized in polynomial time and sent to a fixed one-vertex loopless
  digraph, a directed-Hamiltonian-cycle no-instance.
- Regenerated the theorem's derivation/citation records in the batch-20 and
  merged proof contracts.
- Replaced the stale `not_applicable` empty/zero boundary records by checks of
  the explicit zero-clause branch, and updated the matching critical-risk
  records.

No direct dependency was edited, so no owner-prerequisite-repair licence is
applicable.

Focused checks passed:

- phase-format precheck of the theorem;
- strict batch-20 and merged proof-contract checks for the theorem;
- batch-20 citation-fidelity check.

