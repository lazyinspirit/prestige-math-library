---
id: def-singular-knot-and-vassiliev-derivative
kind: definition
title: Singular knots and Vassiliev derivatives
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-commutative-ring
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-countable-choice
justified_by: []
dependency_level: 1
verification:
  precheck: n/a
sources:
  references:
    - title: "The Fundamental Theorem of Vassiliev Invariants"
      url: "https://arxiv.org/pdf/q-alg/9702009v1"
    - title: "Introduction to Vassiliev Knot Invariants"
      url: "https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf"
---

## Definition

Fix the round metric and orientation on $S^3$. An **$m$-singular oriented knot** is a smooth immersion $K:S^1\to S^3$ with exactly $m$ distinct transverse double points and no other self-intersections; each double-point image has exactly two preimages with linearly independent tangent vectors, and the preimage pairs are disjoint. The knot has no framing. Choose disjoint small balls around its double points, each containing no other part of the singular knot. At each double point there are two **resolutions**, obtained by separating the two local branches in the ball; label them $+$ and $-$ so the resolved crossing signs are respectively $+1$ and $-1$ under the convention that, in a diagram whose positive viewing normal agrees with the ambient orientation, the sign is $\operatorname{sgn}\det(v_{\mathrm{over}},v_{\mathrm{under}})$ and the positive Artin half twist has sign $+1$.

A **framed oriented knot** is a smooth oriented embedding $K:S^1\hookrightarrow S^3$ together with a homotopy class through nowhere-zero smooth sections of its oriented rank-two normal bundle. For an immersion $K:S^1\to S^3$, including one with double points, define its branchwise normal bundle over the parameter circle by $\nu_K:=K^*TS^3/dK(TS^1)$, oriented so that a positive tangent followed by a positive normal basis gives the ambient orientation. Because $dK$ has rank one at every parameter, its image is locally a smooth line subbundle and this quotient is locally a rank-two bundle. Assume $\mathrm{AC}_\omega$ for the framed clauses below, so these normal quotient bundles have their smooth vector-bundle structures. A **framed $m$-singular knot** has finitely many transverse double points and finitely many simple zeroes of a smooth section of $\nu_K$, all disjoint; its number $m$ of singularities is the number of double points plus the number of zeroes. A simple zero is one at which the derivative of the section in an oriented local trivialization is nonzero. Resolve double points as above, extending the normal section over the local resolution balls; each resulting section determines a framing homotopy class. To resolve a framing zero at parameter $t=0$, choose the oriented normal trivialization so the section is $t e_1$ near $0$, with $e_2$ the positive quarter-turn of $e_1$; replace it by $t e_1+\delta e_2$ or $t e_1-\delta e_2$ for sufficiently small $\delta>0$. These are the $+$ and $-$ resolutions of that zero and determine the framing classes on the resolved knots.

Let $R$ be a commutative ring. For an $R$-valued ambient-isotopy invariant $V$ of unframed oriented knots and an $m$-singular knot $K$, its **finite difference** is
$$
D_mV(K):=\sum_{\epsilon\in\{+1,-1\}^m}\left(\prod_{i=1}^m\epsilon_i\right)V(K_\epsilon),
$$
where $K_\epsilon$ resolves singularity $i$ positively when $\epsilon_i=+1$ and negatively when $\epsilon_i=-1$. For $m=0$, set $D_0V(K)=V(K)$. The same formula defines $D_mV$ for an invariant of framed knots on framed singular knots, counting both double points and framing zeroes among the $m$ singularities. For one double point it reads $V(K_+)-V(K_-)$; the zero resolutions use the local normal-section model just specified. An invariant has **type at most $n$** if $D_{n+1}V$ vanishes on every $(n+1)$-singular object in its category. It has **exact type $n$** if it has type at most $n$ but not type at most $n-1$. Type at most $-1$ means the zero invariant, so a nonzero type-at-most-zero invariant has exact type zero. For an unframed link, replace $S^1$ by a finite disjoint union of oriented circles, allow marked self- or mixed double points, and use the same resolution sum. For a framed link, take a normal section on each component and count its simple zeroes together with all double points.

## Definition references

[[def-oriented-crossing-sign-writhe-and-blackboard-framing|Oriented crossing-sign convention]]

[[def-oriented-link-in-s-three-and-ambient-isotopy|Ambient isotopy of oriented links]]

[[def-countable-choice|Countable-choice assumption for the framed clauses]]

[[def-commutative-ring|Commutative ring]]

[Bar-Natan and Stoimenow, §1.1, pp. 3–5](https://arxiv.org/pdf/q-alg/9702009v1)

[Chmutov, Duzhin, and Mostovoy, §§3.1.1, 3.4, and 3.5.1, pp. 64–75](https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf)
