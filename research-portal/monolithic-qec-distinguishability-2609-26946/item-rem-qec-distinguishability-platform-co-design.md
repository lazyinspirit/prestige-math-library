---
title: Checking speed, lift control, and code must be chosen jointly
status: draft
research_item: rem-qec-distinguishability-platform-co-design
dependency_level: 17
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF page 5, Discussion, final paragraph
      statement: The article says that the code and lifting strength set a checking
        time, that protection survives only if syndrome extraction is faster
        than that scale, and that code choice, stray-field control and
        extraction speed should be considered together. It describes fast
        checking as extracting the error syndrome before appreciable
        environmental which-path information accumulates.
      hypotheses: The qualitative platform discussion following the article's
        idealized models; no universal noise or control model is specified in
        this paragraph.
      reading_limits: The text of the supplied PDF page 5 was read. This reference
        attributes the article's discussion and is not used as a proof of a
        repeated-cycle guarantee or an experimental observation.
---

PDF p. 5: ` Discussion, final paragraph `

## Prerequisites

- [def-qec-distinguishability-checking-time](item-def-qec-distinguishability-checking-time)
- [pthm-qec-distinguishability-four-repeated-checks](item-pthm-qec-distinguishability-four-repeated-checks)
- [pthm-qec-distinguishability-atomic-continuous-checking](item-pthm-qec-distinguishability-atomic-continuous-checking)
- [texp-qec-distinguishability-code-check-comparison](item-texp-qec-distinguishability-code-check-comparison)
- [post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)
- [def-qec-prereq-calibrated-cycle-contract](item-def-qec-prereq-calibrated-cycle-contract)
- [def-qec-prereq-inner-outer-resource-interface](item-def-qec-prereq-inner-outer-resource-interface)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)


## Remark

The article's platform-design conclusion is that a monolithic code relying on degenerate error processes must be considered together with the control of stray fields that set the lifting strength and the speed of syndrome extraction. A monolithic code stores logical information in the levels of one physical system. Degeneracy lifting separates energies that were equal in an ideal model; its strength describes the size of the modeled shifts. An error syndrome is an outcome used to identify a correctable error class, and syndrome extraction is the procedure producing that outcome. Which-path information is environmental information that can distinguish decay paths. The article's picture is that fast checking extracts the syndrome before appreciable which-path information accumulates.

For a specified code, accumulated noise and recovery, the operational checking time at target fidelity $F_0\in(0,1]$ is the infimum of elapsed times at which the recovered entanglement fidelity falls strictly below $F_0$, with value $+\infty$ if that set is empty. Entanglement fidelity here measures preservation of a maximally entangled logical input and reference by the recovered logical channel. The article states that the code and lifting strength together set this scale and that protection survives only if syndromes are extracted faster. This is its qualitative design conclusion; the first-crossing definition alone does not prove a universal necessary condition or a bound for a sequence of checks.

## Facts & Assumptions

[F1] The checking-time interface defines the strict first crossing for a specified code, noise family and recovery; it assumes neither monotonic fidelity nor repeated-cycle performance. [def-qec-distinguishability-checking-time](item-def-qec-distinguishability-checking-time)

[F2] In the postulated four-level model, for fixed decay rate $\gamma$, lift $\Delta$ and total time $T$, identical intervals $h=T/N$ with ideal instantaneous transpose recovery have repeated entanglement infidelity $\gamma\Delta^2Th^2/24+O(h^3)$ as $N\to\infty$. The conclusion assumes the stated model and composition of identical logical cycles. [pthm-qec-distinguishability-four-repeated-checks](item-pthm-qec-distinguishability-four-repeated-checks)

[F3] In the finite fixed-jump emitter model, a code correcting the complete specified coherent rank-one error span including identity has ideal fixed-total-time protection in the rapid-check limit when the bounded lift is known, deterministic phases are compensated, and the stated ideal syndrome decoding and re-encoding are available. Here rank one refers to the angular-momentum transition family, not matrix rank. [pthm-qec-distinguishability-atomic-continuous-checking](item-pthm-qec-distinguishability-atomic-continuous-checking)

[F4] The general-lift model postulates a finite angular-momentum system with a known real diagonal energy lift and fixed downward jump operators; continued use of those operators after lifting is a model assumption. [post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)

[F5] In a specified calibrated cycle, the phase data and elapsed interval used by the recovery are available; this does not mean that an unknown decay time is observed. A repeated-cycle error claim needs an appropriate accumulated-error bound, including outcome probabilities when conditional branches are used. [def-qec-prereq-calibrated-cycle-contract](item-def-qec-prereq-calibrated-cycle-contract)

[F6] The model comparison defines code-dependent first-crossing times for a specified lift and reports numerical orderings from the article; those reported curves are not independently verified measurements or repeated-cycle guarantees. [texp-qec-distinguishability-code-check-comparison](item-texp-qec-distinguishability-code-check-comparison)

[F7] An outer-code resource comparison also requires a task, error criterion, resource convention and joint or sequential noise model; a single decoded inner-cycle channel does not specify correlations between blocks or cycles. [def-qec-prereq-inner-outer-resource-interface](item-def-qec-prereq-inner-outer-resource-interface)

[A1] For the finite emitter model and comparison in [F3], [F4] and [F6], retain their physical and spectral hypotheses and assume the Axiom of Choice, Countable Choice and Dependent Choice carried by those interfaces. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)

## Interpretation

**Given:** The stated definitions, hypotheses and cited interfaces.

**Goal:** Justify the stated construction and its scope.

1.1 The definition in [F1] makes a threshold comparison meaningful only after the code, noise, recovery and target have been fixed. The code-dependent comparison in [F6] illustrates why changing the encoding can change the reported scale in a specified model. It does not establish the reported numerical ordering beyond that model or independently validate the numerical calculation. [given, F1, F2, F3, F4, F5, F6, F7]

2.1 The repeated-check conclusions in [F2] and [F3] provide conditional support for the fast-checking design picture, with their different recovery protocols and hypotheses kept explicit. In particular, the fixed-$T$ limit in [F3] uses calibrated phase compensation and fixed jump operators as in [F4]–[F5]; it is not a claim that an arbitrary check interval below a first-crossing time guarantees protection. The coefficient in [F2] is an asymptotic statement, not a finite-interval error certificate without a remainder bound. [F1, F2, F3, F4, F5, F6, F7, step 1.1]

3.1 Choosing a code, controlling the lift and setting the check interval are therefore linked design decisions in these models. The article's environmental-information explanation is an interpretation of that design picture, not a separate measurement asserted here. Actual platform performance and any outer-code overhead require the additional control, noise and resource specifications described in [F5] and [F7]. [F1, F2, F3, F4, F5, F6, F7, step 1.1] ∎
