---
id: rem-cm-approximation-scope-and-limits
kind: remark
title: "Scope and limits of the oscillator, linearization, averaging and adiabatic items on this page"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [thm-cm-homogeneous-oscillator-solution-classification, prop-cm-oscillator-degenerate-and-repulsive-cases, thm-cm-forced-oscillator-variation-of-constants, thm-cm-forced-oscillator-sinusoidal-response, prop-cm-oscillator-amplitude-maximum, cor-cm-homogeneous-oscillator-decay, cor-cm-forced-modal-oscillator-response, thm-cm-finite-time-linearization-error-bound, thm-cm-averaging-for-fast-periodic-oscillations, thm-cm-adiabatic-invariant-drift-bound]
dependency_roles:
  thm-cm-homogeneous-oscillator-solution-classification: mathematical-premise
  prop-cm-oscillator-degenerate-and-repulsive-cases: mathematical-premise
  thm-cm-forced-oscillator-variation-of-constants: mathematical-premise
  thm-cm-forced-oscillator-sinusoidal-response: mathematical-premise
  prop-cm-oscillator-amplitude-maximum: mathematical-premise
  cor-cm-homogeneous-oscillator-decay: mathematical-premise
  cor-cm-forced-modal-oscillator-response: mathematical-premise
  thm-cm-finite-time-linearization-error-bound: mathematical-premise
  thm-cm-averaging-for-fast-periodic-oscillations: mathematical-premise
  thm-cm-adiabatic-invariant-drift-bound: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (complete 252-page volume), Chapter 5 Sections 5.1 and 5.3 and Chapter 10 Sections 10.2-10.3: the perturbative and averaged character of the oscillator, reduced-equation and adiabatic discussion"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 version), Section 4.6: the author's explicit remark that the intuitive adiabatic argument is approximate and that stricter proofs exist elsewhere"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: n/a
---

## Scope of the approximation items

Every item on this page is mathematics: parameters, forcing functions, initial data and error constants are mathematical objects, and none of the statements asserts a physical law, a unit convention or an empirical fact. The following limits are part of the claims and must be carried by any consumer.

- **Linear oscillator results are exact for the stated model only.** [[thm-cm-homogeneous-oscillator-solution-classification]] and [[prop-cm-oscillator-degenerate-and-repulsive-cases]] classify all solutions of the constant-coefficient model with the stated parameter ranges ($k>0$, resp. $k\le0$) and are exact equivalences, including the free zero mode when $k=0$ and the exponential growth when $k<0$. [[cor-cm-homogeneous-oscillator-decay]] needs $c>0$ and $k>0$; for $c=0$ no decay is claimed. [[thm-cm-forced-oscillator-variation-of-constants]] gives the exact convolution representation for continuous forcing and $k\ge0$; the kernel formula is a formula for that model, not a physical superposition principle. [[thm-cm-forced-oscillator-sinusoidal-response]] separates the steady response from the homogeneous transient; the resonant clause supplies an exact solution of the undamped resonant model, unbounded when $f_0\ne0$ and identically zero when $f_0=0$, and [[prop-cm-oscillator-amplitude-maximum]] locates the unique maximum of the response amplitude for $c>0$ and $f_0\ne0$ (for $c=0$ and $f_0\ne0$ the non-resonant amplitude is unbounded near $\omega_0$; for $f_0=0$ it is zero wherever its formula is defined). [[cor-cm-forced-modal-oscillator-response]] is exact for constant coefficient matrices $M,K$ and continuous forcing; it asserts nothing about nonlinear systems or configuration-dependent $M$.
- **Finite-time linearization is not a stability statement.** [[thm-cm-finite-time-linearization-error-bound]] is conditional on the explicit smallness condition $\delta e^{LT}<r$ and on a quadratic remainder bound on the ball, and concludes only $|z(t)-y(t)|=O(\delta^2)$ on the finite horizon $[0,T]$. It neither asserts long-time agreement of the nonlinear and linear evolutions nor Lyapunov stability of the origin. For a mechanical system with a configuration-dependent kinetic metric, the remainder hypothesis must be verified for the full first-order field (derivatives of $M$ and $M^{-1}$ included), not for the potential alone.
- **Averaging compares two different models.** [[thm-cm-averaging-for-fast-periodic-oscillations]] compares the solutions of $x'=\varepsilon f(t,x)$ and $y'=\varepsilon\bar f(y)$ and gives agreement of order $\varepsilon$ on the horizon $[0,A/\varepsilon]$ under the trapping condition $\varepsilon K<\rho$. The averaged equation is not equivalent to the oscillatory one; a longer horizon requires the trapping and smallness hypotheses to be checked again, and the theorem says nothing about stability or about invariant sets of the exact flow.
- **Adiabatic bounds need the chart, the frequency gap and the trapping.** [[thm-cm-adiabatic-invariant-drift-bound]] is conditional on a $C^2$ parameter-dependent action-angle datum with $|\partial_Ih|\ge\omega_0>0$ on the stated compact sets and on the branch solution staying in them. The existence of such a family for a given mechanical model, uniform in the parameter, is a separate hypothesis; resonances ($\omega=0$), separatrix crossings and action values leaving the chart are excluded, and the conclusion is a bound of order $\varepsilon$ on a finite rescaled-time horizon, not exact conservation of the action.

- **Downstream use.** Physical pages that read these results must adopt their own postulates and interpretations for masses, forces, damping, driving and adiabatic parameter variation, and must re-state the empirical qualifications of any measured input; none of the mathematics above supplies such interpretations.
