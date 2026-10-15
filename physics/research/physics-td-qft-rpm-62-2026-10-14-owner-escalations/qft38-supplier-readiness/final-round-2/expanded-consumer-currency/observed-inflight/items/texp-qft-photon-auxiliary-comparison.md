---
id: texp-qft-photon-auxiliary-comparison
kind: thought-experiment
domain: physics
library: physics
title: "Auxiliary negative vector versus physical quotient"
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 9
deps:
  - pthm-qft-photon-physical-properties
  - def-qft-framework-units
  - lem-qft-photon-null-quotient
  - lem-smooth-bump-between-concentric-euclidean-balls
  - def-countable-choice
dependency_roles:
  pthm-qft-photon-physical-properties: physical-result
  def-qft-framework-units: formulation-prerequisite
  lem-qft-photon-null-quotient: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: "A hypothetical exact comparison between an indefinite auxiliary four-polarization vector and normalized states in the positive transverse free-photon model; no measurement, negative probability, or empirical event is asserted."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Quantum Field Theory, author-hosted full-text Chapter 6, §§6.2.1–6.2.2"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html"
      locator: "Chapter 6 contrasts the two transverse Coulomb-gauge physical modes with a four-component Lorenz-gauge auxiliary space and its subsidiary condition."
    - title: "Mark Srednicki, Quantum Field Theory, author-hosted 2006 prepublication book draft"
      url: "https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf"
      locator: "§55, printed pp. 335–338, identifies the two transverse helicity modes; §58, printed pp. 345–347, describes the gauge redundancy of the four-potential."
---

## Statement

Assume Countable Choice [[def-countable-choice]] and the positive transverse
free-photon model of [[pthm-qft-photon-physical-properties]]. Let
$\mathcal K=L^2(\mathbb R^3,d^3\mathbf k;\mathbb C^4)$ carry the indefinite
form $[\epsilon,\delta]=\int\epsilon^\dagger
\operatorname{diag}(-1,1,1,1)\delta\,d^3\mathbf k$. For nonzero
$\mathbf k$, put $\mathbf n=\mathbf k/|\mathbf k|$ and define the subsidiary
subspace by
$\mathcal K_0=\{\epsilon:-\epsilon^0+\mathbf n\cdot\boldsymbol\epsilon=0
\text{ almost everywhere}\}$. Fix a wave-number scale $\kappa>0$ in
$\mathrm m^{-1}$ under [[def-qft-framework-units]], and let $\Omega$ be the
momentum ball of radius $\kappa/4$ centered at $\kappa(0,0,1)$. By
[[lem-smooth-bump-between-concentric-euclidean-balls]], translate a smooth
bump $b$ that equals one on the concentric ball of radius $\kappa/8$ and
has support in $\Omega$. Set $g=b/\|b\|_2$, so
$g\in C_c^\infty(\Omega)$ and $\|g\|_2=1$. The auxiliary timelike wavepacket
$\epsilon_{\rm aux}(\mathbf k)=g(\mathbf k)(1,0,0,0)$ has
$[\epsilon_{\rm aux},\epsilon_{\rm aux}]=-1$ but is not in $\mathcal K_0$.
By contrast, a normalized transverse wavepacket in
$\mathcal H_T$ represents a positive physical one-photon state. Therefore
the negative auxiliary norm is not a negative Born probability.

## Facts & Assumptions

**Given:** The exact positive transverse free model, Countable Choice, and
the inspected draft null-quotient carrier at its conditional interface.

[A1] [[pthm-qft-photon-physical-properties]]: the physical one-photon space
is the positive transverse Hilbert space, and the auxiliary indefinite
four-polarization space is not the physical state space.

[A2] Countable Choice is the choice strength of the QFT Fock construction.
[[def-countable-choice]]

[F1] Every concentric pair of Euclidean balls with radii $0<r<R$ admits a
smooth compactly supported bump equal to one on the smaller closed ball.
[[lem-smooth-bump-between-concentric-euclidean-balls]]

[F2] [[def-qft-framework-units]]: spatial wave vectors have units
$\mathrm m^{-1}$ and use length coordinates $x^0=ct$.

[L1] [[lem-qft-photon-null-quotient]] (draft carrier with a current ready Step 1
record for its item hash; this is readiness, not independent approval): on the subsidiary subspace $\mathcal K_0$, the map
$T\epsilon=\boldsymbol\epsilon-\mathbf n\epsilon^0$ is bounded and onto
$\mathcal H_T$, with
$[\epsilon,\delta]_\eta=\langle T\epsilon,T\delta\rangle_2$; its radical
is $\mathcal N=\{b(\mathbf k)(1,\mathbf n):b\in L^2\}$. The quotient
$\mathcal K_0/\mathcal N$ is a positive Hilbert space isometric to
$\mathcal H_T$.

## Proof

**Given:** [A1]–[A2], [F1]–[F2], and [L1].

1.1 The scale $\kappa$ in [F2] is a positive wave number. Apply [F1] with
radii $\kappa/8$ and $\kappa/4$, then translate the
result to the center of $\Omega$. Translation preserves smoothness and
support, so $b$ is smooth, bounded, and compactly supported in $\Omega$;
it equals one on an inner ball of positive volume. Thus
$0<\|b\|_2<\infty$ and $g=b/\|b\|_2$ is the stated normalized wavepacket.
Since the timelike coordinate has metric coefficient $-1$, direct
substitution gives
$[\epsilon_{\rm aux},\epsilon_{\rm aux}]
=\int -|g(\mathbf k)|^2\,d^3\mathbf k=-1$. On the support of $g$, the
subsidiary expression is
$-\epsilon_{\rm aux}^0+\mathbf n\cdot\boldsymbol\epsilon_{\rm aux}=-g$,
which is nonzero on the inner ball where $b=1$, a set of positive measure.
Hence
$\epsilon_{\rm aux}\notin\mathcal K_0$ and it has no class in the physical
quotient. [A1, F1, F2, algebra]

1.2 Countable Choice [A2] is carried by the selected Fock model. For every
$\mathbf k\in\Omega$, $k_3\ge3\kappa/4$ and $|k_1|\le\kappa/4$, so
$|n_1|=|k_1|/|\mathbf k|\le1/3$. Hence
$\|P_T(\mathbf k)e_1\|^2=1-|n_1|^2\ge8/9$ on $\Omega$. The vector
$u(\mathbf k)=P_T(\mathbf k)e_1g(\mathbf k)$ is transverse and satisfies
$$\|u\|_{\mathcal H_T}^2=\int_\Omega\|P_Te_1\|^2|g|^2d^3\mathbf k \ge\frac89\|g\|_2^2=\frac89>0.$$
Thus normalizing it gives $\|u\|_{\mathcal H_T}=1$. For every
$\epsilon\in\mathcal K_0$, [L1] gives
$[\epsilon,\epsilon]=\|T\epsilon\|_{\mathcal H_T}^2\ge0$, and quotienting
by $\mathcal N$ removes precisely the zero-norm radical. The physical
wavepacket therefore has positive Hilbert norm, whereas the auxiliary
negative norm belongs to no physical state. [A1, A2, L1, given, algebra]

2.1 The comparison is a hypothetical calculation in the adopted free model.
It supplies no observed event, measurement outcome, or probability
assignment to an auxiliary vector; the Born interpretation applies only to
normalized states and supplied measurements in the physical model. [A1, step 1.2, given] ∎
