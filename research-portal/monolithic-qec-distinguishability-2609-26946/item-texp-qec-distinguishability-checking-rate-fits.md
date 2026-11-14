---
title: Zero-lift checking-time fits versus physical decay rate
status: draft
research_item: texp-qec-distinguishability-checking-rate-fits
dependency_level: 16
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 2, text immediately after Eq. (4) and the checking-time and
        transpose-fidelity discussion through Eq. (6); p. 16, final paragraph;
        p. 17, Fig. S5.2(a)-(b) and caption
      statement: At zero degeneracy lift and target fidelity 0.9999, the article
        reports inverse-rate curves with coefficients approximately 0.00013,
        0.00020, 0.020 and 0.026 for the minimal, detection, Aydin–Barg and Æ
        codes respectively; it describes the last two as numerical fits and
        gives baseline formulas for the first two. The text immediately after
        Eq. (4) defines p_decay = 1 - exp(-gamma t) in the four-level model; the
        minimal-code baseline in Fig. S5.2 uses this decay-probability notation.
        The page 2 checking-time discussion identifies F_tr as the entanglement
        fidelity with transpose recovery.
      hypotheses: The article's equal-rate benchmark, selected codes, transpose
        recovery and zero-lift comparison.
      reading_limits: Read the supplied PDF text on pages 2, 16 and 17 and visually
        inspected PDF pages 2 and 17, including the Fig. S5.2 table and caption.
        The plotted curves were not independently measured and the numerical
        calculations were not replayed. This reference attributes notation,
        reported fits and baseline formulas; it is not used as proof of the
        scaling argument.
---

PDF p. 16: ` Last paragraph `; PDF p. 17: ` Fig. S5.2(a)–(b) and caption `

## Prerequisites

- [def-qec-distinguishability-checking-time](item-def-qec-distinguishability-checking-time)
- [post-qec-distinguishability-atomic-lift](item-post-qec-distinguishability-atomic-lift)
- [physics:def-nrqmx-finite-hermitian-matrix-exponential](https://alphabetamath.cc/physics/item/def-nrqmx-finite-hermitian-matrix-exponential)
- [post-qec-distinguishability-equal-rate-model](item-post-qec-distinguishability-equal-rate-model)
- [def-qec-distinguishability-minimal-code](item-def-qec-distinguishability-minimal-code)
- [def-qec-distinguishability-detection-code](item-def-qec-distinguishability-detection-code)
- [def-qec-distinguishability-ae-code](item-def-qec-distinguishability-ae-code)
- [def-qec-distinguishability-aydin-barg-code](item-def-qec-distinguishability-aydin-barg-code)
- [alg-qec-distinguishability-numerical-method](item-alg-qec-distinguishability-numerical-method)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)
- [pthm-qec-distinguishability-uniform-decay-rate](item-pthm-qec-distinguishability-uniform-decay-rate)
- [def-qec-distinguishability-transpose-recovery](item-def-qec-distinguishability-transpose-recovery)
- [pthm-qec-distinguishability-atomic-jumps](item-pthm-qec-distinguishability-atomic-jumps)


## Statement

In the finite equal-rate rigid-rotor benchmark, set the degeneracy lift $\Delta$ to zero and let $\gamma>0$ be the common instantaneous downward rate of an excited magnetic basis state. For any one of the four specified single-manifold codes and its transpose recovery, the checking time at target $F_0\in(0,1]$ obeys $\tau_\gamma(F_0)=\tau_1(F_0)/\gamma$, including the value $+\infty$ with the usual convention. Here the subscript $1$ denotes the same model with rate scale one. This is an exact rescaling of the specified model, not a determination of the crossing constant.

For $F_0=0.9999$, the article reports $\tau\approx1.3\times10^{-4}/\gamma$ for the minimal code, $\tau\approx2.0\times10^{-4}/\gamma$ for the detection code, $\tau\approx0.020/\gamma$ for Aydin–Barg, and $\tau\approx0.026/\gamma$ for Æ. Among these reported values Æ is largest. The article calls the last two coefficients numerical fits and supplies no fit uncertainties in the cited caption. It gives the minimal-code relation $1-F_{\rm tr}=3p_{\rm decay}/4$ and the resulting $\tau=-\gamma^{-1}\log[1-4(1-F_0)/3]$, and the detection-code approximation $1-F_{\rm tr}\simeq\gamma t/2$, yielding $\tau\simeq2(1-F_0)/\gamma$. These baseline formulas and the fit coefficients are reported source results, not independently verified calculations here.

