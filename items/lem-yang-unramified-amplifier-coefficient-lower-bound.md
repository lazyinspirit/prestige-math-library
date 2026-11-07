---
dependency_level: 0
id: lem-yang-unramified-amplifier-coefficient-lower-bound
kind: lemma
title: "A Unitary Central Product Forces a Bounded Prime Coefficient"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
deps: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n), §10.3.2"
      url: "https://arxiv.org/pdf/2309.07534v2"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Let $N\geq1$ and let $\alpha_1,\ldots,\alpha_N\in\mathbb C^\times$ satisfy $|\alpha_1\cdots\alpha_N|=1$. Define $h_j$ by the formal power series

$$\prod_{i=1}^N(1-\alpha_iX)^{-1}=\sum_{j\geq0}h_jX^j.$$

Then $\max_{1\leq j\leq N}|h_j|\geq(2N)^{-1}$, and hence $\sum_{j=1}^N|h_j|\geq(2N)^{-1}$.

## Statement references

[Liyang Yang, *Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n)*, §10.3.2](https://arxiv.org/pdf/2309.07534v2)

Yang cites Blomer–Maga for the fixed-rank Hecke relation. The present algebraic statement is proved directly and does not use that citation.

## Facts & Assumptions

**Given:** $N\geq1$, nonzero complex numbers $\alpha_1,\ldots,\alpha_N$ with $|\prod_i\alpha_i|=1$, and the coefficients $h_j$ defined in the Statement. Prove the asserted lower bound.

[A1] The constant coefficient is $h_0=1$, by the defining formal power series.

## Proof

1.1 Put $P(X)=\prod_{i=1}^N(1-\alpha_iX)=\sum_{k=0}^Nc_kX^k$. Since $P(X)\sum_{j\geq0}h_jX^j=1$, comparison of the coefficient of $X^k$ gives $c_k=-\sum_{j=1}^kh_jc_{k-j}$ for $1\leq k\leq N$. [given, A1, algebra]

1.2 Let $\delta=\max_{1\leq j\leq N}|h_j|$ and $S_k=\sum_{r=0}^k|c_r|$. The recurrence in Step 1.1 implies $|c_k|\leq\delta S_{k-1}$ and therefore $S_k\leq(1+\delta)S_{k-1}$. Induction from $S_0=1$ yields $S_{N-1}\leq(1+\delta)^{N-1}$, so $|c_N|\leq\delta(1+\delta)^{N-1}$. [given, step 1.1, algebra]

1.3 If $\delta<1/(2N)$, the binomial theorem and $\binom Nk\leq N^k/k!$ give $(1+1/(2N))^N\leq\sum_{k=0}^N(2^kk!)^{-1}<\sum_{k=0}^N2^{-k}<2$. Hence Step 1.2 gives $|c_N|<\frac1{2N}(1+\frac1{2N})^{N-1}<1/N\leq1$. But $|c_N|=|\prod_i\alpha_i|=1$, a contradiction. Thus $\delta\geq1/(2N)$, and the sum of the $N$ nonnegative terms $|h_j|$ is at least their maximum. [given, step 1.2, algebra] ∎

## Proof references

The proof is an algebraic derivation from the displayed Euler-factor polynomial; it does not import the fixed-rank source estimate.
