---
id: lem-sectional-curvature-is-independent-of-the-basis-of-the-plane
kind: lemma
title: Sectional curvature is independent of the basis of the plane
status: draft
origin: pipeline
deps: ["def-countable-choice","def-sectional-curvature","thm-algebraic-symmetries-of-the-riemann-tensor"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Definition 12.1.3 and the determinant calculation in Proposition 12.1.1, printed pages 81–82
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 8, Proposition 8.8, printed page 146
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[def-sectional-curvature]] and [[thm-algebraic-symmetries-of-the-riemann-tensor]]; after those interfaces are fixed, the remaining local or finite argument makes no additional countable-family choice.

The quotient defining $K(\sigma)$ is unchanged under every change of ordered
basis of the two-plane $\sigma$.

## Facts & Assumptions

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is required here through [[def-sectional-curvature]] and [[thm-algebraic-symmetries-of-the-riemann-tensor]]; after those supplied interfaces are fixed, the remaining local or finite calculation makes no additional countable-family choice.

[F1] Sectional curvature is the quotient of $\operatorname{Rm}(X,Y,Y,X)$ by the Gram determinant of the ordered basis $(X,Y)$. [[def-sectional-curvature]].

[F2] The Riemann tensor is alternating in each pair. [[thm-algebraic-symmetries-of-the-riemann-tensor]].

## Proof

**Given:** $\mathrm{AC}_\omega$, two ordered bases $(X,Y)$ and $(X',Y')$ of the same two-plane, with $X'=aX+bY$, $Y'=cX+dY$, and $\Delta=ad-bc\ne0$.

1.1 Multilinearity and first-pair alternation in [F2] give $\operatorname{Rm}(X',Y',Y',X')=\Delta\operatorname{Rm}(X,Y,Y',X')$. Applying last-pair alternation to $(Y',X')$ gives a second factor $\Delta$, so the numerator is $\Delta^2\operatorname{Rm}(X,Y,Y,X)$. [A1, F2, algebra]

2.1 If $G$ is the Gram matrix of $(X,Y)$, the Gram matrix of $(X',Y')$ is $AGA^{\mathsf T}$ for $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, so its determinant is $\Delta^2\det G$. The nonzero common factor $\Delta^2$ cancels from the quotient in [F1], proving basis independence. [F1, step 1.1, algebra] ∎
