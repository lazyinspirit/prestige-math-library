---
id: lem-tgr-spatial-shear-properties
kind: lemma
title: Spatial shear properties and nonnegative norm
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-gr-smooth-lorentzian-objects
  - def-smooth-vector-field-as-a-tangent-bundle-section
  - def-gr-observer-and-rest-space
  - lem-gr-observer-projection-decomposition
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-countable-choice
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-countable-choice: mathematical-premise
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1, full lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "Full 37-page PDF; §7.3, Eq. (7.30), PDF p. 32, for the projected symmetric trace-free shear convention."
    - title: "Paul Romatschke, Relativistic Viscous Fluid Dynamics and Non-Equilibrium Entropy, arXiv:0906.4787v2, full article"
      url: "https://arxiv.org/pdf/0906.4787"
      locator: "Full 25-page PDF; §§3–4.1, PDF pp. 7–13, for independent viscous-stress and shear conventions; its conformal zero-charge entropy scope is not imported."
---

## Statement

Let $(M,g,N)$ be a smooth time-oriented Lorentzian four-manifold of signature $(-,+,+,+)$, let $O\subseteq M$ be open, and let $u$ be a smooth vector field on $O$ satisfying $g(u,u)=-1$ and $g(u,N)<0$ pointwise. Use the unique torsion-free metric-compatible connection $\nabla$ of $g$. Define
$$
h_{ab}:=g_{ab}+u_a u_b,\qquad h_a{}^c:=\delta_a{}^c+u_a u^c,\qquad \theta:=\nabla_a u^a,
$$
and the shear
$$
\sigma_{ab}:=h_a{}^c h_b{}^d\nabla_{(c}u_{d)}-\frac{\theta}{3}h_{ab},
$$
where parentheses denote symmetrization with factor $1/2$. The field $u$ is a future unit timelike observer field in the convention of [[def-gr-observer-and-rest-space]]. Then $\sigma_{ab}$ is symmetric, spatial in both indices ($u^a\sigma_{ab}=u^b\sigma_{ab}=0$), and trace-free ($g^{ab}\sigma_{ab}=0$). The metric restricted to $u^\perp$ is positive definite, so
$$
\sigma^{ab}\sigma_{ab}\ge 0,
$$
with equality exactly when $\sigma_{ab}=0$. More generally, every spatial vector $Y$ satisfies $g_{ab}Y^aY^b\ge0$, with equality exactly when $Y=0$. These are pointwise geometric statements and assume no field equation.

## Facts & Assumptions

**Given:** A smooth time-oriented Lorentzian four-manifold, an open set $O$, a smooth future unit timelike vector field $u$ on $O$, and the metric-selected connection $\nabla$.

[A1] The tangent-bundle smooth structure used by the Lorentzian geometry and vector-field definitions assumes Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]); this proof makes no further choice and does not assume unrestricted Choice.

[F1] [[def-gr-smooth-lorentzian-objects]]: $g$ is a smooth nondegenerate metric of signature $(-,+,+,+)$, and $N$ is a smooth timelike time-orientation field.

[F2] [[def-smooth-vector-field-as-a-tangent-bundle-section]]: a smooth vector field is a smooth section of the tangent-bundle projection; it supplies the meaning of smooth $u$.

[F3] [[def-gr-observer-and-rest-space]]: a future unit timelike vector satisfies $g(u,u)=-1$ and $g(u,N)<0$, and its rest space is $u^\perp=\{Y:g(u,Y)=0\}$.

[F4] [[lem-gr-observer-projection-decomposition]]: for such $u$, the orthogonal complement $u^\perp$ is three-dimensional and the restriction of $g$ to it is positive definite; $Y\mapsto Y+g(u,Y)u$ is the orthogonal projection onto it.

[F5] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]: $\nabla$ is torsion-free and metric-compatible, so $\nabla g=0$ and the covariant derivative obeys the product rule.

## Proof

1.1 Differentiating $g_{ab}u^au^b=-1$ covariantly and using [F5] gives $u^d\nabla_cu_d=0$ for every $c$. Also $u^ah_a{}^c=u^c+(u_au^a)u^c=0$, and similarly $u^bh_b{}^d=0$. Therefore both indices of $h_a{}^ch_b{}^d\nabla_{(c}u_{d)}$ are spatial, and subtracting the spatial tensor $\theta h_{ab}/3$ preserves spatiality. Since $h_{ab}$ and $\nabla_{(c}u_{d)}$ are symmetric, their two-index projection and hence $\sigma_{ab}$ are symmetric. [A1, F1, F2, F3, F5, given, algebra]

2.1 Expanding $h$ and using $g(u,u)=-1$ gives $g^{ab}h_a{}^ch_b{}^d=g^{cd}+u^cu^d$ and $g^{ab}h_{ab}=3$. Hence $g^{ab}\sigma_{ab}=(g^{cd}+u^cu^d)\nabla_{(c}u_{d)}-\theta=\theta+u^c(u^d\nabla_cu_d)-\theta=0$, where the middle term vanishes by step 1.1. [step 1.1, F5, algebra]

3.1 By [F4], each pointwise rest space $u^\perp$ is a finite-dimensional positive-definite inner-product space. Choose an algebraic basis there and apply the finite Gram–Schmidt construction; each nonzero residual has positive norm and can be normalized. Since $\sigma$ is spatial and symmetric by step 1.1, in that basis $\sigma^{ab}\sigma_{ab}=\sum_{i,j=1}^3\sigma_{ij}^2\ge0$, and the sum is zero exactly when every component, hence $\sigma$, is zero. The same positive-definite metric gives $g(Y,Y)\ge0$ for every spatial vector, with equality only for $Y=0$. [step 1.1, F4, algebra] ∎
