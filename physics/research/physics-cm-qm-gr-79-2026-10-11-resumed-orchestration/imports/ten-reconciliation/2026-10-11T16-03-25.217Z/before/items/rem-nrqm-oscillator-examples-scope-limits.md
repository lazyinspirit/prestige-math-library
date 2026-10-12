---
id: rem-nrqm-oscillator-examples-scope-limits
aliases: [nrqm-oscillator-examples-scope-limits]
kind: remark
domain: physics
title: "What the worked oscillator examples establish"
status: draft
origin: pipeline
dependency_level: 14
deps: [def-nrqm-oscillator-framework-quadratic-potential-model, def-nrqm-oscillator-coherent-states, pthm-nrqm-oscillator-energy-spectrum-and-completeness, pthm-nrqm-oscillator-coherent-state-fluctuations, pthm-nrqm-oscillator-coherent-state-evolution, ex-nrqm-oscillator-ground-state-gaussian, ex-nrqm-oscillator-ladder-norms, ex-nrqm-oscillator-coherent-trajectory, def-nrqm-framework-quantities-and-units]
dependency_roles:
  def-nrqm-oscillator-framework-quadratic-potential-model: formulation-prerequisite
  def-nrqm-oscillator-coherent-states: formulation-prerequisite
  pthm-nrqm-oscillator-energy-spectrum-and-completeness: physical-result
  pthm-nrqm-oscillator-coherent-state-fluctuations: physical-result
  pthm-nrqm-oscillator-coherent-state-evolution: physical-result
  ex-nrqm-oscillator-ground-state-gaussian: formulation-prerequisite
  ex-nrqm-oscillator-ladder-norms: formulation-prerequisite
  ex-nrqm-oscillator-coherent-trajectory: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The scope reading of the worked examples of the oscillator companion page: the ground-state Gaussian with its position and momentum laws, the low-level ladder norms and eigenstate excitation laws, and the coherent-state trajectory with its period, phase-space ellipse and constant spreads; together with the limits of what those conditional computations establish."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', §§1, 4 printed pages 1-9 and 26-41: the worked oscillator spectrum, ladder relations and coherent-state computations"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §§3.1-3.2 printed pages 37-44 (PDF pages 45-52): the worked ground state, its dispersions and the classical-frequency motion of the mean position"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## What the worked items establish

**Ground state.** [[ex-nrqm-oscillator-ground-state-gaussian]] fixes the explicit Gaussian representative $\psi_0(x)=\ell^{-1/2}\pi^{-1/4}e^{-x^{2}/(2\ell^{2})}$ of the ground vector, its unit norm, the eigenvalue equation $H_1\psi_0=\frac{\hbar\omega}{2}\psi_0$, the position law with density $\ell^{-1}\pi^{-1/2}e^{-x^{2}/\ell^{2}}$ and variance $\ell^{2}/2$, the momentum law with density $\frac{\ell}{\hbar\sqrt\pi}e^{-\ell^{2}p^{2}/\hbar^{2}}$ and variance $\hbar^{2}/(2\ell^{2})$, and the saturation $\Delta_{\psi_0}Q\,\Delta_{\psi_0}P=\hbar/2$ of the model's position-momentum relation.

**Ladder and excitation structure.** [[ex-nrqm-oscillator-ladder-norms]] computes the first ladder images and their norms, the ladder matrix elements $\langle\psi_m,a_\psi\psi_n\rangle=\sqrt n\,\delta_{m,n-1}$ and $\langle\psi_m,a^\dagger_\psi\psi_n\rangle=\sqrt{n+1}\,\delta_{m,n+1}$, and the excitation and energy laws $\mu^{N_\psi}_{\psi_n}(\{n\})=1$, $\mu^{H_1}_{\psi_n}(\{E_n\})=1$ of the eigenstate preparations, with the warning that $a_\psi$ and $a^\dagger_\psi$ are not assigned sharp observables.

**Coherent motion.** [[ex-nrqm-oscillator-coherent-trajectory]] shows that a nonzero-label coherent preparation is periodic with period $2\pi/\omega$, that its mean pair traces the invariant phase-space ellipse $\frac{x^{2}}{2\ell^{2}}+\frac{\ell^{2}p^{2}}{2\hbar^{2}}=|z|^{2}$ with the quarter-period values $x(\frac{\pi}{2\omega})=\frac{p_0}{m\omega}$, $p(\frac{\pi}{2\omega})=-m\omega x_0$, and that the position and momentum spreads and their product $\hbar/2$ are constant along the motion.

## What they do not establish

Every computation above is conditional on the adopted oscillator model of [[def-nrqm-oscillator-framework-quadratic-potential-model]] and on the postulates P1, P2, P4 and P5 read through it; none of them reports a measurement. In particular: no numerical value of $m$, $\omega$ or $\hbar$ is extracted; no laboratory state is identified with $\psi_0$, with an eigenstate $\psi_n$ or with a coherent state; the mean functions $x(t),p(t)$ are preparation means of the model's observables under the evolving preparation and are not the coordinates of a measured trajectory; and the periodicity of clause (a) of the coherent-trajectory example is a statement about the pure preparation (a ray), not about a measured signal. The harmonic approximation's range, anharmonic corrections, damping, driving, time-dependent parameters and coupling to electromagnetic fields or radiation are outside the examples, as is the displacement-operator presentation of the coherent family. The one-dimensional non-normalizable formal solution of the ground-state equation is authored on the mathematical companion `qm-math-oscillator-examples` and is linked there, not duplicated here.
