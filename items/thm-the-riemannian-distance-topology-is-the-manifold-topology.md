---
id: "thm-the-riemannian-distance-topology-is-the-manifold-topology"
kind: "theorem"
title: "The riemannian distance topology is the manifold topology"
deps: ["thm-riemannian-distance-is-a-metric", "lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
landmark: true
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

The topology of $d_g$ is the manifold topology on every connected Riemannian manifold.

## Facts & Assumptions

**Given:** A point $p$ of a connected Riemannian manifold.

[F1] [[thm-riemannian-distance-is-a-metric]]: $d_g$ is a finite metric on a connected Riemannian manifold.

[F2] [[lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric]]: For a compact set $K$ contained in one coordinate chart of an $n$-dimensional Riemannian manifold, there are $0<c\le C<\infty$ such that $c|v|^2\le g_x(v,v)\le C|v|^2$ for $x\in K$. The dimension-zero assertion is vacuous.

## Proof

**Proof technique:** direct.

1.1 Choose a coordinate ball $B$ of radius $r$ centred at $p$ whose closed ball lies in a chart. The compact comparison gives constants $c,C>0$. As in the metric theorem’s first-exit calculation, any path from $p$ to a point outside $B$ has length at least $\sqrt c\,r$: restrict to its first exit and integrate the Euclidean displacement bound. Thus $B_{d_g}(p,\sqrt c\,r)\subseteq B$. Choosing the closed coordinate ball inside any given manifold neighbourhood proves that neighbourhood contains a metric neighbourhood. [F1, F2, given]

2.1 Conversely, for $q$ in that convex coordinate ball the coordinate straight segment has length at most $\sqrt C|x(q)-x(p)|$. Hence $d_g(p,q)\le\sqrt C|x(q)-x(p)|$, so the coordinate ball of radius $\min(r/2,\varepsilon/(2\sqrt C))$ is inside $B_{d_g}(p,\varepsilon)$. This proves the opposite neighbourhood inclusion. Half-balls are convex and give the same estimates at a boundary; a point or empty manifold has the unique topology. [F1, F2, step 1.1] ∎

## Source locator

Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.
