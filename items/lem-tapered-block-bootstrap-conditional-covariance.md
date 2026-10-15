---
id: lem-tapered-block-bootstrap-conditional-covariance
kind: lemma
title: Exact conditional covariance of a tapered block bootstrap mean
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps: [alg-tapered-block-bootstrap]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "D. Pilavakis, E. Paparoditis, and T. Sapatinas, Moving block and tapered block bootstrap for functional time series with an application to the K-sample mean problem, Bernoulli 25 (2019), Section 2.3"
      url: https://arxiv.org/pdf/1711.01070
---

## Statement

Fix a positive integer $n$, observations $Y_1,\ldots,Y_n\in H$, an integer block length $b$ with $1\le b\le n$ and $W_b>0$, and the taper and scale $w_b,a_b$ from [[alg-tapered-block-bootstrap]]. Set $R_t=Y_t-\bar Y_n$, $N=n-b+1$, $k=\lfloor n/b\rfloor$, and $r=n-kb$. For $q=b$, and also $q=r$ when $r>0$, define the tapered partial block sum

$$T_j^{(q)}=a_b\sum_{\ell=1}^q w_b(\ell)R_{j+\ell-1},\qquad \bar T_q=N^{-1}\sum_{j=1}^N T_j^{(q)},\qquad V_q=N^{-1}\sum_{j=1}^N(T_j^{(q)}-\bar T_q)\otimes(T_j^{(q)}-\bar T_q).$$

Set $V_0=0$. If $\bar X_n^*$ is the tapered bootstrap mean, then

$$n\,\operatorname{Cov}^*(\bar X_n^*)=\frac{kV_b+V_r}{n},$$

with the $V_r$ term zero when $r=0$.

## Facts & Assumptions

**Given:** Fixed observations, a positive taper norm $W_b$, and the conditional block-index law in the Definition.

[F1] [[alg-tapered-block-bootstrap]]: Each resampled block consists of the centered observations multiplied positionwise by $a_bw_b(\ell)$; the starts are independent uniform indices, and the final block is truncated if necessary.

## Proof

**Given:** The data and bootstrap randomization in the Statement.

1.1 Write $n=kb+r$, $0\le r<b$. The sum of the first $n$ tapered bootstrap observations is the sum of $k$ complete tapered block sums and, if $r>0$, the first $r$ tapered entries of one additional block. Conditional on the data these contributions are independent; their centered covariance operators are $V_b$ and, when present, $V_r$, because every block start is uniform on the same $N$ choices. [F1, given, algebra]

2.1 Divide the block-sum total by $n$. Independence and centering eliminate all off-diagonal tensor terms, so $\operatorname{Cov}^*(\bar X_n^*)=n^{-2}(kV_b+V_r)$. Multiplication by $n$ proves the identity. [step 1.1, algebra] ∎
