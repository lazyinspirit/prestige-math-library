---
id: pthm-qec-distinguishability-four-optimal-decoder
kind: physics-theorem
domain: physics
title: Optimal phase-corrected four-level recovery
status: published
origin: session
deps:
  - post-qec-distinguishability-four-level-model
  - pthm-qec-distinguishability-four-kraus
  - pthm-qec-distinguishability-decayed-coherence
  - pthm-qec-distinguishability-four-petz-kraus
  - pthm-qec-distinguishability-four-kraus-weights
  - prop-qec-distinguishability-qubit-recovery-inequality
  - lem-qec-prereq-qubit-coherence-fidelities
  - lem-qec-prereq-orthogonal-flag-decoding
  - def-qec-prereq-finite-operator-conventions
  - def-qec-prereq-entanglement-fidelity
  - lem-qec-prereq-finite-taylor-control
  - math:def-qc-quantum-channel
dependency_roles:
  post-qec-distinguishability-four-level-model: physical-assumption
  pthm-qec-distinguishability-four-kraus: physical-result
  pthm-qec-distinguishability-decayed-coherence: physical-result
  pthm-qec-distinguishability-four-petz-kraus: physical-result
  pthm-qec-distinguishability-four-kraus-weights: physical-result
  prop-qec-distinguishability-qubit-recovery-inequality: mathematical-premise
  lem-qec-prereq-qubit-coherence-fidelities: mathematical-premise
  lem-qec-prereq-orthogonal-flag-decoding: mathematical-premise
  def-qec-prereq-finite-operator-conventions: mathematical-premise
  def-qec-prereq-entanglement-fidelity: mathematical-premise
  lem-qec-prereq-finite-taylor-control: mathematical-premise
  math:def-qc-quantum-channel: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 9, paragraph following Eq. (S1.9)
      statement: The phase-corrected decoder retains the modulus of the conditional
        decay coherence and is optimal for entanglement fidelity, with the
        stated exact expression and cubic short-time loss.
      hypotheses: The article's idealized four-level model and logical-qubit
        entanglement fidelity.
      reading_limits: The supplied extracted text at the cited passage was read for
        attribution; the citation is not used as proof of the claim.
physical_scope: Conditional prediction of the postulated four-level model, not
  an experimental observation.
dependency_level: 5
---

## Statement

Assume the postulated four-level model, with real $\omega_0,\Delta$, rate $\gamma\geq0$, and finite time $t\geq0$. Its code is the span of the orthonormal vectors $|0\rangle,|1\rangle$; the orthogonal decay space is the span of $|2\rangle,|3\rangle$. Put $p=1-e^{-\gamma t}$. For $p>0$ define

$$\chi=\frac{\gamma(e^{i\Delta t}-e^{-\gamma t})}{(\gamma+i\Delta)p},\qquad r=|\chi|,\qquad z=\chi/r.$$

Then $0<r\leq1$. Projecting onto the code and decay spaces, leaving the code branch unchanged and applying $D_+=\overline z|0\rangle\langle2|+|1\rangle\langle3|$ to the decay branch gives a decoder whose conditional decay coherence multiplier is $r$. Here a coherence multiplier is the factor applied to the $01$ matrix entry in the decoded logical basis. Among all quantum-channel decoders from the four-level output to the logical qubit, this decoder maximizes entanglement fidelity at the maximally mixed logical input, and

$$F_{\rm opt}=1-\frac{p}{2}(1-r).$$

For fixed $\gamma>0$ and $\Delta$, as $t\downarrow0$, $1-F_{\rm opt}=\gamma\Delta^2t^3/48+O(t^4)$, where $O(t^4)$ denotes a quantity bounded in magnitude by a constant times $t^4$ for sufficiently small positive $t$. If $p=0$, the decay branch has zero probability, no conditional $\chi$ or $D_+$ is needed, and the optimal fidelity is $1$; the same short-time formula holds identically when $\gamma=0$.

## Statement references

[[post-qec-distinguishability-four-level-model]]

[[pthm-qec-distinguishability-four-kraus]]

[[pthm-qec-distinguishability-decayed-coherence]]

[[pthm-qec-distinguishability-four-petz-kraus]]

[[pthm-qec-distinguishability-four-kraus-weights]]

[[lem-qec-prereq-qubit-coherence-fidelities]]

[[lem-qec-prereq-orthogonal-flag-decoding]]

[[def-qec-prereq-finite-operator-conventions]]

[[def-qec-prereq-entanglement-fidelity]]

[[lem-qec-prereq-finite-taylor-control]]

[[math:def-qc-quantum-channel]]

## Facts & Assumptions

[F1] The model postulates a finite-dimensional channel with code and decay spaces as stated, rate $\gamma\geq0$, and real $\omega_0,\Delta$. [[post-qec-distinguishability-four-level-model]]

[F2] On code inputs, the channel has a null branch of fixed weight $1-p$ supported on the code and a decay branch of fixed weight $p$ supported on the orthogonal decay space. For $p>0$, identifying the latter with the logical basis gives the coherence channel $\mathcal D_\chi$: diagonal entries are unchanged and the $01$ entry is multiplied by $\chi$. The null branch is the identity after this identification. [[pthm-qec-distinguishability-four-kraus]] [[pthm-qec-distinguishability-decayed-coherence]]

