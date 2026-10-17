---
id: pthm-emg-xs-rn-model
kind: physics-theorem
title: Dyonic RN as adopted Einstein–Maxwell model
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 7
deps:
  - post-emg-einstein-maxwell-equations
  - def-emg-xs-rn-data
  - thm-emg-xs-rn-verification
  - lem-emg-maxwell-current-forms
  - def-emg-xs-si-parameters
  - def-countable-choice
dependency_roles:
  post-emg-einstein-maxwell-equations: physical-assumption
  def-emg-xs-rn-data: mathematical-premise
  thm-emg-xs-rn-verification: mathematical-premise
  lem-emg-maxwell-current-forms: mathematical-premise
  def-emg-xs-si-parameters: formulation-prerequisite
  def-countable-choice: mathematical-premise
physical_scope: >
  Conditional source-free RN model deduction for the equation-based smooth
  Einstein–Maxwell branch with zero cosmological constant and no material
  stress or current, on positive-radius static coordinate domains away from
  the roots. It excludes an asserted source at the removed center, a global
  potential in the magnetic-flux sector, an ADM/Komar identification, any
  maximal-extension result, observations, and empirical validity.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, complete 238-page arXiv version"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Chapter 7, equations (7.106)-(7.113), printed pp. 201-203 (PDF pp. 207-209): charged spherical Einstein–Maxwell model, RN function and root regimes."
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2, complete 30-page full text"
      url: "https://arxiv.org/pdf/1410.6626"
      locator: "Section 2.1, equations (2.1)-(2.9), printed pp. 4-5 (PDF pp. 5-6): RN seed metric, charge parameters, and electromagnetic two-form."
---

## Statement

Let $m_*>0$ be an SI mass parameter, $Q_e\in\mathbb R$ an SI electric charge parameter, and $\Phi_B\in\mathbb R$ an SI magnetic flux through an oriented sphere. Use [[def-emg-xs-si-parameters]] to set

$$M=\frac{G_Nm_*}{c^2},\qquad q_e=\sqrt{\frac{G_N}{4\pi\varepsilon_0c^4}}\,Q_e,\qquad q_m=\frac{\sqrt{4\pi G_N/(\mu_0c^4)}}{4\pi}\Phi_B.$$

Thus $M,q_e,q_m$ are real length parameters. Let $J\subset(0,\infty)$ be a nonempty open set on which $f(r)=1-2M/r+(q_e^2+q_m^2)/r^2$ has no zero, and use the exact dyonic RN metric and smooth two-form of [[def-emg-xs-rn-data]] on $\mathbb R_{x^0}\times J\times S^2$, with $x^0=ct$. Write $\alpha=\sqrt{4\pi G_N/(\mu_0c^4)}$, $F=\mathcal F/\alpha$, and

$$T^{\mathrm{EM}}_{ab}:=\frac1{\mu_0}\left(F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd}\right),\qquad \kappa_E:=\frac{8\pi G_N}{c^4}.$$

In the equation-based physical model of [[post-emg-einstein-maxwell-equations]], specialize to $\Lambda=0$, $j=0$, and $T^m=0$ on this domain. Conditional on the exact current draft statements and hypotheses of [[thm-emg-xs-rn-verification]] and [[lem-emg-maxwell-current-forms]], the RN datum satisfies the adopted source-free equations

$$dF=0,\qquad \nabla^g_aF^{ab}=0,\qquad G_{ab}=\kappa_E T^{\mathrm{EM}}_{ab}.$$

This is a conditional model deduction, not a claim that nature contains an RN object. The coordinate domain excludes $r=0$; the conclusion does not assign a regular source there or require a global potential when $q_m\ne0$.

## Facts & Assumptions

**Given:** Positive SI constants $G_N,c,\mu_0$, $\varepsilon_0=(\mu_0c^2)^{-1}$, a positive SI mass parameter $m_*$, SI flux parameters $Q_e,\Phi_B$, the smooth dyonic RN data on a nonempty positive-radius domain with $f\ne0$, and the stated zero-source specialization.

[F1] [[def-emg-xs-si-parameters]]: $M=G_Nm_*/c^2$, $q_e=\sqrt{G_N/(4\pi\varepsilon_0c^4)}\,Q_e$, $q_m=\alpha\Phi_B/(4\pi)$, and $\mathcal F=\alpha F$ with $\alpha=\sqrt{4\pi G_N/(\mu_0c^4)}>0$.

[F2] [[def-emg-xs-rn-data]]: on $\mathbb R_{x^0}\times J\times S^2$, $f=1-2M/r+(q_e^2+q_m^2)/r^2$, $g=-f(dx^0)^2+f^{-1}dr^2+r^2\gamma_{S^2}$, and $\mathcal F=-q_er^{-2}dx^0\wedge dr+q_m\omega_{S^2}$, with $r>0$ and $f\ne0$.

[A1] [[post-emg-einstein-maxwell-equations]]: the selected equation-based physical model adopts $dF=0$, $\nabla^g_aF^{ab}=-\mu_0j^b$, and $G_{ab}+\Lambda g_{ab}=\kappa_E(T^{\mathrm{EM}}_{ab}+T^m_{ab})$. Here the theorem specializes to $\Lambda=0$, $j=0$, and $T^m=0$.

[L1] [[thm-emg-xs-rn-verification]]: for the exact datum in [F2] and every formal $G_N,c,\mu_0>0$, its current Statement gives $dF=d(\star_gF)=0$, $S=0$, and $G_{ab}=\kappa_ET^{\mathrm{EM}}_{ab}$ for $F=\mathcal F/\alpha$. Its proof and mathematical suppliers remain draft and are not independently accepted; the current Step-1 record is authoring-ready, so this conclusion is used only conditionally.

[L2] [[lem-emg-maxwell-current-forms]]: for a smooth two-form, $d(\star_gF)=-\iota_v\mathrm{vol}_g$ with $v^b=\nabla^g_aF^{ab}$, so $d(\star_gF)=0$ is equivalent to $\nabla^g_aF^{ab}=0$. The current carrier is a draft proof with no independent acceptance; this conversion is conditional on its exact smoothness, orientation, and Lorentz-signature hypotheses.

[A2] [[def-countable-choice]]: the geometric flux convention inherited through [F1] uses only $\mathrm{AC}_\omega$, meaning each specified countable family of nonempty sets has a choice function. The finite tensor normalization and equation conversion below make no additional choice and use no full AC.

## Proof

1.1 By [F1], $M,q_e,q_m$ are real lengths and $\alpha>0$. The chosen inputs therefore give exactly the geometric parameters and rescaling in [F2], with no inference about an asymptotic conserved mass or angular momentum. The only inherited choice convention is [A2]; this finite substitution makes no choice. [given, F1, F2, A2, algebra]

2.1 Apply the exact conditional statement [L1] to the RN datum [F2]. It gives $dF=0$, $d(\star_gF)=0$, zero scalar curvature, and $G_{ab}=\kappa_ET^{\mathrm{EM}}_{ab}$ on every component of the stated $f\ne0$ domain. [F2, L1, step 1.1]

3.1 By [L2], the vanishing of $d(\star_gF)$ in step 2.1 implies $\nabla^g_aF^{ab}=0$ pointwise; the smooth nondegenerate metric volume form in [L2] makes contraction with it injective. [L2, step 2.1, algebra]

4.1 Under the zero-source specialization in [A1], the equations established in steps 2.1 and 3.1 are exactly the adopted equation-based Einstein–Maxwell system. They establish the claimed conditional solution on the stated domain, without asserting a source at the omitted center or an empirical realization. [A1, step 2.1, step 3.1] ∎
