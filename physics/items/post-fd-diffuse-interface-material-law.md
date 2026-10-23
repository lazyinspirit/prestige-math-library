---
id: post-fd-diffuse-interface-material-law
kind: postulate
title: Adopted diffuse free energy, mobility and capillary stress
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - post-fd-continuum-balances
  - def-fd-diffuse-interface-equations
  - def-fd-phase-field-dimensionalization
dependency_roles:
  post-fd-continuum-balances: formulation-prerequisite
  def-fd-diffuse-interface-equations: formulation-prerequisite
  def-fd-phase-field-dimensionalization: formulation-prerequisite
physical_scope: >-
  An adopted isothermal, constant-density, incompressible phase-field model on a
  three-dimensional periodic box, with constant positive mobility and viscosity
  and a scalar internal order parameter. It does not identify that parameter
  with total mass density, assert an empirical calibration, supply a heat or
  entropy closure, or establish applicability to every two-phase material.
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pass
  sources_checked:
    date: 2026-10-23
    scope: Completed native formulation/status, source-evidence and applicability review; exact evidence and reading limits in research/fluid-dynamics-all-47-2026-10-23-publication.json. No new retrieval, measurement or solution is claimed.
    by: owner-authorized native reviewers (gpt-6.1-sol)
sources:
  references:
    - title: "J. Tinsley Oden, Lecture Notes, Fall 2016, Chapter 11: Phase-Field Models"
      url: "https://www.oden.utexas.edu/media/reports/2017/1701.pdf"
      locator: "§§11.2 and 11.4, printed pp. 209–212, equations (11.1)–(11.10) and (11.16)–(11.21)."
    - title: "Stefanos Georgiadis, Energy identity for the incompressible Cahn–Hilliard/Navier–Stokes system with non-degenerate mobility"
      url: "https://d-nb.info/1352416549/34"
      locator: "Complete 8-page version-of-record PDF; §1, equations (1.1)–(1.5) and (1.10), with distinct phase-range, stress, viscosity, and weak-solution assumptions explicitly not imported."
    - title: "V.E. Badalassi, H.D. Ceniceros, and S. Banerjee, Computation of multiphase systems with phase field models"
      url: "https://web.math.ucsb.edu/~hdc/public/JCP2003BCB.pdf"
      locator: "Complete 27-page paper; §§2.1–2.4, pp. 372–374, equations (1)–(15), including the order parameter, free energy, chemical potential, coupled flow model, and scaling conventions."
---

## Postulate

Adopt the following isothermal phase-field model in a Cartesian inertial chart with absolute time $t$ in seconds and spatial coordinates $x$ in metres. Let $L>0$ metres, $U>0$ metres per second, $\rho_*>0$ kilograms per cubic metre, and $\Phi_*>0$ in a chosen phase unit $[\Phi]$ be fixed scales. Let $S>0$, $T_*=L/U$, $\Omega_L=\mathbb R^3/(2\pi L\mathbb Z)^3$, and $t\in[0,T_*S]$. A physical field is represented by a $(2\pi L\mathbb Z)^3$-periodic function on $\mathbb R^3$, and its spatial integral is the Riemann integral over $Q_L=[0,2\pi L]^3$. Set $s=t/T_*$, $y=x/L$, $v=u/U$, $\phi=\varphi/\Phi_*$, and $\pi=p/(\rho_*U^2)$. The velocity is $u:[0,T_*S]\times\Omega_L\to\mathbb R^3$ in metres per second, the scalar order parameter is $\varphi:[0,T_*S]\times\Omega_L\to\mathbb R$ in phase units $[\Phi]$, and scalar pressure $p$ is in pascals. The order parameter is an internal phase variable, not total mass density; no positivity or pointwise interval constraint is imposed on it.

On $\mathbb T^3=\mathbb R^3/(2\pi\mathbb Z)^3$, require $v\in C^1([0,S];C^2_{\rm per}(\mathbb T^3;\mathbb R^3))$, $\phi\in C^1([0,S];C^1_{\rm per}(\mathbb T^3;\mathbb R))\cap C([0,S];C^2_{\rm per}(\mathbb T^3;\mathbb R))$, and $\pi\in C([0,S];C^1_{\rm per}(\mathbb T^3;\mathbb R))$, with $\mu_c=\varepsilon^{-1}W'(\phi)-\varepsilon\Delta_y\phi\in C([0,S];C^2_{\rm per})$. Here $C^k_{\rm per}$ means periodic lifts whose coordinate derivatives through order $k$ are continuous, bounded, and uniformly continuous on $[0,2\pi]^3$; time differentiability in $C^k_{\rm per}$ is in the corresponding supremum norms.

For a scalar field $g$, $\nabla_xg=(\partial_{x_1}g,\partial_{x_2}g,\partial_{x_3}g)$ and $\Delta_xg=\sum_{j=1}^3\partial_{x_j}^2g$; for a vector field $u$, $(\nabla_xu)_{ij}=\partial_{x_j}u_i$. On the dimensionless torus $\mathbb T^3=\mathbb R^3/(2\pi\mathbb Z)^3$, use periodic lifts and $\Delta_y=\sum_{j=1}^3\partial_{y_j}^2$. For the smooth branch, require $v\in C^1([0,S];C^2_{\rm per}(\mathbb T^3;\mathbb R^3))$, $\phi\in C^1([0,S];C^1_{\rm per}(\mathbb T^3;\mathbb R))\cap C([0,S];C^2_{\rm per}(\mathbb T^3;\mathbb R))$, and $\pi\in C([0,S];C^1_{\rm per}(\mathbb T^3;\mathbb R))$, with $\mu_c=\varepsilon^{-1}W'(\phi)-\varepsilon\Delta_y\phi\in C([0,S];C^2_{\rm per})$. Here $C^k_{\rm per}$ means periodic lifts whose coordinate derivatives through order $k$ are continuous, bounded, and uniformly continuous on the fundamental cube; time differentiability in $C^k_{\rm per}$ is in the corresponding supremum norms.

