---
id: lem-pac-bayes-donsker-varadhan-inequality
kind: lemma
title: "The PAC-Bayes change-of-measure inequality"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-pac-bayes-prior-and-posterior
  - lem-it-finite-log-sum-inequality
  - def-natural-logarithm
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-addition-formula
  - thm-natural-logarithm-laws
  - thm-exponential-is-strictly-increasing
  - def-probability-measure
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-nonnegative-lebesgue-integral
  - def-nonnegative-simple-measurable-function
  - def-integral-of-a-nonnegative-simple-function
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-measurable-function-between-measurable-spaces
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-composition-with-borel-functions-preserves-measurability
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the proof uses finite measurable partitions and bounded simple approximations."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Pierre Alquier, User-friendly Introduction to PAC-Bayes Bounds, Chapter 2, Lemma 2.2"
      url: "https://arxiv.org/pdf/2110.11216v4"
---

## Statement

Let $(\Theta,\mathcal A)$ be a measurable space, let $\pi$ be a probability measure, and let $\rho$ be a probability measure absolutely continuous with respect to $\pi$, meaning that $\pi(A)=0$ implies $\rho(A)=0$ for all $A\in\mathcal A$. Define
$$\mathrm{KL}(\rho\|\pi):=\sup_{\mathcal P}\sum_{A\in\mathcal P}\rho(A)\log\frac{\rho(A)}{\pi(A)},$$
where $\mathcal P$ ranges over finite measurable partitions of $\Theta$, a zero-numerator term is $0$, and a positive numerator over a zero denominator is $+\infty$. For every bounded measurable $f:\Theta\to\mathbb R$,
$$\mathbb E_{\theta\sim\rho}f(\theta)\le \mathrm{KL}(\rho\|\pi)+\log\mathbb E_{\theta\sim\pi}\exp(f(\theta)),$$
with the inequality interpreted as vacuous when $\mathrm{KL}(\rho\|\pi)=+\infty$.

## Statement references

[[def-pac-bayes-prior-and-posterior]]: a posterior is absolutely continuous with respect to the prior, and $\mathrm{KL}$ is the supremum over finite measurable partitions.

[[def-natural-logarithm]]: $\log$ is the inverse of the real exponential on the positive reals.

[[lem-it-finite-log-sum-inequality]]: for finite nonnegative vectors, the sum of coordinatewise relative-entropy terms is at least the corresponding aggregate term.

