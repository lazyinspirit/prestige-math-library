---
id: rem-qec-distinguishability-code-comparison-interpretation
kind: remark
domain: physics
title: Spacing interpretation and rate-normalization qualification
status: draft
origin: session
deps:
  - def-qec-distinguishability-transpose-recovery
  - texp-qec-distinguishability-code-check-comparison
  - pthm-qec-distinguishability-aydin-barg-correction
  - def-qec-distinguishability-checking-time
  - post-qec-distinguishability-equal-rate-model
  - post-qec-distinguishability-atomic-lift
  - def-qec-distinguishability-ae-code
  - def-qec-distinguishability-aydin-barg-code
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - pthm-qec-distinguishability-uniform-decay-rate
formulation_deps:
  - def-qec-distinguishability-transpose-recovery
  - texp-qec-distinguishability-code-check-comparison
  - def-qec-distinguishability-checking-time
  - post-qec-distinguishability-equal-rate-model
  - post-qec-distinguishability-atomic-lift
  - def-qec-distinguishability-ae-code
  - def-qec-distinguishability-aydin-barg-code
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - pthm-qec-distinguishability-uniform-decay-rate
argument_deps:
  - def-qec-distinguishability-transpose-recovery
  - texp-qec-distinguishability-code-check-comparison
  - pthm-qec-distinguishability-aydin-barg-correction
  - def-qec-distinguishability-checking-time
  - post-qec-distinguishability-equal-rate-model
  - post-qec-distinguishability-atomic-lift
  - def-qec-distinguishability-ae-code
  - def-qec-distinguishability-aydin-barg-code
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - pthm-qec-distinguishability-uniform-decay-rate
dependency_roles:
  def-qec-distinguishability-transpose-recovery: mathematical-premise
  texp-qec-distinguishability-code-check-comparison: physical-result
  pthm-qec-distinguishability-aydin-barg-correction: physical-result
  def-qec-distinguishability-checking-time: formulation-prerequisite
  post-qec-distinguishability-equal-rate-model: physical-assumption
  post-qec-distinguishability-atomic-lift: physical-assumption
  def-qec-distinguishability-ae-code: formulation-prerequisite
  def-qec-distinguishability-aydin-barg-code: formulation-prerequisite
  math:def-axiom-of-choice: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-dependent-choice: mathematical-premise
  pthm-qec-distinguishability-uniform-decay-rate: physical-result
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 4, Fig. 3 caption and code-comparison paragraph; p. 6, code
        definitions
      statement: The article reports an Æ checking-time advantage over Aydin–Barg up
        to approximately Δ/γ = 50 and suggests that greater support separation
        improves robustness when lifting makes emitted photons more informative.
        It normalizes each decaying state's total rate to γ, notes that
        species-dependent rates may reorder the codes, and evaluates transpose
        fidelity numerically because these codes have no closed-form finite-time
        fidelities.
      hypotheses: The article's equal-rate rigid-rotor benchmark, Jm lift, selected
        codes, target fidelity and transpose recovery.
      reading_limits: The supplied extracted text at these locations was read for
        article attribution. No numerical replay, figure measurement,
        independent verification of the reported ordering, or general
        nonexistence proof for closed forms is claimed.
physical_scope: Interpretation of a conditional numerical benchmark for an
  idealized finite angular-momentum emitter; it reports neither a laboratory
  observation nor a universal spacing-performance law.
dependency_level: 17
---

## Remark

In the article's fixed-jump benchmark, the selected absorption–emission (Æ) and Aydin–Barg codes correct the same coherent order-one tensor error family in their respective host blocks. A codeword's magnetic support is the set of labels $m$ with nonzero amplitude; the minimum gap between distinct labels in the union of the two supports is three for the selected Æ code and two for the selected Aydin–Barg code. The article reports that the Æ code has the larger checking time until approximately $\Delta/\gamma=50$, after which the two curves nearly coincide and Aydin–Barg is marginally ahead. It suggests that greater support separation improves robustness when lifting makes emitted photons more informative. This comparison motivates that interpretation but does not establish a general monotonic relationship between support separation and performance.

