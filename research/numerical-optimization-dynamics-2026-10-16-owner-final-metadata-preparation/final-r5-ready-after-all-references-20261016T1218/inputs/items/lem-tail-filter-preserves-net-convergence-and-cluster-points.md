---
id: lem-tail-filter-preserves-net-convergence-and-cluster-points
kind: lemma
title: "A net and its tail filter have the same limits and cluster points"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-tail-filter-of-a-net, def-filter-convergence-and-cluster-point, def-net-convergence-and-cluster-point]
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
    - title: "Filter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Filter_(set_theory)"
    - title: "Net (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Net_(mathematics)"
pipeline_run: null
---

## Statement

For a net $x$ and its tail filter $\mathcal F_x$, a point is a limit of $x$ exactly when it is a limit of $\mathcal F_x$, and it is a cluster point of $x$ exactly when it is a cluster point of $\mathcal F_x$.

## Facts & Assumptions

**Given:** A net $x:D\to X$, its tail filter $\mathcal F_x$, and $p\in X$.

[A1] $A\in\mathcal F_x$ exactly when $x$ is eventually in $A$ ([[def-tail-filter-of-a-net]]).

[A2] Net and filter convergence and cluster points have their stated neighbourhood formulations ([[def-net-convergence-and-cluster-point]], [[def-filter-convergence-and-cluster-point]]).



## Proof

**Proof technique:** direct.

1.1 For every neighbourhood $N$ of $p$, $x$ is eventually in $N$ exactly when $N\in\mathcal F_x$ by [A1]. Thus the two convergence conditions in [A2] are equivalent. [A1, A2]

1.2 For every neighbourhood $N$ of $p$, $x$ is frequently in $N$ exactly when $N$ meets every tail $T_d$: a point in $N\cap T_d$ is a value $x_e\in N$ with $e\ge d$. [A1, A2]

2.1 If $N$ meets every tail, it meets every member of $\mathcal F_x$, since each such member contains a tail; conversely every tail belongs to $\mathcal F_x$. Hence the two cluster-point conditions in [A2] are equivalent. [step 1.2, A1, A2] ∎
