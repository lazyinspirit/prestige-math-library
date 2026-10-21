---
id: lem-uniform-client-sampling-moments
kind: lemma
title: Moments of a uniformly sampled fixed-size client set
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-federated-objective-and-client-sampling
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - cor-expectation-agrees-with-the-finite-weighted-sum
  - def-euclidean-inner-product
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Sai Praneeth Karimireddy et al., SCAFFOLD, Appendix D.2"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
proof_strategy: direct
---

## Statement

Let $v_1,\ldots,v_N\in\mathbb R^d$, let $1\le S\le N$, and choose
$\mathcal S$ uniformly from the $S$-element subsets of $\{1,\ldots,N\}$. Put
$\bar v=N^{-1}\sum_i v_i$ and
$\bar v_{\mathcal S}=S^{-1}\sum_{i\in\mathcal S}v_i$. If $N>1$, then
$$ \mathbb E[\bar v_{\mathcal S}]=\bar v,\qquad \mathbb E\|\bar v_{\mathcal S}-\bar v\|_2^2 =\left(1-\frac SN\right)\frac{1}{S(N-1)} \sum_{i=1}^N\|v_i-\bar v\|_2^2. $$
In particular,
$$ \mathbb E\|\bar v_{\mathcal S}-\bar v\|_2^2 \le2\left(1-\frac SN\right)\frac1S \frac1N\sum_{i=1}^N\|v_i\|_2^2. $$
If $N=1$, necessarily $S=1$ and $\bar v_{\mathcal S}=\bar v$.

## Facts & Assumptions

**Given:** The finite client set, fixed vectors, and uniform subset law in the Statement.

[F1] [[def-federated-objective-and-client-sampling]]: all $S$-element subsets have equal probability.

[F2] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: expectation on this finite probability space is the integral; finite-valued expectations are the corresponding finite weighted sums by [[cor-expectation-agrees-with-the-finite-weighted-sum]].

[F3] [[def-euclidean-inner-product]]: the squared Euclidean norm expands as the sum of squared coordinates and the inner product is bilinear.

## Proof

1.1 Assume $N>1$ and define $I_i=\mathbf1_{\{i\in\mathcal S\}}$ and [given]
$p=S/N$. Counting equally likely subsets gives
$\mathbb E[I_i]=\binom{N-1}{S-1}/\binom NS=p$. For distinct $i,j$,
$\mathbb E[I_iI_j]=S(S-1)/(N(N-1))$: this is zero for $S=1$, and for
$S\ge2$ it is $\binom{N-2}{S-2}/\binom NS$. Thus
$$ \mathbb E[(I_i-p)^2]=\frac{S(N-S)}{N^2},\qquad \mathbb E[(I_i-p)(I_j-p)] =-\frac{S(N-S)}{N^2(N-1)}\quad(i\ne j). $$
These expectations are finite weighted sums by [F2]. [F1, F2, given,
algebra]

1.2 Since $\sum_i I_i=S$, we have [given]
$\bar v_{\mathcal S}-\bar v=S^{-1}\sum_i(I_i-p)(v_i-\bar v)$.
Also $\sum_i(v_i-\bar v)=0$, so
$\sum_{i\ne j}\langle v_i-\bar v,v_j-\bar v\rangle
=-\sum_i\|v_i-\bar v\|_2^2$. Expanding the squared norm [F3] and using
step 1.1 yields
$$ \begin{aligned} \mathbb E\|\bar v_{\mathcal S}-\bar v\|_2^2 &=\frac1{S^2}\left[ \frac{S(N-S)}{N^2}\sum_i\|v_i-\bar v\|_2^2 -\frac{S(N-S)}{N^2(N-1)} \sum_{i\ne j}\langle v_i-\bar v,v_j-\bar v\rangle \right]\\ &=\frac{N-S}{SN(N-1)}\sum_i\|v_i-\bar v\|_2^2. \end{aligned} $$
The first-moment identity follows from $\mathbb E[I_i]=S/N$ in step 1.1.
[F2, F3, step 1.1, given, algebra]

2.1 The identity $N^{-1}\sum_i\|v_i-\bar v\|_2^2 =N^{-1}\sum_i\|v_i\|_2^2-\|\bar v\|_2^2$ and $N/(N-1)\le2$ give the stated upper bound. If $N=1$, the only size-one subset is the full set, so its sample mean equals $\bar v$ and its variance is zero. [F3, step 1.2, given, algebra] ∎
