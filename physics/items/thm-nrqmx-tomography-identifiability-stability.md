---
id: thm-nrqmx-tomography-identifiability-stability
kind: theorem
title: "Tomography correctness and finite-sample stability"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - alg-nrqmx-linear-tomography-procedure
  - lem-nrqmx-frame-pseudoinverse-reconstruction
  - lem-nrqmx-bernoulli-hoeffding
  - lem-nrqm-composites-finite-effects-and-instruments
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - cor-cauchy-reals-lub-complete
  - lem-nrqmx-finite-hermitian-trace-inner-product
dependency_roles:
  alg-nrqmx-linear-tomography-procedure: mathematical-premise
  lem-nrqmx-frame-pseudoinverse-reconstruction: mathematical-premise
  lem-nrqmx-bernoulli-hoeffding: mathematical-premise
  lem-nrqm-composites-finite-effects-and-instruments: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  cor-cauchy-reals-lub-complete: mathematical-premise
  lem-nrqmx-finite-hermitian-trace-inner-product: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Xhek Turkeshi and Markus Heinrich, Quantum Information Methods for Many-Body Physics, §3.1, equations (3.7)–(3.9)"
      url: "https://www.quantum-randomness.com/teaching_files/qinfo_for_mbp/lecture_notes6.pdf"
    - title: "Dmitry Panchenko, MIT OpenCourseWare 18.465, Lecture 07: Hoeffding’s inequality, Spring 2007"
      url: "https://live.ocw.mit.edu/courses/18-465-topics-in-statistics-statistical-learning-theory-spring-2007/8fc2f7e9e92e6ed03edf22dd35f37eb5_lecture07.pdf"
---

## Statement

Let $d,m,n\ge1$, let $(F_a)_{a=1}^m$ be a finite POVM on $\mathbb C^d$ whose real span is $\mathsf H_d$, and let $\rho\in\mathsf H_d$ satisfy $\rho\ge0$ and $\operatorname{Tr}\rho=1$. Put $p_a=\operatorname{Tr}(\rho F_a)$, form the canonical dual $D_a$ from the Gram pseudoinverse, and write $D:\mathbb R^m\to\mathsf H_d$ for $D c=\sum_ac_aD_a$.

Define the frequency simplex $\Delta_m=\{f\in\mathbb R^m:f_a\ge0\text{ for all }a,\ \sum_af_a=1\}$ and the real-linear map $X:\mathbb R^m\to\mathsf H_d$ by $X(f)=\sum_af_aD_a$. On $\Delta_m$, this is the output of the previously defined linear-inversion procedure; on all of $\mathbb R^m$, $X$ denotes its linear extension. Use the induced operator norm $\|D\|_{2\to\mathrm{HS}}=\sup_{\|c\|_2=1}\|Dc\|_{\mathrm{HS}}$.

Then exact probabilities reconstruct the state: $X(p)=\rho$. For every real frequency vector $f\in\mathbb R^m$,
$$
\|X(f)-\rho\|_{\mathrm{HS}}\le\|D\|_{2\to\mathrm{HS}}\|f-p\|_2.
$$
Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space and let $Y_1,\ldots,Y_n:\Omega\to\{1,\ldots,m\}$ be measurable with the independent product law $\mathbb P(Y_1=a_1,\ldots,Y_n=a_n)=\prod_kp_{a_k}$ for every outcome tuple. Define $f_a=n^{-1}\sum_{k=1}^n\mathbf1_{\{Y_k=a\}}$. Then for every $0<\delta<1$,
$$
\mathbb P\!\left(\max_{1\le a\le m}|f_a-p_a|\le\sqrt{\frac{\log(2m/\delta)}{2n}}\right)\ge1-\delta.
$$
Consequently, with probability at least $1-\delta$,
$$
\|X(f)-\rho\|_{\mathrm{HS}}\le\|D\|_{2\to\mathrm{HS}}\sqrt m\sqrt{\frac{\log(2m/\delta)}{2n}}.
$$
These are conditional mathematical statements under the specified product sampling law; no empirical data or calibrated apparatus is asserted.

## Statement references

[[def-nrqmx-finite-hermitian-frame-and-gram-pseudoinverse]]

[[alg-nrqmx-linear-tomography-procedure]]

[[lem-nrqm-composites-finite-effects-and-instruments]]

[[lem-nrqmx-bernoulli-hoeffding]]

## Facts & Assumptions

**Given:** The finite POVM and spanning, density-matrix, and independent product-sampling hypotheses in the Statement.

