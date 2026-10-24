---
id: lem-moving-block-bootstrap-conditional-covariance
kind: lemma
title: Exact conditional covariance of a moving block bootstrap mean
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps: [alg-moving-block-bootstrap]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "D. Pilavakis, E. Paparoditis, and T. Sapatinas, Moving block and tapered block bootstrap for functional time series with an application to the K-sample mean problem, Bernoulli 25 (2019), Section 2.2"
      url: https://arxiv.org/pdf/1711.01070
---

## Statement

Fix a positive integer $n$, observations $x_1,\ldots,x_n\in H$, and an integer block length $b$ with $1\le b\le n$. Put $N=n-b+1$, $k=\lfloor n/b\rfloor$, and $r=n-kb$. For $q\in\{b\}$, and also $q=r$ when $r>0$, define

$$S_j^{(q)}=\sum_{\ell=1}^q x_{j+\ell-1},\qquad \bar S_q=N^{-1}\sum_{j=1}^N S_j^{(q)},\qquad C_q=N^{-1}\sum_{j=1}^N(S_j^{(q)}-\bar S_q)\otimes(S_j^{(q)}-\bar S_q).$$

Set $C_0=0$. If $\bar X_n^*$ is the mean produced by [[alg-moving-block-bootstrap]], then its conditional covariance operator is

$$n\,\operatorname{Cov}^*(\bar X_n^*)=\frac{kC_b+C_r}{n},$$

where the $C_r$ term is zero when $r=0$. Here $\operatorname{Cov}^*(Z)=E^*[(Z-E^*Z)\otimes(Z-E^*Z)]$.

## Facts & Assumptions

**Given:** Fixed $H$-valued observations, block size $b$, and the independent uniform block-start randomization.

[F1] [[alg-moving-block-bootstrap]]: It draws independent uniform block starts, concatenates the corresponding consecutive blocks, and truncates only the last block to produce exactly $n$ observations.

## Proof

**Given:** The observations and the bootstrap law in the Statement.

1.1 Write $n=kb+r$, $0\le r<b$. The sum of the first $n$ bootstrap observations is the sum of $k$ complete selected block sums and, if $r>0$, the first $r$ entries of one additional selected block. Conditional on the data, these $k+\mathbf 1_{\{r>0\}}$ contributions are independent, and the centered covariance of each complete contribution is $C_b$, while that of the partial contribution is $C_r$ by uniformity of its start. [F1, given, algebra]

2.1 The covariance of a sum of independent centered Hilbert-valued random elements is the sum of their covariance operators: expanding the tensor product leaves only diagonal terms, since each off-diagonal expected tensor is the tensor of a zero mean with a zero mean. Dividing the sum by $n$ to obtain $\bar X_n^*$, and multiplying its covariance by $n$, gives $(kC_b+C_r)/n$. [step 1.1, algebra] ∎

## Remarks

When $r=0$, this reduces to $n\operatorname{Cov}^*(\bar X_n^*)=C_b/b$. The identity is finite-sample and makes no stationarity or moment assumption on an underlying process.
