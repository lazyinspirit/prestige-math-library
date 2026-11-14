---
id: pthm-qec-distinguishability-four-transpose-plateau
kind: physics-theorem
domain: physics
title: Long-time four-level transpose plateau
status: published
origin: session
deps:
  - post-qec-distinguishability-four-level-model
  - def-qec-distinguishability-transpose-recovery
  - def-qec-prereq-entanglement-fidelity
  - pthm-qec-distinguishability-four-kraus
  - pthm-qec-distinguishability-four-transpose-exact
  - pthm-qec-distinguishability-decayed-coherence
  - alg-qec-distinguishability-r4
  - def-qec-prereq-finite-operator-conventions
  - lem-qec-prereq-qubit-coherence-fidelities
  - lem-qec-prereq-qubit-transpose-phase-rule
  - math:thm-exponential-limits-and-range
  - math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
dependency_roles:
  post-qec-distinguishability-four-level-model: physical-assumption
  def-qec-distinguishability-transpose-recovery: mathematical-premise
  def-qec-prereq-entanglement-fidelity: mathematical-premise
  pthm-qec-distinguishability-four-kraus: physical-result
  pthm-qec-distinguishability-four-transpose-exact: physical-result
  pthm-qec-distinguishability-decayed-coherence: physical-result
  alg-qec-distinguishability-r4: operational-prerequisite
  def-qec-prereq-finite-operator-conventions: mathematical-premise
  lem-qec-prereq-qubit-coherence-fidelities: mathematical-premise
  lem-qec-prereq-qubit-transpose-phase-rule: mathematical-premise
  math:thm-exponential-limits-and-range: mathematical-premise
  math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 8, Eq. (S1.8) and the following sentence
      statement: The article gives the long-time transpose fidelity as one half of one
        plus the ratio of squared decay rate to squared decay rate plus squared
        splitting, and describes its degenerate and strongly split limits.
      hypotheses: The article's idealized four-level model and transpose-recovery
        calculation; the displayed ratio is defined when the squared parameters
        do not both vanish.
      reading_limits: The supplied article text at PDF p. 8 was read for attribution.
        The reference is not used as proof; the positive-rate condition and
        zero-rate boundary are stated explicitly below.
physical_scope: Conditional prediction of the postulated idealized four-level
  model; no experimental observation is asserted.
dependency_level: 5
---

## Statement

Assume the postulated four-level model with code $\mathcal C=\operatorname{span}\{|0\rangle,|1\rangle\}$, decay rate $\gamma\geq0$ and real energy splitting $\Delta$. Encode a logical qubit in the code, apply the model channel for time $t\geq0$, apply its support-completed transpose recovery, and decode. Let $F_{\rm tr}(t)$ be the entanglement fidelity of the resulting logical channel at the maximally mixed logical input $I/2$.

If $\gamma>0$, then

$$\lim_{t\to\infty}F_{\rm tr}(t)=\frac12\left(1+\frac{\gamma^2}{\gamma^2+\Delta^2}\right).$$

At $\Delta=0$ the recovered logical channel is the identity for every $t\geq0$, so recovery is perfect. For fixed $\gamma>0$, the plateau tends to $1/2$ as $|\Delta|/\gamma\to\infty$. In that limit the recovered decay branch approaches complete dephasing in the logical basis: it retains the diagonal entries and removes both off-diagonal entries. This is the model's operational meaning here of fully distinguished decay paths, rather than a claim of a measured environment state.

If $\gamma=0$, there is no decay and the recovered logical channel is the identity for all $t$ and all $\Delta$; in particular its long-time fidelity is $1$. The positive-rate plateau formula is not applied at $\gamma=0$.

## Facts & Assumptions

[F1] The four-level postulate specifies the code, nonnegative decay rate, real splitting and model channel. [[post-qec-distinguishability-four-level-model]]

[F2] Transpose recovery uses the inverse square root on the support of the channel output on the code projector; its completion has no effect on encoded inputs. Entanglement fidelity at $I/2$ is the overlap of a maximally entangled purification with its output under the logical channel. [[def-qec-distinguishability-transpose-recovery]] [[def-qec-prereq-entanglement-fidelity]]

