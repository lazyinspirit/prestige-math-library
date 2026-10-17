---
id: thm-midpoint-bit-stream-coupling-and-error
kind: theorem
title: "Midpoint bit discretization has bounded coupling and CDF error"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - thm-independent-fair-bit-streams-produce-uniforms
  - def-total-variation-distance-for-probability-laws
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Luc Devroye, Non-Uniform Random Variate Generation, Chapter XV §1, The Random Bit Model"
      url: "https://luc.devroye.org/chapter_fifteen.pdf"
---

## Statement

Assume Countable Choice and Dependent Choice as in [[thm-independent-fair-bit-streams-produce-uniforms]]. Let $U=\sum_{j\ge1}B_j2^{-j}$ be the uniform variable from an independent fair-bit stream. For $b\ge1$, put
$$K_b=\sum_{j=1}^b B_j2^{b-j},\qquad U_b=(K_b+1/2)2^{-b},\qquad \delta_b=2^{-b-1}.$$
Then $K_b$ is uniform on $\{0,\ldots,2^b-1\}$, $|U-U_b|\le\delta_b$ pointwise, the 1-Wasserstein and Kolmogorov distances between their laws are at most $\delta_b$, and their total-variation distance is exactly $1$. We use $W_1(\mu,\nu)=\inf\mathbb E|X-Y|$ over couplings, $d_K(\mu,\nu)=\sup_x|F_\mu(x)-F_\nu(x)|$, and $d_{\rm TV}(\mu,\nu)=\sup_A|\mu(A)-\nu(A)|$.

## Facts & Assumptions

**Given:** An independent fair-bit stream, a bit budget $b\ge1$, and the definitions in the Statement.

[F1] The bit-stream sum $U$ is uniform on $[0,1]$, and every finite bit prefix is uniform. [[thm-independent-fair-bit-streams-produce-uniforms]]

[F2] For probability laws, total variation here is the supremum of absolute event-probability differences. [[def-total-variation-distance-for-probability-laws]]

[F3] Every half-open or closed interval has Lebesgue measure equal to its length, including degenerate intervals. [[thm-lebesgue-measure-of-a-box-of-every-kind]]

[A1] The uniform law in [F1] is Lebesgue measure on $[0,1]$; its CDF and strict CDF are both the clipped identity $x\mapsto\min(1,\max(0,x))$ by [F3]. Countable Choice is the assumption of [F3]. [[def-countable-choice]]

[A2] The fair-bit product source in [F1] assumes Countable Choice and Dependent Choice. [[def-countable-choice]], [[def-dependent-choice]]

## Proof

1.1 The first $b$ independent fair bits give each of the $2^b$ binary prefixes probability $2^{-b}$, so $K_b$ is uniform on the stated integer set. Write the remaining binary tail as $T_b=\sum_{j\ge1}B_{b+j}2^{-j}\in[0,1]$. Then $U=K_b2^{-b}+2^{-b}T_b$, while $U_b=K_b2^{-b}+2^{-b-1}$, hence $|U-U_b|=2^{-b}|T_b-1/2|\le2^{-b-1}$. [given, F1, A2, algebra]

2.1 The displayed coupling gives $W_1(\mathcal L(U),\mathcal L(U_b))\le\mathbb E|U-U_b|\le\delta_b$ by the infimum definition of $W_1$. For non-strict CDFs, $\{U\le x-\delta_b\}\subseteq\{U_b\le x\}\subseteq\{U\le x+\delta_b\}$; for strict CDFs, $\{U<x-\delta_b\}\subseteq\{U_b<x\}\subseteq\{U<x+\delta_b\}$. Since both uniform CDFs equal the clipped identity by [A1], these inclusions bound each absolute discrepancy by $\delta_b$. [step 1.1, F1, F3, A1, algebra]

3.1 The law of $U_b$ is supported on its finite midpoint grid, which has probability $1$ under $U_b$ and probability $0$ under the continuous uniform law of $U$. By [F2], this event gives $d_{\rm TV}(\mathcal L(U),\mathcal L(U_b))=1$, the maximal possible value. [F1, F2, step 1.1] ∎
