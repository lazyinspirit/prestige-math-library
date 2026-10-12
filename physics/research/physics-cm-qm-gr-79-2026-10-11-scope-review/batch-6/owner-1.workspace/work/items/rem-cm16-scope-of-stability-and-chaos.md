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

**1. Model deductions only.** Every theorem of the page is a conditional
deduction about the declared model class of
[[def-cm16-flow-equilibria-and-invariant-sets]]: a force model with stated
masses, configuration domain, regularity and — where relevant — periodicity.
The conclusions about equilibria, tori, horseshoes and recurrence are
properties of those models. None of them asserts that a physical system is
exactly such a model, and none carries a measured value: the constants
appearing in the statements (couplings, energy scales, pulse parameters, the
smallness thresholds $c$ and $\delta_0$) are model data, and no measurement,
calibration, sampling or uncertainty budget occurs anywhere on the page.

**2. Stability is not attraction, and one notion is not another.**
[[pthm-cm16-energy-stability-and-instability]] establishes Lyapunov stability
of a strict minimum, linear instability from a negative Hessian eigenvalue,
nonlinear instability from a strictly concave potential, and the absence of
asymptotic stability under exact energy conservation. The degenerate case (a
zero Hessian eigenvalue) and the mixed saddle case (a negative eigenvalue
together with oscillatory directions) are deliberately left open: only the
linear statement is made there. The harmonic-oscillator counterexample shows
that the page's stability vocabulary cannot be collapsed.

**3. Linearisation is finite-time and local.**
[[pthm-cm16-variational-equation-and-linearization]] and
[[pthm-cm16-hyperbolic-linearization]] are finite-time statements on declared
balls with declared quantitative bounds. A finite-time growth rate computed
from them is a number attached to a state, a tangent vector and an interval
([[def-cm16-finite-time-growth-rates]]); a positive rate is not a definition
of chaos, and a positive real eigenvalue of a linearisation proves instability
of the equilibrium, not chaos of the flow. Eigenvalues and rates are
chart-dependent unless the state coordinates are scaled with fixed factors.

**4. Chaos is a proved property of a stated map and set.**
[[pthm-cm16-separatrix-splitting-and-horseshoe]] proves the four properties of
[[def-cm16-chaos-list-for-model-maps]] for the stroboscopic map of one smooth
periodically pulsed oscillator, restricted to an explicitly constructed
compact invariant set, by transferring the supplied conjugacy to the shift
through a linear scaling. It is existence for that model under its small-pulse
condition; it is not a claim about all driven oscillators, about every
separatrix, about Hénon-Heiles energies or about any numerical portrait.
Quantified numerical trajectories and plotted sections are computations under
chosen parameters; they are neither experiments nor proofs. The page contains
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
flow-invariant Borel set of finite phase volume; its conclusion is
almost-everywhere with respect to phase volume and gives no return time, no
rate and no individual-state statement. Free and unconfined models fail the
hypothesis, and the theorem says nothing about them or about thermodynamic
irreversibility.

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
