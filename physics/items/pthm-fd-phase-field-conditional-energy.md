---
id: pthm-fd-phase-field-conditional-energy
kind: physics-theorem
title: Conditional phase-field free-energy dissipation
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - post-fd-diffuse-interface-material-law
  - thm-fd-diffuse-interface-energy
  - def-fd-phase-field-dimensionalization
dependency_roles:
  post-fd-diffuse-interface-material-law: physical-assumption
  thm-fd-diffuse-interface-energy: mathematical-premise
  def-fd-phase-field-dimensionalization: formulation-prerequisite
physical_scope: >-
  Conditional decay of kinetic plus phase-field free energy for a smooth
  constant-density incompressible model on a three-dimensional periodic box.
  This is not total thermodynamic energy, an existence theorem, an empirical
  conclusion, or a sharp-interface or immiscibility result.
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
empirical_premises: []
sources:
  references:
    - title: "J. Tinsley Oden, Lecture Notes, Fall 2016, Chapter 11: Phase-Field Models"
      url: "https://www.oden.utexas.edu/media/reports/2017/1701.pdf"
      locator: "§§11.2 and 11.4, printed pp. 209–212; background for the phase free-energy and conserved mobility structure, not the proof below."
    - title: "Stefanos Georgiadis, Energy identity for the incompressible Cahn–Hilliard/Navier–Stokes system with non-degenerate mobility"
      url: "https://d-nb.info/1352416549/34"
      locator: "Complete 8-page version-of-record PDF; §1 and Theorem 1 with its full §2 proof. The paper's weak-solution, phase-range, stress, and viscosity hypotheses are not imported."
    - title: "V.E. Badalassi, H.D. Ceniceros, and S. Banerjee, Computation of multiphase systems with phase field models"
      url: "https://web.math.ucsb.edu/~hdc/public/JCP2003BCB.pdf"
      locator: "§§2.1–2.4, pp. 372–374, for the order parameter, chemical potential, coupled flow model, and dimensional scaling context."
---

## Statement

Let $S,L,U,\rho_*,\Phi_*>0$ with units respectively dimensionless, metres, metres per second, kilograms per cubic metre, and a chosen phase unit $[\Phi]$. Put $T_*=L/U$, $\mathbb T^3=\mathbb R^3/(2\pi\mathbb Z)^3$, $\Omega_L=\mathbb R^3/(2\pi L\mathbb Z)^3$, and $t\in[0,T_*S]$. Fields on each torus are represented by periodic lifts and physical integrals are over $Q_L=[0,2\pi L]^3$. Let $\varepsilon,M,\nu>0$ be dimensionless and let $W\in C^2(\mathbb R)$ be bounded below. Define

$$\beta=\frac{\rho_*U^2}{\varepsilon},\qquad \lambda_\phi=\frac{\rho_*U^2L^2\varepsilon}{\Phi_*^2},\qquad \eta=\rho_*UL\nu,\qquad \mathcal M=\frac{M\Phi_*^2L}{\rho_*U},\qquad f_b(\varphi)=\beta W(\varphi/\Phi_*).$$

For periodic physical fields $u:[0,T_*S]\times\Omega_L\to\mathbb R^3$, $\varphi:[0,T_*S]\times\Omega_L\to\mathbb R$, and scalar pressure $p$, define

$$\mu=f_b'(\varphi)-\lambda_\phi\Delta_x\varphi,\qquad D=\frac12\left(\nabla_xu+(\nabla_xu)^{\mathsf T}\right),$$

$$\sigma=-pI_3+2\eta D+\left(f_b(\varphi)-\varphi\mu+\frac{\lambda_\phi}{2}|\nabla_x\varphi|^2\right)I_3-\lambda_\phi\nabla_x\varphi\otimes\nabla_x\varphi.$$

Assume the dimensionless fields $v(s,y)=u(T_*s,Ly)/U$, $\phi(s,y)=\varphi(T_*s,Ly)/\Phi_*$, and $\pi(s,y)=p(T_*s,Ly)/(\rho_*U^2)$ satisfy

$$v\in C^1([0,S];C^2_{\rm per}(\mathbb T^3;\mathbb R^3)),\qquad \phi\in C^1([0,S];C^1_{\rm per}(\mathbb T^3;\mathbb R))\cap C([0,S];C^2_{\rm per}(\mathbb T^3;\mathbb R)),\qquad \pi\in C([0,S];C^1_{\rm per}(\mathbb T^3;\mathbb R)),$$

