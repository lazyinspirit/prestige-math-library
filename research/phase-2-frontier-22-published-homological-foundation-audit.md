# Frontier-22 published homological-foundation audit

Date: 2026-09-11

## Scope and deduplication

| Published item | SHA-256 |
|---|---|
| `def-limit-and-colimit-of-a-diagram` | `125eaca9ef69996988d4c688b4a282af62d5946cb8a8432079b7f14a779cbeaf` |
| `def-abelian-category` | `1b35446ed8f1f94b994a291ac80fe761ed6b1e6af5e01798e388a08c46804803` |
| `def-chain-complex-in-an-abelian-category` | `cc285e5face0094e9f0956352c275c3c89a89a020368543c1e19650f873a5716` |
| `def-homology-object-of-a-chain-complex` | `0ec4f90332078d8d1d24d255f2e06cbb8434a37b8622061dd81b38e4e70af79e` |
| `def-quasi-isomorphism` | `d3238f201b4732bb56f23d23712fbe6820080cce30d9f16709f9923979149901` |
| `lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid` | `a56ade228f17c237a5a650d43e883119a83c728d8797fa57908a5605c641c8c0` |
| `lem-pid-submodules-of-free-modules-are-free-with-choice` | `a35e96012beb0f3f5bd59faf86b0905f782e8289b09f4b43b1e62c5943e6246a` |
| `lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces` | `b2b0f7a5e08ec6d9d09bb8ec5cf254671055e76fb0a784ba0f608e2c380d55b9` |

All eight complete targets and their exact used universal-property, image,
coimage, kernel, cokernel, biproduct and projectivity clauses were read. Every
exact ID was searched in the complete canonical ledger and in each
classification section. The aliases `def-limit` and `def-colimit`, terminal
cone, initial cocone, homology quotient, quasi-isomorphism, coimage-to-image,
cycle/boundary exact sequence, arbitrary-rank PID freeness and simultaneous
degreewise-section mechanisms were also searched. None of the eight targets
had a classification row or an item-specific defect finding. Existing mentions
of the three PID lemmas are supplier maps for separate Kunneth and UCT defects;
they do not identify defects in these suppliers.

## Bounded dispositions

A limit is exactly a terminal cone and a colimit exactly an initial cocone, with
the displayed factorization equations in the correct directions. The abelian
category definition requires an additive category, all kernels and cokernels,
and invertibility of the canonical coimage-to-image comparison. The additive
supplier's zero-object plus binary-biproduct formulation correctly iterates to
finite biproducts.

The chain-complex differential has degree minus one and squares to zero. Cycles
are kernels, boundaries are images, the chain identity factors boundaries
uniquely through cycles, and homology is the resulting cokernel. A chain map
therefore induces the stated homology morphism by cokernel universality, making
the quasi-isomorphism definition well typed.

The two cycle/boundary sequences have the stated kernels and images. Their
proof is valid for every chain complex in an abelian category; the title's free
PID specialization and unused PID dependency are redundant but do not narrow
or invalidate the claim.

For an arbitrary-rank free module over a PID, explicit AC well-orders the basis
and simultaneously selects a generator/lift pair for every nonzero coordinate
ideal. Transfinite induction gives spanning and the greatest nonzero coordinate
gives independence, including limit stages and zero cases. The complex
decomposition then uses the resulting freeness/projectivity and explicit AC to
select one differential section in every degree. Its coordinate maps are
inverse, its differential is `(z,b) -> (b,0)`, and only two two-term summands
occur in each fixed degree. It expressly does not split `B_p` inside `Z_p`.

Classification: eight new bounded no-repair-needed dispositions. No current
Step-5 blocker, new Phase-2 supplier or new pair was found.

## Limits

This pass certifies these eight complete targets and the exact clauses used by
the active frontier. It does not repair or reclassify the separate published
UCT extension-map and Kunneth consumer findings, and it does not certify every
consumer of these foundations. No external source was newly consulted, no
published item was edited, and no independent judgment or exhaustive discovery
claim is made.
