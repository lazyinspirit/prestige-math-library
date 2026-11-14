---
id: thm-qec-distinguishability-near-optimal-bound
kind: theorem
domain: mathematics
title: Factor-two guarantee for transpose recovery
status: published
origin: session
deps:
  - def-qec-distinguishability-transpose-recovery
  - def-qec-prereq-entanglement-fidelity
  - thm-qec-prereq-transpose-entanglement-guarantee
  - lem-author-9fe623b43725-decoder-identification
dependency_roles:
  def-qec-distinguishability-transpose-recovery: mathematical-premise
  def-qec-prereq-entanglement-fidelity: mathematical-premise
  thm-qec-prereq-transpose-entanglement-guarantee: mathematical-premise
  lem-author-9fe623b43725-decoder-identification: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 2, checking-time paragraph preceding Eq. (6)
      statement: The article invokes near-optimality of transpose recovery within a
        factor of two in infidelity and uses it to motivate checking time as a
        property reflecting the code rather than a particular decoder.
      hypotheses: The discussion concerns the recovered entanglement fidelity of the
        encoded channel.
      reading_limits: The supplied extracted article text was read at the cited
        passage. This reference records article attribution and is not used as
        proof of the inequality. The article's cited references were not
        independently read for this item.
dependency_level: 6
---

## Statement

Let $d\geq1$ be an integer, let $\mathbb C^d$ have its standard inner product, and let $H_P,H_O$ be nonzero finite-dimensional complex Hilbert spaces. Let $V:\mathbb C^d\to H_P$ be a linear isometry onto the code, with code projector $P=VV^\dagger$. Let $\mathcal N:\mathcal L(H_P)\to\mathcal L(H_O)$ be a finite-dimensional quantum channel, meaning a completely positive trace-preserving linear map. Write $\operatorname{Ad}_V(X)=VXV^\dagger$.

For a logical channel $\mathcal E$, let $F_e(\mathcal E)$ be its entanglement fidelity at the maximally mixed input $I/d$: the overlap of a normalized maximally entangled logical-reference state with its image under $\mathcal E$ on the logical factor and the identity on the reference. Let $F_{\rm opt}=\max_{\mathcal R}F_e(\mathcal R\mathcal N\operatorname{Ad}_V)$, where $\mathcal R$ ranges over all completely positive trace-preserving logical decoders from $\mathcal L(H_O)$ to $\mathcal L(\mathbb C^d)$.

Let $F_{\rm tr}$ be the same fidelity for a support-completed transpose recovery followed by compression to the logical space. Explicitly, for Kraus operators $E_a$ of $\mathcal N$, the transpose map has Kraus operators $PE_a^\dagger\mathcal N(P)^{-1/2}$, with the inverse square root taken on the support and zero on the kernel; it is completed outside that support to a code-supported channel. Then

$$1-F_{\rm opt}\leq 1-F_{\rm tr}\leq 2(1-F_{\rm opt}).$$

The bound concerns the fixed maximally mixed input and does not assert a worst-case pure-state fidelity bound.

## Facts & Assumptions

[F1] The stated support completion is a code-supported channel, and its action after noise on code-supported inputs is independent of the completion choice. [[def-qec-distinguishability-transpose-recovery]]

[F2] Entanglement fidelity at the maximally mixed logical input is the normalized maximally entangled-state overlap specified above. [[def-qec-prereq-entanglement-fidelity]]

[F3] For a finite-dimensional isometric code and quantum channel, the support-completed transpose decoder and the optimum over CPTP logical decoders satisfy the displayed factor-two infidelity inequality at the maximally mixed input. [[thm-qec-prereq-transpose-entanglement-guarantee]]

[F4] For a linear isometry $V$ between the stated finite-dimensional Hilbert spaces, any CPTP code-supported recovery $\mathcal T$ gives a CPTP logical decoder $\mathcal R_{\rm tr}(Y)=V^\dagger\mathcal T(Y)V$ by compression. [[lem-author-9fe623b43725-decoder-identification]]

## Proof

**Given:** The finite-dimensional isometry, channel and support-completed transpose recovery in the statement.

**Goal:** Prove both inequalities for the stated entanglement fidelities.

1.1 By [F1], the transpose recovery is a channel with code-supported output. Writing this recovery as $\mathcal T$, [F4] shows that its compression $\mathcal R_{\rm tr}(Y)=V^\dagger\mathcal T(Y)V$ is a completely positive trace-preserving logical decoder. Thus its fidelity is one of the values in the optimization defining $F_{\rm opt}$. With the fidelity convention of [F2], $F_{\rm tr}\leq F_{\rm opt}$, hence $1-F_{\rm opt}\leq1-F_{\rm tr}$. [given, F1, F2, F4]

2.1 The spaces, isometry, channel, support inverse, completion and maximally mixed fidelity satisfy the hypotheses of [F3]. Applying that result gives $1-F_{\rm tr}\leq2(1-F_{\rm opt})$. Together with step 1.1 this proves the stated bound; [F1] also gives independence from the completion choice after encoded noise. [given, F1, F2, F3, step 1.1] ∎

## Source notes

The article invokes this guarantee to motivate checking time as reflecting the code rather than a particular decoder. This contextual interpretation is attributed to the article; the mathematical deduction above uses the independent near-optimality supplier.
