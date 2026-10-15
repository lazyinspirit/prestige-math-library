---
id: ex-scalar-gaussian-state-space-filter
kind: example
title: A scalar Gaussian state-space update by completing the square
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - thm-borel-sets-are-lebesgue-measurable
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - thm-lebesgue-measure-is-a-complete-measure
  - def-measure-kernel-and-probability-kernel
  - thm-measurability-of-integration-against-a-kernel
  - prop-measure-monotonicity
  - cor-integral-over-a-null-set-vanishes
  - def-axiom-of-choice
  - def-countable-choice
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - def-state-space-filtering-laws
  - alg-recursive-bayesian-filter
  - thm-state-space-filtering-and-smoothing-laws-exist
  - thm-dominated-state-space-filtering-recursion
  - def-general-state-space-model-by-kernels
  - thm-finite-horizon-state-space-kernel-law-exists-uniquely
  - def-standard-normal-and-normal-laws
  - thm-gaussian-integral
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-translation-of-a-set-in-rn
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-lebesgue-measure-under-dilations-and-reflections
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - thm-monotone-convergence-for-the-integral
  - cor-continuous-functions-are-borel-measurable
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
axiom_use: "AC is used through the normal-law and conditional-kernel suppliers. Countable Choice follows from AC via lem-ac-supplies-sequential-choices-for-probability-constructions and is used by the Lebesgue dilation theorem and the continuous-to-Borel corollary. The local density algebra adds no choice."
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Simo Särkkä and Lennart Svensson, Bayesian Filtering and Smoothing, 2nd ed., Chapter 6"
      url: "https://users.aalto.fi/~ssarkka/pub/bfs_book_2023_online.pdf"
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, Example 2 and §2.2"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
---

## Example

Take scalar state spaces and horizon $T=1$. Let $X_0\sim N(0,1)$,
$K_1(x,dx_1)=N(x,1)(dx_1)$, and $G_1(x_1,dy)=N(x_1,1)(dy)$, with the
standard Lebesgue densities. Observe $Y_1=2$. The predictive state law is
$N(0,2)$, the evidence density at $2$ is
$z_1(2)=e^{-2/3}/\sqrt{6\pi}>0$, and the filtering version selected by the
specified dominated density formula has value $N(4/3,2/3)$. Since the
singleton $\{2\}$ has observation probability zero, another conditional-law
version may take a different value there.

## Verification

**Given:** AC, the one-step scalar model, and the observed value in the Example.

[A1] AC states that every family of nonempty sets has a choice function.
[[def-axiom-of-choice]]

[F1] The standard normal density is $f(u)=e^{-u^2/2}/\sqrt{2\pi}$, and
$N(m,\sigma^2)$ is its affine image $m+\sigma Z$; hence translated normal
kernels have densities $f(y-m)$. [[def-standard-normal-and-normal-laws]]

[F2] $\int_{-\infty}^{\infty}e^{-u^2}\,du=\sqrt\pi$.
[[thm-gaussian-integral]]

[F3] Translation of a set $B$ by $a$ is $B+a$, and Lebesgue measure is
translation invariant on measurable sets.
[[def-translation-of-a-set-in-rn]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]

[F4] AC implies Countable Choice.
[[lem-ac-supplies-sequential-choices-for-probability-constructions]],
[[def-countable-choice]]

[F5] Under Countable Choice, dilation by nonzero $c$ changes Lebesgue measure
by the factor $|c|$.
[[thm-lebesgue-measure-under-dilations-and-reflections]]

[F6] Nonnegative measurable functions admit increasing simple
approximations, and monotone limits pass through their integrals.
[[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]],
[[thm-monotone-convergence-for-the-integral]]

[F7] For dominated observations, the exact filtering update uses the density
formula only at finite positive evidence. [[thm-dominated-state-space-filtering-recursion]]

[F8] The finite-horizon state-space law is the iterated product of its
transition and observation kernels, with existence supplied by the kernel-law
theorem. [[def-general-state-space-model-by-kernels]],
[[thm-finite-horizon-state-space-kernel-law-exists-uniquely]]

[F9] The recursive procedure defines the prediction and density-update
version, using the predictive measure as its bad-evidence filler.
[[alg-recursive-bayesian-filter]]

[F10] Under Countable Choice, every continuous map between Euclidean spaces
is Borel measurable. [[cor-continuous-functions-are-borel-measurable]]

[F11] Under Countable Choice, Borel sets are Lebesgue measurable, so Borel functions are Lebesgue measurable. [[thm-borel-sets-are-lebesgue-measurable]]

[F12] $\mathcal B(\mathbb R)\otimes\mathcal B(\mathbb R)=\mathcal B(\mathbb R^2)$. [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]

[F13] Under Countable Choice, Lebesgue measure is a measure extending half-open interval length and is sigma-finite with the exhaustion $(-k,k]$, $k\ge1$. [[thm-lebesgue-measure-is-a-complete-measure]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]

