---
id: fs-curve-velocities-in-two-charts-have-the-same-coordinate-tuple
kind: false-statement
title: "Curve velocity coordinates depend on the chart"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-change-of-coordinate-formula-for-tangent-bases]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Statement

**False claim:** the coordinate tuple of a curve velocity is the same in every chart.

## Facts & Assumptions

**Given:** On the first quadrant $Q:=\{(x,y):x>0,\ y>0\}$, the curve
$$\gamma(t)=(1+t,1)$$
through $(1,1)$ for $t$ near $0$, together with the Cartesian chart and the
polar chart
$$\psi(x,y)=\bigl(\sqrt{x^2+y^2},\arctan(y/x)\bigr).$$

[L1] Tangent coordinates change by the Jacobian of the coordinate transition ([[thm-change-of-coordinate-formula-for-tangent-bases]]).

## Refutation

**Proof technique:** direct.

1.1 At $t=0$, the Cartesian velocity of $\gamma$ is $$\gamma'(0)=(1,0).$$ In polar coordinates, $$r(t)=\sqrt{(1+t)^2+1},\qquad \theta(t)=\arctan\!\left(\frac1{1+t}\right),$$ so $$r'(0)=\frac1{\sqrt2},\qquad \theta'(0)=-\frac12.$$ Thus the polar coordinate tuple of the same velocity is $$\left(\frac1{\sqrt2},-\frac12\right).$$ [given, algebra]

2.1 The two coordinate tuples from step 1.1 are not equal. This is consistent with [L1], which says they are related by the Jacobian of the coordinate change, not by identity. [L1, step 1.1]

3.1 Hence the coordinate tuple of a curve velocity need not be the same in two different charts. The statement is false. [step 1.1, step 2.1] ∎
