---
id: alg-qec-distinguishability-syndrome-measurement
kind: algorithm
domain: physics
title: Projective code-manifold syndrome check
status: draft
origin: session
deps:
  - pthm-qec-distinguishability-short-time-kraus
  - pthm-qec-distinguishability-uniform-decay-rate
  - def-qec-prereq-restricted-logical-channel
  - def-qec-prereq-calibrated-cycle-contract
  - math:def-qc-instrument-and-conditional-state
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - math:prop-orthogonal-projection-formula-and-linearity
  - math:def-qc-projective-measurement
  - math:thm-trace-of-ab-equals-trace-of-ba
dependency_roles:
  pthm-qec-distinguishability-short-time-kraus: physical-result
  pthm-qec-distinguishability-uniform-decay-rate: physical-result
  def-qec-prereq-restricted-logical-channel: mathematical-premise
  def-qec-prereq-calibrated-cycle-contract: mathematical-premise
  math:def-qc-instrument-and-conditional-state: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-dependent-choice: mathematical-premise
  math:prop-orthogonal-projection-formula-and-linearity: mathematical-premise
  math:def-qc-projective-measurement: mathematical-premise
  math:thm-trace-of-ab-equals-trace-of-ba: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF page 15, paragraph before Eq. (S4.5) and Eqs. (S4.5),
        (S4.7)–(S4.9); page 16, first paragraph
      statement: The article proposes a two-projector check for an initial state in a
        single excited J manifold, gives the normalized null and decay branches
        in its first-order model, and states that the decay branch is
        recoverable for a code capable of correcting the transitions.
      hypotheses: The idealized lifted angular-momentum model, a fast check and an
        initial state supported in one manifold; the recovery statement
        additionally assumes a code capable of correcting the transitions.
      reading_limits: The supplied extracted article text at the cited passages was
        read. This reference attributes the procedure and conditional recovery
        claim; it is not used as an independent proof of the model or of decoder
        existence.
physical_scope: Ideal projective checks in the finite lifted model; the
  first-order branch formulas are approximations, not reported observations or
  exact finite-time trajectory identifications.
dependency_level: 17
formulation_deps:
  - pthm-qec-distinguishability-short-time-kraus
  - pthm-qec-distinguishability-uniform-decay-rate
  - def-qec-prereq-restricted-logical-channel
  - def-qec-prereq-calibrated-cycle-contract
  - math:def-qc-instrument-and-conditional-state
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - math:prop-orthogonal-projection-formula-and-linearity
  - math:def-qc-projective-measurement
argument_deps:
  - pthm-qec-distinguishability-short-time-kraus
  - pthm-qec-distinguishability-uniform-decay-rate
  - def-qec-prereq-restricted-logical-channel
  - def-qec-prereq-calibrated-cycle-contract
  - math:def-qc-instrument-and-conditional-state
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - math:prop-orthogonal-projection-formula-and-linearity
  - math:def-qc-projective-measurement
  - math:thm-trace-of-ab-equals-trace-of-ba
---

## Definition

Adopt the finite lifted model and all hypotheses of its first-order fast-check channel, including the Axiom of Choice, Countable Choice and Dependent Choice. Its physical space is the orthogonal sum of the blocks spanned by the basis vectors $|J,m\rangle$ with $J=0,\ldots,N$ and $m=-J,\ldots,J$. A density operator is a positive semidefinite operator of trace one. Let $J_0\in\{1,\ldots,N\}$, let $P=\Pi_{J_0}$ be the orthogonal projector onto the $J_0$ block, and let the input density operator satisfy $P\rho_0P=\rho_0$. Choose a check interval $\tau\geq0$. The exact model channel for that interval is $\mathcal N_\tau$.

