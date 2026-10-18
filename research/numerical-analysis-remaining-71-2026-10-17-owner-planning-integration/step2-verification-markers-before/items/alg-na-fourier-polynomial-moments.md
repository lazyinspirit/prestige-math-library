---
id: alg-na-fourier-polynomial-moments
kind: algorithm
title: Exact recurrence for polynomial Fourier moments
status: draft
origin: pipeline
dependency_level: 1
deps:
  - def-na-finite-interval-oscillatory-integral
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "A. Iserles, S. P. Nørsett, and S. Olver, Highly oscillatory quadrature: The story so far, §3.2"
      url: "https://www.cs.ox.ac.uk/sheehan.olver/papers/storysofar.pdf"
    - title: "D. Levin, Procedures for computing one- and two-dimensional integrals of functions with rapid irregular oscillations, §1"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/OSCINT/LEV82.pdf"
---

## Definition

Input real endpoints $a<b$, a real frequency $\omega\ne0$, and an integer $m\ge0$. Return the complex list $(\mu_0,\ldots,\mu_m)$ computed by
$$\mu_0=(e^{i\omega b}-e^{i\omega a})/(i\omega),\qquad \mu_k=(b^ke^{i\omega b}-a^ke^{i\omega a})/(i\omega)-k\mu_{k-1}/(i\omega)\quad(1\le k\le m).$$
The divisions are defined by $\omega\ne0$. The procedure works in exact real and complex arithmetic; its exact moment identities are stated and proved separately on this page.
