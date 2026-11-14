---
title: Cubic transpose-fidelity loss
status: draft
research_item: pthm-qec-distinguishability-four-transpose-cubic
dependency_level: 6
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 3, Eq. (7); PDF p. 9, Table S1.1
      statement: The article gives the cubic transpose-fidelity loss with coefficient
        1/24 and compares it with syndrome and phase-corrected recovery.
      hypotheses: The idealized four-level model, its two-dimensional code, fixed
        parameters and short nonnegative times.
      reading_limits: Article-origin attribution only. The supplied PDF text on pages
        3, 8 and 9 and the page-9 image were consulted; Table S1.1 was visually
        located on page 9. The argument uses the declared local suppliers and
        local algebra, not the article's claim as proof.
---

PDF p. 3: ` Eq. (7) `

## Prerequisites

- [post-qec-distinguishability-four-level-model](item-post-qec-distinguishability-four-level-model)
- [def-qec-distinguishability-transpose-recovery](item-def-qec-distinguishability-transpose-recovery)
- [alg-qec-distinguishability-r4](item-alg-qec-distinguishability-r4)
- [pthm-qec-distinguishability-four-transpose-exact](item-pthm-qec-distinguishability-four-transpose-exact)
- [pthm-qec-distinguishability-r4-cubic](item-pthm-qec-distinguishability-r4-cubic)
- [lem-qec-prereq-qubit-transpose-phase-rule](item-lem-qec-prereq-qubit-transpose-phase-rule)
- [lem-qec-prereq-qubit-coherence-fidelities](item-lem-qec-prereq-qubit-coherence-fidelities)
- [lem-qec-prereq-finite-taylor-control](item-lem-qec-prereq-finite-taylor-control)
- [pthm-qec-distinguishability-four-level-evolution](item-pthm-qec-distinguishability-four-level-evolution)
- [pthm-qec-distinguishability-decayed-coherence](item-pthm-qec-distinguishability-decayed-coherence)
- [pthm-qec-distinguishability-r4-fidelity](item-pthm-qec-distinguishability-r4-fidelity)


## Statement

Assume the postulated four-level model with real parameters $\omega_0,\Delta$ and decay rate $\gamma\geq0$, and code $\mathcal C=\operatorname{span}\{|0\rangle,|1\rangle\}$. Apply the model channel for time $t\geq0$, followed by its support-completed transpose recovery for the code and logical decoding. Let $F_{\rm tr}(t)$ be the entanglement fidelity of the resulting logical channel at the maximally mixed input $I/2$. At fixed parameters, as $t\to0$ through nonnegative values,

$$F_{\rm tr}(t)=1-\frac{\gamma\Delta^2t^3}{24}+O(t^4).$$

Here $O(t^4)$ means an absolute bound $Ct^4$ for sufficiently small nonnegative $t$, with $C$ allowed to depend on the fixed parameters. The leading loss is half the worst-case pure-state loss coefficient $\gamma\Delta^2/12$ for the syndrome recovery $\mathcal R_4$. In the decay branch the transpose recovery cancels the deterministic coherence phase but also applies dephasing: the resulting coherence factor is $|\chi_d|^2$, whereas a phase-only correction gives $|\chi_d|$. The latter has leading entanglement-fidelity loss $\gamma\Delta^2t^3/48$.

## Statement references

[post-qec-distinguishability-four-level-model](item-post-qec-distinguishability-four-level-model)

[def-qec-distinguishability-transpose-recovery](item-def-qec-distinguishability-transpose-recovery)

[alg-qec-distinguishability-r4](item-alg-qec-distinguishability-r4)

[pthm-qec-distinguishability-four-transpose-exact](item-pthm-qec-distinguishability-four-transpose-exact)

[pthm-qec-distinguishability-r4-cubic](item-pthm-qec-distinguishability-r4-cubic)

[lem-qec-prereq-qubit-transpose-phase-rule](item-lem-qec-prereq-qubit-transpose-phase-rule)

[lem-qec-prereq-qubit-coherence-fidelities](item-lem-qec-prereq-qubit-coherence-fidelities)

[pthm-qec-distinguishability-four-level-evolution](item-pthm-qec-distinguishability-four-level-evolution)

[pthm-qec-distinguishability-decayed-coherence](item-pthm-qec-distinguishability-decayed-coherence)

[pthm-qec-distinguishability-r4-fidelity](item-pthm-qec-distinguishability-r4-fidelity)

## Facts & Assumptions

[F1] The model specifies the orthonormal four-level basis, code and finite channel, with real $\omega_0,\Delta$, $\gamma\geq0$ and $t\geq0$. [post-qec-distinguishability-four-level-model](item-post-qec-distinguishability-four-level-model)

