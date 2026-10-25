---
id: lem-bounded-predictable-counting-integral-pathwise-identity
kind: lemma
title: "Pathwise identity for bounded predictable counting-process integrals"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
deps:
  - cor-cauchy-schwarz-inequality-for-l-two
  - def-axiom-of-choice
  - def-counting-process-intensity-and-compensator-contract
  - def-elementary-predictable-counting-process-integral
  - def-progressively-measurable-and-predictable-process
  - lem-predictable-step-processes-dense-in-compensator-l2
  - thm-dynkin-pi-lambda
  - thm-l2-counting-process-integral-isometry
  - thm-monotone-convergence-for-the-integral
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Richard F. Bass, SDEs with Jumps, Sections 2.4–2.5, PDF pp. 5–6"
      url: "https://sites.math.duke.edu/~rtd/CPSS2007/Basscornell.pdf"
dependency_level: 6
---

## Statement

Under [[def-counting-process-intensity-and-compensator-contract]], for every nonnegative predictable $G$,
$$E\int_{(0,T]}G_t\,dN_t=E\int_0^T G_t\,dA_t.$$
For every bounded real predictable $H$, the L²-completed stochastic integral equals the pathwise finite-variation expression almost surely:
$$\int_0^T H_t\,dM_t=\sum_{0<t\le T}H_t\Delta N_t-\int_0^T H_t\,dA_t,\qquad M=N-A.$$
The identity holds at every fixed terminal time and coordinatewise for vector or matrix integrands. No left continuity of $H$ is assumed.

## Facts & Assumptions

**Given:** The finite-horizon square-integrable counting-process contract, $N_0=A_0=0$, continuous predictable $A$, and $EA_T<\infty$; $G$ is nonnegative predictable and $H$ is bounded predictable.

[F1] [[def-counting-process-intensity-and-compensator-contract]]: $M=N-A$ is a square-integrable martingale, $N$ has finitely many unit jumps, and $A$ is continuous with finite expectation.

[F2] [[def-progressively-measurable-and-predictable-process]]: time-zero sets and rectangles $(s,t]\times B$, $B\in\mathcal F_s$, generate the predictable sigma-algebra and, with the whole space, form a pi-system.

[F3] [[thm-dynkin-pi-lambda]]: two finite measures agreeing on a generating pi-system and the whole space agree on its generated sigma-algebra.

[F4] [[thm-monotone-convergence-for-the-integral]]: nonnegative increasing integrals converge to the integral of the limit.

[F5] [[lem-predictable-step-processes-dense-in-compensator-l2]]: bounded predictable steps are dense for $E\int H^2dA$.

[F6] [[def-elementary-predictable-counting-process-integral]]: a step integral is the finite sum of measurable coefficients times increments of $M$.

[F7] [[thm-l2-counting-process-integral-isometry]]: step approximation in compensator L² gives the unique completed integral and its isometry.

[F8] [[cor-cauchy-schwarz-inequality-for-l-two]]: on every measure space, $\int|fg|d\mu\le\|f\|_2\|g\|_2$ for square-integrable $f,g$.

[A1] AC is inherited through the martingale and density interfaces. [[def-axiom-of-choice]]

## Proof

1.1 The martingale property gives $EN_T=EA_T<\infty$. For a predictable set $E$, define $\mu_N(E)=E\int1_EdN$ and $\mu_A(E)=E\int1_EdA$. Measurability of the section integrals holds first for the generators in [F2] (their integrals are $1_B(N_t-N_s)$ and $1_B(A_t-A_s)$), then for all predictable sets: the sets with measurable section integrals form a lambda-system, using subtraction from finite terminal masses and increasing partial sums for disjoint unions. Apply [F3] to this generating pi-system. Pathwise countable additivity and [F4] now make $\mu_N,\mu_A$ finite measures. For an interval generator, $E[1_B(M_t-M_s)]=0$ by the martingale property, so their masses agree; time-zero masses are both zero and whole-space masses agree. [F3] gives $\mu_N=\mu_A$. Simple functions and [F4] yield the compensation identity for every nonnegative predictable $G$. [F1, F2, F3, F4, given, construct]

2.1 By [F5] choose bounded predictable steps $H_m$ with $E\int|H_m-H|^2dA\to0$. Step 1.1 and [F8] give $$E\int|H_m-H|\,d(N+A)=2E\int|H_m-H|\,dA\le2(EA_T)^{1/2}\left(E\int|H_m-H|^2dA\right)^{1/2}\longrightarrow0.$$ For steps, [F6] identifies the integral with the difference of its pathwise $N$ and $A$ integrals. The displayed bound makes those differences converge in L¹ to the stated pathwise expression. By [F7] the same step integrals converge in L², hence L¹ on the probability space, to the completed stochastic integral. Uniqueness of L¹ limits proves equality almost surely. Apply this argument separately to each fixed terminal time and each of the finitely many coordinates. [A1, F5, F6, F7, F8, step 1.1, choose, algebra] ∎

## Source notes

Bass uses a predictable monotone-class argument for finite-variation jump integrals and defines stochastic integrals by step approximation in L². The local proof above supplies the compensation measure and the L¹ identification needed for arbitrary bounded predictable Cox covariates; it does not import a semimartingale existence theorem.
