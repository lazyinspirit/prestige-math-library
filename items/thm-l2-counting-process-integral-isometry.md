---
id: thm-l2-counting-process-integral-isometry
kind: theorem
title: "L² extension of the predictable counting-process integral"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-counting-process-intensity-and-compensator-contract
  - def-elementary-predictable-counting-process-integral
  - def-l2-counting-process-integral
  - lem-elementary-counting-process-integral-isometry
  - lem-predictable-step-processes-dense-in-compensator-l2
  - thm-riesz-fischer-completeness-of-l-p
  - cor-conditional-lp-contraction
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Richard F. Bass, SDEs with Jumps, Section 2.5, PDF p. 5"
      url: "https://sites.math.duke.edu/~rtd/CPSS2007/Basscornell.pdf"
    - title: "Lu Tian, STAT331 Unit 10: Combining Martingales, Stochastic Integrals, and Applications, PDF p. 5"
      url: "https://web.stanford.edu/~lutian/coursepdf/martingale3.pdf"

---

## Statement

For every predictable $H$ on $[0,T]$ with
$\mathbb E\int_0^T H_s^2\,dA_s<\infty$, the limit in
[[def-l2-counting-process-integral]] exists at each $t\le T$, is independent
of the approximating step sequence, and defines a square-integrable
martingale. It satisfies, for each $t\le T$,
$$\mathbb E\left(\int_0^tH_s\,dM_s\right)^2=\mathbb E\int_0^tH_s^2\,dA_s.$$

## Facts & Assumptions

**Given:** The finite-horizon counting-process contract, a predictable real $H$, and finite energy $\mathbb E\int_0^T H_s^2dA_s<\infty$.

[F1] Bounded predictable step integrals are martingales and satisfy the elementary isometry. ([[lem-elementary-counting-process-integral-isometry]])

[F2] Bounded predictable step processes are dense in the compensator $L^2$ norm. ([[lem-predictable-step-processes-dense-in-compensator-l2]])

[F3] $L^2$ is complete for each measure space, including $(\Omega,\mathcal F_t,P|_{\mathcal F_t})$; thus an $L^2$-Cauchy sequence of $\mathcal F_t$-measurable classes has an $\mathcal F_t$-measurable limit. ([[thm-riesz-fischer-completeness-of-l-p]])

[F4] Conditional expectation is an $L^2$ contraction. ([[cor-conditional-lp-contraction]])

[F5] The integral notation denotes the $L^2$ limits of elementary integrals when those limits exist. ([[def-l2-counting-process-integral]])

[A1] AC is inherited from the conditional-expectation and $L^2$ interfaces. ([[def-axiom-of-choice]])

## Proof

1.1 By [F2], choose bounded predictable step processes $H_n$ with $\mathbb E\int_0^T|H_n-H|^2dA\to0$. For any $m,n$, [F1] gives $\mathbb E|I_T(H_n)-I_T(H_m)|^2=\mathbb E\int_0^T|H_n-H_m|^2dA$, so terminal integrals are Cauchy in $L^2(P)$; the same estimate on $[0,t]$ gives the Cauchy property at every $t\le T$. [F3] gives a unique full-space limit and, since every $I_t(H_n)$ is $\mathcal F_t$-measurable, also an $\mathcal F_t$-measurable limit at each fixed $t$; uniqueness makes these the same $L^2$ class. [A1, F1, F2, F3, given, choose]

2.1 If $K_n$ is another step sequence converging to $H$, then $\mathbb E\int_0^T|H_n-K_n|^2dA\to0$. Applying [F1] to $H_n-K_n$ makes the terminal limits and each fixed-time limit equal in $L^2$, so the limits in [F5] are independent of approximation. [F1, F2, F5, step 1.1]

2.2 Norm continuity and [F1] give, for every $t\le T$, $\mathbb E|I_t(H)|^2=\lim_n\mathbb E|I_t(H_n)|^2=\lim_n\mathbb E\int_0^tH_{n,s}^2dA_s=\mathbb E\int_0^tH_s^2dA_s$. This proves square integrability and the isometry. [F1, step 1.1, algebra]

3.1 For $s\le t$, [F1] gives $\mathbb E[I_t(H_n)\mid\mathcal F_s]=I_s(H_n)$. By [F4], conditional expectations converge in $L^2$ to $\mathbb E[I_t(H)\mid\mathcal F_s]$, while $I_s(H_n)\to I_s(H)$ in $L^2$ by step 1.1; uniqueness of limits yields $\mathbb E[I_t(H)\mid\mathcal F_s]=I_s(H)$. Hence the extension is a square-integrable martingale, with no claim for predictable integrands of infinite compensator energy. [A1, F1, F4, step 1.1, step 2.1] ∎

## Source notes

Bass describes the $L^2$ completion for predictable jump-martingale
integrands; Tian states the counting-process martingale and bracket results.
The local density lemma and elementary isometry above provide the full
completion proof for the finite-energy domain used here.


