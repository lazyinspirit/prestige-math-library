---
page: parabolic-finite-difference-methods
title: Parabolic finite-difference methods
status: draft
items:
  - def-parabolic-theta-finite-difference-scheme
  - lem-parabolic-dirichlet-laplacian-is-positive-selfadjoint
  - lem-periodic-heat-difference-amplification-symbol
  - thm-parabolic-theta-scheme-local-truncation-error
  - lem-parabolic-theta-step-exists-uniquely
  - thm-forward-euler-heat-cfl-and-nyquist-instability
  - thm-parabolic-theta-l2-stability-for-half-theta
  - thm-theta-scheme-discrete-maximum-principle
  - thm-parabolic-theta-scheme-global-error-bound
examples: []
---

This page defines the fully discrete centered heat θ update on periodic grids and rectangular Dirichlet grids, including initial data and exact boundary rows. It proves implicit-step solvability, periodic Fourier amplification and the explicit CFL threshold, and a separate boundary-aware discrete maximum principle. For smooth solutions with exact initial data and matching sampled boundary rows, the global theorem for $\theta\in[1/2,1]$ transfers the complete residual estimate to first-order time error when $\theta\ne1/2$ and second-order time error for Crank–Nicolson. Weighted grid L2 stability for θ at least one half is proved independently of positivity and common-space Lax equivalence.
