---
id: pthm-tgr-ideal-photon-emission
kind: physics-theorem
title: Conditional ideal Planck emission and entropy accounting
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 14
deps:
  - def-countable-choice
  - def-tgr-emitter-quasistatic-diagnostic
  - lem-tgr-emitter-quasistatic-bounds
  - post-tgr-photon-emitter-and-quasistatic-balance
  - prop-tgr-ideal-evaporation-accounting
  - pthm-tgr-area-entropy-calibration
  - thm-tgr-photon-planck-flux
dependency_roles:
  def-countable-choice: mathematical-premise
  def-tgr-emitter-quasistatic-diagnostic: mathematical-premise
  lem-tgr-emitter-quasistatic-bounds: mathematical-premise
  post-tgr-photon-emitter-and-quasistatic-balance: physical-assumption
  prop-tgr-ideal-evaporation-accounting: mathematical-premise
  pthm-tgr-area-entropy-calibration: physical-result
  thm-tgr-photon-planck-flux: mathematical-premise
proof_strategy: direct
physical_scope: >
  Conditional exact conclusion in the zero-mode-excluded Planck/Gibbs ray
  model and fixed-asymptotic-reference positive-cutoff Schwarzschild
  effective-area ODE. The area entropy input is restricted to the stationary
  family interface, and the explicit AC_omega assumption is carried. The
  quasistatic ratio is an internal diagnostic, not an error bound against a
  dynamic Einstein solution. No actual Hawking flux, coupled backreaction,
  empirical observation, reference-independent Stefan law, or universal
  generalized second law is asserted.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Robert M. Wald, The Thermodynamics of Black Holes, Living Reviews in Relativity 4 (2001), 6"
      url: "https://arxiv.org/pdf/gr-qc/9912119"
      locator: "Complete 46-page review; §2, PDF pp. 6–10, and §3, PDF pp. 10–16, for stationary mechanics and the additional quantum-field assumptions behind Hawking radiation. The local conclusion is conditional on its explicit toy model."
    - title: "Pietro Benetti Genolini, Introduction to black hole thermodynamics, lecture notes for the Roberto Salmeron School in Mathematical Physics (2025), arXiv:2512.24929v1"
      url: "https://arxiv.org/pdf/2512.24929v1"
      locator: "Complete 84-page lecture notes; §1.3, PDF pp. 14–16, and §2.1, PDF pp. 18–20, on the separate mechanical, thermodynamic, and area-coefficient statements."
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333 Statistical Mechanics I, Lecture 20"
      url: "https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/368b2180e6efa1417ab336d79b2df6db_MIT8_333F13_Lec20.pdf"
      locator: "Complete 15-page lecture PDF; photon-gas section, equations VI.49–VI.61 (PDF pp. 12–14; printed pp. 128–131), for two-polarization modes, Planck energy density, and c/4 angular flux."
    - title: "University of Mississippi PHY 727 course notes, Lecture 18: The Photon Gas"
      url: "https://www.phy.olemiss.edu/~luca/phys727/Topics/L18_photons.pdf"
      locator: "Complete two-page lecture note; pp. 1–2, for the photon spectrum, energy/entropy densities, and the explicit role of wall interactions in establishing equilibrium."
verification:
  precheck: pass
---

## Statement

Assume the ideal model and fixed asymptotic normalization of [[post-tgr-photon-emitter-and-quasistatic-balance]], and explicitly assume $\mathrm{AC}_\omega$ as defined by [[def-countable-choice]]. Use $G=G_N$ between the mathematical ODE input and the physical Schwarzschild family. Also assume the conditional family-entropy interface stated by [[pthm-tgr-area-entropy-calibration]] with its actual hypotheses. Let $S_H(M)$ denote that state-function value at the stationary Schwarzschild member of mass $M$, and put
$$
\Delta S_H:=S_H(M_0)-S_H(M_{\min}).
$$
For the fixed-reference effective-area model,
$$
P_\infty(M)=\frac{\eta\hbar c^6}{15360\pi G_N^2M^2}, \qquad \alpha=\frac{\eta\hbar c^4}{15360\pi G_N^2}, \qquad M(t_\infty)=(M_0^3-3\alpha t_\infty)^{1/3}, \qquad \tau=\frac{M_0^3-M_{\min}^3}{3\alpha}.
$$
The model exports energy $c^2(M_0-M_{\min})$ joules, and its coarse photon entropy satisfies
$$
S_H(M)=\frac{4\pi k_BG_NM^2}{\hbar c}+s_*, \qquad s_*\in\mathbb R\ \text{constant on the stationary family},
$$
$$
S_{\rm rad}(\tau)=\frac43\Delta S_H>0, \qquad \Delta(S_H+S_{\rm rad})=\frac13\Delta S_H>0.
$$
The absolute entropy offsets in the mathematical ODE model and the stationary-family state function need not be identified; their differences agree because both have the same area coefficient on this branch.

