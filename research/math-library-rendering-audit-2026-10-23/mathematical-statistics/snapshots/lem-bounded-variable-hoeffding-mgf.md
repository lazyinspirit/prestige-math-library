---
id: lem-bounded-variable-hoeffding-mgf
kind: lemma
title: "The Hoeffding MGF bound for a variable in a unit interval"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - cor-exponential-reciprocal-and-positivity
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-integral-over-a-measurable-set
  - def-measure-null-set-and-almost-everywhere
  - def-probability-measure
  - def-natural-logarithm
  - def-nonnegative-lebesgue-integral
  - def-integral-of-a-nonnegative-simple-function
  - def-real-exponential-function-and-e
  - thm-algebra-of-continuous-functions
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - thm-derivative-of-exponential
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - thm-exponential-two-point-convexity
  - thm-ftc-second-part
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
  - thm-threshold-characterisations-of-real-and-extended-real-measurability
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - cor-integral-over-a-null-set-vanishes
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-19
    scope: complete-proof-and-used-supplier-audit
    delegated_by: /root
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 1, Lemma 1.8"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 4, Hoeffding's Lemma"
      url: "https://web.stanford.edu/class/stats311/lecture-notes.pdf"
---

## Statement

Let $Y$ be a measurable real random variable on a probability space with $0\le Y\le1$ almost surely. Then, for every $\lambda\in\mathbb R$,

$$\mathbb E\exp\{\lambda(Y-\mathbb EY)\}\le \exp(\lambda^2/8).$$

This proof uses only finite product and scalar integral arguments; it does not assume the Axiom of Choice.

## Facts & Assumptions

**Given:** A probability space, a measurable $Y$ with $0\le Y\le1$ almost surely, and $\lambda\in\mathbb R$.

[F1] If $X\le W$ almost surely for integrable real variables, then $\mathbb EX\le\mathbb EW$ ([[cor-expectation-linearity-monotonicity-and-modulus-bound]]).

[F2] For $0\le t\le1$ and real $x,y$, $\exp((1-t)x+ty)\le(1-t)\exp(x)+t\exp(y)$ ([[thm-exponential-two-point-convexity]]).

[F3] For $u>0$, $\log$ is differentiable and $\log'(u)=1/u$; $\exp'=\exp$ ([[thm-logarithm-derivative-and-integral]], [[thm-derivative-of-exponential]]).

[F4] Sums, scalar multiples, products, quotients with nonzero denominator, and compositions obey the usual derivative and continuity rules ([[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[thm-algebra-of-continuous-functions]]).

[F5] If a differentiable function has continuous integrable derivative on a compact interval, the second fundamental theorem evaluates the integral of that derivative by endpoint differences ([[thm-ftc-second-part]]).

[F6] The exponential is positive, $\exp(0)=1$, and $\log(1)=0$ ([[cor-exponential-reciprocal-and-positivity]], [[thm-natural-logarithm-laws]]).

[F7] A real-valued function is measurable when all strict upper or all strict lower threshold sets are measurable; the exponential is strictly increasing, positive, and inverse to the natural logarithm on positive inputs ([[thm-threshold-characterisations-of-real-and-extended-real-measurability]], [[thm-exponential-is-strictly-increasing]], [[cor-exponential-reciprocal-and-positivity]], [[def-natural-logarithm]]).

[F8] The exponential addition formula is $\exp(x+y)=\exp(x)\exp(y)$ ([[thm-exponential-addition-formula]]).

[F9] Absolute values of measurable real functions are measurable. A statement holding almost surely has a measurable null exceptional set. The probability measure satisfies $P(\Omega)=1$. For nonnegative measurable $g$, the set function $B\mapsto\int_B g\,dP$ is a measure; the nonnegative integral is monotone under pointwise order, indicators integrate to their measures, and integrals over null sets vanish. A real measurable function is integrable exactly when its absolute-value integral is finite ([[thm-arithmetic-and-lattice-operations-preserve-measurability]], [[def-measure-null-set-and-almost-everywhere]], [[def-probability-measure]], [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]], [[def-integral-over-a-measurable-set]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[def-integral-of-a-nonnegative-simple-function]], [[cor-integral-over-a-null-set-vanishes]], [[def-integrable-real-and-complex-functions-and-their-integrals]]).

