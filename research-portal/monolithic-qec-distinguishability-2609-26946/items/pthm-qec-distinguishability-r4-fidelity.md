---
id: pthm-qec-distinguishability-r4-fidelity
kind: physics-theorem
domain: physics
title: Branch-averaged decoded state fidelity
status: draft
origin: session
deps:
  - post-qec-distinguishability-four-level-model
  - alg-qec-distinguishability-r4
  - pthm-qec-distinguishability-decayed-coherence
  - def-qec-prereq-finite-operator-conventions
  - math:def-qc-instrument-and-conditional-state
dependency_roles:
  post-qec-distinguishability-four-level-model: physical-assumption
  alg-qec-distinguishability-r4: formulation-prerequisite
  pthm-qec-distinguishability-decayed-coherence: physical-result
  def-qec-prereq-finite-operator-conventions: mathematical-premise
  math:def-qc-instrument-and-conditional-state: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 2, Eq. (4); PDF p. 8, Eq. (S1.4)
      statement: The branch-averaged decoded state fidelity is the null probability
        plus the decay probability times the conditional decay-state overlap;
        its explicit expression has loss 2|a|^2|b|^2(1-exp(-gamma t))(1-Re
        chi_d).
      hypotheses: The idealized four-level model, the specified recovery, and a
        normalized initial code state.
      reading_limits: Article-origin attribution based on the supplied extracted
        article text. The derivation below uses the stated model consequence and
        does not treat the article's fidelity formula as a proof premise.
physical_scope: Conditional prediction of the idealized four-level decay model
  and its specified recovery; no experimental observation is asserted.
dependency_level: 4
---

## Statement

Assume the four-level model with real $\omega_0,\Delta$, rate $\gamma\geq0$, and finite time $t\geq0$. Its code is spanned by the orthonormal states $|0\rangle,|1\rangle$. For a normalized initial code state $|\psi\rangle=a|0\rangle+b|1\rangle$, apply the specified recovery $\mathcal R_4$ after the model evolution. Define the branch-averaged decoded state fidelity $F_\psi(t)$ as the sum, over recovery outcomes, of each outcome probability times the overlap of its normalized output with $|\psi\rangle$; a zero-probability outcome contributes zero.

If $\gamma t>0$, let $\rho_d(t)$ be the normalized decoded decay output and let $\chi_d(t)=\gamma(e^{i\Delta t}-e^{-\gamma t})/[(\gamma+i\Delta)(1-e^{-\gamma t})]$. Then

$$F_\psi(t)=p_{\rm null}+p_{\rm decay}\langle\psi|\rho_d(t)|\psi\rangle=1-2|a|^2|b|^2(1-e^{-\gamma t})(1-\operatorname{Re}\chi_d(t)),$$

where $p_{\rm null}=e^{-\gamma t}$ and $p_{\rm decay}=1-e^{-\gamma t}$. The normalized null output is the initial state, so only the decay branch can contribute fidelity loss. If $\gamma t=0$, the decay probability is zero, no normalized decay output is assigned, and $F_\psi(t)=1$.

## Statement references

[[post-qec-distinguishability-four-level-model]]

[[alg-qec-distinguishability-r4]]

[[pthm-qec-distinguishability-decayed-coherence]]

[[def-qec-prereq-finite-operator-conventions]]

[[math:def-qc-instrument-and-conditional-state]]

## Facts & Assumptions

[F1] In the postulated four-level model, $|0\rangle,|1\rangle$ are orthonormal code states and $\omega_0,\Delta$ are real with $\gamma\geq0$. [[post-qec-distinguishability-four-level-model]]

[F2] The recovery $\mathcal R_4$ has a null operation $X\mapsto PXP$ and a decay operation $X\mapsto UXU^\dagger$, where $P=|0\rangle\langle0|+|1\rangle\langle1|$ and $U=|0\rangle\langle2|+|1\rangle\langle3|$. [[alg-qec-distinguishability-r4]]

[F3] Under the stated model and recovery, the branch probabilities are $e^{-\gamma t}$ and $1-e^{-\gamma t}$. The normalized null output is $|\psi\rangle\langle\psi|$. When $\gamma t>0$, the normalized decay output is $\rho_d=|a|^2|0\rangle\langle0|+|b|^2|1\rangle\langle1|+[ab^*\chi_d|0\rangle\langle1|+\mathrm{h.c.}]$, with the displayed $\chi_d$; h.c. means the Hermitian conjugate of the preceding off-diagonal term. [[pthm-qec-distinguishability-decayed-coherence]]

[F4] Bras, adjoints and outer products use the finite orthonormal-basis conventions. [[def-qec-prereq-finite-operator-conventions]]

[F5] An instrument outcome has probability equal to the trace of its unnormalized output; its conditional state is defined by division by that probability only when it is positive. [[math:def-qc-instrument-and-conditional-state]]

## Proof

**Given:** The model, finite time, normalized initial state and recovery in the statement.

**Goal:** Calculate the branch-averaged fidelity and treat the zero-decay boundary.

1.1 Suppose $\gamma t>0$. Using the orthonormal basis and the state in [F3], direct evaluation of the overlap gives $\langle\psi|\rho_d|\psi\rangle=|a|^4+|b|^4+2|a|^2|b|^2\operatorname{Re}\chi_d=1-2|a|^2|b|^2(1-\operatorname{Re}\chi_d)$, since $|a|^2+|b|^2=1$. [given, F1, F3, F4, algebra]

2.1 The null output in [F3] has overlap one with $|\psi\rangle$. Weighting the two conditional overlaps by the probabilities in [F3], as in the definition of $F_\psi$, and substituting step 1.1 gives the displayed formula. Thus the null branch contributes no fidelity loss. If $\gamma t=0$, [F3] gives probabilities one and zero; by [F5] the zero-probability branch has no assigned conditional state and contributes zero, while the null overlap remains one. Hence $F_\psi(t)=1$ at this boundary. [given, F2, F3, F5, step 1.1, algebra] ∎
