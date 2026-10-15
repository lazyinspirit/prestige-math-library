---
id: pthm-qft-photon-physical-properties
kind: physics-theorem
domain: physics
library: physics
title: "Two physical photon degrees and positive free dynamics"
status: published
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 8
deps:
  - post-qft-free-photon-model
  - def-qft-photon-transverse-space
  - def-qft-framework-units
  - lem-qft-photon-null-quotient
  - lem-qft-photon-covariance-spectrum
  - lem-qft-second-quantized-spectrum
  - def-countable-choice
dependency_roles:
  post-qft-free-photon-model: physical-assumption
  def-qft-photon-transverse-space: mathematical-premise
  def-qft-framework-units: formulation-prerequisite
  lem-qft-photon-null-quotient: mathematical-premise
  lem-qft-photon-covariance-spectrum: mathematical-premise
  lem-qft-second-quantized-spectrum: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: "The selected flat-space source-free photon model only: positive transverse one-photon states, the auxiliary null quotient, Lorentz-covariant free dynamics, and its exact Hamiltonian domain; no interacting gauge model or empirical photon state is asserted."
empirical_premises: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Quantum Field Theory, author-hosted full-text Chapter 6, §6.2"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html"
      locator: "§6.2.1 for transverse Coulomb-gauge modes and the two physical polarization components; §6.2.2 for the distinct indefinite auxiliary four-polarization construction and its subsidiary condition."
    - title: "Mark Srednicki, Quantum Field Theory, author-hosted 2006 prepublication book draft"
      url: "https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf"
      locator: "§55, printed pp. 335–338, equations (55.3)–(55.25), for the transverse projection, two helicities, canonical commutator, and free photon Hamiltonian. Formal plane-wave expressions are replaced here by the conditional Hilbert-space suppliers."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Assume Countable Choice [[def-countable-choice]] for the selected Fock-space
construction, with the positive constants and physical energy units of
[[def-qft-framework-units]]. In the adopted model [[post-qft-free-photon-model]], for
$\mathbf k\ne0$ set $\mathbf n=\mathbf k/|\mathbf k|$ and
$P_T(\mathbf k)=I_3-\mathbf n\mathbf n^{\mathsf T}$. Then for almost every
nonzero momentum, $P_T(\mathbf k)$ is a positive orthogonal projection of
rank two, and the positive one-photon Hilbert space is its closed range
$\mathcal H_T\subset L^2(\mathbb R^3,d^3\mathbf k;\mathbb C^3)$. This
description chooses no global continuous polarization frame.

If an auxiliary four-polarization space
$\mathcal K=L^2(\mathbb R^3,d^3\mathbf k;\mathbb C^4)$ with indefinite form
$[\epsilon,\delta]=\int\epsilon^\dagger\eta\delta\,d^3\mathbf k$ is used,
the physical subsidiary space
$\mathcal K_0=\{\epsilon:-\epsilon^0+\mathbf n\cdot\boldsymbol\epsilon=0
\text{ a.e.}\}$ has null radical
$\mathcal N=\{b(\mathbf k)(1,\mathbf n):b\in L^2\}$. The quotient
$\mathcal K_0/\mathcal N$ is isometric to $\mathcal H_T$ with positive
inner product. The physical Fock Hamiltonian
$H_\gamma=\hbar c\,d\Gamma(|\mathbf k|)$ is self-adjoint, nonnegative, and
has the exact domain and strongly continuous Lorentz-covariant mass-cone
action in [[lem-qft-photon-covariance-spectrum]]. The vector-valued
auxiliary space is not a positive state space, and none of its negative
directions is assigned a negative Born probability.

## Facts & Assumptions

**Given:** Countable Choice; the selected positive-transverse free-photon
model; the exact transverse-space definition; and the inspected draft
quotient and covariance carriers.

[A1] [[post-qft-free-photon-model]]: the adopted state space is the bosonic
Fock space over the positive transverse one-photon Hilbert space, with free
dynamics and smeared field-strength observables. The postulate has a current escalated Step 1 record because its local-Weyl
input is escalated through the field-strength prerequisite. Its framework-units
and C01 measurement inputs have current ready records. This is readiness
evidence, not independent approval; the model is used conditionally.

[A2] Countable Choice is assumed for the mathematical Fock construction.
[[def-countable-choice]]

[F1] [[def-qft-photon-transverse-space]]: for almost every
$\mathbf k\ne0$, $P_T=I-\mathbf n\mathbf n^{\mathsf T}$ is an orthogonal
projection with two-dimensional range; its multiplier range $\mathcal H_T$
is closed and positive, and no global continuous polarization frame is
selected. The draft carrier has a current ready Step 1 record for its item hash; this is not independent mathematical approval.

