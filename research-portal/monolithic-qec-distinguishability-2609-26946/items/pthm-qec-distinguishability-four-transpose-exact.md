---
id: pthm-qec-distinguishability-four-transpose-exact
kind: physics-theorem
domain: physics
title: Exact four-level transpose fidelity
status: published
origin: session
deps:
  - post-qec-distinguishability-four-level-model
  - pthm-qec-distinguishability-four-kraus
  - pthm-qec-distinguishability-decayed-coherence
  - def-qec-distinguishability-transpose-recovery
  - def-qec-prereq-finite-operator-conventions
  - def-qec-prereq-restricted-logical-channel
  - lem-qec-prereq-qubit-coherence-fidelities
  - lem-qec-prereq-qubit-transpose-phase-rule
dependency_roles:
  post-qec-distinguishability-four-level-model: physical-assumption
  pthm-qec-distinguishability-four-kraus: physical-result
  pthm-qec-distinguishability-decayed-coherence: physical-result
  def-qec-distinguishability-transpose-recovery: mathematical-premise
  def-qec-prereq-finite-operator-conventions: mathematical-premise
  def-qec-prereq-restricted-logical-channel: mathematical-premise
  lem-qec-prereq-qubit-coherence-fidelities: mathematical-premise
  lem-qec-prereq-qubit-transpose-phase-rule: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 8, Eq. (S1.7) and the sentence immediately following it
      statement: The article gives the displayed hyperbolic-function expression for
        four-level transpose fidelity and states its equivalence to one minus
        p_decay times one minus the squared magnitude of chi_d, divided by two.
      hypotheses: The idealized four-level model and its two-dimensional code; the
        printed quotient requires a nonzero denominator.
      reading_limits: The supplied extracted article text at PDF page 8 was read for
        attribution. This reference is not used as proof of the result; the
        endpoint convention and argument below are locally supplied.
physical_scope: Conditional prediction of the postulated four-level decay model,
  not an experimental observation.
dependency_level: 4
---

## Statement

Assume the postulated four-level model with orthonormal basis $|0\rangle,|1\rangle,|2\rangle,|3\rangle$, code $\mathcal C=\operatorname{span}\{|0\rangle,|1\rangle\}$, decay rate $\gamma\geq0$, real splitting $\Delta$, and time $t\geq0$. Let $H_L=\mathbb C^2$ have ordered orthonormal basis $|0\rangle_L,|1\rangle_L$, and encode by the isometry $V:H_L\to\mathbb C^4$ with $V|j\rangle_L=|j\rangle$ for $j=0,1$. Write $\mathcal N_t$ for the model channel and $\mathcal T_t$ for any support-completed transpose recovery for the code projector $P=VV^\dagger$. The resulting decoded logical channel is $\mathcal E_t(X)=V^\dagger\mathcal T_t(\mathcal N_t(VXV^\dagger))V$. Let $F_{\rm tr}(t)$ be the entanglement fidelity of the resulting logical channel at the maximally mixed logical input $I/2$.

For $\gamma t>0$, set $p_{\rm decay}=1-e^{-\gamma t}$ and $\chi_d(t)=\gamma(e^{i\Delta t}-e^{-\gamma t})/[(\gamma+i\Delta)(1-e^{-\gamma t})]$. Then

$$F_{\rm tr}(t)=1-\frac{p_{\rm decay}}2(1-|\chi_d(t)|^2)=\frac{(\gamma^2+\Delta^2)\sinh(\gamma t)+\gamma^2[\cosh(\gamma t)-\cos(\Delta t)]}{(\gamma^2+\Delta^2)(e^{\gamma t}-1)}.$$

At $\gamma t=0$, the fidelity is $1$; the conditional decay coherence is not assigned at zero decay probability. The displayed quotient has the same limiting value $1$ as $\gamma t\to0$ along the model parameter domain.

## Statement references

[[post-qec-distinguishability-four-level-model]]

[[def-qec-distinguishability-transpose-recovery]]

[[def-qec-prereq-restricted-logical-channel]]

[[pthm-qec-distinguishability-decayed-coherence]]

[[lem-qec-prereq-qubit-coherence-fidelities]]

## Facts & Assumptions

[F1] In the postulated model the code and decay spans are orthogonal, and the evolution is the specified finite-dimensional channel with $\gamma\geq0$, real $\Delta$, and $t\geq0$. [[post-qec-distinguishability-four-level-model]]

[F2] On the code, the exact channel has a no-jump branch of weight $e^{-\gamma t}$ and a decay branch with diagonal weight $p=1-e^{-\gamma t}$ and off-diagonal coefficient $c=\gamma\int_0^t e^{-\gamma s}e^{i\Delta(t-s)}\,ds$. In particular $|c|\leq p$, and the branch maps into the decay span. [[pthm-qec-distinguishability-four-kraus]]

[F3] For $p>0$, identifying $|2\rangle,|3\rangle$ with the logical basis gives the normalized decay coherence $\chi_d=c/p$ as displayed in the statement; the normalized no-jump output is the input. [[pthm-qec-distinguishability-decayed-coherence]]

