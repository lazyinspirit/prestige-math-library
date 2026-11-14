---
title: Invariant finite angular-momentum cutoff
status: published
research_item: pthm-qec-distinguishability-zero-temperature-truncation
dependency_level: 14
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF pages 3–4, paragraph beginning “To see how the lift reshapes the
        channel” and the following Kraus-rank discussion
      statement: The article restricts the Hilbert space to J at most 2 for its
        channel rank study and says the restriction is exact at zero temperature
        because no transition raises J.
      hypotheses: The article's effective angular-momentum emitter, zero-temperature
        jumps and lifting model.
      reading_limits: The supplied extracted text at the cited passage was read. This
        citation attributes the article's claim and use of the cutoff; it is not
        used as proof of the deduction.
---

PDF p. 3: ` Final paragraph continuing onto p. 4 `

## Prerequisites

- [post-qec-distinguishability-atomic-system](item-post-qec-distinguishability-atomic-system)
- [pthm-qec-distinguishability-atomic-jumps](item-pthm-qec-distinguishability-atomic-jumps)
- [pthm-qec-distinguishability-vacuum-density](item-pthm-qec-distinguishability-vacuum-density)
- [lem-qec-prereq-lowering-invariant-truncation](item-lem-qec-prereq-lowering-invariant-truncation)
- [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)
- [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)


## Statement

Assume the Axiom of Choice, Countable Choice and Dependent Choice. Take the finite-block angular-momentum emitter with one copy of each integer-spin block $V_J$, $J=0,1,\ldots,N$, for $N\geq2$, and adopt all hypotheses of the canonical downward-jumps result, including its vacuum, strictly increasing energy, tensor, regularity and pointwise spectral-representative assumptions. In particular, the representative is zero at every required nonpositive transition frequency. Let the finite GKSL generator have those three downward jumps and a Hermitian effective Hamiltonian $H$ that preserves each $V_J$. This includes the stated diagonal unperturbed emitter Hamiltonian and any added block-preserving lift, provided their sum is the effective Hamiltonian used in the generator.

Let $W=V_0\oplus V_1\oplus V_2$. For every $t\geq0$, an operator initially supported on $W$ remains supported on $W$, and its evolution is exactly the channel generated on $W$ by the restrictions of $H$ and the three jumps. Here supported means $X=P_WXP_W$, where $P_W$ is the orthogonal projection onto $W$; a channel is a completely positive trace-preserving linear map. The space $W$ has dimension nine. The article uses this $J\leq2$ restriction for its channel rank study.

## Statement references

[post-qec-distinguishability-atomic-system](item-post-qec-distinguishability-atomic-system)

[pthm-qec-distinguishability-atomic-jumps](item-pthm-qec-distinguishability-atomic-jumps)

[pthm-qec-distinguishability-vacuum-density](item-pthm-qec-distinguishability-vacuum-density)

[lem-qec-prereq-lowering-invariant-truncation](item-lem-qec-prereq-lowering-invariant-truncation)

[def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)

[def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

## Facts & Assumptions

[F1] Under its stated finite-emitter, vacuum and pointwise spectral hypotheses, each canonical jump maps $V_J$ into $V_{J-1}$, with zero image for $J=0$. [pthm-qec-distinguishability-atomic-jumps](item-pthm-qec-distinguishability-atomic-jumps)

[F2] The vacuum limiting spectral measure is supported on nonnegative frequencies, but its density specified almost everywhere does not determine values at individual transition frequencies. [pthm-qec-distinguishability-vacuum-density](item-pthm-qec-distinguishability-vacuum-density)

[F3] For a finite orthogonal grading, a Hermitian block-preserving Hamiltonian and finitely many lowering jumps, the cutoff-supported operators remain supported and their evolution equals the compressed GKSL exponential. [lem-qec-prereq-lowering-invariant-truncation](item-lem-qec-prereq-lowering-invariant-truncation)

[F4] The finite GKSL interface defines the generator $\mathcal L(X)=-i[H,X]+\sum_\delta(L_\delta X L_\delta^\dagger-\{L_\delta^\dagger L_\delta,X\}/2)$ and the channel $\mathcal N_t=e^{t\mathcal L}$; $A^\dagger$ is the adjoint, $[A,B]=AB-BA$, and $\{A,B\}=AB+BA$. [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)

[F5] The integer-spin block $V_J$ has orthonormal magnetic basis $|J,m\rangle$ with $m=-J,-J+1,\ldots,J$, hence dimension $2J+1$. [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

[F6] The emitter postulate specifies an unperturbed Hamiltonian diagonal in $|J,m\rangle$, with real energies depending only on $J$. [post-qec-distinguishability-atomic-system](item-post-qec-distinguishability-atomic-system)

[A1] Assume the three choice principles and all physical, regularity and pointwise hypotheses stated above. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)

## Proof

**Given:** The finite emitter, the three jumps, the block-preserving Hermitian effective Hamiltonian, the stated hypotheses, and $t\geq0$.

**Goal:** Establish exact evolution on the $J\leq2$ cutoff and its dimension.

1.1 The basis in [F5] makes the spin blocks mutually orthogonal in the finite direct sum. By [F1], each of the three jumps lowers the block index by one, with the $J=0$ image zero. The effective Hamiltonian preserves every block by assumption; the unperturbed Hamiltonian in [F6] is an example, and adding a block-preserving lift preserves that property. The pointwise condition in [A1] is needed for the jump conclusion: the almost-everywhere statement in [F2] alone does not supply those point values. [F1, F2, F5, F6, A1, given]

2.1 Apply [F3] to the generator and channel defined in [F4], with cutoff $J_0=2$. Its hypotheses hold by step 1.1 and $N\geq2$. Thus every $X=P_WXP_W$ remains supported on $W$, and the full finite evolution on such $X$ agrees with the exponential of the generator formed from the restrictions to $W$. Finally, [F5] gives $\dim W=(2\cdot0+1)+(2\cdot1+1)+(2\cdot2+1)=9$. [F3, F4, F5, step 1.1, algebra] ∎

## Source notes

The article identifies this cutoff with its rank-study restriction. The proof above concerns a finite ambient block cutoff $N$ and does not establish a limiting infinite-dimensional evolution. Zero temperature alone, without the stated pointwise convention and block-preserving effective Hamiltonian, is not used as a sufficient condition.
