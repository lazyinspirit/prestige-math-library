---
title: Repeated four-level recovery and fixed-time error bound
status: draft
research_item: pthm-qec-distinguishability-four-repeated-checks
dependency_level: 7
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 3, paragraph after Eq. (8) and Eq. (9)
      statement: The article states a repeated-transpose-recovery infidelity bound and
        a leading checking-interval scale, and says that checking and decoding
        approach unit fidelity.
      hypotheses: The article's idealized four-level model, fixed total time, equal
        checking intervals, and transpose recovery after each check.
      reading_limits: The supplied PDF page 3 extracted text was read for attribution.
        The argument below uses the stated suppliers; the article's
        repeated-check claim is not used as its own proof.
---

PDF p. 3: ` Paragraph after Eq. (8), Eq. (9) `

## Prerequisites

- [post-qec-distinguishability-four-level-model](item-post-qec-distinguishability-four-level-model)
- [def-qec-distinguishability-transpose-recovery](item-def-qec-distinguishability-transpose-recovery)
- [pthm-qec-distinguishability-four-transpose-cubic](item-pthm-qec-distinguishability-four-transpose-cubic)
- [pthm-qec-distinguishability-four-petz-kraus](item-pthm-qec-distinguishability-four-petz-kraus)
- [lem-qec-prereq-qubit-coherence-fidelities](item-lem-qec-prereq-qubit-coherence-fidelities)
- [lem-qec-prereq-channel-composition-budget](item-lem-qec-prereq-channel-composition-budget)
- [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)
- [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)


## Statement

Assume the postulated four-level model with real fixed parameters $\omega_0,\Delta$ and decay rate $\gamma\geq0$, code $\mathcal C=\operatorname{span}\{|0\rangle,|1\rangle\}$, and the support-completed transpose recovery for that code. Let $T>0$, $N$ be a positive integer, and $\tau=T/N$. Assume that each interval is described by the same model channel for time $\tau$, followed by ideal instantaneous transpose recovery, and that the resulting logical cycles compose as identical channels. Let $H_L=\mathbb C^2$ have ordered orthonormal basis $|0\rangle_L,|1\rangle_L$, and let $V:H_L\to\mathbb C^4$ be the isometric encoding $V|j\rangle_L=|j\rangle$ for $j=0,1$. Write $\mathcal N_\tau$ for the model channel and $\mathcal T_\tau$ for its support-completed transpose recovery. The decoded logical cycle is $\mathcal E_\tau(X)=V^\dagger\mathcal T_\tau(\mathcal N_\tau(VXV^\dagger))V$ for $X\in\mathcal L(H_L)$, and its $N$-fold composition is $\mathcal E_\tau^N$. Set $F_{\rm tr}(\tau)=F_e(\mathcal E_\tau)$ and $F_{\rm tr}^{(N)}=F_e(\mathcal E_\tau^N)$, where $F_e$ is entanglement fidelity at the maximally mixed logical input $I_{H_L}/2$.

Each cycle is a logical dephasing channel: it preserves the diagonal entries in the ordered code basis and multiplies the $01$ entry by a real factor $q\in(0,1]$. Consequently,

$$1-F_{\rm tr}^{(N)}\leq N[1-F_{\rm tr}(\tau)]=\frac{\gamma\Delta^2T\tau^2}{24}+O(\tau^3).$$

The remainder is for $N\to\infty$ at fixed $T$ and fixed model parameters. In fact the left-hand side has the same leading term. If $\gamma\Delta^2T>0$, the leading-order scale for a small target infidelity $\epsilon>0$ is $\tau\lesssim\sqrt{24\epsilon/(\gamma\Delta^2T)}$; this asymptotic rule is not a finite-$\tau$ guarantee without a remainder bound. If $\gamma\Delta^2=0$, the cycle is the identity and its infidelity is zero. Under these assumptions, checking and decoding the decay branch at each cycle recover every encoded pure state with fidelity tending to one as $\tau\to0$ at fixed $T$.

## Statement references

[post-qec-distinguishability-four-level-model](item-post-qec-distinguishability-four-level-model)

[def-qec-distinguishability-transpose-recovery](item-def-qec-distinguishability-transpose-recovery)

[pthm-qec-distinguishability-four-transpose-cubic](item-pthm-qec-distinguishability-four-transpose-cubic)

[pthm-qec-distinguishability-four-petz-kraus](item-pthm-qec-distinguishability-four-petz-kraus)

[lem-qec-prereq-qubit-coherence-fidelities](item-lem-qec-prereq-qubit-coherence-fidelities)

[lem-qec-prereq-channel-composition-budget](item-lem-qec-prereq-channel-composition-budget)

