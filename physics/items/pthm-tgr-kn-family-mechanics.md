---
id: pthm-tgr-kn-family-mechanics
kind: physics-theorem
title: Physical KN family work and constancy
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 11
deps:
  - def-tgr-framework-units
  - def-emg-xs-si-parameters
  - pthm-emg-xs-kn-model
  - thm-emg-xs-kn-extension
  - lem-tgr-schwarzschild-horizon-data
  - pthm-emg-xs-kn-horizons
  - prop-tgr-kn-first-law-smarr
  - def-countable-choice
dependency_roles:
  def-tgr-framework-units: formulation-prerequisite
  def-emg-xs-si-parameters: formulation-prerequisite
  pthm-emg-xs-kn-model: physical-result
  thm-emg-xs-kn-extension: mathematical-premise
  lem-tgr-schwarzschild-horizon-data: mathematical-premise
  pthm-emg-xs-kn-horizons: physical-result
  prop-tgr-kn-first-law-smarr: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: >
  The subextremal, zero-magnetic-flux, selected smooth Kerr–Newman solution
  family with its stated asymptotic time and displayed electromagnetic gauge
  references. The work identity is a differential identity on family
  parameters, not a dynamical-process law or an ADM/Komar identification.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Robert M. Wald, The Thermodynamics of Black Holes, Living Reviews in Relativity 4 (2001), 6"
      url: https://arxiv.org/pdf/gr-qc/9912119
      locator: "Complete 46-page review; §2, PDF pp. 6–10, stationary black-hole mechanics first law, its stationary scope, and the distinction from thermodynamic identification."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), complete 238-page lecture notes"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Complete lecture notes; Chapter 7, equations (7.148)–(7.156), printed pp. 215–216 (PDF pp. 221–223), Kerr area and classical mechanics context; the charged-family formulas are obtained through the exact suppliers here."
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Complete 30-page review; §3.3, equations (3.18)–(3.23), printed pp. 16–19 (PDF pp. 17–20), selected KN roots and horizon context; §4.1, equations (4.1)–(4.2), printed pp. 20–21 (PDF pp. 21–22), area and thermodynamic-analogy context only."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Fix $G_N,c,\mu_0>0$ and $\varepsilon_0=(\mu_0c^2)^{-1}$. Let
$m_*>0$ be the selected SI mass parameter, $J\in\mathbb R$ the selected
angular-momentum parameter, and $Q_e\in\mathbb R$ the selected electric
charge parameter, with zero magnetic flux. Define the geometric length
parameters and field normalization by
$$m:=\frac{G_Nm_*}{c^2},\qquad a:=\frac{J}{m_*c},\qquad q:=\sqrt{\frac{G_N}{4\pi\varepsilon_0c^4}}\,Q_e,\qquad \alpha:=\sqrt{\frac{4\pi G_N}{\mu_0c^4}}.$$
Assume the strict subextremal condition $m^2>a^2+q^2$. Set
$$s:=\sqrt{m^2-a^2-q^2},\qquad r_+:=m+s,\qquad D:=r_+^2+a^2,\qquad A_H:=4\pi D.$$
Assume $\mathrm{AC}_\omega$ as defined in [[def-countable-choice]], the
choice convention inherited by the selected geometric flux parametrization;
no full Axiom of Choice is used.
In the selected smooth ingoing KN model, the outer Killing horizon has
generator
$$\chi:=\partial_v+\frac aD\Psi,$$
where $v$ is a length coordinate and $\Psi=X\partial_Y-Y\partial_X$ is
the smooth rotation field of the unit two-sphere. Normalize time by
$t=v/c$, and define
$$\Omega_{\rm SI}:=\frac{ca}{D},\qquad \kappa_{\rm acc}:=\frac{c^2s}{D},\qquad \Phi_{\rm SI}:=\frac{cq r_+}{\alpha D}.$$
Thus $c\chi=\partial_t+\Omega_{\rm SI}\Psi$; $\kappa_{\rm acc}$ is the
acceleration-unit surface gravity; and $\Phi_{\rm SI}$ is the voltage in
the displayed gauge, constant on the horizon cross-section and vanishing at
spatial infinity. The quantities $\Omega_{\rm SI}$,
$\kappa_{\rm acc}$, and $\Phi_{\rm SI}$ are constant on each fixed
cross-section because the selected horizon formulas depend only on the family
parameters. Let $E_{\rm par}:=m_*c^2$ be the energy-valued parameter
derived from the selected mass input. For ordinary differentials on the
strict physical parameter domain, with $G_N,c,\mu_0$ fixed, the exact family
identities are
$$dE_{\rm par}=\frac{\kappa_{\rm acc}c^2}{8\pi G_N}\,dA_H+\Omega_{\rm SI}\,dJ+\Phi_{\rm SI}\,dQ_e,$$
and
$$E_{\rm par}=\frac{\kappa_{\rm acc}c^2}{4\pi G_N}A_H+2\Omega_{\rm SI}J+\Phi_{\rm SI}Q_e.$$
The quantities have units $[E_{\rm par}]={\rm J}$,
$[A_H]={\rm m^2}$, $[\kappa_{\rm acc}]={\rm m\,s^{-2}}$,
$[\Omega_{\rm SI}]={\rm s^{-1}}$, and $[\Phi_{\rm SI}]={\rm V}$.
The joint Schwarzschild point $J=Q_e=0$ is included by the separate exact
Schwarzschild horizon-data supplier; the generic physical horizon theorem
itself states a nonzero-rotation-or-charge hypothesis.

