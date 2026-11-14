---
id: pthm-qec-distinguishability-leakage-timescale
kind: physics-theorem
domain: physics
title: Gradual which-path leakage and inverse splitting timescale
status: published
origin: session
deps:
  - post-qec-distinguishability-four-level-model
  - alg-qec-distinguishability-r4
  - pthm-qec-distinguishability-decayed-coherence
  - pthm-qec-distinguishability-r4-cubic
  - pthm-qec-distinguishability-four-check-scaling
  - lem-qec-prereq-finite-taylor-control
  - def-qec-distinguishability-transpose-recovery
  - def-qec-prereq-entanglement-fidelity
  - def-qec-prereq-restricted-logical-channel
  - math:thm-complex-exponential-is-entire-with-derivative-itself
  - math:thm-complex-exponential-addition-and-real-extension
  - math:lem-continuous-functions-riemann-integrable
  - math:lem-riemann-integral-linearity
  - math:thm-ftc-second-part
dependency_roles:
  post-qec-distinguishability-four-level-model: physical-assumption
  alg-qec-distinguishability-r4: formulation-prerequisite
  pthm-qec-distinguishability-decayed-coherence: physical-result
  pthm-qec-distinguishability-r4-cubic: physical-result
  pthm-qec-distinguishability-four-check-scaling: physical-result
  lem-qec-prereq-finite-taylor-control: mathematical-premise
  def-qec-distinguishability-transpose-recovery: formulation-prerequisite
  def-qec-prereq-entanglement-fidelity: mathematical-premise
  def-qec-prereq-restricted-logical-channel: mathematical-premise
  math:thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  math:thm-complex-exponential-addition-and-real-extension: mathematical-premise
  math:lem-continuous-functions-riemann-integrable: mathematical-premise
  math:lem-riemann-integral-linearity: mathematical-premise
  math:thm-ftc-second-part: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 1, final paragraph of Introduction
      statement: The Introduction describes gradual which-path leakage on an
        inverse-splitting scale, increasing recoverable-fidelity loss with the
        shift, and protection by sufficiently fast correction. This is
        attribution only.
      hypotheses: The article discusses initially correctable error processes with a
        small energy shift; the conditional calculation below specializes to its
        idealized four-level model and specified recoveries.
      reading_limits: The supplied extracted article text at the cited passage was
        read for attribution. This citation is not used as a proof premise; no
        experimental observation or independent source validation is claimed.
physical_scope: Conditional prediction of the idealized four-level
  spontaneous-decay model and its specified recoveries; no laboratory
  measurement is asserted.
dependency_level: 8
---

## Statement

Assume the four-level model [[post-qec-distinguishability-four-level-model]], with decay rate $\gamma\geq0$, real splitting $\Delta$, code basis $|0\rangle,|1\rangle$, and the syndrome recovery $\mathcal R_4$ of [[alg-qec-distinguishability-r4]]. For a normalized input $|\psi\rangle=a|0\rangle+b|1\rangle$, write $F_\psi(t)$ for the decoded state fidelity averaged over recovery outcomes: each outcome contributes its probability times the overlap of its normalized decoded output with the input, and an outcome of probability zero contributes zero.

When $\gamma t>0$, let $\chi_d(t)$ be the multiplier of the input off-diagonal entry $ab^*$ in the normalized decoded decay output. With $u=|\Delta|t$, it obeys $|1-\chi_d(t)|\leq u e^u$. Thus the relative phase accumulated over a checking interval is uniformly small when $|\Delta|t\ll1$; for nonzero splitting, $1/|\Delta|$ is the associated phase scale. This is a statement about the model's conditional coherence, not a claim that a fixed amount of information has leaked at that time.

At fixed parameters, the loss under $\mathcal R_4$ satisfies $1-F_\psi(t)=|a|^2|b|^2\gamma\Delta^2t^3/3+O(t^4)$ as $t\downarrow0$. The leading coefficient grows with $|\Delta|$ at fixed positive $\gamma$ and fixed input with $ab\ne0$; this does not assert global monotonicity at arbitrary time. In particular the fidelity tends to one as the interval tends to zero. If $\gamma=0$ or $\Delta=0$, this recovery restores every code density operator exactly at every finite time.

