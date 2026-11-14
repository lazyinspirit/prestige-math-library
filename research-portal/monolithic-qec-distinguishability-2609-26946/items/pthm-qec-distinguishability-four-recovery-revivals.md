---
id: pthm-qec-distinguishability-four-recovery-revivals
kind: physics-theorem
domain: physics
title: Transient later-time advantage of the unrotated decoder
status: draft
origin: session
deps:
  - post-qec-distinguishability-four-level-model
  - alg-qec-distinguishability-r4
  - pthm-qec-distinguishability-decayed-coherence
  - pthm-qec-distinguishability-four-recovery-comparison
  - pthm-qec-distinguishability-four-petz-kraus
  - lem-qec-prereq-qubit-coherence-fidelities
  - lem-qec-prereq-qubit-transpose-phase-rule
  - math:def-axiom-of-choice
  - math:thm-complex-exponential-is-entire-with-derivative-itself
  - math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - math:thm-exponential-limits-and-range
  - math:thm-intermediate-value
  - math:thm-exponential-is-strictly-increasing
  - math:thm-quarter-turn-values-and-shift-formulas
  - math:thm-sine-cosine-zero-sets-and-fundamental-period
  - math:thm-sine-cosine-signs-monotonicity-and-ranges
  - math:cor-trigonometric-parity-and-pythagorean-identity
  - def-qec-prereq-entanglement-fidelity
  - math:def-continuity-real
  - math:thm-algebra-of-continuous-functions
dependency_roles:
  post-qec-distinguishability-four-level-model: physical-assumption
  alg-qec-distinguishability-r4: formulation-prerequisite
  pthm-qec-distinguishability-decayed-coherence: physical-result
  pthm-qec-distinguishability-four-recovery-comparison: physical-result
  pthm-qec-distinguishability-four-petz-kraus: physical-result
  lem-qec-prereq-qubit-coherence-fidelities: mathematical-premise
  lem-qec-prereq-qubit-transpose-phase-rule: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  math:thm-exponential-limits-and-range: mathematical-premise
  math:thm-intermediate-value: mathematical-premise
  math:thm-exponential-is-strictly-increasing: mathematical-premise
  math:thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  math:thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  math:thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  math:cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-qec-prereq-entanglement-fidelity: mathematical-premise
  math:def-continuity-real: mathematical-premise
  math:thm-algebra-of-continuous-functions: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 9, recovery-comparison paragraph immediately before Table S1.1
      statement: At later times, when the phase of the decay coherence passes through
        a multiple of two pi, its real part exceeds its squared modulus and the
        unrotated recovery transiently outperforms transpose recovery.
      hypotheses: The article's idealized four-level model and the specified
        recoveries; the decay coherence is used where the decay branch has
        positive probability.
      reading_limits: The supplied extracted text at the cited passage was read for
        article attribution. The conditional argument below uses the stated
        model consequences and mathematical suppliers, not this attribution as
        proof. No experimental observation is asserted.
physical_scope: Conditional predictions for the postulated four-level decay
  model and its specified decoders; no laboratory observation is asserted.
dependency_level: 6
---

## Statement

Assume the Axiom of Choice and the postulated four-level model with real detuning $\Delta$, decay rate $\gamma\geq0$, finite time $t\geq0$, and the unrotated syndrome recovery $\mathcal R_4$. Here $\mathcal R_4$ leaves the code branch unchanged and maps the two decay-basis states back to their corresponding code-basis states. Compare entanglement fidelities at the maximally mixed logical-qubit input; the transpose recovery is the support-normalized transpose decoder of the model channel.

When $\gamma t>0$, put $p=1-e^{-\gamma t}$ and $\chi_d(t)=\gamma(e^{i\Delta t}-e^{-\gamma t})/[(\gamma+i\Delta)p]$. A positive-phase crossing means a time $t_0>0$ at which $\chi_d(t_0)$ is positive real, equivalently its argument is a multiple of $2\pi$. If $\gamma>0$ and $\Delta\ne0$, then at every such crossing $0<\chi_d(t_0)<1$, so $\operatorname{Re}\chi_d(t_0)>|\chi_d(t_0)|^2$. The entanglement fidelity of $\mathcal R_4$ is consequently strictly greater than that of transpose recovery throughout some open time interval containing $t_0$. There are such crossings at arbitrarily large times.

