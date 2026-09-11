# Frontier-22 published Kac--Moody construction audit

Date: 2026-09-11

## Scope and deduplication

This bounded audit follows the full published construction path from a finite
GCM realization to the maximal Cartan-disjoint quotient:

| Published ID | SHA-256 |
|---|---|
| `def-realization-of-a-generalized-cartan-matrix` | `97d76cb0d6b3d8453f5df92eeccf4a885d9b7f9a325a5214dbd787b70bd88cb4` |
| `prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism` | `b2b81c3f085e0f93abdcc85464c24aea41e48c1c0eebce7918e5bd34008a1874` |
| `def-kac-moody-root-lattice-height-and-positive-cone` | `9a5b7f6aee3ca348a052cb6d92292a3121bcc0afb9ab61bcd81e7d7358bb3483` |
| `def-universal-enveloping-algebra-as-a-tensor-quotient` | `8bbcc86a1cfb81edd881321c4802d3a3abdf913a263b7b04d423cbe64a8f9497` |
| `lem-pbw-for-countably-presented-kac-moody-lie-algebras` | `c56fa317d89a751b0c7f8b6506d864dbb5423787089f17d8f21c95a2407fea41` |
| `lem-free-lie-construction-for-finite-kac-moody-generators` | `3c62bbf1a8fcd610465ea0323f8784dbb8e99df96dc1665ed989373627115c87` |
| `def-contragredient-lie-algebra-before-the-maximal-ideal-quotient` | `d5087773c4d739f83660975af81aa0908315da470d819b613df4a81c13ce28c3` |
| `prop-contragredient-algebra-has-a-triangular-decomposition` | `e9048475bf3c4b38eb0d24dc5dd968420eb4a1881717cad81ad9d3ab18c934a1` |
| `lem-the-sum-of-triangularly-disjoint-graded-ideals-is-disjoint-from-h` | `15f090a0550529afc65b8e6120ffa1adbd99d0856c32f4bf7f0de438f4aae3df` |
| `def-kac-moody-algebra-associated-to-a-gcm` | `8d53cb32d7013186e3eef457cf858e9feb31863efb4ebe826d8a178092301b8f` |

All ten files were read in full. The complete canonical ledger was searched by
each exact ID, aliases, `minimal realization`, `free Lie`, `PBW`, `triangular
decomposition`, `graded ideal`, `largest Cartan-disjoint ideal`, and the exact
supplier IDs. Nine items had no classification row. The enveloping-algebra
definition had one U-P row only because it is an adequate supplier in an older
Casimir repair plan; no item-specific defect is recorded there. This pass moves
that single row to bounded clear instead of duplicating it.

This is a direct construction and used-interface audit. It does not certify
later Serre, root-space, integrability or representation-theory clauses.

## Realization and grading interfaces

The realization definition states the independent root/coroot and dimension
conditions coherently. The minimal-realization proposition constructs a
complement to the row image by finite elimination, proves the dimension lower
bound and gives an isomorphism between two minimal realizations through finite
linear sections. All selections are finite.

Independence of the simple roots gives unique root-lattice coordinates. The
positive cone therefore defines the printed partial order and height without a
choice or quotient ambiguity.

Classification: all three are bounded no-repair-needed dispositions.

## Free Lie and PBW interfaces

The enveloping-algebra definition is the standard tensor-algebra quotient by
`xy-yx-[x,y]` and supplies exactly the universal quotient relation used here.
It moves from U-P to bounded clear; its occurrence in the older Casimir repair
map remains valid supplier evidence, not repair debt on this definition.

The countable PBW lemma orders words by length and inversions. Each rewrite
either lowers length or preserves length and lowers inversions, while the sole
overlap ambiguity reduces to Jacobi. The resulting normal form both spans and
proves independence of ordered monomials. Its homogeneous subspace/quotient
bases are constructed by a fixed scan of a supplied countable basis and finite
row reduction, without choosing from an arbitrary family.

The free-Lie lemma evaluates formal bracket words to prove the universal
property, identifies its enveloping algebra with the tensor algebra, and uses
the exact PBW injectivity clause. The finite-generator bracket words carry the
required canonical countable enumeration.

Classification: all three are bounded no-repair-needed dispositions.

## Contragredient algebra and maximal quotient

The contragredient definition imposes precisely the Cartan and simple-generator
relations as a homogeneous quotient. Its claims about Cartan injectivity and
free halves are explicitly deferred to the later proposition, so they are not
being assumed in the construction.

The triangular-decomposition proposition builds a tensor-algebra module for
every weight, proving injectivity of the Cartan and negative free half; the
sign involution gives the positive half. Bracket induction proves spanning,
and evaluation on the vacuum separates the three summands. Homogeneous degrees
are distinct Cartan weights because the simple roots are independent.

For the maximal-ideal lemma, polynomial spectral projections for one Cartan
element extract every finite degree component of an arbitrary ideal. Hence the
algebraic sum of all Cartan-disjoint ideals is still Cartan-disjoint and is the
unique largest such ideal. Degree considerations show its positive and
negative pieces are ideals and split it directly. Only finite interpolation is
used.

The Kac--Moody definition then takes the quotient by that largest ideal.
Cartan injectivity follows from disjointness; maximality makes the sign
involution descend and proves that every nonzero quotient ideal meets the
Cartan. It does not infer simplicity.

Classification: all four are bounded no-repair-needed dispositions. No live
Kac--Moody construction blocker or new Phase-2 pair is identified.

## Limits

The cited Kleshchev source was not newly fetched or read in this pass. The
current published proofs and exact used clauses were audited; no independent
judge result or exhaustive discovery claim is made.
