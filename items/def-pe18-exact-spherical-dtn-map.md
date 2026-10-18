---
id: def-pe18-exact-spherical-dtn-map
kind: definition
title: Exact modal Dirichlet-to-Neumann map on a sphere
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-three-dimensional-spherical-harmonic-space, lem-three-dimensional-laplace-spherical-harmonic-addition-theorem, def-spherical-bessel-and-hankel-functions, lem-spherical-bessel-and-hankel-radial-solutions, lem-pe18-spherical-hankel-radial-identities, lem-pe18-spherical-hankel-modulus-and-radiation-bounds]
justified_by: [thm-pe18-exact-spherical-dtn-map-on-smooth-data]
proof_strategy: not-applicable
axiom_use: "No axiom is used. The map and extension are defined by canonical finite-dimensional projections indexed by the natural numbers."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 10: Bessel Functions"
      url: "https://dlmf.nist.gov/10"
    - title: "Plamen Stefanov, Scattering and Inverse Scattering in R^n, Appendix 1, §§1.1–1.2"
      url: "https://www.math.purdue.edu/~stefanov/publications/SCATTERING.pdf"
---

## Definition

For $k>0$, $R>0$, and $g\in C^\infty(\mathbb S^2;\mathbb C)$, let $g_\ell$ be its $L^2(\mathbb S^2)$-orthogonal projection onto $\mathcal H_\ell$ and set
$$\tau_\ell(k,R)=k\frac{(h_\ell^{(1)})'(kR)}{h_\ell^{(1)}(kR)},\qquad T_{k,R}g=\sum_{\ell=0}^\infty\tau_\ell(k,R)g_\ell.$$
The associated outgoing extension for $r\ge R$ is
$$v(r,\omega)=\sum_{\ell=0}^\infty\frac{h_\ell^{(1)}(kr)}{h_\ell^{(1)}(kR)}g_\ell(\omega).$$
The denominator is nonzero by [[lem-pe18-spherical-hankel-radial-identities]]. The convergence, smoothness, PDE, and radiation properties are asserted in [[thm-pe18-exact-spherical-dtn-map-on-smooth-data]].
