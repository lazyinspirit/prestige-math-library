---
title: Derived finite coefficients preserve mapping cones
status: published
research_item: lem-author-4b6f215bcf3b-quotient-cofiber
dependency_level: 1
---

PDF p. 6: Finite-coefficient comparison

## Prerequisites

- [lem-derived-coefficient-exact-sequence](item-lem-derived-coefficient-exact-sequence)


## Statement
For a morphism $f:A\to B$ in $D(\mathbb Z)$ and a positive integer $n$, there is an isomorphism
$$\operatorname{cofib}(f\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n)\cong\operatorname{cofib}(f)\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n.$$
Here cofibers in the triangulated category $D(\mathbb Z)$ are considered up to isomorphism. More precisely, fix the complex $P=[\mathbb Z\xrightarrow{n}\mathbb Z]$ in degrees $-1$ and $0$. For every cochain map $g:A'\to B'$ representing a derived morphism, there is a chain isomorphism
$$\operatorname{Cone}(g)\otimes P\cong\operatorname{Cone}(g\otimes 1_P),$$
natural for strictly commutative squares of cochain maps. Naturality refers to this chain-level construction with fixed $n$ and $P$.

## Facts & Assumptions

**Given:** A morphism $f$ in $D(\mathbb Z)$ and $n>0$.

**Goal:** Identify the two indicated cofibers.

[F1] The two-term complex $P=[\mathbb Z\xrightarrow{n}\mathbb Z]$ in degrees $-1$ and $0$ is K-flat and resolves $\mathbb Z/n$. Thus tensoring with $P$ computes derived finite coefficients. [lem-derived-coefficient-exact-sequence](item-lem-derived-coefficient-exact-sequence)

## Proof

1.1 Represent $f$ by a cochain map $g:A'\to B'$ after quasi-isomorphic replacements if necessary. Use the convention $\operatorname{Cone}(g)^k=B'^k\oplus A'^{k+1}$, with differential $(b,a)\mapsto(d_{B'}b+g(a),-d_{A'}a)$. Since $P$ has only two nonzero terms, each degree of the tensor total complex is a finite direct sum. Splitting its summands gives a degreewise isomorphism $\operatorname{Cone}(g)\otimes P\to\operatorname{Cone}(g\otimes 1_P)$, sending $b\otimes p$ to the target summand and $a\otimes p$ to the shifted source summand without changing either tensor. [F1, given, construct]

2.1 For homogeneous $a\in A'^{i+1}$ and $p\in P^j$, the differential on the shifted source tensor has components $g(a)\otimes p$, $-d_{A'}a\otimes p$ and $(-1)^i a\otimes d_Pp$ on both sides. On $b\otimes p$, both differentials are the ordinary tensor differential. Thus the degreewise identification is a chain isomorphism. For any strictly commutative square from $g$ to another cochain map, the induced cone maps act separately on the source and target summands; hence they commute with this identification. This proves the claimed chain-level naturality. By K-flatness of $P$, tensoring with $P$ computes derived finite coefficients and preserves the quasi-isomorphisms used for the representatives. The two chain complexes therefore give the asserted isomorphism of derived objects, with cofibers considered up to isomorphism. [F1, step 1.1, algebra] ∎
