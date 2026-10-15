---
id: lem-gaussian-linear-and-quadratic-statistic-tail
kind: lemma
title: "Linear and quadratic Gaussian statistics have exponential tails"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-standard-normal-and-normal-laws
  - def-independent-random-elements
  - def-axiom-of-choice
  - thm-factorization-of-expectations-for-independent-variables
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-monotone-convergence-for-the-integral
  - cor-markov-inequality-for-random-variables
  - def-real-exponential-function-and-e
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
proof_strategy: direct
axiom_use: "AC is inherited from the standard-normal probability law."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "A. W. van der Vaart and J. H. van Zanten, Rates of contraction of posterior distributions based on Gaussian process priors, §3.3"
      url: "https://arxiv.org/pdf/0806.3024"
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Convergence rates of posterior distributions for noniid observations, §3"
      url: "https://arxiv.org/pdf/0708.0491"
---

## Statement

Assume AC. Let $n\ge1$ be an integer. Let $Z_1,\ldots,Z_n$ be independent $N(0,1)$ variables, let $c_1,\ldots,c_n,\delta_1,\ldots,\delta_n\in\mathbb R$, and let $0<\sigma\le b$. Put $\|c\|_n^2=n^{-1}\sum_i c_i^2$ and $\|\delta\|_n^2=n^{-1}\sum_i\delta_i^2$. For $t>0$,
$$\Pr\!\left(\left|n^{-1}\sum_i c_i\sigma Z_i\right|\ge t\right)\le2\exp\!\left(-\frac{nt^2}{2\sigma^2\|c\|_n^2}\right),$$
with zero probability when $\|c\|_n=0$. If $\|\delta\|_n\le1$ and $0<t\le b^2+2$, then
$$\Pr\!\left(\left|n^{-1}\sum_i(\delta_i+\sigma Z_i)^2-(\sigma^2+\|\delta\|_n^2)\right|\ge t\right)\le2\exp\!\left(-\frac{nt^2}{4V_b}\right),\qquad V_b=2b^4+4b^2.$$

## Facts & Assumptions

**Given:** The independent standard-normal variables and the stated deterministic coefficients.

[A1] Assume AC for the standard-normal law [[def-standard-normal-and-normal-laws]].

[F1] [[thm-factorization-of-expectations-for-independent-variables]]: expectations of integrable products of functions of independent variables factor.

[F2] [[thm-linear-change-of-variables-for-lebesgue-measure]] gives positive linear scaling of Lebesgue measure, and [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]] gives translation invariance. Applying these set identities first to nonnegative simple functions and then using [[thm-monotone-convergence-for-the-integral]] gives $\int_{\mathbb R}f(az+h)\,dz=a^{-1}\int_{\mathbb R}f(y)\,dy$ for nonnegative Borel $f$, $a>0$, and $h\in\mathbb R$.

[F3] [[cor-markov-inequality-for-random-variables]]: for a nonnegative random variable $X$ and $a>0$, $\Pr(X\ge a)\le EX/a$.

[F4] [[thm-logarithm-derivative-and-integral]]: for $x>0$, $\log x=\int_1^x du/u$.

## Proof

1.1 By [[def-standard-normal-and-normal-laws]], $Z$ has density $e^{-z^2/2}/\sqrt{2\pi}$. Completing the square and translating the integration variable by $u$ using [F2] gives $E e^{uZ}=e^{u^2/2}$ for every real $u$. Independence and [F1] therefore give the moment generating function of $n^{-1}\sum_i c_i\sigma Z_i$ as $\exp(\lambda^2\sigma^2\sum_i c_i^2/(2n^2))$. Exponential Markov [F3] with $\lambda=n^2t/(\sigma^2\sum_i c_i^2)$ bounds each one-sided tail by $\exp(-nt^2/(2\sigma^2\|c\|_n^2))$; if all $c_i=0$, the statistic is identically zero. [A1, F1, F2, F3, given, algebra]

1.2 For $|\lambda|\le1/(4b^2)$, completing the square in the same density integral gives $E\exp\{\lambda[(\delta_i+\sigma Z_i)^2-(\delta_i^2+\sigma^2)]\} =(1-2\lambda\sigma^2)^{-1/2}\exp\!\left(-\lambda\sigma^2+\frac{2\lambda^2\sigma^2\delta_i^2}{1-2\lambda\sigma^2}\right).$ Here $|2\lambda\sigma^2|\le1/2$. By [F4], for $|x|\le1/2$, $-x-\log(1-x)\le x^2$: for $x\ge0$ integrate $u/(1-u)\le2u$ on $[0,x]$, and for $x<0$ integrate $u/(1+u)\le u$ on $[0,|x|]$. Taking logarithms in the display, summing over $i$, and using [F1] therefore bounds the centered-sum log moment generating function above by $\lambda^2(2nb^4+4b^2\sum_i\delta_i^2)\le nV_b\lambda^2$. [A1, F1, F2, F4, given, algebra]

2.1 For $0<t\le b^2+2=V_b/(2b^2)$, choose $\lambda=t/(2V_b)$, which satisfies $0<\lambda\le1/(4b^2)$. Exponential Markov [F3] and step 1.2 give the upper tail $\exp(-nt^2/(4V_b))$; applying the same argument to the negative centered sum gives the lower tail. Adding the two bounds proves the claimed quadratic-statistic inequality. [F3, step 1.2, given, algebra] ∎
