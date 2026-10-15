---
id: ex-same-mean-unequal-variance-studentized-permutation-test
kind: example
title: Studentized difference of means with equal means and unequal variances
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 7
deps:
  - thm-studentized-permutation-validity-under-mixed-assignment-centering
  - thm-two-sample-u-statistic-permutation-clt-under-mixed-centering
  - def-studentized-two-sample-u-statistic
  - def-two-sample-order-r-u-statistic-and-first-projections
  - def-two-sample-u-statistic-parameter
  - def-moments-variance-and-covariance
  - def-identically-distributed-and-iid-random-variables
  - thm-chebyshev-inequality
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "E. Y. Chung and J. P. Romano, Asymptotically Valid and Exact Permutation Tests Based on Two-Sample U-Statistics, Stanford Technical Report 2011-09, Theorem 3.2 and Example 3.1"
      url: "https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf"
---

## Example

Assume AC. Let $P$ assign probability $1/2$ to each of $-1,1$, and let $Q$ assign
probability $1/2$ to $0$ and probability $1/4$ to each of $-2,2$. Take
$h(x,y)=x-y$, so $r=1$ and $\theta(P,Q;h)=\mu_P-\mu_Q$. Let
$m/N\to1/4$. For a group $W_1,\ldots,W_k$, put
$\bar W_k=k^{-1}\sum_{i=1}^kW_i$ and
$\widehat\sigma_k^2=(k-1)^{-1}\sum_{i=1}^k(W_i-\bar W_k)^2$ for
$\widehat\sigma_m^2$ and $\widehat\sigma_n^2$ in the studentized statistic.

## Facts & Assumptions

**Given:** AC, the finite laws $P,Q$, kernel $h(x,y)=x-y$, and sample-size ratio $p=1/4$.

[F1] [[def-two-sample-u-statistic-parameter]]: $\theta(P,Q;h)=E_PX-E_QY$.

[F2] [[def-two-sample-order-r-u-statistic-and-first-projections]]: for $r=1$, $U_{m,n}=\bar X_m-\bar Y_n$, $g_X(x)=E[h(x,Y)]-\theta$, and $g_Y(y)=E[h(X,y)]-\theta$.

[F3] [[thm-two-sample-u-statistic-permutation-clt-under-mixed-centering]]: under the all-assignment centered kernel premise, the raw permutation limit of $\sqrt m U$ has variance $r^2\sigma_{\bar P}^2/(1-p)$.

[F4] [[thm-studentized-permutation-validity-under-mixed-assignment-centering]]: consistent direct and pooled-mixture variance estimates give standard-normal true and permutation limits.

[F5] [[def-moments-variance-and-covariance]]: variance is the expectation of the squared centered deviation.

[F6] [[thm-chebyshev-inequality]]: for a finite random variable, its sample-average deviation probability is bounded by its variance divided by the squared threshold.

[A1] AC is assumed by the asymptotic permutation and sampling limit results [F3]–[F4]. [[def-axiom-of-choice]]

## Verification

**Given:** AC, $P,Q,h$, and $p=1/4$. Verify the weak null, projection conditions, studentizer consistency, and the unstudentized variance mismatch.

1.1 Both means are zero. The variances are $\sigma_P^2=1$ and $\sigma_Q^2=2$, so [F1] gives $\theta=0$. The kernel is antisymmetric, and under every P/Q assignment its expectation is the difference of two zero means, hence zero. Its second moment is the sum of the two positive variances, so it is finite and strictly positive for every assignment. [F1, F5, given, algebra]

1.2 For $k$ observations $W_1,\ldots,W_k$, the sample variance is $\widehat\sigma_k^2=\frac{k}{k-1}\{k^{-1}\sum_iW_i^2-(k^{-1}\sum_iW_i)^2\}$ for $k\ge2$. Under either finite-support law $P$ or $Q$, Chebyshev [F6] applied to the averages of $W_i$ and $W_i^2$ gives convergence in probability to their expectations, so $\widehat\sigma_m^2\to1$ and $\widehat\sigma_n^2\to2$. Under IID $\bar P_N$ rows, $|W_i|\le2$ uniformly in $N$, so the variances of both averages are bounded by constants divided by their row sizes; [F6] again gives convergence to their row expectations. These means are $0$ and $p_N(1)+(1-p_N)(2)\to7/4$, so both mixture-sample variance estimates converge to $7/4$. [F5, F6, given, algebra]

2.1 From [F2], $g_X(x)=x$ and $g_Y(y)=-y$, so their variances are $1$ and $2$. The pooled mixture has mean zero and variance $\sigma_{\bar P_N}^2=\frac14\sigma_P^2+\frac34\sigma_Q^2=\frac74.$ It is positive. [F2, F5, step 1.1, algebra]

3.1 Under AC [A1], the hypotheses of [F4] now hold, including positive direct and pooled projection variances, so the studentized statistic has standard-normal true-sampling and permutation limits. This example has a weak parameter null while $P\ne Q$. [A1, F4, step 1.1, step 2.1, step 1.2]

4.1 Under AC [A1], the true-sampling variance of $\sqrt m U_{m,n}$ tends to $\sigma_P^2+\frac p{1-p}\sigma_Q^2=1+\frac13\cdot2=\frac53,$ by [F2] and the projection CLT. The raw permutation variance tends instead to $\frac{\sigma_{\bar P}^2}{1-p}=\frac{7/4}{3/4}=\frac73$ by [F3]. Thus an unstudentized two-sided normal permutation test using nominal level $\alpha\in(0,1)$ has limiting rejection probability $2\left(1-\Phi\left(z_{1-\alpha/2}\sqrt{\frac75}\right)\right)<\alpha,$ where $z_{1-\alpha/2}>0$ is the standard-normal quantile. Studentization corrects this variance mismatch. [A1, F2, F3, step 2.1, algebra] ∎
