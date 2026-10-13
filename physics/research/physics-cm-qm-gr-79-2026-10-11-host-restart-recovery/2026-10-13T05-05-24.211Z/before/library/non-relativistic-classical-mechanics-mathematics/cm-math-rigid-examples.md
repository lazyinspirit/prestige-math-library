---
page: cm-math-rigid-examples
title: Cm Math Rigid — Examples
status: draft
items: []
examples:
  - ex-cm-inertia-tensors-of-point-masses
  - ex-cm-torque-free-spin-checks
  - ex-cm-euler-angle-and-heavy-top-checks
requires:
  - cm-math-rigid
  - measures-and-their-basic-properties
  - sine-cosine-and-the-definition-of-pi
  - the-exponential-function
  - the-logarithm-and-general-powers
---

The companion page to [[cm-math-rigid]] records explicit finite checks of its
rigid-body results. Everything here is mathematics: the examples carry
`domain: mathematics`, depend only on the mathematical items of the parent page
and on mathematical suppliers, and make no physical or empirical claim. No
measurement, simulation or numerical integration is involved; the calculations
use exact rational numbers, square roots, angles involving $\pi$, and the
logarithmic escape-time bound $4\log25$.

[[ex-cm-inertia-tensors-of-point-masses]] computes the inertia matrix of a
finite weighted sum of Dirac measures in three cases — two unit masses at
$\pm e_3$ giving $\mathrm{diag}(2,2,0)$, three unit masses at an equilateral
triangle in the plane $e_3=0$ giving $\mathrm{diag}(\frac32,\frac32,3)$, and two
unit masses at $e_1,2e_1$ giving $\mathrm{diag}(0,5,5)$ — and checks each against
the quadratic identity and the positive-definiteness criterion of
[[lem-cm-inertia-matrix-properties]].

[[ex-cm-torque-free-spin-checks]] evaluates the certificates of
[[thm-cm-stability-of-extreme-principal-axes]] at $(I_1,I_2,I_3)=(1,2,3)$,
reproducing the bounds $c=\frac14$, $c_3=\frac1{12}$ and a concrete
trajectory-level bound; evaluates the escape data of
[[thm-cm-instability-of-the-intermediate-axis]] with $a=\sqrt3$,
$\delta_0=\frac14$, $c_0=\frac14$ and the time bound $4\log25\approx12.88$; and
checks the two branches of
[[thm-cm-linearized-torque-free-euler-equations]] by substituting explicit
solutions of the linearized system.

[[ex-cm-euler-angle-and-heavy-top-checks]] evaluates
$\Theta(0,\frac\pi2,0)=R_y(\frac\pi2)$ and its $SO(3)$ membership, checks the
angular-velocity formula of [[lem-cm-euler-angle-angular-velocity]] against the
definition for the motion $\varphi(t)=t$, $\theta=\frac\pi2$, $\psi=0$, and
verifies a constant-rate precession $(\theta,\varphi',\psi')=(\frac\pi3,2,\frac12)$
against every clause of [[thm-cm-heavy-top-reduction]], including the reduced
energy value $\frac{25}{8}$ computed two ways.
