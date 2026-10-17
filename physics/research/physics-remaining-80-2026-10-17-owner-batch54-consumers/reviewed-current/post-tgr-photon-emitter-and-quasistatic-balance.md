---
id: post-tgr-photon-emitter-and-quasistatic-balance
kind: postulate
title: Ideal photon reservoir and active-area mass-balance model
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 13
deps:
  - def-countable-choice
  - def-tgr-framework-units
  - pthm-tgr-kn-family-mechanics
  - post-tgr-thermodynamic-horizon-identification
  - thm-tgr-photon-planck-flux
dependency_roles:
  def-countable-choice: mathematical-premise
  def-tgr-framework-units: formulation-prerequisite
  pthm-tgr-kn-family-mechanics: formulation-prerequisite
  post-tgr-thermodynamic-horizon-identification: formulation-prerequisite
  thm-tgr-photon-planck-flux: mathematical-premise
physical_scope: >
  An adopted zero-mode-excluded ideal photon reservoir and isotropic ray model
  attached to the positive-mass Schwarzschild stationary family with one fixed
  asymptotic time and energy normalization. The emitter area is the
  phenomenological far-field value eta A_H, incoming flux is zero, and the
  model stops at a strictly positive mass cutoff. The statement is not a
  time-dependent Einstein solution, a Hawking collapse derivation, a material
  null-horizon emitter, a measured flux, or a generalized second law.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Robert M. Wald, The Thermodynamics of Black Holes, Living Reviews in Relativity 4 (2001), 6"
      url: "https://arxiv.org/pdf/gr-qc/9912119"
      locator: "Complete 46-page review; §2, PDF pp. 6–10, on stationary mechanics and the classical-versus-thermodynamic distinction; §3, PDF pp. 10–16, on the additional quantum field assumptions behind Hawking radiation."
    - title: "Pietro Benetti Genolini, Introduction to black hole thermodynamics, lecture notes for the Roberto Salmeron School in Mathematical Physics (2025), arXiv:2512.24929v1"
      url: "https://arxiv.org/pdf/2512.24929v1"
      locator: "Complete 84-page lecture notes; §1.3, PDF pp. 14–16, and §2.1, PDF pp. 18–20, on the stationary first law, the separate thermodynamic identification, and the area-entropy coefficient."
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333 Statistical Mechanics I, Lecture 20"
      url: "https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/368b2180e6efa1417ab336d79b2df6db_MIT8_333F13_Lec20.pdf"
      locator: "Complete 15-page lecture PDF; photon-gas section, equations VI.49–VI.61 (PDF pp. 12–14; printed pp. 128–131), for two-polarization modes, Bose occupations, Planck energy density and the one-sided c/4 angular flux."
    - title: "University of Mississippi PHY 727 course notes, Lecture 18: The Photon Gas"
      url: "https://www.phy.olemiss.edu/~luca/phys727/Topics/L18_photons.pdf"
      locator: "Complete two-page lecture note; pp. 1–2, for periodic modes, the Gibbs product, continuum Planck energy and entropy, and the explicit warning that wall interactions establish equilibrium."
verification:
  precheck: pass
---

## Postulate

Use SI constants $G_N>0$ in $\mathrm{m^3\,kg^{-1}\,s^{-2}}$, $c>0$ in $\mathrm{m\,s^{-1}}$, $\hbar>0$ in $\mathrm{J\,s}$, and $k_B>0$ in $\mathrm{J\,K^{-1}}$. In [[prop-tgr-ideal-evaporation-accounting]], the mathematical constant $G$ is identified with this same $G_N$.

