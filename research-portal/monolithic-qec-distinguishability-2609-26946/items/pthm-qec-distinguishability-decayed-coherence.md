---
id: pthm-qec-distinguishability-decayed-coherence
kind: physics-theorem
domain: physics
title: Conditional decoded state and decay coherence
status: draft
origin: session
deps:
  - post-qec-distinguishability-four-level-model
  - pthm-qec-distinguishability-four-level-evolution
  - alg-qec-distinguishability-r4
  - def-qec-prereq-finite-operator-conventions
  - math:def-qc-instrument-and-conditional-state
dependency_roles:
  post-qec-distinguishability-four-level-model: physical-assumption
  pthm-qec-distinguishability-four-level-evolution: physical-result
  alg-qec-distinguishability-r4: formulation-prerequisite
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
      locator: PDF p. 8, Eqs. (S1.2)–(S1.3)
      statement: For positive decay probability, the article gives the null and decay
        probabilities and the normalized recovered decay state with coherence
        factor gamma times the difference of the two exponentials divided by
        (gamma plus i Delta) times the decay probability.
      hypotheses: The article's idealized four-level model and normalized initial code
        state, with positive gamma times t for the normalized decay branch.
      reading_limits: Article-origin attribution to the supplied extracted text; the
        argument below is a local consequence of the stated model evolution and
        recovery, not an independent proof supplied by this citation.
physical_scope: Conditional prediction of the idealized four-level decay model
  and its specified recovery; no experimental observation is asserted.
dependency_level: 3
---

## Statement

Assume the four-level model with real $\omega_0,\Delta$, rate $\gamma\geq0$, and time $t\geq0$. Let $|\psi\rangle=a|0\rangle+b|1\rangle$ be a normalized code state, so $|a|^2+|b|^2=1$. Apply the four-level syndrome recovery $\mathcal R_4$ to its evolved density operator, retaining the null or decay outcome. For $\gamma t>0$, the outcome probabilities are $p_{\rm null}=e^{-\gamma t}$ and $p_{\rm decay}=1-e^{-\gamma t}$. The normalized null output is $|\psi\rangle\langle\psi|$. The normalized decay output, expressed in the recovered code basis $|0\rangle,|1\rangle$, is

$$\rho_d=|a|^2|0\rangle\langle0|+|b|^2|1\rangle\langle1|+[ab^*\chi_d(t)|0\rangle\langle1|+\mathrm{h.c.}],$$

where

$$\chi_d(t)=\frac{\gamma(e^{i\Delta t}-e^{-\gamma t})}{(\gamma+i\Delta)(1-e^{-\gamma t})}.$$

Here h.c. denotes the Hermitian conjugate of the preceding off-diagonal term. At $\gamma t=0$ the decay outcome has zero probability, so no conditional decay state is assigned.

## Facts & Assumptions

[F1] The postulated model has the ordered orthonormal basis $|0\rangle,|1\rangle,|2\rangle,|3\rangle$, code span $\{|0\rangle,|1\rangle\}$, decay span $\{|2\rangle,|3\rangle\}$, real $\omega_0,\Delta$, and $\gamma\geq0$. Its evolution is the specified finite GKSL channel. [[post-qec-distinguishability-four-level-model]]

[F2] For the normalized initial code state, the evolved operator is $e^{-\gamma t}|\psi\rangle\langle\psi|+(1-e^{-\gamma t})(|a|^2|2\rangle\langle2|+|b|^2|3\rangle\langle3|)+[ab^*c(t)|2\rangle\langle3|+\mathrm{h.c.}]$, where $c(t)=\gamma(e^{i\Delta t}-e^{-\gamma t})/(\gamma+i\Delta)$ when $(\gamma,\Delta)\ne(0,0)$ and $c(t)=0$ at $(0,0)$. [[pthm-qec-distinguishability-four-level-evolution]]

[F3] The recovery's null branch is $X\mapsto PXP$ and its decay branch is $X\mapsto UXU^\dagger$, where $P=|0\rangle\langle0|+|1\rangle\langle1|$ and $U=|0\rangle\langle2|+|1\rangle\langle3|$. [[alg-qec-distinguishability-r4]]

[F4] Bras, adjoints and outer products act by the stated finite orthonormal-basis conventions. [[def-qec-prereq-finite-operator-conventions]]

[F5] An instrument outcome's probability is the trace of its unnormalized output; its conditional state is that output divided by its probability when positive, and no conditional state is assigned at zero probability. [[math:def-qc-instrument-and-conditional-state]]

## Proof

**Given:** The model, normalized initial code state, time, and recovery in the statement.

**Goal:** Compute both outcome probabilities and the positive-probability conditional outputs, including the zero-decay-probability boundary.

1.1 The code and decay spans in [F1] are orthogonal. Applying the null operation in [F3] to [F2] therefore gives $e^{-\gamma t}|\psi\rangle\langle\psi|$. Its trace is $e^{-\gamma t}$ because $|\psi\rangle$ is normalized. This number is positive for finite $\gamma,t$, so [F5] gives the original state as the conditional null output. [given, F1, F2, F3, F4, F5, algebra]

1.2 The operator $U$ annihilates the code basis vectors and maps $|2\rangle$ to $|0\rangle$ and $|3\rangle$ to $|1\rangle$. Applying it on both sides of [F2] yields the unnormalized decay output $(1-e^{-\gamma t})(|a|^2|0\rangle\langle0|+|b|^2|1\rangle\langle1|)+[ab^*c(t)|0\rangle\langle1|+\mathrm{h.c.}]$. Its trace is $1-e^{-\gamma t}$, since the off-diagonal terms have zero trace and $|a|^2+|b|^2=1$. [given, F1, F2, F3, F4, algebra]

2.1 If $\gamma t>0$, then $1-e^{-\gamma t}>0$ and $\gamma>0$, so $\gamma+i\Delta\ne0$. Divide the output from step 1.2 by its trace and substitute the expression for $c(t)$ in [F2]. This gives the displayed $\rho_d$ and $\chi_d(t)$. If $\gamma t=0$, the decay probability in step 1.2 is zero, and [F5] assigns no conditional decay state. Thus all asserted branch probabilities and conditional outputs follow. [given, F2, F5, step 1.2, algebra] ∎