These identities concern the selected stationary family and its stated
normalizations. They are not a dynamical-process first law, and
$E_{\rm par}$ is not identified here with ADM or Komar gravitational energy.
No operational temperature, physical entropy, Hawking calibration, or
extremal-boundary claim follows from this calculation.

## Facts & Assumptions

**Given:** Fixed positive SI constants, a zero-magnetic-flux selected KN
family with $m_*>0$, and $m^2>a^2+q^2$.

[F1] [[def-emg-xs-si-parameters]]: $m=G_Nm_*/c^2$ and
$a=J/(m_*c)$. These are length-valued model parameters; this map makes no
ADM or Komar identification.

[F2] [[def-tgr-framework-units]]: length coordinates use $x^0=ct$;
$c$ has units ${\rm m\,s^{-1}}$, $G_N$ has units
$ {\rm m^3\,kg^{-1}\,s^{-2}}$, and a length-normalized Killing generator
is distinct from its time-normalized version.

[F3] [[pthm-emg-xs-kn-model]]: for the stated SI inputs and zero magnetic
flux, the selected KN data conditionally solve the equation-based
$\Lambda=0$, zero-current, zero-matter-stress model on its stated regular
domains. This physical theorem's proof is conditional on its exact current
mathematical supplier statements.

[F4] [[thm-emg-xs-kn-extension]]: the selected ingoing product model has
smooth metric and potential data across every positive root; its geometric
electrovac equations extend there conditionally on the current verification
interface.

[L1] [[pthm-emg-xs-kn-horizons]]: for $m^2\ge a^2+q^2>0$, the selected
outer KN horizon has area $4\pi(r_+^2+a^2)$, geometric angular velocity
$a/(r_+^2+a^2)$, geometric surface gravity
$s/(r_+^2+a^2)$, and displayed-gauge geometric potential
$qr_+/(r_+^2+a^2)$. Its SI conversion uses $c$ for angular rate,
$c^2$ for acceleration surface gravity, and $c/\alpha$ for voltage; the
potential tends to zero at spatial infinity. The current proof remains draft
and is used only at its exact interface.

[F5] [[prop-tgr-kn-first-law-smarr]]: on
$\mathcal P=\{(m,a,q):m>0,\ m^2>a^2+q^2\}$, with
$j=ma$, $A=4\pi(r_+^2+a^2)$, $\kappa_{\rm KN}=s/D$,
$\Omega_{\rm KN}=a/D$, and $\Phi_{\rm KN}=qr_+/D$, the exact identities
are $dm=(\kappa_{\rm KN}/8\pi)dA+\Omega_{\rm KN}dj+
\Phi_{\rm KN}dq$ and
$m=\kappa_{\rm KN}A/(4\pi)+2\Omega_{\rm KN}j+
\Phi_{\rm KN}q$. This is a proved mathematical family identity, not a
physical process statement.

[F6] [[lem-tgr-schwarzschild-horizon-data]]: at $a=q=0$, the exact selected
ingoing metric has a future Killing horizon at $r_+=2m$, area $16\pi m^2$,
geometric surface gravity $1/(4m)$, and zero angular velocity and potential.
This covers the point excluded by the nonzero hypothesis in [L1].