Use dimensionless parameters $\varepsilon,M,\nu>0$, a potential $W\in C^2(\mathbb R)$ bounded below, and the dimensional coefficients

$$\beta=\frac{\rho_*U^2}{\varepsilon},\qquad \lambda_\phi=\frac{\rho_*U^2L^2\varepsilon}{\Phi_*^2},\qquad \eta=\rho_*UL\nu,\qquad \mathcal M=\frac{M\Phi_*^2L}{\rho_*U}.$$

The bulk phase free-energy density is $f_b(\varphi)=\beta W(\varphi/\Phi_*)$ in joules per cubic metre. Define the chemical-potential field and the symmetric rate tensor by

$$\mu=f_b'(\varphi)-\lambda_\phi\Delta_x\varphi,\qquad D=\frac12\left(\nabla_xu+(\nabla_xu)^{\mathsf T}\right).$$

For vectors $a,b\in\mathbb R^3$, $(a\otimes b)_{ij}=a_i b_j$; $I_3$ is the $3\times3$ identity; and $(\operatorname{div}_x\sigma)_i=\sum_j\partial_{x_j}\sigma_{ij}$. Adopt the phase-field stress and total Cauchy stress

$$\sigma_c=\left(f_b(\varphi)-\varphi\mu+\frac{\lambda_\phi}{2}|\nabla_x\varphi|^2\right)I_3-\lambda_\phi\nabla_x\varphi\otimes\nabla_x\varphi,\qquad \sigma=-pI_3+2\eta D+\sigma_c,$$

where each stress has units pascals and traction is $\sigma n$ on an outward unit normal $n$. The adopted pointwise equations are

$$\partial_t\varphi+u\cdot\nabla_x\varphi=\mathcal M\Delta_x\mu,\qquad \nabla_x\cdot u=0,\qquad \rho_*\left(\partial_tu+(u\cdot\nabla_x)u\right)=\operatorname{div}_x\sigma.$$

The model uses these smooth periodic fields, so its spatial integrals have no boundary terms. It adopts constant density, constant viscosity, constant mobility, and no external body force. The phase equation describes evolution of the internal order parameter and is not a total-mass diffusion equation. This is a reduced isothermal model: $\mathcal G=\int_{\Omega_L}(\rho_*|u|^2/2+f_b(\varphi)+\lambda_\phi|\nabla_x\varphi|^2/2)\,dx$ is kinetic plus phase-field free energy, not the complete thermodynamic energy. No heat or entropy balance, thermostat coupling, species-mass interpretation, sharp-interface limit, contact-line law, empirical calibration, or claim of universal physical validity is adopted.

## Postulate references

[[def-fd-phase-field-dimensionalization|SI scales, physical coefficients, phase free energy, and chemical-potential units]]

[[post-fd-continuum-balances|Adopted smooth continuum, Newtonian chart, mass and momentum balance framework, and its total-energy and entropy statements]]

[[def-fd-diffuse-interface-equations|Dimensionless periodic phase-flow formulation]]

[J. Tinsley Oden, Lecture Notes, Fall 2016, Chapter 11 §§11.2 and 11.4 (printed pp. 209–212)](https://www.oden.utexas.edu/media/reports/2017/1701.pdf)

[Stefanos Georgiadis, “Energy identity for the incompressible Cahn–Hilliard/Navier–Stokes system with non-degenerate mobility,” §1 (2024)](https://d-nb.info/1352416549/34)

[V.E. Badalassi, H.D. Ceniceros, and S. Banerjee, “Computation of multiphase systems with phase field models,” §§2.1–2.4](https://web.math.ucsb.edu/~hdc/public/JCP2003BCB.pdf)

## Facts & Assumptions

**Given:** The physical scales and units, periodic domain, dimensionless phase-flow formulation, and adopted continuum assumptions stated above.

[F1] [[post-fd-continuum-balances]]: the inherited physical framework adopts a smooth nonpolar continuum with positive mass density and traction $\sigma n$, and adopts mass, momentum, total-energy, and entropy balance statements; it does not derive those assumptions or assert universal empirical validity.

[F2] [[def-fd-diffuse-interface-equations]]: the mathematical formulation uses a dimensionless scalar order parameter, $\mu_c=\varepsilon^{-1}W'(\phi)-\varepsilon\Delta\phi$, the periodic Cahn–Hilliard equation, the incompressible momentum equation, and the dimensionless kinetic-plus-phase functional; it supplies no SI identification or empirical calibration.

[F3] [[def-fd-phase-field-dimensionalization]]: $x=Ly$, $t=(L/U)s$, $u=Uv$, $\varphi=\Phi_*\phi$, and $p=\rho_*U^2\pi$, with the physical coefficient and unit dictionary stated there.

[L1] [[post-fd-continuum-balances]]: its total-energy and entropy balances do not supply a thermal completion for this reduced isothermal free-energy model. No deduction from those balances to the phase-field closure or conversion of $\mathcal G$ dissipation to heat is asserted here.