For the diagnostic of [[def-tgr-emitter-quasistatic-diagnostic]],
$$
\epsilon_{\rm qs}(t_\infty)=\frac{2G_N\alpha}{c^3M(t_\infty)^2}, \qquad \sup_{0\leq t_\infty\leq\tau}\epsilon_{\rm qs} =\frac{2G_N\alpha}{c^3M_{\min}^2}.
$$
Thus $M_{\min}^2\geq2G_N\alpha/(c^3\epsilon_0)$ implies $\epsilon_{\rm qs}\leq\epsilon_0$ for any $\epsilon_0>0$. The finite-interval bound in [[lem-tgr-emitter-quasistatic-bounds]] also applies whenever its stated $\delta\leq1/2$ condition holds.

The Stefan closure is tied to the fixed reference: under $\xi\mapsto b\xi$, power scales as $b^2$, while $T_\xi^4$ scales as $b^4$ and area is unchanged. This is an exact conditional model calculation, not a Hawking-radiation theorem, a time-dependent Einstein solution, a backreaction error estimate, an observed evaporation history, or a universal generalized second law.

## Facts & Assumptions

**Given:** The positive constants, fixed asymptotic reference, zero-mode-excluded photon/ray model, adopted effective area and mass balance, and positive cutoff of [[post-tgr-photon-emitter-and-quasistatic-balance]], together with the explicit $\mathrm{AC}_\omega$ assumption.

[F1] [[post-tgr-photon-emitter-and-quasistatic-balance]]: on the selected Schwarzschild stationary family $r_H=2G_NM/c^2$, $A_H=4\pi r_H^2$, and $\kappa_{\rm geom}=c^2/(4G_NM)$; it adopts $T_\infty=\hbar c\kappa_{\rm geom}/(2\pi k_B)$, $A_{\rm eff}=\eta A_H$, $P_\infty=A_{\rm eff}\sigma T_\infty^4$, $c^2M'=-P_\infty$, and coarse entropy rate $S'_{\rm rad}=(4/3)P_\infty/T_\infty$ until $M_{\min}>0$. These are model assumptions.

[F2] [[thm-tgr-photon-planck-flux]]: under its zero-mode-excluded two-polarization Gibbs trace and isotropic ray model, $F=\sigma T^4$, $F_S=(4/3)F/T$, and $\sigma=\pi^2k_B^4/(60\hbar^3c^2)$; its trace and Fourier/Riemann arguments use $\mathrm{AC}_\omega$.

[F3] [[prop-tgr-ideal-evaporation-accounting]]: for the same $G,c,\hbar,k_B,\eta,M_0,M_{\min}$, fixed reference, and adopted ODE, the exact positive solution, cutoff time, energy export, and coarse entropy formula with $S_B(M)=4\pi k_BG M^2/(\hbar c)+S_0$ hold.

[F4] [[def-tgr-emitter-quasistatic-diagnostic]]: $t_{\rm cross}=r_H/c$ and $\epsilon_{\rm qs}=|M'|t_{\rm cross}/M$, as internal ODE definitions only.

[F5] [[lem-tgr-emitter-quasistatic-bounds]]: the exact $\epsilon_{\rm qs}$ formula, positive-cutoff upper bound, threshold criterion, and finite-interval mass-ratio bound stated above follow from the ODE.

[L1] [[pthm-tgr-area-entropy-calibration]] currently states that on the connected, strictly subextremal, zero-magnetic-flux stationary Kerr–Newman family, conditional on the reversible-heat identification and selected reduced temperature, $S_H=k_Bc^3A_H/(4G_N\hbar)+s_*$. Its explicit Countable Choice premise, reversible-heat adoption and same-generator reduced-temperature identification are retained here. The current reduced-temperature Statement also explicitly carries Countable Choice. This use is only the selected stationary-family interface, not an inference of a dynamical spacetime or microscopic entropy.

[A1] The geometric mass length for the Schwarzschild specialization is $m=G_NM/c^2>0$, $a=q=0$; hence it lies in the strict subextremal family. The model mass schedule is not asserted to solve the Einstein equations.

