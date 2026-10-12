---
id: rem-nrqm-kinematics-scope-and-empirical-status
aliases: [ nrqm-kinematics-scope-and-empirical-status ]
kind: remark
domain: physics
title: "Scope and empirical status of the massive-particle kinematics items"
status: draft
origin: session
dependency_level: 12
deps:
  [
    def-nrqm-framework-quantities-and-units,
    def-nrqm-kinematics-framework-massive-spin-s-model,
    def-nrqm-observables-framework-observable-and-outcome-law,
    lem-nrqm-kinematics-ccr-and-internal-factor-commutation,
    lem-nrqm-kinematics-componentwise-position-and-momentum,
    lem-nrqm-kinematics-momentum-representation,
    post-nrqm-framework-identical-particles-and-spin,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    pthm-nrqm-kinematics-boost-covariance,
    pthm-nrqm-kinematics-spin-s-outcome-laws,
    pthm-nrqm-kinematics-translation-covariance
  ]
dependency_roles:
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  lem-nrqm-kinematics-ccr-and-internal-factor-commutation: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-kinematics-momentum-representation: mathematical-premise
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  pthm-nrqm-kinematics-boost-covariance: physical-result
  pthm-nrqm-kinematics-spin-s-outcome-laws: physical-result
  pthm-nrqm-kinematics-translation-covariance: physical-result
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The reading of the kinematics pair as a whole: its model
  assumptions, the empirical status of its mass and spin parameters, the
  excluded realizations and the limits of its predictions. The remark asserts no
  new dynamics or mathematics and records no measurement."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections 1.1-1.2
        and 3.2.3, printed pages 3-14 and 75-76 (PDF pages 6-17 and 78-79): the
        wave function, its normalization and the momentum representation"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 2.3,
        printed pages 24-32 (PDF pages 32-40): the position and momentum
        operators and momentum-space amplitudes"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "C. Torre, Galilean Relativity and the Path Integral Formalism in Quantum
        Mechanics, arXiv:2306.13487 (2023), Sections 4 and 6, pages 12-13 and
        17: the Galilean boost law (4.23) with its phase factor, the passive
        frame reading and the projective composition of boosts"
      url: "https://arxiv.org/pdf/2306.13487"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 1 'Wave
        Mechanics', Section 6, printed pages 22-25 (PDF pages 22-25): the
        position and momentum representations"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/61bc31b8d8b\
        f0680c322733910a71aa0_MIT8_05F13_Chap_01.pdf"
verification:
  precheck: n/a
---
## What the pair establishes

The items of this pair are conditional consequences of the framework's
postulates and of the cited mathematics. [[def-nrqm-kinematics-framework-massive-spin-s-model]]
founds the spin-$s$ model on the state space $H_{s}=L^{2}(\mathbb R^{3};\mathbb C^{2s+1})$
with the componentwise position and momentum operators $Q_{j},P_{k}$;
[[lem-nrqm-kinematics-componentwise-position-and-momentum]] proves that these
operators are self-adjoint with their maximal domains and provides the Fourier
representation and the translation identities;
[[lem-nrqm-kinematics-ccr-and-internal-factor-commutation]] proves the
canonical commutation relations on the Schwartz core, identifies the spectral
measures and proves that the internal factor commutes with the spatial
measures; [[lem-nrqm-kinematics-momentum-representation]] constructs the
momentum representation;
[[pthm-nrqm-kinematics-spin-s-outcome-laws]] derives the position and momentum
outcome laws of the spin-$s$ model, including the Born density
$\|\psi(x)\|^{2}_{\mathbb C^{2s+1}}$ and the momentum density
$\|\psi_{p}(p)\|^{2}$;
[[pthm-nrqm-kinematics-translation-covariance]] and
[[pthm-nrqm-kinematics-boost-covariance]] establish the covariance of these
laws and of the bounded-potential dynamics under the Galilean translations and
boosts of the model's frame class. All of this is conditional on P1, P2, P4,
P5 and P6 and on the cited mathematical suppliers; none of it is a statement
that any physical system is exactly described by the model.

## Empirical status of the parameters

The mass parameter $m>0$ and the spin label $s$ are model parameters: within
the framework they are declared values, and the identical-particle and spin
postulate assigns to a species its mass, spin, statistics and couplings as
empirical model parameters with uncertainty. This pair derives no value of
$m$ or $s$, records no measurement and asserts no species identification; the
units in which $m$, $\hbar$, $Q_{j}$ and $P_{k}$ are read are those of
[[def-nrqm-framework-quantities-and-units]], and the exact defining constants
of the current SI recorded there are unit conventions, not measurements of
this framework.

## What is not claimed

The outcome laws are sharp-law statements: an exact position or momentum value
has probability zero in every preparation, finite-resolution outcomes are
Borel bins, and no detector, efficiency, resolution or sampling model is
introduced. The covariance theorems hold for the free model and for real
bounded measurable potentials; they assert nothing for singular or unbounded
potentials, confined or boundary realizations, massless particles, radiation
or relativistic matter. The internal factor is bookkeeping: it is not
identified with a spatial rotation, a classical angular momentum or a
relativistic spinor, and no empirical consequence of the spin assignment alone
is derived. The identification of the operators $Q_{j},P_{k}$ with concrete
laboratory procedures remains a tested identification under the preparation
and apparatus postulate, external to this pair.
