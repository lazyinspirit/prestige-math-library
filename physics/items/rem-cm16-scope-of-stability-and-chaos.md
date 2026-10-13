---
id: rem-cm16-scope-of-stability-and-chaos
kind: remark
title: "Scope of the stability, perturbation and chaos statements: conditional model deductions, the limits of finite-time and numerical evidence, and the empirical qualifications"
status: draft
origin: session
domain: physics
dependency_level: 24
deps: [def-cm16-flow-equilibria-and-invariant-sets,
       def-cm16-stability-and-hyperbolicity-concepts,
       def-cm16-finite-time-growth-rates,
       def-cm16-stroboscopic-and-poincare-maps,
       def-cm16-chaos-list-for-model-maps,
       pthm-cm16-energy-stability-and-instability,
       pthm-cm16-variational-equation-and-linearization,
       pthm-cm16-hyperbolic-linearization,
       pthm-cm16-two-rotor-kam,
       pthm-cm16-separatrix-splitting-and-horseshoe,
       pthm-cm16-recurrence-for-finite-volume-models,
       pthm-cm13-liouville]
dependency_roles:
  def-cm16-flow-equilibria-and-invariant-sets: formulation-prerequisite
  def-cm16-stability-and-hyperbolicity-concepts: formulation-prerequisite
  def-cm16-finite-time-growth-rates: formulation-prerequisite
  def-cm16-stroboscopic-and-poincare-maps: formulation-prerequisite
  def-cm16-chaos-list-for-model-maps: formulation-prerequisite
  pthm-cm16-energy-stability-and-instability: physical-result
  pthm-cm16-variational-equation-and-linearization: physical-result
  pthm-cm16-hyperbolic-linearization: physical-result
  pthm-cm16-two-rotor-kam: physical-result
  pthm-cm16-separatrix-splitting-and-horseshoe: physical-result
  pthm-cm16-recurrence-for-finite-volume-models: physical-result
  pthm-cm13-liouville: physical-result
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The scope of the page's conditional model deductions: what each stability, linearisation, hyperbolicity, KAM, horseshoe and recurrence statement assumes, what it concludes, which chart and choice conventions it uses, and why numerical trajectories, plotted sections and finite-time growth rates are neither proofs of chaos nor experimental evidence. The remark makes no new mathematical or empirical claim."
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), Chapter 9 'Chaos': the informal chaos discussion whose claims are here restricted to the proved model statements"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309, Fall 2014), Chapters 5 and 7: perturbation and chaos discussions with the corrected hypotheses and the warning that numerical divergence is not a proof"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "Gerald Sussman and Jack Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed., §4.3, §6.3, §7.2 and §7.4: tangle narratives, formal-series qualifications, truncation warnings and the resonance-overlap heuristic"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "David Tong, Classical Dynamics (University of Cambridge), §§4.2.3, 4.5-4.6 pp. 92-118: recurrence, integrability and adiabatic-invariance scope warnings"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
---

## Scope of the page

This remark records what the page's statements do and do not establish. It adds
no new claim of its own.

**1. Model deductions only.** The force-model results of the page are
conditional deductions about the framework class of
[[def-cm16-flow-equilibria-and-invariant-sets]]: a force model with stated
masses, configuration domain, regularity and — where relevant — a
time-shift-invariant periodic restriction. The two-rotor KAM result instead
adopts a reduced angle-action Hamiltonian on a torus phase domain. The pulsed
horseshoe result is a full one-label force model on $\mathbb R^3$; its axial
pulse dynamics is embedded by explicitly adopted transverse inverted-oscillator
forces. The conclusions about equilibria, tori, horseshoes and recurrence are
properties of these declared models. Continuous-time periodic-orbit,
limit-cycle and homoclinic vocabulary is used for autonomous models; periodic
motions of a driven model are treated by its stroboscopic map. The energy and
variational theorems, the
pendulum check and the stable-without-attraction harmonic counterexample use
declared mechanical chart data: an open $\Omega\subseteq\mathbb R^n$, a $C^2$
positive-definite kinetic metric $M$, and a $C^2$ potential $U$. The growth and
isotropic-oscillator checks are declared force models of the framework.
None asserts that nature realizes the
model, and none uses a measured value: couplings, energy scales, pulse
parameters and the thresholds $c$ and $\delta_0$ are model data; the page has
no measurement, calibration, sampling or uncertainty budget.