[F7] [[def-countable-choice]]: $\mathrm{AC}_\omega$ means every countable
family of nonempty sets has a choice function. It is inherited from the
geometric flux convention in [F1]; no stronger choice principle is used.

[F8] [[def-emg-xs-si-parameters]]: at zero magnetic flux,
$q=\sqrt{G_N/(4\pi\varepsilon_0c^4)}Q_e$,
$\alpha=\sqrt{4\pi G_N/(\mu_0c^4)}$, and
$\varepsilon_0\mu_0c^2=1$.

[A1] $G_N,c,\mu_0$ are positive constants held fixed while the family
parameters vary; $\varepsilon_0=(\mu_0c^2)^{-1}$; magnetic flux is zero;
the strict inequality $m^2>a^2+q^2$ excludes extremality.

## Proof

1.1 The parameter map [F1], [F8], under the inherited $\mathrm{AC}_\omega$
convention [F7], sends every stated SI triple to a point
$(m,a,q)\in\mathcal P$ and makes the full domain strict subextremal. When
$a^2+q^2>0$, [L1] supplies the selected outer horizon, its constant
cross-section data, and the stated time and gauge normalizations. At the
remaining point $a=q=0$, [F6] supplies the exact Schwarzschild horizon data;
[F3]–[F4] keep this specialization within the selected physical solution
family and its smooth ingoing model. Hence the geometric quantities used in
[F5] coincide with the selected model's horizon quantities throughout the
stated physical domain. [given, F1, F3, F4, L1, F5, F6, F7, F8, A1, algebra]

1.2 Write $j:=ma$. From [F1], [F8], $$E_{\rm par}=\frac{c^4}{G_N}m,\qquad j=\frac{G_N}{c^3}J,\qquad q=\sqrt{\frac{G_N}{4\pi\varepsilon_0c^4}}\,Q_e.$$ 
The horizon formulas give $\Omega_{\rm SI}=c\Omega_{\rm KN}$ and
$\kappa_{\rm acc}=c^2\kappa_{\rm KN}$. For the voltage,
$$\frac c\alpha=c\sqrt{\frac{\mu_0c^4}{4\pi G_N}}=\frac{c^2}{\sqrt{4\pi\varepsilon_0G_N}},$$
where the last equality uses $\varepsilon_0\mu_0c^2=1$ from [F8]. Thus
$\Phi_{\rm SI}=(c^2/\sqrt{4\pi\varepsilon_0G_N})\Phi_{\rm KN}$,
and the area $A_H$ is the same $A$ as in [F5]. [F1, F2, F8, L1, F5, A1, algebra]

2.1 Multiply the first identity in [F5] by $c^4/G_N$. The $dm$ term
becomes $dE_{\rm par}$; the area term becomes
$\kappa_{\rm acc}c^2dA_H/(8\pi G_N)$; and the angular term becomes
$\Omega_{\rm SI}dJ$ by [F1] and step 1.2. The charge term becomes
$$\frac{c^4}{G_N}\Phi_{\rm KN}\,dq=\frac{c^2}{\sqrt{4\pi\varepsilon_0G_N}}\Phi_{\rm KN}\,dQ_e=\Phi_{\rm SI}\,dQ_e,$$
using fixed constants and step 1.2. This proves the physical-unit family
differential identity. [F1, F5, F8, A1, step 1.2, algebra]

3.1 Multiply the Smarr identity in [F5] by $c^4/G_N$. Applying the same
constant conversions from step 1.2 sends its four terms respectively to
$E_{\rm par}$, $\kappa_{\rm acc}c^2A_H/(4\pi G_N)$,
$2\Omega_{\rm SI}J$, and $\Phi_{\rm SI}Q_e$. This proves the displayed
Smarr identity on the same strict domain. These are identities between
stationary family parameters, not a time-dependent process or an ADM/Komar
energy theorem. [F1, F5, A1, step 1.2, algebra] ∎

## Remarks

The explicit zero-spin, zero-charge case uses [F6] because the generic
physical horizon interface [L1] assumes $a^2+q^2>0$. The strict family
excludes the extremal boundary, where $s=0$; no positive-temperature division
or thermodynamic interpretation is made.
