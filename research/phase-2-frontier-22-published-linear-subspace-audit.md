# Frontier-22 published linear-subspace audit

Date: 2026-09-11

## Scope and deduplication

| Published item | SHA-256 |
|---|---|
| `def-linear-subspace` | `e3f67ed61ecd052b96551948fd54304f2518090f2ff9c3cc36291ea95283515c` |
| `lem-linear-subspace-criterion` | `1502ee55153deca93c60f3bbe149baeadb361b71d78e4ecfe49d04f419d6edac` |

Both complete targets and the exact kernel/image consumer chain were read.
Every exact ID was searched in the whole canonical ledger and in each
classification section. The aliases `def-linear-subspace-of-a-vector-space` and
`lem-one-step-subspace-test`, zero-vector, negative closure, nonempty criterion
and kernel/image mechanisms were also searched. Neither target had an
item-specific finding or classification row. The downstream
`thm-linear-kernel-image-and-injectivity` already has one clear row and was not
added again. Its definition has a separate existing A-P structural-order row,
which this audit does not alter.

## Bounded dispositions

The three subspace conditions restrict vector addition and scalar
multiplication to the subset. Scalar closure at `-1` supplies additive inverses,
so the inherited group and scalar axioms make the subset a vector space over
the same field. Both the zero subspace and whole space satisfy the conditions,
and the field remains part of the data.

For the one-step criterion, necessity is immediate from the two closure laws.
For sufficiency, choosing one element from the one fixed nonempty subset and
using scalar `-1` produces zero; scalar `1` then gives addition, and applying
the criterion with the newly established zero gives scalar closure. This is one
ordinary existential witness, not a family choice. The empty-set counterexample
shows the stated nonempty hypothesis is exact.

Classification: two new bounded no-repair-needed dispositions. No current
Step-5 blocker, new Phase-2 supplier or new pair was found.

## Limits

This pass certifies only the two complete targets and their exact vector-space
clauses. It does not reopen or close the separate structural-order record on
the kernel/image definition, nor certify arbitrary subspace consumers. No
external source was newly consulted, no published item was edited, and no
independent judgment or exhaustive discovery claim is made.
