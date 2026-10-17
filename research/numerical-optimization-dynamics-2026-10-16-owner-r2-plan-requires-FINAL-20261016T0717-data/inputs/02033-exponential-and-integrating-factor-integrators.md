---
page: exponential-and-integrating-factor-integrators
title: Exponential and integrating factor integrators
status: draft
items:
  - lem-finite-matrix-semilinear-variation-of-constants
  - lem-skew-hermitian-matrix-exponential-is-unitary
  - lem-exponential-phi-integral-representations
  - def-exponential-euler-and-etd2-step-maps
  - lem-exponential-integrator-interaction-picture-stability
  - lem-exponential-euler-local-defect
  - lem-etd2-local-defect
  - alg-certified-exponential-euler-etd2-step
  - lem-certified-exponential-step-action-error
  - thm-exponential-euler-etd2-global-error-and-action
examples: []
---

For a semilinear system $y'=Ay+g(t,y)$ with a fixed finite matrix $A$, these methods integrate the linear part exactly and approximate only the nonlinear forcing. Variation of constants supplies the step formulas, while the series definitions and integral representations of $\varphi_1$ and $\varphi_2$ remain valid when $A$ is singular or zero. The selected explicit two-stage ETD2 formula uses an exponential-Euler predictor.

The local-defect and transformed-stability lemmas give global order one for exponential Euler and order two for ETD2 on a common compact tube. The global constants may depend on $A$, the time interval, and the tube. The certified-action procedure accounts for exponential and $\varphi$-function approximation, field evaluation, and arithmetic errors at each step; its global theorem propagates the sum of those bounds.

The results are finite-dimensional and fixed-matrix statements. They do not establish stiffness-uniform bounds over changing matrices or a convergence theorem for unbounded operators or PDEs; those require additional domain and commutator hypotheses. See [[exponential-and-integrating-factor-integrators-examples]] for diagonal stiff, nonnormal, zero-matrix, and skew-Hermitian examples. Prerequisite interfaces are [[global-ode-and-density-error]] and [[matrix-exponential-and-phi-function-actions]].
