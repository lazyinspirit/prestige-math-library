---
id: pthm-qec-distinguishability-detection-code-errors
kind: physics-theorem
domain: physics
title: Detection-code errors retain partial logical information
status: draft
origin: session
deps:
  - def-qec-distinguishability-detection-code
  - pthm-qec-distinguishability-atomic-jumps
  - post-qec-distinguishability-equal-rate-model
  - pthm-qec-distinguishability-uniform-decay-rate
  - post-qec-distinguishability-atomic-lift
  - pthm-qec-distinguishability-minimal-code-errors
  - def-qec-distinguishability-checking-time
  - def-qec-distinguishability-transpose-recovery
  - def-qec-prereq-entanglement-fidelity
  - lem-qec-author-db1311c0cf0b-spin-two-downward-populations
  - lem-qec-author-db1311c0cf0b-two-step-cascade-channel
  - lem-qec-author-db1311c0cf0b-one-decay-transpose-bound
  - lem-qec-author-db1311c0cf0b-orthogonal-decay-sector-fidelity
  - lem-qec-author-db1311c0cf0b-strict-threshold-comparison
  - def-qec-prereq-ae-error-span-contract
  - math:thm-qc-knill-laflamme-necessity
  - math:thm-qc-finite-kraus-choi-stinespring-equivalence
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - math:thm-qc-kraus-choi-equivalence
  - def-qec-prereq-finite-operator-conventions
  - def-qec-prereq-restricted-logical-channel
formulation_deps:
  - def-qec-distinguishability-detection-code
  - pthm-qec-distinguishability-atomic-jumps
  - post-qec-distinguishability-equal-rate-model
  - pthm-qec-distinguishability-uniform-decay-rate
  - post-qec-distinguishability-atomic-lift
  - def-qec-distinguishability-checking-time
  - def-qec-distinguishability-transpose-recovery
  - def-qec-prereq-entanglement-fidelity
  - def-qec-prereq-ae-error-span-contract
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - def-qec-prereq-finite-operator-conventions
  - def-qec-prereq-restricted-logical-channel
argument_deps:
  - def-qec-distinguishability-detection-code
  - pthm-qec-distinguishability-atomic-jumps
  - post-qec-distinguishability-equal-rate-model
  - pthm-qec-distinguishability-uniform-decay-rate
  - post-qec-distinguishability-atomic-lift
  - pthm-qec-distinguishability-minimal-code-errors
  - def-qec-distinguishability-checking-time
  - def-qec-distinguishability-transpose-recovery
  - def-qec-prereq-entanglement-fidelity
  - lem-qec-author-db1311c0cf0b-spin-two-downward-populations
  - lem-qec-author-db1311c0cf0b-two-step-cascade-channel
  - lem-qec-author-db1311c0cf0b-one-decay-transpose-bound
  - lem-qec-author-db1311c0cf0b-orthogonal-decay-sector-fidelity
  - lem-qec-author-db1311c0cf0b-strict-threshold-comparison
  - def-qec-prereq-ae-error-span-contract
  - math:thm-qc-knill-laflamme-necessity
  - math:thm-qc-finite-kraus-choi-stinespring-equivalence
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - math:thm-qc-kraus-choi-equivalence
  - def-qec-prereq-finite-operator-conventions
  - def-qec-prereq-restricted-logical-channel
