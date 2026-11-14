---
id: texp-qec-distinguishability-aydin-barg-time-curves
kind: thought-experiment
domain: physics
title: Aydin–Barg fidelity time curves and complete-information-loss plateau
status: published
origin: session
deps:
  - def-qec-distinguishability-aydin-barg-code
  - post-qec-distinguishability-equal-rate-model
  - post-qec-distinguishability-atomic-lift
  - alg-qec-distinguishability-numerical-method
  - thm-qec-distinguishability-transpose-fidelity
  - def-qec-prereq-entanglement-fidelity
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - pthm-qec-distinguishability-uniform-decay-rate
formulation_deps:
  - def-qec-distinguishability-aydin-barg-code
  - post-qec-distinguishability-equal-rate-model
  - post-qec-distinguishability-atomic-lift
  - alg-qec-distinguishability-numerical-method
  - thm-qec-distinguishability-transpose-fidelity
  - def-qec-prereq-entanglement-fidelity
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - pthm-qec-distinguishability-uniform-decay-rate
argument_deps:
  - def-qec-distinguishability-aydin-barg-code
  - alg-qec-distinguishability-numerical-method
  - thm-qec-distinguishability-transpose-fidelity
  - def-qec-prereq-entanglement-fidelity
  - post-qec-distinguishability-equal-rate-model
  - post-qec-distinguishability-atomic-lift
  - pthm-qec-distinguishability-uniform-decay-rate
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
dependency_roles:
  pthm-qec-distinguishability-uniform-decay-rate: physical-result
  def-qec-distinguishability-aydin-barg-code: formulation-prerequisite
  post-qec-distinguishability-equal-rate-model: physical-assumption
  post-qec-distinguishability-atomic-lift: physical-assumption
  alg-qec-distinguishability-numerical-method: operational-prerequisite
  thm-qec-distinguishability-transpose-fidelity: mathematical-premise
  def-qec-prereq-entanglement-fidelity: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-dependent-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 16, S5 introductory simulation paragraph; PDF p. 17, Fig. S5.1
        caption and Numerical method
      statement: The article reports fidelity-time curves for the J=4 Aydin–Barg code
        at lift-to-rate ratios 0, 0.1, 1 and 100, faster decay at larger lift,
        and a long-time plateau of 1/4 interpreted as complete loss of logical
        information. It states that it exponentiates the full Lindbladian and
        extracts Kraus operators from the channel's Choi matrix.
      hypotheses: The article's zero-temperature angular-momentum benchmark, its code
        and the indicated lift ratios.
      reading_limits: Read the supplied extracted article text at the cited passages.
        The numerical calculation, figure values and convergence were not
        independently checked; the citation attributes the reported simulation
        rather than proving it.
physical_scope: An idealized finite angular-momentum emitter and model recovery;
  the curves are reported simulations, not laboratory observations.
dependency_level: 16
---

## Statement

Consider the two-dimensional logical Aydin–Barg code in the spin-$4$ block, the equal-rate downward-decay benchmark with rate scale $\gamma>0$, and the diagonal lift of strength $\Delta$. For each nonnegative time, form the modeled channel and evaluate the entanglement fidelity $F_{\rm tr}$ of its support-completed transpose recovery on the maximally mixed logical input.

The article reports curves of $F_{\rm tr}$ against time for $\Delta/\gamma=0,0.1,1,100$, with faster fidelity decay for larger lifting strengths and a long-time plateau at $1/4$, which it interprets as complete loss of logical information. These are reported numerical predictions. No numerical replication, uncertainty bound, convergence estimate or universal monotonicity claim is supplied here.

In particular, if the decoded logical channel is a replacement channel $X\mapsto\operatorname{Tr}(X)\sigma$ for some fixed logical density operator $\sigma$, then its entanglement fidelity is $1/4$. Such a channel sends every logical input state to the same state and hence retains no information that distinguishes logical inputs. The value $1/4$ alone does not establish that a channel is a replacement channel.

## Facts & Assumptions

[F1] The specified spin-$4$ encoding is an isometry from a two-dimensional logical space; its two codewords are the signed Aydin–Barg vectors. [[def-qec-distinguishability-aydin-barg-code]]

