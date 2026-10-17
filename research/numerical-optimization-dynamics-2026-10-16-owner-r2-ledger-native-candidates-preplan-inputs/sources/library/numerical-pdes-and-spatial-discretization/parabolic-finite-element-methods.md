---
page: parabolic-finite-element-methods
title: "Parabolic finite-element methods"
status: draft
items:
  - def-parabolic-evolution-triple-and-energy-space
  - lem-parabolic-bochner-l2-approximate-identity
  - lem-parabolic-discrete-energy-identity
  - lem-parabolic-hilbert-bnb-criterion
  - alg-parabolic-backward-euler-averaged-forms
  - alg-parabolic-crank-nicolson-cg1
  - lem-parabolic-bochner-time-mollification
  - lem-parabolic-measurable-form-operators-and-inverse
  - lem-parabolic-projection-time-product-rule
  - lem-parabolic-weak-compactness-separable-bochner-hilbert
  - lem-parabolic-zero-boundary-sobolev-space-is-separable
  - thm-parabolic-finite-dimensional-measurable-ode
  - def-parabolic-ritz-projection
  - lem-parabolic-energy-pairing-and-trace
  - thm-parabolic-backward-euler-error-and-reconstruction
  - thm-parabolic-crank-nicolson-second-order
  - lem-parabolic-ritz-projection-well-defined
  - thm-parabolic-variational-wellposedness-and-energy-stability
  - thm-parabolic-fem-semidiscrete-existence-energy
  - thm-parabolic-semidiscrete-ritz-error-splitting-and-energy-bound
  - cor-parabolic-semidiscrete-spatial-error-rates
examples: []
---

The page treats parabolic evolution in a real Hilbert triple, first proving
the time-trace and energy identities needed for variational well-posedness.
The continuous measurable-coefficient problem is solved by a space-time BNB
argument. Local lemmas prove measurability of the form's inverse action and
the Hilbert-space BNB criterion; arbitrary initial data in $H$ are reached by
approximating them with data in $V$ and passing to a weak limit. Countable
Choice is stated wherever it enters mollification, weak compactness,
Lax–Milgram, and the zero-boundary finite-element inclusion.

The time-stepping definitions use scalar interval averages, so they depend
only on almost-everywhere coefficient and load classes. Backward Euler has a
piecewise-affine reconstruction and a first-order nodal estimate. The
Crank–Nicolson estimate is second order only under the stated
$H^2(0,T;V_h)$ regularity. Maximum-in-time energy bounds and full-interval
dissipation bounds are stated separately.

For spatial error, the page defines the generally nonsymmetric Ritz map and
retains the full residual when the form is measurable in time. A
time-dependent comparison projection requires an operator-norm $C^1$
hypothesis and contributes its derivative. The local Sobolev-space lemma
verifies the separable Hilbert evolution triple used by the concrete
zero-boundary finite-element results. The spatial-rate corollary is
conditional on the primal interpolation and adjoint regularity/approximation
hypotheses; the full-adjoint $h^{r+1}$ case is not asserted on arbitrary
polyhedral domains.
