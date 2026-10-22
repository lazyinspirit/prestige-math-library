---
id: lem-nrqmx-c1-stokes-compact-surface
kind: lemma
domain: mathematics
library: mathematics
title: Stokes for C1 one-forms on compact surface regions
status: draft
origin: pipeline
dependency_level: 0
deps:
  - def-countable-choice
  - def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
  - def-c-r-and-smooth-maps-between-smooth-manifolds
  - thm-euclidean-inverse-function-theorem
  - thm-heine-borel-rn
  - thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary
  - def-induced-boundary-orientation
  - cor-change-of-variables-for-compactly-supported-functions
  - thm-multidimensional-integral-properties
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-heine-cantor-metric
  - thm-ftc-second-part
dependency_roles:
  def-countable-choice: mathematical-premise
  def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary: mathematical-premise
  def-induced-boundary-orientation: mathematical-premise
  cor-change-of-variables-for-compactly-supported-functions: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  thm-ftc-second-part: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed., §16, Theorem 16.11 and Theorem 16.25
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: "Theorem 16.11, pp. 411–414, proves smooth Stokes by half-space calculation and partition localization; Theorem 16.25, pp. 419–420, treats corners. The local C1 formula for regular piecewise-C2 boundaries is proved here by boundary straightening and direct coordinate integration."
---

## Statement

Assume Countable Choice. Let $M$ be a compact oriented smooth surface with boundary. Let $D\subseteq M$ be a compact oriented region with the following local regularity: its interior points have disk charts, its smooth boundary points have half-disk charts, and each of its finitely many corners has a chart in which it is a quadrant or the complement of an open quadrant. Its boundary is a finite union of embedded $C^2$ arcs with pairwise disjoint interiors; each arc is the image of an injective $C^2$ parametrization with nonzero derivative, including one-sided derivatives at endpoints. Arcs meet only at their common endpoints, and at every corner their one-sided tangent vectors are linearly independent. Let $\eta=a\,dx+b\,dy$ be a complex-valued $C^1$ one-form on a neighborhood of $D$ in each local chart, where $C^1$ means its coefficients and first partial derivatives are continuous up to the boundary. Define $d\eta=(\partial_xb-\partial_ya)\,dx\wedge dy$ in each chart; the chain rule and symmetry of second derivatives make this expression coordinate-independent. Orient every open boundary arc outward-normal-first: $(\nu_{\rm out},\tau)$ is a positive basis of $TD$, where $\nu_{\rm out}$ is outward and $\tau$ is the positive boundary tangent. Integrals over $D$ use oriented coordinate Riemann integrals, and the boundary integral is the sum of the line integrals over its finitely many oriented arcs. Then
$$\int_D d\eta=\int_{\partial D}\eta.$$

## Facts & Assumptions

**Given:** Countable Choice, the compact oriented surface with boundary $M$, the region $D$ with the stated local models and regular embedded $C^2$ arcs, and the $C^1$ one-form $\eta$ on a neighborhood of $D$.

[A1] Countable Choice is [[def-countable-choice]], the choice principle required by the smooth partition supplier.

[F1] [[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]] and [[def-c-r-and-smooth-maps-between-smooth-manifolds]]: boundary charts take values in a closed half-space, and $C^1$ means that the function and first coordinate partial derivatives extend continuously to its boundary.

[F2] [[thm-heine-borel-rn]]: closed bounded coordinate disks and half-disks in $\mathbb R^2$ are compact.

[F3] [[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]]: under Countable Choice, a finite chart cover of a compact surface with boundary admits a smooth subordinate partition of unity.

[F4] [[cor-change-of-variables-for-compactly-supported-functions]]: for an injective $C^1$ Euclidean coordinate change with invertible derivative, compactly supported Riemann-integrable coefficients transform by the absolute Jacobian.

[F5] [[thm-multidimensional-integral-properties]]: coordinate Riemann integrals are linear and obey the absolute-value estimate.

[F6] [[def-induced-boundary-orientation]]: the positive boundary tangent $\tau$ is the one for which $(\nu_{\rm out},\tau)$ is a positive basis of the oriented surface tangent plane.

