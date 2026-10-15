---
id: thm-studentized-permutation-validity-under-mixed-assignment-centering
kind: theorem
title: Studentized permutation validity under mixed-assignment centering
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - thm-two-sample-u-statistic-permutation-clt-under-mixed-centering
  - lem-permutation-consistency-from-iid-mixture
  - thm-two-sample-u-statistic-projection-clt
  - def-studentized-two-sample-u-statistic
  - thm-slutsky-for-real-random-variables
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "E. Y. Chung and J. P. Romano, Asymptotically Valid and Exact Permutation Tests Based on Two-Sample U-Statistics, Stanford Technical Report 2011-09, Theorem 3.2 and proof"
      url: "https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf"
    - title: "E. Y. Chung and J. P. Romano, Exact and Asymptotically Robust Permutation Tests, Stanford Technical Report 2011-05, §3.4 and Lemma 3.3"
      url: "https://stacks.stanford.edu/file/vs995qc2521/vs995qc2521_2011-05.pdf"
---

## Statement

Assume AC and the sampling and kernel conditions of
[[thm-two-sample-u-statistic-permutation-clt-under-mixed-centering]]. Let
$\sigma_X^2=E_P[g_X^2]>0$, $\sigma_Y^2=E_Q[g_Y^2]>0$, and let
$\sigma_N^2=E_{\bar P_N}[g_N^2]\to\sigma_p^2>0$, where
$\bar P_N=(m/N)P+(n/N)Q$. Suppose the variance estimates in
[[def-studentized-two-sample-u-statistic]] converge to $\sigma_X^2$ and
$\sigma_Y^2$ under the original samples, and both converge to $\sigma_N^2$
under IID samples from $\bar P_N$ of their respective sizes. Then the
conditional permutation CDF of $S_{m,n}=U_{m,n}/V_{m,n}^{\rm SE}$ converges
uniformly in probability to $\Phi$, and under the true sampling law
$S_{m,n}\Rightarrow N(0,1)$.

## Facts & Assumptions

**Given:** The hypotheses in the Statement, the studentized statistic
$S=U/[r\{\widehat\sigma_m^2/m+\widehat\sigma_n^2/n\}^{1/2}]$, and the exact
triangular pooled-mixture estimator consistency conditions.

[F1] [[thm-two-sample-u-statistic-permutation-clt-under-mixed-centering]]: the permutation CDF of $\sqrt m U_{m,n}$ converges to a centered normal with variance $\tau_p^2=r^2\sigma_p^2/(1-p)$.

[F2] [[lem-permutation-consistency-from-iid-mixture]] transfers the IID $\bar P_N$ consistency assumptions to the two permuted groups.

[F3] [[thm-two-sample-u-statistic-projection-clt]]: $\sqrt m U_{m,n}$ under the true sampling law has limiting variance $r^2(\sigma_X^2+(p/(1-p))\sigma_Y^2)$.

[F4] [[def-studentized-two-sample-u-statistic]] defines $V^{\rm SE}$ with the two group sample-size denominators.

[F5] [[thm-slutsky-for-real-random-variables]]: a weak limit divided by a positive probability limit is divided by that constant.

[A1] AC is inherited through [F1] and [F3]. [[def-axiom-of-choice]]

## Proof

**Given:** The mixed-assignment centering and moment conditions, positive finite first-projection variances, and both original-sample and triangular-mixture consistency of the variance estimates. Prove the two standard-normal limits.

1.1 In a permuted group, [F2] gives $\widehat\sigma_{m,\pi}^2,\widehat\sigma_{n,\pi}^2\to\sigma_N^2$ in conditional probability. Therefore [F4] gives $\sqrt m V_{m,n}^{{\rm SE},\pi}=r\sqrt{\widehat\sigma_{m,\pi}^2+\frac mn\widehat\sigma_{n,\pi}^2}\to_P r\sqrt{\frac{N}{n}\sigma_N^2}\to\tau_p>0.$ The equality uses $1+m/n=N/n$ and the definition of $\tau_p$. [F2, F4, given, algebra]

2.1 For each fixed $t$ and $\delta>0$, on the event $|\sqrt mV^{{\rm SE},\pi}-\tau_p|<\delta<\tau_p/2$, the event $\{\sqrt mU^\pi/(\sqrt mV^{{\rm SE},\pi})\le t\}$ is squeezed between the corresponding thresholds for $\sqrt mU^\pi$ at $t(\tau_p-\delta)$ and $t(\tau_p+\delta)$ (reversed when $t<0$). The complement event has conditional probability tending to zero by step 1.1. [F1] gives the limiting CDF $\Phi(\cdot/\tau_p)$ for the numerator. Letting $\delta\downarrow0$ and using continuity of $\Phi$ proves pointwise convergence of the studentized conditional CDF to $\Phi(t)$. A finite continuity grid and monotonicity make the convergence uniform. [A1, F1, step 1.1, algebra]

3.1 Under the original sampling law, [F3] gives the normal limit for $\sqrt m U$. The direct consistency assumptions in the Statement and [F4] give $\sqrt m V_{m,n}^{\rm SE}\to_P r\sqrt{\sigma_X^2+\frac p{1-p}\sigma_Y^2}>0.$ Applying [F5] to the ratio gives $S_{m,n}\Rightarrow N(0,1)$. [A1, F3, F4, F5, given, algebra] ∎

## Remarks

This theorem includes the assignment-wise zero-mean hypothesis of the preceding permutation-CLT theorem. The assigned BCS-52 design does not state that hypothesis; the separate broad weak-null item remains escalated pending owner reconciliation.
