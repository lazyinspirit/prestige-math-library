# Published cardinal and tree-foundation audit

Date: 2026-09-11

## Scope and deduplication

This bounded pass reads eight published interfaces used by the current
large-cardinal branch. It covers each full target, its mathematical proof where
present, and the exact cardinality, arithmetic or tree clause used by the
frontier.

| Published item | SHA-256 | Pre-pass state | Disposition |
|---|---|---|---|
| `def-cardinal` | `190e80f698a233c00897cdb368f14739c082a4368b8df808b158686450666ced` | unclassified | bounded clear |
| `lem-cardinality-of-a-well-orderable-set` | `c9c4f84a862a070debaded9487384f8998ed4b1b82c0aa4ec8c21c634433c64d` | unclassified | bounded clear |
| `lem-cardinal-operations-are-well-defined` | `96ff8e06cc33f7952366f972ca31c05689483c812e1572bae98913d0c93c846f` | U-P | bounded clear |
| `def-cardinal-arithmetic` | `3530470b7c0449b6a905947d251912bfefb2760b97a9a6d6676b7dded38cd8e5` | unclassified | bounded clear |
| `lem-cardinal-arithmetic-basic-laws` | `fde63615b03b9111f0d3993e6d4b0d1b59f58235b466aa6e4d9dc9a979e6e587` | U-P | bounded clear |
| `thm-hessenberg` | `324a2d30578292e3dac0ffc41bccdad19b7ddb40c1c2af16817eab749ac05f03` | unclassified | bounded clear |
| `def-set-theoretic-tree-and-levels` | `4205c45ec49eba59886ba8d106d4446b9a4490757c3806e983857ced7dafceef` | unclassified | bounded clear |
| `def-kappa-tree-and-tree-property` | `4d7c77d889dc68491cdd065190cd5c58accf5f398d58ea82691386a39f636161` | unclassified | A-P |

The complete canonical ledger was searched before classification by every
exact ID; the aliases `def-initial-ordinal`, `def-cardinality`,
`lem-zf-cardinality`, `def-cardinal-sum`, `def-cardinal-product`,
`def-cardinal-exponentiation` and `thm-cardinal-square`; and the mechanisms
arbitrary-level cardinality, well-orderability of tree levels, cardinal
representative independence, cardinal-square induction and tree-property
smallness. It was also searched by the repair suppliers
`def-axiom-of-choice`, `def-injection-surjection-bijection` and
`lem-cardinality-of-a-well-orderable-set`.

The two U-P rows came only from the old Foundations page metadata/title
snapshot. They did not record mathematical defects. The other six IDs were
unclassified. No prior row or mechanism covers the tree-level
well-definedness problem found here.

## Cardinality and arithmetic

`def-cardinal` defines a cardinal choice-free as an initial ordinal, and scopes
the cardinality of an arbitrary set explicitly to AC. Given one well-order of a
set, the least equinumerous ordinal is independent of the chosen well-order.
`lem-cardinality-of-a-well-orderable-set` proves this stronger ZF interface:
one order type supplies a set-sized bound, ordinal minimization gives the least
representative, and its minimality makes it an initial ordinal. No family of
witnesses is selected.

`lem-cardinal-operations-are-well-defined` transports supplied bijections
through tagged sums, products, function spaces and power sets. Its explicit
lexicographic orders prove in ZF that sums and products of two cardinals have
cardinalities. It correctly refrains from well-ordering a general function
space and assigns that step to its explicit AC clause.

`def-cardinal-arithmetic` uses those ZF well-orders for sum and product and
requires AC for general exponentiation. `lem-cardinal-arithmetic-basic-laws`
writes the relevant bijections and injections explicitly. The exponent
monotonicity in the exponent uses the stated nonzero-base condition so that a
fixed value extends a function; the unit and zero cases are handled separately.
All non-unit exponential clauses state and declare AC.

`thm-hessenberg` well-orders a cardinal square by maximum coordinate first.
Every initial segment lies in a smaller square. Transfinite induction reduces
that square to the initial cardinal of the smaller ordinal and proves its size
below the current cardinal. The collapse order type of the whole square cannot
then extend past the current cardinal, while the first-coordinate embedding
gives the reverse inequality. The proof is choice-free and supplies the exact
current `kappa times kappa = kappa` uses.

## Tree definitions and the confirmed interface defect

`def-set-theoretic-tree-and-levels` is sound. Each predecessor set is a supplied
well-order, so its unique order type defines node height. The set of heights
has an ordinal supremum. Branch maximality and cofinality are properties rather
than existence claims, and the empty and singleton conventions are coherent.

`def-kappa-tree-and-tree-property` then writes

`|T_alpha| < kappa`

for every level of an arbitrary set-theoretic tree, but it neither assumes AC
nor proves the levels well-orderable. This is not only a missing ordinary
dependency edge. Under the library's `def-cardinal` convention, `|X|` for an
arbitrary set is defined only under AC or after a well-orderability proof. A
height-one tree can have an arbitrary set as its root level: every node has the
empty predecessor well-order, so the tree axioms provide no well-order of that
level. The displayed condition can therefore be undefined in ZF.

The preferred choice-free repair is to replace the display by the explicit
smallness predicate

`for every alpha<kappa there are lambda<kappa and an injection T_alpha -> lambda`.

This is well formed in ZF and is equivalent to the usual cardinal inequality
whenever the level is well-orderable, in particular under ZFC. Existing
published `def-injection-surjection-bijection`, `def-cardinal` and
`lem-cardinality-of-a-well-orderable-set` supply the formulation and
equivalence. The alternative repair is to state ZFC in the definition and add
`def-axiom-of-choice` with its exact cardinality use. No new Phase-2 pair is
needed.

## Frontier impact and limits

The current weak-compactness definition explicitly works in ZFC, declares
`def-axiom-of-choice`, and uses the affected definition only for the standard
small-level condition. Its reading is therefore unambiguous and the defect does
not block the active frontier. The other seven targets are adequate in their
exact current uses.

This pass is limited to these eight items and their cited interfaces. It does
not certify every cardinal-arithmetic consumer, every tree theorem or their
full transitive closures. No published or draft item was edited, no new external
source was needed, and no independent judgment or exhaustive discovery claim
is made.
