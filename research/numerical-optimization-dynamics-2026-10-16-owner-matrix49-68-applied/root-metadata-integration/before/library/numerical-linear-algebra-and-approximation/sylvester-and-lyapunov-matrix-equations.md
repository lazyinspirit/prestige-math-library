---
page: sylvester-and-lyapunov-matrix-equations
title: Sylvester and lyapunov matrix equations
status: draft
items:
  - lem-sylvester-vectorization-isometry-and-kronecker-identity
  - lem-small-block-determinant-separation-lower-bound
  - def-hurwitz-matrix-and-continuous-lyapunov-equation
  - lem-adjugate-inverse-formula-over-a-field
  - def-sylvester-operator-and-separation-number
  - lem-hurwitz-matrix-exponential-decay-bound
  - lem-hurwitz-negative-shift-matrix-invertible
  - lem-sylvester-separation-controls-the-frobenius-error
  - thm-sylvester-unique-solvability-spectral-separation
  - thm-continuous-lyapunov-integral-and-positivity
  - alg-low-rank-alternating-direction-implicit-lyapunov
  - thm-sylvester-residual-to-forward-error-bound
  - thm-low-rank-adi-exact-residual-factor-identity
  - thm-low-rank-adi-conditional-convergence-bound
  - alg-bartels-stewart-sylvester-equation
  - thm-bartels-stewart-sylvester-exact-correctness
  - thm-bartels-stewart-dense-operation-count
examples: []
---

This page develops the equation $AX+XB=C$ over the real and complex fields, its Kronecker representation, the spectral criterion for unique solvability, and the Frobenius separation that controls solution error. The finite-budget Bartels-Stewart procedure applies Schur reduction and block back substitution, reports pivot or Schur-certificate failures explicitly, and has a cubic dense arithmetic bound when its sweep budgets grow at most linearly with dimension and per-call sign/representation-controller work is bounded independently of dimension. Arbitrary terminating custom controls retain their actual additional work term.

For Hurwitz $A$, the continuous Lyapunov equation $AX+XA^*+Q=0$ has its exponential-integral solution. The page proves convergence, uniqueness, positive-semidefinite and strict-positivity conditions, and the low-rank ADI residual identity. ADI convergence is concluded only under a proved rational shift bound. The Bartels-Stewart exact-correctness claim is conditional on exact Schur certificates and successful separated block solves; the finite computed Schur routine does not itself promise unconditional convergence or an unconditional backward-error certificate.
