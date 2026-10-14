---
id: lem-bounded-variable-hoeffding-mgf
kind: lemma
title: "The Hoeffding MGF bound for a variable in a unit interval"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - cor-exponential-reciprocal-and-positivity
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-natural-logarithm
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
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
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

## Proof

**Given:** A probability space, a measurable $Y$ with $0\le Y\le1$ almost surely, and $\lambda\in\mathbb R$.

1.1 Let $X$ be any measurable real random variable. For $a<0$, $\{e^{\lambda X}>a\}$ is the whole probability space by [F6]. For $a\ge0$ and $\lambda=0$, this set is the whole space if $a<1$ and empty if $a\ge1$. For $a\ge0$ and $\lambda\ne0$, it is the whole space when $a=0$; when $a>0$, strict increase of the exponential and the inverse relation with $\log$ give

$$\{e^{\lambda X}>a\}=\begin{cases}\{X>(\log a)/\lambda\},&\lambda>0,\\\{X<(\log a)/\lambda\},&\lambda<0.\end{cases}$$

Every set on the right is measurable by [F7]. Thus $e^{\lambda X}$ is measurable by the threshold characterization, with no appeal to a continuous-map Borel measurability result qualified by Countable Choice. [F6, F7, given, algebra]

1.2 Put $p:=\mathbb EY$. By [F1], $p\in[0,1]$. The shifted variable $Y-p$ is measurable because $\{Y-p>a\}=\{Y>a+p\}$ for every real $a$. Applying step 1.1 to $X=Y$ and $X=Y-p$ establishes measurability of both exponentials. Applying [F2] with endpoints $0,\lambda$ gives $e^{\lambda y}\le1-y+ye^\lambda$ for every $y\in[0,1]$; taking expectations yields $\mathbb E e^{\lambda Y}\le1-p+pe^\lambda$. [F1, F2, F7, step 1.1, given]

1.3 Define $g(\lambda):=1-p+pe^\lambda>0$ and $\psi(\lambda):=\log g(\lambda)-p\lambda$. Positivity follows from [F6] and $p\in[0,1]$. With $q(\lambda):=pe^\lambda/g(\lambda)\in[0,1]$, [F3]–[F4] give $\psi(0)=\psi'(0)=0$ and $\psi''(\lambda)=q(\lambda)(1-q(\lambda))\in[0,1/4]$. The formula also covers $p=0$ or $p=1$, since then $g$ remains positive. [given, F3, F4, F6, step 1.2, algebra]

2.1 The function $\psi''$ in step 1.3 is continuous. For $\lambda\ge0$, integrating twice by [F5] gives $\psi(\lambda)=\int_0^\lambda(\lambda-s)\psi''(s)\,ds\le\lambda^2/8$. For $\lambda<0$, the same endpoint formula written from $\lambda$ to $0$ gives $\psi(\lambda)=\int_\lambda^0(s-\lambda)\psi''(s)\,ds\le\lambda^2/8$. [F5, step 1.3, algebra]

2.2 By step 1.2 and the exponential addition formula [F8], $\mathbb E e^{\lambda(Y-p)}=e^{-\lambda p}\mathbb E e^{\lambda Y}\le e^{-\lambda p}g(\lambda)=e^{\psi(\lambda)}$; step 2.1 bounds this by $e^{\lambda^2/8}$. This proves the claim for every real $\lambda$, including $\lambda=0$. [F8, step 1.2, step 2.1, algebra] ∎