dependency_roles:
  def-qec-distinguishability-detection-code: formulation-prerequisite
  pthm-qec-distinguishability-atomic-jumps: physical-result
  post-qec-distinguishability-equal-rate-model: physical-assumption
  pthm-qec-distinguishability-uniform-decay-rate: physical-result
  post-qec-distinguishability-atomic-lift: physical-assumption
  pthm-qec-distinguishability-minimal-code-errors: physical-result
  def-qec-distinguishability-checking-time: formulation-prerequisite
  def-qec-distinguishability-transpose-recovery: mathematical-premise
  def-qec-prereq-entanglement-fidelity: mathematical-premise
  lem-qec-author-db1311c0cf0b-spin-two-downward-populations: mathematical-premise
  lem-qec-author-db1311c0cf0b-two-step-cascade-channel: mathematical-premise
  lem-qec-author-db1311c0cf0b-one-decay-transpose-bound: mathematical-premise
  lem-qec-author-db1311c0cf0b-orthogonal-decay-sector-fidelity: mathematical-premise
  lem-qec-author-db1311c0cf0b-strict-threshold-comparison: mathematical-premise
  def-qec-prereq-ae-error-span-contract: mathematical-premise
  math:thm-qc-knill-laflamme-necessity: mathematical-premise
  math:thm-qc-finite-kraus-choi-stinespring-equivalence: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-dependent-choice: mathematical-premise
  math:thm-qc-kraus-choi-equivalence: mathematical-premise
  def-qec-prereq-finite-operator-conventions: mathematical-premise
  def-qec-prereq-restricted-logical-channel: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p.6 detection-code bullet and Fig.4; PDF p.4 code-comparison
        paragraph and Fig.3
      statement: The article specifies the detection encoding, says single rank-one
        transitions leave the code manifold and are detected but not corrected,
        and attributes its longer checking time to partial overlap of the two
        logical error spaces. Fig.3 uses target 0.9999.
      hypotheses: Article-origin attribution within its zero-temperature,
        fixed-effective-jump, equal-rate comparison; single-J encodings and
        channel-specific transpose recovery.
      reading_limits: Read the detection-code bullet and Fig.4 in supplied PDF page
        image 6, the comparison paragraph and Fig.3 in page image 4, and the
        corresponding extracted-text passages. No figure digitization, numerical
        curve reproduction or experimental verification is claimed. The citation
        attributes the original claims; the local deductions use the declared
        suppliers.
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
        — fixed-jump model input
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p.3 Eq.(10), equal-rate benchmark, Eq.(11) and following paragraph;
        PDF p.4 Fig.2 caption
      statement: The article retains the unperturbed jumps after adding its
        phenomenological lift, holds the benchmark coefficients fixed and
        specifies the channel generated by H_S+H_Delta and L_delta.
      hypotheses: Adopted effective physical model, with gamma and L_delta fixed as
        Delta varies. This does not infer jump amplitudes from shifted
        microscopic frequencies.
      reading_limits: Read Eq.(10), the benchmark paragraph, Eq.(11) and the following
        paragraph in supplied PDF page image 3, and the Fig.2 caption in page
        image 4, together with the corresponding extracted-text passages.
        Adopted the fixed-jump prescription as a physical model choice. The
        accompanying amplitude-correction estimate is neither established nor
        used here.
physical_scope: Conditional deduction in the finite fixed-effective-jump,
  equal-rate, zero-temperature benchmark, restricted to a single J=2 input code
  and compared with the J=1 minimal code at the same gamma, lift, target and
  transpose recovery; no microscopic amplitude error estimate or numerical plot
  reproduction.
dependency_level: 17
---

## Statement

Adopt the article's finite zero-temperature, equal-rate benchmark with fixed effective jump operators of Eq. (10) while adding the lift of Eq. (11); keep the same $\gamma>0$ as $\Delta$ varies. Retain the complete physical and choice hypotheses of the unlifted downward-jump supplier. Use initial states only in the single-$J=2$ detection code $a=(|2,-2\rangle+|2,2\rangle)/\sqrt2$, $b=|2,0\rangle$.

Every single downward transition leaves the code manifold and is detectable by its $J$ value, but the code does not satisfy the pair-product correction conditions for these transitions. The two logical one-decay output spaces overlap only partially: the first spans $|1,\pm1\rangle$, while the second also has a nonzero $|1,0\rangle$ component. A detected decay therefore retains some logical information in the emitter. With channel-specific transpose recovery, writing $x=\gamma t$, its finite-time fidelity satisfies
$$F_D(t)\ge\frac{1+3e^{-x}}4+\frac{x e^{-x}}8.$$
Compared with the minimal code under the same fixed-jump channel parameters, lift, target and transpose recovery, its checking time is strictly longer for every target $1/4<F_0<1$, including the article's $F_0=0.9999$. At target one both infima are zero; for $0<F_0\le1/4$ both are infinite. No numerical figure reproduction is needed for this analytic comparison.

