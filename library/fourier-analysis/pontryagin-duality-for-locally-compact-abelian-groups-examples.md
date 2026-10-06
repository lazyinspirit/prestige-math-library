---
page: pontryagin-duality-for-locally-compact-abelian-groups-examples
title: "Pontryagin Duality for Locally Compact Abelian Groups — Examples"
status: published
items: []
examples: [ex-annihilator-of-a-closed-subgroup-of-euclidean-space,
           ex-bidual-map-on-the-circle-and-the-integers,
           cex-the-algebraic-character-group-without-compact-open-topology-is-not-pontryagin-duality]
---

These examples and counterexample exercise the duality interface of the
companion page on concrete groups, and they are where the convention that the
dual carries the compact-open topology can be seen to do real work.

The first example computes annihilators inside Euclidean space, where the dual
is again Euclidean space with the pairing $x\mapsto e^{2\pi i\,\xi\cdot x}$. It
compares the annihilator of a linear subspace, which is the coarse orthogonal
complement, with the annihilator of a lattice: for the degenerate inclusion
$\mathbb Z^k\times\{0\}^{n-k}\subseteq\mathbb R^n$ the annihilator is
$\mathbb Z^k\times\mathbb R^{n-k}$, so it is a lattice only in the full-rank
case, and the quotient-dual identification is read off on standard coordinates
as the discrete Fourier pairing. The matrix case $H=A\mathbb Z^n$ gives
$H^\perp=A^{-T}\mathbb Z^n$. The second example computes the bidual maps on the
circle and the integers under the published dual identifications: evaluation
reproduces exactly the integer $n$ or the point $z$ it started from, so the
abstract biduality identification is the natural one on these two groups. The
counterexample then shows that the algebraic character group of $\mathbb Z$
equipped with the discrete topology fails biduality: a $\mathbb Q$-linear map
of the line obtained from a Hamel basis induces a discontinuous algebraic
character of the circle, so the group of continuous characters is strictly
larger than $\mathbb Z$. With the compact-open topology the same group is
compact and biduality holds.
