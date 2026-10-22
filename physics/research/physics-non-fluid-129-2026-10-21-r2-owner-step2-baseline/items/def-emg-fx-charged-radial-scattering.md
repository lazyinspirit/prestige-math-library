---
id: def-emg-fx-charged-radial-scattering
kind: definition
title: Massless charged-scalar radial scattering data
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-emg-xs-rn-data
  - prop-emg-xs-rn-horizon-data
  - lem-emg-fx-rn-scalar-wave-potential
dependency_roles:
  def-emg-xs-rn-data: mathematical-premise
  prop-emg-xs-rn-horizon-data: mathematical-premise
  lem-emg-fx-rn-scalar-wave-potential: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Richard Brito, Vitor Cardoso, and Paolo Pani, Superradiance -- the 2020 Edition, Lecture Notes in Physics 971, second edition"
      url: https://arxiv.org/pdf/1501.06570
      locator: "Sections 4.1.1 and 4.6.1, equations (4.2a), (4.3)-(4.4), and (4.55)-(4.56): charged scalar equation, RN background, separated radial potential and horizon frequency. The local item fixes the sign by its exact RN supplier and does not import the source's stated gauge-sign convention."
    - title: "Visakan Balakumar, Aspects of quantum charged scalar field theory in curved spacetime: Black hole superradiance and Hadamard renormalisation, PhD thesis, University of Sheffield (2022)"
      url: https://inspirehep.net/files/c9d9d32ca091d580007a1fee1bb44dc0
      locator: "Chapter 3, Sections 3.1-3.3.4, equations (3.11)-(3.59): electric RN potential, massless charged scalar equation, angular separation, radial equation and mode boundary conditions. The local item treats only the classical test-field equation."
---

## Definition

Let $M>0$ and $Q\in\mathbb R$ satisfy $0<|Q|<M$. Put
$$r_\pm:=M\pm\sqrt{M^2-Q^2},\qquad f(r):=1-\frac{2M}{r}+\frac{Q^2}{r^2},\qquad r>r_+.$$
Use the static exterior
$\mathcal M_{\mathrm{ext}}=\mathbb R_t\times(r_+,\infty)_r\times S^2$
with the electric specialization $q_e=Q$, $q_m=0$, and $t=x^0$ of the
Reissner--Nordström metric and potential fixed in the preceding definition.
Thus
$$g=-f\,dt^2+f^{-1}dr^2+r^2\gamma_{S^2},\qquad A=-\frac Qr\,dt,\qquad A_t\longrightarrow0\quad(r\longrightarrow\infty).$$
Here $r_+$ is the positive outer root in the selected local model, not a claim
about an event horizon in a maximal spacetime. Set
$\Phi_H:=Q/r_+=A_t(\infty)-A_t(r_+)$ for this gauge.

For a complex scalar function $\psi$ in this fixed trivialization and a real
coupling $e$, put $D_a\psi:=(\partial_a-ieA_a)\psi$. Define the massless
charged wave operator in the static chart by
$$\Box_{g,A}\psi:=-f^{-1}D_t^2\psi+\frac1{r^2}\partial_r\!\left(r^2f\,\partial_r\psi\right)+\frac1{r^2}\Delta_{\gamma_{S^2}}\psi,\qquad D_t=\partial_t+\frac{ieQ}{r}.$$
The equation used here is $\Box_{g,A}\psi=0$; it is a fixed-background,
minimally coupled test-field equation and does not evolve or source $g$ or $A$.

