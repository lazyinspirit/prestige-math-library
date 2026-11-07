---
id: cor-heath-brown-pairwise-moment-long-polynomial-range
kind: corollary
title: "Pairwise Dirichlet-polynomial moment in the long-polynomial range"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - lem-dyadic-dirichlet-polynomial-separated-mean-square
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
proof_strategy: direct
---

## Statement

Let $T\ge2$, let $N\ge1$ be an integer, and let $\mathcal T$ be a finite 1-separated subset of any real interval of length $T$, with $R=|\mathcal T|$. For arbitrary complex coefficients $a_n$, $N<n\le2N$, one has, with an absolute constant $C$,
$$\sum_{t,u\in\mathcal T}\left|\sum_{N<n\le2N}a_n n^{i(t-u)}\right|^2\le CR(T+N)\sum_{N<n\le2N}|a_n|^2.$$
In particular, if $N\ge T$ and a family of these coefficients satisfies $|a_n|\le A_\eta T^\eta$ for each $\eta>0$ uniformly in $n,N,T$, then for each $\varepsilon>0$ the pairwise sum is at most $2CA_{\varepsilon/2}^2 T^\varepsilon RN^2$. Thus the three-term Heath–Brown bound holds in the range $N\ge T$, with constants allowed to depend on the coefficient-family bounds. No conclusion establishing its remaining range $N<T$ is asserted.

## Statement references

[[lem-dyadic-dirichlet-polynomial-separated-mean-square]]

## Facts & Assumptions

**Given:** The parameters, coefficients and finite set in the Statement; for the final specialization also $N\ge T$ and the uniform coefficient-family hypothesis.

[F1] The separated mean square on any real interval of length $T$ is bounded by $C(T+N)$ times the coefficient square norm, with an absolute constant and no logarithmic loss. [[lem-dyadic-dirichlet-polynomial-separated-mean-square]]

## Proof

1.1 Fix $u\in\mathcal T$ and put $c_n=a_n n^{-iu}$. The coefficients satisfy $|c_n|=|a_n|$, and the inner sum is $\sum c_n n^{it}$. F1 applied to the samples $t\in\mathcal T$ bounds its squared sum by $C(T+N)\sum|a_n|^2$. Sum this inequality over the $R$ choices of $u$ to obtain the first assertion, including $R=0$. [F1, given, algebra]

2.1 For the specialization, there are exactly $N$ integers in $(N,2N]$, so the hypothesis with $\eta=\varepsilon/2$ gives $\sum|a_n|^2\le NA_{\varepsilon/2}^2T^\varepsilon$. Since $T+N\le2N$, step 1.1 is at most $2CA_{\varepsilon/2}^2T^\varepsilon RN^2$. The other two terms $R^2N$ and $R^{5/4}T^{1/2}N$ in the intended three-term bound are nonnegative, so adjoining them preserves this inequality. This proves only the stated range and retains the dependence on the coefficient family. [step 1.1, given, algebra] ∎
