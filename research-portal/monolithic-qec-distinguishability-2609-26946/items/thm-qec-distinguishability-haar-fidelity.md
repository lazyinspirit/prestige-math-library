---
id: thm-qec-distinguishability-haar-fidelity
kind: theorem
domain: mathematics
title: Haar-average fidelity versus entanglement fidelity
status: published
origin: session
deps:
  - thm-qec-distinguishability-transpose-fidelity
  - def-qec-distinguishability-qec-matrix
  - def-qec-distinguishability-transpose-recovery
  - def-qec-prereq-entanglement-fidelity
  - def-qec-prereq-finite-operator-conventions
  - thm-qec-prereq-haar-average-relation
  - math:def-qc-quantum-channel
  - math:cor-normalized-haar-probability-on-a-compact-group
  - math:def-axiom-of-choice
dependency_roles:
  thm-qec-distinguishability-transpose-fidelity: mathematical-premise
  def-qec-distinguishability-qec-matrix: mathematical-premise
  def-qec-distinguishability-transpose-recovery: mathematical-premise
  def-qec-prereq-entanglement-fidelity: mathematical-premise
  def-qec-prereq-finite-operator-conventions: mathematical-premise
  thm-qec-prereq-haar-average-relation: mathematical-premise
  math:def-qc-quantum-channel: mathematical-premise
  math:cor-normalized-haar-probability-on-a-compact-group: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 3, opening paragraph; PDF p. 8, discussion following Eq. (S1.6)
      statement: The article relates entanglement fidelity to the state fidelity
        averaged over Haar-random logical states by the displayed
        dimension-dependent formula and identifies transpose fidelity with the
        entanglement fidelity of transpose recovery.
      hypotheses: The article discusses a logical code and a trace-preserving
        recovered channel; the supplemental example has logical dimension two.
      reading_limits: Article-origin attribution only, based on the supplied extracted
        article text. The article is not used as proof of the formula; its cited
        references were not independently read for this item.
dependency_level: 4
---

## Statement

Assume the Axiom of Choice. Let $d_L\geq 1$, let $H_L=\mathbb C^{d_L}$, and let $\mathcal E:\mathcal L(H_L)\to\mathcal L(H_L)$ be a quantum channel, meaning a complex-linear, completely positive, trace-preserving map. Let $U$ range over the unitary group $U(d_L)$ with normalized Haar probability, and put $|\psi_U\rangle=U|0\rangle$. The Haar-average pure-state fidelity and entanglement fidelity at the maximally mixed input are respectively

$$\bar F(\mathcal E)=\int_{U(d_L)}\langle\psi_U|\mathcal E(|\psi_U\rangle\langle\psi_U|)|\psi_U\rangle\,dU,\qquad F_e(\mathcal E)=\langle\Phi|({\rm id}\otimes\mathcal E)(|\Phi\rangle\langle\Phi|)|\Phi\rangle,$$

where $|\Phi\rangle=d_L^{-1/2}\sum_{j=0}^{d_L-1}|j\rangle\otimes|j\rangle$ and ${\rm id}$ is the identity map on operators on the reference copy of $H_L$. Then

$$\bar F(\mathcal E)=\frac{d_L F_e(\mathcal E)+1}{d_L+1}.$$

