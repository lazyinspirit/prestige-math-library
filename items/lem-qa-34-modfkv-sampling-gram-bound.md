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

In particular, let $A\in\mathbb R^{m\times n}$ be nonzero with $F=\|A\|_F$, and use $p$ samples at each of two stages. First draw independent $I_r$ with probabilities $d_i=\|A_{i,*}\|_2^2/F^2$ and set $S_{r,*}=A_{I_r,*}/\sqrt{p d_{I_r}}$. Conditional on $S$, draw independent $J_c$ with probabilities $f_j=\|S_{*,j}\|_2^2/F^2$ and set $W_{*,c}=S_{*,J_c}/\sqrt{p f_{J_c}}$. These are the exact normalized two-stage sketches; zero-probability indices are never selected. Then $\|S\|_F=\|W\|_F=F$, both Gram estimators are unbiased (the second conditional on $S$), and
$$\mathbb E\|A^TA-S^TS\|_F^2\le F^4/p,\qquad \mathbb E\bigl[\|SS^T-WW^T\|_F^2\mid S\bigr]\le F^4/p.$$
For every $\theta>0$, the probability that either Gram error is at least $\theta F^2$ is at most $2/(p\theta^2)$; the two errors need not be independent.

## Facts & Assumptions

**Given:** The finite matrices, sampling probabilities, positive sample count, and independent samples within each stage in the Statement; second-stage sampling is conditional on the realized first stage.

[F1] [[def-finite-probability-space-and-event]]: a finite probability law assigns nonnegative weights summing to one; here the assumed row law assigns weight $q_i$ to index $i$.

[F2] [[def-independence-of-finite-random-variables]]: independent sampled indices make their entrywise matrix-valued contributions independent.

[F3] [[def-frobenius-matrix-norm]]: $\|X\|_F^2$ is the finite sum of squared entry moduli.

[F4] [[thm-markov-inequality]]: for nonnegative $Y$ and $c>0$, $\mathbb P(Y\ge c)\le\mathbb E[Y]/c$.

## Proof

1.1 The assumed lower bound on $q_i$ forces $M_{i,*}=0$ whenever $q_i=0$. For one sampled row $I$, define the random matrix $X=M_{I,*}^TM_{I,*}/q_I$ when $q_I>0$, and $X=0$ on zero-probability zero rows. For each matrix entry $(r,s)$, $\mathbb E X_{rs}=\sum_{i:q_i>0}q_i\frac{M_{ir}M_{is}}{q_i}=\sum_i M_{ir}M_{is}=(M^TM)_{rs}.$ Thus $N^TN=p^{-1}\sum_{t=1}^pX_t$ is unbiased. [given, F1, algebra]

1.2 The squared Frobenius norm of one contribution is $\|X\|_F^2=\|M_{I,*}\|_2^4/q_I^2$. Therefore $\mathbb E\|X\|_F^2=\sum_{i:q_i>0}\frac{\|M_{i,*}\|_2^4}{q_i}\le\frac{\|M\|_F^2}{\alpha}\sum_i\|M_{i,*}\|_2^2=\frac{\|M\|_F^4}{\alpha},$ using the lower bound on each $q_i$. [given, F1, F3, algebra]

2.1 Expand $\|p^{-1}\sum_t(X_t-\mathbb EX_t)\|_F^2$ entrywise. For distinct $s,t$, independence [F2] and zero means make each cross expectation zero. Hence its expectation is $p^{-1}\mathbb E\|X-\mathbb EX\|_F^2\le p^{-1}\mathbb E\|X\|_F^2\le\|M\|_F^4/(\alpha p)$ by step 1.2. [step 1.1, step 1.2, F2, algebra]

3.1 Apply [F4] to the nonnegative random variable $Y=\|M^TM-N^TN\|_F^2$ with threshold $\theta^2\|M\|_F^4>0$. Step 2.1 yields the probability bound. Transposing $M$ interchanges rows and columns, proving the column assertion. [step 2.1, F3, F4, algebra]

4.1 In the exact two-stage construction every sampled row of $S$ has squared norm $F^2/p$, so $\|S\|_F^2=F^2$ and $\sum_j f_j=1$. Every sampled column of $W$ likewise has squared norm $F^2/p$, giving $\|W\|_F=F$. Apply steps 1.1–2.1 with $M=A$, $\alpha=1$, and row law $d$ for the first Gram estimator. For each fixed $S$, apply the transposed result with $M=S^T$, $\alpha=1$, and row law $f$ for the second estimator. This proves both unbiasedness assertions and both second-moment bounds, with the second conditional on $S$. [given, F1, F3, step 1.1, step 2.1, step 3.1, algebra]

5.1 Step 3.1 bounds the first-stage tail by $1/(p\theta^2)$ and bounds the second-stage tail by the same number conditional on every $S$. Averaging the latter bound over the finite first-stage histories gives the same unconditional bound. Pointwise the indicator of either failure is at most the sum of the two failure indicators, so summing their finite probability weights gives $2/(p\theta^2)$. No independence between the stages' errors is used. [F1, step 3.1, step 4.1, algebra] ∎
