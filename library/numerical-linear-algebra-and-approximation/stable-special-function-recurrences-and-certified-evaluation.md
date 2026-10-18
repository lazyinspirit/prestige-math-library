---
page: stable-special-function-recurrences-and-certified-evaluation
title: Stable special function recurrences and certified evaluation
status: draft
requires:
  - composite-quadrature-rules
  - gaussian-quadrature
  - the-gamma-function
  - outward-rounded-interval-and-ball-arithmetic
items:
  - def-airy-initial-value-series
  - def-certified-evaluation-result-contract
  - def-fresnel-erf-and-hypergeometric-series
  - def-integer-order-bessel-series
  - def-loggamma-right-halfplane-branch
  - lem-explicit-euler-constant-enclosure
  - lem-gamma-functional-equation-meromorphic-extension
  - def-spherical-bessel-and-hankel-functions
  - def-bessel-complementary-recurrence-solution
  - def-erfcx-moment-sequence
  - def-loggamma-slit-plane-branch
  - lem-airy-series-coefficient-recurrence-and-tail
  - lem-erf-series-geometric-tail
  - lem-fresnel-series-geometric-tail
  - lem-gauss-hypergeometric-series-geometric-tail
  - lem-integer-order-bessel-series-tail
  - lem-loggamma-series-convergence-and-gamma-identity
  - lem-spherical-bessel-and-hankel-radial-solutions
  - def-spherical-bessel-evaluation-contract
  - alg-certified-fresnel-erf-hypergeometric-series
  - lem-airy-functions-have-negative-real-zeros
  - lem-bessel-integral-representations-and-scaled-range
  - lem-binet-loggamma-right-halfplane-identity
  - lem-erfcx-moment-recurrence
  - lem-integer-order-bessel-recurrences-and-ode
  - lem-loggamma-product-tail-bound
  - lem-loggamma-shift-independent
  - alg-certified-scaled-spherical-bessel-evaluation
  - lem-bessel-integral-midpoint-error
  - lem-bessel-j-zero-data-exclusion
  - lem-erfcx-asymptotic-remainder
  - lem-erfcx-continued-fraction-enclosure
  - lem-scaled-modified-bessel-midpoint-error
  - lem-sectorial-stirling-explicit-remainder-bound
  - thm-certified-fresnel-erf-hypergeometric-enclosures
  - thm-certified-scaled-spherical-bessel-enclosures
  - alg-certified-erfcx-evaluation
  - alg-certified-gamma-loggamma-evaluation
  - lem-bessel-casoratian-invariant-positive
  - lem-finite-miller-terminal-error-identity
  - thm-certified-erfcx-enclosures
  - thm-certified-gamma-loggamma-enclosures
  - alg-certified-airy-evaluation
  - alg-certified-integer-order-bessel-evaluation
  - thm-certified-airy-enclosures
  - thm-certified-integer-order-bessel-enclosures
examples: []
---

## Objective

This page defines finite, domain-specific enclosures for integer-order Bessel
and modified Bessel functions, Airy functions, Fresnel integrals, the error
function and a Gauss hypergeometric series, Gamma and a continued log-Gamma
branch, and the scaled complementary error function. The evaluation contract
separates exact mathematical error bounds from the finite interval operations
that propagate them.

Each evaluator has explicit input domains, finite work and precision caps,
absolute-radius success tests, and inconclusive, domain, or range outcomes.
Relative certification is reported only when the returned enclosure excludes
zero. Power-series branches use finite geometric tails; the erfcx expansion
uses a signed finite remainder; the log-Gamma product uses an explicit tail;
and the large-argument branch uses a locally proved sectorial constant.

For integer Bessel order, the page proves the series recurrences and integral
representations, a composite midpoint certificate, and a finite Miller
terminal-contamination identity from two exact recurrence solutions and their
positive discrete Wronskian. The Miller certificate is evaluated only when
all normalization and denominator intervals exclude zero. It makes no claim
that increasing the terminal index forces convergence. The modified Bessel
output is the scaled value $e^{-x}I_n(x)$ on $x\ge0$.

The spherical branch evaluates $j_\ell$, outgoing $h_\ell^{(1)}$, and their
first derivatives on positive-real point interfaces or dyadic input intervals.
It supplies both unscaled values and explicit scaled values; each scaled
derivative is the scaled derivative of the original function. Exact finite
Laurent expressions and a rational Taylor remainder certify the interval
propagation. Absolute success, optional zero-excluding relative flags, and
finite-cap, domain, and range outcomes follow the common result contract.
The represented point need not be dyadic: a caller may propagate certified
parameter intervals to arguments such as $kR$ or $\sqrt{k^2+V_0}R$, provided
each refinement encloses the exact positive argument and terminates. The exact
scattering statements retain their full real-parameter domains; numerical
certification separately requires those input interfaces.

The Airy series uses
$\operatorname{Bi}(0)=1/(3^{1/6}\Gamma(2/3))$; all initial values are read
against DLMF §9.2(ii). The Gauss-series branch is restricted to $|z|<1$ with
$c$ not a nonpositive integer. The log-Gamma branch uses the principal-log
slit plane $\mathbb C\setminus(-\infty,0]$.

The required quadrature pages provide surrounding library context.
The Bessel midpoint certificates are proved locally with their exact
second-derivative bounds. Outward interval, rectangle, and elementary range
operations are supplied by the listed interval-arithmetic page.
