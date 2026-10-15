---
dependency_level: 7
id: thm-studentized-wilcoxon-validity-under-heterogeneous-laws
kind: theorem
title: Studentized Wilcoxon validity under heterogeneous laws
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - thm-studentized-two-sample-u-statistic-permutation-validity
  - def-studentized-two-sample-u-statistic
  - alg-studentized-two-sample-u-permutation-test
  - cor-two-sample-permutation-exact-under-equal-distributions
  - lem-general-measurable-finite-group-randomization-validity
  - cor-chebyshev-inequality-for-random-variables
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC is inherited from the general studentized permutation theorem; the bounded-kernel variance calculations add no choice."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Chung and Romano, Asymptotically Valid and Exact Permutation Tests Based on Two-Sample U-Statistics, Stanford Technical Report 2011-09, Section 3 Example 3.1 and Theorem 3.2"
      url: "https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf"
---

## Statement

Assume AC. Let independent IID real samples $X_1,\ldots,X_m\sim P$ and $Y_1,\ldots,Y_n\sim Q$ satisfy $m,n\ge2$ and $m/(m+n)\to p\in(0,1)$. Define the tie-corrected Wilcoxon kernel and weak null by
$$ h(x,y)=\mathbf1\{y>x\}-\mathbf1\{y<x\},\qquad \theta=E h(X,Y)=0. $$
Equivalently, $P(X<Y)+\tfrac12P(X=Y)=1/2$ for independent $X\sim P,Y\sim Q$. Put $a(x)=E_Qh(x,Y)$, $b(y)=E_Ph(X,y)$ and $g_p(z)=E_{pP+(1-p)Q}h(z,V)$. Assume $E_Pa^2>0$, $E_Qb^2>0$ and $E_{pP+(1-p)Q}g_p^2>0$.

Set $U=(mn)^{-1}\sum_{i,j}h(X_i,Y_j)$, $R_i=n^{-1}\sum_jh(X_i,Y_j)$ and $C_j=m^{-1}\sum_i h(X_i,Y_j)$. Use the measurable nonnegative projection variance estimates
$$ \widehat\sigma_m^2=\frac1{m-1}\sum_i(R_i-U)^2,\qquad \widehat\sigma_n^2=\frac1{n-1}\sum_j(C_j-U)^2. $$
Recompute them in every permutation. With $S=U/\sqrt{\widehat\sigma_m^2/m+\widehat\sigma_n^2/n}$ and the zero-denominator convention of [[def-studentized-two-sample-u-statistic]], both $S\Rightarrow N(0,1)$ and its conditional permutation CDF converges uniformly in probability to $\Phi$. Consequently, each of the upper, lower and two-sided tests in [[alg-studentized-two-sample-u-permutation-test]] has rejection probability tending to $\alpha$ under this weak null. If $P=Q$, inclusive p-values are finite-sample superuniform and tie-randomized p-values are exactly uniform, without a nondegeneracy requirement for this finite-sample assertion.

The laws may be different and may have atoms. This null is a probabilistic-index null, not an assertion that equality of means or medians suffices for Wilcoxon validity.

## Facts & Assumptions

**Given:** AC and the laws, positive projection variances, samples and estimators in the Statement.

[F1] For a fixed antisymmetric two-sample U-kernel with positive direct and pooled first-projection variances, finite positive mixed second moments, sampling variance consistency and direct conditional permutation consistency of the estimates imply both standard-normal limits. [[thm-studentized-two-sample-u-statistic-permutation-validity]]

[F2] The standard-error pivot uses $r=1$ here and has value zero when its standard error vanishes. [[def-studentized-two-sample-u-statistic]]

[F3] The test recomputes both variances for every permutation and uses inclusive or randomized orbit ranks, for $S$, $-S$ or $|S|$. [[alg-studentized-two-sample-u-permutation-test]]

[F4] When $P=Q$, the pooled product law is invariant under coordinate permutations, as proved by the exactness corollary. For any measurable score on that orbit, inclusive ranks are superuniform and independent-uniform tie ranks are uniform, including its zero-denominator rule. [[cor-two-sample-permutation-exact-under-equal-distributions]] [[lem-general-measurable-finite-group-randomization-validity]]

[F5] For a square-integrable variable $Z$, $P(|Z-EZ|>t)\le\operatorname{Var}(Z)/t^2$. [[cor-chebyshev-inequality-for-random-variables]]

## Proof

1.1 The bounded measurable kernel is antisymmetric and $h(x,x)=0$. All mixed second moments are finite. Positivity of $E_Pa^2$ excludes a point-mass $P$ because $a$ is constant then; likewise positivity of $E_Qb^2$ excludes a point-mass $Q$. A non-point-mass law has positive probability that two independent draws differ: otherwise every event would have probability zero or one, and on the real line its distribution function would identify a point mass. Thus the P/P and Q/Q second moments of $h$ are positive. The P/Q second moment is positive because its vanishing would give $a=0$ P-almost surely; the Q/P case follows by antisymmetry. The first projections under the null are exactly $a,b$. For $\mu_N=(m/N)P+(n/N)Q$, its pooled projection $g_N$ is centered by antisymmetry; its second moment $\sigma_N^2$ converges to the positive displayed pooled variance because it is a polynomial in $m/N$ with bounded coefficients. [F1, given, algebra]