[A1] The sample outcomes have the independent product law with one-trial probabilities $(p_a)_{a=1}^m$ stated in the Statement.

[F1] [[lem-nrqmx-frame-pseudoinverse-reconstruction]]: for every $H\in\mathsf H_d$, $\sum_a\operatorname{Tr}(HF_a)D_a=H$.

[F2] [[lem-nrqm-composites-finite-effects-and-instruments]]: for a density operator $\rho$ and finite POVM $(F_a)$, $p_a=\operatorname{Tr}(\rho F_a)\ge0$ and $\sum_ap_a=1$.

[F3] [[alg-nrqmx-linear-tomography-procedure]]: on an admissible frequency vector $f\in\Delta_m$, the procedure returns $X(f)=\sum_af_aD_a$; the Statement defines the same formula as a linear map on all of $\mathbb R^m$.

[F4] [[lem-nrqmx-bernoulli-hoeffding]]: for $n$ independent Bernoulli$(p)$ variables, their frequency $f$ satisfies $\mathbb P(|f-p|\ge t)\le2e^{-2nt^2}$ for every $t>0$, without a choice assumption.

[F5] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: the Euclidean and Hilbert–Schmidt norms satisfy Cauchy–Schwarz.

[F6] [[cor-cauchy-reals-lub-complete]]: every nonempty bounded-above set of real numbers has a supremum.

[F7] [[lem-nrqmx-finite-hermitian-trace-inner-product]]: the Hilbert–Schmidt trace pairing on $\mathsf H_d$ is a real inner product and its induced norm is $\|A\|_{\mathrm{HS}}=\sqrt{\operatorname{Tr}(A^2)}$.

## Proof


1.1 Apply [F1] with $H=\rho$. Then $\sum_ap_aD_a=\rho$, so [F3] gives $X(p)=\rho$. The probabilities are in $[0,1]$ and sum to one by [F2]. [given, F1, F2, F3, algebra]

1.2 For each sample $k$, $\sum_{a=1}^m\mathbf1_{\{Y_k=a\}}=1$, so $f_a\ge0$ and $\sum_af_a=1$, as required by [F3]. Fix an outcome $a$ and set $Z_k^a=\mathbf1_{\{Y_k=a\}}$. For every $z\in\{0,1\}^n$, summing [A1] over the finite outcome tuples with $\mathbf1_{\{Y_k=a\}}=z_k$ gives $$\mathbb P(Z_1^a=z_1,\ldots,Z_n^a=z_n)=\prod_{k=1}^n\sum_{b:\,\mathbf1_{\{b=a\}}=z_k}p_b=\prod_{k=1}^n b_{p_a}(z_k),$$ since [F2] gives $\sum_bp_b=1$. Thus these indicators have the Bernoulli product law, and [F4] yields $\mathbb P(|f_a-p_a|\ge t)\le2e^{-2nt^2}$. No independence between indicators for different outcomes is used. [given, A1, F2, F3, F4, algebra]

2.1 By linearity, $X(f)-\rho=D(f-p)$. Set $C=(\sum_a\|D_a\|_{\mathrm{HS}}^2)^{1/2}$. By [F7], this is the norm from a real inner product, so its triangle inequality follows from [F5] by expanding the square of a sum. Thus $\|Dc\|_{\mathrm{HS}}\le\sum_a|c_a|\|D_a\|_{\mathrm{HS}}\le C\|c\|_2$. Since $m\ge1$, the unit sphere in $\mathbb R^m$ contains $e_1$, so the set $\{\|Dc\|_{\mathrm{HS}}:\|c\|_2=1\}$ is nonempty; the bound makes it bounded above. Its supremum exists by [F6] and is the finite induced operator norm in the Statement. Scaling $c$ (and treating $c=0$ directly) gives $\|Dc\|_{\mathrm{HS}}\le\|D\|_{2\to\mathrm{HS}}\|c\|_2$, which proves the deterministic estimate. [given, F5, F6, F7, step 1.1, algebra]

3.1 A finite union bound gives $\mathbb P(\exists a:\ |f_a-p_a|\ge t)\le2m e^{-2nt^2}$. Set $t=\sqrt{\log(2m/\delta)/(2n)}$, which is positive since $2m/\delta>1$; then the right side is $\delta$. On the complementary event, $\|f-p\|_2\le\sqrt m\,t$, and step 2.1 gives the asserted state-error bound. [given, A1, step 2.1, step 1.2, algebra] ∎ 

