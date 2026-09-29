---
id: thm-gauss-bonnet-for-a-geodesic-triangle
kind: theorem
title: Gauss-Bonnet for a geodesic triangle
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - thm-local-gauss-bonnet-for-a-frameable-disk-region
  - def-signed-exterior-angle-at-a-piecewise-smooth-corner
  - def-geodesic-of-an-affine-connection
  - def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve
  - def-regular-oriented-surface-region-with-piecewise-smooth-boundary
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
      locator: "Chapter 9, printed pp. 156-172 (PDF pp. 173-188); Theorem 9.3 and its geodesic-triangle consequence."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Theorem 2.0.1, printed pp. 10-13 (PDF pp. 17-20)."
---

## Statement

Assume the axiom of choice. Let $(M,g,J)$ be an oriented Riemannian surface and let $T\subseteq M$ be a
compact regular oriented disk region with exactly three vertices whose boundary
is the cyclic concatenation of three regular $C^2$ embedded geodesic segments
of the interior metric; at each vertex the incoming and outgoing one-sided unit
tangents are not antipodal. Suppose that a neighbourhood of $T$ carries a
smooth positive orthonormal frame and that $T$ is positively oriented as a disk
region. If $\alpha,\beta,\gamma\in(0,2\pi)$ are the interior sector angles at
the three vertices, then

$$\int_TK\,dA=\alpha+\beta+\gamma-\pi .$$

The boundary orientation is the outward-normal-first orientation of
[[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]], and no
claim is made about the existence of such a triangle on a general surface.

## Facts & Assumptions

**Given:** Full AC through the local disk Gauss–Bonnet supplier ([[def-axiom-of-choice]]); An oriented Riemannian surface, a positively oriented compact geodesic triangular disk region with ordinary corners, contained in a frameable neighbourhood.

[F1] For a positively oriented compact regular disk region with ordinary corners carrying a smooth positive orthonormal frame on a neighbourhood, $\int_DK\,dA+\int_{\partial D}k_g\,ds+\sum_j\alpha_j=2\pi$ ([[thm-local-gauss-bonnet-for-a-frameable-disk-region]]).

[F2] An affinely parametrized geodesic segment has $\nabla_TT=0$ along its interior ([[def-geodesic-of-an-affine-connection]]).

[F3] The signed geodesic curvature is the scalar with covariant acceleration $A_\gamma=k_g\,JT$, so $k_g=0$ wherever $A_\gamma=0$ ([[def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve]]).

[F4] At a positively oriented boundary corner with interior sector angle $\beta\in(0,2\pi)$, the signed exterior angle is $\alpha=\pi-\beta$ ([[def-signed-exterior-angle-at-a-piecewise-smooth-corner]]).

## Proof

**Proof technique:** insert the vanishing geodesic curvatures and the exterior angle identities into the frameable disk formula.

1.1 Each of the three sides of $T$ admits a regular $C^2$ geodesic parametrization whose interior is affinely parametrized, so its covariant acceleration vanishes identically on the side by [F2]; therefore its signed geodesic curvature vanishes identically on that side by [F3]. [F2, F3, given]

1.2 The hypotheses make $T$ a compact regular oriented disk region with ordinary corners in a frameable neighbourhood, so [F1] applies and gives $\int_TK\,dA+\int_{\partial T}k_g\,ds+\alpha_1+\alpha_2+\alpha_3=2\pi$, where the $\alpha_j$ are the signed exterior angles at the three vertices. [F1, given]

1.3 Each vertex has interior sector angle in $(0,2\pi)$ by the regular-region hypothesis, so [F4] identifies its exterior angle with $\pi$ minus the interior angle: writing the interior angles as $\alpha,\beta,\gamma$, the three exterior angles are $\pi-\alpha$, $\pi-\beta$, $\pi-\gamma$. [F4, given]

2.1 The boundary integral in step 1.2 vanishes by step 1.1, so $2\pi=\int_TK\,dA+(\pi-\alpha)+(\pi-\beta)+(\pi-\gamma)$ and hence $\int_TK\,dA=\alpha+\beta+\gamma-\pi$. [F1, step 1.1, step 1.3, algebra] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, Theorem 9.3, printed pp. 165-167, gives the local formula for a curved polygon, of which the geodesic triangle with vanishing boundary curvature is the special case computed here; Datar, *Lectures on Riemannian Geometry*, Lecture 2, Theorem 2.0.1, printed pp. 10-13, states the same computation. The identification of the corner jumps with $\pi$ minus the interior angles is the library definition [[def-signed-exterior-angle-at-a-piecewise-smooth-corner]], and the vanishing of $k_g$ along geodesics is the library definition [[def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve]] together with [[def-geodesic-of-an-affine-connection]].
