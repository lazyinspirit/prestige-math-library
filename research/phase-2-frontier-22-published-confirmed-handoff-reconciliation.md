# Frontier-22 published confirmed-handoff reconciliation

Date: 2026-09-11

## Scope and deduplication

This bounded pass completes the repair audit of five current U-C handoffs:

| Published item | SHA-256 |
|---|---|
| `thm-doob-dynkin-lemma` | `988a04e4d572537072af596f0ff9ad661f2d5f84a3726b3242aea9e28f00f836` |
| `thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree` | `251b0d9bc1aa5811f9f5cb5f99457cdd800b358c890b959ba1088cf231b4d4e4` |
| `def-relative-projectivity` | `4e2746586b5e4b8d3c6df94e31513d561acb7bba44f9a7664830b949e2aefcaa` |
| `thm-finitely-many-discontinuities-integrable` | `ce405e87b34e295fdc45006b9272b3d8759235e1ef71e85978834288d4d4e1d2` |
| `def-metric-topology` | `069190e121cbb367b3afe22d7dd0e280ff94bb582af7bf9c48ebb58b71ac39a2` |

The complete ledger was searched by exact IDs, aliases, right-Cayley increment
order, rational Borel lift selection, right-continuous rational cuts, the
relative-projectivity `H=1` basis argument, inherited Heine--Cantor countable
choice and the two neighbourhood conventions. Each target had exactly one U-C
classification row, so the moves below replace those rows and do not add a
second classification. Historical findings remain in the ledger prose.

## Three genuine repair findings

### Doob--Dynkin factorization

`thm-doob-dynkin-lemma` proof 2.1 obtains, for every rational `q`, some Borel
set `A_q` with `f^{-1}(A_q)={g<=q}`, then immediately uses the whole family.
Selecting those witnesses simultaneously is a countable family choice and the
Statement/Given/dependencies do not assume it. Published `def-countable-choice`
is the exact upper bound; `thm-rationals-countable` supplies the indexing
transfer if the axiom is applied in its natural-number form.

There is also a local proof-accounting error in 3.1: monotonicity alone does not
imply `{h<=q}=B_q` for an infimum cut. For the special construction the missing
fact is true and elementary:

`B_q = intersection_{r rational, r>q} B_r`.

Expanding the double intersection and using rational density proves the
identity, after which the threshold calculation is valid. This is part of the
same repair, not a second classification. Add the countable-choice hypothesis
and suppliers, prove this right-intersection property, and propagate the
assumption to consumers that use the published theorem. Classification moves
from U-C to A-P.

The active regular-conditional-kernel factorization has its own pointwise
construction under AC, so this published repair does not block current Step 3.

### Free Cayley graph

`thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree`
uses right Cayley edges `{g,gs}` but proof 1.2 labels an oriented edge by
`g_(j+1) g_j^(-1)`. The correct right increment is
`g_j^(-1) g_(j+1)`. For example, the edge from `a` to `ab` has correct label
`b`, while the printed expression is `aba^(-1)`.

Replace every increment by the correct order. Consecutive inverse labels would
immediately return to the vertex two steps earlier, contradicting the cycle's
distinct-vertex condition, so the resulting cyclic word is reduced. Its
ordered product telescopes to the identity, contradicting the published unique
reduced-word normal form. Existing `def-cayley-graph`,
`thm-reduced-words-form-the-free-group` and
`thm-normal-form-for-the-word-quotient-model` supply the repair. Classification
moves from U-C to A-P.

The active HG branch derives this reduced-word proof locally, so the published
error does not block current Step 3.

### Metric neighbourhood terminology

`def-metric-topology` calls an open set containing `x` an unqualified
neighbourhood. Published `def-neighbourhood-top`, SHA-256
`ac364d36ac3116e6cc132d40eae3beef3496b8f0e02a4218c8709eded1bda620`,
explicitly fixes the library-wide convention that a neighbourhood may be any
superset of an open set and calls the narrower object an open neighbourhood.
These are incompatible meanings for the same term. Rewrite the metric sentence
as “open neighbourhood,” or state that metric balls give a neighbourhood base
under the later convention. The metric topology itself is unaffected.
Classification moves from U-C to A-P.

Current locally convex drafts cite the later topological convention directly,
so this interface repair does not block current Step 3.

## Two corrected bounded clears

`def-relative-projectivity` states its `H=1` comparison only under AC. Published
`cor-every-vector-space-has-a-basis`, SHA-256
`947a554c3833cad8957a0b67be328ea8e532eb10282771dfc298f0ac16eafce0`,
supplies the basis, and declared `thm-projective-module-characterizations`
states the free-summand equivalence with the same AC boundary. The missing
direct edges are optional metadata under the canonical adequate-implicit-use
rule; the mathematical assumption and adequate suppliers are already clear.
The item moves from U-C to bounded clear, preserving the historical concern.

`thm-finitely-many-discontinuities-integrable` gives a complete Darboux proof.
Its only countable-choice cost is the direct invocation of published
`thm-heine-cantor-r`; that theorem explicitly declares `def-countable-choice`
and identifies the exact bad-pair selection. The consumer's own Choice remark
also identifies this inherited cost. As in the already reconciled
`thm-continuous-implies-integrable`, repeating the same axiom edge is optional
under the canonical rule. The finite point insertions and all later sums use
only finite constructions. The item moves from U-C to bounded clear.

## Limits

No new published ID enters the index. This pass audits only the displayed
defects and exact used clauses; it does not certify the full transitive closure
of the five targets or their consumers. No external source was newly consulted,
no published item was edited and no independent judge result or exhaustive
discovery claim is made.