## Facts & Assumptions

[F1] The detection code lies in the single $J=2$ manifold, with $a=(|2,-2\rangle+|2,2\rangle)/\sqrt{2}$ and $b=|2,0\rangle$, giving its specified isometry. [[def-qec-distinguishability-detection-code]]

[F2] Use the finite downward jump model and its complete bath, preparation, weak-Markov, tensor, regularity, spectral and choice hypotheses; at zero temperature its modeled jumps lower J by one. [[pthm-qec-distinguishability-atomic-jumps]]

[F3] Use the effective coefficients $f(J)=\sqrt{(2J+1)/(2J-1)}$, $\eta_J=J(J+1)$ and fixed $\gamma>0$. [[post-qec-distinguishability-equal-rate-model]] Under these choices the scalar total-decay-operator result gives $\sum_{\delta=-1}^{1}L_\delta^\dagger L_\delta=\gamma P_{\rm exc}$, where $P_{\rm exc}$ projects onto the retained $J\ge1$ blocks; hence every normalized excited state has total instantaneous downward rate $\gamma$. [[pthm-qec-distinguishability-uniform-decay-rate]]

[F4] The prescribed diagonal lift has eigenvalue Delta Jm on |J,m>. [[post-qec-distinguishability-atomic-lift]]

[F5] In the same fixed-effective-jump benchmark the $J=1$ minimal code has transpose fidelity $(1+3\exp(-\gamma t))/4$ at every lift. [[pthm-qec-distinguishability-minimal-code-errors]]

[F6] For a target $F_0\in(0,1]$, checking time is the infimum of the times when the channel-specific transpose entanglement fidelity is strictly below that target. [[def-qec-distinguishability-checking-time]]

[F7] Use channel-specific transpose recovery with the support inverse square root; off-support completion does not affect code noise outputs. [[def-qec-distinguishability-transpose-recovery]]

[F8] Entanglement fidelity is evaluated on the maximally mixed logical input via its maximally entangled purification. [[def-qec-prereq-entanglement-fidelity]]

[F9] The local spin-two calculation gives the exact normalized one-jump actions and the distinct diagonal logical-basis output populations. [[lem-qec-author-db1311c0cf0b-spin-two-downward-populations]]

[F10] The finite cascade decomposes the restricted noise into orthogonal sectors $p_0W_tXW_t^\dagger\oplus p_1C_t(X)\oplus p_2\operatorname{Tr}(X)|g\rangle\langle g|$, where $x=\gamma t$, $p_0=e^{-x}$, $p_1=xe^{-x}$ and $p_2=1-(1+x)e^{-x}$. Here $W_t$ is an isometry, $g=|0,0\rangle$, and for $t>0$ the channel $C_t$ satisfies $C_t(I_2)=2I_3/3$ and $C_t(Z)=\operatorname{diag}(1/3,-2/3,1/3)$, with $Z=\operatorname{diag}(1,-1)$ and output order $m=-1,0,1$. [[lem-qec-author-db1311c0cf0b-two-step-cascade-channel]]

[F11] The one-decay channel has channel-specific transpose fidelity at least 3/8. [[lem-qec-author-db1311c0cf0b-one-decay-transpose-bound]]

[F12] The full detection fidelity has a uniform positive-time margin: $F_D(t)\ge (1+3\exp(-x))/4+x\exp(-x)/8$, $x=\gamma t$, and is continuous. [[lem-qec-author-db1311c0cf0b-orthogonal-decay-sector-fidelity]]

[F13] The strict margin proves a strictly longer first checking time for every common target in (1/4,1), with the stated endpoint conventions. [[lem-qec-author-db1311c0cf0b-strict-threshold-comparison]]

[F14] Detection means PEP is scalar on the code; pair-product correction requires every PE dagger FP to be scalar, for the specified order-one error span. [[def-qec-prereq-ae-error-span-contract]]