[F2] The benchmark adopts the finite downward-jump model with $f(J)=\sqrt{(2J+1)/(2J-1)}$ and rigid-rotor level factors $\eta_J=J(J+1)$. Under its stated physical, spectral and choice hypotheses, the normalized-jump theorem proves total instantaneous downward jump rate $\gamma$ for each magnetic basis state with $J\geq1$, and zero for the ground block. [[post-qec-distinguishability-equal-rate-model]] [[pthm-qec-distinguishability-uniform-decay-rate]]

[F3] The phenomenological lift adds $H_\Delta=\Delta\sum_{J,m}Jm|J,m\rangle\langle J,m|$ to the finite emitter Hamiltonian. Its specification is a physical model assumption. [[post-qec-distinguishability-atomic-lift]]

[F4] For finite generator matrices, the numerical-method interface forms the channel by full Lindbladian exponentiation and obtains Kraus operators from the Choi matrix. Its exact operations have no implied floating-point error bound. [[alg-qec-distinguishability-numerical-method]]

[F5] For an isometric finite-dimensional code and a finite Kraus channel, the QEC-matrix formula gives the entanglement fidelity of support-completed transpose recovery, including singular cases. [[thm-qec-distinguishability-transpose-fidelity]]

[F6] For a logical qubit channel $\mathcal E$, entanglement fidelity at the maximally mixed input is $\langle\Phi|({\rm id}\otimes\mathcal E)(|\Phi\rangle\langle\Phi|)|\Phi\rangle$, where $|\Phi\rangle=(|00\rangle+|11\rangle)/\sqrt2$. A density operator is positive semidefinite with trace one. [[def-qec-prereq-entanglement-fidelity]]

[F7] The article reports the four curves, their qualitative ordering and the plateau in the cited simulation passage and caption; this attribution is not an independently reproduced computation.

[A1] Assume the physical, spectral and finite-model hypotheses of the benchmark and lift interfaces, together with the Axiom of Choice, Countable Choice and Dependent Choice required by those interfaces. [[post-qec-distinguishability-equal-rate-model]] [[post-qec-distinguishability-atomic-lift]] [[math:def-axiom-of-choice]] [[math:def-countable-choice]] [[math:def-dependent-choice]]

## Proof

**Given:** The finite model, code and recovery specified above, and, for the information-loss calculation, a decoded logical replacement channel with fixed density operator $\sigma$.

**Goal:** Identify the conditional fidelity benchmark and explain the status of the reported curves.

1.1 The encoding has logical dimension two by [F1]. The equal instantaneous rate $\gamma$ used in the benchmark follows from the normalized-jump theorem in [F2], applied with the same finite integer-spin blocks, coefficients and inherited hypotheses; the diagonal Hamiltonian lift in [F3] leaves the jump operators and their total rate unchanged. Under the stated physical and finite-model assumptions, [F4] specifies the channel and its Kraus representation, while [F5] identifies the resulting transpose-recovery quantity as entanglement fidelity. These operations specify what the article's reported numerical curves represent; [F7] attributes their qualitative ordering and plateau to the article, without establishing their numerical accuracy. [given, F1, F2, F3, F4, F5, F7, A1]

2.1 For the replacement channel, expand $|\Phi\rangle\langle\Phi|=\frac12\sum_{i,j=0}^1|i\rangle\langle j|\otimes|i\rangle\langle j|$. Since $\operatorname{Tr}(|i\rangle\langle j|)=\delta_{ij}$, applying the channel to the second factor gives $(I/2)\otimes\sigma$. Its overlap with $|\Phi\rangle$ is $\frac14\operatorname{Tr}\sigma=1/4$. Every density input has trace one, so every input has output $\sigma$. Conversely, the fidelity value alone does not prove replacement: for example, the qubit unitary channel $X\mapsto ZXZ^\dagger$ with $Z=\operatorname{diag}(e^{i\pi/3},e^{-i\pi/3})$ has entanglement fidelity $|\operatorname{Tr}Z|^2/4=1/4$, while it preserves distinguishable computational-basis states. Thus the replacement interpretation is conditional and does not follow solely from the reported plateau value. [given, F6, step 1.1, algebra] ∎