Here the checking time is the infimum of times at which the recovered entanglement fidelity for the maximally mixed logical input falls strictly below $0.9999$, with infinity if that set is empty. The recovery used for each code and time is its transpose recovery. In the benchmark every state in a decaying block has total instantaneous downward rate $\gamma>0$, while the phenomenological lift shifts the energy of $|J,m\rangle$ by $\Delta Jm$. The article notes that real-species rates can depend strongly on $J$ and may reorder the codes. It also states that closed-form finite-time fidelities are unavailable for the compared codes and evaluates transpose fidelity numerically. These are attributed model predictions and source statements; no numerical accuracy or general impossibility of a closed form is asserted here.

## Remark references

[[texp-qec-distinguishability-code-check-comparison]]

[[pthm-qec-distinguishability-aydin-barg-correction]]

[[def-qec-distinguishability-checking-time]]

[[def-qec-distinguishability-transpose-recovery]]

[[post-qec-distinguishability-equal-rate-model]]

[[post-qec-distinguishability-atomic-lift]]

[[def-qec-distinguishability-ae-code]]

[[def-qec-distinguishability-aydin-barg-code]]

## Facts & Assumptions

[F1] For the specified finite selected target blocks containing each host block, both codes satisfy the pair-product correction condition for the coherent rank-zero and rank-one tensor span. The selected support gaps are three and two, respectively. The correction statement does not cover arbitrary separately resolved matrix-unit errors or arbitrary finite-time repeated jumps. [[pthm-qec-distinguishability-aydin-barg-correction]] [[def-qec-distinguishability-ae-code]] [[def-qec-distinguishability-aydin-barg-code]]

[F2] The comparison supplier specifies the finite $J=0,\ldots,5$ benchmark, four encodings, target $0.9999$, time-dependent transpose recovery and the article's reported numerical ordering. It does not independently establish the numerical inequalities. [[texp-qec-distinguishability-code-check-comparison]] [[def-qec-distinguishability-transpose-recovery]]

[F3] Checking time is the infimum of the strict sub-target fidelity set, with the empty-set convention. It is a first-crossing boundary and does not alone imply a repeated-cycle performance bound. [[def-qec-distinguishability-checking-time]]

[F4] The equal-rate postulate specifies the jump coefficients, and the uniform-decay result proves total rate $\gamma$ for every state with $J\geq1$. The separate lift adds $\Delta Jm$ to its energy. The comparison in [F2] explicitly assumes that the jumps are held fixed after lifting, so the rate identity continues to apply. Different transition energies alone establish neither that continuation nor perfect environmental discrimination. [[post-qec-distinguishability-equal-rate-model]] [[pthm-qec-distinguishability-uniform-decay-rate]] [[post-qec-distinguishability-atomic-lift]] [[texp-qec-distinguishability-code-check-comparison]]

[A1] Adopt the finite-emitter, downward-jump, physical and spectral hypotheses of the comparison supplier and its equal-rate model, including Choice, Countable Choice and Dependent Choice. [[texp-qec-distinguishability-code-check-comparison]] [[post-qec-distinguishability-equal-rate-model]] [[math:def-axiom-of-choice]] [[math:def-countable-choice]] [[math:def-dependent-choice]]

## Proof

**Given:** The selected codes and conditional benchmark in the Remark, together with the hypotheses in [A1].

**Goal:** Explain the scope of the article's comparison and the limits of its spacing interpretation.

1.1 The code definitions and [F1] give minimum support gaps three and two and correction for the stated coherent order-one spans in the respective host blocks. The latter is a common error-family description, not an assertion that all resolved transitions or finite-time channels are corrected. [given, F1]

2.1 Under [A1], [F2] specifies the numerical comparison and attributes its reported ordering to the article. By [F3], the plotted quantity concerns the first sub-target crossing for the stated recovery; by [F4], the rate normalization and lift are particular model choices. The two-code comparison changes host block and code structure as well as support gap, and its reported near-crossing depends on the specified calculation. It therefore supplies the article's stated motivation for a spacing interpretation but does not prove a universal monotonic spacing law or determine an ordering for species with different rates. The source's statement about unavailable closed forms is likewise attributed rather than proved. [A1, F2, F3, F4, step 1.1] ∎
