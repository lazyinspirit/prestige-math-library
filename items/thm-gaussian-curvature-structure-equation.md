---
id: thm-gaussian-curvature-structure-equation
kind: theorem
title: Gaussian curvature structure equation
status: published
origin: pipeline
deps:
  - def-connection-one-form-of-an-oriented-orthonormal-frame
  - def-curvature-of-an-affine-connection
  - def-exterior-derivative-by-the-invariant-vector-field-formula
  - def-riemann-curvature-four-tensor
  - def-riemannian-volume-form-on-an-oriented-manifold
  - def-sectional-curvature
  - def-countable-choice
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, §The Gauss–Bonnet Formula, printed p. 165 (PDF p. 181), equations (9.4) and the structure equation: the exterior derivative of the frame connection form equals minus the Gaussian curvature times the area form. Sign compared above with ω_std=−ω."
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, §2.1, printed pp. 11–12 (PDF pp. 18–19), Lemma 2.1.1 and Lemma 2.1.2: frame equations followed by the structure equation in the opposite connection-form sign."
---

## Statement

Let $(M,g)$ be an oriented Riemannian surface, $U\subseteq M$ open, and
$(E_1,E_2)$ a smooth positively oriented $g$-orthonormal frame on $U$ with
connection form $\omega(X)=g(\nabla_XE_1,E_2)$. Write
$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$ for the
curvature of the Levi–Civita connection and let $\operatorname{Rm}$ be the
Riemann curvature four-tensor, so that
$K=g(R(E_1,E_2)E_2,E_1)$ is the sectional curvature of the tangent plane.
Then, with $dA$ the Riemannian volume form of the oriented surface $U$,

$$d\omega=-K\,dA .$$

The only choice principle involved is the countable choice $\mathrm{AC}_\omega$
already present in the published sectional-curvature interface; it is not used
in the frame computation on $U$.

## Facts & Assumptions
**Given:** An oriented Riemannian surface, a smooth positive orthonormal frame on an open set $U$, its connection one-form $\omega$, and the Levi–Civita connection of $g$.

[F1] The frame equations $\nabla_XE_1=\omega(X)E_2$ and $\nabla_XE_2=-\omega(X)E_1$ hold for the connection form $\omega(X)=g(\nabla_XE_1,E_2)$ ([[def-connection-one-form-of-an-oriented-orthonormal-frame]]).

[F2] The curvature of a connection is $R^\nabla(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$ ([[def-curvature-of-an-affine-connection]]).

[F3] The invariant formula for the exterior derivative of a one-form is $d\eta(X_0,X_1)=X_0\eta(X_1)-X_1\eta(X_0)-\eta([X_0,X_1])$ ([[def-exterior-derivative-by-the-invariant-vector-field-formula]]).

[F4] The Riemann curvature four-tensor is $\operatorname{Rm}(X,Y,Z,W)=g(R(X,Y)Z,W)$ ([[def-riemann-curvature-four-tensor]]).

[F5] The sectional curvature of a two-plane with ordered basis $(X,Y)$ is $K(\sigma)=\operatorname{Rm}(X,Y,Y,X)/(g(X,X)g(Y,Y)-g(X,Y)^2)$, and its interface assumes $\mathrm{AC}_\omega$, declared through [[def-countable-choice]] ([[def-sectional-curvature]]).

[F6] On an oriented Riemannian $n$-manifold, the Riemannian volume form is $\operatorname{vol}_g=\sqrt{\det G_x}\,dx^1\wedge\cdots\wedge dx^n$ in positively oriented charts ([[def-riemannian-volume-form-on-an-oriented-manifold]]).



## Proof

**Proof technique:** Compute the curvature tensor on the frame, identify the result with the exterior derivative of the connection form, and compare with the area form on that frame.

1.1 From [F1], $\nabla_{E_2}E_2=-\omega(E_2)E_1$ and $\nabla_{E_1}E_2=-\omega(E_1)E_1$; differentiating these two expressions along $E_1$ and $E_2$ with the product rule gives $\nabla_{E_1}\nabla_{E_2}E_2=-E_1(\omega(E_2))E_1-\omega(E_2)\omega(E_1)E_2$ and $\nabla_{E_2}\nabla_{E_1}E_2=-E_2(\omega(E_1))E_1-\omega(E_1)\omega(E_2)E_2$, while $\nabla_{[E_1,E_2]}E_2=-\omega([E_1,E_2])E_1$. [F1, given, algebra]

1.2 Let $(\theta^1,\theta^2)$ be the dual coframe of $(E_1,E_2)$, so that $\theta^i(E_j)=\delta^i_j$; since the frame is $g$-orthonormal, the Gram matrix in this frame is the identity, and [F6] gives $dA=\theta^1\wedge\theta^2$ on $U$; hence $dA(E_1,E_2)=\theta^1(E_1)\theta^2(E_2)-\theta^1(E_2)\theta^2(E_1)=1$. [F6, given, algebra]

2.1 Subtracting the three identities of step 1.1 in the order of [F2] cancels the $E_2$-components and gives $R(E_1,E_2)E_2=-\bigl(E_1\omega(E_2)-E_2\omega(E_1)-\omega([E_1,E_2])\bigr)E_1=-d\omega(E_1,E_2)\,E_1$, the last equality being the invariant formula of [F3] with $X_0=E_1$, $X_1=E_2$. [F2, F3, step 1.1, algebra]

3.1 The pair $(E_1,E_2)$ is an ordered orthonormal basis of each tangent plane, so [F4] and [F5] give $K=g(R(E_1,E_2)E_2,E_1)=\operatorname{Rm}(E_1,E_2,E_2,E_1)$ at every point of $U$; step 2.1 then yields $K=-d\omega(E_1,E_2)$. The countable-choice assumption carried by [F5] enters only through that published interface and is declared by [[def-countable-choice]]; the frame computation on $U$ uses none of it. [F4, F5, step 2.1]

4.1 At each point of $U$, the two-forms $d\omega$ and $-K\,dA$ agree on the basis $(E_1,E_2)$ of the tangent plane by steps 1.2 and 3.1; since a two-form is determined by its value on any basis, $d\omega=-K\,dA$ on $U$. [step 1.2, step 3.1, algebra] ∎



## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, §“The Gauss–Bonnet Formula,” printed p. 165, equation (9.4) and the following structure equation, writes the frame equations with $\omega_{\mathrm{std}}=-\omega$; Datar, *Lectures on Riemannian Geometry*, Lecture 2, §2.1, printed pp. 11–12, does the same in Lemma 2.1.1. The two-frame computation above is carried out in the sign convention of this page, so that $d\omega=-K\,dA$; the sign is checked again by the direct spherical and hyperbolic metric computations in the examples of this pair.
