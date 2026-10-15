---
id: lem-gaussian-exponential-mixture-integral
kind: lemma
title: Closed form for a Gaussian exponential mixture
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-standard-normal-and-normal-laws
  - lem-normal-density-has-total-mass-one
  - thm-change-of-variables-for-expectation
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - cor-continuous-functions-are-borel-measurable
  - thm-borel-sets-are-lebesgue-measurable
  - thm-of-square-roots
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Steven R. Howard, Aaditya Ramdas, Jon McAuliffe, and Jasjeet Sekhon, Time-uniform, nonparametric, nonasymptotic confidence sequences, Proposition 5 and Appendix A.3
      url: https://arxiv.org/pdf/1810.08240
    - title: "Aaditya Ramdas, Martingales 1: Concentration Inequalities — Conjugate Mixtures, 36-771 lecture notes, Carnegie Mellon University, Fall 2018"
      url: https://stat.cmu.edu/~aramdas/martingales18/L18-conjugate.pdf
---

## Statement

Assume AC. For $\rho>0$, $v\ge0$, and $s\in\mathbb R$, let
$\pi_\rho=N(0,1/\rho)$ under the normal-law convention of
[[def-standard-normal-and-normal-laws]]. Then
$$\int_{\mathbb R}\exp\!\left(\lambda s-\frac{v\lambda^2}{2}\right)\,\pi_\rho(d\lambda)=\sqrt{\frac{\rho}{v+\rho}}\exp\!\left(\frac{s^2}{2(v+\rho)}\right).$$

## Facts & Assumptions

**Given:** Assume AC, $\rho>0$, $v\ge0$, and $s\in\mathbb R$.

[F1] [[def-standard-normal-and-normal-laws]]: $N(m,\sigma^2)$ is the law of the affine image $z\mapsto m+\sigma z$ of the standard normal law, whose density is $e^{-z^2/2}/\sqrt{2\pi}$.

[F2] [[thm-change-of-variables-for-expectation]]: Integrating a nonnegative measurable function against a random element's law equals its expectation on the underlying space.

[F3] [[lem-normal-density-has-total-mass-one]]: The standard normal density $e^{-z^2/2}/\sqrt{2\pi}$ integrates to one.

[F4] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: If $T:U\to V$ is a $C^1$ diffeomorphism between open subsets of $\mathbb R^n$ and $f:V\to[0,\infty]$ is Lebesgue measurable, then, assuming countable choice, $$\int_V f(y)\,d\lambda_n(y)=\int_U f(T(x))|\det DT(x)|\,d\lambda_n(x).$$

[F5] [[cor-continuous-functions-are-borel-measurable]] and [[thm-borel-sets-are-lebesgue-measurable]]: Under countable choice, every continuous function on $\mathbb R$ is Borel measurable, and every Borel set is Lebesgue measurable.

[F6] [[thm-of-square-roots]]: Every nonnegative real has a unique nonnegative square root.

[A1] [[def-axiom-of-choice]]: AC asserts that every family of nonempty sets has a choice function; it is assumed here.

[A2] [[def-countable-choice]]: AC implies countable choice, so the countable-choice premise of [F4] follows from the assumed AC.

## Proof

1.1 Let $Z$ have the standard normal law. By [F1] and [F6], $Z/\sqrt{\rho}$ has law $\pi_\rho$; [F2] and the density in [F1] give $$I=\int_{\mathbb R}\exp\!\left(sz/\sqrt{\rho}-vz^2/(2\rho)\right)\frac{e^{-z^2/2}}{\sqrt{2\pi}}\,dz,$$ with a continuous nonnegative integrand, which [F5] makes Lebesgue measurable. [given, F1, F2, F5, F6, A1, A2]

2.1 Set $a=(v+\rho)/\rho>0$ and $c=s\sqrt{\rho}/(v+\rho)$. Completing the square in [step 1.1] gives $$I=e^{s^2/[2(v+\rho)]}\int_{\mathbb R}\frac{e^{-a(z-c)^2/2}}{\sqrt{2\pi}}\,dz.$$ The map $T(y)=c+y/\sqrt a$ has the $C^1$ inverse $T^{-1}(z)=\sqrt a(z-c)$, so it is a diffeomorphism from $\mathbb R$ to $\mathbb R$, and $|T'(y)|=1/\sqrt a$. The function $g(z)=e^{-a(z-c)^2/2}/\sqrt{2\pi}$ is continuous and nonnegative, hence Lebesgue measurable by [F5]. By [A2], AC supplies the countable-choice hypothesis of [F4]; applying [F4] to $g$ and $T$ gives $$\int_{\mathbb R}g(z)\,dz=\frac1{\sqrt a}\int_{\mathbb R}\frac{e^{-y^2/2}}{\sqrt{2\pi}}\,dy=\frac1{\sqrt a}$$ by [F3]. Therefore $I=\sqrt{\rho/(v+\rho)}e^{s^2/[2(v+\rho)]}$. [F3, F4, F5, F6, A2, step 1.1, algebra] ∎
