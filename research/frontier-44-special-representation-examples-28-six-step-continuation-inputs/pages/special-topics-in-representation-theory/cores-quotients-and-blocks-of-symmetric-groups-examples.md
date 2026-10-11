---
page: cores-quotients-and-blocks-of-symmetric-groups-examples
title: "Cores, Quotients, and Blocks of Symmetric Groups — Examples"
status: draft
requires:
  - cores-quotients-and-blocks-of-symmetric-groups
items: []
examples:
  - ex-three-core-and-three-quotient-by-abacus
  - ex-three-core-of-four-three-two-one
  - cex-the-same-number-of-removable-p-hooks-does-not-replace-the-core-test
  - ex-a-weight-one-block-decomposition-matrix
---

These examples work the $e$-core calculus of
[[cores-quotients-and-blocks-of-symmetric-groups]] on explicit partitions and
display the two boundary cases of the block classification.

[[ex-three-core-and-three-quotient-by-abacus]] follows the source's worked
example $\lambda=(6,5,2,1^3)$ at $e=3$ through the $3$-abacus, obtaining
$C_3(\lambda)=(3,1)$, $Q_3(\lambda)=((2,1),\varnothing,(1))$ and the size
count $16=4+3\cdot4$ from four bead moves, and checks the four $3$-divisible
hooks against the quotient bijection.
[[ex-three-core-of-four-three-two-one]] removes rim $3$-hooks from $(4,3,2,1)$
in two explicit maximal orders, both terminating at the $3$-core $(1)$, and
verifies $10=1+3\cdot3$.

[[cex-the-same-number-of-removable-p-hooks-does-not-replace-the-core-test]]
exhibits $(5)$ and $(4,1)$ at $p=3$: both carry exactly one removable
$3$-hook and both have $3$-weight $1$, yet their $3$-cores $(2)$ and $(1,1)$
differ, so by Nakayama's classification they lie in different blocks.
[[ex-a-weight-one-block-decomposition-matrix]] closes with the complete
weight-one block of $S_3$ at $p=3$, whose Weyl/simple matrix
$\left(\begin{smallmatrix}1&1&0\\0&1&1\\0&0&1\end{smallmatrix}\right)$
becomes $\left(\begin{smallmatrix}1&0\\1&1\\0&1\end{smallmatrix}\right)$ in
the $p$-regular group labels, verified independently from the two-dimensional
model of $S^{(2,1)}$ in characteristic $3$.