[Alquier, *User-friendly Introduction to PAC-Bayes Bounds*, Chapter 2, Lemma 2.2](https://arxiv.org/pdf/2110.11216v4): states the Donsker–Varadhan variational formula for bounded measurable functions.

## Facts & Assumptions

**Given:** A measurable space $(\Theta,\mathcal A)$, probability measures $\pi,\rho$ with $\rho\ll\pi$, and a bounded measurable $f:\Theta\to\mathbb R$.

[F1] $\mathrm{KL}(\rho\|\pi)$ is the supremum over finite measurable partitions $\mathcal P$ of $\sum_{A\in\mathcal P}\rho(A)\log(\rho(A)/\pi(A))$, with zero-numerator terms set to $0$. [[def-pac-bayes-prior-and-posterior]]

[F2] If $a_i,b_i\ge0$, $A=\sum_i a_i$, and $B=\sum_i b_i$, then $\sum_{a_i>0}a_i\log(a_i/b_i)\ge A\log(A/B)$, with the stated support conventions. [[lem-it-finite-log-sum-inequality]]

[F3] The real exponential and natural logarithm are defined on the stated domains; the exponential is positive and increasing and satisfies $\exp(u+v)=\exp(u)\exp(v)$, while the natural logarithm is increasing and satisfies $\log(xy)=\log x+\log y$ for positive $x,y$. [[def-real-exponential-function-and-e]], [[def-natural-logarithm]], [[cor-exponential-reciprocal-and-positivity]], [[thm-exponential-is-strictly-increasing]], [[thm-exponential-addition-formula]], [[thm-natural-logarithm-laws]]

[F4] On a probability space, expectation is the Lebesgue integral; a real measurable function is integrable when its absolute value has finite integral. The nonnegative integral is monotone and positively homogeneous, and for a nonnegative simple function $s=\sum_j c_j\mathbf1_{A_j}$ its integral is $\sum_jc_jP(A_j)$. A constant $c\ge0$ therefore has integral $c$ when $P(\Theta)=1$. [[def-probability-measure]], [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[def-integrable-real-and-complex-functions-and-their-integrals]], [[def-nonnegative-lebesgue-integral]], [[def-nonnegative-simple-measurable-function]], [[def-integral-of-a-nonnegative-simple-function]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]

[F5] For integrable real functions, expectation is linear and $|\mathbb E g|\le\mathbb E|g|$. [[cor-expectation-linearity-monotonicity-and-modulus-bound]]

[F6] Measurable functions are defined by measurable preimages; composition with a Borel measurable map preserves measurability, and a continuous real map has Borel preimages of Borel sets. [[def-measurable-function-between-measurable-spaces]], [[thm-continuous-preimages-of-borel-sets-are-borel]], [[thm-composition-with-borel-functions-preserves-measurability]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 If $g$ is bounded and measurable with $|g|\le C$ on either probability space, then $\mathbb E|g|\le\int C\,dP=C$, so $g$ is integrable. If $g$ is finite-valued, writing its positive and negative parts on its finite level-set partition and applying the simple-integral formula in [F4] gives $\mathbb E_P g=\sum_jg_jP(A_j)$. Since $f$ is measurable and $\exp$ is continuous by [F3], [F6] makes $\exp\circ f$ measurable; boundedness of $f$ gives $0<\exp(-C)\le\mathbb E_\pi\exp(f)\le\exp(C)<\infty$ for some $C\ge0$. We may assume $\mathrm{KL}(\rho\|\pi)<\infty$, since otherwise the claim is immediate. [F3, F4, F6, given]

2.1 First let $f$ be finite-valued, with values $f_1,\ldots,f_N$ on the finite measurable partition $A_1,\ldots,A_N$. Put $p_j=\pi(A_j)$ and $r_j=\rho(A_j)$. Absolute continuity gives $p_j=0\Rightarrow r_j=0$. For $a_j=r_j$ and $b_j=p_j\exp(f_j)$, the sums are $1$ and $\mathbb E_\pi\exp(f)$ by step 1.1. Applying [F2] yields $\sum_{r_j>0}r_j\log\frac{r_j}{p_j\exp(f_j)}\ge-\log\mathbb E_\pi\exp(f)$. [F2, F3, step 1.1, given]

2.2 For each integer $n\ge1$, partition the bounded range of $f$ into finitely many half-open intervals of width at most $1/n$, including the final endpoint, and let $f_n$ equal each interval's left endpoint on its preimage. These preimages are measurable by [F6], and $\lVert f_n-f\rVert_\infty\le1/n$. By [F5] and step 1.1, $|\mathbb E_\rho f_n-\mathbb E_\rho f|\le1/n$. Monotonicity and homogeneity in [F4], together with [F3], give $e^{-1/n}\mathbb E_\pi e^f\le\mathbb E_\pi e^{f_n}\le e^{1/n}\mathbb E_\pi e^f$. The logarithms are defined by step 1.1 and [F3], and differ by at most $1/n$. [F3, F4, F5, F6, step 1.1, construct]

3.1 Expanding the logarithm and using step 1.1, the left side of step 2.1 equals $\sum_jr_j\log(r_j/p_j)-\mathbb E_\rho f$. The first term is the divergence of this partition, hence at most $\mathrm{KL}(\rho\|\pi)$ by [F1]. Rearrangement gives the claim for finite-valued $f$. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Apply step 3.1 to each $f_n$ and let $n\to\infty$; the two expectation terms converge by the bounds in step 2.2, proving the stated inequality for bounded measurable $f$. [step 3.1, step 2.2, algebra] ∎
