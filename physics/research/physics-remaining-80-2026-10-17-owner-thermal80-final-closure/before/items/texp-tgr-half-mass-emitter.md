---
id: texp-tgr-half-mass-emitter
kind: thought-experiment
title: Ideal active-area half-mass cutoff interval
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 15
deps:
  - def-countable-choice
  - pthm-tgr-ideal-photon-emission
dependency_roles:
  def-countable-choice: mathematical-premise
  pthm-tgr-ideal-photon-emission: physical-result
physical_scope: >
  Conditional fixed-asymptotic-reference ideal emitter calculation with
  eta=1 and a positive half-mass cutoff. The effective area is not a material
  null-horizon surface, the exported entropy is coarse Gibbs/ray entropy, and
  the example is not an observation or a duration prediction for an actual
  evaporating black hole.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Robert M. Wald, The Thermodynamics of Black Holes, Living Reviews in Relativity 4 (2001), 6"
      url: "https://arxiv.org/pdf/gr-qc/9912119"
      locator: "Complete 46-page review; §2, PDF pp. 6–10, and §3, PDF pp. 10–16, for stationary mechanics and quantum-field scope. The half-mass values below are derived from the local conditional model."
    - title: "Pietro Benetti Genolini, Introduction to black hole thermodynamics, lecture notes for the Roberto Salmeron School in Mathematical Physics (2025), arXiv:2512.24929v1"
      url: "https://arxiv.org/pdf/2512.24929v1"
      locator: "Complete 84-page lecture notes; §1.3, PDF pp. 14–16, and §2.1, PDF pp. 18–20, for the distinction between stationary-family entropy and dynamical claims."
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333 Statistical Mechanics I, Lecture 20"
      url: "https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/368b2180e6efa1417ab336d79b2df6db_MIT8_333F13_Lec20.pdf"
      locator: "Complete 15-page lecture PDF; photon-gas section, equations VI.49–VI.61 (PDF pp. 12–14; printed pp. 128–131), for Planck energy and coarse photon-gas entropy context."
    - title: "University of Mississippi PHY 727 course notes, Lecture 18: The Photon Gas"
      url: "https://www.phy.olemiss.edu/~luca/phys727/Topics/L18_photons.pdf"
      locator: "Complete two-page lecture note; pp. 1–2, for the photon spectrum and energy/entropy-density context."
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$ and the conditional model conclusion of [[pthm-tgr-ideal-photon-emission]]. Choose $\eta=1$ and $M_{\min}=M_0/2$ for $M_0>0$, with $G_N,c,\hbar,k_B$ as in that theorem. Define the model's algebraic zero-mass time scale
$$
t_*:=\frac{M_0^3}{3\alpha} =\frac{5120\pi G_N^2M_0^3}{\hbar c^4}.
$$
The stipulated model stops earlier, at
$$
\tau=\frac78t_*=\frac{4480\pi G_N^2M_0^3}{\hbar c^4},
$$
when its mass parameter first reaches $M_0/2>0$. It exports energy $c^2M_0/2$ joules. Its stationary-family entropy drop, coarse photon entropy export, and total coarse entropy gain are respectively
$$
\Delta S_H=\frac{3\pi k_BG_NM_0^2}{\hbar c},\qquad S_{\rm rad}(\tau)=\frac{4\pi k_BG_NM_0^2}{\hbar c},\qquad \Delta(S_H+S_{\rm rad})=\frac{\pi k_BG_NM_0^2}{\hbar c}.
$$
For any $\epsilon_0>0$, if $M_0^2\geq\hbar c/(1920\pi G_N\epsilon_0)$, then the model's maximum diagnostic satisfies $\epsilon_{\rm qs}\leq\epsilon_0$ before the cutoff. This is an exact ideal-model calculation, not a measured evaporation time or an error estimate for a gravitational backreaction solution.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the conditional model conclusion of [[pthm-tgr-ideal-photon-emission]], $M_0>0$, and the choices $\eta=1$, $M_{\min}=M_0/2$.

[F1] [[pthm-tgr-ideal-photon-emission]]: for the fixed-reference model, $M(t_\infty)=(M_0^3-3\alpha t_\infty)^{1/3}$, $\tau=(M_0^3-M_{\min}^3)/(3\alpha)$, energy export is $c^2(M_0-M_{\min})$, $S_{\rm rad}=(4/3)\Delta S_H$, and $\epsilon_{\rm qs}=2G_N\alpha/(c^3M^2)$. These are conditional on the theorem's stated model and $\mathrm{AC}_\omega$.

[A1] The thought experiment selects $\eta=1$ and $M_{\min}=M_0/2$; $M_0$ remains an arbitrary positive mass parameter, not a measured value.

[A2] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is the exact countable-choice principle; no full Axiom of Choice is used.

## Proof

**Given:** The model formulas of [F1] and the exact parameter choices [A1].

1.1 With $\eta=1$, [F1] gives $\alpha=\hbar c^4/(15360\pi G_N^2)$. Hence $t_*=M_0^3/(3\alpha)=5120\pi G_N^2M_0^3/(\hbar c^4)$, and
$$
\tau=\frac{M_0^3-(M_0/2)^3}{3\alpha} =\left(1-\frac18\right)t_*=\frac78t_*.
$$
The cutoff remains positive, $M(\tau)=M_0/2$, so the model does not reach its algebraic zero-mass time. [given, F1, A1, A2, algebra]

1.2 The energy export in [F1] is $c^2(M_0-M_{\min})$. Substituting [A1] gives $c^2M_0/2$ joules. [F1, A1, A2, algebra]

1.3 By [F1], $S_H(M)=4\pi k_BG_NM^2/(\hbar c)+s_*$ on the selected branch, with an unfixed constant $s_*$. Subtracting its values at $M_0$ and $M_0/2$ cancels $s_*$ and gives $\Delta S_H=4\pi k_BG_N(3M_0^2/4)/(\hbar c)=3\pi k_BG_NM_0^2/(\hbar c)$. The entropy export is $4\Delta S_H/3=4\pi k_BG_NM_0^2/(\hbar c)$, and the total gain is $\Delta S_H/3=\pi k_BG_NM_0^2/(\hbar c)$. [given, F1, A1, A2, algebra]

2.1 The maximum diagnostic occurs at $M=M_{\min}=M_0/2$, so [F1] gives
$$
\epsilon_{\rm qs,max}=\frac{2G_N\alpha}{c^3(M_0/2)^2} =\frac{8G_N\alpha}{c^3M_0^2} =\frac{\hbar c}{1920\pi G_NM_0^2}.
$$
The displayed lower bound on $M_0^2$ is equivalent, after multiplication by the positive $1920\pi G_NM_0^2\epsilon_0/(\hbar c)$, to $\epsilon_{\rm qs,max}\leq\epsilon_0$. This remains an internal diagnostic for the stipulated ODE, not a comparison with a coupled spacetime solution. [F1, A1, A2, algebra] ∎
