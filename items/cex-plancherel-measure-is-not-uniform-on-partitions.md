---
id: cex-plancherel-measure-is-not-uniform-on-partitions
kind: counterexample
title: "The Plancherel measure is not uniform on partitions"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
proof_strategy: direct
deps: [def-plancherel-measure-on-partitions, def-partition-young-diagram-and-conjugate-partition, thm-standard-polytabloid-basis, thm-hook-length-formula]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Dan Romik, The Surprising Mathematics of Longest Increasing Subsequences, Cambridge University Press 2015; author-hosted manuscript of 20 August 2014 (363 pp.)"
      url: "https://danromik.com/resources/books/the-surprising-mathematics-of-longest-increasing-subsequences.pdf"
      locator: "§1.8, printed pp. 24-25 (the weights $\\dim^2/n!$ are not uniform)"
---

## Statement refuted

For every $n\ge3$, the Plancherel measure on $Y_n$ is uniform on the partitions of $n$.

## Facts & Assumptions

**Given:** the Plancherel weights $P_n(\lambda)=(f^\lambda)^2/n!$ on the partitions $\lambda\vdash n$, where $f^\lambda=\dim_{\mathbb C}S^\lambda$ is the number of standard $\lambda$-tableaux ([[def-plancherel-measure-on-partitions]], [[thm-standard-polytabloid-basis]]).

[F1] For every $n\ge0$ and $\lambda\vdash n$, $f^\lambda=n!/\prod_{x\in[\lambda]}h(x)$, the empty product being $1$; in particular $f^{(n)}=1$ for $n\ge1$ and $f^{(1^n)}=1$ ([[thm-hook-length-formula]]).

[F2] For every integer $N\ge2$, the hook shape $(N-1,1)$ has first-row hook lengths $N,N-2,N-3,\dots,1$ and second-row hook length $1$, so its hook product is $N\,(N-2)!$ and $f^{(N-1,1)}=N!/(N(N-2)!)=N-1$ ([[thm-hook-length-formula]]).

[F3] Partitions of a fixed integer are the weakly decreasing positive sequences summing to it; $(1^3)$ denotes the column $(1,1,1)$ ([[def-partition-young-diagram-and-conjugate-partition]]).

## Counterexample

The Plancherel measure on the partitions of $3$ is not the uniform measure on the three partitions $(3),(2,1),(1^3)$: the middle shape has four times the weight of either extreme shape, since $P_3(2,1)=4/6$ while $P_3(3)=P_3(1^3)=1/6$. More generally, uniform weights on $Y_n$ are not the Plancherel weights for any $n\ge3$.

**Proof technique:** direct.

1.1 The case $n=3$: the partitions of $3$ are $(3),(2,1),(1^3)$ by [F3]; [F1] gives $f^{(3)}=1$ and $f^{(1^3)}=1$, and [F2] with size $3$ gives $f^{(2,1)}=3-1=2$. Hence the Plancherel weights of order $3$ are $P_3(3)=1/6$, $P_3(2,1)=4/6$ and $P_3(1^3)=1/6$, whereas the uniform weights on the three partitions would be $1/3$ each. Since $4/6\ne1/6$, the Plancherel measure on $Y_3$ is not the uniform measure, refuting uniformity already at $n=3$. [given, F1, F2, F3, algebra]

1.2 The general case: let $n\ge3$. The shapes $(n)$ and $(n-1,1)$ are partitions of $n$ ([[def-partition-young-diagram-and-conjugate-partition]]); by [F1] $f^{(n)}=1$, and by [F2] with $N=n\ge3$ one has $f^{(n-1,1)}=n-1>1$. Hence $P_n(n)=1/n!$ while $P_n(n-1,1)=(n-1)^2/n!>1/n!$. Two partitions of $Y_n$ therefore carry distinct Plancherel weights, so the weights on $Y_n$ are not all equal, and in particular $P_n$ is not the uniform distribution on $Y_n$. [given, F1, F2, algebra]

2.1 Conclusion: the two partitions $(n)$ and $(n-1,1)$ of $n$ carry distinct Plancherel weights for every $n\ge3$, so no uniform probability distribution on $Y_n$ can coincide with $P_n$; the computation of step 1.1 is the case $n=3$ in which the failure is witnessed explicitly by $P_3(2,1)=4/6>1/6=P_3(3)$. [given, step 1.1, step 1.2, algebra] ∎ 