[A2] [[def-countable-choice]]: $\mathrm{AC}_\omega$ means that every countable family of nonempty sets has a choice function. This is the exact set-theoretic hypothesis of the cited photon-spectrum chain; no full Axiom of Choice is assumed.

## Proof

**Given:** $\mathrm{AC}_\omega$, the model assumptions of [F1], the mathematical flux relation of [F2], the exact ODE result [F3], and the conditional family interface [L1].

1.1 The outgoing one-sided flux in [F2] and the adopted area/temperature in [F1] give $P_\infty=\eta A_H\sigma T_\infty^4$. Substituting $A_H=16\pi G_N^2M^2/c^4$, $T_\infty=\hbar c^3/(8\pi G_NMk_B)$, and $\sigma=\pi^2k_B^4/(60\hbar^3c^2)$ yields $P_\infty=\eta\hbar c^6/(15360\pi G_N^2M^2)$. The adopted balance equation is therefore $M'=-\alpha M^{-2}$ with $\alpha=\eta\hbar c^4/(15360\pi G_N^2)>0$. [given, F1, F2, A2, algebra]

1.2 The hypotheses of [F3] match the fixed-reference area, temperature, outgoing flux, mass-balance law, and strictly positive cutoff in [F1]. Its exact solution gives the displayed $M(t_\infty)$, $\tau$, and energy export. No continuation to $M=0$ is used. [given, F1, F3, A2]

1.3 Put $m=G_NM/c^2$, $a=q=0$. Since $m>0$, this point lies in the strict subextremal domain of [L1]; the selected Schwarzschild horizon area is the same $A_H=16\pi G_N^2M^2/c^4$ used by [F1] and [F3]. Therefore [L1] gives $S_H(M)=k_Bc^3A_H(M)/(4G_N\hbar)+s_*$, while [F3] gives $S_B(M)=k_Bc^3A_H(M)/(4G_N\hbar)+S_0$. Their constant offsets may differ, but subtracting the values at $M_0$ and $M_{\min}$ cancels each offset and gives $S_H(M_0)-S_H(M_{\min})=S_B(M_0)-S_B(M_{\min})>0$, because $M_0>M_{\min}>0$. The $\mathrm{AC}_\omega$ assumption [A2] is carried for the reduced-spectrum input in [L1]. [given, F1, F3, L1, A1, A2, algebra]

1.4 The definition [F4] and ODE of [F3] give $\epsilon_{\rm qs}=|M'|(2G_NM/c^3)/M=2G_N\alpha/(c^3M^2)$. Since $M\geq M_{\min}$, the supremum is the displayed positive-cutoff value; the threshold follows by multiplying by $M_{\min}^2>0$. The exact finite-interval ratio and bound are [F5]. These are internal properties of the stipulated ODE. [F3, F4, F5, A2, algebra]

2.1 By [F3], $S_{\rm rad}(\tau)=(4/3)[S_B(M_0)-S_B(M_{\min})]$. Step 1.3 replaces this difference by $\Delta S_H$. Thus $S_{\rm rad}(\tau)=(4/3)\Delta S_H$, and $S_H(M_{\min})+S_{\rm rad}(\tau)-S_H(M_0)=-(\Delta S_H)+(4/3)\Delta S_H=(1/3)\Delta S_H>0$. This is the stated coarse model entropy accounting only. [F3, step 1.3, A2, algebra]

3.1 Under the rescaling $\xi_b=b\xi$, the postulate's model conventions give $E_b(t_b)=bE_\infty(t_\infty)$, $t_b=t_\infty/b$, and $\kappa_b=b\kappa_{\rm geom}$, with $b>0$ and the same mass history. Define the positive emitted power in the rescaled variables by $P_b:=-dE_b/dt_b$. Differentiating the rescaled energy with respect to the rescaled time and using the stipulated balance equation $dE_\infty/dt_\infty=-P_\infty$ gives $P_b=b^2P_\infty$. The temperature formula in [F1] gives $T_b=\hbar c\kappa_b/(2\pi k_B)=bT_\infty$, so the Stefan expression would instead scale as $A_{\rm eff}\sigma T_b^4=b^4A_{\rm eff}\sigma T_\infty^4$, with unchanged area and coefficient. Since $P_\infty>0$, these scalings agree at the fixed normalization $b=1$ but not for arbitrary $b$; the closure in [F1] is therefore not a reference-independent luminosity law. [F1, algebra] ∎