A decoder that corrects the decay-branch phase has fidelity at least as large as $\mathcal R_4$ at every positive-decay time; the comparison with transpose recovery therefore does not assert that $\mathcal R_4$ outperforms phase-corrected recovery. If $\Delta=0$ and $\gamma t>0$, $\chi_d=1$ and the two compared fidelities tie. If $\gamma t=0$, the decay branch has zero weight, no normalized decay coherence is assigned, and both recoveries act as the identity on the code.

## Statement references

[[post-qec-distinguishability-four-level-model]]

[[alg-qec-distinguishability-r4]]

[[pthm-qec-distinguishability-decayed-coherence]]

[[pthm-qec-distinguishability-four-recovery-comparison]]

[[pthm-qec-distinguishability-four-petz-kraus]]

[[lem-qec-prereq-qubit-transpose-phase-rule]]

[[math:def-axiom-of-choice]]

[[def-qec-prereq-entanglement-fidelity]]

## Facts & Assumptions

[F1] The postulated model has a two-dimensional code, an orthogonal two-dimensional decay space, real $\Delta$, rate $\gamma\geq0$, and the stated recovery $\mathcal R_4$. For $\gamma t>0$, the decay probability is $p=1-e^{-\gamma t}$ and the conditional recovered decay branch multiplies logical $01$ coherence by the displayed $\chi_d$. [[post-qec-distinguishability-four-level-model]] [[alg-qec-distinguishability-r4]] [[pthm-qec-distinguishability-decayed-coherence]]

[F2] Under the Axiom of Choice, the unrotated recovered channel has entanglement fidelity $F_4=1-p(1-\operatorname{Re}\chi_d)/2$ when $p>0$. [[pthm-qec-distinguishability-four-recovery-comparison]] [[math:def-axiom-of-choice]]

[F3] For $p>0$, the model's transpose-recovered channel has coherence multiplier $(1-p)+p|\chi_d|^2$, and $0<|\chi_d|\leq1$. At $p=0$ the transpose recovery acts as the identity after noise on the code. [[pthm-qec-distinguishability-four-petz-kraus]]

[F4] A qubit coherence channel with multiplier $\lambda$ has entanglement fidelity $(1+\operatorname{Re}\lambda)/2$. The phase-corrected flagged decoder has overall multiplier $(1-p)+p|\chi_d|$. [[lem-qec-prereq-qubit-coherence-fidelities]] [[lem-qec-prereq-qubit-transpose-phase-rule]]

