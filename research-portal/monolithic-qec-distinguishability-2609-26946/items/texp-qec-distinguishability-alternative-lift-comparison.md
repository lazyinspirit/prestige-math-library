---
id: texp-qec-distinguishability-alternative-lift-comparison
kind: thought-experiment
domain: physics
title: Changing the lift to rotational-energy scaling
status: published
origin: session
deps:
  - post-qec-distinguishability-atomic-lift
  - post-qec-distinguishability-equal-rate-model
  - def-qec-distinguishability-ae-code
  - def-qec-distinguishability-aydin-barg-code
  - texp-qec-distinguishability-code-check-comparison
  - def-qec-prereq-diagonal-lift-phase-data
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - post-qec-distinguishability-general-lift-model
  - pthm-qec-distinguishability-uniform-decay-rate
dependency_roles:
  post-qec-distinguishability-atomic-lift: physical-assumption
  post-qec-distinguishability-equal-rate-model: physical-assumption
  def-qec-distinguishability-ae-code: formulation-prerequisite
  def-qec-distinguishability-aydin-barg-code: formulation-prerequisite
  texp-qec-distinguishability-code-check-comparison: formulation-prerequisite
  def-qec-prereq-diagonal-lift-phase-data: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-dependent-choice: mathematical-premise
  post-qec-distinguishability-general-lift-model: physical-assumption
  pthm-qec-distinguishability-uniform-decay-rate: physical-result
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF pp. 4–5, final paragraph of p. 4 and opening continuation on p. 5
      statement: The article reports that replacing J by J(J+1) in its lift penalizes
        the higher-J Æ code, moves the crossover to approximately Delta/gamma =
        1, and leaves Aydin–Barg ahead by up to 20% thereafter.
      hypotheses: The article's equal-rate angular-momentum code comparison and the
        specified alternative lift.
      reading_limits: The supplied extracted text at the cited passage was read. This
        reference attributes the numerical comparison; no independent numerical
        replay, error estimate, figure measurement, or experimental validation
        is claimed.
physical_scope: An idealized finite angular-momentum emitter and code comparison
  under the stated benchmark assumptions; reported numerical predictions are not
  laboratory observations.
dependency_level: 17
formulation_deps:
  - post-qec-distinguishability-atomic-lift
  - post-qec-distinguishability-equal-rate-model
  - def-qec-distinguishability-ae-code
  - def-qec-distinguishability-aydin-barg-code
  - texp-qec-distinguishability-code-check-comparison
  - def-qec-prereq-diagonal-lift-phase-data
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - post-qec-distinguishability-general-lift-model
  - pthm-qec-distinguishability-uniform-decay-rate
argument_deps:
  - post-qec-distinguishability-atomic-lift
  - post-qec-distinguishability-equal-rate-model
  - def-qec-distinguishability-ae-code
  - def-qec-distinguishability-aydin-barg-code
  - texp-qec-distinguishability-code-check-comparison
  - def-qec-prereq-diagonal-lift-phase-data
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - post-qec-distinguishability-general-lift-model
  - pthm-qec-distinguishability-uniform-decay-rate
---

## Statement

Consider the equal-rate benchmark with the selected absorption–emission (Æ) code in the $J=5$ block and the Aydin–Barg code in the $J=4$ block. Replace the original diagonal lift $\Delta Jm$ by $\Delta J(J+1)m$, retaining the benchmark's other assumptions and checking-time convention. Adopt the general-lift postulate with $\Delta(J,m)=\Delta J(J+1)m$ and the same three downward jump matrices and rate parameter; this fixed-jump continuation after changing the lift is an additional model assumption. Here $J$ labels a spin block, $m=-J,-J+1,\ldots,J$ labels its magnetic basis states, $\Delta\geq0$ is the lift parameter, and $\gamma>0$ is the common modeled instantaneous downward rate for states with $J\geq1$.

