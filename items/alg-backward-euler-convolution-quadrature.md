---
id: alg-backward-euler-convolution-quadrature
kind: algorithm
title: Backward-Euler convolution quadrature for a Caputo equation
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-caputo-derivative-and-fractional-integral]
justified_by: [thm-backward-euler-cq-scalar-resolvent-stability]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: C. Lubich, Convolution Quadrature and Discretized Operational Calculus I, Numerische Mathematik 52 (1988), §1
      url: https://people.math.ethz.ch/~hiptmair/Seminars/CONVQUAD/Articles/LUB88.pdf
    - title: Ralf Hiptmair, Advanced Numerical Methods for Computational Science and Engineering, lecture notes (2023), §§3.3.2–3.3.3
      url: https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf
---

## Definition

Input $0<\alpha<1$, a step size $h>0$, an integer $N\ge1$, $\lambda\ge0$,
an initial value $u_0$, and forcing values $F^1,\ldots,F^N$. If any
admissibility condition fails, return `invalid-input`. Set $\omega_0=1$ and
compute $\omega_1,\ldots,\omega_N$ in increasing order by

$$\omega_j:=\frac{j-1-\alpha}{j}\,\omega_{j-1}.$$

Set $V^0=0$ and $U^0=u_0$. For $n=1,\ldots,N$ in increasing order, compute

$$V^n:=\frac{F^n-\lambda u_0-h^{-\alpha}\sum_{j=1}^n\omega_jV^{n-j}}{h^{-\alpha}+\lambda},\qquad U^n:=u_0+V^n.$$

For any sequence $V^0,\ldots,V^N$ with $V^0=0$, use the notation

$$\bar\partial_h^\alpha V^n:=h^{-\alpha}\sum_{j=0}^n\omega_jV^{n-j}.$$

Return $U^0,\ldots,U^N$. A finite-precision implementation that cannot
certify a scalar solve returns `solve-failed` without reporting a value. No
FFT or truncated-memory error claim is included.

## Remarks

The coefficient sequence is identified with the principal-branch
backward-Euler symbol in
[[lem-backward-euler-cq-principal-branch-generating-function]]. Its sign and
partial-sum bounds used for scalar stability are proved in
[[lem-backward-euler-cq-weights-and-partial-sums]].
