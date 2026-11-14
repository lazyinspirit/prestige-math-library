---
title: Jump histories, distinguishability, and limits of Kraus rank
status: draft
research_item: rem-qec-distinguishability-rank-mechanism
dependency_level: 17
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF page 4, paragraphs below Figure 2
      statement: The article attributes rank growth at zero lift to distinct jump-time
        profiles of successive decays and further growth with lift to phases
        accumulated by histories; it says additional Choi directions become
        appreciable sooner for larger lift and describes rank as a mechanism
        indicator rather than a performance metric.
      hypotheses: The equal-rate J at most 2 model and the effective-rank plot with
        unnormalized canonical-weight threshold 10^-8.
      reading_limits: The supplied extracted text at the cited passage was read.
        Timing and physical interpretation are attributed to the article; no
        threshold-crossing calculation, figure digitization, experiment, or
        independent source assessment is claimed.
---

PDF p. 4: ` Second and third paragraphs `

## Prerequisites

- [post-qec-distinguishability-atomic-lift](item-post-qec-distinguishability-atomic-lift)
- [texp-qec-distinguishability-atomic-rank-prediction](item-texp-qec-distinguishability-atomic-rank-prediction)
- [pthm-qec-distinguishability-ground-replacer](item-pthm-qec-distinguishability-ground-replacer)
- [def-qec-prereq-complementary-error-record](item-def-qec-prereq-complementary-error-record)
- [lem-qec-prereq-trajectory-dyson-expansion](item-lem-qec-prereq-trajectory-dyson-expansion)
- [lem-qec-prereq-jump-time-phase-gram](item-lem-qec-prereq-jump-time-phase-gram)
- [def-qec-prereq-spectral-threshold-protocol](item-def-qec-prereq-spectral-threshold-protocol)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)
- [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)
- [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)


## Remark

In the article's equal-rate model, successive $J=2\to1\to0$ decays have different jump-time profiles. The article associates these profiles with effective-rank growth to twelve even at zero lift. It interprets the additional growth with nonzero lift as arising from different phases accumulated by histories with different jump times, polarizations and source states. It reports that formerly grouped components gain appreciable weight along independent Choi directions sooner for larger lift. This last timing comparison is the article's interpretation of its thresholded model curves; it is not a proved monotonic law for arbitrary channels or arbitrary thresholds.

A history here means a term labeled by ordered jump times and jump-operator indices in the finite channel expansion. A source state is an input basis state, and polarization is the physical label on a modeled jump operator. A Choi direction is an eigenvector of the channel's positive Choi matrix; its weight is the corresponding unnormalized eigenvalue. Exact Kraus rank counts all positive weights, whereas effective rank at threshold $10^{-8}$ counts only weights strictly above that value. The latter depends on the normalization and threshold.

Rank alone is not a recovery-performance metric. It counts independent channel components, and the complementary record describes information available to an environment in a chosen dilation. To specify performance, let $V:H_L\to H_P$ be a finite-dimensional code isometry, let $\mathcal N:\mathcal L(H_P)\to\mathcal L(H_O)$ be the noise channel, and let $\mathcal R:\mathcal L(H_O)\to\mathcal L(H_L)$ be a completely positive, trace-preserving decoded recovery. Here $\mathcal L(H)$ denotes the endomorphisms of $H$. Put $\operatorname{Ad}_V(A)=VAV^\dagger$ and $\mathcal E=\mathcal R\circ\mathcal N\circ\operatorname{Ad}_V$. On $H_L=\mathbb C^d$ use maximally-mixed-input entanglement fidelity $F_e(\mathcal E)=\langle\Phi_d|({\rm id}\otimes\mathcal E)(|\Phi_d\rangle\langle\Phi_d|)|\Phi_d\rangle$, where $|\Phi_d\rangle=d^{-1/2}\sum_{j=0}^{d-1}|j\rangle\otimes|j\rangle$. For a fixed encoding, write $F_{\rm opt}(\mathcal N,V)=\sup_{\mathcal R}F_e(\mathcal R\circ\mathcal N\circ\operatorname{Ad}_V)$, with the supremum over all such decoders.

Rank alone determines neither the fidelity for a specified recovery nor this optimized fidelity. On the full qubit code with identity recovery, the identity and Pauli-$X$ channels both have exact rank one but have entanglement fidelities one and zero. Even after optimizing recovery, qubit bit-flip channels of probability $p\in(0,1/2]$ all have rank two and have $F_{\rm opt}=1-p$. The examples below also show that increasing rank in a comparison of channels can accompany either higher or lower fidelity, including optimized fidelity. These are comparisons of channels, not a monotonicity assertion along the emitter dynamics. More distinguishable components can make a particular code harder to recover, as the article's model interpretation proposes, but rank alone does not prove such degradation. At complete decay the limiting source-to-ground representation has nine operators under the additional hypotheses stated below; this limiting rank need not equal the rank at any finite time.

## Facts & Assumptions

