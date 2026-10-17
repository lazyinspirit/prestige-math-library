---
id: rem-chaos-completeness-and-spectral-rate-caveats
kind: remark
title: Completeness and spectral rates require law-specific hypotheses
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: None.
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Dongbin Xiu and George Em Karniadakis, The Wiener–Askey Polynomial Chaos for Stochastic Differential Equations, §§4–6
      url: https://www.sci.utah.edu/~dxiu/Papers/XiuK_SISC02.pdf
    - title: Ivo Babuška, Fabio Nobile, and Raúl Tempone, A Stochastic Collocation Method for Elliptic Partial Differential Equations with Random Input Data, §4
      url: https://www.ices.utexas.edu/media/reports/2005/0547.pdf
---

## Remarks

The finite moment and Gram hypotheses in [[def-finite-product-chaos-input]]
construct only the declared finite polynomial family. Completeness in
$L^2(\rho)$ requires a separate density proof for that law; no such conclusion
is inferred from moments alone. Likewise, an exponential or algebraic spectral
rate requires quantified mixed-derivative or analyticity bounds. The weighted
least-squares procedure in this page is a separately defined collocation
method. No general equality with a spectral Galerkin method is asserted; exact
agreement is limited to the polynomial degree conditions stated in the
Gaussian-quadrature corollary.
