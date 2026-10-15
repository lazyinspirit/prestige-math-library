---
id: thm-studentized-two-sample-u-statistic-permutation-validity
kind: theorem
title: Studentized permutation validity under a weak two-sample parameter null
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - thm-two-sample-u-statistic-permutation-clt-under-weak-null
  - lem-permutation-consistency-from-iid-mixture
  - thm-two-sample-u-statistic-projection-clt
  - def-studentized-two-sample-u-statistic
  - thm-slutsky-for-real-random-variables
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "E. Y. Chung and J. P. Romano, Asymptotically Valid and Exact Permutation Tests Based on Two-Sample U-Statistics, Stanford Technical Report 2011-09, Theorems 3.1–3.2 and Appendix A"
      url: "https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf"
    - title: "E. Y. Chung and J. P. Romano, Exact and Asymptotically Robust Permutation Tests, Stanford Technical Report 2011-05, §3.4 and Appendix A"
      url: "https://stacks.stanford.edu/file/vs995qc2521/vs995qc2521_2011-05.pdf"
    - title: "E. Y. Chung and J. P. Romano, Exact and asymptotically robust permutation tests, The Annals of Statistics 41(2), 2013, §§2–3.1"
      url: "https://arxiv.org/pdf/1304.5939"
---

## Statement

Assume AC. Let independent IID samples $X_1,\ldots,X_m\sim P$ and $Y_1,\ldots,Y_n\sim Q$ satisfy $N=m+n$, $m/N\to p\in(0,1)$, and the weak null $\theta(P,Q;h)=0$. Fix $r$ and a measurable kernel symmetric within each block and antisymmetric under block exchange. Assume $0<E_\eta h^2<\infty$ for every independent P/Q assignment $\eta$ to the $2r$ positions. Suppose the direct first-projection variances $\sigma_X^2,\sigma_Y^2$ and limiting pooled-mixture first-projection variance $\sigma_p^2$ are positive and finite. Put $p_N=m/N$, $\bar P_N=p_NP+(1-p_N)Q$, and $\sigma_N^2=E_{\bar P_N}g_N^2\to\sigma_p^2$.

Use the nonnegative measurable variance estimates and zero-denominator convention in [[def-studentized-two-sample-u-statistic]]. Assume $\widehat\sigma_m^2\to_P\sigma_X^2$, $\widehat\sigma_n^2\to_P\sigma_Y^2$ under the original samples. For general estimates depending on both groups, assume also permutation consistency: for each $\varepsilon>0$ and $k\in\{m,n\}$,

$$P_\pi\bigl(|\widehat\sigma_{k,\pi}^2-\sigma_N^2|>\varepsilon\mid Z\bigr)\to_P0.$$

A sufficient condition for this last hypothesis is that each estimate is a statistic of its own group alone, and is consistent for $\sigma_N^2$ on an IID $\bar P_N$ sample of that group's size. Joint estimates may instead establish permutation consistency directly.

Then the conditional permutation CDF of $S_{m,n}=U_{m,n}/V_{m,n}^{\rm SE}$ converges uniformly in probability to $\Phi$, and $S_{m,n}\Rightarrow N(0,1)$ under the true sampling law, where

$$V_{m,n}^{\rm SE}=r\sqrt{\widehat\sigma_m^2/m+\widehat\sigma_n^2/n}.$$

## Facts & Assumptions

**Given:** The weak-null, moment, positive-projection and estimator-consistency hypotheses in the Statement.

[F1] [[thm-two-sample-u-statistic-permutation-clt-under-weak-null]] gives the conditional permutation limit of $\sqrt m U$ with variance $\tau_p^2=r^2\sigma_p^2/(1-p)$. Its proof also shows $\sigma_N^2\to\sigma_p^2$ from the finite family of mixed second moments.

[F2] [[lem-permutation-consistency-from-iid-mixture]] transfers consistency of a statistic of one IID triangular-mixture group to that permuted group.

[F3] [[thm-two-sample-u-statistic-projection-clt]] gives the true-sampling CLT with variance $a^2=r^2(\sigma_X^2+(p/(1-p))\sigma_Y^2)>0$.

[F4] [[def-studentized-two-sample-u-statistic]] defines $V^{\rm SE}$ and sets the ratio to zero if that standard error is zero.

[F5] [[thm-slutsky-for-real-random-variables]] divides a weak limit by a positive probability limit.

[A1] AC is inherited through [F1]–[F3]. [[def-axiom-of-choice]]

## Proof

**Given:** The hypotheses in the Statement. Prove both standard-normal limits and the sufficient consistency criterion.

1.1 If an estimate depends on its own group alone and has the stated IID triangular-mixture consistency, [F2] gives its unconditional convergence under a random permutation. The expectation of its conditional failure probability given $Z$ is that unconditional failure probability, which tends to zero. Markov's inequality makes the conditional failure probability tend to zero in probability, proving the sufficient condition. For general joint estimates, this conditional convergence is assumed directly. A union bound treats the two estimates simultaneously. [A1, F2, given, algebra]

1.2 Thus $\sqrt m V^{{\rm SE},\pi}=r\sqrt{\widehat\sigma_{m,\pi}^2+(m/n)\widehat\sigma_{n,\pi}^2}$ converges in conditional probability, in probability over $Z$, to $\tau_p=r\sqrt{\sigma_p^2/(1-p)}>0$. In particular, the conditional probability of a zero denominator tends to zero. [F4, step 1.1, given, algebra]

2.1 For fixed $t$ and $0<\delta<\tau_p/2$, restrict to $|\sqrt m V^{{\rm SE},\pi}-\tau_p|<\delta$. There the event $S^\pi\le t$ is bounded between the numerator events with thresholds $t(\tau_p-\delta)$ and $t(\tau_p+\delta)$, reversing their order for $t<0$. The excluded event has conditional probability tending to zero by step 1.2. Apply [F1] at those thresholds and then let $\delta\downarrow0$ to obtain conditional CDF convergence to $\Phi(t)$. A finite grid on a bounded interval with small normal tail probabilities and small adjacent normal CDF increments, together with monotonicity, makes this convergence uniform in $t$. [A1, F1, step 1.2, algebra]

3.1 Under the original sampling law, estimator consistency and [F4] give $\sqrt m V^{\rm SE}\to_P a>0$, while [F3] gives $\sqrt m U\Rightarrow N(0,a^2)$. By [F5], their ratio converges to $N(0,1)$. The zero-denominator convention changes an event of probability tending to zero. [A1, F3, F4, F5, given, algebra] ∎

## Remarks

The standard-error ratio $S$ is the pivot. The report's normalization is $V^{\rm CR}=\sqrt m V^{\rm SE}$, so its $\sqrt m(U/V^{\rm CR})$ equals $S$. An extra factor $\sqrt m$ on the present $S$ would be erroneous.

Assignment-wise centering is not required by the locally proved coupling and permutation CLT. The report's stronger coupling assumptions are not inferred from the weak null, and no unavailable 2013 supplementary proof is used. IID-mixture consistency alone transfers by [F2] only for separate-group statistics; general joint estimates require the explicit permutation condition above.
