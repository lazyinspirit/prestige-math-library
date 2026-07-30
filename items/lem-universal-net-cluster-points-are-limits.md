---
id: lem-universal-net-cluster-points-are-limits
kind: lemma
title: "Every cluster point of a universal net is a limit of that net"
status: published
origin: session
deps: [def-universal-net, def-net-convergence-and-cluster-point]
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

Every cluster point of a universal net is a limit of that net.

## Facts & Assumptions

**Given:** A universal net $x:D\to X$ and a cluster point $p$.

[A1] A universal net is eventually in $S$ or eventually in $X\setminus S$ for every subset $S$ ([[def-universal-net]]).

[A2] Clusterhood is frequent membership in every neighbourhood, while convergence is eventual membership in every neighbourhood ([[def-net-convergence-and-cluster-point]]).



## Proof

**Proof technique:** contradiction.

1.1 Assume for a contradiction that $x$ does not converge to $p$. Then some neighbourhood $N$ of $p$ is not an eventual set for $x$. [A2, assume-contra]

2.1 By universality, $x$ is eventually in $X\setminus N$. This contradicts frequent membership in $N$, since an index after both thresholds would lie in $N\cap(X\setminus N)$. [step 1.1, A1, A2]

3.1 Therefore $x$ converges to $p$. [step 2.1, discharge-contradiction] ∎
