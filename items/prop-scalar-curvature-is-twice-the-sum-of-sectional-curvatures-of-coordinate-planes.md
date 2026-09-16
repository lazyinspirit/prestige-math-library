---
id: prop-scalar-curvature-is-twice-the-sum-of-sectional-curvatures-of-coordinate-planes
kind: proposition
title: Scalar curvature is twice the sum of sectional curvatures of orthonormal coordinate planes
status: published
origin: pipeline
deps: ["def-countable-choice","def-scalar-curvature","lem-ricci-curvature-is-symmetric-and-basis-independent","def-sectional-curvature","thm-algebraic-symmetries-of-the-riemann-tensor"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Proposition 12.2.2 and Definition 12.2.3, printed pages 85–86
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 8, geometric interpretation of Ricci and scalar curvature, printed pages 147–148
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[def-scalar-curvature]], [[lem-ricci-curvature-is-symmetric-and-basis-independent]], [[def-sectional-curvature]], and [[thm-algebraic-symmetries-of-the-riemann-tensor]]; after those interfaces are fixed, the remaining local or finite argument makes no additional countable-family choice.

For every orthonormal basis $(e_1,\ldots,e_n)$ of $T_pM$,

$$S(p)=2\sum_{1\leq i<j\leq n}K\bigl(\operatorname{span}(e_i,e_j)\bigr).$$

## Facts & Assumptions

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is required here through [[def-scalar-curvature]], [[lem-ricci-curvature-is-symmetric-and-basis-independent]], [[def-sectional-curvature]], and [[thm-algebraic-symmetries-of-the-riemann-tensor]]; after those supplied interfaces are fixed, the remaining local or finite calculation makes no additional countable-family choice.

[F1] Scalar curvature is the orthonormal trace $S(p)=\sum_j\operatorname{Ric}_p(e_j,e_j)$. [[def-scalar-curvature]].

[F4] In an orthonormal basis, $\operatorname{Ric}_p(X,Y)=\sum_i\operatorname{Rm}_p(e_i,X,Y,e_i)$. [[lem-ricci-curvature-is-symmetric-and-basis-independent]].

[F2] For an orthonormal pair $(e_i,e_j)$, $K(\operatorname{span}(e_i,e_j))=\operatorname{Rm}(e_i,e_j,e_j,e_i)$. [[def-sectional-curvature]].

[F3] The Riemann tensor is skew in its first pair and invariant under interchange of its two pairs. [[thm-algebraic-symmetries-of-the-riemann-tensor]].

## Proof

**Given:** $\mathrm{AC}_\omega$, a point $p$ and an orthonormal basis $(e_1,\ldots,e_n)$ of $T_pM$.

1.1 Substituting the Ricci contraction [F4] into the scalar trace [F1] gives $S(p)=\sum_{i,j}\operatorname{Rm}(e_i,e_j,e_j,e_i)$. The terms with $i=j$ vanish by first-pair skewness in [F3]. [A1, F1, F3, F4]

2.1 For $i\ne j$, [F2] identifies the summand with $K(\operatorname{span}(e_i,e_j))$. Pair interchange in [F3] identifies the summands indexed by $(i,j)$ and $(j,i)$. Hence the ordered off-diagonal sum in step 1.1 is twice the sum indexed by $i<j$, which is the asserted formula. [F2, F3, step 1.1] ∎
