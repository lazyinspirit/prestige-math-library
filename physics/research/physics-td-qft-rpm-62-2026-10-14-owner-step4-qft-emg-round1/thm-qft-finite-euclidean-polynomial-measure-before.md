---
id: thm-qft-finite-euclidean-polynomial-measure
kind: theorem
title: Actual finite Euclidean polynomial measure and moments
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - def-qft-finite-euclidean-interacting-measure
  - lem-qft-finite-gaussian-wick-moments
  - def-axiom-of-choice
  - def-measure-with-density
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - thm-dominated-convergence
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-is-strictly-increasing
  - thm-derivative-of-exponential
  - thm-chain-rule-for-total-derivatives
  - cor-mean-value-theorem
dependency_roles:
  def-qft-finite-euclidean-interacting-measure: mathematical-premise
  lem-qft-finite-gaussian-wick-moments: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-measure-with-density: mathematical-premise
  thm-indefinite-integral-of-a-nonnegative-function-is-a-measure: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Skinner, Advanced Quantum Field Theory, Chapter 2, “QFT in Zero Dimensions” (University of Cambridge Part III lecture notes)
      url: https://www.damtp.cam.ac.uk/user/dbs26/AQFT/chap2.pdf
    - title: Nima Moshayedi, Quantum Field Theory and Functional Integrals (lecture notes, arXiv:1902.08652)
      url: https://arxiv.org/pdf/1902.08652
---

## Statement

Assume the Axiom of Choice. Let $N\ge1$ be finite, let $C$ be a real symmetric positive-semidefinite covariance matrix, let $\gamma_C=N_N(0,C)$, let $U:\mathbb R^N\to[0,\infty)$ be a real homogeneous quartic polynomial, and let $\lambda\ge0$. Define $Z(\lambda)=\int e^{-\lambda U}\,d\gamma_C$ and $N_P(\lambda)=\int P e^{-\lambda U}\,d\gamma_C$ for every real polynomial $P$.

Then $0<Z(\lambda)\le1$, and $\mu_\lambda:=Z(\lambda)^{-1}e^{-\lambda U}\gamma_C$ is a Borel probability measure. Every polynomial insertion is integrable under $\mu_\lambda$. For each integer $r\ge0$,

$$Z^{(r)}(\lambda)=(-1)^r\int U^r e^{-\lambda U}\,d\gamma_C,\qquad N_P^{(r)}(\lambda)=(-1)^r\int P U^r e^{-\lambda U}\,d\gamma_C$$

for $\lambda>0$, with continuous right derivatives of every finite order at $\lambda=0$. No continuum field measure is asserted.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice and use $C,U,\gamma_C,Z,N_P$ as in the Statement.

[A1] The Axiom of Choice is an explicit hypothesis of the finite-dimensional normal-law supplier and is carried here. [[def-axiom-of-choice]]

[F1] [[def-qft-finite-euclidean-interacting-measure]] defines $\gamma_C$, $Z(\lambda)$, and the density-weighted measure.

[F2] Every polynomial insertion has finite absolute Gaussian moment, and its covariance pairings are given by Wick's formula. [[lem-qft-finite-gaussian-wick-moments]]

[F3] If $f_n\to f$ almost everywhere under a measure and $|f_n|\le g$ for one integrable $g$, then $\int f_n\to\int f$. [[thm-dominated-convergence]]

[F4] For nonnegative measurable $w$, the set function $A\mapsto\int_Aw\,d\gamma_C$ is a measure; dividing by its positive total mass normalizes it. [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]], [[def-measure-with-density]]

[F5] For $x\ge0$ and every integer $n\ge0$, the real exponential power series gives $\exp(x)\ge x^n/n!$; the exponential is positive and strictly increasing, with $\exp(0)=1$. Thus $0<\exp(-x)\le1$ for $x\ge0$. [[def-real-exponential-function-and-e]], [[cor-exponential-reciprocal-and-positivity]], [[thm-exponential-is-strictly-increasing]]

[F6] The exponential is $C^\infty$ and has derivative itself. [[thm-derivative-of-exponential]]

