---
id: rem-nrqm-kinematics-examples-scope-limits
aliases: [nrqm-kinematics-examples-scope-limits]
kind: remark
domain: physics
title: "What the worked items of the companion page establish"
status: draft
origin: session
dependency_level: 10
deps: [cex-nrqm-kinematics-ccr-cannot-hold-for-bounded-operators, ex-nrqm-kinematics-gaussian-position-momentum-packet, ex-nrqm-kinematics-plane-wave-generalized-eigenfunction, lem-nrqm-kinematics-ccr-and-internal-factor-commutation, pthm-nrqm-kinematics-spin-s-outcome-laws, texp-nrqm-kinematics-dirichlet-momentum-warning]
dependency_roles:
  cex-nrqm-kinematics-ccr-cannot-hold-for-bounded-operators: formulation-prerequisite
  ex-nrqm-kinematics-gaussian-position-momentum-packet: formulation-prerequisite
  ex-nrqm-kinematics-plane-wave-generalized-eigenfunction: formulation-prerequisite
  lem-nrqm-kinematics-ccr-and-internal-factor-commutation: mathematical-premise
  pthm-nrqm-kinematics-spin-s-outcome-laws: physical-result
  texp-nrqm-kinematics-dirichlet-momentum-warning: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Scope of the companion examples page: an inventory of the exact computations and conditional warnings it contains and of the physical questions it does not address. The remark asserts no dynamics and records no empirical data."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections 2.1.3 and 3.2.3, printed pages 27-29 and 75-76 (PDF pages 30-32 and 78-79): the Gaussian wavepacket, momentum eigenstates and the Fourier transform"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 1 'Wave Mechanics', Section 6, printed pages 22-25 (PDF pages 22-25): momentum eigenstates, the momentum representation and the position operator in the momentum representation"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/61bc31b8d8bf0680c322733910a71aa0_MIT8_05F13_Chap_01.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 9.1, printed pages 181-188 (PDF pages 193-200): Sturm-Liouville operators and the parametrization of self-adjoint boundary conditions (the contrast case for the interval momentum warning)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: n/a
---
## Three worked items

**The Gaussian packet.** [[ex-nrqm-kinematics-gaussian-position-momentum-packet]]
computes, in the spin-zero massive model, the normalized Gaussian
$\psi_{\sigma}(x)=(\pi\sigma^{2})^{-3/4}e^{-|x|^{2}/(2\sigma^{2})}$, shows
that its momentum representative is again a normalized Gaussian with width
$\sigma_{p}=\hbar/\sigma$, and evaluates the position and momentum outcome
densities of the model together with their variances $\sigma^{2}/2$ and
$\hbar^{2}/(2\sigma^{2})$ and the product $\hbar/2$. This verifies the model's
sharp laws of [[pthm-nrqm-kinematics-spin-s-outcome-laws]] on a family of
Schwartz preparations; it computes no dynamics, no measurement and no general
uncertainty statement.

**The plane wave as a generalized functional.** [[ex-nrqm-kinematics-plane-wave-generalized-eigenfunction]]
defines the conjugate-linear functional $u_{k}(\varphi)=\int e^{ik\cdot
x}\overline{\varphi}$ on Schwartz classes, proves the eigenrelation
$u_{k}(P_{j}\varphi)=\hbar k_{j}u_{k}(\varphi)$, and proves that no $L^{2}$
class represents $u_{k}$. This is the precise sense in which the plane wave is
a generalized momentum eigenfunction: it diagonalizes the momentum action on
the test space while carrying no state or probability density. The framework's
state assignment excludes it as a preparation, in agreement with the model's
atomless sharp laws.

**The boundary warning.** [[texp-nrqm-kinematics-dirichlet-momentum-warning]]
shows, in a hypothetical confined-model extension, that the formal interval
momentum $-i\hbar D$ on the Dirichlet domain is symmetric but not self-adjoint,
that no self-adjoint extension keeps the Dirichlet domain, and that the
Dirichlet functions are not momentum eigenfunctions of any self-adjoint
extension. The companion counterexample
[[cex-nrqm-kinematics-ccr-cannot-hold-for-bounded-operators]] shows that the
canonical commutation relation cannot hold as an identity of bounded
operators at all, so the core relation of
[[lem-nrqm-kinematics-ccr-and-internal-factor-commutation]] is genuinely a
relation on a dense core of unbounded operators rather than a bounded
operator identity.

## What the page does not establish

None of the items is an experiment: no counts, calibration, resolution,
efficiency, background, uncertainty or data comparison appears anywhere on the
page, and no value of $m$, $\hbar$ or any model parameter is measured. The
Gaussian computation is a single family of preparations; the plane-wave item
is a distributional statement without a state; the boundary warning and the
bounded-commutator counterexample are conditional mathematical statements
about hypothetical or bounded models, not claims about apparatuses. In
particular, no item asserts that confined models, twisted-periodic momenta or
any self-adjoint realization describe a laboratory device, and no item draws
conclusions about decoherence, measurement disturbance or relativistic
effects, which belong to other model pages.