At a fixed $J$ and magnetic label $m$, the new lift is $J+1$ times the original lift. For a downward transition $|J,m\rangle\to|J-1,m+\delta\rangle$, its contribution to source-minus-destination energy is $\Delta[2Jm-J(J-1)\delta]$. Thus, at the same $\Delta$ and the same magnetic label, the multiplier is $6$ in the Æ host block and $5$ in the Aydin–Barg host block. These energy-shift comparisons alone do not establish an ordering of checking times.

The article reports that this change penalizes the higher-$J$ Æ code, moves the checking-time crossover to approximately $\Delta/\gamma=1$, and leaves Aydin–Barg ahead by up to $20\%$ thereafter. These are attributed predictions of the model, not independently verified numerical inequalities or measured outcomes.

## Facts & Assumptions

[F1] The original phenomenological lift assigns energy shift $\Delta Jm$ to $|J,m\rangle$ in the finite emitter. Its physical interpretation and the emitter assumptions are those of the stated model. [[post-qec-distinguishability-atomic-lift]]

[F2] The benchmark takes $\gamma>0$ and uses the stated jump coefficients and rigid-rotor level factors $J(J+1)$. For those jumps the uniform-decay result gives instantaneous downward rate $\gamma$ for each basis state with $J\geq1$. For the alternative lift, adopt the general-lift postulate with $\Delta(J,m)=\Delta J(J+1)m$ on the same finite space and retain those same jumps. Thus the rate identity still applies, without deriving the fixed-jump continuation from the changed energies. [[post-qec-distinguishability-equal-rate-model]] [[pthm-qec-distinguishability-uniform-decay-rate]] [[post-qec-distinguishability-general-lift-model]]

[F3] The selected Æ and Aydin–Barg encodings have host blocks $J=5$ and $J=4$, respectively. [[def-qec-distinguishability-ae-code]] [[def-qec-distinguishability-aydin-barg-code]]

[F4] The comparison defines checking time as the infimum of times at which the transpose-recovery entanglement fidelity at the maximally mixed logical input is strictly below $0.9999$, taking the value $+\infty$ if no such time exists. Its reported original-lift crossover is a numerical model prediction. [[texp-qec-distinguishability-code-check-comparison]]

[F5] For a finite diagonal lift, the contribution to a directed transition energy is the source lift eigenvalue minus the destination lift eigenvalue. [[def-qec-prereq-diagonal-lift-phase-data]]

[A1] Assume the finite-emitter, downward-jump, bath, physical and spectral hypotheses carried by the benchmark and comparison. Adopt the Axiom of Choice, Countable Choice and Dependent Choice as carried by those interfaces. [[post-qec-distinguishability-equal-rate-model]] [[texp-qec-distinguishability-code-check-comparison]] [[math:def-axiom-of-choice]] [[math:def-countable-choice]] [[math:def-dependent-choice]]

## Proof

**Given:** The benchmark and encodings in [F1]–[F4], the alternative diagonal lift in the statement, and the assumptions in [A1].

**Goal:** Derive the stated energy-shift comparisons and specify the status of the reported checking-time comparison.

1.1 At fixed $J,m$, the alternative eigenvalue is $(J+1)$ times $\Delta Jm$, including when either value is zero. The host-block multipliers are therefore $6$ and $5$ by [F3]. Applying the source-minus-destination rule to a downward transition gives $\Delta[J(J+1)m-J(J-1)(m+\delta)]=\Delta[2Jm-J(J-1)\delta]$. [given, F3, F5, algebra]

2.1 Under [A1], the checking-time convention in [F4] can be applied to the alternative model specified in [F2] once its channel and recovery fidelity have been computed. Step 1.1 compares diagonal energy shifts, but supplies neither those fidelity curves nor bounds on their threshold crossings. The stated crossover, penalty and relative advantage are consequently retained as the article's reported numerical predictions; their numerical accuracy does not follow from the energy algebra. [given, A1, F2, F4, step 1.1] ∎

## Remarks

The article passage supplies no separate plotted data or error bars for this alternative-lift comparison. The comparison uses the same nominal $\Delta$ and equal-rate benchmark; its ordering need not describe a different physical species or a different rate model.
