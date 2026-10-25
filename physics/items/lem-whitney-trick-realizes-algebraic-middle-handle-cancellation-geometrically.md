---
id: lem-whitney-trick-realizes-algebraic-middle-handle-cancellation-geometrically
kind: lemma
title: The Whitney trick realizes algebraic middle-handle cancellation geometrically
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 16
deps:
- def-middle-handle-intersection-matrix-of-an-h-cobordism
- lem-handle-slides-reduce-a-unimodular-middle-handle-matrix-to-the-identity
- thm-high-dimensional-whitney-trick
- thm-whitney-trick-in-the-two-dimensional-borderline-case
- lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points
- lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type
- def-simply-connected
- def-transverse-complementary-dimensional-intersection-set
- lem-compact-transverse-complementary-intersections-are-finite
- def-countable-choice
- lem-belt-sphere-complements-in-low-handle-levels-preserve-the-fundamental-group
- thm-handle-duality-from-negating-a-morse-function
- def-h-cobordism
- thm-seifert-van-kampen
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University
      Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Introduction and §§1--9, printed pp. 1--113; §6 (Second Cancellation Theorem 6.4 and Corollary 6.5),
      printed pp. 67--78
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete
      author text)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 1, printed pp. 1--22 (§§1.1--1.5)
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $(W;M_0,M_1)$ be a
connected simply connected h-cobordism with $\dim W=n+1\ge6$, presented relative
to $M_0$ with handles $e_1,\dots,e_r$ of index $k$ and $g_1,\dots,g_r$ of index
$k+1$, $2\le k\le n-2$, with middle-handle intersection matrix equal to the
identity $I_r$ (all intersections transverse, the oriented intersection numbers
being $\delta_{ij}$)
([[def-middle-handle-intersection-matrix-of-an-h-cobordism]]). Then there is a
presentation of $W$ relative to $M_0$ with the same handles such that, for every
$i,j$, the attaching sphere $A_i$ of $g_i$ meets the belt sphere $B_j$ of $e_j$
transversely with $A_i\cap B_j$ a single point if $i=j$ and $A_i\cap B_j=\varnothing$
if $i\ne j$. The modification is realised by isotopies of the attaching
embeddings; equivalently the algebraic identity matrix is upgraded to a
geometric single-point configuration.

## Facts & Assumptions

**Given:** A connected simply connected h-cobordism with $\dim W=n+1\ge6$, a presentation with handles only in indices $k,k+1$, $2\le k\le n-2$, and middle-handle matrix $I_r$; $\mathrm{AC}_\omega$.

[F1] The middle level is a closed simply connected $n$-manifold $V$ in which the attaching and belt spheres have complementary dimensions $k$ and $n-k$, and transverse intersections are finite ([[def-transverse-complementary-dimensional-intersection-set]], [[lem-compact-transverse-complementary-intersections-are-finite]], [[def-simply-connected]]).

[F2] Two distinct points of a connected embedded closed submanifold of dimension at least two can be joined by a smooth embedded arc whose interior avoids any prescribed finite set ([[lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points]]).

[F3] The high-dimensional Whitney trick removes a pair of opposite-sign transverse intersection points of two embedded spheres of dimensions $a,b\ge3$ in an ambient manifold of dimension $a+b$ when the Whitney circle is null-homotopic ([[thm-high-dimensional-whitney-trick]]).

[F4] For $k=2$, the incoming h-cobordism fundamental-group isomorphism gives injection of the complement of the actual belt spheres. For $k=n-2$, reverse the $k,k+1$ presentation: the original attaching spheres become belts of the dual $2$-handles, so their full complement has the same fundamental group as the level. Both are handle-complement statements, not consequences of simple connectivity alone. [[lem-belt-sphere-complements-in-low-handle-levels-preserve-the-fundamental-group]], [[thm-handle-duality-from-negating-a-morse-function]].

[F5] Isotoping an attaching embedding through embeddings in its boundary region does not change the presented manifold relative to the incoming boundary ([[lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type]]).

## Proof

1.1 Work in the common middle level of the entire two-index presentation, before isolating any pair of critical points. That level is simply connected: the reverse trace through the $k$-handles and the later forward handles have indices at least three, so both its fundamental group and that of $W$ agree. By [F1] the intersections are finite, and each $(i,j)$ signed sum is $\delta_{ij}$. Any surplus set therefore has an opposite-sign pair. Both sheet dimensions $k$ and $n-k$ are at least two, so choose its two sheet arcs avoiding every other intersection by [F2]; their circle contracts in this level. [F1, F2, given]

2.1 For $3\le k\le n-3$, apply [F3], choosing the disk and tube to avoid every other attaching and belt sphere by codimension at least three. For $k=2$, apply the belt-complement construction of [F4] from $M_0$: fill the shifted loop in the complement of all belts and clear the finitely many $2$-sphere attaching images, obtaining an admissibly framed disk with no other incidences. This moves only the selected attaching sphere and keeps the entire attaching family embedded and disjoint. [F3, F4, step 1.1]

2.2 For $k=n-2$, view the level from $M_1$. The original attaching spheres are the belts of its dual $2$-handles by [F4]. Exchange the selected sheets and use the helper to isotope the original belt $B_j\cong S^2$ against the fixed original attaching sphere $A_i$, with the disk in the complement of every $A_l$ and avoiding every other $B_l\cong S^2$. The two signs remain opposite when the sheets are exchanged, and the loop is still null. If the auxiliary ambient isotopy is $H_t$, apply $H_t^{-1}$ to $A_i$ alone and leave the original belts fixed. The identity $H_1^{-1}(A_i)\cap B_j=H_1^{-1}(A_i\cap H_1(B_j))$ removes exactly the pair. Its tube avoids all other attaching spheres and belts, so their configurations stay fixed. This proves the flipped endpoint for the actual handle spheres. [F2, F4, step 1.1]

3.1 Repeat the appropriate pair removal finitely. Every step decreases the intersection count by two, preserves the other intersections and transports the attaching framing. The invariant signed sums leave exactly one transverse point when $i=j$ and none when $i\ne j$. By [F5] the resulting isotopies of the attaching embeddings preserve the presented cobordism relative to $M_0$. The same handles therefore realize the geometric identity matrix for every $2\le k\le n-2$. No early critical-level rearrangement is required before the geometric disjunction has been achieved. [F1, F3, F4, F5, step 2.1, step 2.2] ∎
