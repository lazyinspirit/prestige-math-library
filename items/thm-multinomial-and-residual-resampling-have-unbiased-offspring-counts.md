---
id: thm-multinomial-and-residual-resampling-have-unbiased-offspring-counts
kind: theorem
title: "Multinomial and residual resampling have unbiased offspring counts"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - alg-multinomial-and-residual-offspring-resampling
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §3.4"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
    - title: "Simo Särkkä and Lennart Svensson, Bayesian Filtering and Smoothing, 2nd ed., §11.4"
      url: "https://users.aalto.fi/~ssarkka/pub/bfs_book_2023_online.pdf"
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, §2.1"
      url: "https://arxiv.org/pdf/math/0508594"
---

## Statement

Fix $N\ge1$ and nonnegative input weights $a_1,\ldots,a_N$. Let $p$ be the normalized probability vector, with the uniform fallback when all weights vanish, and let $C_j$ be the offspring count from [[alg-multinomial-and-residual-offspring-resampling]]. Conditional on the input weights, for either scheme and every $1\le j\le N$,
$$\mathbb E[C_j\mid a_1,\ldots,a_N]=Np_j.$$
This assertion concerns the counts only; it gives no variance comparison for arbitrary weights.

## Facts & Assumptions

**Given:** The finite weights, $N\ge1$, and the resampling procedure in the Statement.

[F1] [[alg-multinomial-and-residual-offspring-resampling]]: Multinomial counts are sums of $N$ categorical indicators with probabilities $p_j$; residual counts add $\lfloor Np_j\rfloor$ deterministic copies to categorical draws with probabilities proportional to the fractional remainders.

## Proof

**Given:** The hypotheses in the Statement.

1.1 In the multinomial branch, $C_j=\sum_{\ell=1}^N\mathbf 1_{\{J_\ell=j\}}$ and each indicator has conditional expectation $p_j$ by the specified product mass. Linearity of a finite sum gives $\mathbb E[C_j\mid a]=Np_j$, including the uniform fallback. [F1, given, algebra]

1.2 In the residual branch, write $q_j=\lfloor Np_j\rfloor$ and $r_j=Np_j-q_j$. The remainder $R=\sum_jr_j=N-\sum_jq_j$ is an integer. If $R=0$, every $r_j=0$ and $C_j=q_j=Np_j$; if $R>0$, then $C_j=q_j+\sum_{\ell=1}^{R}\mathbf 1_{\{K_\ell=j\}}$ with each indicator having conditional expectation $r_j/R$, so $\mathbb E[C_j\mid a]=q_j+R(r_j/R)=Np_j$. [F1, given, algebra]

2.1 Steps 1.1 and 1.2 establish the same conditional expected-count identity for both schemes in the procedure, completing the assertion. [step 1.1, step 1.2] ∎

## Remarks

The proof uses only finite sums of categorical indicators and is choice-free. Both schemes satisfy the expected-count interface used by the particle normalizer induction.
