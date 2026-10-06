---
id: thm-vanishing-algebraic-intersection-can-be-realized-by-geometric-disjunction-in-the-simply-connected-stable-range
kind: theorem
title: Vanishing algebraic intersection gives geometric disjunction in the simply connected stable range
deps:
- thm-high-dimensional-whitney-trick
- lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points
- lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle
- def-oriented-intersection-number
- def-local-oriented-intersection-sign
- thm-intersection-number-under-factor-interchange
- cor-negative-expected-dimension-generic-intersections-are-empty
- def-simply-connected
- thm-strong-whitney-approximation-by-transverse-maps
- lem-compact-transverse-complementary-intersections-are-finite
- def-countable-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press
      2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Corollary 7.30 and its proof, printed p. 141 (realizing the algebraic intersection by an isotopy leaving
      exactly $\sum_g|a_g|$ transverse points, by cancelling $b_g$ pairs with Theorem 7.27(ii))
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (complete lecture notes, ICTP/Münster)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Theorem 4.8 and its proof, printed pp. 84-85 (realizing the vanishing self-intersection of an immersion
      by an embedding when $k\ge3$)
proof_strategy: direct
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 6
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $X^m$ be a simply connected oriented smooth manifold and let $A^a,B^b\subseteq X$ be closed connected oriented embedded complementary submanifolds with $a,b\ge3$, meeting transversely, with at least one of $A,B$ compact. Suppose the oriented intersection number vanishes: $I(A,B)=0$. Then there is an isotopy of $X$ carrying $A$ to an embedded submanifold $A'$ transverse to $B$ with $A'\cap B=\varnothing$. More generally, if $I(A,B)=n$ for some integer $n$, one can isotope $A$ so that it meets $B$ in exactly $|n|$ points (with the remaining intersections removed in opposite-sign pairs); in particular any two algebraically cancelling pairs can be removed one at a time without creating new intersections. The corresponding statement with group-ring coefficients holds for a general simply connected ambient manifold by the label lemma.

## Facts & Assumptions

[F1] Compact transverse complementary intersections are finite. [[lem-compact-transverse-complementary-intersections-are-finite]]

[F2] The oriented intersection number. [[def-oriented-intersection-number]]

[F3] Two points of a closed connected embedded submanifold of dimension at least two can be joined by a smooth embedded arc avoiding a prescribed finite set away from its endpoints. [[lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points]]

[F4] In the stable range an admissible opposite-sign pair with nullhomotopic Whitney circle can be removed, leaving every other intersection fixed. [[thm-high-dimensional-whitney-trick]]

## Proof


**Given:** Countable choice, simply connected $X$, closed connected oriented complementary transverse sheets of dimensions at least three, and their signed intersection number $n$.

1.1 Complementary transversality makes the intersection set discrete. Since one sheet is compact and the other is closed, [F1] makes it finite. If there are $P$ positive and $Q$ negative points, then $n=P-Q$. Choose $\min(P,Q)$ disjoint pairs of opposite signs. For each pair the arcs lemma gives sheet arcs avoiding every other intersection, and their circle contracts because $X$ is simply connected. [given, construct, algebra, F1, F2, F3]

2.1 Apply the high-dimensional Whitney trick to one pair at a time. It fixes the other intersection germs, creates no new points, and preserves embeddedness and connectedness of the moved sheet. The next pair therefore has the same signs and can be treated in the same way. After finitely many steps exactly $|P-Q|=|n|$ points remain, all of one sign. Reparametrize the finitely many isotopies to be stationary near their endpoints and concatenate them smoothly. In particular $n=0$ gives disjunction. In the simply connected case all group labels are the identity, so its group-ring formulation has exactly this signed-pair computation. [step 1.1, construct, algebra, F4] ∎
