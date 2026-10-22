---
id: ex-nrqmx-amplitude-damping-jump-law
kind: example
title: Single excitation jump law
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - pthm-nrqmx-jump-unravelling-finite
  - pthm-nrqmx-amplitude-damping-model
  - def-nrqmx-finite-jump-trajectories
  - thm-complex-exponential-addition-and-real-extension
  - thm-exponential-limits-and-range
dependency_roles:
  pthm-nrqmx-jump-unravelling-finite: physical-result
  pthm-nrqmx-amplitude-damping-model: physical-result
  def-nrqmx-finite-jump-trajectories: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  thm-exponential-limits-and-range: mathematical-premise
proof_strategy: direct
physical_scope: "An ideal trajectory-ensemble calculation for an undriven qubit in the finite amplitude-damping GKSL model. It predicts a model waiting-time law and state update; it is not a reported detector observation."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Lin Lin and Nathan Wiebe, Quantum Algorithms for Scientific Computation, Chapter 21, §21.1"
      url: "https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf"
      locator: "Equation (21.1), printed p. 307, and Theorem 21.2, printed pp. 309–311: finite GKSL jump operators and channel dynamics."
---

## Example

In the normalized jump-branch ensemble for the finite amplitude-damping model, let $\gamma\geq0$ be in $\mathrm{s}^{-1}$ and take the initial qubit state $|1\rangle\langle1|$. The no-jump survival weight at time $t\geq0$ is $e^{-\gamma t}$. If $\gamma>0$, the ensemble assigns the first-jump time density $\gamma e^{-\gamma t}$ and post-jump state $|0\rangle\langle0|$; because there is no drive and $L|0\rangle=0$, there are no later jumps. If $\gamma=0$, no jump occurs and the survival weight is one. This is a model branch distribution, not a detector observation.

## Example references

[[pthm-nrqmx-jump-unravelling-finite]]

[[pthm-nrqmx-amplitude-damping-model]]

[[def-nrqmx-finite-jump-trajectories]]

## Facts & Assumptions

**Given:** The qubit amplitude-damping model, initial state $|1\rangle\langle1|$, and the finite jump-trajectory branch definition.

[F1] [[pthm-nrqmx-amplitude-damping-model]]: for $H=\hbar\omega|1\rangle\langle1|$ and $L=\sqrt{\gamma}|0\rangle\langle1|$, the excited-state population obeys $\rho_{11}(t)=e^{-\gamma t}\rho_{11}(0)$ with $t$ measured in seconds.

[F2] [[def-nrqmx-finite-jump-trajectories]]: the no-jump operator is $R(t)=e^{tK}$ with $K=-iH/\hbar-L^*L/2$, and a one-jump branch at time $s$ has operator $R(t-s)LR(s)$. Its branch-weight density is the real scalar trace of the branch state, integrated by the ordinary scalar Riemann integral; a degenerate interval has integral zero.

[F3] [[pthm-nrqmx-jump-unravelling-finite]]: the branch weights in the finite expansion form a normalized ensemble for each $t\geq0$.

[F4] [[thm-complex-exponential-addition-and-real-extension]]: on real arguments, the complex exponential used in the model formulas agrees with the real exponential $e^x$.

[F5] [[thm-exponential-limits-and-range]]: $e^x\to0$ as $x\to-\infty$.

## Verification

**Proof technique:** evaluate the zero-jump and one-jump branch operators on the two qubit basis states.

1.1 For $L=\sqrt{\gamma}|0\rangle\langle1|$, the no-jump generator is $K=\operatorname{diag}(0,-i\omega-\gamma/2)$. Hence $R(t)|1\rangle=e^{-(i\omega+\gamma/2)t}|1\rangle$ and $R(t)|0\rangle=|0\rangle$. For the initial state $|1\rangle\langle1|$, the no-jump branch weight is $\operatorname{Tr}(R(t)|1\rangle\langle1|R(t)^*)=e^{-\gamma t}$, equal to the excited population in [F1]. [given, F1, F2, algebra]

2.1 For $\gamma>0$ and a one-jump history at $s\in(0,T)$, $R(T-s)LR(s)|1\rangle=\sqrt{\gamma}\,e^{-(i\omega+\gamma/2)s}|0\rangle$, since $L|1\rangle=\sqrt{\gamma}|0\rangle$ and $R(T-s)|0\rangle=|0\rangle$. Its branch-weight density from [F2] is $\gamma e^{-\gamma s}$. Because $L|0\rangle=0$ and $R(u)|0\rangle=|0\rangle$, every branch with at least two jumps has zero weight. The normalized ensemble [F3] therefore gives $\int_0^T\gamma e^{-\gamma s}\,ds=1-e^{-\gamma T}$: the only nonzero contributions are the no-jump weight $e^{-\gamma T}$ from step 1.1 and the one-jump integral. Letting $T\to\infty$, [F4] identifies this as the real exponential and [F5] gives $e^{-\gamma T}\to0$ because $\gamma>0$; hence the first-jump density has total mass one. Each first jump leaves the normalized state $|0\rangle\langle0|$. If $\gamma=0$, then $L=0$, all positive-jump branches vanish, and the no-jump weight is one. [F2, F3, F4, F5, step 1.1, algebra] ∎