[F2] Transpose recovery uses the inverse square root of the channel output on the code projector on its support; its completion does not change the recovered channel on encoded inputs. [def-qec-distinguishability-transpose-recovery](item-def-qec-distinguishability-transpose-recovery)

[F3] For $\gamma t>0$, put $p=1-e^{-\gamma t}$ and $c=\gamma(e^{i\Delta t}-e^{-\gamma t})/(\gamma+i\Delta)$. The decay coherence is $\chi_d=c/p$, and the transpose entanglement fidelity is $F_{\rm tr}=1-p(1-|\chi_d|^2)/2$. At $\gamma t=0$, it is one. [pthm-qec-distinguishability-four-transpose-exact](item-pthm-qec-distinguishability-four-transpose-exact)

[F4] The syndrome recovery $\mathcal R_4$ measures the code and decay spans and maps the decay basis back to the code basis. Its pure-state loss has leading coefficient $|a|^2|b|^2\gamma\Delta^2/3$ for a normalized code state $a|0\rangle+b|1\rangle$. [alg-qec-distinguishability-r4](item-alg-qec-distinguishability-r4) [pthm-qec-distinguishability-r4-cubic](item-pthm-qec-distinguishability-r4-cubic) For $p>0$ its exact loss is $1-F_\psi=2|a|^2|b|^2p(1-\operatorname{Re}\chi_d)$; for $\gamma t=0$ the fidelity is one. [pthm-qec-distinguishability-r4-fidelity](item-pthm-qec-distinguishability-r4-fidelity)

[F5] For orthogonally flagged identity and coherence-channel branches, transpose recovery produces decay-branch coherence factor $|\chi|^2$; a phase-correcting unitary instead produces $|\chi|$. A zero-weight branch contributes zero. [lem-qec-prereq-qubit-transpose-phase-rule](item-lem-qec-prereq-qubit-transpose-phase-rule)

[F6] A qubit coherence channel preserves diagonal entries and multiplies its $01$ entry by its coherence factor. Its entanglement fidelity at $I/2$ is $(1+\operatorname{Re}\lambda)/2$, and fidelity is affine under weighted channel sums. [lem-qec-prereq-qubit-coherence-fidelities](item-lem-qec-prereq-qubit-coherence-fidelities)

[F7] Fixed-parameter exponential series, products and quotients with nonzero limiting denominator have controlled finite-order remainders; a denominator vanishing at zero requires cancellation first. [lem-qec-prereq-finite-taylor-control](item-lem-qec-prereq-finite-taylor-control)

[F8] For every normalized pure code input, the null and decay probabilities are $1-p=e^{-\gamma t}$ and $p=1-e^{-\gamma t}$. When $p>0$, the recovered null output is the input projector, and the recovered decay output has diagonal entries $|a|^2,|b|^2$ and $01$ entry $ab^*\chi_d$. At $p=0$ no conditional decay output is assigned. [pthm-qec-distinguishability-decayed-coherence](item-pthm-qec-distinguishability-decayed-coherence) The evolved density operator itself is block diagonal between the code and decay spans, with precisely these branch matrices before the decay basis is mapped back to the code. [pthm-qec-distinguishability-four-level-evolution](item-pthm-qec-distinguishability-four-level-evolution)

## Proof

**Given:** The postulated model, code, fixed parameters and recovery procedures in the statement.

**Goal:** Prove the cubic transpose expansion and the stated comparison of recoveries.

1.1 Suppose $\gamma>0$ and $t>0$. Expanding the exponentials in [F3] using [F7] gives $p=\gamma t-\gamma^2t^2/2+\gamma^3t^3/6+O(t^4)$ and $c=\gamma t+\gamma(i\Delta-\gamma)t^2/2+\gamma(\gamma^2-i\gamma\Delta-\Delta^2)t^3/6+O(t^4)$. Hence $p-\operatorname{Re}c=\gamma\Delta^2t^3/6+O(t^4)$ and $p-c=-i\gamma\Delta t^2/2+O(t^3)$. [given, F3, F7, algebra]

2.1 Since $p>0$, the exact identity $p(1-|c/p|^2)=2(p-\operatorname{Re}c)-|p-c|^2/p$ applies. Canceling one factor of $t$ in $p$ before using [F7], the second term is $\gamma\Delta^2t^3/4+O(t^4)$. Thus $p(1-|\chi_d|^2)=\gamma\Delta^2t^3/12+O(t^4)$, and [F3] gives the displayed transpose expansion. If $\gamma=0$, [F3] gives fidelity one, so the same expansion holds; the value at $t=0$ is also one. [given, F3, F7, step 1.1, algebra]

