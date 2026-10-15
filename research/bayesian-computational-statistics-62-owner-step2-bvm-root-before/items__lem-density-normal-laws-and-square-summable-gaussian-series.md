---
id: lem-density-normal-laws-and-square-summable-gaussian-series
kind: lemma
title: Density normal laws and square-summable Gaussian series under countable choice
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-countable-choice
  - thm-gaussian-integral
  - thm-substitution
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - thm-integration-against-a-density
  - thm-integration-by-parts
  - thm-ftc-second-part
  - thm-derivative-of-exponential
  - thm-chain-rule
  - def-real-exponential-function-and-e
  - thm-monotone-convergence-for-the-integral
  - thm-dominated-convergence
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-independent-random-elements-have-product-joint-law
  - thm-dynkin-pi-lambda
proof_strategy: direct
axiom_use: "Countable choice suffices for the compact Riemann/Lebesgue bridge. No characteristic-function uniqueness, arbitrary-index product construction, or full choice is used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition, Gaussian density and independent sums"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume countable choice. Put $g(x)=(2\pi)^{-1/2}e^{-x^2/2}$. Then $\gamma(E)=\int_Eg(x)\,dx$ is a Borel probability on $\mathbb R$. In this item and its applications, write $N(m,v)$ for its pushforward under $x\mapsto m+\sqrt v\,x$, where $v\ge0$; thus $N(m,0)=\delta_m$. This density convention requires no full axiom of choice. For $v>0$ the law has density
$$g_{m,v}(x)=(2\pi v)^{-1/2}\exp\{- (x-m)^2/(2v)\},$$
and its CDF is continuous and strictly increasing. Its mean and variance are $m$ and $v$.

If $Z_j$ are mutually independent with density $g$ and $\sum_{j\ge1}c_j^2=v<\infty$, and the finite sums $S_m=\sum_{j\le m}c_jZ_j$ converge in probability to a supplied real random variable $S$, then $S$ has law $N(0,v)$. In particular, this applies whenever the sums converge almost surely or in $L^2$.

## Facts & Assumptions

**Given:** Countable choice, the displayed density, and, for the series assertion, the independent coordinates, real coefficients and supplied probability limit $S$.

[F1] [[thm-gaussian-integral]] computes the improper Riemann integral of $e^{-x^2}$ as $\sqrt\pi$. [[thm-substitution]] gives substitutions for continuous compact-interval integrands, and [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]] identifies these integrals with their Lebesgue integrals under [[def-countable-choice]].

[F2] [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]] constructs a measure from a nonnegative measurable density; [[thm-integration-against-a-density]] integrates nonnegative tests against it. [[thm-monotone-convergence-for-the-integral]] passes to increasing truncations.

[F3] [[thm-derivative-of-exponential]] and [[thm-chain-rule]] give $g\prime(x)=-xg(x)$; [[def-real-exponential-function-and-e]] supplies the positive exponential series. [[thm-ftc-second-part]] and [[thm-integration-by-parts]] apply on compact intervals, and [[thm-dominated-convergence]] passes integrable limits through the integral.

[F4] [[thm-independent-random-elements-have-product-joint-law]] identifies independent pairs with the product of their laws. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] computes nonnegative integrals by iterated integration.

[F5] [[thm-dynkin-pi-lambda]] implies that Borel probabilities agreeing on all half-lines $(-\infty,x]$ agree: those half-lines, together with $\mathbb R$, form a generating pi-system.

## Proof

1.1 The positive continuous function $g$ is Borel measurable, since inverse images of open sets are open. For an integer $R\ge1$, substitute $x=\sqrt2\,t$ in the continuous compact-interval integral. The bridge in [F1] and then increasing truncation in [F2] give $\int_{\mathbb R}e^{-x^2/2}\,dx=\sqrt2\lim_{R\to\infty}\int_{-R/\sqrt2}^{R/\sqrt2}e^{-t^2}\,dt=\sqrt{2\pi}$. Thus [F2] makes $\gamma$ a probability. For $v>0$, compact substitutions in the same way show that its affine pushforward has the asserted half-line integrals of $g_{m,v}$; limits of compact intervals give the half-lines, and [F5] gives equality of the measures. For $v=0$ the affine map is constant, giving the Dirac law directly. [F1, F2, F5, given, algebra]