[F7] The chain rule differentiates a composition of totally differentiable maps. [[thm-chain-rule-for-total-derivatives]]

[F8] If a scalar function is continuous on a closed interval and differentiable in its interior, its difference quotient equals an interior derivative at some point. [[cor-mean-value-theorem]]

## Proof

**Proof technique:** direct.

1.1 Since $U(q)\ge0$ and $\lambda\ge0$, [F5] gives $0<\exp(-\lambda U(q))\le1$ for every $q$, so $Z(\lambda)\le1$. For each positive integer $n$, let $E_n=\{q:\exp(-\lambda U(q))\ge1/n\}$. These are Borel and their union is $\mathbb R^N$, because the integrand is strictly positive at every $q$. Since $\gamma_C$ is a probability measure, not all $E_n$ can have measure zero: otherwise countable subadditivity would give $\gamma_C(\mathbb R^N)=0$. Thus some $E_n$ has positive measure, and $Z(\lambda)\ge\gamma_C(E_n)/n>0$. [A1, F1, F5, algebra]

1.2 Fix $r\ge0$. For $s=0,1,\ldots,r$, [F6] and [F7] give the pointwise derivative $(-1)^sP(q)U(q)^s\exp(-\lambda U(q))$ and its next derivative $(-1)^{s+1}P(q)U(q)^{s+1}\exp(-\lambda U(q))$. If $\lambda_0>0$ and $|h|<\lambda_0/2$, [F8] bounds the difference quotient of the $s$th derivative by $|P(q)|U(q)^{s+1}\exp(-\lambda_0U(q)/2)$, since every intermediate parameter is at least $\lambda_0/2$ and [F5] makes the exponential increasing. Put $x=U(q)$. If $x=0$ the scalar factor is zero; if $x>0$, put $y=\lambda_0x/4$. The power-series estimate in [F5] at $2y$ gives $\exp(2y)\ge(2y)^{s+1}/(s+1)!$, so its reciprocal gives $x^{s+1}\exp(-\lambda_0x/2)\le(2/\lambda_0)^{s+1}(s+1)!.$ Thus these difference quotients are bounded by a finite constant times $|P(q)|$, integrable by [F2]. [F3] permits differentiation under the integral inductively through order $r$, giving $N_P^{(r)}(\lambda)=(-1)^r\int P U^r\exp(-\lambda U)\,d\gamma_C$ for $\lambda>0$. Taking $P=1$ gives the formula for $Z$. [F2, F3, F5, F6, F7, F8, algebra]

2.1 The nonnegative Borel density $\exp(-\lambda U)/Z(\lambda)$ has integral one by the definition of $Z$ and step 1.1. By [F4], it defines a Borel probability measure $\mu_\lambda$. For any polynomial $P$, [F2] gives $\int|P|\,d\gamma_C<\infty$; since [F5] gives $\exp(-\lambda U)\le1$ and step 1.1 gives $Z(\lambda)>0$, $$\int|P|\,d\mu_\lambda\le Z(\lambda)^{-1}\int|P|\,d\gamma_C<\infty.$$ [F1, F2, F4, F5, step 1.1]

3.1 At $\lambda=0$, use right limits and right difference quotients. For $r=0$, dominated convergence [F3] with dominator $|P|$ and [F5] gives $N_P(\lambda)\to N_P(0)$ as $\lambda\downarrow0$; taking $P=1$ gives the same for $Z$. Now fix $r\ge1$. For each $s=0,1,\ldots,r-1$ and $h>0$, [F8] bounds the difference quotient of $(-1)^sP U^s\exp(-\lambda U)$ at zero by $|P|U^{s+1}$, since [F5] gives $0<\exp(-cU)\le1$ for $c\ge0$. This bound is integrable by [F2]. Dominated convergence [F3] inductively gives $N_{P,+}^{(r)}(0)=(-1)^r\int P U^r\,d\gamma_C$; applying [F3] to the formula in step 1.2 as $\lambda\downarrow0$ shows these derivatives converge continuously to their endpoint values. Taking $P=1$ gives the same assertions for $Z$. [F2, F3, F5, F6, F7, F8, step 1.2, given, algebra] ∎

