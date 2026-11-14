---
id: pthm-qec-distinguishability-isotropic-bath
kind: physics-theorem
domain: physics
title: Off-diagonal correlators vanish in an isotropic photon bath
status: draft
origin: session
deps:
  - pthm-qec-distinguishability-thermal-time-correlator
  - pthm-qec-distinguishability-thermal-spectral-density
  - lem-qec-distinguishability-polarization-identity
  - def-qec-distinguishability-jump-correlator
  - def-qec-prereq-support-spectral-calculus
  - def-qec-prereq-stationary-spectrum-kernel-contract
  - def-qec-distinguishability-spherical-components
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
dependency_roles:
  pthm-qec-distinguishability-thermal-time-correlator: physical-result
  pthm-qec-distinguishability-thermal-spectral-density: physical-result
  lem-qec-distinguishability-polarization-identity: mathematical-premise
  def-qec-distinguishability-jump-correlator: formulation-prerequisite
  def-qec-prereq-support-spectral-calculus: mathematical-premise
  def-qec-prereq-stationary-spectrum-kernel-contract: mathematical-premise
  def-qec-distinguishability-spherical-components: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-dependent-choice: mathematical-premise
formulation_deps:
  - pthm-qec-distinguishability-thermal-time-correlator
  - pthm-qec-distinguishability-thermal-spectral-density
  - def-qec-distinguishability-jump-correlator
  - def-qec-prereq-support-spectral-calculus
  - def-qec-prereq-stationary-spectrum-kernel-contract
  - def-qec-distinguishability-spherical-components
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
argument_deps:
  - pthm-qec-distinguishability-thermal-time-correlator
  - pthm-qec-distinguishability-thermal-spectral-density
  - lem-qec-distinguishability-polarization-identity
  - def-qec-distinguishability-jump-correlator
  - def-qec-prereq-support-spectral-calculus
  - def-qec-prereq-stationary-spectrum-kernel-contract
  - def-qec-distinguishability-spherical-components
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 13, Eq. (S3.15) and following paragraph
      statement: The article states that the off-diagonal thermal photon-bath
        correlations vanish by isotropic angular averaging, so the Cartesian
        spectral matrix is scalar, its positive jump correlator is diagonal, and
        the noise labels can be rotated to spherical labels.
      hypotheses: The article's isotropic thermal photon-bath calculation and its
        preceding coupling and Fourier conventions.
      reading_limits: Read the supplied extracted text at the cited passage. This
        reference attributes the article claim; the conditional proof below uses
        the completed suppliers, not the article claim as a premise.
physical_scope: Conditional two-point calculation for the specified isotropic
  regulated photon model and its convergent continuum limit; no laboratory
  observation or general dynamical approximation is asserted.
dependency_level: 12
---

## Statement

Assume the Axiom of Choice, Countable Choice and Dependent Choice. Take the explicitly regulated isotropic thermal photon model, its sequential continuum limit, and all conventions and hypotheses of the completed thermal time-correlator result. In particular $c,\beta,\gamma>0$, $\kappa$ is Borel, and $\int_0^\infty |\kappa(\omega)|^2\omega^2[2N(\omega)+1]d\omega<\infty$, where $N(\omega)=(e^{\beta\omega}-1)^{-1}$. For Cartesian labels $i,j\in\{1,2,3\}$ and every real $t$, the resulting correlation is $\mathcal J_{ij}(t)=\delta_{ij}C(t)$, where

$$C(t)=\frac{8\pi}{3\gamma c^3}\int_0^\infty |\kappa(\omega)|^2\omega^2[N(\omega)e^{i\omega t}+(N(\omega)+1)e^{-i\omega t}]d\omega.$$

In particular every off-diagonal correlation vanishes. With the positive-exponential spectral convention, the matrix-valued distributional spectrum is $\delta_{ij}\mu$, where $\mu$ is the nonnegative finite measure whose almost-everywhere density $J$ is given by the completed thermal spectral-density result. Thus the spectral density matrix has the representative $J(x)I_3$ almost everywhere. Choose a nonnegative representative at all frequencies, including a value at zero. The positive square root of this representative divided by $2\pi$ is $g(x)=\sqrt{J(x)/(2\pi)}I_3$, as a pointwise matrix identity.

For identification with the cited jump-correlator definition, additionally assume that its bath-trace hypotheses hold and those traces give this correlation, that $C\in L^1(\mathbb R)$, and that the chosen representative satisfies $J(x)=(2\pi)^{-1}\int_{\mathbb R}C(t)e^{ixt}\,dt$ at every real $x$. Under these additional hypotheses the frequency-domain jump correlator is the displayed $g(x)$. If its entries are also Lebesgue integrable, the time-domain jump correlator is $g(t)=\int_{\mathbb R}g(x)e^{-ixt}\,dx$, entrywise. The distributional-spectrum and matrix-square-root conclusions above do not require these additional hypotheses.

For every unitary change of the three channel labels, including a Cartesian-to-spherical change of basis, both scalar matrices remain unchanged under conjugation. Consequently the channels may be expressed in spherical labels without introducing off-diagonal spectral or jump correlations. This is a conditional statement about the model, not an observation.

## Statement references

[[pthm-qec-distinguishability-thermal-time-correlator]]

[[pthm-qec-distinguishability-thermal-spectral-density]]

[[lem-qec-distinguishability-polarization-identity]]

[[def-qec-distinguishability-jump-correlator]]

