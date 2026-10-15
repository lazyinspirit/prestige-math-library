---
id: thm-by-fdr-control-under-arbitrary-dependence
kind: theorem
title: "BY controls FDR under arbitrary dependence"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - alg-benjamini-yekutieli-step-up-procedure
  - def-harmonic-number-for-set-cover-analysis
  - def-statistical-experiment
  - def-null-valid-p-value-and-fwer-fdr
  - lem-step-up-leave-one-out-rejection-partition
  - thm-p-value-superuniformity
  - cor-expectation-of-an-indicator-is-probability
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yoav Benjamini and Daniel Yekutieli, The Control of the False Discovery Rate in Multiple Testing under Dependency, The Annals of Statistics 29(4) (2001), Theorem 1.3 and Section 5, PDF pp. 5 and 18–19"
      url: "https://www.researchgate.net/publication/38348313_The_control_of_the_false_discovery_rate_in_multiple_testing_under_dependency"
    - title: "Alexandru Katsevich, STAT 9610 Lecture Notes, Section 6.3.2, Proposition 6.6, printed p. 138 / PDF p. 142"
      url: "https://katsevich-teaching.github.io/stat-9610-fall-2023/assets/lecture-notes.pdf"
---

## Statement

Let $\mathsf E=((\mathcal X,\mathcal A),\Theta,(P_\theta)_{\theta\in\Theta})$ be a statistical experiment ([[def-statistical-experiment]]), let $m\ge1$, and fix a finite family of null hypotheses $H_{01},\ldots,H_{0m}$. For each $i$, let $p_i$ be a p-value statistic valid for $H_{0i}$ in the sense of [[def-null-valid-p-value-and-fwer-fdr]]. For $\theta\in\Theta$, put

$$I_0(\theta):=\{i\in\{1,\ldots,m\}:\theta\in H_{0i}\},\qquad m_0(\theta):=|I_0(\theta)|.$$

For every $q\in(0,1)$, the BY procedure in [[alg-benjamini-yekutieli-step-up-procedure]] satisfies

$$\operatorname{FDR}_\theta\le\frac{m_0(\theta)}{m}q\le q.$$

No dependence condition on the joint law of the p-values is required.

## Facts & Assumptions

**Given:** The experiment and fixed finite family in the Statement, $q\in(0,1)$, and p-value validity under each corresponding null law.

[F1] [[def-null-valid-p-value-and-fwer-fdr]]: $I_0(\theta)$ is the set of true-null indices, $V_\theta$ counts rejected true nulls, and $\operatorname{FDR}_\theta=E_\theta[V_\theta/(R\vee1)]$.

[F2] [[alg-benjamini-yekutieli-step-up-procedure]]: BY uses the critical values $c_k=kq/(mH_m)$ and rejects exactly the first $R$ ranks, where $R$ is the largest passing rank.

[F3] [[lem-step-up-leave-one-out-rejection-partition]]: for any nondecreasing step-up critical values, $\{I_i=1,R=k\}=\{p_i\le c_k\}\cap\{p_{-i}\in C_{i,k}\}$, and the sets $C_{i,k}$ partition the remaining-coordinate space.

[F4] [[thm-p-value-superuniformity]]: for a valid p-value and a nonempty null hypothesis, $P_\theta(p_i\le u)\le u$ for every parameter in that null and every $u\in[0,1]$. Here $i\in I_0(\theta)$ means $\theta\in H_{0i}$, so the null $H_{0i}$ is nonempty and the supplier applies.

[F5] [[cor-expectation-of-an-indicator-is-probability]]: $E_\theta[\mathbf1_A]=P_\theta(A)$ for every event $A$.

[F6] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: expectation is linear on finite sums of integrable random variables.

[F7] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: expectation is integration with respect to the specified probability law.

[A1] Each p-value is superuniform under every parameter in its corresponding null hypothesis.

## Proof

**Proof technique:** finite rejection-count decomposition and summation by parts.

**Given:** A fixed family of $m\ge1$ null hypotheses, p-values valid for their respective nulls, and $q\in(0,1)$.

1.1 Fix $\theta\in\Theta$ and let $I_i$ indicate that BY rejects hypothesis $i$. Pointwise, $V_\theta/(R\vee1)=\sum_{i\in I_0(\theta)}\sum_{k=1}^m k^{-1}\mathbf1\{I_i=1,R=k\}$: if $R=0$ both sides are zero, and if $R>0$ only $k=R$ contributes, with weight $1/R$ for each rejected true null. This finite sum is bounded and integrable by [F7]; [F5] and [F6] therefore give $\operatorname{FDR}_\theta=\sum_{i\in I_0(\theta)}\sum_{k=1}^m k^{-1}P_\theta(I_i=1,R=k)$. [F1, F5, F6, F7, given, construct]

1.2 Fix $i\in I_0(\theta)$ and put $t=q/(mH_m)$ and $J_j=((j-1)t,jt]$ for $j=1,\ldots,m$. Since $\theta\in H_{0i}$, that null is nonempty and [F4] at $u=0$ gives $P_\theta(p_i=0)=0$. Since BY has $c_k=kt$, [F3] splits each event $\{I_i=1,R=k\}$ into the disjoint events $\{p_i\in J_j,\ p_{-i}\in C_{i,k}\}$ for $j\le k$, apart from that null zero event. Using $1/k\le1/j$ for $k\ge j$ and that the $C_{i,k}$ partition the remaining coordinates, $\sum_{k=1}^m k^{-1}P_\theta(I_i=1,R=k)=\sum_{j=1}^m\sum_{k=j}^m k^{-1}P_\theta(p_i\in J_j,\ p_{-i}\in C_{i,k})\le\sum_{j=1}^m j^{-1}P_\theta(p_i\in J_j)$. [F2, F3, F4, given, algebra]

2.1 Set $F_j=P_\theta(p_i\le jt)$ for $j=0,\ldots,m$. Then $F_0=P_\theta(p_i=0)=0$, $F_j\le jt$ by [F4], and $P_\theta(p_i\in J_j)=F_j-F_{j-1}$. Finite summation by parts gives $\sum_{j=1}^m(F_j-F_{j-1})/j=F_m/m+\sum_{j=1}^{m-1}F_j(1/j-1/(j+1))\le t+t\sum_{j=1}^{m-1}1/(j+1)=tH_m=q/m$. Here $mt=q/H_m\le q<1$, and $H_m=\sum_{j=1}^m1/j$. [F2, F4, step 1.2, algebra]

3.1 Combining steps 1.2 and 2.1 bounds each true-null contribution in step 1.1 by $q/m$. Summing over the $m_0(\theta)$ true nulls gives $\operatorname{FDR}_\theta\le(m_0(\theta)/m)q\le q$; with no true nulls the outer sum is empty and FDR is zero. No dependence condition is used, and the CDF summation-by-parts argument covers discrete superuniform p-values. [F1, step 1.1, step 1.2, step 2.1, algebra] ∎

## Remarks

For general superuniform p-values, a single interval $((j-1)t,jt]$ can have probability greater than its width $t$. The proof therefore bounds the weighted sum of interval probabilities by summation by parts of the superuniform CDF; it does not assume each interval has mass at most $t$.
