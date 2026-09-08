---
id: ex-borel-ball-volume-before-any-comparison-theorem
title: "Metric balls need no curvature comparison for measurability"
kind: example
status: published
origin: pipeline
deps: ["cor-positive-density-measures-assign-positive-volume-to-nonempty-open-sets-and-metric-balls", "ex-positive-weighted-volume-on-an-open-interval"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Folland, Real Analysis, second edition, \u00a711.4 pp.361\u2013363; Theorems 2.14\u20132.15 pp.50\u201351"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
proof_strategy: direct
---

## Example

On $(0,1)$ with Euclidean distance and density $x^{-1}|dx|$, the ball $B(1/2,1/4)$ has volume $\log3$, whereas $B(1/2,1)=(0,1)$ has infinite volume. Both are Borel and positive in volume.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. Manifolds are Hausdorff, second countable and smooth, with boundary allowed; $n=0$ is allowed unless excluded. Densities are pointwise Borel, $0\cdot\infty=0$, and $\lambda_0(\mathbb R^0)=1$. Two explicit metric-ball volumes, showing the role of relative compactness.

[F1] [[cor-positive-density-measures-assign-positive-volume-to-nonempty-open-sets-and-metric-balls]]: Topology-compatible positive-radius balls are Borel and positive in volume; compact closure implies finite volume.

[F2] [[ex-positive-weighted-volume-on-an-open-interval]]: The Example and Verification compute $\mu((a,b))=\log(b/a)$ and $\mu((0,1))=\infty$.

## Verification

1.1 The inequality $|x-1/2|<1/4$ with $x\in(0,1)$ is equivalent to $1/4<x<3/4$. The closure $[1/4,3/4]$ is compact inside M, and the weighted interval computation gives $\mu(B(1/2,1/4))=\log((3/4)/(1/4))=\log3$. The ball is open Borel and has positive finite measure. [F1, F2]

2.1 Every $x\in(0,1)$ satisfies $|x-1/2|<1/2<1$, so $B(1/2,1)=(0,1)$. Its mass is infinite by the interval example. Its closure in M is all of M, which is not compact: the open cover $\{(1/N,1):N\ge2\}$ of M has no finite subcover. Thus the finite-volume hypothesis on the closure is absent in precisely this example. Both radii are strictly positive; neither ball is empty. [F1, F2, step 1.1] ∎
