---
id: ex-spherical-geodesic-triangle-area-excess
kind: example
title: Area excess of a spherical geodesic triangle
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - thm-gauss-bonnet-for-a-geodesic-triangle
  - thm-gaussian-curvature-structure-equation
  - cor-gauss-bonnet-for-a-geodesic-polygon
  - def-signed-exterior-angle-at-a-piecewise-smooth-corner
  - def-regular-oriented-surface-region-with-piecewise-smooth-boundary
  - prop-christoffel-formula-for-the-levi-civita-connection
  - prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form
  - def-riemannian-volume-form-on-an-oriented-manifold
  - ex-great-circles-as-round-sphere-geodesics
  - ex-the-round-metric-on-the-sphere-as-an-induced-metric
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, printed pp. 156-172: the round sphere of radius R has constant curvature R^{-2}, and Theorem 9.3 gives the angle excess equals the curvature integral."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Theorem 2.0.1, printed pp. 10-13, and the spherical example with constant curvature R^{-2}."
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). On the round sphere of radius $R$, a simple geodesic triangle of area $A$ has
angle sum $\pi+A/R^2$. The spherical octant is such a triangle, with
$A=\pi R^2/2$ and three right angles.

## Facts & Assumptions

**Given:** The Axiom of Choice, The round sphere $S^2_R$ of radius $R$ with its induced metric and the outward orientation, and a simple geodesic triangle $T\subseteq S^2_R$ of area $A$: a compact regular oriented disk region with ordinary corners whose boundary is the cyclic concatenation of three regular $C^2$ geodesic segments.

[F1] For an oriented Riemannian surface with a smooth positive orthonormal frame $(E_1,E_2)$ on an open set and connection form $\omega$, one has $d\omega=-K\,dA$, where $K$ is the sectional curvature of the frame plane and $dA$ the Riemannian volume form of the orientation ([[thm-gaussian-curvature-structure-equation]]).

[F2] In coordinates the Levi-Civita symbols of a Riemannian metric are $\Gamma^k{}_{ij}=\tfrac12\sum_\ell g^{k\ell}(\partial_ig_{j\ell}+\partial_jg_{i\ell}-\partial_\ell g_{ij})$ ([[prop-christoffel-formula-for-the-levi-civita-connection]]).

[F3] The Riemannian volume form is the unique positive unit top form for the specified orientation; for a positive orthonormal coframe $(e^1,e^2)$ of a surface, $dA=e^1\wedge e^2$ ([[prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form]], [[def-riemannian-volume-form-on-an-oriented-manifold]]).

[F4] Every constant-speed parametrization of a great circle of the round sphere is an affinely parametrized geodesic, and every nonconstant geodesic has a great-circle arc as image ([[ex-great-circles-as-round-sphere-geodesics]]).

[F5] The round metric on $S^2$ is induced by the Euclidean inclusion, so the intrinsic inner product of tangent vectors at a point equals their ambient Euclidean inner product ([[ex-the-round-metric-on-the-sphere-as-an-induced-metric]]).

[F6] For a positively oriented compact regular disk region whose boundary is a cyclic concatenation of finitely many regular $C^2$ geodesic segments with ordinary corners and no other corners, $\int_DK\,dA+\sum_j\alpha_j=2\pi$, the $\alpha_j$ being the signed exterior angles ([[cor-gauss-bonnet-for-a-geodesic-polygon]]).

[F7] At a positively oriented ordinary corner with interior sector angle $\beta\in(0,2\pi)$, the signed exterior angle is $\alpha=\pi-\beta$ ([[def-signed-exterior-angle-at-a-piecewise-smooth-corner]]).

[F8] The Axiom of Choice is the choice-function principle ([[def-axiom-of-choice]]). It licenses the AC-qualified geodesic formula used at step 1.2.

## Verification

**Proof technique:** compute the constant curvature of the radius-$R$ round metric in spherical coordinates by the structure equation, insert it into the geodesic-polygon formula, and evaluate the octant.

1.1 Use the chart $X(\theta,\varphi)=(R\sin\theta\cos\varphi,R\sin\theta\sin\varphi,R\cos\theta)$ with $0<\theta<\pi$ and $0<\varphi<2\pi$, positively oriented. The induced round metric is $g=R^2d\theta^2+R^2\sin^2\theta\,d\varphi^2$, so $(\partial_\theta,\partial_\varphi)$ has $g_{\theta\theta}=R^2$, $g_{\varphi\varphi}=R^2\sin^2\theta$ and $g_{\theta\varphi}=0$; the fields $e_1=(1/R)\partial_\theta$ and $e_2=(1/(R\sin\theta))\partial_\varphi$ therefore form a smooth positive orthonormal frame on the chart. [F5, given]

