---
id: cor-total-gaussian-curvature-is-independent-of-the-riemannian-metric
kind: corollary
title: Metric independence of total Gaussian curvature
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces
  - thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined
  - def-countable-choice
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, Theorem 9.7 and Problem 9-5, printed pp. 167-172 (PDF pp. 183-188): the total curvature equals 2 pi times the Euler characteristic, a topological invariant of the surface."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Theorem 2.2.4, printed pp. 14-15 (PDF pp. 21-22): the same curvature/Euler identity, whose right-hand side does not depend on the metric."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the axiom of choice.
Let $M$ be a closed oriented smooth surface and let $g_0,g_1$ be two smooth
Riemannian metrics on $M$. Then
$$\int_MK_{g_0}\,dA_{g_0}=\int_MK_{g_1}\,dA_{g_1}=2\pi\chi(M),$$
where $K_{g_i}$ is the Gaussian curvature of $g_i$, $dA_{g_i}$ the area form
of the orientation, and $\chi(M)$ the Euler characteristic of
[[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]].
For $M=\varnothing$ the identity reads $0=0$. If $\partial M\ne\varnothing$ the
metric-independent quantity is the full Gauss-Bonnet sum including the
geodesic-curvature boundary term, so the closedness hypothesis is not
decorative and the boundary case is not asserted here.

## Facts & Assumptions

**Given:** A closed oriented smooth surface $M$ (possibly empty, possibly disconnected) and two smooth Riemannian metrics $g_0,g_1$ on $M$.

[A1] full AC is assumed; it is inherited exactly through the two invocations of the global Gauss-Bonnet theorem and is used nowhere else ([[def-axiom-of-choice]]).

[F1] For every closed oriented Riemannian surface $(M,g)$, $\int_MK_g\,dA_g=2\pi\chi(M)$ ([[thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces]]).

[F2] Any two finite face-to-face piecewise $C^2$ curvilinear triangulations of a compact smooth surface have the same $V-E+F$; geodesic triangulations with respect to possibly different smooth Riemannian metrics in particular agree, and the common value $\chi(M)$ is independent of any Riemannian metric used to compute it ([[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]]).

## Proof

**Proof technique:** apply the global identity to each metric and compare the common right-hand side.

1.1 Applying [F1] to $(M,g_0)$ gives $\int_MK_{g_0}\,dA_{g_0}=2\pi\chi(M)$, and applying it to $(M,g_1)$ gives $\int_MK_{g_1}\,dA_{g_1}=2\pi\chi(M)$; the symbol $\chi(M)$ denotes in both cases the common value of [F2], which is independent of the metric. [F1, F2, given]

2.1 Equating the two expressions of step 1.1 gives $\int_MK_{g_0}\,dA_{g_0}=\int_MK_{g_1}\,dA_{g_1}=2\pi\chi(M)$. When $M=\varnothing$, [F2] gives $\chi(\varnothing)=0$ from the empty triangulation and both integrals are $0$. [step 1.1, algebra]

3.1 No new choice is made: full AC entered only through the two applications of the global theorem, once for each metric. [A1, step 2.1] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, Theorem 9.7 (printed pp. 167-172), and Datar, *Lectures on Riemannian Geometry*, Lecture 2, Theorem 2.2.4 (printed pp. 14-15), prove that the total curvature of a closed oriented Riemannian surface equals $2\pi\chi(M)$; since the right-hand side is the metric-independent invariant of [[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]], the total curvature is the same for $g_0$ and $g_1$. The two separate applications are kept explicit rather than treating the identity as automatic in the metric.