Let $e\in\mathbb R$, $\omega>0$, and $\ell\in\mathbb N_0$. Supply a smooth
real function $Y:S^2\to\mathbb R$ satisfying
$$\int_{S^2}Y^2\,d\omega_{S^2}=1,\qquad \Delta_{\gamma_{S^2}}Y=-\ell(\ell+1)Y.$$
No existence assertion about $Y$ is made. Use the tortoise coordinate
$$r_*(r):=\int_{2r_+}^{r}f(\rho)^{-1}\,d\rho,$$
which is strictly increasing because $f>0$ on the exterior. Under the
subextremal hypotheses the supplied RN scalar-coordinate result proves that
$r_*$ is a smooth coordinate from $(r_+,\infty)$ onto $\mathbb R$; hence
$r_*\to-\infty$ as $r\downarrow r_+$ and $r_*\to+\infty$ as $r\to\infty$.
A separated mode has the form
$$\psi(t,r,\Omega)=A_{\mathrm{in}}e^{-i\omega t}Y(\Omega)\frac{u(r_*)}{r},$$
where $A_{\mathrm{in}}\ne0$ is a fixed incident amplitude with units
$[\psi]\,\mathrm m$, and the normalized complex radial function $u$ and its
reflection and transmission coefficients are dimensionless.

Write $\omega_H:=\omega-e\Phi_H=\omega-eQ/r_+$ and, for any reference length
$L>0$, define the Coulomb phase
$$\Theta(r_*):=\omega r_*-eQ\log(r/L),\qquad \Theta'(r_*):=\omega-\frac{eQf(r)}r.$$
A normalized scattering solution is a smooth radial solution of
$\Box_{g,A}\psi=0$ for which, for some $R,T\in\mathbb C$,
$$u=e^{-i\Theta}+R e^{i\Theta}+o(1),\qquad \partial_{r_*}u=-i\Theta'e^{-i\Theta}+i\Theta'R e^{i\Theta}+o(1)\quad(r\longrightarrow\infty),$$
and
$$u=T e^{-i\omega_Hr_*}+o(1),\qquad \partial_{r_*}u=-i\omega_HTe^{-i\omega_Hr_*}+o(1)\quad(r\downarrow r_+).$$
The error terms tend to zero in the indicated limits. These boundary
conditions prescribe unit incoming amplitude at infinity and only the
ingoing branch at the future horizon. They define admissible scattering data;
they assert neither existence nor uniqueness of such a solution.

The logarithm in $\Theta$ is required by the long-range term
$-2\omega eQ/r$ in the asymptotic radial coefficient. Changing $L$ changes
constant phases, not flux magnitudes. A constant gauge shift changes the
frequency label, so the threshold uses the potential difference
$\Phi_H$, not an absolute value of $A_t$.

Use geometric units $G=c=1$ and length coordinates, with
$[t]=[r]=[r_*]=[M]=[Q]=[L]=\mathrm m$,
$[e]=[\omega]=\mathrm m^{-1}$, $f$ dimensionless, and $A_t$ dimensionless;
then $\Theta$ is dimensionless and each term in $\Box_{g,A}$ has units
$[\psi]\,\mathrm m^{-2}$. The coupling $e$ is the charge coupling in the
chosen field normalization; restoring SI units requires restoring the
corresponding field normalization and the charge-over-$\hbar$ coupling.
This definition excludes scalar mass, magnetic charge, mirrors, anti-de Sitter
boundaries, bound states, and complex-frequency quasinormal boundary conditions.
A scalar mass would change the propagating infinity wave number to
$\sqrt{\omega^2-\mu^2}$ and requires a different scattering normalization.
Complex-frequency quasinormal modes form a distinct non-self-adjoint spectral
problem and are not covered by the real-frequency Wronskian identity.

## Definition references

[[def-emg-xs-rn-data]]

[[prop-emg-xs-rn-horizon-data]]

[[lem-emg-fx-rn-scalar-wave-potential]]

## Remarks

The source conventions are not silently substituted for the local convention:
the background one-form is exactly $A_t=-Q/r$ and
$D_t=\partial_t-ieA_t$. The long-range phase above is used instead of an
unmodified plane-wave phase at infinity. No quantum pair-production claim,
nonlinear instability, or coupled Einstein--Maxwell perturbation result is
part of this definition.
