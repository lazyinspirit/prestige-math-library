---
id: lem-nrqm-composites-countable-kraus-normalization
aliases: [nrqm-composites-countable-kraus-normalization]
kind: lemma
domain: mathematics
title: "Countable Kraus normalization and trace-norm convergence"
status: draft
origin: pipeline
dependency_level: 2
deps: [lem-nuclear-series-characterizes-trace-norm, lem-nrqm-composites-nuclear-bounded-cyclicity, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-rank-one-operator-calculus, thm-spectral-theorem-for-compact-self-adjoint-operators, thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues, thm-trace-class-is-a-two-sided-banach-operator-ideal, thm-trace-class-iff-product-of-two-hilbert-schmidt-operators, thm-trace-is-absolutely-convergent-and-basis-independent, def-self-adjoint-positive-unitary-and-normal-operator, def-hilbert-space, def-countable-choice]
dependency_roles:
  lem-nuclear-series-characterizes-trace-norm: mathematical-premise
  lem-nrqm-composites-nuclear-bounded-cyclicity: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  thm-spectral-theorem-for-compact-self-adjoint-operators: mathematical-premise
  thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  thm-trace-class-iff-product-of-two-hilbert-schmidt-operators: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Topics in Real and Functional Analysis (2017), §3.6 pp. 93-96 (trace-norm convergence and positivity)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products', §3 (local operations and reduced states)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a complex Hilbert space ([[def-hilbert-space]]) and let $(M_a)_{a\ge1}$ be bounded operators on $H$ with

$$\sum_{a=1}^NM_a^*M_a\longrightarrow I\qquad\text{strongly as }N\to\infty .$$

Then:

(a) $\sum_{a\ge1}\|M_ax\|^2=\|x\|^2$ for every $x\in H$;

(b) for every self-adjoint positive trace-class $\rho$ (positivity as in [[def-self-adjoint-positive-unitary-and-normal-operator]]) the series $\sum_{a\ge1}M_a\rho M_a^*$ converges in trace norm to a self-adjoint positive trace-class operator $\Phi(\rho)$ with $\operatorname{tr}\Phi(\rho)=\operatorname{tr}\rho$;

(c) $\Phi$ extends uniquely to a linear positive map $\Phi:\mathcal S_1(H)\to\mathcal S_1(H)$ with $\operatorname{tr}\Phi(\rho)=\operatorname{tr}\rho$ for all trace-class $\rho$ and $\|\Phi(\rho)\|_1\le\|\rho\|_1$ for self-adjoint $\rho$; it maps density operators to density operators. No claim is made that every positive trace-preserving map has such a family.

## Facts & Assumptions

**Given:** A complex Hilbert space $H$; bounded operators $M_a$ with strong completeness $\sum_{a\le N}M_a^*M_a\to I$; a positive trace-class $\rho$.

[F1] For every $x$, $\langle(\sum_{a\le N}M_a^*M_a)x,x\rangle\to\langle x,x\rangle$ and the partial sums are increasing (each term $M_a^*M_a\ge0$), so the nonnegative series $\sum_a\|M_ax\|^2=\sum_a\langle M_a^*M_ax,x\rangle$ has value $\|x\|^2$ ([[def-hilbert-space]]).

[F2] $\operatorname{tr}(M_a\rho M_a^*)=\operatorname{tr}(M_a^*M_a\rho)$; $T_{x,z}B=T_{x,B^*z}$; $T$ is trace class exactly when it is a nuclear series; trace class is a complete two-sided ideal; the trace is linear, continuous for $\|\cdot\|_1$ and $\operatorname{tr}T=\sum_j\operatorname{tr}T_{w_j,z_j}$ for nuclear representations ([[lem-nrqm-composites-nuclear-bounded-cyclicity]], [[lem-nrqm-composites-rank-one-operator-calculus]], [[thm-trace-class-is-a-two-sided-banach-operator-ideal]], [[thm-trace-is-absolutely-convergent-and-basis-independent]]).

[F3] A self-adjoint positive trace-class operator with positive trace becomes a density operator after dividing by its trace and has the spectral expansion $\rho=\sum_nw_nT_{u_n,u_n}$ with orthonormal $u_n$, $w_n\ge0$ and $\operatorname{tr}\rho=\sum_nw_n$; a zero-trace self-adjoint positive trace-class operator is zero. Conversely such sums (with $\sum w_n<\infty$) are self-adjoint positive trace class ([[lem-nrqm-composites-density-and-scalar-spectral-probability]], [[thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]], [[def-self-adjoint-positive-unitary-and-normal-operator]]).

