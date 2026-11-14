---
title: Proposed platform-independent benchmark and qualified novelty claim
status: draft
research_item: rem-qec-distinguishability-benchmark-novelty
dependency_level: 14
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF page 5, Discussion, second paragraph
      statement: The authors propose their canonical angular-momentum damping model as
        a baseline for comparing atomic and molecular encodings, expect it to
        serve as a common benchmark for designing codes and decoders as
        amplitude damping serves bosonic codes, and state to the best of their
        knowledge that no such formulation existed previously.
      hypotheses: The qualitative comparison and qualified priority claim in the cited
        Discussion paragraph.
      reading_limits: The supplied extracted text of PDF page 5 was read. This
        citation attributes the authors' proposal and priority claim; it is not
        an independent priority search or evidence of experimental performance.
---

PDF p. 5: ` Discussion, second paragraph `

## Prerequisites

- [pthm-qec-distinguishability-atomic-jumps](item-pthm-qec-distinguishability-atomic-jumps)
- [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)
- [def-qec-prereq-bosonic-kerr-scope](item-def-qec-prereq-bosonic-kerr-scope)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)
- [math:def-qc-density-operator](https://alphabetamath.cc/item/def-qc-density-operator)
- [math:def-qc-quantum-code-isometry-and-code-projector](https://alphabetamath.cc/item/def-qc-quantum-code-isometry-and-code-projector)
- [math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel)
- [math:def-qc-exact-recovery-of-a-quantum-code](https://alphabetamath.cc/item/def-qc-exact-recovery-of-a-quantum-code)


## Remark

The article proposes its canonical angular-momentum damping model as a baseline for comparing quantum error-correcting encodings across atomic and molecular platforms. A benchmark here means a specified reference noise model against which candidate encodings and their decoders can be compared under stated, common comparison choices. The finite-block meanings of encoding and decoder are specified below. The authors expect the model to serve as a common benchmark for designing codes and decoders, analogous to the role of amplitude damping for bosonic codes. In this comparison, a bosonic code encodes information in an oscillator mode, and a standard single-loss operator lowers its occupation number as described below. The analogy is a proposed role for the model, not an assertion that the two physical systems have identical noise channels.

For the finite-block comparison, let $H_L,H_P,H_O$ be nonzero finite-dimensional complex inner-product spaces for the logical input, physical input and noisy output, respectively. Here $H_P$ is the finite direct sum of spin blocks of the chosen emitter, regarded as a one-factor physical register. Write $\mathcal B(H)=\operatorname{End}(H)$ for the linear operators on $H$ and $\mathcal D(H)$ for its positive semidefinite operators of trace one (quantum states). Specify an encoding isometry $V:H_L\to H_P$ with $V^*V=I_{H_L}$, encoding $\rho$ as $\operatorname{Ad}_V(\rho)=V\rho V^*$; a reference noise channel $\mathcal N:\mathcal B(H_P)\to\mathcal B(H_O)$; and a decoded recovery channel $\mathcal R:\mathcal B(H_O)\to\mathcal B(H_L)$. Here channels are complex-linear, completely positive and trace-preserving maps. The decoded logical output is $\mathcal R(\mathcal N(V\rho V^*))$ for $\rho\in\mathcal D(H_L)$. Exact correctability is not assumed. These finite-dimensional types specify the atomic and molecular comparison; the oscillator analogy retains its separate scope above.

The authors state, to the best of their knowledge, that no such formulation existed before their work. This is their qualified priority claim; no independent literature-priority determination is made here. Nor does the proposal assert that every atomic or molecular platform obeys the model, or that a particular code or decoder has been experimentally validated against it.

## Remark references

[pthm-qec-distinguishability-atomic-jumps](item-pthm-qec-distinguishability-atomic-jumps)

[def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

[def-qec-prereq-bosonic-kerr-scope](item-def-qec-prereq-bosonic-kerr-scope)

[math:def-qc-density-operator](https://alphabetamath.cc/item/def-qc-density-operator)

[math:def-qc-quantum-code-isometry-and-code-projector](https://alphabetamath.cc/item/def-qc-quantum-code-isometry-and-code-projector)

[math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel)

[math:def-qc-exact-recovery-of-a-quantum-code](https://alphabetamath.cc/item/def-qc-exact-recovery-of-a-quantum-code)

## Facts & Assumptions

[F1] Under the finite-block emitter, bath, preparation, weak-Markov, regularity, rank-one tensor, vacuum and pointwise spectral hypotheses stated in the canonical-jumps result, a valid choice of three downward jump operators has coefficients $f(J)C^{J-1,m+\delta}_{1,\delta;J,m}$. The scalar $f(J)$ is independent of $m$ and $\delta$ and includes the reduced matrix element and selected spectral normalization. [pthm-qec-distinguishability-atomic-jumps](item-pthm-qec-distinguishability-atomic-jumps)

[F2] In the chosen spin convention, the Clebsch–Gordan coefficient is a product-basis coefficient of a normalized coupled spin state; its coupling order and phases are part of the convention. [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

[F3] For the specified single bosonic mode, the annihilation operator acts on finite occupation vectors by $a|0\rangle=0$ and $a|n\rangle=\sqrt n|n-1\rangle$ for $n\geq1$. This specifies a single-loss error operator, not a complete normalized channel or loss rate. [def-qec-prereq-bosonic-kerr-scope](item-def-qec-prereq-bosonic-kerr-scope)

[F4] On a nonzero finite-dimensional complex inner-product space, a quantum state is a positive semidefinite endomorphism of trace one. [math:def-qc-density-operator](https://alphabetamath.cc/item/def-qc-density-operator)

[F5] An isometric encoding $V:H_L\to H_P$ has $V^*V=I_{H_L}$ and encodes a logical operator by $\operatorname{Ad}_V(X)=VXV^*$. The physical register may have a single factor, as in the chosen finite emitter space. [math:def-qc-quantum-code-isometry-and-code-projector](https://alphabetamath.cc/item/def-qc-quantum-code-isometry-and-code-projector) [math:def-qc-exact-recovery-of-a-quantum-code](https://alphabetamath.cc/item/def-qc-exact-recovery-of-a-quantum-code)

[F6] A finite-dimensional quantum channel is a complex-linear, completely positive, trace-preserving map on operator spaces. For a noise channel $\mathcal N:\mathcal B(H_P)\to\mathcal B(H_O)$, a decoded recovery has type $\mathcal R:\mathcal B(H_O)\to\mathcal B(H_L)$ and is a channel. These map types do not assert the additional identity required for exact correctability. [math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel) [math:def-qc-exact-recovery-of-a-quantum-code](https://alphabetamath.cc/item/def-qc-exact-recovery-of-a-quantum-code)

[A1] Assume the Axiom of Choice, Countable Choice and Dependent Choice required by the canonical-jumps result; retain all its stated physical and mathematical hypotheses. The bosonic construction also assumes Countable Choice. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)

## Explanation

**Given:** The stated definitions, hypotheses and cited interfaces.

**Goal:** Justify the stated construction and its scope.

1.1 In [F1], $J$ labels an integer-spin block, $m$ its magnetic state, and $\delta\in\{-1,0,1\}$ the spherical component of a downward jump. The coefficient in [F2] supplies the angular selection-rule structure: it is zero when the indicated output magnetic label is outside its spin block. The factor $f(J)$ collects the reduced matrix element, which is independent of the magnetic labels for the fixed block transition, together with the selected spectral normalization. Those factors may depend on the physical system and chosen model parameters. Thus the conditional formula separates angular structure from factors that can vary between implementations; it does not establish that the same factors or the complete noise model apply to every platform. [given, A1, F1, F2, F3]

2.1 For the finite-block comparison, the candidate encodings, noise channels and decoders have the mathematical types in [F4], [F5] and [F6]. A comparison using this reference model must additionally specify those maps, model parameters and a common performance criterion. The authors' proposed analogy concerns its use as a reference for such comparisons. The single-loss operator in [F3] gives context for the bosonic side without identifying it with the full angular-momentum damping dynamics. [F1, F2, F3, F4, F5, F6, step 1.1] ∎
