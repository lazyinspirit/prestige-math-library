---
id: lem-qa-27-capped-lower-bound-amplification
kind: lemma
title: Finite amplification preserves the good state with a deterministic call cap
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - alg-qa-27-capped-lower-bound-amplification
  - lem-qa-12-amplification-plane-invariant
  - thm-qa-12-amplification-rotation-correctness
  - prop-qa-12-amplitude-access-cost-accounting
  - thm-qc-projective-measurement-outcome-law
  - thm-qc-projective-conditional-state
  - thm-qc-unit-vector-projector-is-density
  - def-qc-controlled-unitary-access
  - def-qc-circuit-cost-model
  - thm-sine-and-cosine-addition-formulas
  - thm-double-angle-and-power-reduction-identities
  - cor-trigonometric-parity-and-pythagorean-identity
  - thm-logarithm-derivative-and-integral
justified_by: []
proof_strategy: direct
axiom_use: "None; the schedule, randomness and branch tree are finite."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Andris Ambainis, Variable time amplitude amplification and a faster quantum algorithm for solving systems of linear equations"
      url: "https://arxiv.org/pdf/1010.4458"
---

## Statement

Under the inputs and promise of [[alg-qa-27-capped-lower-bound-amplification]], that finite procedure succeeds with probability at least $1-\beta$. Conditional on success, its returned register has exactly the density operator $|g\rangle\langle g|$, where $|g\rangle=PU|0\rangle/\sqrt p$. This includes all output and workspace registers of the original conditional good state.

Its deterministic caps are $2RM$ total calls to $U,U^\dagger$, $R(M-1)$ zero-input reflections and $R(M+1)$ good reflections, including the controlled good-reflection calls implementing at most two instruments per trial. It uses at most $R\log_2M$ unbiased random bits. Consequently its primitive-call cap is $O(p_0^{-1/2}(1+\ln(1/\beta)))$, or $O(p_0^{-1/2}\ln(1/\beta))$ when $\beta\le1/2$. Query calls, gates, initialization, instruments, control variants and classical preprocessing are separately charged.

## Facts & Assumptions

**Given:** The finite schedule, fresh operations, access capabilities and rational parameters of the algorithm.

[F1] [[alg-qa-27-capped-lower-bound-amplification]] specifies $M,R$, direct attempts, independent uniform indices and the explicit failure branch.

[F2] [[lem-qa-12-amplification-plane-invariant]] and [[thm-qa-12-amplification-rotation-correctness]] give the invariant-plane rotation and success probability $\sin^2((2j+1)\theta)$ when $p=\sin^2\theta$.

[F3] [[thm-qc-projective-measurement-outcome-law]], [[thm-qc-projective-conditional-state]] and [[thm-qc-unit-vector-projector-is-density]] give the outcome probabilities and normalized density operator on positive-probability branches.

[F4] [[thm-sine-and-cosine-addition-formulas]], [[thm-double-angle-and-power-reduction-identities]] and [[cor-trigonometric-parity-and-pythagorean-identity]] give sine addition, $\sin^2x=(1-\cos(2x))/2$ and $|\sin x|\le1$.

[F5] [[prop-qa-12-amplitude-access-cost-accounting]], [[def-qc-controlled-unitary-access]] and [[def-qc-circuit-cost-model]] separately charge the four factors of an iterate, control variants and gate/classical work.

[F6] [[thm-logarithm-derivative-and-integral]] gives the increasing natural logarithm on positive reals and its integral formula.

## Proof


1.1 For $0<p<1$, write $U|0\rangle=\cos\theta|h\rangle+\sin\theta|g\rangle$, where $0<\theta<\pi/2$. By [F2], $Q^jU|0\rangle=\cos((2j+1)\theta)|h\rangle+\sin((2j+1)\theta)|g\rangle$. On every positive-probability good branch its projection is a scalar multiple of $|g\rangle$, so [F3] gives exactly $|g\rangle\langle g|$. Direct attempts give the same conditional state. If $p=1$, every direct attempt succeeds and returns this state; no zero-probability component is normalized. [given, F2, F3, algebra]

1.2 For $0<p<1$, sine addition in [F4] gives $\sin((4j+4)\theta)-\sin(4j\theta)=2\cos((4j+2)\theta)\sin(2\theta)$. Summing over $j=0,\ldots,M-1$ and using $\sin(2\theta)>0$ gives $\sum_j\cos((4j+2)\theta)=\sin(4M\theta)/(2\sin(2\theta))$. Thus the mean success probability of the uniform-index attempt is $a_M=1/2-\sin(4M\theta)/(4M\sin(2\theta))\ge1/2-1/(4M\sin(2\theta))\ge1/2-1/(2M\sin(2\theta))$. [given, F2, F4, algebra]

1.3 A trial has at most two preparations and $M-1$ iterates. By [F5], it uses at most $M+1$ forward calls, $M-1$ inverse calls, $M-1$ zero reflections and $M-1$ iterate good reflections. Each of at most two instruments adds one controlled good reflection: on a vector $v$, the control construction has joint state $|0\rangle\otimes(I-P)v+|1\rangle\otimes Pv$ immediately before measurement, which is exactly the required instrument. Thus the displayed per-trial caps hold, and only the second attempt draws $\log_2M$ random bits. [given, F1, F3, F5, algebra]

2.1 If $0<p<3/4$, then $\sin(2\theta)=2\sqrt{p(1-p)}\ge\sqrt p\ge\sqrt{p_0}$. Since $M\ge2/\sqrt{p_0}$, step 1.2 implies $a_M\ge1/4$. The whole trial succeeds with probability $p+(1-p)a_M\ge a_M\ge1/4$. For $3/4\le p\le1$ the direct attempt succeeds with probability at least $3/4$. Hence every promised input has trial success probability at least $1/4$. [given, F1, F4, step 1.2, algebra]

3.1 Conditional on any preceding failures, freshness leaves the next trial's success probability at least $1/4$. Finite induction bounds total failure by $(3/4)^R\le\beta$. Every successful branch returns the state of step 1.1; summing its scalar branch weights and dividing by total success probability therefore gives the same density operator, even after forgetting the index, stopping trial and earlier failure outcomes. [given, F1, F3, step 1.1, step 2.1, induction, algebra]

4.1 Minimality of the power of two $M$ gives $2/\sqrt{p_0}\le M<4/\sqrt{p_0}$. Also $R\le1+\ln(1/\beta)/\ln(4/3)$, by applying [F6] to $(3/4)^R\le\beta$ and the minimal positive integer choice. Multiplying the finite per-trial counts by $R$ proves the call and randomness caps and their asymptotic bounds. [given, F1, F6, step 1.3, algebra] ∎

## Remarks

For gate costs $C_U,C_{\rm inv},C_0,C_g$ of the supplied implementations, with $C_g$ covering both used good-reflection control variants and instrument ancilla overhead charged explicitly, the quantum gate cap is $R((M+1)C_U+(M-1)C_{\rm inv}+(M-1)C_0+(M+1)C_g+O(\log M))$. Register initialization is included in its actual supplied preparation cost. Binary counters and comparisons admit $O(RM\log M)$ elementary classical bit operations; exact arithmetic constructing $M,R$ is separate finite preprocessing. A padded coherent circuit implementation must use and charge the supplied controlled operations. The logarithmic bound retains an additive $1$ for $\beta$ arbitrarily close to $1$.
