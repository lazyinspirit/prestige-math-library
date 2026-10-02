---
id: rem-alexandrov-and-differentiable-sphere-theorems
kind: remark
title: Alexandrov and differentiable sphere theorems
status: published
origin: pipeline
deps:
  - thm-toponogov-triangle-comparison
  - thm-toponogov-hinge-comparison
  - thm-cheng-maximal-diameter-rigidity
proved_here: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  sources_checked:
    date: 2026-10-02
    by: owner
    scope: Owner-confirmed prior audit; publication explicitly authorised.
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "U. Lang, Riemannian and Metric Geometry (lecture notes)"
      url: https://people.math.ethz.ch/~lang/RG.pdf
      locator: "Chapter 5, §5.2 'Alexandrov comparisons', Definition 5.10, Lemma 5.11 and Theorem 5.12 (printed p.68), and §5.3 with Theorem 5.17: metric curvature bounds are defined by triangle comparison, and agree with sectional-curvature bounds on Riemannian manifolds"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§11 'The sphere theorem', Theorem 11.1 with Remarks 11.2–11.3 (printed pp.49–51): quarter-pinched differentiable sphere theorem, sharpness of the pinching constant, and the Grove–Shiohama diameter variant"
external_dependency:
  source_url: "https://people.math.ethz.ch/~lang/RG.pdf"
  exact_statement: "Lang, Definition 5.10 and Theorem 5.12: local chord comparison defines Alexandrov curvature bounds on metric spaces; for a connected Riemannian manifold, these bounds are equivalent to the corresponding sectional-curvature bounds. Eschenburg, Theorem 11.1: a compact simply connected Riemannian manifold with positive sectional curvature and max K/min K < 4 is homeomorphic to a sphere."
  local_proof_attempt: "This page proves the smooth Toponogov hinge, triangle and diameter-rigidity statements and their supporting Jacobi, Riccati and volume machinery; no metric-space triangle-comparison theory, no smoothing of metric curvature bounds and no pinching or embedding step towards a sphere homeomorphism is attempted here."
  necessity: "The record fixes where this page's smooth comparison theory meets the metric-space (Alexandrov) theory and the differentiable sphere theorems, so that neither is silently extrapolated from the smooth results; no item of either page uses this remark as a supplier, and the only sphere conclusion of the pair is Cheng's maximal-diameter rigidity, which is not a pinching theorem."
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$ of the
smooth comparison suppliers. **Recorded orientation, not proved here.**
The following subjects are deferred; this remark supplies no proof prerequisite.

1. **Alexandrov curvature.** Lang, Definition 5.10, defines metric curvature
   bounds by local comparison of distances between corresponding side points
   in hinges (chord comparison), together with local existence of connecting
   segments. Theorem 5.12 identifies these bounds with sectional-curvature
   bounds **on connected Riemannian manifolds**. It does not assign sectional
   curvature to arbitrary length spaces. Lang's synthetic perimeter and
   diameter theorem (Theorem 5.17) assumes completeness, geodesicity, positive
   lower curvature, and an additional perpendicular-segment hypothesis at
   midpoints of segments longer than the model diameter. These synthetic
   results and their local metric structure are not developed here.

2. **Sphere theorems beyond maximal diameter.** Eschenburg, Theorem 11.1,
   gives a sphere **homeomorphism** under compactness, simple connectedness,
   positive sectional curvature and strict global quarter pinching. His
   Remark 11.2 records sharpness, and Remark 11.3 points to the separate
   Grove–Shiohama diameter theorem. Such results are deferred; a homeomorphism
   conclusion must not be silently strengthened to a diffeomorphism.
   The sphere conclusion proved in [[thm-cheng-maximal-diameter-rigidity]]
   instead uses maximal diameter under a Ricci lower bound and concludes
   isometry with the round sphere. It supplies no pinching theorem.

3. **Stability.** Almost-equality statements and finiteness of topological
   or differentiable types require additional arguments; none is asserted
   or used in this pair.

## Recorded orientation

The smooth [[thm-toponogov-hinge-comparison]] and
[[thm-toponogov-triangle-comparison]] remain statements about Riemannian
manifolds. The plan defers Alexandrov metric theory, Grove–Shiohama, pinching
sphere theorems and stability. This unproved remark records that boundary
and must not be used as a logical supplier.
