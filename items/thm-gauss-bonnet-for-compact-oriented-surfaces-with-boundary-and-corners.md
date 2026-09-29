---
id: thm-gauss-bonnet-for-compact-oriented-surfaces-with-boundary-and-corners
kind: theorem
title: Gauss-Bonnet for compact oriented surface regions with boundary and corners
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - lem-local-gauss-bonnet-sums-over-a-supplied-finite-geodesic-triangulation
  - thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined
  - thm-finite-curvilinear-triangulation-of-a-compact-riemannian-surface
  - lem-a-compact-surface-metric-extends-across-its-boundary
  - def-regular-oriented-surface-region-with-piecewise-smooth-boundary
  - thm-the-double-has-a-well-defined-smooth-structure
  - thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold
  - thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form
  - def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
  - def-interior-point-boundary-point-interior-and-boundary-of-a-manifold
  - def-countable-choice
justified_by: []
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, printed pp. 156-172 (PDF pp. 173-188): the local formula of Theorem 9.3 with boundary and corner terms, the global summation of Theorem 9.7, and Problem 9-5 for the finite triangulation."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lectures 1-2, printed pp. 3-15 (PDF pp. 10-22): Theorem 1.3.2, Theorem 2.0.1 with the corner terms, and the global summation of Theorem 2.2.4."
---

## Statement

Assume the axiom of choice. Let $(M,g)$ be a compact oriented Riemannian
surface presented in one of the following ways.

(a) $M$ is a compact regular oriented surface region with finitely many
ordinary corners inside an oriented boundaryless Riemannian surface
$(\Sigma,h)$, in the sense of
[[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]], and
$g$ is the restriction of $h$ to $M$.

(b) $M$ is a compact oriented smooth surface with smooth boundary, $g$ is a
Riemannian metric on $M$, and its metric-extension open neighbourhood in the
smooth double is supplied
([[lem-a-compact-surface-metric-extends-across-its-boundary]]).

Then
$$\int_MK\,dA+\int_{\partial M}k_g\,ds+\sum_j\alpha_j=2\pi\,\chi(M),$$
where the boundary has the outward-normal-first orientation, $k_g$ is its
signed geodesic curvature, and $\alpha_j$ are the signed exterior angles at
the prescribed corners. In (b) the corner sum is empty; when the boundary is
empty both boundary terms are omitted. For a smooth surface $\chi(M)$ is the
triangulation-independent Euler characteristic of
[[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]].
For a cornered region it is the singular-homology Euler characteristic, equal
to $V-E+F$ of the finite triangular CW data supplied by
[[thm-finite-curvilinear-triangulation-of-a-compact-riemannian-surface]].

## Facts & Assumptions

**Given:** Either presentation of the compact oriented Riemannian surface in the Statement.

[A1] Full AC is assumed through both the curvilinear triangulation supplier [F1] and the local Gauss–Bonnet summation supplier [F3], including their arbitrary-Jordan-curve inputs; the metric extension [F2] and smooth-double construction [F5] need only its countable-choice consequence ([[def-axiom-of-choice]]).

[F1] The region has finite regular curvilinear triangular face, edge, and link data preserving its boundary; in the smooth-boundary case these form a curvilinear triangulation, and in the cornered case their finite regular CW count equals the homology Euler characteristic ([[thm-finite-curvilinear-triangulation-of-a-compact-riemannian-surface]]).

[F2] A metric on a compact smooth-boundary surface extends to an open neighbourhood of its labelled copy in the smooth double ([[lem-a-compact-surface-metric-extends-across-its-boundary]]).

[F3] Assuming full AC, for a supplied oriented finite face-to-face triangular decomposition with frameable regular disk faces and ordinary corners, local Gauss–Bonnet sums to the curvature integral, boundary curvature, and original corner angles, with right side $2\pi(V-E+F)$ ([[lem-local-gauss-bonnet-sums-over-a-supplied-finite-geodesic-triangulation]]).

[F4] For smooth compact surfaces the count of any finite curvilinear triangulation is the intrinsic $\chi(M)$ ([[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]]).

[F5] The smooth double has signed collar seam charts $(y,t)$ whose transitions preserve the normal coordinate $t$; each labelled copy is a closed smooth submanifold with boundary ([[thm-the-double-has-a-well-defined-smooth-structure]]).

[F6] The supplied regular-region boundary has outward-normal-first orientation and its ordinary corners have well-defined signed exterior angles ([[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]]).

## Proof

**Proof technique:** use finite curvilinear triangles, sum the local formula, and identify the cell count; orient the metric-extended double with compatible collar charts in the smooth-boundary presentation.

1.1 In presentation (a), [F1] gives finite face-to-face triangular closed disks of $M$ in frameable ambient charts, with its original boundary and corners retained. Orient every face by the ambient orientation. Their regular edges and ordinary sectors satisfy [F3], which yields $\int_MK\,dA+\int_{\partial M}k_g\,ds+\sum_j\alpha_j=2\pi(V-E+F)$. The finite regular CW conclusion of [F1] identifies $V-E+F$ with the homology Euler characteristic of the cornered region. [A1, F1, F3, F6, given]

1.2 In presentation (b), let $M_+$ be the labelled copy in the metric-extended double neighbourhood $\widehat M$ of [F2]. Choose positive boundary collar coordinates $(y,t)$ on $M_+$ with $t\ge0$ and positive tangent coordinate $y$ chosen consistently with the given orientation and the outward-normal-first convention. The seam transitions of [F5] preserve $t$, and the transitions in $y$ have positive Jacobian because the boundary orientation is fixed. Thus these seam charts orient a smaller open neighbourhood of the seam on both sides. On the interior of $M_+$ this orientation agrees with the given one; adjoining its given interior charts gives an oriented open ambient neighbourhood of $M_+$ with the extended metric. This uses chart transition signs, not independent extensions of a differential form across the seam. [F2, F5, F6, given]

2.1 The labelled copy $M_+$ is the closure of its interior in that oriented ambient neighbourhood, and its smooth boundary has ordinary half-disk charts and no corners. Thus it is a regular oriented region of type (a). Apply step 1.1 with empty corner sum. The supplied metric restricts to $g$, so its curvature, area form, and boundary geodesic curvature on $M_+$ are those of $(M,g)$. The finite triangular data are a curvilinear triangulation in the smooth-boundary sense, and [F4] identifies its count with $\chi(M)$. This gives the claimed identity in (b). Full AC licenses both the finite triangulation [F1] and the local summation [F3]; its countable-choice consequence licenses [F2] and [F5], as stated in [A1]. [A1, F1, F2, F3, F4, step 1.1, step 1.2] ∎

## Source locator

Lee, *Riemannian Manifolds*, Chapter 9, Theorems 9.3 and 9.7, printed pp. 162–172, gives the local formula and its finite-face summation. Datar, *Lectures on Riemannian Geometry*, Lecture 2, Theorems 2.0.1 and 2.2.4, gives the same classical identity. The boundary-compatible finite curvilinear triangulation and its cornered CW count are supplied by [[thm-finite-curvilinear-triangulation-of-a-compact-riemannian-surface]]; no prescribed-boundary geodesic triangulation is used.
