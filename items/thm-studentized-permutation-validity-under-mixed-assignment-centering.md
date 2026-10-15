---
id: thm-studentized-permutation-validity-under-mixed-assignment-centering
kind: theorem
title: Studentized permutation validity under mixed-assignment centering
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 7
deps:
  - thm-studentized-two-sample-u-statistic-permutation-validity
  - thm-two-sample-u-statistic-permutation-clt-under-mixed-centering
  - def-studentized-two-sample-u-statistic
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "E. Y. Chung and J. P. Romano, Asymptotically Valid and Exact Permutation Tests Based on Two-Sample U-Statistics, Stanford Technical Report 2011-09, Theorem 3.2 and proof"
      url: "https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf"
    - title: "E. Y. Chung and J. P. Romano, Exact and Asymptotically Robust Permutation Tests, Stanford Technical Report 2011-05, §3.4 and Lemma 3.3"
      url: "https://stacks.stanford.edu/file/vs995qc2521/vs995qc2521_2011-05.pdf"
---

## Statement

Assume AC and the sampling and kernel conditions of [[thm-two-sample-u-statistic-permutation-clt-under-mixed-centering]]. Let the direct first-projection variances $\sigma_X^2,\sigma_Y^2$ and pooled variance $\sigma_p^2$ be positive and finite, and put $\sigma_N^2=E_{\bar P_N}g_N^2\to\sigma_p^2$. Use the studentized statistic in [[def-studentized-two-sample-u-statistic]]. Suppose both variance estimates are consistent for their direct projection variances under the original samples and are permutation-consistent for $\sigma_N^2$ in the conditional sense of [[thm-studentized-two-sample-u-statistic-permutation-validity]]. A sufficient condition for the latter is that each estimate depends on its own group alone and is consistent for $\sigma_N^2$ on an IID $\bar P_N$ sample of that size.

Then the conditional permutation CDF of $S_{m,n}=U_{m,n}/V_{m,n}^{\rm SE}$ converges uniformly in probability to $\Phi$, and under the true sampling law $S_{m,n}\Rightarrow N(0,1)$.

## Facts & Assumptions

**Given:** All-assignment centering and moments, positive direct and pooled projection variances, direct consistency, and either direct permutation consistency or the sufficient separate-group triangular-mixture condition.

[F1] [[thm-studentized-two-sample-u-statistic-permutation-validity]] proves both studentized limits and the sufficient separate-group consistency condition under the weak null and mixed moments.

[F2] [[thm-two-sample-u-statistic-permutation-clt-under-mixed-centering]] states the sampling and all-assignment centered kernel conditions inherited here.

[A1] AC is inherited through [F1]. [[def-axiom-of-choice]]

## Proof

**Given:** The hypotheses in the Statement. Apply the general studentized theorem.

1.1 The all-assignment centered conditions in [F2] include the weak null, block antisymmetry, fixed order, proportional sample growth and all mixed moments needed by [F1]. The remaining projection and estimator conditions here are exactly the corresponding conditions of [F1]. [F1, F2, given]

2.1 Under AC [A1], apply [F1] to obtain both standard-normal limits and, when used, its separate-group sufficient consistency criterion. [A1, F1, step 1.1] ∎

## Remarks

This specialization retains the original all-assignment centered branch. Joint two-group variance estimates satisfy the theorem when their permutation consistency is established directly; the separate-group transfer lemma does not by itself prove consistency of arbitrary joint estimates.