[F4] A self-adjoint compact operator has an expansion $\sum_\lambda\lambda P_\lambda$ and $\operatorname{tr}(T^\pm)=\sum_{\pm\lambda>0}|\lambda|$; for a positive trace-class operator $S$, $\|S\|_1=\operatorname{tr}S$ ([[thm-spectral-theorem-for-compact-self-adjoint-operators]], [[thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]], [[thm-trace-class-is-a-two-sided-banach-operator-ideal]], [[thm-trace-class-iff-product-of-two-hilbert-schmidt-operators]]).

## Proof

1.1 [Norm identity, including the zero space] If $H=\{0\}$, then every $M_a$ and every trace-class input is zero, so the unique map on $\mathcal S_1(H)=\{0\}$ satisfies (a)-(c). Suppose henceforth that $H\ne\{0\}$. For every $x$, $\sum_{a\le N}\|M_ax\|^2$ is the increasing sequence $\langle(\sum_{a\le N}M_a^*M_a)x,x\rangle$, so its supremum is $\langle x,x\rangle=\|x\|^2$ by strong convergence and continuity of the inner product in $N$; by [F1] this supremum is $\sum_a\|M_ax\|^2$. [given, F1, algebra]

2.1 [Positive input] Let $\rho=\sum_nw_nT_{u_n,u_n}$ be the spectral expansion [F3]. The partial sums $\Phi_N(\rho):=\sum_{a\le N}M_a\rho M_a^*$ are positive trace-class with $\operatorname{tr}\Phi_N(\rho)=\sum_{a\le N}\sum_nw_n\|M_au_n\|^2$ by [F2]; the double sum increases with $N$, and its limit is $\sum_nw_n\sum_a\|M_au_n\|^2=\sum_nw_n\|u_n\|^2=\operatorname{tr}\rho$ by step 1.1 and Tonelli for nonnegative series. Hence the increasing positive sequence $\Phi_N(\rho)$ has traces increasing to $\operatorname{tr}\rho$, so for $N\ge M$ we have $\|\Phi_N(\rho)-\Phi_M(\rho)\|_1=\operatorname{tr}\Phi_N(\rho)-\operatorname{tr}\Phi_M(\rho)\to0$ ([F4] with positivity of the difference); by completeness of $\mathcal S_1(H)$ [F2] the series converges in trace norm to a trace-class $\Phi(\rho)\ge0$ (the trace-norm limit of positive operators is positive) with $\operatorname{tr}\Phi(\rho)=\operatorname{tr}\rho$. [step 1.1, F2, F3, F4, algebra]

3.1 [Linear extension by nuclear convergence] For rank-one input, $M_aT_{u,v}M_a^*=T_{M_au,M_av}$ by [F2]. Step 1.1 and Cauchy–Schwarz give $\sum_a\|M_au\|\|M_av\|\le\|u\|\|v\|$. Thus for a nuclear input $T=\sum_jT_{u_j,v_j}$ the double series of Kraus rank-one images is absolutely summable in trace norm, with total norm at most $\sum_j\|u_j\|\|v_j\|$. Its sum is the trace-norm limit of $\Phi_N(T)=\sum_{a\le N}M_aTM_a^*$, by interchanging absolutely convergent sums and the bounded two-sided ideal action. This limit depends only on $T$, so defines a linear map $\Phi$ extending the positive-input map of step 2.1. Taking the nuclear infimum ([[lem-nuclear-series-characterizes-trace-norm]]) gives the bound $\|\Phi(T)\|_1\le\|T\|_1$ for every input. For rank-one inputs, the trace sum is $\sum_a\langle M_au,M_av\rangle=\langle u,v\rangle$, by strong completeness and the adjoint identity; extending through the absolutely convergent nuclear sum proves $\operatorname{tr}\Phi(T)=\operatorname{tr}T$. The positive trace-class operators linearly span trace class by the self-adjoint real/imaginary and positive/negative spectral decompositions in [F4], so no other linear extension agreeing with step 2.1 is possible. [step 1.1, step 2.1, F2, F3, F4, algebra]

4.1 [Norm bound and conclusion] For self-adjoint $\rho$ with spectral decomposition $\rho=\rho^+-\rho^-$ write $T=\rho$. Then $\Phi(\rho)=\Phi(\rho^+)-\Phi(\rho^-)$ by construction, so $\|\Phi(\rho)\|_1\le\operatorname{tr}\Phi(\rho^+)+\operatorname{tr}\Phi(\rho^-)=\operatorname{tr}\rho^++\operatorname{tr}\rho^-=\|\rho\|_1$ using step 2.1 and [F4]. Positivity for arbitrary $\rho\ge0$ is step 2.1, and trace preservation was shown in step 3.1; hence density operators map to density operators. [step 2.1, step 3.1, F4] ∎
