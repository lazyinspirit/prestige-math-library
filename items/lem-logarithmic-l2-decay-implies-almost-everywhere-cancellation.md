---
id: lem-logarithmic-l2-decay-implies-almost-everywhere-cancellation
kind: lemma
title: Logarithmic L2 decay gives almost-everywhere cancellation of unit-modulus averages
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - lem-square-summable-l2-functions-converge-almost-everywhere-to-zero
  - lem-sparse-subsequence-interpolation-for-unit-modulus-averages
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves
      url: https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf
      locator: "Proof of Theorem 3.1, §3.1: logarithmic L2 decay, sparse subsequence, and Lemma 2.23 interpolation"
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves (arXiv v2 author preprint)
      url: https://arxiv.org/pdf/2509.06909v2
      locator: "arXiv:2509.06909v2, Proof of Theorem 3.1, §3.1: logarithmic L2 decay, sparse subsequence, and Lemma 2.23 interpolation; full relevant passage inspected"
---

## Statement

Let $(\Omega,\Sigma,\mathbb P)$ be a probability space and let $z_n:\Omega\to\mathbb C$ be measurable with $|z_n(\omega)|=1$ for every $n\ge1$ and $\omega\in\Omega$. Set $F_N=N^{-1}\sum_{n=1}^Nz_n$. If some $C,\eta>0$ satisfy

$$\int_\Omega|F_N|^2\,d\mathbb P\le\frac{C}{(\log N)^{1+\eta}}$$

for all sufficiently large $N$, then $F_N\to0$ almost everywhere.

## Statement references

[Bergelson–Moreira, proof of Theorem 3.1](https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf)

[Bergelson–Moreira, arXiv:2509.06909v2](https://arxiv.org/pdf/2509.06909v2)

## Facts & Assumptions

**Given:** A probability space, measurable functions $z_n$ with $|z_n(\omega)|=1$ for all $n,\omega$, and the stated logarithmic L2 bound for $F_N$.

[F1] If measurable functions $f_j$ satisfy $\sum_j\int|f_j|^2d\mathbb P<\infty$, then $f_j\to0$ almost everywhere ([[lem-square-summable-l2-functions-converge-almost-everywhere-to-zero]]).

[F2] If unit-modulus averages converge to zero along $N_r$ with $N_{r+1}/N_r\to1$, they converge to zero along all integers ([[lem-sparse-subsequence-interpolation-for-unit-modulus-averages]]).

## Proof

1.1 Choose $\theta$ with $1/(1+\eta)<\theta<1$ and set $N_r=\lceil\exp(r^\theta)\rceil$, omitting an initial finite segment if needed to make the integers strictly increasing. Then $\log N_r\ge r^\theta$, so the assumed estimate gives $\sum_r\int|F_{N_r}|^2d\mathbb P\le C\sum_r r^{-\theta(1+\eta)}<\infty$. The last series converges: on each dyadic block $2^j\le r<2^{j+1}$ its sum is at most $2^{-j(\theta(1+\eta)-1)}$. [given, choose, algebra]

2.1 By [F1], $F_{N_r}\to0$ almost everywhere. Also $N_{r+1}/N_r\to1$, since $(r+1)^\theta-r^\theta\to0$ and the ceilings are negligible relative to $\exp(r^\theta)$. Apply [F2] to $(z_n)$, whose terms have modulus one everywhere, to obtain $F_N\to0$ almost everywhere. [F1, F2, step 1.1, algebra] ∎
