---
id: ex-parallel-transport-on-the-round-sphere-along-the-equator
kind: example
title: "Parallel transport on the round sphere along the equator"
status: published
origin: pipeline
deps: ["thm-fundamental-theorem-of-riemannian-geometry","prop-local-frame-formula-for-covariant-differentiation-along-a-curve","thm-existence-and-uniqueness-of-parallel-sections","def-riemannian-metric-and-riemannian-manifold","def-lie-bracket-of-smooth-vector-fields"]
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

## Example

On the unit round sphere $S^2$, the Levi–Civita derivative is $\nabla_XY=D_XY+\langle X,Y\rangle p$, where $p$ is the position vector and $D_XY$ differentiates the three ambient component functions of the tangent field $Y$. Along the equator $\gamma(t)=(\cos t,\sin t,0)$, the fields $T(t)=(-\sin t,\cos t,0)$ and $N(t)=(0,0,1)$ are parallel. Thus transport around $0\leq t\leq2\pi$ is the identity.

## Facts & Assumptions

**Given:** The unit sphere with its induced metric and the specified equator.

[F1] A smooth positive-definite symmetric covariant two-tensor is a Riemannian metric ([[def-riemannian-metric-and-riemannian-manifold]]).

[F3] A metric-compatible torsion-free affine connection is the unique Levi–Civita connection ([[thm-fundamental-theorem-of-riemannian-geometry]]).

[F4] The bracket acts on scalar functions by $[X,Y]h=X(Yh)-Y(Xh)$ ([[def-lie-bracket-of-smooth-vector-fields]]).

[F5] Along-curve differentiation obeys the coefficient formula and parallel initial-value solutions are unique ([[prop-local-frame-formula-for-covariant-differentiation-along-a-curve]], [[thm-existence-and-uniqueness-of-parallel-sections]]).

## Verification

1.1 For completeness the sphere's local geometry is supplied here. On each of its six open coordinate hemispheres, projection onto the other two coordinates has inverse obtained by inserting the chosen-sign function $\sqrt{1-u^2-v^2}$ on the open unit disk. These smooth inverse graphs cover the sphere and their overlapping coordinates are restrictions of smooth projections and graph maps. Their differentials identify tangent vectors with the plane $p^\perp$: differentiation of $\langle p,p\rangle=1$ gives inclusion, and the graph differential is injective from a two-dimensional domain into the two-dimensional plane. The Euclidean product restricted to that plane is positive definite, and in each graph its coefficients are dot products of the two smooth differential columns. It therefore defines the stated smooth round metric by [F1]. [F1, given]

2.1 Differentiating $\langle Y,p\rangle=0$ gives $\langle D_XY,p\rangle=-\langle Y,X\rangle$, so $D_XY+\langle X,Y\rangle p$ is tangent by step 1.1. This formula is smooth, real-linear, function-linear in $X$ and obeys $\nabla_X(fY)=X(f)Y+f\nabla_XY$ by the component product rule; hence it is an affine connection. The normal correction is orthogonal to every tangent $Z$, and differentiation of the Euclidean product gives $X\langle Y,Z\rangle=\langle\nabla_XY,Z\rangle+\langle Y,\nabla_XZ\rangle$. Finally, if $p^a$ are the three restricted ambient coordinate functions, then $Y^a=Y(p^a)$ and $(D_XY-D_YX)^a=X(Y(p^a))-Y(X(p^a))=[X,Y](p^a)$ by [F4]. The symmetric normal terms cancel, proving torsion zero. Thus [F3] identifies this connection with Levi–Civita. [F3, F4, step 1.1]

3.1 For an arbitrary tangent field $V$ along a curve, the formula in step 2.1 gives $D_t^{\nabla}V=V'+\langle\dot\gamma,V\rangle\gamma$: in any local tangent frame expand $V=\sum_av^ae_a(\gamma)$ and apply [F5] and the ordinary product rule to each ambient component. This derives the formula for arbitrary along-curve fields, without requiring an ambient extension of $V$. On the equator, $T'= -\gamma$ and $\langle\dot\gamma,T\rangle=1$, so $D_t^{\nabla}T=0$. Also $N'=0$ and $\langle\dot\gamma,N\rangle=0$, so $D_t^{\nabla}N=0$. [F5, step 2.1]

4.1 The vectors $T,N$ form an orthonormal tangent basis at each time. For initial vector $aT(0)+bN(0)$, the field $aT(t)+bN(t)$ is parallel, and uniqueness in [F5] makes it the transported field. At $t=2\pi$ both basis vectors equal their initial values, proving identity transport, including the zero vector. The same formula gives identity on a singleton interval and handles any number of whole equatorial turns. All data are explicit and no global tangent frame on the sphere is assumed. [F5, step 3.1] ∎