[F1] In the finite emitter model the lift adds $H_\Delta=\Delta\sum_{J,m}Jm|J,m\rangle\langle J,m|$; transition-energy shifts depend on source labels, but this assumption alone does not specify a complete environmental record. [post-qec-distinguishability-atomic-lift](item-post-qec-distinguishability-atomic-lift)

[F2] In the equal-rate $J\leq2$ benchmark with $\gamma>0$, real $\Delta$ and the stated fixed-jump continuation after lifting, exact rank is twelve for $\Delta=0$ and eighteen for $\Delta\ne0$ at every finite $t>0$. The thresholded curves are separately reported model predictions. [texp-qec-distinguishability-atomic-rank-prediction](item-texp-qec-distinguishability-atomic-rank-prediction)

[F3] With the finite-emitter and vacuum hypotheses, block-preserving Hamiltonian, lowering jumps and a strictly positive excited-block exit-rate bound, the $J\leq2$ channel converges to ground replacement, whose canonical source-resolving representation has nine operators. [pthm-qec-distinguishability-ground-replacer](item-pthm-qec-distinguishability-ground-replacer)

[F4] A finite Kraus family $E_a$ defines a complementary record with entries $\operatorname{Tr}(E_a\rho E_b^\dagger)$; logical-state independence concerns the entire record, including off-diagonal entries. [def-qec-prereq-complementary-error-record](item-def-qec-prereq-complementary-error-record)

[F5] A finite GKSL channel has an absolutely convergent expansion over ordered jump times and jump indices, with no-jump amplitude $E(t)$ and single-jump amplitude $E(t-s)L_aE(s)$. [lem-qec-prereq-trajectory-dyson-expansion](item-lem-qec-prereq-trajectory-dyson-expansion)

[F6] If a branch is actually an average of diagonal phase actions with a common probability measure, its relative-coherence multipliers form a positive Gram matrix. This averaging form is an additional hypothesis, not a consequence of an energy shift alone. [lem-qec-prereq-jump-time-phase-gram](item-lem-qec-prereq-jump-time-phase-gram)

[F7] Exact rank counts positive Choi eigenvalues; a strict threshold count omits positive weights at or below the specified threshold and changes units when the Choi normalization changes. [def-qec-prereq-spectral-threshold-protocol](item-def-qec-prereq-spectral-threshold-protocol)

[F8] For a finite code isometry $V$ and decoded recovery channel $\mathcal R$, the decoded logical channel is $\mathcal R\circ\mathcal N\circ\operatorname{Ad}_V$. Channels are complex-linear, completely positive and trace-preserving. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[F9] For a channel $\mathcal E$ on $\mathbb C^d$, maximally-mixed-input entanglement fidelity is the overlap of $|\Phi_d\rangle$ with the density operator $({\rm id}\otimes\mathcal E)(|\Phi_d\rangle\langle\Phi_d|)$ and lies in $[0,1]$. The tensor map acts on elementary operator tensors factorwise. [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

[A1] Adopt Choice, Countable Choice and Dependent Choice as carried by the physical model suppliers. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)

## Proof

**Given:** The finite benchmark and physical assumptions in [F1]–[F3], the mathematical interfaces in [F4]–[F9], and the choice assumptions in [A1].

**Goal:** Explain the conditional history and rank statements, while distinguishing the article's reported timing interpretation from deductions supplied here.

1.1 The expansion in [F5] expresses the channel as a no-jump contribution plus integrals of contributions indexed by ordered times and jump labels. In the emitter model those labels include the modeled polarizations; the amplitudes act on the source basis states. The lift in [F1] changes the diagonal energies and hence the phases in the intervening propagators. This identifies a possible phase mechanism without asserting that an energy shift alone establishes distinguishability. [F1, F5, A1]

1.2 In the fixed-jump benchmark, [F2] supplies the exact finite-time ranks. By [F7], a threshold count can grow as previously positive weights pass the threshold even when exact rank is already constant; the threshold comparison also requires the same normalization. Under the further exit-rate and model hypotheses in [F3], the limiting channel has the stated nine source-to-ground operators. A limiting rank can differ from every finite-time rank because positive weights may tend to zero. [F2, F3, F7, A1]

1.3 The record in [F4] retains both diagonal and off-diagonal information and depends on the channel and its restriction to a code. Use [F8] to specify the encoding and decoded recovery and [F9] to specify the fidelity in the Remark. The supremum defining $F_{\rm opt}$ is well-defined: the fidelity values lie in $[0,1]$, and the decoder set is nonempty, since $Y\mapsto\operatorname{Tr}(Y)|0\rangle\langle0|$ is a channel into $H_L=\mathbb C^d$. Indeed, for an output orthonormal basis $|a\rangle$, the operators $K_a=|0\rangle\langle a|$ give this map, sum to the identity in $\sum_a K_a^\dagger K_a$, and each ancilla amplification is a sum of conjugations preserving positivity. We now prove non-determination and lack of a universal rank ordering by explicit channels. [F4, F8, F9, algebra]

