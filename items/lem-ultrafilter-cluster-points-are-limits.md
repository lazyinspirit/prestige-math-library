---
id: lem-ultrafilter-cluster-points-are-limits
kind: lemma
title: "Every cluster point of an ultrafilter is a limit of that ultrafilter"
status: published
origin: session
deps: [def-filter-convergence-and-cluster-point, def-ultrafilter, thm-ultrafilter-characterisation]
aliases: []
landmark: false
proof_strategy: contradiction
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

Every cluster point of an ultrafilter is a limit of that ultrafilter.

## Facts & Assumptions

**Given:** An ultrafilter $\mathcal U$ on $X$ and a cluster point $p$ of it.

[A1] $\mathcal U\to p$ means every neighbourhood of $p$ belongs to $\mathcal U$, while clusterhood means every such neighbourhood meets every member of $\mathcal U$ ([[def-filter-convergence-and-cluster-point]]).

[A2] For every subset $S$, an ultrafilter contains $S$ or its complement ([[thm-ultrafilter-characterisation]]).



## Proof

**Proof technique:** contradiction.

1.1 Assume for a contradiction that $\mathcal U$ does not converge to $p$. Then some neighbourhood $N$ of $p$ is not in $\mathcal U$. [A1, assume-contra]

2.1 By [A2], $X\setminus N\in\mathcal U$. But $N$ must meet every member of $\mathcal U$ by clusterhood, whereas $N\cap(X\setminus N)=\varnothing$. [step 1.1, A1, A2]

3.1 This contradiction proves $\mathcal U\to p$. [step 2.1, discharge-contradiction] ∎
