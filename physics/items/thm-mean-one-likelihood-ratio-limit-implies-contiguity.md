---
id: thm-mean-one-likelihood-ratio-limit-implies-contiguity
kind: theorem
title: A mean-one likelihood-ratio limit implies contiguity
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps: [def-contiguous-sequences-of-measures, def-convergence-in-distribution-of-random-elements]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 21, PDF pp. 12–15
      url: https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/21notes.pdf
    - title: John Duchi, A few notes on contiguity, asymptotics, and local asymptotic normality, §§1.2–1.3
      url: https://web.stanford.edu/class/stats300b/Notes/contiguity-and-asymptotics.pdf
---

## Statement

For each $n$, let $P_n,Q_n$ be probability measures on one measurable space,
and let $L_n\ge0$ satisfy $Q_n(A)=\int_A L_n\,dP_n$ for every measurable
$A$. Suppose $E_{P_n}L_n=1$, $L_n\Rightarrow L$ under $P_n$, $L\ge0$, and
$E L=1$. Then $(Q_n)$ is contiguous with respect to $(P_n)$.

## Facts & Assumptions

**Given:** Probability measures $P_n,Q_n$, mean-one densities $L_n$, and the
stated nonnegative distributional limit $L$ with matching mean.

[F1] [[def-contiguous-sequences-of-measures]]: $Q_n\triangleleft P_n$ means
$P_n(A_n)\to0$ implies $Q_n(A_n)\to0$ for every event sequence $A_n$.

[F2] [[def-convergence-in-distribution-of-random-elements]]: $L_n\Rightarrow L$
means expectations converge for every bounded continuous function.

## Proof

**Proof technique:** direct uniform-integrability argument.

1.1 For fixed $M>0$, $x\mapsto x\wedge M$ is bounded and continuous on $[0,\infty)$, so [F2] and the mean assumptions give $E(L_n-M)_+=E L_n-E(L_n\wedge M)\longrightarrow E L-E(L\wedge M)=E(L-M)_+.$ [F2, given, algebra]

2.1 If $x>2M$, then $x\le2(x-M)$; hence $\limsup_n E[L_n\mathbf1_{\{L_n>2M\}}] \le2E(L-M)_+.$ The right side tends to zero as $M\to\infty$ because $L$ is integrable. Each of the finitely many initial integrable $L_n$ also has vanishing tail integral, so $(L_n)$ is uniformly integrable. [step 1.1, given, algebra]

3.1 For any event sequence $A_n$ and any $M>0$, $Q_n(A_n)=E[L_n\mathbf1_{A_n}] \le M P_n(A_n)+E[L_n\mathbf1_{\{L_n>M\}}].$ If $P_n(A_n)\to0$, the first term tends to zero for fixed $M$, and uniform integrability makes the limsup of the second term arbitrarily small as $M\to\infty$. Thus $Q_n(A_n)\to0$, which is $Q_n\triangleleft P_n$ by [F1]. [F1, F2, step 2.1, given, algebra] ∎