## Proof

**Given:** A probability space, a measurable $Y$ with $0\le Y\le1$ almost surely, and $\lambda\in\mathbb R$.

1.1 Let $X$ be any measurable real random variable. For $a<0$, $\{e^{\lambda X}>a\}$ is the whole probability space by [F6]. For $a\ge0$ and $\lambda=0$, this set is the whole space if $a<1$ and empty if $a\ge1$. For $a\ge0$ and $\lambda\ne0$, it is the whole space when $a=0$; when $a>0$, strict increase of the exponential and the inverse relation with $\log$ give $$\{e^{\lambda X}>a\}=\begin{cases}\{X>(\log a)/\lambda\},&\lambda>0,\\\{X<(\log a)/\lambda\},&\lambda<0.\end{cases}$$ Every set on the right is measurable by [F7]. Thus $e^{\lambda X}$ is measurable by the threshold characterization, with no appeal to a continuous-map Borel measurability result qualified by Countable Choice. [F6, F7, given, algebra]

2.1 Let $A:=\{|Y|\le1\}$, measurable by [F9], so $P(A)=1$. Define $\nu(B):=\int_B|Y|\,dP$; by [F9] this is a measure. Since $|Y|\mathbf1_A\le\mathbf1_A$, [F9] gives $\nu(A)\le P(A)=1$, while $P(A^c)=0$ gives $\nu(A^c)=0$. Therefore $\mathbb E|Y|=\nu(\Omega)=\nu(A)+\nu(A^c)\le1$, so $Y$ is integrable by [F9]. Put $p:=\mathbb EY$; then [F1] gives $p\in[0,1]$. The shifted variable $Y-p$ is measurable because $\{Y-p>a\}=\{Y>a+p\}$ for every real $a$. Applying step 1.1 to $X=Y$ and $X=Y-p$ establishes measurability of both exponentials. Applying [F2] with endpoints $0,\lambda$ gives $e^{\lambda y}\le1-y+ye^\lambda$ for every $y\in[0,1]$; taking expectations yields $\mathbb E e^{\lambda Y}\le1-p+pe^\lambda$. [F1, F2, F9, step 1.1, given]

3.1 Define $g(\lambda):=1-p+pe^\lambda>0$ and $\psi(\lambda):=\log g(\lambda)-p\lambda$. Positivity follows from [F6] and $p\in[0,1]$. With $q(\lambda):=pe^\lambda/g(\lambda)\in[0,1]$, [F3]–[F4] give $\psi(0)=\psi'(0)=0$ and $\psi''(\lambda)=q(\lambda)(1-q(\lambda))\in[0,1/4]$. The formula also covers $p=0$ or $p=1$, since then $g$ remains positive. [given, F3, F4, F6, step 2.1, algebra]

4.1 The function $\psi''$ in step 3.1 is continuous. For $\lambda\ge0$, integrating twice by [F5] gives $\psi(\lambda)=\int_0^\lambda(\lambda-s)\psi''(s)\,ds\le\lambda^2/8$. For $\lambda<0$, the same endpoint formula written from $\lambda$ to $0$ gives $\psi(\lambda)=\int_\lambda^0(s-\lambda)\psi''(s)\,ds\le\lambda^2/8$. [F5, step 3.1, algebra]

5.1 By step 2.1 and the exponential addition formula [F8], $\mathbb E e^{\lambda(Y-p)}=e^{-\lambda p}\mathbb E e^{\lambda Y}\le e^{-\lambda p}g(\lambda)=e^{\psi(\lambda)}$; step 4.1 bounds this by $e^{\lambda^2/8}$. This proves the claim for every real $\lambda$, including $\lambda=0$. [F8, step 2.1, step 4.1, algebra] ∎
