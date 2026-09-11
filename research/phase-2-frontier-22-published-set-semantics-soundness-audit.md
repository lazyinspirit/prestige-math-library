# Frontier-22 published set semantics and soundness audit

Date: 2026-09-11

## Scope and deduplication

This bounded pass reads two high-use active set-theory suppliers and all six of
their direct declared interfaces:

| Published item | SHA-256 |
|---|---|
| `thm-relativization-and-set-satisfaction` | `e730766d4f583117177e32428f58f2bd9738e49cfd7170b91d8bd94751e56135` |
| `thm-set-language-first-order-soundness` | `9d686491e27aca5aad74a1f737f8213cc87a28572df49e68ecbd8cdbc24ee389` |
| `def-relativization-to-a-definable-class` | `c3fd9d3578e65eeb7317ab3850325003a474ef4c0e8055f2f2dab7d7f3338791` |
| `thm-set-structure-satisfaction-recursion` | `82b723f303b4f538b2cc86fa29c28c4a5871ab73302056b2e83a3540e9662261` |
| `def-set-coded-formal-derivation` | `8734e3e31b2da6b94d6509a667baf6a8cb95f01ee316e45fef4e34a084ebb62e` |
| `lem-formula-substitution-satisfaction` | `016983fbc0a2a280647bd6fbe692d90a8b3fd0163d6412f3d18c65938f5fef9f` |
| `lem-satisfaction-coincidence` | `76108bed3fe742dc79f1fbf099468772e9e24e746733d0e56f8ab8ce32547332` |
| `def-theories-models-and-semantic-consequence` | `8e11fb1ea87448f64356323fc7957b8ab34e6a24d505f572889e3918043db1b0` |

None of the eight files declares aliases. Before classification, the complete
canonical ledger was searched by every exact ID and by the mechanisms
relativization to induced membership structures, ambient formula evaluation,
set satisfaction recursion, free-for substitution, coincidence, formal
derivation, restricted existential elimination and arbitrary-signature
soundness. None had a classification row or an earlier item-specific finding.

## Bounded dispositions

`def-relativization-to-a-definable-class` gives a capture-avoiding recursive
transformation for each fixed formula. It keeps proper-class use schematic and
does not assert a class-sized satisfaction relation. The set case uses a fresh
parameter for membership in the carrier. Its published capture-avoidance
supplier gives exactly the binder-renaming operation needed here.

`thm-set-structure-satisfaction-recursion` is sound in its used clause. Term
denotations are simultaneous set-valued functions on the set of assignments;
atomic truth sets lie in the assignment set; complement, intersection and the
existential projection are total operations on its power set. Structural
recursion therefore produces all formula truth sets, and Separation collects
the displayed satisfaction relation. The same constructor induction proves
uniqueness. No witness family is selected.

`thm-relativization-and-set-satisfaction` then proves the exact equivalence by
constructor induction. Equality and membership atoms agree with the restricted
membership structure, Boolean constructors preserve the equivalence, and the
guard `x in M` has exactly the same witnesses as the existential satisfaction
clause. The proof never uses transitivity. The free carrier assignment and
fresh parameter convention prevent capture. Its proper-class closing sentence
continues to concern one ambient formula for each fixed input formula, so it
does not cross the set-sized truth boundary.

`def-set-coded-formal-derivation` coherently fixes six axiom schemes and three
rules over the primitive negation, conjunction and existential syntax. The
side conditions for free-for substitution, distribution and restricted
existential elimination are sufficient. Because theories consist of
sentences, unrestricted generalization in a derivation from the theory has the
usual semantic invariant. Finite proof codes and annotations are sets and need
no choice principle.

`lem-formula-substitution-satisfaction` correctly handles the two no-change
quantifier cases and, in the remaining case, uses the free-for condition to
keep the term value fixed under the binder update. Distinct-variable updates
then commute. `lem-satisfaction-coincidence` proves the corresponding
free-variable and reduct invariants by constructor induction. The model and
semantic-consequence definition uses exactly these invariants and retains the
nonempty-carrier convention.

`thm-set-language-first-order-soundness` verifies the six schemes under those
interfaces. Equality substitution compares the same updated assignment;
universal instantiation and existential introduction use the term value;
distribution uses the absence of the bound variable from the antecedent.
The invariant of truth under every assignment makes generalization sound. For
restricted existential elimination, one witness for the one assumed
existential formula is enough, and coincidence returns the conclusion from the
updated assignment to the original assignment. This is an ordinary
existential instantiation inside one implication, not a simultaneous choice
from a family. The false equality sentence gives the stated consistency
consequence.

Classification: eight new bounded no-repair-needed dispositions. Active
constructibility and large-cardinal drafts use the exact relativization or
soundness clauses above. No current Step-5 blocker, new Phase-2 supplier or new
pair was found.

## Limits

This pass certifies only the complete eight targets and the exact lower
interfaces used in the arguments above. It does not certify all published
consumers, every syntax-coding implementation detail or the full transitive
set-theory closure. No external source was newly consulted, no published item
was edited, and no independent judgment or exhaustive discovery claim is made.
