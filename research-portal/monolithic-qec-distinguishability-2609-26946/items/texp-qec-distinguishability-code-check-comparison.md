---
id: texp-qec-distinguishability-code-check-comparison
kind: thought-experiment
domain: physics
title: Checking-time comparison under the Jm lift
status: draft
origin: session
deps:
  - def-qec-distinguishability-checking-time
  - thm-qec-distinguishability-transpose-fidelity
  - post-qec-distinguishability-equal-rate-model
  - post-qec-distinguishability-atomic-lift
  - def-qec-distinguishability-minimal-code
  - def-qec-distinguishability-detection-code
  - def-qec-distinguishability-ae-code
  - def-qec-distinguishability-aydin-barg-code
  - alg-qec-distinguishability-numerical-method
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - post-qec-distinguishability-general-lift-model
  - pthm-qec-distinguishability-uniform-decay-rate
formulation_deps:
  - def-qec-distinguishability-checking-time
  - post-qec-distinguishability-equal-rate-model
  - post-qec-distinguishability-atomic-lift
  - def-qec-distinguishability-minimal-code
  - def-qec-distinguishability-detection-code
  - def-qec-distinguishability-ae-code
  - def-qec-distinguishability-aydin-barg-code
  - alg-qec-distinguishability-numerical-method
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - post-qec-distinguishability-general-lift-model
  - pthm-qec-distinguishability-uniform-decay-rate
argument_deps:
  - def-qec-distinguishability-checking-time
  - thm-qec-distinguishability-transpose-fidelity
  - post-qec-distinguishability-equal-rate-model
  - post-qec-distinguishability-atomic-lift
  - def-qec-distinguishability-minimal-code
  - def-qec-distinguishability-detection-code
  - def-qec-distinguishability-ae-code
  - def-qec-distinguishability-aydin-barg-code
  - alg-qec-distinguishability-numerical-method
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - post-qec-distinguishability-general-lift-model
  - pthm-qec-distinguishability-uniform-decay-rate
dependency_roles:
  def-qec-distinguishability-checking-time: formulation-prerequisite
  thm-qec-distinguishability-transpose-fidelity: mathematical-premise
  post-qec-distinguishability-equal-rate-model: physical-assumption
  post-qec-distinguishability-atomic-lift: physical-assumption
  def-qec-distinguishability-minimal-code: formulation-prerequisite
  def-qec-distinguishability-detection-code: formulation-prerequisite
  def-qec-distinguishability-ae-code: formulation-prerequisite
  def-qec-distinguishability-aydin-barg-code: formulation-prerequisite
  alg-qec-distinguishability-numerical-method: operational-prerequisite
  math:def-axiom-of-choice: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-dependent-choice: mathematical-premise
  post-qec-distinguishability-general-lift-model: physical-assumption
  pthm-qec-distinguishability-uniform-decay-rate: physical-result
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 4, Fig. 3 caption and code-comparison paragraph; PDF p. 17,
        Numerical method
      statement: The article reports checking-time curves for four codes at target
        fidelity 0.9999, their small-lift ordering, a crossover near Delta/gamma
        = 50, and a direct Lindbladian-exponentiation and Choi-matrix procedure.
      hypotheses: The article's equal-rate rigid-rotor benchmark, phenomenological Jm
        lift, selected code instances and transpose recovery.
      reading_limits: The supplied extracted text at the cited locations was read.
        This is attribution of the article's model and reported numerical
        results; no computation, figure measurement, uncertainty analysis or
        independent confirmation was performed.
physical_scope: Idealized finite angular-momentum emitter and recovery models;
  the reported curves are numerical model predictions, not laboratory
  observations.
dependency_level: 16
---

## Statement

Consider the following idealized comparison. Take a finite angular-momentum emitter with spin blocks $J=0,1,\ldots,5$, magnetic labels $m=-J,\ldots,J$, common instantaneous downward rate $\gamma>0$ for each state with $J\geq1$, and rigid-rotor energy factors $J(J+1)$. Add the modeled energy lift $\Delta Jm$, with $\Delta\geq0$. Use the downward-jump and other physical, spectral and choice hypotheses of the equal-rate model. Adopt the finite lifted-model postulate with $\Delta(J,m)=\Delta Jm$: its same three benchmark downward jump matrices and rate parameter are retained after adding the lift. This continuation is a separate physical assumption, not a deduction from the energy shifts. Compare the four specified two-dimensional encodings: the minimal code in $J=1$, detection code in $J=2$, Aydin–Barg code in $J=4$, and absorption–emission (Æ) code in $J=5$.

For each code and elapsed time, apply the modeled noise and its code-dependent transpose recovery. Its checking time is $\tau=\inf\{t\geq0:F_{\rm tr}(t)<0.9999\}$, with $\tau=+\infty$ if the set is empty. Here $F_{\rm tr}$ is the entanglement fidelity at the maximally mixed logical input; the transpose recovery is constructed from the channel and code at that time. A larger checking time means a later first threshold crossing in this definition, not by itself a repeated-cycle guarantee.

