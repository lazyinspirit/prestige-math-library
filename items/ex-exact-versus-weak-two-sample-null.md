---
id: ex-exact-versus-weak-two-sample-null
kind: example
title: Exact equality null versus weak parameter null
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 8
deps:
  - cor-two-sample-permutation-exact-under-equal-distributions
  - thm-studentized-permutation-validity-under-mixed-assignment-centering
  - def-studentized-two-sample-u-statistic
  - def-two-sample-u-statistic-parameter
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "E. Y. Chung and J. P. Romano, Asymptotically Valid and Exact Permutation Tests Based on Two-Sample U-Statistics, Stanford Technical Report 2011-09, §3"
      url: "https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf"
---

## Example

For the sample-mean kernel $h(x,y)=x-y$, compare two cases. First take
$P=Q$ equal to the Rademacher law. Second take the distinct laws
$P(\{-1,1\})=(1/2,1/2)$ and
$Q(\{-2,0,2\})=(1/4,1/2,1/4)$. Both cases satisfy the weak parameter null
$E_PX-E_QY=0$, but only the first has an invariant pooled law under all
label permutations. In both cases use the usual sample variances as
$\widehat\sigma_m^2,\widehat\sigma_n^2$ in
[[def-studentized-two-sample-u-statistic]], and take $m/N\to1/2$.
For a group $W_1,\ldots,W_k$, put
$\bar W_k=k^{-1}\sum_{i=1}^kW_i$ and
$\widehat\sigma_k^2=(k-1)^{-1}\sum_{i=1}^k(W_i-\bar W_k)^2$.

## Facts & Assumptions

**Given:** The two law pairs and the mean-difference kernel in the Example.

[F1] [[def-two-sample-u-statistic-parameter]]: $\theta(P,Q;h)=E_PX-E_QY$.

[F2] [[cor-two-sample-permutation-exact-under-equal-distributions]]: when $P=Q$, the inclusive permutation p-value is superuniform and independent-uniform tie randomization is exact.

[F3] [[thm-studentized-permutation-validity-under-mixed-assignment-centering]]: under a weak mean-difference null with the stated moment, variance, and studentizer conditions, studentization gives asymptotic standard-normal permutation and sampling limits.

[F4] [[def-studentized-two-sample-u-statistic]] defines the statistic using the two nonnegative variance estimates and its zero-denominator convention.

[F5] [[thm-chebyshev-inequality]] proves consistency of bounded finite-support sample means and second moments.

[A1] AC is assumed by the asymptotic permutation limit result [F3]. [[def-axiom-of-choice]]

## Verification

**Given:** AC, the law pairs, $h(x,y)=x-y$, the sample-variance estimators, and $m/N\to1/2$. Verify the shared parameter null and distinguish their invariance conditions.

1.1 In both cases, $E_PX=E_QY=0$, so [F1] gives $\theta=0$. The kernel is antisymmetric, and for either assignment of P and Q to its two arguments its mean is $0-0=0$. All mixed second moments are finite and positive because the two laws have finite positive variances. [F1, given, algebra]

1.2 In the first case $P=Q$, so the joint law of the pooled IID sample is invariant under coordinate permutations; [F2] gives finite-sample superuniformity and exactness after tie randomization. In the second case $P\ne Q$ (for example, $P(X=0)=0$ and $Q(Y=0)=1/2$), so swapping coordinates across groups does not preserve the sampling law. The parameter null alone therefore does not supply the finite-sample exchangeability premise of [F2]. [F2, given, algebra]

2.1 Under AC [A1], in each case the two population variances are positive, and the pooled-mixture variance is positive. For any bounded law $R$, [F5] applied to $W$ and $W^2$ shows that their sample averages converge to $E_R W$ and $E_R W^2$; the identity $\widehat{\operatorname{Var}}(W)=\frac{k}{k-1}\{\overline{W^2}-\bar W^2\}$ then proves sample-variance consistency. For the triangular pooled laws $\bar P_N$, the same Chebyshev bounds are uniform because the support stays in $\{-2,-1,0,1,2\}$, and their variances converge to $1$ in the first case and $\frac32$ in the second. Thus the estimators in [F4] satisfy the conditions of [F3]. In the second case, studentization has the asymptotic standard-normal calibration even though finite-sample group exchangeability is absent. [A1, F3, F4, F5, given, algebra] ∎
