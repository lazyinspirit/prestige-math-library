---
id: ex-dirichlet-normal-mixture-compact-scale-hyperprior-and-rate
kind: example
title: "A compact scale hyperprior removes the tail term and permits an explicit bandwidth balance"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 10
deps:
  - thm-dirichlet-normal-mixture-posterior-contraction
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Posterior convergence rates of Dirichlet mixtures at smooth densities, Theorem 1"
      url: "https://arxiv.org/pdf/0708.1885"
---

## Example

Take $G$ to be uniform on $[1,2]$, and suppose $p_0$ satisfies the hypotheses
of [[thm-dirichlet-normal-mixture-posterior-contraction]]. Let
$$\sigma_n=n^{-1/5}(\log n)^{2/5}.$$
For $\gamma=2$, use $a_1=1/4$ and $a_2=1/6$.

## Facts & Assumptions

**Given:** $G=\operatorname{Unif}[1,2]$, $\gamma=2$, $\sigma_n=n^{-1/5}(\log n)^{2/5}$, and a truth satisfying the main theorem hypotheses.

[F1] [[thm-dirichlet-normal-mixture-posterior-contraction]]: when $G$ is compactly supported in $(0,\infty)$, the middle tail term is absent and the rate is $\max\{(n\sigma_n)^{-1/2}\log n,\sigma_n^2\log n\}$.

## Verification

1.1 For large $n$, $n^{-1/4}\le\sigma_n\le n^{-1/6}$ because $n^{1/20}(\log n)^{2/5}\to\infty$ and $n^{-1/30}(\log n)^{2/5}\to0$. Thus $0<a_2<a_1<1$ and $a_2=(4+\gamma)^{-1}$. The compactly supported $G$ satisfies the lower scale-tail bound since $G(s)=0$ for $s<1$, and the upper tail is zero for $s\ge2$. [given, algebra]

2.1 Direct calculation gives $(n\sigma_n)^{-1/2}\log n=n^{-2/5}(\log n)^{4/5}$ and $\sigma_n^2\log n=n^{-2/5}(\log n)^{4/5}$. Hence [F1] yields this Hellinger contraction upper bound in $P_0^n$-probability. It is not a minimax claim. [F1, given, step 1.1, algebra] ∎