[F2] [[def-qft-framework-units]]: $\hbar,c>0$ are the exact SI defining
constants, $x^0=ct$, and physical energy is $E=\hbar c\omega$ for temporal
wave number $\omega$. Its draft carrier has a current ready Step 1 record for its item hash; this
is readiness evidence, not independent mathematical approval.

[L1] [[lem-qft-photon-null-quotient]]: on
$\mathcal K_0=\{\epsilon:-\epsilon^0+\mathbf n\cdot\boldsymbol\epsilon=0\}$,
$T\epsilon=\boldsymbol\epsilon-\mathbf n\epsilon^0$ is bounded and onto
$\mathcal H_T$, $[\epsilon,\delta]_\eta=\langle T\epsilon,T\delta\rangle_2$,
and its radical is
$\mathcal N=\{b(\mathbf k)(1,\mathbf n):b\in L^2\}$. Thus
$\mathcal K_0/\mathcal N$ is a positive Hilbert space isometric to
$\mathcal H_T$. The draft carrier has a current ready Step 1 record for its item hash; this is readiness, not independent mathematical approval.

[L2] [[lem-qft-photon-covariance-spectrum]]: the future-null-cone quotient
action $[s(p)]\mapsto[\Lambda s(\Lambda^{-1}p)]$ is a strongly continuous
unitary representation; its bosonic Fock lift has energy multiplier
$\sum_r|\mathbf k_r|$ with the exact maximal sector domain and vacuum
energy zero, and physical four-momentum spectrum the closed future cone.
The draft carrier has a current ready Step 1 record for its item hash; this is readiness, not independent mathematical approval.

[F3] [[lem-qft-second-quantized-spectrum]]: the bosonic sector-sum
multiplier $d\Gamma(|\mathbf k|)$ is self-adjoint on its exact maximal
square-integrability domain, with the vacuum sector at zero. Its draft carrier has a current ready Step 1 record for its item hash; this is
readiness evidence, not independent mathematical approval.

## Proof
**Given:** [A1]–[A2], [F1]–[F3], and the current conditional mathematical
interfaces [L1]–[L2].

1.1 For $\mathbf k\ne0$, $|\mathbf n|^2=1$, so
$P_T^*=P_T$ and
$P_T^2=(I-\mathbf n\mathbf n^{\mathsf T})^2
=I-2\mathbf n\mathbf n^{\mathsf T}
+\mathbf n(\mathbf n^{\mathsf T}\mathbf n)\mathbf n^{\mathsf T}
=P_T$. Its kernel is $\operatorname{span}\{\mathbf n\}$, so its range is
the two-dimensional plane $\mathbf n^\perp$. As a measurable bounded
orthogonal projection, its multiplication operator is idempotent on
$L^2$. If $P_Tu_r\to u$ with $P_Tu_r=u_r$, boundedness gives
$P_Tu=\lim_rP_Tu_r=\lim_ru_r=u$; hence the range is closed. A change at
$\mathbf k=0$ changes no $L^2$ vector because that singleton has Lebesgue
measure zero. This gives a positive rank-two transverse fiber almost
everywhere without selecting a polarization frame. [A1, F1, algebra]

1.2 By [L1], each $\epsilon\in\mathcal K_0$ maps to a transverse vector
$T\epsilon=\boldsymbol\epsilon-\mathbf n\epsilon^0$, and
$[\epsilon,\epsilon]_\eta=\|T\epsilon\|_{\mathcal H_T}^2\ge0$.
The kernel is exactly $\mathcal N$, so the induced norm is positive on
nonzero quotient classes. The supplier proves that $T$ is onto and that the
quotient is isometric to the complete Hilbert space $\mathcal H_T$; therefore
no negative-norm auxiliary direction becomes a physical state in this
quotient. This conclusion is conditional on the current draft interface.
[L1, given]

2.1 The free Fock construction is understood under Countable Choice [A2].
By [F3], the unscaled multiplier $d\Gamma(|\mathbf k|)$ is
self-adjoint on its exact maximal sector-sum domain. The physical energy
operator in the selected model is $H_\gamma=\hbar c\,d\Gamma(|\mathbf k|)$,
so it has the same domain. In sector $n$ it is multiplication by
$H_n=\hbar c\sum_{r=1}^n|\mathbf k_r|$. Every summand is nonnegative and
$\hbar c>0$ by [F2], so $H_n\ge0$; on the vacuum sector the empty sum is
zero. The strongly continuous unitary Lorentz action follows from [L2].
These are properties of the selected free model and do not assert an
interacting theory. [A1, A2, F2, F3, L2, given, algebra] ∎
