---
id: thm-two-sample-u-statistic-projection-clt
kind: theorem
title: Projection CLT for a two-sample U-statistic
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-two-sample-order-r-u-statistic-and-first-projections
  - lem-two-sample-u-statistic-degenerate-remainder-order
  - thm-lindeberg-levy-iid-central-limit-theorem
  - thm-slutsky-for-real-random-variables
  - def-moments-variance-and-covariance
  - def-axiom-of-choice
  - lem-characteristic-functions-under-affine-maps-and-independent-sums
  - lem-characteristic-function-of-a-normal-law
  - cor-characteristic-function-criterion-for-weak-convergence
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "E. Y. Chung and J. P. Romano, Asymptotically Valid and Exact Permutation Tests Based on Two-Sample U-Statistics, Stanford Technical Report 2011-09, Remark 3.1"
      url: "https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf"
    - title: "Péter Major, Some Results About U-statistics, in On the Estimation of Multiple Random Integrals and U-Statistics, Lecture Notes in Mathematics 2079, Theorem 9.1"
      url: "https://static.renyi.hu/~major/articles/lect-note1.pdf"
---

## Statement

Assume the setup of [[def-two-sample-order-r-u-statistic-and-first-projections]],
$r$ is fixed, $m/N\to p\in(0,1)$, $\theta(P,Q;h)=0$, and
$0<E_P[g_X^2]=\sigma_X^2<\infty$ and
$0<E_Q[g_Y^2]=\sigma_Y^2<\infty$. If the fixed-order kernel has finite
second moments under all mixed assignments, then

$$\sqrt m\,U_{m,n}\Rightarrow N\!\left(0,\ r^2\left(\sigma_X^2+\frac p{1-p}\sigma_Y^2\right)\right).$$

## Facts & Assumptions

**Given:** Independent IID samples from $P$ and $Q$, fixed $r$, $m/N\to p\in(0,1)$, a zero parameter, and positive finite first-projection variances.

[F1] [[def-two-sample-order-r-u-statistic-and-first-projections]] defines $U_{m,n}$ and its centered projections $g_X,g_Y$.

[F2] [[lem-two-sample-u-statistic-degenerate-remainder-order]] gives $\sqrt N R_{m,n}\to0$ in $L^2$ under the mixed second-moment premises.

[F3] [[thm-lindeberg-levy-iid-central-limit-theorem]]: under AC, each IID centered real sample mean with positive finite variance has its normalized normal limit.

[F4] [[lem-characteristic-functions-under-affine-maps-and-independent-sums]], [[lem-characteristic-function-of-a-normal-law]], and [[cor-characteristic-function-criterion-for-weak-convergence]] give the independent-sum normal limit.

[F5] [[thm-slutsky-for-real-random-variables]] transfers a weak limit after adding a term converging to zero in probability.

[A1] AC is assumed exactly for the CLT and characteristic-function suppliers in [F3]–[F4]. [[def-axiom-of-choice]]

## Proof

**Given:** The assumptions in the Statement. Prove the centered normal limit at scale $\sqrt m$.

1.1 By [F1] and [F2], $\sqrt m\,U_{m,n}=r\frac1{\sqrt m}\sum_{i=1}^m g_X(X_i)+r\sqrt{\frac mn}\left(\frac1{\sqrt n}\sum_{j=1}^n g_Y(Y_j)\right)+\sqrt m R_{m,n},$ and the final term tends to zero in probability because $m/N$ is bounded and $E[(\sqrt N R_{m,n})^2]\to0$. [F1, F2, given, algebra]

1.2 The summands $g_X(X_i)$ are IID, centered, and have variance $\sigma_X^2$; [F3] gives $m^{-1/2}\sum_i g_X(X_i)\Rightarrow N(0,\sigma_X^2)$. The $g_Y(Y_j)$ are IID, centered, and have variance $\sigma_Y^2$, so the same result gives $n^{-1/2}\sum_j g_Y(Y_j)\Rightarrow N(0,\sigma_Y^2)$. The two sums are independent because the two samples are independent. [F1, F3, A1, given]

2.1 Since $\sqrt{m/n}\to\sqrt{p/(1-p)}$, the characteristic function of the sum of the first two terms in step 1.1 is the product of the two independent characteristic functions. By [F4] this product converges to the characteristic function of a centered normal with variance $r^2(\sigma_X^2+(p/(1-p))\sigma_Y^2)$; the positivity assumptions make that variance nonzero. [F1, F4, step 1.1, step 1.2, algebra]

3.1 The first two terms in step 1.1 therefore have the stated weak limit. The last term converges to zero in probability by step 1.1, so [F5] gives the claimed limit for $\sqrt m\,U_{m,n}$. All divisions are by positive finite variances, and no claim is made when either first-projection variance is zero. [F5, step 1.1, step 2.1] ∎
