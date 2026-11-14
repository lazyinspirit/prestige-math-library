---
id: pthm-qec-distinguishability-four-optimal-relationships
kind: physics-theorem
domain: physics
title: Exact fidelity–Kraus-weight identities and short-time bound saturation
status: published
origin: session
deps:
  - post-qec-distinguishability-four-level-model
  - alg-qec-distinguishability-r4
  - pthm-qec-distinguishability-four-optimal-decoder
  - pthm-qec-distinguishability-four-kraus
  - pthm-qec-distinguishability-four-kraus-weights
  - pthm-qec-distinguishability-four-recovery-comparison
  - lem-qec-prereq-qubit-coherence-fidelities
  - lem-qec-prereq-qubit-transpose-phase-rule
  - lem-qec-prereq-finite-taylor-control
  - thm-qec-distinguishability-near-optimal-bound
  - math:def-axiom-of-choice
dependency_roles:
  post-qec-distinguishability-four-level-model: physical-assumption
  alg-qec-distinguishability-r4: formulation-prerequisite
  pthm-qec-distinguishability-four-optimal-decoder: physical-result
  pthm-qec-distinguishability-four-kraus: physical-result
  pthm-qec-distinguishability-four-kraus-weights: physical-result
  pthm-qec-distinguishability-four-recovery-comparison: physical-result
  lem-qec-prereq-qubit-coherence-fidelities: mathematical-premise
  lem-qec-prereq-qubit-transpose-phase-rule: mathematical-premise
  lem-qec-prereq-finite-taylor-control: mathematical-premise
  thm-qec-distinguishability-near-optimal-bound: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 9, paragraph following Eq. (S1.9)
      statement: The article states the exact relationships between optimal and
        transpose infidelities and the two decay Kraus weights, saturation of
        the factor-two bound at short times, and the short-time comparison with
        the unrotated recovery.
      hypotheses: The idealized four-level model and maximally mixed-input
        entanglement fidelity.
      reading_limits: The supplied extracted text at PDF p. 9 was read for
        attribution. The argument below uses the stated model consequences and
        mathematical suppliers, not the article as proof.
physical_scope: Conditional predictions of the postulated four-level model; no
  experimental observation is asserted.
dependency_level: 7
---

## Statement

Assume the Axiom of Choice and the postulated four-level model with real $\omega_0,\Delta$, rate $\gamma\geq0$, and finite time $t\geq0$. The code is $\operatorname{span}\{|0\rangle,|1\rangle\}$ and the orthogonal decay space is $\operatorname{span}\{|2\rangle,|3\rangle\}$. Put $p=1-e^{-\gamma t}$. For $p>0$ define $\chi=\gamma(e^{i\Delta t}-e^{-\gamma t})/[(\gamma+i\Delta)p]$ and $r=|\chi|$. Let $K_2,K_3$ be the specifically named operators in Exact four-level Kraus operators, using its convention $K_2=K_3=0$ when $p=0$, with weights $w_j=\operatorname{Tr}(K_j^\dagger K_j)$. Let $F_{\rm opt}$ be the maximum, over quantum-channel decoders, of entanglement fidelity at the maximally mixed logical input; let $F_{\rm tr}$ be that fidelity for support-completed transpose recovery. Entanglement fidelity is the overlap with a normalized maximally entangled logical-reference state after the channel acts on the logical factor.

For $p>0$,

$$1-F_{\rm tr}=(1+r)(1-F_{\rm opt}),\qquad 1-F_{\rm opt}=\frac{w_3}{2},\qquad 1-F_{\rm tr}=\frac{w_2w_3}{2p}.$$

For fixed $\gamma>0$ and $\Delta\ne0$, as $t\downarrow0$ the ratio $(1-F_{\rm tr})/(1-F_{\rm opt})$ tends to $2$, saturating the factor-two bound in that limit. For fixed $\gamma>0$ and real $\Delta$, sufficiently small positive $t$ obeys $\operatorname{Re}\chi\leq r^2\leq r$. The unrotated recovery $\mathcal R_4$ measures the code and decay spaces, leaves the code branch unchanged, and maps $|2\rangle,|3\rangle$ to $|0\rangle,|1\rangle$ respectively. Its entanglement infidelity has leading coefficient $\gamma\Delta^2/12$ at order $t^3$, while transpose recovery has coefficient $\gamma\Delta^2/24$ and the optimal decoder has coefficient $\gamma\Delta^2/48$. Thus, for $\Delta\ne0$, transpose recovery halves the leading infidelity of $\mathcal R_4$ and is within a factor two of the optimum.

