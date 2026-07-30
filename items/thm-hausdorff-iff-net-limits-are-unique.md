---
id: thm-hausdorff-iff-net-limits-are-unique
kind: theorem
title: "A topological space is Hausdorff if and only if every net has at most one limit"
status: published
origin: session
deps: [def-net-convergence-and-cluster-point, def-hausdorff-space, def-neighbourhood-top]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "WVU Math 581 Topology I"
      url: "https://math.wvu.edu/~jwojciec/teaching_files/2024_Spring-581/index.html"
pipeline_run: null
---

## Statement

A topological space $X$ is Hausdorff if and only if every net in $X$ has at most one limit.

## Facts & Assumptions

**Given:** A topological space $X$.

[A1] Distinct points in a Hausdorff space have disjoint neighbourhoods ([[def-hausdorff-space]]).

[A2] A net converges to a point exactly when it is eventually in each of that point's neighbourhoods ([[def-net-convergence-and-cluster-point]]).



## Proof

**Proof technique:** constructive.

1.1 Suppose $X$ is Hausdorff and a net converges to both $p$ and $q$. If $p\ne q$, take disjoint neighbourhoods $U$ of $p$ and $V$ of $q$; the net is eventually in both, and directedness supplies an index after both thresholds, whose value would lie in $U\cap V$. [A1, A2]

1.2 Conversely, suppose $X$ is not Hausdorff. Choose distinct $p,q$ for which every neighbourhood of $p$ meets every neighbourhood of $q$, and let $E=\{(U,V,z):U\in\mathcal N(p),\ V\in\mathcal N(q),\ z\in U\cap V\}$, ordered by reverse inclusion in the first two coordinates. [A1, construct]

2.1 Thus $p=q$, so every net has at most one limit. [step 1.1]

2.2 The set $E$ is directed: intersect the first two neighbourhood coordinates of two triples and choose a point in their intersection; the resulting triple is above both. The net sending $(U,V,z)$ to $z$ is eventually in every neighbourhood of $p$ and every neighbourhood of $q$, hence converges to both distinct points. [step 1.2, A1, A2]

3.1 Therefore uniqueness of all net limits forces $X$ to be Hausdorff, and the two implications prove the result. [step 2.1, step 2.2, discharge-construct] ∎
