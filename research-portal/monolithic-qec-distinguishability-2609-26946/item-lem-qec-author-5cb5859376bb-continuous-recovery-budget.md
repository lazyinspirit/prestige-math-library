---
title: Fixed-time convergence of calibrated recovery cycles
status: draft
research_item: lem-qec-author-5cb5859376bb-continuous-recovery-budget
dependency_level: 3
---

## Prerequisites

- [lem-qec-author-5cb5859376bb-unconditional-cycle-branches](item-lem-qec-author-5cb5859376bb-unconditional-cycle-branches)
- [lem-qec-prereq-channel-composition-budget](item-lem-qec-prereq-channel-composition-budget)
- [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)
- [lem-qec-prereq-trajectory-dyson-expansion](item-lem-qec-prereq-trajectory-dyson-expansion)
- [math:def-qc-instrument-and-conditional-state](https://alphabetamath.cc/item/def-qc-instrument-and-conditional-state)
- [math:thm-qc-instrument-outcome-law-normalizes](https://alphabetamath.cc/item/thm-qc-instrument-outcome-law-normalizes)
- [math:thm-finite-union-bound](https://alphabetamath.cc/item/thm-finite-union-bound)
- [physics:thm-qsm-dt-trace-contraction](https://alphabetamath.cc/physics/item/thm-qsm-dt-trace-contraction)
- [math:def-qc-fidelity](https://alphabetamath.cc/item/def-qc-fidelity)
- [math:thm-qc-fuchs-van-de-graaf](https://alphabetamath.cc/item/thm-qc-fuchs-van-de-graaf)


## Statement

Use the CPTP logical cycles $C_\tau$ and constants $K,K_2$ of the complete-cycle lemma, resetting the physical state by its encoding after every decoded cycle. For fixed $T>0$ and integer $N$ with $\tau=T/N\leq\tau_0$, every finite reference extension satisfies $\|C_\tau^N-I\|_{1\to1}\leq KT\tau$. Thus every logical density operator, including its entanglement with a reference, is recovered at time $T$ with trace-norm error tending to zero. The probability that some interval contains two or more jumps is at most $K_2T\tau$. A last shorter interval preserves the limit. Constants may depend on the fixed code, finite Hamiltonian and jumps.

## Facts & Assumptions

[F1] For the fixed finite code, Hamiltonian and jumps, the complete logical cycle $C_h$ is CPTP and satisfies $\|C_h-I\|_{1\to1}\leq Kh^2$ for $0\leq h\leq\tau_0$, uniformly with every finite reference. Its recovered contribution from two or more jumps has probability at most $K_2h^2$ on every density input, also with a reference. The complete-cycle proof, step 2.1, establishes complete positivity of each integrated jump-count contribution and every jump tail after the same encoding, compensation and decoder. [lem-qec-author-5cb5859376bb-unconditional-cycle-branches](item-lem-qec-author-5cb5859376bb-unconditional-cycle-branches)

[F2] For channels on one finite matrix space, $\|\mathcal E^N-\mathcal F^N\|_{1\to1}\leq N\|\mathcal E-\mathcal F\|_{1\to1}$, also after any fixed finite identity extension. Here $\|T\|_{1\to1}=\sup_{X\ne0}\|T(X)\|_1/\|X\|_1$ and $\|X\|_1=\operatorname{Tr}\sqrt{X^*X}$. [lem-qec-prereq-channel-composition-budget](item-lem-qec-prereq-channel-composition-budget)

[F3] The encoding is $\mathcal V(X)=VXV^*$ for a finite isometry $V$, and a decoded recovery followed by this encoding is a physical recovery supported on the code. Composing decoded cycles therefore models recovery and re-encoding at each interval. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[F4] Write $\mathcal N_h^{(n)}$ for the integrated ordered $n$-jump contribution of the trajectory expansion, including the no-jump congruence for $n=0$. Its convergent sum is $\mathcal N_h$. After encoding, compensation and the common decoder, the complete-cycle proof cited in [F1] shows that each count contribution and each tail is completely positive. [lem-qec-prereq-trajectory-dyson-expansion](item-lem-qec-prereq-trajectory-dyson-expansion) [lem-qec-author-5cb5859376bb-unconditional-cycle-branches](item-lem-qec-author-5cb5859376bb-unconditional-cycle-branches)

[F5] A finite instrument is a finite family of completely positive maps whose sum preserves trace. On a density input its branch traces are nonnegative and sum to one. [math:def-qc-instrument-and-conditional-state](https://alphabetamath.cc/item/def-qc-instrument-and-conditional-state) [math:thm-qc-instrument-outcome-law-normalizes](https://alphabetamath.cc/item/thm-qc-instrument-outcome-law-normalizes)

[F6] For a finite family of events in a probability space, the probability of their union is at most the sum of their probabilities. [math:thm-finite-union-bound](https://alphabetamath.cc/item/thm-finite-union-bound)

[F7] Every finite CPTP map contracts the trace norm of every complex input matrix. The supplier has domain mathematics, including when input and output dimensions differ. [physics:thm-qsm-dt-trace-contraction](https://alphabetamath.cc/physics/item/thm-qsm-dt-trace-contraction)

[F8] For density operators $\rho,\sigma$ on a nonzero finite-dimensional space, root fidelity is $F(\rho,\sigma)=\|\sqrt\rho\sqrt\sigma\|_1$, squared fidelity is $F(\rho,\sigma)^2$, and $1-F(\rho,\sigma)\leq\frac12\|\rho-\sigma\|_1\leq\sqrt{1-F(\rho,\sigma)^2}$. In particular $0\leq F\leq1$. [math:def-qc-fidelity](https://alphabetamath.cc/item/def-qc-fidelity) [math:thm-qc-fuchs-van-de-graaf](https://alphabetamath.cc/item/thm-qc-fuchs-van-de-graaf)

## Proof

**Given:** The fixed finite code, Hamiltonian, jumps, decoder and calibration of [F1], the total time $T>0$, and recovery and re-encoding after every interval. **Goal:** Prove reference-uniform fixed-time convergence, vanishing infidelity and a vanishing probability of any interval with at least two jumps.

1.1 Fix a finite reference space $A$ of positive dimension and write $\widehat C_h=C_h\otimes\operatorname{id}_A$ and $I$ for the identity on the corresponding logical-reference matrix space. Each extension is a channel: a further identity extension is an amplification of $C_h$, hence positive by complete positivity; its trace is the sum of the traces of diagonal reference blocks, each preserved by $C_h$. It therefore contracts trace norm by [F7]. For equal intervals $\tau=T/N$, [F2] with comparison channel $I$ and [F1] give $\|\widehat C_\tau^N-I\|_{1\to1}\leq N\|\widehat C_\tau-I\|_{1\to1}\leq NK\tau^2=KT\tau$. Re-encoding as in [F3] makes these powers precisely the repeated recovered cycles, with the same fixed data and constants. A zero-dimensional reference has no density inputs and only trivial operator estimates. [F1, F2, F3, F7]

2.1 For any logical-reference density operator $\rho$, positivity and trace one give $\|\rho\|_1=1$. Put $\sigma=\widehat C_\tau^N(\rho)$, which is again a density operator because the map is a channel. Step 1.1 gives $\|\sigma-\rho\|_1\leq KT\tau$. Define infidelity here as $1-F(\rho,\sigma)^2$, using the squared-fidelity convention in [F8]. Then $0\leq1-F(\rho,\sigma)^2=(1+F(\rho,\sigma))(1-F(\rho,\sigma))\leq\|\rho-\sigma\|_1\leq KT\tau$. This proves vanishing infidelity as well as trace-norm convergence, in particular for pure logical inputs and pure states on a logical-reference space. No fidelity value on a single input is used to infer a norm bound. [F1, F2, F8, step 1.1, algebra]

3.1 More generally let $h_1,\ldots,h_m$ be positive interval lengths with $\sum_{k=1}^m h_k=T$ and $\max_k h_k\leq\tau\leq\tau_0$, and put $P=\widehat C_{h_m}\cdots\widehat C_{h_1}$, with the rightmost map applied first. Cancellation of adjacent terms gives the finite identity $P-I=\sum_{k=1}^m\widehat C_{h_m}\cdots\widehat C_{h_{k+1}}(\widehat C_{h_k}-I)$, with the factor preceding the parentheses equal to $I$ when $k=m$. Each preceding product contracts trace norm by step 1.1. Apply the trace-norm triangle inequality to this identity on any matrix $X$ and use [F1] to get $\|(P-I)(X)\|_1\leq K\sum_k h_k^2\|X\|_1$. Taking the induced norm and using $h_k^2\leq\tau h_k$ gives $\|P-I\|_{1\to1}\leq K\sum_k h_k^2\leq KT\tau$. Applying step 2.1 with $P(\rho)$ in place of $\sigma$ gives the same infidelity bound. Thus a shorter final interval preserves both convergence statements. [F1, F2, F3, F7, F8, step 1.1, step 2.1, algebra]

4.1 For the partition in step 3.1, define two logical maps for interval $k$. Let $D_{k,0}=R\mathcal U_{h_k}(\mathcal N_{h_k}^{(0)}+\mathcal N_{h_k}^{(1)})\mathcal V$ and $D_{k,1}=R\mathcal U_{h_k}(\sum_{n\geq2}\mathcal N_{h_k}^{(n)})\mathcal V$, using the same compensation $\mathcal U_h$, decoder $R$ and encoding $\mathcal V$ as in the complete-cycle lemma. Both maps are completely positive by [F1] and [F4], and $D_{k,0}+D_{k,1}=C_{h_k}$. They therefore form a two-outcome instrument by [F5]; outcome $1$ means at least two jumps in this interval, and outcome $0$ means fewer than two. Their finite reference extensions $\widehat D_{k,b}=D_{k,b}\otimes\operatorname{id}_A$ are completely positive, and their sum $\widehat C_{h_k}$ is trace preserving by step 1.1. This instrument only groups mathematical trajectory contributions; the implemented decoder is the same in both outcomes and requires no observation of the jump record. [F1, F3, F4, F5, step 1.1, step 3.1, construct]

5.1 On the finite outcome set $\Omega=\{0,1\}^m$ define $J_\omega=\widehat D_{m,\omega_m}\cdots\widehat D_{1,\omega_1}$. Compositions are completely positive, since every amplification is a composition of positive maps. Distributing the finite sum gives $\sum_{\omega\in\Omega}J_\omega=P$, a channel by step 3.1. Thus $(J_\omega)_{\omega\in\Omega}$ is a finite instrument. For the initial density operator $\rho$, [F5] supplies weights $p_\omega=\operatorname{Tr}(J_\omega(\rho))\geq0$ with $\sum_\omega p_\omega=1$. Define a probability measure on all subsets of $\Omega$ by $\mathbb P(B)=\sum_{\omega\in B}p_\omega$; finite sums give additivity, and countable additivity holds because any disjoint family of nonempty subsets of this finite set has only finitely many members. This constructs the required joint law without assuming independent intervals. [F5, step 3.1, step 4.1, construct, algebra]

6.1 Let $A_k=\{\omega:\omega_k=1\}$. Summing over the later outcomes replaces later branch maps by their trace-preserving channel sums, which disappear under the trace; summing over earlier outcomes gives $\rho_{k-1}=\widehat C_{h_{k-1}}\cdots\widehat C_{h_1}(\rho)$, with $\rho_0=\rho$. Consequently $\mathbb P(A_k)=\operatorname{Tr}(\widehat D_{k,1}(\rho_{k-1}))$. Each $\rho_{k-1}$ is a density operator, so the input-uniform bound [F1] gives $\mathbb P(A_k)\leq K_2h_k^2$. Applying [F6] in the finite probability space of step 5.1 yields $\mathbb P(\bigcup_k A_k)\leq K_2\sum_k h_k^2\leq K_2T\tau$. In particular equal intervals give $NK_2\tau^2=K_2T\tau$, and any shorter final interval obeys the same bound. Together with steps 1.1–2.1 this proves every stated fixed-time limit with the original constants and arbitrary finite references. [F1, F6, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, algebra] ∎
