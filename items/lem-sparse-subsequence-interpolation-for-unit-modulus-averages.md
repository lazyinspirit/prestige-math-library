---
id: lem-sparse-subsequence-interpolation-for-unit-modulus-averages
kind: lemma
title: Sparse-subsequence interpolation for unit-modulus averages
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves
      url: https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf
      locator: "Lemma 2.23 and its use in the proof of Theorem 3.1, §§2.5 and 3.1"
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves (arXiv v2 author preprint)
      url: https://arxiv.org/pdf/2509.06909v2
      locator: "arXiv:2509.06909v2, Lemma 2.23 and its use in the proof of Theorem 3.1, §§2.5 and 3.1; full relevant passage inspected"
---

## Statement

Let $X$ be a set, let $z_n:X\to\mathbb C$ satisfy $|z_n(x)|=1$ for all $n\ge1$ and $x\in X$, and put $A_N(x)=N^{-1}\sum_{n=1}^Nz_n(x)$. If $(N_r)_{r\ge1}$ is strictly increasing with $N_{r+1}/N_r\to1$ and $A_{N_r}(x)\to0$ for every $x$ in a set $E\subseteq X$, then $A_N(x)\to0$ for every $x\in E$.

## Statement references

[Bergelson–Moreira, Lemma 2.23](https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf)

[Bergelson–Moreira, arXiv:2509.06909v2](https://arxiv.org/pdf/2509.06909v2)

## Facts & Assumptions

**Given:** Unit-modulus functions $(z_n)$ and a sequence $(N_r)$ as in the statement.

## Proof

1.1 For integers $M>N\ge1$, split the sums at $N$. The first $N$ terms change by at most $N(1/N-1/M)=(M-N)/M$, and the remaining $M-N$ terms contribute at most $(M-N)/M$. Thus $|A_M(x)-A_N(x)|\le2(M-N)/M$ for every $x\in X$. [given, algebra]

2.1 If $N_r\le N\le N_{r+1}$, step 1.1 gives $|A_N(x)-A_{N_r}(x)|\le2(N_{r+1}-N_r)/N_r$, which tends to zero because $N_{r+1}/N_r\to1$. Since $A_{N_r}(x)\to0$ on $E$, the full sequence $A_N(x)$ tends to zero on $E$. [given, step 1.1, algebra] ∎
