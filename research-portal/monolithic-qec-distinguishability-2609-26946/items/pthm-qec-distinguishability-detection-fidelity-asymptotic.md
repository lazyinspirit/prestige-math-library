---
id: pthm-qec-distinguishability-detection-fidelity-asymptotic
kind: physics-theorem
domain: physics
title: Detection-code short-time checking law
status: published
origin: session
deps:
  - def-qec-distinguishability-detection-code
  - post-qec-distinguishability-equal-rate-model
  - pthm-qec-distinguishability-detection-code-errors
  - def-qec-distinguishability-checking-time
  - def-qec-distinguishability-transpose-recovery
  - lem-qec-author-db1311c0cf0b-spin-two-downward-populations
  - lem-qec-author-db1311c0cf0b-two-step-cascade-channel
  - lem-qec-author-db1311c0cf0b-one-decay-transpose-bound
  - lem-qec-author-db1311c0cf0b-orthogonal-decay-sector-fidelity
  - lem-qec-prereq-finite-taylor-control
  - lem-qec-prereq-first-crossing-asymptotics
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
dependency_roles:
  def-qec-distinguishability-detection-code: formulation-prerequisite
  post-qec-distinguishability-equal-rate-model: physical-assumption
  pthm-qec-distinguishability-detection-code-errors: physical-result
  def-qec-distinguishability-checking-time: formulation-prerequisite
  def-qec-distinguishability-transpose-recovery: mathematical-premise
  lem-qec-author-db1311c0cf0b-spin-two-downward-populations: mathematical-premise
  lem-qec-author-db1311c0cf0b-two-step-cascade-channel: mathematical-premise
  lem-qec-author-db1311c0cf0b-one-decay-transpose-bound: mathematical-premise
  lem-qec-author-db1311c0cf0b-orthogonal-decay-sector-fidelity: mathematical-premise
  lem-qec-prereq-finite-taylor-control: mathematical-premise
  lem-qec-prereq-first-crossing-asymptotics: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-dependent-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 17, Fig. S5.2 caption
      statement: At zero degeneracy lift the caption states that the detection code
        has short-time transpose infidelity approximately gamma times t divided
        by two, and the corresponding high-target checking time approximately
        twice one minus the target divided by gamma. It identifies the
        Aydin–Barg and Æ values as numerical fits.
      hypotheses: The article's zero-lift benchmark; the plotted checking times use
        target fidelity 0.9999.
      reading_limits: Read the supplied extracted text at the caption. This citation
        attributes the article's statements; the derivation below uses the
        stated local suppliers, and no numerical fit was reproduced.
physical_scope: Conditional prediction of the finite equal-rate downward-jump
  benchmark with zero degeneracy lift; no laboratory observation is asserted.
dependency_level: 18
formulation_deps:
  - def-qec-distinguishability-detection-code
  - post-qec-distinguishability-equal-rate-model
  - pthm-qec-distinguishability-detection-code-errors
  - def-qec-distinguishability-checking-time
  - def-qec-distinguishability-transpose-recovery
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
argument_deps:
  - def-qec-distinguishability-detection-code
  - post-qec-distinguishability-equal-rate-model
  - pthm-qec-distinguishability-detection-code-errors
  - def-qec-distinguishability-checking-time
  - def-qec-distinguishability-transpose-recovery
  - lem-qec-author-db1311c0cf0b-spin-two-downward-populations
  - lem-qec-author-db1311c0cf0b-two-step-cascade-channel
  - lem-qec-author-db1311c0cf0b-one-decay-transpose-bound
  - lem-qec-author-db1311c0cf0b-orthogonal-decay-sector-fidelity
  - lem-qec-prereq-finite-taylor-control
  - lem-qec-prereq-first-crossing-asymptotics
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
---

## Statement

Assume the finite equal-rate downward-jump benchmark, including its emitter, bath, spectral and Markov hypotheses, with rate $\gamma>0$ and zero degeneracy lift. Use the spin-two detection encoding $V|0\rangle=(|2,-2\rangle+|2,2\rangle)/\sqrt2$, $V|1\rangle=|2,0\rangle$. At each time use the channel-specific transpose recovery and let $F_{\rm tr}(t)$ be the entanglement fidelity of the recovered logical channel at the maximally mixed logical input. Then, with $x=\gamma t$,

$$F_{\rm tr}(t)=\frac{1+(3+x)e^{-x}}4.$$

Consequently $1-F_{\rm tr}(t)=\gamma t/2+O(t^2)$ as $t\downarrow0$, for fixed $\gamma$. For $F_0\in(0,1]$, define the checking time as $\tau(F_0)=\inf\{t\ge0:F_{\rm tr}(t)<F_0\}$, with empty-set infimum $+\infty$. As $F_0\uparrow1$ through values below one, $\tau(F_0)\sim2(1-F_0)/\gamma$; the ratio of the two sides tends to one.

## Statement references

[[def-qec-distinguishability-detection-code]]

[[post-qec-distinguishability-equal-rate-model]]

[[def-qec-distinguishability-checking-time]]

[[def-qec-distinguishability-transpose-recovery]]

## Facts & Assumptions

