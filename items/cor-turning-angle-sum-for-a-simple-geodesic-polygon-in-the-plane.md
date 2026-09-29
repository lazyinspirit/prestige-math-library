---
id: cor-turning-angle-sum-for-a-simple-geodesic-polygon-in-the-plane
kind: corollary
title: Exterior-angle sum of a planar polygon
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - thm-hopf-turning-tangent-theorem
  - def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve
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
      locator: "Chapter 9, §Some Plane Geometry, printed pp. 156–161 (PDF pp. 173–178), Corollary 9.6 and the surrounding plane-turning discussion: total signed curvature plus exterior angles of a positively oriented simple closed piecewise smooth plane curve is $2\\pi$. The straight-sided specialization below is derived from the library's Hopf item."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 1, §1.3, Theorem 1.3.2 (Hopf's Umlaufsatz), printed pp. 6–8 (PDF pp. 13–15): rotation index one for a positively oriented simple closed plane curve. The zero-curvature specialization for straight sides is computed locally here."
---

## Statement

Let $P\subseteq\mathbb R^2$ be a positively oriented simple Euclidean polygon: a
simple closed piecewise linear regular plane curve with finitely many ordinary
vertices, parametrized so that the bounded disk region it bounds lies on its
left, and with matching unit tangents at the identified endpoint. Then its
signed exterior angles $\alpha_1,\dots,\alpha_m$, one at each vertex, satisfy
$$\sum_{j=1}^{m}\alpha_j=2\pi .$$
Each $\alpha_j$ is the principal signed turn in $(-\pi,\pi)$ from the incoming
to the outgoing unit tangent; a straight vertex contributes $\alpha_j=0$.

## Facts & Assumptions

**Given:** A positively oriented simple Euclidean polygon $P$ with finitely many ordinary vertices, bounding a supplied disk region, with matching unit tangents at the identified endpoint and arclength parametrization on every side.

[F1] A positively oriented simple closed piecewise $C^2$ regular plane curve that bounds a supplied disk region and has finitely many ordinary corners satisfies $\int_\gamma k_{\mathrm{plane}}\,ds+\sum_j\alpha_j=2\pi$ ([[thm-hopf-turning-tangent-theorem]]).

[F2] Signed geodesic curvature is defined by $A_\gamma=k_gJT$ and $k_g=g(A_\gamma,JT)$ for the positive quarter-turn $J$ ([[def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve]]).

## Proof

**Proof technique:** specialise Hopf turning to a curve whose smooth pieces are straight.

1.1 Each side of $P$ is a straight segment and admits a unit-speed linear parametrization $s\mapsto p_j+s\,u_j$ with $|u_j|=1$. Its ordinary second derivative vanishes, so the covariant acceleration of the ambient Euclidean connection vanishes, and [F2] gives $k_{\mathrm{plane}}=0$ along every smooth piece. [F2, given, algebra]

1.2 The polygon is a simple closed piecewise $C^2$ regular plane curve with finitely many ordinary corners, namely its vertices, and it bounds the supplied disk region with matching endpoint tangents. Hence [F1] applies to $P$, and its signed exterior angles are the principal turns of [F1]. [F1, given]

2.1 The curvature integral in [F1] vanishes by step 1.1, so $\sum_j\alpha_j=2\pi$. A straight vertex has incoming and outgoing tangents equal, so its principal turn is $0$ and contributes nothing; the identity is therefore a statement about the genuine turns only. [F1, step 1.1, algebra] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, §“Some Plane Geometry,” Corollary 9.6, printed pp. 156–161, records that the total signed curvature plus exterior angles of a positively oriented simple closed piecewise smooth plane curve equals $2\pi$; Datar, *Lectures on Riemannian Geometry*, Lecture 1, §1.3, Theorem 1.3.2, proves the equivalent rotation-index statement. The specialization to straight sides uses only the library's definition of signed geodesic curvature of a straight unit-speed segment and the already authored Hopf turning theorem.
