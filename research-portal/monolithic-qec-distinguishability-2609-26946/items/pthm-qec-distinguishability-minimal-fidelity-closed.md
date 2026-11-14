---
id: pthm-qec-distinguishability-minimal-fidelity-closed
kind: physics-theorem
domain: physics
title: Minimal-code closed fidelity and checking time
status: published
origin: session
deps:
  - pthm-qec-distinguishability-minimal-code-errors
  - post-qec-distinguishability-equal-rate-model
  - def-qec-distinguishability-minimal-code
  - def-qec-distinguishability-checking-time
  - def-qec-distinguishability-transpose-recovery
  - def-qec-prereq-entanglement-fidelity
  - math:def-natural-logarithm
  - math:thm-exponential-is-strictly-increasing
  - math:thm-exponential-limits-and-range
  - math:thm-logarithm-derivative-and-integral
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
dependency_roles:
  pthm-qec-distinguishability-minimal-code-errors: physical-result
  post-qec-distinguishability-equal-rate-model: physical-assumption
  def-qec-distinguishability-minimal-code: formulation-prerequisite
  def-qec-distinguishability-checking-time: formulation-prerequisite
  def-qec-distinguishability-transpose-recovery: formulation-prerequisite
  def-qec-prereq-entanglement-fidelity: mathematical-premise
  math:def-natural-logarithm: mathematical-premise
  math:thm-exponential-is-strictly-increasing: mathematical-premise
  math:thm-exponential-limits-and-range: mathematical-premise
  math:thm-logarithm-derivative-and-integral: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-dependent-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 2, paragraph following Eq. (4), for the decay probability; PDF
        p. 17, Fig. S5.2 caption, for the minimal-code formulas
      statement: At zero lift the minimal code has exactly $1-F_{\rm tr}=3p_{\rm
        decay}/4$, where $p_{\rm decay}=1-e^{-\gamma t}$, and the caption gives
        the corresponding logarithmic checking time and high-fidelity
        approximation.
      hypotheses: The article's minimal-code, zero-lift, equal-rate model and the
        high-fidelity targets discussed in the caption.
      reading_limits: Read the supplied extracted text and inspected the PDF page
        images at pp. 2 and 17. This reference attributes the decay-probability
        convention and caption formulas; no figure measurement or numerical
        replication is claimed. The local deduction uses the declared suppliers,
        not the article's statement as proof.
physical_scope: Conditional prediction of the idealized finite equal-rate
  downward-jump model, not a laboratory observation.
formulation_deps:
  - pthm-qec-distinguishability-minimal-code-errors
  - post-qec-distinguishability-equal-rate-model
  - def-qec-distinguishability-minimal-code
  - def-qec-distinguishability-checking-time
  - def-qec-distinguishability-transpose-recovery
  - def-qec-prereq-entanglement-fidelity
  - math:def-natural-logarithm
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
argument_deps:
  - pthm-qec-distinguishability-minimal-code-errors
  - post-qec-distinguishability-equal-rate-model
  - def-qec-distinguishability-minimal-code
  - def-qec-distinguishability-checking-time
  - def-qec-distinguishability-transpose-recovery
  - def-qec-prereq-entanglement-fidelity
  - math:def-natural-logarithm
  - math:thm-exponential-is-strictly-increasing
  - math:thm-exponential-limits-and-range
  - math:thm-logarithm-derivative-and-integral
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
dependency_level: 17
---

## Statement

Adopt the finite equal-rate, zero-temperature downward-jump benchmark with $\gamma>0$, at zero lift, and all physical, spectral and choice hypotheses of [[pthm-qec-distinguishability-minimal-code-errors]]. The minimal code is the two-dimensional span of $|1,-1\rangle$ and $|1,1\rangle$. For its channel-specific transpose recovery, let $F_{\rm tr}(t)$ be the entanglement fidelity at the maximally mixed logical input. Then, for $t\geq0$, $1-F_{\rm tr}(t)=3p_{\rm decay}(t)/4$, where $p_{\rm decay}(t)=1-e^{-\gamma t}$.

For a target $F_0\in(0,1]$, define the checking time as $\tau(F_0)=\inf\{t\geq0:F_{\rm tr}(t)<F_0\}$, with $\inf\varnothing=+\infty$. If $1/4<F_0\leq1$, then $\tau(F_0)=-\gamma^{-1}\log[1-\frac43(1-F_0)]$. If $0<F_0\leq1/4$, then $\tau(F_0)=+\infty$. As $F_0\uparrow1$ through values below $1$, $\tau(F_0)\sim4(1-F_0)/(3\gamma)$.

## Facts & Assumptions

[F1] Under the stated finite benchmark and the full hypotheses of the minimal-code result, including its fixed effective jumps and inherited choice assumptions, the recovered logical channel has entanglement fidelity $F_{\rm tr}(t)=(1+3e^{-\gamma t})/4$. [[pthm-qec-distinguishability-minimal-code-errors]] [[post-qec-distinguishability-equal-rate-model]]

[F2] The minimal code uses the orthonormal logical basis $|1,-1\rangle,|1,1\rangle$; entanglement fidelity is the maximally entangled-state overlap for the recovered logical channel. [[def-qec-distinguishability-minimal-code]] [[def-qec-prereq-entanglement-fidelity]]

[F3] The checking time is the infimum of the strict below-target set, with the empty-set convention in the Statement. [[def-qec-distinguishability-checking-time]]

[F4] The exponential is strictly increasing, positive and tends to zero at minus infinity. The natural logarithm is its inverse on the positive reals. [[math:thm-exponential-is-strictly-increasing]] [[math:thm-exponential-limits-and-range]] [[math:def-natural-logarithm]]

[F5] The logarithm is differentiable at every positive real $x$, with derivative $1/x$. [[math:thm-logarithm-derivative-and-integral]]

[A1] Assume the Axiom of Choice, Countable Choice and Dependent Choice carried by the minimal-code supplier. [[math:def-axiom-of-choice]] [[math:def-countable-choice]] [[math:def-dependent-choice]]

## Proof

**Given:** The zero-lift benchmark and the hypotheses and target in the Statement.

**Goal:** Establish the fidelity, all stated checking-time cases and the high-fidelity asymptotic.

1.1 The minimal-code result applies at zero lift. Subtracting its fidelity from one yields $1-F_{\rm tr}(t)=3(1-e^{-\gamma t})/4=3p_{\rm decay}(t)/4$. The fidelity and code are those specified in the Statement. [given, F1, F2, algebra]

2.1 Put $q=(4F_0-1)/3$. If $1/4<F_0<1$, then $0<q<1$, and the strict crossing condition is $e^{-\gamma t}<q$. By the inverse and strict monotonicity in [F4], this is equivalent to $t>-\log(q)/\gamma$. Thus the crossing set has that boundary as its infimum. If $F_0=1$, the crossing set is $(0,\infty)$ and its infimum is zero, which is also the displayed logarithmic expression. If $0<F_0\leq1/4$, positivity of the exponential makes $F_{\rm tr}(t)>1/4$ at every finite $t$; the crossing set is empty and its infimum is $+\infty$. [given, F3, F4, step 1.1, algebra]

3.1 Set $\epsilon=1-F_0$. As $\epsilon\downarrow0$, the logarithm's derivative at $1$ is $1$ and $\log 1=0$. Consequently $\log(1-4\epsilon/3)/(-4\epsilon/3)\to1$. Substitution into step 2.1 proves $\tau(1-\epsilon)\sim4\epsilon/(3\gamma)$. [F4, F5, step 2.1, algebra] ∎