[F7] [[thm-ftc-second-part]]: if a derivative is integrable on a compact interval, its integral is the difference of endpoint values of a primitive.

[F8] [[thm-euclidean-inverse-function-theorem]]: a $C^1$ map with invertible derivative has a local $C^1$ inverse; when the map is $C^2$, the inverse is $C^2$ because its derivative is the inverse derivative matrix composed with the inverse map.

[F9] [[thm-continuous-on-a-rectangle-is-riemann-integrable]]: continuous real coordinate coefficients and their continuous first derivatives are Riemann integrable on a closed nondegenerate rectangle.

[F10] [[thm-heine-cantor-metric]]: continuous real coefficients on a compact rectangle are uniformly continuous there.

The area integral in the Statement is the finite chart-partition sum of the localized coordinate coefficients. It is independent of the chosen partition and charts: products of two partitions give a finite common refinement, and [F4] identifies each overlap integral under the oriented coordinate change. The boundary integral is the sum of the ordinary line integrals along the regular arcs; orientation-preserving reparametrization leaves each value unchanged by one-dimensional substitution.

## Proof

1.1 By compactness and [F2], choose finitely many $C^2$ straightening neighborhoods of $D$ with compact coordinate closures, using the local models in the Statement at points on $\partial M$. At an interior boundary arc with parametrization $\gamma(s)$, choose a transverse vector $v$ and choose the signs of $s$ and $t$ so the coordinate map $(s,t)\mapsto\gamma(s)+tv$ is orientation-preserving and $D$ lies in one half-plane; its derivative is invertible, so [F8] gives a $C^2$ inverse chart. At a corner in an interior chart, extend each incident arc across its endpoint by its second-order Taylor polynomial on the missing side; the value and the first two one-sided derivatives agree at the endpoint, so this is a $C^2$ extension. Order the two arc parameters so that $(s,t)\mapsto\gamma_1(s)+\gamma_2(t)-\gamma_1(0)$ is orientation-preserving. Its derivative is invertible by the linear independence of the one-sided tangent vectors, so [F8] gives a $C^2$ local diffeomorphism. After shrinking, the local model is a quadrant or its reentrant complement as in the Statement. Add $M\setminus D$ to this finite open cover and use [F3] for a smooth subordinate partition of unity. On $D$, only finitely many localized forms $\eta_i=\rho_i\eta$ contribute, each with compact support in one straightening chart. [A1, F1, F2, F3, F8, construct]

1.2 In an oriented coordinate plane, a compactly supported $C^1$ form $a\,dx+b\,dy$ satisfies $\int_{\mathbb R^2}(\partial_xb-\partial_ya)=0$, $\int_{y\geq0}(\partial_xb-\partial_ya)=\int_{\mathbb R}a(x,0)\,dx$, and $\int_{x,y\geq0}(\partial_xb-\partial_ya)=\int_0^\infty a(x,0)\,dx-\int_0^\infty b(0,y)\,dy$. For complex coefficients, apply the calculation to real and imaginary parts. Put the support in a rectangle; [F9] makes the coefficients and their first derivatives Riemann integrable, and [F10] makes them uniformly continuous. Double Riemann sums and iterated one-dimensional Riemann sums have the same limit, since their difference is bounded by the rectangle area times the modulus of continuity at the mesh diameter. Then [F7] evaluates the one-dimensional integrals of $\partial_xb$ and $\partial_ya$ at their endpoints, and the compact support removes the artificial outer edges. The half-plane and quadrant boundary signs are exactly the outward-normal-first convention [F6]. On the reentrant model, subtract the missing open quadrant from the plane; the two axis integrals have the opposite orientation, so the same identity holds. [F5, F6, F7, F9, F10, algebra]

2.1 A $C^2$ straightening map preserves the exterior derivative of a $C^1$ one-form by the chain rule: the terms involving its second derivatives cancel by symmetry. The compact-support change-of-variables formula [F4] carries each local area identity to $D$, while [F6] carries the axis orientations to the oriented boundary arcs. Summing over the partition from step 1.1 gives $\int_Dd\eta=\int_{\partial D}\eta$. The empty region and empty boundary give zero on both sides. [F1, F4, F6, step 1.1, step 1.2, algebra] ∎

