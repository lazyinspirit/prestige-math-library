---
id: alg-backward-euler-convolution-quadrature
kind: algorithm
title: Backward-Euler convolution quadrature for a Caputo equation
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-caputo-derivative-and-fractional-integral]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: C. Lubich, Convolution Quadrature and Discretized Operational Calculus I, Numerische Mathematik 52 (1988), §1
      url: https://people.math.ethz.ch/~hiptmair/Seminars/CONVQUAD/Articles/LUB88.pdf
    - title: Ralf Hiptmair, Advanced Numerical Methods for Computational Science and Engineering, lecture notes (2023), §§3.3.2–3.3.3
      url: https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf
---

## Definition

Input $0<\alpha<1$, a step size $h>0$, an integer $N\ge1$, $\lambda\ge0$,
an initial value $u_0$, and forcing values $F^1,\ldots,F^N$. Define
$\omega_0=1$ and, for $j\ge1$,

$$\omega_j:=\frac{j-1-\alpha}{j}\,\omega_{j-1}.$$

Put $V^0=0$. For $n=1,\ldots,N$, compute

$$V^n:=\frac{F^n-\lambda u_0-h^{-\alpha}\sum_{j=1}^n\omega_jV^{n-j}}{h^{-\alpha}+\lambda},\qquad U^n:=u_0+V^n.$$

Equivalently, the discrete Caputo derivative is

$$\bar\partial_h^\alpha V^n:=h^{-\alpha}\sum_{j=0}^n\omega_jV^{n-j},$$

and the recurrence solves $\bar\partial_h^\alpha V^n+\lambda V^n=F^n-\lambda u_0$.
Since $h^{-\alpha}+\lambda>0$,
the exact-real scalar solve is nonsingular. Invalid parameters return
`invalid-input`; a finite-precision implementation that cannot certify the
solve returns `solve-failed` without reporting a value. The direct full-history
implementation uses $N(N+1)/2$ convolution terms and stores $N+1$ values; no
FFT or truncated-memory error claim is included.

## Remarks

The coefficient sequence is identified with the principal-branch
backward-Euler symbol in
[[lem-backward-euler-cq-principal-branch-generating-function]]. Its sign and
partial-sum bounds used for scalar stability are proved in
[[lem-backward-euler-cq-weights-and-partial-sums]].
