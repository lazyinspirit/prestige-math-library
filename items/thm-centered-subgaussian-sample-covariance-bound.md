---
id: thm-centered-subgaussian-sample-covariance-bound
kind: theorem
title: "Dense sample covariance concentration for sub-Gaussian vectors"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-identically-distributed-and-iid-random-variables
  - def-independent-random-elements
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-sample-covariance-and-operator-norm-loss
  - def-subgaussian-variable-and-vector
  - thm-cauchy-schwarz-finite
  - lem-epsilon-net-controls-symmetric-operator-norm
  - lem-epsilon-net-of-unit-sphere-has-cardinality-bound
  - lem-products-of-subgaussian-coordinates-are-subexponential
  - lem-probability-measure-basic-identities
  - lem-measurable-functions-preserve-independence
  - thm-factorization-of-expectations-for-independent-variables
  - thm-finite-subgaussian-maximum-and-epsilon-net
  - thm-subexponential-independent-sums
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet, 18.S997 High-Dimensional Statistics, Chapter 4, Theorem 4.6"
      url: "https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf"
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 4"
      url: "https://arxiv.org/pdf/2310.19244v1"
---

## Statement

Let $Z_1,\ldots,Z_n$ be iid centered random vectors in $\mathbb R^p$ with covariance $\Sigma$ and finite second moments. Suppose each $Z_i$ is sub-Gaussian with vector proxy $L=\|\Sigma\|_{\mathrm{op}}$, as in [[def-subgaussian-variable-and-vector]]. For $\delta\in(0,1)$ put
$$r=\frac{p+\log(4/\delta)}{n}.$$
For both the known-mean estimator $\widehat\Sigma_0=n^{-1}\sum_i Z_iZ_i^{\mathsf T}$ and the sample-centered estimator $\widehat\Sigma^*=n^{-1}\sum_i(Z_i-\bar Z)(Z_i-\bar Z)^{\mathsf T}$, where $\bar Z=n^{-1}\sum_iZ_i$,
$$P\left(\|\widehat\Sigma_0-\Sigma\|_{\mathrm{op}}\le C L(\sqrt r+r)\right)\ge1-\delta, \qquad P\left(\|\widehat\Sigma^*-\Sigma\|_{\mathrm{op}}\le C L(\sqrt r+r)\right)\ge1-\delta$$
for a universal constant $C$ (the proof permits $C=176$). Since $p\ge1$, this is equivalent up to a universal factor to the displayed dense rate with $p+\log(1/\delta)$. If $L=0$, both estimators equal $\Sigma=0$ almost surely.

## Facts & Assumptions

**Given:** Iid centered $Z_i\in\mathbb R^p$ with covariance $\Sigma$, sub-Gaussian proxy $L=\|\Sigma\|_{\mathrm{op}}$, integers $n,p\ge1$, and $\delta\in(0,1)$.

[F1] The known-mean and sample-centered covariance estimators are as defined in [[def-sample-covariance-and-operator-norm-loss]].

[F2] Each unit-direction projection of $Z_i$ is centered sub-Gaussian with proxy $L$ ([[def-subgaussian-variable-and-vector]]).

[F3] The centered product of two such projections is sub-exponential with parameters $(256L^2,16L)$ ([[lem-products-of-subgaussian-coordinates-are-subexponential]]).

[F4] For independent centered sub-exponential variables with variance proxies summing to $v$ and maximum scale $b$, the two-sided sum tail is $2\exp[-\tfrac12\min(t^2/v,t/b)]$ ([[thm-subexponential-independent-sums]]).

[F5] A $1/4$-net of the sphere has at most $9^p$ points ([[lem-epsilon-net-of-unit-sphere-has-cardinality-bound]]), and its quadratic forms control a symmetric operator norm by a factor $2$ ([[lem-epsilon-net-controls-symmetric-operator-norm]]).

[F6] The finite-vector sub-Gaussian net bound controls $\|W\|_2$ from the sub-Gaussian projections of $W$ ([[thm-finite-subgaussian-maximum-and-epsilon-net]]).

[F7] For independent real random variables, expectations of products of nonnegative measurable functions factor ([[thm-factorization-of-expectations-for-independent-variables]]).

[F8] Probability is countably subadditive ([[lem-probability-measure-basic-identities]]).

[F9] The covariance matrix is $\Sigma=E[ZZ^{\mathsf T}]$, hence symmetric, and $v^{\mathsf T}\Sigma v=E[(v^{\mathsf T}Z)^2]\ge0$ ([[def-sample-covariance-and-operator-norm-loss]]).