For the model's support-completed transpose recovery, let $F_{\rm tr}(t)$ denote recovered entanglement fidelity at the maximally mixed logical input, and define $\tau(F_0)=\inf\{t\geq0:F_{\rm tr}(t)<F_0\}$, taking the infimum of the empty set as $+\infty$. For fixed $\gamma\Delta^2>0$, $\tau(F_0)\sim[24(1-F_0)/(\gamma\Delta^2)]^{1/3}$ as $F_0\uparrow1$; the ratio tends to one. If $\gamma=0$ or $\Delta=0$, this checking time is infinite for $F_0\in(0,1]$. This first-crossing scale is distinct from the inverse-splitting phase scale.

## Statement references

[[def-qec-distinguishability-transpose-recovery]]

[[def-qec-prereq-entanglement-fidelity]]

[[def-qec-prereq-restricted-logical-channel]]

## Facts & Assumptions

[F1] The postulated model has the stated code, real splitting and nonnegative decay rate; it evolves by the specified finite GKSL channel. [[post-qec-distinguishability-four-level-model]]

[F2] The specified syndrome recovery has a null branch and a decay branch, the latter mapping the two decay basis states back to their corresponding code basis states. [[alg-qec-distinguishability-r4]]

[F3] For $\gamma t>0$, the decoded decay coherence multiplier is $\chi_d=\gamma(e^{i\Delta t}-e^{-\gamma t})/[(\gamma+i\Delta)(1-e^{-\gamma t})]$; the normalized decay output has off-diagonal entry $ab^*\chi_d$. [[pthm-qec-distinguishability-decayed-coherence]]

[F4] At fixed parameters the stated syndrome recovery has loss $|a|^2|b|^2\gamma\Delta^2t^3/3+O(t^4)$ and exactly restores every code density operator when $\gamma=0$ or $\Delta=0$. [[pthm-qec-distinguishability-r4-cubic]]

[F5] The support-completed transpose recovery has the stated strict first-crossing asymptotic and the stated infinite checking times in the zero-parameter cases. [[pthm-qec-distinguishability-four-check-scaling]]

[F6] The exponential series has a controlled remainder; in particular, for real $x$, $|e^{ix}-1|\leq |x|e^{|x|}$. [[lem-qec-prereq-finite-taylor-control]]

[F7] For a finite-dimensional channel and a nonzero code, the transpose recovery uses the support inverse square root of the channel output of the code projector, with an arbitrary code-state completion on the orthogonal complement. This completion does not change recovery after noise on code inputs. [[def-qec-distinguishability-transpose-recovery]]

[F8] The complex exponential is differentiable everywhere with derivative itself, obeys $e^{z+w}=e^ze^w$, and agrees with the real exponential on real arguments. [[math:thm-complex-exponential-is-entire-with-derivative-itself]] [[math:thm-complex-exponential-addition-and-real-extension]]

[F9] A continuous real function on a finite closed interval has the Darboux (oriented Riemann) integral; this integral is monotone in continuous integrands and linear under real scalar combinations. [[math:lem-continuous-functions-riemann-integrable]] [[math:lem-riemann-integral-linearity]]

[F10] If a real primitive is differentiable at every point of a closed nondegenerate interval, using one-sided derivatives at its endpoints, and its derivative is Darboux integrable, the integral of the derivative is the endpoint difference. [[math:thm-ftc-second-part]]

[F11] For a quantum channel $\mathcal E$ on $\mathbb C^d$, its entanglement fidelity at the maximally mixed input $I/d$ is $F_e(\mathcal E)=\langle\Phi_d|({\rm id}\otimes\mathcal E)(|\Phi_d\rangle\langle\Phi_d|)|\Phi_d\rangle$, where $|\Phi_d\rangle=d^{-1/2}\sum_{j=0}^{d-1}|j\rangle\otimes|j\rangle$. [[def-qec-prereq-entanglement-fidelity]]

[F12] For an isometric encoding $V$ and a code-supported physical recovery channel $\mathcal T$, the decoded logical channel is $\mathcal E(X)=V^*\mathcal T(\mathcal N(VXV^*))V$. This is a channel on the logical space. [[def-qec-prereq-restricted-logical-channel]]

## Proof

**Given:** The model parameters, input, recovery and time in the statement.

**Goal:** Establish the phase bound and the stated fidelity and checking-time consequences.