**2. Stability is not attraction, and one notion is not another.**
[[pthm-cm16-energy-stability-and-instability]] establishes Lyapunov stability
of a strict minimum, linear instability from a negative Hessian eigenvalue,
nonlinear instability from a negative definite potential Hessian, and the absence of
asymptotic stability under exact energy conservation. A zero Hessian eigenvalue alone gives no stability conclusion; strict
minima remain covered even when their Hessians are degenerate. For a mixed
saddle (a negative eigenvalue together with oscillatory directions), only the
linear-instability statement is made. The harmonic-oscillator counterexample shows
that the page's stability vocabulary cannot be collapsed.

**3. Linearisation has separate local and finite-time conclusions.**
[[pthm-cm16-variational-equation-and-linearization]] gives finite-time flow
derivative, Lipschitz and linear-approximation estimates under its declared
ball and remainder hypotheses. By contrast,
[[pthm-cm16-hyperbolic-linearization]] gives all-time exponential estimates for
the linearized flow and, under the hyperbolic spectral hypotheses, local
exponential asymptotic stability or nonlinear instability; it gives no centre
case or global conclusion. A finite-time growth rate is attached to a state,
tangent vector and interval ([[def-cm16-finite-time-growth-rates]]); positive
growth is not a definition of chaos. At an equilibrium where the field is $C^1$ nearby, smooth chart changes
conjugate derivative matrices and preserve their spectrum, while norms and
finite-time growth bounds can depend on the chart.

**4. Chaos is a proved property of a stated map and set.**
[[pthm-cm16-separatrix-splitting-and-horseshoe]] proves the four properties of
[[def-cm16-chaos-list-for-model-maps]] for the full model's stroboscopic map on
an explicitly constructed compact invariant set contained in its invariant
axis, by transferring the supplied shift conjugacy. Its full six-dimensional
fixed points are hyperbolic because the two transverse inverted-oscillator
modes have multipliers off the unit circle; the coded homoclinic intersections
are transverse in the full phase space by the product construction. This is
existence for the declared pulsed model under its small-pulse condition, not a
claim about all driven oscillators, every separatrix, Hénon-Heiles energies or
any numerical portrait. Quantified trajectories and plotted sections are
computations under chosen parameters, not experiments or proofs. The page has
no experiment item and reports no observed data.

**5. KAM persistence is a positive-measure conditional statement.**
[[pthm-cm16-two-rotor-kam]] gives, for the adopted two-rotor potential and
sufficiently small coupling, a positive-measure set of Diophantine frequencies
whose tori persist, with quasi-periodic motions on them and explicit unit
restoration. It says nothing about the complement of that set, about resonant
gaps, about all initial data, about chaotic diffusion, or about a laboratory
rotor. The threshold $\varepsilon\le c\alpha^2$ is a model-data condition; the
constant $c$ is not computed numerically and no empirical smallness is
asserted.

**6. Recurrence needs finite volume and invariance.**
[[pthm-cm16-recurrence-for-finite-volume-models]] assumes a bounded
flow-invariant Borel set with compact closure in the potential phase domain
and a flow complete on that set. Its proof extends the suppliers' local
phase-volume preservation by a finite cover and time subdivision. The
conclusion is almost-everywhere with respect to phase volume and gives no
return time, rate or individual-state statement. Free and unconfined models
fail the finite-volume hypothesis, and the theorem says nothing about them or
thermodynamic irreversibility.

**7. Choice conventions.** The horseshoe theorem assumes the Axioms of
Countable and Dependent Choice, inherited from its supplier, and the
recurrence theorem assumes Countable Choice, inherited from
[[pthm-cm13-liouville]]. The KAM theorem also assumes Countable Choice, inherited from its analytic and measure-theoretic suppliers. The other statements of the page are choice-free:
their suppliers use finite-dimensional linear algebra, explicit
constructions and finite estimates. No item reaches a recorded or unproved
set-theoretic item.

**8. Relation to the sources.** The four complete works consulted for this
page (Tong, Likharev, SICM and Stewart) supply the model formulations,
worked examples and caveats; their informal stability and chaos discussions
are replaced by the exact supplier statements, and their numerical portraits
are treated as illustrations, never as evidence. The empirical status of any
model on this page would require a separately specified apparatus, sampling
model and statistical analysis, which this page does not provide.