[F3] For $p>0$, $\chi\ne0$, $r\leq1$, and the displayed $D_+$ cancels the phase of the decay coherence. At $p=0$ the null branch alone is present. [[pthm-qec-distinguishability-four-petz-kraus]]

[F4] For a qubit channel $\mathcal R$, unitary $U$, and $Z=\operatorname{diag}(1,-1)$, the maximally mixed-input entanglement fidelities satisfy $F_e(\mathcal R\circ\operatorname{Ad}_U)+F_e(\mathcal R\circ\operatorname{Ad}_{ZU})\leq1$. Here $\operatorname{Ad}_U(X)=UXU^\dagger$. [[prop-qec-distinguishability-qubit-recovery-inequality]]

[F5] The coherence channel $\mathcal D_\lambda$ has $F_e=(1+\operatorname{Re}\lambda)/2$ for $|\lambda|\leq1$, and its composition and fixed-weight branch averages act as stated by the coherence-channel interface. [[lem-qec-prereq-qubit-coherence-fidelities]]

[F6] For fixed input-independent weights on orthogonal output blocks, the maximum decoder fidelity equals the weighted sum of the separate branch maxima, and a project-then-decode channel attains it. [[lem-qec-prereq-orthogonal-flag-decoding]]

[F7] For fixed $\gamma>0,\Delta$, the fraction $(1-r)/2$ is $\Delta^2t^2/48+O(t^3)$ as $t\downarrow0$. [[pthm-qec-distinguishability-four-kraus-weights]]

[F8] Bras, kets, outer products, conjugate-transpose adjoints and rectangular matrix products use the finite ordered-orthonormal-basis conventions. [[def-qec-prereq-finite-operator-conventions]]

[F9] For a qubit channel $\mathcal E$, entanglement fidelity at $I/2$ is $F_e(\mathcal E)=\langle\Phi_2|({\rm id}\otimes\mathcal E)(|\Phi_2\rangle\langle\Phi_2|)|\Phi_2\rangle$, where $|\Phi_2\rangle=(|00\rangle+|11\rangle)/\sqrt2$. This overlap is linear in the channel and belongs to $[0,1]$ for channels. [[def-qec-prereq-entanglement-fidelity]]

[F10] At fixed scalar parameters, the exponential series has a controlled Taylor remainder, and multiplication of scalar expansions has the controlled remainder obtained by truncating their polynomial product. [[lem-qec-prereq-finite-taylor-control]]

[F11] For finite-dimensional complex inner-product spaces $H,K$, a quantum channel is a complex-linear, completely positive, trace-preserving map $\Phi:\mathcal L(H)\to\mathcal L(K)$. Trace preservation is required on every input operator. [[math:def-qc-quantum-channel]]

## Proof

**Given:** The model and parameters in the Statement; for the positive-decay case use the displayed definitions of $p,\chi,r,z$.

**Goal:** Establish the phase-corrected decoder's fidelity, its maximum over all decoders, and the short-time and zero-decay cases.

1.1 Suppose $p>0$. Put $Z=\operatorname{diag}(1,-1)$ and $U=\operatorname{diag}(1,\overline z)$. Entrywise, the conditional decay channel in [F2] is $\mathcal D_\chi=q_+\operatorname{Ad}_U+q_-\operatorname{Ad}_{ZU}$, where $q_\pm=(1\pm r)/2$. Indeed, the two conjugations preserve diagonal entries and multiply the $01$ entry by $z$ and $-z$, respectively. These weights are nonnegative and sum to one by [F3]. [given, F2, F3, F8, algebra]

2.1 For any channel $\mathcal R$ decoding the decay block after its identification with the logical qubit, set $a=F_e(\mathcal R\circ\operatorname{Ad}_U)$ and $b=F_e(\mathcal R\circ\operatorname{Ad}_{ZU})$. Both are nonnegative, and [F4] gives $a+b\leq1$. Linearity of the fidelity overlap gives $F_e(\mathcal R\circ\mathcal D_\chi)=q_+a+q_-b\leq q_+$, since $q_+\geq q_-$. The phase correction $D_+$ realizes $\operatorname{Ad}_{U^\dagger}$ after block identification, so it changes the multiplier $\chi$ to $r$ and achieves $F_e(\mathcal D_r)=(1+r)/2=q_+$ by [F5]. [F3, F4, F5, F8, F9, F11, step 1.1, algebra]

3.1 The null block has maximum fidelity one, attained by the identity. The weights in [F2] are independent of the input, so [F6] applies to all four-level-to-logical channel decoders, including those that do not initially measure the blocks. Its maximum is $(1-p)+p(1+r)/2=1-p(1-r)/2$, attained by projection followed by the identity on the null block and $D_+$ on the decay block. This also establishes the stated conditional coherence multiplier. [F2, F3, F5, F6, F9, F11, step 2.1, algebra]

4.1 For fixed $\gamma>0$, apply [F10] to the scalar matrix $A=(-\gamma)$ with $n=1$ to obtain $p=\gamma t+O(t^2)$ as $t\downarrow0$. Multiplying this by the expansion in [F7] using the remainder control in [F10] gives $1-F_{\rm opt}=\gamma\Delta^2t^3/48+O(t^4)$. If $p=0$, [F2] and [F3] give only the identity null branch; decoding it attains fidelity one, which is maximal for a channel fidelity. For $\gamma=0$ this holds at every finite time, giving the stated zero coefficient. [given, F2, F3, F7, F9, F10, step 3.1, algebra] ∎