1.2 The CDF of $N(m,v)$ for $v>0$ is continuous, since $g_{m,v}$ is bounded and the integral over an interval of length $h$ is at most $|h|/\sqrt{2\pi v}$. It is strictly increasing because the positive continuous density has a positive minimum on every nondegenerate compact interval. For $Z$ with density $g$, $g'(x)=-xg(x)$, and integration by parts gives $\int_{-R}^R|x|g(x)dx=2(g(0)-g(R))$ and $\int_{-R}^Rx^2g(x)dx=\int_{-R}^Rg(x)dx-2Rg(R)$. The exponential series shows $g(R)\to0$ and $Rg(R)\to0$. Increasing truncation gives $\mathbb E|Z|<\infty$ and $\mathbb EZ^2=1$; symmetry gives $\mathbb EZ=0$. Expanding $m+\sqrt v Z$ gives the claimed mean and variance, also for $v=0$. [F1, F2, F3, step 1.1, algebra]

2.1 Let $U,V$ be independent centered density normal variables with variances $a,b>0$. Their sum has density $h(x)=\int_{\mathbb R}g_{0,a}(u)g_{0,b}(x-u)du$. Indeed, [F4] expresses $P(U+V\le x)$ as the nonnegative double integral of $\mathbf1_{u+t\le x}g_{0,a}(u)g_{0,b}(t)$; for each fixed $u$, a translation in the continuous half-line integral followed by Tonelli gives $\int_{-\infty}^xh(y)dy$. These half-line probabilities determine the law by [F5]. Completing the square gives
$$\frac{u^2}{a}+\frac{(x-u)^2}{b}=\frac{a+b}{ab}\left(u-\frac{ax}{a+b}\right)^2+\frac{x^2}{a+b}.$$
The compact substitutions and increasing limits in step 1.1 therefore give $h(x)=g_{0,a+b}(x)$. If either variance is zero the corresponding variable is zero almost surely and the same conclusion is immediate. Scaling a coordinate by a negative coefficient gives the same density as scaling by its absolute value, by the symmetry of $g$. Finite induction, using mutual independence to separate the last coordinate from the preceding tuple, proves $S_m\sim N(0,v_m)$ with $v_m=\sum_{j\le m}c_j^2$. [F1, F4, F5, step 1.1, step 1.2, algebra]

3.1 If $v=0$, every coefficient is zero, so convergence in probability implies $S=0$ almost surely. Suppose $v>0$. Then $v_m\to v$ and eventually $v_m>0$. Write $\Phi$ for the continuous CDF of $\gamma$. For any $x\in\mathbb R$ and $\varepsilon>0$, convergence in probability and step 2.1 give
$$\Phi((x-\varepsilon)/\sqrt{v_m})-P(|S_m-S|>\varepsilon)\le P(S\le x)\le\Phi((x+\varepsilon)/\sqrt{v_m})+P(|S_m-S|>\varepsilon).$$
First let $m\to\infty$, then $\varepsilon\downarrow0$. Continuity from step 1.2 gives $P(S\le x)=\Phi(x/\sqrt v)$ for every $x$. By [F5], $S$ has law $N(0,v)$. Almost sure convergence implies convergence in probability by dominated convergence on the indicators of $\{|S_m-S|>\varepsilon\}$, and $L^2$ convergence implies it by $\varepsilon^2P(|S_m-S|>\varepsilon)\le\mathbb E|S_m-S|^2$. [F3, F5, step 1.2, step 2.1, given, algebra] ∎
