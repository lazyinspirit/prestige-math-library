---
page: cm09-coupled-oscillations-and-approximation
title: "Coupled oscillations and approximation"
status: draft
library: physics
items:
  - def-cm09-coupled-quadratic-model
  - pthm-cm09-free-modes-and-degeneracy
  - pthm-cm09-linearization-at-a-strict-minimum
  - pthm-cm09-linearization-error-bound
  - pthm-cm09-forced-modal-response
  - pthm-cm09-averaging-for-weak-damping
  - rem-cm09-zero-modes-degeneracy-and-scope
examples: []
requires:
  - cm04-one-dimensional-conservative-and-dissipative-models
  - cm07-stationary-action-and-lagrangian-dynamics
  - cm03-momentum-work-and-energy-balances
  - cm02-forces-initial-data-and-newtonian-flow
  - cm01-framework-quantities-and-geometry
  - cm-math-dynamics
  - cm-math-approximation
  - cm-math-geometry
---

This page develops the quadratic (small-oscillation) model of a mechanical
system in a chart about an equilibrium, its normal modes, its forced response
and the two controlled approximation statements the framework uses for it:
the finite-time linearization error bound and the weak-damping averaging
estimate. The model class is fixed by
[[def-cm09-coupled-quadratic-model]]: a constant symmetric positive definite
**mass metric** $M$, a constant symmetric **stiffness** $K$ and an optional
prescribed generalized force $J(t)$ in the equation
$Mq''+Kq=J(t)$, together with the quadratic kinetic and potential energies,
the phase system, the modal vocabulary of the decoupling transform (modal
coordinates, modal vectors, modal stiffnesses, mode frequencies, zero modes,
unstable directions, degeneracy) and the **small-oscillation model at an
equilibrium** $q_{0}$ of a chart mechanical system, whose mass metric is
$M(q_{0})$ and whose stiffness is the potential Hessian $D^{2}U(q_{0})$. The
dimensions and fixed coordinate/time/energy normalization are stated in the item; matrix square roots act on numerical coefficients, and the sign-unrestricted finite spectral construction includes indefinite stiffness. The one-
dimensional instance is identified with the forced oscillator model used by
[[cm04-one-dimensional-conservative-and-dissipative-models]].

The free theory is [[pthm-cm09-free-modes-and-degeneracy]]: for symmetric
positive definite $M$ and symmetric $K$, every datum has exactly one motion
and it is defined on all of $\mathbb R$; every motion is a superposition of
the oscillatory, affine and exponential scalar families of the decoupling
transform, with the mode frequencies $\omega_{i}=\sqrt{\lambda_{i}}$ for
positive modal stiffnesses; the mechanical energy is conserved and splits
into constant mode energies; a degenerate modal stiffness produces an
intrinsic pure-$\lambda$ family, the solutions of $q''+\lambda q=0$ with
values in the subspace $N_{\lambda}=\ker(K-\lambda M)$, so individual modal
vectors are not intrinsic; a positive definite stiffness bounds every
motion; a zero mode is affine rather than oscillatory; and a negative modal
stiffness makes the rest point of the free model Lyapunov unstable.
[[pthm-cm09-linearization-at-a-strict-minimum]] connects the model to
mechanics: at a strict local minimum of the potential the small-oscillation
model has non-negative stiffness, the derivative linearization of the
mechanical field is exactly the model's phase system, the linearized
motions are the normal-mode superpositions with no exponential directions,
and the nonlinear equilibrium is Lyapunov stable by exact energy
conservation — a nonlinear conclusion that does not follow from the
linearization.

The approximation layer is explicit about its hypotheses.
[[pthm-cm09-linearization-error-bound]] shows for a $C^{3}$ metric field and
potential that the translated mechanical field has a quadratic Taylor
remainder with constants obtained from compactness, and concludes the
finite-time bound in its explicitly normalized phase coordinates
$\lVert z(t)-y(t)\rVert_{2}\le C\delta^{2}te^{(\lVert A\rVert+2L)t}$ on
$[0,T]$ under the smallness condition $\delta e^{LT}<r_{0}$: the nonlinear
motion stays within that distance of its normal-mode linearization, with no
all-time or stability conclusion. [[pthm-cm09-averaging-for-weak-damping]]
controls the weakly damped oscillator $mx''+\varepsilon\gamma x'+kx=0$
through its exact rotating-frame amplitude $\zeta$ of unit $\mathrm m\,\mathrm s^{-1/2}$, with amplitude-unit radii and a time-unit horizon parameter, whose motion solves a
periodic slow system with average $-\gamma\zeta/(2m)$; on the
$O(1/\varepsilon)$ time scale the averaging theorem of the local
mathematics track bounds the difference between the exact amplitude and the
exponentially decaying averaged amplitude by an explicit $\varepsilon K$,
and hence bounds the deviation of the mechanical energy from
$E_{0}e^{-\varepsilon\gamma t/m}$.

The forced response is [[pthm-cm09-forced-modal-response]]: a prescribed
continuous generalized force decouples into independent scalar forced modal
equations with the convolution solutions; for a sinusoidal force the modal
steady responses have amplitudes
$|\psi_{0,i}|/|\lambda_{i}-\Omega^{2}|$ away from resonance, the resonant
modes at $\Omega^{2}=\lambda_{i}$ with nonvanishing modal force component
grow without bound, the zero-mode drive at $\Omega=0$ produces quadratic
growth, and away from these cases every motion is reduced to a particular
motion plus a free motion. The closing scope item
[[rem-cm09-zero-modes-degeneracy-and-scope]] reads the three cautionary
cases — zero modes, degenerate eigenspaces and unstable quadratic
directions — and separates the exact quadratic model, the finite-time
linearization bound, the averaged comparison and the empirical status of
the model parameters. Worked instances of every construction live on
[[cm09-coupled-oscillations-and-approximation-examples]].
