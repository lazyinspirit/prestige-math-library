---
id: post-tgr-finite-bath-exchange-preparation
kind: postulate
title: "Selected finite bath and effective energy-exchange preparation"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 7
deps:
  - def-tgr-framework-units
  - post-tgr-kepler-microcanonical-volume-preparation
  - thm-tgr-regulated-kepler-negative-capacity
dependency_roles:
  def-tgr-framework-units: formulation-prerequisite
  post-tgr-kepler-microcanonical-volume-preparation: formulation-prerequisite
  thm-tgr-regulated-kepler-negative-capacity: mathematical-premise
justified_by: []
physical_scope: >-
  A selected finite Gibbs-volume Kepler subsystem with negative capacity,
  a finite logarithmic-entropy bath with positive constant capacity, conserved
  total energy, a matched-temperature point, and the separately adopted scalar
  exchange ODE, with the upstream slow-motion bound retained for any Newtonian
  physical-applicability claim; not causal relativistic transport, generic
  stellar stability, empirical thermalization, or an observed reservoir.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "P.-H. Chavanis, Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas, arXiv:1908.10806v1 (2019), Sec. III.E"
      url: "https://arxiv.org/pdf/1908.10806"
    - title: "MIT 8.962, General Relativity, Spring 2020 Lecture Guide, Lectures 20–21, PDF pp. 7–9"
      url: "https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/743631236d2866f6ba129f06110d8b1a_MIT8_962S20_guide.pdf"
verification:
  precheck: pass
---

## Postulate

Use the finite relative Kepler subsystem and Gibbs-volume entropy convention of [[post-tgr-kepler-microcanonical-volume-preparation]], with $R>16r_0$. In that model, choose $E_G=-e_*$ with $A/R<e_*<A/(16r_0)$, strictly inside the energy branch, and restrict to an open interval $\mathcal I_G$ about $x_*=E_G$ whose energies stay in that interior. The supplied formula $\Omega(-e)=C e^{-3/2}J(er_0/A)$ has $J(\delta)=\int_\delta^1s^{1/2}(1-s)^{3/2}ds$ and $J'(\delta)=-\delta^{1/2}(1-\delta)^{3/2}$; because $\delta$ stays in $(0,1/16)$, this derivative is smooth there, so $J$, $\Omega$, and $S_G=k_B\log\Omega$ are $C^2$ on $\mathcal I_G$. The mathematical result [[thm-tgr-regulated-kepler-negative-capacity]] gives $T_G(x_*)=T_*>0$ and finite $C_G(x_*)<0$ on this branch; restrict $\mathcal I_G$ if necessary so these strict signs persist. For a physical Newtonian slow-motion interpretation, also retain the upstream condition $2A/(\mu r_0c^2)\le\delta_{\rm NR}\ll1$ for a stated tolerance $\delta_{\rm NR}$; the scalar exchange calculation itself uses only the explicitly adopted model.

As a separate finite bath, choose $C_b>0$ in $\mathrm{J\,K^{-1}}$, reference energy $E_0$ in joules, reference temperature $T_{\rm ref}>0$ in kelvins, and entropy constant $S_0$ in $\mathrm{J\,K^{-1}}$. For bath energy $E_b>E_0$, adopt
$$S_b(E_b)=C_b\log\!\left(\frac{E_b-E_0}{C_bT_{\rm ref}}\right)+S_0.$$
The logarithm argument is dimensionless, and this stipulated bath has $T_b=(dS_b/dE_b)^{-1}=(E_b-E_0)/C_b$ and constant heat capacity $C_b$. Fix total energy $E_{\rm tot}=x+E_b$, choose $E_b=E_0+C_bT_*$ to match the selected subsystem temperature, and restrict $0<C_b<|C_G(x_*)|$.

Finally adopt the effective scalar energy-exchange law
$$\dot x=L\,\frac{d}{dx}\bigl[S_G(x)+S_b(E_{\rm tot}-x)\bigr],\qquad L>0\ \mathrm{J\,K\,s^{-1}}.$$
The law is a selected one-dimensional model with time measured in seconds; it does not assert a relativistic transport equation or a mechanism for thermalization. The literature citations give gravitational-thermodynamic context only; the explicit bath and ODE are adopted here, and their mathematical consequences are proved conditionally by the linked local supplier.