[F15] Exact correction of a finite Kraus channel on an isometric code requires all compressed Kraus pair products to be scalar multiples of its code projector. [[math:thm-qc-knill-laflamme-necessity]]

[F16] A finite-dimensional channel has a finite Kraus family, and finite Kraus sums with normalized adjoint-product sum are channels. [[math:thm-qc-finite-kraus-choi-stinespring-equivalence]]

[F17] Assume full AC and retain the Countable Choice and Dependent Choice hypotheses of the physical model and its suppliers. [[math:def-axiom-of-choice]]

[F18] Carry Countable Choice for the regulated-bath and integration interfaces. [[math:def-countable-choice]]

[F19] Carry Dependent Choice of the atomic-jump supplier. [[math:def-dependent-choice]]

[F20] Every completely positive map between finite matrix spaces has a finite Kraus representation, including trace-decreasing maps. [[math:thm-qc-kraus-choi-equivalence]]

[F21] Use finite coordinate columns, compatible rectangular matrix products, bras, outer products and conjugate-transpose adjoints in the specified orthonormal bases. [[def-qec-prereq-finite-operator-conventions]]

[F22] For the encoding isometry $V$, the code projector is $P=VV^\dagger$ and the restricted noise is $\mathcal N\circ\operatorname{Ad}_V$, where $\operatorname{Ad}_V(X)=VXV^\dagger$. Exact correction means that a decoder composed with this restricted channel is the identity logical channel; a code-supported physical recovery gives such a decoder. [[def-qec-prereq-restricted-logical-channel]]

## Proof

**Given:** The detection and minimal encodings under the same fixed-effective-jump equal-rate benchmark and lift, with channel-specific transpose recovery.

**Goal:** Establish detected but uncorrectable single decays, partial retained information and the justified checking-time comparison.

1.1 A downward jump from $J=2$ lands in $J=1$, orthogonal to every code vector, so $P L_\delta P=0$ and a $J$ measurement flags that transition. The normalized $J=2$-to-$J=1$ matrices are the $B_\delta$ of [F9], multiplied by $\sqrt\gamma$ under [F2]–[F3]. Their actions give error spaces $\operatorname{span}\{|1,-1\rangle,|1,1\rangle\}$ from $a$ and the full $\operatorname{span}\{|1,-1\rangle,|1,0\rangle,|1,1\rangle\}$ from $b$. In particular the logical restriction of $B_0^\dagger B_0$ is $\operatorname{diag}(0,2/3)$, which is not scalar. Thus the single-error detection condition holds while the pair-product correction condition fails. The two diagonal one-decay output populations differ, so they retain logical-basis information rather than replacing both inputs by the same state. [F1, F2, F3, F9, F14, F21, F22, algebra]

1.2 The source-stated fixed-jump model uses $H_S+H_\Delta$ while retaining the same $L_\delta$; this is the physical modeling input explicitly stated after Eq. (11), not a consequence of the lift postulate alone. The scalar loss identity in [F3] restricts to $\gamma I$ on both $V_2$ and $V_1$ and is unchanged by this Hamiltonian-only lift. On $J\le2$, these matrices and the detection isometry are exactly those in [F10]. No higher $J$ can be reached from this single-$J$ input by the diagonal Hamiltonian or downward jumps. The orthogonal-sector calculation [F10]–[F12] therefore gives $F_D(t)\ge(1+3e^{-\gamma t})/4+\gamma t e^{-\gamma t}/8$, for every real $\Delta$ within the stipulated effective model. This argument derives neither the microscopic accuracy of retaining jumps nor the article's accompanying relative-amplitude estimate. [given, F1, F2, F3, F4, F10, F11, F12, F17, F18, F19, F22, algebra]