The article reports the following numerical results for this benchmark. At small lift, the checking times saturate at code-dependent values ordered $\tau^\star_{\rm minimal}<\tau^\star_{\rm detection}<\tau^\star_{\rm Aydin\text{–}Barg}<\tau^\star_{\rm Æ}$. For the compared codes retaining part of the encoded information after a decay, checking time decreases as distinguishability increases; the minimal code's checking time is independent of the lift. The Æ curve is reported highest up to approximately $\Delta/\gamma=50$; above that the two rank-one-correcting curves nearly coincide, with Aydin–Barg marginally ahead. Rank one here describes the angular-momentum transition family, not matrix rank. These statements are attributed numerical predictions, not independently established inequalities or measured outcomes.

## Statement references

[[def-qec-distinguishability-checking-time]]

[[post-qec-distinguishability-equal-rate-model]]

[[post-qec-distinguishability-atomic-lift]]

[[def-qec-distinguishability-minimal-code]]

[[def-qec-distinguishability-detection-code]]

[[def-qec-distinguishability-ae-code]]

[[def-qec-distinguishability-aydin-barg-code]]

[[alg-qec-distinguishability-numerical-method]]

[[post-qec-distinguishability-general-lift-model]]

[[pthm-qec-distinguishability-uniform-decay-rate]]

## Facts & Assumptions

[F1] For a finite isometric code and channel, the support-completed transpose recovery has entanglement fidelity $d_L^{-2}\|\operatorname{Tr}_L\sqrt M\|_F^2$, where $M$ is the code-and-Kraus Gram matrix and $d_L$ is the logical dimension. This includes singular matrices. [[thm-qec-distinguishability-transpose-fidelity]]

[F2] The checking-time interface takes the infimum of the strict sub-target fidelity set, with the empty-set convention stated above; it does not assume monotonicity or a repeated-cycle bound. [[def-qec-distinguishability-checking-time]]

[F3] The benchmark assigns $\eta_J=J(J+1)$ and the stated jump coefficients; its common instantaneous downward rate $\gamma$ is supplied by the uniform-decay result. The separate lift adds $\Delta Jm$ to the energy. The general-lift postulate with $\Delta(J,m)=\Delta Jm$ retains the same three jumps after lifting, so the rate identity still applies. The coefficients, lift and fixed-jump continuation are assumptions; the rate identity is a conditional deduction. [[post-qec-distinguishability-equal-rate-model]] [[post-qec-distinguishability-atomic-lift]] [[post-qec-distinguishability-general-lift-model]] [[pthm-qec-distinguishability-uniform-decay-rate]]

[F4] The four named suppliers specify isometric encodings in the respective spin blocks. The Æ and Aydin–Barg suppliers state their correction properties for their specified coherent rank-one error spans. [[def-qec-distinguishability-minimal-code]] [[def-qec-distinguishability-detection-code]] [[def-qec-distinguishability-ae-code]] [[def-qec-distinguishability-aydin-barg-code]]

[F5] The numerical-method interface constructs the finite channel by exponentiating its generator, extracts a Kraus family from its Choi matrix and evaluates the fidelity formula. Approximate implementation and threshold crossing require a separate error assessment. [[alg-qec-distinguishability-numerical-method]]

[A1] Assume the physical, spectral and finite-emitter hypotheses of [F3], including the downward-jump model. Adopt the Axiom of Choice, Countable Choice and Dependent Choice carried by those model interfaces. [[math:def-axiom-of-choice]] [[math:def-countable-choice]] [[math:def-dependent-choice]]

## Proof

**Given:** The benchmark assumptions, the four encodings and the checking-time convention in the statement.

**Goal:** Specify the conditional calculation and the interpretation of its reported output.

1.1 Under [A1], [F3] fixes the model parameters, lift and retained jump matrices and supplies the common-rate identity; [F4] supplies the four isometries. For each code and time, [F5] specifies a channel and a Kraus family. Applying [F1] with logical dimension two gives the corresponding transpose-recovery fidelity. This is a conditional calculation for the stated model. [given, A1, F1, F3, F4, F5]

2.1 Applying the strict first-crossing definition [F2] to each resulting fidelity curve defines the four checking times, including the empty-set case. If a numerical implementation resolves the crossings and comparison differences to sufficient accuracy, its output can be compared as described in the statement. The article reports the stated ordering, trends and crossover; the calculation specified here does not itself establish their numerical accuracy. Thus the reported curves are predictions conditional on the model and computation, and the checking-time definition alone supplies no repeated-cycle performance guarantee. [given, F2, F5, step 1.1] ∎

## Remarks

The article reports direct exponentiation of the full Lindbladian and extraction of Kraus operators from the resulting Choi matrix. No solver version, precision, crossing search, certified error bounds or independent numerical replay is supplied here. In particular, a nearly coincident pair of curves cannot be ordered reliably from this item alone. Real species may have rates that depend on $J$, so the equal-rate benchmark does not by itself determine their code ordering.
