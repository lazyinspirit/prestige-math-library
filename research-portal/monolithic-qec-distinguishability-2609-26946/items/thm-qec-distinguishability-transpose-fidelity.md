---
id: thm-qec-distinguishability-transpose-fidelity
kind: theorem
domain: mathematics
title: Transpose fidelity from the QEC matrix
status: published
origin: session
deps:
  - def-qec-distinguishability-qec-matrix
  - def-qec-distinguishability-transpose-recovery
  - def-qec-prereq-entanglement-fidelity
  - lem-qec-prereq-qec-gram-factorization
  - thm-qec-prereq-transpose-gram-fidelity
dependency_roles:
  def-qec-distinguishability-qec-matrix: mathematical-premise
  def-qec-distinguishability-transpose-recovery: mathematical-premise
  def-qec-prereq-entanglement-fidelity: mathematical-premise
  lem-qec-prereq-qec-gram-factorization: mathematical-premise
  thm-qec-prereq-transpose-gram-fidelity: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 2, Eq. (6); PDF p. 8, Eq. (S1.6)
      statement: The entanglement fidelity of transpose recovery is expressed as the
        squared Frobenius norm of the logical partial trace of the square root
        of the QEC matrix, divided by the square of the logical dimension; the
        article attributes the expression to Ref. [40].
      hypotheses: The article's QEC matrix is formed from a code basis and channel
        Kraus operators, and the fidelity is evaluated on the maximally mixed
        code input.
      reading_limits: Article-origin attribution only, based on the supplied extracted
        article text at the stated locations. The article is not used as proof
        of the formula; Ref. [40] was not independently read for this item.
dependency_level: 3
---

## Statement

Let $H_L=\mathbb C^{d_L}$, where $d_L\geq1$, and let $H_P,H_O$ be nonzero finite-dimensional complex coordinate spaces. Let $V:H_L\to H_P$ be an isometry, $P=VV^\dagger$, and $\mathcal N:\mathcal L(H_P)\to\mathcal L(H_O)$ a quantum channel with finite nonempty Kraus family $(E_l)$, so $\mathcal N(X)=\sum_l E_lXE_l^\dagger$. A quantum channel is a completely positive trace-preserving linear map. Write $|\bar\mu\rangle=V|\mu\rangle$ for the encoded logical basis and define the QEC matrix by $M_{[\mu,l],[\nu,k]}=\langle\bar\mu|E_l^\dagger E_k|\bar\nu\rangle$ in the ordered logical-error product basis.

Put $Q=\mathcal N(P)$. Let $Q^{-1/2}$ be the inverse of its positive square root on its support and zero on its kernel. Let $\mathcal T$ be any transpose recovery obtained from the Kraus operators $PE_l^\dagger Q^{-1/2}$ by completing the map outside the support of $Q$ with a code state. Encode by $V$, apply $\mathcal N$ and $\mathcal T$, and decode the code-supported output by $V^\dagger$; call the resulting logical channel $\mathcal E$. Its entanglement fidelity $F_{\rm tr}=F_e(\mathcal E)$ at the maximally mixed input $I/d_L$ is

$$F_{\rm tr}=d_L^{-2}\|\operatorname{Tr}_L\sqrt M\|_F^2.$$

Here $\sqrt M$ is the positive square root, $\operatorname{Tr}_L$ contracts the logical indices, and $\|B\|_F^2=\sum_{l,k}|B_{l,k}|^2$. The formula includes singular $M$ and $Q$ and is independent of the completion choice. The article attributes this expression to Ref. [40].

## Statement references

[[def-qec-distinguishability-qec-matrix]]

[[def-qec-distinguishability-transpose-recovery]]

[[def-qec-prereq-entanglement-fidelity]]

## Facts & Assumptions

[F1] The QEC matrix has the displayed entries in the logical-error product basis; its logical partial trace contracts the logical indices and the squared Frobenius norm is the sum of squared entry moduli. [[def-qec-distinguishability-qec-matrix]]

[F2] The support-completed transpose recovery is a code-supported channel, and its action after noise on code-supported operators is independent of the completion choice. [[def-qec-distinguishability-transpose-recovery]]

[F3] Entanglement fidelity at the maximally mixed logical input is the overlap of a normalized maximally entangled state with its image under the identity on a reference tensor the logical channel. [[def-qec-prereq-entanglement-fidelity]]

[F4] For $A|\mu,l\rangle=E_lV|\mu\rangle$, the operator $A^\dagger A$ is positive semidefinite and has the QEC matrix entries. [[lem-qec-prereq-qec-gram-factorization]]

[F5] For a finite-dimensional isometric code, a channel with a finite Kraus family and its support-completed transpose recovery, the decoded logical channel has entanglement fidelity $d_L^{-2}\|\operatorname{Tr}_L\sqrt{A^\dagger A}\|_F^2$, including the singular case. [[thm-qec-prereq-transpose-gram-fidelity]]

## Proof

**Given:** The finite spaces, isometry, channel, Kraus family and transpose recovery in the statement.

**Goal:** Establish the displayed formula and its independence of the support-completion choice.

1.1 Define $A$ on the logical-error product basis by $A|\mu,l\rangle=E_lV|\mu\rangle$. The Gram factorization gives the entries of $A^\dagger A$ as $\langle\bar\mu|E_l^\dagger E_k|\bar\nu\rangle$, so the definition of the QEC matrix identifies $M=A^\dagger A$. In particular $M$ is positive semidefinite and has the positive square root used in the formula. [given, F1, F4]

2.1 The hypotheses of the independent transpose Gram-fidelity formula hold for this isometry, channel, Kraus family and support-completed recovery. Applying it to the decoded channel and substituting $M=A^\dagger A$ from step 1.1 gives $F_e(\mathcal E)=d_L^{-2}\|\operatorname{Tr}_L\sqrt M\|_F^2$, with the partial trace and norm as in the statement. The fidelity is the functional specified in [F3], and [F2] shows that the completed recovery has the same action after the noise for every choice of code state; hence the result is completion-independent. The supplier includes singular matrices. [given, F1, F2, F3, F5, step 1.1] ∎