If $p=0$, the decay branch has zero weight, $w_2=w_3=0$, and all three fidelities are one; conditional $\chi$ and expressions dividing by $p$ are not defined. If $\Delta=0$, all three infidelities vanish and their ratios are undefined.

## Statement references

[[post-qec-distinguishability-four-level-model]]

[[alg-qec-distinguishability-r4]]

[[pthm-qec-distinguishability-four-optimal-decoder]]

[[pthm-qec-distinguishability-four-kraus]]

[[pthm-qec-distinguishability-four-kraus-weights]]

[[pthm-qec-distinguishability-four-recovery-comparison]]

[[lem-qec-prereq-qubit-coherence-fidelities]]

[[lem-qec-prereq-qubit-transpose-phase-rule]]

[[thm-qec-distinguishability-near-optimal-bound]]

[[math:def-axiom-of-choice]]

## Facts & Assumptions

[A1] Assume the Axiom of Choice, as required by the unrotated-recovery comparison. [[math:def-axiom-of-choice]]

[F1] In the postulated model, the code and decay spaces are orthogonal; $\mathcal R_4$ is the stated syndrome recovery. [[post-qec-distinguishability-four-level-model]] [[alg-qec-distinguishability-r4]]

[F2] Write $V_0|j_L\rangle=|j\rangle$ and $V_1|j_L\rangle=|j+2\rangle$ for $j=0,1$, identifying the logical qubit with the code and decay spaces respectively. For $p>0$, the restricted noise channel has the orthogonal-block form $\mathcal N_t(V_0XV_0^\dagger)=(1-p)V_0XV_0^\dagger+pV_1\mathcal D_\chi(X)V_1^\dagger$, where $\mathcal D_\chi$ preserves diagonal entries and multiplies the $01$ entry by $\chi$. The Kraus representation supplies the separate output blocks and null action; the unrotated-recovery comparison supplies the decoded decay map, with its $\chi_d$ equal to $\chi$. [[pthm-qec-distinguishability-four-kraus]] [[pthm-qec-distinguishability-four-recovery-comparison]] The bound is $0<r\leq1$. The optimal entanglement fidelity is $1-p(1-r)/2$; at $p=0$ it is one without defining $\chi$. [[pthm-qec-distinguishability-four-optimal-decoder]]

[F3] The named $K_2,K_3$ and their zero-decay convention are those of Exact four-level Kraus operators. For positive rate and time, their weights are $w_2=p(1+r)$ and $w_3=p(1-r)$. At zero decay probability both operators and both weights vanish. [[pthm-qec-distinguishability-four-kraus]] [[pthm-qec-distinguishability-four-kraus-weights]]

[F4] For the flagged coherence channel, support-completed transpose recovery produces the mixture $(1-p)\operatorname{id}+p\mathcal D_{r^2}$, where $\mathcal D_\lambda$ preserves diagonal entries and multiplies the $01$ entry by $\lambda$. Its maximally mixed-input entanglement fidelity is obtained by branch averaging, with $F_e(\mathcal D_\lambda)=(1+\operatorname{Re}\lambda)/2$. [[lem-qec-prereq-qubit-transpose-phase-rule]] [[lem-qec-prereq-qubit-coherence-fidelities]]

[F5] For fixed $\gamma,\Delta$, the entanglement infidelity of $\mathcal R_4$ is $\gamma\Delta^2t^3/12+O(t^4)$ as $t\downarrow0$. [[pthm-qec-distinguishability-four-recovery-comparison]]

[F6] Fixed-parameter exponential and nonvanishing-denominator quotient expansions have controlled remainders. [[lem-qec-prereq-finite-taylor-control]]

[F7] For a finite-dimensional code and channel, transpose infidelity is at most twice the optimal entanglement infidelity at the maximally mixed input. [[thm-qec-distinguishability-near-optimal-bound]]

[F8] At $p=0$, the null branch is the identity on code inputs and the decay branch has zero weight; $\mathcal R_4$ leaves the null branch unchanged. No normalized decay state is needed. [[pthm-qec-distinguishability-four-recovery-comparison]] [[alg-qec-distinguishability-r4]]

## Proof

**Given:** The model, parameters, fidelity convention and Axiom of Choice in the Statement.

**Goal:** Establish the identities, short-time comparisons and boundary cases.

