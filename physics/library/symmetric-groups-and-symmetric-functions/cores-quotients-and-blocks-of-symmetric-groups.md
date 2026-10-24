---
page: cores-quotients-and-blocks-of-symmetric-groups
title: "Cores, Quotients, and Blocks of Symmetric Groups"
status: published
requires:
  - integral-specht-modules-and-modular-simple-modules
  - type-a-hecke-specht-modules-and-cellular-bases
  - grothendieck-groups-and-graded-cartan-pairings
  - artinian-rings-and-length
  - blocks-defect-groups-and-the-brauer-homomorphism
items:
  - def-beta-set-and-e-runner-abacus-of-a-partition
  - lem-hooks-are-bead-gap-pairs-on-an-abacus
  - def-e-core-e-quotient-and-e-weight
  - lem-virtual-weyl-combinations-detect-q-schur-block-separation
  - thm-e-core-is-independent-of-the-rim-hook-removal-order
  - thm-e-quotient-controls-hooks-divisible-by-e
  - prop-core-quotient-size-and-weight-formula
  - thm-q-schur-weyl-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core
  - thm-weight-one-block-decomposition-pattern
  - cor-type-a-hecke-specht-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core
  - thm-nakayama-block-classification-for-symmetric-groups
  - prop-weight-zero-symmetric-group-blocks-are-defect-zero
  - rem-block-weight-is-not-the-same-as-numerical-defect
examples: []
---

This page develops the abacus calculus of partitions and applies it to classify
the blocks of the q-Schur algebras in the stable range $d\ge n$, the
type-A Hecke algebras, and the modular
symmetric groups by $e$-cores. The computational model is fixed by
[[def-beta-set-and-e-runner-abacus-of-a-partition]] and
[[lem-hooks-are-bead-gap-pairs-on-an-abacus]], where hooks become bead-gap
pairs and rim-hook removal becomes a bead-to-gap relocation; hooks of
$e$-divisible length move beads along their own runners. The $e$-core, the $e$-quotient and the $e$-weight are defined in
[[def-e-core-e-quotient-and-e-weight]], and
[[thm-e-core-is-independent-of-the-rim-hook-removal-order]] proves that the
terminal partition of iterated $e$-hook removal does not depend on the order.
[[thm-e-quotient-controls-hooks-divisible-by-e]] transfers the resulting
dictionary to the hooks of $e$-divisible length, and
[[prop-core-quotient-size-and-weight-formula]] records the size identity
$n=|C_e(\lambda)|+e\,w_e(\lambda)$.

The second half passes from combinatorics to blocks. The linear independence of
virtual Weyl combinations
([[lem-virtual-weyl-combinations-detect-q-schur-block-separation]]) turns the
Jantzen-Schaper sum formula into the linkage criterion of
[[thm-q-schur-weyl-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core]],
with the weight-one pattern of [[thm-weight-one-block-decomposition-pattern]]
as the first explicit decomposition matrix. The Schur functor transports the
classification to Hecke Specht modules
([[cor-type-a-hecke-specht-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core]]),
and specialisation at $q=1$ gives Nakayama's classification of the $p$-blocks
of the symmetric groups
([[thm-nakayama-block-classification-for-symmetric-groups]]). The weight-zero
case is resolved completely in
[[prop-weight-zero-symmetric-group-blocks-are-defect-zero]], while
[[rem-block-weight-is-not-the-same-as-numerical-defect]] records precisely how
far the combinatorial weight and the numerical defect may be compared.
