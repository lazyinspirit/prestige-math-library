---
id: ex-studentized-rank-u-statistic-under-weak-null
kind: example
title: A studentized rank U-statistic under a weak null
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 7
deps:
  - thm-studentized-permutation-validity-under-mixed-assignment-centering
  - def-two-sample-u-statistic-parameter
  - def-two-sample-order-r-u-statistic-and-first-projections
  - def-studentized-two-sample-u-statistic
  - lem-pooled-mixture-projection-and-variance
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
    - title: "E. Y. Chung and J. P. Romano, Asymptotically Valid and Exact Permutation Tests Based on Two-Sample U-Statistics, Stanford Technical Report 2011-09, Example 3.1 and Theorem 3.2"
      url: "https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf"
---

## Example

Let $P$ put mass $1/2$ at each of $0,2$, and let $Q$ put masses
$1/4,1/2,1/4$ at $-1,1,3$, respectively. Take $r=1$ and $m/N\to1/2$, and
$$h(x,y)=\mathbf1\{y>x\}-\mathbf1\{y<x\}.$$
There are no cross-sample ties. Use the sample variances of the estimated
first projections in the standard-error studentizer. Set
$$U_{m,n}=\frac1{mn}\sum_{i=1}^m\sum_{j=1}^n h(X_i,Y_j),\qquad \widehat g_{X,i}=\frac1n\sum_{j=1}^n h(X_i,Y_j)-U_{m,n},\qquad \widehat g_{Y,j}=\frac1m\sum_{i=1}^m h(X_i,Y_j)-U_{m,n}.$$
Let $\bar{\widehat g}_X=m^{-1}\sum_i\widehat g_{X,i}$ and
$\bar{\widehat g}_Y=n^{-1}\sum_j\widehat g_{Y,j}$, and take
$$\widehat\sigma_m^2=\frac1{m-1}\sum_{i=1}^m(\widehat g_{X,i}-\bar{\widehat g}_X)^2,\qquad \widehat\sigma_n^2=\frac1{n-1}\sum_{j=1}^n(\widehat g_{Y,j}-\bar{\widehat g}_Y)^2.$$

## Facts & Assumptions

**Given:** The finite laws, the sign-rank kernel, $m/N\to1/2$, and
the projection-variance estimators described in the Example.

[F1] [[def-two-sample-u-statistic-parameter]]: the weak parameter is
$\theta(P,Q;h)=E_{P\otimes Q}h$.

[F2] [[def-two-sample-order-r-u-statistic-and-first-projections]]: for $r=1$,
$U_{m,n}$ averages $h(X_i,Y_j)$ and the first projections are the two
corresponding section means centered by $\theta$.

[F3] [[def-studentized-two-sample-u-statistic]]: the studentized statistic
uses the estimated variances of those first projections.

[F4] [[lem-pooled-mixture-projection-and-variance]]: for an antisymmetric
kernel, the pooled parameter is zero and the second pooled projection is the
negative of the first.

[F5] [[thm-studentized-permutation-validity-under-mixed-assignment-centering]]:
positive finite direct and pooled projection variances and consistent
variance estimates imply standard-normal true-sampling and permutation
limits under assignment-wise centering.

[F6] [[def-moments-variance-and-covariance]]: variance is the expected
squared deviation from the mean.

[F7] [[def-identically-distributed-and-iid-random-variables]]: each sample
consists of independent observations with its stated common law.

[F8] [[thm-chebyshev-inequality]]: sample averages of bounded IID variables
converge in probability to their expectations.

[A1] AC is assumed by the asymptotic permutation limit result [F5]. [[def-axiom-of-choice]]

## Verification

**Given:** AC, the laws and kernel in the Example. Verify the weak null,
nondegeneracy, estimator consistency, and applicability of studentization.

1.1 The kernel is antisymmetric. For $X\sim P$, its conditional mean against $Q$ is $g_X(0)=1/2$ and $g_X(2)=-1/2$, so $\theta(P,Q;h)=\frac12(1/2)+\frac12(-1/2)=0$. For the reverse P/Q assignment, the mean is $-\theta=0$ by antisymmetry. For P/P and Q/Q assignments, the two arguments are IID with the same law, so swapping them leaves their joint law unchanged while negating $h$; each such mean is therefore zero. Also, $\sigma_X^2=E_P[g_X^2]=1/4$. For $Y\sim Q$, the conditional means are $g_Y(-1)=-1$, $g_Y(1)=0$, and $g_Y(3)=1$, so $E_Qg_Y=0$ and $\sigma_Y^2=1/2$. Every P/Q or Q/P pair is distinct, so its second moment is $1$. Under P/P the second moment is the probability of unequal values, $1/2$; under Q/Q it is $1-\{(1/4)^2+(1/2)^2+(1/4)^2\}=5/8$. All four assignment-wise second moments are positive and finite. [F1, F2, F6, F7, given, algebra]

1.2 For $p=1/2$, the pooled law $\bar P=(P+Q)/2$ assigns masses $1/8,1/4,1/4,1/4,1/8$ to $-1,0,1,2,3$. The pooled projection $g_{\bar P}(z)=E_{\bar P}h(z,Y)$ has values $7/8,1/2,0,-1/2,-7/8$ at those points. Its mean is zero and $\sigma_{\bar P}^2=E_{\bar P}[g_{\bar P}^2]=\frac{49}{256}+\frac18=\frac{81}{256}>0.$ For general $p_N\to1/2$, the same finite support probabilities and projection values vary continuously with $p_N$, so the pooled projection variance tends to this positive value. [F4, F6, given, algebra]

2.1 For $x$ in the finite support of $P$, set $\widehat g_{X,i}=n^{-1}\sum_jh(X_i,Y_j)-U_{m,n}$; for $y$ in the finite support of $Q$, set $\widehat g_{Y,j}=m^{-1}\sum_ih(X_i,Y_j)-U_{m,n}$. Define $\widehat\sigma_m^2$ and $\widehat\sigma_n^2$ as the sample variances of these estimated projection values. They are nonnegative measurable statistics. In either sampling regime, each empirical frequency on the finite support converges to its row probability by [F8], uniformly over that finite support. Since $h$ is bounded, the finite sums expressing $U_{m,n}$ and each empirical section mean then converge to their corresponding product-law means. Under the true samples these limits are $\theta=0$, $E_Qh(x,Y)$, and $E_Ph(X,y)$; under two IID $\bar P_N$ samples the limits are $0$ and the pooled section integrals, because the pooled parameter is zero by antisymmetry. Subtracting $U_{m,n}$ therefore makes the estimated projections converge uniformly on each support to their centered section-integral values. The sample averages of their squares converge to the corresponding projection second moments, again by finite support and [F8]; their sample means are zero by construction. Thus the variance estimates converge to $\sigma_X^2,\sigma_Y^2$ under the true laws and to $\sigma_{\bar P_N}^2\to81/256$ under the pooled-mixture rows. [F1, F2, F3, F7, F8, step 1.2, algebra]

3.1 Under AC [A1], steps 1.1–2.1 verify assignment-wise centering, finite positive mixed second moments, positive direct projection variances, positive limiting pooled variance, and the required variance-estimator consistency. Thus [F5] applies: both the true-sampling pivot and its conditional permutation distribution converge to the standard normal, despite $P\ne Q$. [A1, F5, given, step 1.1, step 1.2, step 2.1] ∎
