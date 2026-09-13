---
id: lem-ricci-curvature-is-symmetric-and-basis-independent
kind: lemma
title: Ricci curvature is symmetric and basis independent
status: published
origin: pipeline
deps: ["def-countable-choice","def-ricci-curvature","thm-algebraic-symmetries-of-the-riemann-tensor","lem-contraction-is-independent-of-the-basis-formula"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Proposition 12.2.2 and proof, printed pages 85–86
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 7, Lemma 7.6, printed pages 124–125
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

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[thm-algebraic-symmetries-of-the-riemann-tensor]]; after those interfaces are fixed, the remaining local or finite argument makes no additional countable-family choice.

Ricci curvature is a smooth symmetric covariant two-tensor. For every
orthonormal basis $(e_1,\ldots,e_n)$ of $T_pM$,

$$\operatorname{Ric}_p(X,Y)=\sum_{i=1}^n\operatorname{Rm}_p(e_i,X,Y,e_i),$$

and the value is independent of the basis.

## Facts & Assumptions

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is required here through [[thm-algebraic-symmetries-of-the-riemann-tensor]]; after those supplied interfaces are fixed, the remaining local or finite calculation makes no additional countable-family choice.

[F1] Ricci curvature is the trace of $Z\mapsto R(Z,X)Y$. [[def-ricci-curvature]].

[F2] The Riemann tensor has first- and last-pair skewness and pair-interchange symmetry. [[thm-algebraic-symmetries-of-the-riemann-tensor]].

[F3] Contraction written using a basis and its dual is independent of that basis. [[lem-contraction-is-independent-of-the-basis-formula]].

## Proof

**Given:** $\mathrm{AC}_\omega$, a point $p$, tangent vectors $X,Y\in T_pM$, and a local frame near $p$.

1.1 In a basis $(b_i)$ with dual basis $(b^i)$, [F1] is $\sum_i b^i(R(b_i,X)Y)$. This is precisely a tensor contraction, so [F3] proves basis independence. In a smooth local frame, the same finite sum has smooth curvature and dual-frame coefficients; it is bilinear in $X,Y$ and smooth in $p$, hence defines a smooth covariant two-tensor. [F1, F3]

2.1 If $(e_i)$ is orthonormal, its metric dual is $g(e_i,\mathord\cdot)$, so step 1.1 becomes the displayed $\operatorname{Rm}$ sum. For every $i$, pair interchange gives $\operatorname{Rm}(e_i,X,Y,e_i)=\operatorname{Rm}(Y,e_i,e_i,X)$; applying first- and last-pair skewness gives $\operatorname{Rm}(Y,e_i,e_i,X)=\operatorname{Rm}(e_i,Y,X,e_i)$. Summing proves $\operatorname{Ric}(X,Y)=\operatorname{Ric}(Y,X)$. [A1, F2, step 1.1, algebra] ∎
