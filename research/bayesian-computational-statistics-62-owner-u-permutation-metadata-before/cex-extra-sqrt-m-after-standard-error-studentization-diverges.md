---
id: cex-extra-sqrt-m-after-standard-error-studentization-diverges
kind: counterexample
title: An extra square-root sample-size factor destroys standard-error studentization
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 7
deps:
  - thm-studentized-permutation-validity-under-mixed-assignment-centering
  - def-studentized-two-sample-u-statistic
  - def-two-sample-u-statistic-parameter
  - def-identically-distributed-and-iid-random-variables
  - def-moments-variance-and-covariance
  - thm-chebyshev-inequality
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
sources:
  references:
    - title: "E. Y. Chung and J. P. Romano, Asymptotically Valid and Exact Permutation Tests Based on Two-Sample U-Statistics, Stanford Technical Report 2011-09, Theorem 3.2"
      url: "https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf"
---

## Statement refuted

If $V_{m,n}^{\rm SE}$ is the estimated standard error in
[[def-studentized-two-sample-u-statistic]] and
$S_{m,n}=U_{m,n}/V_{m,n}^{\rm SE}$, then the extra scaling
$\sqrt m\,S_{m,n}$ still has a standard-normal limit.

## Facts & Assumptions

**Given:** AC, the Rademacher law, $h(x,y)=x-y$, proportional sample sizes, and
the sample-variance studentizer.

[F1] [[def-two-sample-u-statistic-parameter]]: for $r=1$,
$\theta(P,Q;h)=E_PX-E_QY$.

[F2] [[def-identically-distributed-and-iid-random-variables]]: the two
samples are independent IID Rademacher samples.

[F3] [[def-moments-variance-and-covariance]]: variance is the second
centered moment.

[F4] [[thm-chebyshev-inequality]]: sample averages of bounded IID variables
converge in probability to their expectations.

[F5] [[def-studentized-two-sample-u-statistic]]: standard-error studentization
sets $S_{m,n}=U_{m,n}/V_{m,n}^{\rm SE}$.

[F6] [[thm-studentized-permutation-validity-under-mixed-assignment-centering]]:
when its stated hypotheses hold, both $S_{m,n}\Rightarrow N(0,1)$ and its
conditional permutation CDF converge uniformly in probability to $\Phi$.

[A1] AC is assumed by the asymptotic permutation limit result [F6]. [[def-axiom-of-choice]]

## Counterexample

Let $P=Q$ be the Rademacher law on $\{-1,1\}$, take $r=1$ and
$h(x,y)=x-y$, and let $m/(m+n)\to p\in(0,1)$. Use the two usual sample
variances
$$\widehat\sigma_k^2=\frac1{k-1}\sum_{i=1}^k(W_i-\bar W_k)^2,\qquad \bar W_k=\frac1k\sum_{i=1}^kW_i,$$
in $V_{m,n}^{\rm SE}$.

**Given:** $P=Q$ Rademacher, $h(x,y)=x-y$, and the usual sample variances.
Verify the standard-normal limits and refute the extra-scaled claim.

1.1 The two population means are zero and the two variances are one, so $\theta(P,Q;h)=0$ by [F1]. The kernel is antisymmetric, and both P/Q assignments have mean zero. For each assignment, $h^2$ equals $0$ on the two equal-sign pairs and $4$ on the two opposite-sign pairs, each of probability $1/4$, so $E[h^2]=2$. The first projections are $g_X(x)=E[x-Y]-\theta=x$ and $g_Y(y)=E[X-y]-\theta=-y$; each has variance $1$. [F1, F2, F3, algebra]

1.2 Under AC [A1], the sample variances are measurable finite-sample statistics. Here $W_i^2=1$ exactly and, by [F4], the sample mean $\bar W$ converges in probability to $0$; the identity $\widehat{\operatorname{Var}}(W)=\frac{k}{k-1}(1-\bar W^2)$ then gives consistency to $1$. The pooled mixture is the same Rademacher law, so this consistency holds in both permuted groups and the positive pooled projection variance is also $1$. Thus [F6] applies and gives the standard-normal limits for $S_{m,n}$ itself and its conditional permutation distribution. [A1, F2, F3, F4, F5, F6, given, algebra]

2.1 For every fixed $M>0$ and every $\varepsilon>0$, eventually $M/\sqrt m<\varepsilon$, hence $P(|\sqrt m\,S_{m,n}|\le M)\le P(|S_{m,n}|\le\varepsilon).$ By the true-sampling convergence in step 1.2, the limsup of the right side is at most $\Phi(\varepsilon)-\Phi(-\varepsilon)$. Letting $\varepsilon\downarrow0$ proves $P(|\sqrt m\,S_{m,n}|\le M)\to0$; thus $|\sqrt m\,S_{m,n}|\to\infty$ in probability. [F6, step 1.2, algebra]

3.1 Under AC [A1], let $F_N^\pi$ be the conditional permutation CDF of $S_{m,n}^\pi$. For fixed $\varepsilon>0$, eventually $M/\sqrt m<\varepsilon$, so $P_\pi(|\sqrt m\,S_{m,n}^\pi|\le M\mid Z)\le F_N^\pi(\varepsilon)-F_N^\pi(-\varepsilon-),$ where $F_N^\pi(-\varepsilon-)$ denotes the left limit of the conditional CDF. By [F6], the right side converges in probability to $\Phi(\varepsilon)-\Phi(-\varepsilon)$. Letting $\varepsilon\downarrow0$ shows that the conditional probability of any fixed bounded interval tends to zero in probability. The standard-normal pivot is $S_{m,n}$; the extra $\sqrt m$ factor is erroneous when the denominator is already a standard error. [A1, F6, step 1.2, algebra] ∎
