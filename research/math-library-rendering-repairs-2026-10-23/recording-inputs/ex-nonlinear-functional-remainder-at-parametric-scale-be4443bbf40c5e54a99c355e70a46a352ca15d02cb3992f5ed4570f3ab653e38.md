---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-nonlinear-functional-remainder-at-parametric-scale.json
  precheck: pass
id: ex-nonlinear-functional-remainder-at-parametric-scale
kind: example
title: A quadratic remainder at an inverse fourth-root L2 radius
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - thm-nonlinear-functional-bvm-and-credible-coverage
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let $\Psi(f)=\|f\|_2^2$ at $f_0=1$. The derivative is nonzero, but the quadratic remainder is not negligible at perturbations of size $n^{-1/4}$: for any unit vector $v\in L^2$ and integers $n\ge1$, $h_n=n^{-1/4}v$ has $\sqrt n$-scaled remainder equal to $1$. This sequence does not satisfy the stronger radius premise in [[thm-nonlinear-functional-bvm-and-credible-coverage]].

## Facts & Assumptions

**Given:** $\Psi(f)=\langle f,f\rangle_{L^2}$, $f_0=1$, and $\|v\|_2=1$.

[F1] [[thm-nonlinear-functional-bvm-and-credible-coverage]]: its Taylor remainder must be uniformly quadratic near $f_0$, and its posterior $L^2$ radius must be $o(n^{-1/2})$ for the stated BvM conclusion.

## Verification

**Given:** The functional and unit vector in the Example.


1.1 Expanding the inner product gives $\Psi(f_0+h)=\|f_0\|_2^2+2\langle f_0,h\rangle_{L^2}+\|h\|_2^2$. Thus the derivative is $D\Psi_{f_0}[h]=2\langle1,h\rangle_{L^2}$, which is nonzero, and the remainder equals $\|h\|_2^2$. [given, algebra]

2.1 For integers $n\ge1$ and $h_n=n^{-1/4}v$, $\|h_n\|_2=n^{-1/4}$ and $\sqrt n\|h_n\|_2^2=1$. Hence the scaled quadratic remainder does not tend to zero along this sequence, so the linear approximation needed in [F1] is not justified at this radius. [F1, given, step 1.1, algebra] ∎
