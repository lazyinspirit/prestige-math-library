---
id: texp-tgr-classical-schwarzschild-work
kind: thought-experiment
title: Classical Schwarzschild SI family work
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 12
deps:
  - pthm-tgr-kn-family-mechanics
  - lem-tgr-schwarzschild-horizon-data
  - def-countable-choice
dependency_roles:
  pthm-tgr-kn-family-mechanics: physical-result
  lem-tgr-schwarzschild-horizon-data: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: >
  A conditional exact calculation on the zero-spin, zero-charge Schwarzschild
  slice of the selected stationary family. It is not a process, observation,
  evaporation model, or entropy assignment.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), complete 238-page lecture notes"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Complete lecture notes; Chapter 7, equations (7.148)–(7.156), printed pp. 215–216 (PDF pp. 221–223), Schwarzschild/Kerr area and classical first-law context."
    - title: "Robert M. Wald, The Thermodynamics of Black Holes, Living Reviews in Relativity 4 (2001), 6"
      url: https://arxiv.org/pdf/gr-qc/9912119
      locator: "Complete 46-page review; §2, PDF pp. 6–10, distinction between stationary family mechanics and thermodynamic interpretation. No thermodynamic conclusion is adopted."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Assume $\mathrm{AC}_\omega$ as defined in [[def-countable-choice]]. Fix
$G_N,c>0$ and choose a selected family member with SI mass parameter
$m_*>0$, angular-momentum parameter $J=0$, electric-charge parameter
$Q_e=0$, and zero magnetic flux. Let $E_{\rm par}:=m_*c^2$ be the
energy-valued parameter from [[pthm-tgr-kn-family-mechanics]]. On this
Schwarzschild slice the selected outer horizon has radius
$r_H=2G_Nm_*/c^2$, area
$$A_H=\frac{16\pi G_N^2m_*^2}{c^4},$$
and acceleration-unit surface gravity
$$\kappa_{\rm acc}=\frac{c^4}{4G_Nm_*}.$$
As $m_*$ varies over $(0,\infty)$ with the other parameters fixed, the
family differentials satisfy
$$dE_{\rm par}=\frac{\kappa_{\rm acc}c^2}{8\pi G_N}\,dA_H.$$
This is a conditional identity along stationary model parameters; it does
not describe an accretion process, report an observation, or assign
temperature or entropy.

## Facts & Assumptions

**Given:** The selected KN family theorem and its zero-spin, zero-charge
Schwarzschild slice, fixed constants $G_N,c>0$, and $m_*>0$.

[F1] [[pthm-tgr-kn-family-mechanics]]: with geometric mass parameter
$m=G_Nm_*/c^2$, $J=Q_e=0$ gives $r_H=2m$,
$A_H=16\pi m^2$, $\kappa_{\rm geom}=1/(4m)$,
$\kappa_{\rm acc}=c^2\kappa_{\rm geom}$, and
$E_{\rm par}=m_*c^2$. The physical horizon theorem's nonzero-spin-or-charge
domain is completed at this point by the exact Schwarzschild supplier
[[lem-tgr-schwarzschild-horizon-data]].

[F2] [[def-countable-choice]]: $\mathrm{AC}_\omega$ means every countable
family of nonempty sets has a choice function; the KN family supplier carries
this convention from its geometric flux parametrization.

[A1] $G_N,c$ are fixed positive constants and $m_*$ ranges over
$(0,\infty)$; no measured input or physical process is assumed.

## Proof

1.1 The inherited $\mathrm{AC}_\omega$ premise [F2] is retained; the finite
parameter calculation below makes no stronger choice. Set
$m:=G_Nm_*/c^2$. By [F1], the geometric horizon radius is
$2m$, so $A_H=16\pi m^2=16\pi G_N^2m_*^2/c^4$ and
$\kappa_{\rm acc}=c^2/(4m)=c^4/(4G_Nm_*)$. Also
$E_{\rm par}=m_*c^2$. The special case is defined for every $m_*>0$;
it is not a limiting inference from a charged or rotating horizon. [given, F1, F2, A1, algebra]

2.1 Differentiating the explicit area function on the open interval
$m_*>0$ gives
$$dA_H=\frac{32\pi G_N^2m_*}{c^4}\,dm_*.$$
Consequently
$$\frac{\kappa_{\rm acc}c^2}{8\pi G_N}\,dA_H=\frac{c^6}{32\pi G_N^2m_*}\frac{32\pi G_N^2m_*}{c^4}\,dm_*=c^2\,dm_*=dE_{\rm par}.$$
This verifies the stated family differential identity exactly. [A1, step 1.1, algebra] ∎