1.4 Fix $H_L=H_P=H_O=\mathbb C^2$ and $V=I$. Put $X=|0\rangle\langle1|+|1\rangle\langle0|$ and $Z=|0\rangle\langle0|-|1\rangle\langle1|$, and write $\mathcal U_U(A)=UAU^\dagger$ for $U=I,X,Z$. These matrices are unitary; their conjugations preserve trace, and their ancilla amplifications are unitary conjugations, so they are channels by [F8]. Nonnegative convex combinations of these maps are also channels, since every amplification preserves positivity and their weights sum to one. Let $|\Phi\rangle=(|00\rangle+|11\rangle)/\sqrt2$, $|\Psi\rangle=(|01\rangle+|10\rangle)/\sqrt2$ and $|\Omega\rangle=(|00\rangle-|11\rangle)/\sqrt2$. They are orthonormal by their displayed coordinates, and the trace-one Choi matrices of $\mathcal U_I,\mathcal U_X,\mathcal U_Z$ are respectively their rank-one projectors: expand $|\Phi\rangle\langle\Phi|=\frac12\sum_{j,k=0}^1|j\rangle\langle k|\otimes|j\rangle\langle k|$ and apply the corresponding channel on the second factor. Thus $\mathcal U_I$ and $\mathcal U_X$ both have exact Kraus rank one by [F7]; with identity recovery their entanglement fidelities are $1$ and $0$ by [F9]. This proves non-determination even for a fixed code and recovery. [F7, F8, F9, algebra]

2.1 If, in a specified branch, the additional averaging hypothesis in [F6] holds, averaging the relative phases multiplies each input coherence by the corresponding Gram entry. The conclusion is conditional on that branch model. It does not by itself establish the article's comparison of threshold-crossing times. The reported role of successive jump-time profiles and the earlier onset for larger lift are retained as the article's model interpretation. [F6, step 1.1]

2.2 For $0<p\leq1/2$, put $\mathcal N_p=(1-p)\mathcal U_I+p\mathcal U_X$. Its trace-one Choi matrix is $(1-p)|\Phi\rangle\langle\Phi|+p|\Psi\rangle\langle\Psi|$, so its exact rank is two and its identity-recovery fidelity is $1-p$. For any decoded recovery $\mathcal R$, put $Q_{\mathcal R}=({\rm id}\otimes\mathcal R)(|\Phi\rangle\langle\Phi|)$, a positive trace-one matrix by [F9], and set $a=\langle\Phi|Q_{\mathcal R}|\Phi\rangle$, $b=\langle\Psi|Q_{\mathcal R}|\Psi\rangle$. These are nonnegative and $a+b\leq1$, by completing the two orthonormal vectors to a basis and summing the nonnegative diagonal entries of $Q_{\mathcal R}$. Since $(I\otimes X)|\Phi\rangle=(X\otimes I)|\Phi\rangle=|\Psi\rangle$, factorwise tensor action gives $({\rm id}\otimes\mathcal R)(|\Psi\rangle\langle\Psi|)=(X\otimes I)Q_{\mathcal R}(X\otimes I)$. Consequently $F_e(\mathcal R\circ\mathcal N_p)=(1-p)a+pb\leq(1-p)(a+b)\leq1-p$. Identity recovery attains the bound, so $F_{\rm opt}(\mathcal N_p,I)=1-p$. In particular $p=1/4$ and $p=1/2$ give the same rank two but different optimized fidelities $3/4$ and $1/2$. [F7, F8, F9, step 1.3, step 1.4, algebra]

3.1 Finally put $\mathcal M=\frac34\mathcal U_I+\frac18\mathcal U_X+\frac18\mathcal U_Z$. Its trace-one Choi matrix is the corresponding positive combination of the three orthogonal projectors in step 1.4, so its exact rank is three and its identity-recovery fidelity is $3/4$. Hence $F_{\rm opt}(\mathcal M,I)\geq3/4>F_{\rm opt}(\mathcal N_{1/2},I)=1/2$: increasing rank from two to three can accompany improved fixed-recovery and optimized fidelity. Conversely, increasing rank from $\mathcal U_I$ to $\mathcal N_{1/2}$ lowers both fidelities from one to $1/2$, since fidelity is at most one and identity recovery attains one for $\mathcal U_I$. Thus rank comparisons alone impose neither a universal increase nor a universal decrease in these fidelities. These counterexamples establish the general limitation of a rank metric; the article's proposed connection between distinguishability and degradation in its emitter model remains a mechanism interpretation, not a deduction of such a universal ordering. [F7, F8, F9, step 1.4, step 2.2, algebra] ∎

## Source notes

The statements about the jump-time profiles and earlier appreciable weights are attributed to the article's page 4 discussion. No crossing times or monotonicity theorem are inferred from the phase-Gram lemma. The fixed-jump continuation is an explicit model assumption, and the long-time conclusion additionally requires the exit-rate bound.
