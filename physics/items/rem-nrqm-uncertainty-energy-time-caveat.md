---
id: rem-nrqm-uncertainty-energy-time-caveat
aliases: [ nrqm-uncertainty-energy-time-caveat ]
kind: remark
domain: physics
title: "Time is not an observable of the framework: the conditional timescale bound"
status: draft
origin: pipeline
dependency_level: 12
deps:
  [
    def-nrqm-autonomous-dynamics-framework-evolution,
    def-nrqm-uncertainty-preparation-spread,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-observable-and-probability,
    pthm-nrqm-autonomous-dynamics-heisenberg-picture,
    pthm-nrqm-uncertainty-robertson-relation,
    thm-nrqm-magnetic-and-detection-graph-domain-ehrenfest-and-timescale
  ]
dependency_roles:
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-uncertainty-preparation-spread: formulation-prerequisite
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  pthm-nrqm-autonomous-dynamics-heisenberg-picture: physical-result
  pthm-nrqm-uncertainty-robertson-relation: physical-result
  thm-nrqm-magnetic-and-detection-graph-domain-ehrenfest-and-timescale: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope and reading remark on energy-time statements in the
  framework: time is a real parameter of the dynamical evolution and not a
  self-adjoint observable, so the Robertson relation does not apply to a pair of
  energy and time; the only relation recorded here is the conditional timescale
  bound of the graph-domain Ehrenfest theorem, under its stated curve, domain
  and normalization hypotheses, with the timescale defined from the mean of a
  chosen observable. No universal time observable, no universal energy-time
  inequality, no linewidth model and no empirical claim is made."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 5
        'Uncertainty Principle and Compatible Observables', Section 3, printed
        pages 6-9: time is a parameter, not an operator; the timescale Delta t_Q
        := Delta Q / |d<Q>/dt| and the inequality Delta H Delta t_Q >= hbar/2
        for time-independent Q"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/005979fa741\
        c3ea2e0430456b70caf93_MIT8_05F13_Chap_05.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', Sections 3.1-3.3, printed pages 18-24: the Heisenberg
        equation of motion and the reading of d<Q>/dt through the commutator
        with the Hamiltonian"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 3.4.1,
        printed pages 86-87 (PDF pages 89-90): the heuristic photon-recoil
        discussion of the uncertainty principle, presented as a heuristic and
        following the exact position-momentum inequality"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: n/a
---

## Why there is no energy-time Robertson pair

**Time is a parameter, not an observable.** The framework's evolution
postulate P4 assigns to an isolated system a self-adjoint energy operator and
the flow $U(t)=\exp(-itH/\hbar)$ with $t$ a real parameter of the curve
([[post-nrqm-framework-autonomous-dynamics]],
[[def-nrqm-autonomous-dynamics-framework-evolution]]). The framework's
assigned sharp observables are self-adjoint operators with spectral
projection-valued measures and outcome laws
([[post-nrqm-framework-observable-and-probability]]); time is not among them:
there is no assigned self-adjoint time operator whose outcome law would enter
the Robertson relation of [[pthm-nrqm-uncertainty-robertson-relation]], and
this page introduces none. Consequently the expression
$\Delta H\,\Delta t$ is not an instance of the Robertson relation, and the
symbol $\Delta t$ has no definition until a timescale constructed from
observables is specified.

## The conditional timescale bound

**What the framework does support.** The graph-domain Ehrenfest theorem
[[thm-nrqm-magnetic-and-detection-graph-domain-ehrenfest-and-timescale]] is a
conditional mathematical statement about a curve
$\psi:I\to H$ that is $C^{1}$ into the graph norm of a self-adjoint $A$, stays
in $D(AK)$ (and in $D(KA)$ where stated), has unit norm and satisfies
$\psi'=-\tfrac{i}{\hbar}K\psi$. Under those hypotheses, with
$f(t):=\langle A\psi(t),\psi(t)\rangle$ and $f'(t_{0})\ne0$, the timescale
$\tau_{A}(t_{0}):=\Delta A(t_{0})/|f'(t_{0})|$ satisfies
$$\Delta K(t_{0})\,\tau_{A}(t_{0})\ge\frac{\hbar}{2}.$$
With $K=H$ the energy and $A$ a bounded observable, the Heisenberg-picture
theorem identifies $f'(t_{0})$ with the derivative of the mean of the
representative observable
([[pthm-nrqm-autonomous-dynamics-heisenberg-picture]]). For a
domain-qualified, possibly unbounded $A$, the graph-domain theorem still gives
the Schroedinger-picture derivative stated above, but no Heisenberg-picture
identification is asserted here; the cited Heisenberg-picture theorem covers
bounded observables only. The spreads
$\Delta A(t_{0})$ and $\Delta K(t_{0})$ are preparation spreads in the sense
of [[def-nrqm-uncertainty-preparation-spread]], and the theorem's clause (d)
records that when $f'(t_{0})=0$ the quotient supplies no timescale at all.

**What is not claimed.** The timescale $\tau_{A}$ depends on the chosen
observable $A$ and on the state: different choices give different numbers, and
no universal "lifetime" or "duration" of the system is defined. No time
operator, no energy-time Robertson inequality, no claim that an energy
uncertainty is a linewidth and no relation such as $\gamma_{E}\approx\hbar\Gamma$
is asserted by P1-P6; such statements require additional model assumptions
(an apparatus or clock model, a decay model or an analytic continuation) that
are outside this page. The heuristic accounts of measurement disturbance in
the literature are not identities of the framework and are not used as
premises here.

## Remarks

- **Relation to the preparation-spread results.** The timescale bound is a
  Robertson-type estimate applied to the pair (energy, chosen observable)
  along a curve; it does not weaken or strengthen the preparation-spread
  relation of [[pthm-nrqm-uncertainty-robertson-relation]], which concerns a
  single preparation and two observables.
- **No empirical content.** No measured lifetime, linewidth or energy
  uncertainty is recorded here, and no comparison with data is attempted.
