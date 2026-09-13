---
id: thm-schurs-lemma-for-pointwise-constant-sectional-curvature
kind: theorem
title: Schur's lemma for pointwise constant sectional curvature
status: published
origin: pipeline
deps: ["def-countable-choice","thm-sectional-curvatures-determine-the-riemann-tensor","def-sectional-curvature","lem-ricci-curvature-is-symmetric-and-basis-independent","def-scalar-curvature","thm-contracted-second-bianchi-identity","def-levi-civita-connection","prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Will J. Merry, Differential Geometry (2021)
      url: https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf
      locator: Theorem 48.12 and complete proof, lecture 48 pages 2–4
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Corollary 12.2.5 and Proposition 12.3.1, printed pages 86–87
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 7, Proposition 7.8, printed pages 125–126, for the Einstein contraction step
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

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[def-sectional-curvature]], [[lem-ricci-curvature-is-symmetric-and-basis-independent]], [[def-scalar-curvature]], and [[thm-contracted-second-bianchi-identity]]; the tensor-determination step is choice-free.

Let $(M,g)$ be connected of dimension $n\geq3$. If, at each point $p$,
$K(\sigma)$ has the same value for every two-plane
$\sigma\subseteq T_pM$, then

$$k(p):=\frac{S(p)}{n(n-1)}$$

is smooth, equals that common sectional curvature, and is constant on $M$.
No smoothness of the pointwise common value is assumed in the hypothesis.

## Facts & Assumptions

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is required here through [[def-sectional-curvature]], [[lem-ricci-curvature-is-symmetric-and-basis-independent]], [[def-scalar-curvature]], and [[thm-contracted-second-bianchi-identity]]; the pointwise tensor argument makes no additional countable-family choice.

[F1] Algebraic curvature tensors are determined by their sectional
curvatures. [[thm-sectional-curvatures-determine-the-riemann-tensor]].

[F2] Sectional curvature uses the positive Gram determinant and, on an
orthonormal pair, is $\operatorname{Rm}(X,Y,Y,X)$.
[[def-sectional-curvature]].

[F3] Ricci curvature is the orthonormal contraction of $\operatorname{Rm}$.
[[lem-ricci-curvature-is-symmetric-and-basis-independent]].

[F4] Scalar curvature is the metric trace of Ricci.
[[def-scalar-curvature]].

[F5] The contracted Bianchi identity is
$\operatorname{div}\operatorname{Ric}=(1/2)dS$.
[[thm-contracted-second-bianchi-identity]].

[F6] The Levi–Civita connection preserves $g$.
[[def-levi-civita-connection]].

[F7] A smooth function whose differential vanishes is constant on every
connected component. [[prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component]].

## Proof

**Given:** $\mathrm{AC}_\omega$, the connected Riemannian manifold in the statement.

1.1 Since $S$ is smooth by [F4] and $n(n-1)\ne0$, the displayed function $k$ is smooth. Fix $p$ and one two-plane $\sigma\subseteq T_pM$, and put $\kappa=K(\sigma)$. By hypothesis every two-plane at $p$ has curvature $\kappa$. The metric model $A_\kappa(X,Y,Z,T)=\kappa(g(Y,Z)g(X,T)-g(X,Z)g(Y,T))$ has the algebraic curvature symmetries by direct expansion and, by [F2], the same sectional quotient. Thus [F1] gives $\operatorname{Rm}_p=A_\kappa$. [A1, F1, F2, F4, algebra]

2.1 Contracting the model in an orthonormal basis using [F3] gives $\operatorname{Ric}_p=(n-1)\kappa g_p$; taking its trace using [F4] gives $S(p)=n(n-1)\kappa$. Consequently $\kappa=k(p)$. Since $p$ and $\sigma$ were arbitrary, every sectional curvature at $p$ equals the smooth function $k(p)$, and globally $\operatorname{Ric}=(n-1)kg$ and $S=n(n-1)k$. [F3, F4, step 1.1, algebra]

3.1 Metric compatibility [F6] gives $\operatorname{div}(kg)=dk$. Substitute the two identities from step 2.1 into [F5]: $(n-1)dk=(n(n-1)/2)dk$. Because $n\geq3$, the coefficient $(n-1)(n-2)/2$ is nonzero, so $dk=0$. [F5, F6, step 2.1, algebra]

4.1 If $M$ is nonempty, connectedness makes it one connected component, so [F7] and step 3.1 make $k$ constant on $M$. If $M$ is empty under the library's connected-empty convention, the unique empty function agrees vacuously with every constant, so the conclusion still holds. [F7, step 3.1] ∎
