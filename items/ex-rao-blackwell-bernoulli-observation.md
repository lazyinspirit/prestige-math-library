---
id: ex-rao-blackwell-bernoulli-observation
kind: example
title: "Rao–Blackwellizing one Bernoulli observation by the sample sum"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 8
deps:
  - thm-rao-blackwell
  - def-sufficient-statistic
  - def-standard-borel-space
  - def-statistic-and-estimator
  - def-unbiased-estimator-and-umvu
  - def-conditional-expectation-as-an-ae-class
  - def-axiom-of-choice
  - def-bernoulli-and-binomial-random-variables
  - def-independence-of-finite-random-variables
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
    date: 2026-10-14
sources:
  references:
    - title: "George Deligiannidis, SB2.1 Foundations of Statistical Inference, Theorem 6.1 and Bernoulli example, PDF pp. 33–35"
      url: "https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf"
    - title: "Karl B. Gregory, STAT 713 Lecture 6: Best Unbiased Estimators, Rao-Blackwell Theorem, PDF pp. 9–11"
      url: "https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_06_slides_annotated.pdf"
---

## Example

Work on the finite product sample space $\{0,1\}^n$ with its discrete
sigma-algebra. Let its coordinates $X_1,\ldots,X_n$ be iid Bernoulli$(p)$ with
$p\in[0,1]$, $n\geq1$, and $S=\sum_{i=1}^nX_i$. The unbiased estimator $U=X_1$
is Rao–Blackwellized by $S$ to
$$\mathbb E_p[X_1\mid S]=\frac Sn.$$
The statistic $S$ is sufficient: conditional on $S=s$, the data vector is
uniform over the vectors with $s$ ones when $0<p<1$. At $p=0$ and $p=1$, only
the fibers $s=0$ and $s=n$ are supported, respectively, and their conditional
laws are point masses at the all-zero and all-one vectors. These conditional
laws do not depend on $p$.

## Facts & Assumptions

**Given:** The finite iid Bernoulli experiment with $p\in[0,1]$ and $n\geq1$.

[F1] Rao–Blackwellization of an unbiased finite-variance estimator is its conditional expectation given a sufficient statistic. ([[thm-rao-blackwell]])

[L1] Sufficiency is defined by one probability kernel $K$ from the standard-Borel statistic space to the standard-Borel data space satisfying $P_\theta(A\cap S^{-1}(B))=\int_BK(s,A)P_\theta^S(ds)$ for every parameter $\theta$ and measurable data and statistic events $A,B$; the kernel is independent of $\theta$. ([[def-sufficient-statistic]])

[F2] $X_1$ is a measurable estimator of $p$, and it is unbiased when its expectation is $p$. ([[def-statistic-and-estimator]], [[def-unbiased-estimator-and-umvu]])

[F3] The conditional-expectation notation is an almost-sure class; AC is inherited from its existence convention. ([[def-conditional-expectation-as-an-ae-class]], [[def-axiom-of-choice]])

[F4] A Bernoulli$(p)$ variable takes values $1$ and $0$ with probabilities $p$ and $1-p$, and mutual independence of finite-valued variables means their joint cell probabilities factor. ([[def-bernoulli-and-binomial-random-variables]], [[def-independence-of-finite-random-variables]])

[F5] The finite discrete data and statistic spaces are standard Borel: their discrete metrics are complete, and each finite space is separable, so the identity map witnesses the definition. ([[def-standard-borel-space]])

## Verification

**Proof technique:** direct.

1.1 For $s\in\{0,\ldots,n\}$ let $F_s=\{x\in\{0,1\}^n:\sum_i x_i=s\}$; it has $\binom ns\geq1$ elements. Define $K(s,A)=|A\cap F_s|/\binom ns$ for every data event $A$. Each section is the uniform probability measure on $F_s$, and every event evaluation is measurable because the statistic space is finite and discrete; thus $K$ is a probability kernel independent of $p$. By [F4], independence makes the joint law the product of the Bernoulli coordinate masses. For $0<p<1$, each vector in $F_s$ has mass $p^s(1-p)^{n-s}$ and $P_p(S=s)>0$, so $K(s,\cdot)$ is the conditional law given $S=s$. At $p=0$ or $p=1$, only $s=0$ or $s=n$ is supported, respectively, and that fiber is a singleton on which the same kernel is the conditional law. Hence $K$ is a common regular conditional law and proves sufficiency by [L1]. [given, F4, L1, construct]

2.1 For $0<p<1$, the uniform fiber law is invariant under coordinate permutations, so the $n$ conditional means $\mathbb E_p[X_i\mid S=s]$ agree. Their sum is $s$, hence each is $s/n$. At $p=0,1$, $X_1=S/n$ almost surely, so the same formula holds on the support. Since $0\leq X_1\leq1$, $U=X_1$ is square-integrable; its Bernoulli law gives $\mathbb E_pX_1=p\cdot1+(1-p)\cdot0=p$ by [F4]. Both spaces are standard Borel by [F5] and $S$ is sufficient by step 1.1, so [F2] and [F1] identify $S/n$ as the Rao–Blackwellized unbiased estimator; [F3] records its conditional-expectation class convention. [F1, F2, F3, F4, F5, step 1.1, algebra] ∎
