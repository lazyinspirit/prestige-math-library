---
id: post-tgr-thermodynamic-horizon-identification
kind: postulate
title: Restricted reversible horizon entropy identification
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 12
deps:
  - def-tgr-framework-units
  - def-countable-choice
  - pthm-tgr-kn-family-mechanics
  - pthm-tgr-reduced-horizon-temperature
dependency_roles:
  def-tgr-framework-units: formulation-prerequisite
  def-countable-choice: formulation-prerequisite
  pthm-tgr-kn-family-mechanics: formulation-prerequisite
  pthm-tgr-reduced-horizon-temperature: formulation-prerequisite
physical_scope: >
  An additional reversible heat and entropy-state-function identification on the
  selected connected, strictly subextremal, zero-magnetic-flux stationary
  Kerr–Newman family, conditional on matching each member's reduced
  exponential-current branch parameter and Killing flow at each family point
  to that member's positive geometric surface gravity and generator
  normalization. It asserts no entropy microstate count,
  general Hawking or KMS result, dynamical-process law, or empirical reading.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Robert M. Wald, The Thermodynamics of Black Holes, Living Reviews in Relativity 4 (2001), 6"
      url: https://arxiv.org/pdf/gr-qc/9912119
      locator: "Complete 46-page review; §2, PDF pp. 6–10, on the stationary mechanical first law and the classical-versus-thermodynamic distinction; §3, PDF pp. 10–16, on the additional quantum temperature context."
    - title: "Pietro Benetti Genolini, Introduction to black hole thermodynamics, lecture notes for the Roberto Salmeron School in Mathematical Physics (2025), arXiv:2512.24929v1"
      url: https://arxiv.org/pdf/2512.24929v1
      locator: "Complete 84-page lecture notes; §1.3, PDF pp. 14–16, and §2.1, PDF pp. 18–20, on the mechanical first law, the thermodynamic identification, and the initially unspecified area-entropy coefficient."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Postulate

Use the connected strict subextremal parameter domain
$\mathcal P:=\{(m,a,q)\in\mathbb R^3:m>0,\ m^2>a^2+q^2\},$
with its physical Kerr–Newman family and SI conversion as in [[pthm-tgr-kn-family-mechanics]]. Fix positive constants $G_N$ in $\mathrm{m^3\,kg^{-1}\,s^{-2}}$, $c$ in $\mathrm{m\,s^{-1}}$, $\hbar$ in $\mathrm{J\,s}$, and $k_B$ in $\mathrm{J\,K^{-1}}$. Write $E_{\rm par}:\mathcal P\to\mathrm J$, $A_H:\mathcal P\to\mathrm{m^2}$, $J_{\rm SI}:\mathcal P\to\mathrm{kg\,m^2\,s^{-1}}$, $Q_e:\mathcal P\to\mathrm C$, $\Omega_{\rm SI}:\mathcal P\to\mathrm{s^{-1}}$, and $\Phi_{\rm SI}:\mathcal P\to\mathrm V$ for the smooth parameter functions supplied by [[pthm-tgr-kn-family-mechanics]].

Define the work-subtracted reversible heat one-form on $\mathcal P$ by
$$\delta Q_{\rm rev}:=dE_{\rm par}-\Omega_{\rm SI}\,dJ_{\rm SI}-\Phi_{\rm SI}\,dQ_e.$$
Here a one-form assigns a linear functional to each tangent direction in the family parameter domain; each term has units of joules. Let $S_H:\mathcal P\to\mathbb R$ be a $C^1$ function with values measured in $\mathrm{J\,K^{-1}}$. It is a state function here in the explicit sense that its value is assigned to each family parameter point and does not depend on a path used to reach that point.

Assume the mathematical premise $\mathrm{AC}_\omega$ of [[def-countable-choice]] required by the selected spectral supplier. This is not a physical postulate.

For $x=(m,a,q)\in\mathcal P$, define
$$s(x):=\sqrt{m^2-a^2-q^2},\qquad r_+(x):=m+s(x),\qquad D(x):=r_+(x)^2+a^2.$$
On the selected smooth ingoing Kerr–Newman spacetime belonging to the family member $x$, write $\chi_x$ for the selected horizon generator with the length-flow parameter and reference normalization of [[pthm-tgr-kn-family-mechanics]]. Let $\nabla^{(x)}$ denote the Levi-Civita connection of that member's metric. By that supplier and the conditional geometric definition in [[def-tgr-framework-units]],
$$\nabla^{(x)}_{\chi_x}\chi_x=\kappa_{\rm geom}(x)\chi_x,\qquad \kappa_{\rm geom}:\mathcal P\to(0,\infty),\qquad \kappa_{\rm geom}(x):=\frac{s(x)}{D(x)},$$
where the connection is taken on the spacetime indexed by the family point, not on the parameter domain $\mathcal P$.
This is a smooth positive family map with values in $\mathrm{m^{-1}}$. Put $\kappa_{\rm acc}(x):=c^2\kappa_{\rm geom}(x)$, in $\mathrm{m\,s^{-2}}$, as in the SI family theorem.

For each fixed $x\in\mathcal P$, use a reduced exponential-current branch instance of [[pthm-tgr-reduced-horizon-temperature]] whose Killing flow field is identified with $\chi_x$ and whose length-flow normalization is the family member's. The reference event is fixed within that instance as required by the PHS02 branch model. The branch instance satisfies the supplier's positive energy-gap, positive $\gamma_{\rm red}$, and two-state-rate hypotheses; its scalar inverse-length parameter is held constant at $\kappa=\kappa_{\rm geom}(x)$. Let $T_{\rm red}(x)$ denote that instance's effective reference temperature. The supplier gives
$$T_{\rm red}(x)=\frac{\hbar c\kappa_{\rm geom}(x)}{2\pi k_B}.$$
Adopt the additional reference-temperature identification $T_K:\mathcal P\to(0,\infty)$, $T_K(x):=T_{\rm red}(x)$, so
$$T_K(x)=\frac{\hbar c\kappa_{\rm geom}(x)}{2\pi k_B}=\frac{\hbar\kappa_{\rm acc}(x)}{2\pi c k_B}.$$
Thus $T_K$ is a smooth family map with values in kelvins. At a fixed family point $x$, the unparameterized symbol $T_K$ denotes the value $T_K(x)$. It names only the selected reference scale in the reversible relation; it is not a local proper-temperature field and does not assert a stationary bath, a KMS state, or an observed detector reading.

Adopt the reversible thermodynamic identification
$$\delta Q_{\rm rev}=T_K\,dS_H$$
as an equality of one-forms on $\mathcal P$: at each $x\in\mathcal P$ and $v\in T_x\mathcal P$, it means $\delta Q_{\rm rev}(x)[v]=T_K(x)\,dS_H(x)[v]$. This physical identification is an additional assumption. The geometric family identity and the reduced effective-temperature model do not by themselves assert it. No global entropy zero or identification with a quantum-gravity microstate count or an unrenormalized outside-state entropy is adopted.
