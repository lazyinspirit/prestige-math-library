---
id: "prop-geodesics-have-constant-speed-for-a-metric-compatible-connection"
kind: "proposition"
title: "Geodesics have constant speed for a metric-compatible connection"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-geodesic-of-an-affine-connection","def-metric-compatible-connection-on-a-riemannian-vector-bundle","cor-zero-derivative-implies-constant"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Remark 15.1.2, pp.113–114
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $\gamma:I\to M$ be a geodesic for a metric-compatible affine connection on a Riemannian manifold. Then $g(\gamma',\gamma')$ and the speed $|\gamma'|$ are constant on $I$.

## Facts & Assumptions

**Given:** The geodesic, metric, and compatible connection in the statement.

[F1] [[def-geodesic-of-an-affine-connection]] gives $D_t\gamma'=0$.

[F2] [[def-metric-compatible-connection-on-a-riemannian-vector-bundle]] gives the product rule for differentiating the metric pairing along a curve.

[F3] [[cor-zero-derivative-implies-constant]] makes a differentiable real function with zero derivative on an interval constant.

## Proof

1.1 Metric compatibility and the symmetry of $g$ give $$\frac d{dt}g(\gamma',\gamma')=g(D_t\gamma',\gamma')+g(\gamma',D_t\gamma')=2g(D_t\gamma',\gamma')=0$$ by [F1] and [F2]. [F1, F2, given]

2.1 By [F3], $g(\gamma',\gamma')$ is constant on the interval. It is nonnegative, so its nonnegative square root $|\gamma'|$ is constant as well. This includes the zero-speed constant geodesics and shows that a nonconstant geodesic never has zero velocity. In dimension zero the constant is zero; empty manifolds give no curves. Included parameter endpoints follow by continuity from the interior, and no choices are made. [F3, step 1.1] ∎
