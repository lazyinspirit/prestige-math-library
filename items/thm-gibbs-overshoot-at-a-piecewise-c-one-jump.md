---
id: thm-gibbs-overshoot-at-a-piecewise-c-one-jump
kind: theorem
title: "Gibbs overshoot at a piecewise C^1 jump"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, def-period-one-fourier-coefficients-partial-sums-and-convolution, prop-countable-subsets-of-rn-are-lebesgue-null, thm-the-lebesgue-integral-respects-almost-everywhere-equality]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
    - title: "Gerlind Plonka, Daniel Potts, Gabriele Steidl, and Manfred Tasche, Numerical Fourier Analysis, Theorem 1.42"
      url: "https://users.math.msu.edu/users/iwenmark/Teaching/MTH994/Numerical-Fourier-Analysis-Birkhauser-2018.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $f:\mathbb R\to\mathbb R$ be one-periodic and piecewise $C^1$ on one
period. Assume $x_0$ is a jump point of $f$, and write

$$J:=f(x_0+)-f(x_0-).$$

Then

$$S_Nf\!\left(x_0+\frac{1}{2N+1}\right)\longrightarrow f(x_0+)+J\left(\frac{\operatorname{Si}(\pi)}{\pi}-\frac12\right) \qquad (N\to\infty),$$

where

$$\operatorname{Si}(\pi):=\int_0^\pi \frac{\sin u}{u}\,du.$$

Here the integrand is assigned its continuous-extension value $1$ at $u=0$.

In particular, when $J>0$ the nearby Dirichlet partial sums overshoot the right
limit by the fixed amount

$$J\left(\frac{\operatorname{Si}(\pi)}{\pi}-\frac12\right)\approx 0.08949\,J.$$

## Facts & Assumptions

**Given:** Countable Choice, a one-periodic real-valued piecewise $C^1$ function
$f$, a jump point $x_0$, and the jump size $J=f(x_0+)-f(x_0-)$.

[F1] In the $2\pi$-periodic normalization, Theorem 1.42 of Plonka--Potts--Steidl--Tasche states that if $g$ is piecewise continuously differentiable, $y_0$ is a jump point, and $g(y_0)$ is reset to the midpoint of its one-sided limits, then
$$S_Ng\!\left(y_0+\frac{2\pi}{2N+1}\right)\longrightarrow g(y_0+)+\left(\frac{\operatorname{Si}(\pi)}{\pi}-\frac12\right)\bigl(g(y_0+)-g(y_0-)\bigr).$$

## Proof

**Proof technique:** direct.

1.1 Put $m:=(f(x_0+)+f(x_0-))/2$, and define $\widetilde f(x):=m$ when $x-x_0\in\mathbb Z$ and $\widetilde f(x):=f(x)$ otherwise. Membership in $x_0+\mathbb Z$ is invariant under integer translation, so $\widetilde f$ is one-periodic; on each period it is piecewise $C^1$ and has midpoint value $m$ at the jump represented by $x_0$. The exceptional set $x_0+\mathbb Z=\{x_0+n:n\in\mathbb N\}\cup\{x_0-n:n\in\mathbb N\}$ is countable and hence Lebesgue null by [[prop-countable-subsets-of-rn-are-lebesgue-null]]. Thus $f$ and $\widetilde f$ agree almost everywhere, so after multiplication by any character their integrals agree by [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]. Hence they have the same Fourier coefficients and the same partial sums in the normalization of [[def-period-one-fourier-coefficients-partial-sums-and-convolution]]. They also have the same one-sided limits and the same jump $J$. [given, construct]

2.1 Apply [F1] to the $2\pi$-periodic function $g(y):=\widetilde f(y/(2\pi))$ at $y_0:=2\pi x_0$. Its Fourier coefficients and partial sums correspond exactly to the period-one coefficients and partial sums of $\widetilde f$ under the substitution $y=2\pi x$, while the source offset $2\pi/(2N+1)$ becomes $1/(2N+1)$. Therefore $$S_N\widetilde f\!\left(x_0+\frac{1}{2N+1}\right)\longrightarrow f(x_0+)+J\left(\frac{\operatorname{Si}(\pi)}{\pi}-\frac12\right).$$ By step 1.1 the same limit holds for $S_Nf$. [F1, step 1.1, algebra]

3.1 Since $\operatorname{Si}(\pi)\approx1.85194$, one has $$\frac{\operatorname{Si}(\pi)}{\pi}-\frac12\approx0.08949.$$ Thus when $J>0$ the limiting value in step 2.1 lies above the right limit by the claimed fixed amount. [step 2.1, algebra] ∎