For each fixed mass $M>0$ in kilograms, take the zero-angular-momentum, zero-charge member of the selected Kerr–Newman stationary family [[pthm-tgr-kn-family-mechanics]], with geometric mass length $m=G_NM/c^2$ in metres. In the Schwarzschild exterior use coordinates $(x^0,r,\vartheta,\varphi)$, $x^0=ct_\infty$ in metres, $r>2m$, and metric
$$
ds^2=-\left(1-\frac{2m}{r}\right)(dx^0)^2+ \left(1-\frac{2m}{r}\right)^{-1}dr^2+r^2d\Omega_2^2,
$$
where $d\Omega_2^2$ is the unit-sphere metric. The asymptotic generator is $\xi=\partial_{x^0}$, with $g(\xi,\xi)\to-1$ at infinity. The selected stationary-family radius, area, and geometric surface gravity are
$$
r_H(M)=2m=\frac{2G_NM}{c^2},\qquad A_H(M)=4\pi r_H(M)^2,\qquad \kappa_{\rm geom}(M)=\frac{1}{4m}=\frac{c^2}{4G_NM}.
$$
Thus $r_H$ is in metres, $A_H$ in $\mathrm{m^2}$, and $\kappa_{\rm geom}$ in $\mathrm{m^{-1}}$, using the length-normalized generator convention of [[def-tgr-framework-units]].

Adopt the selected reduced-model reference temperature from [[post-tgr-thermodynamic-horizon-identification]] on this Schwarzschild subfamily:
$$
T_\infty(M):=T_K=T_{\rm red} =\frac{\hbar c\kappa_{\rm geom}(M)}{2\pi k_B} =\frac{\hbar c^3}{8\pi G_NMk_B}>0.
$$
This is an adopted model identification for one fixed asymptotic reference. It is not a local proper-temperature field and does not assert a general Hawking state. The reversible entropy state $S_H$ is the value of the stationary-family state function on each Schwarzschild member; evaluating that family function along a changing parameter $M(t_\infty)$ is bookkeeping in this model, not a claim that the changing family is an exact spacetime solution.

Adopt the zero-mode-excluded, zero-point-subtracted, two-polarization photon Gibbs model and isotropic freely streaming ray convention of [[thm-tgr-photon-planck-flux]], under $\mathrm{AC}_\omega$ from [[def-countable-choice]]. Its energy density $u$, coarse diagonal-mode entropy density $s$, and one-sided fluxes are those of that theorem. This identification is an ideal reservoir assumption; no photon-wall equilibration theorem or physical preparation is asserted.

Fix $0<\eta\leq1$, a constant dimensionless active-area fraction, an initial mass $M_0>0$, and a positive cutoff $0<M_{\min}<M_0$. Let $M(t_\infty)>0$ be $C^1$ on an interval containing its first cutoff time $\tau$, with $M(0)=M_0$, and let $t_\infty$ be measured in seconds by the fixed asymptotic time parameter. Define $E_\infty(t_\infty)=M(t_\infty)c^2$ in joules and the effective far-field emitting area
$$
A_{\rm eff}(M):=\eta A_H(M).
$$
Adopt zero incoming flux, the power law $P_\infty=A_{\rm eff}\sigma T_\infty^4$ in watts, the balance equation
$$
\frac{dE_\infty}{dt_\infty}=c^2M'(t_\infty)=-P_\infty(t_\infty),
$$
and the coarse exported entropy rate $S_{\rm rad}'=(4/3)P_\infty/T_\infty$, with $S_{\rm rad}(0)=0$. Here $S_{\rm rad}$ is the entropy carried by the ideal Gibbs/ray model, not an outside von Neumann entropy. The effective area is not a material patch of the null horizon and $\eta$ is not a frequency-independent greybody factor applied separately to entropy.

The model holds only for the fixed normalization $\xi$. Under $\xi\mapsto b\xi$, $b>0$, the model conventions scale $E_\xi\mapsto bE_\xi$, $t_\xi\mapsto t_\xi/b$, $\kappa_{\rm geom}\mapsto b\kappa_{\rm geom}$, and leave $A_H$ unchanged. The Stefan closure above is therefore not stipulated as a reference-independent luminosity law. No experiment, coupled backreaction solution, physical extinction event, or universal generalized second law is adopted.