3.1 For $p>0$, use the equal-population input in [F8]: its normalized decay output is $\tfrac12\begin{pmatrix}1&\chi_d\\\overline\chi_d&1\end{pmatrix}$, with eigenvalues $(1\pm|\chi_d|)/2$. Positivity therefore gives $|\chi_d|\leq1$, so $p-\operatorname{Re}c=p(1-\operatorname{Re}\chi_d)\geq0$. By the exact formula in [F4], $1-F_\psi=2|a|^2|b|^2(p-\operatorname{Re}c)$. Since $|a|^2+|b|^2=1$, the factor $|a|^2|b|^2$ is at most $1/4$, attained at equal populations. Hence $\max_\psi(1-F_\psi)=(p-\operatorname{Re}c)/2=\gamma\Delta^2t^3/12+O(t^4)$ by step 1.1. The scalar remainder is independent of the state, and multiplying it by $2|a|^2|b|^2\leq1/2$ bounds every state's remainder uniformly. This agrees with the leading coefficient in [F4] and is twice the transpose coefficient in step 2.1. At $\gamma t=0$, [F4] gives zero loss for every state, including $\gamma=0$ for all times. [given, F4, F8, step 1.1, step 2.1, algebra]

4.1 Let $H_L=\mathbb C^2$ with basis $|0\rangle_L,|1\rangle_L$, and define isometries $V|j\rangle_L=|j\rangle$ and $W|j\rangle_L=|j+2\rangle$ for $j=0,1$. Their ranges are orthogonal by [F1]. For $p>0$, [F8] gives the restricted model channel on every pure input projector as the block diagonal expression $(1-p)VXV^\dagger+pW\mathcal D_{\chi_d}(X)W^\dagger$, where $\mathcal D_{\chi_d}$ is the coherence map of [F6]. This equality extends to every logical matrix by complex linearity of the model channel in [F1]: the projectors onto $|0\rangle_L,|1\rangle_L,(|0\rangle_L+|1\rangle_L)/\sqrt2,(|0\rangle_L+i|1\rangle_L)/\sqrt2$ span all $2\times2$ matrices. Indeed, twice the third projector minus the first two gives $E_{01}+E_{10}$, and twice the fourth minus the first two gives $-iE_{01}+iE_{10}$, where $E_{jk}=|j\rangle_L\langle k|_L$; these two combinations recover both off-diagonal matrix units. Thus the restricted channel is exactly the orthogonally flagged channel in [F5], with $0<p<1$ and $|\chi_d|\leq1$ by step 3.1. [given, F1, F5, F6, F8, step 3.1, algebra]

5.1 To identify its transpose with the decoded physical recovery, let $K_k$ be Kraus matrices of the model channel and put $P=VV^\dagger$ and $A=\mathcal N_t(P)$. The restricted channel in step 4.1 has Kraus matrices $K_kV$ and sends $I$ to $A$. By [F2], decoding the physical transpose gives Kraus matrices $V^\dagger P K_k^\dagger A^{-1/2}=(K_kV)^\dagger A^{-1/2}$, because $V^\dagger P=V^\dagger$. These are exactly the transpose matrices for the restricted channel with whole input code $H_L$. The completion does not affect its noise outputs. Consequently [F5] applies: transpose recovery gives $(1-p)\operatorname{id}+p\mathcal D_{|\chi_d|^2}$, whereas reading the two spans as in [F4] and applying a phase-correcting unitary on the decoded decay branch gives $(1-p)\operatorname{id}+p\mathcal D_{|\chi_d|}$. At $\chi_d=0$ its phase can be arbitrary. At $p=0$, [F8] and the linearity argument of step 4.1 give only the identity branch, and no conditional decay map is assigned. [given, F1, F2, F4, F5, F8, step 4.1, algebra]

6.1 By [F3] and step 1.1, $\chi_d\to1$ as $t\to0$ with $\gamma>0$. From step 2.1, after canceling $t$ in $p$, $1-|\chi_d|^2=\Delta^2t^2/12+O(t^3)$. Since $|\chi_d|\to1$, the identity $1-|\chi_d|=(1-|\chi_d|^2)/(1+|\chi_d|)$ first gives $1-|\chi_d|=O(t^2)$, hence $1+|\chi_d|=2+O(t^2)$ and $1-|\chi_d|=\Delta^2t^2/24+O(t^3)$ by [F7]. The flagged-channel rule [F5] removes the coherence phase in both recoveries, but transpose recovery leaves the smaller real factor $|\chi_d|^2$, representing additional dephasing. Its applicability is established in steps 4.1 and 5.1. Using [F6], the phase-only decoder has loss $p(1-|\chi_d|)/2=\gamma\Delta^2t^3/48+O(t^4)$. For $\gamma=0$ the decay branch has zero weight, so this loss is zero. This completes the comparison. [given, F3, F5, F6, F7, step 1.1, step 2.1, step 4.1, step 5.1, algebra] ∎
