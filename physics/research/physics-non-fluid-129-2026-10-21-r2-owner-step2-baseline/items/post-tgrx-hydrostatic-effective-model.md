---
id: post-tgrx-hydrostatic-effective-model
kind: postulate
title: Restricted hydrostatic effective functional
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 1
deps:
  - def-tgrx-static-hydrostatic-data
  - def-tgrx-thermal-vorticity
  - post-tgr-local-material-thermodynamics
dependency_roles:
  def-tgrx-static-hydrostatic-data: formulation-prerequisite
  def-tgrx-thermal-vorticity: formulation-prerequisite
  post-tgr-local-material-thermodynamics: formulation-prerequisite
justified_by: []
physical_scope: "An adopted zeroth-gradient effective equilibrium functional on a compact smooth static background in a declared long-wavelength regime; no microscopic trace, convergence, empirical equation of state, or transport coefficient is asserted."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Nabamita Banerjee et al., Constraints on Fluid Dynamics from Equilibrium Partition Functions, arXiv:1203.3544v2, §§1.1–1.2, 2.3.1, and 2.5 (2012)"
      url: https://arxiv.org/pdf/1203.3544
    - title: "Pavel Kovtun, Lectures on hydrodynamic fluctuations in relativistic theories, complete lecture notes, §§1.3 and 2.6 (2012)"
      url: https://arxiv.org/pdf/1205.5040
---

## Postulate

Use the prescribed static hydrostatic data $\Sigma,h,N,\Phi,q,T_0,\mu_0,D,p,dV_h$, with local profiles $T=T_0/N$ and $\mu=(\mu_0-q\Phi)/N$. Fix the background fields and parameters, and take an open interval $U\subset\mathbb R$ containing $\mu_0$ such that $(T_0/N(x),(r-q\Phi(x))/N(x))\in D$ for every $r\in U$ and $x\in\Sigma$. Adopt the dimensionless effective functional

$$W_{\rm hs}(T_0,r;h,N,\Phi,q,p):=\log Z_{\rm eff}=\frac{1}{k_BT_0}\int_\Sigma N(x)\,p\!\left(\frac{T_0}{N(x)},\frac{r-q\Phi(x)}{N(x)}\right)dV_h(x),$$

with the integral finite. Here $Z_{\rm eff}:=\exp(W_{\rm hs})$ is notation for the adopted functional; no microscopic trace or Gibbs state is asserted. “Hydrostatic” labels this prescribed static equilibrium response model: the background is time-independent along the chosen Killing field and the Killing-normalized temperature is $T_0$; it does not assert a fluid-equation solution or a thermal state. A “derivative expansion” means a formal ordering of candidate corrections by the number of derivatives of the prescribed background and local thermodynamic variables; this postulate retains its order-zero term only. Each application declares a microscopic length $\ell_{\rm micro}>0$ in metres, a microscopic relaxation time $\tau_{\rm micro}>0$ in seconds, and a positive spatial background scale $L_{\rm bg}$ in metres, identifying the physical meaning of each without equating distinct microscopic scales; $L_{\rm bg}$ is the shortest declared spatial variation or curvature scale among the prescribed fields. The static model is used only in the declared spatial long-wavelength regime $\ell_{\rm micro}/L_{\rm bg}\ll1$. Its integral contains no temporal gradients; any time-dependent extension must separately declare a temporal variation scale $t_{\rm bg}>0$ in seconds and satisfy $\tau_{\rm micro}/t_{\rm bg}\ll1$. No numerical error bound, convergence of a gradient expansion, or microscopic existence claim is asserted. The pressure function $p(T,\mu)$ is separately supplied and is not identified with a pressure derived from a material energy function unless an application states that additional equation-of-state identification.

## Postulate references

[[def-tgrx-static-hydrostatic-data]]

[[def-tgrx-thermal-vorticity]]

[[post-tgr-local-material-thermodynamics]]

[Nabamita Banerjee et al., *Constraints on Fluid Dynamics from Equilibrium Partition Functions*](https://arxiv.org/pdf/1203.3544)

[Pavel Kovtun, *Lectures on hydrodynamic fluctuations in relativistic theories*](https://arxiv.org/pdf/1205.5040)
