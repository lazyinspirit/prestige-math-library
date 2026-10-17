---
id: thm-qsm-dt-finite-recurrence
kind: theorem
title: Arbitrarily late finite phase recurrences
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 3
deps:
  - thm-qsm-dt-finite-unitary
dependency_roles:
  thm-qsm-dt-finite-unitary: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ryogo Kubo, Statistical-Mechanical Theory of Irreversible Processes I, Journal of the Physical Society of Japan 12 (1957), §3
      url: https://staff.ulsu.ru/moliver/ref/kubo/kubo57.pdf
    - title: "MIT OpenCourseWare 8.512, Theory of Solids II, Lecture 1: Linear Response Theory, §1.1"
      url: https://ocw.mit.edu/courses/8-512-theory-of-solids-ii-spring-2009/0d1bb83b0e6471874b6c3e02aff52ad5_MIT8_512s09_lec01_rev2.pdf
---

## Statement

Let $H=H^*$ with energy unit J act on a finite-dimensional complex Hilbert space, let $\hbar>0$ have unit J s, and let $U(t)=e^{-itH/\hbar}$ for time $t$ measured in s. For every time unit $t_0>0$ measured in s, there is a sequence $t_n\to+\infty$ and phases $\lambda_n\in\mathbb C$, $|\lambda_n|=1$, such that $\|U(t_n)-\lambda_n I\|\to0$. Consequently, for every density matrix $\rho$ and bounded observable $A$, the expectation $\operatorname{Tr}(U(t_n)\rho U(t_n)^*A)$ tends to $\operatorname{Tr}(\rho A)$. If $H$ has only one distinct energy, exact recurrences occur at every time.

## Facts & Assumptions

**Given:** A finite-dimensional complex Hilbert space, $H=H^*$, $\hbar>0$, and a fixed $t_0>0$.

[F1] [[thm-qsm-dt-finite-unitary]]: the distinct real eigenvalues of $H$ define the spectral unitary group $U(t)=e^{-itH/\hbar}$.

## Proof


**Given:** The finite-dimensional spectrum and unitary group above.

1.1 If $H$ has one distinct energy $E_1$, then $U(t)=e^{-itE_1/\hbar}I$, which proves the exact-recurrence clause. Otherwise list its $r\ge2$ distinct energies as $E_1,\ldots,E_r$ and put $\theta_j=(E_j-E_1)t_0/(2\pi\hbar)$ for $2\le j\le r$. For each integer $M\ge1$, partition the torus $[0,1)^{r-1}$ into $M^{r-1}$ half-open cubes of side $1/M$ and consider the $M^{r-1}+1$ points $k\theta\bmod\mathbb Z^{r-1}$ for $0\le k\le M^{r-1}$. Two lie in the same cube, so their nonzero integer difference $q_M$ satisfies $1\le q_M\le M^{r-1}$ and each $q_M\theta_j$ is within $1/M$ of an integer. [given, F1, construct]


2.1 The eigenvalue phase ratios of $U(q_Mt_0)$ to its $E_1$ phase therefore differ from $1$ by at most $2\pi/M$, since $|e^{ix}-1|\le|x|$. Hence $\|U(q_Mt_0)-\lambda_MI\|\le2\pi/M$ for $\lambda_M=e^{-iq_ME_1t_0/\hbar}$. If the positive integers $q_M$ are unbounded, choose a subsequence tending to infinity; its times and phase errors give the required sequence. If they are bounded, some fixed positive integer $q$ occurs for arbitrarily large $M$; then every $q\theta_j$ is an integer, so $U(qt_0)=\lambda I$ exactly and its positive integer multiples give exact arbitrarily late recurrences. [step 1.1, algebra]


3.1 For any density $\rho$, the expectation difference is bounded by $\|U(t_n)^*AU(t_n)-A\|\le2\|A\|\|U(t_n)-\lambda_n I\|$, because scalar phases cancel in conjugation. The bound tends to zero by step 2.1. [step 2.1, algebra] ∎