with $\mu_c=\varepsilon^{-1}W'(\phi)-\varepsilon\Delta_y\phi\in C([0,S];C^2_{\rm per})$, and satisfy the adopted dimensional equations

$$\partial_t\varphi+u\cdot\nabla_x\varphi=\mathcal M\Delta_x\mu,\qquad \nabla_x\cdot u=0,\qquad \rho_*\left(\partial_tu+(u\cdot\nabla_x)u\right)=\operatorname{div}_x\sigma,\quad (\operatorname{div}_x\sigma)_i=\sum_j\partial_{x_j}\sigma_{ij}.$$

Here $C^k_{\rm per}$ consists of periodic lifts whose coordinate derivatives through order $k$ are continuous, bounded, and uniformly continuous on $[0,2\pi]^3$; $C^1([0,S];C^k_{\rm per})$ means time differentiability in the corresponding supremum norms. For a scalar field $g$, $\nabla_xg=(\partial_{x_1}g,\partial_{x_2}g,\partial_{x_3}g)$ and $\Delta_xg=\sum_{j=1}^3\partial_{x_j}^2g$; for a vector field $u$, $(\nabla_xu)_{ij}=\partial_{x_j}u_i$.

For the kinetic-plus-phase free-energy functional

$$\mathcal G(t)=\int_{\Omega_L}\left(\frac{\rho_*}{2}|u(t,x)|^2+\frac{\lambda_\phi}{2}|\nabla_x\varphi(t,x)|^2+\beta W(\varphi(t,x)/\Phi_*)\right)\,dx,$$

where $|\nabla_xu|^2=\sum_{i,j=1}^3|\partial_{x_j}u_i|^2$, the conditional model identity is

$$\frac{d\mathcal G}{dt}(t)=-\eta\int_{\Omega_L}|\nabla_xu(t,x)|^2\,dx-\mathcal M\int_{\Omega_L}|\nabla_x\mu(t,x)|^2\,dx\qquad (0<t<T_*S).$$

The functional $\mathcal G$ is not the complete thermodynamic energy. This deduction neither asserts existence of such a solution nor derives the adopted isothermal closure from a total-energy or entropy balance.

## Statement references

[[post-fd-diffuse-interface-material-law|Adopted dimensional periodic phase-field equations and capillary stress]]

[[def-fd-phase-field-dimensionalization|Scale map and dimensional coefficient definitions]]

[[thm-fd-diffuse-interface-energy|Dimensionless smooth periodic energy identity]]

## Facts & Assumptions

**Given:** The scales, fields, regularity, free-energy functional, and pointwise equations in the statement.

[F1] [[post-fd-diffuse-interface-material-law]]: the model adopts $\partial_t\varphi+u\cdot\nabla_x\varphi=\mathcal M\Delta_x\mu$, $\nabla_x\cdot u=0$, and $\rho_*(\partial_tu+(u\cdot\nabla_x)u)=\operatorname{div}_x\sigma$, with the displayed free-energy and capillary stress.

[F2] [[def-fd-phase-field-dimensionalization]]: $x=Ly$, $t=(L/U)s$, $u=Uv$, $\varphi=\Phi_*\phi$, and $p=\rho_*U^2\pi$; it defines $\beta,\lambda_\phi,\eta,\mathcal M$ and the physical chemical potential $\mu=f_b'(\varphi)-\lambda_\phi\Delta_x\varphi$ with their units.

[F3] [[thm-fd-diffuse-interface-energy]]: for the dimensionless periodic phase and momentum equations, the stated smoothness, $\varepsilon,M,\nu>0$, and $W\in C^2(\mathbb R)$ bounded below, the dimensionless kinetic-plus-phase functional satisfies $E'(s)=-\nu\int_{\mathbb T^3}|\nabla_yv|^2\,dy-M\int_{\mathbb T^3}|\nabla_y\mu_c|^2\,dy$ for $0<s<S$.

[A1] The physical fields are periodic lifts related to the dimensionless fields by the change of variables in [F2]. All derivatives and products in the stress divergence are continuous in the stated field class.

## Proof

**Given:** The physical model equations in [F1], the scale map and coefficient identities in [F2], and the conditional dimensionless energy identity in [F3].