1.2 Conditional on $X_i$, $R_i$ averages $n$ independent variables bounded by one, so $E(R_i-a(X_i))^2\le1/n$. Consequently $m^{-1}\sum_i(R_i-a(X_i))^2\to0$ in probability by the elementary nonnegative bound $P(Z>t)\le EZ/t$. The corresponding bound for $C_j-b(Y_j)$ is $1/m$. The averages of $a(X_i)$ and $a(X_i)^2$ converge to their expectations by [F5], since their variances are bounded by $1/m$; similarly for $b$. For bounded lists in $[-1,1]$, replacing a list by one with mean squared error $e$ changes its mean by at most $\sqrt e$ and its mean square by at most $2\sqrt e$, by the finite-sum Cauchy–Schwarz inequality. Since the two row/column means equal $U$, the stated sample variances are therefore consistent for $E_Pa^2$ and $E_Qb^2$. [F5, step 1.1, algebra]

2.1 Fix a deterministic pooled list $z_1,\ldots,z_N$. Put $d_i=N^{-1}\sum_kh(z_i,z_k)$ and $A_N=N^{-1}\sum_i d_i^2$. Antisymmetry gives $\sum_i d_i=0$. For a uniform split into groups A and B of sizes m,n, condition on $i\in A$. Then B is a uniform n-subset of the other N−1 indices, so its average of $h(z_i,z_j)$ has mean $Nd_i/(N-1)$ and variance at most $4/n$. Indeed, sampling k of M bounded numbers without replacement gives variance $(M-k)/(k(M-1))$ times their population variance when $M>1$, by expanding the indicators with means $k/M$ and pair probabilities $k(k-1)/(M(M-1))$; their population variance is at most one. The loose bound four covers every permitted size. Thus the expected within-A average of $(R_i-d_i)^2$ is at most $4/n+(N-1)^{-2}$. For B's column averages the same argument approximates $-d_j$ with error at most $4/m+(N-1)^{-2}$. Finally, the sample means of $d_i$ and $d_i^2$ in either split group converge to the full-list means in conditional probability, with variance at most $4/\min(m,n)$. The finite-list bound from step 1.2 shows both recomputed variance estimates converge to $A_N$ in conditional permutation probability, uniformly over every pooled list. The factors $m/(m-1)$ and $n/(n-1)$ tend to one. [F5, step 1.2, algebra]

2.2 Under the original independent pooled observations, $A_N=N^{-3}\sum_{i,j,k}h(Z_i,Z_j)h(Z_i,Z_k)$ is a bounded ordered-triple average. Terms with repeated indices comprise at most $3N^2$ terms. For distinct indices, expectations factor according to their fixed P/Q labels; allowing all index triples in this deterministic label average is exactly integration of $h(z,v)h(z,w)$ under $\mu_N^{\otimes3}$. Removing the repeated indices changes either expectation by at most $6/N$, hence $|EA_N-\sigma_N^2|\le6/N$. Two triple terms with disjoint index sets are independent. At most $9N^5$ ordered pairs of triples share an index, and each covariance has absolute value at most two, giving $\operatorname{Var}(A_N)\le18/N$. By [F5], $A_N-\sigma_N^2\to0$ in probability. Combining with the uniform conditional bound of step 2.1 proves the exact direct joint-estimator permutation consistency required by [F1], without asserting that joint-estimator consistency follows automatically from IID-mixture consistency. [F5, step 2.1, algebra]

3.1 Steps 1.1–2.2 verify every premise of [F1] for $r=1$ and the actual empirical estimates. Its two limits apply to [F2], including its vanishing-probability zero-denominator event. This proves the two asserted standard-normal limits for heterogeneous laws, with or without ties. [F1, F2, step 1.1, step 1.2, step 2.1, step 2.2, algebra]

3.2 For $T=S$, $-S$ or $|S|$, the two limits in step 3.1 imply convergence of the sampling CDF and the conditional permutation CDF to the same continuous limit $H$, respectively the standard normal or absolute-standard-normal law. Uniform convergence for the absolute value follows by subtracting the two normal CDF tails; the limiting CDF is continuous. The maximal conditional atom is at most twice the sup-norm CDF error from $H$, and therefore vanishes in probability. Both inclusive and randomized ranks in [F3] consequently differ from $1-H(T)$ by a quantity tending to zero in probability. Since $T$ converges to the law with continuous CDF $H$, $1-H(T)$ converges to uniform: at each u in (0,1) this follows by the continuous strictly increasing quantile of H on its support. Thus rejection probability tends to $\alpha$. For $P=Q$, [F4] instead gives the stated exact finite-sample conclusions directly, whether or not the positive-variance asymptotic hypotheses hold. [F3, F4, step 3.1, algebra] ∎
