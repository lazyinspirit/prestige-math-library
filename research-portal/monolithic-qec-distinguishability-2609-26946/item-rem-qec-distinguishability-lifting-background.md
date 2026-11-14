---
title: Frequency shifts, which-path records, and passive protection
status: published
research_item: rem-qec-distinguishability-lifting-background
dependency_level: 5
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 1, abstract and Introduction
      statement: The article discusses residual Zeeman and Stark shifts and Kerr
        anharmonicity as sources of distinguishable errors, compares the effect
        with which-path and interference complementarity, and connects it with
        degraded passive protection and approximate quantum error correction.
      hypotheses: Qualitative background and the idealized models discussed in the article.
      reading_limits: The supplied extracted text of page 1 was read. This reference
        attributes the article's background claims; it is not an independent
        proof of them or evidence of a particular measurement.
---

PDF p. 1: ` Introduction and abstract `

## Prerequisites

- [def-qec-distinguishability-monolithic-encoding](item-def-qec-distinguishability-monolithic-encoding)
- [def-qec-prereq-complementary-error-record](item-def-qec-prereq-complementary-error-record)
- [lem-qec-prereq-rank-one-kl-dimension](item-lem-qec-prereq-rank-one-kl-dimension)
- [def-qec-prereq-diagonal-lift-phase-data](item-def-qec-prereq-diagonal-lift-phase-data)
- [def-qec-prereq-passive-subsystem-contract](item-def-qec-prereq-passive-subsystem-contract)
- [def-qec-prereq-bosonic-kerr-scope](item-def-qec-prereq-bosonic-kerr-scope)
- [def-qec-prereq-syndrome-and-logical-record](item-def-qec-prereq-syndrome-and-logical-record)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:thm-qc-knill-laflamme-necessity](https://alphabetamath.cc/item/thm-qc-knill-laflamme-necessity)
- [pthm-qec-distinguishability-transition-shifts](item-pthm-qec-distinguishability-transition-shifts)


## Remark

A monolithic encoding stores logical information in the levels of one physical system. The article describes residual Zeeman or Stark shifts and anharmonicity, including Kerr nonlinearity, as mechanisms that can separate nominally coincident transition frequencies, leave which-path information in the environment and weaken recoverability. A transition frequency is the initial minus final energy in units with $\hbar=1$; which-path information means information in an environmental record that distinguishes alternative physical error paths. The article compares this effect with the complementarity of which-path information and interference visibility.

The article also relates the issue to decoherence-free subspaces and noiseless subsystems, whose passive protection can degrade when system–bath coupling symmetry is broken. In the interface used here, a noiseless subsystem has a logical tensor factor on which every channel in a specified family acts as the identity while a gauge factor may evolve; a decoherence-free subspace is the one-dimensional-gauge case. Whether a particular perturbation destroys that factorization is a separate model-dependent question.

Exact quantum error correction asks for a recovery channel whose composition with the noise and encoding is the identity on logical operators. For a finite-dimensional isometric code with nonzero logical space and projector $P$, and a channel between finite-dimensional operator spaces with finite Kraus family $(E_a)$, exact correction requires the Knill–Laflamme conditions $PE_a^\dagger E_bP=c_{ab}P$ for scalars $c_{ab}$ and all indices $a,b$. The article notes that approximate quantum error correction can still provide useful protection when these exact conditions fail. Approximate protection means that a specified recovery has suitably small error under a specified performance measure; failure of exact correction alone supplies no quantitative guarantee.

## Remark references

[def-qec-distinguishability-monolithic-encoding](item-def-qec-distinguishability-monolithic-encoding)

[def-qec-prereq-diagonal-lift-phase-data](item-def-qec-prereq-diagonal-lift-phase-data)

[def-qec-prereq-bosonic-kerr-scope](item-def-qec-prereq-bosonic-kerr-scope)

[def-qec-prereq-complementary-error-record](item-def-qec-prereq-complementary-error-record)

[def-qec-prereq-syndrome-and-logical-record](item-def-qec-prereq-syndrome-and-logical-record)

[def-qec-prereq-passive-subsystem-contract](item-def-qec-prereq-passive-subsystem-contract)

[lem-qec-prereq-rank-one-kl-dimension](item-lem-qec-prereq-rank-one-kl-dimension)

[math:thm-qc-knill-laflamme-necessity](https://alphabetamath.cc/item/thm-qc-knill-laflamme-necessity)

[pthm-qec-distinguishability-transition-shifts](item-pthm-qec-distinguishability-transition-shifts)

## Facts & Assumptions

[F1] Suppose the finite-dimensional unperturbed Hamiltonian $H_0$ is diagonal in the same specified orthonormal basis as the lift $D=\sum_x d_x|x\rangle\langle x|$, with real entries $d_x$, and $x,y$ label energy eigenstates of $H_0$. Replacing $H_0$ by $H_0+D$ shifts the transition energy for $x\to y$ by $d_x-d_y$; its operator phase difference evolves accordingly. [def-qec-prereq-diagonal-lift-phase-data](item-def-qec-prereq-diagonal-lift-phase-data)

[F2] Assuming Countable Choice, the prescribed one-mode Kerr model has adjacent downward transition frequencies $\omega+K(n-1)$ for $n\geq 1$. [def-qec-prereq-bosonic-kerr-scope](item-def-qec-prereq-bosonic-kerr-scope) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[F3] For a finite Kraus representation, the complementary record is the environment output of the associated dilation. Logical-state independence means equality of the entire record for all encoded density operators, not merely equality of chosen outcome probabilities. [def-qec-prereq-complementary-error-record](item-def-qec-prereq-complementary-error-record) [def-qec-prereq-syndrome-and-logical-record](item-def-qec-prereq-syndrome-and-logical-record)

[F4] For a finite-dimensional code of logical dimension at least two, exact correction of a channel whose Kraus family contains a nonzero rank-one operator $E x=\langle x,s\rangle f$ implies $Ps=0$, where $P$ is the code projector and the inner product is linear in its first argument. [lem-qec-prereq-rank-one-kl-dimension](item-lem-qec-prereq-rank-one-kl-dimension)

[F5] The passive subsystem interface requires the specified channel factorization for every channel in the family; the one-dimensional gauge case gives its decoherence-free-subspace convention. [def-qec-prereq-passive-subsystem-contract](item-def-qec-prereq-passive-subsystem-contract)

[F6] Under Countable Choice, the independent one-mode case of the transition-shifts theorem gives $g_{n+1}-g_n=K$ for $g_n=\omega+K(n-1)$, $n\geq1$; thus $K\ne0$ separates consecutive downward gaps. Only that theorem's one-mode case is used here. [pthm-qec-distinguishability-transition-shifts](item-pthm-qec-distinguishability-transition-shifts) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[A1] Assume Countable Choice for the one-mode Fock-space model in [F2]. [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

## Justification

**Given:** The hypotheses of each named finite-dimensional interface, and Countable Choice for the separate one-mode example.

**Goal:** Explain the conditional connections without inferring an environmental record or a recovery fidelity from energy shifts alone.

1.1 By [F1], when $H_0$ and $D$ are diagonal in the same specified orthonormal basis and the transition labels denote energy eigenstates of $H_0$, two initially coincident transitions acquire different transition energies when their lift differences $d_x-d_y$ differ. For the separate one-mode example [F2], the separation conclusion is supplied by the independent Kerr case in [F6], under [A1]. These energy and phase statements supply no system–environment interaction. [F1, F2, F6, A1, algebra]

2.1 By [F3], a logical-state-dependent environmental record requires two encoded density operators to produce different full environment outputs. The energy data in step 1.1 do not specify that complementary channel, so the record and its distinguishability require additional dynamical assumptions. A syndrome outcome is a specified measurement outcome on the record; independence of its distribution alone need not imply independence of the full record. [F3, step 1.1]

3.1 If, in addition to the hypotheses of [F4], $Ps\ne 0$, its contrapositive rules out exact correction for that channel and code. Separately, [F5] makes preservation of passive protection a factorization condition on the perturbed channels; the phrase broken symmetry by itself does not establish whether this condition fails. Neither conclusion specifies an approximate-recovery error or an observed effect. [F4, F5, step 2.1] ∎

## Source notes

The qualitative physical background and comparison with interference are attributed to the article. The conditional calculations above use the stated supplier interfaces; they do not establish the article's general physical mechanism for an unspecified bath or make the article a prerequisite for its own claim.
