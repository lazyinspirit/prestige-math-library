---
page: interacting-particle-mean-field-and-vortex-blob-error
title: Interacting particle mean field and vortex blob error
status: draft
items:
  - def-bounded-lipschitz-dual-norm-for-signed-measures
  - def-globally-lipschitz-mean-field-kernel
  - def-mollified-biot-savart-vortex-kernel
  - def-p-one-wasserstein-one
  - def-signed-split-transport-cost
  - lem-weighted-continuous-path-space-is-complete
  - alg-tensor-simpson-force-evaluator
  - def-characteristic-mean-field-solution
  - def-mean-field-and-weighted-vortex-particle-systems
  - def-signed-vorticity-characteristic-solution
  - lem-mollified-biot-savart-kernel-is-smooth-globally-lipschitz
  - lem-signed-bl-norm-dominated-by-split-coupling-cost
  - lem-w1-is-finite-on-probability-measures-with-finite-first-moment
  - def-separable-regularized-vortex-interaction-hamiltonian
  - thm-dobrushin-w1-stability-for-characteristic-flows
  - thm-empirical-measures-solve-mean-field-equation-exactly
  - thm-mean-field-characteristic-flow-exists-uniquely
  - thm-mean-field-characteristics-satisfy-weak-transport-identity
  - thm-mollified-biot-savart-kernel-has-l1-consistency
  - thm-signed-dobrushin-stability-with-force-defect
  - thm-signed-regularized-vorticity-characteristics-preserve-total-variation
  - thm-w1-dobrushin-stability-with-force-defect
  - thm-weighted-signed-vortex-particles-satisfy-weak-transport-identity
  - lem-classical-rk4-map-is-lipschitz-on-a-controlled-tube
  - thm-separable-vortex-inspired-leapfrog-is-reversible-symplectic-volume-preserving-order-two
  - thm-tensor-simpson-force-error
  - thm-rk4-global-error-for-regularized-vortex-particles
  - thm-mean-field-vortex-blob-error-budget
---

The mean-field model uses a globally Lipschitz two-variable interaction kernel and probability measures with finite first moment. Characteristic solutions are constructed in a complete weighted continuous-path space, are unique on every finite interval, and satisfy the weak transport identity. Equal-weight empirical particle measures satisfy that identity exactly. Dobrushin stability propagates every prescribed initial coupling with factor $e^{2Lt}$; the factor reflects the stated two-variable Lipschitz convention. The force-defect extension adds the two bounded characteristic-force residuals before taking the coupling infimum, without assuming an optimal coupling exists.

The two-dimensional vortex branch permits real signed particle weights. It defines the mollified Biot–Savart kernel, proves smoothness and a global Lipschitz bound at each fixed blob width, and estimates its $L^1$ difference from the singular kernel. Signed vorticity uses bounded-Lipschitz dual discrepancy and separate positive/negative transport couplings with matching Jordan masses. Under the stated Axiom of Choice and Countable Choice assumptions, the regularized signed characteristic flow exists uniquely and preserves total variation. The signed Dobrushin estimate retains the total variation mass, sign-preserving transport, integrable path suprema, and bounded force defects. Probability $W_1$ is reserved for its probability setting.

Spatial force evaluation and time integration contribute separate errors. The finite tensor Simpson evaluator has explicit invalid-domain, invalid-panel-count, and evaluation-failure statuses; its fourth-derivative estimate bounds the exact-arithmetic vector quadrature residual. Classical RK4 is controlled by a stage-wise Lipschitz estimate and a uniform exact-start defect on a common compact convex tube for the jointly $C^4$ particle field. Its global fourth-order bound retains stage admissibility, exact initialization, and the zero-stability-constant branch. These conditional tube hypotheses do not assert numerical invariance or floating-point accuracy.

The signed vortex-blob error budget combines initial split-coupling error, blob regularization, the common smooth Simpson force residual, and RK4 particle displacement. It assumes separately matched positive and negative Jordan masses, consolidated initial atoms, sign-preserving exact transport, and all stated derivative and tube bounds. The same-sign companion obtains its probability $W_1$ estimate directly from couplings. Constants can depend on the blob width, particle count, and tube; the estimates supply no uniform singular-limit conclusion as the blob width tends to zero.

A separate separable canonical Hamiltonian provides a vortex-inspired comparison model. On its open admitted kick/drift domain, leapfrog is reversible, symplectic, and locally volume preserving; the latter uses Countable Choice for measurable change of variables. Its second-order trajectory estimate additionally requires the stated compact convex tube and bounded derivatives. This second-order canonical system is distinct from the first-order weighted Biot–Savart dynamics, so its geometric conclusions are not transferred to that dynamics.