[F3] For $\gamma t>0$, put $q=e^{-\gamma t}$, $p=1-q$ and $\chi=\gamma(e^{i\Delta t}-q)/[(\gamma+i\Delta)p]$. The exact fidelity is $F_{\rm tr}=1-p(1-|\chi|^2)/2$. At $\gamma t=0$ it is $1$. [[pthm-qec-distinguishability-four-transpose-exact]]

[F4] The noise restricted to the code has orthogonal no-decay and decay branches of weights $q$ and $p$. The no-decay branch is the identity under the stated basis identification. For a complex multiplier $\chi$, write $\mathcal D_\chi$ for the entrywise linear map that preserves diagonal entries and multiplies the $01$ and $10$ entries by $\chi$ and $\overline\chi$. For $|\chi|\leq1$ this map is a qubit channel. The identification of the normalized decay branch with this map and the required bound $|\chi|\leq1$ are established below using the Kraus representation and the conditional-state input [F8]. [[pthm-qec-distinguishability-four-kraus]] [[lem-qec-prereq-qubit-coherence-fidelities]]

[F5] For such orthogonal flagged branches the transpose-recovered logical channel is $q\operatorname{id}+p\mathcal D_{|\chi|^2}$ when $p>0$; the zero-weight case gives the identity when $p=0$. [[lem-qec-prereq-qubit-transpose-phase-rule]]