The checking interval therefore scales inversely with the modeled physical rate when the same first-crossing target and other model parameters are retained. This statement alone does not establish a repeated-cycle performance guarantee.

## Facts & Assumptions

[F1] The checking time is the infimum of nonnegative times at which the transpose-recovered entanglement fidelity is strictly below the target; an empty crossing set gives $+\infty$. The fidelity is the overlap with a maximally entangled logical-reference state after encoding, noise and recovery. [def-qec-distinguishability-checking-time](item-def-qec-distinguishability-checking-time)

[F2] In the benchmark, the finite physical space is a direct sum of integer-spin blocks $J=0,\ldots,N$. The phenomenological lift is $H_\Delta=\Delta\sum_{J,m}Jm|J,m\rangle\langle J,m|$ on these finitely many complete blocks; here $\Delta=0$, so $H_\Delta=0$. Its unlifted Hamiltonian is scalar on each block, and each downward jump maps the $J$ block into the $J-1$ block and has the form $L_\delta=\sqrt\gamma A_\delta$, where $A_\delta$ is independent of $\gamma$. The jump model, its finite-emitter, bath, spectral and other stated physical hypotheses, and the equal-rate parameter choice are assumed, together with the finite-emitter and physical hypotheses of the lift postulate. [post-qec-distinguishability-equal-rate-model](item-post-qec-distinguishability-equal-rate-model) [post-qec-distinguishability-atomic-lift](item-post-qec-distinguishability-atomic-lift) [pthm-qec-distinguishability-atomic-jumps](item-pthm-qec-distinguishability-atomic-jumps)

[F3] Each selected code is contained in one block: the minimal code in $J=1$, the detection code in $J=2$, Aydin–Barg in $J=4$, and Æ in $J=5$. Choose $N\geq5$ so that all four comparisons are represented. [def-qec-distinguishability-minimal-code](item-def-qec-distinguishability-minimal-code) [def-qec-distinguishability-detection-code](item-def-qec-distinguishability-detection-code) [def-qec-distinguishability-aydin-barg-code](item-def-qec-distinguishability-aydin-barg-code) [def-qec-distinguishability-ae-code](item-def-qec-distinguishability-ae-code)

[F4] The finite numerical protocol exponentiates the GKSL generator and evaluates the transpose-recovery fidelity for an isometric code from the channel's Kraus operators and their code-compressed products. It specifies exact target operations, not a certified floating-point result. [alg-qec-distinguishability-numerical-method](item-alg-qec-distinguishability-numerical-method)

[F5] For every finite complex matrix $B$ and scalar $z\in\mathbb C$, the matrix exponential is the operator-norm convergent series $e^{zB}=\sum_{k=0}^{\infty}z^kB^k/k!$, with $B^0=I$. No Hermiticity assumption on $B$ is required. [physics:def-nrqmx-finite-hermitian-matrix-exponential](https://alphabetamath.cc/physics/item/def-nrqmx-finite-hermitian-matrix-exponential)

[F6] For the benchmark jump matrices, $\sum_\delta L_\delta^\dagger L_\delta=\gamma\sum_{J=1}^N\Pi_J$. Thus every excited magnetic basis state has total instantaneous downward rate $\gamma$, and the ground block has rate zero. This is a conditional result under the benchmark's full physical, spectral and choice hypotheses. [pthm-qec-distinguishability-uniform-decay-rate](item-pthm-qec-distinguishability-uniform-decay-rate)

[F7] Put $C(X)=\mathcal N(VXV^\dagger)$ and $Q=C(I_{H_L})=\mathcal N(P)$. The logical form of the support-normalized transpose map is $Y\mapsto\sum_a A_a^\dagger Q^{-1/2}YQ^{-1/2}A_a$, where $A_a=E_aV$ and $(E_a)$ is any finite Kraus family of $\mathcal N$. Its completion has no effect after noise on code-supported inputs. [def-qec-distinguishability-transpose-recovery](item-def-qec-distinguishability-transpose-recovery)

[A1] Assume the Axiom of Choice, Countable Choice and Dependent Choice carried by the benchmark, lift and numerical interfaces, as well as their stated physical and spectral hypotheses. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice) [post-qec-distinguishability-equal-rate-model](item-post-qec-distinguishability-equal-rate-model) [post-qec-distinguishability-atomic-lift](item-post-qec-distinguishability-atomic-lift) [alg-qec-distinguishability-numerical-method](item-alg-qec-distinguishability-numerical-method)

