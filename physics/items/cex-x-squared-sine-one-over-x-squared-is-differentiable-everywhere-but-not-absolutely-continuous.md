---
id: cex-x-squared-sine-one-over-x-squared-is-differentiable-everywhere-but-not-absolutely-continuous
kind: counterexample
title: '$x^2\sin(1/x^2)$ is differentiable everywhere but not absolutely continuous'
status: published
origin: pipeline
deps: [thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-c1-lipschitz-ac-bv-hierarchy]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., §6.3, Exercise 6"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement refuted

Every everywhere-differentiable function on $[0,1]$ is absolutely continuous.

## Facts & Assumptions

**Given:** $F(0)=0$ and $F(x)=x^2\sin(1/x^2)$ for $0<x\le1$.

## Counterexample

**Proof technique:** direct.

1.1 The difference quotient at $0$ is $x\sin(1/x^2)$, which tends to $0$; for $x>0$, $F'(x)=2x\sin(1/x^2)-2\cos(1/x^2)/x$. Thus $F$ is differentiable everywhere. [given, algebra]

2.1 Put $x_n=(\pi/2+n\pi)^{-1/2}$. Then $F(x_n)=(-1)^nx_n^2$, and the finite partitions containing $x_N<x_{N-1}<\cdots<x_0$ have variation at least $\sum_{n<N}(x_n^2+x_{n+1}^2)$. This diverges as $N\to\infty$, so $F$ is not of bounded variation. [step 1.1, algebra]

3.1 Every absolutely continuous function has bounded variation by [[thm-c1-lipschitz-ac-bv-hierarchy]]. Therefore $F$ is not absolutely continuous. [step 2.1] ∎