[F6] The real exponential tends to zero at negative infinity, and $|e^{iy}|=1$ for real $y$. [[math:thm-exponential-limits-and-range]] [[math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]

[F7] Matrices, adjoints, outer products and basis identifications use the finite orthonormal-basis conventions. [[def-qec-prereq-finite-operator-conventions]]

[F8] The syndrome recovery uses the code projector $P$ and the partial isometry $U=|0\rangle\langle2|+|1\rangle\langle3|$, with branch operations $Y\mapsto PYP$ and $Y\mapsto UYU^\dagger$. For every normalized code vector $a|0\rangle+b|1\rangle$ and $p>0$, its normalized recovered decay state has diagonal entries $|a|^2,|b|^2$ and $01$ entry $a\overline b\chi$, with $\chi$ exactly as in [F3]; the outcome probability $p$ is independent of the vector. Its normalized null output is the input, with probability $q$. These are conditional-state formulas for this syndrome recovery, used only to identify the noise blocks before applying the transpose rule. [[alg-qec-distinguishability-r4]] [[pthm-qec-distinguishability-decayed-coherence]]

## Proof

**Given:** The model, code, recovery and parameters in the statement.

**Goal:** Establish the plateau, its two limiting interpretations and the zero-rate boundary.

1.1 Write $\mathcal N=\mathcal N_t$, put $q=e^{-\gamma t}$ and $p=1-q$ for all model parameters, and use the logical basis $|0\rangle_L,|1\rangle_L$ of $\mathbb C^2$. Define $V|j\rangle_L=|j\rangle$ and $W|j\rangle_L=|j+2\rangle$ for $j=0,1$. Then $P=VV^\dagger$ and $U=VW^\dagger$ in [F8]. The Kraus operators cited in [F4] map encoded inputs into separate code and decay blocks: $K_1V$ is a scalar of squared modulus $q$ times $V$, and $K_2V,K_3V$ have range in the decay span. Thus there are no cross-block terms. For $p>0$, define the complex-linear map $B(X)=p^{-1}W^\dagger\mathcal N(VXV^\dagger)W$. By [F8] and $U=VW^\dagger$, $B(|\psi\rangle\langle\psi|)$ has exactly the entries prescribed by $\mathcal D_\chi$ for every unit logical vector $\psi$. This identifies the map on all matrices: put $E_{jk}=|j\rangle_L\langle k|_L$, $G_+=|+\rangle\langle+|$ and $G_i=|+i\rangle\langle+i|$, where $|+\rangle=(|0\rangle_L+|1\rangle_L)/\sqrt2$ and $|+i\rangle=(|0\rangle_L+i|1\rangle_L)/\sqrt2$. The four pure projectors $E_{00},E_{11},G_+,G_i$ span the complex matrix space, since $S=2G_+-E_{00}-E_{11}=E_{01}+E_{10}$ and $T=2G_i-E_{00}-E_{11}=-iE_{01}+iE_{10}$ give $E_{01}=(S+iT)/2$ and $E_{10}=(S-iT)/2$. Complex linearity therefore gives $B=\mathcal D_\chi$ and $\mathcal N(VXV^\dagger)=qVXV^\dagger+pW\mathcal D_\chi(X)W^\dagger$ for every logical matrix $X$. When $p=0$, the endpoint Kraus operators give $\mathcal N(VXV^\dagger)=VXV^\dagger$ without defining $\chi$. [given, F3, F4, F7, F8, algebra]

1.2 Suppose $\gamma>0$. By [F6], $q=e^{-\gamma t}\to0$ and hence $p\to1$ as $t\to\infty$. Since $|e^{i\Delta t}|=1$, the triangle inequality gives $1-q\leq|e^{i\Delta t}-q|\leq1+q$. The bounds converge to $1$, so directly from the definition in [F3], $|\chi|^2\to\gamma^2/(\gamma^2+\Delta^2)$. Substitution in [F3] proves the displayed plateau. [given, F3, F6, algebra]

2.1 For $p>0$, the Kraus representation makes $B(G_+)$ positive semidefinite: for every vector $w$, $w^\dagger B(G_+)w=p^{-1}\sum_j|w^\dagger W^\dagger K_jV|+\rangle|^2\geq0$. By step 1.1 its matrix is $\tfrac12\begin{pmatrix}1&\chi\\\overline\chi&1\end{pmatrix}$. If $r=|\chi|>0$, evaluate its quadratic form at $w=(\chi/r,-1)^T$: it equals $1-r$, so $r\leq1$. If $\chi=0$, the same bound is immediate. Also $q,p$ are the nonnegative outcome probabilities in [F8], with $q+p=1$. Thus the flagged transpose rule's parameter hypotheses hold. [given, F4, F7, F8, step 1.1, algebra]

3.1 To identify the physical transpose recovery with the rule in [F5], put $B_j=K_jV$ and $A=\mathcal N(P)=\sum_jB_jB_j^\dagger$. By [F2], the decoded support-normalized recovery has Kraus matrices $V^\dagger P K_j^\dagger A^{-1/2}=B_j^\dagger A^{-1/2}$; these are precisely the transpose matrices for the restricted noise with whole logical input as code. The support completion has no effect after noise on an encoded input. Under the orthogonal identifications $V,W$, steps 1.1 and 2.1 therefore allow [F5] to give the recovered channel $q\operatorname{id}+p\mathcal D_{|\chi|^2}$ for $p>0$. For $p=0$ it gives the identity, with no conditional decay state. [given, F2, F4, F5, F7, step 1.1, step 2.1, algebra]

4.1 If $\Delta=0$ and $\gamma t>0$, the expression in [F3] gives $\chi=1$. The entrywise definition in [F4] makes $\mathcal D_1$ the identity, so [F5] gives the identity recovered channel. At $\gamma t=0$, [F5] gives the same result. Thus every logical input is recovered, and its entanglement fidelity is $1$ by [F2]. [given, F2, F3, F4, F5, step 3.1, algebra]

4.2 For fixed $\gamma>0$, the ratio $\gamma^2/(\gamma^2+\Delta^2)=1/(1+(\Delta/\gamma)^2)$ tends to zero as $|\Delta|/\gamma\to\infty$. Step 1.2 therefore gives plateau $1/2$. By [F4] and [F5], the recovered decay branch is $\mathcal D_{|\chi|^2}$. Taking first $t\to\infty$ and then $|\Delta|/\gamma\to\infty$ sends its off-diagonal multiplier to zero while leaving its diagonal entries fixed. The limiting channel is therefore complete dephasing. Its two basis inputs remain orthogonal while their coherence is lost, giving the stated operational interpretation. [given, F4, F5, step 1.2, step 3.1, algebra]

5.1 If $\gamma=0$, then $p=0$ for every time. The no-decay branch is the identity and the decay branch has zero weight by [F4]; [F5] gives the identity recovered channel. Its fidelity is consequently $1$ by [F2]. This establishes the separate zero-rate boundary. [given, F2, F4, F5, step 3.1, algebra] ∎
