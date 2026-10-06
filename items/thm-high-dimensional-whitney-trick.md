---
id: thm-high-dimensional-whitney-trick
kind: theorem
title: The high-dimensional Whitney trick
deps:
- def-whitney-circle-for-a-pair-of-intersection-points
- lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points
- lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle
- lem-general-position-makes-a-whitney-disk-embedded-and-interior-disjoint-in-the-stable-range
- lem-whitney-disk-framing-obstruction-can-be-corrected-under-the-standard-high-dimensional-hypotheses
- thm-whitney-move-removes-a-cancelling-pair-of-intersections
- def-simply-connected
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
    locator: Theorem 7.27(i), printed pp. 138-141 (hypotheses $n_1,n_2\ge3$, opposite signs $I(x)=-I(y)$, and the
      isotopy removing exactly the pair; the cleaner dimension bookkeeping $n_1,n_2\ge3$ case)
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (complete lecture notes, ICTP/Münster)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Theorem 4.8 and its proof, printed pp. 84-85 (the immersed/disjunction form for $k\ge3$, including
      the construction of $U:D^2\to M$ and the invocation of the Whitney trick)
proof_strategy: direct
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 5
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $X^m$ be a smooth manifold, let $A^a,B^b\subseteq X$ be closed connected oriented embedded complementary transverse submanifolds with $$a,b\ge3,$$ so both codimensions are at least three, and let $p,q\in A\cap B$ satisfy $\varepsilon(p)=-\varepsilon(q)$. Here the signs use the sheet orientations and a continuous orientation of $TX$ along the specified Whitney circle; since that circle is nullhomotopic, such an orientation exists and extends over any disk filling. Reversing it changes both signs together. Suppose that the Whitney circle determined by arcs $\alpha\subseteq A$ and $\beta\subseteq B$ joining $p$ and $q$ (taken as part of the data) is null-homotopic in $X$; by the label lemma this holds exactly when the two double points carry equal fundamental-group labels, and it is automatic when $X$ is simply connected. Then there is an isotopy of $X$, the identity near $A\cap B\setminus\{p,q\}$ and supported in a compact neighbourhood of a Whitney disk, carrying $A$ to an embedded $A'$ with $A'\cap B=(A\cap B)\setminus\{p,q\}$. In particular, if $A\cap B=\{p,q\}$ then $A$ can be isotoped to meet $B$ in no point at all, and if $X$ is simply connected the only remaining hypotheses are $a,b\ge3$ and the opposite signs.

## Facts & Assumptions

[F1] In a connected submanifold of dimension at least two, embedded arcs can join two points while avoiding finitely many other points. [[lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points]]

[F2] The Whitney circle contracts exactly when its based loop class is trivial; compatible whiskers compare the two intersection labels by that class. [[lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle]]

[F3] When both sheet codimensions are at least three, a nullhomotopic Whitney circle has an embedded clean disk with fixed prescribed collars. [[lem-general-position-makes-a-whitney-disk-embedded-and-interior-disjoint-in-the-stable-range]]

[F4] In the stable range a one-summand correction makes an admissible frame extend over the rank-$(m-2)$ disk normal bundle. [[lem-whitney-disk-framing-obstruction-can-be-corrected-under-the-standard-high-dimensional-hypotheses]]

[F5] The Whitney move removes a cancelling pair of intersection points. [[thm-whitney-move-removes-a-cancelling-pair-of-intersections]]

## Proof


**Given:** The complementary closed connected oriented sheets of dimensions at least three, opposite-sign points, and a specified nullhomotopic Whitney circle.

1.1 Retain the specified arcs avoiding every other intersection; their nullhomotopy is part of the hypothesis. The label lemma identifies their nullhomotopy condition; in a simply connected ambient component it is automatic. The stable dimension inequalities are $2+a-m=2-b<0$, $2+b-m=2-a<0$, and $m=a+b\ge6$, so the clean-disk general-position lemma supplies an embedded clean bigon with fixed corner collars. [given, construct, F1, F2, F3]

2.1 Orient a tube of this disk by its disk-normal trivialization, choosing the sign to agree with the given ambient orientation along the boundary circle, and retain the given sheet orientations. Opposite corner signs give admissible boundary frames, and the corrected framing supplier permits a one-summand correction to make an admissible choice extend. The local-move theorem now gives an auxiliary ambient isotopy applied to $A$ with $B$ fixed. Its support avoids every other intersection, and the endpoint removes exactly $p,q$ with no new point. Thus the stated isotopy and all its particular cases follow. All choice use comes from the declared arc, approximation, transversality and framing suppliers. [step 1.1, construct, F4, F5] ∎
