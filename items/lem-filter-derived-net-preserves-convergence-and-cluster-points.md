---
id: lem-filter-derived-net-preserves-convergence-and-cluster-points
kind: lemma
title: "A filter and its canonical derived net have the same limits and cluster points"
status: published
origin: session
deps: [def-net-derived-from-a-filter, def-filter-convergence-and-cluster-point, def-net-convergence-and-cluster-point]
aliases: []
landmark: false
proof_strategy: direct
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

A filter $\mathcal F$ and the net derived from it have exactly the same limits and cluster points.

## Facts & Assumptions

**Given:** A filter $\mathcal F$ on $X$, its derived net, and $p\in X$.

[A1] The derived net is indexed by $(A,x)$ with $A\in\mathcal F$, $x\in A$, ordered by reverse inclusion of the first coordinate ([[def-net-derived-from-a-filter]]).

[A2] Filter and net convergence and cluster points have their stated neighbourhood formulations ([[def-filter-convergence-and-cluster-point]], [[def-net-convergence-and-cluster-point]]).



## Proof

**Proof technique:** direct.

1.1 If a neighbourhood $N$ of $p$ belongs to $\mathcal F$, choose $x\in N$; then $(N,x)$ is an index, and every later $(B,y)$ has $B\subseteq N$, hence $y\in N$. Thus filter convergence implies convergence of the derived net. [A1, A2]

2.1 If the derived net is eventually in $N$, take a threshold $(A,x)$. Applying eventuality to indices $(A,y)$ with $y\in A$ gives $A\subseteq N$; upward closure of the filter gives $N\in\mathcal F$. Thus convergence is equivalent. [step 1.1, A1, A2]

3.1 The derived net is frequently in $N$ exactly when every $A\in\mathcal F$ meets $N$: after $(A,x)$ a point of $A\cap N$ supplies a later index, and conversely frequent membership after $(A,x)$ supplies such a point. Therefore its cluster points are exactly those of $\mathcal F$. [A1, A2] ∎
