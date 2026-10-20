---
id: thm-pac-bayes-kl-bound
kind: theorem
title: "The PAC-Bayes KL generalization bound"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-pac-bayes-prior-and-posterior
  - lem-pac-bayes-donsker-varadhan-inequality
  - def-population-and-empirical-risk
  - lem-population-and-empirical-risk-are-measurable
  - lem-bounded-variable-hoeffding-mgf
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-identically-distributed-and-iid-random-variables
  - lem-measurable-functions-preserve-independence
  - thm-factorization-of-expectations-for-independent-variables
  - thm-change-of-variables-for-expectation
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - cor-markov-inequality-for-random-variables
  - def-probability-measure
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-arithmetic-and-lattice-operations-preserve-measurability
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the Hoeffding MGF, finite product, and Tonelli arguments are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pierre Alquier, User-friendly Introduction to PAC-Bayes Bounds, Chapter 2, Theorem 2.1 and proof"
      url: "https://arxiv.org/pdf/2110.11216v4"
---

## Statement

Let $(\Theta,\mathcal A)$ and $(\mathcal Z,\mathcal B)$ be measurable spaces. Let $\pi$ and $D$ be probability measures on them, respectively. Let $C\ge0$ and let $\ell:\Theta\times\mathcal Z\to[0,C]$ be measurable with respect to $\mathcal A\otimes\mathcal B$. Let $m\ge1$ and let $S=(Z_1,\ldots,Z_m)$ consist of independent observations with common law $D$, equivalently having product law $D^m$. Define
$$R(\theta):=\int_{\mathcal Z}\ell(\theta,z)D(dz),\qquad \widehat R_S(\theta):=\frac1m\sum_{i=1}^m\ell(\theta,Z_i).$$
Fix the prior $\pi$ independently of $S$, and fix $\lambda>0$ and $\delta\in(0,1)$. For a probability measure $\rho$ with $\rho\ll\pi$ (that is, $\pi(A)=0$ implies $\rho(A)=0$ for all measurable $A$), define
$$\mathrm{KL}(\rho\|\pi):=\sup_{\mathcal P}\sum_{A\in\mathcal P}\rho(A)\log\frac{\rho(A)}{\pi(A)},$$
where $\mathcal P$ ranges over finite measurable partitions of $\Theta$, terms with zero numerator are $0$, and a positive numerator over zero denominator is $+\infty$. With probability at least $1-\delta$ over $S$, simultaneously for every such posterior $\rho$,
$$\mathbb E_{\theta\sim\rho}R(\theta)\le \mathbb E_{\theta\sim\rho}\widehat R_S(\theta)+\frac{\lambda C^2}{8m}+\frac{\mathrm{KL}(\rho\|\pi)+\log(1/\delta)}{\lambda}.$$
An infinite relative entropy makes the bound vacuous. The conclusion bounds posterior-average risk, not the risk of every posterior draw.

## Statement references

[[def-pac-bayes-prior-and-posterior]]: defines a sample-independent prior, an absolutely continuous posterior, and relative entropy.

[[def-population-and-empirical-risk]]: population risk is the expected loss and empirical risk is the sample-average loss.

[[def-identically-distributed-and-iid-random-variables]]: IID observations are independent and have a common law.

[[def-natural-logarithm]]: $\log$ is the inverse of the real exponential on positive reals.

[[def-real-exponential-function-and-e]]: the real exponential is defined on all real inputs and $e=\exp(1)$.

[[lem-bounded-variable-hoeffding-mgf]]: a unit-range random variable has centered exponential moment at most $\exp(t^2/8)$ for every real $t$.

