---
id: thm-tauber-converse-for-abel-summability
kind: theorem
title: "Tauber's theorem: an Abel-summable series with $\\iota(n+1)a_n\\to0$ converges ordinarily to its Abel sum"
status: published
origin: session
deps: [def-abel-and-cesaro-summability-of-a-series, lem-tauber-block-estimate, cor-archimedean-reciprocal, lem-of-naturals-positive, lem-of-inverse-positive, def-real-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources: {scraped: [], references: [{title: "Tauberian theorem, Encyclopedia of Mathematics", url: "https://encyclopediaofmath.org/wiki/Tauberian_theorem"}]}
pipeline_run: null
---

## Statement

Let $\sum_{n\ge0}a_n$ be Abel summable to $s$. If

$$\iota(n+1)a_n\longrightarrow0,$$

then its ordinary partial sums converge to $s$.

## Facts & Assumptions

**Given:** The Abel sum $A(x):=\sum_{n\ge0}a_nx^n\to s$ as $x\uparrow1$ and the stated Tauber condition.

[L1] The block lemma supplies uniform bounds for the weighted middle and tail when $x_N:=1-1/\iota(N+1)$ ([[lem-tauber-block-estimate]]).

[L2] The Archimedean reciprocal property gives a reciprocal below every positive tolerance. Canonical naturals increase and reciprocation reverses positive order, so every later reciprocal remains below that tolerance; hence $1/\iota(N+1)\to0$ and $x_N\uparrow1$. Abel summability then gives $A(x_N)\to s$ ([[cor-archimedean-reciprocal]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[def-abel-and-cesaro-summability-of-a-series]], [[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 Write $S_N:=\sum_{n=0}^{N}a_n$. For $N\ge1$, one has $S_N-A(x_N)=\sum_{n=0}^{N}a_n(1-x_N^n)-\sum_{n>N}a_nx_N^n$. [given, algebra]

2.1 Given $\varepsilon>0$, choose $N_0$ from [L1]. The part of the first sum with $n<N_0$ tends to $0$ because it is finite and $x_N\to1$; the remaining part and the tail have absolute value at most $\varepsilon$ each by [L1]. [step 1.1, L1, choose]

3.1 Hence $S_N-A(x_N)\to0$. Since $A(x_N)\to s$ by [L2], it follows that $S_N\to s$. [step 2.1, L2] ∎