[F10] The sample vectors are iid and hence mutually independent; applying the common Borel projection and square-minus-mean map preserves independence and identical distribution, so the centered products $W_i$ are iid ([[def-identically-distributed-and-iid-random-variables]], [[def-independent-random-elements]], [[lem-measurable-functions-preserve-independence]]).

[F11] The operator norm is the maximum of $\|Av\|_2$ over unit vectors ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F12] The Euclidean inner product satisfies $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$ ([[thm-cauchy-schwarz-finite]]).

## Proof



1.1 If $L=0$, [F2] and [F6] imply $P(\|Z_i\|_2\ge1/m)=0$ for each $i$ and positive integer $m$. By [F8], the countable union over $i,m$ shows that every $Z_i=0$ almost surely; then [F9] gives $\Sigma=0$, and both estimators are exact. Assume $L>0$. Fix a unit vector $u$ and set $W_i=(u^{\mathsf T}Z_i)^2-E[(u^{\mathsf T}Z_i)^2]$. By [F2]–[F3], each $W_i$ is centered sub-exponential with parameters $(256L^2,16L)$; [F10] gives that these variables are iid across $i$. [F1, F2, F3, F6, F8, F9, F10, given]

1.2 By [F10] the sample vectors are independent, and [F7] gives, for every $u\in\mathbb R^p$ and $\lambda\in\mathbb R$, $E e^{\lambda\langle u,\bar Z\rangle}=\prod_{i=1}^n E e^{(\lambda/n)\langle u,Z_i\rangle}\le e^{L\lambda^2\|u\|_2^2/(2n)}.$ Thus $\bar Z$ is centered sub-Gaussian with proxy $L/n$. Applying the vector clause of [F6] with a $1/2$-net at $s=4\sqrt{Lr}$ gives $P(\|\bar Z\|_2^2>16Lr)\le2\cdot5^p e^{-2(p+x)}\le\delta/2,$ since $r=(p+x)/n$ and $x=\log(4/\delta)$. [F2, F6, F7, F10, given, algebra]

2.1 Applying [F4] to $\sum_iW_i$ gives, for every $t>0$, $P\left(\left|u^{\mathsf T}(\widehat\Sigma_0-\Sigma)u\right|>t\right)\le2\exp\left[-\frac12\min\left\{\frac{nt^2}{256L^2},\frac{nt}{16L}\right\}\right].$ This is uniform over unit $u$. [F1, F4, step 1.1, algebra]

3.1 Take a $1/4$-net with at most $9^p$ points and put $x=\log(4/\delta)$, so $r=(p+x)/n$. With $C_0=80$ and $t=C_0L(\sqrt r+r)$, the exponent in step 2.1 is at least $\frac12\min\{80^2/256,80/16\}(p+x)=\frac52(p+x)\ge p\log9+x$. A union bound gives probability at least $1-\delta/2$ that every net quadratic form is at most $t$ in absolute value. [F5, step 2.1, algebra]

4.1 By [F9], $\widehat\Sigma_0-\Sigma$ is symmetric. On the event in step 3.1, [F5] gives $\|\widehat\Sigma_0-\Sigma\|_{\mathrm{op}}\le2t=160L(\sqrt r+r)$. This proves the first estimate. [F5, F9, step 3.1, algebra]

5.1 Expanding [F1] gives $\widehat\Sigma^*=\widehat\Sigma_0-\bar Z\bar Z^{\mathsf T}$. For $w\ne0$ and unit $v$, [F12] gives $\|ww^{\mathsf T}v\|_2=\|w\|_2|\langle w,v\rangle|\le\|w\|_2^2$, with equality at $v=w/\|w\|_2$; if $w=0$, both sides vanish. Thus [F11] gives $\|\bar Z\bar Z^{\mathsf T}\|_{\mathrm{op}}=\|\bar Z\|_2^2$. For vectors $a,b$, [F12] and $\|a+b\|_2^2=\|a\|_2^2+2\langle a,b\rangle+\|b\|_2^2$ give $\|a+b\|_2\le\|a\|_2+\|b\|_2$; applying this inside the maximum in [F11] gives $\|A+B\|_{\mathrm{op}}\le\|A\|_{\mathrm{op}}+\|B\|_{\mathrm{op}}$. Combining the probability-$1-\delta/2$ events from steps 1.2 and 3.1, their intersection has probability at least $1-\delta$ by [F8], and the resulting error is at most $160L(\sqrt r+r)+16Lr\le176L(\sqrt r+r)$. [F1, F8, F11, F12, step 4.1, step 1.2, step 3.1, algebra] ∎

