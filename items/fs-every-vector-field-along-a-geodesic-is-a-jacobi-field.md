---
id: fs-every-vector-field-along-a-geodesic-is-a-jacobi-field
kind: false-statement
title: Every vector field along a geodesic is a Jacobi field
status: draft
origin: pipeline
deps:
  - def-jacobi-field
  - prop-christoffel-formula-for-the-levi-civita-connection
  - prop-coordinate-formula-for-the-curvature-tensor
  - def-covariant-derivative-along-a-curve
  - prop-coordinate-geodesic-equation
  - def-christoffel-symbols-of-an-affine-connection
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 5, Geodesics of the Model Spaces, Euclidean Space, printed p.81 (PDF labels P97-98)"
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Example 15.1.3, printed p.113 (PDF label P121); Definition 21.2.3, printed p.157 (PDF label P164)"
---

## Statement

**False claim:** every smooth vector field along every affinely parametrized
geodesic in a Riemannian manifold is a Jacobi field.

## Facts & Assumptions

**Given:** To refute this universal claim, it suffices to give one smooth
vector field along one affinely parametrized geodesic whose Jacobi residual is
nonzero.

[F1] A smooth field $J$ along an affinely parametrized geodesic is Jacobi only
if it satisfies
$$D_t^2J+R(J,\dot\gamma)\dot\gamma=0.$$
([[def-jacobi-field]])

[F2] In coordinates, the Levi-Civita symbols are
$$\Gamma^k{}_{ij}=\tfrac12\sum_\ell g^{k\ell}(\partial_i g_{j\ell}+\partial_j g_{i\ell}-\partial_\ell g_{ij}).$$
([[prop-christoffel-formula-for-the-levi-civita-connection]])

[F3] The curvature components are
$$R^\ell{}_{kij}=\partial_i\Gamma^\ell{}_{jk}-\partial_j\Gamma^\ell{}_{ik}+\Gamma^m{}_{jk}\Gamma^\ell{}_{im}-\Gamma^m{}_{ik}\Gamma^\ell{}_{jm}.$$
([[prop-coordinate-formula-for-the-curvature-tensor]])

[F4] In coordinates, a curve is a geodesic exactly when
$$\ddot x^k+\Gamma^k{}_{ij}(x)\dot x^i\dot x^j=0.$$
([[prop-coordinate-geodesic-equation]])

[F5] Covariant differentiation along a curve is the pullback connection
$$D_tV=(\gamma^*\nabla)_{\partial/\partial t}V.$$
([[def-covariant-derivative-along-a-curve]])

[F6] In a coordinate frame, the Christoffel symbols are the connection
coefficients:
$$\nabla_{\partial_i}\partial_j=\sum_k\Gamma^k{}_{ij}\partial_k.$$
([[def-christoffel-symbols-of-an-affine-connection]])

## Refutation

1.1 Choose the Euclidean line, $M=\mathbb R$, $g=dx^2$, $I=[0,1]$, $\gamma(t)=t$, and $J(t)=t^2\partial_x|_{\gamma(t)}$. [construct, given]
The field is smooth up to both endpoints, and the interval is nondegenerate.

2.1 Verify $\gamma(t)=t$ is an affinely parametrized geodesic from the coordinate equations. [step 1.1, F2, F4, F6, algebra]
Indeed $g_{11}=1$, so [F2] gives $\Gamma^1{}_{11}=0$. By [F6],
$\nabla_{\partial_x}\partial_x=0$; [F4] then reduces the geodesic equation
for $\gamma(t)=t$ to $\ddot\gamma=0$. Thus $\gamma$ is a nonconstant,
affinely parametrized geodesic.

2.2 Compute that the curvature component vanishes, so the Jacobi curvature term is zero. [step 1.1, F2, F3, algebra]
There is only one curvature component. In [F3] its two derivative terms
cancel because $i=j=1$, and its two product terms cancel for the same reason;
indeed all Christoffel symbols are zero by [F2]. Hence $R^1{}_{111}=0$ and
$R(J,\dot\gamma)\dot\gamma=0$.

2.3 Define instead $\bar J(t)=t^2\partial_x|_0$ along the constant geodesic $\bar\gamma(t)=0$. [step 1.1, F1, F2, F3, F4, F5, F6, algebra]
Here [F2]-[F3] again give $\Gamma=0$ and $R=0$, [F4] says $\bar\gamma$ is
geodesic, and [F5]-[F6] give $D_t^2\bar J=2\partial_x|_0\ne0$.
Thus [F1] shows $\bar J$ is not Jacobi along $\bar\gamma$.

3.1 Compute the nonzero Jacobi residual for $J$ by pullback covariant differentiation. [step 2.1, step 2.2, F1, F5, F6, algebra]
From [F5] and [F6], $D_t\partial_x=0$ along $\gamma$. The product rule
therefore gives $D_tJ=2t\partial_x$ and $D_t^2J=2\partial_x$. By step 2.2,
$$D_t^2J+R(J,\dot\gamma)\dot\gamma=2\partial_x\ne0,$$
so [F1] shows $J$ is not a Jacobi field.

4.1 The nonzero residual in step 3.1 refutes the universal claim. [step 1.1, step 2.3, step 3.1, F1, F5, given]
In dimension zero every field along a geodesic is zero, and on the empty
manifold there is no geodesic; neither case changes the one-dimensional
counterexample. The zero field itself satisfies the Jacobi equation, but the
specified field does not. The residual is nonzero throughout $[0,1]$,
including its one-sided endpoint values. The examples are fixed data, require
no choice, and make no if-and-only-if claim. ∎
