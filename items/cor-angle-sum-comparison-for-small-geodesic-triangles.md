---
id: cor-angle-sum-comparison-for-small-geodesic-triangles
kind: corollary
title: Angle-sum comparison for geodesic triangles
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - thm-gauss-bonnet-for-a-geodesic-triangle
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: literature-derived
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
      locator: "Chapter 9, printed pp. 165-172 (PDF pp. 181-188); the sign discussion following Theorem 9.3."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Section 2.0, printed pp. 10-13 (PDF pp. 17-20)."
---

## Statement

Assume the axiom of choice. Let $(M,g,J)$ be an oriented Riemannian surface and let $T\subseteq M$ be a
positively oriented geodesic triangular disk of the kind considered in
[[thm-gauss-bonnet-for-a-geodesic-triangle]], with interior angles
$\alpha,\beta,\gamma\in(0,2\pi)$. Then

$$\alpha+\beta+\gamma>\pi,\qquad \alpha+\beta+\gamma=\pi,\qquad \alpha+\beta+\gamma<\pi$$

according as the total Gaussian curvature $\int_TK\,dA$ is positive, zero, or
negative. The comparison concerns the curvature integral and not merely the
sign of $K$ at a single point.

## Facts & Assumptions

**Given:** Full AC through the local disk Gauss–Bonnet supplier ([[def-axiom-of-choice]]); A positively oriented geodesic triangular disk in a frameable neighbourhood with interior angles.

[F1] For such a triangle $\int_TK\,dA=\alpha+\beta+\gamma-\pi$ ([[thm-gauss-bonnet-for-a-geodesic-triangle]]).

## Proof

**Proof technique:** rearrange the exact triangle identity and compare signs.

1.1 Subtracting $\pi$ from both sides of [F1] gives $\alpha+\beta+\gamma-\pi=\int_TK\,dA$. [F1, algebra]

2.1 By step 1.1, the real number $\alpha+\beta+\gamma-\pi$ is positive, zero or negative exactly when the real number $\int_TK\,dA$ is positive, zero or negative; adding $\pi$ to each comparison gives the three stated alternatives. [step 1.1, algebra] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, printed pp. 165-172, notes the sign interpretation of the local formula: the curvature integral measures the excess of the angle sum over $\pi$. Datar, *Lectures on Riemannian Geometry*, Lecture 2, printed pp. 10-13, records the same consequence. The rearrangement is immediate from the library theorem [[thm-gauss-bonnet-for-a-geodesic-triangle]].
