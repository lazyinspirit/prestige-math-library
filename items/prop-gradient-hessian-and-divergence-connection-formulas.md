---
id: prop-gradient-hessian-and-divergence-connection-formulas
kind: proposition
title: "Gradient hessian and divergence connection formulas"
status: draft
origin: pipeline
deps: ["prop-christoffel-formula-for-the-levi-civita-connection","prop-levi-civita-connection-commutes-with-musical-isomorphisms","def-riemannian-gradient","prop-coordinate-formula-for-riemannian-divergence","prop-connection-laws-in-directional-form"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement

For Levi–Civita, $\operatorname{grad}f=(df)^\sharp$ and the Hessian defined by $\operatorname{Hess}f(X,Y)=g(\nabla_X\operatorname{grad}f,Y)$ is a smooth covariant two-tensor satisfying
$$\operatorname{Hess}f(X,Y)=X(Yf)-(\nabla_XY)f,\qquad (\operatorname{Hess}f)_{ij}=\partial_i\partial_jf-\Gamma^k{}_{ij}\partial_kf.$$
Moreover the previously defined Riemannian divergence satisfies
$$\operatorname{div}_gX=\operatorname{tr}(v\mapsto\nabla_vX)=\partial_iX^i+\Gamma^i{}_{ik}X^k.$$

## Facts & Assumptions

**Given:** A smooth Riemannian metric, smooth $f$ and vector field $X$.

[F1] Gradient is $(df)^\sharp$, characterized by $g(\operatorname{grad}f,Y)=Yf$ ([[def-riemannian-gradient]]).

[F2] Musical maps commute with Levi–Civita and its dual derivative ([[prop-levi-civita-connection-commutes-with-musical-isomorphisms]]).

[F3] The Levi–Civita symbols have the metric derivative formula ([[prop-christoffel-formula-for-the-levi-civita-connection]]).

[F4] Riemannian divergence is $(\det G)^{-1/2}\partial_i((\det G)^{1/2}X^i)$ ([[prop-coordinate-formula-for-riemannian-divergence]]).

[F5] The connection is function-linear in its direction and satisfies the section Leibniz rule ([[prop-connection-laws-in-directional-form]]).

## Proof

1.1 By [F1] and [F2], $g(\nabla_X\operatorname{grad}f,Y)=(\nabla_Xdf)(Y)=X(df(Y))-df(\nabla_XY)=X(Yf)-(\nabla_XY)f$. The original metric expression is function-linear in both $X$ and $Y$ by direction-linearity and fibrewise metric linearity, so it is a smooth two-tensor. Substituting coordinate fields gives the displayed Hessian coefficients. [F1, F2, F5]

1.2 For a fixed field $X$, direction-linearity makes $v\mapsto\nabla_vX$ a smooth fibre endomorphism. In a coordinate basis, $\nabla_{\partial_i}X=(\partial_iX^j+\Gamma^j{}_{ik}X^k)\partial_j$, so its trace is $\partial_iX^i+\Gamma^i{}_{ik}X^k$. Trace is basis independent: for square matrices $A,B$, the finite sums give $\operatorname{tr}(AB)=\sum_{ij}A_{ij}B_{ji}=\operatorname{tr}(BA)$, hence $\operatorname{tr}(S^{-1}AS)=\operatorname{tr}A$. [F5, given]

1.3 Contract the Christoffel formula to obtain $\Gamma^i{}_{ik}=\tfrac12g^{i\ell}\partial_kg_{i\ell}$: its first and third derivative terms cancel by exchanging $i,\ell$ and using symmetry of $G^{-1}$. For an invertible differentiable matrix $G$, write each differentiated column as a linear combination of the original columns, with coefficient matrix $G^{-1}\partial_kG$. Multilinearity of determinant shows that replacing one column contributes only its own diagonal coefficient, since every other replacement repeats another column. Consequently $\partial_k\det G=(\det G)\operatorname{tr}(G^{-1}\partial_kG)$, and the scalar square-root derivative gives $\partial_k\log\sqrt{\det G}=\Gamma^i{}_{ik}$. [F3]

2.1 Expanding [F4] with the scalar product rule now gives precisely the trace in step 1.2. Thus the trace agrees with the existing divergence, including nonorientable manifolds; no normal coordinates are used. Constant $f$ has zero Hessian, and $X=0$ has zero divergence. In dimension zero all sums are empty; in dimension one the same scalar formulas hold. Positive definiteness keeps the determinant positive; smooth boundary derivatives obey the same formulas. [F4, step 1.1, step 1.2, step 1.3] ∎