Measure the two projectors $P$ and $Q=I-P$ on the output of $\mathcal N_\tau$. The ideal measurement instrument has unnormalized outputs $B_{\rm null}=P\mathcal N_\tau(\rho_0)P$ and $B_{\rm decay}=Q\mathcal N_\tau(\rho_0)Q$. For either outcome $a$, its probability is $p_a=\operatorname{Tr}B_a$; if $p_a>0$, retain the conditional state $B_a/p_a$. A zero-probability outcome has no conditional state.

For the first-order branch description, put $K_{\rm null}=I+\tau G$ and $K_\delta=\sqrt\tau L_\delta$ for $\delta\in\{-1,0,1\}$, using the model's diagonal $G$ and downward jumps $L_\delta$. Replace $\mathcal N_\tau$ by the displayed first-order Kraus sum. The resulting unnormalized null branch is $K_{\rm null}\rho_0K_{\rm null}^\dagger$ and the resulting unnormalized decay branch is $\sum_\delta K_\delta\rho_0K_\delta^\dagger$; normalize a branch by its trace only when that trace is positive. Here $\gamma>0$ is the inherited equal-rate scale, and for the normalized excited-block input the first-order decay-branch weight is $\operatorname{Tr}(\sum_\delta K_\delta\rho_0K_\delta^\dagger)=\gamma\tau$. Thus for $\tau>0$ its conditional state in this approximation is $\sum_\delta K_\delta\rho_0K_\delta^\dagger/(\gamma\tau)$; at $\tau=0$ this branch has zero weight and no conditional state. These are branch expressions for the approximation, which need not itself be trace preserving at finite $\tau$.

If an encoded input and a suitable decoder are supplied, apply that decoder after the decay outcome. Here a decoder is a quantum channel from the post-measurement physical space to the logical space; suitable means that it recovers the encoded information for the specified transition-error channel under the stated code assumptions. The check itself does not construct such a decoder or establish that an arbitrary code has one. For an initial state supported in the $J_0=0$ block, the model has no downward jump, and its density operator remains unchanged under the exact evolution.

## Definition references

[[pthm-qec-distinguishability-short-time-kraus]]

[[pthm-qec-distinguishability-uniform-decay-rate]]

[[def-qec-prereq-restricted-logical-channel]]

[[def-qec-prereq-calibrated-cycle-contract]]

[[math:def-qc-instrument-and-conditional-state]]

[[math:prop-orthogonal-projection-formula-and-linearity]]

[[math:def-qc-projective-measurement]]

## Facts & Assumptions

[F1] In the finite lifted model, $G$ is diagonal in the block basis, each $L_\delta$ maps an excited block into the next lower block, and every $L_\delta$ annihilates the ground block. The exact channel differs from the first-order Kraus sum by $O(\tau^2)$ in the stated induced norm at fixed model parameters. [[pthm-qec-distinguishability-short-time-kraus]]

[F2] A finite instrument consists of completely positive outcome maps whose sum is trace preserving; its outcome weight is the trace of the unnormalized output, and its conditional state is the normalized output when that weight is positive. [[math:def-qc-instrument-and-conditional-state]]

[F3] An isometric encoding defines a code subspace, and a decoded recovery is a channel from the physical output to the logical space. [[def-qec-prereq-restricted-logical-channel]]

[F4] A recovery cycle specifies its measurement and outcome-dependent decoder; calibration alone does not establish a recovery guarantee. [[def-qec-prereq-calibrated-cycle-contract]]

[A1] Assume the Axiom of Choice, Countable Choice and Dependent Choice, as required by the finite lifted-model supplier. [[math:def-axiom-of-choice]] [[math:def-countable-choice]] [[math:def-dependent-choice]]

[F5] For an orthonormal basis of a subspace of a finite-dimensional inner-product space, the orthogonal projection is the sum of the corresponding basis components. It is linear, has that subspace as image and its orthogonal complement as kernel, is idempotent, and its complement is the projection onto the orthogonal complement. [[math:prop-orthogonal-projection-formula-and-linearity]]

