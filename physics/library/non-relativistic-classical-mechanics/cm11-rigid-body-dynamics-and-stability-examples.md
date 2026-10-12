---
page: cm11-rigid-body-dynamics-and-stability-examples
title: "Rigid-body dynamics and stability — Examples"
status: draft
library: physics
items: []
examples:
  - ex-cm11-free-top-checks
  - cex-cm11-invariants-do-not-force-uniform-rotation
  - ex-cm11-intermediate-axis-escape
  - ex-cm11-heavy-top-steady-precession
requires:
  - cm11-rigid-body-dynamics-and-stability
  - cm10-rigid-body-configuration-and-inertia
  - cm-math-rotation-double-cover
  - cm01-framework-quantities-and-geometry
  - cm-math-rigid
---

These examples and counterexamples exercise the definitions and theorems of
[[cm11-rigid-body-dynamics-and-stability]] on explicit model data. The first
example ([[ex-cm11-free-top-checks]]) declares two inertia matrices, the
symmetric $\mathrm{diag}(1,1,2)$ and the asymmetric $\mathrm{diag}(1,2,3)$,
and checks principal-axis spins and their invariants, the explicit
non-uniform symmetric-top motion
$\omega(t)=\bigl(\tfrac12\cos t,\tfrac12\sin t,1\bigr)$ with conserved
angular momentum and energy, and the linearized frequencies of the
asymmetric model at its three principal-axis spins. The counterexample
([[cex-cm11-invariants-do-not-force-uniform-rotation]]) uses that same
explicit motion to refute the claim that constant angular momentum and
constant rotational kinetic energy force a constant body angular velocity:
the invariants are $C=\tfrac{17}4$ and $E=\tfrac98$ while
$\omega(\tfrac\pi2)\neq\omega(0)$.

The escape example ([[ex-cm11-intermediate-axis-escape]]) instantiates the
instability of the intermediate-axis spin of the model with
$\mathrm{diag}(1,2,3)$: the constants are $a=\sqrt3$, $c_{0}=\tfrac14$,
$\delta_{0}=\tfrac14$, $\varepsilon_{0}=\tfrac12$; the perturbed datum with
$q=1/400$ lies on the same invariant level at distance below $10^{-2}$ from
the spin, and the motion escapes the ball of radius $\tfrac12$ within
$4\log100\approx18.42$ time units. The last example
([[ex-cm11-heavy-top-steady-precession]]) verifies a steady precession of
the heavy-top branch on declared parameters $A_{c}=2$, $C_{c}=1$, $m=d=g=1$
(so $A=3$) and angles $\varphi(t)=t$, $\theta=\pi/3$, $\psi(t)=2t$: the
pivot balance holds identically in time, the conserved momenta are
$a=\tfrac72$, $b=\tfrac52$, the reduced energy is $\tfrac{19}4$, and the
heavy-top system holds with constant nutation angle $\pi/3$.