1.1 Suppose $\gamma t>0$, so $\gamma>0$ and $t>0$, and put $p=1-e^{-\gamma t}>0$ and $z=\gamma+i\Delta\ne0$. Throughout this proof, the integral of a continuous complex function $f$ on $[0,t]$ means $\int_0^t\operatorname{Re}f(s)\,ds+i\int_0^t\operatorname{Im}f(s)\,ds$, with both real integrals taken in the Darboux convention of [F9]. It exists by [F9], and its complex linearity follows by expanding real and imaginary parts and using real linearity. The primitive $\Phi(s)=-\gamma e^{i\Delta t-zs}/z$ has derivative $\Phi'(s)=\gamma e^{-\gamma s}e^{i\Delta(t-s)}$: the derivative in [F8] on increments $-zh$ gives the factor $-z$, and its addition law separates the exponentials. The primitive and its derivative are continuous on $[0,t]$, and the same calculation gives the required one-sided endpoint derivatives. [given, F8, F9, algebra]

1.2 Apply [F4] to the normalized input and the recovery in [F1] and [F2]. Its fixed-parameter remainder means the loss tends to zero as $t\downarrow0$; its leading coefficient is proportional to $\Delta^2$ and is strictly increasing in $|\Delta|$ under the stated positivity conditions. The same supplier gives exact restoration in either zero-parameter case. [given, F1, F2, F4, algebra]

2.1 Apply [F10] separately to the real and imaginary components of $\Phi$; their derivatives are continuous and hence integrable by [F9]. This gives $\int_0^t\gamma e^{-\gamma s}e^{i\Delta(t-s)}\,ds=\Phi(t)-\Phi(0)=\gamma(e^{i\Delta t}-e^{-\gamma t})/z=p\chi_d$ by [F3]. Applying the same real theorem to the primitive $-e^{-\gamma s}$ gives $\int_0^t\gamma e^{-\gamma s}\,ds=p$. Thus $w(s)=\gamma e^{-\gamma s}/p$ is continuous and nonnegative, $\int_0^t w(s)\,ds=1$, and $\chi_d=\int_0^t w(s)e^{i\Delta(t-s)}\,ds$. [F3, F8, F9, F10, step 1.1, algebra]

3.1 Put $u=|\Delta|t$. By [F6], $|e^{i\Delta(t-s)}-1|\leq |\Delta|(t-s)e^{|\Delta|(t-s)}\leq u e^u$ for $0\leq s\leq t$. The continuous function $h(s)=w(s)(e^{i\Delta(t-s)}-1)$ therefore satisfies $|h(s)|\leq w(s)u e^u$, and step 2.1 and complex linearity give $J:=\int_0^t h(s)\,ds=\chi_d-1$. If $J=0$ the desired bound is immediate. Otherwise set $\alpha=\overline J/|J|$, so $|\alpha|=1$ and $\operatorname{Re}(\alpha J)=|J|$. The continuous real function $\operatorname{Re}(\alpha h(s))$ is at most $|h(s)|\leq w(s)u e^u$. Real monotonicity and linearity in [F9], together with the componentwise convention, give $|J|=\int_0^t\operatorname{Re}(\alpha h(s))\,ds\leq u e^u\int_0^t w(s)\,ds=u e^u$. Hence $|1-\chi_d|\leq u e^u$. This tends to zero whenever $u\to0$, independently of the positive value of $\gamma t$. For $\Delta\ne0$, $u$ becomes order one on the scale $1/|\Delta|$. [F6, F9, step 1.1, step 2.1, algebra]

4.1 The model in [F1] has a finite-dimensional channel and a nonzero code, so the recovery defined in [F7] applies. Identify the two code basis vectors with the standard basis of $\mathbb C^2$ and apply [F12] to the model channel and the code-supported recovery in [F7]. The resulting logical channel $\mathcal E_t$ satisfies the hypotheses of [F11] with $d=2$, so $F_{\rm tr}(t)=F_e(\mathcal E_t)$ at input $I_2/2$. Apply [F5] with those fixed parameters, that recovery, and the strict-crossing definition in the statement. It gives the cube-root asymptotic when $\gamma\Delta^2>0$ and an empty crossing set, hence infinite checking time, in either zero-parameter case. Its high-fidelity limit is a separate limit from the phase comparison in step 3.1. These conclusions establish the stated conditional version of gradual leakage and fast correction. [given, F1, F5, F7, F11, F12, step 3.1, step 1.2] ∎

## Source notes

Article attribution only: The article states that which-path information leaks gradually on the inverse-splitting timescale, that recoverable-fidelity loss grows with the shift, and that sufficiently fast correction restores near-perfect protection.

The article describes which-path information leaking gradually on an inverse-splitting scale and proposes faster correction as protection. The quantitative assertions above are restricted to the displayed model and recoveries; the phase bound alone does not quantify information in an environment.
