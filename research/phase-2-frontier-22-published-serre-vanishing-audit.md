# Frontier-22 published Serre-vanishing audit

Date: 2026-09-11

## Scope and deduplication

| Published item | SHA-256 |
|---|---|
| `lem-kac-moody-opposite-simple-centralizer-vanishes` | `98233b34ac7c70957bac19c4423f46eba254885a70d0e90aaa178092301b8f` |
| `lem-serre-elements-vanish-before-serre-generation` | `f557d2cbfcf949a383ca10e34c7909539d7faf4af8c4bd98356edadf5b8310fa` |

Both complete targets and their maximal-ideal, grading, GCM and contragredient
relations were read. Every exact ID was searched in the whole canonical ledger
and in every classification section. Opposite-simple centralizer, pre-Serre
quotient, adjoint `sl_2` commutator and Serre-vanishing mechanisms were also
searched. Neither target had an item-specific finding or classification row.
Their definition suppliers already have one clear row each and were not added
again.

## Bounded dispositions

For a positive homogeneous vector killed by every negative simple generator,
the span of all positive-simple adjoint iterates stays in positive degree. It is
stable under the Cartan and positive generators by construction. Jacobi and an
induction on word length make it stable under every negative generator. It is
therefore an ideal disjoint from the Cartan, so the maximal Cartan-disjoint
quotient forces it to vanish. The sign involution gives the negative half.

For `E=ad(e_i)`, `F=ad(f_i)` and `H=ad(h_i)`, the relations give

`[E,F^m]=m F^(m-1)(H-m+1)`.

On `v=f_j`, `Ev=0` and `Hv=-a_ij v`, so the coefficient vanishes at
`m=1-a_ij`. The resulting negative Serre vector is killed by `e_i`; generators
outside `{i,j}` commute through and kill `f_j`; and `e_j` reduces to
`F^m h_j`, which vanishes for `m>=2`, while the `m=1` case uses the GCM
symmetric-zero axiom. The centralizer lemma forces zero, and the sign involution
gives the positive relation. The proof correctly asserts vanishing without
claiming yet that the Serre elements generate the defining ideal.

Classification: two new bounded no-repair-needed dispositions. No current
Step-5 blocker, choice use, new Phase-2 supplier or new pair was found.

## Limits

This pass certifies the two complete targets and their exact vanishing clauses.
It does not certify the later Serre-generation theorem or all integrability
consumers. No external source was newly consulted, no published item was edited,
and no independent judgment or exhaustive discovery claim is made.