[Alquier, *User-friendly Introduction to PAC-Bayes Bounds*, Chapter 2, Theorem 2.1 and proof](https://arxiv.org/pdf/2110.11216v4): proves the bounded-loss PAC-Bayes KL bound by integrating the fixed-parameter Hoeffding MGF, applying the Donsker–Varadhan formula, and using Markov's inequality.

## Facts & Assumptions

**Given:** The probability spaces, loss, product-law sample, $m,C,\lambda,\delta$, and fixed prior in the Statement.

[A1] The prior $\pi$ is fixed independently of the sample; the loss satisfies $0\le\ell(\theta,z)\le C$ and is product-measurable; $m\ge1$, $\lambda>0$, and $0<\delta<1$.

[F1] Population risk is the expectation of loss and empirical risk is its sample average; for a fixed measurable predictor these are defined, and the empirical-risk function of the sample is measurable. [[def-population-and-empirical-risk]], [[lem-population-and-empirical-risk-are-measurable]]

[F2] IID means independent random elements with a common law. [[def-identically-distributed-and-iid-random-variables]]

[F3] Measurable functions of independent random elements remain independent. [[lem-measurable-functions-preserve-independence]]

[F4] If $Z_i$ has law $D$, then $\mathbb E\ell(\theta,Z_i)=\int\ell(\theta,z)D(dz)=R(\theta)$. [[thm-change-of-variables-for-expectation]]

[F5] For an integrable real random variable, expectation is homogeneous: $\mathbb E(aX)=a\mathbb E X$. [[cor-expectation-linearity-monotonicity-and-modulus-bound]]

[F6] If $0\le Y\le1$, then $\mathbb E\exp(t(Y-\mathbb EY))\le\exp(t^2/8)$ for every real $t$. The proof of this supplier is choice-free. [[lem-bounded-variable-hoeffding-mgf]]

[F7] Expectations of finite products of nonnegative functions of independent real random variables factor as products of expectations, and the exponential of a finite sum is the product of the exponentials. [[thm-factorization-of-expectations-for-independent-variables]], [[thm-exponential-addition-formula]]

[F8] $\pi$ and $D$ are probability measures; finite product sigma-algebras and finite products of probability measures are defined, the product measure has the rectangle formula, and Tonelli makes section integrals measurable and permits exchange of nonnegative product integrals. [[def-probability-measure]], [[def-product-sigma-algebra-and-finite-product-sigma-algebras]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F9] For a nonnegative random variable $X$ and $a>0$, $\mathbb P(X\ge a)\le\mathbb E[X]/a$. [[cor-markov-inequality-for-random-variables]]

[F10] For bounded measurable $f$ and posterior $\rho\ll\pi$, $\mathbb E_\rho f\le\mathrm{KL}(\rho\|\pi)+\log\mathbb E_\pi e^f$. [[lem-pac-bayes-donsker-varadhan-inequality]]

[F11] Finite sums, differences, and Borel compositions of measurable real-valued functions are measurable. [[thm-arithmetic-and-lattice-operations-preserve-measurability]], [[thm-composition-with-borel-functions-preserves-measurability]]

[F12] The natural logarithm is defined as the inverse of the exponential, is increasing, has $\log 1=0$, and satisfies $\log(xy)=\log x+\log y$ for positive $x,y$. [[def-natural-logarithm]], [[thm-natural-logarithm-laws]]

[F13] The one-cell measurable partition contributes $0$ to the finite-partition definition of $\mathrm{KL}$, so $\mathrm{KL}(\rho\|\pi)\ge0$. [[def-pac-bayes-prior-and-posterior]]

[F14] The real exponential is defined on $\mathbb R$, positive, and strictly increasing. [[def-real-exponential-function-and-e]], [[cor-exponential-reciprocal-and-positivity]], [[thm-exponential-is-strictly-increasing]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 If $C=0$, then $\ell=0$, so both risks are zero and the bound follows because [F13] gives $\mathrm{KL}(\rho\|\pi)\ge0$ and [F12] gives $\log(1/\delta)>0$. Suppose $C>0$ and fix $\theta\in\Theta$. Put $Y_i=\ell(\theta,Z_i)$. By [F2]–[F4], the $Y_i$ are independent and $\mathbb EY_i=R(\theta)$. Apply [F6] to $Y_i/C\in[0,1]$ with $t=-\lambda C/m$, and use [F5] to rescale the centered variable, obtaining $\mathbb E\exp(-\lambda(Y_i-R(\theta))/m)\le\exp(\lambda^2C^2/(8m^2))$. By [F7] and the exponential addition formula, the finite product factors, so $\mathbb E_S\exp\big(\lambda(R(\theta)-\widehat R_S(\theta))\big)\le\exp\left(\frac{\lambda^2C^2}{8m}\right)$. [A1, F1, F2, F3, F4, F5, F6, F7, F12, F13, given, algebra]

2.1 The fixed-predictor risks are defined by [F1], and the bounded product-measurable loss makes $R(\theta)$ measurable in $\theta$ by [F8]; finite projection, arithmetic, and Borel composition make $(\theta,S)\mapsto\exp(\lambda(R(\theta)-\widehat R_S(\theta)))$ product-measurable by [F11]. By [F14], this integrand lies between $e^{-\lambda C}>0$ and $e^{\lambda C}$. Thus $M_\lambda(S):=\mathbb E_{\theta\sim\pi}\exp(\lambda(R(\theta)-\widehat R_S(\theta)))$ is measurable, positive, and Tonelli [F8] exchanges the prior and sample integrals. Integrating step 1.1 over $\pi$ gives $\mathbb E_S M_\lambda(S)\le\exp(\lambda^2C^2/(8m))$. [A1, F1, F8, F11, F14, step 1.1, construct]

3.1 By [F9] with threshold $\exp(\lambda^2C^2/(8m))/\delta$, the event $M_\lambda(S)\le\exp(\lambda^2C^2/(8m))/\delta$ has probability at least $1-\delta$. [A1, F9, F14, step 2.1, algebra]

4.1 On this event, for every posterior $\rho\ll\pi$, apply [F10] to the bounded measurable function $f_S(\theta)=\lambda(R(\theta)-\widehat R_S(\theta))$. This gives $\lambda(\mathbb E_\rho R-\mathbb E_\rho\widehat R_S)\le\mathrm{KL}(\rho\|\pi)+\log M_\lambda(S)\le\mathrm{KL}(\rho\|\pi)+\lambda^2C^2/(8m)+\log(1/\delta)$ by [F12]. Divide by $\lambda>0$; when the KL value is infinite the inequality is vacuous. [A1, F10, F12, F14, step 3.1, algebra]

5.1 The event in step 3.1 is independent of $\rho$, and step 4.1 proves the bound for every posterior on that one event, which has probability at least $1-\delta$. The $C=0$ case was handled in step 1.1, so the theorem holds for all $C\ge0$. [step 1.1, step 3.1, step 4.1, given] ∎

## Remarks

This is a posterior-average risk bound. It does not assert that $R(\theta)$ obeys the same inequality for every individual $\theta$ sampled from $\rho$.