In particular, let $V:H_L\to H_P$ be an isometry between nonzero finite-dimensional complex coordinate spaces, let $\mathcal N:\mathcal L(H_P)\to\mathcal L(H_O)$ be a channel with a finite nonempty Kraus family $(E_l)$, and let $P=VV^\dagger$. Put $Q=\mathcal N(P)$ and let $Q^{-1/2}$ be the inverse of its positive square root on its support and zero on its kernel. A transpose recovery $\mathcal T$ is a channel obtained by completing the map with Kraus operators $PE_l^\dagger Q^{-1/2}$ outside the support of $Q$ using a code state. Let $\mathcal E_{\rm tr}$ be the logical channel obtained by encoding with $V$, applying $\mathcal N$ and $\mathcal T$, and decoding the code-supported output with $V^\dagger$. If $M_{[\mu,l],[\nu,k]}=\langle\bar\mu|E_l^\dagger E_k|\bar\nu\rangle$, where $|\bar\mu\rangle=V|\mu\rangle$, and if $\operatorname{Tr}_L$ contracts the logical indices, define $F_{\rm tr}=d_L^{-2}\|\operatorname{Tr}_L\sqrt M\|_F^2$, with $\sqrt M$ the positive square root and $\|B\|_F^2=\sum_{l,k}|B_{l,k}|^2$. Then $F_e(\mathcal E_{\rm tr})=F_{\rm tr}$ and $\bar F(\mathcal E_{\rm tr})=(d_LF_{\rm tr}+1)/(d_L+1)$. This includes singular $M$ and $Q$ and is independent of the completion choice.

## Statement references

[[def-qec-prereq-finite-operator-conventions]]

[[math:def-qc-quantum-channel]]

[[def-qec-prereq-entanglement-fidelity]]

[[math:cor-normalized-haar-probability-on-a-compact-group]]

[[math:def-axiom-of-choice]]

[[def-qec-distinguishability-qec-matrix]]

[[def-qec-distinguishability-transpose-recovery]]

[[thm-qec-distinguishability-transpose-fidelity]]

## Facts & Assumptions

[F1] The finite operator conventions give the basis, adjoint, tensor-product and bra-ket notation used in the statement. [[def-qec-prereq-finite-operator-conventions]]

[F2] A quantum channel is complex-linear, completely positive and trace-preserving; the entanglement-fidelity definition gives the displayed maximally entangled overlap. [[math:def-qc-quantum-channel]] [[def-qec-prereq-entanglement-fidelity]]

[F3] Under the Axiom of Choice, the normalized Haar probability on the compact unitary group gives the unitary-invariant pure-state distribution in the statement. For every channel on $\mathbb C^d$, its average pure-state fidelity equals $(dF_e+1)/(d+1)$. [[math:cor-normalized-haar-probability-on-a-compact-group]] [[thm-qec-prereq-haar-average-relation]]

[F4] The QEC matrix, logical partial trace and Frobenius norm are as displayed, and the support-completed transpose recovery is a channel whose output is supported on the code. [[def-qec-distinguishability-qec-matrix]] [[def-qec-distinguishability-transpose-recovery]]

[F5] For the stated finite-dimensional code, channel and support-completed transpose recovery, the decoded logical channel has entanglement fidelity $d_L^{-2}\|\operatorname{Tr}_L\sqrt M\|_F^2$, including singular cases and independently of the completion choice. [[thm-qec-distinguishability-transpose-fidelity]]

[A1] Assume the Axiom of Choice, as required by the Haar-average supplier. [[math:def-axiom-of-choice]]

## Proof

[A1] Assume the Axiom of Choice, as required by the Haar-average supplier. [[math:def-axiom-of-choice]]

**Given:** The Axiom of Choice, the finite logical space and channel, and, for the particular case, the code, noise channel and transpose recovery specified in the statement.

**Goal:** Prove the average-fidelity identity and its transpose-recovery specialization.

1.1 The given $\mathcal E$ is a quantum channel on $\mathbb C^{d_L}$ with $d_L\geq1$. Its entanglement fidelity is the overlap in [F2], and its average is taken with the normalized Haar distribution in [F3]. Applying the Haar-average relation under [A1] gives $\bar F(\mathcal E)=(d_LF_e(\mathcal E)+1)/(d_L+1)$. [given, F2, F3, A1]

2.1 In the particular case, [F4] supplies the specified recovery and matrix conventions, while [F5] gives a decoded logical channel and identifies its entanglement fidelity with the displayed $F_{\rm tr}$. Apply step 1.1 to that channel and substitute this equality. The singular-case and completion-independence assertions follow from [F5], since the average is the same function of that completion-independent fidelity. [given, F1, F4, F5, step 1.1] ∎