[F4] The support-completed transpose recovery uses the inverse square root of the channel output on the code projector on its support, and its completion does not affect outputs of encoded inputs. [[def-qec-distinguishability-transpose-recovery]]

[F5] A qubit coherence map $\mathcal D_\lambda$ preserves diagonal matrix entries and multiplies the $01$ entry by $\lambda$ and the $10$ entry by its conjugate. For $|\lambda|\leq1$ its entanglement fidelity at $I/2$ is $(1+\operatorname{Re}\lambda)/2$, and fidelity is affine under a weighted sum of channels. [[lem-qec-prereq-qubit-coherence-fidelities]]

[F6] For a channel with orthogonal flagged branches $(1-p)\operatorname{id}$ and $p\mathcal D_\chi$, its support-normalized transpose recovery produces the logical channel $(1-p)\operatorname{id}+p\mathcal D_{|\chi|^2}$, including zero-weight branches. [[lem-qec-prereq-qubit-transpose-phase-rule]]

[F7] Matrix entries, adjoints and basis identifications follow the finite orthonormal-basis conventions. [[def-qec-prereq-finite-operator-conventions]]

[F8] For an isometric encoding $V$ with code projector $P=VV^\dagger$ and a code-supported physical recovery $\mathcal T_t$, the decoder is $Y\mapsto V^\dagger\mathcal T_t(Y)V$, and composing it with $\mathcal N_t\circ\operatorname{Ad}_V$ gives the logical channel $\mathcal E_t$ in the statement. [[def-qec-prereq-restricted-logical-channel]]

## Proof

**Given:** The model, code, parameters and transpose-recovery procedure in the statement.

**Goal:** Compute the fidelity, prove the two formulas agree, and establish the zero-decay boundary.

1.1 Put $q=e^{-\gamma t}$ and $p=1-q$. By [F1] and [F2], the output restricted to encoded inputs has two orthogonal flags: the code span and the decay span. Identify the code span with $H_L$ by $V$ and the decay span by the isometry $W|j\rangle_L=|j+2\rangle$ for $j=0,1$. The no-jump branch is $q\operatorname{id}$; the decay branch preserves diagonal entries with coefficient $p$ and multiplies the $01$ entry by $c$. Thus, when $p>0$, the restricted channel is the flagged channel $q\operatorname{id}\oplus p\mathcal D_\chi$ with $\chi=c/p=\chi_d$. The bound in [F2] gives $|\chi|\leq1$. These equalities hold on all input matrices by their entries, not merely on a chosen state. [given, F1, F2, F3, F5, F7, F8]

2.1 Let $K_k$ be the model-channel Kraus matrices and put $B_k=K_kV$. The restricted noise $\mathcal N_t\circ\operatorname{Ad}_V$ has Kraus matrices $B_k$, and $A=\mathcal N_t(P)=\sum_k B_kB_k^\dagger$. By [F4] and [F8], its decoded support-normalized recovery has Kraus matrices $V^\dagger P K_k^\dagger A^{-1/2}=B_k^\dagger A^{-1/2}$, since $V^\dagger P=V^\dagger$. These are exactly the transpose-recovery matrices for the restricted channel with whole input code $H_L$. The completion has no effect on the restricted noise outputs by [F4]. Thus the physical recovery and decoding defining $\mathcal E_t$ agree, under the basis identifications of step 1.1, with the recovered flagged channel in [F6]. [given, F4, F6, F7, F8, step 1.1, algebra]

3.1 Applying the flagged transpose rule to step 1.1, using the decoded-recovery identification in step 2.1 and the support convention in [F4], gives $q\operatorname{id}+p\mathcal D_{|\chi_d|^2}$. The fidelity formula and affinity in [F5] therefore give $F_{\rm tr}=q+p(1+|\chi_d|^2)/2=1-p(1-|\chi_d|^2)/2$. This proves the first expression when $p>0$. [F4, F5, F6, F8, step 1.1, step 2.1, algebra]

4.1 For $p>0$, write $D=\gamma^2+\Delta^2>0$. Directly taking the modulus in [F3] gives $|\chi_d|^2=\gamma^2(1+q^2-2q\cos(\Delta t))/(Dp^2)$. Substitution into step 3.1 and multiplication of numerator and denominator by $e^{\gamma t}$ yield $F_{\rm tr}=[D\sinh(\gamma t)+\gamma^2(\cosh(\gamma t)-\cos(\Delta t))]/[D(e^{\gamma t}-1)]$, proving the printed quotient and its equivalence to the first expression. [F3, step 3.1, algebra]

5.1 If $\gamma t=0$, then $p=0$ and [F2] gives no decay branch; the no-jump branch is the identity on the encoded logical qubit. The zero-weight case of [F6] therefore gives fidelity $1$. For $p>0$, step 1.1 gives $0\leq|\chi_d|^2\leq1$, so step 3.1 implies $0\leq1-F_{\rm tr}\leq p/2$. As $\gamma t\to0$, $p\to0$, establishing the stated limit of both formulas without assigning a conditional state to the zero-weight branch. [given, F2, F6, step 1.1, step 3.1, step 4.1, algebra] ∎
