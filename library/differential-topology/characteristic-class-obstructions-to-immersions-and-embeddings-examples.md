---
page: characteristic-class-obstructions-to-immersions-and-embeddings-examples
title: Characteristic Class Obstructions to Immersions and Embeddings — Examples
status: draft
requires: [characteristic-class-obstructions-to-immersions-and-embeddings, compact-lie-groups-maximal-tori-and-peter-weyl-theory]
items: []
examples:
  - ex-normal-class-calculation-for-real-projective-space
  - ex-power-of-two-real-projective-spaces-do-not-embed-in-two-m-minus-one-space
  - ex-parallelizable-tori-have-trivial-stable-normal-class
  - ex-the-normal-line-of-an-oriented-hypersurface-is-trivial
  - cex-vanishing-stable-characteristic-classes-does-not-make-two-embeddings-isotopic
---

The examples compute the obstructing classes of the companion page on the
smallest projective, hypersurface and torus data. The first two examples expand
the inverse $\bar w(\mathbb{RP}^m)=(1+a)^{-(m+1)}=\sum_{i\wedge m=0}a^i$: for
$\mathbb{RP}^9$ the surviving powers are $1+a^2+a^4+a^6$, whose top class
$a^6$ forbids an immersion in $\mathbb{R}^{14}$; for the power-of-two family
$m=2^r$ the inverse is the full geometric sum $1+a+\cdots+a^{m-1}$, and the top
class $a^{m-1}$ forbids an *embedding* in $\mathbb{R}^{2m-1}$, since embedding
forces the top normal class to vanish even though immersion rank alone does
not. The computations separate the mod-two non-immersion test from the stronger
top-class embedding test on the same family of manifolds.

The hypersurface example shows that an oriented hypersurface in Euclidean
space always has a trivial normal line — the coorientation and a metric give a
nowhere-zero normal section — so every rank-one normal class, including the
Euler class, vanishes and the codimension-one tests of the page are silent
there. The torus example is the converse extreme: a parallelizable manifold has
trivial tangent and normal classes and immerses in every positive codimension,
so no class computation of this page obstructs it.

The counterexample closes the page's boundary in the negative direction:
vanishing normal classes do not imply isotopy of embeddings. The standard and
reflected embeddings of $S^2$ in $\mathbb{R}^3$ have isomorphic trivial normal
bundles and identical stable classes, yet an isotopy would extend to an ambient
orientation-preserving diffeomorphism whose restriction to the sphere would have
degree $+1$ and $-1$ at once.