## Proof

**Given:** One of the four code isometries in [F3], the zero-lift model and assumptions in [F2] and [A1], and a target $F_0\in(0,1]$.

**Goal:** Establish the exact inverse-rate scaling of its first-crossing time and distinguish it from the attributed numerical coefficients.

1.1 At $\Delta=0$ the lift term in [F2] vanishes. Let a block-diagonal operator be a sum of operators each supported within a single $J$ block. The Hamiltonian commutator vanishes on this subspace because the Hamiltonian is scalar on each block. Each $A_\delta X A_\delta^\dagger$ maps a block-supported $X$ to the next lower block, while $A_\delta^\dagger A_\delta$ preserves each block. Hence the dissipator preserves block-diagonal operators, and the generator restricted to them is $\gamma\mathcal D$, with $\mathcal D$ independent of $\gamma$. Every encoded logical operator starts in one block. [F2, F3, F6, A1]

2.1 In a fixed basis of the finite block-diagonal operator space, represent $\mathcal D$ by a finite complex matrix $D$. For every $k\geq0$, $(\gamma D)^k=\gamma^kD^k$, so [F5] gives $e^{t(\gamma D)}=\sum_{k=0}^{\infty}t^k(\gamma D)^k/k!=\sum_{k=0}^{\infty}(\gamma t)^kD^k/k!=e^{(\gamma t)D}$, with both series convergent in operator norm. Invariance means that every power of the full generator on this subspace equals the corresponding power of its restriction; applying [F5] to the full finite matrix therefore shows that its exponential restricts to $e^{t(\gamma D)}$. Hence $\mathcal N_{\gamma,t}(VXV^\dagger)=\mathcal N_{1,\gamma t}(VXV^\dagger)$ for every logical operator $X$. Thus the two restricted channels agree, including their value on the code projector. For either restricted channel write $C$ for this common map and $Q=C(I_{H_L})$. By [F7], for $B=Q^{-1/2}YQ^{-1/2}$ the $(\mu,\nu)$ entry of its logical support-normalized recovery is $\sum_a\langle A_a\mu|B|A_a\nu\rangle=\operatorname{Tr}[B\,C(|\nu\rangle\langle\mu|)]$, by expanding the finite matrix entries. Thus that recovery map is determined by $C$ and $Q$, independently of the Kraus family. The completion is irrelevant on $C(X)$ by [F7]. The recovered logical channels therefore coincide, giving $F_\gamma(t)=F_1(\gamma t)$ in the convention of [F1]. [F1, F3, F4, F5, F7, step 1.1]

3.1 Consequently the strict crossing set at rate $\gamma$ is $\{s/\gamma:s\geq0,\ F_1(s)<F_0\}$. Since multiplication by $1/\gamma$ is an order-preserving bijection of $[0,\infty)$, its infimum is $\tau_1(F_0)/\gamma$; if the set is empty, both checking times are $+\infty$. The displayed numerical coefficients and baseline formulas are the article's reported results and do not follow from this rescaling alone. Thus the inverse-rate law is conditional on the model, while the reported constants retain their stated numerical or formula provenance. [F1, step 2.1] ∎

## Source notes

The article's $p_{\rm decay}$ denotes the modeled decay probability, $1-e^{-\gamma t}$, in its minimal-code baseline; $F_{\rm tr}$ is the transpose-recovered entanglement fidelity. The two fitted coefficients are approximate and no uncertainty is inferred. No numerical replication, measurement, or repeated-cycle threshold theorem is claimed.
