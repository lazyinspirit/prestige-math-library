---
id: pthm-qec-distinguishability-four-petz-kraus
kind: physics-theorem
domain: physics
title: Explicit four-level transpose decoder
status: published
origin: session
deps:
  - def-qec-distinguishability-transpose-recovery
  - pthm-qec-distinguishability-four-kraus
  - pthm-qec-distinguishability-decayed-coherence
  - def-qec-prereq-support-spectral-calculus
  - thm-qec-prereq-transpose-support-completion
  - lem-qec-prereq-qubit-transpose-phase-rule
  - def-qec-prereq-finite-operator-conventions
  - alg-qec-distinguishability-r4
  - lem-qec-prereq-finite-taylor-control
  - math:def-principal-inverse-tangent
  - math:thm-principal-inverse-tangent-calculus
  - math:def-tangent-cotangent-secant-cosecant
  - math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - math:thm-complex-exponential-is-entire-with-derivative-itself
dependency_roles:
  def-qec-distinguishability-transpose-recovery: mathematical-premise
  pthm-qec-distinguishability-four-kraus: physical-result
  pthm-qec-distinguishability-decayed-coherence: physical-result
  def-qec-prereq-support-spectral-calculus: mathematical-premise
  thm-qec-prereq-transpose-support-completion: mathematical-premise
  lem-qec-prereq-qubit-transpose-phase-rule: mathematical-premise
  def-qec-prereq-finite-operator-conventions: mathematical-premise
  alg-qec-distinguishability-r4: operational-prerequisite
  lem-qec-prereq-finite-taylor-control: mathematical-premise
  math:def-principal-inverse-tangent: mathematical-premise
  math:thm-principal-inverse-tangent-calculus: mathematical-premise
  math:def-tangent-cotangent-secant-cosecant: mathematical-premise
  math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  math:thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 9, Eq. (S1.9) and following paragraph
      statement: The article gives the three transpose-recovery operators, the phase
        correction and subsequent dephasing, and the retained decay-branch
        coherence factor.
      hypotheses: The four-level channel and code considered in the article.
      reading_limits: The supplied extracted text at the cited passage was read for
        attribution. The citation is not used as proof of the result.
physical_scope: Conditional prediction of the postulated four-level decay model;
  no experimental observation is asserted.
dependency_level: 4
---

## Statement

Assume the four-level model and channel $\mathcal N_t$ of [[pthm-qec-distinguishability-four-kraus]], with real $\omega_0,\Delta$, rate $\gamma\geq0$, and time $t\geq0$. The orthonormal physical basis is $|0\rangle,\ldots,|3\rangle$; write $P=\Pi_{01}=|0\rangle\langle0|+|1\rangle\langle1|$ and $\Pi_{23}=|2\rangle\langle2|+|3\rangle\langle3|$. Put $p=1-e^{-\gamma t}$. Then $\mathcal N_t(P)=(1-p)P+p\Pi_{23}$.

For $p>0$ define $\chi=\gamma(e^{i\Delta t}-e^{-\gamma t})/[(\gamma+i\Delta)p]$, $r=|\chi|$, $z=\chi/r$, $Z=|0\rangle\langle0|-|1\rangle\langle1|$, and $D_+=\overline z|0\rangle\langle2|+|1\rangle\langle3|$. The number $\chi$ is nonzero and $0<r\leq1$. A Kraus representation of the support-normalized transpose recovery is, up to individual operator phases, $R_1=P$, $R_2=\sqrt{(1+r)/2}\,D_+$ and $R_3=\sqrt{(1-r)/2}\,ZD_+$. Thus the decay branch is mapped back with phase cancellation followed by $Z$ dephasing, meaning the mixture of the identity and conjugation by $Z$ with respective probabilities $(1+r)/2$ and $(1-r)/2$. Its normalized recovered coherence is multiplied by $r^2$; the null branch is unchanged. The overall code channel multiplies its $01$ coherence by $(1-p)+pr^2$.

For fixed $\gamma>0$ and real $\Delta$, as $t\downarrow0$ a continuous phase of $\chi$ satisfies $\arg\chi=\Delta t/2+O(t^2)$. When $p=0$ there is no conditional decay branch: the support-normalized transpose recovery is $Y\mapsto PYP$, and any completion on the orthogonal complement is immaterial after noise on the code.

