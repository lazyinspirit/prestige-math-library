---
title: Four-level fidelity measures for the unrotated decoder
status: draft
research_item: pthm-qec-distinguishability-four-recovery-comparison
dependency_level: 5
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 9, opening paragraph and Table S1.1
      statement: For the four-level recovery, the article relates the entanglement
        fidelity to the decay-branch coherence and gives leading short-time
        entanglement, worst-case state, and Haar-average state infidelities with
        coefficients 1/12, 1/12, and 1/18 respectively.
      hypotheses: The idealized four-level model and the indicated recovery; the table
        reports leading short-time terms.
      reading_limits: Article-origin attribution based on the supplied extracted PDF
        text. The calculation below uses the separately stated model
        consequences and mathematical suppliers; this citation is not used as
        proof.
---

PDF p. 9: ` Opening paragraph and Table S1.1 `

## Prerequisites

- [post-qec-distinguishability-four-level-model](item-post-qec-distinguishability-four-level-model)
- [alg-qec-distinguishability-r4](item-alg-qec-distinguishability-r4)
- [pthm-qec-distinguishability-decayed-coherence](item-pthm-qec-distinguishability-decayed-coherence)
- [pthm-qec-distinguishability-r4-fidelity](item-pthm-qec-distinguishability-r4-fidelity)
- [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)
- [lem-qec-prereq-qubit-coherence-fidelities](item-lem-qec-prereq-qubit-coherence-fidelities)
- [thm-qec-prereq-haar-average-relation](item-thm-qec-prereq-haar-average-relation)
- [lem-qec-prereq-finite-taylor-control](item-lem-qec-prereq-finite-taylor-control)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement

Assume the Axiom of Choice. For a logical qubit, let $\mathcal D_\lambda$ be the channel that leaves both diagonal matrix entries unchanged and multiplies the $01$ entry by $\lambda$ and the $10$ entry by $\overline\lambda$, where $|\lambda|\leq1$. If a recovered channel is the mixture $(1-p)\mathcal D_1+p\mathcal D_\lambda$, with $0\leq p\leq1$, then its entanglement fidelity at the maximally mixed input is $F_e=1-p(1-\operatorname{Re}\lambda)/2$. Its pure-state fidelity is the overlap of the input pure state with the channel output, and its worst-case state fidelity is the minimum of that overlap over unit input vectors.

In the postulated four-level model, take fixed real $\omega_0,\Delta$, fixed $\gamma\geq0$, finite $t\geq0$, and the recovery $\mathcal R_4$. Put $p=1-e^{-\gamma t}$. If $p>0$, its decoded decay branch is $\mathcal D_{\chi_d}$, where $\chi_d=\gamma(e^{i\Delta t}-e^{-\gamma t})/[(\gamma+i\Delta)(1-e^{-\gamma t})]$, and the null branch is $\mathcal D_1$. If $p=0$, the decay branch has zero weight and no normalized decay state is needed. For this recovery, the entanglement infidelity equals the worst-case pure-state infidelity exactly. As $t\to0^+$ at fixed $\gamma,\Delta$, both equal $\gamma\Delta^2t^3/12+O(t^4)$, while the Haar-average pure-state infidelity equals $\gamma\Delta^2t^3/18+O(t^4)$ and is exactly two thirds of the entanglement infidelity.

## Statement references

[post-qec-distinguishability-four-level-model](item-post-qec-distinguishability-four-level-model)

[alg-qec-distinguishability-r4](item-alg-qec-distinguishability-r4)

[pthm-qec-distinguishability-decayed-coherence](item-pthm-qec-distinguishability-decayed-coherence)

