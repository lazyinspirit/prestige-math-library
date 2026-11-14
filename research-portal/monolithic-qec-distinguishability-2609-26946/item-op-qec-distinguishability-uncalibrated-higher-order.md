---
title: Accumulated error of the uncalibrated augmented checks
status: draft
research_item: op-qec-distinguishability-uncalibrated-higher-order
dependency_level: 20
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: "PDF page 16, Remark: uncalibrated lifts, final sentence, and final S4
        paragraph"
      statement: The article leaves the accumulated error from higher-order terms and
        the performance of the uncalibrated augmented-check extension for future
        analysis of the complete repeated-check channel.
      hypotheses: The idealized lifted spin model and augmented syndrome check
        discussed in the cited remark, including the displayed Æ and Aydin–Barg
        codes.
      reading_limits: The supplied extracted text of PDF page 16 was read for the
        article's formulation and status at publication. This is attribution,
        not independent evidence of a solution or a later status review.
---

PDF p. 16: ` Remark: uncalibrated lifts, final sentence; final S4 paragraph `

## Prerequisites

- [post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)
- [alg-qec-distinguishability-augmented-jz-check](item-alg-qec-distinguishability-augmented-jz-check)
- [pthm-qec-distinguishability-augmented-jz-linear-correction](item-pthm-qec-distinguishability-augmented-jz-linear-correction)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)


## Open problem

For either the spin-five Æ code or the spin-four Aydin–Barg code, with initial spin $J_0=5$ or $4$, respectively, consider the proposed ideal augmented check. The code is the two-dimensional subspace $\mathcal C$ spanned by its displayed logical codewords; $J_z$ is the spin component whose magnetic-basis eigenvalue is $m$. The check distinguishes $\mathcal C$ from $\mathcal D=J_z\mathcal C$ in the initial spin manifold and applies the specified inverse isometry $W:\mathcal D\to\mathcal C$ on the $\mathcal D$ outcome. The lift is uncalibrated: its strength is not supplied to the recovery rule.

Adopt the general bounded diagonal lift postulate on the finite integer-spin blocks $J=0,\ldots,N$ with $N\geq J_0$, including its physical, spectral and choice hypotheses. Specialize its lift to $\Delta(J,m)=\Delta_0Jm$ for real $\Delta_0$. The noise evolution over an interval $\tau\geq0$ is the exact finite GKSL channel specified there by the Hamiltonian $H$ and the three downward jumps $L_\delta$, $\delta=-1,0,1$. For short-checking asymptotics use its regime $\gamma\tau\ll1$ and $|\Delta_0|J_0^2\tau\ll1$. The host-manifold null-branch rotation is $e^{-i\theta J_z}$ with $\theta=\Delta_0J_0\tau$.

Determine the higher-order residual errors and their accumulated effect under the complete repeated-check channel, including the decay and other outcome branches of the modeled evolution. In particular, combine this noise evolution with specified outcome maps, conditional recovery operations and treatment of all outcomes sufficiently to define that channel, and determine its dependence on the lift and checking interval. The first-order isolated-rotation result below does not by itself determine this repeated-channel performance.

## Open problem references

[post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)

[alg-qec-distinguishability-augmented-jz-check](item-alg-qec-distinguishability-augmented-jz-check)

[pthm-qec-distinguishability-augmented-jz-linear-correction](item-pthm-qec-distinguishability-augmented-jz-linear-correction)

## Status

The article identifies the accumulated higher-order performance of this uncalibrated extension as future work. The supplied article is dated September 24, 2026. No later status search or solution is claimed here.

## Facts & Assumptions

[F1] The proposed check uses orthogonal outcomes for $\mathcal C$, $\mathcal D$, the remainder of the initial spin manifold, and its orthogonal complement; it applies $W$ on the $\mathcal D$ branch and retains the original check's conditional procedure on the complementary-manifold branch. [alg-qec-distinguishability-augmented-jz-check](item-alg-qec-distinguishability-augmented-jz-check)

[F2] For an isolated rotation $e^{-i\theta J_z}$ of a code density operator, the sum of the unnormalized $\mathcal C$ and corrected $\mathcal D$ outputs is the input plus $O(\theta^2)$ in trace norm as real $\theta\to0$. This is a single-check result. [pthm-qec-distinguishability-augmented-jz-linear-correction](item-pthm-qec-distinguishability-augmented-jz-linear-correction)

[F3] The general-lift postulate supplies the finite Hamiltonian, three phenomenological downward jumps and exact GKSL noise channel, together with their physical and spectral hypotheses. Here take $N\geq J_0$ and $\Delta(J,m)=\Delta_0Jm$; its short-checking regime is $\gamma\tau\ll1$ and $|\Delta_0|J_0^2\tau\ll1$. [post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)

[A1] Adopt the Axiom of Choice, Countable Choice and Dependent Choice as carried by the stated augmented-check and single-check interfaces. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)