[F6] A finite projective measurement is a finite family of self-adjoint idempotent endomorphisms that are pairwise orthogonal and sum to the identity. [[math:def-qc-projective-measurement]]

[F7] For compatible finite rectangular matrices over a field, $\operatorname{Tr}(AB)=\operatorname{Tr}(BA)$. [[math:thm-trace-of-ab-equals-trace-of-ba]]

[F8] Under the inherited equal-rate hypotheses, $\gamma>0$ and $\sum_\delta L_\delta^\dagger L_\delta=\gamma\Pi_{\rm exc}$, where $\Pi_{\rm exc}=\sum_{J=1}^{N}\Pi_J$ is the orthogonal projection onto the excited blocks. [[pthm-qec-distinguishability-uniform-decay-rate]]

## Justification

**Given:** The stated definitions, hypotheses and cited interfaces.

**Goal:** Justify the stated construction and its scope.

1.1 In the orthonormal block basis, [F5] makes $P$ diagonal with entry one on the $J_0$ block and zero elsewhere. Thus $P^*=P$, $P^2=P$, and $Q=I-P$ is the complementary orthogonal projector, with $Q^*=Q$, $Q^2=Q$, $PQ=QP=0$ and $P+Q=I$. The pair is a finite projective measurement by [F6]. Each map $X\mapsto PXP$ or $X\mapsto QXQ$ is completely positive because conjugation by the corresponding projector remains positive after every finite identity amplification. By [F7] and idempotence, $\operatorname{Tr}(PXP)+\operatorname{Tr}(QXQ)=\operatorname{Tr}(XP)+\operatorname{Tr}(XQ)=\operatorname{Tr}X$ for every endomorphism $X$. Thus these maps form an instrument in the sense of [F2], and the stated probabilities and conditional states follow. The exact channel precedes this instrument, so its two probabilities sum to one. [given, F1, F2, F3, F4, F5, F6, F7]

2.1 By [F1], the diagonal $K_{\rm null}$ preserves the $J_0$ block and the jumps take it into the orthogonal $J_0-1$ block. Consequently $PK_{\rm null}\rho_0K_{\rm null}^\dagger P=K_{\rm null}\rho_0K_{\rm null}^\dagger$, while projecting any jump term with $P$ gives zero. Conversely, projection with $Q$ removes the null term and leaves the jump terms. The approximation bound in [F1] concerns unnormalized channel outputs; it does not by itself give a uniform bound on normalized conditional states when an outcome probability is small. [F1, F2, F3, F4, step 1.1]

3.1 Since $J_0\geq1$, the supported input satisfies $\Pi_{\rm exc}\rho_0=\rho_0$ and $\operatorname{Tr}\rho_0=1$. By the finite trace cyclicity in [F7], $\operatorname{Tr}(\sum_\delta K_\delta\rho_0K_\delta^\dagger)=\tau\sum_\delta\operatorname{Tr}(\rho_0L_\delta^\dagger L_\delta)=\gamma\tau\operatorname{Tr}(\rho_0\Pi_{\rm exc})=\gamma\tau$ using [F8]. This is the weight of the approximate decay branch selected in step 2.1. Since $\gamma>0$, it is positive precisely when $\tau>0$, giving the stated division by $\gamma\tau$; at $\tau=0$ every $K_\delta$ is zero. The exact branch probability remains defined by the exact instrument, and is not identified with this first-order weight. [given, F1, F2, F7, F8, step 2.1, algebra]

4.1 The decoder is an additional input of the type in [F3], as in the outcome-dependent cycle of [F4]. Its suitability is a separate hypothesis, so the procedure makes no unconditional correction claim. On the one-dimensional ground block the jumps vanish by [F1], and the diagonal Hamiltonian acts as a scalar; its unitary phase cancels in the density operator. Hence the exact ground-block state is unchanged. [F1, F2, F3, F4, step 1.1] ∎
