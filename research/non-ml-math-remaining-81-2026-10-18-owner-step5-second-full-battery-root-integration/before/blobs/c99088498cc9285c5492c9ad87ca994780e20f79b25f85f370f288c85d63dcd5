---
id: ex-pointed-z2-semion-metric-group
kind: example
title: "The pointed Z/2 semion metric group"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [thm-a-braided-rigid-category-has-a-drinfeld-morphism, def-pointed-metric-group-ribbon-category, thm-pointed-metric-group-is-modular-iff-radical-trivial]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, Example 8.13.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor, §3.1"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
---

## Statement

For $G=\mathbb Z/2=\{0,1\}$ define

$$\omega(a,b,c)=(-1)^{abc},\qquad r(a,b)=i^{ab},\qquad q(0)=1,\quad q(1)=i,$$

where group elements are represented by bits. These data give a pointed ribbon category with nondegenerate bicharacter $b$ and modular Hopf-link matrix.

## Facts & Assumptions

**Given:** The finite group $G=\mathbb Z/2$ and the scalar functions in the Statement.

[F1] The pentagon and two hexagon equations and twist compatibility for an abelian $3$-cocycle are those of [[def-pointed-metric-group-ribbon-category]].

[F2] The pointed modularity criterion is $\operatorname{rad}(b)=\{0\}$ ([[thm-pointed-metric-group-is-modular-iff-radical-trivial]]).

[F3] The Drinfeld map is the evaluation–braiding–coevaluation composite and satisfies $d_{X,Y}(u_X\otimes u_Y)=u_{X\otimes Y}c_{Y,X}c_{X,Y}$ ([[thm-a-braided-rigid-category-has-a-drinfeld-morphism]]). Thus balancing makes $j=u q$ monoidal.

## Proof

**Given:** The data in the Statement.

1.1 Normalization holds because every exponent vanishes if any argument is $0$. For bits, $b+c$ in the cocycle equations is reduced modulo $2$. The pentagon signs have exponents $abc+a(b+c)d+bcd=acd+bcd+abc+abd\pmod2,$ so its two sides agree. For the first hexagon, the ratio of the $r$-terms is $i^{-2abc}=(-1)^{abc}$, which is exactly the ratio of the $\omega$-terms. For the second hexagon, the ratio of the $r$-terms is again $i^{-2abc}=(-1)^{abc}$, equal to $\omega(a,b,c)\omega(c,a,b)\omega(a,c,b)^{-1}=(-1)^{abc}$. The twist equation is trivial if either bit is zero; at $(1,1)$ its right side is $r(1,1)^2q(1)^2=i^2i^2=1=q(0)$. Also $q(-g)=q(g)$. Thus all specified cocycle and twist identities hold. [F1, given, algebra]

2.1 Supply the dual and pivotal data required by [F1]. The left dual of $g$ is $g$; its evaluation scalar is $1$, and its coevaluation scalar is $\omega(g,g,g)^{-1}=(-1)^g$. Both snake composites are one, since the associator contributes the same sign. Formula [F3], with reassociation from $g\otimes(g\otimes g)$ to $(g\otimes g)\otimes g$, gives $u_0=1$ and $u_1=(-1)(-1)i=i$. Put $j_g=u_gq(g)$, so $j_0=1$ and $j_1=-1$, and extend by direct sums. The tensor identity in [F3] and the balancing identity checked in step 1.1 prove monoidality of $j$, including all associators and double-dual comparisons. Its pivotal trace on a simple is the scalar $\operatorname{ev}_{g^\vee}(j_g\otimes1)\operatorname{coev}_g=(-1)^g(-1)^g=1$. The dual grade is the same, so the left and right simple traces agree; additivity gives sphericality on all finite direct sums. The induced twist $u^{-1}j$ is exactly $q$. Thus the full dimension-one pointed ribbon input, rather than just its scalar cocycle, has been constructed. [F1, F3, step 1.1, construct, algebra]

3.1 The double-braiding values are $b(0,g)=b(g,0)=1$ and $b(1,1)=i^2=-1$. Hence $s=\begin{pmatrix}1&1\\1&-1\end{pmatrix}.$ The only nonzero element $1$ is not in the radical because $b(1,1)=-1\ne1$, so $\operatorname{rad}(b)=\{0\}$. By [F2] the category is modular; directly, $\det(s)=-2$ and $D^2=2$. [F2, step 1.1, step 2.1, algebra] ∎
