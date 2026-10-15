---
page: state-space-models-as-probability-laws
title: "State-space model laws"
status: draft
items:
  - lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal
  - def-general-state-space-model-by-kernels
  - thm-finite-horizon-state-space-kernel-law-exists-uniquely
  - def-linear-gaussian-state-space-model-with-independent-noises
  - thm-linear-gaussian-state-space-path-law-is-jointly-gaussian
examples: []
---

For a finite horizon $T$, a state-space model specifies a joint law for a
latent state path $X_0,\ldots,X_T$ and observations $Y_1,\ldots,Y_T$ on
finite products of standard-Borel spaces. The general contract gives an
initial law, one transition probability kernel per state step, and one
observation probability kernel per observation step. The ordered iterated
kernel integral is the joint law; its factors are kernels, not densities.
Existence and uniqueness use the Axiom of Choice
([[def-axiom-of-choice]]) through the history-dependent Ionescu–Tulcea
construction.

The separate linear-Gaussian subclass states dimensions, matrices, Gaussian
initial/process/observation noises, mutual independence across all noise
vectors, and positive-semidefinite covariance matrices. Its finite path law
is multivariate normal even when singular. This finite-horizon definition
does not require stationarity: no shift invariance of finite-dimensional
laws is assumed, and no constant-mean or lag-covariance condition is imposed
([[def-strict-and-weak-stationarity-for-time-series]]). It supplies no
filtering algorithm, posterior recursion, or convergence result. An
innovation covariance is the covariance of an observation prediction
residual; any downstream formula that inverts it must assume positive
definiteness, meaning $u^TSu>0$ for every nonzero $u$.

## Model contract for this pair

The observed record is the coordinate tuple $D_T=(Y_1,\ldots,Y_T)$ in the
finite product $\prod_{t=1}^T F_t$; the latent state path is
$(X_0,\ldots,X_T)$. Both are random elements under the joint path law, and
$D_T$ is the observed projection of that path
([[def-random-element-and-real-random-variable]],
[[def-law-or-distribution-of-a-random-element]],
[[def-product-sigma-algebra-and-finite-product-sigma-algebras]]). The time
origin is $0$: $X_t$ is the state at step $t$, and $Y_t$ is the observation
at step $t$. Physical or biological units, sampling frame, and any target
population remain application-specific fields of the scientific model
contract ([[def-scientific-statistical-model-contract]]).

The analysis law here is the joint finite-horizon law. No treatment
assignment, estimator, parameter index, stationarity, or ergodicity
assumption is added. The model contract does not show that its law describes
an application adequately; that is an empirical question under
[[def-scientific-statistical-model-contract]].
