---
id: def-whitney-circle-for-a-pair-of-intersection-points
kind: definition
title: Whitney circle for a pair of intersection points
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
- def-smooth-manifold
- def-smooth-embedding
- def-embedded-submanifold-and-slice-chart
- def-transverse-embedded-submanifolds
sources:
  references:
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press
      2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Ch. 7 §7.3, printed pp. 138-141 (the loop $\omega:S^1\to M$ built from arcs in the two sheets in the
      proof of Theorem 7.27)
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University
      Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Theorem 6.6 and its proof, printed pp. 71-73 (the loop $L$ made of an arc from $p$ to $q$ in $M$ and
      an arc from $q$ to $p$ in $M'$)
verification:
  precheck: n/a
dependency_level: 0
---

## Definition

Let $X^m$ be a smooth manifold without boundary and let $A^a,B^b\subseteq X$ be closed embedded submanifolds meeting transversely with $a+b=m$ ([[def-smooth-manifold]], [[def-embedded-submanifold-and-slice-chart]], [[def-transverse-embedded-submanifolds]]). For two distinct transverse intersection points $p,q\in A\cap B$ a **Whitney circle** for the ordered pair $(p,q)$ is a closed curve $\gamma=\alpha*\beta$ in $X$, where $\alpha:I\to A$ is a smooth embedded arc from $p$ to $q$, $\beta:I\to B$ is a smooth embedded arc from $q$ to $p$, and both arcs meet $A\cap B$ only in their endpoints: $\alpha((0,1))\cap(A\cap B)=\varnothing$ and $\beta((0,1))\cap(A\cap B)=\varnothing$, with $\alpha$ and $\beta$ otherwise disjoint. The arcs are part of the data, not determined by the pair $(p,q)$: different arcs give loops that differ by loops in $A$ and in $B$. Equivalently, $\gamma:S^1\to X$ is an embedding, smooth except at the corners $p,q$, whose two branches lie in $A$ and in $B$ respectively, meet $A\cap B$ only at $p,q$, and have linearly independent tangent directions there. No orientation, coefficient system or dimension inequality beyond $a+b=m$ is imposed, and the definition asserts nothing about existence of such arcs.

Here $I=[0,1]$ is the closed interval, an arc is a smooth embedding of $I$ ([[def-smooth-embedding]]), and the concatenation $\alpha*\beta$ traverses $\alpha$ and then $\beta$, so $\gamma(0)=\gamma(1)=p$. The condition $a+b=m$ is exactly complementary dimension: it is what makes $T_pX=T_pA\oplus T_pB$ at each transverse intersection point, so that the two branch tangent lines are linearly independent at the corner. The two arcs of a Whitney circle avoid every double point of $A\cap B$ other than $p$ and $q$, which is what a later clean Whitney disk must span. The definition is a naming of the boundary object only: it imposes no orientability, no coefficient system, no inequality between $a$ and $b$ beyond $a+b=m$, and it neither asserts nor denies that arcs with these properties exist; the arcs lemma on this page supplies them for connected sheets of dimension at least two.