1.2 The triangle $T$ is a compact regular oriented disk region with ordinary corners whose boundary is the cyclic concatenation of the three geodesic sides, so the geodesic-polygon formula [F6, F8] applies with the outward-normal-first boundary orientation: $\int_TK\,dA+\alpha_1+\alpha_2+\alpha_3=2\pi$ for the signed exterior angles. [F6, given]

2.1 Since all $x^i$-independent coefficients satisfy $\partial_\varphi g_{\theta\theta}=\partial_\varphi g_{\varphi\varphi}=0$, and $\partial_\theta g_{\varphi\varphi}=2R^2\sin\theta\cos\theta$, $\partial_\theta g_{\theta\theta}=0$, formula [F2] gives $\Gamma^\theta{}_{\varphi\varphi}=-R^2\sin\theta\cos\theta\cdot R^{-2}=-\sin\theta\cos\theta$ and $\Gamma^\varphi{}_{\theta\varphi}=\Gamma^\varphi{}_{\varphi\theta}=\tfrac12(R^2\sin^2\theta)^{-1}\cdot2R^2\sin\theta\cos\theta=\cot\theta$, with all remaining symbols zero. [F2, step 1.1, algebra]

3.1 Consequently $\nabla_{\partial_\varphi}\partial_\theta=\cot\theta\,\partial_\varphi$, while $\nabla_{\partial_\theta}\partial_\theta$ has vanishing $\theta$- and $\varphi$-components; with $e_1=(1/R)\partial_\theta$ and $e_2=(1/(R\sin\theta))\partial_\varphi$ this gives $\nabla_{e_1}e_1=0$ and $\nabla_{e_2}e_1=(\cot\theta/(R^2\sin\theta))\partial_\varphi=(\cot\theta/R)e_2$. Hence the connection form satisfies $\omega(e_1)=0$ and $\omega(e_2)=\cot\theta/R$, so $\omega=\cos\theta\,d\varphi$. [step 2.1, algebra]

4.1 Therefore $d\omega=-\sin\theta\,d\theta\wedge d\varphi$, while the dual coframe $e^1=R\,d\theta$, $e^2=R\sin\theta\,d\varphi$ has $e^1\wedge e^2=R^2\sin\theta\,d\theta\wedge d\varphi$, which is $dA$ by [F3]. So $d\omega=-(1/R^2)\,dA$ on the chart. [F3, step 3.1, algebra]

5.1 The structure equation [F1] applied to the frame of step 1.1 gives $d\omega=-K\,dA$, so step 4.1 yields $K=1/R^2$ on the chart; since the rotation axis of the construction is arbitrary and the sphere is covered by such charts, $K\equiv 1/R^2$ on $S^2_R$ by smoothness. [F1, step 1.1, step 4.1, algebra]

6.1 Inserting $K\equiv 1/R^2$ into step 1.2 gives $A/R^2+\alpha_1+\alpha_2+\alpha_3=2\pi$, and each exterior angle is $\alpha_j=\pi-\beta_j$ by [F7] for the interior angles $\beta_j\in(0,2\pi)$; hence $\beta_1+\beta_2+\beta_3=3\pi-(\alpha_1+\alpha_2+\alpha_3)=\pi+A/R^2$. [F7, step 1.2, step 5.1, algebra]

7.1 The octant $O=S^2_R\cap\{x_1\geq0,x_2\geq0,x_3\geq0\}$ is a simple geodesic triangle: its boundary consists of the three great-circle arcs joining the scaled basis vectors $Re_1,Re_2,Re_3$, which are geodesics by [F4], and each vertex has ordinary non-antipodal tangents. Its area is $A=\int_0^{\pi/2}\!\int_0^{\pi/2}R^2\sin\theta\,d\theta\,d\varphi=R^2\cdot\tfrac{\pi}{2}=\pi R^2/2$ in the chart of step 1.1, and its three interior angles are right angles: at each vertex the two inward boundary directions are two distinct standard basis vectors, which are orthonormal in the ambient inner product and hence, by [F5], orthonormal for the induced metric. So $3\pi/2=\pi+A/R^2$ holds for $O$, exhibiting a genuine spherical geodesic triangle whose angle sum exceeds $\pi$. [F4, F5, step 1.1, step 6.1, algebra] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, printed pp. 156-172, treats constant-curvature surfaces through the local formula and records the positive-curvature angle excess; Datar, *Lectures on Riemannian Geometry*, Lecture 2, Theorem 2.0.1, gives the same formula. The curvature $R^{-2}$ is computed here from [[thm-gaussian-curvature-structure-equation]] and [[prop-christoffel-formula-for-the-levi-civita-connection]] on the explicit spherical frame, the great-circle geodesics are the published example [[ex-great-circles-as-round-sphere-geodesics]], and the area and right angles of the octant are evaluated directly from the induced round metric of [[ex-the-round-metric-on-the-sphere-as-an-induced-metric]].
