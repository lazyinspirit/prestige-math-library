---
page: oscillatory-filon-and-levin-quadrature
title: Oscillatory integrals and filon levin methods
status: draft
items:
  - def-na-finite-interval-oscillatory-integral
  - lem-na-lagrange-interpolation-on-distinct-nodes
  - lem-na-one-dimensional-morse-coordinate
  - alg-na-fourier-polynomial-moments
  - lem-na-complex-phase-derivative
  - alg-na-levin-collocation-quadrature
  - lem-na-fresnel-integral
  - lem-na-quadratic-phase-amplitude-bound
  - thm-na-fourier-oscillatory-moment-recurrence
  - thm-na-nonstationary-oscillatory-integration-by-parts
  - alg-na-nonstationary-moment-expansion
  - lem-na-quadratic-phase-stationary-expansion
  - thm-na-levin-conditioned-residual-bound
  - alg-na-filon-nodal-moment-quadrature
  - thm-na-single-interior-stationary-phase-expansion
  - thm-na-filon-interpolation-error-bound
examples: []
---

## Objective

For $a<b$, continuous complex amplitude $f$, real phase $g$, and nonzero real frequency $\omega$, this page defines $I_\omega(f,g;[a,b])$. Its nonstationary branch assumes $|g'|\ge c>0$. The local operator $T_gh=(h/g')'$ gives the complete repeated integration-by-parts endpoint expansion and explicit $O(|\omega|^{-r})$ remainder.

The Filon procedure interpolates $f$ at distinct nodes including both endpoints, then combines the interpolation values with exact or certified phase moments. Exact Fourier moments are computed by a finite recurrence. For a general nonstationary phase, the page returns a moment expansion together with a derivative-based remainder certificate. The proved endpoint-interpolation error is $O(|\omega|^{-2})$ for fixed data and exact moments; moment approximation adds its own explicit error budget.

The Levin procedure collocates $p'+i\omega g'p=f$. On a nonsingular collocation branch it returns the endpoint difference $p(b)e^{i\omega g(b)}-p(a)e^{i\omega g(a)}$, obtained directly by differentiating $pe^{i\omega g}$. Its residual theorem controls the continuous residual integral through nonstationary derivative bounds and includes $\|A^{-1}\|$ (equivalently the collocation condition number) for both coefficient size and solve residual amplification. All statements use exact arithmetic; the required [[finite-precision-direct-factorizations]] page supplies separate rounded residual tools.

At one simple interior stationary point, a local Morse coordinate reduces the phase to a signed quadratic. The Fresnel moment gives the leading term, the proof controls the $O(|\omega|^{-3/2})$ remainder, and a separate nonstationary calculation retains the endpoint term. Stationary endpoints and coalescing points are outside this branch and require separate endpoint or Airy-type analysis. The declared [[composite-quadrature-rules]] prerequisite is retained as page-level context; no composite-rule theorem is a logical premise of this pair.