## Facts & Assumptions

**Given:** The model, channel, code and parameters in the Statement.

**Goal:** Determine the support-normalized transpose operators and their action on the code.

[F1] The completed four-level channel has Kraus operators $K_1,K_2,K_3$ as specified in [[pthm-qec-distinguishability-four-kraus]], including its zero-rate and zero-time convention.

[F2] For $p>0$, after applying the syndrome recovery $\mathcal R_4$, the conditional recovered decay state in the code basis has diagonal entries unchanged and its $01$ entry multiplied by $\chi$ as displayed in the Statement. [[pthm-qec-distinguishability-decayed-coherence]]

[F3] For code projector $P$, transpose-recovery operators are $PK_j^\dagger\mathcal N_t(P)^{-1/2}$, where the inverse square root is taken on the support. [[def-qec-distinguishability-transpose-recovery]]

[F4] The inverse square root acts by reciprocal square roots on positive eigenspaces and vanishes on the kernel. [[def-qec-prereq-support-spectral-calculus]]

[F5] A transpose recovery can be completed to a channel without changing its action after noise on a code-supported input. [[thm-qec-prereq-transpose-support-completion]]

[F6] For a flagged qubit channel whose decay branch multiplies $01$ coherence by $\chi$, transpose recovery multiplies the conditional recovered coherence by $|\chi|^2$; a zero-weight branch has no conditional state. [[lem-qec-prereq-qubit-transpose-phase-rule]]

[F7] Bras, kets, adjoints, outer products and their matrix products use the finite orthonormal-basis conventions. [[def-qec-prereq-finite-operator-conventions]]

[F8] The syndrome recovery has decay operation $X\mapsto UXU^\dagger$, where $U=|0\rangle\langle2|+|1\rangle\langle3|$, $U^\dagger U=\Pi_{23}$ and $UU^\dagger=P$. Thus it identifies the decay basis with the code basis. [[alg-qec-distinguishability-r4]]

[F9] At fixed parameters, scalar exponential Taylor remainders are controlled, and products and quotients with nonzero constant denominator have controlled expansions. A common vanishing factor must be cancelled before using the quotient rule. [[lem-qec-prereq-finite-taylor-control]]

[F10] Principal arctangent is continuous, takes values in $(-\pi/2,\pi/2)$, and satisfies $\tan(\arctan v)=v$. For $|v|<1$ its series is $\arctan v=\sum_{n\geq0}(-1)^n v^{2n+1}/(2n+1)$; tangent is $\sin\theta/\cos\theta$ on its natural domain. [[math:def-principal-inverse-tangent]] [[math:thm-principal-inverse-tangent-calculus]] [[math:def-tangent-cotangent-secant-cosecant]]