[F14] A probability kernel has probability-measure sections and measurable evaluations. Integration of a nonnegative product-measurable function against a uniformly sigma-finite kernel with a specified common exhaustion is measurable. [[def-measure-kernel-and-probability-kernel]], [[thm-measurability-of-integration-against-a-kernel]]

[F15] Measures are monotone, and the integral of a nonnegative measurable function over a measurable null set is zero. [[prop-measure-monotonicity]], [[cor-integral-over-a-null-set-vanishes]]

[F16] For a nonnegative product-measurable function on two sigma-finite measure spaces, Tonelli's theorem gives measurable section integrals and permits either order of integration. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

1.1 Equip all scalar state and observation spaces with $\mathcal B(\mathbb R)$, and let $\nu_1$ be Lebesgue measure restricted to this sigma-algebra. By [A1] and [F4], Countable Choice is available. By [F13], $(-k,k]$ is a common finite-mass exhaustion, so both $\nu_1$ and the constant measure kernel $L(x,B)=\nu_1(B)$ are sigma-finite in the required sense. The constant evaluations are measurable. By [F10] and [F12], $(x,y)\mapsto f(y-x)$ is measurable for the product Borel sigma-algebra. By [F11], its one-variable Borel sections and the simple approximations used below are also Lebesgue measurable. [A1, F4, F10, F11, F12, F13, F14, given, construct]

2.1 For a Borel set $B$, $P(x+Z\in B)=\int_{B-x}f(u)\,du=\int_Bf(y-x)\,dy$: [F3] gives the translated integral identity for indicators, finite sums give it for simple functions, and [F6] and [F11] extend it to nonnegative Borel functions. Thus the transition and observation sections are the probability laws $N(x,1)$ and have densities $f(x_1-x)$ and $f(y-x_1)$, whose integrals are one. For fixed Borel $B$, apply [F14] to the product-measurable integrand $\mathbf1_B(y)f(y-x)$ and the constant kernel $L$ from step 1.1. Its integral is Borel measurable in $x$. Hence these location families are probability kernels, and their product-measurable normalized densities with sigma-finite $\nu_1$ meet the premises of [F7] and [F8]. [F1, F3, F6, F7, F8, F11, F14, step 1.1, construct]

3.1 For every Borel set $B$, the path law [F8], step 2.1 and simple approximation [F6] give $P(X_1\in B)=\int_{\mathbb R}\int_B f(u)f(x-u)\,\nu_1(dx)\nu_1(du)$. The integrand $\mathbf1_B(x)f(u)f(x-u)$ is nonnegative and product-measurable, and both copies of $\nu_1$ are sigma-finite by step 1.1. Thus [F16] gives $P(X_1\in B)=\int_B[\int_{\mathbb R}f(u)f(x-u)\,\nu_1(du)]\nu_1(dx)$. The predictive density is therefore $\int f(u)f(x-u)\,du=\frac{e^{-x^2/4}}{2\pi}\int e^{-(u-x/2)^2}\,du=\frac1{\sqrt{4\pi}}e^{-x^2/4}$ by [F2] and translation. This is the density of $N(0,2)$ by [F1], dilation [F5], and the simple-approximation argument [F6]. [F1, F2, F3, F5, F6, F8, F11, F16, step 1.1, step 2.1, algebra]

4.1 At $y=2$, the product density from step 3.1 has exponent $-x^2/4-(2-x)^2/2=-\frac34(x-\frac43)^2-\frac23$. By [F5] and [F6], $\int e^{-\frac34(x-4/3)^2}\,dx=2\sqrt{\pi/3}$, so $z_1(2)=\frac{e^{-2/3}}{\sqrt{8\pi^2}}2\sqrt{\pi/3}=\frac{e^{-2/3}}{\sqrt{6\pi}}\in(0,\infty)$. [A1, F2, F4, F5, F6, F11, step 3.1, algebra]

5.1 Dividing the product density by the evidence in step 4.1 leaves $\frac1{\sqrt{4\pi/3}}e^{-\frac34(x-4/3)^2}$, the normal density with mean $4/3$ and variance $2/3$ by [F1,F5]; since $0<z_1(2)<\infty$, [F7] and [F9] identify it as the filtering-kernel value returned by the recursive procedure. The closed singleton $\{0\}$ is measurable by [F11]; [F13] and [F15] give $0\le a:=\lambda(\{0\})\le\lambda([0,1))=1$. Dilation by $2$ in [F5] gives $a=2a$, so $a=0$; translation [F3] gives $\nu_1(\{2\})=0$. The observation marginal has density $z_1$ by [F7], so [F15] yields $P(Y_1=2)=\int_{\{2\}}z_1(y)\,\nu_1(dy)=0$. Thus this selected value is a valid version, not a pointwise uniqueness claim. There is no numerical approximation or asymptotic argument. [A1, F1, F3, F5, F7, F9, F11, F13, F15, step 4.1, algebra] ∎
