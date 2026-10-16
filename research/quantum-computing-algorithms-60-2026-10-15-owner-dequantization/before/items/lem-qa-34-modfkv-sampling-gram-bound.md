---
id: lem-qa-34-modfkv-sampling-gram-bound
kind: lemma
title: Two-stage ℓ2 sampling controls Gram matrices
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qa-34-l2-sample-query-access
  - def-frobenius-matrix-norm
  - def-finite-probability-space-and-event
  - def-independence-of-finite-random-variables
  - lem-finite-probability-basic-laws
  - thm-markov-inequality
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Alan Frieze, Ravi Kannan, and Santosh Vempala, Fast Monte-Carlo Algorithms for Finding Low-Rank Approximations, full author manuscript
      url: https://www.cs.princeton.edu/courses/archive/spring04/cos598B/bib/FriezeKV-lowrank.pdf
    - title: Ewin Tang, A quantum-inspired classical algorithm for recommendation systems, version 3
      url: https://arxiv.org/pdf/1807.04271v3
---

## Statement

Let $M\in\mathbb R^{a\times b}$ be nonzero, let $q_1,\ldots,q_a$ be a probability distribution satisfying $q_i\ge\alpha\|M_{i,*}\|_2^2/\|M\|_F^2$ for some $0<\alpha\le1$, and let $p$ be a positive integer. Draw $p$ independent row indices $I_1,\ldots,I_p$ from this distribution and form $N\in\mathbb R^{p\times b}$ with row $t$ equal to $M_{I_t,*}/\sqrt{p q_{I_t}}$; a zero row with $q_i=0$ is never sampled. Then
$$\mathbb E\|M^TM-N^TN\|_F^2\le\frac{\|M\|_F^4}{\alpha p},$$
and for every $\theta>0$,
$$\mathbb P\bigl(\|M^TM-N^TN\|_F\ge\theta\|M\|_F^2\bigr)\le\frac1{\alpha p\theta^2}.$$
For column sampling, assume the analogous probability lower bound on columns and apply the result to $M^T$.

## Facts & Assumptions

**Given:** The finite matrix, row probabilities, sample count, and independent row samples in the Statement.

[F1] [[def-qa-34-l2-sample-query-access]]: a row index is sampled with its declared probability, and zero rows are not assigned a normalized row distribution.

[F2] [[def-independence-of-finite-random-variables]]: independent sampled indices make their entrywise matrix-valued contributions independent.

[F3] [[def-frobenius-matrix-norm]]: $\|X\|_F^2$ is the finite sum of squared entry moduli.

[F4] [[thm-markov-inequality]]: for nonnegative $Y$ and $c>0$, $\mathbb P(Y\ge c)\le\mathbb E[Y]/c$.

## Proof



1.1 For one sampled row $I$, define the random matrix $X=M_{I,*}^TM_{I,*}/q_I$ when $q_I>0$, and $X=0$ on zero-probability zero rows. For each matrix entry $(r,s)$, $\mathbb E X_{rs}=\sum_{i:q_i>0}q_i\frac{M_{ir}M_{is}}{q_i}=\sum_i M_{ir}M_{is}=(M^TM)_{rs}.$ Thus $N^TN=p^{-1}\sum_{t=1}^pX_t$ is unbiased. [given, F1, algebra]

1.2 The squared Frobenius norm of one contribution is $\|X\|_F^2=\|M_{I,*}\|_2^4/q_I^2$. Therefore $\mathbb E\|X\|_F^2=\sum_{i:q_i>0}\frac{\|M_{i,*}\|_2^4}{q_i}\le\frac{\|M\|_F^2}{\alpha}\sum_i\|M_{i,*}\|_2^2=\frac{\|M\|_F^4}{\alpha},$ using the lower bound on each $q_i$. [given, F1, F3, algebra]

2.1 Expand $\|p^{-1}\sum_t(X_t-\mathbb EX_t)\|_F^2$ entrywise. For distinct $s,t$, independence [F2] and zero means make each cross expectation zero. Hence its expectation is $p^{-1}\mathbb E\|X-\mathbb EX\|_F^2\le p^{-1}\mathbb E\|X\|_F^2\le\|M\|_F^4/(\alpha p)$ by step 1.2. [step 1.1, step 1.2, F2, algebra]

3.1 Apply [F4] to the nonnegative random variable $Y=\|M^TM-N^TN\|_F^2$ with threshold $\theta^2\|M\|_F^4>0$. Step 2.1 yields the probability bound. Transposing $M$ interchanges rows and columns, proving the last assertion. [step 2.1, F3, F4, algebra] ∎