[F11] The complex exponential is entire with derivative itself, so its restriction along $t\mapsto ct$ is continuous for fixed complex $c$. For real $\theta$, $e^{i\theta}=\cos\theta+i\sin\theta$ and $|e^{i\theta}|=1$. [[math:thm-complex-exponential-is-entire-with-derivative-itself]] [[math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]

## Proof

**Proof technique:** direct.

1.1 The operators in [F1] send the code either to itself or to the orthogonal span of $|2\rangle,|3\rangle$. Their action on $P$ gives $\mathcal N_t(P)=e^{-\gamma t}P+(1-e^{-\gamma t})\Pi_{23}$. For $p>0$ and a normalized code state $\rho=|\psi\rangle\langle\psi|$, put $B_\rho=p^{-1}\Pi_{23}\mathcal N_t(\rho)\Pi_{23}$. By [F8], the recovered state in [F2] is $UB_\rho U^\dagger$. Since $B_\rho$ is supported on the decay span, $B_\rho=U^\dagger(UB_\rho U^\dagger)U$ by [F7] and [F8]. Consequently the normalized physical decay block sends $|0\rangle\langle0|$ to $|2\rangle\langle2|$, $|1\rangle\langle1|$ to $|3\rangle\langle3|$, and $|0\rangle\langle1|$ to $\chi|2\rangle\langle3|$. For the last assertion, apply [F2] to $(|0\rangle\pm|1\rangle)/\sqrt2$ and $(|0\rangle\pm i|1\rangle)/\sqrt2$; subtracting the corresponding projectors isolates the real and imaginary off-diagonal matrix units, and complex linearity gives the stated action and its conjugate. Positivity of the resulting two-by-two output for an equal superposition gives $r\leq1$. Also $\chi\ne0$, since $|e^{i\Delta t}|=1>e^{-\gamma t}$ when $p>0$. [given, F1, F2, F7, F8]

1.2 Fix $\gamma>0$ and real $\Delta$. Cancel the common factor $t$ in the numerator and denominator of the displayed formula for $\chi$. The resulting denominator has constant term $\gamma(\gamma+i\Delta)\ne0$, so [F9] gives $\chi=1+i\Delta t/2+O(t^2)$. Thus $x=\operatorname{Re}\chi=1+O(t^2)>0$ for sufficiently small positive $t$, $y=\operatorname{Im}\chi=\Delta t/2+O(t^2)$, and $v=y/x=\Delta t/2+O(t^2)$. All remainders are at these fixed parameters. [given, F2, F9, algebra]

2.1 Set $q_\pm=(1\pm r)/2$ and let $V=|2\rangle\langle0|+|3\rangle\langle1|$. The code-restricted channel has the Kraus family $\sqrt{1-p}\,P$, $\sqrt{pq_+}\,V\operatorname{diag}(z,1)$ and $\sqrt{pq_-}\,V\operatorname{diag}(z,-1)$, where the diagonal operators act on the code. Indeed, their conjugation sum has the diagonal and off-diagonal actions found in step 1.1. By [F3] and [F4], its transpose operators are $P$, $\sqrt{q_+}D_+$ and $\sqrt{q_-}ZD_+$, up to individual phases. This gives the same transpose map as the original Kraus family because the defining sum is the adjoint of the same channel, evaluated between the same support and code projectors. [given, F3, F4, F7, step 1.1]

2.2 Define $\theta(t)=\arctan v(t)$ for those small times and set $\theta(0)=0$. The nonzero-denominator quotient defining $\chi$, hence $v$, is continuous at positive times by [F11], and step 1.2 gives its extension at zero. By [F10], $\theta$ is therefore continuous and $\tan\theta=v$. Its series gives $|\arctan v-v|\leq\sum_{n\geq1}|v|^{2n+1}=|v|^3/(1-|v|^2)$ for $|v|<1$, so $\theta=\Delta t/2+O(t^2)$. Moreover $\theta\to0$, and [F9] applied to $e^{i\theta}$ gives $\operatorname{Re}e^{i\theta}>0$ near zero. By [F10] and [F11], $\sin\theta=v\cos\theta$, $\cos\theta>0$ and $\cos^2\theta+\sin^2\theta=1$. Therefore $e^{i\theta}=(1+iv)/\sqrt{1+v^2}=\chi/|\chi|$ since $x>0$. Hence $\theta$ is a continuous phase of $\chi$ and proves the asserted argument asymptotic. [F9, F10, F11, step 1.2, algebra]

3.1 On the decay block the two operators in step 2.1 apply $D_+$ and then mix identity with $Z$ conjugation with weights $q_+,q_-$. The phase correction changes the coherence multiplier from $\chi$ to $r$, and that mixture multiplies it by $q_+-q_-=r$. Hence the conditional multiplier is $r^2$, in agreement with [F6]. Combining the orthogonal branch probabilities gives $(1-p)+pr^2$; the null branch is the identity. By [F5], completion does not affect these outputs. [given, F5, F6, F7, step 2.1]

4.1 If $p=0$, [F1] gives no decay Kraus operators and a scalar unitary on the code. The support of $\mathcal N_t(P)$ is then the code, and [F3]–[F5] give $Y\mapsto PYP$ on that support and an arbitrary immaterial completion. Together with the exact operators and coherence action in steps 2.1 and 3.1 and the phase calculation in step 2.2, this proves the statement. [given, F1, F3, F4, F5, step 1.1, step 2.1, step 3.1, step 2.2] ∎
