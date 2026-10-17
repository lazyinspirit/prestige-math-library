---
id: post-qsm-dt-effective-bath
kind: postulate
title: Specified effective GKSL bath and instrument assumption
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 8
physical_scope: >-
  For a finite-dimensional subsystem represented by H=C^d (d>=1), the chosen
  thermal GKSL state law and energy-resolved instrument apply physically only
  on the declared finite interval [0,t_res], where t_res>0 is in seconds.
  All-time limits are mathematical continuations of the same fixed generator
  and instrument, with no physical-applicability claim beyond t_res. No
  microscopic bath limit, calibrated rate, or reported measurement is asserted.
deps:
  - def-qsm-dt-gksl-definition
  - thm-qsm-dt-gksl-sufficient
  - thm-qsm-dt-gibbs-jump
  - def-qsm-dt-monitored-chain
  - def-axiom-of-choice
dependency_roles:
  def-qsm-dt-gksl-definition: formulation-prerequisite
  thm-qsm-dt-gksl-sufficient: formulation-prerequisite
  thm-qsm-dt-gibbs-jump: formulation-prerequisite
  def-qsm-dt-monitored-chain: operational-prerequisite
  def-axiom-of-choice: formulation-prerequisite
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Robert Alicki and Karl Lendi, Quantum Dynamical Semigroups and Applications, Lecture Notes in Physics 717, §§1.3.4 and 1.5.3
      url: https://www.nzdr.ru/data/media/biblio/kolxoz/P/PS/PSa/Alicki%20R.%2C%20Lendi%20K.%20Quantum%20dynamical%20semigroups%20and%20applications%20%28LNP0717%2C%20Springer%2C%202007%29%28136s%29_PSa_.pdf
    - title: M. B. Plenio and P. L. Knight, The quantum-jump approach to dissipative dynamics in quantum optics, §IV.1 “Quantum jumps” and §IV.3 “Simulation of single trajectories”
      url: https://arxiv.org/pdf/quant-ph/9702007
---

## Postulate

Let $d\geq1$ be finite and let the modeled subsystem Hilbert space be $\mathcal H=\mathbb C^d$. A state is a dimensionless matrix $\rho=\rho^*\in M_d(\mathbb C)$ such that $x^*\rho x\geq0$ for every $x\in\mathbb C^d$ and $\operatorname{Tr}\rho=1$. An initial preparation is a chosen state $\rho_0$. Let $H_{\rm s}=H_{\rm s}^*\in M_d(\mathbb C)$ have units joules, let $\hbar>0$ have units joule-seconds, and let $L_1,\ldots,L_m\in M_d(\mathbb C)$, $m\geq0$ finite, have units seconds$^{-1/2}$. We adopt the time-independent finite GKSL generator of [[def-qsm-dt-gksl-definition]],

$$\mathcal L(X)=-\frac{i}{\hbar}[H_{\rm s},X]+\sum_{j=1}^{m}\left(L_jXL_j^*-\frac12\{L_j^*L_j,X\}\right),$$

where $[U,V]=UV-VU$ and $\{U,V\}=UV+VU$. The exact state law is

$$\frac{d}{dt}\rho_t=\mathcal L(\rho_t),\qquad \rho_{t=0}=\rho_0,\qquad \rho_t=e^{t\mathcal L}\rho_0,\qquad 0\leq t\leq t_{\rm res}.$$

Here $t_{\rm res}\in(0,\infty)$ is the finite resolved duration, in seconds, adopted for this model. For mathematical long-time calculations, the same constant generator defines the continuation $e^{t\mathcal L}\rho_0$ for every $t\geq0$; this continuation makes no physical-applicability claim for $t>t_{\rm res}$. By [[thm-qsm-dt-gksl-sufficient]] it is a density-state evolution on that mathematical continuation as well.

Let $k_{\rm B}>0$ denote Boltzmann's constant, with SI units joules per kelvin; it converts absolute temperature to an inverse-energy parameter. Let $T_{\rm bath}>0$ be the adopted absolute temperature parameter in kelvins and set $\beta:=(k_{\rm B}T_{\rm bath})^{-1}$, with units joules$^{-1}$. The temperature and rates are model inputs here; no measured calibration is asserted. The temperature parameter alone imposes no detailed-balance condition on an arbitrary choice of $L_j$. When the generator is specialized to the connected Gibbs-jump model, its energies, $\beta$, and rates must satisfy the hypotheses in [[thm-qsm-dt-gibbs-jump]].

