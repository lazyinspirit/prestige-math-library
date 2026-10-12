---
id: rem-cm04-linear-model-scope
kind: remark
title: "Scope and limits of the one-dimensional conservative and dissipative models: declared class, approximation status, empirical parameters and open extensions"
status: draft
origin: session
domain: physics
dependency_level: 20
deps: [def-cm04-one-dimensional-models-and-equilibria, def-cm04-phase-plane-and-energy-level-sets, post-cm04-harmonic-model, post-cm04-linear-damping-model, post-cm04-sinusoidal-drive-model, pthm-cm04-conservative-motion-and-energy, pthm-cm04-equilibrium-stability-at-a-strict-minimum, pthm-cm04-harmonic-motion, pthm-cm04-damped-motion, pthm-cm04-damped-decay-and-stability, pthm-cm04-resonance-and-boundedness, prop-cm-pendulum-small-angle-linearization-bound]
dependency_roles:
  def-cm04-one-dimensional-models-and-equilibria: formulation-prerequisite
  def-cm04-phase-plane-and-energy-level-sets: formulation-prerequisite
  post-cm04-harmonic-model: physical-assumption
  post-cm04-linear-damping-model: physical-assumption
  post-cm04-sinusoidal-drive-model: physical-assumption
  pthm-cm04-conservative-motion-and-energy: physical-result
  pthm-cm04-equilibrium-stability-at-a-strict-minimum: physical-result
  pthm-cm04-harmonic-motion: physical-result
  pthm-cm04-damped-motion: physical-result
  pthm-cm04-damped-decay-and-stability: physical-result
  pthm-cm04-resonance-and-boundedness: physical-result
  prop-cm-pendulum-small-angle-linearization-bound: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "An audit of the page's conditional content: which statements are declared model assumptions, which are exact conditional deductions of the model, and which are approximation or empirical interfaces; the status of the linear models as idealizations, the finite-time character of the small-angle bound, the phenomenological character of the drag with its neglected fluctuations, the prescribed-drive idealization, and the handling of measured parameters as empirical premises. The remark asserts no new mathematical or physical claim and no measured value."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Sections 3.1-3.3 and 5.1, chapter pages 1-7 of Chapters 3 and 5 (PDF pages 33-39 and 87-93): the effective one-dimensional reduction, the linearization procedure with its local character, the energy diagram, the phenomenological drag with neglected fluctuations, the forced response and the resonance discussion"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2.4, printed page 5 (PDF page 11): the harmonic and damped oscillator examples, with energy conserved in the first case and lost until rest in the second"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: n/a
---

## Scope and limits

- **The one-dimensional class is declared, not derived.** The models of this
  page are restricted model classes of
  [[def-cm04-one-dimensional-models-and-equilibria]]: a scalar coordinate,
  a mass and a scalar force law with the standing regularity. Their relation
  to motions of the three-dimensional force branch along a straight line, or
  to effective one-dimensional reductions of constrained systems such as the
  pendulum, is a modelling identification that a consumer item states and
  uses explicitly; this page contains no three-dimensional reduction
  theorem, and the pendulum example of the companion page declares its
  effective model equation with its source support.

- **Declared assumptions versus deductions.** The harmonic, damped and driven
  models are adopted postulates
  ([[post-cm04-harmonic-model]], [[post-cm04-linear-damping-model]],
  [[post-cm04-sinusoidal-drive-model]]); everything else on the page is a
  conditional deduction from them: existence and uniqueness, energy
  conservation and level-set containment
  ([[pthm-cm04-conservative-motion-and-energy]]), Lyapunov stability at a
  strict minimum ([[pthm-cm04-equilibrium-stability-at-a-strict-minimum]]),
  the sinusoid classification, energy and phase ellipses
  ([[pthm-cm04-harmonic-motion]]), the damping classification and the
  dissipation identity ([[pthm-cm04-damped-motion]]), decay and asymptotic
  stability ([[pthm-cm04-damped-decay-and-stability]]), and the response,
  boundedness and resonance statements
  ([[pthm-cm04-resonance-and-boundedness]]). No deduction here establishes
  that a real system obeys a model.

- **The harmonic model is a local quadratic approximation.** Adopting
  $U(x)=\tfrac12kx^{2}$ reproduces the quadratic term of the potential near
  a strict minimum and the linearized equation about it; the approximation
  is exact only for the declared model. For the pendulum, the difference
  between the nonlinear and the linearized motion is bounded only in the
  finite-time sense of
  [[prop-cm-pendulum-small-angle-linearization-bound]], with the explicit
  small-amplitude and time hypotheses of that statement; no uniform-in-time
  approximation is asserted anywhere on this page.

- **The drag is phenomenological and fluctuation-free.** The linear drag
  model is adopted for a stated viscous regime; its coefficient depends on
  body and medium; the random component of the environment's force is
  neglected, a restriction the recorded source attaches to an energy-scale
  condition. No fluctuation–dissipation relation, no derivation of $c$ and
  no validity outside the linear regime is claimed; regimes of quadratic
  drag or of Coulomb friction are different models outside this page.

- **The drive is prescribed and sinusoidal.** The driven model's force is a
  function of time alone with an idealized sinusoidal waveform; no
  back-reaction of the motion on the drive, no non-sinusoidal waveform and
  no apparatus characterization is part of the model. The boundedness and
  resonance clauses of [[pthm-cm04-resonance-and-boundedness]] are
  statements about this model's motions.

- **Measured parameters are empirical premises.** The values of $m$, $k$,
  $c$, $f_{0}$ and $\Omega$ are model data; when a value is obtained from a
  calibration or an apparatus specification, its uncertainty, the
  calibration method and the operating conditions are premises of any
  comparison with observation, and agreement of a model prediction with
  data is statistical evidence about the combined model and apparatus
  assumptions, never a proof of the model. This page asserts no measured
  value and no empirical agreement.

- **Stability conclusions and their boundaries.** The conservative model has
  a Lyapunov stable rest point at a strict minimum; the strictly damped
  model has a globally asymptotically stable rest point; no conclusion is
  drawn at degenerate critical points, at maxima, or for the undamped driven
  model. In particular the linearized repulsive frequency of a maximum is
  not used to claim nonlinear instability of the model.

- **Open extensions.** Nonlinear oscillators with large amplitude (the exact
  pendulum and its secular drift), parametric resonance, nonlinear damping
  and self-oscillation, dissipative models with fluctuations, and numerical
  integration studies are outside this page's scope and belong to the later
  pages of the track; the recorded sources' treatments of those topics are
  not prerequisites of the claims proved here.