1.1 For $p>0$, restrict the Kraus representation in [F3] to inputs $V_0XV_0^\dagger$. Its $K_1$ is a common scalar of squared modulus $e^{-\gamma t}=1-p$ on the code, so this term is $(1-p)V_0XV_0^\dagger$. Its $K_2,K_3$ take the code into the decay space, so the sum has no off-diagonal blocks between code and decay. Their adjoint products on the code sum to $pI$, as follows directly from the displayed Kraus operators; hence the decay branch has input-independent weight $p$. The decoder in [F1] acts on this block as $Y\mapsto V_1^\dagger YV_1$. By the unrotated branch statement in [F2], its normalized decoded map is $\mathcal D_\chi$. Since $V_1V_1^\dagger$ is the identity on the decay space, the unnormalized physical decay map is therefore $pV_1\mathcal D_\chi(X)V_1^\dagger$. In the ordered output basis $|0\rangle,|1\rangle,|2\rangle,|3\rangle$, $V_0,V_1$ are exactly the two coordinate inclusions of the flagged-channel lemma in [F4]; expressing the input code in its logical basis makes that lemma's whole-input-code convention identical to this restriction. Its hypotheses $0\leq p\leq1$ and $|\chi|\leq1$ follow from the definition of $p$ and [F2]. Thus its transpose-recovery conclusion applies. [given, F1, F2, F3, F4, algebra]

1.2 For fixed $\gamma>0$, cancel the common factor $t$ in the numerator and denominator of $\chi$. The cancelled denominator has nonzero constant term $\gamma(\gamma+i\Delta)$, so [F6] applies. The normalized numerator coefficients through degree two are $1$, $-\gamma/2+i\Delta/2$, and $(\gamma^2-i\gamma\Delta-\Delta^2)/6$, while the normalized denominator is $1-\gamma t/2+\gamma^2t^2/6+O(t^3)$. Quotient expansion therefore gives $\chi=1+i\Delta t/2+(-\Delta^2/6+i\gamma\Delta/12)t^2+O(t^3)$. Hence $r^2=1-\Delta^2t^2/12+O(t^3)$ and $r=1-\Delta^2t^2/24+O(t^3)$, using $r-1=(r^2-1)/(r+1)$. Thus $r^2-\operatorname{Re}\chi=\Delta^2t^2/12+O(t^3)$. If $\Delta\ne0$ this is positive for sufficiently small positive $t$; if $\Delta=0$, the formula for $\chi$ gives $\chi=r=1$. In both cases $r^2\leq r$ follows from $0<r\leq1$ in [F2]. [given, F2, F6, algebra]

2.1 By step 1.1, the restricted noise has the flagged coherence form in [F4]. Applying [F4] gives $1-F_{\rm tr}=p(1-r^2)/2$. Together with [F2] and $1-r^2=(1+r)(1-r)$, this proves the first identity. Substituting the weights in [F3] gives $1-F_{\rm opt}=w_3/2$ and $1-F_{\rm tr}=w_2w_3/(2p)$. [given, F2, F3, F4, step 1.1, algebra]

3.1 Since $p=\gamma t+O(t^2)$, steps 2.1 and 1.2 give $1-F_{\rm tr}=\gamma\Delta^2t^3/24+O(t^4)$ and $1-F_{\rm opt}=\gamma\Delta^2t^3/48+O(t^4)$. Together with [F5], these give the three coefficients. For $\Delta\ne0$, the optimal loss is positive for sufficiently small positive $t$, so the ratio in step 2.1 is defined and tends to $2$ as $r\to1$. This is saturation in the limiting ratio of the bound in [F7]. [given, F5, F6, F7, step 2.1, step 1.2, algebra]

4.1 If $p=0$, [F8] gives an identity null branch with no decay contribution, and [F3] gives zero decay weights. Thus $\mathcal R_4$ has fidelity one; the optimal fidelity is one by the boundary case of the optimal-decoder supplier in [F2]. For transpose recovery, apply the generic flagged-channel result in [F4] with zero decay weight and any auxiliary coherence parameter, for example zero: its recovered map is the identity, independently of that parameter. This assigns no conditional model coherence at $p=0$. If $p>0$ and $\Delta=0$, the formula for $\chi$ gives $r=\chi=1$, so step 2.1 gives zero optimal and transpose losses, while the unrotated branch is also the identity by [F2] and the definition of $\mathcal R_4$ in [F1]. Consequently the stated ratios are undefined in these zero-loss cases. [given, F1, F2, F3, F4, F8, step 2.1, algebra] ∎