1.1 The chain rule gives $f_b'(\varphi)=\beta\Phi_*^{-1}W'(\varphi/\Phi_*)$ and $\Delta_x\varphi=(\Phi_*/L^2)\Delta_y\phi$. Substitution of $\beta=\rho_*U^2/\varepsilon$ and $\lambda_\phi=\rho_*U^2L^2\varepsilon/\Phi_*^2$ into $\mu=f_b'(\varphi)-\lambda_\phi\Delta_x\varphi$ yields $\mu=(\rho_*U^2/\Phi_*)\left(\varepsilon^{-1}W'(\phi)-\varepsilon\Delta_y\phi\right)=(\rho_*U^2/\Phi_*)\mu_c$. For the capillary stress $\sigma_c=(f_b-\varphi\mu+\lambda_\phi|\nabla_x\varphi|^2/2)I_3-\lambda_\phi\nabla_x\varphi\otimes\nabla_x\varphi$, componentwise product differentiation gives $(\operatorname{div}_x(\nabla_x\varphi\otimes\nabla_x\varphi))_i=\sum_j\partial_{x_j}(\partial_{x_i}\varphi\,\partial_{x_j}\varphi)=\Delta_x\varphi\,\partial_{x_i}\varphi+\partial_{x_i}(|\nabla_x\varphi|^2/2)$. Therefore $\operatorname{div}_x\sigma_c=\nabla_x f_b-\nabla_x(\varphi\mu)+\lambda_\phi\nabla_x(|\nabla_x\varphi|^2/2)-\lambda_\phi\operatorname{div}_x(\nabla_x\varphi\otimes\nabla_x\varphi)=(f_b'-\mu-\lambda_\phi\Delta_x\varphi)\nabla_x\varphi-\varphi\nabla_x\mu=-\varphi\nabla_x\mu$, since $\mu=f_b'-\lambda_\phi\Delta_x\varphi$. Also $(\operatorname{div}_x(2\eta D))_i=\eta\sum_j\partial_{x_j}^2u_i+\eta\partial_{x_i}(\sum_j\partial_{x_j}u_j)=\eta\Delta_xu_i$ by incompressibility, while $\operatorname{div}_x(-pI_3)=-\nabla_xp$. Thus [F1] gives $\rho_*(\partial_tu+(u\cdot\nabla_x)u)+\nabla_xp=\eta\Delta_xu-\varphi\nabla_x\mu$. The scale relations in [F2] give $\partial_t\varphi+u\cdot\nabla_x\varphi=(\Phi_*U/L)(\partial_s\phi+v\cdot\nabla_y\phi)$ and $\mathcal M\Delta_x\mu=(M\Phi_*U/L)\Delta_y\mu_c$; dividing by $\Phi_*U/L$ yields the dimensionless phase equation. They give $\rho_*(\partial_tu+(u\cdot\nabla_x)u)+\nabla_xp=(\rho_*U^2/L)(\partial_sv+(v\cdot\nabla_y)v+\nabla_y\pi)$, $\eta\Delta_xu=(\rho_*U^2/L)\nu\Delta_yv$, and $\varphi\nabla_x\mu=(\rho_*U^2/L)\phi\nabla_y\mu_c$, so division yields the dimensionless momentum equation. The divergence constraint scales by $U/L$. Finally, $dx=L^3dy$ and direct substitution into $\mathcal G$ gives $\mathcal G=\rho_*U^2L^3E$. [given, F1, F2, A1, algebra]

2.1 Apply [F3] to the smooth dimensionless fields from step 1.1 and use $ds/dt=U/L$ to obtain $\frac{d\mathcal G}{dt}=\rho_*U^3L^2\frac{dE}{ds}$. Since $\nabla_xu=(U/L)\nabla_yv$, $\eta=\rho_*UL\nu$, and $dx=L^3dy$, we have $\eta\int_{\Omega_L}|\nabla_xu|^2dx=\rho_*U^3L^2\nu\int_{\mathbb T^3}|\nabla_yv|^2dy$. Since $\nabla_x\mu=(\rho_*U^2/(\Phi_*L))\nabla_y\mu_c$ and $\mathcal M=M\Phi_*^2L/(\rho_*U)$, we likewise have $\mathcal M\int_{\Omega_L}|\nabla_x\mu|^2dx=\rho_*U^3L^2M\int_{\mathbb T^3}|\nabla_y\mu_c|^2dy$. Substituting [F3] proves the stated physical free-energy identity. [F2, F3, step 1.1, algebra] ∎
