---
id: def-connection-one-form-of-an-oriented-orthonormal-frame
kind: definition
title: Connection one-form of an oriented orthonormal frame
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-oriented-riemannian-surface-and-positive-quarter-turn
  - def-levi-civita-connection
  - def-affine-connection-on-a-smooth-manifold
  - def-smooth-differential-k-form
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
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
      locator: "Chapter 9, §The Gauss–Bonnet Formula, printed p. 165 (PDF p. 181), lines 6471–6488: Lee defines ω_std(X)=g(E₁,∇_X E₂)=-g(∇_X E₁,E₂), giving ∇_X E₁=-ω_std(X)E₂ and ∇_X E₂=ω_std(X)E₁. The convention in this item is ω=-ω_std."
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, §2.1, printed p. 11 (PDF p. 18), lines 604–615: Datar defines ω_std(X)=g(E₁,∇_X E₂)=-g(∇_X E₁,E₂) and records the resulting frame equations. The convention in this item is ω=-ω_std."
---

## Definition

Let $(M,g)$ be an oriented Riemannian surface, let $U\subseteq M$ be open, and
let $(E_1,E_2)$ be a specified smooth positively oriented $g$-orthonormal frame
on $U$. The **connection one-form in this frame and sign convention** is the
smooth one-form $\omega\in\Omega^1(U)$ defined by
$$\omega(X)=g(\nabla_XE_1,E_2)$$
for each smooth vector field $X$ on $U$. Its frame equations are
$$\nabla_XE_1=\omega(X)E_2,\qquad \nabla_XE_2=-\omega(X)E_1.$$

Lee's and Datar's frame convention is the negative one:
$\omega_{\mathrm{std}}(X)=g(E_1,\nabla_XE_2)=-\omega(X)$. The explicit sign
choice here is used by the later structure-equation and rotation-law items.

## Facts & Assumptions

**Given:** An oriented Riemannian surface, an open subset $U$, its Levi–Civita connection, and a specified smooth positively oriented orthonormal frame $(E_1,E_2)$ on $U$.

[F1] An oriented Riemannian surface carries the supplied metric on its oriented two-manifold ([[def-oriented-riemannian-surface-and-positive-quarter-turn]]).

[F2] The Levi–Civita connection is metric compatible, so $Xg(Y,Z)=g(\nabla_XY,Z)+g(Y,\nabla_XZ)$ for local fields ([[def-levi-civita-connection]]).

[F3] An affine connection is function-linear in its differentiating direction $X$ ([[def-affine-connection-on-a-smooth-manifold]]).

[F4] A smooth differential $k$-form is a smooth section of $\bigwedge^kT^*M$; for $k=1$ this is a smooth one-form ([[def-smooth-differential-k-form]]).

## Proof

**Proof technique:** direct.

1.1 Define $\omega(X)=g(\nabla_XE_1,E_2)$. By [F3], $\omega(fX)=f\omega(X)$, so its value at a point depends linearly only on the tangent vector there. In a local coordinate frame, the coefficients $g(\nabla_{\partial_i}E_1,E_2)$ are smooth because the metric, connection, and frame are smooth. Thus $\omega$ is a smooth section of $T^*U$, hence a smooth one-form by [F4]. [F1, F3, F4, given]

2.1 Since $g(E_1,E_1)=1$, metric compatibility [F2] gives $0=Xg(E_1,E_1)=2g(\nabla_XE_1,E_1)$. The coefficient of $E_1$ in $\nabla_XE_1$ is therefore zero, while its coefficient of $E_2$ is the defining value $\omega(X)$. Hence $\nabla_XE_1=\omega(X)E_2$. [F2, step 1.1]

3.1 The same calculation gives $g(\nabla_XE_2,E_2)=0$. Differentiating $g(E_1,E_2)=0$ and using [F2] yields $0=g(\nabla_XE_1,E_2)+g(E_1,\nabla_XE_2)=\omega(X)+g(E_1,\nabla_XE_2)$. Thus $\nabla_XE_2=-\omega(X)E_1$, and the equality also gives $\omega_{\mathrm{std}}=-\omega$ in the Lee/Datar convention. [F2, step 2.1] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, §“The Gauss–Bonnet Formula,” printed p. 165, equations (9.4), defines $\omega_{\mathrm{std}}(X)=g(E_1,\nabla_XE_2)=-g(\nabla_XE_1,E_2)$ and obtains $\nabla_XE_1=-\omega_{\mathrm{std}}(X)E_2$ and $\nabla_XE_2=\omega_{\mathrm{std}}(X)E_1$. Datar, *Lectures on Riemannian Geometry*, Lecture 2, §2.1, printed p. 11, uses the same form and frame equations. In both sources the sign is opposite to the explicitly defined $\omega$ above.