[F1] The detection encoding is the displayed isometry. In the benchmark the restricted dynamics is the finite downward cascade with rate $\gamma$; the model retains the same jumps when specifying the lift, and here the lift is zero. [[def-qec-distinguishability-detection-code]] [[post-qec-distinguishability-equal-rate-model]] [[pthm-qec-distinguishability-detection-code-errors]]

[F2] In the cascade, the output sectors with zero, one and two decays are orthogonal. Their weights are $p_0=e^{-x}$, $p_1=xe^{-x}$ and $p_2=1-(1+x)e^{-x}$. The one-decay channel $C_t$ extends continuously to zero. [[lem-qec-author-db1311c0cf0b-two-step-cascade-channel]]

[F3] With $a=V|0\rangle$, $b=V|1\rangle$, the normalized first-jump matrices satisfy $B_{-1}a=|1,1\rangle/\sqrt2$, $B_{+1}a=|1,-1\rangle/\sqrt2$, $B_{-1}b=|1,-1\rangle/\sqrt6$, $B_{+1}b=|1,1\rangle/\sqrt6$, $B_0b=-\sqrt{2/3}|1,0\rangle$, and $B_0a=0$. [[lem-qec-author-db1311c0cf0b-spin-two-downward-populations]]

[F4] For a one-decay channel $C$ with $C(I_2)=2I_3/3$ and $C(Z)=\operatorname{diag}(1/3,-2/3,1/3)$, its transpose-recovered entanglement fidelity is $\frac38\sum_{j=0}^3\|C(Q_j)\|_{\rm HS}^2$, where $Q_0=I_2/\sqrt2$, $Q_1=Z/\sqrt2$, $Q_2=X/\sqrt2$, $Q_3=Y/\sqrt2$ and $X,Y,Z$ are the Pauli matrices. The squared Hilbert–Schmidt norm is $\operatorname{Tr}(A^\dagger A)$. [[lem-qec-author-db1311c0cf0b-one-decay-transpose-bound]]

[F5] For this cascade, transpose fidelity is $p_0+p_1F_e(T_tC_t)+p_2/4$, and is continuous with value one at zero. [[lem-qec-author-db1311c0cf0b-orthogonal-decay-sector-fidelity]] [[def-qec-distinguishability-transpose-recovery]]

[F6] The finite exponential expansion has a controlled remainder, and a continuous fidelity with $1-F(t)=at+O(t^2)$, $a>0$, has first strict-crossing time asymptotic to $(1-F_0)/a$ as $F_0\uparrow1$. [[lem-qec-prereq-finite-taylor-control]] [[lem-qec-prereq-first-crossing-asymptotics]]

[A1] Assume the Axiom of Choice, Countable Choice and Dependent Choice, together with the physical and spectral hypotheses in [F1]. [[math:def-axiom-of-choice]] [[math:def-countable-choice]] [[math:def-dependent-choice]]

## Proof

**Given:** The benchmark, encoding, recovery and choice assumptions in the statement and [A1].

**Goal:** Calculate the fidelity and its short-time checking-time asymptotic.

1.1 At zero lift, the Hamiltonian is scalar on each spin block. Thus the phases accumulated before and after a single jump are common to all magnetic components for a fixed jump time. They cancel in the channel, so the normalized one-decay channel is $C(X)=\sum_{\delta=-1}^1 B_\delta VXV^\dagger B_\delta^\dagger$, independently of $t>0$. In output order $m=-1,0,1$, [F3] gives $C(I_2)=2I_3/3$ and $C(Z)=\operatorname{diag}(1/3,-2/3,1/3)$. It also gives $C(|0\rangle\langle1|)=(|1,1\rangle\langle1,-1|+|1,-1\rangle\langle1,1|)/\sqrt{12}$, which is Hermitian. [F1, F2, F3]

2.1 The squared Hilbert–Schmidt norms of $C(Q_0),C(Q_1),C(Q_2),C(Q_3)$ are respectively $2/3,1/3,1/3,0$: the last vanishes because $C(|0\rangle\langle1|)=C(|1\rangle\langle0|)$. Their sum is $4/3$, so [F4] gives $F_e(T_tC_t)=1/2$ for $t>0$. Substitution in [F5] yields $F_{\rm tr}=e^{-x}+xe^{-x}/2+[1-(1+x)e^{-x}]/4=[1+(3+x)e^{-x}]/4$. At $t=0$ the same formula equals one, as does the fidelity by [F5]. [F4, F5, step 1.1]

3.1 Expanding $e^{-x}=1-x+O(x^2)$ gives $1-F_{\rm tr}(t)=x/2+O(x^2)=\gamma t/2+O(t^2)$ at fixed $\gamma$. The fidelity is continuous, starts at one, and has positive linear coefficient $a=\gamma/2$. Applying the strict first-crossing result to the checking-time definition gives $\tau(F_0)\sim(1-F_0)/a=2(1-F_0)/\gamma$ as $F_0\uparrow1$. [F5, F6, step 2.1] ∎

## Source notes

The article's caption also reports numerical fits for the Aydin–Barg and Æ codes. Those fits are attributed to the article and are not derived or independently reproduced here.
