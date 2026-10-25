---
id: def-standard-cauchy-law
kind: definition
title: Standard Cauchy probability law
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-countable-choice
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-lebesgue-measure-is-a-complete-measure
  - cor-continuous-functions-are-borel-measurable
  - thm-borel-sets-are-lebesgue-measurable
  - thm-algebra-of-continuous-functions
  - def-measure-with-density
  - thm-continuous-implies-integrable
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-principal-inverse-tangent-calculus
  - def-principal-inverse-tangent
  - thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions
  - thm-monotone-convergence-for-the-integral
  - def-probability-measure
  - thm-additivity-over-subintervals
  - def-pi-via-first-positive-cosine-zero
  - def-real-numbers
  - cor-cauchy-reals-lub-complete
  - thm-of-archimedean
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Aki Vehtari et al., Rank-normalization, folding, and localization, §5.1"
      url: https://arxiv.org/pdf/1903.08008v5
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 11, §11.11"
      url: https://artowen.su.domains/mc/Ch-MCMC.pdf
proof_strategy: direct
axiom_use: "The probability-measure construction uses Countable Choice through Borel measurability and the Lebesgue integral interfaces. The normalization calculation itself is choice-free."
---

## Definition

Let $\lambda$ be Lebesgue measure on $\mathbb R$ and put
$f(x)=1/(\pi(1+x^2))$. Define the **standard Cauchy law** to be the measure
$\mu_C=f\,d\lambda$ given by [[def-measure-with-density]]. The proof below
verifies that this measure has total mass one, so it is a probability law.

## Facts & Assumptions

**Given:** Lebesgue measure $\lambda$ on $\mathbb R$ and the function $f(x)=1/(\pi(1+x^2))$.

[A1] Assume the Axiom of Countable Choice, inherited by the Borel-to-Lebesgue and continuous-function measurability interfaces. [[def-countable-choice]]

[F1] On $\mathbb R$, Lebesgue measure is the restriction of Lebesgue outer measure to the Lebesgue sigma-algebra. Under Countable Choice this is a complete measure space, and every Borel set is Lebesgue measurable. [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]] [[thm-lebesgue-measure-is-a-complete-measure]] [[thm-borel-sets-are-lebesgue-measurable]]

[F2] The function $f$ is continuous because polynomials, constants, scalar multiples, and quotients with nonzero denominator preserve continuity; a continuous function $\mathbb R\to\mathbb R$ is Borel measurable under Countable Choice. [[thm-algebra-of-continuous-functions]] [[cor-continuous-functions-are-borel-measurable]]

[F3] A nonnegative Lebesgue-measurable density $f$ defines the measure $f\,d\lambda(A)=\int_A f\,d\lambda$. [[def-measure-with-density]]

[F4] A continuous function on a closed bounded interval is bounded and Riemann integrable; under Countable Choice its Lebesgue integral there equals its Riemann integral. [[thm-continuous-implies-integrable]] [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]

[F5] $\arctan x=\int_0^x(1+t^2)^{-1}\,dt$ for every real $x$, and oriented integrals are additive over adjacent intervals. [[thm-principal-inverse-tangent-calculus]] [[thm-additivity-over-subintervals]]

[F6] The principal inverse tangent is a strictly increasing bijection from $\mathbb R$ onto $(-\pi/2,\pi/2)$. [[def-principal-inverse-tangent]]

[F7] Tangent is odd on its domain, so its inverse on the symmetric principal interval is odd. [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]

[F8] If nonnegative measurable functions $g_n$ increase pointwise to $g$, then $\int g_n\,d\lambda\uparrow\int g\,d\lambda$. [[thm-monotone-convergence-for-the-integral]]

[F9] A measure is a probability measure when its total mass is one. [[def-probability-measure]] Also, $\pi>0$. [[def-pi-via-first-positive-cosine-zero]]

[F10] By [[def-real-numbers]] and [[cor-cauchy-reals-lub-complete]], the real numbers are a complete ordered field. Thus [[thm-of-archimedean]] gives, for every real $r$, a natural $n$ with $n>r$.

[F11] If $E$ is measurable and $g$ is nonnegative measurable, then $g\mathbf1_E$ is measurable. [[prop-closure-properties-of-measurable-functions-used-by-the-integral]]

## Proof

1.1 Since $1+x^2\ge1$ and $\pi>0$ by [F9], the denominator in $f$ is positive. By [F2], $f$ is continuous and Borel measurable; [A1] and [F1] make it Lebesgue measurable. It is nonnegative, so [F3] defines the measure $\mu_C=f\,d\lambda$. [A1, F1, F2, F3, F9, given]

1.2 For each integer $n\ge1$, $f$ is continuous on $[-n,n]$, so [F4] permits evaluation of its Lebesgue integral by the Riemann integral. By [F5] and the evenness of $(1+x^2)^{-1}$, $\mu_C([-n,n])=\pi^{-1}\int_{-n}^n(1+x^2)^{-1}dx =(\arctan n-\arctan(-n))/\pi=2\arctan(n)/\pi$; the last equality follows from [F7]. [A1, F4, F5, F7, given]

1.3 The sequence $\arctan(n)$ is increasing and bounded above by $\pi/2$ by [F6]. For any $0<\varepsilon<\pi$, put $u=\pi/2-\varepsilon$ and $r=\tan u$. By [F10], all sufficiently large natural $n$ satisfy $n>r$, so strict increase and the inverse identity in [F6] give $\pi/2-\varepsilon=u<\arctan(n)<\pi/2$. This is the epsilon definition of $\arctan(n)\to\pi/2$. [given, F6, F10, algebra]

2.1 The interval $[-n,n]$ is Borel and hence Lebesgue measurable by [F1]; [F11] makes $f\mathbf1_{[-n,n]}$ measurable. These nonnegative functions increase pointwise to $f$. By [F8], step 1.2, and step 1.3, $\mu_C(\mathbb R)=\int_{\mathbb R}f\,d\lambda =\lim_{n\to\infty}\mu_C([-n,n])=1$. Thus $\mu_C$ is a probability measure by [F9]. [F1, F8, F9, F11, step 1.2, step 1.3] ∎
