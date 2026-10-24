---
id: cex-omitting-exterior-corner-angles-from-a-geodesic-polygon
kind: counterexample
title: Corner terms are required even in the plane
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - cor-gauss-bonnet-for-a-geodesic-polygon
  - ex-straight-lines-as-euclidean-geodesics
  - def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve
  - def-signed-exterior-angle-at-a-piecewise-smooth-corner
  - thm-gaussian-curvature-structure-equation
  - prop-christoffel-formula-for-the-levi-civita-connection
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
      locator: "Chapter 9, printed pp. 162-167 (PDF pp. 178-183): the boundary term of Theorem 9.3 carries the corner angle sum, as the Euclidean polygon example shows."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Theorem 2.0.1, printed pp. 10-13: the local formula includes the exterior angle jumps at the corners."
---

## Statement refuted

Assume the Axiom of Choice ([[def-axiom-of-choice]]). False: for a positively oriented geodesic polygonal disk region the exterior
corner angles may be omitted, that is
$\int_DK\,dA+\int_{\partial D}k_g\,ds=2\pi$. The unit square in the Euclidean
plane has $K\equiv0$ and $k_g=0$ along every side, so the corner-free expression
would read $0=2\pi$; with the four right-angle corners the complete formula
gives $\sum_j\alpha_j=4\cdot\pi/2=2\pi$.

## Facts & Assumptions

**Given:** The Axiom of Choice, The claimed corner-free formula for positively oriented geodesic polygonal disk regions, to be refuted by the unit square in the Euclidean plane.

[F1] For a positively oriented compact regular disk region whose boundary is a cyclic concatenation of finitely many regular $C^2$ geodesic segments with ordinary corners and no other corners, $\int_DK\,dA+\sum_j\alpha_j=2\pi$ ([[cor-gauss-bonnet-for-a-geodesic-polygon]]).

[F2] On Euclidean $\mathbb R^n$ with its Levi-Civita connection every affinely parametrized geodesic has the form $\gamma(t)=p+tv$, and every such curve is a geodesic ([[ex-straight-lines-as-euclidean-geodesics]]).

[F3] The signed geodesic curvature of a unit-speed curve is the scalar $k_g$ with covariant acceleration $A_\gamma=k_g\,JT$, so $k_g=0$ wherever the covariant acceleration vanishes ([[def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve]]).

[F4] At a positively oriented ordinary corner with interior sector angle $\beta\in(0,2\pi)$ the signed exterior angle is $\alpha=\pi-\beta$ ([[def-signed-exterior-angle-at-a-piecewise-smooth-corner]]).

[F5] In coordinates the Levi-Civita symbols of a Riemannian metric are $\Gamma^k{}_{ij}=\tfrac12\sum_\ell g^{k\ell}(\partial_ig_{j\ell}+\partial_jg_{i\ell}-\partial_\ell g_{ij})$, and for a smooth positive orthonormal frame with connection form $\omega$ one has $d\omega=-K\,dA$ ([[prop-christoffel-formula-for-the-levi-civita-connection]], [[thm-gaussian-curvature-structure-equation]]).

[F6] The Axiom of Choice is the choice-function principle ([[def-axiom-of-choice]]). It licenses the AC-qualified supplier used at step 3.1.

## Proof

**Proof technique:** compute the flat Euclidean metric, its straight geodesic sides and the four right-angle corners, then compare the corner-free and complete formulas.

1.1 Take $D=[0,1]^2\subset\mathbb R^2$ with the Euclidean metric, oriented by the standard frame $(\partial_x,\partial_y)$; this frame is orthonormal and positive. Since the coordinate coefficients of the Euclidean metric are constant, the formula of [F5] gives $\Gamma^k{}_{ij}=0$ for all $i,j,k$, hence $\nabla_{\partial_x}\partial_x=\nabla_{\partial_x}\partial_y=\nabla_{\partial_y}\partial_y=0$ and the connection form of the frame vanishes identically, $d\omega=0$. The structure equation of [F5] then gives $K\equiv0$ on $D$. [F5, given]

1.2 The four sides of $D$ are unit-speed straight segments, so by [F2] each is an affinely parametrized geodesic and its covariant acceleration vanishes; [F3] therefore gives $k_g=0$ along all four sides and $\int_{\partial D}k_g\,ds=0$. At each of the four vertices the interior sector angle is $\beta=\pi/2$, so [F4] gives exterior angle $\alpha=\pi-\pi/2=\pi/2$ and $\sum_j\alpha_j=4\cdot\pi/2=2\pi$. [F2, F3, F4, given]

2.1 With $K\equiv0$ and $\int_{\partial D}k_g\,ds=0$, the corner-free expression would read $\int_DK\,dA+\int_{\partial D}k_g\,ds=0$, which differs from $2\pi$; hence the exterior corner angles cannot be omitted from the boundary value problem. [step 1.1, step 1.2, algebra]

3.1 Under the AC premise [F6], the complete formula [F1] applied to $D$ reads $0+2\pi=2\pi$, which holds; thus the square is a genuine geodesic polygonal disk region for which only the full formula with its corner sum is correct, and the refuted statement is false. [F1, F6, step 1.2, step 2.1, algebra] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, Theorem 9.3 and its discussion, printed pp. 162-167, includes the corner angle sum in the boundary term, and the Euclidean polygon computation shows that it cannot be dropped. Datar, *Lectures on Riemannian Geometry*, Lecture 2, Theorem 2.0.1, printed pp. 10-13, states the same formula with the angle jumps. The flatness used here is computed from [[prop-christoffel-formula-for-the-levi-civita-connection]] and [[thm-gaussian-curvature-structure-equation]] in the constant Euclidean frame, the straight sides are the published example [[ex-straight-lines-as-euclidean-geodesics]], and the corner convention is [[def-signed-exterior-angle-at-a-piecewise-smooth-corner]].
