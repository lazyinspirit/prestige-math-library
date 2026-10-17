---
id: def-chebyshev-arcsine-weighted-l2-pairing
kind: definition
title: "Arcsine-weighted inner product on the Chebyshev interval"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-pi-via-first-positive-cosine-zero, thm-sine-and-cosine-derivatives, cor-differentiable-implies-continuous, thm-sine-cosine-signs-monotonicity-and-ranges, thm-composition-of-continuous-functions, thm-algebra-of-continuous-functions, thm-continuous-implies-integrable]
justified_by: [lem-chebyshev-polynomials-orthogonal-in-arcsine-weight]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "No choice axiom is used; the pairing is a single integral over a compact interval."
verification:
  precheck: n/a
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, §§1.3, 3.3"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 15–16 and 114–118 / PDF pp. 21–22 and 120–124; Chebyshev orthogonality under the arcsine weight and weighted Galerkin integrals."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 8"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 8, printed pp. 259–264 (complete book PDF); Chebyshev polynomials and their cosine representation."
---

## Definition

For continuous real functions $f,g$ on $[-1,1]$, define
$$
\langle f,g\rangle_C:=\int_0^\pi f(\cos\theta)g(\cos\theta)\,d\theta,\qquad \|f\|_C^2:=\langle f,f\rangle_C.
$$
This is the arcsine-weighted pairing on the compact Chebyshev interval: in the variable $x=\cos\theta$ its weight is $\omega_C(x)=(1-x^2)^{-1/2}$ for $-1<x<1$. The angular integral is the endpoint convention, so no endpoint value of the singular density is required.

The displayed integral is defined for every such pair: cosine is continuous and maps $[0,\pi]$ into $[-1,1]$; composition and multiplication preserve continuity, so the integrand is continuous. Since $0<\pi$, it is Riemann integrable by [[thm-continuous-implies-integrable]].

