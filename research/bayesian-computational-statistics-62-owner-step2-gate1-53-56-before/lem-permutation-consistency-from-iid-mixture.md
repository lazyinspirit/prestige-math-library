---
id: lem-permutation-consistency-from-iid-mixture
kind: lemma
title: Consistency transfers from IID mixture samples to permuted groups
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - lem-hypergeometric-binomial-contiguity-for-permutation-samples
  - def-statistic-and-estimator
  - def-identically-distributed-and-iid-random-variables
  - def-independent-random-elements
  - def-probability-measure
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "E. Y. Chung and J. P. Romano, Exact and Asymptotically Robust Permutation Tests, Stanford Technical Report 2011-05, Lemma 3.3 and proof"
      url: "https://stacks.stanford.edu/file/vs995qc2521/vs995qc2521_2011-05.pdf"
---

## Statement

Assume AC. Let $P,Q$ be probability laws and let $m_N+n_N=N$, with $p_N=m_N/N\to p\in(0,1)$. Write $\bar P_N=p_NP+(1-p_N)Q$. For each $k_N\in\{m_N,n_N\}$, let $T_N$ be a measurable statistic of $k_N$ observations and let $c_N$ be a deterministic target. If

$$T_N(V_1,\ldots,V_{k_N})-c_N\to0\quad\text{in probability when }V_i\text{ are IID }\bar P_N,$$

then $T_N$ applied to either group of a uniform random permutation of the pooled independent sample $X_1,\ldots,X_{m_N}\sim P$, $Y_1,\ldots,Y_{n_N}\sim Q$ also converges in probability to $c_N$. The statement does not require $p_N-p=O(N^{-1/2})$ because the IID comparison law uses the exact weight $p_N$.

## Facts & Assumptions

**Given:** Independent IID samples from $P$ and $Q$, a uniform permutation of their pooled $N$ observations, and an estimator/statistic consistent for $c_N$ on IID $\bar P_N$ samples of the same group size.

[F1] [[lem-hypergeometric-binomial-contiguity-for-permutation-samples]]: the hypergeometric label count in a size-$k_N$ permuted group is contiguous to the binomial label count in a size-$k_N$ IID mixture sample.

[F2] [[def-identically-distributed-and-iid-random-variables]]: each source group is IID with its stated common law.

[F3] [[def-independent-random-elements]]: the source groups and the random subset selection are independent as specified.

[F4] [[def-statistic-and-estimator]]: a statistic is a measurable function of the ordered observations; an estimator is such a statistic with a specified target.

[A1] AC is inherited from the likelihood-ratio contiguity result [F1]. [[def-axiom-of-choice]]

## Proof

**Given:** The assumptions in the Statement. Prove consistency for both permuted group sizes.

1.1 Fix $k_N$ equal to either $m_N$ or $n_N$. In an IID sample from $\bar P_N$, the number $B_N$ of observations whose mixture component is $P$ has law $\operatorname{Bin}(k_N,p_N)$. In a uniformly chosen size-$k_N$ group from the pooled sample with exactly $m_N$ $P$-observations among $N$, the corresponding count $H_N$ is hypergeometric. [F1, F2, F3]

1.2 Conditional on either count being $j$, the ordered group has the same distribution: its $P$-positions are uniform among the $j$-subsets of the $k_N$ positions, the values at those positions are IID $P$, and the remaining values are IID $Q$. Therefore there is a function $f_N(j)\in[0,1]$ giving the conditional probability that $|T_N-c_N|>\varepsilon$ under either sampling scheme. [F2, F3, F4]

2.1 The IID mixture consistency assumption gives $E[f_N(B_N)]\to0$. Markov's inequality implies $f_N(B_N)\to0$ in probability under the binomial law. By contiguity [F1], $f_N(H_N)\to0$ in probability under the hypergeometric law. Since $0\le f_N\le1$, this also gives $E[f_N(H_N)]\to0$. AC is used through [F1] only. [A1, F1, step 1.2, algebra]

3.1 By step 1.2, $E[f_N(H_N)]$ is exactly the probability that the statistic differs from $c_N$ by more than $\varepsilon$ for the randomly permuted size-$k_N$ group. This tends to zero. The argument applies separately to $k_N=m_N$ and $k_N=n_N$, proving the assertion. [step 1.1, step 1.2, step 2.1] ∎
