---
id: thm-two-sample-u-statistic-permutation-clt-under-weak-null
kind: theorem
title: Permutation CLT for a two-sample U-statistic under a weak null
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-two-sample-order-r-u-statistic-and-first-projections
  - lem-two-sample-u-statistic-projections-well-defined
  - lem-two-sample-u-statistic-hoeffding-decomposition
  - lem-two-sample-u-statistic-degenerate-remainder-order
  - lem-pooled-mixture-projection-and-variance
  - lem-finite-population-permutation-clt
  - lem-permutation-mixture-coupling-for-two-sample-u-statistics
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "E. Y. Chung and J. P. Romano, Asymptotically Valid and Exact Permutation Tests Based on Two-Sample U-Statistics, Stanford Technical Report 2011-09, Theorem 3.1 and Appendix A, Lemmas A.1–A.2"
      url: "https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf"
---

## Statement

Assume AC. Let $X_1,\ldots,X_m$ be IID $P$ and independently let
$Y_1,\ldots,Y_n$ be IID $Q$, with $N=m+n$, $m/N\to p\in(0,1)$, and
$\theta(P,Q;h)=0$. Fix $r$ and a measurable kernel $h$ that is symmetric in
each block and antisymmetric under block exchange. Assume for **every**
assignment of independent P- and Q-distributed arguments to the $2r$ positions
that $0<E[h^2]<\infty$. Let
$\sigma_p^2=E_{\bar P}[g_{\bar P}^2]>0$ for
$\bar P=pP+(1-p)Q$, where $g_{\bar P}$ is its first projection. Then the
conditional permutation CDF of $\sqrt m\,U_{m,n}$ satisfies

$$\sup_{t\in\mathbb R}\left|\widehat R_{m,n}^{\sqrt m U}(t)-\Phi\!\left(\frac{t}{\tau_p}\right)\right|\to_P0,\qquad \tau_p^2=\frac{r^2}{1-p}\sigma_p^2.$$

## Facts & Assumptions

**Given:** The sample and kernel hypotheses in the Statement, including finite positive second moments under every mixed argument assignment.

[F1] [[def-two-sample-order-r-u-statistic-and-first-projections]] defines $U_{m,n}$ and its two first projections.

[F2] [[lem-two-sample-u-statistic-hoeffding-decomposition]] gives the first-order projection plus the finite sum of canonical higher-order terms.

[F3] [[lem-two-sample-u-statistic-degenerate-remainder-order]] makes the scaled higher-order remainder negligible.

[F4] [[lem-pooled-mixture-projection-and-variance]] identifies the pooled projection $g_{\bar P}$ and its variance scale $\tau_p^2$.

[F5] [[lem-finite-population-permutation-clt]] gives conditional normal convergence for a uniform sample without replacement from an IID pooled row.

[F6] [[lem-permutation-mixture-coupling-for-two-sample-u-statistics]] couples the original permuted U-statistic to the IID-mixture permuted U-statistic under antisymmetry and all mixed second moments.

[A1] AC is used through [F5]. [[def-axiom-of-choice]]

## Proof

**Given:** The weak-null and mixed-moment kernel hypotheses and $m/N\to p\in(0,1)$. Prove the conditional permutation CDF limit for $\sqrt m U_{m,n}$.

1.1 Let $p_N=m/N$ and $\bar P_N=p_NP+(1-p_N)Q$. Under an IID $\bar P_N$ row, antisymmetry gives pooled parameter zero and first projections $g_N$ and $-g_N$ by [F4]. Expanding the $2r$ mixture factors shows that $E_{\bar P_N^{\otimes2r}}h^2$ is a finite convex combination of the mixed-assignment second moments in the hypotheses, hence is uniformly bounded in $N$. The same bound applies to every mixed assignment when both row laws are $\bar P_N$, so the triangular version of [F3] applies to the two groups formed by a uniform permutation and makes $\sqrt m$ times the degenerate remainder tend to zero in joint probability. [F1, F2, F3, F4, given]

1.2 The linear projection for a uniform size-$m$ subset $A$ of the pooled row is $\sqrt m L_N^\pi=\frac{rN}{n\sqrt m}\left(\sum_{i\in A}g_N(\bar Z_i)-\frac mN\sum_{i=1}^N g_N(\bar Z_i)\right).$ Expanding each factor of $\bar P_N$ shows that $g_N$ is a finite linear combination of the section-integral functions for the finitely many mixed P/Q assignments. The assignment-wise second-moment bounds make these functions square-integrable under P and Q; their coefficients are bounded as $p_N\to p$. Hence the row $g_N(\bar Z_i)$ has uniformly integrable squares and variance tending to $\sigma_p^2$. [F1, F4, given, algebra]

2.1 Apply [F5] to the random subset in step 1.2. Its normalizing denominator satisfies $\sqrt{\frac{m n}{N}\sigma_N^2}\,\frac{rN}{n\sqrt m}=r\sqrt{\frac Nn}\,\sigma_N\longrightarrow\frac r{\sqrt{1-p}}\sigma_p=\tau_p,$ so the conditional CDF of the linear projection converges uniformly in probability to $\Phi(t/\tau_p)$. The conditional probability of the remainder exceeding any fixed threshold tends to zero in probability, since its expectation tends to zero by step 1.1 and Markov's inequality. A threshold squeeze and continuity of the normal CDF therefore give the same conditional CDF limit for $\sqrt m U_{m,n}(\bar Z^\pi)$. [A1, F5, step 1.1, step 1.2, algebra]

3.1 Let $\pi,\pi'$ be conditionally independent uniform permutations. By step 2.1, the two mixture-row statistics have asymptotically independent $N(0,\tau_p^2)$ limits: conditionally on $\bar Z$, their joint CDF is the product of the two conditional CDFs, and each factor converges in probability to a constant. Apply the coupling [F6] to both permutations; the union bound and its $L^2$ conclusion preserve this joint limit for the original sample. [F6, step 2.1, algebra]

4.1 Write $R_N(t)$ for the original conditional permutation CDF. The one-permutation convergence gives $E R_N(t)\to\Phi(t/\tau_p)$; the two independent permutations in step 3.1 give $E[R_N(t)^2]\to\Phi(t/\tau_p)^2$. Therefore $\operatorname{Var}(R_N(t))\to0$, so $R_N(t)\to_P\Phi(t/\tau_p)$ at every $t$. Since the limit CDF is continuous, choose finite tail cutoffs and a finite grid with arbitrarily small $\Phi$ increments; monotonicity bounds the supremum between grid values. This proves the stated uniform convergence. [step 2.1, step 3.1, algebra] ∎

## Remarks

The proof uses the exact triangular mixture and the locally strengthened coupling estimate. It requires neither zero kernel means for other assignments nor a convergence rate for $m/N-p$. The weak null is needed for the accompanying true-sampling limit; antisymmetry alone centers the permutation distribution.
