---
id: rem-nrqm-potentials-scope-and-idealizations
aliases: [ nrqm-potentials-scope-and-idealizations ]
kind: remark
domain: physics
title: "What the one-dimensional potentials page establishes, assumes and defers"
status: draft
origin: session
dependency_level: 13
deps:
  [
    lem-nrqm-potentials-one-dimensional-flux-identity,
    lem-nrqm-potentials-free-operator-differential-identification,
    lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators,
    def-nrqm-potentials-one-dimensional-line-model,
    def-nrqm-potentials-interval-and-delta-models,
    pthm-nrqm-potentials-line-model-energy-and-stationary-states,
    pthm-nrqm-potentials-interval-spectra-completeness-and-nodes,
    pthm-nrqm-potentials-finite-well-bound-states,
    pthm-nrqm-potentials-delta-point-interaction-bound-state,
    pthm-nrqm-potentials-barrier-flux-and-transmission
  ]
dependency_roles:
  lem-nrqm-potentials-one-dimensional-flux-identity: mathematical-premise
  lem-nrqm-potentials-free-operator-differential-identification: mathematical-premise
  lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators: mathematical-premise
  def-nrqm-potentials-one-dimensional-line-model: formulation-prerequisite
  def-nrqm-potentials-interval-and-delta-models: formulation-prerequisite
  pthm-nrqm-potentials-line-model-energy-and-stationary-states: physical-result
  pthm-nrqm-potentials-interval-spectra-completeness-and-nodes: physical-result
  pthm-nrqm-potentials-finite-well-bound-states: physical-result
  pthm-nrqm-potentials-delta-point-interaction-bound-state: physical-result
  pthm-nrqm-potentials-barrier-flux-and-transmission: physical-result
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Scope of the one-dimensional potentials page: the declared
  effective line model, its operator construction, the interval and zero-range
  models, the finite-well and barrier results, the flux reading and the
  empirical status of the page. The remark asserts no new physical result,
  records no measurement, and makes no claim about nature."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Chapter 2,
        printed pages 19-63 (PDF pages 22-66): one-dimensional potentials, bound
        states, scattering and tunnelling"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Chapter 5,
        printed pages 75-103 (PDF pages 83-111): motion in step potentials,
        wells, barriers and scattering"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: n/a
---

## Scope of the page

**What is established.** The page fixes a declared effective one-dimensional
model of a spinless massive particle
([[def-nrqm-potentials-one-dimensional-line-model]]) and proves, as
conditional consequences of P1, P2, P4, P5 and the cited mathematics, the
following statements. The mathematical lemmas
[[lem-nrqm-potentials-free-operator-differential-identification]] and
[[lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators]] identify the
free operator with the weak second-derivative operator and transfer
self-adjointness, resolvents, spectra and eigenfamilies along positive
scaling; [[lem-nrqm-potentials-one-dimensional-flux-identity]] proves the
one-dimensional continuity identity and the constancy of the current of a
stationary solution.
[[pthm-nrqm-potentials-line-model-energy-and-stationary-states]] establishes
that the declared energy operator of the line model with a real bounded
measurable potential is an assigned sharp observable, generates the unitary
flow of the model, and that its stationary preparations are exactly the
eigenrays with point-mass energy law.
[[pthm-nrqm-potentials-interval-spectra-completeness-and-nodes]] establishes,
for the declared Dirichlet and separated Robin interval models with continuous
real potentials, self-adjointness with compact resolvent, complete
orthonormal eigenbases, discreteness and simplicity of the spectra, the
min-max comparison of the Dirichlet energies with the free box energies and
the nodal counts, together with the Robin eigenvalue condition.
[[pthm-nrqm-potentials-finite-well-bound-states]] gives the exact root
conditions, simplicity, parity and count of the bound states of the finite
square well, and
[[pthm-nrqm-potentials-delta-point-interaction-bound-state]] gives the
self-adjointness of the declared zero-range interface operator and its unique
bound state for attractive coupling with the exact energy
$-mg^{2}/(2\hbar^{2})$. [[pthm-nrqm-potentials-barrier-flux-and-transmission]]
gives the unique scattering solution of the rectangular barrier, its conserved
current, the exact coefficients $T$ and $R$, the flux balance $T+R=1$, the
reading of $T$ and $R$ as fractions of the reference current, and the
thick-barrier error bound.

**What is assumed, not derived.** The page's model data are declared, not
derived: the reduction of the three-dimensional massive-particle model to one
spatial dimension, the position and momentum assignments of the line model,
the Dirichlet and Robin boundary conditions with their boundary parameters,
the zero-range interface condition with its coupling, and the scattering
reading of the current ratios. Each is an assumption of the pair in the sense
of the preparation and apparatus discipline P7; an identification of a
concrete material system with any of them is a tested identification with
uncertainty and is not produced by these items. The operators rest on the
mathematical supplier [[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
and on the interval and contact mathematics of
[[def-nrqm-intervals-hilbert-sobolev-spaces]] and the items of the intervals
pair, whose Axiom of Choice and Countable Choice hypotheses are inherited by
every consumer above.

**What is not addressed.** No wave-packet or time-dependent scattering limit
is computed; no arrival-time, detector-response, efficiency or background
model is declared; no count, rate, cross-section or measured spectrum appears.
The scattering solution of the barrier item is not an element of the model
state space, so no Born probability is read from it. Potentials with
unbounded or singular growth, the harmonic oscillator, the Coulomb problem,
higher-dimensional scattering, resonant and above-barrier behaviour, and the
Airy/WKB connection problem for smooth barriers belong to other pages of the
category and are not consumed or anticipated here. The example page of the
pair carries exact finite checks of the barrier and well formulas; those are
model computations, not measurements.

**Evidence status.** The page is a conditional model development. It contains
no experiment, no reported observation, no uncertainty statement and no
statistical inference; agreement of any of its formulas with data would be
evidence about the combined model, apparatus and analysis assumptions and
would not prove the model.