[def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

## Facts & Assumptions

[F1] The postulated model specifies the four-level basis, code and channel for real $\omega_0,\Delta$, $\gamma\geq0$ and nonnegative interval length. [post-qec-distinguishability-four-level-model](item-post-qec-distinguishability-four-level-model)

[F2] Transpose recovery uses the inverse square root on the support of the channel output on the code projector; its completion does not change its action after noise on encoded inputs. [def-qec-distinguishability-transpose-recovery](item-def-qec-distinguishability-transpose-recovery)

[F3] For one recovered cycle, put $p=1-e^{-\gamma\tau}$. When $p>0$, the logical channel has coherence factor $q=1-p+p|\chi|^2$, where $\chi=\gamma(e^{i\Delta\tau}-e^{-\gamma\tau})/[(\gamma+i\Delta)p]$ and $0<|\chi|\leq1$. When $p=0$ the logical channel is the identity. [pthm-qec-distinguishability-four-petz-kraus](item-pthm-qec-distinguishability-four-petz-kraus)

[F4] At fixed model parameters, the one-cycle entanglement fidelity obeys $1-F_{\rm tr}(\tau)=\gamma\Delta^2\tau^3/24+O(\tau^4)$ as $\tau\downarrow0$. [pthm-qec-distinguishability-four-transpose-cubic](item-pthm-qec-distinguishability-four-transpose-cubic)

[F5] A qubit coherence channel with real factor $q\in[0,1]$ has entanglement fidelity $(1+q)/2$, and composition multiplies its coherence factors. [lem-qec-prereq-qubit-coherence-fidelities](item-lem-qec-prereq-qubit-coherence-fidelities)

[F6] For $q\in[0,1]$, $1-q^N\leq N(1-q)$; its $N$-cycle pure-state infidelity at $a|0\rangle+b|1\rangle$ is $2|a|^2|b|^2(1-q^N)$. [lem-qec-prereq-channel-composition-budget](item-lem-qec-prereq-channel-composition-budget)

[F7] For an isometric encoding $V$ and a physical recovery $\mathcal T$ with outputs supported on $VV^\dagger$, the map $Y\mapsto V^\dagger\mathcal T(Y)V$ is a decoder, and composing it with noise and encoding gives a channel on the logical operator space. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[F8] For a channel $\mathcal E$ on $H_L=\mathbb C^2$, its entanglement fidelity at $I_{H_L}/2$ is $F_e(\mathcal E)=\langle\Phi_2|({\rm id}\otimes\mathcal E)(|\Phi_2\rangle\langle\Phi_2|)|\Phi_2\rangle$, where $|\Phi_2\rangle=(|0\rangle_L\otimes|0\rangle_L+|1\rangle_L\otimes|1\rangle_L)/\sqrt2$. [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

## Proof

**Given:** The model, recovery, fixed parameters, total time and identical-cycle composition in the statement.

**Goal:** Establish the repeated-cycle fidelity bound, its asymptotic scale and the pure-state limit.

1.1 The ordered-basis encoding $V$ is isometric. By [F2] and [F7], $\mathcal E_\tau$ is a channel on $\mathcal L(H_L)$. Decoding and re-encoding any recovered output $Y$ gives $VV^\dagger YVV^\dagger=Y$ because the output is code-supported; hence the decoded $N$-cycle map is $\mathcal E_\tau^N$. Thus [F8] supplies the two entanglement-fidelity functionals used here. By [F3], the recovered logical map preserves code-basis populations and has the displayed real coherence factor. If $p>0$, then $p<1$ for finite $\gamma\tau$ and $0<|\chi|\leq1$, so $0<q\leq1$; if $p=0$, $q=1$. Thus it is the claimed dephasing channel. Repeating the same cycle gives coherence factor $q^N$, and [F5] gives $1-F_{\rm tr}^{(N)}=(1-q^N)/2$ and $1-F_{\rm tr}(\tau)=(1-q)/2$. [given, F2, F3, F5, F7, F8, algebra]

2.1 Apply [F6] and then [F4]. Since $N=T/\tau$, multiplying the $O(\tau^4)$ one-cycle remainder by $N$ gives an $O(\tau^3)$ fixed-$T$ remainder. This proves the displayed bound. [given, F4, F6, step 1.1, algebra]

3.1 Put $x=1-q$. The geometric sum gives $0\leq Nx-(1-q^N)=x\sum_{j=0}^{N-1}(1-q^j)\leq N(N-1)x^2/2$. By [F4] and step 1.1, $x=O(\tau^3)$, so the difference is $O(\tau^4)$ at fixed $T$. Hence the actual repeated infidelity has the same leading $\gamma\Delta^2T\tau^2/24$ term as the bound. When this coefficient is positive, solving that leading term for a small target $\epsilon$ gives the displayed checking-interval scale; the uncontrolled sign of the remainder precludes interpreting it alone as an exact finite-interval threshold. [given, F4, step 1.1, step 2.1, algebra]

4.1 If $\gamma=0$, [F3] gives the identity. If $\Delta=0$ and $p>0$, its formula gives $\chi=1$, so $q=1$; the $p=0$ case is already covered. For any normalized encoded pure state, [F6] bounds its $N$-cycle infidelity by $N(1-q)/2= N[1-F_{\rm tr}(\tau)]$, which tends to zero by step 2.1. Thus its fidelity tends to one under the stated ideal cycle and decay-branch decoding assumptions. [given, F3, F6, step 1.1, step 2.1, algebra] ∎
