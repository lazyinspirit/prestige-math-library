---
id: post-emg-fx-test-field-regime
kind: postulate
title: Fixed-background charged scalar regime
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 3
deps:
  - post-emg-background-maxwell-test
  - def-emg-xs-rn-data
  - prop-emg-xs-rn-horizon-data
  - def-emg-fx-charged-radial-scattering
  - def-emg-fx-charged-scalar-stress-tensor
dependency_roles:
  post-emg-background-maxwell-test: formulation-prerequisite
  def-emg-xs-rn-data: formulation-prerequisite
  prop-emg-xs-rn-horizon-data: formulation-prerequisite
  def-emg-fx-charged-radial-scattering: formulation-prerequisite
  def-emg-fx-charged-scalar-stress-tensor: formulation-prerequisite
physical_scope: >
  A massless, minimally coupled classical complex scalar on a prescribed
  electric Reissner–Nordström-form static exterior with subextremal or extremal
  parameters. The background metric and electric field are fixed data; no scalar
  source, stress backreaction, global extension, scattering-solution existence,
  astrophysical identification, measurement, or empirical validity is asserted.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Richard Brito, Vitor Cardoso, and Paolo Pani, Superradiance -- the 2020 Edition, Lecture Notes in Physics 971, complete 281-page edition (2020)"
      url: "https://arxiv.org/pdf/1501.06570"
      locator: "§4.4, equations (4.50)–(4.53), fixed-background test fields and mode scattering; §4.6.1, equations (4.54)–(4.56), the charged Reissner–Nordström scalar regime and threshold. The local gauge convention and Coulomb phase are taken from the exact mathematical supplier."
    - title: "Visakan Balakumar, Aspects of quantum charged scalar field theory in curved spacetime: Black hole superradiance and Hadamard renormalisation, PhD thesis, complete 307-page text (2022)"
      url: "https://inspirehep.net/files/c9d9d32ca091d580007a1fee1bb44dc0"
      locator: "Chapter 3, §§3.1–3.2.4, equations (3.1)–(3.59), classical massless charged scalar field and radial equation on a prescribed Reissner–Nordström background. Quantum-state claims are not adopted."
---

## Postulate

Adopt the following classical test-scalar model in the geometric length-coordinate convention of the charged radial-scattering definition. Let $M>0$ and $Q\in\mathbb R$ satisfy $0<|Q|\le M$, put

$$r_\pm:=M\pm\sqrt{M^2-Q^2},\qquad f(r):=1-\frac{2M}{r}+\frac{Q^2}{r^2},\qquad U:=\mathbb R_t\times(r_+,\infty)_r\times S^2.$$

On $U$ prescribe

$$g=-f(r)\,dt^2+f(r)^{-1}dr^2+r^2\gamma_{S^2},\qquad A=-\frac Qr\,dt,\qquad F=dA=-\frac{Q}{r^2}\,dt\wedge dr.$$

Here $\gamma_{S^2}$ is the unit round metric, $A_t\to0$ at infinity, and $r_+$ is the larger positive root; in the extremal case $Q^2=M^2$ both roots equal $M$. The factorization $f(r)=(r-r_+)(r-r_-)/r^2$ makes $f>0$ on this open exterior. The larger root is a null constant-$r$ Killing horizon in the selected ingoing RN model; it is not an event-horizon assertion about a maximal spacetime. Orient the product by $dt\wedge dr\wedge\omega_{S^2}$, where $\omega_{S^2}$ is the outward area form of the unit round sphere; $\star_g$ denotes the corresponding Lorentzian Hodge map. Adopt the source-free background Maxwell branch $dF=0$ and $d(\star_gF)=0$ on $U$. The fields are prescribed on the open exterior only. No maximal extension, coupled Einstein equation, or actual astrophysical object is asserted by this postulate.

In the chosen global electric gauge, let $\psi:U\to\mathbb C$ be a smooth complex scalar and let $e\in\mathbb R$ be its fixed charge-coupling parameter. Define $D_a\psi:=\partial_a\psi-ieA_a\psi$, so $D_t=\partial_t+ieQ/r$. The scalar Laplace–Beltrami operator on the unit sphere is $\Delta_{\gamma_{S^2}}=\frac1{\sin\theta}\partial_\theta(\sin\theta\,\partial_\theta)+\frac1{\sin^2\theta}\partial_\phi^2$ in the standard polar chart, with smooth global extension. Adopt the massless, minimally coupled equation

$$\Box_{g,A}\psi:=-f^{-1}D_t^2\psi+\frac1{r^2}\partial_r\!\left(r^2f\,\partial_r\psi\right)+\frac1{r^2}\Delta_{\gamma_{S^2}}\psi=0.$$

For its energy bookkeeping, adopt the symmetric tensor assignment $\mathsf T_{ab}[\psi;g,A,e]$ defined by the exact mathematical stress-tensor formula linked below. The scalar's stress is omitted from the equations for the prescribed background, and no scalar source is added to its Maxwell equation. This is a test-field model: omission of the scalar response is a modeling choice, not an estimate that the response is small.

Coordinates $t,r,M,Q$ have unit metres; $f$ and $A_t$ are dimensionless; $e$ has unit $\mathrm m^{-1}$; $F_{tr}$ has unit $\mathrm m^{-1}$; and the scalar field has a specified but otherwise arbitrary unit $[\psi]$. The tensor assignment $\mathsf T_{ab}$ has component unit $[\psi]^2\mathrm m^{-2}$ in this geometric normalization. For the subextremal branch, define the gauge-normalized outer-root potential difference by $\Phi_H:=A_t(\infty)-A_t(r_+)=Q/r_+$. The separate mathematical scalar model on the Einstein–Maxwell page uses SI bookkeeping and its own coupling parameters; no identification with those parameters is made here.

## Postulate references

[[post-emg-background-maxwell-test]]

[[def-emg-xs-rn-data]]

[[prop-emg-xs-rn-horizon-data]]

[[def-emg-fx-charged-radial-scattering]]

[[def-emg-fx-charged-scalar-stress-tensor]]

## Scope and limitations

This postulate adopts a fixed exterior model with no empirical premise. The subextremal scattering consequences use the exact tortoise coordinate, incoming and reflected Coulomb phase, and horizon normalization of the mathematical definition. The extremal branch supplies no scattering result in this pair. Neither branch supplies a scalar or Einstein–Maxwell existence theorem, a small-backreaction limit, a nonlinear stability claim, or a quantum pair-production conclusion. The SI scalar model elsewhere on the Einstein–Maxwell pages uses separate coupling and field normalizations; no conversion or physical identification is adopted here.
