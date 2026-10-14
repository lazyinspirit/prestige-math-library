---
id: lem-mlr-orders-randomized-thresholds
kind: lemma
title: MLR orders the power of randomized thresholds
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps: [def-monotone-likelihood-ratio-family, def-axiom-of-choice, def-measure,
       def-probability-measure, thm-integration-against-a-density,
       thm-composition-with-borel-functions-preserves-measurability]
justified_by: []
proof_strategy: direct
axiom_use: Assume AC for the selected likelihood-density versions inherited through def-monotone-likelihood-ratio-family; the comparison itself uses no further choice.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Jun Shao, Stat 610 Mathematical Statistics, Lecture 11, Lemma B and Theorem 8.3.17, PDF pp. 8–10
      url: https://pages.stat.wisc.edu/~shao/stat610/stat610-11.pdf
    - title: George Deligiannidis, Foundations of Statistical Inference, Theorem 13.5 and proof, PDF pp. 77–78
      url: https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf
---

## Statement

Assume AC and let a dominated one-parameter experiment have MLR in the real statistic $T$.
For $c\in\mathbb R$ and $\gamma\in[0,1]$, put
$$\phi^+_{c,\gamma}=\mathbf1_{\{T>c\}}+\gamma\mathbf1_{\{T=c\}},\qquad \phi^-_{c,\gamma}=\mathbf1_{\{T<c\}}+\gamma\mathbf1_{\{T=c\}}.$$
Then for every $\theta_1<\theta_2$,
$$E_{\theta_1}\phi^+_{c,\gamma}\le E_{\theta_2}\phi^+_{c,\gamma},\qquad E_{\theta_1}\phi^-_{c,\gamma}\ge E_{\theta_2}\phi^-_{c,\gamma}.$$

## Facts & Assumptions

**Given:** AC, a dominated experiment with MLR in $T$, real $c$, $\gamma\in[0,1]$, and $\theta_1<\theta_2$.

[F1] For $\theta_1<\theta_2$, there is a nondecreasing Borel function $r$ such that $r(T)=p_{\theta_2}/p_{\theta_1}$ $\mu$-almost everywhere where $p_{\theta_1}>0$, and $r(T)=+\infty$ $\mu$-almost everywhere where $p_{\theta_1}=0<p_{\theta_2}$. ([[def-monotone-likelihood-ratio-family]])

[F2] If $p$ is a nonnegative measurable density, then integrating against $p\,d\mu$ equals integrating the product against $\mu$: $\int g\,d(p\,d\mu)=\int gp\,d\mu$ for nonnegative measurable $g$. ([[thm-integration-against-a-density]])

[F3] $P_{\theta_1}$ and $P_{\theta_2}$ are probability measures, so each has mass one. ([[def-probability-measure]])

[F4] A Borel function composed with the measurable statistic $T$ is measurable; hence the MLR ratio function $r(T)$ can be integrated. ([[thm-composition-with-borel-functions-preserves-measurability]])

[A1] AC supplies the simultaneous likelihood-density versions used in [F1]. ([[def-axiom-of-choice]])

## Proof

1.1 Choose simultaneous densities $p_1=p_{\theta_1}$ and $p_2=p_{\theta_2}$ using AC [A1], let $r$ be their nondecreasing Borel MLR function, and put $A=\{p_1>0\}$ and $S=\{p_1=0<p_2\}$ with $s=P_{\theta_2}(S)$. Let $N$ be the union of the $\mu$-null exceptional sets in [F1]. For $x\in S\setminus N$ and $y\in A\setminus N$, $r(T(x))=+\infty$ while $r(T(y))=p_2(y)/p_1(y)<+\infty$; monotonicity therefore gives $T(y)<T(x)$. The two laws give $N$ measure zero, $P_{\theta_1}(A)=1$, and $P_{\theta_2}(S)=s$. Since $\phi^+_{c,\gamma}$ is nondecreasing in $T$ and $\phi^-_{c,\gamma}$ is nonincreasing in $T$, this support order gives
$$E_{\theta_2}[\phi^+_{c,\gamma}\mathbf1_S]\ge sE_{\theta_1}\phi^+_{c,\gamma},\qquad E_{\theta_2}[\phi^-_{c,\gamma}\mathbf1_S]\le sE_{\theta_1}\phi^-_{c,\gamma}.$$
By [F4], $r(T)$ is measurable. [given, A1, F1, F4, choose]

2.1 Partition $\mathcal X$ into $B_- =\{T<c\}$, $B_0=\{T=c\}$, and $B_+=\{T>c\}$. Put $a_j=P_{\theta_1}(B_j)$ and $b_j=P_{\theta_2}(B_j\cap A)$. On $A$, [F1] gives $p_2=r(T)p_1$ $\mu$-almost everywhere, so [F2] yields $b_j=\int_{B_j\cap A}p_2\,d\mu=\int_{B_j\cap A}r(T)p_1\,d\mu=\int_{B_j\cap A}r(T)\,dP_{\theta_1}$. The measurability of $r(T)$ was established in step 1.1. Also [F3] and step 1.1 give $\sum_jb_j=1-s$ and $P_{\theta_1}(A)=1$, hence $P_{\theta_1}(B_j\cap A)=a_j$. For each block with $a_j>0$, set $r_j=b_j/a_j$. Monotonicity [F1] orders $r(T)$ values across every pair of occupied blocks, so their $P_{\theta_1}$-averages satisfy $r_i\le r_j$ whenever $i<j$. [given, F1, F2, F3, step 1.1]

3.1 For ordered block values $g_-\le g_0\le g_+$, omitting zero-mass blocks, expansion gives $\sum_j a_jr_jg_j-(\sum_j a_jr_j)(\sum_j a_jg_j)=\sum_{i<j}a_ia_j(r_j-r_i)(g_j-g_i)\ge0$. Step 2.1 gives $\sum_j a_j=1$ and $\sum_j a_jr_j=1-s$. For the upper threshold $g=(0,\gamma,1)$, this identity makes $E_{\theta_2}[\phi^+_{c,\gamma}\mathbf1_A]\ge(1-s)E_{\theta_1}\phi^+_{c,\gamma}$. Step 1.1 gives $E_{\theta_2}[\phi^+_{c,\gamma}\mathbf1_S]\ge sE_{\theta_1}\phi^+_{c,\gamma}$, and $P_{\theta_2}(\mathcal X\setminus(A\cup S))=0$. Adding these bounds proves $E_{\theta_2}\phi^+_{c,\gamma}\ge E_{\theta_1}\phi^+_{c,\gamma}$. [step 1.1, step 2.1, algebra]

4.1 The lower threshold $g=(1,\gamma,0)$ is nonincreasing, so the covariance identity in step 3.1 is nonpositive and gives $E_{\theta_2}[\phi^-_{c,\gamma}\mathbf1_A]\le(1-s)E_{\theta_1}\phi^-_{c,\gamma}$. Step 1.1 gives $E_{\theta_2}[\phi^-_{c,\gamma}\mathbf1_S]\le sE_{\theta_1}\phi^-_{c,\gamma}$; the remaining set has $P_{\theta_2}$ measure zero. Adding these bounds proves $E_{\theta_2}\phi^-_{c,\gamma}\le E_{\theta_1}\phi^-_{c,\gamma}$. [step 1.1, step 2.1, step 3.1, algebra] ∎