[[def-qec-prereq-support-spectral-calculus]]

[[def-qec-prereq-stationary-spectrum-kernel-contract]]

[[def-qec-distinguishability-spherical-components]]

[[math:def-axiom-of-choice]]

[[math:def-countable-choice]]

[[math:def-dependent-choice]]

## Facts & Assumptions

**Given:** The choice assumptions, regulated thermal model, radial integrability and conventions in the Statement.

[F1] Under those model hypotheses, the completed thermal time-correlator result gives the displayed scalar correlation for all Cartesian index pairs and all real times. Its construction refines finite cells on compact shells and then exhausts positive frequency. [[pthm-qec-distinguishability-thermal-time-correlator]]

[F2] For each propagation direction, the sum over two orthonormal transverse polarizations is the projector $\delta_{ij}-n_i n_j$; its surface integral is $8\pi\delta_{ij}/3$ under Countable Choice. [[lem-qec-distinguishability-polarization-identity]]

[F3] With the stated normalization and positive-exponential convention, the diagonal thermal spectrum is a nonnegative finite measure with the stated almost-everywhere density. The ordinary time Fourier integral requires an additional integrability condition. [[pthm-qec-distinguishability-thermal-spectral-density]] [[def-qec-prereq-stationary-spectrum-kernel-contract]]

[F4] The jump-correlator definition requires its bath traces and an entrywise time-integrable correlation, with spectral density given by the ordinary positive-exponential Fourier integral. For a pointwise Hermitian positive semidefinite spectral matrix it defines the frequency jump correlator as the positive square root of that matrix divided by $2\pi$. Entrywise integrability of this square root additionally defines its time-domain Fourier integral. The finite-dimensional positive square-root construction is basis independent. [[def-qec-distinguishability-jump-correlator]] [[def-qec-prereq-support-spectral-calculus]]

[F5] The spherical-component definition specifies the Cartesian-to-spherical coordinate matrix on the three-dimensional channel-label space, with ordered inputs $(x,y,z)$ and outputs $(+1,-1,0)$, and its local Justification proves that this matrix and its output unit-phase variants are unitary. [[def-qec-distinguishability-spherical-components]]

[A1] Assume the Axiom of Choice, Countable Choice and Dependent Choice as required by the completed thermal suppliers. [[math:def-axiom-of-choice]] [[math:def-countable-choice]] [[math:def-dependent-choice]]

## Proof

**Goal:** Establish the scalar time correlation, spectral matrix, jump kernel and invariance under unitary channel changes under the stated hypotheses.

1.1 The hypotheses are those of [F1], so its continuum limit gives $\mathcal J_{ij}(t)=\delta_{ij}C(t)$ with precisely the displayed $C$. In that construction the isotropic radial factor is independent of direction; [F2] identifies the angular contraction as $8\pi\delta_{ij}/3$. Hence the entries with $i\ne j$ vanish, while all three diagonal entries agree. The factor $\gamma^{-1}$ is retained from the completed model's normalization. [given, A1, F1, F2]

2.1 Pair each time correlation with a Schwartz test function using the distributional convention of [F3]. Linearity and step 1.1 give zero off the diagonal and the same pairing on each diagonal. By [F3], this common distribution is the nonnegative finite measure $\mu$ and has density $J$ almost everywhere. This proves the matrix measure and density statements without assuming that the correlation is integrable in time. [F3, step 1.1, algebra]

3.1 For the chosen nonnegative representative, $s(x)I_3$, where $s(x)=\sqrt{J(x)/(2\pi)}$, is positive semidefinite and its square is $J(x)I_3/(2\pi)$. The uniqueness of the finite-dimensional positive square root in [F4] identifies it with the positive square root of this representative divided by $2\pi$, independently of ordinary time Fourier integrability. [given, F4, step 2.1, algebra]

4.1 Under the additional bath-trace, $C\in L^1(\mathbb R)$ and pointwise Fourier-matching assumptions in the Statement, each correlation entry is integrable and its ordinary spectral density is $\delta_{ij}J(x)$ at every real $x$. This matrix is Hermitian positive semidefinite by the chosen nonnegative representative. Thus the frequency-domain part of the jump-correlator definition in [F4] applies and gives precisely the root from step 3.1. If its entries are also integrable, the time-domain part of [F4] defines the stated Fourier integral. These conclusions use the additional hypotheses; square-root integrability alone does not supply time integrability of $C$. [given, F4, step 1.1, step 3.1, algebra]

5.1 For any unitary $U$, $U(JI_3)U^*=JI_3$ and $U(sI_3)U^*=sI_3$; the Cartesian-to-spherical matrix of [F5] is such a unitary basis change, as are its output unit-phase variants. Thus the claimed diagonal structure persists in those labels. When the time-domain jump integral in step 4.1 is defined, its off-diagonal entries vanish because they integrate zero entries, and all diagonal entries agree because their integrands agree. [given, F5, step 3.1, step 4.1, algebra] ∎

## Source notes

The article writes the off-diagonal integrand without the explicit $\gamma^{-1}$ factor. In the completed supplier's fixed bath-operator convention, the corresponding displayed article integral represents $\gamma\mathcal J_{ij}(t)$; both expressions vanish off the diagonal. The source passage is attribution, while the regulated calculation and its normalization are supplied by [F1]. The spectral density is an almost-everywhere representative; assigning values on null sets is a convention and does not by itself prove time or kernel integrability.