2.1 Fix $t>0$ and write $A=C_t(|0\rangle\langle0|)$ and $B=C_t(|1\rangle\langle1|)$. Since the two input projectors are $(I_2+Z)/2$ and $(I_2-Z)/2$, [F10] gives $A=\operatorname{diag}(1/2,0,1/2)$ and $B=\operatorname{diag}(1/6,2/3,1/6)$. Thus the conditional one-decay probability of magnetic label zero is zero for $a$ and $2/3$ for $b$, and $\operatorname{Tr}(AB)=1/6$. By [F20], $C_t$ has a finite Kraus representation; since it is a channel, [F16] permits choosing a finite family $K_r:\mathbb C^2\to V_1$ representing it with $\sum_rK_r^\dagger K_r=I_2$. Put $u_r=K_r|0\rangle$ and $v_r=K_r|1\rangle$. Then $A=\sum_r u_ru_r^\dagger$ and $B=\sum_s v_sv_s^\dagger$. Expanding these finite sums gives $\operatorname{Tr}(AB)=\sum_{r,s}\operatorname{Tr}(u_ru_r^\dagger v_sv_s^\dagger)=\sum_{r,s}|u_r^\dagger v_s|^2=1/6$, since the trace of $u(u^\dagger v)v^\dagger$ is $(u^\dagger v)(v^\dagger u)$. Hence some $\langle0|K_r^\dagger K_s|1\rangle=u_r^\dagger v_s$ is nonzero, so that pair product is not scalar. This uses the stated channel outputs, without subtracting any asserted component from a time integral. [F10, F16, F20, F21, step 1.2, algebra, choose]

3.1 Include each $K_r$ in the $V_1$ output block by its isometric inclusion $\iota_1$. The finite family $\sqrt{p_0}W_t$, $\sqrt{p_1}\iota_1K_r$, $\sqrt{p_2}|g\rangle\langle0|$, $\sqrt{p_2}|g\rangle\langle1|$ represents the full logical-input restricted channel in [F10]. The sector weights are nonnegative and sum to one; the family's adjoint-product sum is consequently $(p_0+p_1+p_2)I_2=I_2$, using $W_t^\dagger W_t=I_2$ and $\sum_rK_r^\dagger K_r=I_2$. Its one-decay pair products are $p_1K_r^\dagger K_s$, because $\iota_1^\dagger\iota_1=I_{V_1}$. Since $p_1=\gamma t e^{-\gamma t}>0$, step 2.1 supplies a pair with a nonzero off-diagonal logical entry. Applying [F15] to this finite restricted channel with the identity isometry on $\mathbb C^2$ rules out exact recovery. Exact correction of the original physical code would give a decoder for this same restricted channel, so it too is impossible at every finite $t>0$. [F1, F10, F15, F16, F21, F22, step 1.2, step 2.1, algebra]

4.1 The first term of the bound in step 1.2 is precisely the minimal-code fidelity in [F5]. For every finite positive time the extra term is positive. The continuous-fidelity strict-crossing lemma [F13] therefore applies to the same threshold convention as [F6], and proves strictly longer checking time when $1/4<F_0<1$, including $0.9999$. The same lemma gives equality of the two zero infima at target one and the two infinite values for $0<F_0\le1/4$. This comparison is an analytic consequence of the fixed-jump benchmark, not a claim to have reproduced the plotted numerical curves. [F5, F6, F7, F8, F12, F13, step 1.2, algebra] ∎

## Source notes

The original claim is attributed to the detection-code bullet on PDF p.6 and the comparison discussion and Fig.3 on p.4. The fixed-jump premise is explicit on PDF p.3 after Eq.(11); the Fig.2 caption on p.4 also identifies the channel generated by the lifted Hamiltonian and the same jumps. These are physical model specifications. The local five-lemma chain proves a uniform checking-time comparison under that specification and supplies a finite-time analytic bound. It does not derive a microscopic lift-independent spectral amplitude, verify a small-lift relative-error estimate, reproduce a numerical figure, or assert an observation. The comparison is restricted to the displayed single-J encodings and common effective rate. The checking-time comparison uses the defined target domain $F_0\in(0,1]$: target one has both infima zero, and $0<F_0\le1/4$ has both infinite. This qualification records the threshold convention rather than reporting an original-article defect; the article compares the high target 0.9999.
