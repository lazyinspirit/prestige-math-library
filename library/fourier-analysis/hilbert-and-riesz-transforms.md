---
page: hilbert-and-riesz-transforms
title: "Hilbert and Riesz Transforms"
status: draft
requires: [dirichlet-kernel-localisation-and-pointwise-fourier-convergence, fourier-multipliers-and-sobolev-characterisations, schwartz-space-and-the-plancherel-theorem, tempered-distributions-and-the-fourier-transform, fejer-and-poisson-summability-of-fourier-series, divergence-and-almost-everywhere-convergence-of-fourier-series, trigonometric-and-oscillatory-examples-in-one-variable]
items:
  - def-conjugate-function-on-the-circle
  - lem-conjugate-dirichlet-kernel-and-principal-value-formula
  - lem-periodic-conjugate-square-identity
  - thm-marcel-riesz-conjugate-function-theorem
  - lem-fourier-partial-sums-are-uniformly-bounded-on-periodic-lp
  - thm-fourier-partial-sums-converge-in-periodic-lp
  - def-truncated-hilbert-transform-and-principal-value
  - lem-singular-kernel-sine-integral-under-countable-choice
  - lem-hilbert-transform-has-signum-fourier-multiplier
  - cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity
  - lem-hilbert-transform-is-skew-adjoint-on-ltwo
  - def-riesz-transforms-on-euclidean-space
  - lem-riesz-transform-principal-value-kernel-formula
  - cor-riesz-transforms-are-ltwo-bounded
  - lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds
  - rem-hilbert-and-riesz-transform-endpoint-map
examples: []
---

This page proves the strict-range mapping theory of the periodic conjugate
function and the $L^2$ theory of the Hilbert and Riesz transforms on
$\mathbb R^n$. Every argument that needs a choice principle assumes Countable
Choice and names the step that spends it; the remaining proofs are choice-free.

On the circle the conjugate function is first defined as the coefficient
multiplier $\widehat{Cf}(k)=-i\operatorname{sgn}(k)\widehat f(k)$ on
trigonometric polynomials, so constants lie in its kernel and no extension is
built into the definition. The conjugate Dirichlet kernel is computed exactly
and identified with the cotangent principal value under local $C^1$ regularity;
the finite kernel convolution is kept distinct from the limiting truncation.
The square identity $(Cg)^2=g^2+2C(gCg)$ for real mean-zero polynomials, Riesz
interpolation of the bounded L² action, and complex $L^p$ duality give the
Marcel Riesz conjugate-function theorem: $C$ extends uniquely to a bounded
operator on $L^p(\mathbb T)$ for every $1<p<\infty$, while the exact $L^1$
operator norm of the partial sums grows logarithmically and rules out
compatible strong $L^1$ or $L^\infty$ extensions. The same Lebesgue-constant
lower bound, together with the Fejér means which converge in $L^p$, yields
uniform $L^p$ bounds for the Fourier partial sums and their norm convergence in
the strict range.

On the line the page defines the truncated Hilbert transform $H_\varepsilon$
and its principal value, proves the uniform sine-integral bounds and the value
$\pi/2$ under Countable Choice, and shows that on Schwartz functions the
principal value is the tempered convolution with $\mathrm{pv}\,1/(\pi x)$,
whose Fourier multiplier is $-i\operatorname{sgn}\xi$. The multiplier produces
the $L^2$ extension with $\|Hf\|_2=\|f\|_2$, $H^2=-I$, and skew-adjointness,
with no zero-frequency exception on the line. For $\mathbb R^n$ the Riesz
transforms are defined by the multipliers $-i\xi_j/|\xi|$; polar coordinates
identify that multiplier with the principal-value kernel
$c_nx_j/|x|^{n+1}$, giving the $L^2$ bound, the finite square-sum identity
$\sum_jR_j^2=-I$, and the kernel size, first-difference and spherical
cancellation estimates needed by the later singular-integral theory.

The closing remark maps the endpoint statements this page does not claim —
weak $(1,1)$, real-line strict-range $L^p$, almost-everywhere truncation
convergence, real Hardy space and BMO — to the later pages that own them, and
the companion page carries the interval, Poisson-kernel and endpoint
counterexamples that do not refute those weaker conclusions.