Within this effective formulation, the dimension $d$, preparation $\rho_0$, general coefficient matrices $H_{\rm s}$ and $L_j$, positive constants $\hbar$ and $k_{\rm B}$, temperature $T_{\rm bath}$, and resolved duration $t_{\rm res}$ are primitive, adopted model inputs with the types and units stated above; none is derived here from a microscopic reservoir or inferred from a measurement. This status is local to this formulation, not a claim that each is fundamental in every physical theory. The space $\mathbb C^d$, inverse-energy parameter $\beta$, generator $\mathcal L$, and state family $\rho_t$ are derived by their displayed constructions once those inputs and the physical state-law postulate are fixed. The selected Hermitian observable $A$ and its unit assignment are additional adopted observable data; its expectation is derived by the trace formula below.

In the connected Gibbs-jump parameterization, the orthonormal energy basis, real level energies $E_a$ in joules, and rates $w_{ab}\geq0$ in seconds$^{-1}$ are instead the adopted primitive spectral and rate data, subject to the Gibbs-balance and connectivity hypotheses of [[thm-qsm-dt-gibbs-jump]]. In that parameterization the operator coefficients are derived as $H_{\rm s}=\sum_a E_a|a\rangle\langle a|$ and $L_{ab}=\sqrt{w_{ab}}|b\rangle\langle a|$; they replace, rather than supplement, the independent general matrix choices above. The Gibbs weights $\pi_a=e^{-\beta E_a}/\sum_b e^{-\beta E_b}$ are derived, while the energy-resolved instrument remains a separate adopted assumption. In particular, neither the temperature nor the Gibbs-balance relation derives the numerical rates.

For that Gibbs-jump specialization, record predictions additionally adopt the particular ideal energy-resolved instrument defined in [[def-qsm-dt-monitored-chain]], and only on $0\leq t\leq t_{\rm res}$ as a physical model. For every allowed initial density $\rho_0$, define $q_a:=\langle a|\rho_0|a\rangle\geq0$, so $\sum_aq_a=1$. The full label path is initialized by $\Pr(a(0)=a)=q_a$ and, conditional on this label, follows the supplier's holding and destination laws. Before the first click this label is an auxiliary variable for the record law, not a claim that the conditional quantum state is an energy eigenstate or that an additional projective measurement has replaced $\rho_0$ by its diagonal part. More precisely, with the supplier's diagonal no-click matrix $K$, the unnormalized no-click density is $N_t=e^{tK}\rho_0e^{tK^*}$ and its trace is $S(t)=\sum_aq_ae^{-r_at}>0$; conditional on no click the quantum state is $N_t/S(t)$. The first click $a\to b$ has time density $w_{ab}q_ae^{-r_at}$ and, when this density is positive, resets the quantum state to $|b\rangle\langle b|$, because $L_{ab}N_tL_{ab}^*=w_{ab}q_ae^{-r_at}|b\rangle\langle b|$. Zero-density branches are not normalized. Thus the no-click survival and every labelled click law agree with the stated initial-label mixture and its subsequent supplier chains, while the no-click quantum state retains any initial coherences. For a diagonal Gibbs preparation, $q=\pi$. Its law for all $t\geq0$ is used only as a mathematical continuation when deriving a long-time coefficient. A one-time channel family alone does not select this record law. Full [[def-axiom-of-choice]] is retained as the formal set-theoretic premise in the monitored-chain supplier's construction of the joint path law; it is not a physical postulate about nature. A selected observable is represented by a Hermitian matrix $A\in M_d(\mathbb C)$ with its assigned physical units, and its model expectation $\operatorname{Tr}(\rho_tA)$ has those same units; no measurement outcome is reported.

## Remarks

This postulate distinguishes the adopted effective bath model from derived finite-dimensional consequences. It does not provide measured rates or uncertainties from an experiment. If rates later come from a measurement, its apparatus, calibration, sampling conditions, and uncertainty must be stated as empirical premises in a separate appropriately scoped item.