[def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

[lem-qec-prereq-qubit-coherence-fidelities](item-lem-qec-prereq-qubit-coherence-fidelities)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions

[F1] In the postulated model, the code has orthonormal basis $|0\rangle,|1\rangle$, with real $\omega_0,\Delta$ and $\gamma\geq0$; $\mathcal R_4$ is the specified null-and-decay recovery. [post-qec-distinguishability-four-level-model](item-post-qec-distinguishability-four-level-model) [alg-qec-distinguishability-r4](item-alg-qec-distinguishability-r4)

[F2] The null and decay probabilities are $1-p=e^{-\gamma t}$ and $p=1-e^{-\gamma t}$. The normalized null output is the input state. For $p>0$, the normalized decay output preserves its diagonal entries and multiplies its $01$ entry by the displayed $\chi_d$; for $p=0$ no normalized decay output is assigned. [pthm-qec-distinguishability-decayed-coherence](item-pthm-qec-distinguishability-decayed-coherence)

[F3] For $|\lambda|\leq1$, $\mathcal D_\lambda$ is a channel with entanglement fidelity $(1+\operatorname{Re}\lambda)/2$ and pure-state infidelity $2|a|^2|b|^2(1-\operatorname{Re}\lambda)$ for $a|0\rangle+b|1\rangle$. For fixed branch weights, these fidelities are averaged by the weights. [lem-qec-prereq-qubit-coherence-fidelities](item-lem-qec-prereq-qubit-coherence-fidelities) [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

[F4] Under the Axiom of Choice, a qubit channel has Haar-average pure-state fidelity $(2F_e+1)/3$. [thm-qec-prereq-haar-average-relation](item-thm-qec-prereq-haar-average-relation) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F5] The finite exponential expansion has a controlled remainder, and finite products and quotients with nonzero constant denominator have the stated truncated expansions. Here $O(t^4)$ means a quantity bounded in absolute value by $Ct^4$ for sufficiently small positive $t$, with $C$ allowed to depend on the fixed parameters. [lem-qec-prereq-finite-taylor-control](item-lem-qec-prereq-finite-taylor-control)

[F6] For $\mathcal R_4$, the branch-averaged pure-state fidelity is $1-2|a|^2|b|^2p(1-\operatorname{Re}\chi_d)$ when $p>0$, and is one when $p=0$. [pthm-qec-distinguishability-r4-fidelity](item-pthm-qec-distinguishability-r4-fidelity)

[A1] Assume the Axiom of Choice for the Haar-average relation. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Proof

**Given:** The flagged coherence-channel mixture, and for the specialization the stated model, parameters and recovery.

**Goal:** Calculate the fidelities, establish their exact relationships, and derive the short-time coefficients.

1.1 By [F3], the identity branch has entanglement fidelity one and the other branch has fidelity $(1+\operatorname{Re}\lambda)/2$. Averaging with weights $1-p$ and $p$ gives $F_e=1-p(1-\operatorname{Re}\lambda)/2$. The pure-state infidelity is $2p|a|^2|b|^2(1-\operatorname{Re}\lambda)$. Since $|a|^2+|b|^2=1$, the maximum of $|a|^2|b|^2$ is $1/4$, attained at equal magnitudes; $1-\operatorname{Re}\lambda\geq0$ because $|\lambda|\leq1$. Thus the worst-case infidelity is also $p(1-\operatorname{Re}\lambda)/2$. [given, F3, algebra]

2.1 For $p>0$, [F2] identifies the two recovered branches. Applying its decay output to the equal superposition gives a positive $2\times2$ density matrix with diagonal entries $1/2$ and off-diagonal entry $\chi_d/2$; positivity therefore gives $|\chi_d|\leq1$. Linearity and the displayed action on pure inputs identify the decay map with $\mathcal D_{\chi_d}$. Step 1.1 applies, in agreement with [F6]. For $p=0$, [F2] and [F6] give the identity output, so both infidelities vanish without defining $\chi_d$. [given, F1, F2, F6, step 1.1]

3.1 If $\gamma>0$, set $c(t)=p\chi_d=\gamma(e^{i\Delta t}-e^{-\gamma t})/(\gamma+i\Delta)$. The denominator is nonzero. Expanding the two exponentials through degree three by [F5] and taking real parts gives $p-\operatorname{Re}c(t)=\gamma\Delta^2t^3/6+O(t^4)$. Explicitly, $p=\gamma t-\gamma^2t^2/2+\gamma^3t^3/6+O(t^4)$ and $\operatorname{Re}c=\gamma t-\gamma^2t^2/2+\gamma(\gamma^2-\Delta^2)t^3/6+O(t^4)$. Hence step 2.1 gives both infidelities as $\gamma\Delta^2t^3/12+O(t^4)$. If $\gamma=0$, $p=0$ for every $t$, so the same expansion holds with zero left side and coefficient. [given, F5, step 2.1, algebra]

4.1 Applying [F4] to the recovered qubit channel under [A1] yields $1-\bar F=2(1-F_e)/3$. Substitution of step 3.1 gives $1-\bar F=\gamma\Delta^2t^3/18+O(t^4)$. This also holds at the zero-decay boundary. [F4, A1, step 2.1, step 3.1, algebra] ∎
