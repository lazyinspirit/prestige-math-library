# Frontier 9 batch 1 — source and authoring ledger

Scope: the cyclic-groups/direct-products and group-actions/Cayley A/B pairs.
This batch remains draft-only. Its complete Step-3 proposal is recorded in
`frontier-9-batch-1.pages.json`; it is now the exact dependency-ordered authored
scope, represented in the plan and in `items/`.

## Authored slice

- Direct-product construction and group laws:
  `def-external-direct-product-of-groups` and
  `thm-external-direct-product-is-a-group`; their finite cardinality and
  element-order consequences: `prop-order-of-finite-direct-product` and
  `thm-order-of-element-in-direct-product`.
- The noncyclic Klein-four example and the order-based distinction from
  $\mathbb Z/4$: `ex-klein-four-group-as-a-direct-product` and
  `cex-z-four-not-isomorphic-z-two-squared`.
- The classification of cyclic groups and the least-positive-exponent proof
  that every subgroup of a cyclic group is cyclic:
  `thm-classification-of-cyclic-groups` and
  `thm-subgroups-of-cyclic-groups-are-cyclic`.
- Actions, their permutation representation, orbit/stabilizer foundations, and
  Cayley's theorem: `def-group-action`,
  `thm-group-actions-correspond-to-homomorphisms`,
  `def-orbit-and-stabilizer`, `lem-stabilizer-is-a-subgroup`,
  `thm-orbits-partition-the-set`, and `thm-cayleys-theorem`.
- The transitive-but-nonfaithful singleton action of $\mathbb Z/2$:
  `ex-trivial-action-of-z-two-is-not-faithful`.

All spine statements are literature-derived and their local proofs are
dependency-adapted (`ai-altered`). The singleton witness is a checkable,
non-load-bearing example with an `ai-altered` statement and `ai-generated`
verification. It is not used as a dependency. Definitions use
`proof: not-applicable`.

## Sources checked for the authored slice

- [Sharifi, *Abstract Algebra*](https://math.ucla.edu/~sharifi/algebra.pdf),
  direct products and cyclic groups.
- [Brosnan, *Group actions*](https://math.umd.edu/~pbrosnan/notes/ugalg/sect0034.html)
  and [*Orbits and stabilizers*](https://math.umd.edu/~pbrosnan/notes/ugalg/sect0035.html),
  actions, the permutation representation, orbit structure, and Cayley's theorem.
- [Judson, *Abstract Algebra*, direct products](https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/11%3A_Homomorphisms/11.04%3A_Direct_Products),
  the Klein four-group computation.

## Boundary and authoring obligations

- The direct-product proof covers the identity and inverse coordinates without
  assuming either factor is nontrivial.
- The action–homomorphism correspondence verifies the inverse permutation using
  $g^{-1}$; no finite-set assumption is used.
- The orbit relation uses an arbitrary set and has an orbit through every point;
  the action need not be transitive.
- Cayley's theorem identifies the kernel by evaluating the left translation at
  $e$, so it is valid for the trivial group as well.
- The exact proof-bearing scope is recorded in
  `frontier-9-batch-1.proof-contracts.json`; no audit or publication stamp is
  claimed here.