[F5] The complex exponential is entire with complex derivative equal to itself, and $e^{ix}=\cos x+i\sin x$ and $|e^{ix}|=1$ for real $x$. The real exponential is positive and tends to zero at negative infinity. [[math:thm-complex-exponential-is-entire-with-derivative-itself]] [[math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] [[math:thm-exponential-limits-and-range]]

[F6] A continuous real function on a closed interval takes every value between its endpoint values. [[math:thm-intermediate-value]]

[F7] The real exponential is strictly increasing on $\mathbb R$. In particular, if $\gamma>0$ and $t\geq a$, then $e^{-\gamma t}\leq e^{-\gamma a}$. [[math:thm-exponential-is-strictly-increasing]]

[F8] For real $x$, $\sin(x+\pi)=-\sin x$ and $\cos(x+\pi)=-\cos x$; moreover $\sin(\pi/2)=1$, $\cos(\pi/2)=0$, $\sin\pi=0$ and $\cos\pi=-1$. The shifts at $x=0$ consequently give $\sin0=0$ and $\cos0=1$. Both sine and cosine have period $2\pi$. Also $\sin(-x)=-\sin x$ and $\cos(-x)=\cos x$. [[math:thm-quarter-turn-values-and-shift-formulas]] [[math:thm-sine-cosine-zero-sets-and-fundamental-period]] [[math:cor-trigonometric-parity-and-pythagorean-identity]]

[F9] Sine is increasing on $[-\pi/2,\pi/2]$, and cosine is decreasing on $[0,\pi]$. With the endpoint values in [F8], this gives $\sin\theta\geq0$ and $\cos\theta\geq0$ for $0\leq\theta\leq\pi/2$. [[math:thm-sine-cosine-signs-monotonicity-and-ranges]]

[F10] For $A\subseteq\mathbb R$, continuity of $f:A\to\mathbb R$ at $s\in A$ means that for every $\varepsilon>0$ some $\delta>0$ makes $|f(t)-f(s)|<\varepsilon$ whenever $t\in A$ and $|t-s|<\delta$. Constants, finite sums, scalar multiples and products of continuous real functions are continuous. Their quotient is continuous on the subset where its denominator is nonzero. [[math:def-continuity-real]] [[math:thm-algebra-of-continuous-functions]]

[F11] For a logical-qubit channel $\mathcal E$, its entanglement fidelity at $I/2$ is $F_e(\mathcal E)=\langle\Phi|({\rm id}\otimes\mathcal E)(|\Phi\rangle\langle\Phi|)|\Phi\rangle$, where $|\Phi\rangle=(|00\rangle+|11\rangle)/\sqrt2$ in the ordered reference and logical bases. [[def-qec-prereq-entanglement-fidelity]]

[A1] Assume the Axiom of Choice as required by the fidelity-comparison supplier. [[math:def-axiom-of-choice]]

## Proof

**Given:** The model, recoveries and parameters in the Statement, together with [A1].

**Goal:** Establish the strict comparison at positive-phase crossings, its persistence and occurrence at arbitrarily large times, and the stated boundary and phase-corrected comparisons.

1.1 Using the entanglement-fidelity convention [F11], for $p>0$, [F2]–[F4] give $F_4-F_{\rm tr}=p(\operatorname{Re}\chi_d-|\chi_d|^2)/2$. At a positive-phase crossing put $r=\chi_d(t_0)>0$. By [F3], $r\leq1$. If $r=1$, the displayed formula for $\chi_d$ gives $e^{i\Delta t_0}=1+i(\Delta/\gamma)(1-e^{-\gamma t_0})$. The left side has modulus one by [F5], while the right side has modulus strictly greater than one because $\gamma>0$, $t_0>0$ and $\Delta\ne0$. Thus $0<r<1$ and $F_4-F_{\rm tr}=pr(1-r)/2>0$. [given, A1, F2, F3, F4, F5, F11, algebra]

1.2 It remains to show that positive-phase crossings occur arbitrarily late. First suppose $\Delta>0$ and set $a_n=2\pi n/\Delta$, $b_n=(2\pi n+\pi/2)/\Delta$ for positive integers $n$, and $q(t)=e^{-\gamma t}$. Since $a_n\to\infty$, [F5] gives $q(a_n)\to0$, so every sufficiently large $n$ satisfies $q(a_n)<\min(1,\Delta/\gamma)$. For $t\in[a_n,b_n]$, set $\theta=\Delta t-2\pi n\in[0,\pi/2]$. By [F8], $\cos(\Delta t)=\cos\theta$ and $\sin(\Delta t)=\sin\theta$. By [F9], both are nonnegative; by [F5], $\cos^2\theta+\sin^2\theta=|e^{i\theta}|^2=1$. Hence $(\cos\theta+\sin\theta)^2=1+2\cos\theta\sin\theta\geq1$, so $\cos\theta+\sin\theta\geq1$. It follows that $\gamma\cos\theta+\Delta\sin\theta\geq\min(\gamma,\Delta)(\cos\theta+\sin\theta)\geq\min(\gamma,\Delta)$. Also $q(t)\leq q(a_n)$ by [F7]. [given, F5, F7, F8, F9, algebra]

1.3 We supply the continuity inputs explicitly. Fix a complex constant $c$ and real $s$, and put $z_*=cs$. Differentiability in [F5] gives $\eta>0$ such that $|e^{z_*+h}-e^{z_*}|\leq M|h|$ for $|h|<\eta$, where $M=|e^{z_*}|+1$: for $h\ne0$ the difference quotient is within $1$ of $e^{z_*}$, and for $h=0$ the inequality is immediate. Given $\varepsilon>0$, take $\delta=\min\{\eta,\varepsilon/M\}/(|c|+1)$. If $|t-s|<\delta$, substituting $h=c(t-s)$ gives $|e^{ct}-e^{cs}|<\varepsilon$. For $w=a+ib$, $a^2,b^2\leq a^2+b^2=|w|^2$, so $|\operatorname{Re}w|,|\operatorname{Im}w|\leq|w|$. Apply these inequalities to $w=e^{ct}-e^{cs}$. Taking $c=i\Delta$ and $c=-\gamma$, the real functions $C(t)=\cos(\Delta t)$, $S(t)=\sin(\Delta t)$ and $q(t)=e^{-\gamma t}$ are continuous by the Cartesian formula in [F5] and the definition in [F10]. Restricting their domain to any interval preserves the same estimates. [given, F5, F10, algebra]

2.1 Write $W(t)=(\gamma-i\Delta)(e^{i\Delta t}-q(t))$, so $\chi_d(t)=\gamma W(t)/[(\gamma^2+\Delta^2)p(t)]$. The prefactor of $W$ is positive on $[a_n,b_n]$. By [F5] and [F8], $\operatorname{Im}W(a_n)=-\Delta(1-q(a_n))<0$ and $\operatorname{Im}W(b_n)=\gamma+\Delta q(b_n)>0$. Throughout this interval, step 1.2 gives $\operatorname{Re}W(t)=\gamma(\cos\theta-q(t))+\Delta\sin\theta\geq\min(\gamma,\Delta)-\gamma q(a_n)>0$. The real function $\operatorname{Im}W(t)=\gamma S(t)-\Delta(C(t)-q(t))$ is continuous by step 1.3 and [F10], so [F6] gives an interior zero, at which $\chi_d$ is positive real. The endpoint signs show the phase passes from below to above a multiple of $2\pi$ within this right-half-plane interval. Every sufficiently large $n$ gives such a crossing, and $a_n\to\infty$. For $\Delta<0$, [F5] and [F8] give $e^{-ix}=\overline{e^{ix}}$ for real $x$, so the displayed coherence is the complex conjugate of the one for $|\Delta|$; the same construction applies with the phase direction reversed. [given, F5, F6, F8, F10, step 1.2, step 1.3, algebra]

2.2 For $\gamma>0$ and $t>0$, [F7] gives $q(t)<1$, so $p(t)=1-q(t)>0$ and $D(t)=(\gamma^2+\Delta^2)p(t)>0$. Rationalizing the displayed formula for $\chi_d$ gives its real and imaginary parts as $u(t)=\gamma[\gamma(C(t)-q(t))+\Delta S(t)]/D(t)$ and $v(t)=\gamma[\gamma S(t)-\Delta(C(t)-q(t))]/D(t)$. Step 1.3 and [F10] show that $p,D,u,v$ are continuous on $(0,\infty)$: each numerator and denominator is a finite sum of scalar multiples and products of the continuous real functions $C,S,q$ and constants, and each denominator is nonzero on this domain. Since $|\chi_d|^2=u^2+v^2$, the fidelity difference is the continuous real function $G(t)=p(t)(u(t)-u(t)^2-v(t)^2)/2$, again by [F10]. At a crossing $t_0$, step 1.1 gives $G(t_0)>0$. Apply the definition in [F10] with $\varepsilon=G(t_0)/2$, and choose a positive radius smaller than both its $\delta$ and $t_0$. On the resulting open interval about $t_0$ one has $G(t)>G(t_0)/2>0$. [given, F5, F7, F10, step 1.1, step 1.3, algebra]

3.1 By [F4], the phase-corrected fidelity is $1-p(1-|\chi_d|)/2$. Since $\operatorname{Re}\chi_d\leq|\chi_d|$, it is at least $F_4$. If $\Delta=0$ and $p>0$, direct substitution gives $\chi_d=1$, so [F2] and [F3] give equal fidelity one. If $\gamma t=0$, [F1] gives zero decay weight and an identity null branch, while [F3] gives identity action for transpose recovery; no normalized decay state is needed. These establish all assertions. [given, F1, F2, F3, F4, algebra] ∎
